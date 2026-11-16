// 擷取講義用的購物前端「完成畫面樣本」（2-5 章：做完應該長這樣）
// 來源：參考實作 learn-spring-rehearsal2（前端 5173、後端 8080、資料庫容器 rehearsal2-postgres）
// 產出（teaching-site/assets/samples/，jpg）：
//   06-cart-drawer.jpg          user 的購物車抽屜（2 件商品）
//   07-checkout-confirm.jpg     按結帳後的畫面內確認框
//   08-my-orders.jpg            結帳後的「我的訂單」頁（新訂單在最上面、可取消）
//   09-admin-orders.jpg         admin 的「訂單管理」頁，篩選待出貨，PENDING 訂單有出貨鈕
//   10-chat-checkout.jpg        AI 客服「幫我結帳」→「確定」（真實模型；加 --no-ai 可略過）
//   11-mobile-cart-drawer.jpg   手機寬（390）的購物車抽屜
// 資料安全：
//   - 開始前記錄庫存、訂單最大 id、購物車；只清理「本腳本建立」的訂單（id 大於開始前的最大值），不碰種子訂單。
//   - 結束（含失敗）一律清理：取消並刪除本次訂單與明細（未取消的先補回庫存）、清空 user 與 admin 購物車；
//     有跑 AI 對話時，先把 vector_store 用 pg_dump 備份到 logs/，再刪除 type=chat_history 且 username=user 的列。
//   - 不按出貨（出貨後沒有 API 能退庫存）；不用 waitForTimeout，一律等條件。
// 前置：rehearsal2 的 PostgreSQL 容器、後端（8080）、前端（5173）已啟動；有跑 AI 時模型金鑰已設定。
// 執行（在 teaching-site 目錄，PowerShell 7）：
//   node scripts/capture-shop-samples.mjs 2>&1 | Tee-Object logs/capture-shop-samples.log
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const require = createRequire(import.meta.url);
// 載入 playwright：優先本地 node_modules，其次全域 Roaming npm 目錄
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require(path.join(process.env.APPDATA, 'npm', 'node_modules', 'playwright')));
}

const SITE = process.env.SITE_URL || 'http://localhost:5173';          // 參考實作前端
const PG = process.env.PG_CONTAINER || 'rehearsal2-postgres';           // 參考實作資料庫容器
const WITH_AI = !process.argv.includes('--no-ai');                     // 是否擷取 AI 客服畫面（會真的呼叫模型）
const ROOT = path.resolve(import.meta.dirname, '..');                   // teaching-site 目錄
const OUT = path.join(ROOT, 'assets', 'samples');                       // 截圖輸出位置
const LOGS = path.join(ROOT, 'logs');                                   // 資料庫備份位置（不進版控）
const JPEG_QUALITY = 80;                                                // jpg 品質（單張目標 < 300KB）
// 種子資料：清理後必須回到這個狀態（商品 id -> 庫存；訂單 4 筆）
const SEED_STOCK = { 1: 12, 2: 25, 3: 30, 4: 50, 5: 18, 6: 0 };
const SEED_ORDERS = 4;
// 範例使用的商品：機械鍵盤（3）、行動電源（4）
const P_KEYBOARD = 3;
const P_POWERBANK = 4;

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(LOGS, { recursive: true });

// ---------- API 小工具 ----------
/** 以 API 登入取得 JWT */
async function apiLogin(username, password) {
  const r = await fetch(`${SITE}/api/auth/login`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }),
  });
  if (!r.ok) throw new Error(`${username} 登入失敗：${r.status}`);
  return (await r.json()).token;
}
/** 帶 JWT 呼叫 API，回傳 {status, body} */
async function api(token, method, url, body) {
  const r = await fetch(`${SITE}${url}`, {
    method,
    headers: { Authorization: `Bearer ${token}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await r.text();
  return { status: r.status, body: text ? JSON.parse(text) : null };
}
/** 清空某帳號的購物車 */
async function clearCart(token) {
  const cart = (await api(token, 'GET', '/api/cart')).body;
  for (const it of cart?.items ?? []) await api(token, 'DELETE', `/api/cart/items/${it.productId}`);
}

// ---------- 資料庫小工具 ----------
/** 在參考實作的資料庫執行 SQL（-tA 只回資料；任何錯誤即丟例外） */
function psql(sql) {
  return execFileSync('docker', ['exec', '-i', PG, 'psql', '-U', 'postgres', '-d', 'learn_spring', '-v', 'ON_ERROR_STOP=1', '-tAc', sql],
    { encoding: 'utf8' }).trim();
}
/** 目前各商品庫存 {id: stock} */
function stockMap() {
  return Object.fromEntries(psql('select id, stock from products order by id').split('\n').map((l) => l.split('|').map(Number)));
}
/** 刪除本腳本建立的一筆訂單：未取消的先補回庫存，再刪明細與訂單（訂單編號先驗證格式） */
function purgeOrder(orderNo) {
  if (!/^ORD-[A-Za-z0-9-]+$/.test(orderNo)) throw new Error(`訂單編號格式不符，拒絕刪除：${orderNo}`);
  psql(
    `update products p set stock = p.stock + oi.quantity from order_items oi join orders o on o.id = oi.order_id ` +
    `where oi.product_id = p.id and o.order_no = '${orderNo}' and o.status <> 'CANCELLED'; ` +
    `delete from order_items where order_id = (select id from orders where order_no = '${orderNo}'); ` +
    `delete from orders where order_no = '${orderNo}'`);
}
/** user 的長期記憶列數（vector_store 中 type=chat_history、username=user） */
function userChatRows() {
  return Number(psql("select count(*) from vector_store where metadata->>'type' = 'chat_history' and metadata->>'username' = 'user'"));
}

// ---------- 頁面小工具 ----------
/** 以畫面登入 */
async function uiLogin(page, username, password) {
  await page.click('.login-btn');
  await page.fill('input[name=username]', username);
  await page.fill('input[name=password]', password);
  await page.click('.login-form button[type=submit]');
  // 手機寬時問候語會隱藏，所以只等它出現在 DOM（代表已登入），不要求可見
  await page.waitForSelector('.greeting', { state: 'attached' });
}
/** 等購物袋徽章顯示指定數量（0 代表沒有徽章） */
async function waitBadge(page, n) {
  await page.waitForFunction((count) => {
    const el = document.querySelector('.cart-badge');
    return count === 0 ? !el : el?.textContent.trim() === String(count);
  }, n);
}
/** 等畫面穩定：圖片載入完成、有限次數的動畫（滑出、淡入）播完；無限循環的動畫（骨架屏）不等 */
async function settle(page) {
  await page.waitForLoadState('networkidle');
  await page.waitForFunction(() => [...document.images].every((img) => img.complete));
  await page.evaluate(() => Promise.all(document.getAnimations()
    .filter((a) => a.effect?.getTiming().iterations !== Infinity)
    .map((a) => a.finished.catch(() => null))));
}
/** 存 jpg 截圖並回傳檔案大小（KB） */
async function shot(page, name) {
  await settle(page);
  const file = path.join(OUT, name);
  await page.screenshot({ path: file, type: 'jpeg', quality: JPEG_QUALITY });
  const kb = Math.round(fs.statSync(file).size / 1024);
  console.log(`已存 ${name}（${kb} KB）`);
  return kb;
}
/** 在客服視窗送出一句話，等 AI 回覆完成，回傳最後一則 AI 回覆文字 */
async function ask(page, text) {
  const before = await page.locator('.msg-ai:not(.skeleton-msg)').count();
  await page.fill('.chat-input', text);
  await page.click('.chat-send');
  // 推理模型帶工具可能要 10～30 秒，等條件不等秒數：AI 回覆數增加，且送出鈕恢復可按
  await page.waitForFunction((n) => document.querySelectorAll('.msg-ai:not(.skeleton-msg)').length > n, before, { timeout: 180000 });
  await page.waitForFunction(() => !document.querySelector('.chat-send')?.disabled, null, { timeout: 180000 });
  return (await page.locator('.msg-ai:not(.skeleton-msg)').last().innerText()).trim();
}

// ======================================================
const userToken = await apiLogin('user', 'user123');
const adminToken = await apiLogin('admin', 'admin123');
const maxOrderId0 = Number(psql('select coalesce(max(id), 0) from orders')); // 開始前的訂單最大 id（之後大於它的都是本腳本建立）
const chatRows0 = userChatRows();                                            // 開始前 user 的長期記憶列數
const sizes = {};                                                            // 檔名 -> KB
let aiOk = false;                                                            // AI 畫面是否擷取成功
let fail = 0;

// 開始前資料必須是種子狀態，否則清理後無法判斷是否還原
const stock0 = stockMap();
if (JSON.stringify(stock0) !== JSON.stringify(SEED_STOCK) || Number(psql('select count(*) from orders')) !== SEED_ORDERS) {
  console.error('開始前資料不是種子狀態，中止（庫存或訂單數不符）：', JSON.stringify(stock0));
  process.exit(1);
}

const browser = await chromium.launch({ channel: 'msedge' });
try {
  await clearCart(userToken);
  await clearCart(adminToken);

  // ---------- 桌機 1280：user 加 2 件 → 抽屜 → 確認框 → 結帳 → 我的訂單 ----------
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  page.setDefaultTimeout(20000);
  await page.goto(SITE, { waitUntil: 'networkidle' });
  await uiLogin(page, 'user', 'user123');
  for (const [pid, n] of [[P_KEYBOARD, 1], [P_POWERBANK, 2]]) {
    await page.goto(`${SITE}/#/product/${pid}`);
    await page.getByRole('button', { name: '加入購物袋' }).click();
    await waitBadge(page, n);
  }
  await page.goto(`${SITE}/#/`);
  await page.waitForSelector('.product-card');
  await page.click('.cart-btn');
  await page.waitForSelector('.cart-drawer .cart-item');
  sizes['06-cart-drawer.jpg'] = await shot(page, '06-cart-drawer.jpg');

  await page.click('.checkout-btn');
  await page.waitForSelector('.confirm-dialog');
  sizes['07-checkout-confirm.jpg'] = await shot(page, '07-checkout-confirm.jpg');

  await page.click('.confirm-ok');
  await page.waitForSelector('.checkout-result');
  const orderNo = (await page.locator('.order-no').innerText()).trim();
  console.log('結帳建立訂單', orderNo);
  await page.click('.checkout-result a.btn-primary'); // 「查看我的訂單」
  await page.waitForSelector(`.orders-page .order-row[data-order-no="${orderNo}"]`);
  sizes['08-my-orders.jpg'] = await shot(page, '08-my-orders.jpg');

  // ---------- 桌機 1280：admin 訂單管理（篩選待出貨，不按出貨） ----------
  await page.click('.logout-btn');
  await page.waitForSelector('.login-btn');
  await uiLogin(page, 'admin', 'admin123');
  await page.click('.admin-orders-link');
  await page.waitForSelector('.admin-orders-page');
  await page.selectOption('.status-filter', 'PENDING');
  await page.waitForFunction((no) => {
    const rows = [...document.querySelectorAll('.admin-orders-page .order-row')];
    return rows.length > 0 && rows.every((r) => r.dataset.status === 'PENDING')
      && !!document.querySelector(`.order-row[data-order-no="${no}"] .ship-btn`);
  }, orderNo);
  sizes['09-admin-orders.jpg'] = await shot(page, '09-admin-orders.jpg');
  await page.close();

  // ---------- 手機寬 390：購物車抽屜 ----------
  await api(userToken, 'POST', '/api/cart/items', { productId: P_KEYBOARD, quantity: 1 });
  await api(userToken, 'POST', '/api/cart/items', { productId: P_POWERBANK, quantity: 1 });
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  mobile.setDefaultTimeout(20000);
  await mobile.goto(SITE, { waitUntil: 'networkidle' });
  await uiLogin(mobile, 'user', 'user123');
  await waitBadge(mobile, 2);
  await mobile.click('.cart-btn');
  await mobile.waitForSelector('.cart-drawer .cart-item');
  sizes['11-mobile-cart-drawer.jpg'] = await shot(mobile, '11-mobile-cart-drawer.jpg');
  await mobile.close();
  await clearCart(userToken);

  // ---------- AI 客服：幫我結帳 → 確定（真實模型） ----------
  if (WITH_AI) {
    await api(userToken, 'POST', '/api/cart/items', { productId: P_KEYBOARD, quantity: 1 });
    const chat = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    chat.setDefaultTimeout(20000);
    await chat.goto(SITE, { waitUntil: 'networkidle' });
    await uiLogin(chat, 'user', 'user123');
    await chat.click('.chat-toggle');
    await chat.waitForSelector('.chat-input');
    const r1 = await ask(chat, '幫我結帳');
    console.log('AI 回覆 1：', r1.replace(/\s+/g, ' ').slice(0, 120));
    if (!r1.includes('確定')) {
      console.log('FAIL 模型沒有先列出摘要並詢問確定，不擷取 AI 畫面');
      fail++;
    } else {
      const r2 = await ask(chat, '確定');
      console.log('AI 回覆 2：', r2.replace(/\s+/g, ' ').slice(0, 120));
      if (r2.includes('已完成結帳')) {
        await waitBadge(chat, 0);
        sizes['10-chat-checkout.jpg'] = await shot(chat, '10-chat-checkout.jpg');
        aiOk = true;
      } else {
        console.log('FAIL 回「確定」後沒有完成結帳，不擷取 AI 畫面');
        fail++;
      }
    }
    await chat.close();
  }
} catch (e) {
  console.error('擷取過程發生例外：', e);
  fail++;
} finally {
  await browser.close();
  // ---------- 清理 ----------
  try {
    const created = psql(`select order_no from orders where id > ${maxOrderId0} order by id`).split('\n').filter(Boolean);
    for (const no of created) {
      await api(userToken, 'POST', `/api/orders/${no}/cancel`); // PENDING 的先走 API 取消（退庫存）；失敗由 purge 補庫存
      purgeOrder(no);
      console.log('已刪除本次建立的訂單', no);
    }
    await clearCart(userToken);
    await clearCart(adminToken);
    if (WITH_AI && userChatRows() !== chatRows0) {
      // 刪除前先備份整個 vector_store（含本次新增的列），必要時可還原
      const stamp = new Date().toISOString().replace(/[:.]/g, '-');
      const dumpFile = path.join(LOGS, `vector_store-before-cleanup-${stamp}.sql`);
      fs.writeFileSync(dumpFile, execFileSync('docker', ['exec', PG, 'pg_dump', '-U', 'postgres', '-d', 'learn_spring', '-t', 'vector_store'],
        { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 }));
      console.log('已備份 vector_store 到', path.relative(ROOT, dumpFile));
      const deleted = psql("delete from vector_store where metadata->>'type' = 'chat_history' and metadata->>'username' = 'user' returning 1").split('\n').filter(Boolean).length;
      console.log(`已刪除 user 的長期記憶 ${deleted} 列`);
    }
    // 還原檢查：庫存、訂單數、購物車、user 長期記憶
    const stock1 = stockMap();
    const okStock = JSON.stringify(stock1) === JSON.stringify(SEED_STOCK);
    const orders1 = Number(psql('select count(*) from orders'));
    const carts1 = Number(psql("select count(*) from cart_items where username in ('user', 'admin')"));
    const chat1 = userChatRows();
    console.log(`${okStock ? 'PASS' : 'FAIL'} 庫存回到種子資料 ${JSON.stringify(stock1)}`);
    console.log(`${orders1 === SEED_ORDERS ? 'PASS' : 'FAIL'} 訂單數 ${orders1}`);
    console.log(`${carts1 === 0 ? 'PASS' : 'FAIL'} user、admin 購物車清空（${carts1} 列）`);
    console.log(`${chat1 === chatRows0 ? 'PASS' : 'FAIL'} user 長期記憶列數 ${chat1}（開始前 ${chatRows0}）`);
    if (!okStock || orders1 !== SEED_ORDERS || carts1 !== 0 || chat1 !== chatRows0) fail++;
  } catch (e) {
    console.error('清理過程發生例外：', e);
    fail++;
  }
}
// 單張大小檢查
for (const [name, kb] of Object.entries(sizes)) {
  if (kb >= 300) { console.log(`FAIL ${name} ${kb} KB 超過 300 KB`); fail++; }
}
console.log(`截圖：${Object.keys(sizes).length} 張${WITH_AI ? (aiOk ? '（含 AI 客服）' : '（AI 客服未擷取）') : '（略過 AI 客服）'}`);
console.log(fail ? `結果：${fail} 項失敗` : 'ALL PASS');
process.exit(fail ? 1 : 0);
