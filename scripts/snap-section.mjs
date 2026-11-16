// 段落截圖：開啟教學網站指定章節，展開指定標題的段落並截圖，供人工檢查排版（只截圖，不做內容斷言）
// 前置：先啟動本機伺服器（npm run serve，預設 http://localhost:3000）
// 執行：node scripts/snap-section.mjs <章號> <段落標題（可只寫開頭）> <輸出 png>
//   例：node scripts/snap-section.mjs 2-5 "為什麼不用 EventSource" data/screenshots/snap-2-5-stream.png
import { createRequire } from 'node:module';
import assert from 'node:assert';
import path from 'node:path';

// 載入 playwright：優先本地 node_modules，其次全域 Roaming npm 目錄
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require(path.join(process.env.APPDATA, 'npm', 'node_modules', 'playwright')));
}
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000/';
const [chapter, title, out] = process.argv.slice(2);
assert.ok(chapter && title && out, '用法：node scripts/snap-section.mjs <章號> <段落標題> <輸出 png>');

const browser = await chromium.launch({ channel: 'msedge' });
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  // 點側邊導覽進入該章
  await page.locator('#sidebar-nav a', { hasText: chapter }).first().click();
  const heading = page.getByText(title, { exact: false }).first();
  await heading.waitFor({ timeout: 10000 });
  // 展開段落（details）後只截這一段
  const item = page.locator('details.accordion-item').filter({ has: heading }).first();
  await item.evaluate((el) => { el.open = true; });
  await item.scrollIntoViewIfNeeded();
  await item.screenshot({ path: out });
  console.log(`已截圖：${out}`);
} finally {
  await browser.close();
}
