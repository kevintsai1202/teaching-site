// SVG 轉 PNG：把手寫的 SVG 示意圖輸出成指定寬度的 PNG（例如 assets/diagrams/ 底下各章的流程圖）
// 用 Playwright（Edge）把 SVG 放進固定寬度的頁面再截圖，高度依 viewBox 比例自動計算，背景白色
// 執行：node scripts/svg-to-png.mjs <svg 檔> <輸出 png> [寬度，預設 1672] [必須出現的文字]
//   例：node scripts/svg-to-png.mjs assets/teaching-site/24-diagram-sse-jwt-flow.svg assets/diagrams/d2-u6.png 1672 "fetch 串流"
import { createRequire } from 'node:module';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

// 載入 playwright：優先本地 node_modules，其次全域 Roaming npm 目錄（與其他 verify 腳本相同）
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require(path.join(process.env.APPDATA, 'npm', 'node_modules', 'playwright')));
}

const [svgArg, outArg, widthArg, mustContain] = process.argv.slice(2);
assert.ok(svgArg && outArg, '用法：node scripts/svg-to-png.mjs <svg 檔> <輸出 png> [寬度] [必須出現的文字]');
// 輸出寬度（像素）
const width = Number(widthArg || 1672);
const svg = fs.readFileSync(path.resolve(svgArg), 'utf8');
// 依 viewBox 的長寬比算出輸出高度
const vb = svg.match(/viewBox="([\d.\s-]+)"/);
assert.ok(vb, 'SVG 缺少 viewBox，無法計算高度');
const [, , vbW, vbH] = vb[1].trim().split(/\s+/).map(Number);
const height = Math.round(width * vbH / vbW);
if (mustContain) assert.ok(svg.includes(mustContain), `SVG 內找不到必須出現的文字「${mustContain}」`);

const browser = await chromium.launch({ channel: 'msedge' });
try {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  // SVG 內嵌在 HTML，寬高撐滿整個 viewport
  await page.setContent(`<!doctype html><html><body style="margin:0;background:#fff">${
    svg.replace('<svg ', `<svg width="${width}" height="${height}" `)}</body></html>`);
  // XML 寫壞時瀏覽器不會產生 svg 元素
  assert.strictEqual(await page.locator('svg').count(), 1, 'SVG 沒有正常渲染');
  await page.screenshot({ path: outArg, clip: { x: 0, y: 0, width, height } });
  console.log(`PASS 已輸出 ${outArg}（${width}x${height}）`);
} finally {
  await browser.close();
}
