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
        category: '进阶知识',
        icon: 'fas fa-book-open',
        iconClass: 'icon-advanced',
        categoryClass: 'category-advanced',
        desc: '从零开始认识 Markdown 格式，掌握常见语法、应用场景和工具推荐，为高效使用 AI 办公打下基础。',
        author: '韩午',
        date: '2025-06-24',
        path: 'chapters/chapter_00_ai_basics.html'
    },
    {
        id: 'chapter_01',
        title: 'WorkBuddy 介绍：免费带你入门AI工具，你的第一个高智商高学历数字手下',
        category: '入门',
        icon: 'fas fa-rocket',
        iconClass: 'icon-tips',
        categoryClass: 'category-tips',
        desc: '从下载安装、账号配置、核心功能、计费模式、模型选择到进阶技巧，零基础全面了解 WorkBuddy 桌面智能体。',
        author: '韩午',
        date: '2026-06-25',
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
        author: '韩午',
        date: '2026-06-25',
        path: 'chapters/chapter_02_document.html'
    },
    {
        id: 'chapter_03',
        title: '数据分析实战：Excel 与图表自动化',
        category: '数据分析',
        icon: 'fas fa-chart-bar',
        iconClass: 'icon-data',
        categoryClass: 'category-data',
        desc: '利用 WorkBuddy 自动化处理 Excel 数据、生成专业图表，从数据清洗到业务洞察，让数据分析不再繁琐。',
        author: '韩午',
        date: '2026-06-25',
        path: 'chapters/chapter_03_data.html'
    }
];

// ===== 渲染章节卡片（倒序排列，最新在前） =====
function renderChapters(filter = 'all') {
    const grid = document.getElementById('chapters-grid');
    if (!grid) return;

    // 按日期倒序排列（最新在前）
    const sorted = [...chapters].sort((a, b) => b.date.localeCompare(a.date));

    const filtered = filter === 'all'
        ? sorted
        : sorted.filter(c => c.category === filter);

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

// ===== 动态生成筛选按钮（自动从章节数据提取分类） =====
function initFilters() {
    const container = document.querySelector('.filter-options');
    if (!container) return;

    // 从章节数据提取所有不重复的分类
    const categories = [...new Set(chapters.map(c => c.category))];

    // 构建筛选按钮 HTML（"全部" + 各分类）
    container.innerHTML = `
        <button class="filter-btn active" data-filter="all">全部</button>
        ${categories.map(cat => `
            <button class="filter-btn" data-filter="${cat}">${cat}</button>
        `).join('')}
    `;

    // 绑定点击事件
    container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderChapters(btn.dataset.filter);
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
