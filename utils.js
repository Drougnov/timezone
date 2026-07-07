/* =========================================================
   SETTINGS
========================================================= */

let is24Hour = JSON.parse(localStorage.getItem("worldClock24Hour")) ?? true;

/* =========================================================
   TIME FORMATTER
========================================================= */

/* =========================================================
   TIME FORMATTER
========================================================= */

function formatTime(timezone) {
  const formatter = new Intl.DateTimeFormat([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !is24Hour,
    timeZone: timezone,
  });

  const parts = formatter.formatToParts(new Date());

  const hour = parts.find((p) => p.type === "hour")?.value ?? "";
  const minute = parts.find((p) => p.type === "minute")?.value ?? "";
  const second = parts.find((p) => p.type === "second")?.value ?? "";
  const dayPeriod = parts.find((p) => p.type === "dayPeriod")?.value ?? "";

  if (is24Hour) {
    return `${hour}:${minute}:${second}`;
  }

  return `${hour}:${minute}:${second} <span class="am-pm">${dayPeriod}</span>`;
}

/* =========================================================
   DATE FORMATTER
========================================================= */

function formatDate(timezone) {
  return new Intl.DateTimeFormat([], {
    weekday: "long",

    year: "numeric",

    month: "long",

    day: "numeric",

    timeZone: timezone,
  }).format(new Date());
}

/* =========================================================
   UTC OFFSET
========================================================= */

function getUTCOffset(timezone) {
  const now = new Date();

  const utc = new Date(
    now.toLocaleString("en-US", {
      timeZone: "UTC",
    }),
  );

  const target = new Date(
    now.toLocaleString("en-US", {
      timeZone: timezone,
    }),
  );

  const diff = (target - utc) / 60000;

  const sign = diff >= 0 ? "+" : "-";

  const abs = Math.abs(diff);

  const hours = Math.floor(abs / 60);

  const minutes = abs % 60;

  return `UTC${sign}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

/* =========================================================
   FIND COUNTRY
========================================================= */

function findCountry(keyword) {
  keyword = keyword.trim().toLowerCase();

  return countries.filter((country) => {
    return (
      country.country.toLowerCase().includes(keyword) ||
      country.city.toLowerCase().includes(keyword) ||
      country.aliases.some((alias) => alias.includes(keyword))
    );
  });
}

/* =========================================================
   LOCAL STORAGE
========================================================= */

function getFavorites() {
  return JSON.parse(localStorage.getItem("favoriteClocks")) ?? [];
}

function saveFavorites(favorites) {
  localStorage.setItem(
    "favoriteClocks",

    JSON.stringify(favorites),
  );
}

/* =========================================================
   THEME
========================================================= */

function getTheme() {
  return localStorage.getItem("theme") ?? "light";
}

function applyTheme(theme) {
  document.body.classList.toggle(
    "dark",

    theme === "dark",
  );

  localStorage.setItem(
    "theme",

    theme,
  );
}

function toggleTheme() {
  const next = getTheme() === "light" ? "dark" : "light";

  applyTheme(next);
}

/* =========================================================
   TIME FORMAT
========================================================= */

function toggleTimeFormat() {
  is24Hour = !is24Hour;

  localStorage.setItem(
    "worldClock24Hour",

    JSON.stringify(is24Hour),
  );
}

/* =========================================================
   USER TIMEZONE
========================================================= */

function getLocalTimezone() {
  return Intl.DateTimeFormat()

    .resolvedOptions().timeZone;
}

/* =========================================================
   FIND COUNTRY FROM TIMEZONE
========================================================= */

function getCountryFromTimezone(timezone) {
  return countries.find((c) => c.timezone === timezone);
}

/* =========================================================
   SORT
========================================================= */

function sortCountries() {
  countries.sort((a, b) => a.country.localeCompare(b.country));
}

/* =========================================================
   POPULAR CITIES
========================================================= */

const popularCities = [
  "Asia/Dhaka",

  "Asia/Tokyo",

  "Europe/London",

  "Europe/Paris",

  "Europe/Berlin",

  "America/New_York",

  "America/Chicago",

  "America/Los_Angeles",

  "America/Toronto",

  "Asia/Dubai",

  "Asia/Singapore",

  "Asia/Shanghai",

  "Asia/Kolkata",

  "Australia/Sydney",
];
