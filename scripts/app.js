/**
 * AI应用分享 - 主应用脚本
 * 负责章节列表渲染、筛选和统计功能
 */

// ===== 章节数据 =====
// 每增加一个新章节，只需在这里添加数据对象即可
const chapters = [
    {
        id: 'chapter_00',
        title: 'AI应用基础知识：认识Markdown格式',
        category: '入门指南',
        icon: 'fas fa-book-open',
        iconClass: 'icon-tips',
        categoryClass: 'category-tips',
        desc: '从零开始认识 Markdown 格式，掌握常见语法、应用场景和工具推荐，为高效使用 AI 办公打下基础。',
        author: '韩午',
        date: '2025-06-24',
        path: 'chapters/chapter_00_ai_basics.html'
    },
    {
        id: 'chapter_01',
        title: '快速上手：WorkBuddy 基础操作指南',
        category: '办公技巧',
        icon: 'fas fa-rocket',
        iconClass: 'icon-tips',
        categoryClass: 'category-tips',
        desc: '从零开始了解 WorkBuddy 的核心功能和界面布局，掌握基本的文件操作、工具调用和任务管理技巧，为高效办公打下基础。',
        author: '团队知识库',
        date: '2025-06-24',
        path: 'chapters/chapter_01_quickstart.html'
    },
    {
        id: 'chapter_02',
        title: '文档智能处理：让 AI 帮你写报告',
        category: '文档处理',
        icon: 'fas fa-file-alt',
        iconClass: 'icon-docs',
        categoryClass: 'category-docs',
        desc: '掌握利用 WorkBuddy 智能处理文档的核心技巧，从报告撰写到格式转换，让 AI 成为你最得力的文档助手。',
        author: '团队知识库',
        date: '2025-06-24',
        path: 'chapters/chapter_02_document.html'
    },
    {
        id: 'chapter_03',
        title: '数据分析实战：Excel 与图表自动化',
        category: '数据分析',
        icon: 'fas fa-chart-bar',
        iconClass: 'icon-data',
        categoryClass: 'category-data',
        desc: '利用 WorkBuddy 自动化处理 Excel 数据、生成专业图表，并从中提取有价值的业务洞察。',
        author: '团队知识库',
        date: '2025-06-24',
        path: 'chapters/chapter_03_data.html'
    }
];

// ===== 渲染章节卡片 =====
function renderChapters(filter = 'all') {
    const grid = document.getElementById('chapters-grid');
    if (!grid) return;

    const filtered = filter === 'all'
        ? chapters
        : chapters.filter(c => c.category === filter);

    grid.innerHTML = filtered.map(chapter => `
        <article class="chapter-card" data-category="${chapter.category}" onclick="location.href='${chapter.path}'">
            <div class="card-header">
                <div class="card-icon ${chapter.iconClass}">
                    <i class="${chapter.icon}"></i>
                </div>
                <span class="card-category ${chapter.categoryClass}">${chapter.category}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${chapter.title}</h3>
                <p class="card-desc">${chapter.desc}</p>
                <div class="card-meta">
                    <span><i class="fas fa-user"></i> ${chapter.author}</span>
                    <span><i class="fas fa-calendar"></i> ${chapter.date}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// ===== 更新统计信息 =====
function updateStats() {
    const chapterCount = document.getElementById('chapter-count');
    const categoryCount = document.getElementById('category-count');

    if (chapterCount) {
        chapterCount.textContent = chapters.length;
    }

    if (categoryCount) {
        const categories = new Set(chapters.map(c => c.category));
        categoryCount.textContent = categories.size;
    }
}

// ===== 筛选功能 =====
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 渲染对应分类
            const filter = btn.dataset.filter;
            renderChapters(filter);
        });
    });
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    renderChapters();
    updateStats();
    initFilters();

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
