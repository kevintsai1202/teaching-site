// 教學網站「AI 開發工作流程」內容驗證（有斷言，失敗時非零 exit）
// 用途：確認
//   1. 補充章 2-10（article#d2-u10）排在 Day 2 最後、段落標題依序渲染、任務 5 個、標示課後自學
//   2. 段落與清單的渲染文字沒有未轉換的 HTML 標籤、&lt; 實體、反引號或控制字元（佔位符要顯示成 <run-id>）
//   3. 0-1 新段「把規則寫進 CLAUDE.md」在「AI 開發建議」之前，含 T0～T3、權限提醒、精簡範本與指向 2-10 的連結；
//      0-1 新任務 d0-u1-t6 存在；0-1 deep-memory 段與 2-5 章末升級段各有一句指向 2-10 的連結
//   4. 點 0-1 的連結會跳到 #d2-u10
//   5. 新內容沒有個人資料（帳號、email、個人專案名、本機絕對路徑）
//   6. 頁面沒有 console 錯誤與 4xx/5xx，並截圖存證
// 前置：先啟動本機伺服器（npm run serve，預設 http://localhost:3000）
// 執行：node scripts/verify-workflow-chapter.mjs 2>&1 | Tee-Object logs/verify-workflow-chapter.log
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
const SHOT_CHAPTER = 'data/screenshots/verify-workflow-chapter-2-10.png';   // 補充章開頭截圖
const SHOT_01 = 'data/screenshots/verify-workflow-chapter-0-1.png';         // 0-1 新段截圖

// 補充章應依序出現的段落標題
const EXPECTED_TITLES = [
  '本章定位：課後自學，不計入 14 小時',
  '為什麼要把規則寫進 CLAUDE.md：全域、專案與子目錄',
  '講師的開發規則（一）：語言、註解與範圍',
  '講師的開發規則（二）：實跑證據、長時指令與瀏覽器自動化',
  '任務分級 T0～T3：先判斷要走多完整的流程',
  '完整版 CLAUDE.md 範本（放在 ~/.claude/）',
  'Subagent 是什麼：內建與自訂',
  '講師常用的 subagent 一覽',
  'dev-worker 依難度選模型',
  '派工簡報怎麼寫：目標、已排除的事、範圍、驗收',
  '自己建一個 subagent：.md 範例',
  'Advisor：卡關與收尾前，找更強的模型看一眼',
  '權限與 auto mode：被擋下時怎麼處理',
  'deep-memory 完整說明（一）：安裝與第一次啟動',
  'deep-memory 完整說明（二）：每個回合做了什麼',
  'deep-memory 完整說明（三）：冷庫、熱庫與精煉',
  'deep-memory 完整說明（四）：備份、還原與隱私',
  'ui-ux-pro-max 完整說明（一）：它是什麼、怎麼裝',
  'ui-ux-pro-max 完整說明（二）：常用指令',
  'ui-ux-pro-max 完整說明（三）：技能給素材，方向由你決定',
  'macOS 對照（依官方文件整理，未在 Mac 實測）',
  '實作練習：五個課後任務',
  'AI 開發建議',
];
const NEW_01_TITLE = '把規則寫進 CLAUDE.md：精簡範本、任務分級與權限';
const UX_25_TITLE = '章末升級：用 ui-ux-pro-max 把商城變成品牌官網';
const DM_01_TITLE = 'deep-memory：讓 AI 有長期記憶';

// 使用系統內建 Edge，避免依賴 playwright 下載的瀏覽器版本
const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
// 收集錯誤：console 錯誤、頁面例外與 4xx/5xx 回應
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(`${m.text()} @ ${m.location().url}`); });
page.on('pageerror', (e) => errors.push(String(e)));
page.on('response', (r) => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });

/** 取某章 article 內所有段落的標題（依畫面順序） */
async function sectionTitles(articleId) {
  return page.locator(`article#${articleId} .accordion > .accordion-item .accordion-summary-title`).allInnerTexts()
    .then((ts) => ts.map((t) => t.trim()));
}

/** 取某章內指定標題的段落 locator */
function sectionByTitle(articleId, title) {
  return page.locator(`article#${articleId} .accordion > .accordion-item`)
    .filter({ has: page.locator('.accordion-summary-title', { hasText: title }) }).first();
}

/** 檢查一段渲染文字沒有未轉換的標記；where 用於錯誤訊息 */
function assertCleanText(text, where) {
  assert.ok(!/<\/?(strong|code|a|kbd|em)\b/.test(text), `${where} 有未轉換的 HTML 標籤：${text.slice(0, 80)}`);
  assert.ok(!/&(lt|gt|amp);/.test(text), `${where} 有未轉換的 HTML 實體：${text.slice(0, 80)}`);
  assert.ok(!text.includes('`'), `${where} 有 Markdown 反引號：${text.slice(0, 80)}`);
  assert.ok(!/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(text), `${where} 有控制字元：${JSON.stringify(text.slice(0, 80))}`);
}

try {
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForSelector('#sidebar-nav a');

  // ── 1. 補充章位置、標題、任務 ──
  const units = await page.evaluate(() => window.COURSE.days.flatMap((d) => d.units.map((u) => ({ id: u.id, chapter: u.chapter, title: u.title }))));
  const last = units[units.length - 1];
  assert.strictEqual(last.id, 'd2-u10', `最後一章應為 d2-u10，實際 ${last.id}`);
  assert.strictEqual(last.chapter, '2-10');
  assert.ok(last.title.includes('課後自學'), `補充章標題應標示課後自學：${last.title}`);
  await page.locator('#sidebar-nav a[data-target="d2-u10"]').click();
  const art = page.locator('article#d2-u10');
  await art.waitFor({ state: 'visible', timeout: 10000 });
  const titles = await sectionTitles('d2-u10');
  assert.deepStrictEqual(titles, EXPECTED_TITLES, `2-10 段落標題不符：\n${titles.join('\n')}`);
  console.log(`PASS 2-10 排在最後，${titles.length} 個段落標題依序渲染`);
  const taskIds = await art.locator('[data-task-id]').evaluateAll((els) => els.map((e) => e.getAttribute('data-task-id')));
  assert.deepStrictEqual(taskIds, ['d2-u10-t1', 'd2-u10-t2', 'd2-u10-t3', 'd2-u10-t4', 'd2-u10-t5']);
  console.log('PASS 2-10 任務 5 個（d2-u10-t1～t5）');

  // ── 2. 2-10 段落與清單渲染乾淨；code 型段落有程式區塊 ──
  const rows = await art.locator('.content-stack > p, .content-stack > ul > li, .task-label').evaluateAll((els) => els.map((e) => e.textContent));
  rows.forEach((t, i) => assertCleanText(t, `2-10 第 ${i + 1} 個段落／清單項`));
  const allText = rows.join('\n');
  assert.ok(allText.includes('<run-id>'), '佔位符 <run-id> 應顯示成文字');
  assert.ok(allText.includes('QuestionAnswerAdvisor'), '應有 advisor 與 Spring AI Advisor 的比較');
  const codeTitles = await art.locator('.code-block .code-head > span').allInnerTexts();
  assert.strictEqual(codeTitles.length, 10, `2-10 程式區塊應為 10 個，實際 ${codeTitles.length}`);
  const codes = await art.locator('.code-block pre code').allTextContents();
  assert.ok(codes.some((c) => c.includes('name: spring-reviewer') && c.includes('tools: Read, Grep, Glob')), '缺少自建 agent 範例');
  assert.ok(codes.some((c) => c.includes('"Edit(/backend/src/**)"')), '缺少權限規則範例');
  assert.ok(codes.some((c) => c.includes('--design-system --persist') && c.includes('--domain color')), '缺少 ui-ux-pro-max 指令');
  assert.ok(codes.some((c) => c.includes('refine_apply.py') && c.includes('--dry-run')), '缺少 deep-memory 精煉指令');
  assert.ok(codes.some((c) => c.includes('未在 Mac 實測')), '缺少 macOS 對照（未實測註明）');
  console.log(`PASS 2-10 渲染文字乾淨（${rows.length} 項），${codeTitles.length} 個程式區塊含 agent、權限、deep-memory、ui-ux-pro-max、macOS 範例`);
  await art.scrollIntoViewIfNeeded();
  await art.locator('.unit-top').screenshot({ path: SHOT_CHAPTER });

  // ── 3. 0-1 新段、新任務、deep-memory 連結句 ──
  await page.locator('#sidebar-nav a[data-target="d0-u1"]').click();
  await page.locator('article#d0-u1').waitFor({ state: 'visible', timeout: 10000 });
  const t01 = await sectionTitles('d0-u1');
  const iNew = t01.indexOf(NEW_01_TITLE);
  assert.ok(iNew >= 0, '0-1 缺少新段落');
  assert.strictEqual(t01[t01.length - 1], 'AI 開發建議', '0-1 最後一段仍應為 AI 開發建議');
  assert.strictEqual(iNew, t01.length - 2, '0-1 新段應緊接在 AI 開發建議之前');
  const sec01 = sectionByTitle('d0-u1', NEW_01_TITLE);
  assert.ok(await sec01.getAttribute('open') !== null, '0-1 新段應預設展開');
  const strongs01 = await sec01.locator('.content-stack > ul > li > strong').allInnerTexts();
  for (const k of ['T0 查詢', 'T1 單檔機械修改', 'T2 非程式產出', 'T3 其他', '⚠ 權限被擋下時不要叫 AI 繞過']) {
    assert.ok(strongs01.includes(k), `0-1 新段缺少「${k}」`);
  }
  const tpl = await sec01.locator('.code-block pre code').textContent();
  assert.ok(tpl.startsWith('# 專案開發規則（CLAUDE.md）') && tpl.includes('## 任務分級'), '0-1 精簡範本內容不符');
  const rows01 = await sec01.locator('.content-stack > p, .content-stack > ul > li').evaluateAll((els) => els.map((e) => e.textContent));
  rows01.forEach((t, i) => assertCleanText(t, `0-1 新段第 ${i + 1} 項`));
  assert.strictEqual(await sec01.locator('a[href="#d2-u10"]').count(), 1, '0-1 新段應有 1 個指向 2-10 的連結');
  const t6 = page.locator('article#d0-u1 [data-task-id="d0-u1-t6"]');
  assert.strictEqual(await t6.count(), 1, '0-1 缺少任務 d0-u1-t6');
  assert.ok((await t6.innerText()).includes('CLAUDE.md'), 'd0-u1-t6 內容不符');
  const dm01 = sectionByTitle('d0-u1', DM_01_TITLE);
  assert.strictEqual(await dm01.locator('a[href="#d2-u10"]').count(), 1, '0-1 deep-memory 段應有 1 個指向 2-10 的連結');
  console.log(`PASS 0-1 新段位於 AI 開發建議之前（T0～T3、權限提醒、精簡範本、2-10 連結）、任務 d0-u1-t6、deep-memory 段連結`);
  await sec01.scrollIntoViewIfNeeded();
  await sec01.screenshot({ path: SHOT_01 });

  // ── 4. 點 0-1 的連結跳到 2-10 ──
  await sec01.locator('a[href="#d2-u10"]').click();
  await page.waitForFunction(() => location.hash === '#d2-u10', null, { timeout: 5000 });
  // 網站可能使用平滑捲動，等捲動結束（2-10 頂端進入畫面上方 200px 內）再判定
  const reached = await page.waitForFunction(
    () => Math.abs(document.getElementById('d2-u10').getBoundingClientRect().top) < 200, null, { timeout: 10000 },
  ).then(() => true, () => false);
  const top = await page.locator('article#d2-u10').evaluate((el) => el.getBoundingClientRect().top);
  assert.ok(reached, `點連結後 2-10 應捲到畫面頂端附近，實際 top=${top}`);
  console.log('PASS 點 0-1 連結跳到 #d2-u10');

  // ── 5. 2-5 章末升級段連結句 ──
  const ux = sectionByTitle('d2-u6', UX_25_TITLE);
  assert.strictEqual(await ux.locator('a[href="#d2-u10"]').count(), 1, '2-5 章末升級段應有 1 個指向 2-10 的連結');
  console.log('PASS 2-5 章末升級段有指向 2-10 的連結');

  // ── 6. 新內容沒有個人資料 ──
  const newJson = await page.evaluate((t) => {
    const us = window.COURSE.days.flatMap((d) => d.units);
    const u01 = us.find((u) => u.id === 'd0-u1');
    return JSON.stringify([us.find((u) => u.id === 'd2-u10'), u01.sections.find((s) => s.title === t), u01.tasks.find((x) => x.id === 'd0-u1-t6')]);
  }, NEW_01_TITLE);
  const banned = [/kevintsai/i, /[\w.+-]+@[\w-]+\.[\w.]+/, /\bfda\b/i, /tiptop/i, /\blegal\b/i, /learn-spring-(verify|rehearsal)/i, /[CD]:\\\\(Users\\\\(?!你的帳號)|GitHub)/i];
  for (const re of banned) assert.ok(!re.test(newJson), `新內容含不應公開的字串：${re}（${(newJson.match(re) || [])[0]}）`);
  console.log('PASS 新內容沒有帳號、email、個人專案名與本機絕對路徑');

  // ── 7. 頁面錯誤（網站本來就沒有 favicon.ico，瀏覽器自動請求的 404 不列入）──
  const realErrors = errors.filter((e) => !e.includes('favicon.ico'));
  assert.deepStrictEqual(realErrors, [], `頁面錯誤：${realErrors.join(' | ')}`);
  console.log(`✅ 全部通過：頁面無 console 錯誤（截圖：${SHOT_CHAPTER}、${SHOT_01}）`);
} finally {
  await browser.close();
}
