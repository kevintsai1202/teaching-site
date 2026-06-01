# Learn Spring - Teaching Site 開發手冊 (CLAUDE.md)

本專案是 learn-spring 的前端教學靜態網站，提供課程大綱與相關教學資料。

## 🛠️ 開發環境要求

- **Node.js**: 建議 v18+
- **瀏覽器**: 現代瀏覽器 (Chrome, Firefox, Edge, Safari)

---

## 🚀 常用指令 (PowerShell 7+ 相容)

### 啟動本機開發伺服器
使用 `npx serve` 啟動靜態伺服器來預覽網站：
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
├── CLAUDE.md           # 本前端開發手冊
├── course-data.js      # 課程資料與大綱 JSON 數據
├── index.html          # 教學網站主入口頁面
├── package.json        # 專案套件配置 (含有 serve 腳本)
└── .gitignore          # Git 忽略設定
```
