/* ==========================================================
   전부 방문자의 브라우저에서 돌아갑니다 — 서버가 필요 없습니다.
   ========================================================== */

(function () {
  "use strict";

  /* ---- 모바일 메뉴 토글 ---- */
  var toggle = document.getElementById("navToggle");
  var links  = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    });

    // 메뉴 항목을 누르면 닫기
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- 논문 필터 ---- */
  var filterBar = document.getElementById("pubFilters");

  if (filterBar) {
    var sections = document.querySelectorAll("[data-section]");

    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;

      var want = btn.getAttribute("data-filter");

      filterBar.querySelectorAll(".filter").forEach(function (b) {
        b.classList.toggle("is-on", b === btn);
      });

      sections.forEach(function (sec) {
        var kind = sec.getAttribute("data-section");
        sec.hidden = !(want === "all" || want === kind);
      });
    });
  }
})();
