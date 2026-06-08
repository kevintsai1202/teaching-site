window.COURSE = {
  meta: {
    title: 'Spring Boot 4 與 Spring AI 2.0 兩天實戰課程',
    subtitle: '從後端分層、資料庫遷移，到智慧客服、工具呼叫與 RAG，逐步完成可驗證的企業級教學專案。',
    audience: '具備 Java 基礎，想建立 Spring Boot 與 AI 應用整合能力的開發者',
    totalHours: '2 天 × 6 小時',
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
      'Groq API Key 或其他相容模型金鑰'
    ],
    outcomes: [
      '建立 Spring Boot 三層式 REST API 與資料持久化流程',
      '使用 Docker、PostgreSQL、pgvector 與 Flyway 管理資料庫',
      '透過 Spring AI 建立串流對話、工具呼叫與 RAG 問答能力',
      '完成可展示、可驗證、可持續擴充的智慧商城客服系統'
    ],
    techStack: [
      'Spring Boot 4.0.0',
      'Spring AI 2.0.0-M8',
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
          diagramImage: 'assets/teaching-site/11-diagram-dev-env-workflow.png',
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
                '除了安裝 VS Code 本體之外，這門課至少需要把 Java 與 Spring 相關擴充套件裝齊。Lombok 支援在新版 Java 擴充套件中已內建，因此不應再把某個獨立 Lombok 外掛寫成必要安裝。'
              ],
              bullets: [
                'Extension Pack for Java：提供 Java 語言支援、除錯、測試與 Maven 專案能力',
                'Spring Boot Extension Pack：提供 Spring Boot Tools、Spring Initializr 與設定檔自動補全',
                '若專案使用 Lombok，請確認 Java 語言伺服器已啟用內建 Lombok 支援，避免 `@Data`、`@NoArgsConstructor` 等註解被誤判'
              ],
              code: {
                language: 'text',
                title: '建議安裝的 VS Code 外掛',
                content: '1. Extension Pack for Java\n2. Spring Boot Extension Pack\n3. 確認 Java 擴充套件已啟用 Lombok 內建支援（不另外要求獨立外掛）'
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
                '或直接前往 start.spring.io 在瀏覽器中設定後下載',
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
          diagramImage: 'assets/teaching-site/12-diagram-rest-architecture.png',
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
                content: '【建立專案】\n我有一個 Spring Boot 專案，只有 spring-boot-starter-web 依賴。\n請幫我建立一個簡單的商品 REST API（資料存在記憶體，不用資料庫）：\n- GET /api/products → 回傳全部商品\n- GET /api/products/{id} → 找不到回傳 404\n- POST /api/products → 新增商品，回傳 201\n請加上中文函式級別註解。\n\n【驗證 API】\n專案啟動後（port 8080），請幫我用 PowerShell Invoke-RestMethod 測試上面三個端點是否正常回應。\n\n【排查錯誤】\n執行 mvn spring-boot:run 出現以下錯誤：\n[貼上錯誤訊息]\n請幫我找出原因並修正。'
              }
            },
            {
              title: 'Lombok：省去樣板程式碼',
              type: 'code',
              paragraphs: [
                'Lombok 是 Java 的編譯期程式碼產生器。它透過註解，在編譯時自動為你加上 getter、setter、建構子、`toString`、`equals` 等方法，讓類別定義只保留欄位本身，大幅減少重複樣板。',
                '在 Spring Boot 專案中，只要 `pom.xml` 引入 Lombok 依賴，VS Code 的 Java 擴充套件就會自動識別，不需要額外外掛。'
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
          diagramImage: 'assets/teaching-site/13-diagram-flyway-migration.png',
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
            { id: 'd1-u3-t3', text: '用 AI Agent 設定 application.yml，執行 mvn spring-boot:run 確認 Flyway 遷移成功' }
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
                'Docker Desktop 是在 Windows 上執行 Docker 容器的必要工具，安裝後只需一行 `docker-compose up -d` 就能啟動整個 PostgreSQL 資料庫環境，不需要手動安裝資料庫。',
                '請前往官方網站下載並安裝：https://www.docker.com/products/docker-desktop'
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
                content: 'docker-compose up -d'
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
                content: 'PS D:\\GitHub\\learn-spring> docker-compose up -d\n[+] Running 1/1\n ✔ Container learn-spring-postgres-1  Started\n\nPS D:\\GitHub\\learn-spring> docker ps\nCONTAINER ID   IMAGE                    STATUS          PORTS                    NAMES\nabc123def456   pgvector/pgvector:pg18   Up 12 seconds   0.0.0.0:5432->5432/tcp   learn-spring-postgres-1'
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
                content: '【提示詞 1 — 請 AI Agent 建立並啟動】\n請在我的 Spring Boot 專案根目錄建立 docker-compose.yml，需求如下：\n- 使用 pgvector/pgvector:pg18 映像（PostgreSQL 18 + pgvector 向量擴充）\n- 資料庫名稱：learn_spring\n- 使用者：postgres，密碼：password\n- 本機 5432 埠對應容器 5432 埠\n- 使用具名卷（named volume）讓資料持久化，容器重建後資料不遺失\n- 每個設定項目加上中文註解\n\n建立完成後請幫我執行 docker-compose up -d，\n再執行 docker ps，確認容器狀態為 Up。\n\n【提示詞 2 — 排查容器啟動失敗】\n我執行 docker-compose up -d 後容器狀態不是 Up，\ndocker logs 顯示：\n[貼上錯誤訊息]\n請幫我找出原因並修正。'
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
                content: 'version: \'3.8\'                     # Docker Compose 檔案格式版本\n\nservices:                          # 定義此 Compose 專案要執行的容器服務\n  postgres:                        # 資料庫服務名稱 (自訂)\n    image: pgvector/pgvector:pg18  # 使用包含向量擴充套件的官方 PostgreSQL 18 映像檔\n    container_name: spring-postgres # 指定容器運作時的名稱，方便透過 CLI 進行管理\n    ports:\n      - "5432:5432"                # 將主機的 5432 連接埠映射到容器的 5432 連接埠\n    environment:                   # 設定容器內部的環境變數\n      POSTGRES_DB: learn_spring    # 容器啟動時自動建立的資料庫名稱\n      POSTGRES_USER: postgres      # 資料庫超級使用者（Administrator）的帳號\n      POSTGRES_PASSWORD: password  # 資料庫超級使用者帳號對應的密碼\n    volumes:                       # 掛載資料卷，將容器內資料與本機目錄連結\n      - postgres_data:/var/lib/postgresql # 將資料持久化儲存於具名卷，防止容器重建後資料丟失\n    restart: always                # 容器重啟策略：當容器崩潰或 Docker 引擎重啟時，會自動重啟此服務\n\nvolumes:                           # 宣告全域的具名資料卷\n  postgres_data:                   # 定義名為 postgres_data 的具名卷，供 postgres 服務掛載使用'
              },
              bullets: [
                'version: \'3.8\' — 指定 Docker Compose 檔案格式版本，確保與 Docker Engine 的相容性。',
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
                content: '【提示詞 1 — 請 AI Agent 設定資料庫連線】\n請修改我的 Spring Boot 專案的 src/main/resources/application.yml，\n加入以下設定（若已存在請直接修改，不要重複）：\n1. datasource：連線到 localhost:5432/learn_spring，帳號 postgres，密碼 password\n2. flyway：enabled: true，baseline-on-migrate: true，腳本位置 classpath:db/migration\n3. jpa：ddl-auto: validate（由 Flyway 管理 Schema，JPA 只驗證結構）\n每個設定項目請加上中文註解說明用途。\n\n【提示詞 2 — 驗證連線與 Flyway 遷移】\n設定完成後請幫我執行 mvn spring-boot:run，\n確認 log 中出現 Successfully applied N migration(s) 的訊息。\n若出現連線錯誤或 Flyway 失敗，請幫我找出原因並修正。'
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
                content: 'spring:\n  datasource:\n    url: jdbc:postgresql://localhost:5432/learn_spring\n    username: postgres\n    password: password\n    driver-class-name: org.postgresql.Driver\n  flyway:\n    enabled: true\n    baseline-on-migrate: true  # 資料庫非空時以現況為遷移起點\n  jpa:\n    hibernate:\n      ddl-auto: validate  # 由 Flyway 管理 Schema，JPA 只做驗證'
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
          diagramImage: 'assets/teaching-site/14-diagram-jpa-mapping.png',
          diagramCaption: 'Java Entity 對應資料表欄位，Repository 則封裝查詢與持久化操作。',
          goals: [
            '理解 ORM 與 JPA 在專案中的角色',
            '掌握常見 Entity 註解用途',
            '能用 Query Method 表達常見查詢需求'
          ],
          tasks: [
            { id: 'd1-u4-t1', text: '用 AI Agent 為 1-2 專案加入 JPA 依賴並更新 Product.java 為 Entity' },
            { id: 'd1-u4-t2', text: '用 AI Agent 建立 ProductRepository 並更新 ProductService 改用資料庫' },
            { id: 'd1-u4-t3', text: '執行 mvn spring-boot:run，確認 API 仍正常運作且資料已寫入資料庫' }
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
                'VS Code 中若發現 Lombok 的 `@Data` 等註解出現紅線，請確認 Java 擴充套件已啟用內建 Lombok 支援（不需要另裝獨立外掛）。'
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
                '1-2 章節已建立一個用 Java List 存放資料的 Spring MVC 專案。本章的目標是讓 AI Agent 幫你把資料來源從記憶體 List 換成真正的 PostgreSQL 資料庫，Controller 完全不需要修改，只改 Product 類別與 ProductService。'
              ],
              bullets: [
                'pom.xml 加入 JPA 與 PostgreSQL 依賴',
                'Product.java 加上 `@Entity`、`@Table`、`@Id` 等 JPA 註解',
                'ProductService 的 List 換成 ProductRepository，讓資料寫入資料庫'
              ],
              code: {
                language: 'text',
                title: 'AI Agent 提示詞 — 為 Spring MVC 專案加入 JPA',
                content: '【步驟一：加入依賴】\n我在 1-2 建立了一個 Spring Boot 專案（只有 spring-boot-starter-web），\n請幫我在 pom.xml 加入以下依賴：\n- spring-boot-starter-data-jpa\n- postgresql\n- lombok（若尚未加入）\n\n【步驟二：升級 Product 類別】\n我目前的 Product.java 只是普通 POJO，\n請幫我加上 JPA 註解（@Entity、@Table、@Id、@GeneratedValue、@Column），\n並改用 Lombok 的 @Data、@NoArgsConstructor、@AllArgsConstructor 取代手寫 getter/setter。\n\n【步驟三：建立 Repository 並更新 Service】\n請幫我：\n1. 建立 ProductRepository.java，繼承 JpaRepository<Product, Long>\n2. 更新 ProductService.java，把原本的 List<Product> 換成注入 ProductRepository，\n   讓 getAll、findById、save 方法改用資料庫操作\n\n完成後請執行 mvn spring-boot:run，確認應用程式能啟動並成功連線資料庫。'
              }
            },
            {
              title: '這一章為什麼重要',
              type: 'text',
              paragraphs: [
                'Day 2 的工具呼叫其實要建立在穩定的 Service / Repository 流程上。也就是說，AI 不會直接查資料庫，而是會重用你在這一章建立好的後端查詢能力。',
                '因此 JPA 不是孤立的資料庫章節，而是整個 AI 應用可驗證性的基礎。'
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
          diagramImage: '',
          diagramCaption: '',
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
                '`http://localhost:8080/swagger-ui.html` → 互動式 Swagger UI（可直接測試）',
                '`http://localhost:8080/v3/api-docs` → OpenAPI JSON 規格（機器讀取）',
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
          diagramImage: '',
          diagramCaption: '',
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
            }
          ]
        },
        {
          id: 'd1-u7',
          chapter: '1-7',
          title: '結構化 Log 與動態調整',
          summary: '善用 @Slf4j 建立有語意的結構化日誌，透過 application.yml 設定 Log 層級，再用 Spring Actuator 在不重啟應用的情況下動態調整。',
          source: 'docs/Day1-7-Logging.md',
          heroImage: 'assets/teaching-site/07-ch07-logging.png',
          diagramImage: '',
          diagramCaption: '',
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
            }
          ]
        },
        {
          id: 'd1-u8',
          chapter: '1-8',
          title: 'AOP 橫切關注點（Spring 核心機制）',
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
            }
          ]
        }
      ]
    },
    {
      id: 'day2',
      label: 'Day 2',
      title: 'Spring AI 與企業級 RAG 應用',
      lead: '在穩定後端基礎上接入對話模型、工具呼叫與知識庫檢索，完成可驗證的 AI 應用流程。',
      units: [
        {
          id: 'd2-u1',
          chapter: '2-1',
          title: 'Spring AI 與 ChatClient 基礎',
          summary: '建立 Spring AI 對話入口，理解串流輸出、對話記憶與多 session 管理。',
          source: 'docs/Day2-1-SpringAI-ChatClient.md',
          heroImage: 'assets/teaching-site/05-ch05-springai-chatclient.png',
          diagramImage: 'assets/teaching-site/15-diagram-chatclient-memory.png',
          diagramCaption: 'ChatClient 負責對話調度，記憶機制負責將上下文留在正確的 session 中。',
          goals: [
            '掌握 ChatClient 在 Spring AI 的使用位置',
            '理解 SSE 串流輸出的呈現方式',
            '知道如何以 sessionId 隔離不同使用者對話'
          ],
          tasks: [
            { id: 'd2-u1-t1', text: '確認模型端點與金鑰配置' },
            { id: 'd2-u1-t2', text: '完成 ChatClient 串流流程閱讀' },
            { id: 'd2-u1-t3', text: '整理 sessionId 設計原則' }
          ],
          sections: [
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
              ]
            },
            {
              title: '對話記憶設計',
              type: 'text',
              bullets: [
                '不同使用者應對應不同 `sessionId`',
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
              title: 'Groq API 端點設定（application.yml）',
              type: 'code',
              paragraphs: [
                'Groq 提供與 OpenAI 相容的 API 介面，因此可以使用 Spring AI 的 OpenAI Starter，只需把 Chat 端點的 base-url 覆寫為 Groq 即可。'
              ],
              bullets: [
                'Chat：前往 console.groq.com 建立免費 API Key，設定 `$env:GROQ_API_KEY="gsk_xxx..."`',
                'Embedding：前往 voyageai.com 建立 API Key（每月 50M tokens 免費），設定 `$env:VOYAGE_API_KEY="pa-xxx..."`',
                'Voyage AI 提供 OpenAI 相容介面，直接設定在 openai.embedding 區塊即可，不需要額外的 Starter 依賴'
              ],
              code: {
                language: 'yaml',
                title: 'application.yml — Spring AI 模型設定',
                content: 'spring:\n  ai:\n    # OpenAI Starter 同時處理 Chat（Groq）與 Embedding（Voyage AI）\n    openai:\n      chat:\n        base-url: https://api.groq.com/openai/v1   # 覆寫為 Groq 端點\n        api-key: ${GROQ_API_KEY:your_groq_api_key}\n        options:\n          model: llama-3.3-70b-versatile  # Groq 免費高速模型\n          temperature: 0.7\n      # Voyage AI 提供 OpenAI 相容介面，直接設定 embedding 區塊\n      embedding:\n        base-url: https://api.voyageai.com/v1\n        api-key: ${VOYAGE_API_KEY:your_voyage_api_key}\n        options:\n          model: voyage-3-lite  # 每月 50M tokens 免費，512 維度'
              }
            },
            {
              title: 'MessageChatMemoryAdvisor 對話記憶',
              type: 'code',
              paragraphs: [
                '大模型本身是無狀態的，不記得上一句說什麼。`MessageChatMemoryAdvisor` 會在發送請求前自動帶入歷史訊息，並在回覆後存入記憶。`sessionId` 讓不同使用者的對話記憶互相隔離。'
              ],
              code: {
                language: 'java',
                title: 'SSE 串流 + 對話記憶',
                content: 'private final InMemoryChatMemory chatMemory = new InMemoryChatMemory();\n\n@GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)\npublic Flux<String> streamChat(\n        @RequestParam String message,\n        @RequestParam(defaultValue = "default") String sessionId) {\n    return this.chatClient.prompt()\n            .user(message)\n            // 載入對話記憶 Advisor\n            .advisors(MessageChatMemoryAdvisor.builder(this.chatMemory).build())\n            // 傳入會話 ID，不同 sessionId 的記憶彼此隔離\n            .advisors(spec -> spec.param("chat_memory_conversation_id", sessionId))\n            .stream()\n            .content();  // 回傳 Flux<String> 供 SSE 串流'
              }
            },
            {
              title: 'AI 提示詞練習',
              type: 'text',
              paragraphs: [
                '試著向 AI 助手詢問以下問題，加深對 ChatClient 設計的理解：'
              ],
              bullets: [
                '「在 Spring AI 2.0 中，InMemoryChatMemory 與 JDBC ChatMemory 有何不同？如果要在重啟服務後保留對話歷史，應該如何重構？」',
                '「ChatClient.Builder 還能設定哪些 default 屬性？例如 defaultAdvisors、defaultOptions。」'
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
              title: 'Spring Boot 啟動驗證範例',
              type: 'code',
              paragraphs: [
                '進入 Day 2 前，應用必須已經能穩定啟動。這裡的驗證重點不是只看到 Tomcat 起來，而是 Flyway 已成功套用，Spring Boot 也完成啟動。'
              ],
              bullets: [
                '最低需求：資料庫容器已先啟動',
                '最低需求：`.env` 或環境變數中的 API Key 已載入',
                '最低需求：JDK 21 與 Maven 3.9+ 已完成驗證'
              ],
              code: {
                language: 'text',
                title: '可接受的啟動日誌範例',
                content: 'PS D:\\GitHub\\learn-spring> mvn spring-boot:run\n...\nFlyway Community Edition 10.x by Redgate\nSuccessfully validated 2 migrations\nCurrent version of schema \"public\": 2\nTomcat started on port 8080 (http) with context path \"/\"\nStarted LearnSpringApplication in 8.532 seconds'
              }
            },
            {
              title: '啟動日誌判讀方式',
              type: 'text',
              bullets: [
                '必須同時看到 `Successfully validated` 或 `Successfully applied` 類似 Flyway 訊息',
                '必須看到 `Tomcat started on port 8080` 或等效埠號資訊',
                '必須看到 `Started LearnSpringApplication` 才算完整啟動',
                '若停在 DataSource、Flyway 或 API Key 相關錯誤，先回頭確認環境與設定，而不是直接進行 Day 2 測試'
              ]
            },
            {
              title: '常見錯誤與排查',
              type: 'warning',
              bullets: [
                '啟動時卡在 API Key 相關錯誤，先確認 `.env` 是否真的被載入到目前 PowerShell session',
                '若 Flyway 報資料庫連線失敗，先確認資料庫容器是否還在 `Up` 狀態',
                '若 8080 埠被占用，可先關閉既有應用或調整 Spring Boot 埠號',
                '若只看到編譯錯誤而不是 Spring 日誌，先回頭處理 Java 或 Maven 環境'
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
          diagramImage: 'assets/teaching-site/16-diagram-tool-calling-dispatch.png',
          diagramCaption: 'AI 將需求派送到對應工具，工具再向 Service / Repository 取得即時資料。',
          goals: [
            '理解 Tool Calling 與 Function Calling 的實際用途',
            '分辨 `@Tool` 與 `ToolCallback` 的使用場景',
            '掌握 AI 查詢資料庫的安全責任邊界'
          ],
          tasks: [
            { id: 'd2-u2-t1', text: '辨識可抽成工具的方法' },
            { id: 'd2-u2-t2', text: '整理 `@Tool` 與 `ToolCallback` 差異' },
            { id: 'd2-u2-t3', text: '記錄 1 個 AI 查商品即時資料情境' }
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
              title: '工具呼叫驗證範例',
              type: 'code',
              paragraphs: [
                '這一章的成功標準，不是模型有回話而已，而是模型確實在回答過程中呼叫了工具，並帶回即時資料。'
              ],
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
          diagramImage: 'assets/teaching-site/17-diagram-rag-retrieval-flow.png',
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
              title: 'RAG 上傳與問答驗證範例',
              type: 'code',
              paragraphs: [
                'RAG 驗證至少要分成兩段：先確認文件成功上傳並完成向量化，再確認查詢結果是根據文件內容回答，而不是一般常識。'
              ],
              code: {
                language: 'text',
                title: '可接受的驗證情境',
                content: '步驟 1：上傳 faq.txt\n內容：Antigravity 商城退貨政策：自購買日起 14 天內，憑發票可無條件全額退款。\n\n步驟 2：提問\n商城退貨政策是什麼？\n\n預期回答特徵：\n- 提到 14 天內\n- 提到憑發票\n- 回答內容明顯來自上傳文件，而不是模型自由發揮'
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
            }
          ]
        },
        {
          id: 'd2-u4',
          chapter: '2-4',
          title: 'MCP 與課程總結',
          summary: '整合前兩天成果，說明 MCP 在 AI 系統中的標準化接口角色，並回到完整系統驗證。',
          source: 'docs/Day2-4-WrapUp-MCP.md',
          heroImage: 'assets/teaching-site/08-ch08-mcp-wrapup.png',
          diagramImage: 'assets/teaching-site/18-diagram-mcp-hub.png',
          diagramCaption: '前端、後端、資料庫、工具與知識庫透過一致接口整合為完整系統。',
          goals: [
            '能完成專案啟動、驗證與展示流程',
            '理解 MCP 對跨工具 AI 生態的價值',
            '建立後續延伸學習與擴充方向'
          ],
          tasks: [
            { id: 'd2-u4-t1', text: '啟動資料庫與應用服務' },
            { id: 'd2-u4-t2', text: '完成客服模式與 RAG 模式驗證' },
            { id: 'd2-u4-t3', text: '整理 MCP 與後續延伸方向' }
          ],
          sections: [
            {
              title: '完整系統驗證流程',
              type: 'text',
              paragraphs: [
                '最後一章不是收尾而已，而是把前面所有章節重新串起來驗證。資料庫要能起、Flyway 要能跑、聊天模式要能查商品、RAG 模式要能回答文件問題。',
                '如果這裡驗證不過，通常表示前面某一層責任邊界還沒有真正理解。'
              ],
              image: 'assets/teaching-site/18-diagram-mcp-hub.png',
              imageAlt: 'MCP 與系統整合架構圖',
              imageCaption: '這一章的任務，是把前面所有零件組成完整系統。'
            },
            {
              title: '環境啟動指令',
              type: 'code',
              paragraphs: [
                '這裡是整套課程的總驗證，因此不只要給啟動命令，也要讓學員知道最低前置條件是否已滿足。'
              ],
              bullets: [
                '最低需求：資料庫容器已啟動',
                '最低需求：`.env` 中已提供可用 API Key',
                '最低需求：JDK 21 與 Maven 3.9+ 已完成版本驗證'
              ],
              code: {
                language: 'powershell',
                title: '啟動資料庫與應用',
                content: 'docker-compose up -d\nGet-Content .env | ForEach-Object { $line = $_.Trim(); if ($line -and !$line.StartsWith(\"#\") -and $line.Contains(\"=\")) { $key, $value = $line -split \"=\", 2; Set-Item -Path \"env:$($key.Trim())\" -Value $value.Trim() } }\nmvn spring-boot:run'
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
                '完成以上四項，才算這套課程真正落地成一個可驗證的智慧商城客服系統'
              ]
            },
            {
              title: '常見錯誤與排查',
              type: 'warning',
              bullets: [
                '若聊天模式正常但 RAG 模式失敗，優先回頭檢查向量寫入與檢索流程',
                '若資料庫與應用都啟動成功，但 Demo 頁面無法互動，先檢查 API 路徑與瀏覽器 console',
                '若只有部分功能可用，不要直接判定整體完成，必須逐項對照驗證清單',
                '整體驗證要按順序做：資料庫 -> 應用 -> 工具呼叫 -> RAG -> 延伸能力'
              ]
            },
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
              title: 'MCP Server 實作：用 @Tool 定義遠端工具（ProductTools.java）',
              type: 'code',
              paragraphs: [
                '這就是 MCP Server 的核心：原本 Day 2-2 就存在的 `@Tool` Bean，加上 `spring-ai-starter-mcp-server-webmvc` 依賴後，Spring AI 會自動掃描並透過 `/sse` 端點對外發布為 MCP 工具。**程式碼本身完全不需要修改。**'
              ],
              code: {
                language: 'java',
                title: 'ProductTools.java（@Tool Bean 自動成為 MCP 工具）',
                content: 'package com.example.tutorial.ai;\n\nimport com.example.tutorial.model.Product;\nimport com.example.tutorial.service.ProductService;\nimport org.springframework.ai.tool.annotation.Tool;\nimport org.springframework.stereotype.Component;\nimport java.util.List;\n\n/**\n * 加上 spring-ai-starter-mcp-server-webmvc 後，\n * 此 Bean 的 @Tool 方法會自動透過 GET /sse 對外發布\n */\n@Component\npublic class ProductTools {\n\n    private final ProductService productService;\n\n    public ProductTools(ProductService productService) {\n        this.productService = productService;\n    }\n\n    /** 查詢商品列表，query 為關鍵字（可為空值） */\n    @Tool(description = "查詢商品列表。如果使用者詢問有哪些商品或要找特定商品，請呼叫此方法。參數 query 為搜尋關鍵字，可為空值。")\n    public List<Product> getProducts(String query) {\n        if (query == null || query.trim().isEmpty()) {\n            return productService.getAllProducts();\n        }\n        return productService.searchProductsByName(query);\n    }\n\n    /** 根據 ID 查詢單一商品詳細資訊 */\n    @Tool(description = "根據商品 ID 獲取單一商品的詳細資訊，包含價格、描述與庫存。")\n    public Product getProductDetail(Long id) {\n        return productService.getProductById(id).orElse(null);\n    }\n}'
              }
            },
            {
              title: 'MCP Server 依賴與設定（pom.xml + application.yml）',
              type: 'code',
              paragraphs: [
                '主專案加入一個依賴，設定三行 YAML，MCP Server 即就緒。'
              ],
              code: {
                language: 'xml',
                title: 'pom.xml — 加入 MCP Server 依賴',
                content: '<!-- 加入此依賴後，@Tool Bean 自動透過 GET /sse 發布為 MCP 工具 -->\n<dependency>\n    <groupId>org.springframework.ai</groupId>\n    <artifactId>spring-ai-starter-mcp-server-webmvc</artifactId>\n</dependency>'
              }
            },
            {
              title: 'MCP Server application.yml（port 8080）',
              type: 'code',
              code: {
                language: 'yaml',
                title: 'application.yml — 主專案 MCP Server 設定',
                content: 'server:\n  port: 8080   # MCP Client 必須使用不同 port（8081）\n\nspring:\n  ai:\n    mcp:\n      server:\n        name: learn-spring-mcp-server\n        version: 1.0.0\n        type: SYNC    # SYNC 對應 WebMVC 阻塞模型'
              }
            },
            {
              title: 'MCP Client 實作：載入遠端工具並讓 AI 呼叫（McpChatController.java）',
              type: 'code',
              paragraphs: [
                '這是整個 MCP Client 的核心：`SyncMcpToolCallbackProvider`（由 `spring-ai-starter-mcp-client` 自動配置）在啟動時透過 SSE 連線至 MCP Server，取回所有工具定義。將 `getToolCallbacks()` 回傳的陣列傳入 `.tools()`，AI 就能自動選擇並呼叫遠端工具，就像呼叫本地方法一樣。'
              ],
              code: {
                language: 'java',
                title: 'McpChatController.java（mcp-client-demo 專案）',
                content: 'package com.example.mcpclient;\n\nimport org.springframework.ai.chat.client.ChatClient;\nimport org.springframework.ai.mcp.SyncMcpToolCallbackProvider;  // org.springframework.ai.mcp\nimport org.springframework.ai.tool.ToolCallback;\nimport org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping("/api/mcp")\npublic class McpChatController {\n\n    private final ChatClient chatClient;\n    /** 啟動時從遠端 MCP Server（port 8080）自動取得的工具陣列 */\n    private final ToolCallback[] mcpTools;\n\n    /**\n     * SyncMcpToolCallbackProvider 由 spring-ai-starter-mcp-client 自動配置：\n     * 啟動時連線 application.yml 中設定的 MCP Server /sse 端點，\n     * 取回 getProducts、getProductDetail 等所有遠端工具定義\n     */\n    public McpChatController(\n            ChatClient.Builder builder,\n            SyncMcpToolCallbackProvider mcpToolProvider) {\n        this.mcpTools = mcpToolProvider.getToolCallbacks();\n        this.chatClient = builder\n                .defaultSystem("你是智慧商城助手，可透過遠端工具查詢商品資訊。")\n                .build();\n    }\n\n    /**\n     * 使用者問問題 → AI 自動選擇遠端工具 → MCP Server 執行查詢 → AI 組合回答\n     * 範例：GET /api/mcp/chat?message=有哪些商品\n     */\n    @GetMapping("/chat")\n    public String chat(@RequestParam String message) {\n        return this.chatClient.prompt()\n                .user(message)\n                .tools(this.mcpTools)   // 掛載全部遠端工具，AI 自動決定是否呼叫\n                .call()\n                .content();\n    }\n}'
              }
            },
            {
              title: 'MCP Client 依賴與設定（pom.xml + application.yml）',
              type: 'code',
              paragraphs: [
                'MCP Client 是**獨立的 Spring Boot 專案**（`mcp-client-demo/`），使用 port 8081。若與 MCP Server 共用 port，Client 啟動時 Tomcat 無法綁定，立即報錯。'
              ],
              code: {
                language: 'xml',
                title: 'mcp-client-demo/pom.xml — 加入 MCP Client 依賴',
                content: '<!-- SyncMcpToolCallbackProvider 由此依賴自動配置 -->\n<dependency>\n    <groupId>org.springframework.ai</groupId>\n    <artifactId>spring-ai-starter-mcp-client</artifactId>\n</dependency>'
              }
            },
            {
              title: 'MCP Client application.yml（port 8081）',
              type: 'code',
              code: {
                language: 'yaml',
                title: 'mcp-client-demo/application.yml（port 8081）',
                content: 'server:\n  port: 8081   # 與 MCP Server (8080) 不同，否則啟動即衝突\n\nspring:\n  ai:\n    openai:\n      chat:\n        base-url: https://api.groq.com/openai/v1\n        api-key: ${GROQ_API_KEY:your_groq_api_key_here}\n        options:\n          model: llama-3.3-70b-versatile\n    mcp:\n      client:\n        sse:\n          connections:\n            learn-spring:              # 自訂識別名稱\n              url: http://localhost:8080  # 指向 MCP Server'
              }
            },
            {
              title: 'AI 呼叫遠端工具的完整流程',
              type: 'text',
              paragraphs: [
                '以「有哪些商品？」為例，說明從使用者輸入到 AI 回答的跨服務執行路徑：'
              ],
              bullets: [
                '① 使用者呼叫 `GET http://localhost:8081/api/mcp/chat?message=有哪些商品`',
                '② MCP Client（port 8081）的 ChatClient 收到訊息，交由 LLM 判斷意圖',
                '③ AI 判斷需要查商品，透過已建立的 SSE 連線，向 MCP Server（port 8080）發送 getProducts 工具呼叫請求',
                '④ MCP Server 執行 `ProductTools.getProducts("")` → 查詢 PostgreSQL → 回傳商品 JSON',
                '⑤ MCP Client 收到工具執行結果，AI 組合成自然語言回答',
                '⑥ 使用者收到：「目前商城共有 5 項商品：1. 無線耳機 Pro（NT$2,999，庫存 50）...」'
              ]
            },
            {
              title: '雙 Port 啟動順序（終端機 1 → 2）',
              type: 'code',
              paragraphs: [
                '必須先啟動 MCP Server（port 8080），Client（port 8081）啟動時立即透過 SSE 連線 Server 取得工具清單，若 Server 尚未就緒會拋出連線錯誤。'
              ],
              code: {
                language: 'powershell',
                title: '終端機 1：MCP Server　|　終端機 2：MCP Client',
                content: '# ===== 終端機 1：啟動 MCP Server (port 8080) =====\nSet-Location "D:\\GitHub\\learn-spring\\backend"\ndocker-compose up -d\n$env:JAVA_HOME = "D:\\java\\jdk-21"; $env:Path = "D:\\java\\jdk-21\\bin;$env:Path"\n$env:GROQ_API_KEY = "your-groq-key"; $env:VOYAGE_API_KEY = "your-voyage-key"\nmvn spring-boot:run\n# 看到「Started LearnSpringApplication」後，再開終端機 2\n\n# ===== 終端機 2：啟動 MCP Client (port 8081) =====\nSet-Location "D:\\GitHub\\learn-spring\\mcp"\n$env:JAVA_HOME = "D:\\java\\jdk-21"; $env:Path = "D:\\java\\jdk-21\\bin;$env:Path"\n$env:GROQ_API_KEY = "your-groq-key"\nmvn spring-boot:run\n\n# ===== 測試 AI 跨服務工具呼叫 =====\nInvoke-RestMethod -Uri "http://localhost:8081/api/mcp/chat?message=有哪些商品"\n# AI 透過 MCP 呼叫 MCP Server 的 getProducts，回傳即時商品清單'
              }
            },
            {
              title: '延伸方向',
              type: 'text',
              paragraphs: [
                '完成課程後，最自然的下一步是擴充更多即時資料工具，例如會員等級、折扣規則、訂單查詢，或把更多文件來源導入 RAG。',
                '如果要往企業情境走，則可以把工具層與 MCP 能力拆得更清楚，並加入權限、稽核與多資料來源管理。'
              ]
            }
          ]
        },
        {
          id: 'd2-u5',
          chapter: '2-5',
          title: 'React 快速入門與前端優化指引',
          summary: '掌握 Node.js 環境、使用 Vite 建立 React 19 專案、JSX 語法元件結構，並學習如何以 Proxy 串接後端 API 及套用 uiuxpromax 優化前端視覺體驗。',
          source: 'docs/Day2-5-React-Intro.md',
          heroImage: 'assets/teaching-site/05-ch05-springai-chatclient.png',
          diagramImage: '',
          diagramCaption: '',
          goals: [
            '理解 Node.js 與 NPM 相依性套件管理機制',
            '學會使用 Vite 初始化 React 19 專案的指令步驟',
            '掌握 JSX 語法特色與 Functional Component 元件結構',
            '理解為何需要開發代理 (Vite Proxy) 以免除 CORS 限制',
            '掌握 uiuxpromax 視覺優化要點（毛玻璃、漸層Header、微動畫與骨架屏）'
          ],
          tasks: [
            { id: 'd2-u5-t1', text: '安裝 Node.js 並執行 npm 驗證' },
            { id: 'd2-u5-t2', text: '使用 Vite 建立 React 19 專案並以 npm install 安裝' },
            { id: 'd2-u5-t3', text: '配置 vite.config.js 的 server.proxy 代理' },
            { id: 'd2-u5-t4', text: '套用 CSS 動畫實作骨架屏與毛玻璃視覺效果' }
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
                '在前後端分離的架構中，前端 Vite 伺服器運行在 `http://localhost:5173`，而 Spring Boot 後端運行在 `http://localhost:8080`。如果前端直接向後端發送非同步請求 (Fetch / EventSource)，會因為「同源政策 (Same-Origin Policy)」而被瀏覽器阻擋 (CORS 跨網域錯誤)。',
                '為了解決此問題，我們在 `vite.config.js` 中配置 `server.proxy` 代理轉發，將所有以 `/api` 開頭的請求，在開發環境中自動轉發至 `http://localhost:8080`。這樣前端程式碼只需填寫相對路徑即可，且完全免除了後端配置 CORS 的繁瑣設定！'
              ],
              code: {
                language: 'javascript',
                title: 'vite.config.js — 配置 API 代理轉發',
                content: 'import { defineConfig } from \'vite\'\nimport react from \'@vitejs/plugin-react\'\n\nexport default defineConfig({\n  plugins: [react()],\n  server: {\n    port: 5173,\n    proxy: {\n      // 當前端請求 /api/ai/stream 時，Vite 自動代理為 http://localhost:8080/api/ai/stream\n      \'/api\': {\n        target: \'http://localhost:8080\',\n        changeOrigin: true\n      }\n    }\n  }\n})'
              }
            },
            {
              title: 'uiuxpromax 前端視覺優化指引',
              type: 'text',
              paragraphs: [
                '一個優秀的 Web 應用不僅要能跑，更要能 WOW 使用者。在智慧客服專案中，我們採用 uiuxpromax 的設計哲學，利用 Vanilla CSS 優化整體視覺，徹底告別單調的 MVP 樣式：'
              ],
              bullets: [
                '🎨 毛玻璃效果 (Glassmorphism)：卡片使用 `backdrop-filter: blur(14px)` 搭配半透明邊框，營造精緻浮空感。',
                '🌈 漸層極光配色：Header 使用 linear-gradient(135deg, indigo, purple) 漸層配色，搭配狀態指示燈 (Pulse LED) 動態閃爍。',
                '⚡ 微懸停動畫 (Micro-interactions)：滑鼠懸停於商品、訂單卡片時，加入 `transform: translateY(-4px) scale(1.01)` 與 `transition` 讓卡片活起來。',
                '⏳ 骨架屏載入動畫 (Skeleton Screen)：當 AI 正在思考或呼叫 Tool 時，在對話框中顯示灰白色的骨架屏閃爍 (shimmer keyframe)，極大降地等待期間的無聊感。'
              ]
            }
          ]
        },
        {
          id: 'd2-u6',
          chapter: '2-6',
          title: 'React 聊天室與 SSE 串流式對話實戰',
          summary: '使用 React 串接後端 Server-Sent Events (SSE) 串流 API，利用原生 EventSource 與狀態管理實現即時打字機對話效果。',
          source: 'docs/Day2-5-React-SSE.md',
          heroImage: 'assets/teaching-site/05-ch05-api-docs.png',
          diagramImage: '',
          diagramCaption: '',
          goals: [
            '理解 SSE 與 WebSockets 的區別與選型',
            '使用 React 的 EventSource 實作後端 API 串接',
            '利用 React 狀態 (State) 實作流式打字渲染效果',
            '掌握流式對話中對話 Session 的前端管理與清除'
          ],
          tasks: [
            { id: 'd2-u5-t1', text: '理解 SSE (Server-Sent Events) 單向串流原理' },
            { id: 'd2-u5-t2', text: '使用 React 實作 EventSource 監聽與狀態更新' },
            { id: 'd2-u5-t3', text: '完成前端對話 Session 清除與重建邏輯' }
          ],
          sections: [
            {
              title: '為什麼選擇 SSE (Server-Sent Events)',
              type: 'text',
              paragraphs: [
                '在 AI 聊天應用中，模型的回應是單向且持續產生的，後端需要持續把資料推給前端，而前端不需要在過程中頻繁向後端傳送資料。',
                '相較於 WebSockets 的雙向複雜協定，SSE 是基於標準 HTTP 的單向推播協定，開發簡單、開銷小，且天生支援斷線重連。Spring AI 的 `.stream()` 預設就是輸出標準的 `text/event-stream` 格式，與 SSE 完美搭配。'
              ],
              bullets: [
                'WebSockets：雙向通道，適用於多人遊戲、協作工具，但協定較為繁重。',
                'SSE (Server-Sent Events)：單向推送，基於 HTTP，最適合大模型流式生成 (Streaming)。',
                'React 連線方式：使用瀏覽器內建的 `EventSource` 物件即可建立連線，不需要引入第三方 WebSocket 庫。'
              ]
            },
            {
              title: 'React EventSource 串接核心代碼',
              type: 'code',
              paragraphs: [
                '這是在 React 中透過 `useEffect` 監聽後端 SSE 流的典型寫法。每次後端傳來新的字元片斷，我們就將其追加到當前最新的一筆訊息中。'
              ],
              code: {
                language: 'javascript',
                title: 'ChatRoom.jsx — 串流接收與狀態更新',
                content: 'const handleSend = (text) => {\n  // 1. 新增使用者的發問訊息\n  const userMsg = { id: Date.now(), sender: "user", text };\n  const assistantMsg = { id: Date.now() + 1, sender: "assistant", text: "" };\n  setMessages(prev => [...prev, userMsg, assistantMsg]);\n\n  // 2. 建立 SSE 連線\n  const eventSource = new EventSource(\n    `/api/ai/stream?message=${encodeURIComponent(text)}&sessionId=${sessionId}`\n  );\n\n  // 3. 監聽後端推播事件\n  eventSource.onmessage = (event) => {\n    // [注意] Spring AI 預設可能回傳字元片段，需要持續追加到最後一筆 assistant 訊息中\n    setMessages(prev => {\n      const updated = [...prev];\n      const lastIndex = updated.length - 1;\n      updated[lastIndex] = {\n        ...updated[lastIndex],\n        text: updated[lastIndex].text + event.data // 追加新收到的字元\n      };\n      return updated;\n    });\n  };\n\n  eventSource.onerror = (err) => {\n    console.error("SSE 串流連線中斷或結束：", err);\n    eventSource.close(); // 發生錯誤或傳輸完畢時關閉連線\n  };\n};'
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
                '以下是智慧客服聊天室的 React 元件完整實作。包含 isThinking（AI 正在搜尋資料庫或呼叫工具中）狀態提示、isGenerating（AI 正在輸出）狀態鎖定、自動滾動到底部，以及 quickPrompts 快捷對話指令按鈕。'
              ],
              code: {
                language: 'jsx',
                title: 'ChatRoom.jsx',
                content: 'import React, { useState, useEffect, useRef } from \'react\';\nimport \'./ChatRoom.css\';\n\n/**\n * 智慧客服聊天室元件\n * 實作與 Spring Boot 後端的 SSE (Server-Sent Events) 串流對話，\n * 支援 AI 工具呼叫狀態提示、快捷對話指令以及自動滾動。\n */\nexport default function ChatRoom() {\n  // 對話歷史紀錄\n  const [messages, setMessages] = useState([]);\n  // 輸入框中的文字內容\n  const [input, setInput] = useState(\'\');\n  // AI 正在思考或呼叫工具的狀態（決定是否顯示載入中提示）\n  const [isThinking, setIsThinking] = useState(false);\n  // AI 正在輸出字元片段的狀態（決定是否鎖定輸入與發送按鈕）\n  const [isGenerating, setIsGenerating] = useState(false);\n  // 對話 Session 識別碼，確保不同使用者與會話的歷史記憶互相隔離\n  const [sessionId] = useState(() => `session_${Math.random().toString(36).substr(2, 9)}`);\n  // 用於控制滾動到底部的 DOM 參照\n  const messagesEndRef = useRef(null);\n\n  // 定義快捷對話指令，方便學員一鍵測試工具呼叫與 RAG 推薦\n  const quickPrompts = [\n    { label: "🔍 詢問所有商品", text: "有哪些商品？" },\n    { label: "📦 查詢 alice 的訂單", text: "我是 alice，我買了哪些東西？" },\n    { label: "☀️ 台北即時天氣", text: "台北今天天氣如何？" },\n    { label: "✨ 長期記憶語意推薦", text: "根據我之前說過的需求，幫我推薦商城裡的商品" }\n  ];\n\n  // 監聽對話紀錄 messages 變化，自動平滑滾動到底部\n  useEffect(() => {\n    messagesEndRef.current?.scrollIntoView({ behavior: \'smooth\' });\n  }, [messages]);\n\n  /**\n   * 處理點擊發送按鈕或在輸入框按下 Enter 鍵的事件\n   */\n  const handleSendClick = () => {\n    if (!input.trim() || isGenerating || isThinking) return;\n    handleSend(input);\n    setInput(\'\');\n  };\n\n  /**\n   * 建立 SSE 連線並發送對話訊息，監聽後端串流推播\n   * @param {string} text - 使用者發送的 Prompt 內容\n   */\n  const handleSend = (text) => {\n    // 1. 新增使用者的提問，以及一個初始空白的 AI 回應物件（作為打字機效果容器）\n    const userMsg = { id: Date.now(), sender: "user", text };\n    const assistantMsg = { id: Date.now() + 1, sender: "assistant", text: "" };\n    setMessages(prev => [...prev, userMsg, assistantMsg]);\n\n    setIsThinking(true);     // 啟動「正在思考/呼叫工具」的載入狀態\n    setIsGenerating(true);   // 鎖定發送與輸入，防止重複提交\n\n    // 2. 建立標準 SSE EventSource 連線（僅支援 GET）\n    const eventSource = new EventSource(\n      `/api/ai/stream?message=${encodeURIComponent(text)}&sessionId=${sessionId}`\n    );\n\n    // 3. 監聽後端推播事件，更新對話文字\n    eventSource.onmessage = (event) => {\n      setIsThinking(false); // 收到第一個字元片段，代表思考/工具呼叫完畢，關閉思考狀態\n      \n      setMessages(prev => {\n        const updated = [...prev];\n        const lastIndex = updated.length - 1;\n        updated[lastIndex] = {\n          ...updated[lastIndex],\n          text: updated[lastIndex].text + event.data // 逐字追加生成內容\n        };\n        return updated;\n      });\n    };\n\n    // 4. 監聽連線結束或錯誤\n    eventSource.onerror = (err) => {\n      setIsThinking(false);\n      setIsGenerating(false);\n      eventSource.close(); // 傳輸完畢或斷線時務必關閉連線，避免瀏覽器無限重連\n    };\n  };\n\n  return (\n    <div className="chat-window">\n      <div className="chat-header">\n        <h3>Antigravity 智慧客服聊天室</h3>\n        <span className="session-badge">Session ID: {sessionId}</span>\n      </div>\n      \n      {/* 對話對話區 */}\n      <div className="messages-container">\n        {messages.map(msg => (\n          <div key={msg.id} className={`msg-row ${msg.sender}`}>\n            <div className="avatar">{msg.sender === \'user\' ? \'👤\' : \'🤖\'}</div>\n            <div className="bubble">\n              {msg.text || <span className="cursor">▍</span>}\n            </div>\n          </div>\n        ))}\n        \n        {/* 展示 AI 呼叫工具或思考中的狀態提示 */}\n        {isThinking && (\n          <div className="msg-row assistant">\n            <div className="avatar">🤖</div>\n            <div className="bubble thinking">\n              <span className="loading-dots">AI 正在搜尋資料庫或呼叫工具中...</span>\n            </div>\n          </div>\n        )}\n        \n        <div ref={messagesEndRef} />\n      </div>\n\n      {/* 快速對話指令區 */}\n      <div className="quick-actions">\n        {quickPrompts.map((p, idx) => (\n          <button \n            key={idx} \n            onClick={() => handleSend(p.text)} \n            disabled={isGenerating || isThinking}\n            className="quick-btn"\n          >\n            {p.label}\n          </button>\n        ))}\n      </div>\n\n      {/* 輸入欄區 */}\n      <div className="chat-input-bar">\n        <input \n          type="text" \n          value={input} \n          disabled={isGenerating || isThinking}\n          onChange={e => setInput(e.target.value)}\n          placeholder={isGenerating || isThinking ? "AI 正在回覆中..." : "請輸入您的問題..."}\n          onKeyDown={e => e.key === \'Enter\' && handleSendClick()}\n        />\n        <button onClick={handleSendClick} disabled={isGenerating || isThinking || !input.trim()}>\n          發送\n        </button>\n      </div>\n    </div>\n  );\n}'
              }
            },
            {
              title: '對應的 CSS 樣式支援 (ChatRoom.css)',
              type: 'code',
              paragraphs: [
                '以下是聊天室的精美樣式，包含對話泡泡、思考中加載動畫、快速觸發按鈕的毛玻璃與 Hover 效果。'
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
                '1. 串流偵測 (detectAndAttachCards)：當前端 EventSource 接收到後端 AI 推播的字元片段時，會將目前的完整對話內容 (fullResponse) 傳入進行關鍵字匹配。當匹配到商品名稱 (如耳機、鍵盤)、或涉及訂單關鍵字且提及使用者 alice 時，自動在訊息物件中附加對應的 `cards` 資料。',
                '2. 條件渲染 (renderCards)：在 React 渲染訊息列表時，如果訊息物件含有 `cards` 屬性，則呼叫 `renderCards` 方法，根據 `cards.cardType` 分別渲染出 <ProductCard />、<OrderCard />、或 <RecommendationCard />。'
              ],
              code: {
                language: 'javascript',
                title: 'ChatRoom.jsx — 核心動態識別與元件渲染邏輯',
                content: '/**\n * 偵測 AI 回覆內容並自動對應卡片數據\n */\nconst detectAndAttachCards = (text) => {\n  // 1. 商品卡片或語意推薦卡片偵測\n  const matchedProducts = storeProducts.filter(p => text.toLowerCase().includes(p.name.toLowerCase()));\n  if (matchedProducts.length > 0) {\n    if (text.includes("推薦") || text.includes("適合您")) {\n      return { cardType: "recommendations", list: matchedProducts };\n    }\n    return { cardType: "products", list: matchedProducts };\n  }\n\n  // 2. 訂單物流卡片偵測\n  if (text.includes("訂單") && (text.includes("alice") || text.includes("Alice"))) {\n    return { cardType: "orders", list: [/* 來自後端查出的訂單明細 */] };\n  }\n  return null;\n};\n\n/**\n * 條件式渲染不同的 React 元件卡片\n */\nconst renderCards = (cards) => {\n  if (!cards) return null;\n  switch (cards.cardType) {\n    case "products":\n      return <div className="products-grid">{/* 渲染商品網格元件 */}</div>;\n    case "orders":\n      return <div className="orders-list">{/* 渲染物流訂單元件 */}</div>;\n    case "recommendations":\n      return <div className="recommendations-list">{/* 渲染推薦商品元件 */}</div>;\n    default:\n      return null;\n  }\n};'
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
              imageCaption: 'AI 基礎對話運行畫面：結合毛玻璃效果與漸層 Header 設計，極具美感與科技感。'
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
            }
          ]
        },
        {
          id: 'd2-u7',
          chapter: '2-7',
          title: '對話歷史向量化與 RAG 檢索',
          summary: '將聊天室的對話紀錄（User Prompt 與 AI Response）非同步向量化儲存，並在發問時透過多路 RAG 同時檢索商品庫與歷史對話，打造具備長效語意記憶的 AI 助手。',
          source: 'docs/Day2-6-ChatHistory-RAG.md',
          heroImage: 'assets/teaching-site/07-ch07-logging.png',
          diagramImage: '',
          diagramCaption: '',
          goals: [
            '理解對話歷史向量化的重要性與長期記憶挑戰',
            '實作在 Spring Boot 串流結束時非同步寫入向量庫',
            '使用 Metadata 進行對話歷史隔離與精確過濾',
            '設計雙路 RAG 檢索：同時查詢知識庫與歷史記憶並進行內容合併'
          ],
          tasks: [
            { id: 'd2-u6-t1', text: '設計非同步向量化儲存 Service 邏輯' },
            { id: 'd2-u6-t2', text: '在 SSE 串流完成時 (doOnComplete) 觸發歷史寫入' },
            { id: 'd2-u6-t3', text: '實作多路檢索與上下文合併邏輯' }
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
                content: '@GetMapping(value = "/stream-chat", produces = MediaType.TEXT_EVENT_STREAM_VALUE)\npublic Flux<String> streamChatWithHistory(\n        @RequestParam String message,\n        @RequestParam String sessionId) {\n\n    StringBuilder fullResponse = new StringBuilder();\n\n    return this.chatClient.prompt()\n            .user(message)\n            .stream()\n            .content()\n            .doOnNext(fullResponse::append) // 持續收集模型生成的字元片段\n            .doOnComplete(() -> {\n                // 串流傳輸完成後，非同步將對話紀錄寫入向量庫\n                CompletableFuture.runAsync(() -> {\n                    chatHistoryService.saveToVectorStore(sessionId, message, fullResponse.toString());\n                });\n            });\n}'
              }
            },
            {
              title: '對話歷史向量化 Service 實作',
              type: 'code',
              paragraphs: [
                '利用 `VectorStore` 的 `add` 方法，我們把 User 問句與 AI 答句組合，並加上 metadata 以利日後查詢時，能透過 `sessionId` 隔離不同使用者的隱私。'
              ],
              code: {
                language: 'java',
                title: 'ChatHistoryService.java — 寫入向量庫與 Metadata 過濾',
                content: '@Service\n@Slf4j\npublic class ChatHistoryService {\n    private final VectorStore vectorStore;\n\n    public ChatHistoryService(VectorStore vectorStore) {\n        this.vectorStore = vectorStore;\n    }\n\n    public void saveToVectorStore(String sessionId, String prompt, String response) {\n        String content = "使用者提問：" + prompt + "\\n助手回答：" + response;\n        \n        Document doc = new Document(\n            content,\n            Map.of(\n                "sessionId", sessionId,\n                "type", "chat_history",\n                "created_at", System.currentTimeMillis()\n            )\n        );\n        \n        vectorStore.add(List.of(doc));\n        log.info("[長期記憶] 已成功向量化存入對話歷史，sessionId={}", sessionId);\n    }\n}'
              }
            },
            {
              title: '雙路 RAG 檢索與上下文合併',
              type: 'code',
              paragraphs: [
                '在使用者提問時，我們同時發起兩路檢索：一路查「商品知識表（type = \'product_doc\'）」，另一路查「該用戶的對話歷史（type = \'chat_history\' AND sessionId = \'xxx\'）」，最後將兩者合併作為 Context 提供給大模型。'
              ],
              code: {
                language: 'java',
                title: 'RAGController.java — 雙路 RAG 合併檢索',
                content: 'public List<Document> retrieveDoubleRoad(String query, String sessionId) {\n    // 第一路：商品文件檢索\n    SearchRequest productReq = SearchRequest.builder()\n            .query(query)\n            .filterExpression("type == \'product_doc\'")\n            .topK(3)\n            .build();\n    List<Document> products = vectorStore.similaritySearch(productReq);\n\n    // 第二路：該使用者歷史對話語意檢索\n    SearchRequest historyReq = SearchRequest.builder()\n            .query(query)\n            .filterExpression("type == \'chat_history\' && sessionId == \'" + sessionId + "\'")\n            .topK(2)\n            .build();\n    List<Document> histories = vectorStore.similaritySearch(historyReq);\n\n    // 合併結果並回傳\n    List<Document> combined = new ArrayList<>();\n    combined.addAll(products);\n    combined.addAll(histories);\n    return combined;\n}'
              }
            }
          ]
        }
      ]
    }
  ],
  appendix: {
    terminology: [
      '版本描述統一使用 Spring AI 2.0.0-M8',
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
      '先執行 `docker-compose up -d` 啟動 PostgreSQL / pgvector',
      '載入 `.env` 中的 API Key 後執行 `mvn spring-boot:run`',
      '瀏覽 `http://localhost:8080` 驗證聊天 Demo，再回到教學網站對照章節內容'
    ]
  }
};
