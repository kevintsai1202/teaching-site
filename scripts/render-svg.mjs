// SVG 示意圖渲染檢查腳本（verify — 有斷言，失敗時非零 exit）
// 用途：手改 SVG 圖中的文字後，確認瀏覽器仍能正常渲染（XML 沒寫壞、圖有尺寸），並截圖供人工檢查
// 不需要啟動網站伺服器，直接用 file:// 開啟 SVG（viewport 1000x700，SVG 依 viewBox 縮放後截圖）
// 執行：node scripts/render-svg.mjs <svg 檔> <輸出 png> [必須出現的文字]
//   例：node scripts/render-svg.mjs assets/teaching-site/15-diagram-ai-context-memory.svg ../tmp/15.png "對話 ID"
import { createRequire } from 'node:module';
import assert from 'node:assert';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// 載入 playwright：優先本地 node_modules，其次全域 Roaming npm 目錄（與其他 verify 腳本相同）
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require(path.join(process.env.APPDATA, 'npm', 'node_modules', 'playwright')));
}

const [svgArg, outArg, mustContain] = process.argv.slice(2);
assert.ok(svgArg && outArg, '用法：node scripts/render-svg.mjs <svg 檔> <輸出 png> [必須出現的文字]');
const svgUrl = pathToFileURL(path.resolve(svgArg)).href;

// 使用系統內建 Edge（channel: msedge），避免依賴 playwright 下載的瀏覽器版本
const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({ viewport: { width: 1000, height: 700 }, deviceScaleFactor: 2 });

try {
  // 1. 直接開啟 SVG：XML 寫壞時瀏覽器會插入 <parsererror>，根元素也可能不是 <svg>
  await page.goto(svgUrl);
  const info = await page.evaluate(() => {
    const root = document.documentElement;
    const box = root.getBoundingClientRect();
    return {
      tag: root.localName,
      parserError: document.getElementsByTagName('parsererror').length,
      w: Math.round(box.width),
      h: Math.round(box.height),
    };
  });
  assert.equal(info.tag, 'svg', `根元素不是 svg（${info.tag}）`);
  assert.equal(info.parserError, 0, 'SVG 有 XML 解析錯誤');
  assert.ok(info.w > 0 && info.h > 0, `SVG 沒有尺寸（${info.w}x${info.h}）`);
  await page.locator('svg').first().screenshot({ path: outArg });
  console.log(`OK 渲染成功 ${info.w}x${info.h}，截圖：${path.resolve(outArg)}`);

  // 2. 檢查文字節點（瀏覽器解析後的 DOM 文字）
  if (mustContain) {
    const text = await page.evaluate(() => document.documentElement.textContent);
    assert.ok(text.includes(mustContain), `SVG 文字找不到「${mustContain}」`);
    console.log(`OK 文字節點包含「${mustContain}」`);
  }
} finally {
  await browser.close();
}
