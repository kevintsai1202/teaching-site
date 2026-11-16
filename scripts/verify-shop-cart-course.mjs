// 教學網站「購物車／結帳／訂單／AI 先詢問再執行／管理員訂單／併發陷阱」課程段落驗證（有斷言，失敗時非零 exit）
// 用途：確認 0-1（PowerShell 7、macOS 對照）、1-9、2-2、2-5、2-8 新增段落都有渲染，
//       講師示範腳本（assets/demo/*.ps1）可下載、頁面上有下載連結，總時數為 14 小時，
//       task ID 不重複，且頁面沒有 404 與 console 錯誤；並截 1-9 併發陷阱段落存證。
// 前置：先啟動本機伺服器（npm run serve，預設 http://localhost:3000）
// 執行：node scripts/verify-shop-cart-course.mjs
import { createRequire } from 'node:module';
import path from 'node:path';
import fs from 'node:fs';
import assert from 'node:assert';

const require = createRequire(import.meta.url);
// 載入 playwright：優先本地 node_modules，其次全域 Roaming npm 目錄
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require(path.join(process.env.APPDATA, 'npm', 'node_modules', 'playwright')));
}
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000/';

// 各章必須渲染的新段落標題（標題存在即代表段落已渲染）
const EXPECTED = {
  '0-1': ['先把 PowerShell 升級到 7：課程指令的執行環境', 'macOS 對照：用 Homebrew 安裝課程環境'],
  '1-9': [
    '下半場：登入後的購物車、結帳與訂單',
    '步驟 0：Testcontainers——測試有自己的乾淨資料庫',
    '步驟 1：Flyway V3——已上線的資料表怎麼安全改結構',
    '步驟 2：購物車 API——完整走一次紅 → 綠 → 重構',
    '步驟 3：結帳——交易、條件式扣庫存與整筆回滾',
    '步驟 4：取消訂單與管理員出貨',
    '真實的紅燈長什麼樣子（課前演練的 mvn test 輸出節錄）',
    '講師示範：TDD 紅綠燈現場跑',
    '講師示範：用 PowerShell 走一次購物 API',
    'Spring Security 進階：URL 規則 vs @PreAuthorize',
    'AI Agent 提示詞 — 管理員查全部訂單與方法層級授權',
    '講師示範：401／403／200',
    '併發陷阱：同一份購物車被結成兩筆訂單',
    '講師示範：重現併發陷阱',
    '進階任務：請 AI 先寫會失敗的併發測試，再修',
  ],
  '2-2': [
    '購物車與訂單工具：工具的風險分級',
    '先詢問、下一則訊息確認才執行：為什麼不能只靠提示詞',
    '系統提示詞規則與 toolContext（原文）',
    'AI Agent 提示詞 — 購物車工具與先詢問再執行',
    '講師示範：幫我結帳 → 確定／不要',
  ],
  '2-5': [
    '購物前端：購物袋、抽屜、確認框與訂單頁',
    'api.js：先看狀態碼，401 與 403 分開處理',
    'AI Agent 提示詞 — 購物車與訂單前端',
    '講師示範：前端購物流程與 admin 出貨',
    // verify-cart 在購物前端完成後就寫（章末升級才有回歸檢查可用）
    'e2e：購物流程 verify-cart 的寫法與注意事項',
    'AI Agent 提示詞 — 購物流程 e2e',
  ],
  '2-8': [
    '購物流程 e2e：重跑與擴充',
    '講師示範：跑購物流程 e2e 並確認資料還原',
  ],
};

// 依驗證報告（learn-spring-verify/VERIFY-REPORT.md）修正後，各章必須出現／不可再出現的關鍵句
// 比對對象是該章 window.COURSE 的資料（JSON 字串），不受段落是否展開影響
const MUST = {
  '1-9': [
    '商品查詢 API 公開（訪客可瀏覽）',                      // #1
    'dispatcherTypeMatchers(DispatcherType.ASYNC, DispatcherType.ERROR).permitAll()', // #2 範例
    'accessDeniedHandler',                                    // #2 403 處理
    '@Value(\\"${JWT_SECRET:}\\")',                            // #3 範例讀環境變數
    'new LoginResponse(token, authentication.getName(), role)', // #4
    'mvn spring-boot:run 與 mvn test 都要',                    // #6
    '可以先在 OrderService 加上 checkout(String username) 的空方法簽章', // #7 #8
    '先建立空的 AdminOrderController 與 AdminOrderView',       // #7
    '格式「商品名稱（需要 N 件，庫存 M 件）」',                 // #9
    '寫 V3 時可能被權限擋下',                                  // 任務 4
    '跑測試可能被權限擋下',                                    // 任務 3
  ],
  '2-1': ['moderation、embedding 都設為 none', '$token = (Invoke-RestMethod', 'Successfully validated 3 migrations', 'Started ShopApplication'],
  '2-2': ['不要另外加假金鑰'],
  '2-3': ['提到到貨後 7 天內的鑑賞期', 'GET /api/rag/query?question=', 'filename（上傳的檔名）'],
  '2-4': ['class 為 sold-out-tag', 'class 為 login-btn', 'class 為 chat-toggle', 'image_url 是空的商品'],
  '2-5': [
    '只有 SSE 聊天端點 GET /api/ai/stream',                    // 安全
    'POST 換一次性票證',
    'class chat-login-hint', 'class add-product-btn', 'name 為 username、password', // #14
    '確保以下 class 與欄位名稱都存在',
    '重跑本章購物前端之後寫好的 e2e/verify-cart.mjs',          // #15
    'body 不是統一錯誤格式',                                   // 401/403 描述
    '最後用 psql 把這些訂單（含已取消的）的明細與訂單全部刪除', // #17 第 3 點
    '先用 API 在後端替 user 的購物車加 1 件',                   // #17 第 6 點
    '先以 user 用 API 再下一筆訂單',                            // #17 第 5 點
    '選擇器只用提示詞指定的 class、data 屬性、input name 與按鈕文字', // 升級後 verify-cart 仍可沿用
    '只更新 verify-cart 的操作步驟；斷言與檢查項目一律不可改',
    '實作時 class 以提示詞為準',                                // ChatRoom 範例與提示詞的 class
    '只有 SSE 聊天端點 /api/ai/stream 接受網址 Query Token',     // 任務措辭
  ],
  '2-8': ['原封不動重跑', '提示詞只能減少、無法保證', '操作步驟過時', '斷言與檢查項目一律不可改'],
};
const MUST_NOT = {
  '1-9': ['商品查詢 API 需登入身分即可', 'SECRET_STRING', 'CustomUserDetailsService', '新訂單 ORD-20261116-1061，狀態 PENDING，總金額 3780，庫存 30 -> 28\\n# == E. 結帳時庫存不足：加入時有貨，結帳前被別人買走\\n# [OK  ] user 結帳（庫存只剩不夠了）\\n#        POST /api/orders/checkout -> 預期 409，實際 409\\n#        message：庫存不足，無法結帳：香氛加濕器（需要 18 件）\\n'],
  '2-1': ['LearnSpringApplication', 'validated 2 migrations'],
  '2-2': ['加入假的金鑰'],
  '2-3': ['faq.txt', '14 天內'],
  '2-5': ['2-8 章的 e2e/verify-cart.mjs，若已建立', '401/403 的 body 是空的', '保留既有的 class 與欄位名稱不變'],
  '2-8': ['照最新版做就不會出現，可以當作', 'AI Agent 提示詞 — 購物流程 e2e'],
};

// 講師示範腳本（必須可下載，且頁面上要有連結）
const DEMOS = [
  'demo-1-9-tdd-red-green.ps1',
  'demo-1-9-shop-api.ps1',
  'demo-1-9-security.ps1',
  'demo-1-9-double-checkout.ps1',
  'demo-2-2-ai-confirm.ps1',
  'demo-snapshot.ps1',
];

const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
// 收集錯誤：console 錯誤、頁面例外與 4xx/5xx 回應
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(`${m.text()} @ ${m.location().url}`); });
page.on('pageerror', (e) => errors.push(String(e)));
page.on('response', (r) => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });

/** 點側邊導覽中以 prefix 開頭的章節，並等待第一個指定標題出現 */
async function openChapter(prefix, mustSee) {
  await page.locator('#sidebar-nav a', { hasText: prefix }).first().click();
  await page.getByText(mustSee, { exact: false }).first().waitFor({ timeout: 10000 });
}

try {
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForSelector('#sidebar-nav a');

  // 課程總時數
  const hours = await page.evaluate(() => window.COURSE.meta.totalHours);
  assert.ok(hours.includes('14 小時'), `meta.totalHours 應為 14 小時，實際「${hours}」`);
  console.log(`PASS 課程總時數：${hours}`);

  // task ID 不重複（localStorage 進度鍵唯一性）
  const ids = await page.evaluate(() => window.COURSE.days.flatMap((d) => d.units.flatMap((u) => (u.tasks || []).map((t) => t.id))));
  const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
  assert.deepStrictEqual(dup, [], `task ID 重複：${dup.join(', ')}`);
  console.log(`PASS task ID 唯一（${ids.length} 個）`);

  // 驗證報告修正的關鍵句：該章資料必須包含 MUST、不可包含 MUST_NOT
  const unitJson = await page.evaluate(() => Object.fromEntries(
    window.COURSE.days.flatMap((d) => d.units.map((u) => [u.chapter, JSON.stringify(u)]))));
  for (const [chapter, list] of Object.entries(MUST)) {
    for (const p of list) assert.ok(unitJson[chapter].includes(p), `${chapter} 缺少修正關鍵句：${p}`);
  }
  for (const [chapter, list] of Object.entries(MUST_NOT)) {
    for (const p of list) assert.ok(!unitJson[chapter].includes(p), `${chapter} 仍有應移除的舊內容：${p.slice(0, 40)}`);
  }
  console.log(`PASS 驗證報告修正關鍵句：${Object.values(MUST).flat().length} 句存在、${Object.values(MUST_NOT).flat().length} 句已移除`);

  // 講義匯出檔名依章號（#16）：每章 source 以 Day章號- 開頭，且檔案存在；章節錨點不可殘留在講義中
  const sources = await page.evaluate(() => window.COURSE.days.flatMap((d) => d.units.map((u) => [u.chapter, u.source])));
  const docsDir = path.resolve(import.meta.dirname, '..', '..', 'docs');
  for (const [chapter, src] of sources) {
    assert.ok(path.basename(src).startsWith(`Day${chapter}-`), `${chapter} 講義檔名 ${src} 與章號不符`);
    assert.ok(fs.existsSync(path.resolve(docsDir, '..', src)), `${src} 不存在（請先執行 node scripts/export-docs.mjs）`);
  }
  for (const old of ['Day2-5-React-Intro.md', 'Day2-4-WrapUp-MCP.md']) {
    assert.ok(!fs.existsSync(path.join(docsDir, old)), `舊檔名 docs/${old} 仍存在`);
  }
  const leftAnchors = fs.readdirSync(docsDir).filter((f) => f.endsWith('.md'))
    .filter((f) => /\]\(#d\d+-u\d+\)/.test(fs.readFileSync(path.join(docsDir, f), 'utf8')));
  assert.deepStrictEqual(leftAnchors, [], `講義仍有網站章節錨點：${leftAnchors.join(', ')}`);
  console.log(`PASS 講義檔名依章號（${sources.length} 份），舊檔名已移除，章節錨點已轉成講義連結`);

  // 各章新段落標題都有渲染
  const pageHrefs = new Set();
  for (const [chapter, titles] of Object.entries(EXPECTED)) {
    await openChapter(chapter, titles[0]);
    for (const t of titles) {
      await page.getByText(t, { exact: false }).first().waitFor({ timeout: 10000 });
    }
    // 收集本章出現的示範腳本連結
    for (const href of await page.locator('a[href^="assets/demo/"]').evaluateAll((as) => as.map((a) => a.getAttribute('href')))) {
      pageHrefs.add(href);
    }
    console.log(`PASS ${chapter}：${titles.length} 個新段落都已渲染`);
    if (chapter === '1-9') {
      // 展開「講師示範：重現併發陷阱」，確認下載連結與 PowerShell 程式碼都顯示，並截圖存證
      const h = page.getByText('講師示範：重現併發陷阱').first();
      await h.scrollIntoViewIfNeeded();
      await h.click();
      const link = page.locator('a[href="assets/demo/demo-1-9-double-checkout.ps1"]').first();
      await link.waitFor({ state: 'visible', timeout: 10000 });
      await page.getByText('[System.Threading.Tasks.Task]::WaitAll', { exact: false }).first().waitFor({ state: 'visible', timeout: 10000 });
      await h.scrollIntoViewIfNeeded();
      await page.screenshot({ path: 'data/screenshots/verify-shop-cart-course-1-9.png' });
      console.log('PASS 1-9：展開講師示範後，下載連結與 PowerShell 程式碼可見');
    }
  }

  // 示範腳本：頁面上有下載連結，且可下載（200、內容是 PowerShell 腳本）
  for (const name of DEMOS) {
    assert.ok(pageHrefs.has(`assets/demo/${name}`), `頁面上找不到 ${name} 的下載連結`);
    const res = await page.request.get(new URL(`assets/demo/${name}`, BASE_URL).href);
    assert.strictEqual(res.status(), 200, `${name} 回應 ${res.status()}`);
    const text = await res.text();
    assert.ok(text.startsWith('#Requires -Version 7'), `${name} 內容不是預期的 PowerShell 7 腳本`);
  }
  console.log(`PASS ${DEMOS.length} 支講師示範腳本都有連結且可下載`);

  // 網站本來就沒有 favicon.ico，瀏覽器自動請求的 404 不列入
  const realErrors = errors.filter((e) => !e.includes('favicon.ico'));
  assert.deepStrictEqual(realErrors, [], `頁面錯誤：${realErrors.join(' | ')}`);
  console.log('✅ 全部通過（截圖：data/screenshots/verify-shop-cart-course-1-9.png）');
} finally {
  await browser.close();
}
