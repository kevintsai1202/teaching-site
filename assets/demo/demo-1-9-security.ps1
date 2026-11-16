#Requires -Version 7
<#
.SYNOPSIS
  1-9 講師示範：Spring Security 的 401 / 403 / 200（URL 規則與 @PreAuthorize 雙重防護）。

.DESCRIPTION
  只讀不寫：本腳本不會建立、修改或刪除任何資料，可以在課堂上重複執行。
  依序示範：
    1. 未登入呼叫需登入的 API            -> 401 Unauthorized（還不知道你是誰）
    2. user 呼叫管理員 API                -> 403 Forbidden（知道你是誰，但你沒有權限）
    3. user 對「不存在的訂單」出貨        -> 403（URL 規則在 Filter 鏈就擋掉，根本沒查訂單存不存在）
    4. admin 查全部訂單、依狀態篩選       -> 200
    5. admin 用不合法的狀態篩選           -> 400（業務錯誤，由 GlobalExceptionHandler 回統一格式）
    6. admin 對不存在的訂單出貨           -> 404（通過授權後才進到 Service 查訂單）
  每一步印出「預期 / 實際」，最後彙總，全部符合時結束碼為 0。

.EXAMPLE
  pwsh -File .\demo-1-9-security.ps1
.EXAMPLE
  pwsh -File .\demo-1-9-security.ps1 -BaseUrl http://localhost:8080 -UserPassword user123 -AdminPassword admin123
#>
param(
    # 後端網址（Spring Boot）
    [string]$BaseUrl = 'http://localhost:8080',
    # 一般使用者帳密（1-9 章建立的示範帳號）
    [string]$UserName = 'user',
    [string]$UserPassword = 'user123',
    # 管理員帳密
    [string]$AdminName = 'admin',
    [string]$AdminPassword = 'admin123'
)

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# 每一步的結果（最後彙總用）
$results = [System.Collections.Generic.List[object]]::new()

<#
  呼叫 API 並回傳 { Status, Body }。
  -SkipHttpErrorCheck 讓 4xx/5xx 不丟例外，-StatusCodeVariable 取得狀態碼，示範時不必寫 try/catch。
#>
function Invoke-Api {
    param([string]$Method, [string]$Path, [string]$Token)
    $headers = @{}
    if ($Token) { $headers.Authorization = "Bearer $Token" }
    $body = Invoke-RestMethod -Method $Method -Uri "$BaseUrl$Path" -Headers $headers `
        -SkipHttpErrorCheck -StatusCodeVariable 'code'
    [pscustomobject]@{ Status = [int]$code; Body = $body }
}

<# 以帳密登入，回傳 JWT（登入失敗直接中止，通常是後端沒啟動或密碼不對） #>
function Get-Token {
    param([string]$Name, [string]$Password)
    $json = @{ username = $Name; password = $Password } | ConvertTo-Json -Compress
    (Invoke-RestMethod -Method Post -Uri "$BaseUrl/api/auth/login" -ContentType 'application/json; charset=utf-8' -Body $json).token
}

<# 執行一步示範：印出標題、預期與實際狀態碼，並記錄結果 #>
function Step {
    param([string]$Title, [int]$Expected, [string]$Method, [string]$Path, [string]$Token, [scriptblock]$Show)
    $r = Invoke-Api -Method $Method -Path $Path -Token $Token
    $ok = $r.Status -eq $Expected
    $mark = if ($ok) { 'OK  ' } else { '差異' }
    Write-Host ''
    Write-Host "[$mark] $Title" -ForegroundColor ($ok ? 'Green' : 'Red')
    Write-Host "       $Method $Path -> 預期 $Expected，實際 $($r.Status)"
    if ($Show -and $r.Body) { & $Show $r.Body }
    $results.Add([pscustomobject]@{ 步驟 = $Title; 預期 = $Expected; 實際 = $r.Status; 結果 = $mark.Trim() })
}

Write-Host "== 1-9 Spring Security 示範（$BaseUrl）"
try {
    $userToken = Get-Token $UserName $UserPassword
    $adminToken = Get-Token $AdminName $AdminPassword
} catch {
    Write-Host "登入失敗：$($_.Exception.Message)" -ForegroundColor Red
    Write-Host '請確認後端已啟動（mvn spring-boot:run）且帳密正確。'
    exit 1
}

# 不存在的訂單編號：用來證明 URL 規則「先擋」——user 拿到 403 而不是 404
$fakeOrder = 'ORD-00000000-NOPE'

Step '未登入查購物車' 401 GET '/api/cart' $null
Step '未登入查全部訂單（管理員 API）' 401 GET '/api/admin/orders' $null
Step 'user 查自己的購物車' 200 GET '/api/cart' $userToken {
    param($b) Write-Host "       購物車品項數：$($b.items.Count)，總金額：$($b.totalAmount)"
}
Step 'user 查全部訂單（管理員 API）' 403 GET '/api/admin/orders' $userToken
Step 'user 對不存在的訂單出貨（URL 規則先擋，不會查訂單）' 403 PATCH "/api/orders/$fakeOrder/ship" $userToken
Step 'admin 查全部訂單' 200 GET '/api/admin/orders' $adminToken {
    param($b)
    # 表格轉成文字後逐行縮排輸出（去掉空行）
    $table = $b | Select-Object -First 6 orderNo, username, status, totalPrice | Format-Table -AutoSize | Out-String
    $table -split "\r?\n" | Where-Object { $_.Trim() } | ForEach-Object { Write-Host "       $_" }
    Write-Host "       共 $(@($b).Count) 筆（含不同帳號的訂單）"
}
Step 'admin 只看待出貨（?status=PENDING）' 200 GET '/api/admin/orders?status=PENDING' $adminToken {
    param($b) Write-Host "       待出貨 $(@($b).Count) 筆：$((@($b) | ForEach-Object orderNo) -join '、')"
}
Step 'admin 用不合法的狀態篩選' 400 GET '/api/admin/orders?status=WRONG' $adminToken {
    param($b) Write-Host "       message：$($b.message)"
}
Step 'admin 對不存在的訂單出貨（通過授權後才查訂單）' 404 PATCH "/api/orders/$fakeOrder/ship" $adminToken {
    param($b) Write-Host "       message：$($b.message)"
}

Write-Host ''
Write-Host '== 彙總'
$results | Format-Table -AutoSize
$bad = @($results | Where-Object 結果 -ne 'OK').Count
if ($bad -eq 0) { Write-Host '全部符合預期。' -ForegroundColor Green; exit 0 }
Write-Host "$bad 步與預期不同，請對照 SecurityConfig 的 URL 規則與 Controller 的 @PreAuthorize。" -ForegroundColor Yellow
exit 1
