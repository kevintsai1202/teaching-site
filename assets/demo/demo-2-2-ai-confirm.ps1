#Requires -Version 7
<#
.SYNOPSIS
  2-2 講師示範：AI 客服「先詢問、下一則訊息確認才執行」——「幫我結帳 -> 確定」與「幫我結帳 -> 不要」兩條路徑。

.DESCRIPTION
  會真的呼叫模型（每則訊息約 5～30 秒，回覆文字每次不同），所以判斷成功與否一律看「資料」：
    路徑一（確定）：幫我結帳 -> 檢查庫存、購物車、訂單都沒變 -> 確定 -> 檢查多了一筆訂單、庫存扣 1、購物車清空
    路徑二（不要）：幫我結帳 -> 不要，我再想想 -> 檢查沒有新訂單、購物車還在
  有提供 -BackendLog（後端日誌檔）時，每則訊息後印出這段期間的 [工具呼叫]、[待確認] 日誌，
  讓學員看到「幫我結帳」只呼叫 prepareCheckout，「確定」才呼叫 confirmPendingAction。
  結束時一定清理（含中途失敗）：取消本腳本建立的訂單（退回庫存）、清空購物車；
  有資料庫容器時刪掉這些已取消的訂單；最後比對庫存與開始前一致。

.EXAMPLE
  pwsh -File .\demo-2-2-ai-confirm.ps1 -BackendLog ..\backend\logs\backend.log
.EXAMPLE
  pwsh -File .\demo-2-2-ai-confirm.ps1 -Path Decline -PgContainer rehearsal2-postgres
.EXAMPLE
  pwsh -File .\demo-2-2-ai-confirm.ps1 -Path Confirm -ConfirmText 確定   # 示範單獨回「確定」時模型可能重列摘要
#>
param(
    [string]$BaseUrl = 'http://localhost:8080',
    [string]$UserName = 'user',
    [string]$UserPassword = 'user123',
    # 放進購物車的商品 id（預設機械鍵盤）
    [long]$ProductId = 3,
    # 要示範哪條路徑：Both（兩條都跑）、Confirm（確定）、Decline（不要）
    [ValidateSet('Both', 'Confirm', 'Decline')]
    [string]$Path = 'Both',
    # 路徑一回覆的確認句。課前實測單獨回「確定」時，模型有時會再呼叫一次 prepareCheckout 重列摘要
    # （對話記憶累積越多越常見）；「確定，請結帳」較穩定。想示範這個現象就改成 -ConfirmText 確定
    [string]$ConfirmText = '確定，請結帳',
    # 後端日誌檔（例如用 mvn spring-boot:run 2>&1 | Tee-Object logs/backend.log 啟動時的檔案）；留空就不印日誌
    [string]$BackendLog = '',
    # PostgreSQL 容器與資料庫（只用來刪除本腳本建立、已取消的訂單；找不到就略過）
    [string]$PgContainer = 'spring-postgres',
    [string]$Database = 'learn_spring'
)

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$created = [System.Collections.Generic.List[string]]::new()   # 本腳本建立的訂單編號
$checks = [System.Collections.Generic.List[object]]::new()    # 每項資料檢查的結果

<# 呼叫 API，回傳 { Status, Body } #>
function Invoke-Api {
    param([string]$Method, [string]$Path, $Body)
    $p = @{ Method = $Method; Uri = "$BaseUrl$Path"; SkipHttpErrorCheck = $true; StatusCodeVariable = 'code'; Headers = @{ Authorization = "Bearer $token" } }
    if ($null -ne $Body) { $p.ContentType = 'application/json; charset=utf-8'; $p.Body = ($Body | ConvertTo-Json -Compress) }
    $b = Invoke-RestMethod @p
    [pscustomobject]@{ Status = [int]$code; Body = $b }
}
function Get-Stock { param([long]$Id) [int]((Invoke-RestMethod "$BaseUrl/api/products/$Id").stock) }
function Get-MyOrderNos { @((Invoke-Api GET '/api/orders/me').Body | ForEach-Object orderNo) }
function Get-CartCount { @((Invoke-Api GET '/api/cart').Body.items | Where-Object { $_ }).Count }
function Clear-Cart { foreach ($it in @((Invoke-Api GET '/api/cart').Body.items)) { if ($it) { Invoke-Api DELETE "/api/cart/items/$($it.productId)" | Out-Null } } }

<# 記錄一項資料檢查 #>
function Check {
    param([string]$Name, [bool]$Ok, [string]$Info = '')
    Write-Host ("  [{0}] {1} {2}" -f ($Ok ? 'OK  ' : '差異'), $Name, $Info) -ForegroundColor ($Ok ? 'Green' : 'Red')
    $checks.Add([pscustomobject]@{ 檢查 = $Name; 結果 = ($Ok ? 'OK' : '差異') })
}

<# 目前日誌行數（之後只印這之後的新行） #>
function Get-LogMark { if ($BackendLog -and (Test-Path -LiteralPath $BackendLog)) { (Get-Content -LiteralPath $BackendLog -Encoding utf8).Count } else { 0 } }

<# 印出 mark 之後的工具呼叫與待確認日誌 #>
function Show-ToolLog {
    param([int]$Mark)
    if (-not ($BackendLog -and (Test-Path -LiteralPath $BackendLog))) { return }
    Get-Content -LiteralPath $BackendLog -Encoding utf8 | Select-Object -Skip $Mark |
        Select-String -Pattern '\[工具呼叫\]|\[待確認\]|\[工具結果\]' |
        ForEach-Object {
            # 只印從第一個 [ 開始的部分（略過時間與執行緒），太長就截斷
            $l = $_.Line; $i = $l.IndexOf('[工具'); if ($i -lt 0) { $i = $l.IndexOf('[待確認') }
            $s = '    日誌：' + ($i -ge 0 ? $l.Substring($i) : $l)
            Write-Host ($s.Length -gt 170 ? $s.Substring(0, 170) + '…' : $s) -ForegroundColor DarkGray
        }
}

<#
  送出一則聊天訊息，邊收邊印 SSE 回覆（data: 開頭的行），收到 [DONE] 結束。
  用 HttpClient 讀串流，才能一段一段即時顯示；訊息先做 URL 編碼。
#>
function Ask {
    param([string]$Message)
    $mark = Get-LogMark
    Write-Host "`n  使用者：$Message" -ForegroundColor White
    Write-Host '  客服：' -NoNewline -ForegroundColor Cyan
    $req = [System.Net.Http.HttpRequestMessage]::new([System.Net.Http.HttpMethod]::Get, "$BaseUrl/api/ai/stream?message=$([uri]::EscapeDataString($Message))")
    $req.Headers.Authorization = [System.Net.Http.Headers.AuthenticationHeaderValue]::new('Bearer', $token)
    $resp = $client.SendAsync($req, [System.Net.Http.HttpCompletionOption]::ResponseHeadersRead).GetAwaiter().GetResult()
    if (-not $resp.IsSuccessStatusCode) { throw "聊天 API 回 HTTP $([int]$resp.StatusCode)" }
    $reader = [System.IO.StreamReader]::new($resp.Content.ReadAsStream(), [System.Text.Encoding]::UTF8)
    $sameEvent = $false   # 同一個事件有多行 data 時，中間補回換行
    while ($null -ne ($line = $reader.ReadLine())) {
        if ($line -eq '') { $sameEvent = $false; continue }
        if (-not $line.StartsWith('data:')) { continue }
        $text = $line.Substring(5)
        if ($text -eq '[DONE]') { break }
        if ($sameEvent) { Write-Host '' }
        Write-Host $text -NoNewline
        $sameEvent = $true
    }
    $reader.Dispose(); $resp.Dispose()
    Write-Host ''
    Show-ToolLog $mark
}

try {
    $login = @{ username = $UserName; password = $UserPassword } | ConvertTo-Json -Compress
    $token = (Invoke-RestMethod -Method Post -Uri "$BaseUrl/api/auth/login" -ContentType 'application/json; charset=utf-8' -Body $login).token
} catch {
    Write-Host "登入失敗：$($_.Exception.Message)（後端是否已啟動？）" -ForegroundColor Red; exit 1
}
$client = [System.Net.Http.HttpClient]::new()
$client.Timeout = [TimeSpan]::FromMinutes(3)

$stock0 = Get-Stock $ProductId
$orders0 = Get-MyOrderNos
$product = (Invoke-RestMethod "$BaseUrl/api/products/$ProductId").name
Write-Host "== AI 客服先詢問再執行（帳號 $UserName，商品 $product，開始前庫存 $stock0）"

$exitCode = 0
try {
    Clear-Cart
    if ($Path -in 'Both', 'Confirm') {
        Write-Host "`n== 路徑一：幫我結帳 -> 確定" -ForegroundColor Yellow
        Invoke-Api POST '/api/cart/items' @{ productId = $ProductId; quantity = 1 } | Out-Null
        Ask '幫我結帳'
        Check '詢問階段：庫存沒變' ((Get-Stock $ProductId) -eq $stock0) "（$(Get-Stock $ProductId)）"
        Check '詢問階段：購物車還在' ((Get-CartCount) -eq 1)
        Check '詢問階段：沒有新訂單' (@(Get-MyOrderNos | Where-Object { $_ -notin $orders0 }).Count -eq 0)
        Ask $ConfirmText
        $new = @(Get-MyOrderNos | Where-Object { $_ -notin $orders0 -and $_ -notin $created })
        if ($new.Count -eq 0) {
            # 模型有時在確認這一輪又呼叫 prepareCheckout 重列摘要，而不是 confirmPendingAction。
            # 後端只會建立新的待確認動作，不會誤結帳；這時再回一次確認即可（這一段本身就是很好的教材）。
            Write-Host '  （模型這一輪重新列了摘要、沒有結帳——回覆有隨機性，再回一次確認）' -ForegroundColor Yellow
            Ask $ConfirmText
            $new = @(Get-MyOrderNos | Where-Object { $_ -notin $orders0 -and $_ -notin $created })
        }
        $new | ForEach-Object { $created.Add($_) }
        Check '確定之後：多了 1 筆訂單' ($new.Count -eq 1) ($new -join ', ')
        Check '確定之後：庫存扣 1' ((Get-Stock $ProductId) -eq $stock0 - 1) "（$(Get-Stock $ProductId)）"
        Check '確定之後：購物車清空' ((Get-CartCount) -eq 0)
    }
    if ($Path -in 'Both', 'Decline') {
        Write-Host "`n== 路徑二：幫我結帳 -> 不要" -ForegroundColor Yellow
        Clear-Cart
        Invoke-Api POST '/api/cart/items' @{ productId = $ProductId; quantity = 1 } | Out-Null
        $before = @(Get-MyOrderNos).Count
        Ask '幫我結帳'
        Ask '不要，我再想想'
        $after = @(Get-MyOrderNos)
        $after | Where-Object { $_ -notin $orders0 -and $_ -notin $created } | ForEach-Object { $created.Add($_) }
        Check '拒絕之後：沒有新訂單' ($after.Count -eq $before) "（$before -> $($after.Count)）"
        Check '拒絕之後：購物車還在' ((Get-CartCount) -eq 1)
    }
} catch {
    Write-Host "示範途中發生錯誤：$($_.Exception.Message)" -ForegroundColor Red
    $exitCode = 1
} finally {
    Write-Host "`n== 清理"
    foreach ($no in $created) { $r = Invoke-Api POST "/api/orders/$no/cancel"; Write-Host "  取消 $no -> HTTP $($r.Status)" }
    Clear-Cart
    if ($created.Count -gt 0 -and ((docker ps --format '{{.Names}}' 2>$null) -contains $PgContainer)) {
        foreach ($no in $created) {
            if ($no -notmatch '^ORD-[A-Za-z0-9-]+$') { continue }
            docker exec $PgContainer psql -U postgres $Database -q -v ON_ERROR_STOP=1 -c "delete from order_items where order_id = (select id from orders where order_no = '$no' and status = 'CANCELLED'); delete from orders where order_no = '$no' and status = 'CANCELLED';" | Out-Null
        }
        Write-Host "  已從資料庫刪除 $($created.Count) 筆已取消的示範訂單"
    }
    $s1 = Get-Stock $ProductId
    if ($s1 -eq $stock0) { Write-Host "  OK  庫存回到 $stock0" -ForegroundColor Green } else { Write-Host "  FAIL 庫存 $stock0 -> $s1" -ForegroundColor Red; $exitCode = 1 }
    $client.Dispose()
}
if (@($checks | Where-Object 結果 -ne 'OK').Count -gt 0) {
    Write-Host '有檢查與預期不同：模型回覆有隨機性，先看上面的工具日誌是否在「確定」那一輪才呼叫 confirmPendingAction。' -ForegroundColor Yellow
    $exitCode = 1
}
exit $exitCode
