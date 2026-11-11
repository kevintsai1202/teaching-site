// 教學網站風格稽核截圖腳本
// 用途：擷取首頁、章節頁（桌機 / 手機 / 深色模式）截圖，供人工檢視版面與風格一致性
// 前置：先啟動本機伺服器（npm run serve，預設 http://localhost:3000）
// 執行：node scripts/screenshot-style-audit.mjs [輸出目錄]
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require(`${process.env.APPDATA}\\npm\\node_modules\\playwright`));
}

const BASE_URL = process.env.SITE_URL || 'http://localhost:3000';
// 截圖輸出目錄（預設 data/screenshots，可由參數覆寫）
const OUT = process.argv[2] || 'data/screenshots';
mkdirSync(OUT, { recursive: true });

// 要擷取的情境：名稱、視窗大小、配色主題、要捲動到的章節錨點
const SCENES = [
  { name: 'home-desktop', w: 1440, h: 900, theme: 'light', hash: '' },
  { name: 'chapter-desktop', w: 1440, h: 900, theme: 'light', hash: '#d2-u1' },
  { name: 'day0-showcase', w: 1440, h: 900, theme: 'light', hash: '#d0-u2' },
  { name: 'chapter-dark', w: 1440, h: 900, theme: 'dark', hash: '#d2-u3' },
  { name: 'home-mobile', w: 390, h: 844, theme: 'light', hash: '' },
  { name: 'chapter-mobile', w: 390, h: 844, theme: 'light', hash: '#d2-u9' }
];

const browser = await chromium.launch({ channel: 'msedge' });
try {
  for (const s of SCENES) {
    const page = await browser.newPage({ viewport: { width: s.w, height: s.h } });
    await page.goto(BASE_URL + '/' + s.hash, { waitUntil: 'networkidle' });
    // 套用主題後再等一下讓樣式與圖片穩定
    await page.evaluate((t) => document.documentElement.setAttribute('data-theme', t), s.theme);
    if (s.hash) await page.evaluate((h) => document.querySelector(h)?.scrollIntoView({ behavior: 'instant' }), s.hash);
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${OUT}/${s.name}.png` });
    // 記錄是否出現水平捲軸（手機版常見問題）
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    console.log(`${s.name}: 水平溢出 ${overflow}px`);
    await page.close();
  }
} finally {
  await browser.close();
}
