const menuData = {
  food: [
    {
      id: "food",
      title: "האוכל שלנו",
      eyebrow: "TO SHARE · OR NOT",
      accent: "#b58b50",
      items: [
        { name: "עלי גפן ממולאים", description: "מוגשים על מצע של צזיקי", price: 35 },
        { name: "פוקאצ׳ה ומטבלים", price: 25 },
        {
          name: "סלט שוק איכרים",
          description: "גבינת פטה, חסה לליק, מלפפון, עגבניות שרי וצנונית",
          price: 37,
          badges: ["צמחוני"],
        },
        {
          name: "סלט קפרזה",
          description: "עגבניות, כדורי מוצרלה, בזיליקום ובלסמי מרוכז",
          price: 42,
          badges: ["צמחוני"],
        },
        {
          name: "צ׳יפס / צ׳יפס בטטה",
          description: "תוספת פטה — 6 ₪",
          prices: [
            { label: "צ׳יפס", value: 31 },
            { label: "בטטה", value: 33 },
          ],
          badges: ["לחלוקה"],
        },
        {
          name: "כריך סלט ביצים",
          description: "לחמניית פרעצל, סלט ביצים, בצל מטוגן ובצל ירוק",
          price: 36,
          badges: ["רק בשישי"],
          specialBadge: true,
        },
        {
          name: "סטיקס גבינות עם מטבלים",
          description: "פלוט גאודה, זיתי קלמטה ומאפה פרמזן",
          price: 38,
          badges: ["צמחוני"],
        },
        {
          name: "בייגל סלמון",
          description: "סלמון מעושן, גבינת שמנת, עירית, חסה לליק ועגבנייה",
          price: 39,
        },
        {
          name: "פלטת גבינות",
          description: "3 סוגי גבינות, מטבלים, פירות העונה ובייגל ירושלמי",
          price: 59,
          badges: ["מושלם ליין"],
        },
        { name: "רצועות שניצל עם צ׳יפס", price: 53 },
      ],
    },
    {
      id: "sweets",
      title: "מתוקים",
      eyebrow: "SWEET ENDINGS",
      accent: "#8d5d45",
      items: [
        { name: "עוגת גבינה", price: 36 },
        { name: "טירמיסו", price: 35 },
        { name: "קראנץ׳ שוקולד", price: 22 },
        { name: "סינבון", price: 19, badges: ["רק בשישי"], specialBadge: true },
        { name: "רוגלך שוקולד גדול", price: 19, badges: ["רק בשישי"], specialBadge: true },
      ],
    },
    {
      id: "pizzas",
      title: "הפיצות שלנו",
      eyebrow: "FROM THE OVEN",
      accent: "#a44b36",
      items: [
        {
          name: "פיצה ביאנקה",
          description: "רוטב אלפרדו, פרמזן, מוצרלה ופטריות",
          price: 56,
          badges: ["צמחוני"],
        },
        {
          name: "פיצה מרגריטה",
          description: "תוספת זיתים — 6 ₪",
          price: 49,
          badges: ["צמחוני"],
        },
      ],
    },
  ],
  wine: [
    {
      id: "red",
      group: "wines",
      title: "יין אדום",
      eyebrow: "RED WINE",
      accent: "#762f37",
      items: [
        {
          name: "פרימיטיבו · טיאמו סאן מרזיאנו",
          description: "מאוזן, רך וקליל לשתייה",
          prices: [
            { label: "כוס", value: 38 },
            { label: "בקבוק", value: 125 },
          ],
          badges: ["כשר"],
        },
        {
          name: "קברנה סוביניון · פול מאס",
          description: "עשיר ואלגנטי, עם ארומות של פירות יער",
          prices: [
            { label: "כוס", value: 44 },
            { label: "בקבוק", value: 144 },
          ],
        },
        {
          name: "מלבק · ברבדו",
          description: "מרקם קטיפתי, טעמי פירות סגולים ותבלון עדין",
          price: 230,
          priceLabel: "בקבוק",
          badges: ["כשר"],
        },
      ],
    },
    {
      id: "white",
      group: "wines",
      title: "יין לבן",
      eyebrow: "WHITE WINE",
      accent: "#b59a58",
      items: [
        {
          name: "שרדונה · טיאמו סאן מרזיאנו",
          description: "פרחוני, מרענן ועדין",
          prices: [
            { label: "כוס", value: 38 },
            { label: "בקבוק", value: 126 },
          ],
          badges: ["כשר"],
        },
        {
          name: "גוורצטרמינר · עברי",
          description: "חצי יבש עם מתיקות מעודנת",
          prices: [
            { label: "כוס", value: 41 },
            { label: "בקבוק", value: 137 },
          ],
          badges: ["כשר", "חצי יבש"],
        },
        {
          name: "שנין בלאן · באקסברג",
          description: "ניחוחות של פירות, מרענן ומאוזן",
          prices: [
            { label: "כוס", value: 45 },
            { label: "בקבוק", value: 155 },
          ],
          badges: ["כשר"],
        },
        {
          type: "promo",
          name: "בקבוק שנין בלאן + פלטת גבינות",
          description: "שילוב שנולד לשולחן",
          price: 179,
        },
        {
          name: "סוביניון בלאן · 1685 בושנדאל",
          description: "טעם פירותי חזק לצד סיומת מינרלית",
          prices: [
            { label: "כוס", value: 48 },
            { label: "בקבוק", value: 167 },
          ],
        },
        {
          name: "שאבלי · פאסקל בושאר",
          description: "ניחוחות של פירות הדר עם סיומת מינרלית",
          price: 228,
          priceLabel: "בקבוק",
        },
      ],
    },
    {
      id: "rose",
      group: "wines",
      title: "יין רוזה",
      eyebrow: "ROSÉ WINE",
      accent: "#c6787b",
      items: [
        {
          name: "עברי",
          description: "קליל עם ארומות של פטל ותות",
          prices: [
            { label: "כוס", value: 39 },
            { label: "בקבוק", value: 129 },
          ],
          badges: ["כשר"],
        },
        {
          name: "מון רוזה · פול מאס",
          description: "קיצי מאוד, טעמי דובדבן ופטל עם סיומת ארוכה להפתיע",
          prices: [
            { label: "כוס", value: 44 },
            { label: "בקבוק", value: 150 },
          ],
        },
        {
          name: "6H–4 · גאיה",
          description: "יין קליל וקלאסי בסגנון אפריטיף",
          prices: [
            { label: "כוס", value: 47 },
            { label: "בקבוק", value: 162 },
          ],
        },
        {
          name: "אספרו · טוליפ",
          description: "מלא חיות, אפרסקי, מרענן וגסטרונומי",
          price: 186,
          priceLabel: "בקבוק",
          badges: ["כשר"],
        },
      ],
    },
    {
      id: "orange",
      group: "wines",
      title: "יין כתום",
      eyebrow: "ORANGE WINE",
      accent: "#b2682f",
      items: [
        {
          name: "ויניה אזמרלדה · טורס",
          description: "בעל צבע מוזהב וטעם מיוחד",
          prices: [
            { label: "כוס", value: 39 },
            { label: "בקבוק", value: 137 },
          ],
        },
      ],
    },
    {
      id: "beer",
      group: "alcohol",
      title: "בירות",
      eyebrow: "BEER",
      accent: "#9d762f",
      items: [
        { name: "בירה בבקבוק", price: 26 },
        {
          name: "בלו מון",
          description: "מהחבית · מחירים לפי גודל",
          prices: [
            { label: "קטן", value: 27 },
            { label: "גדול", value: 32 },
            { label: "ליטר", value: 59 },
          ],
        },
        {
          name: "נגב · אואזיס",
          description: "מהחבית · מחירים לפי גודל",
          prices: [
            { label: "קטן", value: 27 },
            { label: "גדול", value: 32 },
            { label: "ליטר", value: 59 },
          ],
        },
      ],
    },
    {
      id: "cocktails",
      group: "alcohol",
      title: "אלכוהול ועוד",
      eyebrow: "COCKTAILS & MORE",
      accent: "#5d6041",
      items: [
        { name: "לימונערק", price: 39 },
        { name: "וודקה רדבול", price: 39 },
        { name: "ג׳ין טוניק", price: 39 },
        { name: "אפרול שפריץ", price: 42 },
      ],
    },
    {
      id: "soft",
      group: "soft",
      title: "שתייה קלה",
      eyebrow: "SOFT DRINKS",
      accent: "#6f7855",
      items: [
        { name: "מיצים סחוטים טבעיים", price: 18 },
        { name: "שתייה מתוקה", description: "קולה · קולה זירו · ענבים · ספרייט · ספרייט זירו · פיוז טי", price: 12 },
        { name: "מים / סודה", price: 9 },
      ],
    },
  ],
};

menuData.wine.push(
  {
    id: "hot-drinks", group: "soft", title: "שתייה חמה", eyebrow: "COFFEE & TEA", accent: "#8d5d45",
    items: [
      { name: "הפוך", priceOptions: [14, 15, 16] },
      { name: "אספרסו", price: 8 },
      { name: "אספרסו כפול", price: 11 },
      { name: "אמריקנו", priceOptions: [11, 12, 13] },
      { name: "קפה שחור", price: 8 },
      { name: "קורטאדו", price: 10 },
      { name: "מקיאטו", price: 12 },
      { name: "תה", price: 10 },
      { name: "שוקו פרלינים חם", price: 15 },
    ],
  },
  {
    id: "cold-drinks", group: "soft", title: "שתייה קרה", eyebrow: "ICED DRINKS", accent: "#6f7855",
    items: [
      { name: "קפה קר", priceOptions: [16, 18] },
      { name: "אמריקנו קר", price: 13 },
      { name: "שוקו קר", price: 15 },
      { name: "מאצ׳ה", price: 21 },
    ],
  },
);

const drinkCategories = [
  { id: "wines", title: "היינות שלנו" },
  { id: "alcohol", title: "בירה ואלכוהול" },
  { id: "soft", title: "קפה ושתייה קלה" },
];

const state = {
  view: "food",
  category: "all",
};

const content = document.querySelector("#menuContent");
const categoryRail = document.querySelector("#categoryRail");
const tabs = [...document.querySelectorAll(".view-tab")];

function priceMarkup(item) {
  if (item.priceOptions) {
    return `<span class="price"><bdi dir="ltr">${item.priceOptions.join(" / ")} ₪</bdi></span>`;
  }
  if (item.prices?.length) {
    return `<div class="multi-price">${item.prices
      .map(
        (price) => `
          <span class="price-option">
            <small>${price.label}</small>
            <strong>${price.value} <span aria-hidden="true">₪</span></strong>
          </span>`,
      )
      .join("")}</div>`;
  }

  if (item.price === undefined) {
    return `<span class="price"><small>שאלו אותנו למחיר</small></span>`;
  }

  const label = item.priceLabel ? `<small>${item.priceLabel}</small>` : "";
  return `<span class="price">${item.price} ₪ ${label}</span>`;
}

function cardMarkup(item, accent) {
  if (item.type === "promo") {
    return `
      <article class="promo-card">
        <div>
          <strong>${item.name}</strong>
          <p>${item.description}</p>
        </div>
        <span class="promo-price">${item.price} ₪</span>
      </article>`;
  }

  const badges = (item.badges || [])
    .map((badge) => `<span class="badge ${item.specialBadge ? "special" : ""}">${badge}</span>`)
    .join("");

  return `
    <article class="menu-card" style="--card-accent:${accent}">
      <div>
        <h3>${item.name}</h3>
        ${item.description ? `<p class="description">${item.description}</p>` : ""}
      </div>
      <div class="card-bottom">
        ${priceMarkup(item)}
        ${badges ? `<div class="badges">${badges}</div>` : ""}
      </div>
    </article>`;
}

function renderCategories() {
  const sections = menuData[state.view];
  const categories =
    state.view === "wine"
      ? drinkCategories
      : sections.map((section) => ({ id: section.id, title: section.title }));
  categoryRail.innerHTML = `
    <button class="category-chip ${state.category === "all" ? "is-active" : ""}" type="button" data-category="all">הכול</button>
    ${categories
      .map(
        (category) => `
          <button class="category-chip ${state.category === category.id ? "is-active" : ""}" type="button" data-category="${category.id}">${category.title}</button>`,
      )
      .join("")}`;
}

function renderMenu() {
  const sourceSections = menuData[state.view];
  const categorySections = sourceSections;

  content.innerHTML = categorySections
    .map(
      (section) => `
        <section class="menu-section" id="section-${section.id}" data-section="${section.id}" data-group="${section.group || section.id}">
          <div class="section-heading">
            <h2>${section.title}</h2>
            <span>${section.eyebrow}</span>
          </div>
          <div class="menu-grid">
            ${section.items.map((item) => cardMarkup(item, section.accent)).join("")}
          </div>
        </section>`,
    )
    .join("");

}

function render() {
  renderCategories();
  renderMenu();
  tabs.forEach((tab) => {
    const active = tab.dataset.view === state.view;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active) content.setAttribute("aria-labelledby", tab.id);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.view = tab.dataset.view;
    state.category = "all";
    render();
    document.querySelector(".menu-shell").scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
  });
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const target = event.key === "Home" ? tabs[0] : event.key === "End" ? tabs[tabs.length - 1] : tabs.find((item) => item !== tab);
    target.focus();
    target.click();
  });
});

categoryRail.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  categoryRail.querySelectorAll("[data-category]").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.category === state.category);
    chip.setAttribute("aria-current", chip.dataset.category === state.category ? "true" : "false");
  });
  if (state.category !== "all") {
    requestAnimationFrame(() => {
      const selectedSection =
        document.querySelector(`#section-${state.category}`) ||
        document.querySelector(`[data-group="${state.category}"]`);
      selectedSection?.scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
    });
  } else {
    content.scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
  }
});

const toast = document.querySelector("#toast");
let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

document.querySelector("#shareButton").addEventListener("click", async () => {
  const shareData = {
    title: "La Colina — התפריט שלנו",
    text: "התפריט של La Colina בגבעת ברנר",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      showToast("הקישור הועתק");
    }
  } catch (error) {
    if (error?.name !== "AbortError") showToast("אפשר להעתיק את הקישור משורת הכתובת");
  }
});

document.querySelector("#backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "instant" : "smooth" });
});

const ambientVideos = [...document.querySelectorAll(".js-ambient-video")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const wineVideo = document.querySelector("#wineVideo");
const wineVideoToggle = document.querySelector("#wineVideoToggle");
let wineMotionEnabled = !reducedMotion.matches;
let wineInView = true;
function syncWineVideo() {
  if (wineMotionEnabled && wineInView && !document.hidden) wineVideo.play().catch(() => {});
  else wineVideo.pause();
}
function updateWineButton() {
  wineVideoToggle.textContent = wineVideo.paused ? "הפעלת הסרטון" : "עצירת הסרטון";
  wineVideoToggle.setAttribute("aria-label", wineVideoToggle.textContent);
  wineVideoToggle.setAttribute("aria-pressed", String(!wineVideo.paused));
}
wineVideo.addEventListener("play", updateWineButton);
wineVideo.addEventListener("pause", updateWineButton);
wineVideoToggle.addEventListener("click", () => {
  wineMotionEnabled = wineVideo.paused;
  syncWineVideo();
});
document.addEventListener("visibilitychange", syncWineVideo);
reducedMotion.addEventListener("change", () => {
  if (reducedMotion.matches) wineMotionEnabled = false;
  syncWineVideo();
});
if ("IntersectionObserver" in window) {
  new IntersectionObserver(([entry]) => {
    wineInView = entry.isIntersecting;
    syncWineVideo();
  }, { threshold: 0.1 }).observe(wineVideo);
}
syncWineVideo();

function pauseAmbientVideos() {
  ambientVideos.forEach((video) => video.pause());
}

let motionEnabled = false;
const motionToggle = document.querySelector("#motionToggle");
motionToggle.addEventListener("click", () => {
  motionEnabled = !motionEnabled;
  motionToggle.setAttribute("aria-pressed", String(motionEnabled));
  motionToggle.textContent = motionEnabled ? "עצירת הסרטון" : "הפעלת הסרטון";
  ambientVideos.forEach((video) => {
    if (motionEnabled) video.play().catch(() => { motionEnabled = false; motionToggle.textContent = "הפעלת הסרטון"; motionToggle.setAttribute("aria-pressed", "false"); });
    else video.pause();
  });
});
document.addEventListener("visibilitychange", () => { if (document.hidden) pauseAmbientVideos(); });
if ("IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && motionEnabled && !document.hidden) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    },
    { threshold: 0.3 },
  );

  ambientVideos.forEach((video) => videoObserver.observe(video));
  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) pauseAmbientVideos();
  });
}

const header = document.querySelector(".site-header");
const navigation = document.querySelector(".menu-navigation");
function updateStickyHeights() {
  document.documentElement.style.setProperty("--header-height", `${header.getBoundingClientRect().height}px`);
  document.documentElement.style.setProperty("--nav-height", `${navigation.getBoundingClientRect().height}px`);
}
if ("ResizeObserver" in window) {
  const layoutObserver = new ResizeObserver(updateStickyHeights);
  layoutObserver.observe(header);
  layoutObserver.observe(navigation);
}
render();
updateStickyHeights();
