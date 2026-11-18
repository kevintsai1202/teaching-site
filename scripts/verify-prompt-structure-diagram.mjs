// 教學網站「Spring AI 提示詞組裝結構圖」驗證（有斷言，失敗時非零 exit）
// 用途：確認 2-7 章（article#d2-u4）「ChatClient 掛上 SkillsTool 與 Agent 工具」段落
//   1. 有渲染結構圖 img，且圖片實際載入成功（naturalWidth > 0）
//   2. 圖說文字存在
//   3. 頁面沒有 console 錯誤與 4xx/5xx，並截圖存證
// 前置：先啟動本機伺服器（npm run serve，預設 http://localhost:3000）
// 執行：node scripts/verify-prompt-structure-diagram.mjs 2>&1 | Tee-Object logs/verify-prompt-structure-diagram.log
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
const SECTION_TITLE = 'ChatClient 掛上 SkillsTool 與 Agent 工具';          // 目標段落標題
const IMAGE_SRC = 'assets/teaching-site/28-diagram-prompt-structure.png';  // 結構圖路徑
const SHOT = 'data/screenshots/verify-prompt-structure-diagram.png';      // 截圖存證

// 使用系統內建 Edge，避免依賴 playwright 下載的瀏覽器版本
const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const consoleErrors = [];   // 收集 console 錯誤
const badResponses = [];    // 收集 4xx/5xx 回應
// console 錯誤附上來源 URL；網站本來就沒有 favicon.ico，瀏覽器自動請求的 404 不列入
page.on('console', (msg) => {
  if (msg.type() !== 'error') return;
  const entry = `${msg.text()} ${msg.location().url || ''}`;
  if (!entry.includes('favicon.ico')) consoleErrors.push(entry);
});
page.on('response', (res) => { if (res.status() >= 400) badResponses.push(`${res.status()} ${res.url()}`); });

try {
  await page.goto(`${BASE_URL}#d2-u4`, { waitUntil: 'networkidle' });

  // 找到目標段落的 <details>，展開（code 類段落預設收合）
  const details = page.locator('#d2-u4 details.accordion-item', {
    has: page.locator('summary', { hasText: SECTION_TITLE }),
  });
  assert.strictEqual(await details.count(), 1, `找不到段落：${SECTION_TITLE}`);
  await details.evaluate((el) => { el.open = true; });

  // 1. 圖片存在且已載入
  const img = details.locator(`img[src="${IMAGE_SRC}"]`);
  assert.strictEqual(await img.count(), 1, '段落內找不到結構圖 img');
  await img.scrollIntoViewIfNeeded();
  const naturalWidth = await img.evaluate(async (el) => {
    if (!el.complete) await new Promise((r) => el.addEventListener('load', r, { once: true }));
    return el.naturalWidth;
  });
  assert.ok(naturalWidth > 0, '結構圖未成功載入');

  // 2. 圖說存在
  const caption = await details.locator('.inline-visual .caption').innerText();
  assert.ok(caption.includes('Tool Calling 迴圈'), `圖說不符：${caption}`);

  // 3. 無 console 錯誤與 4xx/5xx
  // 先檢查 4xx/5xx（訊息含 URL），再檢查 console 錯誤
  assert.deepStrictEqual(badResponses, [], `4xx/5xx：${badResponses.join('\n')}`);
  assert.deepStrictEqual(consoleErrors, [], `console 錯誤：${consoleErrors.join('\n')}`);

  await details.locator('.inline-visual').screenshot({ path: SHOT });
  console.log(`PASS naturalWidth=${naturalWidth} 截圖：${SHOT}`);
} finally {
  await browser.close();
}
