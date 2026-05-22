// ============================================================
// MULTI-LANGUAGE TRANSLATIONS (FR, EN, DE, ZH, JA, TH)
// ============================================================
const translations = {
  FR: {
    navMusic: "MUSIQUE",
    navDigital: "ŒUVRES NUMÉRIQUES",
    navPhysical: "ŒUVRES PHYSIQUES",
    navShop: "BOUTIQUE",
    navBlog: "BLOG",
    navSupport: "SOUTENIR",
    musicHeader: "DISTRIBUTION MUSICALE",
    activeProfile: "profil actif",
    listen: "ÉCOUTER",
    digitalHeader: "ŒUVRES NUMÉRIQUES — CLIQUER SUR L'IMAGE",
    physicalHeader: "ŒUVRES PHYSIQUES",
    shopHeader: "BOUTIQUE",
    shopText: "Marchandise officielle et éditions physiques.",
    shopButton: "ACCÉDER À SHOPIFY",
    shopPlaceholder: "*boutique Shopify pas encore créée",
    blogHeader: "BLOG / JOURNAL",
    searchPlaceholder: "rechercher titre ou contenu",
    allCategories: "toutes catégories",
    newestFirst: "plus récents",
    oldestFirst: "plus anciens",
    titleAZ: "titre A-Z",
    titleZA: "titre Z-A",
    categories: "catégories",
    noArticles: "Aucun article trouvé.",
    supportHeader: "SOUTENIR L'ARTISTE",
    supportText: "Contenu exclusif, accès anticipé",
    patreon: "PATREON",
    footer: "© 小貓心 — grille brutaliste"
  },
  EN: {
    navMusic: "MUSIC",
    navDigital: "DIGITAL WORKS",
    navPhysical: "PHYSICAL WORKS",
    navShop: "SHOP",
    navBlog: "BLOG",
    navSupport: "SUPPORT ME",
    musicHeader: "MUSIC DISTRIBUTION",
    activeProfile: "active profile",
    listen: "LISTEN",
    digitalHeader: "DIGITAL WORKS — CLICK IMAGE",
    physicalHeader: "PHYSICAL WORKS",
    shopHeader: "SHOP",
    shopText: "Official merchandise & physical releases.",
    shopButton: "REDIRECT TO SHOPIFY",
    shopPlaceholder: "*shopify store not yet created",
    blogHeader: "BLOG / JOURNAL",
    searchPlaceholder: "search title or body",
    allCategories: "all categories",
    newestFirst: "newest first",
    oldestFirst: "oldest first",
    titleAZ: "title A-Z",
    titleZA: "title Z-A",
    categories: "categories",
    noArticles: "No articles found.",
    supportHeader: "SUPPORT THE ARTIST",
    supportText: "Exclusive content, early access",
    patreon: "PATREON",
    footer: "© 小貓心 — brutalist grid"
  },
  DE: {
    navMusic: "MUSIK",
    navDigital: "DIGITALE WERKE",
    navPhysical: "PHYSIKALISCHE WERKE",
    navShop: "SHOP",
    navBlog: "BLOG",
    navSupport: "UNTERSTÜTZEN",
    musicHeader: "MUSIKVERTRIEB",
    activeProfile: "aktives profil",
    listen: "HÖREN",
    digitalHeader: "DIGITALE WERKE — AUF BILD KLICKEN",
    physicalHeader: "PHYSIKALISCHE WERKE",
    shopHeader: "SHOP",
    shopText: "Offizielle Merchandise & physische Veröffentlichungen.",
    shopButton: "ZU SHOPIFY",
    shopPlaceholder: "*Shopify-Store noch nicht erstellt",
    blogHeader: "BLOG / JOURNAL",
    searchPlaceholder: "Titel oder Inhalt durchsuchen",
    allCategories: "alle kategorien",
    newestFirst: "neueste zuerst",
    oldestFirst: "älteste zuerst",
    titleAZ: "titel A-Z",
    titleZA: "titel Z-A",
    categories: "kategorien",
    noArticles: "Keine Artikel gefunden.",
    supportHeader: "KÜNSTLER UNTERSTÜTZEN",
    supportText: "Exklusive Inhalte, früher Zugang",
    patreon: "PATREON",
    footer: "© 小貓心 — brutalismus raster"
  },
  ZH: {
    navMusic: "音樂",
    navDigital: "數位作品",
    navPhysical: "實體作品",
    navShop: "商店",
    navBlog: "部落格",
    navSupport: "支持我",
    musicHeader: "音樂發行",
    activeProfile: "當前藝人",
    listen: "收聽",
    digitalHeader: "數位作品 — 點擊圖片",
    physicalHeader: "實體作品",
    shopHeader: "商店",
    shopText: "官方周邊及實體發行。",
    shopButton: "前往SHOPIFY",
    shopPlaceholder: "*Shopify商店尚未建立",
    blogHeader: "部落格 / 文章",
    searchPlaceholder: "搜尋標題或內容",
    allCategories: "所有分類",
    newestFirst: "最新優先",
    oldestFirst: "最早優先",
    titleAZ: "標題 A-Z",
    titleZA: "標題 Z-A",
    categories: "分類",
    noArticles: "未找到文章。",
    supportHeader: "支持藝術家",
    supportText: "獨家內容，搶先體驗",
    patreon: "PATREON",
    footer: "© 小貓心 — 粗野主義網格"
  },
  JA: {
    navMusic: "音楽",
    navDigital: "デジタル作品",
    navPhysical: "フィジカル作品",
    navShop: "ショップ",
    navBlog: "ブログ",
    navSupport: "サポート",
    musicHeader: "音楽配信",
    activeProfile: "アクティブプロフィール",
    listen: "再生",
    digitalHeader: "デジタル作品 — 画像をクリック",
    physicalHeader: "フィジカル作品",
    shopHeader: "ショップ",
    shopText: "公式グッズ & フィジカルリリース。",
    shopButton: "SHOPIFYへ",
    shopPlaceholder: "*Shopifyストアは未作成",
    blogHeader: "ブログ / ジャーナル",
    searchPlaceholder: "タイトルまたは本文を検索",
    allCategories: "すべてのカテゴリ",
    newestFirst: "新しい順",
    oldestFirst: "古い順",
    titleAZ: "タイトル A-Z",
    titleZA: "タイトル Z-A",
    categories: "カテゴリ",
    noArticles: "記事が見つかりません。",
    supportHeader: "アーティストをサポート",
    supportText: "限定コンテンツ、早期アクセス",
    patreon: "PATREON",
    footer: "© 小貓心 — ブルータリストグリッド"
  },
  TH: {
    navMusic: "เพลง",
    navDigital: "ผลงานดิจิทัล",
    navPhysical: "ผลงานออฟไลน์",
    navShop: "ร้านค้า",
    navBlog: "บล็อก",
    navSupport: "สนับสนุน",
    musicHeader: "จำหน่ายเพลง",
    activeProfile: "โปรไฟล์ที่ใช้งาน",
    listen: "ฟัง",
    digitalHeader: "ผลงานดิจิทัล — คลิกที่ภาพ",
    physicalHeader: "ผลงานออฟไลน์",
    shopHeader: "ร้านค้า",
    shopText: "สินค้าอย่างเป็นทางการและผลงานออฟไลน์",
    shopButton: "ไปที่ SHOPIFY",
    shopPlaceholder: "*ร้านค้า Shopify ยังไม่สร้าง",
    blogHeader: "บล็อก / วารสาร",
    searchPlaceholder: "ค้นหาชื่อเรื่องหรือเนื้อหา",
    allCategories: "ทุกหมวดหมู่",
    newestFirst: "ใหม่ล่าสุด",
    oldestFirst: "เก่าที่สุด",
    titleAZ: "ชื่อเรื่อง ก-ฮ",
    titleZA: "ชื่อเรื่อง ฮ-ก",
    categories: "หมวดหมู่",
    noArticles: "ไม่พบบทความ",
    supportHeader: "สนับสนุนศิลปิน",
    supportText: "เนื้อหาพิเศษ เข้าถึงก่อนใคร",
    patreon: "PATREON",
    footer: "© 小貓心 — ตารางบรูทัลลิสต์"
  }
};

let currentLang = "EN";
let currentPage = "music";

const ARTIST_ONE = "Anhedonia Schizophrenica Nevrosa";
const ARTIST_TWO = "キーハートから離れて";

let artistProfiles = {
  active: ARTIST_ONE,
  names: [ARTIST_ONE, ARTIST_TWO]
};

let musicLinks = {
  [ARTIST_ONE]: {
    SUBVERT: "https://www.subvert.fm/anhedonia-schizophrenica-nevrosa",
    BANDCAMP: "https://anhedoniaschizophrenicanevrosa.bandcamp.com/",
    TIDAL: "https://tidal.com/artist/62513676",
    "網易雲音樂": "https://music.163.com/#/artist?id=98949119"
  },
  [ARTIST_TWO]: {
    SUBVERT: "https://www.subvert.fm/keyheart",
    BANDCAMP: "https://karahanarete.bandcamp.com/",
    TIDAL: "https://tidal.com/artist/48858719",
    "網易雲音樂": "https://music.163.com/#/artist?id=56107302"
  }
};

// DIGITAL WORKS
let digitalWorks = [
  { 
    id: "falaises", 
    title: "Falaises", 
    description: "Falaises de pierre sombres. Cascade sanguine dont la mousse éclate sur un arbre pur.", 
    date: "3/26/2025", 
    imageUrl: "images/digital-works/Falaises.png"
  },
  { 
    id: "mecanisphere", 
    title: "Mécanisphère",
    description: "Engrenage infernal appatant vers une dimension profonde, chaines d'entrave qui entrainent dans l'engrenage", 
    date: "3/26/2025", 
    imageUrl: "images/digital-works/Mécanisphère.jpg"
  },
  { 
    id: "vagues", 
    title: "Vagues et Brumes", 
    description: "Douceur d'une vague puissante, dont son qui s'en échappe souffle après avoir laissé l'air brumeux.", 
    date: "3/26/2025", 
    imageUrl: "images/digital-works/Vagues-et-Brumes.png"
  }
];

// PHYSICAL WORKS with multiple images per item
let physicalWorks = [
  { 
    id: "jacket1", 
    name: "Graphic Jacket", 
    date: "2025", 
    description: "Graphic jacket. Made from a red cotton shirt. Bleached 'shining heart' and 'splatter stain' patterns and back panel. Decorative safety pins on collar and buttonline. Spiraling zipper pinned on right sleeve. Semi precious stone jewelry hanging from pockets.",
    previewImage: "images/physical-works/jacket1-front.jpg",
    detailImages: [
      "images/physical-works/jacket1-back.jpg",
      "images/physical-works/jacket1-collar.jpg",
      "images/physical-works/jacket1-flash-front.jpg",
      "images/physical-works/jacket1-front.jpg",
      "images/physical-works/jacket1-sleeve.jpg",
      "images/physical-works/jacket1-stone.jpg",
      "images/physical-works/jacket1-stone-2.jpg"
    ]
  },
  { 
    id: "trousers1", 
    name: "Hybrid Trousers", 
    date: "2025", 
    description: "Hybrid trousers. From two pair of pants (dark grey and red) and a pair of black shorts pieced together. Enlarged ends with open red panels tied on the side, sewn chaotically. Added back scratch belt for adjusting. Hand-sewn faux-patchwork red stitches. Distressed hand-made patches. Additional pocket with badge, cz iced-out cuban link and fake pearl necklaces. Zip ties and red distressed patch on the back.",
    previewImage: "images/physical-works/trousers1-front.jpg",
    detailImages: [
      "images/physical-works/trousers1-adjusting-belt.jpg",
      "images/physical-works/trousers1-back.jpg",
      "images/physical-works/trousers1-back-patch.jpg",
      "images/physical-works/trousers1-double-belt.jpg",
      "images/physical-works/trousers1-front.jpg",
      "images/physical-works/trousers1-handmade-patch.jpg",
      "images/physical-works/trousers1-hand-stiches.jpg",
      "images/physical-works/trousers1-pockets.jpg",
      "images/physical-works/trousers1-zip.jpg"
    ]
  }
];

let blogPosts = [
  { id: "post1", title: "Generative Brutalism", date: "2025-01-12", categories: ["tutorial", "art"], body: "Combining win98 aesthetics with web brutalism. New process using pixel sorting." },
  { id: "post2", title: "Physical Works Showcase", date: "2024-12-01", categories: ["exhibition"], body: "Opening at Subvert Gallery. Paintings with embedded circuits." },
  { id: "post3", title: "New music under キーハートから離れて", date: "2024-11-20", categories: ["music", "release"], body: "Ambient industrial EP out now on Bandcamp and Subvert." }
];

function t(key) {
  return translations[currentLang][key] || translations["EN"][key] || key;
}

function updateNavbarAndFooter() {
  document.querySelectorAll('.nav-item[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (key && t(key)) el.textContent = t(key);
  });
  document.getElementById('siteFooter').textContent = t('footer');
  document.getElementById('modalTitle').textContent = 'DETAIL VIEW';
}

function render() {
  const container = document.getElementById("app-root");
  if (!container) return;
  if (currentPage === "music") renderMusicPage(container);
  else if (currentPage === "digital") renderDigitalPage(container);
  else if (currentPage === "physical") renderPhysicalPage(container);
  else if (currentPage === "shop") renderShopPage(container);
  else if (currentPage === "blog") renderBlogPage(container);
  else if (currentPage === "support") renderSupportPage(container);
  updateNavbarAndFooter();
}

function renderMusicPage(container) {
  const active = artistProfiles.active;
  const currentLinks = musicLinks[active];
  const platforms = Object.keys(currentLinks);
  const html = `
    <div class="brutal-panel">
      <div class="panel-header">${t('musicHeader')}</div>
      <div class="panel-body">
        <div class="artist-toggle">
          <button id="toggle-artist-a" class="toggle-btn ${active === ARTIST_ONE ? 'active-toggle' : ''}">${ARTIST_ONE}</button>
          <button id="toggle-artist-b" class="toggle-btn ${active === ARTIST_TWO ? 'active-toggle' : ''}">${ARTIST_TWO}</button>
        </div>
        <div class="music-grid">
          ${platforms.map(platform => `
            <div class="music-card">
              <div class="platform-name">${platform}</div>
              <a href="${currentLinks[platform]}" target="_blank" class="music-link">${t('listen')}</a>
            </div>
          `).join('')}
        </div>
        <div style="margin-top: 1.5rem; font-size: 0.65rem; font-family: monospace; text-align:right; border-top:1px solid #ccc; padding-top:0.8rem;">${t('activeProfile')}: ${active.substring(0, 40)}${active.length > 40 ? '…' : ''}</div>
      </div>
    </div>
  `;
  container.innerHTML = html;
  document.getElementById("toggle-artist-a")?.addEventListener("click", () => {
    artistProfiles.active = ARTIST_ONE;
    render();
  });
  document.getElementById("toggle-artist-b")?.addEventListener("click", () => {
    artistProfiles.active = ARTIST_TWO;
    render();
  });
}

function renderDigitalPage(container) {
  const html = `
    <div class="brutal-panel">
      <div class="panel-header">${t('digitalHeader')}</div>
      <div class="panel-body">
        <div class="gallery-grid">
          ${digitalWorks.map(w => `
            <div class="gallery-card" data-digital-id="${w.id}">
              <img src="${w.imageUrl}" class="gallery-img" alt="${w.title}">
              <div class="card-title">${w.title}<span style="float:right; font-size:0.7rem;">${w.date}</span></div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
  document.querySelectorAll('[data-digital-id]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-digital-id');
      const work = digitalWorks.find(w => w.id === id);
      if (work) showDetailModal('digital', work);
    });
  });
}

function renderPhysicalPage(container) {
  const html = `
    <div class="brutal-panel">
      <div class="panel-header">${t('physicalHeader')}</div>
      <div class="panel-body">
        <div class="gallery-grid">
          ${physicalWorks.map(p => `
            <div class="gallery-card" data-physical-id="${p.id}">
              <img src="${p.previewImage}" class="gallery-img" alt="${p.name}">
              <div class="card-title">${p.name}<span style="float:right;">${p.date}</span></div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
  document.querySelectorAll('[data-physical-id]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-physical-id');
      const work = physicalWorks.find(p => p.id === id);
      if (work) showDetailModal('physical', work);
    });
  });
}

function renderShopPage(container) {
  container.innerHTML = `<div class="brutal-panel"><div class="panel-header">${t('shopHeader')}</div><div class="panel-body"><p style="margin-bottom:1rem;">${t('shopText')}</p><button id="shopify-redirect" class="music-link" style="background:transparent;">${t('shopButton')}</button><p style="margin-top:1rem; font-size:0.7rem;">${t('shopPlaceholder')}</p></div></div>`;
  document.getElementById("shopify-redirect")?.addEventListener("click", () => alert("Shopify store placeholder — coming soon"));
}

function renderBlogPage(container) {
  const html = `
    <div class="brutal-panel">
      <div class="panel-header">${t('blogHeader')}</div>
      <div class="panel-body">
        <div class="search-bar">
          <input type="text" id="blog-search" placeholder="${t('searchPlaceholder')}" style="flex:2;">
          <select id="category-filter">
            <option value="all">${t('allCategories')}</option>
            <option value="tutorial">tutorial</option><option value="exhibition">exhibition</option>
            <option value="music">music</option><option value="release">release</option><option value="art">art</option>
          </select>
          <select id="sort-select">
            <option value="date-desc">${t('newestFirst')}</option><option value="date-asc">${t('oldestFirst')}</option>
            <option value="name-asc">${t('titleAZ')}</option><option value="name-desc">${t('titleZA')}</option>
          </select>
        </div>
        <div id="blog-posts-list"></div>
      </div>
    </div>
  `;
  container.innerHTML = html;

  function renderBlogList() {
    let posts = [...blogPosts];
    const search = document.getElementById("blog-search")?.value.toLowerCase() || "";
    const category = document.getElementById("category-filter")?.value;
    const sort = document.getElementById("sort-select")?.value;
    if (search) posts = posts.filter(p => p.title.toLowerCase().includes(search) || p.body.toLowerCase().includes(search));
    if (category !== "all") posts = posts.filter(p => p.categories.includes(category));
    if (sort === "date-desc") posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sort === "date-asc") posts.sort((a, b) => new Date(a.date) - new Date(b.date));
    if (sort === "name-asc") posts.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "name-desc") posts.sort((a, b) => b.title.localeCompare(a.title));
    const target = document.getElementById("blog-posts-list");
    if (target) target.innerHTML = posts.length ? posts.map(post => `
      <div class="brutal-panel" style="margin-bottom:1.2rem;">
        <div class="panel-header">${post.title} <span style="float:right;">${post.date}</span></div>
        <div class="panel-body"><p>${post.body}</p><div><span class="category-badge">${t('categories')}:</span> ${post.categories.map(c => `<span class="category-badge">${c}</span>`).join('')}</div></div>
      </div>
    `).join('') : `<p>${t('noArticles')}</p>`;
  }
  document.getElementById("blog-search")?.addEventListener("input", renderBlogList);
  document.getElementById("category-filter")?.addEventListener("change", renderBlogList);
  document.getElementById("sort-select")?.addEventListener("change", renderBlogList);
  renderBlogList();
}

function renderSupportPage(container) {
  container.innerHTML = `<div class="brutal-panel"><div class="panel-header">${t('supportHeader')}</div><div class="panel-body"><a href="https://www.patreon.com/example" target="_blank" class="music-link" style="display:inline-block;">${t('patreon')} →</a><p style="margin-top:1rem;">${t('supportText')}</p></div></div>`;
}

function showDetailModal(type, item) {
  const modal = document.getElementById("detail-modal");
  const modalBody = document.getElementById("modal-dynamic-body");
  
  if (type === "digital") {
    modalBody.innerHTML = `
      <div class="modal-artwork"><img src="${item.imageUrl}"></div>
      <div class="modal-info">
        <h2>${item.title}</h2>
        <p><strong>${item.date}</strong></p>
        <p>${item.description}</p>
      </div>
    `;
  } 
  else if (type === "physical") {
    // Build image gallery HTML
    let imagesHtml = '';
    if (item.detailImages && item.detailImages.length > 0) {
      imagesHtml = item.detailImages.map(img => `
        <div class="physical-modal-image">
          <img src="${img}" alt="${item.name} detail">
        </div>
      `).join('');
    }
    
    modalBody.innerHTML = `
      <div class="physical-modal-container">
        <div class="physical-modal-info">
          <h2>${item.name}</h2>
          <p><strong>${item.date}</strong></p>
          <p>${item.description}</p>
        </div>
        <div class="physical-modal-gallery">
          ${imagesHtml}
        </div>
      </div>
    `;
  }
  
  modal.classList.add("active");
  document.getElementById("close-modal-btn").onclick = () => modal.classList.remove("active");
  modal.onclick = (e) => { if (e.target === modal) modal.classList.remove("active"); };
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    if (lang) {
      currentLang = lang;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    }
  });
});

document.querySelector('.lang-btn[data-lang="EN"]').classList.add('active');

document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.getAttribute('data-page');
    if (page) currentPage = page;
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    btn.classList.add('active');
    render();
  });
});

document.querySelector('.nav-item[data-page="music"]').classList.add('active');
render();