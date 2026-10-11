/* =====================================================================
   FAIYAZ COMMUNICATION — website behavior
   You do NOT need to edit this file. Change content in site-config.js.
   ===================================================================== */

(function () {
  "use strict";

  var site = window.SITE || {};
  var packages = window.PACKAGES || [];
  var faqs = window.FAQS || [];

  /* ---------- Fill contact details everywhere (elements with data-site="...") ---------- */
  var siteMap = {
    phone: site.phone, phoneDisplay: site.phoneDisplay, email: site.email,
    address: site.address, hours: site.hours, name: site.name, tagline: site.tagline
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

  /* ---------- Pay Bill links: point to the live customer portal ---------- */
  document.querySelectorAll("[data-paybill]").forEach(function (el) {
    el.setAttribute("href", site.billPortalUrl || "https://user.fccloud.net");
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  /* ---------- FTP links: point to the company's FTP server ---------- */
  document.querySelectorAll("[data-ftp]").forEach(function (el) {
    el.setAttribute("href", site.ftpUrl || "http://172.16.200.200");
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  /* ---------- WhatsApp links ---------- */
  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    el.setAttribute("href", "https://wa.me/" + (site.whatsapp || ""));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
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
        '<div class="pkg-price"><b>৳' + p.price + "</b> <span>/month</span></div>" +
        "<ul>" + features + "</ul>" +
        '<a class="btn btn-outline" style="width:100%" href="contact.html">Get this package</a>' +
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

  /* ---------- FAQ accordion (rendered from site-config.js) ---------- */
  function renderFaq() {
    var list = document.querySelector("[data-faq]");
    if (!list) return;
    list.innerHTML = faqs.map(function (item) {
      return (
        '<div class="faq-item reveal">' +
          '<button class="faq-q" type="button">' + escapeHtml(item.q) +
            '<span class="arrow">▾</span></button>' +
          '<div class="faq-a"><p>' + escapeHtml(item.a) + "</p></div>" +
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
        alert("Please fill in your name, phone number and message.");
        return;
      }
      var subject = encodeURIComponent("New connection enquiry — " + topic);
      var body = encodeURIComponent(
        "Name: " + name + "\nPhone: " + phone + "\nTopic: " + topic + "\n\nMessage:\n" + msg
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

  /* ---------- Featured package (home hero card) ---------- */
  function renderFeatured() {
    var slot = document.getElementById("featuredPackage");
    if (!slot || !packages.length) return;
    var p = packages.find(function (x) { return x.badge === "Most Popular"; }) ||
            packages.find(function (x) { return x.badge; }) || packages[0];
    var features = (p.features || []).slice(0, 3).map(function (f) {
      return "<li>" + escapeHtml(f) + "</li>";
    }).join("");
    slot.innerHTML =
      '<div class="speed-big">' + p.speed + ' <small>Mbps</small></div>' +
      "<h3>" + escapeHtml(p.name) + " Package</h3>" +
      "<p>" + (p.badge ? escapeHtml(p.badge) + " — " : "") + "our most loved plan.</p>" +
      '<div class="price-row"><b>৳' + p.price + " <small>/month</small></b>" +
      '<span style="color:var(--muted);font-size:0.85rem">Unlimited data</span></div>' +
      '<a class="btn btn-primary" style="width:100%" data-paybill href="#">Get This Plan</a>' +
      '<a href="packages.html" style="display:block;text-align:center;margin-top:12px;font-weight:600;color:var(--green-dark);font-size:0.9rem">Compare all packages →</a>';
    slot.querySelectorAll("[data-paybill]").forEach(function (el) {
      el.setAttribute("href", site.billPortalUrl || "https://user.fccloud.net");
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    observeReveals();
  }

  /* ---------- go ---------- */
  renderPackages();
  renderFeatured();
  renderFaq();
  observeReveals();
})();
