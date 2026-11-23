let menuData = { food: [], wine: [] };
const MENU_API_URL = "https://la-colina-menu-service.oribra.chatgpt.site/menu";

async function loadMenuData() {
  try {
    const response = await fetch(MENU_API_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`Menu API request failed: ${response.status}`);
    const result = await response.json();
    menuData = result.menu;
  } catch (error) {
    const fallback = await fetch("./menu-data.json", { cache: "no-store" });
    if (!fallback.ok) throw error;
    menuData = await fallback.json();
  }
}

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

const accessibilityTrigger = document.querySelector("#accessibilityTrigger");
const accessibilityPanel = document.querySelector("#accessibilityPanel");
const accessibilityClose = document.querySelector("#accessibilityClose");
const accessibilityAnnouncement = document.querySelector("#accessibilityAnnouncement");
const accessibilityStorageKey = "laColinaAccessibility";
const accessibilityDefaults = { fontScale: 100, contrast: false, links: false, readable: false, motion: false };
let accessibilitySettings = { ...accessibilityDefaults };

try {
  accessibilitySettings = { ...accessibilityDefaults, ...JSON.parse(localStorage.getItem(accessibilityStorageKey) || "{}") };
} catch {
  accessibilitySettings = { ...accessibilityDefaults };
}

function accessibilityActionButton(action) {
  return accessibilityPanel.querySelector(`[data-accessibility-action="${action}"]`);
}

function announceAccessibility(message) {
  accessibilityAnnouncement.textContent = "";
  requestAnimationFrame(() => { accessibilityAnnouncement.textContent = message; });
}

function applyAccessibilitySettings(announce = false) {
  const root = document.documentElement;
  root.style.fontSize = `${accessibilitySettings.fontScale}%`;
  root.classList.toggle("a11y-high-contrast", accessibilitySettings.contrast);
  root.classList.toggle("a11y-links", accessibilitySettings.links);
  root.classList.toggle("a11y-readable", accessibilitySettings.readable);
  root.classList.toggle("a11y-no-motion", accessibilitySettings.motion);
  accessibilityActionButton("contrast").setAttribute("aria-pressed", String(accessibilitySettings.contrast));
  accessibilityActionButton("links").setAttribute("aria-pressed", String(accessibilitySettings.links));
  accessibilityActionButton("readable").setAttribute("aria-pressed", String(accessibilitySettings.readable));
  accessibilityActionButton("motion").setAttribute("aria-pressed", String(accessibilitySettings.motion));
  try {
    localStorage.setItem(accessibilityStorageKey, JSON.stringify(accessibilitySettings));
  } catch {
    // The controls still work for the current visit when browser storage is unavailable.
  }

  if (accessibilitySettings.motion) {
    wineMotionEnabled = false;
    motionEnabled = false;
    wineVideo.pause();
    pauseAmbientVideos();
    updateWineButton();
    motionToggle.textContent = "הפעלת הסרטון";
    motionToggle.setAttribute("aria-pressed", "false");
  }
  if (announce) announceAccessibility(`הגדרות הנגישות עודכנו. גודל הטקסט ${accessibilitySettings.fontScale} אחוז.`);
}

function setAccessibilityPanel(open) {
  accessibilityPanel.hidden = !open;
  accessibilityTrigger.setAttribute("aria-expanded", String(open));
  if (open) accessibilityPanel.querySelector("button").focus();
  else accessibilityTrigger.focus();
}

accessibilityTrigger.addEventListener("click", () => setAccessibilityPanel(accessibilityPanel.hidden));
accessibilityClose.addEventListener("click", () => setAccessibilityPanel(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !accessibilityPanel.hidden) setAccessibilityPanel(false);
});

accessibilityPanel.addEventListener("click", (event) => {
  const button = event.target.closest("[data-accessibility-action]");
  if (!button) return;
  const action = button.dataset.accessibilityAction;
  if (action === "font-up") accessibilitySettings.fontScale = Math.min(140, accessibilitySettings.fontScale + 10);
  if (action === "font-down") accessibilitySettings.fontScale = Math.max(90, accessibilitySettings.fontScale - 10);
  if (action === "contrast") accessibilitySettings.contrast = !accessibilitySettings.contrast;
  if (action === "links") accessibilitySettings.links = !accessibilitySettings.links;
  if (action === "readable") accessibilitySettings.readable = !accessibilitySettings.readable;
  if (action === "motion") accessibilitySettings.motion = !accessibilitySettings.motion;
  if (action === "reset") accessibilitySettings = { ...accessibilityDefaults };
  applyAccessibilitySettings(true);
});

applyAccessibilitySettings();
loadMenuData()
  .then(render)
  .catch(() => {
    content.innerHTML = `<section class="menu-load-error" role="alert"><h2>לא הצלחנו לטעון את התפריט</h2><p>נסו לרענן את העמוד בעוד רגע.</p></section>`;
  });
updateStickyHeights();
