# 教學網站編排稽核報告 — 2026-06-10 02:25

## Summary
- 課程結構：2 天、17 章
- ✅ 全部單元 source 文件存在
- ✅ 全部圖片參照可解析
- ⚠️ 未被網站引用的 docs 文件 5 份
- ✅ 資產圖檔全數被引用
- ✅ unit / task ID 無重複
- ⚠️ 章節編號與檔名漂移 2 筆

## ❌ Errors（很可能在線上是壞的）
（無）

## ⚠️ Warnings（需人工判斷）
### 章節編號 vs 檔名漂移
- ⚠️ d2-u6 章節編號 `2-6` 與檔名 `docs/Day2-5-React-SSE.md` 編號不一致
- ⚠️ d2-u7 章節編號 `2-7` 與檔名 `docs/Day2-6-ChatHistory-RAG.md` 編號不一致
### 未被網站引用的 docs 文件
- ⚠️ docs/AI協作開發實戰-課程大綱.md
- ⚠️ docs/README.md
- ⚠️ docs/Spring AI 企業應用開發實戰-課程大綱.md
- ⚠️ docs/教學文件用語統一表.md
- ⚠️ docs/教學網站規劃.md
### 未被引用的資產圖檔
（無）
### 雙圖庫差異（docs/images vs assets/teaching-site）
- 只在 docs/images：（無）
- 只在 assets/teaching-site：05-ch05-api-docs.png, 06-ch06-global-exception.png, 07-ch07-logging.png, 07-logging-diagram.svg, 08-ch08-aop.png, 09-ch09-spring-security.png, 10-ch10-react-intro.png, 11-ch11-react-sse-chat.png, 12-ch12-chat-history-rag.png, demo-ai-chat.png, demo-order-history.png, demo-product-query.png, demo-rag-recommend.png

## ℹ️ 章節內容覆蓋統計
| 章 | 標題 | Hero圖 | 架構圖 | 段落圖數 | 段落數 | 任務數 | 評級 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1-1 | 開發環境與 AI 協作設定 | ✅ | ✅ | 1 | 11 | 5 | ✅ |
| 1-2 | Spring MVC 與 REST API 基礎 | ✅ | ✅ | 1 | 18 | 3 | ✅ |
| 1-3 | Docker Desktop、PostgreSQL 18 與 Flyway | ✅ | ✅ | 1 | 13 | 3 | ✅ |
| 1-4 | Spring Data JPA 與 Entity 映射 | ✅ | ✅ | 1 | 32 | 3 | ✅ |
| 1-5 | API 文件（Swagger / SpringDoc OpenAPI） | ✅ | ✅ | 0 | 6 | 3 | ✅ |
| 1-6 | 全域例外處理（Global Exception Handler） | ✅ | ✅ | 0 | 6 | 3 | ✅ |
| 1-7 | 結構化 Log 與動態調整 | ✅ | ✅ | 0 | 5 | 2 | ✅ |
| 1-8 | AOP 橫切關注點（Spring 核心機制） | ✅ | ❌ | 1 | 7 | 2 | ✅ |
| 1-9 | Spring Security 基礎認證與授權 | ✅ | ❌ | 0 | 8 | 3 | ⚠️ |
| 2-1 | Spring AI 與 ChatClient 基礎 | ✅ | ✅ | 1 | 11 | 3 | ✅ |
| 2-2 | 工具呼叫 | ✅ | ✅ | 1 | 10 | 3 | ✅ |
| 2-3 | RAG 與向量資料庫 | ✅ | ✅ | 1 | 9 | 3 | ✅ |
| 2-4 | 擴充AI能力：MCP 與 Skills | ✅ | ✅ | 0 | 9 | 3 | ✅ |
| 2-5 | React 快速入門與前端優化指引 | ✅ | ❌ | 0 | 4 | 4 | ⚠️ |
| 2-6 | React 聊天室與 SSE 串流式對話實戰 | ✅ | ❌ | 4 | 11 | 3 | ✅ |
| 2-7 | 對話歷史向量化與 RAG 檢索 | ✅ | ❌ | 0 | 4 | 3 | ⚠️ |
| 2-8 | 課程總結與完整系統驗證 | ✅ | ✅ | 1 | 7 | 4 | ✅ |