# AI-Knowledge-Sharing
AI-Knowledge-Sharing  AI知识分享
# AI应用分享 - AI 各种工具 日常办公实战教程

> 一个持续更新的 AI 办公实战教程站点，帮助团队成员快速掌握 WorkBuddy 在日常工作中的应用技巧。

---

## 项目结构

```
AI应用分享/
├── index.html                          # 总目录页（首页）
├── README.md                           # 项目说明文档
├── styles/
│   └── main.css                        # 全局样式
├── scripts/
│   └── app.js                          # 首页交互逻辑（筛选、渲染）
├── chapters/
│   ├── chapter_00_ai_basics.md         # 章节0：Markdown 草稿
│   ├── chapter_00_ai_basics.html       # 章节0：HTML 最终版
│   ├── chapter_01_quickstart.md        # 章节1：Markdown 草稿
│   ├── chapter_01_quickstart.html      # 章节1：HTML 最终版
│   ├── chapter_02_document.md          # 章节2：Markdown 草稿
│   ├── chapter_02_document.html        # 章节2：HTML 最终版
│   ├── chapter_03_data.md              # 章节3：Markdown 草稿
│   └── chapter_03_data.html            # 章节3：HTML 最终版
└── assets/
    └── images/                         # 图片资源（预留）
```

---

## 工作流程

### 新增章节的步骤

1. **创建 Markdown 草稿**
   - 在 `chapters/` 目录下新建 `.md` 文件
   - 使用标准 Markdown 格式记录内容
   - 文件命名规范：`chapter_XX_主题.md`

2. **讨论确认**
   - 与团队成员讨论 Markdown 内容
   - 根据反馈修改完善
   - 确认内容无误后再生成 HTML

3. **生成 HTML 页面**
   - 基于 `chapter_XX_主题.md` 创建 `chapter_XX_主题.html`
   - 使用统一的章节详情页模板
   - 确保包含：标题、类别、标签、简介、作者、时间

4. **更新首页数据**
   - 编辑 `scripts/app.js`
   - 在 `chapters` 数组中添加新章节数据
   - 首页会自动渲染新的章节卡片

---

## 章节信息规范

每个章节卡片包含以下信息：

| 字段 | 说明 | 示例 |
|------|------|------|
| id | 唯一标识 | chapter_01 |
| title | 章节标题 | 快速上手：WorkBuddy 基础操作指南 |
| category | 类别分类 | 办公技巧 / 文档处理 / 数据分析 / 自动化 |
| icon | FontAwesome 图标 | fas fa-rocket |
| desc | 简介描述 | 从零开始了解 WorkBuddy 的核心功能 |
| author | 作者 | 团队知识库 |
| date | 发布时间 | 2025-06-24 |
| path | HTML 文件路径 | chapters/chapter_01_quickstart.html |

---

## 本地预览

直接在浏览器中打开 `index.html` 即可预览效果。

或者使用本地服务器：

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# 然后访问 http://localhost:8000
```

---

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式设计（响应式、Flexbox、Grid）
- **JavaScript (ES6+)** - 交互逻辑
- **FontAwesome** - 图标库
- **无框架依赖** - 纯原生实现，轻量快速

---

## 当前章节

| # | 章节 | 类别 | 状态 |
|---|------|------|------|
| 0 | AI应用基础知识：认识Markdown格式 | 入门指南 | 已完成 |
| 1 | 快速上手：WorkBuddy 基础操作指南 | 办公技巧 | 已完成 |
| 2 | 文档智能处理：让 AI 帮你写报告 | 文档处理 | 已完成 |
| 3 | 数据分析实战：Excel 与图表自动化 | 数据分析 | 已完成 |

---

## 待更新内容

- [ ] 自动化工作流搭建
- [ ] 高级数据建模
- [ ] 团队协作与共享
- [ ] 自定义技能开发

---

## 贡献方式

1. 在 `chapters/` 目录下创建新的 Markdown 文件
2. 按照模板格式填写章节内容
3. 提交讨论，确认后转换为 HTML
4. 更新 `scripts/app.js` 中的章节数据

---

*AI应用分享 © 2025 - 持续更新中*
