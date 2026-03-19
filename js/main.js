/* ══════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════ */
(function initNav() {
  const navbar    = document.querySelector('.navbar');
  const burger    = document.querySelector('.burger');
  const mobileNav = document.querySelector('.nav-mobile');

  const scrollHint = document.querySelector('.hero-scroll');
  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
    if (scrollHint) scrollHint.style.opacity = window.scrollY > 60 ? '0' : '1';
  });

  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

  /* Active link */
  const cur = window.location.pathname;
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const resolved = new URL(link.href).pathname;
    if (resolved === cur || resolved.replace(/index\.html$/, '') === cur.replace(/index\.html$/, '')) {
      link.classList.add('active');
    }
  });
})();

/* ══════════════════════════════════════════
   REVEAL ON SCROLL
══════════════════════════════════════════ */
(function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal, .tl-item').forEach(el => obs.observe(el));
})();

/* ══════════════════════════════════════════
   TYPING ANIMATION
══════════════════════════════════════════ */
(function initTyping() {
  const el = document.querySelector('.hero-typing-text');
  if (!el) return;
  let phrases;
  try { phrases = JSON.parse(el.dataset.phrases); } catch { return; }
  if (!phrases.length) return;

  let pi = 0, ci = 0, deleting = false;
  function tick() {
    const p = phrases[pi];
    if (!deleting) {
      el.textContent = p.slice(0, ++ci);
      if (ci === p.length) { deleting = true; setTimeout(tick, 2000); return; }
      setTimeout(tick, 75);
    } else {
      el.textContent = p.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 350); return; }
      setTimeout(tick, 40);
    }
  }
  setTimeout(tick, 800);
})();

/* ══════════════════════════════════════════
   PROJECT FILTER
══════════════════════════════════════════ */
(function initFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card[data-cat]');
  if (!btns.length) return;
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    cards.forEach(c => { c.style.display = (cat === 'all' || c.dataset.cat === cat) ? '' : 'none'; });
  }));
})();

/* ══════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════ */
(function initLightbox() {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  const img   = document.createElement('img');
  const close = document.createElement('span');
  close.className = 'lightbox-close';
  close.innerHTML = '&times;';
  overlay.appendChild(close);
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { img.src = ''; }, 200);
  }

  overlay.addEventListener('click', e => { if (e.target !== img) closeLb(); });
  close.addEventListener('click', closeLb);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

  document.querySelectorAll('.gallery img').forEach(el => {
    el.addEventListener('click', () => open(el.src, el.alt));
  });
})();

/* ══════════════════════════════════════════
   COOKIE MODAL — centré + bouton refus
══════════════════════════════════════════ */
(function initCookie() {
  const banner    = document.getElementById('cookieBanner');
  const overlay   = document.getElementById('cookieOverlay');
  const acceptBtn = document.getElementById('acceptCookie');
  const refuseBtn = document.getElementById('refuseCookie');
  if (!banner) return;

  function hideCookie() {
    banner.classList.remove('show');
    if (overlay) overlay.classList.remove('show');
  }

  if (!localStorage.getItem('cookieChoice')) {
    setTimeout(() => {
      banner.classList.add('show');
      if (overlay) overlay.classList.add('show');
    }, 700);
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieChoice', 'accepted');
      hideCookie();
    });
  }
  if (refuseBtn) {
    refuseBtn.addEventListener('click', () => {
      localStorage.setItem('cookieChoice', 'refused');
      hideCookie();
    });
  }
  /* Clic overlay = refus */
  if (overlay) {
    overlay.addEventListener('click', () => {
      localStorage.setItem('cookieChoice', 'refused');
      hideCookie();
    });
  }
})();
