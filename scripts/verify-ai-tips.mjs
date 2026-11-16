// 教學網站「AI 開發建議」段落驗證（有斷言，失敗時非零 exit）
// 用途：逐章（全部 21 章，章節清單取自 window.COURSE）確認每章最後一段是「AI 開發建議」，
//       段落內有提示框（callout info）與至少 4 點建議、每點都有粗體短標題、沒有未轉換的
//       HTML 標籤或 Markdown 反引號；斷言限定在該章的 article 內，避免隔壁章的段落讓檢查誤過。
//       最後確認頁面沒有 console 錯誤與 4xx/5xx，並截一張 1-9 的 AI 開發建議段落存證。
// 前置：先啟動本機伺服器（npm run serve，預設 http://localhost:3000）
// 執行：node scripts/verify-ai-tips.mjs 2>&1 | Tee-Object logs/verify-ai-tips.log
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
const TITLE = 'AI 開發建議';
const SHOT_CHAPTER = '1-9';                                   // 截圖存證的章節
const SHOT_PATH = 'data/screenshots/verify-ai-tips-1-9.png';  // 截圖位置

// 使用系統內建 Edge，避免依賴 playwright 下載的瀏覽器版本
const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
// 收集錯誤：console 錯誤、頁面例外與 4xx/5xx 回應
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(`${m.text()} @ ${m.location().url}`); });
page.on('pageerror', (e) => errors.push(String(e)));
page.on('response', (r) => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });

try {
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForSelector('#sidebar-nav a');

  // 章節清單直接取自課程資料，避免腳本與內容不同步
  const units = await page.evaluate(() =>
    window.COURSE.days.flatMap((d) => d.units.map((u) => ({ id: u.id, chapter: u.chapter }))));
  assert.strictEqual(units.length, 21, `章節數應為 21，實際 ${units.length}`);

  for (const { id, chapter } of units) {
    // 從側邊導覽點進該章，等該章的 article 出現
    await page.locator(`#sidebar-nav a[data-target="${id}"]`).first().click();
    const article = page.locator(`article#${id}`);
    await article.waitFor({ state: 'visible', timeout: 10000 });

    // 該章最後一個段落必須是「AI 開發建議」
    const item = article.locator('.accordion > .accordion-item').last();
    const title = (await item.locator('.accordion-summary-title').innerText()).trim();
    assert.strictEqual(title, TITLE, `${chapter} 最後一段應為「${TITLE}」，實際「${title}」`);

    // 段落預設展開，提示框與建議清單都可見
    const callout = item.locator('.callout.info');
    await callout.waitFor({ state: 'visible', timeout: 10000 });
    const lis = item.locator('.content-stack > ul > li');
    const n = await lis.count();
    assert.ok(n >= 4 && n <= 6, `${chapter} 建議點數應為 4～6，實際 ${n}`);
    await lis.first().waitFor({ state: 'visible', timeout: 10000 });

    // 每點都有渲染出來的粗體短標題，且沒有未轉換的標籤或反引號
    const rows = await lis.evaluateAll((els) => els.map((li) => ({
      strong: li.querySelector('strong')?.textContent || '',
      text: li.innerText,
    })));
    rows.forEach((r, i) => {
      assert.ok(r.strong.length > 0, `${chapter} 第 ${i + 1} 點沒有粗體短標題`);
      assert.ok(r.text.startsWith(r.strong + '：'), `${chapter} 第 ${i + 1} 點不是「短標題：說明」格式`);
      assert.ok(!/<\/?(strong|code)>|`/.test(r.text), `${chapter} 第 ${i + 1} 點有未轉換的標籤或反引號`);
    });
    console.log(`PASS ${chapter}：最後一段為「${TITLE}」，提示框可見，${n} 點建議（${rows.map((r) => r.strong).join('／')}）`);

    if (chapter === SHOT_CHAPTER) {
      await item.scrollIntoViewIfNeeded();
      await item.screenshot({ path: SHOT_PATH });
    }
  }

  // 網站本來就沒有 favicon.ico，瀏覽器自動請求的 404 不列入
  const realErrors = errors.filter((e) => !e.includes('favicon.ico'));
  assert.deepStrictEqual(realErrors, [], `頁面錯誤：${realErrors.join(' | ')}`);
  console.log(`✅ 全部通過：21 章都有「${TITLE}」段落，頁面無 console 錯誤（截圖：${SHOT_PATH}）`);
} finally {
  await browser.close();
}
