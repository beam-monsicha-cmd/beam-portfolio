(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* เมนูมือถือ */
  var menuButton = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav-links');
  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '✕' : '☰';
    });
  }
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* แถบความคืบหน้า + ปุ่มกลับขึ้นบน */
  var bar = document.querySelector('.progress');
  var top = document.querySelector('.to-top');
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
    if (top) top.classList.toggle('show', h.scrollTop > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (top) top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  /* เผยตัวเมื่อเลื่อนมาถึง */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el, i) {
      var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : i;
      el.style.setProperty('--d', Math.min(sib, 5) * 0.08 + 's');
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* นับตัวเลขขึ้น */
  var counters = document.querySelectorAll('[data-count]');
  function runCount(el) {
    var end = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var pad = el.getAttribute('data-pad') === '1';
    function fmt(n) { return (pad && n < 10 ? '0' : '') + n + suffix; }
    if (reduce) { el.textContent = fmt(end); return; }
    var t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1100, 1);
      el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { runCount(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  } else { counters.forEach(runCount); }

  /* ข้อความบทบาทหมุนเวียน */
  var rot = document.querySelector('.rotator');
  if (rot && !reduce) {
    var words = JSON.parse(rot.getAttribute('data-words') || '[]');
    var i = 0;
    if (words.length > 1) {
      setInterval(function () {
        rot.classList.add('out');
        setTimeout(function () { i = (i + 1) % words.length; rot.textContent = words[i]; rot.classList.remove('out'); }, 350);
      }, 2600);
    }
  }

  /* กรอบโปรไฟล์ขยับตามเมาส์ */
  var art = document.querySelector('.hero-art');
  var frame = document.querySelector('.hero-art .profile-frame');
  if (art && frame && !reduce && window.matchMedia('(hover: hover)').matches) {
    art.addEventListener('mousemove', function (e) {
      var r = art.getBoundingClientRect();
      frame.style.setProperty('--tx', ((e.clientX - r.left) / r.width - .5) * 14 + 'px');
      frame.style.setProperty('--ty', ((e.clientY - r.top) / r.height - .5) * 14 + 'px');
    });
    art.addEventListener('mouseleave', function () { frame.style.setProperty('--tx', '0px'); frame.style.setProperty('--ty', '0px'); });
  }

  /* Lightbox ดูภาพขยาย */
  var items = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
  if (items.length) {
    var lb = document.createElement('div');
    lb.className = 'lb';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'ดูภาพขยาย');
    lb.innerHTML = '<button class="lb-close" aria-label="ปิด">✕</button><button class="lb-prev" aria-label="ภาพก่อนหน้า">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-next" aria-label="ภาพถัดไป">›</button>';
    document.body.appendChild(lb);
    var img = lb.querySelector('img'), cap = lb.querySelector('figcaption');
    var group = [], idx = 0, lastFocus = null;
    function show() {
      var it = group[idx];
      img.src = it.getAttribute('href');
      img.alt = it.getAttribute('data-caption') || '';
      cap.textContent = it.getAttribute('data-caption') || '';
      lb.classList.toggle('single', group.length < 2);
    }
    function open(el) {
      var g = el.getAttribute('data-lightbox');
      group = items.filter(function (x) { return x.getAttribute('data-lightbox') === g; });
      idx = group.indexOf(el);
      lastFocus = document.activeElement;
      show(); lb.classList.add('open'); lb.querySelector('.lb-close').focus();
    }
    function close() { lb.classList.remove('open'); img.src = ''; if (lastFocus) lastFocus.focus(); }
    function move(d) { idx = (idx + d + group.length) % group.length; show(); }
    items.forEach(function (el) { el.addEventListener('click', function (e) { e.preventDefault(); open(el); }); });
    lb.querySelector('.lb-close').addEventListener('click', close);
    lb.querySelector('.lb-prev').addEventListener('click', function () { move(-1); });
    lb.querySelector('.lb-next').addEventListener('click', function () { move(1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'ArrowRight') move(1);
    });
  }
})();
