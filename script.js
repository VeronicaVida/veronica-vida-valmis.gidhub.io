const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const searchToggle = document.querySelector(".search-toggle");
const searchBarWrapper = document.querySelector(".search-bar-wrapper");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".site-search-input");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

if (searchToggle && searchBarWrapper && searchInput) {
  searchToggle.addEventListener("click", () => {
    searchBarWrapper.classList.toggle("open");
    if (searchBarWrapper.classList.contains("open")) {
      searchInput.focus();
    }
  });
}

/* Simple demo search for the current page */
if (searchForm && searchInput) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      alert("Please type something to search.");
      return;
    }

    const pageText = document.body.innerText.toLowerCase();

    if (pageText.includes(query)) {
      alert(`Found "${query}" on this page.`);
    } else {
      alert(`Sorry, "${query}" was not found on this page.`);
    }
  });
}