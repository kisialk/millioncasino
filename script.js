(function () {
  "use strict";

  function initMobileNav() {
    var toggle = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".site-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }

    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      setOpen(open);
    });

    nav.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.closest && t.closest("a")) {
        setOpen(false);
      }
    });

    document.addEventListener("click", function (e) {
      var header = document.querySelector(".site-header");
      if (!header || !header.contains(e.target)) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    });

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 992px)").matches) {
        setOpen(false);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileNav);
  } else {
    initMobileNav();
  }
})();
