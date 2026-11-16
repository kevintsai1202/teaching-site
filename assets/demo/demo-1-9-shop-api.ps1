#Requires -Version 7
<#
.SYNOPSIS
  1-9 講師示範：購物車 -> 結帳 -> 取消 -> 管理員出貨，逐步看每個 API 的狀態碼與庫存變化。

.DESCRIPTION
  依序示範（每一步印出「預期 / 實際」狀態碼）：
    A. 購物車：加入 2 件（200）-> 再加入超過庫存（409，統一錯誤格式）
    B. 結帳：201 回新訂單、庫存扣掉 -> 空購物車再結帳（400）
    C. 取消：PENDING 取消（200，庫存退回）-> 再取消一次（409）
    D. 出貨：再下一單 -> user 出貨（403）-> admin 出貨（200）-> user 取消已出貨（409）-> admin 再出貨（409）
    E. 結帳時庫存不足：user 先把某商品全部庫存放進購物車，admin 搶先買走 1 件 -> user 結帳 409，details 列出哪一項
       （details 依 1-9 結帳提示詞是字串陣列，例如「香氛加濕器（需要 18 件，庫存 17 件）」；物件陣列也能印出）
  每段之間可加 -Pause 停下來讓講師講解（按 Enter 繼續）。
  結束時一定清理（含中途失敗）：取消仍是 PENDING 的測試訂單（API 退回庫存）、清空兩個帳號的購物車；
  已出貨的訂單無法用 API 退庫存，必須提供資料庫容器，由 psql 針對「本腳本建立的訂單編號」補回庫存並刪除。
  最後比對全部商品庫存與開始前一致。不會碰種子訂單。

.EXAMPLE
  pwsh -File .\demo-1-9-shop-api.ps1 -Pause
.EXAMPLE
  pwsh -File .\demo-1-9-shop-api.ps1 -PgContainer rehearsal2-postgres
#>
param(
    [string]$BaseUrl = 'http://localhost:8080',
    [string]$UserName = 'user',
    [string]$UserPassword = 'user123',
    [string]$AdminName = 'admin',
    [string]$AdminPassword = 'admin123',
    # 示範用的商品 id：A～D 用機械鍵盤（3）、E 用香氛加濕器（5）
    [long]$ProductId = 3,
    [long]$ScarceProductId = 5,
    # PostgreSQL 容器與資料庫（清理「已出貨」的測試訂單時需要）
    [string]$PgContainer = 'spring-postgres',
    [string]$Database = 'learn_spring',
    # 每段之間停下來等講師按 Enter
    [switch]$Pause
)

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$results = [System.Collections.Generic.List[object]]::new()   # 每一步的結果
$created = [System.Collections.Generic.List[string]]::new()   # 本腳本建立的訂單編號（清理用）

<# 呼叫 API，回傳 { Status, Body }；4xx/5xx 不丟例外 #>
function Invoke-Api {
    param([string]$Method, [string]$Path, [string]$Token, $Body)
    $p = @{ Method = $Method; Uri = "$BaseUrl$Path"; SkipHttpErrorCheck = $true; StatusCodeVariable = 'code'; Headers = @{} }
    if ($Token) { $p.Headers.Authorization = "Bearer $Token" }
    if ($null -ne $Body) { $p.ContentType = 'application/json; charset=utf-8'; $p.Body = ($Body | ConvertTo-Json -Compress) }
    $b = Invoke-RestMethod @p
    [pscustomobject]@{ Status = [int]$code; Body = $b }
}

<# 以帳密登入取得 JWT #>
function Get-Token {
    param([string]$Name, [string]$Password)
    $json = @{ username = $Name; password = $Password } | ConvertTo-Json -Compress
    (Invoke-RestMethod -Method Post -Uri "$BaseUrl/api/auth/login" -ContentType 'application/json; charset=utf-8' -Body $json).token
}

<# 全部商品庫存 Hashtable id -> stock #>
function Get-Stocks {
    $map = @{}
    foreach ($p in (Invoke-RestMethod "$BaseUrl/api/products")) { $map[[long]$p.id] = [int]$p.stock }
    $map
}

<# 清空某帳號的購物車 #>
function Clear-Cart {
    param([string]$Token)
    foreach ($it in @((Invoke-Api GET '/api/cart' $Token).Body.items)) {
        if ($it) { Invoke-Api DELETE "/api/cart/items/$($it.productId)" $Token | Out-Null }
    }
}

<#
  把錯誤回應 details 的一個元素轉成可讀文字。
  提示詞規定 details 是字串陣列（例如「香氛加濕器（需要 18 件，庫存 17 件）」），字串就直接回傳；
  學員的實作若做成物件（例如 productName、requested／quantity、stock），組成同樣格式的句子；
  其他形狀就印成壓縮的 JSON，至少看得到內容，不會印出空白。
#>
function Format-Detail {
    param($Item)
    if ($null -eq $Item) { return '' }
    if ($Item -is [string]) { return $Item }
    $props = $Item.PSObject.Properties.Name
    $name = @('productName', 'name', 'product') | Where-Object { $props -contains $_ } | Select-Object -First 1
    if ($name) {
        $need = @('requested', 'quantity', 'required', 'need') | Where-Object { $props -contains $_ } | Select-Object -First 1
        $stock = @('stock', 'available') | Where-Object { $props -contains $_ } | Select-Object -First 1
        $parts = @()
        if ($need) { $parts += "需要 $($Item.$need) 件" }
        if ($stock) { $parts += "庫存 $($Item.$stock) 件" }
        if ($parts.Count -gt 0) { return "$($Item.$name)（$($parts -join '，')）" }
        return [string]$Item.$name
    }
    return ($Item | ConvertTo-Json -Compress -Depth 5)
}

<# 執行一步並記錄：印出預期與實際狀態碼，回傳 API 結果供後續使用 #>
function Step {
    param([string]$Title, [int]$Expected, [string]$Method, [string]$Path, [string]$Token, $Body)
    $r = Invoke-Api $Method $Path $Token $Body
    $ok = $r.Status -eq $Expected
    Write-Host ("[{0}] {1}" -f ($ok ? 'OK  ' : '差異'), $Title) -ForegroundColor ($ok ? 'Green' : 'Red')
    Write-Host "       $Method $Path -> 預期 $Expected，實際 $($r.Status)"
    if ($r.Status -ge 400 -and $r.Body.message) {
        Write-Host "       message：$($r.Body.message)"
        # details 可能是字串陣列（提示詞規定的格式）或物件陣列（其他實作），兩種都轉成可讀文字
        $details = @($r.Body.details) | Where-Object { $null -ne $_ } | ForEach-Object { Format-Detail $_ }
        if ($details) { Write-Host "       details：$($details -join '；')" }
    }
    $results.Add([pscustomobject]@{ 步驟 = $Title; 預期 = $Expected; 實際 = $r.Status; 結果 = ($ok ? 'OK' : '差異') })
    $r
}

<# 段落標題；-Pause 時等講師按 Enter #>
function Section {
    param([string]$Title)
    if ($Pause) { Read-Host "`n（按 Enter 繼續：$Title）" | Out-Null }
    Write-Host "`n== $Title" -ForegroundColor Cyan
}

<# 記下本腳本建立的訂單 #>
function Track { param($Res) if ($Res.Status -eq 201 -and $Res.Body.orderNo) { $created.Add($Res.Body.orderNo) } }

try {
    $ut = Get-Token $UserName $UserPassword
    $at = Get-Token $AdminName $AdminPassword
} catch {
    Write-Host "登入失敗：$($_.Exception.Message)（後端是否已啟動？）" -ForegroundColor Red; exit 1
}

$stock0 = Get-Stocks
Write-Host "開始前庫存：$(($stock0.Keys | Sort-Object | ForEach-Object { "$_=$($stock0[$_])" }) -join ', ')"
if ($stock0[$ProductId] -lt 3) { Write-Host "商品 $ProductId 庫存不足 3 件，請用 -ProductId 換一個商品" -ForegroundColor Red; exit 1 }
if ($stock0[$ScarceProductId] -lt 2) { Write-Host "商品 $ScarceProductId 庫存不足 2 件，請用 -ScarceProductId 換一個商品" -ForegroundColor Red; exit 1 }

$exitCode = 0
try {
    Clear-Cart $ut; Clear-Cart $at

    Section 'A. 購物車：加入與超過庫存'
    $r = Step '加入 2 件' 200 POST '/api/cart/items' $ut @{ productId = $ProductId; quantity = 2 }
    Write-Host "       購物車：$($r.Body.items[0].productName) x$($r.Body.items[0].quantity)，總金額 $($r.Body.totalAmount)"
    Step '再加入超過庫存的數量' 409 POST '/api/cart/items' $ut @{ productId = $ProductId; quantity = 9999 } | Out-Null

    Section 'B. 結帳：交易內扣庫存、建立訂單、清空購物車'
    $r = Step '結帳' 201 POST '/api/orders/checkout' $ut; Track $r
    $orderA = $r.Body.orderNo
    Write-Host "       新訂單 $orderA，狀態 $($r.Body.status)，總金額 $($r.Body.totalPrice)，庫存 $($stock0[$ProductId]) -> $((Get-Stocks)[$ProductId])"
    Step '購物車已空，再結帳一次' 400 POST '/api/orders/checkout' $ut | Out-Null

    Section 'C. 取消：只有待出貨可以取消，取消會退回庫存'
    $r = Step "取消 $orderA" 200 POST "/api/orders/$orderA/cancel" $ut
    Write-Host "       狀態 $($r.Body.status)，庫存回到 $((Get-Stocks)[$ProductId])"
    Step "再取消一次 $orderA" 409 POST "/api/orders/$orderA/cancel" $ut | Out-Null

    Section 'D. 出貨：只有管理員可以出貨；已出貨不能取消'
    Invoke-Api POST '/api/cart/items' $ut @{ productId = $ProductId; quantity = 1 } | Out-Null
    $r = Step '再下一單' 201 POST '/api/orders/checkout' $ut; Track $r
    $orderB = $r.Body.orderNo
    Step "user 出貨 $orderB" 403 PATCH "/api/orders/$orderB/ship" $ut | Out-Null
    $r = Step "admin 出貨 $orderB" 200 PATCH "/api/orders/$orderB/ship" $at
    Write-Host "       狀態 $($r.Body.status)"
    Step "user 取消已出貨的 $orderB" 409 POST "/api/orders/$orderB/cancel" $ut | Out-Null
    Step "admin 再出貨一次 $orderB" 409 PATCH "/api/orders/$orderB/ship" $at | Out-Null

    Section 'E. 結帳時庫存不足：加入時有貨，結帳前被別人買走'
    $all = (Get-Stocks)[$ScarceProductId]
    Step "user 把商品 $ScarceProductId 的全部庫存 $all 件放進購物車" 200 POST '/api/cart/items' $ut @{ productId = $ScarceProductId; quantity = $all } | Out-Null
    Invoke-Api POST '/api/cart/items' $at @{ productId = $ScarceProductId; quantity = 1 } | Out-Null
    $r = Step 'admin 搶先買走 1 件' 201 POST '/api/orders/checkout' $at; Track $r
    Step 'user 結帳（庫存只剩不夠了）' 409 POST '/api/orders/checkout' $ut | Out-Null
    $cart = (Invoke-Api GET '/api/cart' $ut).Body
    Write-Host "       整筆回滾：user 購物車仍有 $($cart.items.Count) 項，hasStockIssue=$($cart.hasStockIssue)"
} catch {
    Write-Host "示範途中發生錯誤：$($_.Exception.Message)" -ForegroundColor Red
    $exitCode = 1
} finally {
    Write-Host "`n== 清理" -ForegroundColor Cyan
    Clear-Cart $ut; Clear-Cart $at
    $hasPg = (docker ps --format '{{.Names}}' 2>$null) -contains $PgContainer
    foreach ($no in $created) {
        if ($no -notmatch '^ORD-[A-Za-z0-9-]+$') { Write-Host "  訂單編號格式不符，略過：$no"; continue }
        # 仍是 PENDING 的先用 API 取消（會退回庫存）；要用下單者自己的 token
        foreach ($t in @($ut, $at)) { Invoke-Api POST "/api/orders/$no/cancel" $t | Out-Null }
        if ($hasPg) {
            # 已出貨的訂單 API 不能取消：用 psql 依明細補回庫存，再刪除明細與訂單（只針對本腳本建立的訂單編號）
            $sql = "update products p set stock = p.stock + oi.quantity from order_items oi join orders o on o.id = oi.order_id " +
                   "where oi.product_id = p.id and o.order_no = '$no' and o.status <> 'CANCELLED'; " +
                   "delete from order_items where order_id = (select id from orders where order_no = '$no'); " +
                   "delete from orders where order_no = '$no';"
            docker exec $PgContainer psql -U postgres $Database -q -v ON_ERROR_STOP=1 -c $sql | Out-Null
            Write-Host "  已清除 $no"
        }
    }
    if (-not $hasPg -and $created.Count -gt 0) {
        Write-Host "  找不到容器 $PgContainer：已出貨的訂單無法退回庫存，請加上 -PgContainer <容器名稱> 重跑清理，或手動處理：$($created -join ', ')" -ForegroundColor Yellow
    }
    $stock1 = Get-Stocks
    $diff = @($stock0.Keys | Where-Object { $stock1[$_] -ne $stock0[$_] })
    if ($diff.Count -eq 0) { Write-Host '  OK  全部商品庫存與開始前一致' -ForegroundColor Green }
    else { Write-Host "  FAIL 庫存不同：$(($diff | ForEach-Object { "id=$_ $($stock0[$_]) -> $($stock1[$_])" }) -join '、')" -ForegroundColor Red; $exitCode = 1 }
}

Write-Host "`n== 彙總"
$results | Format-Table -AutoSize
if (@($results | Where-Object 結果 -ne 'OK').Count -gt 0) { $exitCode = 1 }
exit $exitCode
