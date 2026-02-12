// js/pages/login.js
const $ = (sel) => document.querySelector(sel);
const STORAGE_SESSION = "tafseer:session";

function safeJsonParse(str) {
  try { return JSON.parse(str); } catch { return null; }
}
function getSession() {
  return safeJsonParse(localStorage.getItem(STORAGE_SESSION) || "null");
}
function setMessage(text = "", type = "ok") {
  const el = $("#msg");
  if (!el) return;
  el.hidden = !text;
  el.textContent = text;
  el.dataset.type = type;
}
function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function saveSession(session) {
  localStorage.setItem(STORAGE_SESSION, JSON.stringify(session));
  window.dispatchEvent(new CustomEvent("auth:changed", { detail: session }));
}
function initYear() {
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
}

function boot() {
  initYear();

  // If already logged in, go HOME (not profile)
  const existing = getSession();
  if (existing && existing.email) {
    window.location.replace("index.html");
    return;
  }

  const form = $("#loginForm");
  const nameEl = $("#name");
  const emailEl = $("#email");
  const passEl = $("#password");
  if (!form || !nameEl || !emailEl || !passEl) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    setMessage("");

    const name = (nameEl.value || "").trim();
    const email = (emailEl.value || "").trim().toLowerCase();
    const password = (passEl.value || "").trim();

    if (name.length < 2) return setMessage("Enter your full name.", "err");
    if (!isEmail(email)) return setMessage("Enter a valid email.", "err");
    if (password.length < 6) return setMessage("Password must be at least 6 characters.", "err");

    const session = {
      name,
      email,
      loggedInAt: new Date().toISOString(),
    };

    saveSession(session);
    setMessage("Signed in. Redirecting…", "ok");

    window.setTimeout(() => {
      window.location.href = "index.html"; // ✅ go back to home
    }, 250);
  });
}

boot();
// js/pages/login.js
const STORAGE_SESSION = "tafseer:session";
const $ = (s) => document.querySelector(s);

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function setMessage(text, type = "ok") {
  const el = $("#msg");
  if (!el) return;
  el.hidden = !text;
  el.textContent = text;
  el.dataset.type = type;
}

function boot() {
  const form = $("#loginForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    setMessage("");

    const name = ($("#name")?.value || "").trim();
    const email = ($("#email")?.value || "").trim().toLowerCase();
    const password = ($("#password")?.value || "").trim();

    if (name.length < 2) return setMessage("Enter your full name.", "err");
    if (!isEmail(email)) return setMessage("Enter a valid email.", "err");
    if (password.length < 6) return setMessage("Password must be at least 6 characters.", "err");

    localStorage.setItem(STORAGE_SESSION, JSON.stringify({
      name,
      email,
      loggedInAt: new Date().toISOString(),
    }));

    // go HOME after login
    // js/pages/login.js
const $ = (sel) => document.querySelector(sel);

const STORAGE_SESSION = "tafseer:session";

function initYear() {
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
}

function safeJsonParse(str) {
  try { return JSON.parse(str); } catch { return null; }
}

function getSession() {
  return safeJsonParse(localStorage.getItem(STORAGE_SESSION) || "null");
}

function setMessage(text = "", type = "ok") {
  const el = $("#msg");
  if (!el) return;
  el.hidden = !text;
  el.textContent = text;
  el.dataset.type = type;
}

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function saveSession(session) {
  localStorage.setItem(STORAGE_SESSION, JSON.stringify(session));
  window.dispatchEvent(new CustomEvent("auth:changed", { detail: session }));
}

function boot() {
  initYear();

  // already logged in -> go home
  const existing = getSession();
  if (existing && existing.email) {
    window.location.replace("index.html");
    return;
  }

  const form = $("#loginForm");
  const nameEl = $("#name");
  const emailEl = $("#email");
  const passEl = $("#password");

  if (!form || !nameEl || !emailEl || !passEl) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    setMessage("");

    const name = (nameEl.value || "").trim();
    const email = (emailEl.value || "").trim().toLowerCase();
    const password = (passEl.value || "").trim();

    if (name.length < 2) return setMessage("Enter your full name.", "err");
    if (!isEmail(email)) return setMessage("Enter a valid email.", "err");
    if (password.length < 6) return setMessage("Password must be at least 6 characters.", "err");

    const session = {
      name,
      email,
      loggedInAt: new Date().toISOString(),
    };

    saveSession(session);
    setMessage("Signed in. Redirecting…", "ok");

    setTimeout(() => {
      window.location.href = "index.html"; // ✅ go back to home
    }, 250);
  });

  const app = $("#downloadAppLink");
  if (app) {
    app.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Mobile app link will be provided here.");
    });
  }
}

boot();

  });
}

boot();
