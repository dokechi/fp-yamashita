(function () {
  "use strict";

  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  var status = document.getElementById("site-status");
  document.querySelectorAll("[data-pending]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      document.querySelectorAll(".is-notified").forEach(function (item) {
        item.classList.remove("is-notified");
      });

      link.classList.add("is-notified");
      if (status) {
        status.textContent = link.getAttribute("data-pending") + "ページは準備中です。";
      }

      window.setTimeout(function () {
        link.classList.remove("is-notified");
      }, 1200);
    });
  });
}());
