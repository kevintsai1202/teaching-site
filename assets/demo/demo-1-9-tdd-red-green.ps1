#Requires -Version 7
<#
.SYNOPSIS
  1-9 講師示範：用參考實作「重播」TDD 的紅燈與綠燈（不必等 AI 現場寫完）。

.DESCRIPTION
  參考實作的 git 歷史裡，每個購物功能都是「測試和實作」一起 commit。本腳本把它拆回 TDD 的兩個時間點：
    紅燈：上一個 commit 的程式 + 這個 commit 的「測試」 -> mvn test 失敗（功能還沒做，API 回 404）
    綠燈：再放上這個 commit 的「實作」                   -> mvn test 通過
  這個 commit 新增、但不在 -Tests 清單裡的測試檔會先移除：例如 CartServiceTest 直接呼叫 CartService，
  實作不存在時連編譯都過不了（那是編譯錯誤，不是我們要示範的紅燈）。CartApiTest 只透過 HTTP 呼叫 API，
  實作不存在時可以編譯，API 回 404，才是「功能還沒做」的紅燈。
  全部在暫存資料夾操作（git archive 匯出檔案），不會修改參考實作的工作目錄、分支或 git 設定。
  需要 Docker（測試用 Testcontainers 自動啟動乾淨的 PostgreSQL），第一次執行會下載映像檔。
  每次 mvn 輸出存成 log 檔，結束時印出路徑；只會印出關鍵的失敗訊息與測試統計。

.EXAMPLE
  pwsh -File .\demo-1-9-tdd-red-green.ps1 -RepoPath D:\GitHub\learn-spring-rehearsal2
.EXAMPLE
  # 改示範「結帳」這個 commit 的紅綠燈
  pwsh -File .\demo-1-9-tdd-red-green.ps1 -RepoPath D:\GitHub\learn-spring-rehearsal2 -CommitGrep '結帳：交易內條件式扣庫存' -Tests CheckoutServiceTest
#>
param(
    # 參考實作的 git repo 路徑
    [Parameter(Mandatory)]
    [string]$RepoPath,
    # 用 commit 訊息找要重播的 commit（預設：購物車 API）
    [string]$CommitGrep = '購物車 API 與統一錯誤處理',
    # 要跑的測試類別（逗號分隔，對應 mvn -Dtest=）
    [string]$Tests = 'CartApiTest',
    # 暫存工作資料夾（每次執行會先清空）
    [string]$WorkDir = (Join-Path ([System.IO.Path]::GetTempPath()) 'tdd-replay'),
    # 跑完保留暫存資料夾（想打開程式碼對照時用）
    [switch]$Keep
)

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

<# 把某個 commit 的指定路徑（或整個專案）匯出到工作資料夾，覆蓋同名檔案 #>
function Export-Commit {
    param([string]$Commit, [string[]]$Paths = @())
    $tar = Join-Path $WorkDir '_export.tar'
    # 只匯出建置需要的檔案（pom、Maven Wrapper、src），避開中文檔名的文件資料夾
    if ($Paths.Count -eq 0) { $Paths = @('pom.xml', 'src') + @(git -C $RepoPath ls-tree --name-only $Commit | Where-Object { $_ -in 'mvnw', 'mvnw.cmd', '.mvn' }) }
    git -C $RepoPath archive --format=tar -o $tar $Commit @Paths
    if ($LASTEXITCODE -ne 0) { throw "git archive 失敗：$Commit $Paths" }
    tar -xf $tar -C $WorkDir
    Remove-Item -LiteralPath $tar
}

<# 執行 mvn test（只跑指定測試），輸出存 log，回傳 { ExitCode, Log } #>
function Invoke-MvnTest {
    param([string]$Label)
    $log = Join-Path $WorkDir "mvn-$Label.log"
    # 測試名稱是中文，統一用 UTF-8 輸出避免亂碼
    $env:MAVEN_OPTS = '-Dfile.encoding=UTF-8 -Dstdout.encoding=UTF-8 -Dstderr.encoding=UTF-8'
    Push-Location $WorkDir
    try {
        mvn -B "-Dtest=$Tests" '-Dsurefire.failIfNoSpecifiedTests=false' '-DargLine=-Dfile.encoding=UTF-8 -Dstdout.encoding=UTF-8' test *> $log
        $code = $LASTEXITCODE
    } finally { Pop-Location }
    [pscustomobject]@{ ExitCode = $code; Log = $log }
}

<# 從 mvn log 擷取給學員看的重點：失敗的測試與原因、統計、BUILD 結果 #>
function Show-Summary {
    param([string]$Log)
    Get-Content -LiteralPath $Log -Encoding utf8 |
        Select-String -Pattern '<<< (FAILURE|ERROR)!|AssertionError|expected|but was|Tests run: \d+, Fail|BUILD (SUCCESS|FAILURE)|COMPILATION ERROR' |
        Where-Object { $_.Line -notmatch '^\s+at ' } |
        Select-Object -First 30 |
        ForEach-Object { '    ' + $_.Line.Trim() }
}

# 找出要重播的 commit 與它的上一個 commit
$commit = (git -C $RepoPath log --format=%h -n 1 --grep $CommitGrep)
if (-not $commit) { Write-Host "在 $RepoPath 找不到訊息含「$CommitGrep」的 commit" -ForegroundColor Red; exit 1 }
$subject = git -C $RepoPath log --format=%s -n 1 $commit
$parent = git -C $RepoPath rev-parse --short "$commit^"
Write-Host "== 重播 TDD：$commit $subject"
Write-Host "   紅燈 = $parent 的程式 + $commit 的測試；綠燈 = 再放上 $commit 的實作；測試：$Tests"

if (Test-Path -LiteralPath $WorkDir) { Remove-Item -LiteralPath $WorkDir -Recurse -Force }
New-Item -ItemType Directory -Path $WorkDir | Out-Null

try {
    Write-Host "`n== 紅燈：只有測試、還沒有實作（mvn test 執行中，約 1～2 分鐘）" -ForegroundColor Red
    Export-Commit $parent
    Export-Commit $commit @('src/test')
    # 移除這個 commit 新增、但這次不示範的測試檔（它們會直接引用還不存在的類別而編譯失敗）
    $wanted = $Tests -split ',' | ForEach-Object { $_.Trim() }
    git -C $RepoPath diff --name-only --diff-filter=A $parent $commit -- src/test | ForEach-Object {
        if ([System.IO.Path]::GetFileNameWithoutExtension($_) -notin $wanted) {
            Remove-Item -LiteralPath (Join-Path $WorkDir $_) -ErrorAction SilentlyContinue
            Write-Host "   （先移除本次不示範的新測試：$_）"
        }
    }
    $red = Invoke-MvnTest 'red'
    Show-Summary $red.Log
    if ($red.ExitCode -eq 0) { Write-Host '   注意：紅燈階段竟然全部通過，表示測試沒有測到新功能，要先檢查測試。' -ForegroundColor Yellow }
    elseif (Select-String -LiteralPath $red.Log -Pattern 'COMPILATION ERROR' -Quiet) {
        Write-Host '   注意：這是編譯錯誤，不是「功能還沒做」的紅燈；請 AI 先補上空的類別或方法簽章，讓測試能編譯。' -ForegroundColor Yellow
    } else { Write-Host '   紅燈原因正確：API 還不存在（404）、斷言失敗，不是編譯錯誤。' -ForegroundColor Red }

    Write-Host "`n== 綠燈：放上實作，再跑一次同樣的測試" -ForegroundColor Green
    Export-Commit $commit @('src/main')
    $green = Invoke-MvnTest 'green'
    Show-Summary $green.Log
    if ($green.ExitCode -eq 0) { Write-Host '   綠燈：同一批測試全部通過，而且測試檔一個字都沒改。' -ForegroundColor Green }
    else { Write-Host "   綠燈失敗，請看 $($green.Log)" -ForegroundColor Yellow }
    Write-Host "`n完整輸出：$($red.Log)、$($green.Log)"
    $redCompileError = Select-String -LiteralPath $red.Log -Pattern 'COMPILATION ERROR' -Quiet
    exit ([int]($red.ExitCode -eq 0 -or $redCompileError -or $green.ExitCode -ne 0))
} finally {
    if (-not $Keep) {
        # 保留 log 方便事後查看，其餘刪掉
        Get-ChildItem -LiteralPath $WorkDir -Exclude 'mvn-*.log' | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
    }
}
