// 把 course-data.js（網站內容，唯一資料來源）匯出成 docs/*.md 講義
// 每個單元依 unit.source 寫一個檔，另外重寫 docs/README.md 當目錄
// 執行：node scripts/export-docs.mjs   （改完網站內容後重跑即可讓講義同步）
import fs from 'node:fs';
import path from 'node:path';

const SITE = path.resolve(import.meta.dirname, '..');
const ROOT = path.resolve(SITE, '..');
global.window = {};
await import('file://' + path.join(SITE, 'course-data.js').replace(/\\/g, '/'));
const C = window.COURSE;

/** 網站的 assets/... 路徑轉成從 docs/ 看出去的相對路徑 */
const assetPath = (p) => (/^(https?:|#|mailto:)/.test(p) ? p : '../teaching-site/' + p.replace(/^\.?\//, ''));

/** 把網站段落裡的簡單 HTML 轉成 Markdown（圖片、連結、粗體、程式碼、換行） */
function md(html = '') {
  return String(html)
    .replace(/<a [^>]*href="([^"]+)"[^>]*>\s*<img [^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>\s*<\/a>/g, (_, h, s, a) => `![${a}](${assetPath(s)})`)
    .replace(/<img [^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>/g, (_, s, a) => `![${a}](${assetPath(s)})`)
    .replace(/<img [^>]*alt="([^"]*)"[^>]*src="([^"]+)"[^>]*>/g, (_, a, s) => `![${a}](${assetPath(s)})`)
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (_, h, t) => `[${t}](${assetPath(h)})`)
    .replace(/<\/?(strong|b)>/g, '**')
    .replace(/<\/?(em|i)>/g, '*')
    .replace(/<\/?code>/g, '`')
    .replace(/<kbd>(.*?)<\/kbd>/g, '`$1`')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<\/?small>/g, '')
    // 其餘保留的 HTML（例如多張圖並排）只修正資產路徑
    .replace(/(src|href)="(assets\/[^"]+)"/g, (_, k, p) => `${k}="${assetPath(p)}"`)
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

/** 單一區塊（section）轉 Markdown */
function section(s) {
  const out = [`## ${s.title}`, ''];
  if (s.type === 'warning') out.push('> ⚠️ 注意', '');
  for (const p of s.paragraphs || []) out.push(md(p), '');
  for (const b of s.bullets || []) out.push('- ' + md(b).replace(/\n/g, '\n  '));
  if (s.bullets?.length) out.push('');
  for (const t of s.tagBullets || []) out.push('- ' + (typeof t === 'string' ? md(t) : `**${t.tag || t.label || ''}** ${md(t.text || t.body || '')}`));
  if (s.tagBullets?.length) out.push('');
  if (s.image) out.push(`![${s.imageAlt || s.title}](${assetPath(s.image)})`, s.imageCaption ? `*${md(s.imageCaption)}*` : '', '');
  if (s.callout) out.push(`> **${s.callout.type === 'warning' ? '⚠️ ' : '💡 '}${md(s.callout.title)}**`, '>', '> ' + md(s.callout.body).replace(/\n/g, '\n> '), '');
  if (s.code) {
    const fence = s.code.content.includes('```') ? '````' : '```';
    out.push(`**${s.code.title}**`, '', fence + (s.code.language || ''), s.code.content, fence, '');
  }
  return out.join('\n');
}

/** 單元轉成完整講義 */
function unit(u, day) {
  const out = [`# ${day.label} ${u.chapter}：${u.title}`, '', `> ${md(u.summary)}`, ''];
  out.push(`> 本講義由教學網站內容自動產生（teaching-site/scripts/export-docs.mjs），請改 course-data.js 後重新匯出。`, '');
  if (u.diagramImage) out.push(`![${u.diagramCaption || u.title}](${assetPath(u.diagramImage)})`, u.diagramCaption ? `*${md(u.diagramCaption)}*` : '', '');
  if (u.goals?.length) out.push('## 學習目標', '', ...u.goals.map((g) => '- ' + md(g)), '');
  for (const s of u.sections || []) out.push(section(s));
  if (u.tasks?.length) out.push('## 課堂任務', '', ...u.tasks.map((t) => '- [ ] ' + md(t.text)), '');
  return out.join('\n').replace(/\n{3,}/g, '\n\n');
}

const index = [`# ${C.meta.title}`, '', md(C.meta.subtitle), '', `總時數：${C.meta.totalHours || ''}`, '', '| 章節 | 講義 |', '| --- | --- |'];
let n = 0;
for (const day of C.days) {
  for (const u of day.units) {
    if (!u.source) continue;
    const file = path.join(ROOT, u.source);
    fs.writeFileSync(file, unit(u, day), 'utf8');
    index.push(`| ${u.chapter} ${u.title} | [${path.basename(u.source)}](${path.basename(u.source)}) |`);
    n++;
  }
}
fs.writeFileSync(path.join(ROOT, 'docs', 'README.md'), index.join('\n') + '\n', 'utf8');
console.log(`✅ 匯出 ${n} 份講義與 docs/README.md`);
