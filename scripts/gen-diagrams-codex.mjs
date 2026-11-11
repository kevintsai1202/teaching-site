// 用 Codex CLI（image_generation）批次重繪各章流程圖，輸出到 assets/diagrams/<單元id>.png
// Codex 的檔案工具在本機常逾時，因此不靠它存檔：每次執行後從 ~/.codex/generated_images 抓最新的圖複製過來
// 執行：node scripts/gen-diagrams-codex.mjs [單元id ...]（不帶參數＝全部；已存在的檔案會略過）
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const SITE = path.resolve(import.meta.dirname, '..');
const OUT = path.join(SITE, 'assets', 'diagrams');
const GEN = path.join(os.homedir(), '.codex', 'generated_images');
fs.mkdirSync(OUT, { recursive: true });

// 載入課程資料，取得每章的舊圖與圖說
global.window = {};
await import('file://' + path.join(SITE, 'course-data.js').replace(/\\/g, '/'));
const units = window.COURSE.days.flatMap((d) => d.units)
  .filter((u) => u.diagramImage && u.diagramImage !== u.heroImage && u.id !== 'd1-u2');

// 額外：1-2 的「兩層流向」文字圖
const extra = [{
  id: 'd1-u2-layers', chapter: '1-2', title: 'Controller / Service 兩層流向',
  diagramCaption: '[瀏覽器 / 前端] ↓HTTP 請求 → [Controller]（處理參數與 HTTP 格式）↓呼叫業務方法 → [Service]（業務邏輯 + 資料操作）↓ → [List<Product>]（記憶體資料，本章不用資料庫）。下方另一小區塊標示「下一章的完整三層」：[Controller] → [Service] → [Repository] → [資料庫]'
}];

// 舊圖內容過時的章節：改用這裡的指定內容，且不參考舊圖
const HINTS = {
  'd1-u1': '流程（左到右再回圈）：VS Code（延伸模組：Extension Pack for Java、Spring Boot Extension Pack、Claude Code）→ Claude Code 對話面板（貼上 AI Agent 提示詞）→ 終端機 PowerShell 7（java -version、mvn -v、git status）→ 檢查結果（JDK 21、Maven 3.9+、Git、Docker Desktop 打勾）→ 回到 VS Code 持續迭代。不要出現 CodeGPT、JDK 17、Spring Boot CLI。',
  'd1-u4': 'Java Entity（@Entity @Table(name = "products") class Product：@Id Long id、String name、BigDecimal price、Integer stock、String imageUrl）以箭頭對應資料表 products（id BIGINT PK、name VARCHAR、price NUMERIC、stock INTEGER、image_url VARCHAR）；下方 ProductRepository extends JpaRepository<Product, Long>，提供 findAll()、findById()、save()、deleteById()，箭頭「查詢與持久化」指向資料表。',
  'd2-u8': '上層 Day 2：React 前端 :5173（商城首頁、聊天室 EventSource SSE、Vite Proxy /api → :8080）⇄ AI 能力（ChatClient、ChatMemory 對話記憶、@Tool 查商品／訂單／庫存、RAG、MCP Server）→ 外部 AI 服務（Muse Spark 1.3 對話模型、Voyage voyage-4 向量 1024 維、rerank）。下層 Day 1：Spring Boot 後端 :8080（Security + JWT、Service / Repository、REST、例外處理）→ PostgreSQL 18 + pgvector（商品表、訂單表、Flyway、vector_store）。底部一行：驗證順序：資料庫 → 後端啟動 → 工具呼叫 → RAG → 前端串流。不要出現 Groq、llama、voyage-3。'
};

const only = process.argv.slice(2);
const jobs = [...units, ...extra].filter((u) => !only.length || only.includes(u.id));

/** 取得 generated_images 底下所有 png 的路徑與修改時間 */
function listGenerated() {
  const out = [];
  const walk = (d) => { if (!fs.existsSync(d)) return; for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); f.isDirectory() ? walk(p) : p.endsWith('.png') && out.push({ p, t: fs.statSync(p).mtimeMs }); } };
  walk(GEN);
  return out;
}

for (const u of jobs) {
  const dest = path.join(OUT, `${u.id}.png`);
  if (fs.existsSync(dest)) { console.log('略過（已存在）', u.id); continue; }
  const old = u.diagramImage ? path.join(SITE, u.diagramImage) : null;
  const prompt = [
    `使用 image_generation 工具生成一張教學流程圖（課程第 ${u.chapter} 章「${u.title}」）。`,
    HINTS[u.id] ? `圖的內容必須是：${HINTS[u.id]}` : old ? `先用 view_image（或讀取 SVG 原始碼）看舊圖 ${old.replace(/\\/g, '/')}，保留它要表達的元件與流向，但重新設計得更清楚。` : '',
    `圖要表達：${u.diagramCaption}`,
    '風格：白底扁平資訊圖，藍綠色系，圓角方塊與清楚箭頭，16:9 橫式；文字用繁體中文且必須正確清晰，技術識別字（類別名、註解、埠號、指令）維持英文；元件不超過 8 個，不要多餘裝飾文字與標題以外的長句。',
    '只要生成圖片即可，不必存檔或做其他事。'
  ].filter(Boolean).join('\n');
  const before = new Set(listGenerated().map((x) => x.p));
  console.log('生成中', u.id, new Date().toLocaleTimeString());
  try {
    execFileSync('codex', ['exec', '--skip-git-repo-check', '-s', 'read-only', '-'], { input: prompt, stdio: ['pipe', 'ignore', 'ignore'], timeout: 600000, shell: true });
  } catch (e) { console.log('codex 結束碼非 0（仍檢查是否有出圖）', u.id); }
  const fresh = listGenerated().filter((x) => !before.has(x.p)).sort((a, b) => b.t - a.t)[0];
  if (!fresh) { console.log('❌ 沒有新圖', u.id); continue; }
  fs.copyFileSync(fresh.p, dest);
  console.log('✅', u.id, '→', dest);
}
