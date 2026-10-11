/* =====================================================================
   FAIYAZ COMMUNICATION — website behavior
   You do NOT need to edit this file. Change content in site-config.js
   (company info, packages, FAQ) and js/i18n.js (Bangla/English text).
   ===================================================================== */

(function () {
  "use strict";

  var site = window.SITE || {};
  var packages = window.PACKAGES || [];
  var faqs = window.FAQS || [];
  var STR = window.I18N || { bn: {}, en: {} };

  /* ---------- Language: Bangla default, remembered per visitor ---------- */
  var lang = "bn";
  try { lang = localStorage.getItem("fc-lang") || "bn"; } catch (e) { lang = "bn"; }
  if (lang !== "bn" && lang !== "en") lang = "bn";

  function t(key) {
    if (STR[lang] && STR[lang][key] !== undefined) return STR[lang][key];
    if (STR.en && STR.en[key] !== undefined) return STR.en[key];
    return key;
  }

  function fillPlaceholders(s) {
    return String(s)
      .replace(/{{phone}}/g, site.phoneDisplay || site.phone || "")
      .replace(/{{phoneRaw}}/g, site.phone || "");
  }

  /* Apply translations to everything tagged with data-i18n* attributes */
  function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = fillPlaceholders(t(el.getAttribute("data-i18n")));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = fillPlaceholders(t(el.getAttribute("data-i18n-html")));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.setAttribute("placeholder", fillPlaceholders(t(el.getAttribute("data-i18n-ph"))));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", fillPlaceholders(t(el.getAttribute("data-i18n-aria"))));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", fillPlaceholders(t(el.getAttribute("data-i18n-alt"))));
    });
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-setlang]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-setlang") === lang);
    });
  }

  /* ---------- Fill company details (elements with data-site="...") ---------- */
  function fillSite() {
    var siteMap = {
      phone: site.phone, phoneDisplay: site.phoneDisplay, email: site.email,
      address: site.address, hours: site.hours, name: site.name, tagline: site.tagline,
      aboutShort: (lang === "bn" && site.aboutShortBn) ? site.aboutShortBn : site.aboutShort
    };
    document.querySelectorAll("[data-site]").forEach(function (el) {
      var key = el.getAttribute("data-site");
      if (siteMap[key]) {
        if (el.tagName === "A" && (key === "phone" || key === "email")) {
          el.href = (key === "phone" ? "tel:" : "mailto:") + siteMap[key];
        }
        el.textContent = siteMap[key];
      }
    });
  }

  /* ---------- External links: Pay Bill portal, FTP server, WhatsApp ---------- */
  function wireLinks() {
    document.querySelectorAll("[data-paybill]").forEach(function (el) {
      el.setAttribute("href", site.billPortalUrl || "https://user.fccloud.net");
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    document.querySelectorAll("[data-ftp]").forEach(function (el) {
      el.setAttribute("href", site.ftpUrl || "http://172.16.200.200");
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
      el.setAttribute("href", "https://wa.me/" + (site.whatsapp || ""));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  /* ---------- Language switcher ---------- */
  function setLang(l) {
    if (l !== "bn" && l !== "en") return;
    lang = l;
    try { localStorage.setItem("fc-lang", l); } catch (e) {}
    applyI18n();
    wireLinks();
    fillSite();
    renderPackages();
    renderRotator();
    renderFaq();
    observeReveals();
  }
  document.querySelectorAll("[data-setlang]").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.getAttribute("data-setlang")); });
  });

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScrollHeader() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  /* ---------- Package cards (rendered from site-config.js) ---------- */
  function packageCard(p) {
    var badge = p.badge ? '<span class="package-badge">' + escapeHtml(p.badge) + "</span>" : "";
    var features = (p.features || []).map(function (f) {
      return "<li>" + escapeHtml(f) + "</li>";
    }).join("");
    return (
      '<article class="package-card reveal' + (p.badge ? " popular" : "") + '" data-speed="' + p.speed + '">' +
        badge +
        '<div class="pkg-name">' + escapeHtml(p.name) + "</div>" +
        '<div class="pkg-speed">' + p.speed + " <small>Mbps</small></div>" +
        '<div class="pkg-price"><b>৳' + p.price + "</b> <span>" + escapeHtml(t("pkg.perMonth")) + "</span></div>" +
        "<ul>" + features + "</ul>" +
        '<a class="btn btn-outline" style="width:100%" href="contact.html">' + escapeHtml(t("pkg.get")) + "</a>" +
      "</article>"
    );
  }

  function renderPackages() {
    document.querySelectorAll("[data-packages]").forEach(function (grid) {
      var limit = parseInt(grid.getAttribute("data-packages"), 10);
      var list = isNaN(limit) ? packages : packages.slice(0, limit);
      grid.innerHTML = list.map(packageCard).join("");
    });
    observeReveals();
  }

  /* ---------- Home hero: rotating package showcase (changes every 2 sec) ---------- */
  function renderRotator() {
    var slot = document.getElementById("packageRotator");
    if (!slot || !packages.length) return;

    /* stop the previous rotation timer before re-rendering (e.g. language switch) */
    if (slot._stopRot) { slot._stopRot(); slot._stopRot = null; }
    var startIdx = slot._rotIdx || 0;
    if (startIdx >= packages.length) startIdx = 0;

    var slidesHtml = packages.map(function (p, i) {
      var badge = p.badge ? '<span class="package-badge">' + escapeHtml(p.badge) + "</span>" : "";
      return (
        '<div class="rot-slide' + (i === startIdx ? " active" : "") + '">' + badge +
          '<div class="speed-big">' + p.speed + ' <small>Mbps</small></div>' +
          "<h3>" + escapeHtml(p.name) + "</h3>" +
          '<div class="price-row"><b>৳' + p.price + ' <small>' + escapeHtml(t("pkg.perMonth")) + "</small></b></div>" +
          '<a class="btn btn-primary" style="width:100%" href="contact.html">' + escapeHtml(t("rot.getPlan")) + "</a>" +
        "</div>"
      );
    }).join("");

    var dotsHtml = packages.map(function (p, i) {
      return '<button type="button" class="rot-dot' + (i === startIdx ? " active" : "") +
        '" data-i="' + i + '" aria-label="' + escapeHtml(p.name) + " " + p.speed + ' Mbps"></button>';
    }).join("");

    slot.innerHTML =
      '<div class="rot-slides">' + slidesHtml + "</div>" +
      '<div class="rot-dots">' + dotsHtml + "</div>" +
      '<a href="packages.html" class="rot-compare">' + escapeHtml(t("rot.compare")) + "</a>";

    var slides = slot.querySelectorAll(".rot-slide");
    var dots = slot.querySelectorAll(".rot-dot");
    var idx = startIdx;
    var timer = null;

    function show(n) {
      idx = (n + slides.length) % slides.length;
      slot._rotIdx = idx;
      slides.forEach(function (s, i) { s.classList.toggle("active", i === idx); });
      dots.forEach(function (d, i) { d.classList.toggle("active", i === idx); });
    }
    function start() {
      stop();
      timer = setInterval(function () { show(idx + 1); }, 2000);
    }
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    dots.forEach(function (d) {
      d.addEventListener("click", function () {
        show(parseInt(d.getAttribute("data-i"), 10));
        start();
      });
    });
    slot.onmouseenter = stop;
    slot.onmouseleave = start;

    slot._stopRot = stop;
    rotCtl = { stop: stop, start: start };
    observeReveals();
    start();
  }

  /* one shared tab-visibility handler for the rotator (no duplicate listeners) */
  var rotCtl = null;
  document.addEventListener("visibilitychange", function () {
    if (!rotCtl) return;
    if (document.hidden) { rotCtl.stop(); } else { rotCtl.start(); }
  });

  /* ---------- Speed filter (Packages page) ---------- */
  var chips = document.querySelectorAll(".chip[data-filter]");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      var f = chip.getAttribute("data-filter"); // all | basic | mid | fast
      document.querySelectorAll(".package-card").forEach(function (card) {
        var s = parseInt(card.getAttribute("data-speed"), 10);
        var show =
          f === "all" || (f === "basic" && s <= 30) ||
          (f === "mid" && s > 30 && s <= 60) || (f === "fast" && s > 60);
        card.style.display = show ? "" : "none";
      });
    });
  });

  /* ---------- FAQ accordion (rendered from site-config.js, bilingual) ---------- */
  function renderFaq() {
    var list = document.querySelector("[data-faq]");
    if (!list) return;
    list.innerHTML = faqs.map(function (item) {
      var q = (lang === "bn" && item.q_bn) ? item.q_bn : item.q;
      var a = (lang === "bn" && item.a_bn) ? item.a_bn : item.a;
      return (
        '<div class="faq-item reveal">' +
          '<button class="faq-q" type="button">' + escapeHtml(q) +
            '<span class="arrow">▾</span></button>' +
          '<div class="faq-a"><p>' + escapeHtml(a) + "</p></div>" +
        "</div>"
      );
    }).join("");
    list.querySelectorAll(".faq-item").forEach(function (item) {
      var btn = item.querySelector(".faq-q");
      var ans = item.querySelector(".faq-a");
      btn.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        list.querySelectorAll(".faq-item.open").forEach(function (o) {
          o.classList.remove("open");
          o.querySelector(".faq-a").style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add("open");
          ans.style.maxHeight = ans.scrollHeight + "px";
        }
      });
    });
    observeReveals();
  }

  /* ---------- Contact form: opens the visitor's email app, pre-filled ---------- */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var topic = form.topic.value;
      var msg = form.message.value.trim();
      if (!name || !phone || !msg) {
        alert(t("form.alert"));
        return;
      }
      var subject = encodeURIComponent(t("form.subPre") + topic);
      var body = encodeURIComponent(
        t("form.lName") + ": " + name + "\n" +
        t("form.lPhone") + ": " + phone + "\n" +
        t("form.lTopic") + ": " + topic + "\n\n" +
        t("form.lMsg") + ":\n" + msg
      );
      window.location.href = "mailto:" + (site.email || "info@fccloud.net") +
        "?subject=" + subject + "&body=" + body;
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var observer;
  function observeReveals() {
    var els = document.querySelectorAll(".reveal:not(.visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("visible");
            observer.unobserve(en.target);
          }
        });
      }, { threshold: 0.12 });
    }
    els.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Back to top ---------- */
  var toTop = document.getElementById("backToTop");
  if (toTop) {
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- helpers ---------- */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- go ---------- */
  applyI18n();
  wireLinks();
  fillSite();
  renderPackages();
  renderRotator();
  renderFaq();
  observeReveals();
})();
