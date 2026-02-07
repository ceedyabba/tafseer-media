// js/pages/home.js

// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu
const btn = document.querySelector(".nav-toggle");
const menu = document.getElementById("mobileMenu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    const open = !menu.hasAttribute("hidden");
    if (open) {
      menu.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
    } else {
      menu.removeAttribute("hidden");
      btn.setAttribute("aria-expanded", "true");
    }
  });
}

// App links (placeholder)
const ANDROID_APP_URL = "#";
const IOS_APP_URL = "#";

const appLink = document.getElementById("downloadAppLink");
if (appLink) {
  appLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(ANDROID_APP_URL || IOS_APP_URL, "_blank", "noopener,noreferrer");
  });
}
