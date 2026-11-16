// 2-1 串流驗證指令實測（有斷言，失敗時非零 exit；會真的呼叫模型）
// 用途：從 course-data.js 的 2-1 提示詞取出「登入取得 $token」與「curl.exe POST 串流」兩行指令，原樣寫進暫存 .ps1，
//       用 PowerShell 7 對執行中的後端（預設 http://localhost:8080）執行，確認引號與中文編碼正確：
//       回覆分成多筆 data: 陸續出現、結尾有 data:[DONE]，且模型有回答到問題（回覆提到「客服」）。
// 前置：後端已啟動並設好模型金鑰；示範帳號 user / user123
// 執行：node scripts/verify-ps-stream-command.mjs
import { execFileSync } from 'node:child_process';
import assert from 'node:assert';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const SITE = path.resolve(import.meta.dirname, '..');
global.window = {};
await import('file://' + path.join(SITE, 'course-data.js').replace(/\\/g, '/'));
const unit = window.COURSE.days.flatMap((d) => d.units).find((u) => u.chapter === '2-1');
// 2-1 的 AI Agent 提示詞（內含 PowerShell 驗證指令）
const prompt = unit.sections.map((s) => s.code?.content || '').find((c) => c.includes('完成後請用 PowerShell 7 驗證串流'));
assert.ok(prompt, '找不到 2-1 含 PowerShell 驗證指令的提示詞');
const lines = prompt.split('\n');
// 登入指令與串流指令（各自必須唯一）
const login = lines.filter((l) => l.startsWith('$token = (Invoke-RestMethod'));
const stream = lines.filter((l) => l.includes('curl.exe -N -X POST'));
assert.strictEqual(login.length, 1, `登入指令應有 1 行，實際 ${login.length}`);
assert.strictEqual(stream.length, 1, `串流指令應有 1 行，實際 ${stream.length}`);
console.log('登入指令：' + login[0]);
console.log('串流指令：' + stream[0]);

// 原樣寫進暫存腳本（UTF-8 含 BOM，Windows PowerShell 與 pwsh 都能正確讀中文）
const ps1 = path.join(os.tmpdir(), 'verify-ps-stream-command.ps1');
fs.writeFileSync(ps1, '﻿' + ['[Console]::OutputEncoding = [Text.Encoding]::UTF8', login[0], stream[0]].join('\r\n'), 'utf8');
const out = execFileSync('pwsh', ['-NoProfile', '-File', ps1], { encoding: 'utf8', timeout: 180_000 });
fs.rmSync(ps1, { force: true });

const dataLines = out.split(/\r?\n/).filter((l) => l.startsWith('data:'));
const reply = dataLines.map((l) => l.slice(5)).filter((t) => t !== '[DONE]').join('');
console.log(`收到 ${dataLines.length} 筆 data:，回覆：${reply}`);
assert.ok(dataLines.length >= 3, `data: 筆數太少（${dataLines.length}），看不出逐段輸出`);
assert.strictEqual(dataLines.at(-1), 'data:[DONE]', '最後一筆不是 data:[DONE]');
assert.ok(reply.includes('客服'), '回覆沒有提到「客服」，問題可能沒有正確送達（引號或編碼錯誤）');
console.log('PASS 2-1 的 PowerShell 7 串流驗證指令可原樣執行，中文問題正確送達');
