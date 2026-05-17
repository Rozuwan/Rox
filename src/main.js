// import css
import './style.css'

//import icons from lucide
import { createIcons, icons } from 'lucide';
createIcons({ icons });

import 'flowbite';

// search functionality
document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("search");
  const cards = document.querySelectorAll(".card");
  const sections = document.querySelectorAll(".category-section");
  const buttons = document.querySelectorAll(".filter-btn");

  let activeCategory = "all";

  // CATEGORY BUTTON CLICK
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;

      // clear search
      if (searchInput) searchInput.value = "";

      // active button UI
      buttons.forEach(b => b.removeAttribute("data-active"));
      btn.setAttribute("data-active", "true");

      applyCategory(activeCategory);
    });
  });

  //  SEARCH
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase().trim();

      if (query !== "") {
        // filter cards
        cards.forEach(card => {
          const keywords = card.dataset.name;
          card.style.display = keywords.includes(query) ? "flex" : "none";
        });

        // hide empty sections
        sections.forEach(section => {
          const visibleCards = section.querySelectorAll(
            ".card:not([style*='display: none'])"
          );
          section.style.display = visibleCards.length ? "" : "none";
        });

      } else {
        // fallback to category
        applyCategory(activeCategory);
      }
    });
  }

  // CATEGORY LOGIC
  function applyCategory(category) {
    sections.forEach(section => {
      const match =
        category === "all" || section.dataset.category === category;
      section.style.display = match ? "" : "none";
    });

    cards.forEach(card => {
      card.style.display = "flex";
    });
  }

});
const notify = document.getElementById("notify");
const closeBtn = document.getElementById("closeNotify");

// show after load
window.addEventListener("load", () => {
  setTimeout(() => {
    notify.classList.remove("opacity-0", "-translate-y-4", "pointer-events-none");

    // auto hide AFTER showing
    setTimeout(() => {
      notify.classList.add("opacity-0", "-translate-y-4", "pointer-events-none");
    }, 4000);

  }, 500);
});

// close button (desktop)
closeBtn.addEventListener("click", () => {
  notify.classList.add("opacity-0", "-translate-y-4", "pointer-events-none");
});

// tap anywhere to close (for mobile)
notify.addEventListener("click", () => {
  notify.classList.add("opacity-0", "-translate-y-4", "pointer-events-none");
});