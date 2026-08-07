(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".site-menu-toggle");
  var nav = document.querySelector(".site-nav");

  if (!header || !toggle || !nav) return;

  function closeMenu() {
    header.classList.remove("is-menu-open");
    document.body.classList.remove("is-menu-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var willOpen = !header.classList.contains("is-menu-open");
    header.classList.toggle("is-menu-open", willOpen);
    document.body.classList.toggle("is-menu-open", willOpen);
    toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) closeMenu();
  });
})();
