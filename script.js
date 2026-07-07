/* =========================================================
   DOM ELEMENTS
========================================================= */

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const localClock = document.getElementById("localClock");
const favoriteClocks = document.getElementById("favoriteClocks");
const popularClocks = document.getElementById("popularClocks");

const clockTemplate = document.getElementById("clockTemplate");
const searchTemplate = document.getElementById("searchTemplate");

const themeBtn = document.getElementById("themeBtn");
const timeFormatBtn = document.getElementById("timeFormatBtn");

/* =========================================================
   STATE
========================================================= */

let favorites = getFavorites();

let renderedClocks = [];

let localTimezone = getLocalTimezone();

/* =========================================================
   CREATE CLOCK CARD
========================================================= */

function createClockCard(data, removable = false) {
  const clone = clockTemplate.content.cloneNode(true);

  const card = clone.querySelector(".clock-card");

  const removeBtn = clone.querySelector(".remove-btn");

  clone.querySelector(".flag").textContent = data.flag;

  clone.querySelector(".country").textContent = data.country;

  clone.querySelector(".city").textContent = data.city;

  clone.querySelector(".time").dataset.timezone = data.timezone;

  clone.querySelector(".date").dataset.timezone = data.timezone;

  clone.querySelector(".utc").textContent = getUTCOffset(data.timezone);

  if (removable) {
    removeBtn.addEventListener("click", () => {
      favorites = favorites.filter((tz) => tz !== data.timezone);

      saveFavorites(favorites);

      renderFavorites();
    });
  } else {
    removeBtn.remove();
  }

  renderedClocks.push({
    time: clone.querySelector(".time"),

    date: clone.querySelector(".date"),

    timezone: data.timezone,
  });

  return clone;
}

/* =========================================================
   UPDATE CLOCKS
========================================================= */

function updateClocks() {
  renderedClocks.forEach((clock) => {
    clock.time.innerHTML = formatTime(clock.timezone);

    clock.date.textContent = formatDate(clock.timezone);
  });
}

/* =========================================================
   RENDER LOCAL CLOCK
========================================================= */

function renderLocalClock() {
  localClock.innerHTML = "";

  const place = getCountryFromTimezone(localTimezone);

  if (!place) return;

  localClock.appendChild(createClockCard(place));
}

/* =========================================================
   RENDER FAVORITES
========================================================= */

function renderFavorites() {
  favoriteClocks.innerHTML = "";

  renderedClocks = renderedClocks.filter(
    (clock) => clock.timezone === localTimezone,
  );

  if (favorites.length === 0) {
    favoriteClocks.innerHTML = `<div class="empty">
                No favorite clocks yet.
            </div>`;

    return;
  }

  favorites.forEach((timezone) => {
    const place = getCountryFromTimezone(timezone);

    if (!place) return;

    favoriteClocks.appendChild(createClockCard(place, true));
  });
}

/* =========================================================
   RENDER POPULAR
========================================================= */

function renderPopular() {
  popularClocks.innerHTML = "";

  popularCities.forEach((timezone) => {
    const place = getCountryFromTimezone(timezone);

    if (!place) return;

    popularClocks.appendChild(createClockCard(place));
  });
}
/* =========================================================
   SEARCH
========================================================= */

function clearSearchResults() {
  searchResults.innerHTML = "";

  searchResults.style.display = "none";
}

function showSearchResults() {
  searchResults.style.display = "block";
}

function renderSearchResults(results) {
  clearSearchResults();

  if (!results.length) return;

  results.forEach((place) => {
    const clone = searchTemplate.content.cloneNode(true);

    clone.querySelector(".search-flag").textContent = place.flag;

    clone.querySelector(".search-country").textContent = place.country;

    clone.querySelector(".search-city").textContent = place.city;

    clone.querySelector(".search-item").addEventListener("click", () => {
      if (!favorites.includes(place.timezone)) {
        favorites.push(place.timezone);

        saveFavorites(favorites);

        renderFavorites();
      }

      searchInput.value = "";

      clearSearchResults();
    });

    searchResults.appendChild(clone);
  });

  showSearchResults();
}

/* =========================================================
   FILTER
========================================================= */

function performSearch(keyword) {
  keyword = keyword.trim();

  if (!keyword) {
    clearSearchResults();

    return;
  }

  const results = findCountry(keyword);

  renderSearchResults(results.slice(0, 20));
}

/* =========================================================
   SEARCH EVENTS
========================================================= */

searchInput.addEventListener("input", (e) => {
  performSearch(e.target.value);
});

searchInput.addEventListener("focus", () => {
  if (searchInput.value.trim()) {
    performSearch(searchInput.value);
  }
});

/* =========================================================
   ENTER KEY
========================================================= */

searchInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  const results = findCountry(searchInput.value);

  if (!results.length) return;

  const place = results[0];

  if (!favorites.includes(place.timezone)) {
    favorites.push(place.timezone);

    saveFavorites(favorites);

    renderFavorites();
  }

  searchInput.value = "";

  clearSearchResults();
});

/* =========================================================
   CLICK OUTSIDE
========================================================= */

document.addEventListener("click", (e) => {
  if (!searchResults.contains(e.target) && !searchInput.contains(e.target)) {
    clearSearchResults();
  }
});

/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    clearSearchResults();
  }
});
/* =========================================================
   INITIAL RENDER
========================================================= */

function renderApp() {
  renderedClocks = [];

  renderLocalClock();

  renderFavorites();

  renderPopular();

  updateClocks();
}

/* =========================================================
   AUTO UPDATE
========================================================= */

function startClockUpdates() {
  updateClocks();

  setInterval(() => {
    updateClocks();
  }, 1000);
}

/* =========================================================
   REFRESH FAVORITES
========================================================= */

function refreshFavorites() {
  favorites = getFavorites();

  renderFavorites();
}

/* =========================================================
   ADD FAVORITE
========================================================= */

function addFavorite(timezone) {
  if (favorites.includes(timezone)) return;

  favorites.push(timezone);

  saveFavorites(favorites);

  renderFavorites();
}

/* =========================================================
   REMOVE FAVORITE
========================================================= */

function removeFavorite(timezone) {
  favorites = favorites.filter((item) => item !== timezone);

  saveFavorites(favorites);

  renderFavorites();
}

/* =========================================================
   POPULAR CITIES
========================================================= */

function initializePopularCities() {
  renderPopular();
}

/* =========================================================
   LOCAL CLOCK
========================================================= */

function initializeLocalClock() {
  localTimezone = getLocalTimezone();

  renderLocalClock();
}

/* =========================================================
   REBUILD UI
========================================================= */

function rebuildUI() {
  renderApp();
}

/* =========================================================
   PAGE VISIBILITY
========================================================= */

document.addEventListener(
  "visibilitychange",

  () => {
    if (!document.hidden) {
      updateClocks();
    }
  },
);

/* =========================================================
   WINDOW FOCUS
========================================================= */

window.addEventListener(
  "focus",

  () => {
    updateClocks();
  },
);
/* =========================================================
   THEME
========================================================= */

applyTheme(getTheme());

themeBtn.addEventListener("click", () => {
  toggleTheme();

  themeBtn.textContent = getTheme() === "dark" ? "☀️" : "🌙";
});

themeBtn.textContent = getTheme() === "dark" ? "☀️" : "🌙";

/* =========================================================
   12 / 24 HOUR
========================================================= */

timeFormatBtn.textContent = is24Hour ? "24H" : "12H";

timeFormatBtn.addEventListener("click", () => {
  toggleTimeFormat();

  timeFormatBtn.textContent = is24Hour ? "24H" : "12H";

  updateClocks();
});

/* =========================================================
   START APPLICATION
========================================================= */

sortCountries();

initializeLocalClock();

initializePopularCities();

refreshFavorites();

startClockUpdates();

/* =========================================================
   INITIAL RENDER
========================================================= */

renderApp();
