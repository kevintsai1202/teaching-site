// 教學網站編排驗證腳本（verify — 有斷言，失敗時非零 exit）
// 用途：驗證課程編排修改後網站可正常渲染 — 17 章導覽、新章節標題、task ID 無重複、console 無錯誤
// 前置：先啟動本機伺服器（npm run serve，預設 http://localhost:3000）
// 執行：node scripts/verify-arrangement.mjs
import { createRequire } from 'node:module';
import assert from 'node:assert';

// 載入 playwright：優先本地 node_modules，其次全域 Roaming npm 目錄
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require(`${process.env.APPDATA}\\npm\\node_modules\\playwright`));
}

const BASE_URL = process.env.SITE_URL || 'http://localhost:3000';

// 使用系統內建 Edge（channel: msedge），避免依賴 playwright 下載的瀏覽器版本
const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage();

// 收集 console error 與 4xx/5xx 資源請求，最後斷言為空
const consoleErrors = [];
page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
page.on('pageerror', (err) => consoleErrors.push(String(err)));
const badResponses = [];
page.on('response', (res) => { if (res.status() >= 400) badResponses.push(`${res.status()} ${res.url()}`); });

try {
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  // 驗證 1：側邊導覽渲染出 17 個章節連結（COURSE 共 17 章）
  await page.waitForSelector('#sidebar-nav a', { timeout: 10000 });
  const navTexts = await page.locator('#sidebar-nav a').allTextContents();
  const chapterLinks = navTexts.map((t) => t.trim()).filter((t) => /^\d-\d/.test(t));
  assert.strictEqual(chapterLinks.length, 17, `側邊導覽章節數應為 17，實際 ${chapterLinks.length}`);

  // 驗證 2：新章節標題存在（2-4 改名 + 2-8 新增）
  assert.ok(navTexts.some((t) => t.includes('擴充AI能力：MCP 與 Skills')), '導覽缺少 2-4「擴充AI能力：MCP 與 Skills」');
  assert.ok(navTexts.some((t) => t.includes('課程總結與完整系統驗證')), '導覽缺少 2-8「課程總結與完整系統驗證」');

  // 驗證 3：總結章必須是最後一個章節連結
  assert.ok(chapterLinks[chapterLinks.length - 1].includes('課程總結'), `最後一章應為課程總結，實際「${chapterLinks[chapterLinks.length - 1]}」`);

  // 驗證 4：頁面上所有 task checkbox 的 data-task-id 不得重複（localStorage 進度鍵唯一性）
  const taskEls = await page.locator('[data-task-id]').all();
  const taskIds = [];
  for (const el of taskEls) taskIds.push(await el.getAttribute('data-task-id'));
  const dup = taskIds.filter((id, i) => taskIds.indexOf(id) !== i);
  assert.strictEqual(dup.length, 0, `task ID 重複：${[...new Set(dup)].join(', ')}`);

  // 驗證 5：首頁文案已更新（不再出現過時的「8 章」描述）
  const bodyText = await page.locator('body').innerText();
  assert.ok(!bodyText.includes('8 章排成清單'), '首頁仍殘留「8 章排成清單」過時文案');
  assert.ok(bodyText.includes('前後端開發'), '首頁文案缺少「前後端開發」描述');

  // 驗證 6：console 無錯誤、無失效資源請求（favicon 為瀏覽器自動請求，不列入）
  const realBad = badResponses.filter((u) => !u.includes('favicon'));
  assert.strictEqual(realBad.length, 0, `失效資源請求：\n${realBad.join('\n')}`);
  // 資源 404 已由 realBad 覆蓋判斷，這裡只看 JS 執行層級的錯誤
  const realErrors = consoleErrors.filter((e) => !e.includes('Failed to load resource'));
  assert.strictEqual(realErrors.length, 0, `Console 錯誤：\n${realErrors.join('\n')}`);

  console.log(`✅ 驗證通過：17 章導覽、2-4/2-8 章標題、task ID 唯一（${taskIds.length} 個）、首頁文案、console 乾淨`);
} finally {
  await browser.close();
}
