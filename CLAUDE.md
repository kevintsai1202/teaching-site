# Learn Spring - 前端教學網站開發手冊 (CLAUDE.md)

本目錄為本課程的前端教學靜態網站，提供課程大綱與相關教學導覽，並包含 React SSE 聊天對話範例的教學代碼。

## 🛠️ 開發環境要求

- **Node.js**: 建議 v18+
- **瀏覽器**: 現代瀏覽器 (Chrome, Firefox, Edge, Safari)

---

## 🚀 常用指令 (PowerShell 7+ 相容)

### 啟動本機開發伺服器
使用 `npx serve` 啟動靜態伺服器來預覽教學網站：
```powershell
# 安裝依賴 (若有需要)
npm install

# 啟動伺服器
npm run serve
```
伺服器啟動後預設會在 `http://localhost:3000` (或其它可用埠) 運行。

---

## 📂 專案架構概覽

```
d:\GitHub\learn-spring\teaching-site\
├── assets/             # 靜態資源 (CSS, 圖片, 字型等)
├── CLAUDE.md           # 本開發手冊
├── course-data.js      # 課程資料與大綱 JSON 數據 (包含 React 聊天室與 CSS 範例)
├── index.html          # 教學網站主入口頁面
├── package.json        # 專案套件配置 (含有 serve 腳本)
└── .gitignore          # Git 忽略設定
```

---

## 🎨 前端程式開發規範

1. **中文註解要求**：所有範例程式碼（如 `course-data.js` 中提供的 `ChatRoom.jsx` 元件）皆須具備清晰的**中文函式級別註解**與變數註解，以便利學員理解。
2. **單一任務原則**：不進行無意義的過度開發，維持前端元件代碼之純淨與對應教學主題的聚焦度。
3. **路徑參照**：前端靜態頁面所引用之教學文檔，皆參照自根目錄下的 `docs/` 資料夾，在維護網站連結時請務必確認路徑正確。
