const siteData = {
  categories: [
    { name: "韩剧", count: "128 部", desc: "情感、悬疑、都市与复仇题材" },
    { name: "日剧", count: "96 部", desc: "生活、职场、推理与治愈故事" },
    { name: "韩国电影", count: "84 部", desc: "犯罪、剧情、动作与现实题材" },
    { name: "日本电影", count: "76 部", desc: "文艺、动画、悬疑与家庭故事" },
    { name: "综艺节目", count: "52 部", desc: "旅行、美食、观察和真人秀" },
    { name: "悬疑惊悚", count: "64 部", desc: "推理、心理、犯罪与反转叙事" }
  ],
  movies: [
    {
      title: "雨夜便利店",
      category: "日剧",
      region: "日本",
      year: "2026",
      score: "8.7",
      status: "更新至 8 集",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      intro: "深夜便利店里的顾客带来不同故事，店员在一段段相遇中重新理解自己的生活。"
    },
    {
      title: "首尔回声",
      category: "韩剧",
      region: "韩国",
      year: "2025",
      score: "9.1",
      status: "全 12 集",
      image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
      intro: "一名电台制作人在旧录音中发现线索，牵出十年前未解事件。"
    },
    {
      title: "蓝色列车",
      category: "日本电影",
      region: "日本",
      year: "2024",
      score: "8.5",
      status: "高清",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=900&q=80",
      intro: "两个陌生人在长途列车上相遇，一段短暂旅程改变了他们的选择。"
    },
    {
      title: "汉江迷雾",
      category: "韩国电影",
      region: "韩国",
      year: "2025",
      score: "8.9",
      status: "高清",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
      intro: "城市雾夜中的追踪故事，刑警与记者分别接近同一个真相。"
    },
    {
      title: "周末食堂",
      category: "综艺节目",
      region: "日韩",
      year: "2026",
      score: "8.3",
      status: "更新至 5 期",
      image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
      intro: "明星与素人共同经营周末食堂，用料理交换人生故事。"
    },
    {
      title: "第七封信",
      category: "悬疑惊悚",
      region: "韩国",
      year: "2024",
      score: "8.8",
      status: "全 10 集",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
      intro: "每一封信都指向不同嫌疑人，真相隐藏在第七封未寄出的信里。"
    },
    {
      title: "夏日放映室",
      category: "日本电影",
      region: "日本",
      year: "2026",
      score: "8.6",
      status: "高清",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
      intro: "老电影院即将关闭，几个年轻人决定完成最后一次夏日放映。"
    },
    {
      title: "无人公寓",
      category: "悬疑惊悚",
      region: "日本",
      year: "2025",
      score: "8.4",
      status: "全 8 集",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
      intro: "看似空置的公寓不断传来声音，新住户开始调查楼里的旧档案。"
    }
  ]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function movieCard(movie, index) {
  const params = new URLSearchParams({ id: String(index) });
  return `
    <article class="poster-card" data-search="${[movie.title, movie.category, movie.region, movie.year].join(" ")}">
      <a href="detail.html?${params.toString()}">
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
    </article>
  `;
}

function renderMovies(target, movies) {
  target.innerHTML = movies.map((movie, index) => movieCard(movie, siteData.movies.indexOf(movie) === -1 ? index : siteData.movies.indexOf(movie))).join("");
}

function renderCategories(target) {
  target.innerHTML = siteData.categories.map(category => `
    <a class="category-card" href="movies.html?category=${encodeURIComponent(category.name)}">
      <strong>${category.name}</strong>
      <span>${category.count}</span>
      <span>${category.desc}</span>
    </a>
  `).join("");
}

function renderUpdates(target) {
  target.innerHTML = siteData.movies.slice().reverse().map(movie => `
    <a class="update-item" href="detail.html?id=${siteData.movies.indexOf(movie)}">
      <span><strong>${movie.title}</strong><span>${movie.category} · ${movie.region} · ${movie.year}</span></span>
      <em>${movie.status}</em>
    </a>
  `).join("");
}

function renderFilters(target) {
  const categories = ["全部", ...siteData.categories.map(item => item.name)];
  target.innerHTML = categories.map((name, index) => `<button class="chip ${index === 0 ? "is-active" : ""}" type="button" data-category="${name}">${name}</button>`).join("");
}

function renderDetail(target) {
  const params = new URLSearchParams(location.search);
  const id = Number(params.get("id") || 0);
  const movie = siteData.movies[id] || siteData.movies[0];
  document.title = `${movie.title} - 映栈剧场`;
  target.innerHTML = `
    <div class="detail-poster"><img src="${movie.image}" alt="${movie.title}"></div>
    <article>
      <span class="eyebrow">Detail</span>
      <h1>${movie.title}</h1>
      <div class="detail-meta">
        <span>${movie.category}</span><span>${movie.region}</span><span>${movie.year}</span><span>评分 ${movie.score}</span><span>${movie.status}</span>
      </div>
      <p>${movie.intro}</p>
      <p>这里是详情页母版区域。正式生成新站时，可以加入导演、主演、别名、剧集列表、相关推荐或外部平台信息。</p>
      <a class="button" href="movies.html">返回全部内容</a>
    </article>
  `;
}

function setupFilter() {
  const input = $("[data-filter-input]");
  const grid = $("[data-render='allMovies']");
  if (!input || !grid) return;

  let activeCategory = new URLSearchParams(location.search).get("category") || "全部";
  const apply = () => {
    const keyword = input.value.trim().toLowerCase();
    const filtered = siteData.movies.filter(movie => {
      const text = [movie.title, movie.category, movie.region, movie.year, movie.status].join(" ").toLowerCase();
      const matchKeyword = !keyword || text.includes(keyword);
      const matchCategory = activeCategory === "全部" || movie.category === activeCategory;
      return matchKeyword && matchCategory;
    });
    renderMovies(grid, filtered);
  };

  input.addEventListener("input", apply);
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
  apply();
}

function boot() {
  const nav = $("[data-site-nav]");
  const toggle = $("[data-menu-toggle]");
  if (nav && toggle) {
    toggle.addEventListener("click", () => nav.classList.toggle("is-open"));
  }

  $$("[data-render]").forEach(target => {
    const type = target.dataset.render;
    if (type === "featured") renderMovies(target, siteData.movies.slice(0, 4));
    if (type === "allMovies") renderMovies(target, siteData.movies);
    if (type === "categories") renderCategories(target);
    if (type === "updates") renderUpdates(target);
    if (type === "categoryFilters") renderFilters(target);
    if (type === "detail") renderDetail(target);
  });

  setupFilter();
}

boot();

