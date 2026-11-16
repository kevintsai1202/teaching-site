#Requires -Version 7
<#
.SYNOPSIS
  1-9 講師示範：併發陷阱——同一個帳號「同時」送出兩次結帳，同一份購物車被結成兩筆訂單。

.DESCRIPTION
  這是刻意保留的教材，腳本只重現問題、不修它（修法見教材「併發陷阱」段）。
  原理：checkout 先讀購物車、扣庫存、建訂單，最後才 deleteByUsername 清空購物車，中間沒有鎖住購物車列。
  在 PostgreSQL 預設的 READ COMMITTED 隔離等級下，兩個交易都讀到同一份購物車；庫存夠就都扣得到；
  第二個交易的 delete 刪到 0 列（已被第一個刪掉）也不會報錯 -> 兩筆訂單、庫存扣兩份。

  每一輪：把 2 個商品各 1 件放進購物車 -> 用同一個 token 同時送出兩個 POST /api/orders/checkout
          -> 比較這一輪新增了幾筆訂單（1 筆是正常，2 筆就是重現了）。
  結束時一定清理（包含中途失敗）：取消本腳本建立的訂單（API 會退回庫存）、清空購物車；
  有提供資料庫容器時，再用 psql 刪掉這些已取消的訂單與明細；最後比對庫存與開始前一致。
  只會動到本腳本自己建立的訂單編號，不會碰種子訂單。訂單編號的 sequence 只會往前，不需要還原。

.EXAMPLE
  pwsh -File .\demo-1-9-double-checkout.ps1                     # 預設 5 輪、容器 spring-postgres
.EXAMPLE
  pwsh -File .\demo-1-9-double-checkout.ps1 -Rounds 10 -PgContainer rehearsal2-postgres
.EXAMPLE
  pwsh -File .\demo-1-9-double-checkout.ps1 -Engine ForEachParallel   # 改用 ForEach-Object -Parallel 送請求（課前實測同樣 5 輪 5 中）
#>
param(
    # 後端網址
    [string]$BaseUrl = 'http://localhost:8080',
    # 用哪個帳號示範（購物車會被清空）
    [string]$UserName = 'user',
    [string]$UserPassword = 'user123',
    # 輪數：輪數越多越容易重現
    [int]$Rounds = 5,
    # 每輪放進購物車的商品 id（各 1 件），預設行動電源、機械鍵盤
    [long[]]$ProductIds = @(4, 3),
    # 同時送出請求的方式：HttpClient（兩個非同步請求，最貼近同時）或 ForEachParallel（PowerShell 平行管線）
    [ValidateSet('HttpClient', 'ForEachParallel')]
    [string]$Engine = 'HttpClient',
    # PostgreSQL 容器與資料庫名稱（只用來刪除本腳本建立、已取消的訂單；找不到容器就略過這一步）
    [string]$PgContainer = 'spring-postgres',
    [string]$Database = 'learn_spring'
)

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

<# 呼叫 API，回傳 { Status, Body }；4xx/5xx 不丟例外 #>
function Invoke-Api {
    param([string]$Method, [string]$Path, [string]$Token, $Body)
    $p = @{ Method = $Method; Uri = "$BaseUrl$Path"; SkipHttpErrorCheck = $true; StatusCodeVariable = 'code'; Headers = @{} }
    if ($Token) { $p.Headers.Authorization = "Bearer $Token" }
    if ($null -ne $Body) { $p.ContentType = 'application/json; charset=utf-8'; $p.Body = ($Body | ConvertTo-Json -Compress) }
    $b = Invoke-RestMethod @p
    [pscustomobject]@{ Status = [int]$code; Body = $b }
}

<# 目前所有商品庫存：Hashtable id -> stock（商品查詢免登入） #>
function Get-Stocks {
    $map = @{}
    foreach ($p in (Invoke-RestMethod "$BaseUrl/api/products")) { $map[[long]$p.id] = [int]$p.stock }
    $map
}

<# 目前帳號的訂單編號清單 #>
function Get-MyOrderNos { @((Invoke-Api GET '/api/orders/me' $token).Body | ForEach-Object orderNo) }

<# 清空目前帳號的購物車（走 API） #>
function Clear-Cart {
    foreach ($it in @((Invoke-Api GET '/api/cart' $token).Body.items)) {
        if ($it) { Invoke-Api DELETE "/api/cart/items/$($it.productId)" $token | Out-Null }
    }
}

<# 用同一個 token 同時送出兩個結帳請求，回傳兩個狀態碼 #>
function Send-TwoCheckouts {
    if ($Engine -eq 'HttpClient') {
        # 兩個非同步請求先後「發出」只差幾微秒，伺服器端幾乎同時開始處理
        $tasks = 1..2 | ForEach-Object {
            $req = [System.Net.Http.HttpRequestMessage]::new([System.Net.Http.HttpMethod]::Post, "$BaseUrl/api/orders/checkout")
            $req.Headers.Authorization = [System.Net.Http.Headers.AuthenticationHeaderValue]::new('Bearer', $token)
            $client.SendAsync($req)
        }
        [System.Threading.Tasks.Task]::WaitAll([System.Threading.Tasks.Task[]]$tasks)
        return @($tasks | ForEach-Object { [int]$_.Result.StatusCode })
    }
    # ForEach-Object -Parallel：每個請求在自己的 runspace 執行；runspace 啟動有時間差，機器很忙時兩個請求可能被錯開
    $url = "$BaseUrl/api/orders/checkout"; $t = $token
    @(1..2 | ForEach-Object -ThrottleLimit 2 -Parallel {
        Invoke-WebRequest -Method Post -Uri $using:url -Headers @{ Authorization = "Bearer $using:t" } `
            -SkipHttpErrorCheck | ForEach-Object StatusCode
    })
}

Write-Host "== 併發陷阱示範：同一份購物車、同時結帳兩次（$Rounds 輪，方式：$Engine）"
try {
    $login = @{ username = $UserName; password = $UserPassword } | ConvertTo-Json -Compress
    $token = (Invoke-RestMethod -Method Post -Uri "$BaseUrl/api/auth/login" -ContentType 'application/json; charset=utf-8' -Body $login).token
} catch {
    Write-Host "登入失敗：$($_.Exception.Message)（後端是否已啟動？）" -ForegroundColor Red; exit 1
}
$client = [System.Net.Http.HttpClient]::new()

# 開始前快照：庫存、這個帳號原本的訂單（結束時必須一樣）
$stock0 = Get-Stocks
$orders0 = Get-MyOrderNos
$need = $Rounds * 2
foreach ($id in $ProductIds) {
    if (-not $stock0.ContainsKey($id)) { Write-Host "找不到商品 id=$id，請用 -ProductIds 指定存在的商品" -ForegroundColor Red; exit 1 }
    if ($stock0[$id] -lt $need) { Write-Host "商品 id=$id 庫存 $($stock0[$id]) 不足 $need 件（每輪最多扣 2 件），請減少 -Rounds" -ForegroundColor Red; exit 1 }
}
Write-Host "開始前庫存：$(($ProductIds | ForEach-Object { "id=$_ -> $($stock0[$_])" }) -join '、')"
Write-Host "開始前 $UserName 的訂單：$($orders0.Count) 筆"

$created = [System.Collections.Generic.List[string]]::new()   # 本腳本建立的訂單編號（清理用）
$hits = 0                                                     # 重現（單輪建立 2 筆）的輪數
$exitCode = 0
try {
    Clear-Cart
    for ($r = 1; $r -le $Rounds; $r++) {
        foreach ($id in $ProductIds) { Invoke-Api POST '/api/cart/items' $token @{ productId = $id; quantity = 1 } | Out-Null }
        $codes = Send-TwoCheckouts
        # 這一輪新增的訂單 = 現在的訂單 - 開始前的 - 先前輪次建立的
        $new = @(Get-MyOrderNos | Where-Object { $_ -notin $orders0 -and $_ -notin $created })
        $new | ForEach-Object { $created.Add($_) }
        if ($new.Count -ge 2) { $hits++ }
        $color = if ($new.Count -ge 2) { 'Red' } else { 'Gray' }
        Write-Host ("第 {0} 輪：兩個請求的狀態碼 = {1}；本輪新增 {2} 筆訂單 {3}" -f $r, ($codes -join ' '), $new.Count, ($new -join ', ')) -ForegroundColor $color
        Clear-Cart   # 沒被結帳的情況下（例如一個 201、一個 400）購物車已空；保險起見每輪都清
    }
    Write-Host ''
    Write-Host "== 結果：$Rounds 輪中有 $hits 輪「同一份購物車結出 2 筆訂單」"
    if ($hits -gt 0) {
        Write-Host '== 已重現：兩個請求都回 201，庫存被扣了兩份。正確的行為應該是一個 201、另一個 400（購物車是空的）或 409。' -ForegroundColor Red
    } else {
        Write-Host '== 這次沒有重現（兩個請求剛好被錯開）。請加輪數再試：-Rounds 20；或改用 -Engine HttpClient。' -ForegroundColor Yellow
    }
} catch {
    Write-Host "示範途中發生錯誤：$($_.Exception.Message)" -ForegroundColor Red
    $exitCode = 1
} finally {
    Write-Host ''
    Write-Host '== 清理'
    foreach ($no in $created) {
        $res = Invoke-Api POST "/api/orders/$no/cancel" $token
        Write-Host "  取消 $no -> HTTP $($res.Status)（取消會退回庫存）"
    }
    Clear-Cart
    # 有資料庫容器時，順便把這些「已取消」的測試訂單刪掉，讓訂單列表回到開始前的樣子
    $hasPg = $created.Count -gt 0 -and (docker ps --format '{{.Names}}' 2>$null) -contains $PgContainer
    if ($hasPg) {
        foreach ($no in $created) {
            if ($no -notmatch '^ORD-[A-Za-z0-9-]+$') { Write-Host "  訂單編號格式不符，略過：$no"; continue }
            $sql = "delete from order_items where order_id = (select id from orders where order_no = '$no' and status = 'CANCELLED'); " +
                   "delete from orders where order_no = '$no' and status = 'CANCELLED';"
            docker exec $PgContainer psql -U postgres $Database -q -v ON_ERROR_STOP=1 -c $sql | Out-Null
        }
        Write-Host "  已從資料庫刪除 $($created.Count) 筆已取消的測試訂單（容器 $PgContainer）"
    } elseif ($created.Count -gt 0) {
        Write-Host "  找不到容器 $PgContainer，已取消的測試訂單保留在資料庫（狀態 CANCELLED，不影響庫存）"
    }
    $stock1 = Get-Stocks
    $diff = @($stock0.Keys | Where-Object { $stock1[$_] -ne $stock0[$_] })
    if ($diff.Count -eq 0) { Write-Host '  OK  全部商品庫存與開始前一致' -ForegroundColor Green }
    else { Write-Host "  FAIL 庫存不同：$(($diff | ForEach-Object { "id=$_ $($stock0[$_]) -> $($stock1[$_])" }) -join '、')" -ForegroundColor Red; $exitCode = 1 }
    $left = @(Get-MyOrderNos | Where-Object { $_ -notin $orders0 })
    if ($hasPg -and $left.Count -eq 0) { Write-Host "  OK  $UserName 的訂單回到開始前的 $($orders0.Count) 筆" -ForegroundColor Green }
    $client.Dispose()
}
exit $exitCode
