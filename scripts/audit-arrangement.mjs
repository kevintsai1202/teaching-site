// 教學網站編排稽核腳本（audit — 永遠 exit 0，產出 markdown 報告供人工審閱）
// 用途：稽核 course-data.js 與 docs/、assets/ 之間的跨檔案一致性
// 執行方式：node scripts/audit-arrangement.mjs（於 teaching-site/ 目錄下執行）
// 輸出：data/audit-arrangement.md
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

// 專案路徑常數：teaching-site 目錄與 learn-spring 倉庫根目錄
const SITE_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPO_ROOT = path.resolve(SITE_DIR, '..');

/** 以 vm sandbox 載入 course-data.js，取得 window.COURSE（避免 eval 副作用洩漏） */
async function loadCourse() {
  const src = await fs.readFile(path.join(SITE_DIR, 'course-data.js'), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox);
  return sandbox.window.COURSE;
}

/** 檢查檔案是否存在 */
async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

/** 遞迴收集物件中所有看起來像資產/文件路徑的字串值 */
function collectPaths(obj, out = []) {
  if (typeof obj === 'string') {
    if (/^(assets|docs)\//.test(obj)) out.push(obj);
  } else if (Array.isArray(obj)) {
    obj.forEach(v => collectPaths(v, out));
  } else if (obj && typeof obj === 'object') {
    Object.values(obj).forEach(v => collectPaths(v, out));
  }
  return out;
}

const COURSE = await loadCourse();
const report = [];
const summary = [];
const now = new Date().toISOString().slice(0, 16).replace('T', ' ');
report.push(`# 教學網站編排稽核報告 — ${now}\n`);

// ── 稽核 1：單元 source 文件存在性 ─────────────────────────
const srcIssues = [];
const usedDocs = new Set();
for (const day of COURSE.days) {
  for (const u of day.units) {
    if (!u.source) { srcIssues.push(`- ❌ ${u.id}（${u.title}）沒有宣告 source 文件`); continue; }
    usedDocs.add(u.source.replace(/^docs\//, ''));
    if (!(await exists(path.join(REPO_ROOT, u.source)))) {
      srcIssues.push(`- ❌ ${u.id} 引用的 \`${u.source}\` 不存在`);
    }
  }
}

// ── 稽核 2：圖片資產參照存在性（course-data.js + index.html）──
const allRefs = [...new Set(collectPaths(COURSE))];
const imgRefs = allRefs.filter(p => p.startsWith('assets/'));
const missingImgs = [];
for (const p of imgRefs) {
  if (!(await exists(path.join(SITE_DIR, p)))) missingImgs.push(`- ❌ \`${p}\``);
}
const indexHtml = await fs.readFile(path.join(SITE_DIR, 'index.html'), 'utf8');
const htmlAssetRefs = [...new Set([...indexHtml.matchAll(/["'](assets\/[^"']+)["']/g)].map(m => m[1]))];
for (const p of htmlAssetRefs) {
  if (!(await exists(path.join(SITE_DIR, p)))) missingImgs.push(`- ❌ index.html 引用 \`${p}\` 不存在`);
}

// ── 稽核 3：未被引用的孤兒檔案（docs/*.md 與 assets 圖檔）──
const docsFiles = (await fs.readdir(path.join(REPO_ROOT, 'docs'))).filter(f => f.endsWith('.md'));
const orphanDocs = docsFiles.filter(f => !usedDocs.has(f));
const assetFiles = (await fs.readdir(path.join(SITE_DIR, 'assets', 'teaching-site')));
const referencedAssets = new Set([...imgRefs, ...htmlAssetRefs].map(p => path.basename(p)));
const orphanAssets = assetFiles.filter(f => !referencedAssets.has(f));

// ── 稽核 4：ID 穩定性（unit / task 重複檢查）─────────────────
const idDup = [];
const seenIds = new Set();
for (const day of COURSE.days) {
  for (const u of day.units) {
    if (seenIds.has(u.id)) idDup.push(`- ❌ unit id 重複：${u.id}`);
    seenIds.add(u.id);
    for (const t of (u.tasks || [])) {
      if (seenIds.has(t.id)) idDup.push(`- ❌ task id 重複：${t.id}`);
      seenIds.add(t.id);
    }
  }
}

// ── 稽核 5：章節編號 vs source 檔名對應（編排漂移偵測）────────
const numberDrift = [];
for (const day of COURSE.days) {
  for (const u of day.units) {
    const m = (u.source || '').match(/Day(\d)-(\d+)/);
    if (m && `${m[1]}-${m[2]}` !== u.chapter) {
      numberDrift.push(`- ⚠️ ${u.id} 章節編號 \`${u.chapter}\` 與檔名 \`${u.source}\` 編號不一致`);
    }
  }
}

// ── 稽核 6：插圖覆蓋率（每章 hero / diagram / section 圖統計）──
const coverage = [];
for (const day of COURSE.days) {
  for (const u of day.units) {
    const sectionImgs = (u.sections || []).filter(s => s.image).length;
    const total = (u.heroImage ? 1 : 0) + (u.diagramImage ? 1 : 0) + sectionImgs;
    const mark = total === 0 ? '❌' : total < 2 ? '⚠️' : '✅';
    coverage.push(`| ${u.chapter} | ${u.title} | ${u.heroImage ? '✅' : '❌'} | ${u.diagramImage ? '✅' : '❌'} | ${sectionImgs} | ${(u.sections || []).length} | ${(u.tasks || []).length} | ${mark} |`);
  }
}

// ── 稽核 7：docs/images 與 assets/teaching-site 雙圖庫同步 ────
const docsImgs = new Set(await fs.readdir(path.join(REPO_ROOT, 'docs', 'images')));
const onlyInDocs = [...docsImgs].filter(f => !assetFiles.includes(f));
const onlyInSite = assetFiles.filter(f => !docsImgs.has(f));

// ── 組裝報告 ─────────────────────────────────────────────
summary.push(`- 課程結構：${COURSE.days.length} 天、${COURSE.days.reduce((n, d) => n + d.units.length, 0)} 章`);
summary.push(srcIssues.length ? `- ❌ source 文件問題 ${srcIssues.length} 筆` : '- ✅ 全部單元 source 文件存在');
summary.push(missingImgs.length ? `- ❌ 失效圖片參照 ${missingImgs.length} 筆` : '- ✅ 全部圖片參照可解析');
summary.push(orphanDocs.length ? `- ⚠️ 未被網站引用的 docs 文件 ${orphanDocs.length} 份` : '- ✅ docs 文件全數被引用');
summary.push(orphanAssets.length ? `- ⚠️ 未被引用的資產圖檔 ${orphanAssets.length} 張` : '- ✅ 資產圖檔全數被引用');
summary.push(idDup.length ? `- ❌ ID 重複 ${idDup.length} 筆` : '- ✅ unit / task ID 無重複');
summary.push(numberDrift.length ? `- ⚠️ 章節編號與檔名漂移 ${numberDrift.length} 筆` : '- ✅ 章節編號與檔名一致');

report.push('## Summary');
report.push(summary.join('\n'));
report.push('\n## ❌ Errors（很可能在線上是壞的）');
report.push([...srcIssues, ...missingImgs, ...idDup].join('\n') || '（無）');
report.push('\n## ⚠️ Warnings（需人工判斷）');
report.push('### 章節編號 vs 檔名漂移');
report.push(numberDrift.join('\n') || '（無）');
report.push('### 未被網站引用的 docs 文件');
report.push(orphanDocs.map(f => `- ⚠️ docs/${f}`).join('\n') || '（無）');
report.push('### 未被引用的資產圖檔');
report.push(orphanAssets.map(f => `- ⚠️ assets/teaching-site/${f}`).join('\n') || '（無）');
report.push('### 雙圖庫差異（docs/images vs assets/teaching-site）');
report.push(`- 只在 docs/images：${onlyInDocs.join(', ') || '（無）'}`);
report.push(`- 只在 assets/teaching-site：${onlyInSite.join(', ') || '（無）'}`);
report.push('\n## ℹ️ 章節內容覆蓋統計');
report.push('| 章 | 標題 | Hero圖 | 架構圖 | 段落圖數 | 段落數 | 任務數 | 評級 |');
report.push('| --- | --- | --- | --- | --- | --- | --- | --- |');
report.push(coverage.join('\n'));

await fs.mkdir(path.join(SITE_DIR, 'data'), { recursive: true });
await fs.writeFile(path.join(SITE_DIR, 'data', 'audit-arrangement.md'), report.join('\n'), 'utf8');
console.log('稽核完成 → data/audit-arrangement.md');
console.log(summary.join('\n'));
