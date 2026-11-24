/* AI-Folkbildaren – små hjälpskript: mörkt läge, aktiv menylänk,
   kopiera-knappar för prompter och mjuk inglidning av avsnitt. */
(function () {
  'use strict';

  /* ── Mörkt/ljust läge ─────────────────────────────────────────── */
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  function currentTheme() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ── Aktiv länk i menyn när man scrollar ──────────────────────── */
  var links = Array.prototype.slice.call(document.querySelectorAll('.navlinks a[href^="#"]'));
  if ('IntersectionObserver' in window && links.length) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('active'); });
        var a = byId[en.target.id];
        if (a) {
          a.classList.add('active');
          if (a.scrollIntoView && window.innerWidth < 900) a.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function (id) { var el = document.getElementById(id); if (el) spy.observe(el); });
  }

  /* ── Inglidning ───────────────────────────────────────────────── */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('in'); });
  }

  /* ── Kopiera prompt ───────────────────────────────────────────── */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? resolve() : reject(); } catch (e) { reject(e); }
      document.body.removeChild(ta);
    });
  }
  /* Gör om promptens HTML till ren text: stycken åtskilda av tomrad,
     numrerade listor får "1. " och punktlistor "- ". */
  function promptToText(el) {
    var parts = [];
    Array.prototype.forEach.call(el.children, function (child) {
      var tag = child.tagName;
      if (tag === 'OL' || tag === 'UL') {
        var lines = [];
        Array.prototype.forEach.call(child.children, function (li, i) {
          lines.push((tag === 'OL' ? (i + 1) + '. ' : '- ') + li.innerText.trim());
        });
        parts.push(lines.join('\n'));
      } else {
        parts.push(child.innerText.trim());
      }
    });
    return parts.join('\n\n');
  }

  Array.prototype.forEach.call(document.querySelectorAll('.copy-btn'), function (btn) {
    var label = btn.querySelector('.copy-label');
    var original = label ? label.textContent : '';
    btn.addEventListener('click', function () {
      var box = document.getElementById(btn.getAttribute('data-copy'));
      if (!box) return;
      var body = box.querySelector('.prompt-text') || box;
      copyText(promptToText(body)).then(function () {
        btn.setAttribute('data-done', '');
        if (label) label.textContent = 'Kopierad!';
        setTimeout(function () { btn.removeAttribute('data-done'); if (label) label.textContent = original; }, 2000);
      }, function () {
        if (label) label.textContent = 'Markera och kopiera';
      });
    });
  });

  /* ── Årtal i sidfoten ─────────────────────────────────────────── */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
