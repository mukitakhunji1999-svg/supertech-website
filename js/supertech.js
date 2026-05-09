/**
 * SUPERTECH WATER SOLUTION — site interactions
 * Vanilla JS only
 */
(function () {
  "use strict";

  var doc = document;
  var win = window;

  /* —— Sticky nav solid state —— */
  var nav = doc.querySelector(".site-nav");
  function onScrollNav() {
    if (!nav) return;
    if (win.scrollY > 8) nav.classList.add("is-solid");
    else nav.classList.remove("is-solid");
  }
  win.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  /* —— Mobile menu —— */
  var toggle = doc.querySelector(".menu-toggle");
  var drawer = doc.querySelector(".mobile-drawer");
  var backdrop = doc.querySelector(".mobile-drawer__backdrop");

  function setDrawer(open) {
    if (!drawer || !toggle) return;
    drawer.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    doc.body.style.overflow = open ? "hidden" : "";
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setDrawer(!drawer.classList.contains("is-open"));
    });
  }
  if (backdrop) {
    backdrop.addEventListener("click", function () {
      setDrawer(false);
    });
  }
  doc.querySelectorAll(".mobile-drawer a").forEach(function (a) {
    a.addEventListener("click", function () {
      setDrawer(false);
    });
  });

  /* —— Smooth anchor offset for fixed header —— */
  var headerOffset = function () {
    var top = doc.querySelector(".top-bar");
    var n = doc.querySelector(".site-nav");
    return (top ? top.offsetHeight : 0) + (n ? n.offsetHeight : 0) + 12;
  };

  doc.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var id = a.getAttribute("href");
    if (!id || id === "#") return;
    var el = doc.querySelector(id);
    if (!el) return;
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var y = el.getBoundingClientRect().top + win.pageYOffset - headerOffset();
      win.scrollTo({ top: y, behavior: "smooth" });
      setDrawer(false);
    });
  });

  /* —— Hero slider —— */
  var slides = doc.querySelectorAll(".hero-slide");
  var dots = doc.querySelectorAll(".hero-dot");
  var prev = doc.querySelector(".hero-arrow--prev");
  var next = doc.querySelector(".hero-arrow--next");
  var current = 0;
  var autoTimer;

  function goSlide(i) {
    if (!slides.length) return;
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, idx) {
      s.classList.toggle("is-active", idx === current);
    });
    dots.forEach(function (d, idx) {
      d.classList.toggle("is-active", idx === current);
    });
  }

  function nextSlide() {
    goSlide(current + 1);
  }

  function prevSlide() {
    goSlide(current - 1);
  }

  function startAuto() {
    stopAuto();
    autoTimer = win.setInterval(nextSlide, 7000);
  }

  function stopAuto() {
    if (autoTimer) win.clearInterval(autoTimer);
  }

  if (slides.length) {
    if (next) next.addEventListener("click", function () { stopAuto(); nextSlide(); startAuto(); });
    if (prev) prev.addEventListener("click", function () { stopAuto(); prevSlide(); startAuto(); });
    dots.forEach(function (d, idx) {
      d.addEventListener("click", function () { stopAuto(); goSlide(idx); startAuto(); });
    });
    var hero = doc.querySelector(".hero-slider");
    if (hero) {
      hero.addEventListener("mouseenter", stopAuto);
      hero.addEventListener("mouseleave", startAuto);
    }
    startAuto();
  }

  /* —— Product tabs (home) —— */
  doc.querySelectorAll("[data-product-tabs]").forEach(function (wrap) {
    var btns = wrap.querySelectorAll(".tab-btn");
    var panels = wrap.querySelectorAll(".tab-panel");
    btns.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        btns.forEach(function (b) { b.classList.remove("is-active"); });
        panels.forEach(function (p) { p.classList.remove("is-active"); });
        btn.classList.add("is-active");
        if (panels[i]) panels[i].classList.add("is-active");
      });
    });
  });

  /* —— Animated counters —— */
  function animateValue(el, end, duration) {
    var start = 0;
    var t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min(1, (ts - t0) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (end - start) * eased);
      if (p < 1) win.requestAnimationFrame(step);
    }
    win.requestAnimationFrame(step);
  }

  var counted = false;
  function tryCount() {
    if (counted) return;
    var block = doc.querySelector(".stat-row");
    if (!block) return;
    var rect = block.getBoundingClientRect();
    if (rect.top < win.innerHeight * 0.88) {
      counted = true;
      doc.querySelectorAll("[data-count]").forEach(function (el) {
        var n = parseInt(el.getAttribute("data-count"), 10);
        if (!isNaN(n)) animateValue(el, n, 1400 + Math.random() * 400);
      });
    }
  }
  win.addEventListener("scroll", tryCount, { passive: true });
  tryCount();

  /* —— Testimonial slider —— */
  var tTrack = doc.querySelector(".testimonial-track");
  var tDots = doc.querySelectorAll(".testimonial-dot");
  var tSlides = doc.querySelectorAll(".testimonial-slide");
  var ti = 0;
  var tTimer;

  function goTestimonial(i) {
    if (!tTrack || !tSlides.length) return;
    ti = (i + tSlides.length) % tSlides.length;
    tTrack.style.transform = "translateX(" + -ti * 100 + "%)";
    tDots.forEach(function (d, idx) {
      d.classList.toggle("is-active", idx === ti);
    });
  }

  function startTestimonials() {
    if (!tSlides.length) return;
    tTimer = win.setInterval(function () {
      goTestimonial(ti + 1);
    }, 8000);
  }

  if (tTrack && tSlides.length) {
    tDots.forEach(function (d, idx) {
      d.addEventListener("click", function () {
        if (tTimer) win.clearInterval(tTimer);
        goTestimonial(idx);
        startTestimonials();
      });
    });
    startTestimonials();
  }

  /* —— Quote builder summary —— */
  var qb = doc.getElementById("quoteBuilder");
  if (qb) {
    var out = doc.getElementById("quoteSummary");
    var fields = [
      "qbProduct", "qbCapacity", "qbFlow", "qbHead", "qbMaterial", "qbQty", "qbApp", "qbNotes"
    ];

    function buildSummary() {
      var lines = [];
      lines.push("SUPERTECH WATER SOLUTION — RFQ SUMMARY");
      lines.push("────────────────────────────────────");
      fields.forEach(function (id) {
        var el = doc.getElementById(id);
        if (!el) return;
        var label = el.getAttribute("data-label") || id;
        var val = (el.type === "file" && el.files && el.files[0]) ? el.files[0].name : el.value;
        if (val) lines.push(label + ": " + val);
      });
      lines.push("────────────────────────────────────");
      lines.push("Submit this summary via email or the contact form for a formal quotation.");
      if (out) out.textContent = lines.join("\n");
    }

    qb.addEventListener("input", buildSummary);
    qb.addEventListener("change", buildSummary);
    buildSummary();

    qb.addEventListener("submit", function (e) {
      e.preventDefault();
      var hp = qb.querySelector('input[name="_company_website"]');
      if (hp && hp.value) return;
      alert("Thank you. Your technical summary is ready — copy from the summary panel or use Contact to send it to our engineering desk.");
    });
  }

  /* —— Contact form (simple) —— */
  var cf = doc.getElementById("contactForm");
  if (cf) {
    cf.addEventListener("submit", function (e) {
      e.preventDefault();
      var hp = cf.querySelector('input[name="_company_website"]');
      if (hp && hp.value) return;
      alert("Thank you. In production, connect this form to your CRM or email endpoint.");
    });
  }

  doc.querySelectorAll(".product-inquiry-form").forEach(function (pf) {
    pf.addEventListener("submit", function (e) {
      e.preventDefault();
      var hp = pf.querySelector('input[name="_company_website"]');
      if (hp && hp.value) return;
      alert("Thank you. Our engineering desk will review your product inquiry.");
    });
  });

  /* —— Reveal on scroll —— */
  var reveals = doc.querySelectorAll(".reveal");
  function revealTick() {
    reveals.forEach(function (el) {
      if (el.classList.contains("is-visible")) return;
      var r = el.getBoundingClientRect();
      if (r.top < win.innerHeight * 0.9) el.classList.add("is-visible");
    });
  }
  win.addEventListener("scroll", revealTick, { passive: true });
  win.addEventListener("resize", revealTick);
  revealTick();

  /* —— Product gallery (detail pages) —— */
  var mainImg = doc.querySelector("[data-gallery-main]");
  if (mainImg) {
    doc.querySelectorAll("[data-gallery-thumb]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var src = btn.getAttribute("data-src");
        if (src) mainImg.src = src;
        doc.querySelectorAll("[data-gallery-thumb]").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
      });
    });
  }
})();
