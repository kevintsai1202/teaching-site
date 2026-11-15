// 教學網站「品牌官網升級」相關段落驗證（有斷言，失敗時非零 exit）
// 用途：確認 0-1 的 Node.js／Python 安裝段、2-4 基本版說明、2-5 章末升級段都有渲染，
//       素材 zip 與範例截圖可下載，且頁面沒有 404 與 console 錯誤；並截 2-5 升級段落存證。
// 前置：先啟動本機伺服器（npm run serve，預設 http://localhost:3000）
// 執行：node scripts/verify-shop-upgrade.mjs
import { createRequire } from 'node:module';
import path from 'node:path';
import assert from 'node:assert';

const require = createRequire(import.meta.url);
const { chromium } = require(path.join(process.env.APPDATA, 'npm', 'node_modules', 'playwright'));
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000/';

const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
// 收集錯誤：console 錯誤與 4xx/5xx 回應
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(`${m.text()} @ ${m.location().url}`); });
page.on('response', (r) => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });

/** 點側邊導覽中以 prefix 開頭的章節，並等待指定文字出現 */
async function openChapter(prefix, mustSee) {
  await page.locator('#sidebar-nav a', { hasText: prefix }).first().click();
  await page.getByText(mustSee, { exact: false }).first().waitFor({ timeout: 10000 });
}

try {
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForSelector('#sidebar-nav a');

  await openChapter('0-1', '先裝好 Node.js 與 Python');
  console.log('PASS 0-1 安裝 Node.js 與 Python 段落');

  await openChapter('2-4', '先求功能正確，視覺之後再升級');
  console.log('PASS 2-4 基本版說明段落');

  await openChapter('2-5', '章末升級：用 ui-ux-pro-max 把商城變成品牌官網');
  const heading = page.getByText('章末升級：用 ui-ux-pro-max 把商城變成品牌官網').first();
  await heading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'data/screenshots/verify-shop-upgrade-2-5.png', fullPage: false });
  console.log('PASS 2-5 章末升級段落');

  // 素材 zip 與升級後範例圖可下載
  for (const u of ['assets/downloads/product-images.zip', 'assets/samples/01-visitor-home.jpg']) {
    const res = await page.request.get(new URL(u, BASE_URL).href);
    assert.strictEqual(res.status(), 200, `${u} 回應 ${res.status()}`);
  }
  console.log('PASS 素材 zip 與範例圖可下載');

  // 網站本來就沒有 favicon.ico，瀏覽器自動請求的 404 不列入
  const realErrors = errors.filter((e) => !e.includes('favicon.ico'));
  assert.deepStrictEqual(realErrors, [], `頁面錯誤：${realErrors.join(' | ')}`);
  console.log('✅ 全部通過（截圖：data/screenshots/verify-shop-upgrade-2-5.png）');
} finally {
  await browser.close();
}
