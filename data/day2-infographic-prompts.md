# Day 2 資訊圖卡 — GPT 生圖提示詞集

本文件整理第二天各章節的「概念隱喻圖卡」生圖提示詞，交給 GPT（DALL·E / GPT-4o 圖像生成）批次產生。

> **與 SVG 流程圖的分工**：需要精確箭頭、方框與中文標籤的流程圖已用手繪 SVG 完成（`assets/teaching-site/19~26-diagram-*.svg`）。
> 本文件的圖卡走「視覺隱喻」路線，負責建立直覺印象，**圖內不放文字**（AI 生圖的中文字幾乎必壞，英文也常出錯），中文說明由網頁文字承擔。

## 使用方式

1. 把「共用風格前綴」+「該章提示詞」串成一段，貼給 GPT 生圖。
2. **同一批次連續生成**，風格才會一致；分多天生成容易風格漂移。
3. 產出後依「目標檔名」存到 `teaching-site/assets/teaching-site/`，建議尺寸 1536×1024（橫式 3:2）。
4. 生成後把每張圖的最終提示詞回存到本文件（取代原稿），之後才能重生成或調整風格。

## 共用風格前綴（每張都要加在最前面）

```text
Flat vector illustration, soft pastel palette with indigo and sky-blue accents,
clean minimal composition, subtle gradients, no text, no letters, no words,
no human faces, no brand logos, consistent lighting, 3:2 landscape aspect ratio,
suitable as a concept card in a tech course website.
```

---

## 2-1 ChatClient「客服總機」隱喻卡

- **目標檔名**：`info-2-1-chatclient-switchboard.png`
- **用途**：放在「ChatClient 在架構中的位置」一節，比喻總機調度
- **提示詞**：

```text
A friendly retro telephone switchboard at the center of a desk, with glowing
cables routing incoming calls to three distinct destinations: a memory archive
drawer, a toolbox, and a bookshelf. The switchboard acts as a calm dispatcher
connecting everything. Isometric view, cozy and organized atmosphere.
```

## 2-2 「AI 用猜的 vs 工具查到的」對比卡

- **目標檔名**：`info-2-2-guess-vs-tool.png`
- **用途**：放在「工具呼叫的真正價值」一節，對比幻覺與即時資料
- **提示詞**：

```text
Split composition: left half shows a robot dreaming with a foggy thought bubble
full of question marks and blurry shapes; right half shows the same robot
confidently holding a magnifying glass connected by a glowing cable to a tidy
database cylinder with clear, organized items inside. Left side hazy and dim,
right side crisp and bright.
```

## 2-3 「開卷考試 vs 閉卷考試」隱喻卡

- **目標檔名**：`info-2-3-open-book-exam.png`
- **用途**：放在「RAG 的基本想法」一節，比喻檢索增強
- **提示詞**：

```text
Two desks side by side in an exam room. On the left desk, a robot answers with
a closed book pushed aside, sweating slightly, thought bubble hazy. On the
right desk, the same robot calmly answers with an open book, one finger on a
glowing highlighted paragraph, a small magnifying lamp illuminating the page.
Warm library lighting, encouraging mood.
```

## 2-4 MCP「標準插座」隱喻卡

- **目標檔名**：`info-2-4-mcp-universal-socket.png`
- **用途**：放在「MCP 應該怎麼理解」一節，比喻標準化接口
- **提示詞**：

```text
A universal power strip mounted on a wall, with several different stylized
devices (a laptop, a robot, a tablet, a terminal window shaped device) all
plugging into identical glowing sockets. Each plug is the same standardized
shape despite the devices being different. Clean isometric style, soft glow
around each connection point.
```

## 2-5 前端視覺四要素卡

- **目標檔名**：`info-2-5-uiux-elements.png`
- **用途**：放在「uiuxpromax 前端視覺優化指引」一節
- **提示詞**：

```text
Four floating glassmorphism cards arranged in a 2x2 grid against a soft
aurora gradient background (indigo to purple): one card shows frosted
translucent glass texture, one shows a gradient sunrise banner, one shows a
card gently lifting with a soft shadow as if hovering, one shows a shimmering
grey skeleton placeholder with a subtle sweep of light. Dreamy, polished UI
aesthetic, depth of field.
```

## 2-6 SSE「單行道郵差」隱喻卡

- **目標檔名**：`info-2-6-sse-postman.png`
- **用途**：放在「為什麼選擇 SSE」一節，比喻單向持續推送
- **提示詞**：

```text
A cheerful delivery robot riding a one-way conveyor lane from a server tower
to a house with a browser-window shaped door, carrying a continuous stream of
small glowing envelopes one after another. The lane has one-way arrows built
into its surface. In the background, a separate two-way double road appears
heavier and more complex, slightly faded. Light, playful tone.
```

## 2-7 「短期便利貼 vs 長期圖書館」記憶對比卡

- **目標檔名**：`info-2-7-memory-library.png`
- **用途**：放在「為什麼需要對話歷史 RAG」一節
- **提示詞**：

```text
Split scene: left side shows a small desk lamp illuminating a few sticky notes
on a monitor edge, some notes curling and falling off; right side shows a vast
warm library with organized glowing book spines stretching into the distance,
a small robot librarian retrieving one glowing book from a high shelf with a
ladder. Contrast between fragile short-term notes and durable long-term
archive.
```

## 2-8 「兩天登頂」學習路徑地圖卡

- **目標檔名**：`info-2-8-learning-summit.png`
- **用途**：放在「Day 1 / Day 2 學習路徑回顧」一節
- **提示詞**：

```text
A stylized mountain trail map viewed at a gentle angle: the lower slope has
sturdy stone steps and foundation structures (gears, database cylinders,
scaffolding) representing engineering groundwork; the upper slope features
glowing AI elements (sparkles, neural orbs, chat bubbles) leading to a summit
flag overlooking a small city of connected services. A clear winding path
connects bottom to top with milestone markers along the way. Hopeful sunrise
palette.
```

---

## 生成後的串接方式

每張圖卡生成並放入 `assets/teaching-site/` 後，在 `course-data.js` 對應章節的 section 加上：

```js
image: 'assets/teaching-site/info-2-X-xxx.png',
imageAlt: '（該圖的中文說明）',
imageCaption: '（一句話點出隱喻與本章概念的對應）',
```

> 注意：renderer 每個 section 只支援一張 `image`，若目標 section 已有圖（如 2-2「工具呼叫的真正價值」已掛派工圖），改掛到該章其他相關 section。
