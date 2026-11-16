// 教學網站「購物車／結帳／訂單／AI 先詢問再執行／管理員訂單／併發陷阱」課程段落驗證（有斷言，失敗時非零 exit）
// 用途：確認 0-1（PowerShell 7、macOS 對照）、1-9、2-2、2-5、2-8 新增段落都有渲染，
//       講師示範腳本（assets/demo/*.ps1）可下載、頁面上有下載連結，總時數為 14 小時，
//       task ID 不重複，且頁面沒有 404 與 console 錯誤；並截 1-9 併發陷阱段落存證。
// 前置：先啟動本機伺服器（npm run serve，預設 http://localhost:3000）
// 執行：node scripts/verify-shop-cart-course.mjs
import { createRequire } from 'node:module';
import path from 'node:path';
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
  ],
  '2-8': [
    'e2e：購物流程 verify-cart 的寫法與注意事項',
    'AI Agent 提示詞 — 購物流程 e2e',
    '講師示範：跑購物流程 e2e 並確認資料還原',
  ],
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
