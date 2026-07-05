const siteData = {
  categories: [
    { name: "日韩精选", count: "186 部", desc: "日韩电影与剧集精选内容" },
    { name: "韩剧热播", count: "128 部", desc: "都市、爱情、悬疑与复仇剧集" },
    { name: "日剧推荐", count: "96 部", desc: "治愈、推理、职场与生活故事" },
    { name: "动作冒险", count: "84 部", desc: "动作、犯罪、追逐与冒险题材" },
    { name: "悬疑犯罪", count: "78 部", desc: "推理、心理、刑侦和反转故事" },
    { name: "爱情治愈", count: "72 部", desc: "温情、青春、家庭与浪漫叙事" },
    { name: "喜剧综艺", count: "65 部", desc: "喜剧、综艺、旅行与美食节目" },
    { name: "动漫动画", count: "58 部", desc: "日本动画、剧场版与奇幻作品" }
  ],
  movies: [
    ["大逃狱", "喜剧综艺", "日本", "2026", "9.1", "高清", "越狱题材与黑色幽默交织，节奏轻快又有荒诞感。"],
    ["柏林迷宫", "悬疑犯罪", "韩国", "2025", "8.9", "高清", "多线叙事的城市谜案，线索在一座旧建筑中逐渐合拢。"],
    ["天堂的贿赂", "日韩精选", "韩国", "2025", "8.8", "全 12 集", "一场交易牵出政商暗线，人物命运在道德边界上摇摆。"],
    ["边境前缘", "动作冒险", "日本", "2024", "8.6", "高清", "边境追逐、身份伪装与救援行动构成紧张故事。"],
    ["静默之下", "悬疑犯罪", "韩国", "2026", "9.0", "更新至 8 集", "小镇沉默多年，一段旧录音让隐藏关系浮出水面。"],
    ["鹿鼎记2：神龙教", "动作冒险", "香港", "经典", "8.5", "高清", "经典喜剧武侠条目，适合作为怀旧片单入口。"],
    ["超越终结者", "动作冒险", "日本", "2025", "8.4", "高清", "科幻动作与未来都市设定结合，视觉节奏强。"],
    ["巴黎妓院回忆录", "日韩精选", "法国", "经典", "8.2", "高清", "异域影像与人物记忆交错，适合文艺频道收录。"],
    ["狱中囚徒", "悬疑犯罪", "韩国", "2024", "8.7", "全 10 集", "封闭空间里的心理博弈，人物关系不断反转。"],
    ["大宋有奇案", "悬疑犯罪", "大陆", "2026", "8.3", "更新至 16 集", "古装推理题材，可作为亚洲剧集扩展内容。"],
    ["外星第九号计划", "动漫动画", "日本", "2025", "8.1", "高清", "复古科幻气质的奇想故事，适合夜间片单。"],
    ["奇门斗法", "动作冒险", "香港", "经典", "8.0", "高清", "奇幻动作与民俗元素结合的类型片。"],
    ["红色猎杀", "悬疑犯罪", "韩国", "2025", "8.6", "全 8 集", "追踪、卧底与复仇线并行，悬念推进稳定。"],
    ["杜拉拉升职记", "爱情治愈", "大陆", "经典", "7.9", "高清", "职场成长与都市情感题材，适合轻松频道。"],
    ["大话西游终结篇", "喜剧综艺", "香港", "经典", "8.4", "高清", "经典喜剧幻想条目，适合作为怀旧推荐。"],
    ["金银死", "悬疑犯罪", "日本", "2024", "8.2", "高清", "金钱、人性与旧案重叠，故事有冷峻质感。"],
    ["莫罗博士的岛", "日韩精选", "日本", "经典", "8.1", "高清", "怪诞科幻与孤岛设定，适合专题收录。"],
    ["合家春", "爱情治愈", "韩国", "2026", "8.3", "更新至 6 集", "家庭关系和温情喜剧结合，整体轻松耐看。"],
    ["赤月", "动漫动画", "日本", "2025", "8.8", "更新至 12 集", "月色传说与少年冒险展开，画面风格鲜明。"],
    ["红盾先锋", "动作冒险", "韩国", "2024", "8.0", "高清", "城市行动小队题材，剧情紧凑直接。"],
    ["爱情魔发师", "爱情治愈", "台湾", "经典", "7.8", "高清", "轻喜剧爱情内容，适合青春怀旧入口。"],
    ["等到烟暖雨收第二季", "爱情治愈", "大陆", "2025", "8.2", "全 24 集", "古风爱情与人物成长线结合，适合剧集片库。"],
    ["我爱推理", "喜剧综艺", "韩国", "2026", "8.5", "更新至 9 期", "明星推理综艺，轻松又有参与感。"],
    ["战国妖姬", "日剧推荐", "日本", "经典", "8.6", "高清", "历史、女性命运与时代变迁交织的经典条目。"],
    ["天相", "韩剧热播", "韩国", "2026", "9.2", "更新至 10 集", "命理悬疑与财阀暗线结合，热度持续上升。"],
    ["未来忍者 庆云机忍外传", "动漫动画", "日本", "经典", "8.1", "高清", "特摄、忍者和机甲元素融合的风格化作品。"],
    ["怪兽婆婆", "喜剧综艺", "韩国", "2025", "8.0", "全 16 集", "家庭喜剧设定，人物冲突轻松有记忆点。"],
    ["直到世界末日", "爱情治愈", "日本", "2024", "8.7", "高清", "末日背景下的爱情与告别故事，情绪细腻。"]
  ].map((item, index) => ({
    id: index,
    title: item[0],
    category: item[1],
    region: item[2],
    year: item[3],
    score: item[4],
    status: item[5],
    intro: item[6],
    image: `https://picsum.photos/seed/rihan-${index + 11}/640/900`
  }))
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function card(movie) {
  return `
    <article class="poster-card" data-search="${[movie.title, movie.category, movie.region, movie.year, movie.status].join(" ")}">
      <a href="detail.html?id=${movie.id}">
        <div class="poster-art">
          <img src="${movie.image}" alt="${movie.title}" loading="lazy">
          <span class="badge">${movie.category}</span>
          <span class="score">${movie.score}</span>
        </div>
        <div class="poster-body">
          <h3>${movie.title}</h3>
          <p>${movie.region} · ${movie.year} · ${movie.status}</p>
        </div>
      </a>
    </article>`;
}

function renderHero(target) {
  const [main, sideA, sideB] = siteData.movies;
  target.innerHTML = `
    <article class="hero-main">
      <img src="${main.image}" alt="${main.title}">
      <div class="hero-copy">
        <span class="tag">本周推荐</span>
        <h1>${main.title}</h1>
        <p>${main.intro}</p>
        <div class="hero-actions"><a class="button light" href="detail.html?id=${main.id}">立即观看</a><a class="button" href="movies.html">进入片库</a></div>
      </div>
    </article>
    <aside class="hero-side">
      ${[sideA, sideB].map(movie => `
        <a class="hero-side-card" href="detail.html?id=${movie.id}">
          <img src="${movie.image}" alt="${movie.title}">
          <div class="hero-copy"><span class="tag">${movie.category}</span><h3>${movie.title}</h3></div>
        </a>`).join("")}
    </aside>`;
}

function renderMovies(target, movies) {
  target.innerHTML = movies.map(card).join("");
}

function renderCategories(target) {
  target.innerHTML = siteData.categories.map(category => `
    <a class="category-card" href="movies.html?category=${encodeURIComponent(category.name)}">
      <strong>${category.name}</strong>
      <span>${category.count}</span>
      <span>${category.desc}</span>
    </a>`).join("");
}

function renderUpdates(target) {
  target.innerHTML = siteData.movies.slice(6, 18).map((movie, index) => `
    <a class="update-item" href="detail.html?id=${movie.id}">
      <b class="rank-no">${index + 1}</b>
      <span><strong>${movie.title}</strong><span>${movie.category} · ${movie.region} · ${movie.year}</span></span>
      <em>${movie.status}</em>
    </a>`).join("");
}

function renderRanking(target) {
  target.innerHTML = siteData.movies.slice(0, 20).map((movie, index) => `
    <a class="rank-item" href="detail.html?id=${movie.id}">
      <b class="rank-no">${index + 1}</b>
      <span><strong>${movie.title}</strong><span>${movie.category} · ${movie.region} · ${movie.year} · 评分 ${movie.score}</span></span>
      <em>${movie.status}</em>
    </a>`).join("");
}

function renderEditor(target) {
  target.innerHTML = siteData.movies.slice(18, 24).map(movie => `
    <a class="wide-card" href="detail.html?id=${movie.id}">
      <img src="${movie.image}" alt="${movie.title}" loading="lazy">
      <span><h3>${movie.title}</h3><p>${movie.intro}</p></span>
    </a>`).join("");
}

function renderFilters(target) {
  const names = ["全部", ...siteData.categories.map(item => item.name)];
  target.innerHTML = names.map((name, index) => `<button class="chip ${index === 0 ? "is-active" : ""}" type="button" data-category="${name}">${name}</button>`).join("");
}

function renderDetail(target) {
  const id = Number(new URLSearchParams(location.search).get("id") || 0);
  const movie = siteData.movies[id] || siteData.movies[0];
  document.title = `${movie.title} - 日韩影视网`;
  target.innerHTML = `
    <div class="detail-poster"><img src="${movie.image}" alt="${movie.title}"></div>
    <article>
      <span class="tag">${movie.category}</span>
      <h1>${movie.title}</h1>
      <div class="detail-meta">
        <span>${movie.region}</span><span>${movie.year}</span><span>评分 ${movie.score}</span><span>${movie.status}</span>
      </div>
      <p>${movie.intro}</p>
      <p>日韩影视网为你整理该片的基础资料、题材标签和相关推荐，方便按类型继续浏览更多相近内容。</p>
      <a class="button" href="movies.html">返回全部影片</a>
    </article>`;
}

function setupFilter() {
  const input = $("[data-filter-input]");
  const grid = $("[data-render='allMovies']");
  if (!input || !grid) return;
  let activeCategory = new URLSearchParams(location.search).get("category") || "全部";
  const apply = () => {
    const keyword = input.value.trim().toLowerCase();
    const movies = siteData.movies.filter(movie => {
      const text = [movie.title, movie.category, movie.region, movie.year, movie.status].join(" ").toLowerCase();
      return (!keyword || text.includes(keyword)) && (activeCategory === "全部" || movie.category === activeCategory);
    });
    renderMovies(grid, movies);
  };
  $$("[data-category]").forEach(button => {
    if (button.dataset.category === activeCategory) {
      $$("[data-category]").forEach(item => item.classList.remove("is-active"));
      button.classList.add("is-active");
    }
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      $$("[data-category]").forEach(item => item.classList.toggle("is-active", item === button));
      apply();
    });
  });
  input.addEventListener("input", apply);
  apply();
}

function boot() {
  const nav = $("[data-site-nav]");
  const toggle = $("[data-menu-toggle]");
  if (nav && toggle) toggle.addEventListener("click", () => nav.classList.toggle("is-open"));

  $$("[data-render]").forEach(target => {
    const type = target.dataset.render;
    if (type === "hero") renderHero(target);
    if (type === "featured") renderMovies(target, siteData.movies.slice(0, 12));
    if (type === "allMovies") renderMovies(target, siteData.movies);
    if (type === "categories") renderCategories(target);
    if (type === "updates") renderUpdates(target);
    if (type === "ranking") renderRanking(target);
    if (type === "editor") renderEditor(target);
    if (type === "categoryFilters") renderFilters(target);
    if (type === "detail") renderDetail(target);
  });
  setupFilter();
}

boot();
