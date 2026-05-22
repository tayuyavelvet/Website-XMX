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
    footer: "© 小貓心"
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
    footer: "© 小貓心"
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
    footer: "© 小貓心"
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
    footer: "© 小貓心"
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
    footer: "© 小貓心"
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
    footer: "© 小貓心"
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
    imageUrl: "images/digital-works/mecanisphere.jpg"
  },
  { 
    id: "vagues", 
    title: "Vagues et Brumes", 
    description: "Douceur d'une vague puissante, dont son qui s'en échappe souffle après avoir laissé l'air brumeux.", 
    date: "3/26/2025", 
    imageUrl: "images/digital-works/Vagues-et-Brumes.png"
  }
];

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
  { 
    id: "album-making-process", 
    title: "The Making Process of 'The Peculiar Perichromatic Lamb Club'", 
    date: "2026-05-22", 
    categories: ["music", "album", "behind-the-scenes", "artistic-process", "art"], 
    body: `
      <h1>An Album in 4.5 days</h1>
      <p>The motivation to create this project came from multiple things :</p>
      <ul>
        <li>No Album published in 19 years of being a musician.</li>
        <li>Challenging myself to make an entire album in a single week, start to finish.</li>
        <li>Making music that makes me have fun more than something that I need to think about.</li>
      </ul>
      <p>So this is how I ended up motivating myself to make this album. It is the result of accumulated music frustration from both thinking I have not really made any full length project (with real recorded instruments and vocals) and needing to exteriorize by making music that allows me to not use my brain much.</p>

      <p>It is not a project to be taken too seriously. It's a half-serious, half-joke project. Half serious in that it is an actual release and consider it as a legitimate project. Half-joke in that it is clearly not the best value for music even of this kind.</p>
      
      <h2>The Sound</h2>
      <p>This album has a rather characteristic sound, some would say shitty sound, and I wouldn't be able to say otherwise. The sound goal is actually one of the things that started the motivation to make something.</p>

      <p>I used a preset from Archetype: Rabea X that immediately made me go "wow, this tone sucks!". If I remember correctly, the tone is called "seems familiar", or something like that. That tone is so typical of some shitty records with 100 views I have ended up listening to on YouTube at 3am, it made me think :</p>
      
      <blockquote>"I need do also do some stuff like that"</blockquote>
      
      <p>Since I wanted to challenge myself to make a full project in a week, it has become obvious immediately that I would need to make a mixing template. So I made one track and then used it as a template for the entire album both for consistency but also to save time.</p>

      <h3>The Mix</h3>

      <h4>Drums</h4>
      <p>The Drums are simply a Drums VST (GGD - OKW : Brutal) with Reaper's stock reverb on the track, no splitting elements, straight out of the VST, some very slight humanize and we're good.</p>

      <h4>Guitars</h4>
      <p>The Guitars are simply one panned right, one panned left. One has a slightly bigger low-cut, one has a slightly bigger high-cut. And that's literally it. They sometimes harmonize, but most of the time play the same thing. There is also a lead guitar in some tracks, it's simply another preset from the same amp sim, with a strong low-cut and high-cut. The guitar I used for the record is the same on every track : a Solar A1.71A Assassin. 7 Strings, Evertune Bridge, a single Fishman Fluence Opencore pickup on the bridge position. Nothing more than whats needed.</p>

      <h4>Bass</h4>
      <p>The Bass, interestingly, is a real bass. It's a Sterling Stingray by Music Man. A 4 strings bass which I dropped down to A. In Fact I didn't even bother tuning it down all the way and exclusively tuned down the lowest string and played everything on this string. Strings that have never been changed. The Mix I am pretty sure was a preset on Hellraiser by JST, probably layered with RBass.</p>

      <h4>Vocals</h4>
      <p>The Voice, which obviously is mine (+ a feature), is just doing a mix of many screaming techniques, both exhaled and inhaled screams. Gutturals, Lows, Mids, Highs, Squeals, Yell, some weird stuff. There is even just non screamed vocal fry. A little bit of this, A little bit of that. And obviously some vocal parts made use of mic cupping, there is no making a terrible sounding record and avoiding it. For the vocal mixing, for most of the record I had only two tracks, one main and one dub/harmony. They were "JS Screamer Starter" and the corresponding Dub preset from the Howard Benson Vocal Bundle from JST.</p>

      <h2>The Creative Process</h2>

      <h3>Song Writing</h3>
      <p>The Creative process was very chaotic, I did half the songs in 3 days, and then got ill, stopped for two days, and made the last half in 1.5 days</p>

      <p>Lyrics writing was absolutely random, I pretty much just sung whatever came that I thought was more or less in the theme, without really thinking about it twice : if it fits, it fits. I didn't really do corrective takes. Writing lyrics is not my strength so I didn't really want to dive too deep into it and just wrote some kind of random generic stuff as I was recording.</p>

      <h3>Last Minute Creative Decisions</h3>

      <h4>Feature with André Mendes</h4>
      <p>I knew early I could probably squeeze in a feature just for the fun but had no idea how to do it pretty much until it happened, as I was sharing my progress on the project with André, who is a singer in the band Insominds at the moment, on the progress, we decided we could have him featured on the project so I immediately made a quick track, sent it to him, told him to give me his best yogurt vocals and he quickly sent me back his vocal stems.</p>

      <p>We did a little bit of tweaking to adjust a little the mix to make it fit and here it was. Lyrics weren't even really there so we had to kind of make them up last minute. It was extremely fun to make a song together after so long knowing each other.</p>
      
      <h4>Transition Tracks</h4>
      <p>The non-music/transition tracks were actually the last thing to be done. I wanted 19 tracks specifically, for no specific reason, but that meant I had to add in transition tracks. That's when I decided to create the ambient tracks that are actually the start of a lore tied to this project. This is also the album's name origin.</p>

      <p>There are 3 tracks that follow a similar pattern : "Backshop Practice" (the intro track), "Psychomorphic Delusions" and "Eventually, everything comes to an end", they are all three having ambient sounds of different actions happening following a story, with each having music that is part of the scene : the music being played is played on Tsugaru Shamisen, then Guzheng (by myself) and then on Violin (by André Mendes and me). In the back of each of them, it is possible to hear some group reciting a text in a loop in an unknown language.</p>

      <p>While the project itself didn't start with any real goal, towards the end of the making, it started to create some lore which, if everything goes right, should have its own continuity in later works of mine, may they be music or any other nature, but I cannot and do not want to disclose too much about this for now.</p>

      <h4>The Coverart</h4>
      <p>The coverart was the last thing to be done, to make it I took inspiration mostly from 2010s deathcore and 2000s death metal coverarts, despite the album drawing from many influences such as slam, hardcore, metalcore, grindcore, goregrind etc, I wanted something quite basic, I feel "Lugak Ki En" from ROS was also a main influence, but since it was made only a few hours before the release, I had to be quick with the overall idea, still at the end the coverart looks decent. It was also for me the moment to make a newer and updated version of the logo to make it fit a little better.</p> 
      
      <hr>
      
      <p><em>Thank you for reading. More updates coming soon.</em></p>
    `
  }
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
            ${[...new Set(blogPosts.flatMap(p => p.categories))].map(cat => `<option value="${cat}">${cat}</option>`).join('')}
          </select>
          <select id="sort-select">
            <option value="date-desc">${t('newestFirst')}</option>
            <option value="date-asc">${t('oldestFirst')}</option>
            <option value="name-asc">${t('titleAZ')}</option>
            <option value="name-desc">${t('titleZA')}</option>
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
    if (category && category !== "all") posts = posts.filter(p => p.categories.includes(category));
    if (sort === "date-desc") posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sort === "date-asc") posts.sort((a, b) => new Date(a.date) - new Date(b.date));
    if (sort === "name-asc") posts.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "name-desc") posts.sort((a, b) => b.title.localeCompare(a.title));
    
    const target = document.getElementById("blog-posts-list");
    if (target) {
      target.innerHTML = posts.length ? posts.map(post => `
        <div class="brutal-panel" style="margin-bottom:1.2rem;">
          <div class="panel-header">${post.title} <span style="float:right;">${post.date}</span></div>
          <div class="panel-body">
            <div class="blog-post-preview faded" id="preview-${post.id}">
              <div class="blog-post-content">${post.body}</div>
            </div>
            <button class="read-more-btn" data-id="${post.id}">READ FULL ARTICLE</button>
            <div style="margin-top:1rem;">
              <span class="category-badge">${t('categories')}:</span> ${post.categories.map(c => `<span class="category-badge">${c}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('') : `<p>${t('noArticles')}</p>`;
      
      document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = btn.getAttribute('data-id');
          const preview = document.getElementById(`preview-${id}`);
          if (preview.classList.contains('expanded')) {
            preview.classList.remove('expanded');
            preview.classList.add('faded');
            btn.textContent = 'READ FULL ARTICLE';
          } else {
            preview.classList.add('expanded');
            preview.classList.remove('faded');
            btn.textContent = 'COLLAPSE';
          }
        });
      });
    }
  }
  
  document.getElementById("blog-search")?.addEventListener("input", renderBlogList);
  document.getElementById("category-filter")?.addEventListener("change", renderBlogList);
  document.getElementById("sort-select")?.addEventListener("change", renderBlogList);
  renderBlogList();
}

function renderSupportPage(container) {
  container.innerHTML = `<div class="brutal-panel"><div class="panel-header">${t('supportHeader')}</div><div class="panel-body"><a href="https://www.patreon.com/c/lovekixxen" target="_blank" class="music-link" style="display:inline-block;">${t('patreon')} →</a><p style="margin-top:1rem;">${t('supportText')}</p></div></div>`;
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