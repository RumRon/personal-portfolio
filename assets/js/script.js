'use strict';

// Sidebar disclosure.
const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');
if (sidebar && sidebarButton) {
  sidebarButton.addEventListener('click', () => sidebar.classList.toggle('active'));
}

// Navigation targets never depend on the translated text.
const navigationLinks = [...document.querySelectorAll('[data-nav-link]')];
const pages = [...document.querySelectorAll('[data-page]')];
const targets = ['about', 'resume', 'research', 'personal interests', 'contact'];
navigationLinks.forEach((link, index) => {
  link.dataset.target = targets[index];
  link.addEventListener('click', () => {
    const target = link.dataset.target;
    pages.forEach(page => page.classList.toggle('active', page.dataset.page === target));
    navigationLinks.forEach(item => item.classList.toggle('active', item === link));
    window.scrollTo({ top: 0, behavior: 'auto' });
  });
});

// English is the source language. Only visible text nodes are translated;
// links, image sources, markup and accordion states are never replaced.
const translations = {
  'Urban Planning PhD Student': '城市与区域规划博士生',
  'Show Contacts': '显示联系方式',
  'About': '关于',
  'Resume': '简历',
  'Research': '研究',
  'Personal Interests': '个人兴趣',
  'Contact': '联系',
  'About Me': '关于我',
  "Hi, I'm Rui Jiang, a PhD student in Urban and Regional Planning at the University of Florida. My interests lie at the intersection of urban analytics, artificial intelligence, sustainability, and the built environment.": '你好，我是 Rui Jiang，佛罗里达大学城市与区域规划专业的博士生。我的研究兴趣聚焦于城市分析、人工智能、可持续发展与建成环境的交叉领域。',
  'I am a member of': '我是',
  ', led by Dr. Yan Wang. My academic background spans environmental science, geospatial analysis, and urban planning.': '的成员，实验室由 Yan Wang 博士领导。我的学术背景涵盖环境科学、地理空间分析和城市规划。',
  'Here you can explore my background, selected completed projects, and interests beyond research.': '在这里，你可以了解我的学术经历、已完成的部分项目，以及研究之外的兴趣。',
  'Areas of Interest': '研究兴趣',
  'Urban Analytics & GIS': '城市分析与地理信息系统',
  'Data-informed approaches to understanding cities and communities.': '通过数据驱动的方法理解城市与社区。',
  'AI & Computational Methods': '人工智能与计算方法',
  'Exploring computational approaches to urban challenges.': '探索解决城市问题的计算方法。',
  'Urban Resilience & Infrastructure': '城市韧性与基础设施',
  'Understanding the adaptability of built and social systems.': '理解建成环境与社会系统的适应能力。',
  'Sustainability': '可持续发展',
  'Connecting environmental questions, cities, and planning.': '将环境议题与城市及规划实践联系起来。',
  'Education': '教育背景',
  'Experience': '工作与研究经历',
  'University of Florida': '佛罗里达大学',
  'University of Pennsylvania': '宾夕法尼亚大学',
  'Franklin and Marshall College': '富兰克林与马歇尔学院',
  '2025 — Present': '2025年至今',
  'Urban Analytics': '城市分析',
  'PhD student in Urban and Regional Planning': '城市与区域规划博士生',
  'Master of Science in Applied Geosciences': '应用地球科学理学硕士',
  'Environmental Science': '环境科学',
  'Market Analyst & ESG Specialist': '市场分析师与 ESG 专员',
  'Technical Director': '技术总监',
  'Sustainability Intern': '可持续发展实习生',
  'Research Assistant': '研究助理',
  'Eco-friendly materials': '环保材料',
  'The Water Center at Penn': '宾夕法尼亚大学水研究中心',
  'My skills': '专业技能',
  'Research & Selected Projects': '研究与精选项目',
  'Selected completed research and geospatial coursework projects.': '部分已完成的研究项目和地理空间分析课程作品。',
  'Previous Research': '既往研究',
  'Delaware River Water Quality & Recreational Suitability ↗': '特拉华河水质与休闲活动适宜性 ↗',
  'Read final report (PDF)': '阅读最终报告（PDF）',
  'Water Center project ↗': '水研究中心项目 ↗',
  'Wet Weather Management & BMP Selection ↗': '湿天气管理与最佳管理措施（BMP）选择 ↗',
  'Water Center project page': '水研究中心项目页面',
  'Ballast Rock Provenance in East Mozambique': '莫桑比克东部压舱石来源研究',
  'Earlier geoscience research using fieldwork and geochemical analysis': '通过野外调查与地球化学分析开展的早期地球科学研究',
  'Selected Geospatial Coursework': '精选地理空间课程项目',
  'Forecasting Flood Inundation ↗': '洪水淹没预测 ↗',
  'Transit-Oriented Development in San Francisco ↗': '旧金山公共交通导向开发 ↗',
  'Predictive Policing for Chicago ↗': '芝加哥预测性警务分析 ↗',
  'Predicting Housing Prices in Mecklenburg County ↗': '梅克伦堡县房价预测 ↗',
  'Targeting a Housing Subsidy ↗': '住房补贴目标区域识别 ↗',
  'Space-Time Prediction of Bike Share Demand ↗': '共享单车需求时空预测 ↗',
  'View full project report': '查看完整项目报告',
  'MSAG Capstone': '应用地球科学硕士毕业项目',
  'For academic correspondence:': '学术联系邮箱：',
  'Beyond Research': '研究之外',
  'A collection of places, pets, books, movies, and games I enjoy. I will keep adding photos, favorites, and stories over time.': '这里记录我喜欢的城市、宠物、书籍、电影和游戏。以后还会陆续添加照片、收藏和故事。',
  'Cities Through My Eyes': '我眼中的城市',
  '8 cities': '8 座城市',
  'A growing collection of cities, photographs, and personal observations.': '持续收集城市照片与个人观察。',
  'Photos and personal city notes coming soon.': '城市照片和随笔将陆续更新。',
  'Wenzhou, China': '中国温州',
  'Shanghai, China': '中国上海',
  'Taiyuan, China': '中国太原',
  'Lancaster, PA': '宾夕法尼亚州兰开斯特',
  'Philadelphia, PA': '宾夕法尼亚州费城',
  'Boston, MA': '马萨诸塞州波士顿',
  'Gainesville, FL': '佛罗里达州盖恩斯维尔',
  'Orlando, FL': '佛罗里达州奥兰多',
  'Pets': '宠物',
  '4 companions': '4 位小伙伴',
  'Meet the pets who have been part of my life.': '认识这些陪伴过我的小伙伴。',
  'Books': '书籍',
  'Currently reading': '正在阅读',
  'Books I love and titles on my reading list. Reviews and favorites will be added here.': '我喜欢的书与阅读清单，之后也会添加读书笔记。',
  'Currently Reading': '正在读',
  'Tokio — Keigo Higashino': '《时生》— 东野圭吾',
  'Reading List': '阅读清单',
  '3 entries': '3 项',
  'To Live — Yu Hua': '《活着》— 余华',
  'The Three-Body Problem — Liu Cixin': '《三体》— 刘慈欣',
  'Detective Kaga Series — Keigo Higashino': '加贺恭一郎系列 — 东野圭吾',
  'Movies': '电影',
  '1 movie': '1 部电影',
  'Favorite films, memorable stories, and movies I want to watch.': '喜欢的电影、难忘的故事与想看的作品。',
  'Movie Collection': '电影收藏',
  'Confessions (2010) — dir. Tetsuya Nakashima': '《告白》（2010）— 导演：中岛哲也',
  'Gaming': '游戏',
  'Game library': '游戏库',
  'A growing collection of games I enjoy — from single-player adventures and co-op games to MMORPGs.': '记录我喜欢的游戏，包括单人冒险、多人合作游戏和大型多人在线角色扮演游戏。',
  'Currently Playing': '正在玩',
  '🏆 = All achievements unlocked': '🏆 = 已解锁全部成就',
  'Single-player Games': '单人游戏',
  'Multiplayer Games': '多人游戏',
  '3 games': '3 款游戏',
  '7 games': '7 款游戏',
  '100% achievements': '100% 成就',
  'All achievements unlocked': '已解锁全部成就'
};

// Capture each text node's original English once, then switch either way.
const nodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement && node.parentElement.closest('script, style, noscript')) continue;
  const raw = node.nodeValue;
  const english = raw.trim();
  if (english && Object.prototype.hasOwnProperty.call(translations, english)) {
    nodes.push({ node, english, leading: raw.match(/^\s*/)[0], trailing: raw.match(/\s*$/)[0] });
  }
}
const languageButtons = [...document.querySelectorAll('[data-lang]')];
function setLanguage(lang) {
  const chinese = lang === 'zh';
  for (const item of nodes) {
    item.node.nodeValue = item.leading + (chinese ? translations[item.english] : item.english) + item.trailing;
  }
  document.documentElement.lang = chinese ? 'zh-CN' : 'en';
  document.title = chinese
    ? 'Rui Jiang | 城市规划与空间分析'
    : 'Rui Jiang | Urban Planning & Spatial Analytics';
  languageButtons.forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  try { localStorage.setItem('portfolio-language', lang); } catch (_) {}
}
languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
let initialLanguage = 'en';
try { if (localStorage.getItem('portfolio-language') === 'zh') initialLanguage = 'zh'; } catch (_) {}
setLanguage(initialLanguage);
