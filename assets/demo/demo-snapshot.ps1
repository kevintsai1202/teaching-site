#Requires -Version 7
<#
.SYNOPSIS
  講師示範前後的資料快照與還原：庫存、訂單、購物車回到示範前的樣子。

.DESCRIPTION
  前端購物流程（2-5）、AI 客服結帳（2-2）、admin 出貨這類「在畫面上手動操作」的示範，
  會留下訂單、扣掉庫存。示範前先 Save，示範後 Restore，就能回到原狀再示範一次。
  直接用 psql 操作資料庫（docker exec），因為「已出貨」的訂單沒有 API 可以退回庫存。

  Save    ：記錄全部商品庫存、全部訂單（編號與狀態）、全部購物車列，寫到 -File（JSON）。
  Restore ：只處理「快照之後」的變化：
            1. 快照之後新增的訂單：未取消的先依明細補回庫存，再刪除明細與訂單（快照裡的訂單一筆都不刪）
            2. 快照裡的訂單若狀態被改了（例如示範時把種子訂單出貨或取消）：改回原狀態；
               原本未取消、示範時被取消的，取消時已退回庫存，這裡會再扣回去
            3. 購物車：清空後放回快照的內容
            最後比對庫存與快照；仍不一致時列出差異（加 -ForceStock 會直接把庫存設回快照值）。

.EXAMPLE
  pwsh -File .\demo-snapshot.ps1 -Action Save
  # ……在畫面上示範加入購物袋、結帳、取消、admin 出貨……
  pwsh -File .\demo-snapshot.ps1 -Action Restore
.EXAMPLE
  pwsh -File .\demo-snapshot.ps1 -Action Save -PgContainer rehearsal2-postgres
#>
param(
    [Parameter(Mandatory)]
    [ValidateSet('Save', 'Restore')]
    [string]$Action,
    # 快照檔位置（預設放在暫存資料夾）
    [string]$File = (Join-Path ([System.IO.Path]::GetTempPath()) 'learn-spring-demo-snapshot.json'),
    # PostgreSQL 容器與資料庫
    [string]$PgContainer = 'spring-postgres',
    [string]$Database = 'learn_spring',
    # 還原後庫存仍不一致時，直接設回快照值
    [switch]$ForceStock
)

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

<# 執行 SQL 並回傳每一列（欄位以 | 分隔）；ON_ERROR_STOP 讓 SQL 錯誤變成非零結束碼 #>
function Invoke-Sql {
    param([string]$Sql)
    $out = docker exec $PgContainer psql -U postgres $Database -v ON_ERROR_STOP=1 -tA -F '|' -c $Sql
    if ($LASTEXITCODE -ne 0) { throw "SQL 執行失敗：$Sql" }
    @($out | Where-Object { $_ -ne '' })
}

if (-not ((docker ps --format '{{.Names}}' 2>$null) -contains $PgContainer)) {
    Write-Host "找不到執行中的容器 $PgContainer，請用 -PgContainer 指定（docker ps 可查名稱）" -ForegroundColor Red
    exit 1
}

if ($Action -eq 'Save') {
    $snap = [ordered]@{
        savedAt = (Get-Date).ToString('s')
        # 商品 id -> 庫存
        stocks  = @(Invoke-Sql 'select id, stock from products order by id' | ForEach-Object { $c = $_ -split '\|'; @{ id = [long]$c[0]; stock = [int]$c[1] } })
        # 訂單編號 -> 狀態
        orders  = @(Invoke-Sql 'select order_no, status from orders order by id' | ForEach-Object { $c = $_ -split '\|'; @{ orderNo = $c[0]; status = $c[1] } })
        # 購物車列
        carts   = @(Invoke-Sql 'select username, product_id, quantity from cart_items order by id' | ForEach-Object { $c = $_ -split '\|'; @{ username = $c[0]; productId = [long]$c[1]; quantity = [int]$c[2] } })
    }
    $snap | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $File -Encoding utf8
    Write-Host "已儲存快照：$File" -ForegroundColor Green
    Write-Host "  商品 $($snap.stocks.Count) 個、訂單 $($snap.orders.Count) 筆、購物車 $($snap.carts.Count) 列"
    exit 0
}

# ---------- Restore ----------
if (-not (Test-Path -LiteralPath $File)) { Write-Host "找不到快照檔 $File，請先執行 -Action Save" -ForegroundColor Red; exit 1 }
$snap = Get-Content -LiteralPath $File -Raw | ConvertFrom-Json
$oldStatus = @{}; foreach ($o in $snap.orders) { $oldStatus[$o.orderNo] = $o.status }

$current = Invoke-Sql 'select order_no, status from orders order by id' | ForEach-Object { $c = $_ -split '\|'; [pscustomobject]@{ orderNo = $c[0]; status = $c[1] } }
$sql = [System.Text.StringBuilder]::new('begin; ')
$removed = 0; $reverted = 0
foreach ($o in $current) {
    $no = $o.orderNo
    if ($no -notmatch '^[A-Za-z0-9-]+$') { Write-Host "  訂單編號格式不符，略過：$no"; continue }
    if (-not $oldStatus.ContainsKey($no)) {
        # 快照之後新增的訂單：未取消的補回庫存，再刪除
        [void]$sql.Append("update products p set stock = p.stock + oi.quantity from order_items oi join orders o on o.id = oi.order_id where oi.product_id = p.id and o.order_no = '$no' and o.status <> 'CANCELLED'; ")
        [void]$sql.Append("delete from order_items where order_id = (select id from orders where order_no = '$no'); delete from orders where order_no = '$no'; ")
        $removed++
    } elseif ($oldStatus[$no] -ne $o.status) {
        # 快照裡的訂單被改了狀態：原本未取消、現在被取消 -> 取消時退回的庫存要再扣回去
        if ($o.status -eq 'CANCELLED' -and $oldStatus[$no] -ne 'CANCELLED') {
            [void]$sql.Append("update products p set stock = p.stock - oi.quantity from order_items oi join orders o on o.id = oi.order_id where oi.product_id = p.id and o.order_no = '$no'; ")
        }
        [void]$sql.Append("update orders set status = '$($oldStatus[$no])' where order_no = '$no'; ")
        Write-Host "  訂單 $no 狀態 $($o.status) -> $($oldStatus[$no])"
        $reverted++
    }
}
# 購物車放回快照內容
[void]$sql.Append('delete from cart_items; ')
foreach ($c in $snap.carts) {
    if ($c.username -notmatch '^[A-Za-z0-9_.-]+$') { continue }
    [void]$sql.Append("insert into cart_items (username, product_id, quantity) values ('$($c.username)', $([long]$c.productId), $([int]$c.quantity)); ")
}
[void]$sql.Append('commit;')
Invoke-Sql $sql.ToString() | Out-Null
Write-Host "已還原：刪除新增訂單 $removed 筆、改回狀態 $reverted 筆、購物車放回 $(@($snap.carts).Count) 列" -ForegroundColor Green

# 比對庫存
$now = @{}; Invoke-Sql 'select id, stock from products' | ForEach-Object { $c = $_ -split '\|'; $now[[long]$c[0]] = [int]$c[1] }
$diff = @($snap.stocks | Where-Object { $now[[long]$_.id] -ne [int]$_.stock })
if ($diff.Count -eq 0) { Write-Host '  OK  全部商品庫存與快照一致' -ForegroundColor Green; exit 0 }
Write-Host "  庫存與快照不同：$(($diff | ForEach-Object { "id=$($_.id) 快照 $($_.stock) / 目前 $($now[[long]$_.id])" }) -join '、')" -ForegroundColor Yellow
Write-Host '  （可能是示範時用「商品上架」或直接改過庫存）'
if ($ForceStock) {
    $fix = ($diff | ForEach-Object { "update products set stock = $([int]$_.stock) where id = $([long]$_.id);" }) -join ' '
    Invoke-Sql "begin; $fix commit;" | Out-Null
    Write-Host '  已用 -ForceStock 把庫存設回快照值' -ForegroundColor Green
    exit 0
}
Write-Host '  需要直接設回快照值時，加上 -ForceStock 再執行一次。'
exit 1
