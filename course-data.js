window.COURSE = {
  meta: {
    title: '新一代全端 AI 開發流程實戰',
    subtitle: '結合 Spring Boot 4 與 React 19，從後端分層、向量資料庫到以 ui-ux-pro-max 設計系統打造的前端客服介面，完成具備 RAG 長期記憶與 MCP 工具鏈的智慧電商客服系統。',
    audience: '具備 Java 基礎，想建立 Spring Boot 與 AI 應用整合能力的開發者',
    totalHours: '共 14 小時（2 天 × 7 小時；Day 0 開場導覽併入第一天上午）',
    projectName: '智慧商城客服系統',
    heroImage: 'assets/teaching-site/09-home-hero-overview.png',
    overviewImage: 'assets/teaching-site/00-course-overview.png',
    chapterGridImage: 'assets/teaching-site/10-chapter-thumbnail-set.png',
    demoUrl: 'http://localhost:8080/',
    prerequisites: [
      'JDK 21',
      'Maven 3.9+',
      'Docker Desktop',
      'VS Code 與 Java / Spring 外掛',
      'Groq API Key（免費）或 Meta Muse Spark API Key（成本價）',
      'Voyage AI API Key（voyage-4 向量 / rerank-3 重排序）'
    ],
    outcomes: [
      '建立 Spring Boot 三層式 REST API 與資料持久化流程',
      '使用 Docker、PostgreSQL、pgvector 與 Flyway 管理資料庫',
      '透過 Spring AI 建立串流對話、工具呼叫與 RAG 問答能力',
      '完成可展示、可驗證、可持續擴充的智慧商城客服系統'
    ],
    techStack: [
      'Spring Boot 4.0.x',
      'Spring AI 2.0.2',
      'Spring Data JPA',
      'PostgreSQL / pgvector',
      'Flyway',
      'ChatClient / SSE / MCP'
    ]
  },
  overview: {
    pillars: [
      {
        label: '課程定位',
        value: '工程底盤 + AI 整合',
        detail: '先把後端責任邊界講清楚，再把模型、工具與知識庫接回同一個應用。'
      },
      {
        label: '教學方式',
        value: '圖解 + 程式碼 + 驗證',
        detail: '每章都用生活化圖解建立直覺，再回到實際專案與設定檔驗證。'
      },
      {
        label: '課程產出',
        value: '教學網站 + 可執行專案',
        detail: '課程不是只看說明，而是同步保留 Spring Boot 範例與對話 Demo。'
      },
      {
        label: '完成標準',
        value: '可啟動、可問答、可擴充',
        detail: '資料庫能起、API 能回、模型能查資料、RAG 能回答知識問題。'
      }
    ]
  },
  days: [
    {
      id: 'day0',
      label: 'Day 0',
      title: '開場導覽：AI 協作工具與作品展示',
      lead: '正式寫程式前，先把 AI 助手、長期記憶與版本控制準備好，再看幾個用同一套方法做出來的 AI 應用。',
      units: [
        {
          id: 'd0-u1',
          chapter: '0-1',
          title: 'VS Code 的 Claude Code、插件、deep-memory 記憶、Git / gh 與 Playwright',
          summary: '安裝與管理 Claude Code 插件，用 deep-memory 技能讓 AI 累積經驗、去蕪存菁，越做越好；再用 Git 與 gh 把每一步成果安全地保存與分享。',
          source: 'docs/Day0-1-ClaudeCode-Memory-Git.md',
          heroImage: 'assets/teaching-site/14-ch0-1-claude-code-memory-git.png',
          diagramImage: 'assets/teaching-site/14-ch0-1-claude-code-memory-git.png',
          diagramCaption: '插件擴充 AI 的能力，記憶讓 AI 記得做過的事，Git 讓每一步都能回頭。',
          goals: [
            '認識 Claude Code 的幾種使用方式，安裝並登入 VS Code 的 Claude Code 延伸模組',
            '會用插件管理畫面（VS Code 的 Claude Code 插件或 Claude 桌面版）加入 marketplace、安裝、停用與更新插件',
            '理解 deep-memory 的冷庫 → 精煉 → 熱庫流程，以及為什麼能讓任務越做越好',
            '會用 git 建立版本、分支與推送，並用 gh 建立 repo 與 Pull Request',
            '會用 Playwright 腳本驗證畫面，讓 AI 的「改好了」有實跑證據'
          ],
          tasks: [
            { id: 'd0-u1-t0', text: '在 VS Code 安裝 Claude Code 延伸模組並登入，選取一段程式碼用 Alt+K 引用後提問' },
            { id: 'd0-u1-t0a', text: '用 `$PSVersionTable.PSVersion` 確認 PowerShell 為 7 以上（不足就用 `winget install --id Microsoft.PowerShell -e` 安裝或 `winget upgrade` 升級），並把 VS Code 與 Windows Terminal 的預設終端機改成 PowerShell 7（Mac 用 `brew install powershell`，見 macOS 對照段）' },
            { id: 'd0-u1-t0b', text: '請 AI Agent 用 winget 安裝 Node.js LTS 與 Python 3，確認 node、npm、python 版本都印得出來' },
            { id: 'd0-u1-t1', text: '用插件管理畫面（VS Code 插件版或桌面版）安裝一個官方插件（例如 context7），並確認已啟用' },
            { id: 'd0-u1-t2', text: '安裝 deep-memory 技能，完成一次任務後確認 `~/.deep-memory/cold-notes/raw.jsonl` 有新紀錄' },
            { id: 'd0-u1-t3', text: '執行 `gh auth login` 登入，並用 `gh repo create` 把課程專案推上 GitHub' },
            { id: 'd0-u1-t4', text: '安裝 Playwright，請 AI 寫一支開網頁並截圖的腳本放進 `e2e/` 並實際執行' },
            { id: 'd0-u1-t5', text: '請 AI 開分支、列出變更、commit，並用 gh 開一個 Pull Request' },
            { id: 'd0-u1-t6', text: '把「把規則寫進 CLAUDE.md」段的精簡範本放進自己課程專案的根目錄，開新對話問 AI「這個專案有哪些開發規則」，確認它答得出任務分級' }
          ],
          sections: [
            {
              title: 'Claude Code 的幾種使用方式：本課用 VS Code 延伸模組',
              type: 'text',
              paragraphs: [
                'Claude Code 是會讀專案、改檔案、跑指令、看測試結果再自己修正的 AI 開發助手。同一個 Claude Code 有好幾種入口，帳號、設定（<code>~/.claude/settings.json</code>）、插件與技能都共用：',
                '<strong>本課程統一使用 VS Code 的 Claude Code 延伸模組</strong>：程式碼、終端機、AI 對話都在同一個視窗，AI 改了哪幾行會直接用 diff 顯示，逐處決定接受或拒絕，最適合邊學邊看懂 AI 做了什麼。',
                '<a href="assets/vscode/vs-code-extension-interface.jpg" target="_blank"><img src="assets/vscode/vs-code-extension-interface.jpg" alt="VS Code 右側開啟 Claude Code 面板與 Claude 對話" style="width:100%;max-width:760px;border-radius:12px;border:1px solid var(--border);"></a><br><small>VS Code 右側為 Claude Code 面板（圖片來源：Claude Code 官方文件）</small>'
              ],
              bullets: [
                '<strong>VS Code 延伸模組（本課使用）</strong>：圖形化對話面板，支援 diff 審核、@ 引用檔案與選取行、Plan 模式、對話歷史。Cursor 等 VS Code 分支也能裝。',
                '<strong>終端機 CLI</strong>：在任何終端機輸入 <code>claude</code>，適合 SSH 遠端主機與自動化腳本；需另外安裝 CLI（延伸模組不會把 <code>claude</code> 加進 PATH）。',
                '<strong>JetBrains 外掛</strong>：IntelliJ IDEA 等 IDE 的整合，習慣 IntelliJ 寫 Java 的人可用。',
                '<strong>桌面 App 與網頁版</strong>：<a href="https://claude.ai/code" target="_blank">claude.ai/code</a> 在雲端執行，不必開電腦；雲端對話也能在 VS Code 接續。'
              ]
            },
            {
              title: '安裝與使用 VS Code 的 Claude Code 延伸模組',
              type: 'text',
              paragraphs: [
                '需求：VS Code 1.94 以上，以及 Claude 付費訂閱（Pro / Max / Team / Enterprise）或 Claude Console 帳號，不需要自己填 API Key。',
                '<a href="assets/vscode/vs-code-editor-icon.png" target="_blank"><img src="assets/vscode/vs-code-editor-icon.png" alt="編輯器右上角的 Spark 圖示" style="width:100%;max-width:760px;border-radius:12px;border:1px solid var(--border);"></a><br><small>開啟任一檔案後，編輯器右上角的 Spark 圖示可開啟 Claude Code</small>',
                '<a href="assets/vscode/vs-code-send-prompt.png" target="_blank"><img src="assets/vscode/vs-code-send-prompt.png" alt="選取程式碼後用 @ 引用並提問" style="width:100%;max-width:760px;border-radius:12px;border:1px solid var(--border);"></a><br><small>選取第 2～3 行後提問，面板自動帶入 @檔名#行號 引用</small>',
                '<a href="assets/vscode/vs-code-edits.png" target="_blank"><img src="assets/vscode/vs-code-edits.png" alt="Claude 提出修改的 diff 與權限詢問" style="width:100%;max-width:760px;border-radius:12px;border:1px solid var(--border);"></a><br><small>AI 要改檔時先顯示 diff，按接受才會寫入</small>'
              ],
              bullets: [
                '安裝：按 <kbd>Ctrl+Shift+X</kbd> 開延伸模組，搜尋「Claude Code」（發行者 Anthropic）按 Install；找不到就重新載入視窗。',
                '開啟面板：點編輯器右上角的 Spark 圖示、左側活動列，或狀態列的「✻ Claude Code」。',
                '登入：按 Sign in，在瀏覽器完成授權。',
                '提問時按 <kbd>Alt+K</kbd> 插入目前選取範圍的 @ 引用（例如 <code>@ChatController.java#20-35</code>），也能用 <code>@terminal</code> 引用終端機輸出。',
                '權限模式可在輸入框切換：Manual（每次改檔都問，初學建議）、Edit automatically、Plan（先出計畫給你批註再動手）、Auto。',
                '課程中所有「AI Agent 提示詞」都貼到這個面板執行；<code>/model</code> 等斜線指令也在這裡輸入。'
              ]
            },
            {
              title: '先把 PowerShell 升級到 7：課程指令的執行環境',
              type: 'code',
              paragraphs: [
                '本課程所有給你手動執行的指令、講師示範腳本都以 <strong>PowerShell 7</strong>（指令名稱 <code>pwsh</code>）為準。Windows 內建的是 <strong>Windows PowerShell 5.1</strong>（指令名稱 <code>powershell</code>），版本太舊：不支援 <code>&amp;&amp;</code>、<code>||</code>、<code>??</code>、三元運算子 <code>? :</code>，<code>Invoke-RestMethod</code> 也沒有 <code>-SkipHttpErrorCheck</code>、<code>-StatusCodeVariable</code>（1-9 章的示範腳本會用到），中文輸出也容易變亂碼。',
                '兩個版本可以並存，安裝 PowerShell 7 不會移除 5.1。先查版本，不是 7 就用 <code>winget</code> 安裝或升級；裝好之後開新的終端機輸入 <code>pwsh</code>（不是 <code>powershell</code>）。'
              ],
              bullets: [
                '<strong>查版本</strong>：<code>$PSVersionTable.PSVersion</code> 的 Major 要是 7 以上。',
                '<strong>VS Code</strong>：終端機面板右上角的 ˅ → <em>Select Default Profile</em> → 選 <strong>PowerShell</strong>（不是 Windows PowerShell）；或在設定加上 <code>"terminal.integrated.defaultProfile.windows": "PowerShell"</code>。改完開一個新的終端機才會生效。',
                '<strong>Windows Terminal</strong>：設定 → 啟動 → 預設設定檔，選 <strong>PowerShell</strong>（圖示是黑底，不是藍底的 Windows PowerShell），儲存。',
                '<strong>常見問題</strong>：裝完輸入 <code>pwsh</code> 說找不到指令，是 Path 還沒更新——關掉所有終端機與 VS Code 再開；公司電腦沒有 winget 時，到 Microsoft Store 搜尋「PowerShell」安裝。'
              ],
              code: {
                language: 'powershell',
                title: 'PowerShell — 安裝或升級到 PowerShell 7',
                content: '# 1. 查目前版本（Major 為 7 以上才符合課程需求）\n$PSVersionTable.PSVersion\n\n# 2. 還沒有 PowerShell 7：用 winget 安裝\nwinget install --id Microsoft.PowerShell -e\n\n# 3. 已經有、但不是最新版：升級\nwinget upgrade --id Microsoft.PowerShell -e\n\n# 4. 關掉終端機重開，改用 pwsh 啟動（不是 powershell）\npwsh\n$PSVersionTable.PSVersion          # 應顯示 7.x\n\n# 5. 確認 PowerShell 7 才有的語法可以用\nGet-Date && \'PowerShell 7 OK\'\n$null ?? \'空值合併運算子 OK\''
              }
            },
            {
              title: '先裝好 Node.js 與 Python：技能與工具的執行環境',
              type: 'code',
              paragraphs: [
                '接下來安裝的技能和工具，背後都要靠這兩個執行環境：<code>npx skills add</code>（安裝 deep-memory 等技能）、Playwright、2-4 章的 React（Vite）需要 <strong>Node.js</strong>；deep-memory 的記憶腳本、2-5 章的 ui-ux-pro-max 設計搜尋需要 <strong>Python 3</strong>。少了任何一個，後面會在第一次執行時直接報錯。',
                '和 1-1 章安裝 JDK 一樣，直接請 AI Agent 用 Windows 內建的 <code>winget</code> 安裝。裝完一定要<strong>關掉並重開 VS Code</strong>，新的 Path 才會生效。',
                '常見問題：輸入 <code>python</code> 卻跳出 Microsoft Store，是 Windows 的「應用程式執行別名」攔截了指令。到「設定 → 應用程式 → 進階應用程式設定 → 應用程式執行別名」把 python.exe、python3.exe 關掉即可。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 安裝 Node.js LTS 與 Python 3',
                content: '我使用 Windows 11，請用 winget 幫我安裝：\n1. Node.js LTS（winget install --id OpenJS.NodeJS.LTS -e）\n2. Python 3.12（winget install --id Python.Python.3.12 -e）\n安裝完成後請用 PowerShell 執行 node -v、npm -v、python --version，把結果顯示給我確認。\n如果 python 指令打開了 Microsoft Store，請告訴我怎麼關掉「應用程式執行別名」。\n\n# 驗證（重開 VS Code 後在 PowerShell 執行）\n# node -v      → v22.x 或更新\n# npm -v       → 10.x 或更新\n# python --version → Python 3.12.x'
              }
            },
            {
              title: 'macOS 對照：用 Homebrew 安裝課程環境',
              type: 'code',
              paragraphs: [
                '課程畫面與指令以 Windows 為主。用 Mac 的學員，用 <a href="https://brew.sh/" target="_blank">Homebrew</a> 安裝同一套工具：先裝 Homebrew，再用 <code>brew</code> 一次裝好 Node.js、Python、Git、gh、PowerShell 7、Docker Desktop、JDK 21 與 Maven。裝好 PowerShell 7 後，課程裡的 PowerShell 指令在 Mac 上一樣用 <code>pwsh</code> 執行。',
                '<strong>注意：macOS 指令依官方文件整理（<a href="https://brew.sh" target="_blank">brew.sh</a>、<a href="https://formulae.brew.sh" target="_blank">formulae.brew.sh</a>、Microsoft Learn、Docker 官方文件，2026-11 查證），講師未在 Mac 實測。</strong>遇到問題請以 <code>brew info 套件名稱</code> 顯示的說明為準。'
              ],
              bullets: [
                '<strong>Windows ↔ macOS 對照</strong>：<code>winget install --id OpenJS.NodeJS.LTS</code> ↔ <code>brew install node</code>；<code>Python.Python.3.12</code> ↔ <code>brew install python@3.12</code>（指令是 <code>python3</code>，不是 <code>python</code>）；<code>GitHub.cli</code> ↔ <code>brew install gh</code>；<code>Microsoft.PowerShell</code> ↔ <code>brew install powershell</code>；Docker Desktop ↔ <code>brew install --cask docker-desktop</code>（舊名 <code>docker</code> 已改名）。',
                '<strong>PowerShell 7</strong>：Homebrew 現在是 <strong>formula</strong> <code>brew install powershell</code>（不是 <code>--cask</code>；舊的 cask 若裝過，先 <code>brew uninstall --cask powershell</code>）；升級用 <code>brew update</code> 再 <code>brew upgrade powershell</code>。Microsoft 官方較推薦下載 .pkg 安裝檔（Homebrew 版由社群維護）。裝好後在終端機輸入 <code>pwsh</code>，VS Code 終端機的 ˅ → <em>Select Default Profile</em> 選 <strong>pwsh</strong>。',
                '<strong>JDK 21 擇一</strong>：<code>brew install --cask temurin@21</code>（Eclipse Temurin 安裝檔，會裝到系統 Java 目錄，與 Windows 版本一致，建議用這個）；或 <code>brew install openjdk@21</code>——這是 keg-only，不會自動放進 PATH，要照官方說明建立 symlink，<code>/usr/libexec/java_home</code> 才找得到。',
                '<strong>JAVA_HOME 一定要指向 21</strong>：<code>brew install maven</code> 會另外帶一個最新版的 openjdk 當相依套件；Homebrew 的 mvn 在 <code>JAVA_HOME</code> 沒設定時會用那一版。所以在 <code>~/.zshrc</code> 設定 <code>export JAVA_HOME=$(/usr/libexec/java_home -v 21)</code>，<code>mvn -version</code> 的 Java version 要顯示 21。',
                '<strong>Homebrew 的 PATH</strong>：Apple Silicon 預設裝在 <code>/opt/homebrew</code>，安裝完要把 <code>eval "$(/opt/homebrew/bin/brew shellenv)"</code> 加進 <code>~/.zshrc</code>（安裝程式最後會提示，照著做即可）。',
                '<strong>Docker Desktop</strong>：第一次要從「應用程式」開啟 Docker.app 並同意服務條款才會啟動；Apple Silicon 不一定需要 Rosetta，若某些工具要求再執行 <code>softwareupdate --install-rosetta</code>。也可以直接到 Docker 官網下載對應晶片的 Docker.dmg。'
              ],
              code: {
                language: 'bash',
                title: 'macOS 終端機（zsh）— 用 Homebrew 安裝課程環境（依官方文件整理，未在 Mac 實測）',
                content: '# 1. 安裝 Homebrew（brew.sh 官方指令），完成後照提示把 brew shellenv 加進 ~/.zshrc\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\necho \'eval "$(/opt/homebrew/bin/brew shellenv)"\' >> ~/.zshrc   # Apple Silicon 的預設路徑\neval "$(/opt/homebrew/bin/brew shellenv)"\n\n# 2. Node.js、Python、Git、gh\nbrew install node python@3.12 git gh\n\n# 3. PowerShell 7（Homebrew formula；之後課程的 PowerShell 指令用 pwsh 執行）\nbrew install powershell\n# 升級：brew update && brew upgrade powershell\n\n# 4. Docker Desktop（cask 名稱是 docker-desktop），裝完到「應用程式」開啟 Docker.app\nbrew install --cask docker-desktop\n\n# 5. JDK 21（擇一）與 Maven\nbrew install --cask temurin@21\n# 或：brew install openjdk@21，再建立 symlink 讓系統找得到（官方 caveats）\n# sudo ln -sfn $HOMEBREW_PREFIX/opt/openjdk@21/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-21.jdk\nbrew install maven\n\n# 6. JAVA_HOME 指向 21（Maven 會另外帶最新版 openjdk，不設定就不會用 21）\necho \'export JAVA_HOME=$(/usr/libexec/java_home -v 21)\' >> ~/.zshrc\nsource ~/.zshrc\n\n# 7. 驗證\nnode -v && npm -v\npython3 --version          # macOS 用 python3\ngit --version && gh --version\npwsh -Version              # PowerShell 7.x\njava -version              # 21\nmvn -version               # Java version: 21\ndocker --version'
              }
            },
            {
              title: 'Claude Code 是什麼，插件又是什麼',
              type: 'text',
              paragraphs: [
                '整門課的「AI Agent 提示詞」都交給 VS Code 裡的 Claude Code 執行。',
                '<strong>插件（Plugin）</strong>是把一組能力打包好的擴充套件，裡面可以有<strong>技能（Skills）</strong>、斜線指令、subagent（子代理）、Hooks 與 MCP 伺服器。插件從 <strong>Marketplace</strong>（通常是一個 GitHub repo）安裝，就像手機從 App Store 裝 App。'
              ]
            },
            {
              title: '插件的常用操作',
              type: 'code',
              paragraphs: [
                '插件用 Claude Code 的<strong>插件管理畫面</strong>安裝，不必輸入指令。VS Code 的 Claude Code 插件與 Claude 桌面版都有這個畫面，兩邊共用同一份設定，在哪一邊裝都可以；瀏覽、安裝、啟用、停用、移除與更新也都在這個畫面。'
              ],
              bullets: [
                '插件裝在使用者層級，所有專案共用；技能也可以手動放在 <code>~/.claude/skills/&lt;技能名&gt;/SKILL.md</code>。',
                '課程推薦：<code>context7</code>（查最新框架文件）、<code>code-review</code>（審查程式）、<code>commit-commands</code>（產生 commit）、<code>document-skills</code>（產生 Word / PPT / PDF）。',
                '只裝信任來源的插件：插件可以執行指令與連線外部服務，安裝前先看它的 repo。'
              ],
              code: {
                language: 'text',
                title: '插件管理畫面 — 安裝步驟（VS Code 插件版、桌面版相同）',
                content: '1. 開啟插件管理畫面（VS Code：在 Claude Code 面板；桌面版：在 Claude 的設定）\n2. 新增 marketplace：輸入 GitHub repo（擁有者/倉庫），例如 anthropics/claude-plugins-official\n3. 在 marketplace 的清單找到要裝的插件，例如 context7，按安裝\n4. 裝完重新開啟 VS Code 或桌面版，回到管理畫面確認插件已啟用\n5. 之後要停用、移除或更新插件清單，也在同一個畫面操作\n\n# 技能包也可以用 Skills CLI 從 GitHub 安裝（在 PowerShell 執行）\n# npx skills add kevintsai1202/law-powers -g --all'
              }
            },
            {
              title: 'deep-memory：讓 AI 有長期記憶',
              type: 'text',
              paragraphs: [
                'Claude Code 每開一個新對話就會忘記上一次學到的事：上週踩過的坑、某個指令的正確參數、你偏好的寫法。<strong>deep-memory</strong> 技能把這些經驗存到本機 <code>~/.deep-memory</code>，下次開工時自動找出相關的紀錄帶進對話。',
                '它採<strong>冷熱兩層</strong>設計：每個回合結束都先快速寫一筆到<strong>冷庫</strong>（不挑、不判斷，原始紀錄全留）；累積一段時間後，說一聲「幫我精煉冷庫」，AI 會把重複的合併、過時的淘汰、真正有用的整理成<strong>熱庫</strong>的知識條目（<code>knowledge-base/</code>）與技能經驗（<code>experience/</code>）。',
                '這裡只列安裝與基本概念；每回合實際做了什麼、精煉與備份的指令、隱私注意事項，完整說明見<a href="#d2-u10">補充章節 2-10「AI 開發工作流程」</a>。'
              ],
              bullets: [
                '<strong>冷庫</strong> <code>cold-notes/raw.jsonl</code>：每回合自動寫入，什麼都記，事後才篩。',
                '<strong>熱庫</strong> <code>knowledge-base/*.md</code>、<code>experience/skill-*.md</code>：精煉後的結論，經你確認才寫入。',
                '<strong>檢索</strong>：先用關鍵字比對熱庫分類，比不到再用 ChromaDB 向量＋關鍵字混合搜尋（就是 Day 2 教的 RAG）。',
                '<strong>備份</strong>：記憶可以推到自己的 GitHub 私有 repo，換電腦也帶得走。',
                '介紹與文件：<a href="https://kevintsai1202.github.io/deep-memory/" target="_blank">deep-memory 官方網站</a> · <a href="https://github.com/kevintsai1202/deep-memory" target="_blank">GitHub</a>'
              ],
              code: {
                language: 'powershell',
                title: 'PowerShell — 安裝 deep-memory 技能',
                content: '# 以 Skills CLI 安裝到使用者層級（所有專案共用）\nnpx skills add kevintsai1202/deep-memory --all -g\n\n# 安裝後重開 Claude Code，第一次觸發時會提示安裝種子知識庫\n# 記憶資料預設存放在 ~/.deep-memory（純本機、可離線）'
              }
            },
            {
              title: '為什麼記憶會讓任務越做越好：去蕪存菁',
              type: 'text',
              paragraphs: [
                '記憶不是越多越好。全部塞給 AI 只會讓它分心，所以 deep-memory 的重點在<strong>精煉</strong>：把一百筆零散紀錄濃縮成十條可以直接照做的經驗，錯的刪掉、過時的更新、重複的合併。',
                '這形成一個正向循環：做任務 → 記下踩的坑與解法 → 精煉成經驗 → 下次同類任務一開始就載入 → 少走冤枉路 → 再記下新的發現。用得越久，AI 越懂你的專案、你的環境與你的偏好。'
              ],
              bullets: [
                '實例：某次背景測試因 IDE 的 Java 語言伺服器常駐，被誤判為「測試還在跑」而空等 2 小時。這件事記進經驗後，往後都改看 log 行數有沒有增加，不再誤判。',
                '實例：本課程網站的深色模式對比、手機版溢出問題修好後，修法寫回設計系統技能，下一個教學網站一開始就不會再犯。',
                '你的角色：AI 問「要不要寫進熱庫」時，只確認真正值得重用的；這一步的品質決定記憶的品質。'
              ],
              code: {
                language: 'text',
                title: '常用口令（直接對 Claude Code 說）',
                content: '幫我精煉冷庫          # 冷庫 → 熱庫，去重、合併、淘汰\n幫我精煉經驗          # 把技能使用心得整理進 experience/\n產生記憶儀表板        # 輸出可離線開啟的記憶視覺化 HTML\n有沒有關於 Flyway 的紀錄  # 主動檢索過去的經驗'
              }
            },
            {
              title: 'Git：替程式存檔，隨時可以回頭',
              type: 'code',
              paragraphs: [
                'AI 一次可能改十幾個檔，改壞了要能一鍵回到上一個好的狀態。Git 就是程式的存檔系統：每個 <strong>commit</strong> 是一個存檔點，<strong>branch</strong> 讓你在不影響主線的情況下試新做法。',
                '和 AI 協作的建議節奏：<strong>開新功能先開分支 → AI 改完先跑測試 → 通過才 commit</strong>。這樣 AI 改錯時，最多只損失一個小步驟。'
              ],
              code: {
                language: 'powershell',
                title: 'PowerShell — Git 日常操作',
                content: '# 第一次使用：設定身分（1-1 章已做過可略過）\ngit config --global user.name "Your Name"\ngit config --global user.email "you@example.com"\n\n# 建立版本庫並做第一個存檔點\ngit init\ngit add .\ngit commit -m "初始化課程專案"\n\n# 開分支做新功能，完成後合併回主線\ngit switch -c feature/ai-chat\ngit add .\ngit commit -m "新增 AI 對話端點"\ngit switch main\ngit merge feature/ai-chat\n\n# 看歷史、看差異、放棄尚未 commit 的修改\ngit log --oneline -10\ngit diff\ngit restore .'
              }
            },
            {
              title: 'gh：在終端機操作 GitHub',
              type: 'code',
              paragraphs: [
                '<code>gh</code> 是 GitHub 官方 CLI，讓你不用開瀏覽器就能建 repo、開 Pull Request、看 Issue。Claude Code 也會用 <code>gh</code> 幫你送 PR、讀 review 意見，所以先登入好，AI 才能代勞。'
              ],
              bullets: [
                '安裝：<code>winget install --id GitHub.cli</code>，重開終端機後執行 <code>gh auth login</code>，選 GitHub.com → HTTPS → 用瀏覽器登入。',
                '<code>.env</code>、API Key 一定要放進 <code>.gitignore</code>；推上公開 repo 的金鑰要立即作廢重發。'
              ],
              code: {
                language: 'powershell',
                title: 'PowerShell — gh 常用指令',
                content: '# 登入 GitHub（只需一次）\ngh auth login\n\n# 把目前資料夾建成 GitHub 私有 repo 並推上去\ngh repo create learn-spring-demo --private --source . --push\n\n# 推分支並開 Pull Request\ngit push -u origin feature/ai-chat\ngh pr create --title "新增 AI 對話端點" --body "完成 2-1 章 ChatClient 串流"\n\n# 查看 PR 狀態與 Issue\ngh pr status\ngh issue list'
              }
            },
            {
              title: '用 AI 操作 Git 與 gh：說人話就好',
              type: 'code',
              paragraphs: [
                '上面的指令要知道在做什麼，但日常不必自己敲：直接告訴 Claude Code 你要的結果，它會幫你下 git、gh 指令。你要做的是<strong>看它列出的變更、確認後再讓它提交</strong>。',
                '本課程的節奏：<strong>每章開始請 AI 開分支 → 做完、測試通過 → 請 AI commit → 一個段落完成後請 AI 用 gh 開 PR</strong>。AI 改壞了，就請它回到上一個 commit。'
              ],
              bullets: [
                '<strong>commit 前先看清單</strong>：要求 AI「先列出要提交的檔案和差異摘要，等我確認」，避免把不相關或機密的檔案一起送出。',
                '<strong>訊息要說為什麼</strong>：請 AI 用繁體中文寫 commit 訊息，第一行說做了什麼，內文說原因，之後回頭查才看得懂。',
                '<strong>改壞了不要慌</strong>：說「放棄這次的修改，回到上一個 commit」或「這個 commit 有問題，幫我 revert」，AI 會用安全的方式處理；<code>git reset --hard</code>、<code>push --force</code> 這類會丟資料的指令，要它先說明影響再執行。',
                '<strong>.env 與金鑰</strong>：第一次 commit 前請 AI 檢查 <code>.gitignore</code>，確認 <code>.env</code>、金鑰、<code>target/</code>、<code>node_modules/</code> 都排除了。'
              ],
              code: {
                language: 'text',
                title: '對 Claude Code 說的 Git／gh 提示詞範例',
                content: '【開始一章】\n我要開始做 1-9 章的購物車功能，請幫我從 main 開一個新分支，名稱用 feature/cart。\n\n【看改了什麼】\n列出目前修改過的檔案，每個檔案用一句話說明改了什麼。\n\n【提交】\n測試都通過了，請幫我 commit。先列出要提交的檔案給我確認，不要包含 .env 和 logs/。\ncommit 訊息用繁體中文，第一行說明做了什麼，內文說明原因。\n\n【推上 GitHub 並開 PR】\n把這個分支推上 GitHub，並用 gh 開一個 Pull Request 到 main，\n標題寫「1-9 購物車與結帳 API」，內容列出新增的 API 與測試結果。\n\n【改壞了】\n剛剛的修改讓測試失敗了，請放棄這些修改，回到上一個 commit 的狀態，先告訴我會影響哪些檔案。\n\n【看歷史】\n用 git log 列出最近 5 個 commit，並說明每個 commit 做了什麼。'
              }
            },
            {
              title: 'Playwright：讓 AI 幫你操作瀏覽器、驗證畫面',
              type: 'text',
              paragraphs: [
                'Playwright 是微軟開源的瀏覽器自動化工具，可以用程式開網頁、點按鈕、填表單、截圖、檢查畫面上有沒有出現預期的文字。後端 API 用 PowerShell 就能測，但「商品卡片有沒有出現」「聊天室有沒有逐字顯示」這種畫面上的結果，就要靠 Playwright。',
                '和 AI 協作時它特別重要：AI 說「改好了」不算數，<strong>讓它寫一支 Playwright 腳本實際跑過、截圖給你看</strong>才算。本課程 2-8 章的完整系統驗證，就是用 Playwright 腳本自動檢查商城展示、商品上架與 AI 客服。'
              ],
              bullets: [
                '<strong>先寫成腳本檔再執行</strong>：不要讓 AI 用一次性的互動指令點來點去。腳本放在專案的 <code>e2e/</code> 或 <code>scripts/</code> 並加中文註解，下次能直接重跑、失敗時能逐行檢查，慢慢就累積成自動化測試。',
                '<strong>用系統內建 Edge</strong>：<code>chromium.launch({ channel: \'msedge\' })</code> 不必另外下載瀏覽器，公司電腦也比較容易過。',
                '<strong>錄製產生程式</strong>：<code>npx playwright codegen 網址</code> 會開瀏覽器記錄你的操作並即時產生程式碼，適合拿來給 AI 當起點。',
                '<strong>給 Claude Code 用</strong>：安裝 <code>chrome-devtools-mcp</code> 插件或 Playwright MCP 後，AI 可以直接開頁面看畫面、讀 console 錯誤，除錯前端時非常好用。'
              ]
            },
            {
              title: '安裝與第一支 Playwright 腳本',
              type: 'code',
              code: {
                language: 'powershell',
                title: 'PowerShell 安裝 ＋ e2e/verify-home.mjs 範例',
                content: '# ── 安裝（在前端專案目錄執行）──\nnpm install -D playwright\n# 若不用系統 Edge，才需要下載 Playwright 自帶的瀏覽器\n# npx playwright install chromium\n\n# ── e2e/verify-home.mjs：驗證商城首頁看得到商品 ──\n// 用途：開啟首頁，確認商品卡片出現並截圖存證\n// 執行：node e2e/verify-home.mjs（先啟動前端 npm run dev）\nimport { chromium } from \'playwright\';\nimport assert from \'node:assert\';\n\nconst browser = await chromium.launch({ channel: \'msedge\' });\nconst page = await browser.newPage();\ntry {\n  await page.goto(\'http://localhost:5173/\', { waitUntil: \'networkidle\' });\n  // 等商品卡片出現，最多 10 秒\n  await page.waitForSelector(\'.product-card\', { timeout: 10000 });\n  const count = await page.locator(\'.product-card\').count();\n  assert.ok(count > 0, \'首頁應至少有一張商品卡片\');\n  await page.screenshot({ path: \'e2e/home.png\', fullPage: true });\n  console.log(`✅ 首頁商品卡片 ${count} 張，截圖已存 e2e/home.png`);\n} finally {\n  await browser.close();\n}\n\n# ── 對 AI 下指令的範例 ──\n# 「請寫一支 Playwright 腳本放在 e2e/，用 user 登入後在聊天視窗問\n#   『無線耳機 Pro 還有多少庫存？』，確認回覆有出現數字並截圖，執行給我看結果。」'
              }
            },
            {
              title: 'e2e 測試要注意的事',
              type: 'text',
              paragraphs: [
                'e2e（端對端）測試是用 Playwright 從瀏覽器操作整個系統：開首頁、登入、加入購物袋、結帳、問 AI 客服，確認每一步畫面與資料都正確。它最接近真實使用者，但也最容易「時好時壞」。請 AI 寫 e2e 時，把下面幾點直接寫進提示詞。'
              ],
              bullets: [
                '<strong>等條件，不要等秒數</strong>：用 <code>waitForSelector</code>、<code>waitForFunction</code> 等「某個元素出現」「按鈕恢復可按」，不要用 <code>waitForTimeout(3000)</code> 硬等——電腦慢就失敗、電腦快就浪費時間。',
                '<strong>選擇器要穩定</strong>：用固定的 class（如 <code>.product-card</code>）、表單的 <code>name</code> 或按鈕的角色與名稱，不要依賴版面位置或樣式；改版時保留這些 class，測試才不會全壞（2-5 章末升級就是這樣做的）。',
                '<strong>測試資料要自己收拾</strong>：測試會上架商品、建立訂單、扣庫存，結束時要刪掉或取消，否則下一次執行的結果會不一樣。',
                '<strong>AI 回覆有隨機性</strong>：不要比對整句話，改檢查「有出現數字」「數字和資料庫一致」「後端日誌有呼叫對應工具」。',
                '<strong>和資料庫交叉比對</strong>：畫面上的庫存、訂單筆數，要和 API 或資料庫查到的一致才算通過。',
                '<strong>一次只跑一支吃資源的測試</strong>：多支 e2e 或建置同時跑會互相拖慢，造成假的逾時失敗。',
                '<strong>失敗先看證據</strong>：請 AI 在失敗時截圖、印出 console 錯誤與後端日誌，看完原因再改，不要直接把等待時間調長。'
              ]
            },
            {
              title: '用 AI 做 TDD：先寫會失敗的測試',
              type: 'code',
              paragraphs: [
                'TDD（測試驅動開發）的順序是 <strong>紅 → 綠 → 重構</strong>：先寫一個會失敗的測試（紅），再寫剛好讓它通過的程式（綠），最後在測試保護下整理程式（重構）。',
                '和 AI 協作時 TDD 特別有用：測試先寫好，AI 改錯時會立刻被抓到；你也能用測試描述「我要的行為」，比用文字描述更精確。1-9 章的購物車與結帳 API 會完整走一次這個流程。',
                '最常見的陷阱：AI 為了讓測試通過去改測試。所以提示詞要明講<strong>「不准修改測試的斷言」</strong>；並且在紅燈階段確認失敗原因是「功能還沒做」，而不是編譯錯誤或測試本身寫錯。'
              ],
              code: {
                language: 'text',
                title: 'TDD 三段提示詞範例',
                content: '【紅：只寫測試】\n我要做「加入購物車」功能：同一商品再次加入時數量累加，超過庫存要回 409。\n請先只寫測試（CartServiceTest），不要寫實作。寫完執行 mvn test，把失敗訊息給我看，\n並說明每個測試失敗的原因是不是「功能還沒實作」。\n\n【綠：實作到通過】\n失敗原因正確。現在請實作 CartService，讓這些測試通過。不准修改測試的斷言；\n如果你認為測試寫錯了，先停下來告訴我原因。完成後執行 mvn test 給我看結果。\n\n【重構：測試保護下整理】\n測試都通過了。請檢查 CartService 有沒有重複的程式碼或命名不清楚的地方，\n整理後再跑一次 mvn test，確認仍然全部通過。'
              }
            },
            {
              title: '把規則寫進 CLAUDE.md：精簡範本、任務分級與權限',
              type: 'text',
              paragraphs: [
                'AI 每開一個新對話都從零開始，上次交代的「用繁體中文」「改完要跑測試」它不會記得。把這些規則寫進 <code>CLAUDE.md</code>，Claude Code 每次開工都會先讀。放在專案根目錄的 <code>CLAUDE.md</code> 只對這個專案有效，可以進版控和同事共用；放在 <code>~/.claude/CLAUDE.md</code> 則套用到你所有的專案。',
                '下方範本是講師自己使用的規則精簡版。第一天就把它放進課程專案的根目錄，再依自己的習慣刪改：在專案根目錄的 PowerShell 執行 <code>code CLAUDE.md</code>，貼上範本後存檔；或直接請 AI「在專案根目錄建立 CLAUDE.md，內容如下」。之後開新對話問 AI「這個專案有哪些開發規則」，答得出來就代表讀到了。',
                '範本裡最重要的是<strong>任務分級</strong>：不是每件事都要走完整流程。開工前先判斷一次層級，查資料就不必寫測試，改功能就一定要先確認理解、先寫測試。'
              ],
              bullets: [
                '<strong>T0 查詢</strong>：不改任何檔案，例如問版本、讀程式、解釋架構。可以省略規劃與 TDD，但結論要有讀檔或跑指令的證據，不憑印象回答。',
                '<strong>T1 單檔機械修改</strong>：只動 1 個檔，而且行為不變或內容由你指定，例如改錯字、改常數、改文案、rename。不碰 API 契約、資料庫、交易、權限。改完仍要跑相關測試或 build。',
                '<strong>T2 非程式產出</strong>：文件、報告、一次性的資料分析。可以省略 TDD，但會被重跑的腳本要寫成檔案並實際跑過。',
                '<strong>T3 其他</strong>：新功能、修 bug、多檔改動、任何改變既有行為的變更。先說明理解等你確認 → 有邏輯變動先寫會失敗的測試（TDD）→ 修 bug 先重現、找出根因再改，不憑猜測連續試改。',
                '<strong>分級的用法</strong>：只在開工前判定一次；做到一半發現要動第二個檔、其實是行為變更，立刻升到 T3 補走流程；判定有疑義時取較高的層級；你明確指定流程（例如「先用 TDD 做」）時照你說的做。省略 TDD 不等於省略驗證，任何層級改完程式都要有實跑證據。',
                '<strong>⚠ 權限被擋下時不要叫 AI 繞過</strong>：auto mode 會擋下它判斷為破壞性的動作，課前驗證時含 <code>DROP COLUMN</code> 的 Flyway 腳本就被擋過。正確做法是先看清楚 AI 要做什麼、為什麼被擋，確認無誤再由你放行（<code>/permissions</code> 的 Recently blocked 分頁），或在設定加一條範圍明確的允許規則；不要叫 AI 改用別的指令把檔案寫進去。',
                '<strong>延伸閱讀</strong>：每條規則的理由、完整版範本、subagent 派工、advisor、權限規則的寫法，見<a href="#d2-u10">補充章節 2-10「AI 開發工作流程」</a>（課後自學）。'
              ],
              code: {
                language: 'markdown',
                title: 'CLAUDE.md — 精簡版範本（放在專案根目錄）',
                content: '# 專案開發規則（CLAUDE.md）\n\n## 語言與環境\n- 回覆、文件、commit 訊息、程式註解用繁體中文；技術名詞與識別字維持原文。\n- 給我手動執行的指令用 PowerShell 7 語法。\n- 本專案：根目錄是 Spring Boot 4 + Spring AI 2.0 後端（pom.xml、src/），前端 React 19 + Vite 在 frontend/。\n  前端的指令與慣例另外寫在 frontend/CLAUDE.md。\n\n## 寫程式\n- 新寫或大幅改寫的函式加中文函式級註解，重要的變數與物件也要註解。\n- 只做這次任務需要的部分。順手發現的重構、額外功能列在回報裡，由我決定。\n- 不准為了讓測試通過去改測試的斷言；認為測試寫錯就先停下來說明原因。\n\n## 任務分級（開工前判定一次）\n- T0 查詢：不修改檔案。結論要有實際查證（讀檔、跑指令），不憑印象。\n- T1 單檔機械修改：只動 1 個檔，行為不變或內容由我指定。改完跑相關測試或 build。\n- T2 非程式產出：文件、報告。可省略 TDD；會重跑的腳本仍要寫成檔案並實際跑過。\n- T3 其他：新功能、修 bug、多檔改動。先說明你的理解等我確認；有邏輯變動先寫會失敗的測試；\n  修 bug 先重現、找出根因再改。\n- 做到一半發現超出原層級，立刻升到 T3；判定有疑義時取較高的層級。\n\n## 驗證\n- 「改好了」要附實跑證據：測試、build 或 Playwright 腳本的輸出。\n- 全套測試、建置這類長時間指令，輸出 tee 到 logs/ 底下的檔案。\n- 收尾只跑和這次改動有關的測試，回報時列出跑了哪些、沒跑哪些與原因。\n- 操作瀏覽器時，先把步驟寫成 e2e/ 或 scripts/ 底下的腳本再執行。\n\n## 安全\n- 金鑰只放 .env，.env 不進 Git。\n- 權限被擋下時停下來告訴我原因，不要換個方式繞過。\n- git reset --hard、push --force、刪資料表這類不可逆操作，先說明影響，等我同意再做。'
              }
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>要實跑證據，不要「應該可以」</strong>：AI 說「改好了」不算數。提示詞結尾一律要求「執行 mvn test 或 Playwright 腳本，把輸出貼給我」，沒有輸出就當作還沒驗證。',
                '<strong>⚠ 測試不讓 AI 自己改</strong>：上面 TDD 提示詞的「不准修改測試的斷言」管的是實作階段：測試失敗就改實作，AI 認為測試寫錯要先停下來說明，由你決定。需求或規格真的變了才改測試，順序固定為「先改規格文件 → 再改測試並看到紅燈 → 最後改實作」，測試的每一處修改都要由你確認。',
                '<strong>⚠ 被權限擋下時不要叫 AI 繞過</strong>：auto mode 的權限分類器會擋下它判斷為破壞性的動作。課前驗證時，含 <code>DROP COLUMN</code> 的 Flyway 腳本被擋過；管理員訂單那一步，整批修改的指令被擋，改成逐檔修改後仍有三個檔案被擋。先看清楚它要做什麼、為什麼被擋，確認無誤再由你放行，不要叫 AI 換個方式繞過。',
                '<strong>一章一個 commit</strong>：課前演練每章完成就 commit，哪一章出問題都能用 <code>git log</code>、<code>git diff</code> 逐章比對，也能退回上一章重做。不要等兩天課做完才第一次 commit。',
                '<strong>金鑰只放 .env，交付前再搜一次</strong>：除了上面 Git 段落說的「commit 前先看清單」，演練交付前還會請 AI 搜尋整個專案目錄（含 <code>logs/</code> 與 <code>.git</code>）有沒有金鑰字串，確認沒有被寫進設定檔或日誌。',
                '<strong>⚠ AI 會讀專案裡的所有檔案</strong>：課前驗證時，AI 讀到專案根目錄的驗證報告，就刻意改變測試的寫法，避開報告記錄的問題。參考答案、筆記、別人的報告不要放在專案目錄裡，否則會左右 AI 的做法。'
              ]
            }
          ]
        },
        {
          id: 'd0-u2',
          chapter: '0-2',
          title: 'AI 應用作品展示',
          summary: '四個用本課程同一套方法（AI 協作開發 + Spring AI / RAG / MCP / 技能）做出來的真實作品，先看終點長什麼樣，再回頭學怎麼做。',
          source: 'docs/Day0-2-AI-Showcase.md',
          heroImage: 'assets/teaching-site/15-ch0-2-ai-showcase.png',
          diagramImage: 'assets/teaching-site/15-ch0-2-ai-showcase.png',
          diagramCaption: '標案估價、法律檢索、文件解析、影片剪輯——四種場景，背後都是「資料 + 檢索 + 模型 + 工具」。',
          goals: [
            '看懂四個作品各自解決什麼問題',
            '對應出每個作品用到本課程的哪些章節技術',
            '想好自己要用課程所學做什麼應用'
          ],
          tasks: [
            { id: 'd0-u2-t1', text: '挑一個作品，寫下它用到的課程技術（例如 RAG、工具呼叫、MCP）' },
            { id: 'd0-u2-t2', text: '寫下一個你自己工作中可以用 AI 解決的情境' }
          ],
          sections: [
            {
              title: '四個作品一覽',
              type: 'text',
              paragraphs: [
                '這四個專案都由講師用 Claude Code 協作開發，技術棧與本課程高度重疊。看的時候試著回答：資料從哪來？怎麼檢索？模型做了什麼判斷？哪些事交給工具？'
              ]
            },
            {
              title: '1. AIBidding — AI 智慧標案估價系統',
              type: 'text',
              paragraphs: [
                '投標廠商最花時間的是估價：每個標案有上百個工程項目，要一項一項查過去的成交價。AIBidding 排程抓取政府電子採購網的新標案，用 AI 解析附件中的工程項目清單（XLS / PDF / XML），比對歷史價格資料庫，自動產出整份標案的參考估價，再透過 Email / LINE 主動通知。',
                '⚠️ 目前為開發中版本，尚未開放外部使用，以下為系統畫面截圖。'
              ],
              image: 'assets/teaching-site/16-showcase-aibidding.png',
              imageAlt: 'AIBidding 入庫標單畫面截圖',
              imageCaption: '入庫標單：AI 解析後的標案工項，可展開明細並一鍵估價（needs_review 代表需人工複核）。',
              bullets: [
                '技術：Spring Boot + Spring AI、PostgreSQL + pgvector、Flyway、React + TypeScript、MinIO、部署在 Zeabur',
                '對應課程：1-3 Docker / Flyway、1-4 JPA、2-2 工具呼叫、2-3 RAG（品項名稱用向量做同義詞模糊比對）',
                '亮點：品項名稱五花八門（「PVC 管 4 吋」vs「4\" PVC 管」），用向量相似度而不是字串比對找歷史價格'
              ]
            },
            {
              title: '2. Law-powers — 台灣法律技能包',
              type: 'text',
              paragraphs: [
                '讓 AI 助手變成可靠的法律研究助理。最大的風險是 AI 編造條文或判決字號，所以技能包的核心是<strong>信任閘門</strong>：AI 必須先透過 MCP 查到法規或判決原文才能回答，所有結論都附條號或裁判字號，查不到就說查不到。'
              ],
              bullets: [
                '技術：純提示詞技能包（Prompt-Only）＋ MCP（台灣法規資料庫、裁判書語意檢索），可裝在 Claude Code、Codex、Gemini 等工具',
                '對應課程：0-1 插件與技能、2-7 MCP 與 Skills、2-3 RAG（語意判例檢索）',
                '安裝：<code>npx skills add kevintsai1202/law-powers -g --all</code>',
                '<a href="https://law-graph-webmcp.zeabur.app/" target="_blank">法律網（線上使用）</a> · <a href="https://kevintsai1202.github.io/law-powers/" target="_blank">宣傳網站</a> · <a href="https://github.com/kevintsai1202/law-powers" target="_blank">GitHub</a>'
              ]
            },
            {
              title: '3. Docrefinery（文煉）— 進階 RAG：PDF 變結構化資料庫',
              type: 'text',
              paragraphs: [
                '基礎 RAG 把文件切塊丟進向量庫就好，但遇到政府統計表、掃描檔、跨頁表格就失靈。文煉把 PDF / 掃描文件解析成<strong>可查詢的結構化資料</strong>：版面分析抽出文字、表格與圖片，表格正規化後入庫成可以用條件查詢的數據，文字再做向量與全文雙索引，最後以 MCP Tools 對外提供查詢。'
              ],
              bullets: [
                '技術：Spring AI、Docling 版面解析、PostgreSQL + pgvector + trigram 索引、Muse Spark（LLM）、Voyage（向量化）、Jev（分類與重排）、S3 物件儲存',
                '對應課程：2-1 模型選擇（Muse Spark / Voyage 就是本課用的組合）、2-3 RAG 與 rerank 兩階段檢索、2-7 MCP',
                '進階技巧：表格切塊只留說明文字、多層檢索、所有 AI 呼叫可稽核、送出前遮罩敏感資料',
                '<a href="https://github.com/kevintsai1202/docrefinery" target="_blank">GitHub</a>'
              ]
            },
            {
              title: '4. SubTutor（字導字演）— 用逐字稿剪輯錄課影片',
              type: 'text',
              paragraphs: [
                '錄課影片的剪輯大多是「刪掉口誤、改錯字、重錄一句」。SubTutor 把影片、逐字稿和字幕放在同一條時間軸上：<strong>刪掉一段文字，對應的畫面和聲音就一起剪掉</strong>。剪輯、音訊處理與輸出都在本機執行，只有語音辨識、校稿、斷句、聲音替換等步驟呼叫 AI 服務。'
              ],
              bullets: [
                '技術：Windows 桌面應用（Tauri）、本機 Python 引擎、ffmpeg、ONNX 人聲分離、雲端 AI 服務（ASR、校稿、TTS 聲音替換）',
                '功能：逐字時間戳轉錄、AI 校稿逐項審核、降噪與響度修復、用自己的聲音重生成單字、輸出 MP4 / SRT / DaVinci Resolve 時間軸',
                '對應課程：2-1 模型 API 串接、2-5 串流回應的使用者體驗、把 AI 當成「建議者」而非「決定者」的設計',
                '<a href="https://subtutor.zeabur.app/" target="_blank">官方網站與下載</a>'
              ]
            },
            {
              title: '共通的設計原則',
              type: 'text',
              bullets: [
                '<strong>AI 負責判斷，程式負責執行</strong>：模型只做理解、分類、生成；計算、存檔、剪輯交給確定性的程式碼。',
                '<strong>先檢索再回答</strong>：估價查歷史價、法律查原文、文件查結構化資料，都是 RAG 的變形。',
                '<strong>可驗證</strong>：附來源、附字號、可逐項審核，讓使用者能確認 AI 沒有亂講。',
                '<strong>都是用 AI 協作開發出來的</strong>：Claude Code + 技能 + 記憶，這正是 0-1 章介紹的工作方式。'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>先寫規劃，再請 AI 動手</strong>：本課的購物功能是先寫一份規劃（資料表、API、AI 工具、要測什麼），請 AI 審查找出漏洞後才實作。做自己的應用時，先用 Plan 模式請 AI 產出規劃給你修改，比直接說「幫我做一個 XX 系統」可靠得多。',
                '<strong>⚠ 要求附來源，查不到就說查不到</strong>：Law-powers 的信任閘門和本課客服的系統提示詞是同一招：AI 只能根據查到的資料回答。自己的應用一開始就把這條規則寫進系統提示詞，驗證時刻意問一個資料庫裡沒有的東西。',
                '<strong>AI 判斷，程式執行</strong>：金額計算、扣庫存、存檔這類錯了就有後果的事，交給確定性的程式碼與資料庫；模型只負責理解和挑工具。2-2 章「先詢問再執行」由後端強制，就是這個原則。',
                '<strong>先打通最短的一條路徑</strong>：先做出「資料進來 → 檢索 → 回答 → 畫面顯示」的最小流程並能驗證，再加功能。一次要求太多功能，AI 做出來的東西很難逐項驗證。',
                '<strong>請 AI 幫你對照章節</strong>：把想做的應用描述貼給 AI，請它列出會用到本課哪幾章、哪一步風險最高、要怎麼驗證，當作自己的課後專題規劃。'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'day1',
      label: 'Day 1',
      title: 'Spring Boot 核心與資料庫持久化',
      lead: '先把工程底盤搭穩，理解 REST、資料庫容器化與 JPA 的責任邊界。',
      units: [
        {
          id: 'd1-u1',
          chapter: '1-1',
          title: '開發環境與 AI 協作設定',
          summary: '驗證 Java / Maven 環境，透過 Spring Initializr 建立課程初始專案，確認可啟動後再進入後續開發。',
          source: 'docs/Day1-1-AI-Coding-Setup.md',
          heroImage: 'assets/teaching-site/01-ch01-dev-environment-ai-collab.png',
          diagramImage: 'assets/diagrams/d1-u1.png',
          diagramCaption: 'VS Code、AI 助手、終端機與提示詞共同構成日常開發流程。',
          goals: [
            '透過 AI 提示詞引導安裝 JDK 21、Maven 3.9+ 與 Git',
            '確認 Java 21 與 Maven 開發環境可正常使用',
            '透過 Spring Initializr 建立課程初始專案',
            '理解 Spring Boot 標準目錄結構與各層職責',
            '了解 AI 協作在開發流程中的適用時機'
          ],
          tasks: [
            { id: 'd1-u1-t1', text: '安裝 JDK 21 並完成 JAVA_HOME 設定' },
            { id: 'd1-u1-t2', text: '安裝 Maven 3.9+ 並完成 Path 設定' },
            { id: 'd1-u1-t3', text: '安裝 Git 並完成 user.name / user.email 設定' },
            { id: 'd1-u1-t4', text: '安裝必要 VS Code 外掛並驗證 Java / Maven 版本' },
            { id: 'd1-u1-t5', text: '透過 Spring Initializr 建立課程專案並確認啟動成功' }
          ],
          sections: [
            {
              title: '今日準備清單：Day 1 要安裝的程式、網站與金鑰（照順序）',
              type: 'text',
              paragraphs: [
                '照上課順序列出 Day 1 會用到的程式、網站、下載與金鑰，能先做的請課前完成（Docker Desktop 裝完要重開機，最好前一天裝好）。PowerShell 7、VS Code、Claude Code、Node.js、Python 3 在 0-1 章已安裝。'
              ],
              bullets: [
                '<strong>1.【1-1 程式】JDK 21（Eclipse Temurin）</strong>：用 winget 安裝（本章提示詞會請 AI 代勞），裝完 <code>java -version</code> 要顯示 21。',
                '<strong>2.【1-1 程式】Maven 3.9 以上</strong>：用 winget 安裝，<code>mvn -version</code> 的 Java version 要是 21。',
                '<strong>3.【1-1 程式】Git</strong>：用 winget 安裝，並設定 <code>user.name</code>、<code>user.email</code>。',
                '<strong>4.【1-1 VS Code 外掛】Extension Pack for Java、Spring Boot Extension Pack</strong>：在 VS Code 的延伸模組搜尋安裝。',
                '<strong>5.【1-1 網站】Spring Initializr</strong>：<a href="https://start.spring.io/" target="_blank">start.spring.io</a>，建立 Spring Boot 專案（也可以請 AI 用指令產生）。',
                '<strong>6.【1-3 程式】Docker Desktop</strong>：<a href="https://www.docker.com/products/docker-desktop" target="_blank">docker.com/products/docker-desktop</a>，需要 WSL2，裝完重開機，用 <code>docker run hello-world</code> 確認。',
                '<strong>7.【1-3 下載】PostgreSQL 映像 <code>pgvector/pgvector:pg18</code></strong>：第一次 <code>docker compose up -d</code> 會自動下載；網路慢可以課前先執行 <code>docker pull pgvector/pgvector:pg18</code>。',
                '<strong>8.【1-5 網站】Swagger UI</strong>：後端啟動後開 <a href="http://localhost:8080/swagger-ui/index.html" target="_blank"><code>http://localhost:8080/swagger-ui/index.html</code></a>，測試 API 用。',
                '<strong>9.【1-9 金鑰】JWT_SECRET</strong>：不用申請，自己訂一串至少 32 字元的隨機字串；寫進後端專案根目錄的 <code>.env</code>（一行 <code>JWT_SECRET=…</code>），<code>.env</code> 不要推上 Git。'
              ]
            },
            {
              title: '環境準備重點',
              type: 'text',
              paragraphs: [
                '第一章不是在講工具清單，而是在建立後續兩天都要依賴的開發基線。只要 Java、Maven、VS Code 與 AI 協作方式一開始沒有對齊，後面所有章節都會被環境問題反覆打斷。',
                '這一章的核心目標，是讓學員知道哪些工具是編輯器責任、哪些是執行環境責任，以及 AI 助手應該介入在哪一種工作。'
              ],
              bullets: [
                'VS Code 負責編輯、導覽、除錯與擴充整合',
                'Java 與 Maven 負責專案編譯、依賴下載與執行',
                'AI 助手適合做解釋、產生樣板、補測試與協助排錯',
                'PowerShell 7+ 是本課程預設終端機環境'
              ],
              image: 'assets/teaching-site/11-diagram-dev-env-workflow.png',
              imageAlt: '開發環境與 AI 協作流程圖',
              imageCaption: '先把工具責任講清楚，後續每章的驗證才會順。'
            },
            {
              title: '請 AI Agent 幫你安裝 JDK 21',
              type: 'code',
              paragraphs: [
                'JDK（Java Development Kit）是執行與編譯 Java 程式的核心工具，本課程要求 JDK 21（LTS）。Windows 11 內建 `winget` 套件管理員，可以讓 AI Agent 直接下指令完成安裝，全程不需要你開瀏覽器下載。',
                '把下方提示詞貼給你的 AI Agent（例如 VS Code 內的 Claude、Copilot），讓它幫你執行安裝指令、設定環境變數，並驗證結果。'
              ],
              bullets: [
                'Windows 11 / 10 已內建 `winget`，無需另外安裝',
                'AI Agent 可直接透過 PowerShell 執行 winget 完成安裝',
                '安裝後 AI Agent 可幫你設定 `JAVA_HOME` 與 `Path` 環境變數'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 安裝 JDK 21',
                content: '【提示詞 1 — 請 AI Agent 直接安裝】\n我使用 Windows 11，請用 winget 幫我安裝 Eclipse Temurin JDK 21。\n安裝完成後，請幫我：\n1. 用 PowerShell 設定 JAVA_HOME 環境變數（永久生效）\n2. 確認 Path 中已包含 JDK bin 目錄\n3. 執行 java -version 驗證安裝結果\n\n【提示詞 2 — 請 AI Agent 排查問題】\n我執行 java -version 看到以下訊息：\n[貼上你看到的輸出]\n請幫我判斷是否正確，若有問題請直接用 PowerShell 修正 JAVA_HOME 或 Path 設定。\n\n【提示詞 3 — 多版本衝突】\n我電腦上有舊版 JDK，執行 java -version 顯示的不是 21，\n請用 PowerShell 指令幫我切換成 JDK 21 並讓 Maven 也使用同一版本。'
              }
            },
            {
              title: '請 AI Agent 幫你安裝 Maven',
              type: 'code',
              paragraphs: [
                'Maven 是 Java 建置與依賴管理工具，本課程用它下載 Spring Boot 套件、編譯程式碼與啟動應用。版本要求 3.9 以上。',
                'Maven 需要手動設定 PATH，容易出錯。把提示詞給 AI Agent，讓它用 winget 或 PowerShell 腳本一鍵完成安裝與環境設定。'
              ],
              bullets: [
                'winget 可直接安裝 Maven，無需手動解壓縮',
                'AI Agent 負責設定 `M2_HOME` 與 `Path`，並確認 Maven 讀到正確的 JDK 21',
                '安裝完後用 `mvn -version` 驗證，確認 Java version 欄位顯示 21'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 安裝 Maven 3.9+',
                content: '【提示詞 1 — 請 AI Agent 直接安裝】\n我使用 Windows 11，請用 winget 幫我安裝 Apache Maven 最新版。\n安裝完成後，請幫我：\n1. 設定 M2_HOME 與 Path 環境變數（PowerShell，永久生效）\n2. 確認 Maven 使用的 Java 版本是 JDK 21\n3. 執行 mvn -version 顯示完整結果供我確認\n\n【提示詞 2 — 請 AI Agent 排查問題】\n我執行 mvn -version 顯示的 Java version 不是 21，\n請幫我用 PowerShell 找出原因並修正，讓 Maven 指向正確的 JDK 21。\n\n【提示詞 3 — 加速依賴下載】\n我在台灣，Maven 下載依賴速度很慢，\n請幫我修改 Maven 的 settings.xml，加入國內可用的鏡像站設定。'
              }
            },
            {
              title: '請 AI Agent 幫你安裝 Git',
              type: 'code',
              paragraphs: [
                'Git 是版本管理工具，課程中所有範例都以 Git 管理，建議在開始前安裝完成。Windows 上同樣可以透過 winget 讓 AI Agent 直接安裝，免去手動設定安裝選項的麻煩。',
                '安裝完成後還需要設定提交者身份（user.name 與 user.email），這步驟也可以一併請 AI Agent 完成。'
              ],
              bullets: [
                'winget 安裝 Git 會自動加入 Path，無需手動設定',
                'AI Agent 可在安裝後立即設定 user.name / user.email',
                '可選：請 AI Agent 協助設定 SSH 金鑰以便推送到 GitHub'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 安裝 Git',
                content: '【提示詞 1 — 請 AI Agent 直接安裝並設定】\n我使用 Windows 11，請用 winget 幫我安裝 Git。\n安裝完成後，請幫我：\n1. 在 PowerShell 中執行 git --version 確認安裝成功\n2. 設定 git config --global user.name 為「你的名字」\n3. 設定 git config --global user.email 為「你的信箱」\n4. 確認設定已存入（執行 git config --list）\n\n【提示詞 2 — 設定 SSH 金鑰（可選）】\n我想把本課程專案推送到 GitHub，\n請幫我用 PowerShell 產生 SSH 金鑰，並告訴我如何把公鑰加入 GitHub 帳號設定。'
              }
            },
            {
              title: 'VS Code 必要外掛清單',
              type: 'code',
              paragraphs: [
                '除了安裝 VS Code 本體之外，這門課至少需要把 Java 與 Spring 相關外掛裝齊。Lombok 支援在新版 Java 外掛中已內建，因此不應再把某個獨立 Lombok 外掛寫成必要安裝。'
              ],
              bullets: [
                'Extension Pack for Java：提供 Java 語言支援、除錯、測試與 Maven 專案能力',
                'Spring Boot Extension Pack：提供 Spring Boot Tools、Spring Initializr 與設定檔自動補全',
                '若專案使用 Lombok，請確認 Java 語言伺服器已啟用內建 Lombok 支援，避免 `@Data`、`@NoArgsConstructor` 等註解被誤判'
              ],
              code: {
                language: 'text',
                title: '建議安裝的 VS Code 外掛',
                content: '1. Extension Pack for Java\n2. Spring Boot Extension Pack\n3. 確認 Java 外掛已啟用 Lombok 內建支援（不另外要求獨立外掛）'
              }
            },
            {
              title: 'PowerShell 驗證命令',
              type: 'code',
              paragraphs: [
                '在 VS Code 終端機中先確認 Java 與 Maven 版本，這是所有 Spring Boot 實作的起點。',
                '最低需求必須先講清楚，否則學員即使成功執行命令，也不知道自己的版本是否符合課程要求。'
              ],
              bullets: [
                '最低需求：JDK 21',
                '最低需求：Maven 3.9 以上',
                '建議終端機：PowerShell 7+',
                '若 `java -version` 與 `mvn -version` 顯示的版本不符，先處理 PATH / JAVA_HOME，再進入後續章節'
              ],
              code: {
                language: 'powershell',
                title: '驗證 Java 與 Maven 版本',
                content: 'java -version\nmvn -version'
              }
            },
            {
              title: '驗證結果範例與判讀方式',
              type: 'code',
              paragraphs: [
                '學員不只需要知道要執行什麼命令，還需要知道看到什麼輸出才算正確。下面是一組可接受的範例。',
                '重點不是每個字都一樣，而是主要版本要符合：Java 為 21，Maven 為 3.9 以上，且 Maven 使用的 Java Home 也應指向 JDK 21。'
              ],
              code: {
                language: 'text',
                title: '可接受的輸出範例',
                content: 'PS D:\\GitHub\\learn-spring> java -version\nopenjdk version "21.0.7" 2025-04-15\nOpenJDK Runtime Environment Temurin-21.0.7+6 (build 21.0.7+6)\nOpenJDK 64-Bit Server VM Temurin-21.0.7+6 (build 21.0.7+6, mixed mode)\n\nPS D:\\GitHub\\learn-spring> mvn -version\nApache Maven 3.9.9\nMaven home: C:\\apache-maven-3.9.9\nJava version: 21.0.7, vendor: Eclipse Adoptium, runtime: D:\\java\\jdk-21\nDefault locale: zh_TW, platform encoding: UTF-8\nOS name: "windows 11", version: "10.0", arch: "amd64", family: "windows"'
              },
              bullets: [
                '若 Java version 不是 21，代表課程環境尚未對齊',
                '若 Maven version 低於 3.9，建議先升級再繼續',
                '若 Maven 顯示的 Java version 不是 21，即使 `java -version` 正確，也表示 Maven 還沒吃到正確 JDK',
                '若出現 `java 不是內部或外部命令`，通常是 PATH 或 JAVA_HOME 尚未設定完成'
              ]
            },
            {
              title: '常見錯誤與排查',
              type: 'warning',
              bullets: [
                'VS Code 終端機與系統終端機顯示不同版本，通常是 PATH 尚未重新載入',
                '安裝完 JDK 後仍顯示舊版 Java，先檢查 `JAVA_HOME` 與 `Path` 順序',
                'Maven 可執行但版本過舊，先更新 Maven 再開始實作，避免相依套件解析異常',
                'Spring Boot Extension Pack 安裝後沒有補全，先重新開啟 VS Code 或重建 Java Language Server'
              ]
            },
            {
              title: '透過 Spring Initializr 建立課程專案',
              type: 'code',
              paragraphs: [
                'Spring Initializr 是 Spring 官方提供的專案產生器，負責生成標準的 Maven 目錄結構、`pom.xml` 依賴設定與主程式進入點。在 VS Code 中可直接透過命令面板呼叫，不需要離開編輯器。',
                '本課程需要的依賴在這一步就全部選定，後續每一章都會在同一個專案上持續疊加功能。'
              ],
              bullets: [
                '開啟 VS Code 命令面板（Ctrl+Shift+P），輸入 `Spring Initializr: Create a Maven Project`',
                '或直接前往 <a href="https://start.spring.io" target="_blank">start.spring.io</a> 在瀏覽器中設定後下載',
                'Spring Boot 版本：選擇 4.0.0（課程範例基於此版本）',
                'Group：`com.example`，Artifact：`tutorial`，Packaging：Jar，Java：21',
                '依賴選擇：Spring Web、Spring Data JPA、PostgreSQL Driver、Flyway Migration'
              ],
              code: {
                language: 'text',
                title: 'Spring Initializr 設定摘要',
                content: 'Project      : Maven\nLanguage     : Java\nSpring Boot  : 4.0.0\nGroup        : com.example\nArtifact     : tutorial\nPackaging    : Jar\nJava         : 21\n\n依賴 (Dependencies):\n  - Spring Web\n  - Spring Data JPA\n  - PostgreSQL Driver\n  - Flyway Migration'
              }
            },
            {
              title: '確認專案結構與首次啟動',
              type: 'code',
              paragraphs: [
                '產生後的專案已包含標準目錄結構。在進入任何功能開發之前，先確認可以啟動，是避免後續被環境問題卡住的最重要步驟。',
                '首次啟動時資料庫連線會失敗（因為尚未啟動 Docker），這是預期行為。本步驟只驗證 Spring Boot 主程式可以被 Maven 執行、類別掃描沒有錯誤。'
              ],
              bullets: [
                '`src/main/java/com/example/tutorial/` — Java 原始碼根目錄',
                '`src/main/resources/application.properties` — 應用程式設定檔',
                '`pom.xml` — Maven 依賴與建置設定',
                '可先把 `application.properties` 中的資料庫設定暫時移除或留空，讓主程式不因找不到 DB 而無法啟動'
              ],
              code: {
                language: 'powershell',
                title: '首次執行驗證',
                content: '# 進入專案目錄\ncd tutorial\n\n# 編譯並確認無語法錯誤\nmvn clean compile\n\n# 正常輸出應包含 BUILD SUCCESS'
              }
            },
            {
              title: 'AI 協作的適用時機',
              type: 'text',
              paragraphs: [
                'AI 不應該被當成黑箱產碼器，而是協作式工具。在這門課中，最有價值的 AI 協作情境是：理解 Spring 標註的作用、解釋錯誤訊息，以及在你已知道架構目標時讓它產生對應樣板。',
                '注意：讓 AI 直接生成完整模組、不理解就貼上，是最常見的學習阻斷原因。先弄清楚「這一層應該做什麼」，再讓 AI 協助填入細節。'
              ],
              bullets: [
                '選取特定程式碼後再發問，避免上下文過大',
                '要求加上中文函式註解與重要變數說明',
                '對於重構請先指定目標，例如符合 Controller / Service 分層',
                '對於錯誤排查要附上實際訊息與預期行為'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ AI 的終端機和你的不是同一個</strong>：Claude Code 在 Windows 上的 Bash 工具其實是 Git Bash，它設定的 <code>JAVA_HOME</code> 只在自己的程序裡有效。請它用 PowerShell 7 以永久生效的方式設定（<code>[Environment]::SetEnvironmentVariable</code>），再由你開一個新的終端機執行 <code>java -version</code>、<code>mvn -version</code> 確認。',
                '<strong>⚠ 安裝指令不能停在互動提問</strong>：AI 的終端機無法回答「是否同意條款」這類問題，<code>winget</code> 第一次使用可能停在同意畫面；請它加上 <code>--accept-source-agreements --accept-package-agreements</code>。第一輪演練時，<code>create-vite</code> 也因為互動提問卡住過（見 2-4 章）。',
                '<strong>⚠ Initializr 的預設值不一定是課程版本</strong>：課前演練時，<a href="https://start.spring.io" target="_blank">start.spring.io</a> 預設已經是 Boot 4.1.x。請照本章的設定摘要手動選 4.0 系列，不要直接接受預設；下載的 zip 外層還多一個資料夾，要先決定專案根目錄在哪一層（之後的 <code>docker-compose.yml</code>、<code>frontend/</code> 都放在這一層）。',
                '<strong>⚠ 鏡像站網址要先驗證</strong>：用「加速依賴下載」的提示詞時，AI 可能給出已失效的鏡像網址。請它先備份 <code>settings.xml</code>，改完在專案裡跑一次 <code>mvn clean compile</code> 確認依賴下載得到，失敗就還原備份。',
                '<strong>多版本 JDK 先盤點再動</strong>：用提示詞 3 處理舊版 JDK 時，請 AI 先列出電腦上所有 JDK、目前的 <code>JAVA_HOME</code> 與 <code>Path</code> 順序給你看，不要讓它直接解除安裝舊版，其他專案可能還在用。'
              ]
            }
          ]
        },
        {
          id: 'd1-u2',
          chapter: '1-2',
          title: 'Spring MVC 與 REST API 基礎',
          summary: '理解 Spring MVC 的請求流程與 REST API 設計原則，透過 AI Agent 建立一個不依賴資料庫、可立即啟動的商品 API 示範專案，驗證 Controller / Service 分工正確。',
          source: 'docs/Day1-2-SpringBoot-REST.md',
          heroImage: 'assets/teaching-site/02-ch02-springboot-rest-basics.png',
          diagramImage: 'assets/diagrams/spring-mvc-flow.png',
          diagramCaption: 'HTTP 請求由 DispatcherServlet 統一接收，分發給 Controller，再交由 Service 處理。',
          goals: [
            '理解 Spring MVC 的 DispatcherServlet 請求流程',
            '掌握 REST API 設計原則：URL 是資源名詞，HTTP 方法是動作動詞',
            '用 AI Agent 建立可獨立運行的商品 REST API（不含資料庫）',
            '理解 Controller / Service 的分工，為後續接入 JPA 做準備'
          ],
          tasks: [
            { id: 'd1-u2-t1', text: '閱讀 Spring MVC 請求流程，理解 DispatcherServlet 的角色' },
            { id: 'd1-u2-t2', text: '用 AI Agent 建立可獨立運行的商品 REST API 示範專案' },
            { id: 'd1-u2-t3', text: '用 PowerShell Invoke-RestMethod 驗證 GET / POST 端點可正常回應' }
          ],
          sections: [
            {
              title: 'Spring Boot 為什麼適合教學起點',
              type: 'text',
              paragraphs: [
                'Spring Boot 的核心價值是把大量繁瑣設定折疊起來，讓開發者更快進入業務流程與架構理解。Starter Dependencies 幫你組合常見依賴，自動配置則根據 classpath 與設定推導出合理預設。',
                '教學上最重要的不是背誦 Spring Boot 幫你做了哪些設定，而是理解它讓你省下什麼樣的機械工作。'
              ],
              bullets: [
                'Starter 讓依賴以情境為單位引入，例如 web、data-jpa',
                'Auto-Configuration 根據環境自動建立常見 Bean',
                '開發者的重點因此可以轉移到模組責任與 API 設計'
              ],
              image: 'assets/teaching-site/12-diagram-rest-architecture.png',
              imageAlt: 'Spring Boot REST 三層架構圖',
              imageCaption: '這張圖是後面所有章節的骨架，先看懂再往下。'
            },
            {
              title: 'Spring MVC 的核心：請求如何流動',
              type: 'text',
              paragraphs: [
                'Spring MVC 是 Spring Framework 的 Web 層模組，也是 Spring Boot 預設的 HTTP 請求處理機制。它採用「前端控制器（Front Controller）」設計模式，所有進來的 HTTP 請求都會先經過一個叫做 DispatcherServlet 的統一入口，再由它分發給對應的 Controller 方法。',
                '這個設計的好處是：請求路由、例外處理、內容協商（JSON / XML 格式）等橫切關注點都由框架統一管理，Controller 只需要專心寫業務邏輯，完全不需要自己解析 HTTP 細節。'
              ],
              bullets: [
                '瀏覽器或前端發出 HTTP 請求（例如 GET /api/products）',
                'DispatcherServlet 接收後，根據 URL 與 HTTP Method 找到對應的 @Controller 方法',
                'Controller 呼叫 Service 取得資料',
                '@RestController 自動把回傳的 Java 物件序列化成 JSON 回應給前端',
                '這整個流程對開發者幾乎是透明的，Spring Boot 自動組態幫你啟動好一切'
              ],
              code: {
                language: 'text',
                title: 'Spring MVC 請求流程',
                content: 'HTTP 請求（例如 GET /api/products）\n    ↓\nDispatcherServlet（Spring MVC 統一入口）\n    ↓  根據 @GetMapping("/api/products") 路由\n@RestController 方法\n    ↓  呼叫業務層\n@Service\n    ↓  取得資料（本章示範：Java List，下一章才接資料庫）\n資料來源\n    ↓\nJSON 序列化 → 回傳給前端'
              }
            },
            {
              title: '什麼是 REST API',
              type: 'text',
              paragraphs: [
                'REST（Representational State Transfer）是一種以 HTTP 協定為基礎的 API 設計風格。它的核心思想是：把系統中的每一種資料或功能都當成「資源（Resource）」，並用統一的 URL 路徑表示，再搭配 HTTP 方法（動詞）決定你要對這個資源做什麼事。',
                '以本課程的商品為例：`/api/products` 就是「商品資源」的 URL。你要讀取所有商品就用 GET，要新增商品就用 POST，路徑本身不需要改，只有 HTTP 方法不同。這種設計讓 API 的意圖一看就清楚。'
              ],
              bullets: [
                'REST 不是協定或規範，而是一套設計風格（Architectural Style）',
                'URL 表示「資源是什麼」，HTTP 方法表示「對資源做什麼動作」',
                'REST API 是無狀態（Stateless）的——每次請求都要帶齊所有必要資訊，伺服器不記住上次',
                '回傳格式通常為 JSON，因為它輕量、跨語言且容易閱讀'
              ],
              code: {
                language: 'text',
                title: 'REST 設計直覺：URL 是名詞，HTTP 方法是動詞',
                content: '不好的設計（把動作寫進 URL）：\n  GET /getProducts\n  POST /createProduct\n  GET /deleteProduct?id=1\n\nREST 的設計（URL 是資源，動詞由 HTTP Method 決定）：\n  GET    /api/products        → 取得所有商品\n  GET    /api/products/1      → 取得 ID=1 的商品\n  POST   /api/products        → 新增一筆商品\n  PUT    /api/products/1      → 更新 ID=1 的商品\n  DELETE /api/products/1      → 刪除 ID=1 的商品'
              }
            },
            {
              title: 'HTTP 方法與 CRUD 對應',
              type: 'code',
              paragraphs: [
                'REST API 主要用到四種 HTTP 方法，分別對應資料庫的 CRUD（建立、讀取、更新、刪除）操作。理解這個對應關係，後面看 Spring Boot 的 `@GetMapping`、`@PostMapping` 等註解就不會覺得陌生。'
              ],
              code: {
                language: 'text',
                title: 'HTTP 方法對照表',
                content: '┌──────────┬──────────┬────────────────────────────────┐\n│ HTTP 方法 │ CRUD 操作 │ 說明                           │\n├──────────┼──────────┼────────────────────────────────┤\n│ GET      │ Read     │ 讀取資料，不修改伺服器狀態     │\n│ POST     │ Create   │ 新增資料，回傳 201 Created      │\n│ PUT      │ Update   │ 整筆更新，需傳入完整資料       │\n│ PATCH    │ Update   │ 部分更新，只傳要修改的欄位     │\n│ DELETE   │ Delete   │ 刪除指定資源                   │\n└──────────┴──────────┴────────────────────────────────┘\n\nSpring Boot 對應註解：\n  @GetMapping    → HTTP GET\n  @PostMapping   → HTTP POST\n  @PutMapping    → HTTP PUT\n  @PatchMapping  → HTTP PATCH\n  @DeleteMapping → HTTP DELETE'
              },
              bullets: [
                'GET 是安全且冪等的——同樣的請求重複發多次，結果一樣、資料不受影響',
                'POST 通常不是冪等的——發兩次就會建立兩筆資料',
                'PUT / PATCH 是冪等的——重複更新同一份資料，結果相同',
                '本課程以 GET / POST 為主，涵蓋查詢商品與新增商品兩個最常見情境'
              ]
            },
            {
              title: 'HTTP 狀態碼速查',
              type: 'code',
              paragraphs: [
                '伺服器每次回應都會帶一個三位數的狀態碼，告訴呼叫方「這次請求的結果是什麼」。Spring Boot 預設已處理大部分狀態碼，但在 Controller 中用 `ResponseEntity` 回傳時，需要明確指定。'
              ],
              code: {
                language: 'text',
                title: '常見 HTTP 狀態碼',
                content: '2xx 成功\n  200 OK           → 請求成功，回傳資料（GET / PUT / DELETE）\n  201 Created      → 資源建立成功（POST 新增後回傳）\n  204 No Content   → 成功但不回傳內容（DELETE 常用）\n\n4xx 用戶端錯誤\n  400 Bad Request  → 請求格式錯誤或欄位驗證失敗\n  401 Unauthorized → 未提供或提供了無效的身份憑證\n  403 Forbidden    → 有身份但沒有權限執行此操作\n  404 Not Found    → 找不到指定資源（ID 不存在）\n\n5xx 伺服器錯誤\n  500 Internal Server Error → 伺服器端發生未預期的例外'
              },
              bullets: [
                '`ResponseEntity.ok(data)` → 200 OK',
                '`ResponseEntity.notFound().build()` → 404 Not Found',
                '`@ResponseStatus(HttpStatus.CREATED)` 加在 POST 方法上 → 201 Created',
                '未明確設定時，Spring Boot 成功回傳預設為 200，例外預設為 500'
              ]
            },
            {
              title: '請求與回應的結構',
              type: 'code',
              paragraphs: [
                '了解 HTTP 請求與回應的完整結構，有助於後面除錯時知道要看哪個部分。每次 API 呼叫都包含兩段：你送出的 Request 與伺服器回應的 Response，兩者都有 Header 與 Body。'
              ],
              code: {
                language: 'text',
                title: 'REST API 請求與回應範例（新增商品）',
                content: '── HTTP Request（前端送出）──────────────────────\nPOST /api/products HTTP/1.1\nHost: localhost:8080\nContent-Type: application/json    ← Header：告知伺服器 Body 格式\n\n{                                  ← Body：實際資料（JSON）\n  "name": "無重力耳機",\n  "price": 1999,\n  "stock": 50\n}\n\n── HTTP Response（Spring Boot 回傳）─────────────\nHTTP/1.1 201 Created              ← 狀態碼\nContent-Type: application/json    ← Header\n\n{                                  ← Body：建立完成的資料（含 ID）\n  "id": 7,\n  "name": "無重力耳機",\n  "price": 1999,\n  "stock": 50\n}'
              }
            },
            {
              title: 'IoC 與 DI 的實務解釋',
              type: 'text',
              paragraphs: [
                'IoC 是控制反轉，意思是物件建立與生命週期不再由你手動處理，而是交給 Spring 容器。DI 則是容器在執行期把相依物件注入給需要它的類別。',
                '在 Spring Boot 中，最推薦的形式是建構子注入。這樣可以保證依賴在物件建立時就完整，並且更容易撰寫測試。'
              ],
              bullets: [
                'Controller 依賴 Service',
                'Service 依賴 Repository',
                '各層不自己 `new` 彼此，而是由容器安排'
              ]
            },
            {
              title: 'Controller / Service 怎麼分工',
              type: 'text',
              paragraphs: [
                '<a href="assets/diagrams/d1-u2-layers.png" target="_blank"><img src="assets/diagrams/d1-u2-layers.png" alt="Controller / Service 兩層流向與下一章三層架構" style="width:100%;max-width:820px;border-radius:12px;border:1px solid var(--border);"></a>',
                'Controller 負責接 HTTP 請求、處理輸入參數與決定回傳格式；Service 負責業務邏輯與資料操作。這個分工讓兩層各司其職，也讓日後更換資料來源（從 List 換成 JPA、從 JPA 換成其他 ORM）時，Controller 完全不需要改動。',
                '本章示範專案刻意只保留 Controller 與 Service 兩層，資料直接放在 Service 的 Java List 裡，讓你先把 Spring MVC 的流程跑通。下一章（1-3、1-4）才會在 Service 下方再加一層 Repository 對接真正的資料庫。'
              ],
              bullets: [
                'Controller — 只處理 HTTP 輸入輸出，不含業務判斷',
                'Service — 負責業務規則，本章用 List 模擬資料，下一章換成 JPA Repository',
                '兩層分開的好處：換資料來源時只改 Service，Controller 零修改'
              ],
              code: {
                language: 'text',
                title: '本章示範的兩層流向',
                content: '[瀏覽器 / 前端]\n    ↓ HTTP 請求\n[Controller]  ← 處理參數與 HTTP 格式\n    ↓ 呼叫業務方法\n[Service]     ← 業務邏輯 + 資料操作\n    ↓\n[List<Product>]  ← 記憶體資料（本章不用資料庫）\n\n下一章（1-4）的完整三層：\n[Controller] → [Service] → [Repository] → [資料庫]'
              }
            },
            {
              title: '用 AI Agent 建立可獨立運行的示範專案',
              type: 'code',
              paragraphs: [
                '在進入 JPA 與資料庫之前，先請 AI Agent 幫你建立一個可以立即啟動的 Spring MVC 示範專案，確認 Controller → Service → 回應的流程跑通後，再到後面章節接上資料庫。'
              ],
              bullets: [
                '只需要 `spring-boot-starter-web`，不需要 JPA 或 PostgreSQL',
                '啟動後即可用 PowerShell 測試 API 回應'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 建立 Spring MVC 示範專案',
                content: '【建立專案】\n我有一個用 Spring Initializr 建立的 Spring Boot 專案（1-1 章），目前只有 Web 依賴（Spring Boot 4 為 spring-boot-starter-webmvc）。\n請幫我建立「智慧商城」的商品 REST API（資料先存在記憶體，不用資料庫）：\n- Product 欄位：id、name（商品名稱）、description（商品說明）、price（價格）、stock（庫存數量）、imageUrl（商品圖片網址）、category（分類）\n- 啟動時先放 3 筆示範商品（例如：無線耳機 Pro、機械鍵盤、行動電源）\n- GET /api/products → 回傳全部商品\n- GET /api/products/{id} → 找不到回傳 404\n- POST /api/products → 新增商品（上架），回傳 201\n- 分成 ProductController 與 ProductService 兩層\n請加上中文函式級別註解。\n\n【驗證 API】\n專案啟動後（port 8080），請幫我用 PowerShell Invoke-RestMethod 測試上面三個端點是否正常回應。\n\n【排查錯誤（遇到錯誤時才使用）】\n執行 mvn spring-boot:run 出現以下錯誤：\n[貼上錯誤訊息]\n請幫我找出原因並修正。'
              }
            },
            {
              title: 'Lombok：省去樣板程式碼',
              type: 'code',
              paragraphs: [
                'Lombok 是 Java 的編譯期程式碼產生器。它透過註解，在編譯時自動為你加上 getter、setter、建構子、`toString`、`equals` 等方法，讓類別定義只保留欄位本身，大幅減少重複樣板。',
                '在 Spring Boot 專案中，只要 `pom.xml` 引入 Lombok 依賴，VS Code 的 Java 外掛就會自動識別，不需要額外外掛。'
              ],
              bullets: [
                '`@Data` — 等於同時加上 getter、setter、toString、equals、hashCode',
                '`@NoArgsConstructor` — 產生無參數建構子（JPA 之後會需要）',
                '`@AllArgsConstructor` — 產生包含所有欄位的建構子，方便初始化測試資料',
                '`@Builder` — 產生 Builder 模式，適合欄位較多的類別'
              ],
              code: {
                language: 'java',
                title: 'Product.java（使用 Lombok，取代手寫 getter/setter）',
                content: '// 不用 Lombok：每個欄位都要手寫 getter/setter，程式碼冗長\npublic class Product {\n    private Long id;\n    private String name;\n    private BigDecimal price;\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n    // ...繼續寫 name、price 的 getter/setter...\n}\n\n// 使用 Lombok：三個註解搞定一切\n@Data                   // 自動產生 getter / setter / toString / equals\n@NoArgsConstructor      // 無參建構子\n@AllArgsConstructor     // 全欄位建構子\npublic class Product {\n    private Long id;\n    private String name;\n    private BigDecimal price;\n}'
              }
            },
            {
              title: 'ProductService（記憶體版）',
              type: 'code',
              paragraphs: [
                '本章示範的 ProductService 不依賴 JPA，直接用 Java `List` 模擬資料儲存。注意 Service 對外提供的方法簽章（`getAll`、`findById`、`save`）與下一章接 JPA 版本完全相同——到時候只需要把 List 換成 Repository，Controller 不需要改任何一行。'
              ],
              code: {
                language: 'java',
                title: 'ProductService.java（記憶體版）',
                content: '@Service\npublic class ProductService {\n\n    /** 模擬資料庫的記憶體清單，預載 3 筆測試商品 */\n    private final List<Product> products = new ArrayList<>(List.of(\n        new Product(1L, "無重力耳機",  new BigDecimal("1999")),\n        new Product(2L, "反重力滑鼠",  new BigDecimal("899")),\n        new Product(3L, "超導體鍵盤",  new BigDecimal("2490"))\n    ));\n\n    /** 下一個可用 ID，每次新增後遞增 */\n    private long nextId = 4L;\n\n    /** 取得所有商品（唯讀視圖，防止外部直接修改清單） */\n    public List<Product> getAll() {\n        return Collections.unmodifiableList(products);\n    }\n\n    /** 依 ID 查詢，找不到回傳 Optional.empty() */\n    public Optional<Product> findById(Long id) {\n        return products.stream()\n            .filter(p -> p.getId().equals(id))\n            .findFirst();\n    }\n\n    /** 新增商品：自動指派 ID 後加入清單並回傳完整物件 */\n    public Product save(Product product) {\n        product.setId(nextId++);\n        products.add(product);\n        return product;\n    }\n}'
              }
            },
            {
              title: 'ProductController（記憶體版）',
              type: 'code',
              paragraphs: [
                '`@RestController` 是 `@Controller` 與 `@ResponseBody` 的組合，所有方法的回傳物件都會自動序列化為 JSON。搭配 `@RequestMapping` 設定根路徑後，各方法再用 `@GetMapping` / `@PostMapping` 區分 HTTP 動詞。'
              ],
              bullets: [
                '`@PathVariable` — 從網址路徑取值，例如 `/api/products/1` 中的 `1`',
                '`@RequestBody` — 把請求的 JSON Body 反序列化為 Java 物件',
                '`ResponseEntity` — 讓你精確控制 HTTP 狀態碼（200 / 404 / 201）'
              ],
              code: {
                language: 'java',
                title: 'ProductController.java（記憶體版）',
                content: '@RestController\n@RequestMapping("/api/products")\npublic class ProductController {\n\n    /** 建構子注入：Spring 自動把 ProductService Bean 傳進來 */\n    private final ProductService productService;\n\n    public ProductController(ProductService productService) {\n        this.productService = productService;\n    }\n\n    /** GET /api/products — 回傳全部商品清單 */\n    @GetMapping\n    public List<Product> getAll() {\n        return productService.getAll();\n    }\n\n    /** GET /api/products/{id} — 找到回傳 200，找不到回傳 404 */\n    @GetMapping("/{id}")\n    public ResponseEntity<Product> getById(@PathVariable Long id) {\n        return productService.findById(id)\n            .map(ResponseEntity::ok)\n            .orElse(ResponseEntity.notFound().build());\n    }\n\n    /** POST /api/products — 新增商品，回傳 201 Created */\n    @PostMapping\n    @ResponseStatus(HttpStatus.CREATED)\n    public Product create(@RequestBody Product product) {\n        return productService.save(product);\n    }\n}'
              }
            },
            {
              title: '輸入驗證：為什麼不能信任前端傳來的資料',
              type: 'text',
              paragraphs: [
                '目前的 `create` 端點直接把 `@RequestBody` 拿到的物件存進去，前端傳什麼就存什麼。這代表 `name` 傳空字串、`price` 傳負數，全部都會寫入記憶體（或之後的資料庫）而不會報錯。',
                'Bean Validation（JSR-380）讓你把驗證規則標在 Model 欄位上，Controller 只需加一個 `@Valid`，Spring 就會在呼叫 Service 之前自動驗證，不合法的請求直接回傳 400，完全不進入業務邏輯。'
              ],
              bullets: [
                '驗證規則標在 Model / DTO 欄位，不散落在 Service 或 Controller 各處',
                '規則跟資料走：不管從哪個 Controller 端點傳入，同一套規則都生效',
                '驗證失敗時 Spring 自動回傳 `400 Bad Request`，並帶上每個欄位的錯誤訊息'
              ]
            },
            {
              title: '在 Model 加上 Bean Validation 標註',
              type: 'code',
              paragraphs: [
                '把約束條件直接標在 `Product` 欄位上。標註描述「這個欄位允許什麼值」，Spring 負責在請求進來時執行驗證。'
              ],
              code: {
                language: 'java',
                title: 'Product.java — 加上驗證標註',
                content: '@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class Product {\n\n    private Long id;\n\n    @NotBlank(message = "商品名稱不可為空")          // 不允許 null、""、"   "\n    @Size(max = 100, message = "名稱最多 100 字")\n    private String name;\n\n    @NotNull(message = "售價不可為 null")\n    @DecimalMin(value = "0.0", inclusive = false,   // 必須大於 0\n                message = "售價必須大於 0")\n    private BigDecimal price;\n\n    @Size(max = 500, message = "描述最多 500 字")    // null 可接受，有值才驗長度\n    private String description;\n\n    @Min(value = 0, message = "庫存不可為負數")\n    private Integer stock;\n}'
              }
            },
            {
              title: '在 Controller 加上 @Valid 觸發驗證',
              type: 'code',
              paragraphs: [
                '只需要在 `@RequestBody` 前加 `@Valid`，Spring 就會在解析完請求 Body 後、進入方法邏輯之前執行驗證。驗證失敗時拋出 `MethodArgumentNotValidException`，Spring 自動回傳 400。'
              ],
              code: {
                language: 'java',
                title: 'ProductController.java — create 端點加上 @Valid',
                content: '// ✅ 加上 @Valid：Spring 驗證 Product 欄位，不通過直接回 400\n@PostMapping\n@ResponseStatus(HttpStatus.CREATED)\npublic Product create(@Valid @RequestBody Product product) {\n    return productService.save(product);\n}\n\n// PUT 修改也一樣需要驗證\n@PutMapping("/{id}")\npublic ResponseEntity<Product> update(\n        @PathVariable Long id,\n        @Valid @RequestBody Product product) {       // ← @Valid 同樣適用\n    return productService.findById(id)\n        .map(existing -> {\n            product.setId(existing.getId());\n            return ResponseEntity.ok(productService.save(product));\n        })\n        .orElse(ResponseEntity.notFound().build());\n}'
              }
            },
            {
              title: '驗證失敗時的回應格式',
              type: 'code',
              paragraphs: [
                'Spring Boot 預設的驗證失敗回應已包含錯誤欄位與訊息，可直接用於前端顯示。以下是傳入空白名稱與負數價格時的實際回應。'
              ],
              code: {
                language: 'json',
                title: 'POST /api/products — 驗證失敗回應（400 Bad Request）',
                content: '// 請求 Body（不合法）\n{\n  "name": "",\n  "price": -100\n}\n\n// Spring 自動回傳的 400 回應\n{\n  "status": 400,\n  "errors": [\n    {\n      "field": "name",\n      "message": "商品名稱不可為空"\n    },\n    {\n      "field": "price",\n      "message": "售價必須大於 0"\n    }\n  ]\n}'
              }
            },
            {
              title: '常用 Bean Validation 標註速查',
              type: 'text',
              paragraphs: [
                '以下是最常用到的驗證標註，依照驗證對象分組。所有標註都來自 `jakarta.validation.constraints` 套件，引入 `spring-boot-starter-validation` 即可使用。'
              ],
              bullets: [
                '**字串類**：`@NotBlank`（非空且非空白）、`@NotEmpty`（非空但可以全空白）、`@Size(min, max)`（長度範圍）、`@Email`（Email 格式）、`@Pattern(regexp)`（正規表示式）',
                '**數字類**：`@NotNull`（非 null）、`@Min(value)`（整數最小值）、`@Max(value)`（整數最大值）、`@DecimalMin`（含小數的最小值）、`@DecimalMax`（含小數的最大值）、`@Positive`（必須大於 0）、`@PositiveOrZero`（大於等於 0）',
                '**集合類**：`@NotEmpty`（集合不可空）、`@Size(min, max)`（集合元素數量範圍）',
                '**巢狀物件**：`@Valid` 標在欄位上 → 對該物件的欄位遞迴驗證（如 List 裡的每個元素）'
              ],
              callout: {
                type: 'info',
                title: '@Valid 與 @Validated 的差別',
                body: '@Valid 是 Jakarta EE 標準，@Validated 是 Spring 的擴充版本。功能幾乎相同，差別在於 @Validated 支援「群組驗證（Validation Groups）」，可以為「新增」和「修改」分別定義不同的規則組合。一般情況用 @Valid 就夠；需要分組時再換 @Validated。'
              }
            },
            {
              title: 'AI 提示詞練習',
              type: 'text',
              paragraphs: [
                '示範專案跑起來後，試著用以下問題請 AI 助手解釋細節，加深對 Spring MVC 的理解：'
              ],
              bullets: [
                '「`@RestController` 與 `@Controller` 差別是什麼？如果改用 `@Controller`，我需要在哪裡加什麼才能讓回傳值變成 JSON？」',
                '「現在的 ProductService 用 List 存資料，如果我要換成 HashMap 以加速 ID 查詢，應該怎麼改？請幫我重寫 findById 的邏輯。」',
                '「為什麼 getById 回傳 `ResponseEntity<Product>` 而不是直接回傳 `Product`？兩種做法有什麼差別？」',
                '「請幫我在 ProductController 加一個 DELETE /api/products/{id} 端點，成功刪除回傳 204，找不到回傳 404。」'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ 先讀 pom.xml 再加依賴</strong>：Spring Boot 4 的 Initializr 產生的 Web starter 是 <code>spring-boot-starter-webmvc</code>，AI 照舊資料以為專案用的是 <code>spring-boot-starter-web</code>，可能另外再加一個或把它換掉。請它先讀現有的 pom.xml，依實際內容修改，不要動已經存在的 starter。',
                '<strong>⚠ 驗證要親眼看到 400</strong>：Bean Validation 要靠 <code>spring-boot-starter-validation</code> 提供實作，AI 有時只補註解或只加 API 套件，驗證就不會執行，送出空名稱照樣得到 201。請它用空名稱、負價格實際送一次，確認拿到 400 與欄位錯誤訊息。',
                '<strong>狀態碼要逐一驗</strong>：除了 200，也要驗不存在的 id 回 404、新增回 201（演練就是這樣驗的）。請 AI 用 PowerShell 7 的 <code>Invoke-RestMethod -SkipHttpErrorCheck -StatusCodeVariable code</code> 印出狀態碼，404 才不會被當成例外吞掉。',
                '<strong>⚠ 範圍不要被擴大</strong>：本章刻意不用資料庫，AI 常順手加上 JPA、H2 或 Swagger。看 diff 時若 pom.xml 多了提示詞沒要求的依賴，請它移除，留到後面的章節再加。',
                '<strong>檢查分層</strong>：完成後請 AI 說明每個業務判斷寫在哪一層。Controller 只處理參數與狀態碼，若出現判斷業務規則的 if（例如檢查庫存），請它搬到 Service；1-4 換成資料庫時才只需要改 Service。'
              ]
            }
          ]
        },
        {
          id: 'd1-u3',
          chapter: '1-3',
          title: 'Docker Desktop、PostgreSQL 18 與 Flyway',
          summary: '安裝 Docker Desktop，透過 AI Agent 產生 PostgreSQL 18（含 pgvector）的 docker-compose.yml 與 application.yml，啟動容器後用 Flyway 管理 Schema 演進。',
          source: 'docs/Day1-3-Docker-Flyway.md',
          heroImage: 'assets/teaching-site/03-ch03-docker-postgres-flyway.png',
          diagramImage: 'assets/diagrams/d1-u3.png',
          diagramCaption: 'Docker Desktop 提供容器環境，AI Agent 負責產生設定檔，Flyway 逐版記錄 Schema 變更。',
          goals: [
            '安裝 Docker Desktop 並確認可執行容器',
            '用 AI Agent 產生 docker-compose.yml（PostgreSQL 18 + pgvector）',
            '用 AI Agent 設定 application.yml 資料庫連線與 Flyway',
            '掌握 Flyway 版本腳本的命名規則與管理方式'
          ],
          tasks: [
            { id: 'd1-u3-t1', text: '用 AI Agent 安裝 Docker Desktop 並執行 docker run hello-world 驗證' },
            { id: 'd1-u3-t2', text: '用 AI Agent 建立 docker-compose.yml 並啟動 PostgreSQL 18 容器' },
            { id: 'd1-u3-t3', text: '用 AI Agent 設定資料庫連線並建立 V1 商品資料表與 6 筆示範商品，確認 Flyway 遷移成功' }
          ],
          sections: [
            {
              title: '為什麼資料庫要容器化',
              type: 'text',
              paragraphs: [
                '教學專案最怕的是每位學員本機資料庫版本不同、初始化內容不同、安裝方式也不同。Docker 的價值在於把這些差異壓到最低，讓資料庫可以被快速重建與共享。',
                '這個課程後面還需要 `pgvector` 支援向量欄位，因此從一開始就直接用帶有該擴充功能的 PostgreSQL 映像。'
              ],
              image: 'assets/teaching-site/13-diagram-flyway-migration.png',
              imageAlt: 'Docker 與 Flyway 版本施工流程圖',
              imageCaption: '資料庫要可重現，Schema 變更也要可追溯。'
            },
            {
              title: '安裝 Docker Desktop',
              type: 'text',
              paragraphs: [
                'Docker Desktop 是在 Windows 上執行 Docker 容器的必要工具，安裝後只需一行 `docker compose up -d` 就能啟動整個 PostgreSQL 資料庫環境，不需要手動安裝資料庫。',
                '請前往官方網站下載並安裝：<a href="https://www.docker.com/products/docker-desktop" target="_blank">https://www.docker.com/products/docker-desktop</a>'
              ],
              bullets: [
                'Docker Desktop 同時安裝 Docker Engine 與 docker-compose',
                'Windows 上依賴 WSL2，安裝完成後需重新啟動電腦讓服務生效',
                '安裝後開啟 PowerShell 執行以下指令確認安裝成功：`docker --version` 與 `docker run hello-world`'
              ]
            },
            {
              title: 'Docker 啟動指令',
              type: 'code',
              paragraphs: [
                '這一章的驗證不應只停在「有執行指令」，而是要確認 PostgreSQL 與 pgvector 容器真的進入可用狀態。'
              ],
              bullets: [
                '最低需求：Docker Desktop 已完成安裝並可正常啟動',
                '最低需求：`docker compose` 或 `docker-compose` 可於 PowerShell 執行',
                '建議在啟動前先確認 5432 埠未被其他本機 PostgreSQL 佔用'
              ],
              code: {
                language: 'powershell',
                title: '啟動 PostgreSQL / pgvector 容器',
                content: 'docker compose up -d'
              }
            },
            {
              title: '資料庫驗證範例與判讀方式',
              type: 'code',
              paragraphs: [
                '啟動完容器後，至少要再看一次容器狀態。若只看到指令執行成功，但容器實際上反覆重啟，後續 Flyway 與 JPA 都會失敗。'
              ],
              code: {
                language: 'text',
                title: '可接受的輸出範例',
                content: 'PS D:\\GitHub\\learn-spring> docker compose up -d\n[+] Running 1/1\n ✔ Container learn-spring-postgres-1  Started\n\nPS D:\\GitHub\\learn-spring> docker ps\nCONTAINER ID   IMAGE                    STATUS          PORTS                    NAMES\nabc123def456   pgvector/pgvector:pg18   Up 12 seconds   0.0.0.0:5432->5432/tcp   learn-spring-postgres-1'
              },
              bullets: [
                '`STATUS` 應為 `Up ...`，若是 `Exited` 或持續重啟，代表資料庫尚未可用',
                '映像名稱應對應 `pgvector/pgvector:pg18`，避免版本與文件不一致',
                '若 5432 埠綁定失敗，通常是本機已有其他 PostgreSQL 服務佔用'
              ]
            },
            {
              title: '常見錯誤與排查',
              type: 'warning',
              bullets: [
                '容器啟動後立刻結束，先看 `docker logs` 檢查初始化錯誤',
                '若顯示 port already allocated，請關閉本機既有 PostgreSQL 或改用其他埠',
                '若映像拉取失敗，先確認 Docker Desktop 已登入與網路可用',
                '若 Flyway 後續連不到資料庫，先確認 `docker ps` 狀態不是只看 `up -d` 的當下輸出'
              ]
            },
            {
              title: 'Flyway 的角色',
              type: 'text',
              paragraphs: [
                'Flyway 負責管理資料庫 Schema 的歷史。每一個版本腳本都代表一次明確變更，例如建立資料表、加索引、插入測試資料等。',
                '正確的做法不是回頭改舊版本，而是新增下一個版本。這樣整個團隊與教學現場都能用同一條遷移歷史來還原資料庫。'
              ],
              bullets: [
                'V1 通常處理基礎 Schema',
                'V2 之後處理擴充欄位、測試資料或向量表',
                '應用啟動時 Flyway 會依序檢查並套用缺少的版本'
              ]
            },
            {
              title: '版本管理思維',
              type: 'text',
              paragraphs: [
                '教學上建議把 Flyway 想成工程紀錄，而不是單純 SQL 檔案。你不是在「改一張資料表」，而是在「新增一次經過紀錄的結構演進」。',
                '這種思維會直接影響後面的 JPA、RAG 與 Demo 驗證，因為所有資料流程都建立在穩定 Schema 上。'
              ]
            },
            {
              title: 'Flyway 命名規則與雙底線陷阱',
              type: 'code',
              paragraphs: [
                'Flyway 的 SQL 腳本必須嚴格遵守命名格式，否則會被直接忽略，造成 Schema 沒有如預期建立，卻也沒有任何錯誤訊息。'
              ],
              bullets: [
                '格式：`V<版本>__<描述>.sql`，版本與描述之間是「雙底線」（兩個 `_`）',
                '`V1__init_schema.sql` — 正確：建立 users / products 資料表',
                '`V1_init_schema.sql` — 錯誤：單底線，Flyway 無法辨識',
                '版本號不能重複，且一旦執行就不能修改檔案內容（雜湊值會不符）',
                '需要新增欄位時，建立 V3 而不是修改 V1'
              ],
              code: {
                language: 'text',
                title: 'Flyway 腳本命名規範',
                content: '格式：  V<Version>__<Description>.sql\n         ↑         ↑↑\n      大寫V       雙底線（最常出錯的地方！）\n\n範例：\n  V1__init_schema.sql        ← 建立基礎資料表\n  V2__insert_test_data.sql   ← 插入測試資料\n  V3__add_category_column.sql ← 新增欄位（絕對不能改 V1）'
              }
            },
            {
              title: '用 AI Agent 產生 docker-compose.yml',
              type: 'code',
              paragraphs: [
                '確認 Docker Desktop 已正常運行後，接著請 AI Agent 幫你在專案根目錄建立 `docker-compose.yml`。本課程使用 PostgreSQL 18 並搭配 pgvector 向量擴充（Day 2 的 RAG 功能依賴它），讓 AI Agent 直接生成並啟動容器，你再對照下方說明理解每個欄位的用途。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 建立 docker-compose.yml',
                content: '【提示詞 1 — 請 AI Agent 建立並啟動】\n請在我的 Spring Boot 專案根目錄建立 docker-compose.yml，需求如下：\n- 使用 pgvector/pgvector:pg18 映像（PostgreSQL 18 + pgvector 向量擴充）\n- 資料庫名稱：learn_spring\n- 使用者：postgres，密碼：password\n- 本機 5432 埠對應容器 5432 埠（若本機 5432 已被其他程式佔用，改用 15432:5432，之後連線字串也要跟著改）\n- 使用具名卷（named volume）讓資料持久化，容器重建後資料不遺失；注意 PostgreSQL 18 映像的卷要掛在 /var/lib/postgresql（不是 /var/lib/postgresql/data，18 版起資料目錄改為版本子目錄，掛錯容器會直接 Exited）\n- 每個設定項目加上中文註解\n\n建立完成後請幫我執行 docker compose up -d，\n再執行 docker ps，確認容器狀態為 Up。\n\n【提示詞 2 — 排查容器啟動失敗（遇到錯誤時才使用）】\n我執行 docker compose up -d 後容器狀態不是 Up，\ndocker logs 顯示：\n[貼上錯誤訊息]\n請幫我找出原因並修正。'
              }
            },
            {
              title: 'docker-compose.yml 設定說明',
              type: 'code',
              paragraphs: [
                '本課程的 docker-compose.yml 使用官方提供的 pgvector 映像，內建 PostgreSQL 18 與向量擴充套件，Day 2 的 RAG 功能直接依賴這個映像。以下是完整的設定內容與詳細的欄位用途說明。'
              ],
              code: {
                language: 'yaml',
                title: 'docker-compose.yml 核心設定',
                content: 'services:                          # 定義此 Compose 專案要執行的容器服務\n  postgres:                        # 資料庫服務名稱 (自訂)\n    image: pgvector/pgvector:pg18  # 使用包含向量擴充套件的官方 PostgreSQL 18 映像檔\n    container_name: spring-postgres # 指定容器運作時的名稱，方便透過 CLI 進行管理\n    ports:\n      - "5432:5432"                # 將主機的 5432 連接埠映射到容器的 5432 連接埠\n    environment:                   # 設定容器內部的環境變數\n      POSTGRES_DB: learn_spring    # 容器啟動時自動建立的資料庫名稱\n      POSTGRES_USER: postgres      # 資料庫超級使用者（Administrator）的帳號\n      POSTGRES_PASSWORD: password  # 資料庫超級使用者帳號對應的密碼\n    volumes:                       # 掛載資料卷，將容器內資料與本機目錄連結\n      - postgres_data:/var/lib/postgresql # 將資料持久化儲存於具名卷，防止容器重建後資料丟失\n    restart: always                # 容器重啟策略：當容器崩潰或 Docker 引擎重啟時，會自動重啟此服務\n\nvolumes:                           # 宣告全域的具名資料卷\n  postgres_data:                   # 定義名為 postgres_data 的具名卷，供 postgres 服務掛載使用'
              },
              bullets: [
                '不寫 version 欄位 — Compose V2 已不使用檔案開頭的 version，寫了只會出現過時警告；舊範例看到 version: \'3.8\' 可以直接刪除。',
                'services — 所有要執行的容器都必須宣告在此標籤下。本專案只有一個名為 postgres 的服務。',
                'image — 使用 pgvector/pgvector:pg18 映像檔。因為 Day 2 的 RAG 功能需要向量檢索（pgvector），故必須選用內建該擴充套件的 PostgreSQL。',
                'container_name — 容器名稱設定為 spring-postgres。固定名稱可方便後續執行 docker logs spring-postgres 或 docker exec -it spring-postgres bash。',
                'ports — 主機與容器的埠號對應（主機埠:容器埠）。將主機 5432 埠映射到容器的 5432 埠，Spring Boot 等外部工具便可直接透過 localhost:5432 連線資料庫。',
                'environment — 定義容器的環境變數。對 postgres 映像檔來說，這是初始化資料庫所必須設定的帳號與密碼資訊。',
                'volumes — 本機與容器內部目錄的掛載。/var/lib/postgresql 是 PostgreSQL 儲存資料檔案的地方。將其映射到具名卷 postgres_data 後，即使容器重啟或被刪除重建，資料庫中的商品、使用者等資料不會丟失。',
                'restart: always — 代表重啟策略。當 Docker 服務重啟，或該容器因為非預期錯誤而停止時，Docker 守護程序會自動嘗試重啟該容器，確保服務高可用性。',
                'volumes: postgres_data: — 聲明一個名為 postgres_data 的具名資料卷（Named Volume），由 Docker 自動在主機上管理其實際存放路徑，免去手動指定主機絕對路徑的麻煩。'
              ]
            },
            {
              title: '用 AI Agent 設定 application.yml 資料庫連線',
              type: 'code',
              paragraphs: [
                '容器啟動成功後，接著請 AI Agent 修改 Spring Boot 的 `application.yml`，加入資料庫連線資訊與 Flyway 設定。設定完成後執行 `mvn spring-boot:run`，在 log 中看到 Flyway 完成遷移的訊息就代表整個資料庫環境已就緒。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 設定 application.yml',
                content: '【提示詞 1 — 加入依賴與資料庫連線】\n請修改我的 Spring Boot 專案（1-2 章的商品 API）：\n1. pom.xml 加入 postgresql、spring-boot-starter-flyway、flyway-database-postgresql 依賴（版本交給 Spring Boot 管理；Spring Boot 4 必須用 starter，單加 flyway-core 啟動不會報錯但完全不會遷移）\n2. Initializr 產生的是 application.properties，請改成 src/main/resources/application.yml（刪除 properties，保留 spring.application.name），並加入：\n   - datasource：連線到 localhost:5432/learn_spring，帳號 postgres，密碼 password\n   - flyway：enabled: true，baseline-on-migrate: true，腳本位置 classpath:db/migration\n每個設定項目請加上中文註解說明用途。\n\n【提示詞 2 — 建立商品資料表與示範商品】\n請在 src/main/resources/db/migration/ 建立 V1__create_products.sql：\n1. 建立 products 資料表，欄位對應 1-2 的 Product：id（BIGSERIAL 主鍵）、name、description、price（NUMERIC(10,2)）、stock（INT）、image_url、category，再加上 created_at、updated_at（TIMESTAMP，預設現在時間）\n2. 插入 6 筆示範商品：無線耳機 Pro（售價 2990、庫存 12）、Bass+ 重低音耳機（售價 3000 以內）、機械鍵盤、行動電源、香氛加濕器、智慧檯燈（庫存 0，缺貨示範）；說明欄位寫出規格重點；image_url 依序填 /images/products/earphone-pro.jpg、bass-headphones.jpg、keyboard.jpg、power-bank.jpg、humidifier.jpg、desk-lamp.jpg（圖片在 2-4 章做前端時下載放進去）\n3. 檔名注意 V1 後面是「兩個底線」\n\n【提示詞 3 — 驗證連線與 Flyway 遷移】\n設定完成後請幫我執行 mvn spring-boot:run，\n確認 log 中出現 Successfully applied 1 migration 的訊息，並用 docker exec 進入容器查詢 products 有 6 筆資料。\n若 log 完全沒有 Flyway 字樣，代表缺 spring-boot-starter-flyway；若出現連線錯誤或 Flyway 失敗，請幫我找出原因並修正。'
              }
            },
            {
              title: 'application.yml 資料庫連線配置',
              type: 'code',
              paragraphs: [
                '將 Spring Boot 連線資訊對應到 Docker 容器的設定。`baseline-on-migrate: true` 的用途是：如果資料庫已存在內容，Flyway 以現況為基準開始記錄，不會強制從頭建立。'
              ],
              code: {
                language: 'yaml',
                title: 'application.yml 資料庫設定',
                content: 'spring:\n  datasource:\n    url: jdbc:postgresql://localhost:5432/learn_spring\n    username: postgres\n    password: password\n    driver-class-name: org.postgresql.Driver\n  flyway:\n    enabled: true\n    baseline-on-migrate: true  # 資料庫非空時以現況為遷移起點\n  jpa:\n    hibernate:\n      ddl-auto: validate  # 1-4 加入 JPA 依賴後才生效；由 Flyway 管理 Schema，JPA 只做驗證'
              }
            },
            {
              title: 'AI 提示詞練習',
              type: 'text',
              paragraphs: [
                '試著向 AI 助手詢問以下問題，驗證你對 Flyway 的理解：'
              ],
              bullets: [
                '「如果我的 Flyway 腳本 V1 已經執行過了，我可以直接在 V1 中修改資料表結構嗎？為什麼？」',
                '「請幫我寫一個 V3__add_category_to_products.sql 遷移檔案，為 products 表新增一個 category 欄位，預設值為 GENERAL。」'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ Up 之後再驗一次持久化</strong>：PostgreSQL 18 映像的卷要掛在 <code>/var/lib/postgresql</code>。第一輪演練時 AI 照舊習慣掛到 <code>/var/lib/postgresql/data</code>，容器直接 Exited。提示詞已寫明；完成 Flyway 後，請 AI 再執行一次 <code>docker compose down</code> 與 <code>up -d</code>，確認 products 仍是 6 筆。',
                '<strong>⚠ 啟動成功不等於遷移成功</strong>：只加 <code>flyway-core</code> 時應用照樣顯示 Started，但完全不會建表（第一輪演練就是這樣）。請 AI 從日誌找出 <code>Successfully applied</code>，並用 <code>docker exec</code> 查資料筆數，兩個都看到才算完成。',
                '<strong>⚠ 不准讓 AI 改已套用的 V1</strong>：發現 V1 有錯時，AI 最直覺的修法是直接改檔，下次啟動就因 checksum 不符而失敗。請它新增下一個版本；若本機想整個重來，要它先說明會刪掉哪個 volume，由你同意後再執行。',
                '<strong>埠被占用就換埠，不要停別人的服務</strong>：5432 被占用時，請 AI 改用 15432（連線字串一起改），不要讓它停掉你電腦上既有的 PostgreSQL 服務或容器。課前演練也是改用其他埠，避開既有容器。',
                '<strong>改完把整份 yml 印出來看</strong>：properties 改成 yml，或之後把設定併入既有的 <code>spring:</code> 區塊時，縮排錯一層 key 就讀不到（第一輪演練曾把設定放進錯的區塊）。請 AI 改完貼出整份 application.yml 給你看。'
              ]
            }
          ]
        },
        {
          id: 'd1-u4',
          chapter: '1-4',
          title: 'Spring Data JPA 與 Entity 映射',
          summary: '使用 Entity、Repository 與 Query Method 將資料表操作提升為物件導向程式碼。',
          source: 'docs/Day1-4-SpringJPA.md',
          heroImage: 'assets/teaching-site/04-ch04-jpa-entity-mapping.png',
          diagramImage: 'assets/diagrams/d1-u4.png',
          diagramCaption: 'Java Entity 對應資料表欄位，Repository 則封裝查詢與持久化操作。',
          goals: [
            '理解 ORM 與 JPA 在專案中的角色',
            '掌握常見 Entity 註解用途',
            '能用 Query Method 表達常見查詢需求'
          ],
          tasks: [
            { id: 'd1-u4-t1', text: '用 AI Agent 為 1-2 專案加入 JPA 依賴並更新 Product.java 為 Entity' },
            { id: 'd1-u4-t2', text: '用 AI Agent 建立 ProductRepository 並更新 ProductService 改用資料庫' },
            { id: 'd1-u4-t3', text: '執行 mvn spring-boot:run，確認 GET /api/products 回傳資料庫中的商品' },
            { id: 'd1-u4-t4', text: '用 AI Agent 建立 V2 訂單資料表、Order Entity 與 OrderService（供 AI 客服查訂單）' }
          ],
          sections: [
            {
              title: 'JPA 解決了什麼問題',
              type: 'text',
              paragraphs: [
                '如果每一次存取資料都要手寫 SQL、手動把結果塞回 Java 物件，開發與維護成本會很高。JPA 的價值，是讓你以物件模型思考資料，而不是每次都回到低階映射。',
                '這不表示 SQL 不重要，而是代表常見 CRUD 與查詢可以交給更高階的抽象處理。'
              ],
              image: 'assets/teaching-site/14-diagram-jpa-mapping.png',
              imageAlt: 'Entity 與資料表對照圖',
              imageCaption: 'JPA 的核心，不是魔法，而是穩定的對映規則。'
            },
            {
              title: 'Entity 設計要點',
              type: 'text',
              bullets: [
                '`@Entity` 表示這個類別要對應資料表',
                '`@Id` 與主鍵生成策略決定資料識別方式',
                '欄位型別與 nullable 規則要與資料庫 Schema 一致',
                '註解與欄位命名一旦混亂，後續查詢與維護成本會快速升高'
              ]
            },
            {
              title: 'Product.java Entity 完整範例',
              type: 'code',
              paragraphs: [
                '這是本課程 Product Entity 的結構，對應到 Flyway V1 建立的 `products` 資料表。注意主鍵策略使用 `IDENTITY`，代表 PostgreSQL 的 SERIAL 自增欄位。'
              ],
              code: {
                language: 'java',
                title: 'Product.java',
                content: '@Data                    // Lombok：自動生成 getter/setter/toString/equals\n@NoArgsConstructor       // Lombok：JPA 要求無參建構子\n@AllArgsConstructor      // Lombok：方便測試與初始化\n@Entity\n@Table(name = "products")\npublic class Product {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)  // 對應 PostgreSQL SERIAL\n    private Long id;\n\n    @Column(nullable = false)\n    private String name;\n\n    private String description;\n\n    @Column(nullable = false)\n    private Double price;\n\n    private Integer stock;        // 庫存數量\n\n    @Column(name = "created_at")\n    private LocalDateTime createdAt;\n}'
              }
            },
            {
              title: 'Lombok 與 JPA 的搭配注意事項',
              type: 'text',
              paragraphs: [
                '1-2 章節已介紹過 Lombok 的基本用法。在 JPA Entity 中使用時，有一個額外要求：`@NoArgsConstructor` 是必要的，因為 JPA 在從資料庫讀取資料時，需要先用無參建構子建立物件實例，再逐欄填入資料。',
                'VS Code 中若發現 Lombok 的 `@Data` 等註解出現紅線，請確認 Java 外掛已啟用內建 Lombok 支援（不需要另裝獨立外掛）。'
              ]
            },
            {
              title: 'Repository 與 Query Method',
              type: 'text',
              paragraphs: [
                '`JpaRepository` 提供大量現成的 CRUD 能力，讓你不需要為每個模組都重寫基礎存取程式碼。當查詢需求足夠單純時，甚至可以直接透過方法命名表達條件。',
                '例如 `findByNameContaining` 這類寫法，本身就是查詢語意，Spring Data 會把它翻譯成對應 SQL。'
              ],
              code: {
                language: 'java',
                title: 'Query Method 範例',
                content: 'public interface ProductRepository extends JpaRepository<Product, Long> {\n    List<Product> findByNameContaining(String keyword);\n}'
              }
            },
            {
              title: 'Query Method 命名規則分解',
              type: 'code',
              paragraphs: [
                'Spring Data JPA 會解析介面方法名稱，把它翻譯成 SQL。這個機制讓常見查詢完全不用寫 SQL，只要把條件寫在方法名稱裡。'
              ],
              bullets: [
                '`find` — SELECT 操作',
                '`By` — WHERE 條件起點',
                '`Name` — 對應 `name` 欄位',
                '`Containing` — 轉為 LIKE \'%value%\'',
                '`IgnoreCase` — 不區分大小寫（LOWER() 函數）'
              ],
              code: {
                language: 'java',
                title: 'ProductRepository.java',
                content: '@Repository\npublic interface ProductRepository extends JpaRepository<Product, Long> {\n\n    // 翻譯為：SELECT * FROM products WHERE LOWER(name) LIKE LOWER(\'%name%\')\n    List<Product> findByNameContainingIgnoreCase(String name);\n\n    // JpaRepository 繼承後立即擁有的方法（不需要自己寫）：\n    // save(entity)        — INSERT 或 UPDATE\n    // findById(id)        — SELECT WHERE id = ?\n    // findAll()           — SELECT * FROM table\n    // deleteById(id)      — DELETE WHERE id = ?\n    // count()             — SELECT COUNT(*)\n}'
              }
            },
            {
              title: '@Transactional：寫入操作一定要加',
              type: 'text',
              paragraphs: [
                'Repository 幫你省去了 SQL 撰寫，但「資料一致性的保障」不在 Repository 層，而是在 Service 層的交易（Transaction）控制上。',
                '當一個業務操作需要對資料庫做新增、修改或刪除時，必須在 Service 方法上加 `@Transactional`，讓這些動作被包在同一個交易區塊裡——成功就全部提交，失敗就全部回滾，不會出現「存到一半」的殘缺資料。'
              ],
              bullets: [
                '`@Transactional` → 寫入操作（INSERT / UPDATE / DELETE），讓 Hibernate 在方法結束後自動 commit，發生例外時自動 rollback',
                '`@Transactional(readOnly = true)` → 純查詢操作，告知 Hibernate 跳過 dirty checking、提示資料庫使用唯讀連線，降低效能開銷',
                '**不加的後果**：Hibernate Session 可能在方法執行中途失效，寫入操作拋出 `TransactionRequiredException`，且只在特定流程才觸發，難以排查'
              ],
              callout: {
                type: 'warning',
                title: '交易標註加在 Service，不加在 Repository',
                body: 'Repository 已由 Spring Data 管理自己的基礎交易，但業務邏輯常常要在一個方法裡呼叫多個 Repository 操作（如先查後存、批次更新），這些步驟必須共用同一個交易才有意義。把 @Transactional 加在 Service，才能讓整個業務動作成為原子操作。'
              }
            },
            {
              title: '@Transactional 標註規範與 Service 完整範例',
              type: 'code',
              paragraphs: [
                '以下是本課程 ProductService 的完整寫法，查詢方法用 `readOnly = true`、寫入方法用預設（可讀可寫）。這個模式是 Spring Boot 專案的標準慣例，直接套用即可。'
              ],
              code: {
                language: 'java',
                title: 'ProductService.java — @Transactional 標準用法',
                content: '@Service\npublic class ProductService {\n\n    private final ProductRepository productRepository;\n\n    public ProductService(ProductRepository productRepository) {\n        this.productRepository = productRepository;\n    }\n\n    // ✅ 純查詢：readOnly = true，Hibernate 跳過髒數據檢查\n    @Transactional(readOnly = true)\n    public List<Product> getAllProducts() {\n        return productRepository.findAll();\n    }\n\n    // ✅ 純查詢\n    @Transactional(readOnly = true)\n    public Optional<Product> getProductById(Long id) {\n        return productRepository.findById(id);\n    }\n\n    // ✅ 寫入：使用預設 @Transactional，方法結束後自動 commit\n    @Transactional\n    public Product saveProduct(Product product) {\n        return productRepository.save(product);\n    }\n\n    // ✅ 寫入：包含先查後刪，兩個動作在同一個交易內\n    @Transactional\n    public void deleteProduct(Long id) {\n        productRepository.deleteById(id);\n    }\n\n    // ❌ 沒有標註：寫入操作在某些情境下會拋出 TransactionRequiredException\n    public Product unsafeSave(Product product) {\n        return productRepository.save(product);  // 不穩定，避免這樣寫\n    }\n}'
              }
            },
            {
              title: 'readOnly = true 對效能的實際影響',
              type: 'text',
              paragraphs: [
                '`readOnly = true` 不只是語意宣告，它在底層帶來兩個具體效果，在高流量查詢場景尤其明顯。'
              ],
              bullets: [
                '**跳過 dirty checking**：Hibernate 在交易結束前會掃描所有載入的 Entity 是否有變更（dirty checking），`readOnly = true` 直接略過這個掃描，省去 CPU 與記憶體開銷',
                '**提示資料庫使用唯讀連線**：部分資料庫連線池（如 HikariCP）與讀寫分離架構會依此將查詢路由到唯讀副本（Read Replica），降低主庫壓力',
                '**防止意外寫入**：標記為 `readOnly` 的方法若試圖執行寫入，資料庫驅動或連線池會報錯，形成一道安全護欄'
              ]
            },
            {
              title: '@Query 改資料必須同時加上 @Modifying',
              type: 'text',
              paragraphs: [
                'Repository 的派生方法（如 `save()`、`deleteById()`）已由 Spring Data 內部處理好交易邏輯，直接呼叫就行。但若你用 `@Query` 自行撰寫 JPQL 的 UPDATE 或 DELETE，Spring Data JPA 預設把它當成 SELECT 語句對待，必須額外加上 `@Modifying` 才能正確執行。',
                '缺少 `@Modifying` 時，Spring Data 會在執行時拋出 `InvalidDataAccessApiUsageException`，錯誤訊息是「Executing an update/delete query」，容易讓人誤以為是 SQL 語法問題。'
              ],
              bullets: [
                '`@Modifying` — 告知 Spring Data 這個 `@Query` 是寫入操作，不是查詢',
                '`@Transactional` — 寫入操作仍需交易包覆，通常加在 Service；若 Repository 方法需要獨立交易可直接加在此',
                '兩個標註缺一不可，順序不影響結果'
              ]
            },
            {
              title: '@Modifying + @Query 完整範例',
              type: 'code',
              paragraphs: [
                '以下示範三種常見場景：批次更新、條件刪除，以及派生刪除方法（不需要 `@Modifying`）的對比。'
              ],
              code: {
                language: 'java',
                title: 'ProductRepository.java — @Modifying 用法',
                content: '@Repository\npublic interface ProductRepository\n        extends JpaRepository<Product, Long>,\n                JpaSpecificationExecutor<Product> {\n\n    // ✅ 批次更新：@Modifying + @Transactional 缺一不可\n    //    clearAutomatically = true：更新後清除 Hibernate 一級快取，\n    //    避免同一 Session 後續查詢拿到舊值（幽靈快取問題）\n    @Modifying(clearAutomatically = true)\n    @Transactional\n    @Query("UPDATE Product p SET p.price = :price WHERE p.id = :id")\n    int updatePriceById(@Param("id") Long id, @Param("price") BigDecimal price);\n\n    // ✅ 條件刪除：直接對資料庫下 DELETE，效率高，適合批次\n    @Modifying(clearAutomatically = true)\n    @Transactional\n    @Query("DELETE FROM Product p WHERE p.stock = 0")\n    int deleteOutOfStockProducts();\n\n    // ✅ 派生刪除：Spring Data 先 SELECT 再逐筆 DELETE\n    //    不需要 @Modifying，但交易需由呼叫方（Service）提供\n    //    優點：會觸發 Hibernate 生命週期回呼（@PreRemove 等）\n    void deleteByNameContaining(String name);\n\n    // ❌ 錯誤示範：@Query 寫入但缺少 @Modifying → 執行時拋出例外\n    // @Query("UPDATE Product p SET p.price = :price WHERE p.id = :id")\n    // int wrongUpdate(@Param("id") Long id, @Param("price") BigDecimal price);\n}'
              }
            },
            {
              title: 'clearAutomatically：不加會有幽靈快取問題',
              type: 'text',
              paragraphs: [
                '`@Modifying` 的 `clearAutomatically = true` 選項決定是否在執行 DML 後清除 Hibernate 的 **一級快取（first-level cache）**。不清除時，同一個 Session 後續讀到的 Entity 仍是快取中的舊值，即使資料庫已更新。'
              ],
              code: {
                language: 'java',
                title: '幽靈快取問題示意',
                content: '// 同一個 @Transactional Service 方法中：\n\nProduct p = productRepository.findById(1L).get();  // 載入進一級快取，price = 100\n\n// 執行批次更新（若未設 clearAutomatically = true）\nproductRepository.updatePriceById(1L, new BigDecimal("200"));\n\n// ⚠️ 快取未清除，拿到的仍是 price = 100 的舊物件\nProduct stale = productRepository.findById(1L).get();\nSystem.out.println(stale.getPrice());  // 印出 100，而不是 200\n\n// ✅ clearAutomatically = true → 一級快取被清除，重新從 DB 讀取\n// stale.getPrice() → 200（正確）'
              },
              bullets: [
                '`clearAutomatically = true`（建議預設加上）→ DML 執行後清除一級快取，後續查詢從資料庫重新讀取',
                '`flushAutomatically = true` → DML 執行前先將 Session 中待寫入的變更 flush 到 DB，確保 DML 看到最新狀態',
                'Hibernate `@PreRemove`、`@PostPersist` 等生命週期回呼：`@Modifying` 的 DELETE 不會觸發，派生刪除方法才會'
              ]
            },
            {
              title: '@Modifying 批次刪除 vs 派生刪除的選用時機',
              type: 'text',
              bullets: [
                '**需要批次效率**（萬筆以上）→ 用 `@Modifying` + `@Query DELETE`，直接下 SQL，不載入 Entity，效率高',
                '**需要觸發生命週期事件**（`@PreRemove`、`@EntityListeners`）→ 用派生刪除方法，Spring Data 先查再逐筆刪，每筆都經過 Hibernate 管理',
                '**一般 CRUD**（單筆刪除）→ 用 `deleteById()`，Spring Data 已處理好交易與快取',
                '**批次更新**（改特定條件下的欄位）→ 幾乎都用 `@Modifying` + `@Query UPDATE`，派生方法做不到批次更新'
              ]
            },
            {
              title: 'Audit 欄位：自動記錄建立與修改時間',
              type: 'text',
              paragraphs: [
                '正式應用中的資料表幾乎都需要 `created_at`、`updated_at`，用來記錄每筆資料的建立與最後修改時間。如果每個 Entity 都手動在 `save()` 前設定，既容易漏，也會讓業務邏輯摻雜技術細節。',
                'Spring Data JPA 的 **JPA Auditing** 功能可以讓這兩個欄位完全自動填入：建立時寫入 `created_at`，之後每次更新只更新 `updated_at`，開發者不需要寫任何設定程式碼。'
              ],
              bullets: [
                '在啟動類別（或 `@Configuration` 類別）加上 `@EnableJpaAuditing`，啟用整個機制',
                '在 Entity 或共用父類別加上 `@EntityListeners(AuditingEntityListener.class)`，告知 Hibernate 要監聽生命週期事件',
                '用 `@CreatedDate` / `@LastModifiedDate` 標記對應欄位，Spring 自動在寫入前填值'
              ],
              code: {
                language: 'java',
                title: 'LearnSpringApplication.java — 啟用 JPA Auditing',
                content: '@SpringBootApplication\n@EnableJpaAuditing  // 啟用 JPA Auditing，應用程式啟動時生效\npublic class LearnSpringApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(LearnSpringApplication.class, args);\n    }\n}'
              }
            },
            {
              title: 'BaseAuditEntity：把 Audit 欄位抽成共用父類別',
              type: 'code',
              paragraphs: [
                '多個 Entity 都需要 audit 欄位時，建議抽成 `BaseAuditEntity` 讓所有 Entity 繼承。`@MappedSuperclass` 表示這個類別本身不對應任何資料表，只把欄位定義「繼承」給子類別的資料表。'
              ],
              code: {
                language: 'java',
                title: 'BaseAuditEntity.java',
                content: '@MappedSuperclass\n@EntityListeners(AuditingEntityListener.class)  // 監聽 @PrePersist / @PreUpdate 事件\npublic abstract class BaseAuditEntity {\n\n    // 建立時間：@PrePersist 時由 Spring 自動填入，之後不允許修改\n    @CreatedDate\n    @Column(name = "created_at", updatable = false, nullable = false)\n    private LocalDateTime createdAt;\n\n    // 最後修改時間：每次 @PreUpdate 時自動更新\n    @LastModifiedDate\n    @Column(name = "updated_at", nullable = false)\n    private LocalDateTime updatedAt;\n\n    public LocalDateTime getCreatedAt() { return createdAt; }\n    public LocalDateTime getUpdatedAt() { return updatedAt; }\n}'
              }
            },
            {
              title: 'Entity 繼承 BaseAuditEntity',
              type: 'code',
              paragraphs: [
                'Product 繼承 `BaseAuditEntity` 後，資料表自動多出 `created_at` 與 `updated_at` 兩欄。記得補上對應的 Flyway 遷移腳本，否則 `ddl-auto: validate` 會因欄位不符而啟動失敗。'
              ],
              code: {
                language: 'java',
                title: 'Product.java — 繼承 Audit 父類別',
                content: '@Data\n@NoArgsConstructor\n@AllArgsConstructor\n@Entity\n@Table(name = "products")\npublic class Product extends BaseAuditEntity {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false)\n    private String name;\n\n    private String description;\n\n    @Column(nullable = false)\n    private BigDecimal price;\n\n    private Integer stock;\n\n    // created_at 與 updated_at 從 BaseAuditEntity 繼承，不需要重複宣告\n}'
              }
            },
            {
              title: 'Flyway 遷移腳本需同步新增 Audit 欄位',
              type: 'code',
              paragraphs: [
                '新增繼承的 audit 欄位後，資料庫欄位也要對應更新。若已有 V1 建立 products 資料表，此時需要補一支 V2 遷移腳本新增欄位，不可以修改 V1——Flyway 不允許改動已執行過的腳本。'
              ],
              code: {
                language: 'sql',
                title: 'V2__add_audit_columns.sql',
                content: '-- 為既有資料表補上 audit 欄位\nALTER TABLE products\n    ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT NOW(),\n    ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT NOW();\n\n-- 若 users 資料表也需要 audit 欄位，在同一支腳本一起處理\nALTER TABLE users\n    ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT NOW(),\n    ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT NOW();'
              }
            },
            {
              title: '建立者與修改者欄位（需搭配 Spring Security，本課程僅說明）',
              type: 'text',
              paragraphs: [
                '除了時間戳記，正式系統還常需要 `created_by`（建立者帳號）與 `updated_by`（最後修改者帳號）。Spring Data JPA 提供對應的 `@CreatedBy` 與 `@LastModifiedBy` 標註，但它們需要額外實作 `AuditorAware<T>` 介面，告知 Spring「目前登入的使用者是誰」。',
                '由於「取得目前使用者」通常需要讀取 Spring Security 的 `SecurityContextHolder`，本課程暫不實作完整的 Security 整合，僅說明設計結構與整合方式。'
              ],
              bullets: [
                '`@CreatedBy` → 建立時由 `AuditorAware.getCurrentAuditor()` 填入，之後不允許修改',
                '`@LastModifiedBy` → 每次更新時自動更新為目前使用者',
                '`AuditorAware<T>` → 由你實作的介面，Spring 在需要使用者資訊時呼叫；`T` 通常是 `String`（帳號名稱）',
                '測試階段可暫時實作為固定回傳 `"system"`，接上 Spring Security 後再替換為真實登入帳號'
              ],
              callout: {
                type: 'info',
                title: 'AuditorAware 與 Spring Security 的整合方式（僅說明）',
                body: '實作 AuditorAware<String>，在 getCurrentAuditor() 方法中從 SecurityContextHolder.getContext().getAuthentication().getName() 取得目前使用者帳號並回傳。課程完整引入 Spring Security 後再實作此介面，目前可先回傳 Optional.of("system") 讓 audit 欄位正常寫入。'
              }
            },
            {
              title: 'AuditorAware 結構說明（示意，非本課程完整實作）',
              type: 'code',
              paragraphs: [
                '以下程式碼展示介面結構與未來整合 Spring Security 的方向，目前專案可先用簡化版讓 audit 功能運作，等課程引入身分驗證後再替換為完整版。'
              ],
              code: {
                language: 'java',
                title: 'AuditorAware 實作方向',
                content: '// ✅ 開發 / 測試階段：先回傳固定值，讓 @CreatedBy 能正常寫入\n@Component\npublic class StaticAuditorAware implements AuditorAware<String> {\n    @Override\n    public Optional<String> getCurrentAuditor() {\n        return Optional.of("system");  // 暫用固定值\n    }\n}\n\n// ✅ 接上 Spring Security 後替換為此版本（需引入 spring-boot-starter-security）\n// @Component\n// public class SecurityAuditorAware implements AuditorAware<String> {\n//     @Override\n//     public Optional<String> getCurrentAuditor() {\n//         return Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication())\n//             .filter(Authentication::isAuthenticated)\n//             .map(Authentication::getName);\n//     }\n// }\n\n// @EnableJpaAuditing 需要知道用哪個 AuditorAware，加上 auditorAwareRef 指定\n// @SpringBootApplication\n// @EnableJpaAuditing(auditorAwareRef = "securityAuditorAware")\n// public class LearnSpringApplication { ... }'
              }
            },
            {
              title: 'Query Method 的限制：條件一多就爆炸',
              type: 'text',
              paragraphs: [
                'Query Method 命名在條件固定時非常好用，但商業搜尋場景通常有多個「可選過濾條件」：使用者可能同時填名稱與價格上限，也可能只填其中一個，甚至全不填。',
                'Query Method 無法處理「條件可有可無」的動態查詢——你必須為每種組合寫一個方法，或在 Service 層用 if-else 分支呼叫不同查詢，兩種做法維護成本都很高。'
              ],
              code: {
                language: 'java',
                title: '難以維護的 if-else 分支查詢（反例）',
                content: '// ❌ 反例：每多一個可選條件就要翻倍方法數\npublic List<Product> search(String name, Double maxPrice, Boolean inStock) {\n    if (name != null && maxPrice != null && inStock != null) {\n        return repo.findByNameContainingAndPriceLessThanAndStockGreaterThan(...);\n    } else if (name != null && maxPrice != null) {\n        return repo.findByNameContainingAndPriceLessThan(...);\n    } else if (name != null) {\n        return repo.findByNameContaining(name);\n    }\n    // ... 還有更多分支\n}'
              }
            },
            {
              title: 'Specification：動態查詢的正確解法',
              type: 'text',
              paragraphs: [
                '`Specification<T>` 是 Spring Data JPA 內建的動態查詢機制，核心概念是把每個查詢條件包裝成一個獨立物件，再自由組合。',
                '每個 Specification 本質上是一個 lambda，簽章為 `(root, query, cb) -> Predicate`：`root` 代表 FROM 的 Entity、`cb`（CriteriaBuilder）是 WHERE 條件的工廠。回傳 `null` 就代表「這個條件不套用」，非常適合可選欄位。'
              ],
              bullets: [
                '不需要修改 SQL 字串，只在 Java 程式碼層組合條件',
                '每個條件獨立封裝，可單獨測試每一個 Predicate',
                '`null` 條件自動被 Spring Data 跳過，不會影響查詢語意',
                '透過 `.and()` / `.or()` 自由串接，組合結果仍是一個 Specification 物件'
              ]
            },
            {
              title: '步驟一：Repository 加入 JpaSpecificationExecutor',
              type: 'code',
              paragraphs: [
                '在原本的 `ProductRepository` 額外繼承 `JpaSpecificationExecutor<Product>`，這樣就能呼叫 `findAll(Specification<T>)` 等動態查詢方法，原有的 `JpaRepository` 功能完全不受影響。'
              ],
              code: {
                language: 'java',
                title: 'ProductRepository.java',
                content: '@Repository\npublic interface ProductRepository\n        extends JpaRepository<Product, Long>,\n                JpaSpecificationExecutor<Product> {  // 加入這一行\n\n    // 原有的 Query Method 保留不動\n    List<Product> findByNameContainingIgnoreCase(String name);\n}'
              }
            },
            {
              title: '步驟二：建立 ProductSpec 條件工廠',
              type: 'code',
              paragraphs: [
                '建議把所有 Specification 條件集中在一個 `ProductSpec` 類別，以靜態方法的形式對外提供。每個方法負責一個欄位的判斷，傳入 `null` 時回傳 `null`（代表不套用此條件）。'
              ],
              code: {
                language: 'java',
                title: 'ProductSpec.java',
                content: 'public class ProductSpec {\n\n    // 名稱包含關鍵字（不分大小寫）\n    public static Specification<Product> nameContains(String name) {\n        return (root, query, cb) ->\n            name == null ? null\n                : cb.like(cb.lower(root.get("name")), "%" + name.toLowerCase() + "%");\n    }\n\n    // 價格小於等於上限\n    public static Specification<Product> priceLessThan(Double max) {\n        return (root, query, cb) ->\n            max == null ? null\n                : cb.lessThanOrEqualTo(root.get("price"), max);\n    }\n\n    // 庫存大於 0\n    public static Specification<Product> inStock() {\n        return (root, query, cb) ->\n            cb.greaterThan(root.get("stock"), 0);\n    }\n}'
              }
            },
            {
              title: '步驟三：在 Service 動態組合條件',
              type: 'code',
              paragraphs: [
                '`Specification.where()` 建立起點，`.and()` / `.or()` 串接條件。條件方法回傳 `null` 時 Spring Data 自動跳過，不會產生多餘的 `WHERE 1=1 AND NULL` 問題。'
              ],
              code: {
                language: 'java',
                title: 'ProductService.java — 動態查詢方法',
                content: '@Service\npublic class ProductService {\n\n    private final ProductRepository productRepository;\n\n    public ProductService(ProductRepository productRepository) {\n        this.productRepository = productRepository;\n    }\n\n    /**\n     * 動態搜尋商品：三個條件皆為可選，null 表示不套用\n     */\n    public List<Product> search(String name, Double maxPrice, Boolean onlyInStock) {\n\n        Specification<Product> spec = Specification\n            .where(ProductSpec.nameContains(name))          // null → 跳過\n            .and(ProductSpec.priceLessThan(maxPrice))       // null → 跳過\n            .and(Boolean.TRUE.equals(onlyInStock)           // false/null → 跳過\n                ? ProductSpec.inStock() : null);\n\n        return productRepository.findAll(spec);\n    }\n}'
              }
            },
            {
              title: '步驟四：Controller 接收查詢參數',
              type: 'code',
              paragraphs: [
                'Controller 只負責把 HTTP 查詢字串轉成 Java 型別，業務邏輯與查詢組合全部留在 Service 與 Spec 層。三個參數都是 optional（不帶就是 null），對應到 Service 中的「不套用此條件」。'
              ],
              code: {
                language: 'java',
                title: 'ProductController.java — 搜尋端點',
                content: '@RestController\n@RequestMapping("/api/products")\npublic class ProductController {\n\n    private final ProductService productService;\n\n    public ProductController(ProductService productService) {\n        this.productService = productService;\n    }\n\n    // GET /api/products/search?name=手機&maxPrice=15000&inStock=true\n    @GetMapping("/search")\n    public List<Product> search(\n            @RequestParam(required = false) String name,\n            @RequestParam(required = false) Double maxPrice,\n            @RequestParam(required = false) Boolean inStock) {\n\n        return productService.search(name, maxPrice, inStock);\n    }\n}'
              }
            },
            {
              title: 'Specification 產生的 SQL 實際長什麼樣',
              type: 'code',
              paragraphs: [
                '以下是三種不同傳參組合，對應 Specification 實際產生的 SQL 片段，方便你驗證行為是否符合預期。'
              ],
              code: {
                language: 'sql',
                title: '動態 WHERE 子句對照',
                content: '-- 呼叫：search("手機", 15000.0, true)\nSELECT * FROM products\nWHERE LOWER(name) LIKE \'%手機%\'\n  AND price <= 15000\n  AND stock > 0;\n\n-- 呼叫：search("手機", null, null)  → 只帶 name\nSELECT * FROM products\nWHERE LOWER(name) LIKE \'%手機%\';\n\n-- 呼叫：search(null, null, null)  → 全部不帶，等同 findAll()\nSELECT * FROM products;'
              }
            },
            {
              title: 'Specification 與 Query Method 的選用時機',
              type: 'text',
              bullets: [
                '**Query Method**：條件固定、不超過 2 個欄位組合 → 命名直觀、無額外程式碼',
                '**Specification**：有 1 個以上的可選條件、條件組合數 > 3 → 維護性與可讀性大幅提升',
                '**`@Query` JPQL**：需要 GROUP BY、子查詢、特殊函數等 Specification 難以表達的語意',
                '兩者可以共存於同一個 Repository，依查詢複雜度選用不同方式'
              ],
              callout: {
                type: 'info',
                title: '何時從 Query Method 遷移到 Specification',
                body: '當你發現 Service 出現 3 個以上的 if-else 分支去呼叫不同查詢方法，或同一個查詢需要「有帶參數就過濾、沒帶就全顯示」的語意時，就是引入 Specification 的時機。不需要一開始就用，等複雜度出現再重構即可。'
              }
            },
            {
              title: 'ddl-auto 設定與開發階段策略',
              type: 'text',
              paragraphs: [
                '`spring.jpa.hibernate.ddl-auto` 控制 Spring Boot 啟動時 Hibernate 是否自動同步資料庫 Schema。在正式課程專案（已接 Flyway）中設定為 `validate`，但理解各選項的用途對開發流程非常重要。'
              ],
              bullets: [
                '`create` — 每次啟動都「刪除舊資料表、重新建立」，資料全部清空，只適合一次性初始測試',
                '`create-drop` — 啟動時建立、關閉時刪除，適合跑完即棄的整合測試',
                '`update` — 啟動時比對 Entity 與現有 Schema，只做「新增」操作（加欄位、加資料表），**不會刪除或重新命名已有欄位**',
                '`validate` — 只驗證 Entity 與資料庫 Schema 是否一致，不做任何修改；不一致就報錯啟動失敗',
                '`none` — 完全不處理 Schema，開發者自行管理資料庫結構'
              ],
              callout: {
                type: 'info',
                title: '開發初期：可短暫使用 update',
                body: '在本機快速驗證 Entity 設計時，暫時把 `ddl-auto` 設為 `update` 可以省去撰寫 Flyway 腳本的成本，讓你先把 API 跑通、確認欄位設計合理，再補上遷移腳本。但一旦開始推進測試機或正式機，就應立即改回 `validate` 並改用 Flyway 管理所有 Schema 變更。'
              }
            },
            {
              title: '為什麼正式環境不能靠 ddl-auto',
              type: 'text',
              paragraphs: [
                '`update` 模式看起來方便，但在部署到測試機或正式機後有幾個關鍵風險，這也是為什麼本課程選擇 Flyway 的原因。'
              ],
              bullets: [
                '**只增不減**：`update` 只會新增欄位與資料表，無法刪除廢棄欄位或安全重新命名欄位，隨時間累積出 Schema 髒污',
                '**無法重現**：同一支程式在不同環境（本機、測試機、正式機）可能產生不同的 Schema 狀態，難以追蹤差異',
                '**無版本紀錄**：誰在什麼時間做了哪個 Schema 變更？`ddl-auto` 沒有任何記錄，發生問題時難以回溯',
                '**無法回滾**：Flyway 支援 Undo 腳本（企業版）或手動反向腳本，`ddl-auto` 沒有任何回滾機制',
                '**並發部署風險**：多個 Pod 同時啟動時，`update` 可能觸發競爭條件，Flyway 有分散式鎖保護避免此問題'
              ],
              code: {
                language: 'yaml',
                title: 'application.yml — 不同階段的推薦設定',
                content: 'spring:\n  jpa:\n    hibernate:\n      # ✅ 開發初期（本機，尚未決定最終 Schema）\n      ddl-auto: update\n\n      # ✅ 已接 Flyway（測試機、正式機，Schema 由遷移腳本管理）\n      ddl-auto: validate\n\n      # ✅ 想讓 JPA 完全不插手 Schema（完全手動或外部工具管理）\n      ddl-auto: none'
              }
            },
            {
              title: 'Flyway vs ddl-auto 職責對照',
              type: 'code',
              paragraphs: [
                'Flyway 與 `ddl-auto` 都能管理 Schema，但定位完全不同。本課程選擇讓兩者各司其職：Flyway 負責所有 Schema 演進，JPA 只負責驗證 Entity 與資料庫是否吻合。'
              ],
              code: {
                language: 'text',
                title: 'Schema 管理職責分工',
                content: '┌─────────────────────────────────────────────────────┐\n│  開發初期（本機驗證）                                 │\n│  ddl-auto: update  → 讓 JPA 自動同步，快速迭代       │\n│  優點：免寫 SQL，欄位改動立即生效                    │\n│  缺點：無版本記錄、無法在其他環境重現相同狀態         │\n├─────────────────────────────────────────────────────┤\n│  測試機 / 正式機（所有共享環境）                     │\n│  ddl-auto: validate + Flyway 管理                    │\n│  優點：每次 Schema 變更都有腳本可追蹤、重現與回滾    │\n│  優點：CI/CD 自動執行遷移，跨環境 Schema 狀態一致    │\n│  優點：Flyway 分散式鎖防止並發啟動的 Schema 競爭    │\n└─────────────────────────────────────────────────────┘\n\n建議時機：Entity 設計穩定後，立即把 ddl-auto: update\n  改為 validate，並補齊對應的 Flyway V2__xxx.sql 腳本'
              }
            },
            {
              title: '用 AI Agent 為既有專案加入 JPA',
              type: 'code',
              paragraphs: [
                '1-2 章節已建立一個用 Java List 存放資料的 Spring MVC 專案。本章的目標是讓 AI Agent 幫你把資料來源從記憶體 List 換成真正的 PostgreSQL 資料庫，Controller 完全不需要修改，只改 Product 類別與 ProductService。',
                '步驟四的訂單先做成「一筆訂單只有一個商品」（V2）。<strong>1-9 章後半</strong>加入購物車與結帳時，會新增 Flyway <strong>V3</strong> 把它改成「訂單＋明細」，Order Entity 也會跟著改——那時會示範「已上線的資料表怎麼安全改結構」。所以 V2 套用之後就不要再修改它的內容（改了 Flyway 的 checksum 會不符），有變更一律新增版本。'
              ],
              bullets: [
                'pom.xml 加入 JPA 與 PostgreSQL 依賴',
                'Product.java 加上 `@Entity`、`@Table`、`@Id` 等 JPA 註解',
                'ProductService 的 List 換成 ProductRepository，讓資料寫入資料庫'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 為 Spring MVC 專案加入 JPA',
                content: '【步驟一：加入依賴】\n請在 1-3 的專案 pom.xml 加入 spring-boot-starter-data-jpa 與 lombok（若尚未加入），\n並在 application.yml 設定 spring.jpa.hibernate.ddl-auto: validate（Schema 由 Flyway 管理，JPA 只驗證）。\n\n【步驟二：升級 Product 為 Entity】\n請把 Product.java 改成 JPA Entity，對應 1-3 建好的 products 資料表：\n- 使用 @Entity、@Table(name = "products")、@Id、@GeneratedValue(strategy = GenerationType.IDENTITY)、@Column\n- 建立 BaseAuditEntity（@MappedSuperclass + JPA Auditing），讓 Product 繼承 created_at / updated_at\n- 用 Lombok 的 @Getter、@Setter、@NoArgsConstructor 取代手寫 getter/setter\n\n【步驟三：Repository 與 Service 改用資料庫】\n1. 建立 ProductRepository，繼承 JpaRepository<Product, Long>，加上 findByNameContainingIgnoreCase(String keyword) 供關鍵字搜尋\n2. ProductService 改注入 ProductRepository，getAll、findById、create 改用資料庫，寫入方法加上 @Transactional\n3. 刪掉 1-2 寫在記憶體裡的示範商品（改由 Flyway 的資料提供）\n\n【步驟四：加入訂單（之後 AI 客服查訂單會用到）】\n1. 建立 V2__create_orders.sql：orders 資料表，欄位 id、order_no（訂單編號）、username（下單帳號）、product_id（外鍵到 products）、quantity、total_price、status（PENDING / SHIPPED / DELIVERED）、created_at\n2. 插入 3 筆 username 為 user 的示範訂單（狀態各不相同），再插入 1 筆 username 為 admin 的訂單（用來驗證「只能查到自己的訂單」）；帳號 user、admin 在 1-9 章建立\n3. 建立 Order Entity（@ManyToOne 關聯 Product；orders 沒有 updated_at，Order 不要繼承 BaseAuditEntity，否則 validate 會失敗）、OrderRepository（findByUsernameOrderByCreatedAtDesc）與 OrderService（getOrdersByUsername）\n\n完成後請執行 mvn spring-boot:run，確認 Flyway 套用 V2、應用程式能啟動，GET /api/products 回傳資料庫中的 6 筆商品。'
              }
            },
            {
              title: '這一章為什麼重要',
              type: 'text',
              paragraphs: [
                'Day 2 的工具呼叫其實要建立在穩定的 Service / Repository 流程上。也就是說，AI 不會直接查資料庫，而是會重用你在這一章建立好的後端查詢能力。',
                '因此 JPA 不是孤立的資料庫章節，而是整個 AI 應用可驗證性的基礎。'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ Order 不要繼承 BaseAuditEntity</strong>：orders 沒有 <code>updated_at</code>，繼承之後 <code>ddl-auto: validate</code> 會因缺欄位而啟動失敗（第一輪演練發現的陷阱）。看到 missing column 類的錯誤，先檢查繼承關係，再決定補 Flyway 還是改 Entity。',
                '<strong>⚠ 不准把 validate 改成 update</strong>：validate 失敗時，AI 常見的修法是把 <code>ddl-auto</code> 改成 <code>update</code>，讓它先跑起來。Schema 由 Flyway 管，請它修 Entity 或新增遷移腳本，不要動這個設定。',
                '<strong>測試資料要有反例</strong>：V2 刻意放一筆 admin 的訂單，因為資料庫只有 user 的訂單時，「只查得到自己的訂單」永遠成立，查錯了也看不出來（第一輪演練發現的問題）。請 AI 準備資料時，也放進「不該被查到」的資料。',
                '<strong>四個步驟分開送</strong>：一次貼完四步，出錯時很難判斷是哪一步造成的。每送一步就請 AI 跑 <code>mvn spring-boot:run</code> 確認能啟動，commit 之後再送下一步。',
                '<strong>⚠ 檢查 Lombok 與交易標註的位置</strong>：Entity 照本章用 <code>@Getter</code>／<code>@Setter</code>，AI 常順手寫成 <code>@Data</code>，equals 與 toString 會牽動關聯物件；<code>@Transactional</code> 要在 Service，不要出現在 Controller。'
              ]
            }
          ]
        },
        {
          id: 'd1-u5',
          chapter: '1-5',
          title: 'API 文件（Swagger / SpringDoc OpenAPI）',
          summary: '透過 springdoc-openapi 自動產生互動式 API 文件，讓前端與測試人員不需要看程式碼就能理解與呼叫 API。',
          source: 'docs/Day1-5-API-Docs.md',
          heroImage: 'assets/teaching-site/05-ch05-api-docs.png',
          diagramImage: 'assets/diagrams/d1-u5.png',
          diagramCaption: 'SpringDoc OpenAPI 自動掃描 Controller 端點並渲染 Swagger UI 的運作架構',
          goals: [
            '理解 OpenAPI 規範與 Swagger UI 的關係',
            '加入 springdoc-openapi 並確認 Swagger UI 可正常存取',
            '用標註豐富 Controller 的 API 說明',
            '設定全域 API 資訊（標題、版本、聯絡方式）'
          ],
          tasks: [
            { id: 'd1-u5-t1', text: '在 pom.xml 加入 springdoc-openapi 依賴並啟動應用，確認可存取 /swagger-ui.html' },
            { id: 'd1-u5-t2', text: '在 ProductController 加上 @Operation 與 @ApiResponse 標註' },
            { id: 'd1-u5-t3', text: '建立 OpenApiConfig 設定全域 API 資訊' }
          ],
          sections: [
            {
              title: '為什麼需要 API 文件',
              type: 'text',
              paragraphs: [
                '後端 API 一旦超過 5 個端點，沒有文件的開發協作就開始痛苦：前端不知道要傳什麼格式、測試人員要翻程式碼才知道有哪些欄位、新人要花大量時間猜 request body 結構。',
                'OpenAPI 規範（前身是 Swagger）定義了一套描述 REST API 的標準格式，springdoc-openapi 能自動從 Spring MVC 的 Controller 掃描產生 OpenAPI 文件，並提供互動式 UI 讓人直接從瀏覽器呼叫 API。'
              ],
              bullets: [
                '自動掃描：不需要手寫文件，從 Controller 標註推導',
                'Swagger UI：瀏覽器直接測試每個端點，看到 request / response 格式',
                '機器可讀格式：前端工具可從 `/v3/api-docs` 取得 JSON 格式規格，自動產生 API client'
              ]
            },
            {
              title: '加入 springdoc-openapi 依賴',
              type: 'code',
              paragraphs: [
                '在 `pom.xml` 加入以下依賴，啟動應用後 Swagger UI 與 OpenAPI JSON 就自動可用，不需要任何額外設定。',
                '**版本對應規則**：springdoc-openapi 與 Spring Boot 的主版本號一一對應 —— Spring Boot 2.x 用 v1.x、Spring Boot 3.x 用 v2.x、Spring Boot 4.x 用 v3.x。本課程使用 Spring Boot 4.0.0，因此選用 `3.0.3`。'
              ],
              code: {
                language: 'xml',
                title: 'pom.xml — 加入 springdoc-openapi',
                content: '<dependency>\n    <groupId>org.springdoc</groupId>\n    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>\n    <version>3.0.3</version>  <!-- Spring Boot 4.x 對應 v3.x；Spring Boot 3.x 請用 v2.x -->\n</dependency>'
              }
            },
            {
              title: '啟動後的預設存取路徑',
              type: 'text',
              bullets: [
                '<a href="http://localhost:8080/swagger-ui.html" target="_blank"><code>http://localhost:8080/swagger-ui.html</code></a> → 互動式 Swagger UI（可直接測試）',
                '<a href="http://localhost:8080/v3/api-docs" target="_blank"><code>http://localhost:8080/v3/api-docs</code></a> → OpenAPI JSON 規格（機器讀取）',
                '`http://localhost:8080/v3/api-docs.yaml` → YAML 格式規格'
              ],
              callout: {
                type: 'info',
                title: '正式環境建議關閉 Swagger UI',
                body: '在 application.yml 加上 springdoc.api-docs.enabled: false 與 springdoc.swagger-ui.enabled: false，或透過 Spring Profile 只在 dev 環境啟用，避免正式環境暴露 API 結構。'
              }
            },
            {
              title: '用標註豐富 API 說明',
              type: 'code',
              paragraphs: [
                '不加標註時 Swagger UI 只能從方法簽章推導基本資訊。用 `@Operation`、`@Parameter`、`@ApiResponse` 補充說明後，文件立即更完整，前端閱讀效率大幅提升。'
              ],
              code: {
                language: 'java',
                title: 'ProductController.java — 加入 OpenAPI 標註',
                content: '@RestController\n@RequestMapping("/api/products")\n@Tag(name = "商品管理", description = "商品的新增、查詢、修改與刪除")\npublic class ProductController {\n\n    @Operation(\n        summary = "查詢所有商品",\n        description = "回傳完整商品清單，可加 keyword 參數進行模糊搜尋"\n    )\n    @GetMapping\n    public ResponseEntity<List<Product>> getProducts(\n            @Parameter(description = "商品名稱關鍵字（選填）")\n            @RequestParam(required = false) String keyword) {\n        // ...\n    }\n\n    @Operation(summary = "新增商品")\n    @ApiResponses({\n        @ApiResponse(responseCode = "201", description = "新增成功"),\n        @ApiResponse(responseCode = "400", description = "輸入資料驗證失敗")\n    })\n    @PostMapping\n    public ResponseEntity<Product> createProduct(\n            @Valid @RequestBody Product product) {\n        // ...\n    }\n}'
              }
            },
            {
              title: '設定全域 API 資訊',
              type: 'code',
              paragraphs: [
                '建立一個 `@Configuration` 類別，設定整份文件的標題、版本與聯絡資訊，讓 Swagger UI 頁首顯示正確的專案說明。'
              ],
              code: {
                language: 'java',
                title: 'OpenApiConfig.java',
                content: '@Configuration\npublic class OpenApiConfig {\n\n    @Bean\n    public OpenAPI openAPI() {\n        return new OpenAPI()\n            .info(new Info()\n                .title("智慧商城客服系統 API")\n                .version("1.0.0")\n                .description("Spring Boot 4 + Spring AI 2.0 教學專案 API 文件")\n                .contact(new Contact()\n                    .name("開發團隊")\n                    .email("dev@example.com")));\n    }\n}'
              }
            },
            {
              title: 'AI 提示詞練習',
              type: 'text',
              paragraphs: [
                '試著用以下提示詞讓 AI 助手幫你完善 API 文件標註：'
              ],
              bullets: [
                '「請幫我在 ProductController 的所有端點加上 @Operation 說明，並補充每個可能的 HTTP 狀態碼對應的 @ApiResponse 標註。」',
                '「如何讓 Swagger UI 只在 dev profile 啟用，在 prod profile 自動關閉？請修改 application.yml 與 OpenApiConfig。」'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ springdoc 版本要對應 Boot 4</strong>：Boot 4 要用 springdoc-openapi 3.x，AI 憑印象常給 2.x，到啟動或開 Swagger UI 時才出錯。請它依本章的版本對應規則選版本，並實際開啟 <code>/swagger-ui.html</code> 確認。',
                '<strong>⚠ 標註會讓程式依賴 springdoc</strong>：一加上 <code>@Tag</code>、<code>@Operation</code>，沒有 springdoc 依賴就無法編譯。課前驗證時，沒做本章的專案照 1-9 的 AuthController 範例寫，就卡在這裡；沒做 1-5 的人要告訴 AI「沒有 springdoc，不要加這些標註」。',
                '<strong>Swagger 與 Security 的關係先講清楚</strong>：1-9 加入 JWT 後，Swagger 只需要放行頁面路徑、宣告 Bearer 驗證方案。AI 常建議加 <code>httpBasic</code> 或第二條 SecurityFilterChain，這和本課的無狀態 JWT 不符，不要接受。',
                '<strong>文件要和實際行為一致</strong>：AI 補 <code>@ApiResponse</code> 時，可能列出 API 根本不會回的狀態碼。請它對照 Controller 的實際回傳，再用 Swagger UI 的 Try it out 把每個端點打一次。'
              ]
            }
          ]
        },
        {
          id: 'd1-u6',
          chapter: '1-6',
          title: '全域例外處理（Global Exception Handler）',
          summary: '用 @RestControllerAdvice 統一攔截應用程式例外，回傳格式一致的錯誤回應，讓前端不再猜測錯誤格式。',
          source: 'docs/Day1-6-GlobalException.md',
          heroImage: 'assets/teaching-site/06-ch06-global-exception.png',
          diagramImage: 'assets/diagrams/d1-u6.png',
          diagramCaption: 'Spring MVC 機制攔截異常並轉換為標準錯誤回應的流向圖解',
          goals: [
            '理解沒有全域例外處理的系統有什麼問題',
            '建立統一的 ErrorResponse 回應格式',
            '用 @RestControllerAdvice 集中處理各類例外',
            '自訂業務例外類別，讓錯誤語意更清楚'
          ],
          tasks: [
            { id: 'd1-u6-t1', text: '建立 ErrorResponse record 作為統一錯誤格式' },
            { id: 'd1-u6-t2', text: '建立 GlobalExceptionHandler，處理 404 與驗證失敗例外' },
            { id: 'd1-u6-t3', text: '建立 ResourceNotFoundException，在 ProductService 找不到商品時拋出' }
          ],
          sections: [
            {
              title: '沒有全域例外處理的問題',
              type: 'text',
              paragraphs: [
                '沒有統一例外處理時，Spring Boot 預設的錯誤回應格式混雜了 Tomcat 訊息與 Java 堆疊資訊，前端無法依賴固定結構解析錯誤。更糟的是，不同端點可能回傳完全不同格式的錯誤，增加前端的防禦成本。',
                '`@RestControllerAdvice` 讓你在一個地方定義所有例外的處理方式：每種例外對應一個方法，統一回傳相同結構的 JSON，Controller 本身完全不需要 try-catch。'
              ],
              bullets: [
                '例外處理集中在一個類別，不散落各個 Controller',
                '回傳格式統一，前端只需解析一種結構',
                'Controller 保持乾淨，只做「請求分派」這一件事'
              ]
            },
            {
              title: '建立統一的 ErrorResponse 格式',
              type: 'code',
              paragraphs: [
                '先定義所有錯誤回應共用的資料結構。使用 Java Record 讓程式碼簡潔，Jackson 自動序列化為 JSON。'
              ],
              code: {
                language: 'java',
                title: 'ErrorResponse.java',
                content: '/**\n * 統一的 API 錯誤回應格式\n * 所有例外處理方法都回傳此格式，讓前端只需解析一種結構\n */\npublic record ErrorResponse(\n    int status,          // HTTP 狀態碼\n    String error,        // 錯誤類型（如 "Not Found"）\n    String message,      // 人類可讀的錯誤說明\n    String path,         // 發生錯誤的 API 路徑\n    LocalDateTime timestamp  // 錯誤發生時間\n) {\n    /** 快速建立標準錯誤回應的工廠方法 */\n    public static ErrorResponse of(HttpStatus status, String message, String path) {\n        return new ErrorResponse(\n            status.value(),\n            status.getReasonPhrase(),\n            message,\n            path,\n            LocalDateTime.now()\n        );\n    }\n}'
              }
            },
            {
              title: '自訂業務例外類別',
              type: 'code',
              paragraphs: [
                '用語意明確的例外類別取代直接拋出 `RuntimeException`，讓 GlobalExceptionHandler 能精確攔截並對應正確的 HTTP 狀態碼。'
              ],
              code: {
                language: 'java',
                title: 'ResourceNotFoundException.java',
                content: '/**\n * 查詢資源不存在時拋出，對應 HTTP 404\n */\npublic class ResourceNotFoundException extends RuntimeException {\n\n    public ResourceNotFoundException(String resourceName, Long id) {\n        super(resourceName + " 不存在：id = " + id);\n    }\n}\n\n// Service 使用方式\n@Transactional(readOnly = true)\npublic Product getProductById(Long id) {\n    return productRepository.findById(id)\n        .orElseThrow(() -> new ResourceNotFoundException("商品", id));\n}'
              }
            },
            {
              title: '建立 GlobalExceptionHandler',
              type: 'code',
              paragraphs: [
                '`@RestControllerAdvice` 讓這個類別的 `@ExceptionHandler` 方法攔截整個應用程式的例外。每個方法對應一種例外類型，回傳統一的 `ErrorResponse`。'
              ],
              code: {
                language: 'java',
                title: 'GlobalExceptionHandler.java',
                content: '@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    /** 查詢資源不存在 → 404 */\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<ErrorResponse> handleNotFound(\n            ResourceNotFoundException ex, HttpServletRequest req) {\n        return ResponseEntity\n            .status(HttpStatus.NOT_FOUND)\n            .body(ErrorResponse.of(HttpStatus.NOT_FOUND, ex.getMessage(), req.getRequestURI()));\n    }\n\n    /** Bean Validation 驗證失敗 → 400，收集所有欄位錯誤 */\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<Map<String, Object>> handleValidation(\n            MethodArgumentNotValidException ex, HttpServletRequest req) {\n\n        List<String> errors = ex.getBindingResult().getFieldErrors().stream()\n            .map(f -> f.getField() + "：" + f.getDefaultMessage())\n            .toList();\n\n        Map<String, Object> body = Map.of(\n            "status", 400,\n            "error", "Bad Request",\n            "message", "輸入資料驗證失敗",\n            "errors", errors,\n            "path", req.getRequestURI()\n        );\n        return ResponseEntity.badRequest().body(body);\n    }\n\n    /** 其他未預期例外 → 500，避免洩漏堆疊資訊給前端 */\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<ErrorResponse> handleGeneral(\n            Exception ex, HttpServletRequest req) {\n        return ResponseEntity\n            .status(HttpStatus.INTERNAL_SERVER_ERROR)\n            .body(ErrorResponse.of(\n                HttpStatus.INTERNAL_SERVER_ERROR,\n                "伺服器發生錯誤，請稍後再試",\n                req.getRequestURI()));\n    }\n}'
              }
            },
            {
              title: '例外處理回應對照',
              type: 'code',
              paragraphs: [
                '以下是三種例外情境對應的實際 JSON 回應，前端可依 `status` 欄位決定顯示方式。'
              ],
              code: {
                language: 'json',
                title: '各類例外的回應格式',
                content: '// GET /api/products/999 → 商品不存在\n{\n  "status": 404,\n  "error": "Not Found",\n  "message": "商品 不存在：id = 999",\n  "path": "/api/products/999",\n  "timestamp": "2026-06-08T10:30:00"\n}\n\n// POST /api/products → 驗證失敗\n{\n  "status": 400,\n  "error": "Bad Request",\n  "message": "輸入資料驗證失敗",\n  "errors": ["name：商品名稱不可為空", "price：售價必須大於 0"],\n  "path": "/api/products"\n}\n\n// 任何未預期錯誤\n{\n  "status": 500,\n  "error": "Internal Server Error",\n  "message": "伺服器發生錯誤，請稍後再試",\n  "path": "/api/products"\n}'
              }
            },
            {
              title: 'ProblemDetail：Spring Boot 3 內建標準格式',
              type: 'text',
              paragraphs: [
                'Spring Boot 3+ 採用 RFC 9457 的 `ProblemDetail` 作為標準錯誤格式，Spring Boot 4 延續支援並推薦使用。不需要自訂 `ErrorResponse`，可直接在 `GlobalExceptionHandler` 回傳 `ProblemDetail` 物件，格式已符合業界標準。'
              ],
              bullets: [
                '`ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, "商品不存在")` → 直接建立標準格式物件',
                '可透過 `problemDetail.setProperty("extra", value)` 加入自訂欄位',
                '在 `application.yml` 加上 `spring.mvc.problemdetails.enabled: true` 可讓 Spring 預設用此格式回傳驗證錯誤'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ 不要攔截 Exception.class</strong>：AI 為了全部都處理到，常加一個攔截所有例外的方法，結果 1-9 方法層級授權丟出的 <code>AccessDeniedException</code> 被吃掉，403 變成 500。GlobalExceptionHandler 只處理自訂的業務例外。',
                '<strong>測試要斷言錯誤格式，不只狀態碼</strong>：1-9 購物車紅燈時，「商品不存在」的狀態碼剛好也是 404（路由還不存在）。只有斷言 body 的 <code>status</code>、<code>message</code>，才分得出是業務 404 還是找不到路由（課前驗證的紅燈也是這樣）。',
                '<strong>錯誤格式只選一種</strong>：本章介紹了自訂 ErrorResponse 與 ProblemDetail，請 AI 明確只用一種（1-9 沿用自訂格式再加 <code>details</code>），否則不同端點回不同結構，前端要寫兩套解析。',
                '<strong>⚠ 錯誤回應不要洩漏內部資訊</strong>：AI 除錯時可能打開 <code>server.error.include-stacktrace</code>，或把例外訊息原樣回傳。請它確認回應 JSON 裡沒有堆疊、Java 類別名稱或 SQL，細節只寫進日誌。',
                '<strong>message 要寫給使用者看</strong>：2-5 章前端會直接顯示後端的 message。請 AI 用中文寫出可以直接給使用者看的訊息（例如「庫存只有 30 件，購物車已有 2 件」），不要寫成 <code>Product not found: 99</code>。'
              ]
            }
          ]
        },
        {
          id: 'd1-u7',
          chapter: '1-7',
          title: '結構化 Log 與動態調整（精簡／課後自學）',
          summary: '善用 @Slf4j 建立有語意的結構化日誌，透過 application.yml 設定 Log層級，再用 Spring Actuator 在不重啟應用的情況下動態調整。',
          source: 'docs/Day1-7-Logging.md',
          heroImage: 'assets/teaching-site/07-ch07-logging.png',
          diagramImage: 'assets/diagrams/d1-u7.png',
          diagramCaption: 'Slf4j 與 Logback 攔截應用程式各層日誌並輸出至結構化目標的流程',
          goals: [
            '理解 Spring Boot 預設 Log 機制與層級',
            '用 @Slf4j 寫出結構化、有語意的 Log',
            '透過 application.yml 設定各套件的 Log 層級',
            '用 Spring Actuator 動態調整 Log 層級，無需重啟應用'
          ],
          tasks: [
            { id: 'd1-u7-t1', text: '在 ProductService 加上 @Slf4j，在新增、刪除操作加上適當的 INFO / WARN Log' },
            { id: 'd1-u7-t2', text: '加入 spring-boot-starter-actuator，驗證可透過 PATCH /actuator/loggers 動態調整層級' }
          ],
          sections: [
            {
              title: '本章上課範圍（精簡講解）',
              type: 'text',
              paragraphs: [
                '為了讓出 Day 0 開場導覽的時間，本章課堂上只講核心觀念與示範（約 15 分鐘），其餘段落與任務列為課後自學。'
              ],
              bullets: [
                '課堂重點：Log 等級的用途、用 `@Slf4j` 記錄關鍵事件、在 application.yml 調整套件 Log 等級',
                '課後自學：本章其餘段落與「本章學習進度」任務，遇到問題可直接把段落貼給 AI Agent 請它帶你做一次。'
              ]
            },
            {
              title: 'Spring Boot 預設 Log 機制',
              type: 'text',
              paragraphs: [
                'Spring Boot 預設使用 Logback 作為 Log 框架，並透過 SLF4J 提供統一的 API 介面。不需要任何設定就能使用，只要依賴 `spring-boot-starter`（幾乎所有 Starter 都已包含）就自動啟用。',
                '預設 Log 格式包含時間戳記、層級、執行緒、類別名稱與訊息。開發時輸出到 console，可另外設定輸出到檔案。'
              ],
              bullets: [
                '`ERROR` → 系統發生嚴重錯誤，需要立即處理',
                '`WARN` → 可能有問題，但系統還能運作',
                '`INFO` → 正常業務流程的關鍵節點（預設顯示層級）',
                '`DEBUG` → 詳細的執行資訊，開發除錯使用',
                '`TRACE` → 最詳細層級，通常只在框架內部使用'
              ]
            },
            {
              title: '@Slf4j 與結構化 Log 寫法',
              type: 'code',
              paragraphs: [
                'Lombok 的 `@Slf4j` 自動注入 `log` 物件，省去手動宣告 Logger 的樣板程式碼。Log 訊息用 `{}` 佔位符取代字串拼接，避免不必要的字串建立開銷，也讓訊息格式更清楚。'
              ],
              code: {
                language: 'java',
                title: 'ProductService.java — @Slf4j 使用範例',
                content: '@Slf4j   // Lombok：自動注入 private static final Logger log = ...\n@Service\npublic class ProductService {\n\n    public Product saveProduct(Product product) {\n        log.info("新增商品：name={}, price={}", product.getName(), product.getPrice());\n\n        Product saved = productRepository.save(product);\n\n        log.info("商品新增成功：id={}", saved.getId());\n        return saved;\n    }\n\n    public void deleteProduct(Long id) {\n        if (productRepository.existsById(id)) {\n            productRepository.deleteById(id);\n            log.info("商品刪除成功：id={}", id);\n        } else {\n            log.warn("嘗試刪除不存在的商品：id={}", id);\n            throw new ResourceNotFoundException("商品", id);\n        }\n    }\n\n    // ✅ 用 {} 佔位符（延遲計算，層級關閉時不建立字串）\n    log.debug("查詢條件：{}", filterRequest);\n\n    // ❌ 避免字串拼接（即使 DEBUG 關閉也會建立字串）\n    // log.debug("查詢條件：" + filterRequest);\n}'
              }
            },
            {
              title: 'application.yml 設定 Log 層級',
              type: 'code',
              paragraphs: [
                '透過 `application.yml` 控制各套件的 Log 層級，可以讓本專案輸出 DEBUG、同時讓 Hibernate 顯示實際執行的 SQL，方便開發期除錯。'
              ],
              code: {
                language: 'yaml',
                title: 'application.yml — Log 層級設定',
                content: 'logging:\n  level:\n    root: INFO                          # 全域預設層級\n    com.example.tutorial: DEBUG         # 本專案詳細輸出\n    org.hibernate.SQL: DEBUG            # 顯示 Hibernate 產生的 SQL\n    org.hibernate.orm.jdbc.bind: TRACE  # 顯示 SQL 綁定參數值'
              }
            },
            {
              title: '動態調整 Log 層級（Spring Actuator）',
              type: 'code',
              paragraphs: [
                '正式環境不能為了調 Log 就重啟應用。加入 `spring-boot-starter-actuator` 後，可以透過 HTTP API 在執行期動態修改特定套件的 Log 層級，調完問題再改回去。'
              ],
              bullets: [
                '先在 pom.xml 加入 `spring-boot-starter-actuator` 依賴',
                '在 application.yml 開放 loggers 端點：`management.endpoints.web.exposure.include: loggers,health`'
              ],
              code: {
                language: 'bash',
                title: '動態調整 Log 層級（PowerShell）',
                content: '# 查詢目前 com.example.tutorial 的 Log 層級\nInvoke-RestMethod -Uri "http://localhost:8080/actuator/loggers/com.example.tutorial"\n\n# 動態改為 DEBUG（無需重啟）\nInvoke-RestMethod `\n  -Method PATCH `\n  -Uri "http://localhost:8080/actuator/loggers/com.example.tutorial" `\n  -ContentType "application/json" `\n  -Body \'{"configuredLevel": "DEBUG"}\'\n\n# 問題排查完後改回 INFO\nInvoke-RestMethod `\n  -Method PATCH `\n  -Uri "http://localhost:8080/actuator/loggers/com.example.tutorial" `\n  -ContentType "application/json" `\n  -Body \'{"configuredLevel": "INFO"}\''
              }
            },
            {
              title: 'Log 最佳實踐',
              type: 'text',
              bullets: [
                '**INFO**：記錄業務關鍵節點（誰建立了什麼、誰觸發了什麼操作），足以在不看程式碼的情況下理解系統在做什麼',
                '**WARN**：可以自動恢復或降級的異常情境（如 retry、fallback），需要關注但不需要立即處理',
                '**ERROR**：需要人工介入的問題，搭配 `log.error("...", ex)` 記錄完整 stack trace',
                '**避免在 Log 記錄密碼、Token、信用卡號**：即使是 DEBUG 層級，log 檔可能被備份或轉發到第三方',
                '**用 `{}` 佔位符而非字串拼接**：`log.debug("id={}", id)` 在 DEBUG 層級關閉時不建立字串，效能更好'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>日誌是 AI 的驗證依據</strong>：後面章節靠固定前綴（例如 <code>[工具呼叫]</code>、<code>[業務例外]</code>）從日誌確認行為。請 AI 寫 log 時用固定、搜尋得到的格式，之後才能用「搜尋這個字串」來驗證。',
                '<strong>後端日誌寫進檔案</strong>：用 <code>mvn spring-boot:run 2&gt;&amp;1 | Tee-Object logs/backend.log</code> 啟動，AI 和 e2e 腳本才讀得到日誌。第二輪演練時課程沒規定日誌位置，不同的 AI 會選不同路徑，甚至略過檢查。',
                '<strong>⚠ 金鑰與 Token 不能進日誌</strong>：除錯時 AI 常印出整個請求標頭或設定值，<code>Authorization</code> 與 API 金鑰就寫進了 log 檔。請它只印遮罩後的值，完成後搜尋 log 確認沒有金鑰字串。',
                '<strong>DEBUG 用完要改回</strong>：為了看 SQL 打開 Hibernate 的 DEBUG 後，日誌量會淹沒真正的訊息。請 AI 只對要查的套件開，查完改回 INFO，或用 Actuator 動態調整，不必改設定檔。',
                '<strong>出錯時先叫它讀日誌</strong>：與其說「好像壞了」，不如說「讀 logs/backend.log 最後 200 行，找出第一個 ERROR 與原因」。AI 依實際錯誤修，比依猜測反覆試改有效得多。'
              ]
            }
          ]
        },
        {
          id: 'd1-u8',
          chapter: '1-8',
          title: 'AOP 橫切關注點（Spring 核心機制）（精簡／課後自學）',
          summary: 'AOP（面向切面程式設計）是 Spring 最重要的底層機制之一，@Transactional、@Valid、@RestControllerAdvice 等你已經用過的功能全部建立在 AOP 之上。本章說明概念，並整理第一天哪些功能背後動用了 AOP。',
          source: 'docs/Day1-8-AOP.md',
          heroImage: 'assets/teaching-site/08-ch08-aop.png',
          diagramImage: '',
          diagramCaption: '',
          goals: [
            '理解 AOP 解決的問題與核心詞彙',
            '知道 Spring AOP 用 Proxy 實現，並了解其限制',
            '能辨識哪些 Spring 功能背後使用了 AOP',
            '知道在什麼情況下才需要直接撰寫 AOP'
          ],
          tasks: [
            { id: 'd1-u8-t1', text: '閱讀 AOP 五大元素說明，能用自己的話描述 Aspect、Advice、Pointcut 的關係' },
            { id: 'd1-u8-t2', text: '對照第一天功能清單，說明至少 3 個用到 AOP 的地方與其對應的 Advice 類型' }
          ],
          sections: [
            {
              title: '本章上課範圍（精簡講解）',
              type: 'text',
              paragraphs: [
                '為了讓出 Day 0 開場導覽的時間，本章課堂上只講核心觀念與示範（約 15 分鐘），其餘段落與任務列為課後自學。'
              ],
              bullets: [
                '課堂重點：AOP 解決什麼問題、`@Aspect` + `@Around` 記錄方法執行時間的一個範例',
                '課後自學：本章其餘段落與「本章學習進度」任務，遇到問題可直接把段落貼給 AI Agent 請它帶你做一次。'
              ]
            },
            {
              title: 'AOP 解決了什麼問題',
              type: 'text',
              paragraphs: [
                '寫後端程式時，有一類邏輯天生就不屬於任何單一業務模組，卻又需要出現在幾乎每個地方——交易控制、效能計時、權限驗證、Log 記錄。如果把這些邏輯都寫在每個 Service 方法裡，程式碼會充滿重複，而且修改一次規則要動到幾十個地方。',
                'AOP（Aspect-Oriented Programming，面向切面程式設計）的核心想法是：把這類「橫切關注點（Cross-cutting Concern）」從業務邏輯中抽離出來，統一定義在一個地方，再宣告「在哪些方法的哪個時間點套用」。業務程式碼保持乾淨，橫切邏輯只寫一次。'
              ],
              bullets: [
                '**交易管理**：每個寫入操作都需要 begin / commit / rollback，不該散落各 Service',
                '**Log 記錄**：記錄方法進入、結束、耗時，不該每個方法都手寫',
                '**輸入驗證**：呼叫 Service 前驗證參數，不該在每個方法頭部重複 if-else',
                '**權限檢查**：確認使用者有沒有權限呼叫這個方法，屬於安全層而非業務層'
              ]
            },
            {
              title: 'Spring AOP 五大核心詞彙',
              type: 'text',
              paragraphs: [
                '理解 AOP 只需要掌握五個詞彙，其餘的都是這五個概念的組合。'
              ],
              bullets: [
                '**Join Point（連接點）**：程式執行中可以被攔截的時間點，Spring AOP 的 Join Point 就是「方法被呼叫的瞬間」',
                '**Pointcut（切入點）**：用來篩選「哪些 Join Point 要套用 Advice」的規則，通常用 execution 表達式描述，例如「所有 Service 套件下的 public 方法」',
                '**Advice（增強/通知）**：在 Join Point 要執行的動作，分成 Before（方法前）、After（方法後）、Around（包覆方法前後）、AfterReturning（成功回傳後）、AfterThrowing（拋出例外後）五種',
                '**Aspect（切面）**：把 Pointcut 與 Advice 組合在一起的模組，就像「交易管理切面」= 所有 Service 方法（Pointcut）+ 自動 commit/rollback（Advice）',
                '**Weaving（織入）**：把 Aspect 應用到目標物件的過程；Spring AOP 在執行期（Runtime）透過 Proxy 物件完成織入，不修改原始類別的 bytecode'
              ]
            },
            {
              title: 'AOP 概念圖解',
              type: 'text',
              paragraphs: [
                '上半部展示橫切關注點如何切穿所有 Service，下半部展示 Spring 用 Proxy 在執行期攔截方法的原理。'
              ],
              image: 'assets/teaching-site/08-aop-diagram.svg',
              imageAlt: 'Spring AOP 橫切關注點與 Proxy 機制圖解',
              imageCaption: '上半部：相同橫切邏輯散落各 Service；下半部：Spring Proxy 在方法前後自動插入 Advice，Real Service 只剩業務邏輯'
            },
            {
              title: 'Spring AOP 的實現方式：Proxy',
              type: 'text',
              paragraphs: [
                'Spring AOP 不修改你的程式碼，而是在執行期替目標 Bean 建立一個「代理物件（Proxy）」。每次你呼叫 `@Autowired` 注入的 Bean 方法，實際上是呼叫 Proxy，Proxy 先執行 Advice（如開啟交易），再呼叫你的真實方法，最後再執行 Advice（如 commit）。',
                'Spring 根據情況選擇兩種 Proxy 實作：介面存在時用 JDK 動態 Proxy（速度快），無介面時用 CGLIB（繼承方式建立子類別 Proxy）。'
              ],
              callout: {
                type: 'warning',
                title: '最常踩的 AOP 陷阱：類別內自呼叫不被攔截',
                body: '在同一個類別內用 this.methodA() 呼叫另一個方法時，呼叫的是真實物件而非 Proxy，所以 AOP 完全不生效。最常見的症狀是：在 Service 內用 this 呼叫另一個 @Transactional 方法，結果交易沒有如預期運作。解法是把被呼叫的方法抽到另一個 Bean，或透過注入自身（self-injection）繞過。'
              }
            },
            {
              title: '直接撰寫 AOP 的寫法（效能監控範例）',
              type: 'code',
              paragraphs: [
                '雖然日常開發很少直接寫 AOP，但了解寫法有助於理解 Spring 內建功能的運作原理。以下是一個「記錄所有 Service 方法執行時間」的 Around Advice 範例，加入 `spring-boot-starter-aop` 依賴後即可使用。'
              ],
              code: {
                language: 'java',
                title: 'PerformanceAspect.java — 直接撰寫 AOP 範例',
                content: '// pom.xml 加入：spring-boot-starter-aop\n@Aspect          // 宣告這是一個切面\n@Component       // 讓 Spring 管理這個 Bean\n@Slf4j\npublic class PerformanceAspect {\n\n    /**\n     * Pointcut：com.example.tutorial.service 套件下所有類別的所有 public 方法\n     * execution(回傳型別 套件.類別.方法名稱(參數))\n     */\n    @Around("execution(* com.example.tutorial.service.*.*(..))")\n    public Object logExecutionTime(ProceedingJoinPoint pjp) throws Throwable {\n\n        long start = System.currentTimeMillis();\n\n        Object result = pjp.proceed();  // 呼叫真實方法（Around 的核心）\n\n        long elapsed = System.currentTimeMillis() - start;\n\n        log.info("[AOP] {}#{} 執行 {} ms",\n            pjp.getTarget().getClass().getSimpleName(),  // 類別名稱\n            pjp.getSignature().getName(),                // 方法名稱\n            elapsed);\n\n        return result;\n    }\n}'
              }
            },
            {
              title: '很少直接寫 AOP 的原因',
              type: 'text',
              paragraphs: [
                'Spring 已經把最常用的橫切需求都封裝成標註（Annotation）了。你用 `@Transactional` 就等於在 Service 方法外包了一個 Around Advice，用 `@Valid` 就等於在 Controller 方法前放了一個 Before Advice，根本不需要自己寫 `@Aspect`。',
                '**直接撰寫 AOP 的時機**通常只有兩種：一是需求無法用現有標註表達（例如對所有方法計時、統一寫入稽核 Log）；二是為公司內部框架提供可重用的橫切能力。一般業務開發幾乎不需要接觸 `@Aspect`。'
              ],
              bullets: [
                '`@Transactional` → Spring 幫你寫好的交易 AOP，不需要自己包 Around Advice',
                '`@Valid` / `@Validated` → Spring 幫你寫好的驗證 AOP，不需要自己在方法頭部驗參數',
                '`@RestControllerAdvice` → Spring MVC 幫你寫好的例外攔截，不需要自己包 AfterThrowing',
                '`@EnableJpaAuditing` → JPA 幫你寫好的 @PrePersist / @PreUpdate 攔截，不需要自己設 Listener',
                '`spring-boot-starter-actuator` → Spring 幫你寫好的管理端點，不需要自己做 Health Check AOP'
              ]
            },
            {
              title: 'Day 1 哪些功能背後用了 AOP',
              type: 'text',
              paragraphs: [
                '回顧第一天學過的所有功能，以下整理哪些地方在背後使用了 AOP 或相同設計概念，以及對應的 Spring 元件。'
              ],
              tagBullets: [
                {
                  chapter: '1-2',
                  tags: ['@Valid', '@Validated'],
                  aopType: 'proxy',
                  description: '@Valid on @RequestBody 由 HandlerMethodArgumentResolver 觸發（Before 概念）；@Validated 用在 Service 方法時改由 MethodValidationInterceptor（真正的 Spring AOP Around Advice）執行'
                },
                {
                  chapter: '1-4',
                  tags: ['@Transactional'],
                  aopType: 'proxy',
                  description: 'TransactionInterceptor（Around Advice）；方法進入前 begin、成功後 commit、例外時 rollback'
                },
                {
                  chapter: '1-4',
                  tags: ['JpaRepository', 'JpaSpecificationExecutor'],
                  aopType: 'proxy',
                  description: 'Spring Data 透過 CGLIB Proxy 自動實作介面，每次方法呼叫都經過 Repository Proxy（與 AOP 同源的 Proxy Pattern）'
                },
                {
                  chapter: '1-4',
                  tags: ['@Modifying'],
                  aopType: 'proxy',
                  description: 'Repository Proxy 攔截到帶有 @Modifying 的方法時，切換為 EntityManager.executeUpdate() 模式'
                },
                {
                  chapter: '1-4',
                  tags: ['@EntityListeners', 'AuditingEntityListener'],
                  aopType: 'concept',
                  description: 'JPA 生命週期回呼（@PrePersist、@PreUpdate），在 Entity 持久化前後插入邏輯，AOP 的 Before / After 概念在 JPA 層的實現'
                },
                {
                  chapter: '1-5',
                  tags: ['springdoc-openapi'],
                  aopType: 'concept',
                  description: '啟動時用 Reflection + HandlerMapping 掃描所有 Controller，非 AOP，但依賴 Spring Bean 容器的元資料'
                },
                {
                  chapter: '1-6',
                  tags: ['@RestControllerAdvice', '@ExceptionHandler'],
                  aopType: 'concept',
                  description: 'HandlerExceptionResolver 攔截所有 Controller 拋出的例外，AfterThrowing 概念在 Spring MVC 層的實現'
                }
              ],
              callout: {
                type: 'info',
                title: '計數：Day 1 共 7 個功能點使用了 AOP 或相同設計概念',
                body: '其中屬於真正 Spring AOP Proxy 的有 3 個：@Transactional（TransactionInterceptor）、@Validated on Service（MethodValidationInterceptor）、JpaRepository Proxy。其餘 4 個（JPA Lifecycle、SpringDoc、RestControllerAdvice、@Valid on RequestBody）採用相同的攔截設計概念，但在不同的框架層實現，不走 Spring AOP Proxy。'
              }
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ Boot 4 的 AOP starter 已改名</strong>：Spring Boot 4 改用 <code>spring-boot-starter-aspectj</code>，Maven Central 上沒有 4.0 版的 <code>spring-boot-starter-aop</code>。AI 照舊資料加 aop starter 會找不到依賴；加任何 starter 前，都請它確認名稱在 Boot 4 存在。',
                '<strong>⚠ 先找現成標註</strong>：要加計時或日誌時，AI 常直接寫一個切到所有方法的 <code>@Aspect</code>。先問有沒有現成標註（<code>@Transactional</code>、<code>@Valid</code>、Actuator）能做到；真的要寫，把 pointcut 限定在 service 套件。',
                '<strong>⚠ 檢查有沒有自呼叫</strong>：上面說的自呼叫陷阱，AI 寫 Service 時很容易踩。請它搜尋同一類別內用 <code>this.</code> 呼叫 <code>@Transactional</code> 方法的地方，並說明交易是否生效。',
                '<strong>方法層級授權也是 AOP</strong>：1-9 的 <code>@PreAuthorize</code> 靠 Proxy 攔截，只該放在 Controller；放在 Service 上，2-2 的 AI 工具在沒有登入資訊的執行緒呼叫 Service 時會全部失敗。',
                '<strong>要看到切面真的有執行</strong>：Aspect 沒生效時不會報錯。請 AI 呼叫一次對應的 API，從日誌找到切面印出的耗時紀錄，才算完成。'
              ]
            }
          ]
        },
        {
          id: 'd1-u9',
          chapter: '1-9',
          title: 'Spring Security 基礎認證與授權',
          summary: '引導學員透過 AI Agent 為後端 REST API 加上安全防護。引入 Spring Security 與 JWT（JSON Web Token）進行身分驗證與端點授權控管，並以角色區分「管理員」與「一般用戶」，保護敏感 API 資源，並讓 Swagger UI 能帶入 Bearer Token 測試受保護的 API。',
          source: 'docs/Day1-9-Security.md',
          heroImage: 'assets/teaching-site/09-ch09-spring-security.png',
          diagramImage: '',
          diagramCaption: '',
          goals: [
            '理解 Spring Security 的 Authentication（認證）與 Authorization（授權）核心概念',
            '學會以 AI 輔助建立 JWT 過濾器並在 Token 內寫入使用者角色（ADMIN/USER）',
            '實作角色基礎存取控制（RBAC），商品查詢 API 公開（訪客可瀏覽），商品寫入 API 僅限管理員',
            '讓 Swagger UI 支援 Bearer Token：先登入取得 JWT，再用右上角 Authorize 貼上 Token，測試受保護的 API',
            '下半場：請 AI 盤點並用 TDD 補完購物 API，以 Testcontainers 隔離測試資料庫，再做一次安全性盤點',
            '分辨 URL 規則與 @PreAuthorize 方法層級授權，能用 401／403／200 驗證管理員 API',
            '看懂「同帳號並行結帳」的併發陷阱：能重現、說出原因與兩種修法'
          ],
          tasks: [
            { id: 'd1-u9-t1', text: '透過 AI 提示詞引入 Spring Security 與官方 OAuth2 Resource Server 依賴' },
            { id: 'd1-u9-t2', text: '用 JwtEncoder 簽發包含角色資訊的 Token，交給 Resource Server 驗證，並完成 SecurityConfig 配置' },
            { id: 'd1-u9-t3', text: '實作 /api/auth/login 登入 API，並為商品 API 設定角色權限控制（ADMIN 限制新增/修改/刪除）' },
            { id: 'd1-u9-t4', text: '商品查詢開放訪客瀏覽，其餘 API 需要登入' },
            { id: 'd1-u9-t5', text: '建立 Testcontainers 測試基礎，mvn test 不再碰開發用的資料庫' },
            { id: 'd1-u9-t6', text: '請 AI 對照購物流程列出缺少的 API，確認後用 TDD 補完，紅燈階段確認失敗原因是「功能還沒做」' },
            { id: 'd1-u9-t7', text: '安全性盤點：帳號改從登入的 Token 取得，不能存取別人的購物車與訂單' },
            { id: 'd1-u9-t8', text: '管理員 API 用 URL 規則＋@PreAuthorize 雙重防護，驗證 401、403、200' },
            { id: 'd1-u9-t9', text: '（進階）重現同帳號並行結帳的併發陷阱，請 AI 先寫會失敗的併發測試，再選一種修法修到通過' }
          ],
          sections: [
            {
              title: '安全防護重點',
              type: 'text',
              paragraphs: [
                '在生產環境中，API 不能是完全公開的。本章將引入 Spring Security 與 JWT (JSON Web Token)，為我們的 REST API 建立安全防護底盤。',
                '我們將實作「無狀態 (Stateless)」認證：使用者透過 `/api/auth/login` 登入成功後取得 JWT，後續請求都必須在 Header 攜帶此 Token 進行驗證。此外，我們將簡單區分角色：「管理員 (ADMIN)」與「一般用戶 (USER)」，以實作更精細的權限控管。'
              ],
              bullets: [
                'Authentication 認證：確認「你是誰」（透過帳號密碼登入並簽發 JWT）',
                'Authorization 授權：確認「你能做什麼」（例如管理員能修改商品，普通用戶端只能查詢）',
                '無狀態認證：伺服器不儲存 Session，每次請求均由 JWT 驗證身分與角色'
              ],
              image: 'assets/teaching-site/09-spring-security-jwt-flow.svg',
              imageAlt: 'Spring Security JWT 認證與授權流程圖',
              imageCaption: '圖中展示了請求在經過 Security Filter Chain 時，官方 Resource Server 的 BearerTokenAuthenticationFilter（驗證 JWT）與 AuthorizationFilter（比對角色規則）如何攜手完成認證與角色授權。'
            },
            {
              title: '請 AI Agent 幫你安裝 Security 與 JWT 依賴',
              type: 'code',
              paragraphs: [
                '在 `pom.xml` 中引入 Spring Security 與官方的 OAuth2 Resource Server starter。它會帶入 Spring Security 的 `JwtEncoder`／`JwtDecoder`（底層是 Nimbus JOSE + JWT），簽發與驗證 JWT 都用它，<strong>不用另外加 jjwt 這類第三方 JWT 套件</strong>，也不用自己寫驗證 Token 的過濾器。',
                'Spring Boot 4 的名稱是 `spring-boot-starter-security-oauth2-resource-server`；舊名 `spring-boot-starter-oauth2-resource-server` 已標為 deprecated。版本由 Spring Boot 管理，不必寫 version。'
              ],
              code: {
                language: 'xml',
                title: 'pom.xml 依賴配置',
                content: '<!-- Spring Security Starter -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n\n<!-- 官方 OAuth2 Resource Server：簽發（JwtEncoder）與驗證（JwtDecoder）JWT -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security-oauth2-resource-server</artifactId>\n</dependency>'
              }
            },
            {
              title: 'AI Agent 提示詞 — 身分驗證與角色授權實作',
              type: 'code',
              paragraphs: [
                '將以下提示詞複製給 AI Agent，用平常講話的方式交代需求就好，細節（ROLE_ 前綴、Token 的簽發與驗證等）可以對照下面的範例程式檢查。特別確認兩點：SSE 串流結束和 404 不能變成 401（範例 SecurityConfig 的 dispatcherTypeMatchers 那行）；有 Swagger 的話要能用 Authorize 貼 Token。JWT 金鑰寫在後端專案根目錄的 <code>.env</code>：一行 <code>JWT_SECRET=至少32字元的隨機字串</code>。Spring Boot 不會自動讀 .env，AI 做完請確認 application.yml 有 <code>spring.config.import: optional:file:.env[.properties]</code>，而且 .gitignore 有 .env。'
              ],
              bullets: [
                '在 JWT 內寫入使用者角色（簡單區分管理員 ADMIN 與用戶 USER）',
                '限制商品新增、修改、刪除 API 僅限管理員角色存取，商品查詢 API 公開（訪客不必登入就能瀏覽商城首頁）',
                '（已加 Swagger 才需要）放行 Swagger UI 與 OpenAPI 文件頁面；OpenApiConfig 宣告 Bearer 驗證，讓 Swagger UI 出現 Authorize 按鈕',
                '⚠ 加上 Security 之後，原本不用登入的 API 會回 401：前面寫的測試、Swagger 或前端如果靠標頭（例如 <code>X-Username</code>）指定帳號，會整批 401。請 AI 把測試改成先登入、帶 Token；API 裡的帳號從哪裡來，下半場步驟 2 會一起整理。',
                '⚠ Token 過期或壞掉時，連公開 API（商品查詢、登入）也會回 401（Resource Server 一看到 Bearer 標頭就驗證，不會當成訪客）。前端收到 401 要清掉 Token、回登入頁，不要帶著舊 Token 重試；Swagger 則先在 Authorize 按 Logout 再登入。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞',
                content: '幫智慧商城加上登入和權限，用 Spring Security 官方的 OAuth2 Resource Server 處理 JWT，不要另外加 JWT 套件。\n- 兩個測試帳號：admin / admin123（管理員）、user / user123（一般會員）\n- 登入 API 用 /api/auth/login\n- 商品大家都能看，只有管理員能新增、修改、刪除；其他 API 要登入\n- JWT 金鑰放在專案根目錄的 .env（JWT_SECRET=…），讓 Spring Boot 讀得到，.env 不要進 Git\n有不清楚的地方先問我，做完測給我看。'
              }
            },
            {
              title: '後端安全設定範例 (SecurityConfig.java)',
              type: 'code',
              paragraphs: [
                'Spring Security 核心設定（照上面提示詞實作、課前驗證可運作的版本，省略 import）。我們配置單一 `SecurityFilterChain`：用官方 `oauth2ResourceServer` 驗證 JWT（Token 的簽發與驗證設定在下面的 JwtConfig），採無狀態 Session 策略；登入 API 與 GET 商品公開（訪客可瀏覽首頁）、商品寫入限制為 ADMIN、放行 ASYNC 與 ERROR 派送，其餘需登入；未登入回 401、權限不足回 403，兩者都回 JSON（401 的處理要在 `oauth2ResourceServer` 與 `exceptionHandling` 各設一次：前者處理 Token 無效或過期，後者處理沒帶 Token）。若專案已加 Swagger，另外放行 `/swagger-ui/**` 與 `/v3/api-docs/**` 頁面（受保護的 API 仍要 Token，不需要也不要加 HTTP Basic）。'
              ],
              code: {
                language: 'java',
                title: 'SecurityConfig.java 範例',
                content: '@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n\n    /** 未登入（沒帶 Token、Token 無效或過期）-> 401 JSON */\n    private static final AuthenticationEntryPoint UNAUTHORIZED = (request, response, ex) -> {\n        response.setContentType("application/json;charset=UTF-8");\n        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);\n        response.getWriter().write("{\\"error\\":\\"未授權：請先登入並攜帶有效的 JWT Token\\"}");\n    };\n\n    /** 已登入但權限不足 -> 403 JSON */\n    private static final AccessDeniedHandler FORBIDDEN = (request, response, ex) -> {\n        response.setContentType("application/json;charset=UTF-8");\n        response.setStatus(HttpServletResponse.SC_FORBIDDEN);\n        response.getWriter().write("{\\"error\\":\\"權限不足：此操作需要管理員角色\\"}");\n    };\n\n    /** 密碼編碼器：BCrypt */\n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder();\n    }\n\n    /** 兩個示範帳號（記憶體內，密碼以 BCrypt 儲存）；roles() 會自動補上 ROLE_ 前綴 */\n    @Bean\n    public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {\n        UserDetails admin = User.withUsername("admin")\n                .password(passwordEncoder.encode("admin123")).roles("ADMIN").build();\n        UserDetails user = User.withUsername("user")\n                .password(passwordEncoder.encode("user123")).roles("USER").build();\n        return new InMemoryUserDetailsManager(admin, user);\n    }\n\n    @Bean\n    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {\n        return config.getAuthenticationManager();\n    }\n\n    /** REST API 安全防護鏈：公開登入與 GET 商品、商品寫入限 ADMIN、其餘需登入；Token 交給 Resource Server 驗證 */\n    @Bean\n    public SecurityFilterChain apiSecurityFilterChain(HttpSecurity http,\n            JwtAuthenticationConverter jwtAuthenticationConverter) throws Exception {\n        http\n                .csrf(csrf -> csrf.disable())\n                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n                .authorizeHttpRequests(authorize -> authorize\n                        // 放行 ASYNC 與 ERROR 派送：否則 SSE 串流結束會丟 AccessDeniedException、404 會變成 401\n                        .dispatcherTypeMatchers(DispatcherType.ASYNC, DispatcherType.ERROR).permitAll()\n                        .requestMatchers(HttpMethod.POST, "/api/auth/login").permitAll()                     // 登入 API 公開\n                        .requestMatchers(HttpMethod.GET, "/api/products", "/api/products/{id}").permitAll() // 訪客可瀏覽商品\n                        // 已加 Swagger（1-5 章）才需要：放行頁面與 API 描述（受保護的 API 仍要 Token）\n                        .requestMatchers("/swagger-ui/**", "/swagger-ui.html", "/v3/api-docs/**").permitAll()\n                        .requestMatchers(HttpMethod.POST, "/api/products/**").hasRole("ADMIN")   // 新增商品限管理員\n                        .requestMatchers(HttpMethod.PUT, "/api/products/**").hasRole("ADMIN")    // 修改商品限管理員\n                        .requestMatchers(HttpMethod.DELETE, "/api/products/**").hasRole("ADMIN") // 刪除商品限管理員\n                        .anyRequest().authenticated())                                          // 其餘均需登入\n                // 官方 Resource Server：從 Authorization: Bearer 標頭取 Token，用 JwtConfig 的 JwtDecoder 驗證\n                .oauth2ResourceServer(oauth2 -> oauth2\n                        .jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter))\n                        .authenticationEntryPoint(UNAUTHORIZED)   // Token 無效或過期 -> 401\n                        .accessDeniedHandler(FORBIDDEN))\n                .exceptionHandling(exception -> exception\n                        .authenticationEntryPoint(UNAUTHORIZED)   // 沒帶 Token -> 401\n                        .accessDeniedHandler(FORBIDDEN));         // 權限不足 -> 403\n        return http.build();\n    }\n}\n// 匯入（節錄）：org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter'
              }
            },
            {
              title: 'Swagger 支援 Bearer Token（OpenApiConfig 加上驗證方案）',
              type: 'code',
              paragraphs: [
                '本章是無狀態 JWT，Swagger UI 不會跳出瀏覽器登入框。要讓 Swagger 能測試受保護的 API，需要兩件事：<strong>放行 Swagger 頁面</strong>（上面 SecurityConfig 的 permitAll 那一行），以及在 1-5 章的 OpenApiConfig <strong>宣告 Bearer 驗證方案</strong>，Swagger UI 右上角才會出現 Authorize 按鈕。沒有宣告時，即使登入拿到 Token，Swagger UI 也不知道要把 Token 放進哪個標頭。',
                '以下範例延伸 1-5 章的 OpenApiConfig（只列新增的驗證方案，原有的 info 設定照舊）。若專案沒有加 Swagger，這一節可以略過。'
              ],
              code: {
                language: 'java',
                title: 'OpenApiConfig.java — 加上 Bearer 驗證',
                content: '@Configuration\npublic class OpenApiConfig {\n\n    /** Swagger UI 的 Bearer 驗證方案名稱（Authorize 對話框會顯示這個名字） */\n    private static final String BEARER = "BearerAuth";\n\n    @Bean\n    public OpenAPI openAPI() {\n        return new OpenAPI()\n            .info(new Info().title("智慧商城客服系統 API").version("1.0.0"))\n            // 宣告 HTTP Bearer（JWT）驗證方案：Swagger UI 右上角會出現 Authorize 按鈕\n            .components(new Components().addSecuritySchemes(BEARER,\n                new SecurityScheme()\n                    .type(SecurityScheme.Type.HTTP)\n                    .scheme("bearer")\n                    .bearerFormat("JWT")))\n            // 套用到全部端點：Authorize 之後，每個請求都會自動帶 Authorization: Bearer <token>\n            .addSecurityItem(new SecurityRequirement().addList(BEARER));\n    }\n}\n// 匯入：io.swagger.v3.oas.models.Components / OpenAPI / info.Info / security.SecurityScheme / security.SecurityRequirement'
              }
            },
            {
              title: 'JWT 設定範例 (JwtConfig.java)',
              type: 'code',
              paragraphs: [
                '金鑰、簽發器（`JwtEncoder`）、驗證器（`JwtDecoder`）與角色轉換集中在這裡。金鑰從 .env 的 JWT_SECRET 讀取（經 spring.config.import 載入），少於 32 字元就讓應用程式啟動失敗（HS256 至少要 256 位元，也不要寫死在程式裡）。',
                'Token 的 role Claim 存 ADMIN 或 USER（不含 ROLE_ 前綴）；`JwtAuthenticationConverter` 驗證時把它轉成 `ROLE_ADMIN`／`ROLE_USER`，SecurityConfig 的 `hasRole("ADMIN")` 才比對得到。帳號取自 Token 的 sub，Controller 的 `principal.getName()` 就是登入帳號。`NimbusJwtEncoder.withSecretKey` 是 Spring Security 7（Spring Boot 4）新增的寫法。'
              ],
              code: {
                language: 'java',
                title: 'JwtConfig.java 範例',
                content: '@Configuration\npublic class JwtConfig {\n\n    /** HS256 簽章金鑰：讀 .env 的 JWT_SECRET；沒設定或少於 32 字元就讓應用程式啟動失敗 */\n    @Bean\n    public SecretKey jwtSecretKey(@Value("${JWT_SECRET:}") String secret) {\n        if (secret == null || secret.length() < 32) {\n            throw new IllegalStateException(".env 的 JWT_SECRET 未設定或長度不足 32 字元");\n        }\n        return new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");\n    }\n\n    /** 簽發 Token 用（登入成功時呼叫） */\n    @Bean\n    public JwtEncoder jwtEncoder(SecretKey jwtSecretKey) {\n        return NimbusJwtEncoder.withSecretKey(jwtSecretKey).build();\n    }\n\n    /** 驗證 Token 用：Resource Server 每個請求都用它檢查簽章與有效期限 */\n    @Bean\n    public JwtDecoder jwtDecoder(SecretKey jwtSecretKey) {\n        return NimbusJwtDecoder.withSecretKey(jwtSecretKey).macAlgorithm(MacAlgorithm.HS256).build();\n    }\n\n    /** 把 Token 的 role Claim（ADMIN／USER）轉成 ROLE_ADMIN／ROLE_USER，hasRole("ADMIN") 才比對得到 */\n    @Bean\n    public JwtAuthenticationConverter jwtAuthenticationConverter() {\n        JwtGrantedAuthoritiesConverter authorities = new JwtGrantedAuthoritiesConverter();\n        authorities.setAuthoritiesClaimName("role");\n        authorities.setAuthorityPrefix("ROLE_");\n        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();\n        converter.setJwtGrantedAuthoritiesConverter(authorities);\n        return converter;\n    }\n}\n// 匯入（節錄）：org.springframework.security.oauth2.jose.jws.MacAlgorithm、org.springframework.security.oauth2.jwt.JwtDecoder、org.springframework.security.oauth2.jwt.JwtEncoder、org.springframework.security.oauth2.jwt.NimbusJwtDecoder、org.springframework.security.oauth2.jwt.NimbusJwtEncoder、org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter、org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter'
              }
            },
            {
              title: '簽發 Token 範例 (TokenService.java)',
              type: 'code',
              paragraphs: [
                'Spring Security 不提供「登入換 Token」的端點，登入 API 要自己寫，簽發時呼叫 `JwtEncoder`：subject 放帳號、role Claim 放角色、有效期限 24 小時。',
                '驗證不用自己寫過濾器：Resource Server 內建的 `BearerTokenAuthenticationFilter` 只從 `Authorization: Bearer` 標頭取 Token（不讀網址參數，2-5 章的 AI 串流也用 fetch 帶這個標頭），用 JwtDecoder 驗證簽章與期限，再把帳號與角色放進 SecurityContext。'
              ],
              code: {
                language: 'java',
                title: 'TokenService.java 範例',
                content: '@Service\npublic class TokenService {\n\n    /** Token 有效期限：24 小時 */\n    private static final Duration EXPIRES_IN = Duration.ofHours(24);\n\n    private final JwtEncoder jwtEncoder;\n\n    public TokenService(JwtEncoder jwtEncoder) {\n        this.jwtEncoder = jwtEncoder;\n    }\n\n    /** 簽發 Token：subject 為帳號，角色（ADMIN／USER，不含 ROLE_ 前綴）寫入 role Claim */\n    public String generateToken(String username, String role) {\n        Instant now = Instant.now();\n        JwtClaimsSet claims = JwtClaimsSet.builder()\n                .subject(username)\n                .claim("role", role)\n                .issuedAt(now)\n                .expiresAt(now.plus(EXPIRES_IN))\n                .build();\n        JwsHeader header = JwsHeader.with(MacAlgorithm.HS256).build();\n        return jwtEncoder.encode(JwtEncoderParameters.from(header, claims)).getTokenValue();\n    }\n}\n// 匯入（節錄）：org.springframework.security.oauth2.jose.jws.MacAlgorithm、org.springframework.security.oauth2.jwt.JwsHeader、org.springframework.security.oauth2.jwt.JwtClaimsSet、org.springframework.security.oauth2.jwt.JwtEncoder、org.springframework.security.oauth2.jwt.JwtEncoderParameters'
              }
            },
            {
              title: '登入 Controller 範例（AuthController.java）',
              type: 'code',
              paragraphs: [
                '提供登入端點，傳入帳號密碼並呼叫 `AuthenticationManager` 進行身分驗證。驗證成功後呼叫 TokenService 簽發 JWT，回傳 `{ token, username, role }`（role 為 ADMIN 或 USER，不含 ROLE_ 前綴）。`LoginRequest`、`LoginResponse` 用 record 宣告（範例放在類別內）；`@Tag` 是 springdoc 的註解，做過 1-5 章才加。'
              ],
              code: {
                language: 'java',
                title: 'AuthController.java 範例',
                content: '@RestController\n@RequestMapping("/api/auth")\n// @Tag(name = "認證管理")   // 做過 1-5 章、已加入 springdoc 才加，否則無法編譯\npublic class AuthController {\n\n    /** 登入請求與回應（role 為 ADMIN 或 USER，不含 ROLE_ 前綴） */\n    public record LoginRequest(String username, String password) {}\n    public record LoginResponse(String token, String username, String role) {}\n\n    private final AuthenticationManager authenticationManager;\n    private final TokenService tokenService;\n\n    public AuthController(AuthenticationManager authenticationManager, TokenService tokenService) {\n        this.authenticationManager = authenticationManager;\n        this.tokenService = tokenService;\n    }\n\n    /** 帳密正確回 { token, username, role }；帳密錯誤由 Spring Security 丟例外（回 401） */\n    @PostMapping("/login")\n    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {\n        Authentication authentication = authenticationManager.authenticate(\n                new UsernamePasswordAuthenticationToken(request.username(), request.password()));\n        // 角色取自驗證結果的權限（ROLE_ADMIN），去掉 ROLE_ 前綴後寫進 Token 與回應\n        String role = authentication.getAuthorities().stream()\n                .map(a -> a.getAuthority())\n                .filter(a -> a.startsWith("ROLE_"))\n                .map(a -> a.substring("ROLE_".length()))\n                .findFirst()\n                .orElse("USER");\n        String token = tokenService.generateToken(authentication.getName(), role);\n        return ResponseEntity.ok(new LoginResponse(token, authentication.getName(), role));\n    }\n}'
              }
            },
            {
              title: 'Swagger 網頁驗證步驟（推薦）',
              type: 'text',
              paragraphs: [
                '後端啟動後，我們可以透過 Swagger UI 網頁進行 API 測試，視覺化地驗證登入、JWT 簽發與角色基礎授權控制（RBAC）是否正常運作。',
                '<div style="margin-top: 16px;">' +
                  '<ul style="list-style-type: decimal; margin-left: 20px; margin-bottom: 16px; line-height: 1.8;">' +
                    '<li style="margin-bottom: 6px;"><strong>開啟 Swagger 網頁</strong>：在瀏覽器中輸入 <a href="http://localhost:8080/swagger-ui/index.html" target="_blank" class="accent-link">http://localhost:8080/swagger-ui/index.html</a>。頁面本身不需要登入（SecurityConfig 已放行）；若看到 401 或空白頁，代表 <code>/swagger-ui/**</code>、<code>/v3/api-docs/**</code> 沒有放行。</li>' +
                    '<li style="margin-bottom: 6px;"><strong>取得 JWT Token</strong>：展開 <code>POST /api/auth/login</code>（登入 API 是公開的，不用先授權），點選 <strong>Try it out</strong>，傳入使用者資料（如：<code>{"username": "user", "password": "user123"}</code>）執行，複製回應裡 <code>token</code> 欄位的值（不含引號）。</li>' +
                    '<li style="margin-bottom: 6px;"><strong>點擊 Authorize 帶入 Token</strong>：回到頁面右上方點選 <strong>Authorize</strong> 按鈕，在 <code>BearerAuth</code> 欄位貼上剛剛複製的 Token（<strong>只貼 Token 本身，不要自己加 <code>Bearer </code></strong>，Swagger UI 會自動補上），按 Authorize 再關閉對話框。找不到 Authorize 按鈕，代表 OpenApiConfig 還沒宣告 Bearer 驗證方案。</li>' +
                    '<li style="margin-bottom: 6px;"><strong>驗證角色存取控制 (RBAC)</strong>：在授權為 <code>user</code> 狀態下呼叫新增商品 API，預期應收到 <strong>403 Forbidden</strong>；以同樣方式更換為 <code>admin</code> 的 Token 後呼叫則應成功回傳 <strong>201 Created</strong>。</li>' +
                  '</ul>' +
                '</div>'
              ],
              image: 'assets/teaching-site/09-swagger-ui-dashboard.png',
              imageAlt: 'Swagger UI 儀表板',
              imageCaption: 'Swagger UI 儀表板：右上角的 Authorize 按鈕（OpenApiConfig 宣告 Bearer 驗證後才會出現），貼上 JWT 後即可測試受保護的 API 與角色權限。'
            },
            {
              title: 'PowerShell 驗證命令（可選）',
              type: 'code',
              paragraphs: [
                '若您偏好命令列測試，可在 PowerShell 7+ 中依序執行以下命令進行登入與 API 安全性存取測試。'
              ],
              bullets: [
                '管理員帳號：`admin`，密碼 `admin123`（記憶體帳號，BCrypt 加密）',
                '一般用戶帳號：`user`，密碼 `user123`',
                '1. 使用 `user` 登入取得 Token，測試呼叫新增商品 API，預期應回傳 403 Forbidden',
                '2. 使用 `admin` 登入取得 Token，測試呼叫新增商品 API，預期應回傳 201 Created'
              ],
              code: {
                language: 'powershell',
                title: '驗證 API 存取控制',
                content: '# 1. \u4ee5\u666e\u901a\u7528\u6236\u767b\u5165\n$loginUser = Invoke-RestMethod -Uri \"http://localhost:8080/api/auth/login\" -Method Post -ContentType \"application/json\" -Body \'{\"username\":\"user\",\"password\":\"user123\"}\'\n$userToken = $loginUser.token\n\n# 2. \u6e2c\u8a66\u666e\u901a\u7528\u6236\u65b0\u589e\u5546\u54c1 (\u61c9\u88ab\u62d2\u7d55\u56de\u50b3 403)\ntry {\n    Invoke-RestMethod -Uri \"http://localhost:8080/api/products\" -Method Post -Headers @{Authorization=\"Bearer $userToken\"} -ContentType \"application/json\" -Body \'{\"name\":\"\u6e2c\u8a66\u5546\u54c1\",\"price\":100,\"stock\":10}\'\n} catch {\n    $_.Exception.Response.StatusCode # \u8f38\u51fa: Forbidden (403)\n}\n\n# 3. \u4ee5\u7ba1\u7406\u54e1\u767b\u5165\n$loginAdmin = Invoke-RestMethod -Uri \"http://localhost:8080/api/auth/login\" -Method Post -ContentType \"application/json\" -Body \'{\"username\":\"admin\",\"password\":\"admin123\"}\'\n$adminToken = $loginAdmin.token\n\n# 4. \u6e2c\u8a66\u7ba1\u7406\u54e1\u65b0\u589e\u5546\u54c1 (\u61c9\u6210\u529f\u56de\u50b3 201)\n$newProduct = Invoke-RestMethod -Uri \"http://localhost:8080/api/products\" -Method Post -Headers @{Authorization=\"Bearer $adminToken\"} -ContentType \"application/json\" -Body \'{\"name\":\"\u53cd\u91cd\u529b\u8033\u6a5f\",\"price\":2999,\"stock\":20}\'\n$newProduct.id # \u8f38\u51fa\u5546\u54c1 ID'
              }
            },
            {
              title: '下半場：補完購物 API，再做一次安全性盤點',
              type: 'text',
              paragraphs: [
                '前面章節請 AI 做商城時，多半已經順手做出購物車、結帳、訂單等 API；每個人的專案不一樣，路徑和欄位名稱也不一定相同。所以下半場不再一支一支規定 API，而是請 AI <strong>先看專案現況、列出缺什麼，你確認後再補</strong>。',
                '補完之後最重要的是安全性：上半場加了登入，但既有的 API 可能還用別的方式決定「你是誰」，例如讀前端傳來的帳號標頭、沒帶就當成 user，等於任何人都能冒充別人。下半場的重點是把這些洞找出來、用測試證明、再修掉。',
                '這一段用 <strong>TDD</strong> 讓 AI 開發（0-1 章介紹過）：先寫測試看紅燈、確認失敗原因是「還沒做」，再實作到綠燈。購物流程應該具備：'
              ],
              bullets: [
                '購物車：查看、加入（已有就累加）、改數量、移除；超過庫存回 409，商品不存在回 404',
                '結帳：購物車變成訂單、扣庫存、清空購物車；有一項庫存不足就整筆不成立（409），購物車是空的回 400',
                '我的訂單：列表與單筆（含明細）；別人的訂單一律回 404，不洩漏訂單是否存在',
                '取消訂單：還沒出貨才能取消，庫存要退回',
                '管理員：查全部帳號的訂單、出貨'
              ]
            },
            {
              title: '步驟 0：Testcontainers——測試有自己的乾淨資料庫',
              type: 'code',
              paragraphs: [
                'TDD 要能一直重跑，測試就不能用 1-3 章那個示範資料庫：測試會建立訂單、扣庫存，跑幾次資料就亂了；反過來，你在畫面上點的資料也會讓測試時好時壞。<strong>Testcontainers</strong> 在每次 <code>mvn test</code> 時自動起一個全新的 PostgreSQL 容器、跑同樣的 Flyway 遷移，測完就丟掉。你只需要有 Docker（1-3 章已安裝）。',
                '同一個測試類別裡的測試仍共用這個容器，所以每個測試前後要自己還原資料（清購物車、刪測試訂單、還原種子商品的庫存與價格、種子訂單的狀態）。課前演練就踩過兩次：結帳測試改了商品價格沒還原，下一個測試的總金額變成 5000；AI 工具測試取消了種子訂單沒還原，查我的訂單的測試看到 CANCELLED。'
              ],
              bullets: [
                '不能用 <code>@Transactional</code> 讓測試自動回滾：併發測試需要每個執行緒真的提交交易，回滾測試也要驗證「真的沒寫進去」。',
                '測試設定把 <code>spring.datasource.url</code> 指向連不上的位址：萬一哪個測試沒接到容器，會直接失敗，而不是悄悄改到示範資料庫。',
                '第一次執行會下載 <code>pgvector/pgvector:pg18</code> 映像（與 docker-compose 相同），之後就快了。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 建立 Testcontainers 測試基礎',
                content: '幫我把測試改成用 Testcontainers，每次跑測試都起一個乾淨的 PostgreSQL（用和 docker-compose 一樣的 pgvector 映像），測試不能碰到開發用的資料庫。\n另外做兩個小工具：一個用示範帳號登入拿 Token；一個在每個測試前後把資料還原（購物車、新增的訂單、商品庫存和價格、種子訂單的狀態）。\n測試用的 JWT 金鑰放在 src/test/resources，跑 mvn test 不依賴 .env。\n有不清楚的地方先問我，做完跑 mvn test 給我看。'
              }
            },
            {
              title: '步驟 1：請 AI 盤點並補完購物 API',
              type: 'code',
              paragraphs: [
                '不用自己寫 API 規格：讓 AI 讀專案、對照上面的購物流程列出缺什麼，你看過清單再讓它動手。如果專案已經全部做完，這一步只會得到「都有了」，可以直接進步驟 2。'
              ],
              bullets: [
                '要改資料表時（例如訂單拆成訂單＋明細），只能新增 Flyway 版本（V3、V4…），<strong>不能修改已套用的 V1、V2</strong>：Flyway 會比對 checksum，改了就啟動失敗。',
                '⚠ 新的遷移含 <code>DROP COLUMN</code>、<code>DROP CONSTRAINT</code> 時，Claude Code 的 auto mode 可能判定為破壞性動作而拒絕寫檔。請 AI 先貼出 SQL，你確認沒有 DROP TABLE、只動該動的欄位後再放行；不要叫 AI 換方式繞過。',
                '結帳要有併發測試：兩個人同時買最後一件，只能一個成功；有一項庫存不夠時，庫存和購物車都不能變。',
                '⚠ 紅燈必須是「功能還沒做」（404 或斷言不符）；看到 <code>COMPILATION ERROR</code> 不算紅燈，請 AI 先補空的類別或方法再跑。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 盤點並補完購物 API',
                content: '看一下專案現在有哪些 API，對照一般購物流程（購物車、結帳、查自己的訂單、取消訂單、管理員查全部訂單和出貨），把還沒做的補完。\n先列出缺哪些給我確認再做；用 TDD，先寫測試、跑紅燈給我看。有不清楚的地方先問我。'
              }
            },
            {
              title: '步驟 2：安全性盤點——帳號從 Token 取得、管理員 API 雙重防護',
              type: 'code',
              paragraphs: [
                '上半場的登入只解決了「認得你是誰」。前面做好的購物 API 不一定用登入身分決定帳號：常見的是讀前端傳來的 username 或自訂標頭，沒帶就預設成某個帳號。這種 API 加了登入也沒用，任何人改個標頭就能看別人的購物車與訂單。這一步請 AI 把整個專案的 API 檢查一遍，<strong>先列出問題、用測試證明問題存在，再修掉</strong>。',
                '到目前為止的授權都寫在 SecurityConfig 的 <strong>URL 規則</strong>：請求在 Filter 鏈就被擋下，根本進不到 Controller。好處是集中在一處、看規則表就知道哪些路徑受保護；缺點是新增路徑時忘了加規則，就沒有保護。',
                '另一種寫法是<strong>方法層級授權</strong>：在 SecurityConfig 加 <code>@EnableMethodSecurity</code>，再把 <code>@PreAuthorize("hasRole(\'ADMIN\')")</code> 貼在 Controller 方法上。規則跟著方法走，即使有人改了 URL 規則、或把方法掛到別的路徑，仍然有保護；缺點是規則分散在各處。管理員查全部訂單的 API 兩種都用，形成<strong>雙重防護</strong>：URL 規則先擋，漏網時方法註解再擋一次。'
              ],
              bullets: [
                '帳號一律從 Spring Security（登入的 Token）取得，不接受前端傳 username；查別人的訂單回 404，不洩漏訂單是否存在。',
                '管理員 API 放在 <code>/api/admin/**</code> 底下，URL 規則一行就能全部保護，也不會和 <code>/api/orders/{orderNo}</code> 這類路徑變數衝突。',
                '<code>@PreAuthorize</code> <strong>只放在 Controller，不要放在 Service</strong>：2-2 章的 AI 工具會在沒有登入資訊（SecurityContext）的執行緒呼叫 Service，加在 Service 上會讓工具全部失敗。',
                '測試方法層級授權時要「繞過 URL 規則」：直接注入 Controller、在 SecurityContext 放入 user 身分後呼叫方法，預期丟 AccessDeniedException；換成 admin 身分則可以通過。',
                '401 與 403 的差別：401 是「還不知道你是誰」（沒帶 Token 或 Token 失效），前端應該請使用者重新登入；403 是「知道你是誰，但你沒有權限」，前端只能提示，不能把使用者登出。'
              ],
              code: {
                language: 'java',
                title: 'SecurityConfig 與管理員 Controller 的兩層授權（節錄）',
                content: '// SecurityConfig.java\n@Configuration\n@EnableMethodSecurity   // 讓 @PreAuthorize 生效（和 URL 規則並存）\npublic class SecurityConfig {\n    // ...authorizeHttpRequests 內\n    // 僅 ADMIN：/api/admin/ 底下全部（第一層：在 Filter 鏈就擋掉）\n    .requestMatchers("/api/admin/**").hasRole("ADMIN")\n    // 其餘需登入\n    .anyRequest().authenticated())\n}\n\n// 管理員訂單 Controller（類別與方法名稱依你的專案）\n@RestController\n@RequestMapping("/api/admin/orders")\npublic class AdminOrderController {\n    /** 列出所有帳號的訂單。第二層：方法層級授權，即使 URL 規則漏了也擋得住 */\n    @PreAuthorize("hasRole(\'ADMIN\')")\n    @GetMapping\n    public List<OrderResponse> allOrders() {\n        return orderService.getAllOrders();\n    }\n}\n\n// 一般 Controller：帳號從登入身分取得，不再讀前端傳來的標頭\n@GetMapping\npublic List<OrderResponse> myOrders(Principal principal) {\n    return orderService.getMyOrders(principal.getName());\n}'
              }
            },
            {
              title: 'AI Agent 提示詞 — 安全性盤點',
              type: 'code',
              paragraphs: [
                '修完用 Swagger 的 Authorize 換不同帳號的 Token 試一次，或用 PowerShell 打 API。'
              ],
              bullets: [
                '未登入呼叫購物車 → 401；user 呼叫管理員 API → 403；admin → 200；user 查 admin 的訂單編號 → 404。',
                '⚠ admin 或 user 拿到 500 而不是 403：GlobalExceptionHandler 攔截了 <code>Exception.class</code>，把 AccessDeniedException 吃掉了。',
                '⚠ 原本用來指定帳號的標頭（例如 <code>X-Username</code>）改完要整個拿掉，Swagger 上也不該再出現這個參數。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 安全性盤點',
                content: '現在已經有登入了，幫我檢查所有 API 還有哪些安全性問題，例如：\n- 目前的帳號是怎麼取得的？要改成從登入的 Token 拿，不能讓前端自己指定\n- 一般會員能不能呼叫管理員的 API？管理員 API 用 URL 規則加 @PreAuthorize 兩層保護\n- 能不能看到或改到別人的購物車、訂單\n先列出問題給我確認，再寫測試證明問題存在，然後修掉。有不清楚的地方先問我。'
              }
            },
            {
              title: '併發陷阱：同一份購物車被結成兩筆訂單',
              type: 'code',
              paragraphs: [
                '步驟 1 的併發測試保證了「兩個人搶最後一件只會成功一個」。但還有一種情況沒測到：<strong>同一個人同時送出兩次結帳</strong>（連點兩下結帳鈕、網路重送、開兩個分頁）。課前用腳本實測，5 輪全部重現：兩個請求都回 201，同一份購物車變成兩筆訂單，庫存扣了兩份。AI 寫的結帳很可能也有同樣的空窗，可以照下方進階任務，請 AI 先寫一個會失敗的併發測試確認。',
                '<strong>原因</strong>：常見的結帳寫法是先讀購物車、扣庫存、建訂單，最後才清空購物車（例如 <code>deleteByUsername</code>），中間沒有鎖住購物車列。PostgreSQL 預設的隔離等級是 <strong>READ COMMITTED</strong>，兩個交易各自讀到同一份購物車；庫存夠就都扣得到（條件式 UPDATE 只保證不超賣，不保證不重複）；第二個交易的 delete 刪到 <strong>0 列</strong>（已被第一個刪掉），而刪 0 列不是錯誤，交易照樣提交。'
              ],
              bullets: [
                '<strong>修法 A：比對刪除列數</strong>。清空購物車的刪除方法（例如 <code>deleteByUsername</code>）回傳實際刪除的列數，和一開始讀到的品項數不同，就代表購物車已被另一個結帳處理掉，丟出 ConflictException，讓整筆交易（含已扣的庫存、已建的訂單）回滾。改動最小，第二個請求得到 409。',
                '<strong>修法 B：悲觀鎖</strong>。另寫一個<strong>結帳專用</strong>的讀購物車查詢，加上 <code>@Lock(LockModeType.PESSIMISTIC_WRITE)</code>（SQL 變成 <code>SELECT ... FOR UPDATE</code>），第二個交易會等第一個提交後才讀，讀到的是空購物車，回 400。不要直接加在原本的查詢上：查購物車的 API 通常也用同一個查詢，加了鎖連看購物車都要排隊。代價是鎖定期間同帳號的其他購物車操作要等待，鎖的範圍要用測試確認。',
                '兩種修法都要先有<strong>會失敗的測試</strong>，修完測試轉綠才算數——見下方進階任務。下面的程式碼是示意，類別與方法名稱依你的專案。'
              ],
              code: {
                language: 'java',
                title: '兩種修法示意（類別與方法名稱依你的專案）',
                content: '// 修法 A：OrderService.checkout 最後清空購物車時比對刪除列數\nint deleted = cartItemRepository.deleteByUsername(username);\nif (deleted != cartItems.size()) {\n    // 購物車在本交易讀取之後已被另一個結帳清掉：丟例外讓整筆交易（扣庫存、建訂單）回滾\n    throw new ConflictException("這份購物車已在另一個結帳請求中處理，這次沒有建立訂單");\n}\n\n// 修法 B：結帳專用的加鎖查詢（SELECT ... FOR UPDATE），第二個交易會等第一個提交；\n// getCart 仍用原本不加鎖的查詢，checkout 改呼叫這一個\n@Lock(LockModeType.PESSIMISTIC_WRITE)\n@Query("select c from CartItem c join fetch c.product where c.username = :username order by c.product.id")\nList<CartItem> findForCheckout(@Param("username") String username);'
              }
            },
            {
              title: '進階任務：請 AI 先寫會失敗的併發測試，再修',
              type: 'code',
              paragraphs: [
                '這是 TDD 最有價值的用法：<strong>先用測試把 bug 抓住</strong>，確認它在目前的程式上會失敗，再修。修完之後這個測試會一直留著，以後任何人（包含 AI）改壞了結帳，測試會立刻告訴你。',
                '併發測試的失敗有機率性：提示詞要求重複多輪，而且明講「幾輪都沒失敗就增加輪數，不要改斷言」。',
                '<strong>跑測試可能被權限擋下</strong>：用 Claude Code 的 auto mode 時，AI 單獨執行 <code>mvn test -Dtest=ConcurrentCheckoutTest</code> 這類指令可能被權限分類器拒絕（課前驗證就遇到）。看過指令內容後手動放行，或自己在終端機執行 <code>mvn test "-Dtest=ConcurrentCheckoutTest"</code>，把結果貼給 AI 判斷；不要叫 AI 換個指令或寫法繞過。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 修正同帳號並行結帳（進階）',
                content: '同一個帳號同時送出兩次結帳，會把同一份購物車結成兩筆訂單、庫存扣兩份。請用 TDD 修正：\n先寫一個會失敗的測試（同一個帳號同時結帳兩次，重複多輪，每輪只能成立一筆），跑給我看確實失敗；幾輪都沒失敗就增加輪數，不要改斷言。\n再說明有哪些修法、各有什麼取捨，我選好再實作，實作時不要改測試。有不清楚的地方先問我。'
              }
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>提示詞只講需求，範例用來驗收</strong>：本章的提示詞刻意寫得簡單，細節由 AI 讀專案決定，有疑問會先問你。程式碼範例是節錄，用來對照 AI 的成果；寫法不同時以測試結果判斷對錯，不要把範例整段貼給 AI 照抄。',
                '<strong>⚠ 紅燈必須是「功能還沒做」</strong>：看到 <code>COMPILATION ERROR</code> 或 <code>cannot find symbol</code> 不算紅燈。請 AI 先補空的類別與方法（方法內丟 <code>UnsupportedOperationException</code>）再跑一次，確認失敗原因是 404、UnsupportedOperationException 或斷言不符。',
                '<strong>⚠ AI 想改測試時，讓它停下來問你</strong>：實作和測試對不上時，AI 可能改斷言或另建類別湊出綠燈。看到這種情況請它停下來說明，由你決定：要改測試，就走「先改規格 → 改測試並看到紅燈 → 改實作」，測試的修改由你確認。',
                '<strong>綠燈失敗先查資料污染</strong>：綠燈階段的失敗常是測試互相污染（改了價格、取消了種子訂單沒還原），修法是補齊每個測試前後的資料還原。資料還原屬於測試的基礎設施，可以補；代表規格的斷言與情境，不能為了通過而改。',
                '<strong>⚠ 安全性盤點先看清單再修</strong>：AI 列出的問題先逐條確認，特別是「帳號從哪裡來」；改完用不同帳號的 Token 實測 401、403、404，不要只看 AI 說「已修正」。'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'day2',
      label: 'Day 2',
      title: 'Spring AI、企業級 RAG 與 React 全端整合',
      lead: '在穩定後端基礎上接入對話模型、工具呼叫與知識庫檢索，再以 React 完成串流對話介面，組成可驗證的全端 AI 應用。',
      units: [
        {
          id: 'd2-u1',
          chapter: '2-1',
          title: 'Spring AI 與 ChatClient 基礎',
          summary: '建立 Spring AI 對話入口，理解串流輸出、對話記憶與多 session 管理。',
          source: 'docs/Day2-1-SpringAI-ChatClient.md',
          heroImage: 'assets/teaching-site/05-ch05-springai-chatclient.png',
          diagramImage: 'assets/diagrams/d2-u1.png',
          diagramCaption: 'ChatClient 負責對話調度，記憶機制負責將上下文留在正確的 session 中。',
          goals: [
            '掌握 ChatClient 在 Spring AI 的使用位置',
            '理解 SSE 串流輸出的呈現方式',
            '知道如何以對話 ID（登入帳號）隔離不同使用者對話'
          ],
          tasks: [
            { id: 'd2-u1-t1', text: '確認模型端點與金鑰配置' },
            { id: 'd2-u1-t2', text: '完成 ChatClient 串流流程閱讀' },
            { id: 'd2-u1-t3', text: '整合 Spring Security 透過 Principal 隔離對話 Session' }
          ],
          sections: [
            {
              title: '今日準備清單：Day 2 要申請的金鑰、安裝與下載（照順序）',
              type: 'text',
              paragraphs: [
                '照上課順序列出 Day 2 會用到的金鑰、網站、程式與下載檔案。API 金鑰請課前申請，避免上課時卡在信箱驗證或付款設定，申請步驟見本章「註冊與取得 API Key（課前完成）」。'
              ],
              bullets: [
                '<strong>1.【2-1 金鑰】對話模型，二擇一，寫進 .env 的 <code>MODEL_API_KEY</code></strong>：Muse Spark（<a href="https://dev.meta.ai/" target="_blank">dev.meta.ai</a>，要綁付款方式並儲值少量額度）或 Groq（<a href="https://console.groq.com/" target="_blank">console.groq.com</a>，免費）。',
                '<strong>2.【2-1 金鑰】JWT_SECRET</strong>：沿用 Day 1 寫在 .env 的值，不用再設定。',
                '<strong>3.【2-3 金鑰】Voyage AI，寫進 .env 的 <code>VOYAGE_API_KEY</code></strong>：<a href="https://dash.voyageai.com/" target="_blank">dash.voyageai.com</a>，建議綁卡解除速率限制（免費額度內不會扣款）。',
                '<strong>4.【2-3 範例文件】退貨政策.txt、無線耳機 Pro 規格說明.txt</strong>：把 2-3 章頁面上的範例內容存成這兩個檔案，上傳知識庫用。',
                '<strong>5.【2-4 程式】Node.js LTS</strong>：0-1 章已安裝，<code>node -v</code> 確認即可。',
                '<strong>6.【2-4 下載】示範商品圖片 <a href="assets/downloads/product-images.zip" download>product-images.zip</a></strong>：6 張商品圖放進 <code>frontend/public/images/products/</code>；<code>brand/</code> 資料夾留給 2-5 章末升級。',
                '<strong>7.【2-5 插件】ui-ux-pro-max</strong>：在 VS Code 的 Claude Code 插件或 Claude 桌面版開啟插件管理畫面，新增 marketplace <code>nextlevelbuilder/ui-ux-pro-max-skill</code>，再安裝其中的 ui-ux-pro-max 插件，裝完重新開啟（搜尋腳本需要 Python 3，0-1 章已安裝）。',
                '<strong>8.【2-5、2-8 程式】Playwright</strong>：0-1 章已安裝，寫購物流程與完整系統驗證的 e2e 用。',
                '<strong>9.【2-9 選用】Cloudflare Tunnel</strong>：映像 <code>cloudflare/cloudflared</code> 由 docker compose 自動下載；Quick Tunnel 免註冊，要綁自己的網域才需要到 <a href="https://dash.cloudflare.com/" target="_blank">dash.cloudflare.com</a> 註冊。'
              ]
            },
            {
              title: 'ChatClient 在架構中的位置',
              type: 'text',
              paragraphs: [
                '這一章開始，專案從純後端工程擴展到 AI 對話應用。`ChatClient` 是 Spring AI 2.0 中相對高階、可組合的入口，負責把使用者輸入、Advisor、Tools 與模型回應串成一條可讀的流程。',
                '教學上可以把它想成客服總機。總機本身不處理所有問題，但它知道該把輸入送到哪裡、要不要帶記憶、要不要叫工具。'
              ],
              image: 'assets/teaching-site/15-diagram-chatclient-memory.png',
              imageAlt: 'ChatClient 與對話記憶圖',
              imageCaption: '對話不是單純 request / response，而是有上下文與 session 的流。'
            },
            {
              title: '串流輸出為什麼重要',
              type: 'text',
              paragraphs: [
                '對使用者來說，串流輸出最大的價值不是技術炫耀，而是等待感受不同。模型可以一邊生成一邊顯示，前端不需要等整段文字全部完成才開始呈現。',
                '在這個課程範例中，前端使用 SSE 讀取後端串流結果，這也為後面的 Demo 頁面奠定互動感。'
              ],
              image: 'assets/teaching-site/19-diagram-sse-vs-blocking.svg',
              imageAlt: '一次性回應與 SSE 串流輸出的時序對比圖',
              imageCaption: '同樣生成 500 字：一次性回應讓使用者面對 8 秒空白；SSE 串流 0.5 秒就看到第一個字。'
            },
            {
              title: '對話記憶設計',
              type: 'text',
              bullets: [
                '不同使用者應對應不同的對話 ID（本課程用登入帳號）',
                '記憶不應全站共用，否則會互相污染上下文',
                '清除對話時應一併重建 session 識別值'
              ]
            },
            {
              title: 'ChatClient.Builder 初始化方式',
              type: 'code',
              paragraphs: [
                'Spring AI 不直接 `new ChatClient()`，而是注入 `ChatClient.Builder`，讓框架管理模型連線設定。`defaultSystem()` 會為這個客戶端的所有對話預設一個系統提示詞，定義 AI 的角色。'
              ],
              code: {
                language: 'java',
                title: 'ChatController.java 建構子',
                content: '@RestController\npublic class ChatController {\n    private final ChatClient chatClient;\n\n    // 注入 ChatClient.Builder（由 Spring AI 自動配置）\n    public ChatController(ChatClient.Builder chatClientBuilder) {\n        this.chatClient = chatClientBuilder\n            .defaultSystem("你是一個親切的『Antigravity 商城智慧助手』，" +\n                           "請用中文回答使用者問題，並以商城商品與服務為優先範疇。")\n            .build();\n    }\n}'
              }
            },
            {
              title: '模型怎麼選：Groq（免費）vs Muse Spark 1.3 Contributor（成本價）',
              type: 'text',
              paragraphs: [
                '本課程的對話模型提供兩條路，兩者都走 OpenAI 相容介面，所以 Spring AI 程式碼完全相同，只差 `base-url`、`api-key` 與 `model` 三個設定值。上課練習用 Groq，要長時間跑或模型品質要求較高時再換 Muse Spark。'
              ],
              image: 'assets/teaching-site/info-2-1b-model-selection.png',
              imageAlt: '對話模型二選一與向量檢索示意圖',
              imageCaption: '左邊免費高速、右邊成本價但資料會用於訓練；不論選哪個，檢索都交給 Voyage 向量 + rerank 精排。',
              bullets: [
                '<strong>Groq（免費）</strong>：免綁信用卡即可取得 API Key，推論速度極快；免費方案有每分鐘請求數與每日 token 上限，同一 Key 多人共用很容易撞到 429。適合課堂練習。',
                '<strong>Muse Spark 1.3 Contributor（成本價）</strong>：Meta 的模型，Contributor 方案以「同意 Meta 將你的提示詞、程式碼與回應用於訓練未來模型」換取接近成本的價格：輸入 US$0.10 / 百萬 tokens、輸出 US$0.20 / 百萬 tokens（Standard 方案為 1.25 / 4.25）。一整天課程練習的花費通常不到 1 美元。',
                '⚠️ Contributor 方案的資料會被拿去訓練：<strong>不要送入客戶個資、公司機密或正式環境資料</strong>，正式產品請改用 Standard 方案或其他商用模型。',
                '價格與限額以官方頁面為準（本頁整理於 2026-11）：Groq 看 <a href="https://console.groq.com/settings/limits" target="_blank">console.groq.com/settings/limits</a>，Muse Spark 看 <a href="https://dev.meta.ai/docs/pricing-rate-limits" target="_blank">dev.meta.ai/docs/pricing-rate-limits</a>。'
              ]
            },
            {
              title: '註冊與取得 API Key（課前完成）',
              type: 'text',
              paragraphs: [
                '三把金鑰都請在課前申請好，避免上課時卡在信箱驗證。取得後寫進後端專案根目錄的 <code>.env</code>（1-9 章建立 JWT_SECRET 的同一個檔案），<strong>不要寫進 application.yml，.env 也不要推上 Git</strong>。'
              ],
              bullets: [
                '<strong>Groq</strong>：① 開啟 <a href="https://console.groq.com" target="_blank">console.groq.com</a>，用 Google / GitHub 帳號或 Email 登入 ② 左側選單 <code>API Keys</code> → <code>Create API Key</code>，取個名稱（如 learn-spring） ③ 金鑰只顯示一次（<code>gsk_</code> 開頭），立即複製保存。',
                '<strong>Muse Spark（Meta Model API）</strong>：① 開啟 <a href="https://dev.meta.ai" target="_blank">dev.meta.ai</a> 註冊 Model API 帳號並建立團隊 ② 在 Billing 綁定付款方式並儲值少量額度 ③ Dashboard → <code>API keys</code> → <code>Create API key</code> ④ 呼叫時模型名稱使用 <code>muse-spark-1.3-contributor</code> 才會套用 Contributor 價格。部分地區需先開通 Contributor 方案。',
                '<strong>Voyage AI（向量與重排序）</strong>：① 開啟 <a href="https://dash.voyageai.com" target="_blank">dash.voyageai.com</a> 用 Email 或 Google 註冊 ② <code>API Keys</code> → <code>Create new secret key</code>（<code>pa-</code> 開頭） ③ voyage-4 與 rerank-3 每個帳號前 2 億 tokens 免費；未綁付款方式時速率限制很低，建議綁卡以解除限制（不超過免費額度不會扣款）。'
              ],
              code: {
                language: 'text',
                title: '.env — 後端專案根目錄（不要推上 Git）',
                content: '# Spring Boot 透過 application.yml 的 spring.config.import 讀這個檔\n# 對話模型二擇一：Muse Spark 填 meta_ 開頭的金鑰，改用 Groq 填 gsk_ 開頭的金鑰\nMODEL_API_KEY=meta_xxx...\n# 向量與重排序（2-3 章）\nVOYAGE_API_KEY=pa-xxx...\n# JWT 簽章金鑰（1-9 章已建立，至少 32 字元）\nJWT_SECRET=please-change-me-to-a-32-chars-or-longer-secret'
              }
            },
            {
              title: 'Spring AI 模型設定（application.yml）',
              type: 'code',
              paragraphs: [
                'Groq 與 Meta Model API 都提供與 OpenAI 相容的介面，因此沿用 Spring AI 的 OpenAI Starter，只要覆寫 Chat 的 base-url。切換模型時只改 chat 區塊三行，程式碼不用動。以下設定已用 Spring Boot 4 + Spring AI 2.0.2 實際驗證。'
              ],
              bullets: [
                'pom.xml 需用 dependencyManagement 匯入 `spring-ai-bom`（版本 2.0.2，Maven Central 上的最新正式版），Spring AI 的 starter 才有版本',
                'Groq：`base-url: https://api.groq.com/openai/v1`，模型 `openai/gpt-oss-120b`（支援工具呼叫）',
                'Muse Spark：`base-url: https://api.meta.ai/v1`，模型 `muse-spark-1.3-contributor`。它是推理模型，預設推理強度 high 時要先思考 15～20 秒；設 `reasoning-effort: minimal` 後首字約 3～6 秒、帶工具時 3～18 秒（實測）',
                '⚠️ Muse 串流實測：請求<strong>不帶工具</strong>時會逐段輸出；<strong>帶了工具定義</strong>（2-2 章起的客服都會帶）時，Muse 會把整段回答一次送出。所以前端要有等待提示，想要逐字效果請在前端自行做打字機動畫',
                'Embedding：Voyage `voyage-4`，預設輸出 1024 維，pgvector 的 `dimensions` 必須同步設為 1024；重排序 rerank-3 在 2-3 章介紹'
              ],
              code: {
                language: 'yaml',
                title: 'application.yml — Spring AI 模型設定',
                content: 'spring:\n  # 讀取專案根目錄的 .env（1-9 章已加；KEY=值 的格式和 properties 相同）\n  config:\n    import: optional:file:.env[.properties]\n  ai:\n    # Spring AI 2.0 必加：只啟用 Chat，其餘子模型關閉（否則各自要求 api-key，啟動失敗）\n    model:\n      audio:\n        speech: none\n        transcription: none\n      image: none\n      moderation: none\n      # 內建 OpenAI embedding 與 Voyage 不相容（usage 缺 prompt_tokens），2-3 改用自訂 VoyageEmbeddingModel\n      embedding: none\n    openai:\n      chat:\n        # ── 預設：Muse Spark 1.3 Contributor（成本價）──\n        base-url: https://api.meta.ai/v1\n        api-key: ${MODEL_API_KEY:}   # 空預設值：沒有金鑰也能啟動與跑 mvn test（真的提問時才會失敗）\n        model: muse-spark-1.3-contributor   # 2.0.2 起寫在 chat 底下（舊寫法 options.model 已 deprecated）\n        temperature: 0.7\n        # Muse 預設推理強度 high，首字要等 15～20 秒；minimal 約 3～6 秒（contributor 不可設 none）\n        reasoning-effort: minimal\n        # ── 改用 Groq（免費）只換這三個值 ──\n        # base-url: https://api.groq.com/openai/v1\n        # api-key: ${MODEL_API_KEY:}   # 金鑰統一用 .env 裡同一個名稱，切換時不會漏改\n        # model: openai/gpt-oss-120b\n      embedding:\n        # 2-3 的自訂 VoyageEmbeddingModel 讀這裡的設定\n        base-url: https://api.voyageai.com/v1\n        api-key: ${VOYAGE_API_KEY:}   # 預設空值：尚未申請 Voyage 也能啟動（2-3 才用到）\n        model: voyage-4   # 預設 1024 維\n    vectorstore:\n      pgvector:\n        dimensions: 1024    # 必須與 embedding 維度一致\n        initialize-schema: true'
              }
            },
            {
              title: 'MessageChatMemoryAdvisor 對話記憶',
              type: 'code',
              paragraphs: [
                '大模型本身是無狀態的，不記得上一句說什麼。`MessageChatMemoryAdvisor` 會在發送請求前自動帶入歷史訊息，並在回覆後存入記憶；對話 ID（本課程用登入帳號）讓不同使用者的記憶互相隔離。',
                'Spring AI 2.0 會自動設定一個 `ChatMemory` Bean：`MessageWindowChatMemory`（保留最近 20 則）＋`InMemoryChatMemoryRepository`。直接注入使用即可，不必自己寫記憶類別；對話 ID 一律用 `ChatMemory.CONVERSATION_ID` 常數傳入，漏傳會丟例外。'
              ],
              image: 'assets/teaching-site/15-diagram-ai-context-memory.svg',
              imageAlt: 'AI 上下文與對話記憶組成圖',
              imageCaption: '圖中展示了 Advisor 如何自動將系統訊息、對話歷史與當前提問組裝打包發送給 LLM，並於回覆後將最新問答存回記憶庫。',
              code: {
                language: 'java',
                title: 'SSE 串流 + 對話記憶',
                content: '// Spring AI 2.0 自動設定的 ChatMemory（MessageWindowChatMemory，保留最近 20 則）\nprivate final MessageChatMemoryAdvisor memoryAdvisor;\n\npublic ChatController(ChatClient.Builder builder, ChatMemory chatMemory) {\n    // Advisor 建一次即可，所有請求共用\n    this.memoryAdvisor = MessageChatMemoryAdvisor.builder(chatMemory).build();\n    this.chatClient = builder.defaultSystem("你是親切的商城智慧客服……").build();\n}\n\n/** 請求本文 {"message": "..."}：問題放在 POST 本文，不放網址（網址會留在瀏覽器歷史與存取日誌） */\npublic record ChatRequest(String message) {}\n\n@PostMapping(value = "/api/ai/stream", consumes = MediaType.APPLICATION_JSON_VALUE,\n        produces = MediaType.TEXT_EVENT_STREAM_VALUE)\npublic Flux<String> streamChat(@RequestBody ChatRequest request, Principal principal) {\n    String message = request.message();\n    if (message == null || message.isBlank()) {\n        // 只回狀態碼：這個端點 produces text/event-stream，回 JSON 錯誤本文在 Accept: text/event-stream 時會變 500\n        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "問題不可為空白");\n    }\n    String username = principal.getName(); // 以登入帳號當對話 ID，記憶依使用者隔離\n    return this.chatClient.prompt()\n            .user(message)\n            .advisors(this.memoryAdvisor)\n            .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, username))\n            .stream()\n            .content()\n            .concatWith(Flux.just("[DONE]")); // 結束標記：前端收到後停止讀取串流\n\n// 想讓記憶重啟後仍在：加入 spring-ai-starter-model-chat-memory-repository-jdbc，\n// 自動設定會改用 JdbcChatMemoryRepository（PostgreSQL），程式碼完全不用改；\n// 用 Flyway 管 Schema 時設 spring.ai.chat.memory.repository.jdbc.initialize-schema: never 並自建 SPRING_AI_CHAT_MEMORY 表\n}'
              }
            },
            {
              title: 'ChatClient 與 Advisor 深入解析',
              type: 'text',
              paragraphs: [
                '本節為您整理 ChatClient 與 Advisor 的關鍵配置與內建元件說明，幫助您深入理解架構：',
                '<div style="margin-top: 16px;">' +
                  '<strong style="color: var(--primary-color); display: block; margin-bottom: 8px;">1. ChatClient.Builder 常用預設設定：</strong>' +
                  '<ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 16px; line-height: 1.8;">' +
                    '<li style="margin-bottom: 6px;"><code>defaultSystem(String)</code>：設定預設的系統提示詞，定義 AI 角色與回覆風格（如親切的智慧助手）。</li>' +
                    '<li style="margin-bottom: 6px;"><code>defaultUser(String)</code>：設定預設的使用者輸入提示詞。</li>' +
                    '<li style="margin-bottom: 6px;"><code>defaultOptions(ChatOptions)</code>：設定預設的對話參數，例如溫度值（temperature）、使用的模型等。</li>' +
                    '<li style="margin-bottom: 6px;"><code>defaultAdvisors(Advisor...)</code>：設定預設的攔截增強器，例如記憶元件（MessageChatMemoryAdvisor）或 RAG 元件（QuestionAnswerAdvisor），使所有對話自動啟用該功能。</li>' +
                    '<li style="margin-bottom: 6px;"><code>defaultTools(Object...)</code> / <code>defaultToolCallbacks(ToolCallback...)</code>：設定預設啟用的工具物件或回呼。</li>' +
                  '</ul>' +
                '</div>',
                '<div style="margin-top: 16px;">' +
                  '<strong style="color: var(--primary-color); display: block; margin-bottom: 8px;">2. Spring AI 最新的內建 Advisor：</strong>' +
                  '<ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 16px; line-height: 1.8;">' +
                    '<li style="margin-bottom: 6px;"><code>MessageChatMemoryAdvisor</code>：最常用的對話記憶 Advisor，負責自動讀取指定對話 ID 的對話歷史並注入上下文，且在回答後自動將新問答存回記憶庫。</li>' +
                    '<li style="margin-bottom: 6px;"><code>PromptChatMemoryAdvisor</code>：<strong>2.0 已移除</strong>，舊專案升級時改用 <code>MessageChatMemoryAdvisor</code>（Builder 用法相同）。</li>' +
                    '<li style="margin-bottom: 6px;"><code>QuestionAnswerAdvisor</code>：RAG 檢索增強生成 Advisor，自動將使用者提問向量化並至 VectorStore 檢索相關知識片段，作為上下文注入 Prompt 以降低幻覺。</li>' +
                    '<li style="margin-bottom: 6px;"><code>SimpleLoggerAdvisor</code>：日誌記錄 Advisor，在調試時可自動將完整 Prompt、參數配置與模型回應印出至 Log。</li>' +
                    '<li style="margin-bottom: 6px;"><code>VectorStoreChatMemoryAdvisor</code>：把對話存進向量資料庫，每次依語意撈出相關的舊對話，以純文字附加到系統訊息。這就是「RAG 記憶」，2-6 章會手動實作同樣的概念。</li>' +
                    '<li style="margin-bottom: 6px;"><code>SafeGuardAdvisor</code>：內容安全防護 Advisor，用於在發送給 LLM 前或回應給用戶前，攔截與過濾敏感詞或不當發言。</li>' +
                  '</ul>' +
                '</div>'
              ]
            },
            {
              title: '兩種記憶怎麼分：短期對話記憶 vs RAG 長期記憶',
              type: 'text',
              paragraphs: [
                '本課程會用到兩種「記憶」，名字很像但解決的問題不同。本章做的是<strong>短期對話記憶</strong>，2-6 章做的是 <strong>RAG 長期記憶</strong>，實務上兩者通常一起用。'
              ],
              bullets: [
                '<strong>短期對話記憶（ChatMemory，本章）</strong>：把<strong>最近 N 則</strong>訊息原封不動放回 Prompt，讓 AI 接得上上一句。用 <code>MessageWindowChatMemory</code> + <code>MessageChatMemoryAdvisor</code>，依對話 ID 隔離。預設存記憶體，重啟就消失；換成 JDBC Repository 可持久化。超過視窗的舊訊息會被丟掉。',
                '<strong>RAG 長期記憶（向量庫，2-6 章）</strong>：把每輪問答<strong>向量化</strong>存進 pgvector，提問時依<strong>語意相似度</strong>撈出幾則相關舊對話當參考資料。可以記得幾週前說過的偏好，但只撈「相關的」，不保證順序與完整。官方對應元件是 <code>VectorStoreChatMemoryAdvisor</code>。',
                '<strong>怎麼選</strong>：要「接得上話」用短期記憶；要「記得使用者是誰、喜歡什麼」用 RAG 記憶。成本上短期記憶每次都整段送出（token 隨視窗變大），RAG 記憶只送撈到的幾則。',
                '<strong>和工具呼叫的關係（2.0 新行為）</strong>：<code>MessageChatMemoryAdvisor</code> 預設位在工具呼叫迴圈<strong>外側</strong>，只保存最終的提問與回答，不保存「呼叫工具 / 工具結果」這些中間訊息。這是 2.0 修正的重點：M8 時期視窗截斷會切開工具訊息，模型回 400。',
                '<strong>Chat Memory ≠ Chat History</strong>：官方文件刻意區分兩者。Memory 是「給模型看的上下文」，可以裁切；History 是「完整的對話紀錄」，要稽核或顯示歷史時請另外存資料庫。'
              ]
            },
            {
              title: '串流回應骨架',
              type: 'code',
              code: {
                language: 'java',
                title: 'ChatClient 鏈式呼叫示意',
                content: 'return chatClient.prompt()\n    .user(message)\n    .advisors(memoryAdvisor)\n    .stream()\n    .content();'
              }
            },
            {
              title: 'AI Agent 提示詞 — 建立 ChatClient 對話入口',
              type: 'code',
              paragraphs: [
                '理解上述原理後，複製以下提示詞給 AI Agent，引導它在 Day 1 完成的電商後端上，加入本章的 AI 對話與串流功能。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞',
                content: '幫我在商城加上 AI 客服對話功能，用 Spring AI 2.0.2，模型用 Muse Spark（OpenAI 相容 API，base-url 是 https://api.meta.ai/v1，模型 muse-spark-1.3-contributor），金鑰放在 .env 的 MODEL_API_KEY。\n- 做一個串流 API：POST /api/ai/stream，問題放在 JSON 本文，要登入才能用\n- 客服只能根據查到的資料回答，查不到就說不知道\n- 要記得同一個使用者剛剛聊過什麼\n有不清楚的地方先問我，做完教我用 PowerShell 測試串流。'
              }
            },
            {
              title: '驗證串流：PowerShell 7 與 curl.exe',
              type: 'code',
              paragraphs: [
                'AI 做完、後端啟動後，在 PowerShell 7 執行下面兩行。問題經管線交給 <code>curl.exe</code>，不要直接寫在引數裡（原因見本章「AI 開發建議」）；<code>Invoke-RestMethod</code> 會整包緩衝，看不出串流。'
              ],
              code: {
                language: 'powershell',
                title: 'PowerShell 7 — 驗證 AI 串流',
                content: '# 完成後請用 PowerShell 7 驗證串流（JSON 用單引號包住，PowerShell 7 不需要另外加反斜線跳脫）\n# 1. 先登入 user 取得 Token\n$token = (Invoke-RestMethod -Method Post -Uri http://localhost:8080/api/auth/login -ContentType \'application/json\' -Body \'{"username":"user","password":"user123"}\').token\n# 2. 問題放 JSON 本文、經管線送出；-N 關閉緩衝才看得到逐段輸出\n\'{"message":"你好，你是誰？"}\' | curl.exe -N -X POST http://localhost:8080/api/ai/stream -H "Authorization: Bearer $token" -H "Content-Type: application/json" --data-binary \'@-\'\n# 預期：回覆分成多筆 data: 陸續出現，結尾有 data:[DONE]\n# 再用同一個帳號問「我剛剛問了什麼？」，確認短期記憶有效'
              }
            },
            {
              title: 'Spring Boot 啟動驗證範例',
              type: 'code',
              paragraphs: [
                '進入 Day 2 前，應用必須已經能穩定啟動。這裡的驗證重點不是只看到 Tomcat 起來，而是 Flyway 已成功套用，Spring Boot 也完成啟動。'
              ],
              bullets: [
                '最低需求：資料庫容器已先啟動',
                '最低需求：後端專案根目錄的 `.env` 已填好 API Key',
                '最低需求：JDK 21 與 Maven 3.9+ 已完成驗證'
              ],
              code: {
                language: 'text',
                title: '可接受的啟動日誌範例',
                content: 'PS D:\\GitHub\\learn-spring> mvn spring-boot:run\n...\nFlyway Community Edition 10.x by Redgate\nSuccessfully validated 3 migrations\nCurrent version of schema "public": 3\nTomcat started on port 8080 (http) with context path "/"\nStarted ShopApplication in 8.532 seconds'
              }
            },
            {
              title: '啟動日誌判讀方式',
              type: 'text',
              bullets: [
                '必須同時看到 `Successfully validated` 或 `Successfully applied` 類似 Flyway 訊息（到這一章已有 1-3、1-4、1-9 的 V1～V3，共 3 個版本）',
                '必須看到 `Tomcat started on port 8080` 或等效埠號資訊',
                '必須看到 `Started ShopApplication` 才算完整啟動（主類別名稱依你的專案而定，以 Spring Initializr 產生的名稱為準）',
                '若停在 DataSource、Flyway 或 API Key 相關錯誤，先回頭確認環境與設定，而不是直接進行 Day 2 測試'
              ]
            },
            {
              title: '常見錯誤與排查',
              type: 'warning',
              bullets: [
                '啟動時卡在 API Key 相關錯誤，先確認 `.env` 放在後端專案根目錄，而且 application.yml 有 `spring.config.import` 那行',
                '若 Flyway 報資料庫連線失敗，先確認資料庫容器是否還在 `Up` 狀態',
                '若 8080 埠被占用，可先關閉既有應用或調整 Spring Boot 埠號',
                '若只看到編譯錯誤而不是 Spring 日誌，先回頭處理 Java 或 Maven 環境'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ 中文問題不要放在 curl.exe 的引數裡</strong>：繁中 Windows 的 <code>curl.exe</code> 會把引數以 CP950 送出，用 <code>-d</code> 直接帶中文 JSON，後端回 400，只看狀態碼看不出和編碼有關（後端日誌是 Invalid UTF-8 start byte），兩輪演練都踩到。驗證指令把 JSON 經管線交給 <code>--data-binary \'@-\'</code>（PowerShell 7 以 UTF-8 送出）就是為此而寫；AI 想簡化成 <code>-d</code> 直接帶中文，或改用加反斜線跳脫雙引號的寫法（PowerShell 7.3 起反斜線會原樣送出）時，不要接受。',
                '<strong>⚠ 金鑰放 .env，AI 不必看到值</strong>：.env 由你建立在後端專案根目錄，Spring Boot 啟動時自己讀（靠 application.yml 的 <code>spring.config.import</code>），AI 在哪個終端機啟動後端都讀得到。請 AI 不要印出或改寫 .env；需要確認時只回報「有沒有這個 key」。yml 寫成 <code>${MODEL_API_KEY:}</code> 只保證沒有金鑰也能啟動，真的提問時仍要有金鑰。',
                '<strong>⚠ 不要讓 AI 自己寫記憶類別</strong>：Spring AI 2.0 已自動設定 ChatMemory；第一輪演練用里程碑版時還得自寫包裝類別，AI 看過舊資料就可能照做。請它直接注入自動設定的 ChatMemory，驗證時同一帳號連問 8 次，確認沒有 400 或 500（第二輪演練 8 次都是 200）。',
                '<strong>⚠ AI 對 Spring AI 2.0 的知識可能過時</strong>：它常給 1.x 或里程碑版的類別名稱與設定鍵（2.0.2 已把 <code>chat.options.model</code> 標為 deprecated）。請它以 pom.xml 的實際版本為準，用 context7 查最新文件，不要憑印象。',
                '<strong>串流要看原始輸出</strong>：用 <code>curl.exe -N</code> 看原始的 <code>data:</code> 行，才看得出是否逐段輸出、有沒有 <code>[DONE]</code>、開頭空白有沒有被吃掉。第二輪演練的「有3 筆訂單」黏字就是從原始串流查出來的，修法是把片段開頭的空白換成不換行空白（U+00A0），並在串流結尾多送一則 [DONE] 結束標記。',
                '<strong>慢不一定是壞了</strong>：Muse 是推理模型，演練實測首字約 3～6 秒、帶工具 3～18 秒。AI 看到慢就想調逾時或換模型時，先請它量出首字時間並對照這個範圍，再決定要不要改。'
              ]
            }
          ]
        },
        {
          id: 'd2-u2',
          chapter: '2-2',
          title: '工具呼叫',
          summary: '讓模型透過工具呼叫查詢即時資料或呼叫外部 API，而不是只依賴語料記憶作答。',
          source: 'docs/Day2-2-Function-Calling.md',
          heroImage: 'assets/teaching-site/06-ch06-tool-calling-jpa.png',
          diagramImage: 'assets/diagrams/d2-u2.png',
          diagramCaption: 'AI 將需求派送到對應工具，工具再向 Service / Repository 取得即時資料。',
          goals: [
            '理解 Tool Calling 與 Function Calling 的實際用途',
            '分辨 `@Tool` 與 `ToolCallback` 的使用場景',
            '掌握 AI 查詢資料庫的安全責任邊界',
            '為工具做風險分級：查詢與可逆操作直接執行，結帳與取消訂單採後端強制的「先詢問、下一則訊息確認才執行」，明確的同意與拒絕由程式直接判斷、不交給模型'
          ],
          tasks: [
            { id: 'd2-u2-t1', text: '辨識可抽成工具的方法' },
            { id: 'd2-u2-t2', text: '整理 `@Tool` 與 `ToolCallback` 差異' },
            { id: 'd2-u2-t3', text: '以 user 登入，讓 AI 客服正確回答庫存與「我的訂單」問題（日誌可見工具呼叫）' },
            { id: 'd2-u2-t4', text: '用 TDD 加入 CartTools、擴充 OrderTools 與 PendingActionService，PendingActionServiceTest 涵蓋同一輪確認被拒、拒絕後作廢、購物車變動、逾時；再用 TDD 加入程式層確認（ConfirmationPhrases、DirectConfirmationHandler），ChatConfirmationApiTest 驗證回「確定」「不要」時不呼叫模型' },
            { id: 'd2-u2-t5', text: '以 user 實際對話「幫我結帳 → 確定」與「幫我結帳 → 不要」，從日誌確認這兩則回覆都由 [程式層確認] 直接處理，沒有呼叫模型與 confirmPendingAction' }
          ],
          sections: [
            {
              title: '工具呼叫的真正價值',
              type: 'text',
              paragraphs: [
                '工具呼叫的本質，不是讓模型變強，而是讓模型不必假裝自己知道即時資料。它可以把需要查詢、計算或呼叫外部服務的工作交給可控工具處理。',
                '對企業系統來說，這一點非常重要，因為真正的業務資料往往存在資料庫、內部 API 或受權限控制的服務中。'
              ],
              image: 'assets/teaching-site/16-diagram-tool-calling-dispatch.png',
              imageAlt: '工具呼叫派工流程圖',
              imageCaption: '模型負責理解意圖，工具負責執行可驗證的動作。'
            },
            {
              title: '@Tool 與 ToolCallback 的使用邏輯',
              type: 'text',
              bullets: [
                '`@Tool` 適合你自己在專案內部封裝的功能',
                '`ToolCallback` 適合掛接外部或唯讀工具',
                '無論是哪一種，都應該透過既有 Service 邏輯取得資料',
                '不要讓模型直接碰資料庫連線或繞過商業規則'
              ]
            },
            {
              title: 'ProductTools.java 完整範例',
              type: 'code',
              paragraphs: [
                '`@Tool` 的 `description` 欄位是寫給大模型看的，模型靠這段文字判斷「何時」要呼叫這個工具。描述越精確，模型的判斷就越準確。'
              ],
              code: {
                language: 'java',
                title: 'ProductTools.java',
                content: '@Component\npublic class ProductTools {\n    private final ProductService productService;\n\n    public ProductTools(ProductService productService) {\n        this.productService = productService;\n    }\n\n    /**\n     * 搜尋商品列表或取得全部商品\n     * @param query 搜尋關鍵字，傳空字串代表取全部\n     */\n    @Tool(description = "查詢商品列表。使用者詢問有哪些商品，或要找特定商品時呼叫此方法。" +\n                        "參數 query 為搜尋關鍵字，可為空值。")\n    public List<Product> getProducts(String query) {\n        if (query == null || query.trim().isEmpty()) {\n            return productService.getAllProducts();\n        }\n        return productService.searchProductsByName(query);\n    }\n\n    /**\n     * 取得指定 ID 商品的詳細資訊（庫存、價格）\n     */\n    @Tool(description = "依商品 ID 查詢庫存與詳細資訊。使用者詢問特定商品庫存或價格時呼叫。")\n    public Optional<Product> getProductDetail(\n            @ToolParam(description = "商品的唯一識別碼") Long id) {\n        return productService.getProductById(id);\n    }\n}'
              }
            },
            {
              title: '@Tool vs ToolCallback 選型原則',
              type: 'text',
              paragraphs: [
                '工具呼叫有兩種宣告方式，選擇依據是你是否有原始碼的修改權限。'
              ],
              bullets: [
                '`@Tool` — 自己開發的業務方法，直接在方法上標註，最簡單',
                '`MethodToolCallback` — 第三方 JAR（無法加註解），用反射包裝現有方法',
                '`FunctionToolCallback` — 需要客製化邏輯的外部工具，用 Lambda + DTO 封裝',
                '無論哪種方式，都應透過 Service 層取得資料，不讓模型直接碰資料庫連線'
              ]
            },
            {
              title: 'MethodToolCallback 包裝第三方工具',
              type: 'code',
              paragraphs: [
                '當需要把第三方 JAR 的方法暴露給模型時，使用 `MethodToolCallback` 通過反射包裝，不需修改原始碼。'
              ],
              code: {
                language: 'java',
                title: 'ProgrammaticToolConfig.java — 反射包裝第三方服務',
                content: '@Configuration\npublic class ProgrammaticToolConfig {\n\n    @Bean\n    public ToolCallback thirdPartyWeatherTool() {\n        ThirdPartyWeatherService weatherService = new ThirdPartyWeatherService();\n\n        // 用反射找到目標方法\n        Method method = ReflectionUtils.findMethod(\n            ThirdPartyWeatherService.class, "getRealtimeWeather", String.class);\n\n        return MethodToolCallback.builder()\n            .toolDefinition(ToolDefinitions.builder(method)\n                .description("查詢指定城市的即時天氣。參數 city 為城市名稱，例如：台北、東京。")\n                .build())\n            .toolMethod(method)\n            .toolObject(weatherService)   // 執行方法的目標物件\n            .build();\n    }\n}'
              }
            },
            {
              title: 'FunctionToolCallback 包裝 Lambda 邏輯',
              type: 'code',
              paragraphs: [
                '當需要對第三方呼叫加入額外轉換邏輯時，使用 `FunctionToolCallback` 搭配 Record DTO，透過 Lambda 包裝業務邏輯。'
              ],
              code: {
                language: 'java',
                title: 'ProgrammaticToolConfig.java — Lambda 封裝運費查詢',
                content: '// 宣告 Request / Response DTO\npublic record ShippingRequest(\n    @JsonPropertyDescription("寄送目的地城市，例如 \'台北\', \'花蓮\'") String destination\n) {}\n\npublic record ShippingResponse(double fee, String estimatedDays) {}\n\n@Bean\npublic ToolCallback shippingFeeTool() {\n    return FunctionToolCallback\n        .builder("queryShippingFee", (ShippingRequest req) -> {\n            String dest = req.destination() != null ? req.destination() : "";\n            if (dest.contains("花蓮") || dest.contains("離島")) {\n                return new ShippingResponse(150.0, "3-5天");\n            }\n            return new ShippingResponse(80.0, "1-2天");\n        })\n        .description("查詢寄送到指定目的地的運費與預估天數。")\n        .inputType(ShippingRequest.class)\n        .build();\n}'
              }
            },
            {
              title: '工具方法範例',
              type: 'code',
              code: {
                language: 'java',
                title: '@Tool 方法示意',
                content: '@Tool(description = "查詢商品庫存與價格")\npublic String queryProduct(String name) {\n    return productService.findProductSummary(name);\n}'
              }
            },
            {
              title: 'AI Agent 提示詞 — 加入工具呼叫能力',
              type: 'code',
              paragraphs: [
                '理解工具呼叫原理與兩種宣告方式後，複製以下提示詞給 AI Agent，讓它把 Day 1 寫好的 Service 包裝成 AI 可呼叫的工具，AI 就能查到資料庫的即時資料。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞',
                content: '幫 AI 客服加上工具呼叫，讓它能查資料庫的即時資料：\n- 查商品的庫存、價格和說明\n- 查目前登入者自己的訂單；查誰要由登入資訊決定，不能讓 AI 決定\n工具被呼叫時在日誌印出 [工具呼叫] 和方法名稱。做完用這三句測試，並從後端日誌確認工具真的有被呼叫：\n「無線耳機 Pro 還有多少庫存？」「我的訂單出貨了嗎？」「有沒有缺貨的商品？」\n有不清楚的地方先問我。'
              }
            },
            {
              title: '工具呼叫驗證範例',
              type: 'code',
              paragraphs: [
                '這一章的成功標準，不是模型有回話而已，而是模型確實在回答過程中呼叫了工具，並帶回即時資料。'
              ],
              image: 'assets/teaching-site/20-diagram-tool-calling-sequence.svg',
              imageAlt: '工具呼叫五步驟時序圖',
              imageCaption: '對照這張時序圖驗證：後端日誌要看得到步驟 3 的工具呼叫，回答要帶回步驟 4 的即時數字。',
              code: {
                language: 'text',
                title: '可接受的驗證情境',
                content: '使用者提問：無線降噪耳機 Pro 的庫存與價格是多少？\n\n預期現象：\n1. 前端收到 AI 回覆\n2. 後端日誌出現工具方法被呼叫的紀錄\n3. 回覆內容包含資料庫中的即時價格與庫存，而不是籠統描述'
              },
              bullets: [
                '若 AI 只給泛泛答案、沒有查到即時數字，通常表示工具沒有被掛載成功',
                '若工具有被呼叫但回覆異常，應回頭檢查 Service / Repository 查詢結果',
                '驗證時要同時看前端回答內容與後端工具呼叫日誌'
              ]
            },
            {
              title: '購物車與訂單工具：工具的風險分級',
              type: 'text',
              paragraphs: [
                '1-9 章做好了購物車與訂單 API，現在把它們包成 AI 工具，讓客服能回答「我的購物車有什麼？」「上一筆訂單到哪了？」，也能幫使用者加入購物車、結帳、取消訂單。但不是每個工具都該讓 AI 直接執行——<strong>先依風險分級</strong>：',
                '帳號一樣由後端經 <code>toolContext</code> 傳入（2-2 前半已示範），模型無法指定要操作誰的購物車。'
              ],
              bullets: [
                '<strong>查詢（直接執行）</strong>：<code>getMyCart()</code>、<code>getMyOrders()</code>（含明細）、<code>getOrderDetail(orderNo)</code>（只能查自己的）。',
                '<strong>可逆操作（直接執行）</strong>：<code>addToCart(productName, quantity)</code>、<code>removeFromCart(productName)</code>——使用者看得到、隨時能移除。名稱符合多個商品時回候選清單，請使用者指明，不讓模型自己挑。',
                '<strong>動到錢與庫存（先詢問、再執行）</strong>：<code>prepareCheckout()</code>、<code>prepareCancelOrder(orderNo)</code> 只產生「待確認動作」並回傳摘要；使用者在<strong>下一則訊息</strong>明確同意後才真的執行。明確的同意詞（確定、好、可以…）由後端程式直接執行，不交給模型；<code>confirmPendingAction()</code> 保留為備援，只在使用者用詞表以外的說法同意時由模型呼叫。',
                '<strong>不給 AI 的工具：出貨</strong>。工具以後端身分執行、<strong>工具本身沒有角色</strong>——1-9 章的 URL 規則與 @PreAuthorize 保護的是 HTTP 端點，工具直接呼叫 Service 就繞過了。給客服 AI 一個出貨工具，等於任何登入的使用者都能說「幫我出貨」。管理員操作留在需要 ADMIN 的 API 與訂單管理頁。',
                '所有業務錯誤（庫存不足、找不到商品、已出貨不能取消）都轉成中文文字回給模型，不丟例外——模型讀得懂原因，才能照實轉告使用者。'
              ]
            },
            {
              title: '先詢問、下一則訊息確認才執行：為什麼不能只靠提示詞',
              type: 'code',
              paragraphs: [
                '這一節是「<strong>不可逆的操作不能只靠模型</strong>」的實例。「先問再執行」有三種做法，越後面越不依賴模型；後兩種課前都用真實模型實測過：',
                '<strong>第一種：只靠提示詞</strong>。系統提示詞寫「結帳前要先問使用者」。但模型可能在<strong>同一輪</strong>就自己呼叫確認工具（它覺得使用者說「幫我結帳」就是同意了），提示詞沒有任何強制力，擋不住就會直接誤結帳——所以參考實作一開始就沒有採用這種做法。',
                '<strong>第二種：工具層武裝／作廢</strong>。<code>PendingActionService</code> 用「請求」當回合邊界（規則見下方），模型無論怎麼呼叫，都無法在使用者回話之前執行——<strong>誤執行被擋住了</strong>。但使用者回「確定」之後要不要呼叫 <code>confirmPendingAction</code>，仍由模型決定：實測模型常常重新呼叫 prepareCheckout、列出摘要再問一次，<strong>8 次只有 4 次真的結帳（約 50%）</strong>。錯在安全的那一邊，但使用者說了確定卻沒結帳，功能一樣是壞的。',
                '<strong>第三種：程式層直接執行</strong>。使用者的回覆若「完全等於」詞表內的同意詞或拒絕詞，後端在呼叫模型<strong>之前</strong>就直接執行或作廢，模型根本不參與（下一節）。實測「確定」5/5、「不要」5/5 都正確，<code>confirmPendingAction</code> 被呼叫 0 次。',
                '結論：<strong>「有沒有執行」不能取決於模型當下的判斷</strong>。模型負責理解需求、產生摘要；「使用者這句話算不算同意」只要有明確答案，就交給可以寫單元測試的程式。',
                '第二種的 <code>PendingActionService</code> 規則，第三種完全沿用：每個聊天請求在呼叫模型前產生唯一的 <code>requestId</code> 並呼叫 <code>onNewRequest</code>；待確認動作只對「建立它之後的<strong>下一則</strong>使用者訊息」有效。'
              ],
              bullets: [
                '<strong>建立</strong>：<code>prepareCheckout</code> 記錄帳號、動作類型、購物車快照（商品、數量、單價、總金額）、建立它的 requestId，5 分鐘到期；每個帳號只留最新一筆。',
                '<strong>武裝</strong>：使用者送出下一則訊息時，<code>onNewRequest</code> 把待確認動作「武裝」給這個新請求——只有這個請求可以確認。',
                '<strong>作廢</strong>：使用者明確拒絕時當下作廢；已武裝的動作沒被確認、使用者又送了一則訊息（例如改問別的事），也作廢。',
                '<strong>確認</strong>：<code>confirm</code> 只在「武裝的請求 ＝ 目前請求」且未到期時執行；同一個請求內建立又確認 → 拒絕。執行前再檢查一次：購物車和快照不同（使用者確認前又改了購物車）→ 拒絕並請重新確認；要取消的訂單已不是 PENDING → 拒絕。',
                '這是「由後端保證的回合邊界與時效」。第三種的程式層確認呼叫的是同一個服務（<code>confirmWithOutcome</code>），上面這些檢查一項都沒有少；它只是把「這句話算不算同意」從模型手上拿走。',
                '全部規則都在 service 層寫單元測試驗證（同一輪確認、回「不要」後確認、改問別的事後確認、購物車變動後確認、逾時），不靠模型行為來測。'
              ],
              code: {
                language: 'java',
                title: 'PendingActionService.java — 回合邊界的核心（參考實作節錄）',
                content: '/**\n * 每個新聊天請求開始時（呼叫模型之前）呼叫：\n * 有待確認動作且尚未武裝、也不是本請求建立的 -> 武裝給本請求（使用者的「下一則訊息」）；\n * 已經武裝過（使用者又送了一則訊息卻沒確認）-> 作廢。\n */\npublic synchronized void onNewRequest(String username, String requestId) {\n    PendingAction action = pending.get(username);\n    if (action == null || requestId.equals(action.createdRequestId)) {\n        return;\n    }\n    if (action.armedRequestId == null) {\n        action.armedRequestId = requestId;                 // 武裝\n    } else if (!requestId.equals(action.armedRequestId)) {\n        pending.remove(username);                          // 作廢\n    }\n}\n\n/** 確認並執行：只有被武裝的那個請求、且未到期，才會執行；拒絕時回傳中文說明給模型 */\npublic String confirm(String username, String requestId) {\n    PendingAction action;\n    synchronized (this) {\n        action = pending.get(username);\n        if (action == null) {\n            return "目前沒有待確認的動作（可能已被使用者拒絕、已執行或已作廢）。";\n        }\n        if (clock.instant().isAfter(action.expiresAt)) {\n            pending.remove(username);\n            return "待確認的動作已逾時（超過 5 分鐘），已作廢。";\n        }\n        if (!requestId.equals(action.armedRequestId)) {\n            return "拒絕執行：不能在建立待確認動作的同一則訊息內確認。";\n        }\n        pending.remove(username, action);                  // 先取出再執行，同一筆不會被重複執行\n    }\n    return action.type == ActionType.CHECKOUT ? executeCheckout(username, action)  // 先比對購物車快照\n            : executeCancel(username, action);                                  // 先確認仍是 PENDING\n}'
              }
            },
            {
              title: '程式層確認：明確的同意與拒絕由後端直接處理',
              type: 'code',
              paragraphs: [
                'ChatController 在 <code>onNewRequest</code> 之後、呼叫模型之前，先把訊息交給 <code>DirectConfirmationHandler.tryHandle</code>。它只在一種情況出手：該帳號有「<strong>已武裝給本請求</strong>」的待確認動作（也就是使用者看完摘要後的下一則訊息），而且訊息是明確的同意詞或拒絕詞。其他情況回傳 empty，照常交給模型。',
                '比對規則在 <code>ConfirmationPhrases</code>：訊息先正規化（Unicode NFKC 統一全半形、轉小寫、去掉所有空白與標點），再和詞表<strong>完全相等</strong>比對，不做「包含」或「開頭是」的比對。所以「確定！」「 確定 」「ＯＫ」都算同意；「不確定」「確定不要」「好的，順便幫我查庫存」都不在詞表裡，交給模型處理。誤判成同意會直接動到錢與庫存，<strong>寧可漏判交給模型，也不能把含否定或其他要求的句子當成同意</strong>。'
              ],
              bullets: [
                '<strong>同意</strong>（確定、確認、好、可以、沒問題、是、ok、yes…）：呼叫 <code>PendingActionService.confirmWithOutcome</code> 執行，回固定格式「已完成結帳，訂單編號 ORD-…，總金額 … 元。購物車已清空。」。同意不等於一定成功：購物車在確認前變動、逾時、庫存不足、訂單已出貨時，一樣不呼叫模型，回「沒有執行：」加上原因。',
                '<strong>拒絕</strong>（不要、不用、算了、先不要、不要結帳、我再想想、no…）：作廢待確認動作，回「好的，沒有執行。」。單獨的「取消」也算拒絕：待確認的是取消訂單時，只回「取消」語意不明，保守起見不執行，要取消請回「確定取消」。',
                '<strong>動作種類綁定</strong>：「確定請結帳」只對待確認的結帳算同意，「確定取消」只對待確認的取消訂單算同意；種類不符時不執行並作廢，回「好的，沒有執行。」。',
                '<strong>其他訊息</strong>：交給模型，待確認動作在這個請求內仍維持武裝；模型判斷使用者用了詞表以外的說法同意時，可以呼叫備援工具 <code>confirmPendingAction</code>，後端的檢查完全相同。使用者再送下一則訊息時，沒被確認的動作就作廢。',
                '<strong>寫入記憶</strong>：直接處理的這一輪沒有經過模型，<code>MessageChatMemoryAdvisor</code> 不會幫忙記，要自己把「使用者訊息＋回覆」寫入短期記憶（<code>ChatMemory.add</code>，對話 ID 同樣用帳號）。同意、拒絕、被拒絕的執行（例如購物車已變動）都要寫，否則下一輪模型不知道已經結帳或沒有執行，可能重新 prepare。完成 2-6 長期記憶之後，這裡也要用同一個 ChatHistoryService 寫入長期記憶。寫入失敗只記錄警告，不影響已完成的結果。',
                '<strong>SSE 格式不變</strong>：直接處理時回傳 <code>Flux.just(回覆, "[DONE]")</code>，前端收到的一樣是 <code>data:回覆</code>、<code>data:[DONE]</code>，不需要修改。後端日誌印 <code>[程式層確認] 同意</code>／<code>[程式層確認] 拒絕</code>，示範時用它確認這一輪沒有經過模型。'
              ],
              code: {
                language: 'java',
                title: 'ConfirmationPhrases.java 與 DirectConfirmationHandler.java（參考實作節錄）',
                content: '// ===== ConfirmationPhrases.java：詞表（正規化後的形式）與完全相等比對 =====\n/** 通用同意詞 */\nstatic final Set<String> AGREE_WORDS = Set.of(\n        "確定", "確認", "確定執行", "確認執行",\n        "好", "好的", "好啊", "好喔",\n        "可以", "可以啊", "可以的", "沒問題", "沒問題的",\n        "是", "是的", "對", "對的",\n        "ok", "okay", "yes", "yep", "sure", "y");\n\n/** 帶「結帳」意思的同意詞：待確認動作不是結帳時不能當同意 */\nstatic final Set<String> AGREE_CHECKOUT_WORDS = Set.of(\n        "確定結帳", "確定請結帳", "確定要結帳", "確認結帳", "確認請結帳", "請結帳");\n\n/** 帶「取消訂單」意思的同意詞：待確認動作不是取消訂單時不能當同意 */\nstatic final Set<String> AGREE_CANCEL_WORDS = Set.of(\n        "確定取消", "確定要取消", "確認取消", "確定取消訂單", "確定要取消訂單", "確認取消訂單");\n\n/**\n * 明確拒絕詞（含猶豫、要再想想這類不該執行的說法）。\n * 「取消」單獨出現一律視為拒絕：待確認的是取消訂單時，使用者單回「取消」語意不明，\n * 保守起見不執行（使用者可以回「確定取消」）。\n */\nstatic final Set<String> REJECT_WORDS = Set.of(\n        "不要", "不要了", "不用", "不用了", "不必", "不了", "不", "不行", "不可以", "不好", "否",\n        "算了", "先不要", "先不用", "先不", "取消",\n        "不要結帳", "不結帳", "先不結帳", "不要取消", "不取消", "先不取消",\n        "不要我再想想", "不要我再想一想", "我再想想", "我再想一想", "再想想", "我再考慮一下", "再考慮一下",\n        "no", "nope", "n");\n\n/**\n * 正規化訊息：NFKC（全形轉半形）、轉小寫、移除所有非文字非數字的字元（空白、標點、符號、表情）。\n *\n * @param message 使用者原始訊息；null 視為空字串\n * @return 正規化後的字串，可能是空字串\n */\npublic static String normalize(String message) {\n    if (message == null) {\n        return "";\n    }\n    String folded = Normalizer.normalize(message, Normalizer.Form.NFKC).toLowerCase(Locale.ROOT);\n    return folded.replaceAll("[^\\\\p{L}\\\\p{N}]", "");\n}\n\n/**\n * 判斷使用者訊息的意圖。拒絕詞優先於同意詞（兩個詞表沒有交集，只是明確表達優先順序）。\n *\n * @param message 使用者原始訊息\n * @return 意圖；不在詞表內一律是 OTHER\n */\npublic static Intent classify(String message) {\n    String n = normalize(message);\n    if (n.isEmpty()) {\n        return Intent.OTHER;\n    }\n    if (REJECT_WORDS.contains(n)) {\n        return Intent.REJECT;\n    }\n    if (AGREE_CHECKOUT_WORDS.contains(n)) {\n        return Intent.AGREE_CHECKOUT;\n    }\n    if (AGREE_CANCEL_WORDS.contains(n)) {\n        return Intent.AGREE_CANCEL;\n    }\n    if (AGREE_WORDS.contains(n)) {\n        return Intent.AGREE;\n    }\n    return Intent.OTHER;\n}\n\n// ===== DirectConfirmationHandler.java：只處理「已武裝給本請求」的待確認動作 =====\npublic Optional<String> tryHandle(String username, String requestId, String message) {\n    Optional<ActionType> armed = pendingActionService.armedActionType(username, requestId);\n    if (armed.isEmpty()) {\n        return Optional.empty();\n    }\n    Intent intent = ConfirmationPhrases.classify(message);\n    if (intent == Intent.OTHER) {\n        return Optional.empty();\n    }\n    String reply;\n    if (isAgreementFor(intent, armed.get())) {\n        ConfirmOutcome outcome = pendingActionService.confirmWithOutcome(username, requestId);\n        reply = outcome.userText();\n        log.info("[程式層確認] 同意 username={} requestId={} 動作={} 已執行={}", username, requestId, armed.get(),\n                outcome.executed());\n    } else {\n        pendingActionService.discardIfArmed(username, requestId);\n        reply = REJECT_REPLY;\n        log.info("[程式層確認] 拒絕 username={} requestId={} 動作={} 意圖={}", username, requestId, armed.get(), intent);\n    }\n    remember(username, message, reply);\n    // 完成 2-6 長期記憶後，這裡也要寫入長期記憶（見 2-6 提示詞）\n    return Optional.of(reply);\n}\n\n/** 這個意圖對指定種類的待確認動作是否算同意（通用同意詞對所有種類都算，帶動作的同意詞只對同種類算） */\nprivate boolean isAgreementFor(Intent intent, ActionType type) {\n    return switch (intent) {\n        case AGREE -> true;\n        case AGREE_CHECKOUT -> type == ActionType.CHECKOUT;\n        case AGREE_CANCEL -> type == ActionType.CANCEL_ORDER;\n        default -> false;\n    };\n}\n\n/**\n * 把這一輪對話寫入短期對話記憶。寫入失敗只記錄警告，不影響已經完成的處理結果\n * （動作可能已執行，不能因為記憶寫入失敗而回錯誤給使用者）。\n */\nprivate void remember(String username, String userText, String reply) {\n    try {\n        List<Message> round = List.of(new UserMessage(userText), new AssistantMessage(reply));\n        chatMemory.add(username, round);\n    } catch (Exception e) {\n        log.warn("[程式層確認] 寫入對話記憶失敗：{}", e.getMessage());\n    }\n}'
              }
            },
            {
              title: '系統提示詞規則與 toolContext（原文）',
              type: 'code',
              paragraphs: [
                '提示詞負責讓模型「照流程走」：先 prepare、把摘要告訴使用者並詢問、結束這一輪。程式層確認加入後多了兩條規則：明確的同意與拒絕由系統直接處理，不會交給模型；對話紀錄中系統已回「已完成結帳」「已取消訂單」或「沒有執行」，代表動作已處理完畢，<strong>不要重複執行，也不要重新 prepare</strong>（程式層確認寫入短期記憶的那一輪，模型下一輪看得到）。最後一句仍然重要：<strong>沒有成功呼叫 confirmPendingAction 之前，不可以說已經結帳</strong>，否則模型可能在工具拒絕後仍然回「已幫你結帳」。',
                'ChatController 每次請求產生 <code>requestId</code>，先登記到 PendingActionService，再交給 DirectConfirmationHandler；程式層沒有處理，才呼叫模型，並把登入帳號與 requestId 經 <code>toolContext</code> 傳給工具。兩者都由後端決定，模型無法偽造。'
              ],
              code: {
                language: 'java',
                title: 'ChatController.java — 系統提示詞、程式層確認與 toolContext（參考實作節錄）',
                content: '/** 客服系統提示詞 */\nprivate static final String SYSTEM_PROMPT = "你是親切的商城智慧客服。回答商品、庫存、訂單問題時，"\n        + "只能根據工具或知識庫查到的資料回答；查不到就說不知道，不可以編造。請用純文字回答，不要使用 Markdown。"\n        + "購物與訂單操作規則：加入或移除購物車可以直接執行；"\n        + "結帳或取消訂單前，一定要先呼叫 prepareCheckout 或 prepareCancelOrder，"\n        + "把工具回傳的摘要（品項、金額或要取消的訂單）告訴使用者並詢問「確定要執行嗎？」，然後結束這一輪回答，"\n        + "不可以在同一輪回答中呼叫 confirmPendingAction；"\n        + "使用者回覆「確定」「好」「可以」或「不要」「取消」這類明確的同意或拒絕時，由系統直接處理，不會交給你，"\n        + "你只要在 prepare 之後詢問使用者並結束這一輪即可；"\n        + "對話紀錄中系統已回覆「已完成結帳」「已取消訂單」或「沒有執行」，表示那個動作已經處理完畢，不要重複執行，也不要重新 prepare；"\n        + "只有使用者用了系統沒有辨識的說法表示同意（例如一整句完整的同意）時，才在他的下一則訊息呼叫 confirmPendingAction；"\n        + "使用者拒絕、猶豫或改問別的事，就不要呼叫，也不要自己重新 prepare，並告訴使用者沒有執行；"\n        + "工具回覆拒絕或失敗時，照實告訴使用者原因，沒有成功呼叫 confirmPendingAction 之前，"\n        + "不可以說已經結帳或已經取消。";\n\n@PostMapping(value = "/stream", consumes = MediaType.APPLICATION_JSON_VALUE,\n        produces = MediaType.TEXT_EVENT_STREAM_VALUE)\npublic Flux<String> stream(@RequestBody ChatRequest request, Principal principal) {\n    String message = request.message();   // 問題放在 JSON 本文 {"message": "..."}（2-1 章）\n    // 空白問題在登記新請求之前就回 400，避免無效請求作廢使用者的待確認動作\n    if (message == null || message.isBlank()) {\n        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "問題不可為空白");\n    }\n    String username = principal.getName();\n    // 每次請求產生唯一 ID，並在呼叫模型之前登記：這是「先詢問再執行」判斷回合邊界的依據\n    String requestId = UUID.randomUUID().toString();\n    pendingActionService.onNewRequest(username, requestId);\n    // 使用者明確同意或拒絕待確認動作：由程式直接處理，不呼叫模型\n    Optional<String> direct = directConfirmationHandler.tryHandle(username, requestId, message);\n    if (direct.isPresent()) {\n        return Flux.just(direct.get(), "[DONE]");   // 前端收到 data:回覆、data:[DONE]，格式與模型串流相同\n    }\n    return chatClient.prompt()\n            .system(SYSTEM_PROMPT)\n            .user(message)\n            .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, username))\n            // 登入帳號與本次請求 ID 由後端經 toolContext 傳入，不讓模型決定\n            .tools(productTools, cartTools, orderTools)\n            .toolContext(Map.of("username", username, "requestId", requestId))\n            .stream()\n            .content()\n            .concatWith(Flux.just("[DONE]"));\n}'
              }
            },
            {
              title: 'AI Agent 提示詞 — 購物車工具與先詢問再執行',
              type: 'code',
              paragraphs: [
                '同樣先寫測試。PendingActionService、ConfirmationPhrases、DirectConfirmationHandler 的規則全部在 service 層驗證，不需要呼叫真的模型；工具測試直接呼叫工具方法，自己建一個 <code>ToolContext</code> 傳入帳號與 requestId。',
                '「同意時根本沒有呼叫模型」要經 HTTP 驗證：ChatConfirmationApiTest 把 <code>ChatModel</code> 換成 Mockito 替身，用 <code>verifyNoInteractions(chatModel)</code> 斷言。課前演練先建空骨架再跑，紅燈是 <code>Expecting actual: "data:模型回覆 data:[DONE]" to contain: "已完成結帳"</code>——「確定」那一輪還是交給了模型，紅燈原因正確，才開始實作。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞',
                content: '再幫 AI 客服加上購物車和訂單的操作：\n- 可以查購物車、加入或移除商品\n- 結帳和取消訂單要先列出內容問我「確定嗎？」，我下一句說確定才執行，說不要就不執行\n- 「確定」「不要」這種明確的回答由程式直接判斷，不要交給 AI 決定\n- 不要讓 AI 能出貨\n日誌分別印出 [待確認] 和 [程式層確認]，方便我查。用 TDD 做，測試不要呼叫真的模型。有不清楚的地方先問我，做完實際對話測給我看。'
              }
            },
            {
              title: '常見錯誤與排查',
              type: 'warning',
              bullets: [
                'AI 回覆很自然但沒有即時數字，通常代表模型沒有真的走工具',
                '工具方法有被呼叫但結果空白，先驗證 Repository 是否查得到資料',
                '若工具掛載後應用啟動失敗，先檢查方法簽名與註解設定是否正確',
                '驗證工具呼叫時要同時比對前端回覆與後端日誌，單看其中一邊容易誤判'
              ]
            },
            {
              title: '工具呼叫的架構定位',
              type: 'text',
              paragraphs: [
                '工具呼叫讓 AI 成為業務邏輯的「呼叫者」，而不是直接存取資料。不論工具背後是資料庫、內部 Service，還是第三方 API，模型看到的都是統一的工具介面。',
                '這種設計讓後端的資料來源可以隨時替換或擴充，而不影響模型的呼叫方式。'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ 不可逆的操作不能只靠模型</strong>：提示詞擋不住同一輪就結帳，所以由 PendingActionService 在後端強制回合邊界；但「確定」算不算同意若仍交給模型判斷，課前實測 8 次只成功 4 次。明確的同意與拒絕改由程式比對詞表直接處理後，「確定」「不要」各 5/5。驗收時看「確定」那一輪的日誌：要有 <code>[程式層確認]</code>，不能有 confirmPendingAction。',
                '<strong>⚠ 不要給 AI 沒有角色檢查的工具</strong>：工具以後端身分直接呼叫 Service，會繞過 1-9 的 URL 規則與 <code>@PreAuthorize</code>。出貨這類管理員操作不做成工具；請 AI 列出每個工具的風險等級（查詢、可逆、動到錢）給你審。',
                '<strong>帳號由後端給，不讓模型傳</strong>：檢查每個 <code>@Tool</code> 方法的參數，不能有 username，帳號一律從 <code>ToolContext</code> 取。可以實際對 AI 說「幫我查 admin 的訂單」，確認查不到。',
                '<strong>⚠ 回答自然不代表有呼叫工具</strong>：模型沒呼叫工具也能編出像樣的庫存數字。每次驗證都從 <code>logs/backend.log</code> 搜尋 <code>[工具呼叫]</code>，並和資料庫的數字比對。',
                '<strong>規則用單元測試驗，不靠模型</strong>：「同一輪確認被拒、回不要後作廢、逾時、詞表比對」在 service 層測，時間用可注入的 Clock；「同意時不呼叫模型」用 Mockito 替身的 ChatModel 加 <code>verifyNoInteractions</code> 驗證。AI 寫詞表比對時常用 contains 偷懶，測試一定要放「不確定」「好的，順便幫我查庫存」確認不會被當成同意（yml 的金鑰有空預設值，沒有金鑰也能跑 mvn test）。替身的 <code>getOptions()</code> 要回傳 <code>ToolCallingChatOptions.builder().build()</code>，否則掛工具時會 NullPointerException；缺金鑰無法啟動時先檢查 yml 的 <code>${MODEL_API_KEY:}</code> 與 embedding 設為 none，不要另外加假金鑰。',
                '<strong>判斷成功看資料，不看句子</strong>：驗證結帳要看庫存、購物車、訂單筆數有沒有變。系統提示詞也要求「沒有成功呼叫 confirmPendingAction 之前，不可以說已經結帳」，因為模型可能在工具拒絕後仍回「已幫你結帳」。'
              ]
            }
          ]
        },
        {
          id: 'd2-u3',
          chapter: '2-3',
          title: 'RAG 與向量資料庫',
          summary: '將文件切分、向量化並儲存到 pgvector，讓模型先檢索再作答，降低憑空回答風險。',
          source: 'docs/Day2-3-RAG-VectorStore.md',
          heroImage: 'assets/teaching-site/07-ch07-rag-vectorstore.png',
          diagramImage: 'assets/diagrams/d2-u3.png',
          diagramCaption: '問題先檢索相關內容，再帶著上下文交給模型生成答案。',
          goals: [
            '理解 RAG 與傳統純對話模型的差異',
            '掌握 Embedding、切分與檢索流程',
            '理解 pgvector 與 VectorStore 在架構中的分工'
          ],
          tasks: [
            { id: 'd2-u3-t1', text: '整理 RAG 三步驟流程' },
            { id: 'd2-u3-t2', text: '確認 pgvector 與 VectorStore 的分工' },
            { id: 'd2-u3-t3', text: '記錄 1 個知識庫問答驗證情境' }
          ],
          sections: [
            {
              title: 'RAG 的基本想法',
              type: 'text',
              paragraphs: [
                'RAG 可以把它想成「開卷考試」。模型不再只依賴自己訓練時學過的內容，而是先去找與問題最相關的文檔片段，再根據那些片段作答。',
                '這種做法的好處是知識更新成本低、可控性高，而且可以明確限制回答只依據文件內容。'
              ],
              image: 'assets/teaching-site/17-diagram-rag-retrieval-flow.png',
              imageAlt: 'RAG 檢索流程圖',
              imageCaption: '先查資料再回答，是這一章最重要的節奏。'
            },
            {
              title: 'RAG 與 Fine-Tuning 差異',
              type: 'text',
              bullets: [
                'RAG 是外部知識檢索，更新速度快',
                'Fine-Tuning 是調整模型參數，成本較高',
                'RAG 更適合企業文件、FAQ、內規等常變動內容',
                '若要降低幻覺並保留來源脈絡，RAG 更實用'
              ]
            },
            {
              title: 'RAG vs Fine-Tuning 完整比較',
              type: 'code',
              paragraphs: [
                '選擇 RAG 還是 Fine-Tuning，取決於資料更新頻率、幻覺容忍度與開發成本。對大多數企業文件場景，RAG 是首選。'
              ],
              code: {
                language: 'text',
                title: 'RAG vs Fine-Tuning 比較',
                content: '                    RAG（本課程方案）        Fine-Tuning（微調）\n──────────────────────────────────────────────────────────\n本質               外部知識檢索（開卷考試）   內部參數調整（閉卷考試）\n即時更新            極快（只需更新向量庫）     極慢（需要重新訓練）\n幻覺控制            極佳（可強制依文件回答）   較差（仍可能胡言亂語）\n開發成本            低                        高\n適用場景            FAQ、內規、產品文件        垂直領域語言風格微調'
              }
            },
            {
              title: 'ETL 三步驟：文件到向量庫',
              type: 'code',
              paragraphs: [
                '上傳文件到向量庫要經過 Extract → Transform → Load 三步驟。`TokenTextSplitter` 把長文切成小塊，讓每塊語意聚焦，檢索時相關度才會精準。'
              ],
              image: 'assets/teaching-site/21-diagram-rag-etl.svg',
              imageAlt: 'RAG 文件入庫 ETL 三步驟圖解',
              imageCaption: '注意 Transform 階段相鄰 Chunk 的重疊帶——它防止關鍵語意剛好被切在邊界上。',
              bullets: [
                'Extract — 用 `TextReader` 讀取檔案，封裝成 `Document` 物件',
                'Transform — 用 `TokenTextSplitter` 切分，預設每塊約 800 tokens，相鄰塊重疊 100 tokens 防止語意被截斷',
                'Load — `vectorStore.accept()` 自動呼叫 EmbeddingModel 產生向量並寫入 PostgreSQL'
              ],
              code: {
                language: 'java',
                title: 'RAGController.java — 文件上傳 ETL 流程',
                content: '@PostMapping("/upload")\npublic String uploadDocument(@RequestParam("file") MultipartFile file) {\n    // Extract：讀取檔案為 Document 清單\n    Resource resource = new ByteArrayResource(file.getBytes());\n    List<Document> documents = new TextReader(resource).get();\n\n    // Transform：切分長文，避免 Embedding 向量資訊過度稀釋\n    TokenTextSplitter splitter = new TokenTextSplitter();\n    List<Document> splitDocuments = splitter.apply(documents);\n\n    // Load：向量化並寫入 pgvector\n    vectorStore.accept(splitDocuments);\n\n    return "已上傳並完成向量化，共 " + splitDocuments.size() + " 個片段";\n}'
              }
            },
            {
              title: '向量嵌入與 pgvector',
              type: 'text',
              paragraphs: [
                'Embedding 會把文字轉成固定長度的向量。在向量空間中，語意越接近，距離就越近。這讓資料庫可以用「相似度」而不是精確關鍵字比對來找內容。',
                '`pgvector` 是 PostgreSQL 的擴充套件，負責提供向量欄位與最近鄰搜尋能力；`VectorStore` 則是 Spring AI 在程式中的抽象介面。'
              ]
            },
            {
              title: 'ETL 流程程式碼',
              type: 'code',
              code: {
                language: 'java',
                title: '切分與寫入向量儲存',
                content: 'TokenTextSplitter splitter = new TokenTextSplitter();\nList<Document> splitDocuments = splitter.apply(documents);\nvectorStore.accept(splitDocuments);'
              }
            },
            {
              title: 'QuestionAnswerAdvisor 的價值',
              type: 'code',
              paragraphs: [
                'Spring AI 2.0 把「檢索相關內容再把上下文送給模型」這件事收斂成 Advisor。這讓程式碼可讀性高很多，也方便後續替換檢索策略。'
              ],
              code: {
                language: 'java',
                title: 'RAG 查詢示意',
                content: 'return this.chatClient.prompt()\n    .user(query)\n    .advisors(QuestionAnswerAdvisor.builder(vectorStore).build())\n    .call()\n    .content();'
              }
            },
            {
              title: '向量模型：Voyage voyage-4',
              type: 'text',
              paragraphs: [
                '本課程的 Embedding 使用 Voyage AI 的 <code>voyage-4</code>（金鑰申請步驟見 2-1 章）。它在多語系（含繁體中文）檢索表現好，每個帳號前 2 億 tokens 免費，課程用量遠低於此。'
              ],
              bullets: [
                '預設輸出 <strong>1024 維</strong>，也可選 256 / 512 / 2048；pgvector 的 <code>dimensions</code> 必須與它一致，換維度就要重建向量表並重新匯入文件。',
                '同家族還有 <code>voyage-4-lite</code>（更便宜、較快）與 <code>voyage-4-large</code>（品質最高），三者可互換但向量不相容，<strong>入庫與查詢必須用同一個模型</strong>。',
                '檢索情境下 Voyage 建議區分 <code>input_type</code>：入庫用 <code>document</code>、查詢用 <code>query</code>，召回品質會更好。本章提示詞為了先跑通，request body 只送 <code>{model, input}</code>；做完後可以再請 AI 加上 input_type 當進階練習（入庫與查詢分開送）。'
              ]
            },
            {
              title: '兩階段檢索：向量粗篩 + rerank-3 精排',
              type: 'code',
              paragraphs: [
                '向量相似度擅長「快速找出大概相關的」，但排序不一定精準。實務上常用兩階段：先用向量檢索撈 20 筆候選，再交給 Voyage <code>rerank-3</code> 逐筆判斷與問題的相關度，只留前 5 筆塞進 Prompt。這樣能減少無關片段干擾模型，也省 token。',
                'Spring AI 目前沒有 Voyage Reranker 的現成元件，直接用 <code>RestClient</code> 呼叫 <code>POST https://api.voyageai.com/v1/rerank</code> 即可。rerank-3 同樣前 2 億 tokens 免費。'
              ],
              code: {
                language: 'java',
                title: 'VoyageReranker.java — 呼叫 rerank-3 重新排序候選文件',
                content: '/**\n * 用 Voyage rerank-3 對向量檢索的候選文件重新排序，只保留最相關的 topK 筆。\n */\n@Component\npublic class VoyageReranker {\n\n    // Voyage API 的 HTTP 客戶端，Base URL 與金鑰在建構時設定好\n    private final RestClient restClient;\n\n    public VoyageReranker(@Value("${VOYAGE_API_KEY}") String apiKey) {\n        this.restClient = RestClient.builder()\n            .baseUrl("https://api.voyageai.com/v1")\n            .defaultHeader("Authorization", "Bearer " + apiKey)\n            .build();\n    }\n\n    // 請求與回應的資料結構（只宣告用得到的欄位）\n    record RerankRequest(String query, List<String> documents, String model, int top_k) {}\n    record RerankItem(int index, double relevance_score) {}\n    record RerankResponse(List<RerankItem> data) {}\n\n    /**\n     * 依與問題的相關度重新排序候選文件。\n     * @param query      使用者問題\n     * @param candidates 向量檢索撈回的候選文件（建議 20 筆左右）\n     * @param topK       最後要保留幾筆\n     */\n    public List<Document> rerank(String query, List<Document> candidates, int topK) {\n        if (candidates.isEmpty()) return candidates;\n        List<String> texts = candidates.stream().map(Document::getText).toList();\n        RerankResponse res = restClient.post()\n            .uri("/rerank")\n            .body(new RerankRequest(query, texts, "rerank-3", topK))\n            .retrieve()\n            .body(RerankResponse.class);\n        // 回傳結果已依分數由高到低排序，index 指向原本的候選位置\n        return res.data().stream().map(item -> candidates.get(item.index())).toList();\n    }\n}\n\n// 使用方式：先粗篩 20 筆，再精排留 5 筆\nList<Document> candidates = vectorStore.similaritySearch(\n    SearchRequest.builder().query(question).topK(20).build());\nList<Document> top5 = reranker.rerank(question, candidates, 5);'
              }
            },
            {
              title: 'RAG 範例文件（存成 UTF-8 文字檔上傳）',
              type: 'code',
              paragraphs: [
                '把下面兩段分別存成 <code>退貨政策.txt</code> 與 <code>無線耳機 Pro 規格說明.txt</code>（UTF-8）。注意「保固 2 年」只寫在文件裡、不放進資料庫的商品說明，這樣 AI 答出保固期限時就能確定答案來自知識庫。'
              ],
              code: {
                language: 'text',
                title: '退貨政策.txt ／ 無線耳機 Pro 規格說明.txt',
                content: '===== 退貨政策.txt =====\n本商城退貨政策\n\n1. 鑑賞期：商品到貨後 7 天內，可申請無條件退貨（鑑賞期不等於試用期）。\n2. 退貨條件：商品須保持全新、未使用、配件與包裝完整；已拆封的個人衛生用品（例如入耳式耳機的耳塞）恕不接受退貨。\n3. 退款時間：我們收到退貨並檢查無誤後，3 到 5 個工作天內退款至原付款方式。\n4. 運費：商品瑕疵或寄錯由商城負擔運費；因個人因素退貨，退回運費由買家負擔。\n5. 申請方式：登入會員後於「我的訂單」申請退貨，或聯絡智慧客服。\n\n===== 無線耳機 Pro 規格說明.txt =====\n無線耳機 Pro 規格說明\n\n- 續航力：單次連續播放約 8 小時，搭配充電盒總續航約 30 小時。\n- 防水等級：IPX4，可防潑濺與汗水，但不可浸泡水中、不建議游泳時配戴。\n- 藍牙版本：5.3，支援 AAC / SBC。\n- 降噪：主動降噪（ANC），降噪深度最高 35dB。\n- 保固：購買日起享 2 年原廠保固（含電池），人為損壞與浸水不在保固範圍。\n- 充電：USB-C，快充 10 分鐘可使用 2 小時。\n\n# 上傳指令（PowerShell 7，$h 為 admin 的 Authorization 標頭）\n# Invoke-RestMethod -Method Post -Uri http://localhost:8080/api/rag/upload -Headers $h -Form @{ file = Get-Item -LiteralPath "退貨政策.txt" }'
              }
            },
            {
              title: 'AI Agent 提示詞 — 建立 RAG 知識庫',
              type: 'code',
              paragraphs: [
                '理解 RAG 流程與向量檢索原理後，複製以下提示詞給 AI Agent，引導它完成文件上傳、向量化與知識庫問答兩支 API。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞',
                content: '幫商城加上 RAG 知識庫，讓 AI 客服能回答商品細節和退貨政策：\n- 向量資料庫用現有的 PostgreSQL（pgvector），向量模型用 Voyage voyage-4，金鑰在 .env 的 VOYAGE_API_KEY\n- 做一個上傳文件的 API（只有管理員能用），和一個測試查詢的 API\n- AI 客服回答時也要查知識庫；但庫存、價格、訂單還是要用工具查\n有不清楚的地方先問我。做完用我給你的兩份範例文件（退貨政策.txt、無線耳機 Pro 規格說明.txt）上傳測試，並確認之前的工具呼叫還正常。'
              }
            },
            {
              title: 'RAG 上傳與問答驗證範例',
              type: 'code',
              paragraphs: [
                'RAG 驗證至少要分成兩段：先確認文件成功上傳並完成向量化，再確認查詢結果是根據文件內容回答，而不是一般常識。'
              ],
              code: {
                language: 'text',
                title: '可接受的驗證情境',
                content: '步驟 1：以 admin 上傳本章「RAG 範例文件」的 退貨政策.txt\n\n步驟 2：以 user 提問\n商城退貨政策是什麼？\n\n預期回答特徵：\n- 提到到貨後 7 天內的鑑賞期\n- 提到收到退貨後 3 到 5 個工作天退款\n- 回答內容明顯來自上傳文件，而不是模型自由發揮\n\n步驟 3：上傳 無線耳機 Pro 規格說明.txt 後，以 user 提問\n無線耳機 Pro 防水嗎？保固多久？\n\n預期回答特徵：\n- 提到 IPX4\n- 提到 2 年原廠保固（保固只寫在文件裡，答得出來就代表答案來自知識庫）'
              },
              bullets: [
                '最低需求：資料庫中的 pgvector 與 VectorStore 已可正常寫入',
                '最低需求：文件上傳 API 可正常回應成功',
                '若回答沒有帶出文件中的關鍵字，先檢查上傳、切分、向量寫入與檢索流程',
                '若上傳成功但查不到內容，通常要先查向量表是否真的有資料'
              ]
            },
            {
              title: '常見錯誤與排查',
              type: 'warning',
              bullets: [
                '文件上傳成功但查詢沒有結果，通常是切分或向量寫入階段沒有真正落表',
                '若回答內容過度籠統，先確認檢索到的 chunk 是否真的包含關鍵字',
                '若資料庫沒有 pgvector 擴充功能，向量欄位與近鄰搜尋會失敗',
                '測試 RAG 時要用明確且來自文件的句子，不要先用模型本來就可能知道的常識題'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ 上傳 500 時，不要讓 AI 換掉 Voyage 或降版本</strong>：Spring AI 內建的 OpenAI embedding 讀不懂 Voyage 的回應，第一輪演練上傳文件就 500。提示詞已給出自寫 VoyageEmbeddingModel 的作法；AI 若提議改用其他供應商或降低 Spring AI 版本，先停下來。',
                '<strong>⚠ 掛上知識庫後，重跑 2-2 的三句</strong>：QuestionAnswerAdvisor 的預設範本會讓模型在上下文沒答案時直接拒答，第一輪演練中庫存、缺貨問題全部不再呼叫工具。每加一個 Advisor，就重跑前一章的驗證句，確認沒有退化。',
                '<strong>測試題要分得出答案來源</strong>：「保固 2 年」只放在文件、不放資料庫，AI 答出保固期限，才能證明答案來自知識庫（第一輪演練後的設計）。不要用模型本來就知道的常識題驗證 RAG。',
                '<strong>外部 API 一定要有逾時</strong>：RestClient 預設沒有逾時，Voyage 沒回應時整個對話會卡住，2-6 的降級也接不到（第二輪演練指出的缺口）。檢查 AI 寫的 VoyageEmbeddingModel 有沒有設定連線 5 秒、讀取 20 秒。',
                '<strong>⚠ 上傳權限要實測</strong>：1-9 的規則是「其餘需登入」，沒有另外設定時 user 也能上傳文件。請 AI 用 user 的 Token 上傳一次，確認拿到 403。'
              ]
            }
          ]
        },
        {
          id: 'd2-u5',
          chapter: '2-4',
          title: 'React 快速入門與前端優化指引',
          summary: '掌握 Node.js 環境、使用 Vite 建立 React 19 專案、JSX 語法元件結構，並學習如何以 Proxy 串接後端 API 先做出功能正確的基本版商城（2-5 結尾再用 ui-ux-pro-max 升級視覺）。',
          source: 'docs/Day2-4-React-Intro.md',
          heroImage: 'assets/teaching-site/10-ch10-react-intro.png',
          diagramImage: 'assets/diagrams/d2-u5.png',
          diagramCaption: '瀏覽器只跟 5173 對話，跨網域請求由 Vite Proxy 代理轉發到 8080，免除 CORS 限制。',
          goals: [
            '理解 Node.js 與 NPM 相依性套件管理機制',
            '學會使用 Vite 初始化 React 19 專案的指令步驟',
            '掌握 JSX 語法特色與 Functional Component 元件結構',
            '理解為何需要開發代理 (Vite Proxy) 以免除 CORS 限制',
            '先做出功能正確的基本版商城首頁，視覺升級留到 2-5 結尾對照'
          ],
          tasks: [
            { id: 'd2-u5-t1', text: '確認 Node.js 與 npm 可用（0-1 章已安裝）' },
            { id: 'd2-u5-t2', text: '使用 Vite 建立 React 19 專案並以 npm install 安裝' },
            { id: 'd2-u5-t3', text: '配置 vite.config.js 的 server.proxy 代理' },
            { id: 'd2-u5-t4', text: '商品載入中顯示骨架屏，缺貨商品顯示標籤' },
            { id: 'd2-u5-t5', text: '完成商城首頁商品卡片列表（免登入可見，缺貨顯示標籤）' }
          ],
          sections: [
            {
              title: 'Node.js 與 React 專案建立',
              type: 'text',
              paragraphs: [
                'Node.js 是前端開發的執行環境，而 NPM (Node Package Manager) 是套件管理工具。在 React 19 的開發中，我們不再使用傳統手動下載 JS 檔的方式，而是使用 NPM 安裝相依套件。',
                '我們使用業界主流、極速的 Vite 作為建置工具，透過以下指令在命令列中建立專案：'
              ],
              bullets: [
                '建立 Vite React 專案：`npx create-vite@latest frontend --template react`',
                '進入專案目錄：`cd frontend`',
                '安裝最新無資安漏洞的 React 19 依賴：`npm install`',
                '啟動本機開發伺服器 (Port 5173)：`npm run dev`'
              ]
            },
            {
              title: 'JSX 語法與 Functional Component 元件結構',
              type: 'code',
              paragraphs: [
                'JSX 是 JavaScript 的語法擴充，允許我們在 JavaScript 中直接撰寫一種類似 HTML 的結構。React 19 推薦使用 Functional Component（函式元件）進行開發，相比舊版的 Class 元件更加簡潔。',
                'JSX 寫作規範與注意事項：',
                '1. 所有元件必須回傳「單一根節點」（若有多個元素，需用空標籤 `<></>` 包裹）。',
                '2. 由於 class 在 JS 中是保留字，JSX 中必須改寫為 `className`。',
                '3. HTML 事件綁定需改為 React 的小駝峰命名（例如 `onclick` 改為 `onClick`）。',
                '4. 變數與邏輯表達式可直接放在大括號 `{}` 中進行求值與渲染。'
              ],
              code: {
                language: 'jsx',
                title: 'Counter.jsx — 基本 JSX 函式元件範例',
                content: 'import React, { useState } from \'react\';\n\n// 宣告一個 Functional Component 元件\nexport default function Counter({ initialCount = 0 }) {\n  // 使用 useState Hook 管理元件內部的狀態\n  const [count, setCount] = useState(initialCount);\n\n  return (\n    <div className="counter-container">\n      <h3>當前計數器：{count}</h3>\n      {/* 點擊事件小駝峰命名，並使用大括號綁定 JavaScript 方法 */}\n      <button onClick={() => setCount(count + 1)}>\n        累加 +1\n      </button>\n    </div>\n  );\n}'
              }
            },
            {
              title: '開發端代理與後端 API 串接 (Vite Proxy)',
              type: 'code',
              paragraphs: [
                '在前後端分離的架構中，前端 Vite 伺服器運行在 <a href="http://localhost:5173" target="_blank"><code>http://localhost:5173</code></a>，而 Spring Boot 後端運行在 <a href="http://localhost:8080" target="_blank"><code>http://localhost:8080</code></a>。如果前端直接向後端發送非同步請求（fetch），會因為「同源政策 (Same-Origin Policy)」而被瀏覽器阻擋 (CORS 跨網域錯誤)。',
                '為了解決此問題，我們在 `vite.config.js` 中配置 `server.proxy` 代理轉發，將所有以 `/api` 開頭的請求，在開發環境中自動轉發至 <a href="http://localhost:8080" target="_blank"><code>http://localhost:8080</code></a>。這樣前端程式碼只需填寫相對路徑即可，且完全免除了後端配置 CORS 的繁瑣設定！'
              ],
              code: {
                language: 'javascript',
                title: 'vite.config.js — 配置 API 代理轉發',
                content: 'import { defineConfig } from \'vite\'\nimport react from \'@vitejs/plugin-react\'\n\nexport default defineConfig({\n  plugins: [react()],\n  server: {\n    port: 5173,\n    proxy: {\n      // 當前端請求 /api/ai/stream 時，Vite 自動代理為 http://localhost:8080/api/ai/stream\n      \'/api\': {\n        target: \'http://localhost:8080\',\n        changeOrigin: true\n      }\n    }\n  }\n})'
              }
            },
            {
              title: '先求功能正確，視覺之後再升級',
              type: 'text',
              paragraphs: [
                '這一章的提示詞刻意只描述<strong>功能與版面位置</strong>，不指定配色與風格，讓 AI 用它的預設口味做。做出來多半是漸層 Header、毛玻璃卡片這類「一看就是 AI 做的」樣子——這是故意的。',
                '先把商品列表、詳情、缺貨標籤、骨架屏這些功能做對；等 2-5 章把登入、上架、AI 客服都完成後，章末會用 ui-ux-pro-max 設計技能把整個商城升級成品牌官網。前後兩版放在一起比，就能看出「讓 AI 自由發揮」和「先定設計系統再實作」的差別。'
              ]
            },
            {
              title: '示範商品圖片（下載放進前端專案）',
              type: 'text',
              paragraphs: [
                '課程準備了 6 張示範商品圖片（AI 生成，600×600 JPG），讓商城首頁一開始就有像樣的畫面。請下載後放到 <code>frontend/public/images/products/</code>；資料庫的 <code>image_url</code> 存相對路徑 <code>/images/products/檔名</code>，前端直接當 <code>&lt;img src&gt;</code> 使用。',
                '📦 <strong>一次下載全部：</strong><a href="assets/downloads/product-images.zip" download>product-images.zip</a>（6 張商品圖放進 <code>frontend/public/images/products/</code>；<code>brand/</code> 資料夾是 2-5 章末升級品牌官網用的 Hero、分類圖與客服頭像）；商品圖也可以從下方逐張下載。'
              ],
              bullets: [
                '無線耳機 Pro：<a href="assets/products/earphone-pro.jpg" download>earphone-pro.jpg</a><br><img src="assets/products/earphone-pro.jpg" alt="無線耳機 Pro" style="width:96px;height:96px;object-fit:cover;border-radius:10px;margin-top:6px;">',
                'Bass+ 重低音耳機：<a href="assets/products/bass-headphones.jpg" download>bass-headphones.jpg</a><br><img src="assets/products/bass-headphones.jpg" alt="Bass+ 重低音耳機" style="width:96px;height:96px;object-fit:cover;border-radius:10px;margin-top:6px;">',
                '機械鍵盤：<a href="assets/products/keyboard.jpg" download>keyboard.jpg</a><br><img src="assets/products/keyboard.jpg" alt="機械鍵盤" style="width:96px;height:96px;object-fit:cover;border-radius:10px;margin-top:6px;">',
                '行動電源：<a href="assets/products/power-bank.jpg" download>power-bank.jpg</a><br><img src="assets/products/power-bank.jpg" alt="行動電源" style="width:96px;height:96px;object-fit:cover;border-radius:10px;margin-top:6px;">',
                '香氛加濕器：<a href="assets/products/humidifier.jpg" download>humidifier.jpg</a><br><img src="assets/products/humidifier.jpg" alt="香氛加濕器" style="width:96px;height:96px;object-fit:cover;border-radius:10px;margin-top:6px;">',
                '智慧檯燈（缺貨示範）：<a href="assets/products/desk-lamp.jpg" download>desk-lamp.jpg</a><br><img src="assets/products/desk-lamp.jpg" alt="智慧檯燈（缺貨示範）" style="width:96px;height:96px;object-fit:cover;border-radius:10px;margin-top:6px;">'
              ]
            },
            {
              title: 'AI Agent 提示詞 — 建立 React 前端專案',
              type: 'code',
              paragraphs: [
                '理解 React 專案結構與 Proxy 原理後，複製以下提示詞給 AI Agent，從零建立聊天室的前端專案骨架。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞',
                content: '幫我用 Vite + React 建一個商城前端，放在 frontend 資料夾：\n- 首頁顯示商品列表（後端 GET /api/products，不用登入），有圖片、價格、庫存，缺貨要標示\n- 商品圖片我已經下載好（6 張 jpg，資料庫的 image_url 是 /images/products/檔名），請放到 frontend/public/images/products/\n- /api 的請求用 Vite proxy 轉到 http://localhost:8080\n- 右上角預留登入按鈕，右下角預留 AI 客服的按鈕\n樣式你自己設計，做得好看一點。有不清楚的地方先問我，做完告訴我怎麼啟動。'
              }
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ 互動式指令會卡住</strong>：舊版 <code>create-vite</code> 會詢問要不要用 rolldown、要不要立即啟動，AI 的終端機無法回答就停住，第一輪演練加上 <code>&lt; /dev/null</code> 才過。超過一分鐘沒有新輸出，請它中止並改用非互動參數。',
                '<strong>⚠ 用 Vite proxy，不要改後端 CORS</strong>：遇到跨網域錯誤時，AI 常在後端加 <code>@CrossOrigin</code> 或 CORS 設定。本課用 <code>vite.config.js</code> 的 proxy 解決，前端任務不應改到後端；看 diff 時若出現 Java 檔案，請它說明原因。',
                '<strong>風格與命名都交給 AI</strong>：這章刻意不指定風格與 class 名稱。之後的 e2e 由 AI 讀你的畫面自己挑選擇器；改版時要求「e2e 的檢查項目不能改」，就能抓到被改壞的地方。',
                '<strong>用截圖驗證，不只看伺服器有沒有起來</strong>：<code>npm run dev</code> 成功不代表畫面正確。請 AI 用 0-1 章的 Playwright 開首頁截圖，確認商品卡片數等於 <code>GET /api/products</code> 的筆數、圖片有顯示、缺貨標籤只出現在庫存 0 的商品（演練用 <code>smoke-home.mjs</code> 驗證）。',
                '<strong>⚠ 圖片路徑以資料庫為準</strong>：資料庫的 <code>image_url</code> 是 <code>/images/products/*.jpg</code>，圖片放在 <code>frontend/public/images/products/</code> 即可。AI 可能為了顯示圖片去改資料庫或寫死外部佔位圖，請它不要動資料。'
              ]
            }
          ]
        },
        {
          id: 'd2-u6',
          chapter: '2-5',
          title: 'React 聊天室與 SSE 串流式對話實戰',
          summary: '使用 React 串接後端 Server-Sent Events (SSE) 串流 API：以 fetch 送出 POST（Token 放 Authorization 標頭、問題放 JSON 本文）並逐段讀取回應，搭配狀態管理實現即時打字機對話效果。',
          source: 'docs/Day2-5-React-SSE.md',
          heroImage: 'assets/teaching-site/11-ch11-react-sse-chat.png',
          diagramImage: 'assets/diagrams/d2-u6.png',
          diagramCaption: 'fetch 以 POST 呼叫 /api/ai/stream：Token 放 Authorization 標頭、問題放 JSON 本文，前端讀取 response.body 自行解析 SSE；Token 與問題都不會出現在網址。',
          goals: [
            '理解 SSE 與 WebSockets 的區別與選型',
            '使用 fetch 讀取 SSE 串流（POST + Authorization 標頭）串接後端 API，並以 AbortController 中止',
            '利用 React 狀態 (State) 實作流式打字渲染效果',
            '掌握流式對話中對話 Session 的前端管理與清除',
            '完成購物袋、購物車抽屜、畫面內確認框、我的訂單與訂單管理（admin），並正確區分 401 與 403',
            '用 Playwright 寫購物流程 e2e（verify-cart）：等條件不等秒數、開始前記錄庫存與訂單數並在結束時斷言一致、只清理自己建立的資料'
          ],
          tasks: [
            { id: 'd2-u6-t1', text: '理解 SSE (Server-Sent Events) 單向串流原理與安全限制' },
            { id: 'd2-u6-t2', text: '確認後端所有 API（含 AI 串流）都只認 Authorization 標頭：串流端點是 2-1 章的 POST /api/ai/stream，不為了前端改成 GET 或讓網址參數帶 Token' },
            { id: 'd2-u6-t3', text: '使用 React 以 fetch + ReadableStream 讀取串流（sseClient.js），並用 AbortController 在關閉視窗或送出新問題時中止' },
            { id: 'd2-u6-t4', text: '完成登入表單與 ADMIN 商品上架表單，上架後首頁立即出現新商品' },
            { id: 'd2-u6-t9', text: '安裝 ui-ux-pro-max，用升級提示詞把商城改成品牌官網，截圖和升級前比較' },
            { id: 'd2-u6-t10', text: '用 AI 完成購物前端：購物袋徽章、購物車抽屜、確認框、結帳結果、我的訂單（取消）、訂單管理（admin 出貨），AI 回覆後自動重抓購物車' },
            { id: 'd2-u6-t12', text: '請 AI 寫購物流程 e2e（verify-cart.mjs）並連跑兩次：結帳、取消、admin 出貨、401／403、AI 回覆後重抓購物車，結束時庫存與訂單數和開始前一致' },
            { id: 'd2-u6-t11', text: '讓 Token 失效（重啟後端換 JWT_SECRET）與 403（偽造 ADMIN 角色）各發生一次，確認 401 會請你重新登入、403 只提示不登出' }
          ],
          sections: [
            {
              title: '為什麼選擇 SSE (Server-Sent Events)',
              type: 'text',
              paragraphs: [
                '在 AI 聊天應用中，模型的回應是單向且持續產生的，後端需要持續把資料推給前端，而前端不需要在過程中頻繁向後端傳送資料。',
                '相較於 WebSockets 的雙向複雜協定，SSE 是基於標準 HTTP 的單向推播協定，開發簡單、開銷小。Spring AI 的 `.stream()` 預設就是輸出標準的 `text/event-stream` 格式，與 SSE 完美搭配。'
              ],
              bullets: [
                'WebSockets：雙向通道，適用於多人遊戲、協作工具，但協定較為繁重。',
                'SSE (Server-Sent Events)：單向推送，基於 HTTP，最適合大模型流式生成 (Streaming)。',
                'React 連線方式：用瀏覽器內建的 `fetch` 送出 POST，再逐段讀取 `response.body` 自行解析 SSE（一支約 80 行、含註解的小模組 `sseClient.js`），不需要第三方套件；為什麼不用瀏覽器另一個內建的串流物件，見下一段。'
              ]
            },
            {
              title: '為什麼不用 EventSource：改用 fetch 讀取串流',
              type: 'code',
              paragraphs: [
                '瀏覽器內建的 `EventSource` 是最常見的 SSE 寫法，但它有兩個限制，正好撞上本課程的 JWT 驗證：**只能發 GET**、**不能自訂標頭**。Token 帶不進 Authorization 標頭，只好和問題一起放進網址的查詢參數，於是 Token 與使用者的問題會留在瀏覽器歷史、Referer，以及伺服器與 Proxy 的存取日誌（Tomcat 的 access log 預設就記下完整網址）。它收到結束標記後若沒有立刻 `close()`，還會自動重連，把同一個問題再送一次。',
                '所以本課程改用 `fetch`：以 **POST** 呼叫 `/api/ai/stream`，Token 放 `Authorization: Bearer` 標頭、問題放 JSON 本文 `{"message": "..."}`，後端沿用 1-9 章的規則，所有 API（含 AI 串流）都只認 Authorization 標頭，不需要為串流開任何例外。代價是要自己讀串流、解析 SSE 格式，寫成下面這支小模組 `sseClient.js`，ChatRoom 只要呼叫它。開頭引用的 `ApiError`（帶 HTTP 狀態碼的錯誤類別）放在 `api.js`，本章稍後的購物前端會把 `api.js` 補齊；做到這裡時可以先建立只有 `ApiError` 的 `api.js`。',
                '**fetch 讀取串流的要點**：',
                '1. **先看狀態碼**：`response.ok` 為 false 時不要讀串流；401 交給既有的登出流程（只在「發出請求時的 Token 仍是目前 Token」時登出），其他非 2xx 顯示錯誤原因。',
                '2. **逐段讀取**：`response.body.getReader()` 每次 `read()` 拿到一段位元組，用 `new TextDecoder()` 解碼時加 `{ stream: true }`，被切在兩段之間的中文才不會變亂碼。',
                '3. **依空行切出完整事件**：網路分段和 SSE 事件邊界不一定對齊，先累積在緩衝區，遇到空行（`\\n\\n`）才是一個完整事件；事件內每一行 `data:` 取出內容（`data:` 後若有一個空白只去掉那一個），多行 `data:` 以換行合併。',
                '4. **收到 `[DONE]` 就結束**：停止讀取並解除忙碌狀態；伺服器沒送 `[DONE]` 就斷線時，也要把最後一段處理完再收尾。fetch 不會自動重連，一個問題只送出一次。',
                '5. **AbortController 中止**：把 `controller.signal` 傳給 fetch，關閉聊天視窗（元件卸載）或送出新問題時呼叫 `abort()`，瀏覽器就會中斷請求；被中止時 fetch 會丟出 `AbortError`，這種情況不顯示錯誤。',
                '**其他做法與取捨**：',
                '**HttpOnly Cookie＋SameSite**：登入時由後端把 Token 放進 HttpOnly Cookie，瀏覽器自動帶上、JavaScript 讀不到（XSS 偷不走），EventSource 也能用；代價是要防 CSRF（Cookie 設 `SameSite=Lax` 或 `Strict`，必要時加 CSRF Token），後端也改從 Cookie 讀 Token，和本課程「前端把 Token 存在 localStorage、每個請求帶標頭」是兩套做法。',
                '**一次性票證**：前端先用 POST（帶 Authorization 標頭）換一張短效、用過即失效的票證，EventSource 的網址只帶這張票證；Token 不會進日誌，但多一支 API，還要管理票證的儲存、過期與撤銷。',
                '**polyfill 或串流套件**：例如能自訂標頭的 event-source-polyfill，或 @microsoft/fetch-event-source，寫法接近 EventSource 又能帶標頭（後者背後也是 fetch）；要多一個第三方套件，套件內建的自動重連也要確認不會重複提問。',
                '本課程選 fetch：不加套件、沿用既有的標頭驗證，解析邏輯一支小模組就能看懂全部細節。'
              ],
              code: {
                language: 'javascript',
                title: 'sseClient.js — 用 fetch 讀取 SSE 串流（參考實作）',
                content: 'import { ApiError } from \'./api.js\'\n\n/**\n * 以 fetch 發出 POST 請求並逐段讀取 SSE（text/event-stream）回應。\n *\n * 為什麼不用瀏覽器內建的 EventSource：EventSource 只能發 GET、不能自訂標頭，\n * Token 與問題只好放進網址（?token=&message=），會留在瀏覽器歷史、Referer 與伺服器存取日誌。\n * 改用 fetch 就能用 Authorization 標頭帶 Token、把問題放在 JSON 本文。\n *\n * 解析規則（與 EventSource 相同）：\n * - 事件之間以空行分隔；一個事件內可以有多行 data:，以換行符號合併成一筆資料。\n * - data: 後面若緊接一個空白，只去掉那一個空白；event:、id:、retry: 與冒號開頭的註解行略過。\n * - 收到 [DONE] 結束標記就停止讀取並結束；伺服器沒送 [DONE] 就關閉連線時，也視為結束。\n *\n * @param {string} url 串流端點，例如 \'/api/ai/stream\'\n * @param {{token?: string|null, body?: object, signal?: AbortSignal, onData: (data: string) => void}} options\n *   token：JWT（放 Authorization 標頭）；body：JSON 本文；signal：AbortController 的 signal，用來中止串流；\n *   onData：每收到一筆 data 就呼叫一次（不含 [DONE]）\n * @returns {Promise<void>} 串流正常結束時 resolve；HTTP 非 2xx 時 reject ApiError；被中止時 reject AbortError\n */\nexport async function streamSse(url, { token = null, body, signal, onData }) {\n  const headers = { \'Content-Type\': \'application/json\' }\n  if (token) headers.Authorization = `Bearer ${token}`\n  const r = await fetch(url, { method: \'POST\', headers, body: JSON.stringify(body ?? {}), signal })\n\n  if (!r.ok) {\n    // 錯誤本文可能是 JSON（後端 ApiError）、也可能是空的（401/403 由 Spring Security 直接回傳），先讀文字再試著解析\n    const text = await r.text().catch(() => \'\')\n    let data = null\n    try { data = text ? JSON.parse(text) : null } catch { data = null }\n    const fallback = r.status === 401 ? \'登入已失效，請重新登入\'\n      : r.status === 403 ? \'沒有權限執行此操作\'\n      : `客服暫時無法回覆（HTTP ${r.status}）`\n    throw new ApiError(r.status, data?.message || fallback, Array.isArray(data?.details) ? data.details : [])\n  }\n\n  // 逐段讀取回應本文：網路分段與 SSE 事件邊界不一定對齊，所以先累積在 buffer，再依空行切出完整事件\n  const reader = r.body.getReader()\n  // stream: true 讓被切在兩段之間的中文（多位元組 UTF-8）能正確接起來\n  const decoder = new TextDecoder(\'utf-8\')\n  // 尚未組成完整事件的文字\n  let buffer = \'\'\n  try {\n    while (true) {\n      const { value, done } = await reader.read()\n      if (done) break\n      // 統一換行為 \\n（\\r\\n 可能被切在兩段之間，所以每次對整個 buffer 正規化）\n      buffer = (buffer + decoder.decode(value, { stream: true })).replace(/\\r\\n/g, \'\\n\')\n      let sep\n      while ((sep = buffer.indexOf(\'\\n\\n\')) !== -1) {\n        const data = parseEvent(buffer.slice(0, sep))\n        buffer = buffer.slice(sep + 2)\n        if (data === null) continue\n        if (data === \'[DONE]\') return\n        onData(data)\n      }\n    }\n    // 連線結束時 buffer 可能還剩最後一個沒有空行結尾的事件\n    buffer += decoder.decode()\n    const last = parseEvent(buffer.replace(/\\r\\n/g, \'\\n\').trim())\n    if (last !== null && last !== \'[DONE]\') onData(last)\n  } finally {\n    // 提早 return（收到 [DONE]）或發生錯誤時，取消讀取以釋放連線\n    reader.cancel().catch(() => {})\n  }\n}\n\n/**\n * 解析一個 SSE 事件區塊，取出 data 內容。\n * @param {string} block 一個事件的文字（不含結尾空行）\n * @returns {string|null} 多行 data 以 \\n 合併後的內容；沒有 data 行時回傳 null\n */\nfunction parseEvent(block) {\n  // 這個事件中所有 data 行的內容\n  const lines = []\n  for (const line of block.split(\'\\n\')) {\n    if (!line.startsWith(\'data:\')) continue\n    const v = line.slice(5)\n    lines.push(v.startsWith(\' \') ? v.slice(1) : v)\n  }\n  return lines.length > 0 ? lines.join(\'\\n\') : null\n}'
              }
            },
            {
              title: '流式打字機效果與自動滾動',
              type: 'code',
              paragraphs: [
                '為了提升使用者體驗，聊天室通常需要具備「打字機流式輸出」與「新訊息自動滾動到底部」的功能。我們可以使用 React 的 `useRef` 與 `useEffect` 來追蹤對話列表的長度並進行滾動。'
              ],
              code: {
                language: 'javascript',
                title: 'ChatRoom.jsx — 自動滾動到底部',
                content: 'const messageEndRef = useRef(null);\n\n// 監聽訊息陣列變動，若有新訊息或新字元，自動滾動到底部\nuseEffect(() => {\n  messageEndRef.current?.scrollIntoView({ behavior: "smooth" });\n}, [messages]);\n\nreturn (\n  <div className="chat-container">\n    <div className="messages-list">\n      {messages.map(msg => (\n        <div key={msg.id} className={`message-bubble ${msg.sender}`}>\n          {msg.text || "▍"}\n        </div>\n      ))}\n      <div ref={messageEndRef} />\n    </div>\n  </div>\n);'
              }
            },
            {
              title: '完整的 ChatRoom.jsx 元件範例',
              type: 'code',
              paragraphs: [
                '以下是智慧客服聊天室的 React 元件完整實作。包含 isThinking（AI 正在搜尋資料庫或呼叫工具中）狀態提示、isGenerating（AI 正在輸出）狀態鎖定、自動滾動到底部，以及 quickPrompts 快捷對話指令按鈕。範例的 class（<code>msg-row</code>、<code>quick-btn</code>、<code>chat-input-bar</code>）只示範結構，你的專案由 AI 命名即可，e2e 會依實際畫面挑選擇器。'
              ],
              code: {
                language: 'jsx',
                title: 'ChatRoom.jsx',
                content: 'import React, { useState, useEffect, useRef } from \'react\';\nimport \'./ChatRoom.css\';\nimport { streamSse } from \'./sseClient\';\n\n/**\n * 智慧客服聊天室元件\n * 以 fetch 呼叫 POST /api/ai/stream（Token 放 Authorization 標頭、問題放 JSON 本文），\n * 經 sseClient 逐段讀取 SSE (Server-Sent Events) 串流；支援 AI 工具呼叫狀態提示、快捷對話指令、自動滾動，\n * 以及關閉視窗或送出新問題時以 AbortController 中止串流。\n * @param {string} token 登入 Token（放在 Authorization 標頭，不放網址）\n * @param {(usedToken: string) => void} onUnauthorized 串流回 401 時呼叫，由上層走登出流程\n */\nexport default function ChatRoom({ token, onUnauthorized }) {\n  // 對話歷史紀錄\n  const [messages, setMessages] = useState([]);\n  // 輸入框中的文字內容\n  const [input, setInput] = useState(\'\');\n  // AI 正在思考或呼叫工具的狀態（決定是否顯示載入中提示）\n  const [isThinking, setIsThinking] = useState(false);\n  // AI 正在輸出字元片段的狀態（決定是否鎖定輸入與發送按鈕）\n  const [isGenerating, setIsGenerating] = useState(false);\n  // 對話 Session 識別碼，確保不同使用者與會話的歷史記憶互相隔離\n  const [sessionId] = useState(() => `session_${Math.random().toString(36).substr(2, 9)}`);\n  // 用於控制滾動到底部的 DOM 參照\n  const messagesEndRef = useRef(null);\n  // 目前串流的 AbortController：關閉視窗或送出新問題時用來中止請求\n  const abortRef = useRef(null);\n\n  // 定義快捷對話指令，方便學員一鍵測試工具呼叫與 RAG 推薦\n  const quickPrompts = [\n    { label: "🔍 詢問所有商品", text: "有哪些商品？" },\n    { label: "📦 查詢 alice 的訂單", text: "我是 alice，我買了哪些東西？" },\n    { label: "☀️ 台北即時天氣", text: "台北今天天氣如何？" },\n    { label: "✨ 長期記憶語意推薦", text: "根據我之前說過的需求，幫我推薦商城裡的商品" }\n  ];\n\n  // 監聽對話紀錄 messages 變化，自動平滑滾動到底部\n  useEffect(() => {\n    messagesEndRef.current?.scrollIntoView({ behavior: \'smooth\' });\n  }, [messages]);\n\n  // 元件卸載（關閉聊天視窗）時中止尚未結束的串流\n  useEffect(() => () => abortRef.current?.abort(), []);\n\n  /**\n   * 處理點擊發送按鈕或在輸入框按下 Enter 鍵的事件\n   */\n  const handleSendClick = () => {\n    if (!input.trim() || isGenerating || isThinking) return;\n    handleSend(input);\n    setInput(\'\');\n  };\n\n  /**\n   * 以 POST 送出問題並逐段讀取後端串流（一個問題只送一次請求）\n   * @param {string} text - 使用者發送的 Prompt 內容\n   */\n  const handleSend = (text) => {\n    // 1. 新增使用者的提問，以及一個初始空白的 AI 回應物件（作為打字機效果容器）\n    const userMsg = { id: Date.now(), sender: "user", text };\n    const assistantMsg = { id: Date.now() + 1, sender: "assistant", text: "" };\n    setMessages(prev => [...prev, userMsg, assistantMsg]);\n\n    setIsThinking(true);     // 啟動「正在思考/呼叫工具」的載入狀態\n    setIsGenerating(true);   // 鎖定發送與輸入，防止重複提交\n\n    // 2. 送出新問題前，先中止上一個還沒結束的串流\n    abortRef.current?.abort();\n    const controller = new AbortController();\n    abortRef.current = controller;\n\n    // 3. POST /api/ai/stream：Token 放 Authorization 標頭、問題放 JSON 本文；每收到一筆 data 就追加文字\n    streamSse(\'/api/ai/stream\', {\n      token,\n      body: { message: text },\n      signal: controller.signal,\n      onData: (data) => {\n        setIsThinking(false); // 收到第一個字元片段，代表思考/工具呼叫完畢，關閉思考狀態\n        setMessages(prev => {\n          const updated = [...prev];\n          const lastIndex = updated.length - 1;\n          updated[lastIndex] = {\n            ...updated[lastIndex],\n            text: updated[lastIndex].text + data // 逐字追加生成內容\n          };\n          return updated;\n        });\n      }\n    })\n      .catch((err) => {\n        if (err.name === \'AbortError\') return;           // 關閉視窗或送出新問題而中止：不顯示錯誤\n        if (err.status === 401) onUnauthorized?.(token);  // Token 失效：交給上層走登出流程\n        // 其他錯誤（非 2xx 或斷線）顯示在最後一則 AI 訊息\n        const reason = err.status ? err.message : \'連線發生錯誤，請稍後再試\';\n        setMessages(prev => {\n          const updated = [...prev];\n          const lastIndex = updated.length - 1;\n          updated[lastIndex] = { ...updated[lastIndex], text: updated[lastIndex].text + `（${reason}）` };\n          return updated;\n        });\n      })\n      .finally(() => {\n        // 4. 正常結束（收到 [DONE]）、錯誤或中止都解除鎖定\n        setIsThinking(false);\n        setIsGenerating(false);\n      });\n  };\n\n  return (\n    <div className="chat-window">\n      <div className="chat-header">\n        <h3>Antigravity 智慧客服聊天室</h3>\n        <span className="session-badge">Session ID: {sessionId}</span>\n      </div>\n      \n      {/* 對話對話區 */}\n      <div className="messages-container">\n        {messages.map(msg => (\n          <div key={msg.id} className={`msg-row ${msg.sender}`}>\n            <div className="avatar">{msg.sender === \'user\' ? \'👤\' : \'🤖\'}</div>\n            <div className="bubble">\n              {msg.text || <span className="cursor">▍</span>}\n            </div>\n          </div>\n        ))}\n        \n        {/* 展示 AI 呼叫工具或思考中的狀態提示 */}\n        {isThinking && (\n          <div className="msg-row assistant">\n            <div className="avatar">🤖</div>\n            <div className="bubble thinking">\n              <span className="loading-dots">AI 正在搜尋資料庫或呼叫工具中...</span>\n            </div>\n          </div>\n        )}\n        \n        <div ref={messagesEndRef} />\n      </div>\n\n      {/* 快速對話指令區 */}\n      <div className="quick-actions">\n        {quickPrompts.map((p, idx) => (\n          <button \n            key={idx} \n            onClick={() => handleSend(p.text)} \n            disabled={isGenerating || isThinking}\n            className="quick-btn"\n          >\n            {p.label}\n          </button>\n        ))}\n      </div>\n\n      {/* 輸入欄區 */}\n      <div className="chat-input-bar">\n        <input \n          type="text" \n          value={input} \n          disabled={isGenerating || isThinking}\n          onChange={e => setInput(e.target.value)}\n          placeholder={isGenerating || isThinking ? "AI 正在回覆中..." : "請輸入您的問題..."}\n          onKeyDown={e => e.key === \'Enter\' && handleSendClick()}\n        />\n        <button onClick={handleSendClick} disabled={isGenerating || isThinking || !input.trim()}>\n          發送\n        </button>\n      </div>\n    </div>\n  );\n}'
              }
            },
            {
              title: '對應的 CSS 樣式支援 (ChatRoom.css)',
              type: 'code',
              paragraphs: [
                '以下是聊天室的精美樣式，包含對話泡泡、思考中加載動畫與快速觸發按鈕的 Hover 效果。這裡的樣式先維持與 2-4 章基本版一致，章末升級時會一起換成品牌風格。'
              ],
              code: {
                language: 'css',
                title: 'ChatRoom.css',
                content: '.chat-window {\n  width: 500px;\n  height: 650px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e0e0e0;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(0,0,0,0.08);\n  background: #ffffff;\n}\n.chat-header {\n  padding: 16px;\n  background: linear-gradient(135deg, #4f46e5, #3b82f6);\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.chat-header h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.session-badge {\n  font-size: 11px;\n  background: rgba(255,255,255,0.2);\n  padding: 4px 8px;\n  border-radius: 20px;\n}\n.messages-container {\n  flex: 1;\n  padding: 16px;\n  overflow-y: auto;\n  background-color: #f8fafc;\n}\n.msg-row {\n  display: flex;\n  margin-bottom: 16px;\n  align-items: flex-start;\n}\n.msg-row.user {\n  flex-direction: row-reverse;\n}\n.avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.msg-row.user .avatar {\n  background: #dbeafe;\n}\n.msg-row.assistant .avatar {\n  background: #e0e7ff;\n}\n.bubble {\n  max-width: 70%;\n  padding: 10px 14px;\n  border-radius: 12px;\n  margin: 0 8px;\n  font-size: 14px;\n  line-height: 1.5;\n  word-break: break-all;\n}\n.msg-row.user .bubble {\n  background-color: #3b82f6;\n  color: white;\n  border-top-right-radius: 2px;\n}\n.msg-row.assistant .bubble {\n  background-color: white;\n  color: #1e293b;\n  border-top-left-radius: 2px;\n  border: 1px solid #e2e8f0;\n}\n.bubble.thinking {\n  background-color: #f1f5f9;\n  color: #64748b;\n  font-style: italic;\n}\n.loading-dots {\n  display: inline-block;\n  animation: pulse 1.5s infinite;\n}\n@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}\n.cursor {\n  animation: blink 1s infinite;\n  color: #3b82f6;\n}\n@keyframes blink {\n  50% { opacity: 0; }\n}\n.quick-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #ffffff;\n  border-top: 1px solid #f1f5f9;\n}\n.quick-btn {\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.quick-btn:hover:not(:disabled) {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.quick-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.chat-input-bar {\n  display: flex;\n  padding: 16px;\n  background: #ffffff;\n  border-top: 1px solid #e2e8f0;\n  gap: 8px;\n}\n.chat-input-bar input {\n  flex: 1;\n  padding: 10px 14px;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  outline: none;\n  font-size: 14px;\n}\n.chat-input-bar input:focus {\n  border-color: #3b82f6;\n}\n.chat-input-bar button {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 0 18px;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.chat-input-bar button:hover:not(:disabled) {\n  background: #2563eb;\n}\n.chat-input-bar button:disabled {\n  background: #cbd5e1;\n  cursor: not-allowed;\n}'
              }
            },
            {
              title: '對話中商品、訂單、推薦的卡片元件呈現方式',
              type: 'code',
              paragraphs: [
                '在智慧客服中，AI 回應不應只是死板的 Markdown 文字，更應該在適當時機，動態將對應的「React 商品卡片、訂單物流卡片、語意推薦卡片」嵌入到對話流中，提昇 UI/UX 質感。',
                '前端 ChatRoom.jsx 採用「自動偵測與條件渲染」機制來實作此功能：',
                '1. 串流偵測 (detectAndAttachCards)：當前端從串流收到後端 AI 推播的字元片段時，會將目前的完整對話內容 (fullResponse) 傳入進行關鍵字匹配。當匹配到商品名稱 (如耳機、鍵盤)、或涉及訂單關鍵字且提及使用者 alice 時，自動在訊息物件中附加對應的 `cards` 資料。',
                '2. 條件渲染 (renderCards)：在 React 渲染訊息列表時，如果訊息物件含有 `cards` 屬性，則呼叫 `renderCards` 方法，根據 `cards.cardType` 分別渲染出 <ProductCard />、<OrderCard />、或 <RecommendationCard />。'
              ],
              code: {
                language: 'javascript',
                title: 'ChatRoom.jsx — 核心動態識別與元件渲染邏輯',
                content: '/**\n * 偵測 AI 回覆內容並自動對應卡片數據\n */\nconst detectAndAttachCards = (text) => {\n  // 1. 商品卡片或語意推薦卡片偵測\n  const matchedProducts = storeProducts.filter(p => text.toLowerCase().includes(p.name.toLowerCase()));\n  if (matchedProducts.length > 0) {\n    if (text.includes("推薦") || text.includes("適合您")) {\n      return { cardType: "recommendations", list: matchedProducts };\n    }\n    return { cardType: "products", list: matchedProducts };\n  }\n\n  // 2. 訂單物流卡片偵測\n  if (text.includes("訂單") && (text.includes("alice") || text.includes("Alice"))) {\n    return { cardType: "orders", list: [/* 來自後端查出的訂單明細 */] };\n  }\n  return null;\n};\n\n/**\n * 條件式渲染不同的 React 元件卡片\n */\nconst renderCards = (cards) => {\n  if (!cards) return null;\n  switch (cards.cardType) {\n    case "products":\n      return <div className="products-grid">{/* 渲染商品網格元件 */}</div>;\n    case "orders":\n      return <div className="orders-list">{/* 渲染物流訂單元件 */}</div>;\n    case "recommendations":\n      return <div className="recommendations-list">{/* 渲染推薦商品元件 */}</div>;\n    default:\n      return null;\n  }\n};'
              }
            },
            {
              title: 'AI Agent 提示詞 — 前端串流與安全認證',
              type: 'code',
              paragraphs: [
                '理解 SSE 原理、fetch 讀取串流的要點與安全考量後，複製以下提示詞給 AI Agent，引導它為你的 React 前端聊天室實作 SSE 串流連線（fetch + POST，Token 放 Authorization 標頭）。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞',
                content: '幫前端加上登入、商品上架和 AI 客服聊天：\n- 登入後顯示帳號和登出按鈕；管理員才看得到「商品上架」\n- 右下角的 AI 客服接後端的串流 API（POST /api/ai/stream），回覆要逐字出現\n- Token 放在 Authorization 標頭，不要放在網址\n有不清楚的地方先問我，做完示範給我看。'
              }
            },
            {
              title: '系統運行展示：AI 基礎對話畫面',
              type: 'text',
              paragraphs: [
                '智慧客服機器人的首頁與打招呼畫面。當使用者開啟聊天室時，機器人會主動打招呼並列出支援的功能與快捷指令，提供順暢的客服引導體驗。'
              ],
              image: 'assets/teaching-site/demo-ai-chat.png',
              imageAlt: 'AI 基礎對話運行畫面',
              imageCaption: 'AI 基礎對話運行畫面：機器人主動打招呼並列出支援的功能與快捷指令。'
            },
            {
              title: '系統運行展示：商品資訊詢問卡片',
              type: 'text',
              paragraphs: [
                '當使用者詢問「有哪些商品」時，後端 AI 模型會自動呼叫 ProductTools 商品查詢工具，從 JPA 資料庫中取得最新的商品價格與庫存數據。前端收到資料後，會自動將文字清單轉換為精美的商品卡片網格。'
              ],
              image: 'assets/teaching-site/demo-product-query.png',
              imageAlt: '商品詢問運行畫面',
              imageCaption: '商品詢問運行畫面：將傳統 Markdown 文字自動映射並渲染為高質感的商品卡片網格，包含特價標籤與購買按鈕。'
            },
            {
              title: '系統運行展示：歷史訂單與物流追蹤',
              type: 'text',
              paragraphs: [
                '使用者詢問其購買紀錄時（例如「我是 alice，我買了哪些東西？」），AI 精確識別用戶名稱並呼叫 OrderTools 訂單查詢工具，回傳對應的歷史訂單。前端會將其渲染出包含訂單編號、出貨狀態與黑貓物流即時配送進度的卡片。'
              ],
              image: 'assets/teaching-site/demo-order-history.png',
              imageAlt: '訂單查詢運行畫面',
              imageCaption: '訂單查詢運行畫面：整合物流狀態的訂單卡片，清晰直觀地呈現使用者歷史交易紀錄與追蹤進度。'
            },
            {
              title: '系統運行展示：長期記憶語意商品推薦',
              type: 'text',
              paragraphs: [
                '當使用者點擊「長期記憶語意推薦」時，後端啟動雙路 RAG 檢索，同時在 pgvector 中查找此使用者在過去幾天內聊過的興趣與喜好（例如曾提及需要長時間配戴、需要重低音、預算三千左右等）。AI 結合記憶推薦商城中的特定商品，前端渲染出極具說服力的語意推薦卡片與降價理由。'
              ],
              image: 'assets/teaching-site/demo-rag-recommend.png',
              imageAlt: '語意推薦運行畫面',
              imageCaption: '語意推薦運行畫面：結合長期記憶 RAG 與向量檢索，分析用戶的潛在喜好，進行高精確度的商品與折扣卡片推薦。'
            },
            {
              title: '購物前端：購物袋、抽屜、確認框與訂單頁',
              type: 'text',
              paragraphs: [
                '後端的購物車、訂單、管理員 API 都在 1-9 章完成了，這一段把它們接到畫面上。元件分工如下，括號內是參考實作的 class 名稱（你的專案由 AI 命名，可能不同）。頁面切換先用最簡單的網址 hash（<code>#/orders</code>、<code>#/admin/orders</code>），章末升級的商品頁 <code>#/product/{id}</code> 會沿用同一套機制。'
              ],
              bullets: [
                '<strong>Header 購物袋</strong>（<code>cart-btn</code>、數量徽章 <code>cart-badge</code>）：未登入點擊時開登入表單；徽章只在有商品時顯示。',
                '<strong>購物車抽屜 CartDrawer</strong>（<code>cart-drawer</code>）：右側滑出，每個品項 <code>cart-item</code> 有數量加減（<code>qty-minus</code>／<code>qty-plus</code>）、移除（<code>remove-btn</code>）、小計；超過庫存時顯示警示並停用結帳鈕（<code>checkout-btn</code>）。',
                '<strong>畫面內確認框 ConfirmDialog</strong>（<code>confirm-dialog</code>、<code>confirm-ok</code>、<code>confirm-cancel</code>）：結帳、取消訂單、出貨前都先確認；不用 <code>window.confirm</code>（樣式無法控制、e2e 也難處理），Esc 或點背景等同取消，處理中停用按鈕避免重複送出。',
                '<strong>結帳結果</strong>（<code>checkout-result</code>、<code>order-no</code>）：成功顯示訂單編號與「查看我的訂單」；失敗顯示後端的 message，庫存不足時列出 details，購物車保留。',
                '<strong>我的訂單 <code>#/orders</code></strong>（<code>orders-page</code>、每筆 <code>order-row</code>，帶 <code>data-order-no</code>、<code>data-status</code> 屬性）：明細、狀態標籤、PENDING 可取消（<code>cancel-btn</code>）。這一頁<strong>沒有</strong>出貨按鈕。',
                '<strong>訂單管理 <code>#/admin/orders</code></strong>（<code>admin-orders-page</code>，入口 <code>admin-orders-link</code> 只有 ADMIN 看得到）：列出所有帳號的訂單與下單帳號（<code>order-user</code>）、狀態篩選（<code>status-filter</code>）、PENDING 可出貨（<code>ship-btn</code>）。<strong>出貨只在這一頁</strong>；一般使用者直接開這個網址會看到「僅限管理員」。',
                '<strong>AI 客服同步</strong>：加一個快捷問題「我的購物車有什麼？」（class <code>chat-chip</code>）；每次 AI 回覆結束（收到 <code>[DONE]</code>）就重新讀取購物車、商品與訂單——AI 工具可能已經在後端改了購物車，前端狀態是舊的。'
              ]
            },
            {
              title: 'api.js：先看狀態碼，401 與 403 分開處理',
              type: 'code',
              paragraphs: [
                '所有呼叫後端的地方都走同一個 <code>request()</code>：先看狀態碼再解析 body（Spring Security 擋下的 401／403 不經過 GlobalExceptionHandler，<strong>body 不是統一錯誤格式</strong>：依 SecurityConfig 的寫法可能是空的，也可能只有 <code>{error}</code> 沒有 message；空 body 直接 <code>res.json()</code> 會丟例外），失敗時丟出帶 <code>status</code>、<code>message</code>、<code>details</code> 的 <code>ApiError</code>，畫面直接顯示後端的中文 message。',
                '<strong>401 與 403 的處理不同</strong>：401 代表 Token 沒了或失效（例如後端重啟換了 JWT_SECRET），要清除登入並提示重新登入；403 代表已登入但沒有權限，只能顯示「沒有權限執行此操作」，<strong>不可以登出</strong>——否則一般使用者誤開管理頁就被踢出去了。另外只在「發出請求時的 Token 仍是目前的 Token」才登出，避免舊請求的 401 把剛重新登入的使用者踢掉。'
              ],
              code: {
                language: 'javascript',
                title: 'api.js — 共用的 request()（參考實作節錄）',
                content: '/**\n * 呼叫後端 API 並解析 JSON；失敗時丟出 ApiError（帶 status、message、details）。\n * 先看狀態碼再解析 body（401/403 的 body 可能是空的，也不是統一錯誤格式，不能直接 json()）。\n */\nexport async function request(url, { method = \'GET\', token = null, body } = {}) {\n  const headers = {}\n  if (token) headers.Authorization = `Bearer ${token}`\n  if (body !== undefined) headers[\'Content-Type\'] = \'application/json\'\n  const r = await fetch(url, { method, headers, body: body !== undefined ? JSON.stringify(body) : undefined })\n  const text = await r.text()\n  let data = null\n  if (text) {\n    try { data = JSON.parse(text) } catch { data = null }\n  }\n  if (!r.ok) {\n    // 401 = 沒登入或 token 失效（呼叫端會據此登出）；403 = 已登入但沒有權限（不可登出，只提示）\n    const fallback = r.status === 401 ? \'登入已失效，請重新登入\'\n      : r.status === 403 ? \'沒有權限執行此操作\'\n      : `操作失敗（HTTP ${r.status}）`\n    throw new ApiError(r.status, data?.message || fallback, Array.isArray(data?.details) ? data.details : [])\n  }\n  return data\n}\n\n// App.jsx：只有 401、而且是目前這個 token 的請求，才清除登入（一般 API 與 AI 串流共用）\nconst handleUnauthorized = (usedToken) => {\n  if (localStorage.getItem(\'token\') === usedToken) {\n    clearAuth()\n    setSessionNotice(true)   // 顯示「登入已失效，請重新登入」\n  }\n}\n\n// ChatRoom 收到 [DONE] 時通知 App 重新讀取購物車、商品與訂單；串流回 401 時走同一個登出流程\n<ChatRoom token={auth?.token} onReplyDone={refreshAll} onUnauthorized={handleUnauthorized} />'
              }
            },
            {
              title: 'AI Agent 提示詞 — 購物車與訂單前端',
              type: 'code',
              paragraphs: [
                '把 class 名稱寫進提示詞，是為了讓本章稍後的購物流程 e2e（verify-cart）與章末升級都有穩定的選擇器；<code>data-order-no</code>、<code>data-status</code> 讓 e2e 能精準找到「自己建立的那一筆訂單」，不必依賴畫面文字。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞',
                content: '幫前端加上購物功能，後端的 API 都做好了，不要改後端：\n- 購物袋顯示件數，購物車可以改數量、移除、結帳\n- 我的訂單，可以取消還沒出貨的訂單\n- 管理員的訂單管理頁，可以出貨\n- 結帳、取消、出貨前要先跳確認框，不要用瀏覽器的 confirm\n- 出錯時顯示後端回的訊息\n有不清楚的地方先問我，做完走一次購物流程給我看。'
              }
            },
            {
              title: '完成畫面樣本：購物袋、確認框、我的訂單與訂單管理',
              type: 'text',
              paragraphs: [
                '做完這一段，畫面應該長這樣。截圖來自用本課程提示詞實作的參考專案，是<strong>章末升級（ui-ux-pro-max）之後</strong>的樣式；升級前的基本版外觀比較簡單，但元件、流程與 class 都相同，對照時看「有沒有這些元件、操作後狀態對不對」，不必追求外觀一樣。截圖中的訂單是示範時建立的，擷取後已刪除並還原庫存。'
              ],
              bullets: [
                '購物車抽屜：點 Header 購物袋從右側滑出，每個品項有數量加減、移除與小計，底部是件數、總金額與「結帳」鈕<br><a href="assets/samples/06-cart-drawer.jpg" target="_blank"><img src="assets/samples/06-cart-drawer.jpg" alt="購物車抽屜：點 Header 購物袋從右側滑出，每個品項有數量加減、移除與小計，底部是件數、總金額與「結帳」鈕" style="width:100%;max-width:640px;border-radius:12px;margin-top:6px;border:1px solid var(--border);"></a>',
                '按「結帳」後先出現畫面內確認框（不是瀏覽器的 window.confirm），列出件數與金額；按「取消」什麼都不會發生<br><a href="assets/samples/07-checkout-confirm.jpg" target="_blank"><img src="assets/samples/07-checkout-confirm.jpg" alt="按「結帳」後先出現畫面內確認框（不是瀏覽器的 window.confirm），列出件數與金額；按「取消」什麼都不會發生" style="width:100%;max-width:640px;border-radius:12px;margin-top:6px;border:1px solid var(--border);"></a>',
                '確認結帳後點「查看我的訂單」：新訂單在最上面、狀態待出貨、有明細與合計，PENDING 訂單有「取消訂單」，這一頁沒有出貨鈕<br><a href="assets/samples/08-my-orders.jpg" target="_blank"><img src="assets/samples/08-my-orders.jpg" alt="確認結帳後點「查看我的訂單」：新訂單在最上面、狀態待出貨、有明細與合計，PENDING 訂單有「取消訂單」，這一頁沒有出貨鈕" style="width:100%;max-width:640px;border-radius:12px;margin-top:6px;border:1px solid var(--border);"></a>',
                'admin 的「訂單管理」頁：篩選「待出貨」，每筆顯示下單帳號 user，PENDING 訂單有「出貨」鈕（按下後同樣先跳確認框）<br><a href="assets/samples/09-admin-orders.jpg" target="_blank"><img src="assets/samples/09-admin-orders.jpg" alt="admin 的「訂單管理」頁：篩選「待出貨」，每筆顯示下單帳號 user，PENDING 訂單有「出貨」鈕（按下後同樣先跳確認框）" style="width:100%;max-width:640px;border-radius:12px;margin-top:6px;border:1px solid var(--border);"></a>',
                'AI 客服「幫我結帳」→「確定」：AI 先列出品項與總金額並詢問，使用者在下一則訊息回「確定」後，由 2-2 的程式層確認直接結帳，回固定格式的訂單編號；回覆結束時購物袋徽章自動消失<br><a href="assets/samples/10-chat-checkout.jpg" target="_blank"><img src="assets/samples/10-chat-checkout.jpg" alt="AI 客服「幫我結帳」→「確定」：AI 先列出品項與總金額並詢問，使用者在下一則訊息回「確定」後，由 2-2 的程式層確認直接結帳，回固定格式的訂單編號；回覆結束時購物袋徽章自動消失" style="width:100%;max-width:640px;border-radius:12px;margin-top:6px;border:1px solid var(--border);"></a>',
                '手機寬（390px）的購物車抽屜：佔滿整個畫面，按鈕與數量加減仍然好點<br><a href="assets/samples/11-mobile-cart-drawer.jpg" target="_blank"><img src="assets/samples/11-mobile-cart-drawer.jpg" alt="手機寬（390px）的購物車抽屜：佔滿整個畫面，按鈕與數量加減仍然好點" style="width:100%;max-width:320px;border-radius:12px;margin-top:6px;border:1px solid var(--border);"></a>'
              ]
            },
            {
              title: 'e2e：購物流程 verify-cart 的寫法與注意事項',
              type: 'code',
              paragraphs: [
                '購物前端完成後，先把購物流程寫成 e2e，章末升級與之後各章才有回歸檢查可用。購物流程的 e2e 會真的建立訂單、扣庫存、出貨，比只看畫面的測試更容易「時好時壞」或把資料弄亂。0-1 章的 e2e 注意事項在這裡全部用得上，下面是參考實作 <code>e2e/verify-cart.mjs</code>（課前實測 60 項檢查全部通過）的寫法重點。'
              ],
              bullets: [
                '<strong>等條件，不等秒數</strong>：全程禁用 <code>waitForTimeout</code>。等徽章用 <code>waitForFunction</code> 比對文字；等訂單狀態用 <code>.order-row[data-order-no="…"]</code> 的 <code>data-status</code>；等 API 用 <code>waitForResponse</code>／<code>waitForRequest</code>。',
                '<strong>開始前記錄、結束時斷言</strong>：開始前用 <code>GET /api/products</code> 記下全部庫存、用 psql 記下訂單總數，並清空 user、admin 的購物車；結束時（放在 <code>finally</code>，失敗也會執行）斷言庫存、訂單總數與開始前一致、購物車為空。',
                '<strong>只清理自己建立的資料，而且要刪乾淨</strong>：用結帳回傳的 orderNo 記錄「本測試建立的訂單」，清理時只動這些：仍是 PENDING 的先用 API 取消（退回庫存），已出貨的用 <code>docker exec … psql</code> 依明細補回庫存，最後把這些訂單（含已取消的）連同明細從資料庫刪除。只取消不刪除，訂單總數會比開始前多，「訂單總數一致」永遠不會過。種子訂單（例如 ORD-20261109-003）一律不碰。',
                '<strong>AI 有隨機性，用攔截驗接線</strong>：用 <code>page.route(\'**/api/ai/stream**\')</code> 攔截前端送出的 <code>POST /api/ai/stream</code>、回固定的 SSE，同時檢查請求是 POST、Token 在 Authorization 標頭、網址沒有查詢參數、問題在 JSON 本文；並驗證「AI 回覆結束後前端會重抓 <code>/api/cart</code>、<code>/api/products</code>、<code>/api/orders/me</code>，徽章自動更新」。攔截只換掉模型的回覆，後端購物車不會變，所以觸發前先用 API 替 user 在後端加 1 件（模擬 AI 工具加入）；<code>/api/orders/me</code> 只在我的訂單頁讀取，所以在 <code>#/orders</code> 頁觸發。模型本身的「先詢問再執行」由後端單元測試與 2-2 的示範腳本驗證，不放進每次都要跑的 e2e。',
                '<strong>串流的 401 與中止也要測</strong>：攔截後讓 <code>/api/ai/stream</code> 回 401，確認走登出流程（顯示登入失效、聊天室改回「請先登入」）；攔截後故意不回應，在回覆還沒結束時關閉聊天視窗，用 <code>page.waitForEvent(\'requestfailed\')</code> 確認請求被 AbortController 中止。',
                '<strong>錯誤情境也用攔截</strong>：用 <code>page.route</code> 讓結帳回 409（含 details），確認畫面顯示後端的 message 與品項清單——不必真的把庫存弄到不夠。',
                '<strong>權限要測「不該看到」</strong>：user 的 Header 沒有訂單管理入口；直接開 <code>#/admin/orders</code> 顯示僅限管理員；把 localStorage 的 role 改成 ADMIN 後重新整理，後端回 403 時畫面顯示權限錯誤但不登出。',
                '<strong>出貨要另建一筆待出貨訂單</strong>：前面流程的訂單已經取消，admin 出貨前先以 user 用 API 再下一筆訂單（記入本測試建立的訂單），訂單管理頁才有 PENDING 的訂單可以出貨。',
                '<strong>不能有原生對話框</strong>：<code>page.on(\'dialog\')</code> 計數，全程必須是 0（確認一律用畫面內確認框）。'
              ],
              code: {
                language: 'javascript',
                title: 'e2e/verify-cart.mjs — 關鍵寫法（參考實作節錄）',
                content: '// 開始前記錄庫存與訂單總數（結束時必須一致）與本測試建立的訂單（清理用）\nconst stock0 = await stocks();\nconst orderCount0 = Number(psql(\'select count(*) from orders\'));\nconst createdOrders = [];\n\n/** 等購物袋徽章變成指定數字（0 表示徽章消失）：等條件，不等秒數 */\nasync function waitBadge(page, count) {\n  await page.waitForFunction((n) => {\n    const b = document.querySelector(\'.cart-badge\');\n    return n === 0 ? !b : b?.textContent.trim() === String(n);\n  }, count);\n}\n\n/** 等某一筆訂單的狀態變成指定值（用 data-order-no 精準定位自己建立的那一筆） */\nasync function waitOrderStatus(page, orderNo, status) {\n  await page.waitForFunction(([no, s]) =>\n    document.querySelector(`.order-row[data-order-no="${no}"]`)?.dataset.status === s, [orderNo, status]);\n}\n\n// 結帳後用 API 交叉比對庫存\ncheck(\'結帳後庫存扣 2（API 交叉比對）\', (await stocks()).get(PRODUCT_USER) === stock0.get(PRODUCT_USER) - 2);\n\n// AI 回覆用攔截取代真實模型（在 #/orders 頁觸發：/api/orders/me 只在訂單頁讀取）\n// 同時記下前端送出的串流請求：必須是 POST、Token 在 Authorization 標頭、問題在 JSON 本文、網址沒有查詢參數\nconst streamCalls = [];\nawait page.route(\'**/api/ai/stream**\', (route) => {\n  const req = route.request();\n  streamCalls.push({ method: req.method(), url: req.url(), auth: req.headers()[\'authorization\'], body: req.postData() });\n  return route.fulfill({\n    status: 200, contentType: \'text/event-stream\',\n    body: \'data: 你的購物車有 1 件商品\\n\\ndata: [DONE]\\n\\n\',\n  });\n});\n// 攔截不會改後端購物車：先用 API 模擬 AI 工具在後端加入 1 件（此時畫面徽章還是舊的）\nawait api(userToken, \'POST\', \'/api/cart/items\', { productId: PRODUCT_USER, quantity: 1 });\nconst reqs = [\'/api/cart\', \'/api/products\', \'/api/orders/me\'].map((p) =>\n  page.waitForRequest((r) => r.method() === \'GET\' && r.url().endsWith(p)));\nawait page.locator(\'.chat-chip\', { hasText: \'我的購物車有什麼？\' }).click();\nawait Promise.all(reqs);   // 回覆結束後三個 API 都重新讀取\nawait waitBadge(page, 1);  // 徽章自動更新\ncheck(\'AI 串流：只送 1 次 POST，網址沒有查詢參數\', streamCalls.length === 1 && streamCalls[0].method === \'POST\' && !new URL(streamCalls[0].url).search);\ncheck(\'AI 串流：問題放在 JSON 本文\', JSON.parse(streamCalls[0].body).message === \'我的購物車有什麼？\');\nawait page.unroute(\'**/api/ai/stream**\');\n\n// 清理放在 finally：失敗也要還原\n} finally {\n  for (const no of createdOrders) {\n    for (const t of [userToken, adminToken]) await api(t, \'POST\', `/api/orders/${no}/cancel`);   // PENDING -> 退回庫存\n    purgeOrder(no);   // psql：非 CANCELLED 的依明細補回庫存，再刪除明細與訂單（含已取消的）\n  }\n  const stock1 = await stocks();\n  check(\'結束：全部商品庫存與開始前一致\', [...stock0].every(([id, s]) => stock1.get(id) === s));\n  check(\'結束：訂單總數與開始前一致\', Number(psql(\'select count(*) from orders\')) === orderCount0);\n}'
              }
            },
            {
              title: 'AI Agent 提示詞 — 購物流程 e2e',
              type: 'code',
              paragraphs: [
                '提示詞只交代要測什麼；上面的注意事項是驗收重點。AI 寫完後連跑兩次，第二次也要全部通過、資料要還原，才不會「第一次過、第二次掛」。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞',
                content: '幫我寫一支 Playwright 腳本 e2e/verify-cart.mjs 測試購物流程：登入、加入購物車、結帳、查訂單、取消，還有管理員出貨。\nAI 客服的回覆用攔截假造，不要呼叫真的模型。測試結束要把資料還原，連跑兩次都要通過。\n有不清楚的地方先問我。'
              }
            },
            {
              title: '章末升級：用 ui-ux-pro-max 把商城變成品牌官網',
              type: 'code',
              paragraphs: [
                '到這裡商城的功能都齊了，但畫面還是 2-4 章 AI 自由發揮的樣子。請先把目前的首頁截圖存起來，接著用 <strong>ui-ux-pro-max</strong> 設計技能升級：它內建風格、配色、字體與 UX 規則資料庫，會先依產品類型產生<strong>設計系統</strong>（配色、字體、間距、要避免的樣式），AI 再照設計系統實作，視覺就有依據，不再是模型的預設口味。',
                '安裝：在 VS Code 的 Claude Code 插件或 Claude 桌面版開啟插件管理畫面，新增 marketplace <code>nextlevelbuilder/ui-ux-pro-max-skill</code>，再安裝其中的 ui-ux-pro-max 插件，裝完重新開啟。它的搜尋腳本需要 Python 3（0-1 章已安裝）。',
                '素材：Hero 大圖、分類情境圖、客服頭像已放在 2-4 章的<a href="assets/downloads/product-images.zip" download>素材包 product-images.zip</a> 的 <code>brand/</code> 資料夾，解壓後放到 <code>frontend/public/images/brand/</code>。',
                '<strong>技能提供素材，方向由你決定</strong>：實測用「premium consumer electronics brand store apple minimal」查設計系統，會得到 Liquid Glass（毛玻璃）風格與黑金配色——這正是我們要避開的 AI 感。所以提示詞分兩步：設計系統只取字體、版面與 UX 檢查清單，配色另外用 color 領域查「Monochrome + blue accent」。這就是用設計技能的正確姿勢：讓它列出有根據的選項，你負責取捨並說明理由。',
                'ui-ux-pro-max 的完整用法（<code>--domain</code> 補查單一領域、<code>--persist</code> 保存設計系統、三個調整旋鈕、<code>--stack</code> 技術堆疊規則）見<a href="#d2-u10">補充章節 2-10「AI 開發工作流程」</a>。',
                '提示詞最後會請 AI 用 0-1 章學的 Playwright 寫一支 <code>e2e/verify-upgrade.mjs</code> 驗證升級結果，再重跑本章購物前端之後寫好的 <code>e2e/verify-cart.mjs</code>，確認購物流程沒被改壞；2-8 章的完整 e2e 會再把登入、上架、AI 客服全部驗一次。',
                '升級後的首頁：深色 Hero 主打商品、購物保障、分類大圖、本週精選、可篩選的全部商品；商品改為獨立頁面，可一鍵把商品帶進 AI 客服提問。<br><a href="assets/samples/01-visitor-home.jpg" target="_blank"><img src="assets/samples/01-visitor-home.jpg" alt="升級後的品牌官網首頁" style="width:100%;max-width:640px;border-radius:12px;margin-top:6px;border:1px solid var(--border);"></a>'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 用 ui-ux-pro-max 升級成品牌官網',
                content: '用 ui-ux-pro-max 技能，把商城前端改成像 Apple 官網那種簡潔的品牌購物網站，後端不要改：\n- 白底、近黑文字、只用一個藍色強調色，不要漸層和毛玻璃\n- 首頁要有大圖主視覺、分類、精選商品；商品詳情改成獨立頁面\n- 素材（主視覺、分類圖、客服頭像）我已經放在 frontend/public/images/brand/\n改版前後都跑一次 e2e/verify-cart.mjs，購物功能不能壞；e2e 失敗時只能改操作步驟，不能改檢查項目。\n有不清楚的地方先問我，最後截圖給我看。'
              }
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ 改版前後都跑 e2e</strong>：章末升級會大改畫面。請 AI 改版前先跑一次購物流程 e2e 確認全過，改完再跑；選擇器找不到時把元素補回畫面，或只更新 e2e 的操作步驟，檢查項目不能改。',
                '<strong>⚠ 一次提問只送一次請求，關窗要中止</strong>：在 <code>useEffect</code> 裡發請求，React StrictMode 開發模式會執行兩次，同一個問題送兩次；請 AI 在送出鈕的事件處理函式裡呼叫，並用 Playwright 計算 <code>POST /api/ai/stream</code> 的次數：問 4 次只能有 4 次。AI 也常漏掉 AbortController，關掉聊天視窗後請求還在跑；verify-cart 的「關閉聊天視窗時中止進行中的串流請求」就是檢查這件事。',
                '<strong>401 和 403 要分開處理</strong>：AI 寫錯誤處理時常一律登出。403 是已登入但沒有權限，只能提示，不能登出；用本章示範的「把 localStorage 的 role 改成 ADMIN」實際測一次。',
                '<strong>⚠ Token 與問題不放網址</strong>：所有 API（含 AI 串流）都只認 Authorization 標頭。AI 參考網路上的舊範例時，常把串流改回 GET、把 Token 和問題放進網址參數，Token 就會出現在存取日誌與瀏覽器歷史（第一輪演練提出的問題）。看到這種寫法，或在日誌印出 Token，請它改回 fetch + POST。',
                '<strong>打字機只改善體感</strong>：Muse 帶工具時整段一次送達，打字機效果不會讓回答變快。不要讓 AI 為了「更快」去改後端串流或調逾時。',
                '<strong>設計技能給選項，你負責取捨</strong>：ui-ux-pro-max 實測會推薦毛玻璃、黑金配色這類 AI 感很重的風格。請 AI 列出採用與捨棄的建議和理由，和你訂的限制衝突時，以限制為準。'
              ]
            }
          ]
        },
        {
          id: 'd2-u7',
          chapter: '2-6',
          title: '對話歷史向量化與 RAG 檢索',
          summary: '將聊天室的對話紀錄（User Prompt 與 AI Response）非同步向量化儲存，並在發問時透過多路 RAG 同時檢索商品庫與歷史對話，打造具備長效語意記憶的 AI 助手。',
          source: 'docs/Day2-6-ChatHistory-RAG.md',
          heroImage: 'assets/teaching-site/12-ch12-chat-history-rag.png',
          diagramImage: 'assets/diagrams/d2-u7.png',
          diagramCaption: '提問時雙路並行檢索商品知識與個人歷史；對話結束後才非同步寫回向量庫，不阻塞串流。',
          goals: [
            '理解對話歷史向量化的重要性與長期記憶挑戰',
            '實作在 Spring Boot 串流結束時非同步寫入向量庫',
            '使用 Metadata 進行對話歷史隔離與精確過濾',
            '設計雙路 RAG 檢索：同時查詢知識庫與歷史記憶並進行內容合併'
          ],
          tasks: [
            { id: 'd2-u7-t1', text: '設計非同步向量化儲存 Service 邏輯' },
            { id: 'd2-u7-t2', text: '在 SSE 串流完成時 (doOnComplete) 觸發歷史寫入' },
            { id: 'd2-u7-t3', text: '實作多路檢索與上下文合併邏輯' }
          ],
          sections: [
            {
              title: '為什麼需要對話歷史 RAG',
              type: 'text',
              paragraphs: [
                '基本的 ChatMemory (對話記憶) 只能儲存最近幾次對話（短期記憶），且受限於大模型上下文窗口 (Context Window) 的長度與 Token 開銷。當用戶問到「幾天前我們討論過的那個方案」時，短期記憶無能為力。',
                '藉由將「歷史問答」向量化寫入資料庫，我們可以使用 RAG 搜尋「語意相似的過去對話」，動態將相關記憶塞入 Prompt，使 AI 具備橫跨數週甚至數月的長期語意記憶。'
              ],
              bullets: [
                '短期記憶 (ChatMemory)：儲存於記憶體，限制 N 筆對話，成本高且會隨重啟消失。',
                '長期記憶 (History RAG)：向量化存入 PostgreSQL (pgvector)，需要時以語意搜尋檢索，開銷小且永久保存。'
              ]
            },
            {
              title: '串流結束時非同步寫入向量庫',
              type: 'code',
              paragraphs: [
                '我們不能在對話進行中阻塞 SSE 串流，否則前端會有嚴重的卡頓感。正確的做法是監聽 `Flux` 的 `doOnComplete()` 事件，並利用非同步執行緒將「完整對話紀錄」送去向量化寫入。'
              ],
              code: {
                language: 'java',
                title: 'RAGController.java — 監聽串流完成並非同步寫入',
                content: '@PostMapping(value = "/api/ai/stream", consumes = MediaType.APPLICATION_JSON_VALUE,\n        produces = MediaType.TEXT_EVENT_STREAM_VALUE)\npublic Flux<String> streamChatWithHistory(\n        @RequestBody ChatRequest request,   // 本文 {"message": "..."}（2-1 章）\n        java.security.Principal principal) {\n\n    String message = request.message();\n    // 以登入帳號作為長期記憶的隔離鍵，重新整理頁面也記得\n    String username = principal.getName();\n    StringBuilder fullResponse = new StringBuilder();\n\n    return this.chatClient.prompt()\n            .user(message)\n            .stream()\n            .content()\n            .doOnNext(fullResponse::append) // 持續收集模型生成的字元片段\n            .doOnComplete(() -> {\n                // 串流傳輸完成後，非同步將對話紀錄寫入向量庫\n                CompletableFuture.runAsync(() -> {\n                    chatHistoryService.saveToVectorStore(username, message, fullResponse.toString());\n                });\n            });\n}'
              }
            },
            {
              title: '對話歷史向量化 Service 實作',
              type: 'code',
              paragraphs: [
                '利用 `VectorStore` 的 `add` 方法，我們把 User 問句與 AI 答句組合，並加上 metadata 以利日後查詢時，能透過 登入帳號 `username` 隔離不同使用者的隱私。'
              ],
              code: {
                language: 'java',
                title: 'ChatHistoryService.java — 寫入向量庫與 Metadata 過濾',
                content: '@Service\n@Slf4j\npublic class ChatHistoryService {\n    private final VectorStore vectorStore;\n\n    public ChatHistoryService(VectorStore vectorStore) {\n        this.vectorStore = vectorStore;\n    }\n\n    public void saveToVectorStore(String username, String prompt, String response) {\n        String content = "使用者提問：" + prompt + "\\n助手回答：" + response;\n        \n        Document doc = new Document(\n            content,\n            Map.of(\n                "username", username,\n                "type", "chat_history",\n                "created_at", System.currentTimeMillis()\n            )\n        );\n        \n        vectorStore.add(List.of(doc));\n        log.info("[長期記憶] 已成功向量化存入對話歷史，username={}", username);\n    }\n}'
              }
            },
            {
              title: '雙路 RAG 檢索與上下文合併',
              type: 'code',
              paragraphs: [
                '在使用者提問時，我們同時發起兩路檢索：一路查「商品知識表（type = \'product_doc\'）」，另一路查「該用戶的對話歷史（type = \'chat_history\' AND username = \'xxx\'）」，最後將兩者合併作為 Context 提供給大模型。'
              ],
              code: {
                language: 'java',
                title: 'RAGController.java — 雙路 RAG 合併檢索',
                content: 'public List<Document> retrieveDoubleRoad(String query, String username) {\n    // 第一路：商品文件檢索\n    SearchRequest productReq = SearchRequest.builder()\n            .query(query)\n            .filterExpression("type == \'product_doc\'")\n            .topK(3)\n            .build();\n    List<Document> products = vectorStore.similaritySearch(productReq);\n\n    // 第二路：該使用者歷史對話語意檢索\n    SearchRequest historyReq = SearchRequest.builder()\n            .query(query)\n            .filterExpression("type == \'chat_history\' && username == \'" + username + "\'")\n            .topK(2)\n            .build();\n    List<Document> histories = vectorStore.similaritySearch(historyReq);\n\n    // 合併結果並回傳\n    List<Document> combined = new ArrayList<>();\n    combined.addAll(products);\n    combined.addAll(histories);\n    return combined;\n}'
              }
            },
            {
              title: 'AI Agent 提示詞 — 對話歷史長期記憶',
              type: 'code',
              paragraphs: [
                '理解長期記憶的設計原理（非同步寫入、Metadata 隔離、雙路檢索）後，複製以下提示詞給 AI Agent，為聊天室加上「長期記憶」能力。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞',
                content: '幫 AI 客服加上長期記憶：把對話存進向量資料庫，下次聊天時能想起這個使用者之前說過的需求。\n- 每個使用者只能查到自己的歷史\n- 存記憶不要拖慢回覆；查不到或出錯時照常回答\n有不清楚的地方先問我。做完重啟後端，測試 AI 還記不記得我之前的需求，再換帳號確認看不到別人的。'
              }
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ 記得移除 2-3 的 QuestionAnswerAdvisor</strong>：它只能有一個 filter，和手動雙路檢索並存會重複查商品文件，還帶著會拒答的範本（第一輪演練發現的衝突）。檢查 ChatClient 的呼叫鏈上已經沒有它。',
                '<strong>⚠ 檢索結果放 system，不放 user</strong>：拼進 user 訊息，整包上下文會被短期記憶存起來、越滾越大；system 文字會被當成範本解析，檢索內容裡的大括號要先替換掉。',
                '<strong>檢索失敗只能降級</strong>：第一輪演練時 Voyage 的 DNS 暫時逾時，連訂單問題也回 500。請 AI 用錯誤的 <code>VOYAGE_API_KEY</code> 啟動測一次：日誌出現警告、仍能回答庫存，才算完成（第二輪演練就是這樣驗的）。',
                '<strong>驗證要避開「剛好成立」</strong>：先聊 3 個無關話題，再重啟後端清掉短期記憶，才能證明答案來自向量庫；少了這兩步，AI 可能只是從短期記憶記得。',
                '<strong>⚠ 隔離要用另一個帳號驗</strong>：metadata 的 username 過濾寫錯時，user 自己測永遠正常。一定要用 admin 問同一句，確認看不到 user 的偏好。',
                '<strong>⚠ 程式層確認也要存長期記憶</strong>：2-2 的程式層確認（DirectConfirmationHandler）直接回覆時不經過模型串流，串流結束時存長期記憶的程式不會執行。請 AI 在它寫短期記憶的地方也寫入長期記憶，否則重啟後 AI 不知道已經結帳或沒有執行。'
              ]
            }
          ]
        },
        {
          id: 'd2-u4',
          chapter: '2-7',
          title: '擴充AI能力：MCP 與 Skills',
          summary: '補充說明 MCP 在 AI 系統中的標準化接口角色與 Spring AI 的接入方式，並介紹 Skills 開放標準與 Spring AI Community 官方的 spring-ai-agent-utils 套件（SkillsTool 與 Agent 工具集）。',
          source: 'docs/Day2-7-MCP-Skills.md',
          heroImage: 'assets/teaching-site/08-ch08-mcp-wrapup.png',
          diagramImage: 'assets/diagrams/d2-u4.png',
          diagramCaption: '不同 AI 客戶端透過 MCP 標準接口接入同一批工具與上下文能力。',
          goals: [
            '理解 MCP 對跨工具 AI 生態的價值與 Spring AI 的接入方式',
            '理解 Skills 開放標準與 MCP 的角色差異',
            '認識 Spring AI Community 的 spring-ai-agent-utils 與其 Agent 工具集',
            '知道如何在 Spring Boot 中以 SkillsTool 為應用加入 Skills'
          ],
          tasks: [
            { id: 'd2-u4-t1', text: '理解 MCP Server / Client 在 Spring AI 的接入方式與呼叫流程' },
            { id: 'd2-u4-t2', text: '理解 MCP 與 Skills 的角色差異與適用場景' },
            { id: 'd2-u4-t3', text: '瀏覽 spring-ai-agent-utils 專案與工具清單，評估導入 SkillsTool 的版本前置條件' }
          ],
          sections: [
            {
              title: 'MCP 應該怎麼理解',
              type: 'text',
              paragraphs: [
                'MCP 可以想成 AI 世界的標準插座。當系統中有多個模型平台、IDE 工具與資料來源時，MCP 提供一致的方式描述工具與上下文。',
                '它的價值不是取代應用程式內部工具呼叫，而是讓不同 AI 客戶端可以以標準方式接入同一批能力。'
              ],
              bullets: [
                'Client 是 AI 平台或整合工具',
                'Host / Server 提供工具與上下文能力',
                'Model 專注在理解與生成'
              ]
            },
            {
              title: 'MCP 在 Spring AI 的接入方式（補充說明）',
              type: 'text',
              paragraphs: [
                'Spring AI 已內建 MCP 支援，接入成本非常低，本章以補充說明的方式帶過即可：Day 2-2 寫好的 `@Tool` Bean 完全不需要修改程式碼，Server 端加一個依賴就會自動透過 `/sse` 端點對外發布為 MCP 工具；另一個應用加上 Client 依賴，啟動時就會自動取回遠端工具清單交給 ChatClient 使用。',
                '想完整動手做的學員，可參考專案中的 `mcp/` 目錄（mcp-client-demo），其中已包含可直接執行的 MCP Client 範例與設定檔。'
              ],
              bullets: [
                'Server 端：加入 `spring-ai-starter-mcp-server-webmvc` 依賴，既有 @Tool Bean 自動發布為 MCP 工具',
                'Client 端：加入 `spring-ai-starter-mcp-client` 依賴，SyncMcpToolCallbackProvider 啟動時自動連線取回工具',
                'Server 與 Client 是兩個獨立服務，必須使用不同 port（例如 8080 / 8081），且要先啟動 Server',
                '工具掛載方式與本地工具一致：把取回的工具陣列傳入 `.tools()`，AI 就會自動選用遠端工具'
              ]
            },
            {
              title: 'AI 呼叫遠端工具的完整流程',
              type: 'text',
              paragraphs: [
                '以「有哪些商品？」為例，說明從使用者輸入到 AI 回答的跨服務執行路徑：'
              ],
              image: 'assets/teaching-site/22-diagram-mcp-remote-call.svg',
              imageAlt: 'MCP 跨服務工具呼叫六步驟流程圖',
              imageCaption: 'Client（8081）透過 SSE 連線呼叫 Server（8080）的工具，@Tool 程式碼完全不用修改。',
              bullets: [
                '① 使用者呼叫 <code>GET</code> <a href="http://localhost:8081/api/mcp/chat?message=%E6%9C%89%E5%93%AA%E4%BA%9B%E5%95%86%E5%93%81" target="_blank"><code>http://localhost:8081/api/mcp/chat?message=有哪些商品</code></a>',
                '② MCP Client（port 8081）的 ChatClient 收到訊息，交由 LLM 判斷意圖',
                '③ AI 判斷需要查商品，透過已建立的 SSE 連線，向 MCP Server（port 8080）發送 getProducts 工具呼叫請求',
                '④ MCP Server 執行 `ProductTools.getProducts("")` → 查詢 PostgreSQL → 回傳商品 JSON',
                '⑤ MCP Client 收到工具執行結果，AI 組合成自然語言回答',
                '⑥ 使用者收到：「目前商城共有 5 項商品：1. 無線耳機 Pro（NT$2,999，庫存 50）...」'
              ]
            },
            {
              title: 'Skills 是什麼：把專業知識打包給 AI',
              type: 'text',
              paragraphs: [
                'Skills（Agent Skills）是 Anthropic 於 2025 年提出的開放標準：把某個領域的程序性知識（操作流程、規範、範本、輔助腳本）打包成一個資料夾，核心是一份帶有名稱與描述的 SKILL.md 說明檔。AI 平時只看到每個 Skill 的一行描述，判斷相關時才載入完整內容，這種「漸進式載入」讓模型能掛上大量專業知識而不撐爆上下文。',
                '如果說 Tool Calling 與 MCP 解決的是「AI 能呼叫什麼工具、拿到什麼資料」，Skills 解決的則是「AI 應該照什麼流程與規範做事」。兩者互補，不是替代關係。'
              ],
              bullets: [
                'Skill = 資料夾 + SKILL.md（frontmatter 描述）+ 選配的範本與腳本',
                '平時只載入描述，被點名才載入全文 — 漸進式揭露（progressive disclosure）',
                'MCP 擴充「能力與資料」，Skills 擴充「知識與流程」'
              ]
            },
            {
              title: 'MCP vs Skills：擴充 AI 能力的兩條路',
              type: 'text',
              bullets: [
                'MCP：標準化「連接」— 讓 AI 客戶端以一致方式接上工具與資料來源，重點在執行能力',
                'Skills：標準化「知識」— 讓 AI 依描述按需載入工作流程與規範，重點在做事方法',
                '判斷方式：要讓 AI「查得到、做得到」用 MCP / Tool Calling；要讓 AI「做得對、有章法」用 Skills',
                '實務上常見組合：Skill 內的流程指示 AI 在特定步驟呼叫 MCP 工具完成查詢或寫入'
              ]
            },
            {
              title: 'Spring AI 如何加入 Skills：spring-ai-agent-utils',
              type: 'text',
              paragraphs: [
                'Skills 是 Claude、Claude Code 等 AI 客戶端原生支援的標準，但 Spring AI 核心框架尚未內建 Skills 概念。在 Spring Boot 應用中要讓 AI 具備 Skills 能力，目前的推薦做法是引用 Spring AI Community（Spring AI 官方社群組織）維護的 spring-ai-agent-utils 套件 — 它把 Claude Code 風格的 Agent 工具與 Skills 機制帶進 Java 應用。',
                '版本注意：spring-ai-agent-utils 0.9.0 要求 Spring AI 2.0.0-RC1 以上、Java 17+、Spring Boot 3.x / 4.x。本課程專案使用 Spring AI 2.0.2，符合需求。'
              ],
              bullets: [
                '路線一（推薦）：引用 spring-ai-agent-utils 的 SkillsTool，以 Markdown + YAML frontmatter 定義可重用知識模組',
                '路線二：自行實作最小核心 — 掃描 skills/ 目錄、解析 SKILL.md、把描述注入 system prompt（原理與套件相同）',
                'Skill 檔案本身是純 Markdown、與平台無關，可在 Claude Code 與 Spring Boot 應用間共用同一份'
              ]
            },
            {
              title: 'spring-ai-agent-utils 提供的 Agent 工具總覽',
              type: 'text',
              paragraphs: [
                '這個套件不只有 Skills，而是一整組 Claude Code 啟發的 Agent 工具，皆以 Spring AI 的 Tool 形式提供，可依需求個別掛入 ChatClient，讓你的 Spring Boot 應用具備接近 Coding Agent 的能力。'
              ],
              bullets: [
                'SkillsTool：載入 SKILL.md 知識模組，支援漸進式載入與技能路由',
                'FileSystemTools / GrepTool / GlobTool：檔案讀寫編輯、純 Java 的內容搜尋與檔名匹配',
                'ShellTools：讓 AI 執行 Shell 命令（生產環境務必搭配權限控管）',
                'TaskTool：子代理（subagent）協調，支援 Markdown 定義的本地子代理與 A2A 遠端代理',
                'AutoMemoryTools：跨對話的持久化長期記憶',
                'SmartWebFetchTool / BraveWebSearchTool：網頁擷取摘要與網路搜尋',
                'AskUserQuestionTool / TodoWriteTool：執行期間向使用者提問、結構化任務清單管理',
                'Skill 檔案來源可搭配 anthropics/skills（Anthropic 官方開源庫）與 VoltAgent/awesome-agent-skills（社群精選 1000+），格式通用可直接取用'
              ]
            },
            {
              title: '加入 spring-ai-agent-utils 依賴（pom.xml）',
              type: 'code',
              paragraphs: [
                '套件發布於 Maven Central（groupId 為 org.springaicommunity），官方建議透過 BOM 統一管理版本，再引入核心函式庫。'
              ],
              code: {
                language: 'xml',
                title: 'pom.xml — 引入 spring-ai-agent-utils（BOM + 核心庫）',
                content: '<!-- 1. dependencyManagement：以 BOM 統一管理 agent-utils 版本 -->\n<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.springaicommunity</groupId>\n            <artifactId>spring-ai-agent-utils-bom</artifactId>\n            <version>0.9.0</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n\n<!-- 2. dependencies：引入核心函式庫（版本由 BOM 決定） -->\n<dependency>\n    <groupId>org.springaicommunity</groupId>\n    <artifactId>spring-ai-agent-utils</artifactId>\n</dependency>\n\n<!-- 注意：0.9.0 要求 Spring AI 2.0.0-RC1+ / Java 17+ / Spring Boot 3.x 或 4.x -->'
              }
            },
            {
              title: 'ChatClient 掛上 SkillsTool 與 Agent 工具',
              type: 'code',
              paragraphs: [
                '把 SkillsTool 與需要的 Agent 工具透過 defaultTools 掛入 ChatClient：SkillsTool 啟動時讀取指定路徑下的 SKILL.md，平時只讓模型看到技能描述，任務匹配時才載入完整內容（漸進式載入）— 與 Claude Code 載入 Skill 的行為一致。'
              ],
              code: {
                language: 'java',
                title: 'ChatClient 整合 SkillsTool（節錄）',
                content: '// 建立 ChatClient 時掛上 Skills 與 Agent 工具\n// skillPaths：SKILL.md 所在的資源路徑清單（例如 classpath:/skills/ 下各技能目錄）\nChatClient chatClient = chatClientBuilder\n        .defaultSystem("你是智慧商城助手。")\n        .defaultTools(\n                // Skills：載入 Markdown + YAML frontmatter 定義的知識模組\n                SkillsTool.builder()\n                        .addSkillsResources(skillPaths)\n                        .build(),\n                // 依需求選掛其他 Agent 工具（檔案存取、Shell 執行等）\n                FileSystemTools.builder().build()\n        )\n        .build();'
              }
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ 高權限工具不要掛給客服</strong>：ShellTools、FileSystemTools 讓模型能執行指令、讀寫檔案。2-2 的原則同樣適用：面向一般使用者的 ChatClient 只掛查詢類工具，高權限工具只用在你自己的開發或後台流程。',
                '<strong>⚠ 先確認版本相容</strong>：spring-ai-agent-utils 0.9.0 要求 Spring AI 2.0.0-RC1 以上。AI 可能依舊資料給出不同的版本，請它到 Maven Central 確認版本存在，再用 <code>mvn dependency:tree</code> 檢查沒有拉進第二套 Spring AI。',
                '<strong>只接上看過的 Skill 與 MCP</strong>：Skill 的內容會進到提示詞，MCP 伺服器能執行動作。和 0-1 安裝插件一樣，先讀過 SKILL.md 與 MCP 提供的工具清單再接上。',
                '<strong>工具描述是寫給模型看的提示詞</strong>：MCP 工具與 Skill 的 description 決定模型什麼時候用它。請 AI 用中文寫清楚「什麼情況該用、什麼情況不該用」，再各設計一個應該觸發、不該觸發的問題實測。',
                '<strong>先列出工具，再測對話</strong>：接上 MCP 或 Skills 之後，先請 AI 印出 ChatClient 實際拿到的工具名稱，確認都有載入、名稱沒有和既有工具衝突，再用對話測試。'
              ]
            }
          ]
        },
        {
          id: 'd2-u8',
          chapter: '2-8',
          title: '課程總結與完整系統驗證',
          summary: '整合兩天成果，從資料庫、後端 API、AI 能力到 React 前端逐項驗證完整系統，並整理後續延伸學習方向。',
          source: 'docs/Day2-8-WrapUp.md',
          heroImage: 'assets/teaching-site/00-course-overview.png',
          diagramImage: 'assets/diagrams/d2-u8.png',
          diagramCaption: 'Day 1 的工程底盤撐起 Day 2 的 AI 能力與前端介面，五個區塊組成完整的智慧商城系統。',
          goals: [
            '能完成前後端專案啟動、驗證與展示流程',
            '回顧 Day 1 工程底盤與 Day 2 AI 與前端整合的學習路徑',
            '建立後續延伸學習與擴充方向',
            '重跑並擴充 2-5 章的購物流程 e2e（verify-cart）：確認後面的章節沒有改壞購物流程，前後的庫存與訂單數一致'
          ],
          tasks: [
            { id: 'd2-u8-t1', text: '啟動資料庫與後端應用服務' },
            { id: 'd2-u8-t2', text: '完成商城展示、商品上架與 AI 客服（庫存、訂單、商品細節）驗證' },
            { id: 'd2-u8-t3', text: '啟動 React 前端並完成 SSE 串流對話驗證' },
            { id: 'd2-u8-t4', text: '整理延伸學習與擴充方向' },
            { id: 'd2-u8-t5', text: '重跑 2-5 章的購物流程 e2e（verify-cart.mjs），再依本章提示詞擴充商品頁、分類篩選、客服視窗與手機寬度的檢查，連跑兩次都通過，結束時庫存與訂單數和開始前一致' }
          ],
          sections: [
            {
              title: '完整系統驗證流程',
              type: 'text',
              paragraphs: [
                '最後一章不是收尾而已，而是把前面所有章節重新串起來驗證。資料庫要能起、Flyway 要能跑、聊天模式要能查商品、RAG 模式要能回答文件問題，React 前端要能即時呈現串流回覆。',
                '如果這裡驗證不過，通常表示前面某一層責任邊界還沒有真正理解。'
              ],
              image: 'assets/teaching-site/00-course-overview.png',
              imageAlt: '兩天課程總覽圖',
              imageCaption: '這一章的任務，是把前面所有零件組成完整系統。'
            },
            {
              title: '完成畫面樣本（照課程提示詞實際做出來的結果）',
              type: 'text',
              paragraphs: [
                '以下截圖來自用本課程提示詞從頭實作一遍的演練專案（Spring Boot 4 + Spring AI 2.0.2 + Muse Spark），可以拿來對照自己的成果。注意第 4 張的回答裡有「我來幫你查…正在幫你查…」的過場話與「編號ORD」黏字，可以當作「看圖找問題」的練習：黏字的成因與修法見 2-1 章「AI 開發建議」的「串流要看原始輸出」；過場話雖然 2-1 的系統提示詞已要求不要說，課前驗證時模型仍常說「我來幫你查…」「正在為您確認…」，提示詞只能減少、無法保證，屬於模型行為。'
              ],
              bullets: [
                '訪客首頁：未登入就能看到商品圖片、價格、庫存，智慧檯燈顯示缺貨標籤<br><a href="assets/samples/01-visitor-home.jpg" target="_blank"><img src="assets/samples/01-visitor-home.jpg" alt="訪客首頁：未登入就能看到商品圖片、價格、庫存，智慧檯燈顯示缺貨標籤" style="width:100%;max-width:640px;border-radius:12px;margin-top:6px;border:1px solid var(--border);"></a>',
                'admin 登入後的「商品上架」表單，送出後首頁立即出現新商品<br><a href="assets/samples/02-admin-add-product.jpg" target="_blank"><img src="assets/samples/02-admin-add-product.jpg" alt="admin 登入後的「商品上架」表單，送出後首頁立即出現新商品" style="width:100%;max-width:640px;border-radius:12px;margin-top:6px;border:1px solid var(--border);"></a>',
                'user 問「無線耳機 Pro 還有多少庫存？」，AI 呼叫工具查資料庫回答<br><a href="assets/samples/03-chat-stock.jpg" target="_blank"><img src="assets/samples/03-chat-stock.jpg" alt="user 問「無線耳機 Pro 還有多少庫存？」，AI 呼叫工具查資料庫回答" style="width:100%;max-width:640px;border-radius:12px;margin-top:6px;border:1px solid var(--border);"></a>',
                'user 問「我的訂單出貨了嗎？」，只列出自己的 3 筆訂單與狀態<br><a href="assets/samples/04-chat-orders.jpg" target="_blank"><img src="assets/samples/04-chat-orders.jpg" alt="user 問「我的訂單出貨了嗎？」，只列出自己的 3 筆訂單與狀態" style="width:100%;max-width:640px;border-radius:12px;margin-top:6px;border:1px solid var(--border);"></a>',
                '課程 backend 範例專案的商品目錄（另一套示範商品與圖片）<br><a href="assets/samples/05-backend-catalog.jpg" target="_blank"><img src="assets/samples/05-backend-catalog.jpg" alt="課程 backend 範例專案的商品目錄（另一套示範商品與圖片）" style="width:100%;max-width:640px;border-radius:12px;margin-top:6px;border:1px solid var(--border);"></a>'
              ]
            },
            {
              title: 'Day 1 / Day 2 學習路徑回顧',
              type: 'text',
              paragraphs: [
                'Day 1 解決的是「一個可維護的後端長什麼樣」：REST 分層、資料庫容器化與遷移、JPA 持久化，再用 API 文件、例外處理、Log、AOP 與 Security 補齊工程品質。',
                'Day 2 解決的是「如何把 AI 與前端接回同一個應用」：ChatClient 對話、工具呼叫、RAG 知識檢索，接著以 React 完成 SSE 串流介面與對話歷史長期記憶，讓核心產品先完整可用，最後才用 MCP 與 Skills 把能力開放給其他 AI 工具。補充章介紹如何用 Cloudflare Tunnel 把成果分享給別人試用。'
              ],
              bullets: [
                'Day 1：環境 → REST → Docker/Flyway → JPA → API 文件 → 例外 → Log → AOP → Security',
                'Day 2：ChatClient → 工具呼叫 → RAG → React 入門 → SSE 聊天室 → 對話歷史 RAG → MCP 與 Skills 擴充 → 總結 →（補充）Cloudflare Tunnel 分享',
                '前後端合起來，正是一個完整應用所需的全端開發路徑'
              ]
            },
            {
              title: '環境啟動指令（後端）',
              type: 'code',
              paragraphs: [
                '這裡是整套課程的總驗證，因此不只要給啟動命令，也要讓學員知道最低前置條件是否已滿足。'
              ],
              bullets: [
                '最低需求：資料庫容器已啟動',
                '最低需求：後端專案根目錄的 `.env` 已填好 API Key',
                '最低需求：JDK 21 與 Maven 3.9+ 已完成版本驗證'
              ],
              code: {
                language: 'powershell',
                title: '啟動資料庫與後端應用',
                content: 'docker compose up -d\nmvn spring-boot:run   # .env 由 Spring Boot 自己讀，不用先載入'
              }
            },
            {
              title: '環境啟動指令（React 前端）',
              type: 'code',
              paragraphs: [
                '後端就緒後，另開終端機啟動 React 前端，透過 Vite 開發伺服器與 Proxy 代理連回後端 API，驗證 SSE 串流對話介面。'
              ],
              code: {
                language: 'powershell',
                title: '啟動 React 前端（Vite）',
                content: 'Set-Location "D:\\GitHub\\learn-spring\\frontend"\nnpm install\nnpm run dev\n# 開啟瀏覽器 http://localhost:5173，登入後測試串流對話'
              }
            },
            {
              title: 'AI Agent 提示詞 — 完整系統驗證',
              type: 'code',
              paragraphs: [
                '理解驗證流程與啟動步驟後，複製以下提示詞給 AI Agent，讓它幫你逐項驗證兩天課程完成的全端系統，並產出一份驗證報告。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞',
                content: '幫我把整個商城做一次完整驗證，寫成可以重跑的 e2e 腳本，放在 e2e/：\n- 首頁商品、商品上架和權限\n- AI 客服：問庫存、問我的訂單、問商品規格、問不存在的商品（AI 回覆比較慢，等待時間抓長一點）\n最後整理成一份驗證報告，失敗的項目附可能原因。有不清楚的地方先問我。'
              }
            },
            {
              title: '購物流程 e2e：重跑與擴充',
              type: 'code',
              paragraphs: [
                '<code>e2e/verify-cart.mjs</code> 在 2-5 章購物前端完成後就寫好了（寫法與注意事項見 2-5 章）。之後又經過章末升級與 2-6 長期記憶，到了總結這一章，先<strong>原封不動重跑</strong>，確認購物流程沒被後面的章節改壞，再把升級後才有的畫面補進同一支腳本。',
                '重跑失敗時先分類：選擇器找不到（升級改了 class）就把被改掉的元素或 class 補回畫面，不要改 e2e；操作步驟過時（升級改了頁面流程，例如詳情改成獨立頁）只更新步驟，不改斷言；功能真的壞了才改程式；斷言要放寬時先停下來問你。'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 重跑並擴充購物流程 e2e',
                content: '重跑購物流程的 e2e（e2e/verify-cart.mjs）。失敗時先告訴我原因：畫面元素找不到就補回畫面，流程變了就只改操作步驟，功能壞了先停下來問我；檢查項目不能改。\n通過後再加上這幾項檢查：商品獨立頁、分類篩選、客服快捷問題、手機版購物車。連跑兩次都要通過。\n有不清楚的地方先問我。'
              }
            },
            {
              title: '整體成果驗證清單',
              type: 'text',
              bullets: [
                '資料庫容器正常啟動，`docker ps` 可看到 `pgvector/pgvector:pg18` 為 `Up` 狀態',
                'Spring Boot 啟動日誌包含 Flyway 成功驗證與應用啟動完成訊息',
                '聊天 Demo 可正確回答商品價格與庫存，且後端可看到工具呼叫紀錄',
                'RAG 模式可根據上傳文件回答，不是只輸出泛泛知識',
                'React 前端可啟動並透過 SSE 即時逐字顯示串流回覆',
                '購物流程可完整走完：加入購物袋 → 結帳 → 庫存減少 → 訂單出現 → 取消 → 庫存退回；admin 出貨後 user 不能取消；AI「幫我結帳」要等使用者下一則訊息確認才建立訂單',
                '完成以上各項，才算這套課程真正落地成一個可驗證的全端智慧商城客服系統'
              ]
            },
            {
              title: '常見錯誤與排查',
              type: 'warning',
              bullets: [
                '若聊天模式正常但 RAG 模式失敗，優先回頭檢查向量寫入與檢索流程',
                '若資料庫與應用都啟動成功，但 Demo 頁面無法互動，先檢查 API 路徑與瀏覽器 console',
                '若 React 前端無法連到後端 API，先檢查 vite.config.js 的 server.proxy 代理設定',
                '若 SSE 串流沒有逐字輸出，打開瀏覽器開發者工具的 Network：/api/ai/stream 應為 POST、Request Headers 有 Authorization: Bearer、回應的 Content-Type 是 text/event-stream',
                '若只有部分功能可用，不要直接判定整體完成，必須逐項對照驗證清單',
                '若購物流程 e2e 第一次通過、第二次失敗，代表測試沒有清乾淨：檢查 finally 的清理，以及是否只刪了自己建立的訂單',
                '若 AI「幫我結帳」後直接建立了訂單，代表後端確認機制沒有生效：檢查每次請求是否先呼叫 onNewRequest，以及 confirm 是否比對 armedRequestId',
                '若使用者回「確定」卻沒有結帳，依序檢查：① 是否有待確認動作而且已武裝給這一則訊息——「確定」必須是看完摘要後的<strong>下一則訊息</strong>，中間改問別的事，待確認動作就已作廢；② 是否超過 5 分鐘逾時；③ 確認前購物車是否變動（變動時回「沒有執行：」加原因）；④ 回覆正規化後（去掉空白與標點）是否<strong>完全等於</strong>詞表中的詞，例如「確定。」算、「確定喔」不算，不算的會交給模型判斷。再看後端日誌的 <code>[待確認]</code>（建立、武裝、作廢、執行）與 <code>[程式層確認]</code>（同意、拒絕）紀錄，找出停在哪一步',
                '整體驗證要按順序做：資料庫 -> 後端應用 -> 工具呼叫 -> RAG -> 前端串流 -> 延伸能力'
              ]
            },
            {
              title: '延伸方向',
              type: 'text',
              paragraphs: [
                '完成課程後，最自然的下一步是擴充更多即時資料工具，例如會員等級、折扣規則、訂單查詢，或把更多文件來源導入 RAG。',
                '前端方面可以延伸對話介面的功能，例如多 session 切換、訊息搜尋與引用來源呈現；如果要往企業情境走，則可以把工具層、MCP 與 Skills 能力拆得更清楚，並加入權限、稽核與多資料來源管理。'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ AI 會想用加長等待解決不穩</strong>：2-5 章 verify-cart 的寫法是等條件、不等秒數，但 e2e 不穩時，AI 最常見的修法卻是加 <code>waitForTimeout</code> 或把逾時調長。遇到這種修改就退回，請它先看截圖、console 與後端日誌找出原因。',
                '<strong>連跑兩次都過才算</strong>：測試會建立訂單、扣庫存，第二次失敗通常代表清理沒做完。第二輪演練的 e2e 連跑兩次都是 21/21，購物流程 e2e 也要比對前後的庫存與訂單數一致。',
                '<strong>⚠ 失敗先分類再修</strong>：第一輪演練跑到第 5 次才全過，失敗原因有三種：腳本自己寫錯（psql 輸出 <code>true</code>，腳本卻拿 <code>t</code> 比對）、外部服務暫時逾時、真正的程式缺陷（記憶視窗截斷造成 400）。請 AI 先判斷是哪一種，只有第三種才改程式。',
                '<strong>⚠ 斷言不能為了通過而放寬</strong>：AI 想把「庫存與資料庫一致」改成「有出現數字」，或刪掉失敗的檢查時，要它停下來說明。驗證清單（也就是規格）真的要改，先改清單文件，再改 e2e 並看到失敗，最後改實作；斷言的修改由你確認。',
                '<strong>要測「不該發生」的事</strong>：只驗 user 看得到自己的訂單不夠，還要驗不會出現 admin 的訂單編號、偽造 ADMIN 角色會得到 403、全程沒有原生對話框（第一輪演練就因為沒有反例，「只列出自己的訂單」驗不出錯）。',
                '<strong>真的呼叫模型的檢查另外放</strong>：攔截 POST /api/ai/stream 的寫法見 2-5 章的 verify-cart。完整系統驗證提示詞的 4 句 AI 提問會真的呼叫模型，逾時至少 120 秒，斷言數字與資料庫一致、日誌有工具呼叫，不比對整句話；它和購物流程 e2e 分成兩支腳本，購物流程才不會被模型的隨機性拖累。'
              ]
            }
          ]
        },
        {
          id: 'd2-u9',
          chapter: '2-9',
          title: '額外補充：Cloudflare Tunnel 分享你的專案',
          summary: '在 docker-compose 加一個 cloudflared 服務，免開防火牆、免設路由器就能讓外部連進本機；先用免註冊的隨機網址分享，有自己的網域再免費綁定固定網址。',
          source: 'docs/Day2-9-Cloudflare-Tunnel.md',
          heroImage: 'assets/teaching-site/13-ch2-9-cloudflare-tunnel.png',
          diagramImage: 'assets/diagrams/d2-u9.png',
          diagramCaption: 'cloudflared 從你的電腦主動連出到 Cloudflare，外部使用者連 Cloudflare 的網址就會被轉進本機服務。',
          goals: [
            '理解 Cloudflare Tunnel 為何不需要公開 IP 與開放連接埠',
            '用 Quick Tunnel（免註冊）在 docker-compose 中一行服務產生公開網址',
            '知道綁定自有網域的流程，以及兩種模式的限制與適用時機'
          ],
          tasks: [
            { id: 'd2-u9-t1', text: '在 docker-compose.yml 加入 cloudflared 服務並取得 trycloudflare.com 網址' },
            { id: 'd2-u9-t2', text: '用手機（關閉 Wi-Fi）開啟該網址，確認可看到商城頁面' },
            { id: 'd2-u9-t3', text: '（選做）有網域者建立 Named Tunnel 並綁定子網域' }
          ],
          sections: [
            {
              title: '為什麼要用 Cloudflare Tunnel',
              type: 'text',
              paragraphs: [
                '專案做完想給同事、客戶或朋友試用，傳統做法是租雲端主機部署，或在路由器設定 Port Forwarding。前者要花錢與時間，後者常被公司網路或電信 NAT 擋住。',
                'Cloudflare Tunnel 的做法反過來：在你的電腦跑一個 <code>cloudflared</code>，由它<strong>主動連出</strong>到 Cloudflare，外部使用者連 Cloudflare 給的網址，流量再沿著這條通道送回你的電腦。不用公開 IP、不用開防火牆，還自動有 HTTPS。'
              ],
              image: 'assets/teaching-site/27-diagram-cloudflare-tunnel.svg',
              imageAlt: 'Cloudflare Tunnel 連線示意圖',
              imageCaption: '箭頭方向是重點：連線由你的電腦往外建立，所以不用開任何對外連接埠。'
            },
            {
              title: '優點與限制',
              type: 'text',
              bullets: [
                '✅ <strong>初期分享專案最方便</strong>：不用買主機、不用部署，改完程式重啟容器就是最新版本。',
                '✅ Quick Tunnel 免註冊、免費，Named Tunnel 綁自有網域也免費（網域本身要自己買）。',
                '⚠️ <strong>電腦必須保持開機</strong>且 Docker 在跑，關機或睡眠時網址就連不到；不適合當正式上線環境。',
                '⚠️ Quick Tunnel 每次重啟網址都會變（隨機子網域），沒有可用性保證，同時處理中的請求上限約 200 個。',
                '⚠️ <strong>Quick Tunnel 不支援 SSE</strong>：串流聊天會收不到逐字回覆。要展示 SSE 聊天室請改用下方的 Named Tunnel，或在展示時改用非串流的 <code>.call()</code> 端點。',
                '⚠️ 網址一公開任何人都連得到：分享前確認已有登入保護（1-9 章的 Spring Security），並注意 AI API 額度可能被別人用掉。'
              ]
            },
            {
              title: '模式一：Quick Tunnel（免註冊，網址隨機）',
              type: 'code',
              paragraphs: [
                '在現有的 <code>backend/docker-compose.yml</code> 加入一個服務即可。它把流量轉給同一個 compose 網路裡的 <code>nginx</code>（服務名稱就是主機名稱），nginx 再分送前端頁面與 <code>/api</code>。'
              ],
              code: {
                language: 'yaml',
                title: 'docker-compose.yml — 新增 cloudflared 服務（Quick Tunnel）',
                content: 'services:\n  # ...postgres、nginx 維持原樣...\n\n  # Cloudflare Quick Tunnel：免註冊，啟動後在 log 取得隨機網址\n  tunnel:\n    image: cloudflare/cloudflared:latest\n    container_name: spring-tunnel\n    # 把外部流量轉給同一網路中的 nginx（80 埠）\n    command: tunnel --no-autoupdate --url http://nginx:80\n    depends_on:\n      - nginx\n    restart: unless-stopped'
              }
            },
            {
              title: '啟動並取得公開網址',
              type: 'code',
              paragraphs: [
                '啟動後從容器 log 找 <code>trycloudflare.com</code> 那一行，就是可以分享出去的網址。驗證時請用手機關掉 Wi-Fi 走行動網路開啟，才是真正的「外部連線」。'
              ],
              code: {
                language: 'powershell',
                title: 'PowerShell — 啟動 tunnel 並找出網址',
                content: 'cd backend\ndocker compose up -d tunnel\n\n# 從 log 篩出公開網址（約 5～10 秒後出現）\ndocker compose logs tunnel | Select-String "trycloudflare.com"\n# 輸出範例：|  https://random-words-1234.trycloudflare.com  |\n\n# 不分享時關掉\ndocker compose stop tunnel'
              }
            },
            {
              title: '模式二：Named Tunnel 綁定自有網域（需註冊，免費）',
              type: 'text',
              paragraphs: [
                '有自己的網域時，可以得到固定網址（例如 <code>shop.example.com</code>），重啟也不會變，而且支援 SSE。前提是網域的 DNS 交給 Cloudflare 管理。'
              ],
              bullets: [
                '① 到 <a href="https://dash.cloudflare.com" target="_blank">dash.cloudflare.com</a> 免費註冊帳號，選 <code>Add a domain</code> 加入你的網域，依畫面指示到網域註冊商把 Nameserver 改成 Cloudflare 提供的兩組（生效需數分鐘到數小時）。',
                '② 進入 <code>Zero Trust</code> → <code>Networks</code> → <code>Tunnels</code> → <code>Create a tunnel</code>，類型選 <code>Cloudflared</code>，取名（如 learn-spring）。',
                '③ 安裝畫面選 Docker，複製指令裡 <code>--token</code> 後面那一長串 Token，寫進 docker-compose.yml 同一個資料夾的 <code>.env</code>（<code>CLOUDFLARE_TUNNEL_TOKEN=…</code>，不要推上 Git）。',
                '④ 在 <code>Public Hostname</code> 新增：Subdomain 填 <code>shop</code>、Domain 選你的網域、Service 填 <code>http://nginx:80</code>。Cloudflare 會自動建立 DNS 記錄。',
                '⑤ 把 compose 裡的 tunnel 服務改成下方寫法後重新啟動，開 <code>https://shop.你的網域</code> 驗證。'
              ],
              code: {
                language: 'yaml',
                title: 'docker-compose.yml — Named Tunnel（固定網域）',
                content: '  tunnel:\n    image: cloudflare/cloudflared:latest\n    container_name: spring-tunnel\n    # 轉發規則（shop.你的網域 → http://nginx:80）設定在 Cloudflare 後台\n    command: tunnel --no-autoupdate run\n    environment:\n      # Token 從同資料夾的 .env 讀入（docker compose 會自動讀），不要寫死在檔案裡\n      TUNNEL_TOKEN: ${CLOUDFLARE_TUNNEL_TOKEN}\n    depends_on:\n      - nginx\n    restart: unless-stopped'
              }
            },
            {
              title: '常見錯誤與排查',
              type: 'text',
              bullets: [
                '網址開啟顯示 502 / 1033：tunnel 有起來但連不到後端，確認 <code>nginx</code> 容器在跑、<code>--url</code> 用的是服務名稱 <code>nginx</code> 而不是 <code>localhost</code>（容器裡的 localhost 是 cloudflared 自己）。',
                '後端跑在本機（<code>mvn spring-boot:run</code>）而非容器：轉發目標改成 <code>http://host.docker.internal:8080</code>。',
                'log 裡找不到 trycloudflare 網址：檢查電腦能否連外，公司網路若擋 UDP 7844，可加參數 <code>--protocol http2</code>。',
                '聊天室沒有逐字輸出：Quick Tunnel 不支援 SSE，改用 Named Tunnel；Named Tunnel 仍卡住時，檢查 nginx 對串流路徑是否設了 <code>proxy_buffering off</code>。'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>⚠ Token 不進 Git</strong>：Named Tunnel 的 Token 等於通道的鑰匙。AI 為了方便常直接寫進 <code>docker-compose.yml</code>，請它改放 <code>.env</code> 的 <code>CLOUDFLARE_TUNNEL_TOKEN</code>，commit 前確認檔案裡沒有。',
                '<strong>⚠ 公開前換掉示範帳號的密碼</strong>：admin／admin123 寫在課程講義裡，網址一公開，任何人都能用管理員登入、上架商品、出貨，也會用掉你的 AI 額度。分享前請 AI 改成只有你知道的密碼，<code>JWT_SECRET</code> 也換成新的隨機字串。',
                '<strong>⚠ 聊天沒有逐字輸出，先懷疑 Quick Tunnel</strong>：Quick Tunnel 不支援 SSE。AI 遇到串流異常時可能去改前後端程式；先改用 Named Tunnel 或非串流端點確認，不要動已經驗證過的程式。',
                '<strong>容器裡的 localhost 是自己</strong>：AI 常把轉發目標寫成 <code>localhost:8080</code>。cloudflared 在容器裡時要用服務名稱 <code>nginx</code>，後端跑在本機時用 <code>host.docker.internal</code>。',
                '<strong>用外部網路驗證</strong>：AI 只能從本機測，看不到真正的外部連線。請它給你網址後，用手機關掉 Wi-Fi 開啟，從登入到問一次客服完整走一遍。'
              ]
            }
          ]
        },
        {
          id: 'd2-u10',
          chapter: '2-10',
          title: '補充：AI 開發工作流程 — 規則、subagent、advisor 與技能（課後自學）',
          summary: '講師實際使用的 AI 開發規則逐條解說、任務分級、subagent 派工與自建 agent、advisor、權限與 auto mode，以及 deep-memory 與 ui-ux-pro-max 的完整用法。課後自學，不計入 14 小時。',
          source: 'docs/Day2-10-AI-Workflow.md',
          heroImage: 'assets/teaching-site/14-ch0-1-claude-code-memory-git.png',
          diagramImage: 'assets/teaching-site/14-ch0-1-claude-code-memory-git.png',
          diagramCaption: '規則告訴 AI 怎麼做，subagent 分工，advisor 把關，技能補上記憶與設計素材。',
          goals: [
            '知道全域、專案、子目錄 CLAUDE.md 的載入方式，能寫出自己的開發規則',
            '理解講師每條規則背後的理由，會用任務分級 T0～T3 決定流程',
            '會寫派工簡報、判斷什麼該派給 subagent，並能自建一個唯讀的 agent',
            '分得清 Claude Code 的 advisor 與 Spring AI 的 Advisor，知道何時呼叫 advisor',
            '會處理 auto mode 的權限阻擋，並完整使用 deep-memory 與 ui-ux-pro-max'
          ],
          tasks: [
            { id: 'd2-u10-t1', text: '從完整版範本寫出自己的 <code>~/.claude/CLAUDE.md</code>，開新對話確認 AI 能說出你的任務分級' },
            { id: 'd2-u10-t2', text: '在課程專案建立唯讀的 <code>.claude/agents/spring-reviewer.md</code>，審查 CartService 且 <code>git status</code> 沒有任何修改' },
            { id: 'd2-u10-t3', text: '用「目標、已排除、範圍、驗收」四段簡報請 Explore 盤點管理員 API 的授權方式，並抽查兩筆' },
            { id: 'd2-u10-t4', text: '設定 <code>/advisor</code> 做一個 T3 任務並用 Ctrl+O 看建議；在專案設定加一條 Edit 允許規則' },
            { id: 'd2-u10-t5', text: 'deep-memory 跑 <code>refine_experience.py --dry-run</code>，或 ui-ux-pro-max 用 <code>--persist</code> 產生 MASTER.md 並寫下取捨理由（二選一）' }
          ],
          sections: [
            {
              title: '本章定位：課後自學，不計入 14 小時',
              type: 'text',
              paragraphs: [
                '這一章把講師平常用 Claude Code 開發時實際遵守的規則、會派工的 subagent、advisor，以及課程用到的兩個技能（deep-memory、ui-ux-pro-max）集中說明。課堂上只在 0-1 章介紹精簡版 CLAUDE.md 範本與任務分級，其餘都放在這裡，<strong>課後自學，不計入課程的 14 小時</strong>。',
                '內容都來自講師的實際設定與兩次課前演練、一次逐字驗證的紀錄，不是理想狀況的建議清單。每一段都可以單獨閱讀，遇到相關問題時再回來查即可。'
              ],
              bullets: [
                '<strong>講師環境</strong>：Windows 11、PowerShell 7、VS Code 的 Claude Code 延伸模組。給你手動執行的指令都是 PowerShell 7 語法。',
                '<strong>macOS</strong>：本章最後一段附 macOS 對照指令，依官方文件整理，講師未在 Mac 實測。',
                '<strong>建議閱讀順序</strong>：CLAUDE.md 規則與任務分級 → 權限與 auto mode → subagent 與 advisor → 兩個技能 → 練習任務。',
                '<strong>名詞提醒</strong>：本章的 advisor 是 Claude Code 的開發輔助工具，和 2-1～2-3 章 Spring AI 的 <code>QuestionAnswerAdvisor</code> 等 Advisor 完全不同，後面有一段專門比較。'
              ]
            },
            {
              title: '為什麼要把規則寫進 CLAUDE.md：全域、專案與子目錄',
              type: 'text',
              paragraphs: [
                'CLAUDE.md 是寫給 AI 看的開發手冊。Claude Code 每次開新對話都會先讀，等於每次都把同一份交代重講一遍。沒寫下來的規則，AI 只能每次猜，猜錯了你再糾正，下一個對話又重來。',
                '它有好幾個層級，彼此不是互相覆蓋，而是<strong>全部串在一起</strong>交給 AI：從檔案系統最上層讀到你啟動 Claude Code 的目錄，越接近工作目錄的越晚讀到。兩份規則互相矛盾時，官方文件說明 AI 可能任選一條，所以真正的「覆蓋順序」要靠你自己寫清楚。'
              ],
              bullets: [
                '<strong>全域</strong> <code>~/.claude/CLAUDE.md</code>：只有你自己、所有專案都套用。放語言、註解、驗證習慣這類個人偏好。講師的任務分級、advisor 呼叫時機都寫在這裡。',
                '<strong>專案</strong> <code>./CLAUDE.md</code> 或 <code>./.claude/CLAUDE.md</code>：進版控和團隊共用。放建置指令、架構、專案慣例。講師的課程範例 repo 根目錄就有一份，列出 backend、frontend、mcp、teaching-site 各自的用途。',
                '<strong>子目錄</strong> 例如 <code>frontend/CLAUDE.md</code>：不會一開始就載入，AI 讀寫該目錄的檔案時才讀進來。講師的範例 repo 把 <code>backend/</code>、<code>frontend/</code> 各寫一份；你的課程專案根目錄就是後端，可以只在 <code>frontend/</code> 另放一份。前後端的指令與陷阱分開寫，做前端時就不會被一大段 Maven 說明干擾。',
                '<strong>個人專案設定</strong> <code>./CLAUDE.local.md</code>：只對你、只對這個專案，記得加進 <code>.gitignore</code>，適合放本機的埠號、測試帳號。',
                '<strong>誰優先要寫明</strong>：講師的全域規則寫了「技能裡的強制流程和這裡衝突時，以這裡為準」「我明確指定流程時，照我說的做，分級不適用」。這類句子比依賴載入順序可靠。',
                '<strong>寫短、寫具體</strong>：官方建議每份 CLAUDE.md 控制在 200 行內，越長越容易被忽略；只跟部分檔案有關的規則可以拆到 <code>.claude/rules/</code>。第一次可以用 <code>/init</code> 讓 AI 掃專案產生起始版，再自己補上 AI 掃不出來的規則。',
                '<strong>CLAUDE.md 是交代，不是鎖</strong>：AI 把它當成脈絡，大多數時候會照做，但不保證。真的不允許發生的事（例如讀 <code>.env</code>），要用權限規則擋，見後面「權限與 auto mode」段。'
              ]
            },
            {
              title: '講師的開發規則（一）：語言、註解與範圍',
              type: 'text',
              paragraphs: [
                '以下逐條說明講師全域 CLAUDE.md 的規則：<strong>規則</strong>是什麼、<strong>為什麼</strong>這樣定、<strong>你可以怎麼寫</strong>。不必全部照抄，挑你真的會在意的。'
              ],
              bullets: [
                '<strong>語言統一</strong>：規則是文件、commit 訊息、程式註解都用繁體中文，技術名詞與識別字維持原文。為什麼：不寫的話，AI 常中英混雜，commit 訊息一半英文。你可以寫：「回覆、文件、commit 訊息、註解用繁體中文；類別名稱、套件名稱、指令維持原文。」',
                '<strong>指令用 PowerShell 7</strong>：規則是給你手動執行、寫進文件或腳本的指令用 PowerShell 7 語法；AI 自己探索、驗證時不受限。為什麼：Claude Code 在 Windows 上的 Bash 工具其實是 Git Bash，AI 常把 <code>export</code>、<code>&amp;&amp;</code> 這類 Bash 語法寫進講義，你貼到 PowerShell 就失敗。你可以寫：「給我執行的指令用 PowerShell 7 語法。」',
                '<strong>分領域寫 CLAUDE.md</strong>：規則是專案分前端、後端等領域時，CLAUDE.md 分別寫在各領域的目錄下。為什麼：前端的 npm 指令和後端的 Maven 指令放在同一份，AI 做前端時也會讀到一大段無關內容。你可以寫：「新增領域目錄時，在該目錄建立自己的 CLAUDE.md。」',
                '<strong>中文函式級註解</strong>：規則是新寫或大幅改寫的函式加中文函式級註解，重要的變數與物件也要註解。為什麼：這些專案常隔一段時間才回來維護，註解是留給之後讀程式的人，包括幾個月後的你和下一次的 AI。你可以寫：「新寫或大幅改寫的函式要加中文函式級註解。」',
                '<strong>只做任務需要的部分</strong>：規則是順手發現的重構、額外功能、預先抽象化，列在回報裡讓你決定，不要自己動手。為什麼：AI 很喜歡「順便」改，一次 diff 混進三件事，出錯時很難判斷是哪一件造成的。1-2 章 AI 順手加 JPA、H2 就是例子。你可以寫：「只做這次任務需要的部分，其他發現列在回報裡。」',
                '<strong>先規劃工具呼叫</strong>：規則是彼此獨立的讀取、搜尋同一輪一起發出；寫檔與驗證不放在同一輪。為什麼：獨立的讀取一起發比較快；寫檔和驗證同時發，驗證可能讀到寫入前的舊檔，得到假的結果。你可以寫：「彼此獨立的讀取一起執行；寫檔完成後再驗證。」'
              ]
            },
            {
              title: '講師的開發規則（二）：實跑證據、長時指令與瀏覽器自動化',
              type: 'text',
              paragraphs: [
                '這一組規則都是踩過坑之後才加上去的，所以每條都附上當時發生的事。'
              ],
              bullets: [
                '<strong>要有實跑證據</strong>：規則是任何層級改完程式都要有測試、build 或執行結果，不能只靠讀程式判斷「應該沒問題」。為什麼：AI 說「改好了」的語氣，和真的改好時一模一樣。你可以寫：「改完要附實跑證據，沒有輸出就當作還沒驗證。」',
                '<strong>長時指令 tee 到 log</strong>：規則是全套測試、建置、部署的輸出，要用 <code>Tee-Object</code> 寫進專案內的 log 檔。為什麼：背景執行的指令一結束，畫面上的輸出就找不回來；寫進檔案，事後可以查、AI 也讀得到。你可以寫：「長時間的指令用 <code>2&gt;&amp;1 | Tee-Object logs/xxx.log</code> 保留輸出。」',
                '<strong>看產出物判斷是否還活著</strong>：規則是背景執行時看 log 行數、測試報告檔案數有沒有增加，不看 CPU 或 java 程序在不在。為什麼：2026-08-27 講師曾因為 IDE 的 Java 語言伺服器也是常駐的 java 程序，被誤判為「測試還在跑」而空等 2 小時，實際重跑只要 2 分鐘。你可以寫：「判斷背景工作是否還在跑，看 log 有沒有增加。」',
                '<strong>超過約 10 分鐘沒動靜就當作卡死</strong>：規則是 log 完全沒成長約 10 分鐘，就看 log 尾端與錯誤輸出，然後重跑。為什麼：等下去不會變好，早點看證據比較省時間。',
                '<strong>收尾只跑相關測試</strong>：規則是（2026-10-11 起）只改前端就不跑後端全套；e2e 只跑新寫的、或改到的畫面對應的 spec；語音這類耗時測試只驗新增的部分；回報列出跑了哪些、沒跑哪些與原因。為什麼：每次都跑全套太慢，大家就開始偷懶不跑；只跑相關的，反而每次都會跑。',
                '<strong>e2e 不和重工作同時跑</strong>：規則是多裝置或吃 CPU 的 e2e，不要和建置、語音產生同時執行。為什麼：互相拖慢會造成假的逾時失敗，接著 AI 就會去「修」一個不存在的問題。',
                '<strong>瀏覽器自動化先寫腳本</strong>：規則是用 Playwright 操作瀏覽器時，先把步驟寫成 <code>e2e/</code> 或 <code>scripts/</code> 底下的腳本並加中文註解，再執行。為什麼：一次性的互動操作做完就沒了；腳本可以重跑、失敗時能逐行查，慢慢就累積成自動化測試。本站的驗證也全是這樣寫的。',
                '<strong>記憶協議（選用）</strong>：講師的規則要求開新任務先執行 deep-memory 技能、每個有內容的回合結束寫一筆冷庫。這是個人化的做法，裝了 deep-memory 再考慮加，見後面 deep-memory 段。'
              ]
            },
            {
              title: '任務分級 T0～T3：先判斷要走多完整的流程',
              type: 'text',
              paragraphs: [
                '0-1 章已列出四個層級的定義。這裡補充講師在全域規則裡怎麼用它：分級的目的是<strong>小事不拖、大事不省</strong>。改一個錯字不需要先寫規格；但新增一個 API，如果跳過確認理解和測試，返工的時間會比省下的多。'
              ],
              bullets: [
                '<strong>T0～T2 可以省略什麼</strong>：T0 查詢省略規劃、TDD、除錯流程，但結論要有查證；T1 單檔機械修改省略規劃與規格確認，改完跑相關測試或 build；T2 文件與報告省略 TDD，會重跑的腳本仍要實際跑過。',
                '<strong>T3 的完整流程</strong>：① 動工前讀完規格，把理解（範圍、假設、不確定的地方）跟你確認；創作類任務先發想幾個方案再選 ② 確認後、動手前呼叫一次 advisor ③ 有邏輯變動先寫會失敗的測試，再實作到通過 ④ 修 bug 先重現、找出根因再改。',
                '<strong>和插件技能的關係</strong>：若裝了 superpowers 這類流程插件，T3 就用它的 brainstorming、test-driven-development、systematic-debugging 技能；沒裝就照上面自己做。插件的強制流程和你的分級衝突時，在 CLAUDE.md 寫明以誰為準。',
                '<strong>中途升級</strong>：做到一半發現要動第二個檔、其實是行為變更、牽動 API 契約或資料，立刻升到 T3 補走流程。不要因為「已經開始了」「只差一點」繼續走簡化路徑。',
                '<strong>有疑義取高</strong>：不確定是 T1 還是 T3 時當 T3。多花的是幾分鐘確認，少花的可能是一個上線後才發現的 bug。',
                '<strong>你的指定優先</strong>：你明確說「先 brainstorm」「用 TDD 做」時照你說的做，分級不適用。'
              ]
            },
            {
              title: '完整版 CLAUDE.md 範本（放在 ~/.claude/）',
              type: 'code',
              paragraphs: [
                '0-1 章的精簡版放在專案根目錄、只管這個專案；這份完整版放在全域 <code>~/.claude/CLAUDE.md</code>，套用到你所有的專案。內容是講師全域規則去掉個人化設定後的版本，前面兩段已逐條說明每條規則的理由。',
                '建立方式（PowerShell 7）：<code>New-Item -ItemType Directory -Force "$HOME\\.claude"</code>，再 <code>code "$HOME\\.claude\\CLAUDE.md"</code> 貼上存檔。全域與專案的 CLAUDE.md 會同時載入，兩邊重複的規則可以只留一邊；互相矛盾的一定要刪掉其中一條。',
                '「Advisor 使用時機」與「記憶」兩段要裝了對應功能才有意義，沒用到就刪掉，避免 AI 每次都去找一個不存在的工具。'
              ],
              code: {
                language: 'markdown',
                title: '~/.claude/CLAUDE.md — 完整版範本（去除個人化內容）',
                content: '# 全域開發規則（~/.claude/CLAUDE.md）\n\n這份是我給 AI 的長期指示，適用所有專案。\n\n## 語言與環境\n- 文件、commit 訊息、程式註解用繁體中文；技術名詞與識別字維持原文。\n- 給我手動執行的指令，以及寫進文件或腳本的指令，用 PowerShell 7 語法。\n  你自己探索、驗證時不受此限。\n- 專案分前端、後端等領域時，CLAUDE.md 分別寫在各領域的目錄下。\n\n## 撰寫程式\n- 新寫或大幅改寫的函式要加中文函式級註解，重要的變數與物件也要註解。\n- 只做這次任務需要的部分。順手發現的重構、額外功能、預先抽象化，列在回報裡讓我決定。\n- 測試失敗就改實作，不准為了通過去改測試的斷言；認為測試寫錯，先停下來說明。\n\n## 任務分級（開工前判定一次）\n| 層級 | 條件 | 可省略 | 仍要做 |\n| --- | --- | --- | --- |\n| T0 查詢 | 不修改任何檔案 | 規劃、TDD、除錯流程 | 結論要有實際查證 |\n| T1 單檔機械修改 | 只動 1 個檔；行為等價或內容由我指定；不碰 API 契約、資料庫、交易、權限 | 規劃、TDD、規格確認 | 改完跑相關測試或 build |\n| T2 非程式產出 | 文件、報告、一次性資料分析 | TDD | 會重跑的腳本要寫成檔案並實際跑過 |\n| T3 其他 | 新功能、修 bug、多檔改動、改變既有行為 | — | 完整流程（見下） |\n\nT3 完整流程：\n- 動工前讀完規格，把理解（範圍、假設、不確定的地方）跟我確認。\n- 有邏輯變動先寫會失敗的測試，再實作到通過。\n- 修 bug 先重現、找出根因再改，不要憑猜測連續試改。\n\n分級的運用：\n- 做到一半發現超出原層級，立刻升到 T3 補走流程。\n- 判定有疑義時取較高的層級。\n- 我明確指定流程時照我說的做，分級不適用。\n- 省略 TDD 不等於省略驗證：任何層級改完程式都要有實跑證據。\n\n## Advisor 使用時機（有啟用 advisor 才需要）\n- T3 任務：跟我確認完理解、動手寫程式前，呼叫一次。\n- 同一個錯誤修了兩次還沒過，先呼叫 advisor 再試第三次。\n- 要換做法或擴大範圍前呼叫。\n- 回報完成前呼叫一次；呼叫前先把成果寫進檔案。\n- T0、T1 不必呼叫。\n\n## 長時指令與收尾驗證\n- 全套測試、建置等長時指令，輸出 tee 到專案內的 log 檔。\n- 背景執行時，看 log 行數、報告檔案數有沒有增加來判斷是否還活著，不看 CPU 或程序在不在。\n- 約 10 分鐘完全沒成長就視為卡死：看 log 尾端，然後重跑。\n- 收尾只跑和這次改動有關的測試；回報時列出跑了哪些、沒跑哪些與原因。\n- 吃 CPU 的 e2e 不要和建置等重工作同時跑。\n\n## 瀏覽器自動化\n- 用 Playwright 操作瀏覽器時，先把步驟寫成腳本檔（e2e/ 或 scripts/）並加中文註解，再執行。\n\n## 派工給 subagent\n- 簡報寫清楚目標、已排除的事、範圍、驗收方式。\n- 不要讓 subagent 讀參考答案或別人的報告；這類檔案不放在專案目錄。\n- subagent 回報「完成」後，主對話自己再驗一次。\n\n## 權限\n- 權限被擋下時停下來告訴我原因，不要換個方式繞過。\n- 不可逆操作（git reset --hard、push --force、刪資料表）先說明影響，等我同意。\n\n## 規劃工具呼叫\n- 彼此獨立的讀取、搜尋同一輪一起發；寫檔與驗證不放在同一輪。\n\n## 記憶（選用：有安裝 deep-memory 才加）\n- 開新任務時，先讀取並執行 deep-memory 技能。\n- 有實質內容的回合結束前寫一筆冷庫；任務完成且我滿意時，問我要不要寫進熱庫。'
              }
            },
            {
              title: 'Subagent 是什麼：內建與自訂',
              type: 'text',
              paragraphs: [
                'Subagent（子代理）是主對話派出去做事的另一個 AI。它有自己的對話視窗，只看得到你給它的簡報，做完只把結論交回來。好處是大量讀檔、搜尋的過程不會塞滿主對話；也可以限制它能用的工具（例如只能讀不能改）和使用的模型。',
                '代價也要知道：它只知道簡報裡寫的事，回報時一定會漏掉細節；它出錯時的語氣和找到答案時一樣肯定；同時派很多個，token 會一次用很多。所以<strong>派工前先想清楚值不值得</strong>，不是每件事都要派。'
              ],
              bullets: [
                '<strong>內建的 subagent</strong>：Explore（唯讀、快速搜尋程式庫）、Plan（Plan 模式中收集資料再提出計畫）、general-purpose（可讀可寫的多步驟任務）。不必設定就能用。',
                '<strong>自訂的 subagent</strong>：一個 Markdown 檔，開頭用 YAML frontmatter 寫名稱、說明、可用工具、模型，內文寫它的工作守則。放在 <code>~/.claude/agents/</code> 所有專案都能用；放在專案的 <code>.claude/agents/</code> 只給這個專案用，也可以進版控給團隊。',
                '<strong>同名時誰優先</strong>：專案的 <code>.claude/agents/</code> 優先於 <code>~/.claude/agents/</code>。講師就用同名檔替換了內建的 Explore 與 general-purpose，加上繁體中文回報格式與模型選擇。',
                '<strong>主對話怎麼知道要派給誰</strong>：靠 frontmatter 的 <code>description</code>。寫清楚「什麼情況派給它」，必要時加上 use proactively，主對話就會主動派工；你也可以直接說「請用 code-reviewer 審查剛才的修改」。',
                '<strong>可以巢狀</strong>：subagent 預設也能再派 subagent（最多往下三層）。不想讓某個 agent 再派工，就不要在 <code>tools</code> 列出 Agent。'
              ]
            },
            {
              title: '講師常用的 subagent 一覽',
              type: 'text',
              paragraphs: [
                '下列是講師 <code>~/.claude/agents/</code> 裡和本課程開發相關的定義（其他領域的 agent 略過）。「工具」是 frontmatter 的 <code>tools</code>，沒寫就代表繼承全部工具；「模型」是 frontmatter 的 <code>model</code>。'
              ],
              bullets: [
                '<strong>dev-worker（實作）</strong>：工具未限制；預設 Sonnet，依難度改用 Haiku 或 Opus（見下一段）。何時派：主對話規劃好、範圍明確的實作，例如「照計畫新增 CartController 與測試」。守則是只做交付範圍、改完一定實跑測試、任務比描述複雜就停下來回報。',
                '<strong>code-reviewer（程式審查）</strong>：工具 Read、Grep、Glob（唯讀）；講師用 Fable（沒有 Fable 權限可改 opus）。何時派：寫完或改完程式之後。輸出分成必須修、應該修、小地方、疑問四級，不准為了「我會寫得不一樣」挑毛病。',
                '<strong>debugger（除錯）</strong>：工具未限制；講師用 Fable。何時派：錯誤、測試失敗、行為不如預期。流程是先抓到錯誤訊息與重現步驟，提出 2～3 個假設逐一查證，最後給最小修法並說明為什麼排除其他假設。',
                '<strong>test-writer（補測試）</strong>：工具 Read、Edit、Write、Bash、Grep、Glob；Sonnet。何時派：替既有程式補測試。先列出測試清單（正常路徑、邊界、錯誤分支）再寫；不 mock 自己的程式，只在網路與程序邊界 mock。',
                '<strong>react-specialist（React）</strong>：工具未限制；Sonnet。何時派：2-4、2-5 章的 React 19 元件設計、hooks、效能問題。原則包括不用 <code>useEffect</code> 同步兩個 state、列表 key 不用陣列索引。',
                '<strong>security-auditor（資安審查）</strong>：工具 Read、Grep、Glob（唯讀）；Opus。何時派：1-9 章 JWT、授權規則完成後，或處理輸入、金鑰的程式。依 OWASP Top 10 檢查，每個發現要附具體攻擊方式，無法確認的標「待驗證」。',
                '<strong>doc-writer（文件）</strong>：工具 Read、Edit、Write、Grep（不能跑指令）；Haiku。何時派：README、API 文件、使用範例。範例要能實際執行，不寫「簡單地」「強大的」這類空話。',
                '<strong>Explore（大範圍搜尋，內建、講師覆寫）</strong>：工具 Read、Grep、Glob、Bash，並用 <code>disallowedTools</code> 禁止 Write、Edit；Haiku。何時派：要翻很多檔案、你只需要結論的搜尋，例如「列出所有用到 @PreAuthorize 的地方」。只定位不審查。',
                '<strong>general-purpose（多步驟研究，內建、講師覆寫）</strong>：工具未限制；沿用主對話的模型，大範圍盤點時指定 opus。何時派：要讀很多檔再歸納、比較的研究，或多步驟任務。',
                '<strong>Plan（規劃，內建）</strong>：唯讀。何時用：在 Plan 模式（輸入框切換或 <code>/plan</code>）中由主對話自動使用，收集資料後提出計畫，你批准前不會改任何檔案。適合 T3 任務的第一步。'
              ]
            },
            {
              title: 'dev-worker 依難度選模型',
              type: 'text',
              paragraphs: [
                'dev-worker 的 <code>description</code> 寫了選模型的規則，主對話派工時照著用 <code>model</code> 參數指定。目的是<strong>簡單的事用便宜快速的模型，難的事才用貴的</strong>，同樣的額度可以做更多事。'
              ],
              bullets: [
                '<strong>Haiku</strong>：機械性、單檔、照指定內容改。例如 rename、改常數、改文案、調格式、照現有範本補一組測試。',
                '<strong>Sonnet（預設）</strong>：需要理解多個檔案的邏輯、新增分支、除錯、跨模組修改。本課大部分實作提示詞都在這一級。',
                '<strong>Opus（升級用）</strong>：Sonnet 做不動的跨模組重構，也就是牽動多個模組的契約或資料流、而且 Sonnet 已經試過仍然失敗。不要一開始就用 Opus。',
                '<strong>你可以怎麼用</strong>：直接跟主對話說「這個改常數的工作派 dev-worker 用 haiku 做」；或把規則寫進你自己的 agent description，讓主對話自動判斷。',
                '<strong>別名指向哪個版本</strong>：<code>haiku</code>、<code>sonnet</code>、<code>opus</code> 是別名，會跟著 Claude Code 版本更新；想固定版本，可以在 <code>settings.json</code> 的 <code>env</code> 設 <code>ANTHROPIC_DEFAULT_HAIKU_MODEL</code> 這類變數，或在 frontmatter 寫完整的模型 ID。'
              ]
            },
            {
              title: '派工簡報怎麼寫：目標、已排除的事、範圍、驗收',
              type: 'code',
              paragraphs: [
                'Subagent 只知道你寫在簡報裡的事。簡報寫得好不好，直接決定它回來的東西能不能用。講師的固定格式是四段：<strong>目標</strong>（要回答什麼問題或完成什麼）、<strong>已知與已排除</strong>（你已經查過的，省得它重查，或帶著你的猜測去「證實」）、<strong>範圍</strong>（哪些檔案可以讀、可以改，哪些不准碰）、<strong>驗收</strong>（交回來的格式與怎樣才算完成）。',
                '<strong>背景與平行</strong>：從主對話派出的 subagent 預設在背景執行，你可以繼續對話；它需要權限時，會在主對話跳出詢問並標明是哪個 subagent。彼此獨立的工作，請 AI 在同一則訊息裡一次派出多個，就會同時進行（預設上限 20 個）。',
                '<strong>真實案例：隔離資訊</strong>：課前逐字驗證時，執行 1-9 章提示詞的 subagent 讀到專案根目錄的驗證報告，看到報告記錄的編譯問題，就刻意改變測試的寫法避開它，結果驗證不到真正的問題。之後的派工簡報都加上「不要讀 VERIFY-REPORT.md」，參考答案與報告也移出專案目錄。'
              ],
              bullets: [
                '<strong>不該派的情況</strong>：幾個工具呼叫就能完成的查詢；你已經知道檔案在哪裡的查找；需要你邊看邊決定的工作。這些自己做比較快，也不會遺失細節。',
                '<strong>派了就不要自己也做</strong>：同一件事派出去又自己查一遍，花兩次錢、還可能得到兩個互相矛盾的結論。等它回來再決定。',
                '<strong>要第二意見時給程式碼，不給結論</strong>：請 code-reviewer 審查時，給它要看的檔案或 diff，不要附上「我覺得這裡沒問題」。帶著你的假設去審，它多半會幫你證實。',
                '<strong>回報要驗收</strong>：subagent 說「全部通過」時，主對話要自己看一次測試輸出或截圖。課前驗證時，有 subagent 違反簡報規定改用 heredoc 改檔，也有 subagent 沒照規定格式回報，都是主對話檢查時才發現。'
              ],
              code: {
                language: 'text',
                title: '派工簡報範例（請 Explore 搜尋，以及請 dev-worker 做機械性修改）',
                content: '【目標】\n找出 src/main 裡所有管理員 API，列出每個端點用的是 URL 授權規則、@PreAuthorize，\n還是兩者都沒有。\n\n【已知／已排除】\n- 授權規則集中在 config/SecurityConfig.java。\n- AuthController 的登入端點本來就公開，不用檢查。\n\n【範圍】\n- 只讀 src/main，不修改任何檔案。\n- 不要讀 logs/、docs/ 與任何 *-REPORT.md（參考答案與報告會影響判斷）。\n\n【驗收】\n- 回報清單：路徑:行號、HTTP 方法與路徑、授權方式。\n- 找不到或不確定的寫「找不到」，不要猜。\n\n────────────────────────────────\n派給 dev-worker 的例子（機械性修改，指定 haiku）：\n\n請派 dev-worker（model: haiku）：\n把 OrderService.VALID_STATUSES 的 "CANCELED" 改成 "CANCELLED"，只改這一個常數。\n改完執行 mvn test -Dtest=OrderLifecycleTest，把結果貼回來；\n測試失敗就停下來回報，不要改測試。'
              }
            },
            {
              title: '自己建一個 subagent：.md 範例',
              type: 'code',
              paragraphs: [
                '下面是一個簡化版的範例：只能讀、不能改的 Spring Boot 後端審查員。把它存成專案的 <code>.claude/agents/spring-reviewer.md</code>（只給這個專案用），或 <code>~/.claude/agents/spring-reviewer.md</code>（所有專案都能用）。',
                '建立方式（在專案根目錄的 PowerShell 7 執行）：<code>New-Item -ItemType Directory -Force .claude\\agents</code>，再 <code>code .claude\\agents\\spring-reviewer.md</code> 貼上存檔。Claude Code 會監看這兩個 agents 資料夾，存檔後幾秒內就生效；但如果 agents 資料夾是這次對話開始後才建立的，要重開對話才會載入。也可以直接請 AI 照下面的範例幫你寫這個檔案。'
              ],
              bullets: [
                '<strong>name</strong>：唯一名稱，最多 256 字元、不能含冒號（冒號保留給插件）；慣例是小寫英文加連字號，例如 <code>code-reviewer</code>。同名時專案層級優先。',
                '<strong>description</strong>：主對話靠它決定什麼時候派工，寫「什麼情況下用它」，不是寫它多厲害。',
                '<strong>tools</strong>：只列需要的工具。審查員只給 Read、Grep、Glob，就算簡報寫錯要它修，它也改不了檔案。沒寫 <code>tools</code> 會繼承全部工具；也可以用 <code>disallowedTools</code> 從全部工具中扣掉幾個。',
                '<strong>model</strong>：<code>haiku</code>、<code>sonnet</code>、<code>opus</code>、完整模型 ID，或 <code>inherit</code>（沿用主對話）。另有 <code>effort</code>、<code>permissionMode</code> 等選填欄位，第一次不用加。',
                '<strong>內文</strong>：寫成你會交代新同事的話：先讀什麼、檢查什麼、回報什麼格式、不准做什麼。',
                '<strong>試用</strong>：存檔、開新對話後說「請用 spring-reviewer 審查 CartService 最近的修改」，確認它的回報照你定的四個等級，而且沒有改任何檔案。'
              ],
              code: {
                language: 'markdown',
                title: '.claude/agents/spring-reviewer.md — 唯讀的後端審查員',
                content: '---\nname: spring-reviewer\ndescription: 審查 Spring Boot 後端的修改。寫完或改完 src/main 的 Java 程式後主動使用（use proactively after backend changes）。只讀不改。\ntools: Read, Grep, Glob\nmodel: sonnet\n---\n你是這個專案的 Spring Boot 程式審查員，只負責找問題，不修改任何檔案。\n\n審查前：\n- 先讀專案根目錄的 CLAUDE.md，依專案慣例判斷，不用你個人的偏好。\n\n重點檢查：\n- 業務判斷寫在 Service；Controller 只處理參數與狀態碼。\n- @Transactional 放在 Service；扣庫存、建立訂單這類寫入在同一個交易內。\n- 授權：管理員 API 有 URL 規則或 @PreAuthorize；使用者只查得到自己的資料。\n- 例外：GlobalExceptionHandler 只處理自訂的業務例外，沒有攔截 Exception.class。\n- 金鑰、密碼沒有寫死在程式或設定檔。\n\n回報格式（繁體中文）：\n- 必須修正：路徑:行號 — 問題 → 建議修法\n- 建議修正：同上\n- 小地方：同上\n- 疑問：意圖不清楚的地方\n沒有問題就直接說沒有問題，不要為了湊數挑毛病。'
              }
            },
            {
              title: 'advisor：卡關與收尾前，找更強的模型看一眼',
              type: 'code',
              paragraphs: [
                'Claude Code 的 <strong>advisor</strong> 是一個實驗功能：替主模型配一個通常更強的「顧問」模型。主模型在關鍵時刻呼叫它，顧問會看完<strong>整段對話</strong>（每個工具呼叫與結果），給出建議後主模型再繼續。呼叫不帶任何參數，什麼時候呼叫由主模型自己決定；你也可以在提示詞裡要求「先問 advisor」。',
                '設定方式有三種：對話框的 <code>/advisor</code>、設定檔的 <code>advisorModel</code>、啟動時的 <code>--advisor</code> 參數。顧問模型的等級必須不低於主模型，可以配對的組合見官方 advisor 文件的對照表；設定了不合格的組合時，Claude Code 會提示並且不啟用。需要 Anthropic API 或訂閱帳號，透過 Bedrock 等雲端平台使用時不一定支援。'
              ],
              bullets: [
                '<strong>講師規定一定要呼叫的時機</strong>：① T3 任務跟你確認完理解、動手寫程式前 ② 同一個錯誤或測試失敗修了兩次還沒過，第三次之前 ③ 要換做法或擴大範圍之前 ④ 回報完成之前，而且呼叫前先把成果寫進檔案，避免呼叫途中對話中斷而遺失。',
                '<strong>短任務不用</strong>：每次呼叫顧問都要重新讀完整段對話，而且這一段<strong>不吃提示快取</strong>，對話越長越貴。所以講師規定 T0 查詢、T1 單檔機械修改不必呼叫：成本大於效益。',
                '<strong>建議不是命令</strong>：主模型會照建議做，但如果照做後實際失敗，或檔案內容和建議矛盾，應該把衝突提出來，而不是硬照做。你在旁邊看到兩者意見不同時，也要求它說明依據。',
                '<strong>和 Spring AI 的 Advisor 完全無關</strong>：2-1～2-3 章的 <code>MessageChatMemoryAdvisor</code>、<code>QuestionAnswerAdvisor</code>、<code>SimpleLoggerAdvisor</code> 是 Spring AI 的程式元件，包在 <code>ChatClient</code> 每次請求的前後，負責塞入對話記憶、檢索知識庫內容、記錄日誌，會跟著你的應用程式上線。Claude Code 的 advisor 是你<strong>開發時</strong>的第二意見，只存在於你和 AI 的對話裡，跟應用程式無關。',
                '<strong>提示詞裡要講清楚是哪一個</strong>：跟 AI 說「加一個 Advisor」很容易被誤會。要改程式時說「在 ChatClient 加 Spring AI 的 QuestionAnswerAdvisor」；要第二意見時說「先呼叫 advisor 工具」。'
              ],
              code: {
                language: 'powershell',
                title: 'advisor 的啟用與使用（對話框指令、設定檔與 PowerShell 7）',
                content: '# 在 Claude Code 對話框輸入\n/advisor            # 開啟選單，選擇 advisor 模型\n/advisor opus       # 直接指定 advisor 模型\n/advisor off        # 關閉\n\n# 或寫進設定檔 ~/.claude/settings.json，之後每次都啟用\n#   { "advisorModel": "opus" }\n\n# 終端機 CLI 只對這一次啟用（PowerShell 7）\nclaude --advisor opus\n\n# 執行中想主動要第二意見，直接在提示詞寫：\n#   「先問 advisor，再決定要不要換做法。」\n# 對話中出現 Advising 行，結束後按 Ctrl+O 可以看 advisor 的建議內容'
              }
            },
            {
              title: '權限與 auto mode：被擋下時怎麼處理',
              type: 'code',
              paragraphs: [
                'Claude Code 的權限模式可以在 VS Code 輸入框底下切換（終端機 CLI 按 <kbd>Shift+Tab</kbd>）：<strong>Manual</strong> 每次改檔、跑指令都問你；<strong>Edit automatically</strong>（acceptEdits）自動接受檔案修改；<strong>Plan</strong> 只研究、提計畫，你批准前不改檔；<strong>Auto</strong> 不再逐一詢問，改由背景的<strong>分類器</strong>檢查每個動作是否符合你的要求，判斷為破壞性或可疑的就擋下來。',
                '權限規則寫在 <code>settings.json</code> 的 <code>permissions</code>：比對順序固定是 <strong>deny → ask → allow</strong>，先符合的決定結果，寫得比較細的 allow 也救不回被 deny 擋住的動作。<code>Edit(路徑)</code> 規則套用到所有會改檔的內建工具，<strong>包含用 Write 新增檔案</strong>。在 auto mode 中，符合 allow 規則的動作會直接放行，不再經過分類器（寫入受保護路徑等少數例外仍會檢查）；另外，<strong>工作目錄內</strong>的一般檔案修改本來就自動通過，會送去分類器的主要是 Bash 指令、網路請求，以及工作目錄以外的檔案修改。',
                '<strong>真實案例</strong>：課前逐字驗證 1-9 章時，建立 Flyway <code>V3__cart_and_order_items.sql</code> 被分類器以「Destructive or Unwanted Actions」拒絕，推測是 SQL 內含 <code>DROP COLUMN</code> 與 <code>DROP CONSTRAINT</code>；管理員訂單那一步，改用逐檔修改後，仍有三處修改（包含新增、帶有 <code>@PreAuthorize</code> 的 AdminOrderController）被以「Undermining Oversight」拒絕，原因無法確認。那次的驗證副本放在主對話工作目錄以外的另一個資料夾，事後加上的允許規則也是指向那個資料夾的絕對路徑，所以檔案寫入很可能是因為「在工作目錄以外」才送去分類器。兩次 subagent 都停下來回報、沒有繞過；由使用者確認內容後放行，或加上指向該資料夾的 <code>Edit</code> 允許規則，才順利通過。同一次驗證中，單獨執行 <code>mvn test -Dtest=ConcurrentCheckoutTest</code> 也被擋過，這類 Bash 指令就適合用範圍窄的 allow 規則放行。'
              ],
              bullets: [
                '<strong>⚠ 被擋下時不要叫 AI 繞過</strong>：AI 被擋住後，可能改用 Bash 的 heredoc、python 腳本把同樣的內容寫進檔案。這等於拆掉你自己裝的煞車。正確做法是先看它要做什麼、為什麼被擋，確認內容沒問題再由你放行。',
                '<strong>在哪裡放行</strong>：被擋的動作會出現在 <code>/permissions</code> 的 Recently blocked 分頁，可以從那裡核准讓 AI 重試。連續被擋 3 次或累計 20 次，auto mode 會暫停，改回逐一詢問你。',
                '<strong>規則寫在哪一層</strong>：專案的 <code>.claude/settings.json</code>（進版控、團隊共用）或 <code>.claude/settings.local.json</code>（只有你）。在專案設定裡，開頭單一斜線的 <code>/src/**</code> 代表「從專案根目錄算起」，不是磁碟根目錄。',
                '<strong>絕對路徑與 Windows</strong>：要寫在全域 <code>~/.claude/settings.json</code> 又指定某個專案，用兩個斜線的絕對路徑；Windows 路徑會先轉成 POSIX 形式再比對，例如 <code>D:\\projects\\my-shop</code> 要寫成 <code>Edit(//d/projects/my-shop/**)</code>。',
                '<strong>範例規則的用途</strong>：<code>Edit</code> 規則在 Manual、Edit automatically 模式可以少問幾次；在 auto mode 中，工作目錄內的修改本來就會通過，<code>Edit</code> 規則主要用在工作目錄以外的路徑。<code>Bash(mvn test *)</code> 讓測試指令不必每次經過分類器。',
                '<strong>範圍寫窄</strong>：只放行你確定會反覆需要的目錄與指令。<code>Bash(*)</code> 這類全開規則在進入 auto mode 時會被自動停用，也不該這樣寫。',
                '<strong>真的不准發生的事用 deny</strong>：例如 <code>Read(/.env)</code>。CLAUDE.md 寫「不要讀 .env」只是交代，deny 規則才會真的擋下來。'
              ],
              code: {
                language: 'json',
                title: '.claude/settings.json — 專案權限規則範例',
                content: '{\n  "permissions": {\n    "allow": [\n      "Edit(/src/**)",\n      "Edit(/frontend/src/**)",\n      "Edit(/e2e/**)",\n      "Bash(mvn test)",\n      "Bash(mvn test *)"\n    ],\n    "deny": [\n      "Read(/.env)",\n      "Edit(/.env)"\n    ]\n  }\n}'
              }
            },
            {
              title: 'deep-memory 完整說明（一）：安裝與第一次啟動',
              type: 'code',
              paragraphs: [
                '0-1 章介紹了 deep-memory 的冷熱兩層概念與安裝指令。這裡補上完整的設定步驟。記憶資料預設放在 <code>~/.deep-memory</code>（Windows 是 <code>C:\\Users\\你的帳號\\.deep-memory</code>），所有專案共用同一份，純本機、可離線。',
                '它分兩種 Python 需求：<strong>寫冷庫</strong>只用標準函式庫，一般的 <code>python</code> 就能跑，所以裝好的第一個對話就開始記錄；<strong>檢索與精煉</strong>要用 ChromaDB 與向量模型，需要另外建立虛擬環境 <code>~/.deep-memory/.venv</code>。'
              ],
              bullets: [
                '<strong>第一次觸發會改你的全域規則</strong>：deep-memory 第一次執行時，會檢查 <code>~/.claude/CLAUDE.md</code> 有沒有「任務啟動協議」，沒有就自動加上一段，並告訴你它加了。這是它讓自己每次都被啟用的方式；不想要可以手動刪除。',
                '<strong>種子知識庫</strong>：<code>seed.py</code> 會放入一批整理好的記憶系統最佳實務當起點；已經存在的分類預設跳過，不會覆蓋。',
                '<strong>已有其他記憶</strong>：用過 ChatGPT 記憶或 Claude Code 自己的本機記憶，可以用同一個技能包裡的 memory-import 先 <code>--dry-run</code> 預覽再匯入；它只在你指定路徑時才執行，不會自動掃描。',
                '<strong>換存放位置</strong>：設定環境變數 <code>DEEP_MEMORY_WORKSPACE</code>，或在每支腳本加 <code>--workspace 路徑</code>。'
              ],
              code: {
                language: 'powershell',
                title: 'PowerShell 7 — deep-memory 環境設定（第一次）',
                content: '# 0. 先用 0-1 章「deep-memory：讓 AI 有長期記憶」段的 npx skills add 指令安裝技能，重開 Claude Code\n\n# 1. 技能與記憶資料的位置\n$SK = "$HOME\\.claude\\skills"                  # -g 安裝的技能目錄\n$PY = "$HOME\\.deep-memory\\.venv\\Scripts\\python" # 檢索用的虛擬環境\nTest-Path "$SK\\deep-memory\\SKILL.md"           # True 才代表裝在這裡\n# 找不到時搜尋實際位置\nGet-ChildItem "$HOME\\.claude", "$HOME\\.agents" -Recurse -Filter write_cold.py -ErrorAction SilentlyContinue |\n  Select-Object -First 3 FullName\n\n# 2. 建立虛擬環境並安裝檢索套件（只有檢索、精煉需要；寫冷庫只要一般的 python）\npython -m venv "$HOME\\.deep-memory\\.venv"\n& $PY -m pip install -r "$SK\\chroma-hybrid-search\\requirements.txt"\n\n# 3. 第一次使用：安裝種子知識庫，建立向量索引\n& $PY "$SK\\deep-memory\\scripts\\seed.py"\n& $PY "$SK\\chroma-hybrid-search\\scripts\\update_db.py"\n\n# 4. 確認記憶資料夾\nGet-ChildItem "$HOME\\.deep-memory"   # 應有 knowledge-base、experience、cold-notes 等'
              }
            },
            {
              title: 'deep-memory 完整說明（二）：每個回合做了什麼',
              type: 'text',
              paragraphs: [
                '裝好之後平常不用下任何指令，AI 會依技能的規定自己做。知道它在做什麼，你才看得懂對話裡出現的「已載入知識庫」「已寫入冷庫」，也知道哪裡可以介入。'
              ],
              bullets: [
                '<strong>開工：先查</strong>：新任務或換主題時，先抽出 3～8 個關鍵字，比對熱庫的分類索引 <code>knowledge-base/_index.json</code>，比到就整份讀進來，並在回覆中說「已載入知識庫：xxx.md」。',
                '<strong>比不到：混合檢索</strong>：關鍵字比不到、分類太多、檔案太大或問題跨領域時，改用 chroma-hybrid-search：向量搜尋找語意相近、BM25 找關鍵字完全相符，再用重排模型排序，只取分數 0.35 以上的結果。這就是 Day 2 教的 RAG 混合檢索。',
                '<strong>先查目前專案，再跨專案</strong>：每筆冷庫都記著來自哪個專案（取自當時的資料夾名稱）。檢索時先查目前專案，查不到才擴大到全部記憶，避免別的專案的紀錄擠掉相關的結果。',
                '<strong>用到其他技能時：載入經驗</strong>：例如這一輪用了 ui-ux-pro-max，就會去讀 <code>experience/skill-ui-ux-pro-max.md</code> 的使用心得，檔案太大時只取最相關的幾條。',
                '<strong>回合結束：寫冷庫，不問你</strong>：每個有實質內容的回合結束前，用 <code>write_cold.py</code> 寫一筆到 <code>cold-notes/raw.jsonl</code>。不挑、不判斷重要性，篩選留到精煉時再做，因為事後回頭看才知道什麼有用。',
                '<strong>任務完成：問你要不要寫熱庫</strong>：AI 判斷任務完成、你也表示滿意時，會把解法濃縮成一句話，問你要不要寫進熱庫。你只確認真正值得重用的，這一步決定記憶的品質。',
                '<strong>分類</strong>：每筆記錄標 <code>knowledge</code>（通用的規則、做法、專案決策）、<code>experience</code>（某個技能或工具的坑與參數）或 <code>both</code>（精煉時拆成兩筆）。'
              ]
            },
            {
              title: 'deep-memory 完整說明（三）：冷庫、熱庫與精煉',
              type: 'code',
              paragraphs: [
                '<strong>冷庫</strong> <code>cold-notes/raw.jsonl</code> 是一行一筆的原始紀錄，只會增加；<strong>熱庫</strong>是整理過的 Markdown：<code>knowledge-base/分類.md</code> 放通用知識，<code>experience/skill-技能名.md</code> 放技能心得，每條以 <code>## 🔧</code> 標題開頭，檢索時以條目為單位切分。',
                '<strong>精煉</strong>就是冷庫 → 熱庫的去蕪存菁：重複的合併、過時的淘汰、有用的整理成可以照做的條目。實際指令如下，但平常直接對 AI 說「幫我精煉冷庫」「幫我精煉經驗」即可。下方的 <code>&lt;run-id&gt;</code> 是 <code>refine_prepare.py</code> 執行後印出的工作目錄名稱。'
              ],
              bullets: [
                '<strong>什麼時候精煉</strong>：待精煉條目累積到 30 筆（<code>write_cold.py</code> 會提示）、同一個標籤或技能出現 3 次以上，或你主動要求。',
                '<strong>小量多次</strong>：一次 30～50 筆，每包小、整輪幾分鐘就完成。一次塞幾百筆給 AI 讀，既慢又容易漏判。',
                '<strong>一定先預覽</strong>：<code>refine_apply.py --dry-run</code> 會列出要新增幾條、附加到哪些條目、要標記哪些行，你確認後才真的寫入；寫入前會先備份要改的檔案。',
                '<strong>冷庫不刪除</strong>：精煉過或判斷不值得保留的冷庫條目只標成 <code>reviewed</code>，歷史都留著，只是不再出現在檢索結果。',
                '<strong>精煉完要抽查</strong>：用新條目的關鍵字跑一次 <code>search.py</code>，查得到才算完成。'
              ],
              code: {
                language: 'powershell',
                title: 'PowerShell 7 — 冷庫、檢索、精煉與儀表板',
                content: '$SK = "$HOME\\.claude\\skills"\n$PY = "$HOME\\.deep-memory\\.venv\\Scripts\\python"\n\n# ── 寫冷庫：平常 AI 每回合自動寫，這是它實際執行的指令 ──\npython "$SK\\chroma-hybrid-search\\scripts\\write_cold.py" `\n  --topic "Flyway 只加 flyway-core 不會遷移" `\n  --content "Spring Boot 4 要用 spring-boot-starter-flyway；只放 flyway-core 啟動不報錯但完全不建表" `\n  --tags "flyway,spring-boot-4" --memory-type knowledge\n\n# ── 主動檢索：先查目前專案，查不到才跨專案 ──\n& $PY "$SK\\chroma-hybrid-search\\scripts\\search.py" --query "Flyway 沒有建表" --limit 3 --min-score 0.35\n\n# ── 精煉冷庫：平常直接說「幫我精煉冷庫」，AI 會依序執行 ──\n& $PY "$SK\\deep-memory\\scripts\\refine_prepare.py"     # 把待精煉的條目分組打包，附可能重複的熱庫條目\n# （AI 平行派出 subagent，每包寫一份草稿 pack-NN.drafts.md）\npython "$SK\\deep-memory\\scripts\\refine_apply.py" --work-dir "$HOME\\.deep-memory\\refine-work\\<run-id>" --dry-run   # 先預覽\npython "$SK\\deep-memory\\scripts\\refine_apply.py" --work-dir "$HOME\\.deep-memory\\refine-work\\<run-id>"             # 你確認後才寫入\n& $PY "$SK\\chroma-hybrid-search\\scripts\\update_db.py"  # 重建索引，再用 search.py 抽查新條目\n\n# ── 精煉技能經驗：預設就是預覽，加 --apply 才寫入 ──\npython "$SK\\deep-memory\\scripts\\refine_experience.py" --dry-run\npython "$SK\\deep-memory\\scripts\\refine_experience.py" --skill ui-ux-pro-max --apply\n\n# ── 記憶儀表板：輸出可離線開啟的 HTML ──\npython "$SK\\deep-memory\\scripts\\viz.py"'
              }
            },
            {
              title: 'deep-memory 完整說明（四）：備份、還原與隱私',
              type: 'code',
              paragraphs: [
                '記憶只存在本機，換電腦或硬碟壞了就沒了。備份會把熱庫（<code>knowledge-base/</code>、<code>experience/</code>）與向量資料的可攜式匯出推到你自己的 GitHub 私有 repo；虛擬環境與向量索引不備份，還原後重建即可。'
              ],
              bullets: [
                '<strong>⚠ 冷庫會照實記下對話重點</strong>：你貼給 AI 的錯誤訊息、檔案路徑、客戶名稱、內部網址，都可能寫進冷庫，之後再被精煉進熱庫、推上備份。金鑰、密碼、個資不要貼進對話；不小心貼了，請 AI 從 <code>raw.jsonl</code> 刪掉那一筆。',
                '<strong>備份維持私有</strong>：<code>backup.py</code> 有 <code>--visibility public</code> 選項，除非你逐條檢查過內容，否則不要用。',
                '<strong>公司與個人分開</strong>：記憶預設所有專案共用。公司專案的記憶不想和個人專案混在一起，可以替公司專案設定不同的 <code>DEEP_MEMORY_WORKSPACE</code>，並確認公司是否允許備份到 GitHub。',
                '<strong>不會覆蓋別台電腦的備份</strong>：推送前會先檢查遠端；遠端有本機沒有的新紀錄（例如另一台電腦推的），就中止並提醒你先還原，不會強制覆蓋。',
                '<strong>還原有兩種模式</strong>：預設只補本機沒有的檔案；<code>--overwrite</code> 會整個換成 GitHub 上的版本，只在新電腦或刻意回到某次備份時使用。',
                '<strong>你可以拒絕</strong>：AI 問要不要寫熱庫時說「這段不要記」即可；冷庫仍會留一筆原始紀錄，之後精煉時會被判斷為略過。'
              ],
              code: {
                language: 'powershell',
                title: 'PowerShell 7 — 備份與還原記憶',
                content: '$SK = "$HOME\\.claude\\skills"\n$PY = "$HOME\\.deep-memory\\.venv\\Scripts\\python"\ngh auth status          # 備份用 gh 建立與推送 repo，先確認已登入（0-1 章）\n\n# 第一次備份：自動建立 GitHub「私有」repo，預設名稱 deep-memory-knowledge\n& $PY "$SK\\memory-backup\\scripts\\backup.py"\n\n# 之後定期備份\n& $PY "$SK\\memory-backup\\scripts\\backup.py" --message "新增 Spring Boot 4 踩坑紀錄"\n\n# 換電腦：先完成上面的環境設定，再還原（預設只補本機沒有的檔案，不覆蓋）\n& $PY "$SK\\memory-backup\\scripts\\restore.py"\n& $PY "$SK\\chroma-hybrid-search\\scripts\\update_db.py"   # 還原後重建向量索引'
              }
            },
            {
              title: 'ui-ux-pro-max 完整說明（一）：它是什麼、怎麼裝',
              type: 'text',
              paragraphs: [
                '2-5 章末用 ui-ux-pro-max 把商城升級成品牌官網。它不是模板，而是一個<strong>可搜尋的設計規則資料庫</strong>：84 種風格、192 組配色、74 組字體搭配、192 種產品類型的推理規則、98 條 UX 準則、圖示、GSAP 動態與圖表類型，涵蓋 React、Vue、Flutter、Tailwind 等 22 種技術堆疊。AI 依你的產品類型查詢，取得有根據的設計系統再實作，視覺就不再是模型的預設口味。'
              ],
              bullets: [
                '<strong>安裝</strong>：照 2-5 章，在 VS Code 的 Claude Code 插件或 Claude 桌面版的插件管理畫面新增 marketplace 並安裝 ui-ux-pro-max，裝完重新開啟。搜尋腳本只需要 Python 3（0-1 章已安裝），沒有其他依賴。',
                '<strong>腳本位置</strong>：用插件安裝時，搜尋腳本在 <code>~/.claude/plugins/marketplaces/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/scripts/search.py</code>。平常由 AI 自己呼叫，你想親手查詢時才需要這個路徑。',
                '<strong>何時會用到</strong>：設計新頁面、改元件、選配色字體、檢查無障礙與手機版。純後端邏輯、API、資料庫設計用不到它。',
                '<strong>檢查優先順序</strong>：技能把規則分十類並排好優先順序：無障礙（對比 4.5:1、鍵盤操作）與觸控（按鈕至少 44px）最高，接著是效能、風格一致、版面與手機版、字體與配色、動態、表單、導覽、圖表。2-5 章末升級驗收畫面時，就照這個順序檢查。',
                '<strong>查不到時不准編</strong>：技能規定搜尋結果為 0 筆時，要換關鍵字重查一次；仍然沒有就明說「這是內建預設值，不是資料庫的結果」，不能假裝有查到。'
              ]
            },
            {
              title: 'ui-ux-pro-max 完整說明（二）：常用指令',
              type: 'code',
              paragraphs: [
                '以下指令講師都在本機用 PowerShell 7 實際跑過（<code>--persist</code> 與 <code>--page</code> 會在當下資料夾產生 <code>design-system\\</code>，試跑時先切到一個空資料夾）。平常把需求告訴 AI，它會自己挑查詢；親手跑一次，你才知道它拿到的是什麼素材，判斷它的取捨有沒有道理。'
              ],
              bullets: [
                '<strong>--design-system</strong>：最常用的入口。新頁面、新專案一律先跑它，得到版面模式、風格、配色（含 CSS 變數名稱）、字體、效果與要避免的反模式。<code>-p</code> 是專案名稱。',
                '<strong>--domain</strong>：只查單一面向。設計系統的某一項不滿意（例如配色），不必整個重查，用 <code>--domain color</code> 換一組關鍵字補查即可。不加 <code>--domain</code> 時會自動判斷，重疊的詞（例如 font）可能分錯領域，結果不對就明確指定。',
                '<strong>--persist</strong>：把設計系統存成 <code>design-system/專案名/MASTER.md</code>，之後換對話、換人做其他頁面都照同一份。務必加 <code>--output-dir</code> 指到專案根目錄，否則會寫到當下所在的資料夾。',
                '<strong>三個旋鈕</strong>：<code>--variance</code> 低是置中極簡、高是大膽不對稱；<code>--motion</code> 低是細微互動、高是複雜編排，並附上對應的 GSAP 範例；<code>--density</code> 低是寬鬆留白（行銷頁）、高是緊湊（管理後台）。不設定就維持原本輸出。',
                '<strong>--stack</strong>：依技術堆疊給實作規則，本課前端用 <code>react</code>。',
                '<strong>關鍵字要多面向</strong>：組合產品、產業、語氣、密度，例如 <code>ecommerce electronics minimal content-dense</code>，不要只寫 <code>app</code>。'
              ],
              code: {
                language: 'powershell',
                title: 'PowerShell 7 — ui-ux-pro-max 常用查詢',
                content: '# 用插件管理畫面安裝後的腳本位置\n$UX = "$HOME\\.claude\\plugins\\marketplaces\\ui-ux-pro-max-skill\\.claude\\skills\\ui-ux-pro-max\\scripts\\search.py"\n# 輸出含框線與表情符號；若出現 UnicodeEncodeError，先設定輸出編碼\n$env:PYTHONIOENCODING = \'utf-8\'\n\n# 1. 設計系統：一次查產品類型、風格、配色、字體、版面，並列出要避免的樣式\npython $UX "ecommerce electronics store minimal" --design-system -p "My Shop"\n\n# 2. 單一領域補查（--domain）：color、typography、ux、style、landing、chart、icons、gsap……\npython $UX "monochrome minimal blue accent" --domain color\npython $UX "modern clean sans" --domain typography\npython $UX "form error accessibility" --domain ux\n\n# 3. 保存設計系統（--persist）：寫到 .\\design-system\\my-shop\\MASTER.md，之後每一頁都照它做\npython $UX "ecommerce electronics store minimal" --design-system --persist -p "My Shop" --output-dir .\n#    頁面專屬覆寫：另外產生 pages\\checkout.md，規則優先於 MASTER.md\npython $UX "ecommerce electronics store minimal" --design-system --persist -p "My Shop" --output-dir . --page "checkout"\n#    MASTER.md 已存在時 --persist 會跳過不寫；確定要重產才加 --force\n\n# 4. 三個旋鈕（1～10）：variance 變化度、motion 動態、density 密度\npython $UX "admin order dashboard" --design-system --variance 3 --motion 2 --density 8\n\n# 5. 技術堆疊的實作規則（--stack）\npython $UX "form validation error" --stack react\n\n# 輸出成 Markdown 方便存檔：-f markdown；給程式讀：--json'
              }
            },
            {
              title: 'ui-ux-pro-max 完整說明（三）：技能給素材，方向由你決定',
              type: 'text',
              paragraphs: [
                '講師實測用 2-5 章的關鍵字「premium consumer electronics brand store apple minimal」查設計系統，得到的是 <strong>App Store Style Landing</strong> 版面（下載按鈕、評分、QR code，適合 App 而不是商城）、<strong>Liquid Glass</strong> 風格（毛玻璃、流動、彩虹折射，技能自己也標註效能與對比有風險），以及<strong>黑金配色</strong>（強調色 <code>#A16207</code>）。這三樣都不是我們要的。',
                '所以 2-5 的升級提示詞把查詢拆成兩步：設計系統只取字體、版面與 UX 檢查清單；配色另外用 <code>--domain color</code> 查 monochrome minimal blue accent，採用「Monochrome + blue accent」（主色 <code>#18181B</code>、強調色 <code>#2563EB</code>）。課前逐字驗證時，執行升級的 subagent 兩次查詢都有做，捨棄了 Liquid Glass 與黑金，結果和講義描述一致，程式裡也沒有漸層與 <code>backdrop-filter</code>。'
              ],
              bullets: [
                '<strong>先訂限制，再查詢</strong>：把「白底、近黑文字、只用一個強調色、不用漸層與毛玻璃」這類限制寫進提示詞，並說明「建議和限制衝突時以限制為準」。沒有限制，AI 很容易照單全收。',
                '<strong>要 AI 列出採用與捨棄的理由</strong>：每一項建議採用或不採用、為什麼，讓你檢查它的判斷，而不是只看到結果。',
                '<strong>用 --persist 固定下來</strong>：方向確定後存成 MASTER.md，之後做「我的訂單」「訂單管理」等頁面都照同一份，畫面才會一致。2-5 章末升級時，購物車抽屜、確認框、訂單頁也要套用同一套設計系統，就是這個目的。',
                '<strong>改版前後都跑 e2e</strong>：改版很容易把 e2e 依賴的 class 或欄位名稱改掉。逐字驗證時發現有幾個 class 原本只以 id 存在，是 subagent 升級時補上同名 class 才全部對齊，所以改版前後都要跑 e2e 確認。',
                '<strong>用截圖驗收</strong>：升級前先存首頁截圖，升級後用 Playwright 截桌機與手機版比較，視覺好不好由你判斷，不是由 AI 說「已優化」就算數。'
              ]
            },
            {
              title: 'macOS 對照（依官方文件整理，未在 Mac 實測）',
              type: 'code',
              paragraphs: [
                'Mac 上的路徑與 Windows 對應：<code>$HOME\\.claude</code> 對應 <code>~/.claude</code>，虛擬環境的 Python 在 <code>bin/python</code>（Windows 是 <code>Scripts\\python</code>），Python 指令是 <code>python3</code>。<strong>以下指令依官方文件整理，講師未在 Mac 實測。</strong>裝好 PowerShell 7 的 Mac 也可以直接用前面的 PowerShell 指令，只要把路徑分隔改成 <code>/</code>、虛擬環境路徑改成 <code>bin/python</code>。'
              ],
              code: {
                language: 'bash',
                title: 'macOS 終端機（zsh）— 本章指令對照',
                content: '# 依官方文件整理，講師未在 Mac 實測\n\n# ── CLAUDE.md 與自訂 subagent ──\nmkdir -p ~/.claude/agents          # 全域 agent 目錄\nmkdir -p .claude/agents            # 專案 agent 目錄（在專案根目錄執行）\ntouch ~/.claude/CLAUDE.md && code ~/.claude/CLAUDE.md\n\n# ── deep-memory ──\nSK=~/.claude/skills\nPY=~/.deep-memory/.venv/bin/python   # macOS 的虛擬環境在 bin/，不是 Scripts/\npython3 -m venv ~/.deep-memory/.venv\n$PY -m pip install -r $SK/chroma-hybrid-search/requirements.txt\n$PY $SK/deep-memory/scripts/seed.py\n$PY $SK/chroma-hybrid-search/scripts/update_db.py\n$PY $SK/chroma-hybrid-search/scripts/search.py --query "Flyway 沒有建表" --limit 3 --min-score 0.35\n$PY $SK/memory-backup/scripts/backup.py\n\n# ── ui-ux-pro-max ──\nUX=~/.claude/plugins/marketplaces/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/scripts/search.py\npython3 $UX "ecommerce electronics store minimal" --design-system -p "My Shop"\npython3 $UX "monochrome minimal blue accent" --domain color'
              }
            },
            {
              title: '實作練習：五個課後任務',
              type: 'text',
              paragraphs: [
                '每個任務都對應本章一個段落，做完勾選下方「本章學習進度」。驗收方式寫在每點最後，照著檢查才算完成。'
              ],
              bullets: [
                '<strong>任務 1：寫自己的全域 CLAUDE.md</strong>：從完整版範本刪改出一份 <code>~/.claude/CLAUDE.md</code>，刪掉你用不到的段落。驗收：開一個新對話問「你現在要遵守哪些規則？任務分級怎麼分？」，答案和你寫的一致。',
                '<strong>任務 2：建一個唯讀的 subagent</strong>：照範例在課程專案建立 <code>.claude/agents/spring-reviewer.md</code>，請它審查 1-9 章的 CartService。驗收：回報照四個等級分類，<code>git status</code> 顯示沒有任何檔案被修改。',
                '<strong>任務 3：寫一份派工簡報</strong>：用「目標、已排除、範圍、驗收」四段格式，請 Explore 找出專案所有管理員 API 的授權方式。驗收：回報有 路徑:行號，而且你隨機挑兩個打開檔案確認正確。',
                '<strong>任務 4：試用 advisor 與權限規則</strong>：設定 <code>/advisor</code>，做一個 T3 任務（例如替訂單加一個篩選條件），觀察 Advising 行並按 <kbd>Ctrl+O</kbd> 看建議；再在專案 <code>.claude/settings.json</code> 加一條 <code>Edit</code> 允許規則。驗收：能說出 advisor 在哪個時間點被呼叫、建議內容是什麼。',
                '<strong>任務 5：deep-memory 或 ui-ux-pro-max 二選一</strong>：deep-memory 跑一次 <code>refine_experience.py --dry-run</code> 並看懂計畫；或 ui-ux-pro-max 用 <code>--design-system --persist</code> 產生自己專案的 MASTER.md，再用 <code>--domain color</code> 換一組配色。驗收：寫下三條「採用」與兩條「捨棄」的理由。'
              ]
            },
            {
              title: 'AI 開發建議',
              type: 'text',
              callout: {
                type: 'info',
                title: '用 Claude Code 做這一章時',
                body: '標 ⚠ 的是 AI 在這一章常犯的錯、要自己檢查的地方；其餘是提示詞怎麼下、怎麼驗證的建議。'
              },
              bullets: [
                '<strong>規則寫少而具體</strong>：AI 違反規則時，先檢查規則是不是寫得太模糊或互相矛盾，再補一句具體的。官方建議每份 CLAUDE.md 在 200 行內，規則越多越容易被忽略。',
                '<strong>⚠ 派工簡報要隔離資訊</strong>：課前驗證時，subagent 讀到專案根目錄的驗證報告，就刻意改寫測試避開報告記錄的問題。簡報寫明不准讀哪些檔，參考答案與報告移出專案目錄。',
                '<strong>⚠ subagent 說完成也要驗收</strong>：它出錯時的語氣和成功時一樣肯定。課前驗證時有 subagent 違反規定改用 heredoc 改檔，是主對話檢查時才發現。主對話要自己看一次測試輸出或截圖。',
                '<strong>advisor 用在決策點</strong>：動手寫程式前、同一個錯誤修兩次還沒過、要換做法前、回報完成前。每次呼叫都會重讀整段對話且不吃快取，查詢與單檔小改不要叫它。',
                '<strong>⚠ 技能給的是素材，不是答案</strong>：deep-memory 問要不要寫熱庫時，只確認真正值得重用的；ui-ux-pro-max 推薦 Liquid Glass、黑金配色這類和你的限制衝突的建議時，以限制為準，並請 AI 寫出取捨理由。'
              ]
            }
          ]
        }
      ]
    }
  ],
  appendix: {
    terminology: [
      '版本描述統一使用 Spring AI 2.0.2',
      '工具呼叫作為主詞，首次出現可補充 Tool Calling / Function Calling',
      'pgvector 指 PostgreSQL 擴充套件，VectorStore 指 Spring AI 的抽象層'
    ],
    faq: [
      {
        q: '教學網站與原本聊天 Demo 是否可以並存？',
        a: '可以。教學站放在獨立目錄中，聊天 Demo 仍由 Spring Boot 的 `http://localhost:8080/` 提供。'
      },
      {
        q: '為什麼網站採單頁 SPA，而不是前端框架？',
        a: '此專案重點在內容導覽與教學展示，使用單一 HTML 與資料檔即可降低維護成本並保留長期可讀性。'
      },
      {
        q: '圖片放在哪裡比較安全？',
        a: '目前都集中在 `teaching-site/assets/teaching-site`，教學站可獨立預覽與部署。'
      }
    ],
    verification: [
      '先執行 `docker compose up -d` 啟動 PostgreSQL / pgvector',
      '載入 `.env` 中的 API Key 後執行 `mvn spring-boot:run`',
      '瀏覽 <a href="http://localhost:8080" target="_blank"><code>http://localhost:8080</code></a> 驗證聊天 Demo，再回到教學網站對照章節內容'
    ]
  }
};
