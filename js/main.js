/**
 * ============================================================
 * NGÔ TIẾN TÀI — PORTFOLIO 2026
 * Style: Txema Albero Inspired + Four Seasons Living Artwork
 * Engine: Three.js 3D WebGL Living Tree & Interactive Micro-animations
 * ============================================================
 * 1. Top Scroll Progress Bar & Header Glass Effect
 * 2. Right Side-Nav Section Dots Tracker
 * 3. Exact Txema Albero .reveal / .reveal-in Lazy Loading
 * 4. Cursor Halo & Magnetic Pull Physics
 * 5. Day / Night Celestial Theme Switcher & Twinkling Stars
 * 6. Four Seasons State Engine (Vector Icons + Dynamic Quotes)
 * 7. Three.js 3D Four Seasons Living Tree (Textures, Shaders, Particles, Parallax)
 * 8. Animated Counter & Typewriter Loop
 * 9. Mobile Menu & Form Feedback
 * ============================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Season Vector Icons (Clean modern line art) ---- */
  const SEASON_SVGS = {
    spring: `<svg class="season-svg-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 9a6 6 0 0 0-6-6c-2.5 0-3 2-3 3 0 3 2 5.5 6 6"/><path d="M12 9a6 6 0 0 1 6-6c2.5 0 3 2 3 3 0 3-2 5.5-6 6"/><path d="M12 15a6 6 0 0 0 6 6c2.5 0 3-2 3-3 0-3-2-5.5-6-6"/><path d="M12 15a6 6 0 0 1-6 6c-2.5 0-3-2-3-3 0-3 2-5.5 6-6"/></svg>`,
    summer: `<svg class="season-svg-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    autumn: `<svg class="season-svg-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    winter: `<svg class="season-svg-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/><polyline points="9 4 12 1 15 4"/><polyline points="9 20 12 23 15 20"/><polyline points="20 9 23 12 20 15"/><polyline points="4 9 1 12 4 15"/></svg>`
  };

  /* ---- Season Metadata Dictionary ---- */
  const SEASONS_DATA = {
    spring: {
      name: 'Mùa Xuân · Cherry Blossom',
      tagline: 'Spring Bloom',
      quote: 'Cánh hoa anh đào bay trong gió · 18°C dịu mát',
      avatarQuote: 'Hoa nở đón nắng',
      footerQuote: 'Spring vibes · Tươi mới & Sáng tạo',
      particleColor: ['#f472b6', '#fbcfe8', '#f9a8d4', '#fda4af'],
      leafColor: '#f472b6'
    },
    summer: {
      name: 'Mùa Hạ · Radiant Forest',
      tagline: 'Summer Energy',
      quote: 'Tán lá rực rỡ & Đom đóm đêm hè · 28°C nhiệt huyết',
      avatarQuote: 'Năng động sáng tạo',
      footerQuote: 'Summer energy · Năng động & Bền bỉ',
      particleColor: ['#10b981', '#34d399', '#6ee7b7', '#fef08a'],
      leafColor: '#10b981'
    },
    autumn: {
      name: 'Mùa Thu · Golden Maple',
      tagline: 'Autumn Leaves',
      quote: 'Lá phong vàng bay trong gió chiều · 22°C sâu lắng',
      avatarQuote: 'Tinh tế từng chi tiết',
      footerQuote: 'Autumn focus · Tinh tế & Sâu lắng',
      particleColor: ['#f97316', '#fb923c', '#fdba74', '#ef4444'],
      leafColor: '#f97316'
    },
    winter: {
      name: 'Mùa Đông · Snow Serenity',
      tagline: 'Winter Frost',
      quote: 'Tuyết trắng phủ cành & Băng tinh khiết · 12°C an yên',
      avatarQuote: 'Điềm tĩnh & Tối giản',
      footerQuote: 'Winter serenity · Điềm tĩnh & Tối giản',
      particleColor: ['#38bdf8', '#7dd3fc', '#bae6fd', '#ffffff'],
      leafColor: '#bae6fd'
    }
  };


  /* ============================================================
     1. TOP SCROLL PROGRESS BAR (txemaalbero)
     ============================================================ */
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  const siteHeader = document.getElementById('site-header');

  function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.transform = `scaleX(${progress})`;
    }

    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', scrollTop > 40);
    }
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();


  /* ============================================================
     2. RIGHT SIDE-NAV & HEADER SECTION TRACKER (txemaalbero)
     ============================================================ */
  const sideNavBtns = document.querySelectorAll('.side-nav-btn');
  const mainSections = Array.from(document.querySelectorAll('section[id]'));
  const mainNavLinks = document.querySelectorAll('.nav-link');

  function updateActiveState(activeId) {
    if (!activeId) return;

    // Update Right Side-Nav Dots
    sideNavBtns.forEach(btn => {
      const target = btn.dataset.target;
      const isMatch = (target === `#${activeId}`);
      btn.classList.toggle('active', isMatch);
    });

    // Update Top Header Nav Links
    mainNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isMatch = (href === `#${activeId}`);
      link.classList.toggle('active', isMatch);
    });
  }

  function syncActiveSection() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    // 1. If at or near the very top of the page (within first 120px), always activate the first section (Hero / Trang chủ)
    if (scrollY < 120) {
      const firstSec = mainSections[0];
      updateActiveState(firstSec ? firstSec.getAttribute('id') : 'hero');
      return;
    }

    // 2. If at or near the very bottom of the document (requires actually scrolling down at least 400px)
    if (scrollY > 400 && (scrollY + windowHeight >= docHeight - 80)) {
      const lastSec = mainSections[mainSections.length - 1];
      if (lastSec) {
        updateActiveState(lastSec.getAttribute('id'));
        return;
      }
    }

    // 3. Viewport-based intersection detection
    let activeId = mainSections[0]?.getAttribute('id') || 'hero';
    mainSections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      // Section is active if its top has entered the upper 45% of viewport
      // and its bottom hasn't scrolled past the top header
      if (rect.top <= windowHeight * 0.45 && rect.bottom >= 100) {
        activeId = sec.getAttribute('id');
      }
    });

    updateActiveState(activeId);
  }

  window.addEventListener('scroll', syncActiveSection, { passive: true });
  syncActiveSection();

  // Smooth scroll handler for all internal anchor links (Header nav, Side nav, Hero buttons)
  function handleSmoothScroll(e) {
    const href = this.getAttribute('href') || this.dataset.target;
    if (href && href.startsWith('#') && href.length > 1) {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 65;
        const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });

        const targetId = href.substring(1);
        updateActiveState(targetId);

        if (history.pushState) {
          history.pushState(null, '', href);
        }
      }
    }
  }

  sideNavBtns.forEach(btn => btn.addEventListener('click', handleSmoothScroll));
  mainNavLinks.forEach(link => link.addEventListener('click', handleSmoothScroll));
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', handleSmoothScroll));


  /* ============================================================
     3. REVEAL & BIDIRECTIONAL LAZY LOADING
     Kích hoạt hiệu ứng lazy loading trượt mượt mà khi cuộn tới phần tử.
     Chỉ reset khi phần tử cuộn trôi xuống dưới đáy màn hình (entry.boundingClientRect.top > 0).
     Tuyệt đối KHÔNG reset khi phần tử trôi qua mép trên (entry.boundingClientRect.top <= 0).
     -> Vừa giữ trọn vẹn 100% hiệu ứng lazy loading lướt cuộn sống động,
     -> Vừa triệt tiêu vĩnh viễn lỗi giật rung và nhấp nháy liên tục khi dừng xem ở mép trên!
     ============================================================ */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
        } else {
          // Chỉ gỡ class reveal-in khi phần tử nằm hoàn toàn phía dưới màn hình (người dùng cuộn ngược lên trên)
          // để khi cuộn xuống lại vẫn kích hoạt hiệu ứng lazy loading.
          // Nếu phần tử trôi lên phía trên đỉnh màn hình (boundingClientRect.top <= 0),
          // giữ nguyên reveal-in để không bị thụt 48px gây loop nhấp nháy liên tục.
          if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove('reveal-in');
          }
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -20px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('reveal-in'));
  }


  /* ============================================================
     4. CURSOR HALO & MAGNETIC PULL (txemaalbero)
     ============================================================ */
  const cursorHalo = document.getElementById('cursor-halo');
  const cursorDot = document.getElementById('cursor-dot');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let haloX = mouseX;
  let haloY = mouseY;
  let hasMovedMouse = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!hasMovedMouse) {
      hasMovedMouse = true;
      if (cursorHalo) cursorHalo.classList.add('active');
    }
    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    if (cursorHalo) cursorHalo.classList.remove('active');
  });

  function renderCursorHalo() {
    haloX += (mouseX - haloX) * 0.14;
    haloY += (mouseY - haloY) * 0.14;

    if (cursorHalo) {
      cursorHalo.style.left = `${haloX}px`;
      cursorHalo.style.top = `${haloY}px`;
    }
    requestAnimationFrame(renderCursorHalo);
  }
  requestAnimationFrame(renderCursorHalo);

  // Hover target scale (includes 3D tree container)
  const hoverElements = document.querySelectorAll('a, button, input, textarea, [data-cursor="hover"], .season-mini-card, .project-showcase-card, #tree-3d-container');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (cursorHalo) cursorHalo.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      if (cursorHalo) cursorHalo.classList.remove('hovered');
    });
  });

  // Magnetic Pull Physics on [data-magnetic="true"] (Controlled Safe Radius)
  const magneticItems = document.querySelectorAll('[data-magnetic="true"]');
  magneticItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const isCard = item.classList.contains('channel-card') || item.classList.contains('contact-form-card') || rect.width > 220;
      const isSubmitBtn = item.id === 'submit-btn';

      // Fine-tuned factor & strict clamp range to prevent encroaching on adjacent cards
      let factor = 0.18;
      let maxOffsetX = 8;
      let maxOffsetY = 8;

      if (isCard) {
        factor = 0.035;
        maxOffsetX = 5;
        maxOffsetY = 4;
      } else if (isSubmitBtn) {
        factor = 0.04;
        maxOffsetX = 5;
        maxOffsetY = 2; // Keep vertical pull strictly inside the card
      }

      let deltaX = (e.clientX - centerX) * factor;
      let deltaY = (e.clientY - centerY) * factor;

      deltaX = Math.max(-maxOffsetX, Math.min(maxOffsetX, deltaX));
      deltaY = Math.max(-maxOffsetY, Math.min(maxOffsetY, deltaY));

      item.style.setProperty('--mag-x', `${deltaX.toFixed(2)}px`);
      item.style.setProperty('--mag-y', `${deltaY.toFixed(2)}px`);
    });

    item.addEventListener('mouseleave', () => {
      item.style.setProperty('--mag-x', '0px');
      item.style.setProperty('--mag-y', '0px');
    });
  });

  /* ============================================================
     4B. COMPACT PROJECT CARDS 3D PERSPECTIVE & SPOTLIGHT ENGINE
     ============================================================ */
  const projectCards = document.querySelectorAll('.project-showcase-card');
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (!card.classList.contains('reveal-in')) return;

      // Don't shift/tilt card when hovering directly over action buttons or links
      if (e.target && e.target.closest('.project-card-actions, .compact-btn, a, button')) {
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
      card.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);

      // Gentle, tactile 3D perspective tilt (clamped to max ±4.5deg)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;

      card.style.transition = 'transform 0.12s ease-out, border-color 0.3s ease, box-shadow 0.3s ease';
      card.style.transform = `perspective(850px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = '';
      card.style.transform = '';
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });
  });

  /* ============================================================
     4C. BULLETPROOF PROJECT BUTTON & DROPDOWN CLICK HANDLER
     ============================================================ */
  function closeAllProjectDropdowns() {
    document.querySelectorAll('.project-dropdown-wrap.is-open').forEach(w => {
      w.classList.remove('is-open');
      const tr = w.querySelector('.project-dropdown-btn');
      if (tr) tr.setAttribute('aria-expanded', 'false');
      const card = w.closest('.project-showcase-card');
      if (card) {
        card.classList.remove('card-dropdown-open');
        card.style.zIndex = '';
      }
    });
  }

  // Delegated click handler for dropdown buttons, items, and outside clicks
  document.addEventListener('click', (e) => {
    // 1. Clicked on a dropdown toggle trigger button
    const trigger = e.target.closest('.project-dropdown-btn');
    if (trigger) {
      e.preventDefault();
      e.stopPropagation();
      const wrap = trigger.closest('.project-dropdown-wrap');
      if (!wrap) return;
      const isOpen = wrap.classList.contains('is-open');
      const parentCard = wrap.closest('.project-showcase-card');

      // Close all other open dropdowns first
      document.querySelectorAll('.project-dropdown-wrap').forEach(other => {
        if (other !== wrap) {
          other.classList.remove('is-open');
          const otherTrigger = other.querySelector('.project-dropdown-btn');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          const otherCard = other.closest('.project-showcase-card');
          if (otherCard) {
            otherCard.classList.remove('card-dropdown-open');
            otherCard.style.zIndex = '';
          }
        }
      });

      // Tự động kiểm tra khoảng cách tới đáy màn hình để mở ngược lên trên (dropup) nếu thiếu diện tích
      if (!isOpen) {
        const triggerRect = trigger.getBoundingClientRect();
        const spaceBelow = window.innerHeight - triggerRect.bottom;
        if (spaceBelow < 220) {
          wrap.classList.add('dropup');
        } else {
          wrap.classList.remove('dropup');
        }
      }

      wrap.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
      if (parentCard) {
        parentCard.classList.toggle('card-dropdown-open', !isOpen);
        parentCard.style.zIndex = !isOpen ? '1000' : '';
      }
      return;
    }

    // 2. Clicked on a dropdown item link
    const dropdownItem = e.target.closest('.project-dropdown-item');
    if (dropdownItem) {
      const href = dropdownItem.getAttribute('href');
      if (href) {
        window.open(href, '_blank', 'noopener,noreferrer');
        closeAllProjectDropdowns();
        e.preventDefault();
        e.stopPropagation();
      }
      return;
    }

    // 3. Clicked outside any dropdown wrap -> close all
    if (!e.target.closest('.project-dropdown-wrap')) {
      closeAllProjectDropdowns();
    }

    // 3. Regular compact-btn handling
    const btn = e.target.closest('.compact-btn');
    if (!btn || btn.classList.contains('project-dropdown-btn')) return;

    const href = btn.getAttribute('href');
    if (!href || href === '#') {
      e.preventDefault();
      return;
    }

    // If it's a smooth scroll anchor link
    if (href.startsWith('#') && href.length > 1) {
      return; // Let handleSmoothScroll manage it
    }

    // For external links: guarantee reliable navigation
    if (href.startsWith('http://') || href.startsWith('https://')) {
      e.stopPropagation();
      const target = btn.getAttribute('target') || '_self';
      if (target === '_blank') {
        window.open(href, '_blank', 'noopener,noreferrer');
        e.preventDefault();
      } else {
        window.location.href = href;
      }
    }
  }, { capture: true });

  // Close dropdown on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      projectDropdowns.forEach(wrap => {
        wrap.classList.remove('is-open');
        const trigger = wrap.querySelector('.project-dropdown-btn');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });


  /* ============================================================
     5. TXEMA ALBERO CELESTIAL FALLING DOTS ENGINE
     (High-Performance Canvas Particle System with Mouse Parallax)
     ============================================================ */
  function initFallingDotsBackground() {
    const canvas = document.getElementById('falling-dots-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let particles = [];

    // Seasonal palettes for Day and Night modes
    const SEASON_DOTS = {
      spring: {
        night: {
          dotR: 251, dotG: 207, dotB: 232,
          haloR: 244, haloG: 114, haloB: 182
        },
        day: {
          dotR: 194, dotG: 35, dotB: 114,
          haloR: 244, haloG: 114, haloB: 182
        }
      },
      summer: {
        night: {
          dotR: 209, dotG: 250, dotB: 229,
          haloR: 16, haloG: 185, haloB: 129
        },
        day: {
          dotR: 4, dotG: 120, dotB: 87,
          haloR: 52, haloG: 211, haloB: 153
        }
      },
      autumn: {
        night: {
          dotR: 254, dotG: 215, dotB: 170,
          haloR: 249, haloG: 115, haloB: 22
        },
        day: {
          dotR: 173, dotG: 62, dotB: 12,
          haloR: 251, haloG: 146, haloB: 60
        }
      },
      winter: {
        night: {
          dotR: 220, dotG: 235, dotB: 252,
          haloR: 122, haloG: 166, haloB: 208
        },
        day: {
          dotR: 30, dotG: 77, dotB: 183,
          haloR: 125, haloG: 211, haloB: 252
        }
      }
    };

    function createParticle(isInitial) {
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : -8 - Math.random() * 16,
        r: 0.8 + 1.8 * Math.random(), // radius
        vy: 0.28 + 0.65 * Math.random(), // smooth downward velocity
        vx: (Math.random() - 0.5) * 0.16, // gentle horizontal drift
        phase: Math.random() * Math.PI * 2,
        amp: 0.5 + 1.4 * Math.random(),
        alpha: 0.25 + 0.65 * Math.random()
      };
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(130, Math.max(50, Math.floor((width * height) / 18000)));
      particles = Array.from({ length: count }, () => createParticle(true));
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
      if (width > 0 && height > 0) {
        targetMouseX = (e.clientX / width - 0.5) * 2;
        targetMouseY = (e.clientY / height - 0.5) * 2;
      }
    }, { passive: true });

    let animId = 0;
    let lastTime = performance.now();
    let isTabVisible = !document.hidden;

    document.addEventListener('visibilitychange', () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
        animId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animId);
      }
    });

    function animate(now) {
      const dt = Math.min(64, now - lastTime) / 16.6667;
      lastTime = now;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const currentSeason = document.documentElement.dataset.season || document.body.dataset.season || 'spring';
      const isDay = document.body.classList.contains('theme-day');
      const seasonPalette = SEASON_DOTS[currentSeason] || SEASON_DOTS.spring;
      const themeColors = isDay ? seasonPalette.day : seasonPalette.night;

      const dotBase = `${themeColors.dotR}, ${themeColors.dotG}, ${themeColors.dotB}`;
      const haloBase = `${themeColors.haloR}, ${themeColors.haloG}, ${themeColors.haloB}`;
      const alphaMult = isDay ? 0.6 : 1.0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.vy * dt;
        p.x += p.vx * dt;
        p.phase += 0.005 * dt;

        if (p.y > height + 8) {
          Object.assign(p, createParticle(false));
        }
        if (p.x < -12) p.x = width + 12;
        else if (p.x > width + 12) p.x = -12;

        const depth = p.r / 2.6;
        const drawX = p.x + Math.sin(p.phase) * p.amp * 6 - 18 * mouseX * depth;
        const drawY = p.y - 12 * mouseY * depth;

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(${dotBase}, ${p.alpha * alphaMult})`;
        ctx.arc(drawX, drawY, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Soft outer halo on larger dots
        if (p.r > 1.6) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${haloBase}, ${0.22 * p.alpha * alphaMult})`;
          ctx.arc(drawX, drawY, 3.2 * p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (isTabVisible) {
        animId = requestAnimationFrame(animate);
      }
    }

    animId = requestAnimationFrame(animate);
  }
  initFallingDotsBackground();

  const themeToggleBtn = document.getElementById('theme-toggle');

  function setTheme(theme) {
    const isDay = theme === 'day';
    document.body.classList.toggle('theme-day', isDay);
    document.body.classList.toggle('theme-night', !isDay);
    document.documentElement.classList.toggle('theme-day', isDay);
    document.documentElement.classList.toggle('theme-night', !isDay);
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch (e) {}
    if (window.updateKeyboardTheme) {
      window.updateKeyboardTheme(isDay);
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyDay = document.body.classList.contains('theme-day');
      setTheme(isCurrentlyDay ? 'night' : 'day');
    });
  }

  try {
    const savedTheme = localStorage.getItem('portfolio_theme');
    if (savedTheme) setTheme(savedTheme);
  } catch (e) {}


  /* ============================================================
     6. FOUR SEASONS STATE ENGINE
     ============================================================ */
  let currentSeason = (document.documentElement.getAttribute('data-season') || document.body.getAttribute('data-season') || 'spring');
  try {
    const saved = localStorage.getItem('portfolio_season');
    if (saved && SEASONS_DATA[saved]) currentSeason = saved;
  } catch (e) {}

  const seasonPills = document.querySelectorAll('.season-pill');
  const treeBtns = document.querySelectorAll('.tree-btn');
  const seasonMiniCards = document.querySelectorAll('.season-mini-card');

  const heroEmoji = document.getElementById('hero-season-emoji');
  const heroTitle = document.getElementById('hero-season-title');
  const heroDesc = document.getElementById('hero-season-desc');
  const avatarSeasonPill = document.getElementById('avatar-season-pill');
  const avatarSeasonQuote = document.getElementById('avatar-season-quote');
  const stageEmoji = document.getElementById('stage-emoji');
  const stageSeasonName = document.getElementById('stage-season-name');
  const stageSeasonDesc = document.getElementById('stage-season-desc');
  const footerSeasonMsg = document.getElementById('footer-season-msg');

  function updateSeason(seasonKey) {
    if (!SEASONS_DATA[seasonKey]) seasonKey = 'spring';
    currentSeason = seasonKey;

    document.body.setAttribute('data-season', seasonKey);
    document.documentElement.setAttribute('data-season', seasonKey);
    const data = SEASONS_DATA[seasonKey];

    seasonPills.forEach(p => p.classList.toggle('active', p.dataset.season === seasonKey));
    treeBtns.forEach(b => b.classList.toggle('active', b.dataset.season === seasonKey));
    seasonMiniCards.forEach(c => c.classList.toggle('active', c.dataset.season === seasonKey));

    if (heroEmoji && SEASON_SVGS[seasonKey]) heroEmoji.innerHTML = SEASON_SVGS[seasonKey];
    if (heroTitle) heroTitle.textContent = data.name;
    if (heroDesc) heroDesc.textContent = data.quote;

    if (avatarSeasonPill && SEASON_SVGS[seasonKey]) avatarSeasonPill.innerHTML = SEASON_SVGS[seasonKey];
    if (avatarSeasonQuote) avatarSeasonQuote.textContent = data.avatarQuote;

    if (stageEmoji && SEASON_SVGS[seasonKey]) stageEmoji.innerHTML = SEASON_SVGS[seasonKey];
    if (stageSeasonName) stageSeasonName.textContent = data.name;
    if (stageSeasonDesc) stageSeasonDesc.textContent = data.quote;

    if (footerSeasonMsg) footerSeasonMsg.textContent = data.footerQuote;

    // Trigger Three.js 3D Tree Transition
    if (window.triggerSeasonTransition) {
      window.triggerSeasonTransition(seasonKey);
    }

    // Trigger Three.js 3D Mechanical Keyboard Season Transition
    if (window.updateKeyboardSeason) {
      window.updateKeyboardSeason(seasonKey);
    }

    try {
      localStorage.setItem('portfolio_season', seasonKey);
    } catch (e) {}
  }

  seasonPills.forEach(p => p.addEventListener('click', () => updateSeason(p.dataset.season)));
  treeBtns.forEach(b => b.addEventListener('click', () => updateSeason(b.dataset.season)));
  seasonMiniCards.forEach(c => c.addEventListener('click', () => updateSeason(c.dataset.season)));

  try {
    const savedSeason = localStorage.getItem('portfolio_season');
    if (savedSeason && SEASONS_DATA[savedSeason]) {
      updateSeason(savedSeason);
    } else {
      updateSeason('spring');
    }
  } catch (e) {
    updateSeason('spring');
  }

  /* ============================================================
     6B. BILINGUAL LANGUAGE ENGINE (EN / VI)
     Default: English ('en'). Full UI reactivity & state persistence.
     ============================================================ */
  function initLanguageEngine() {
    let currentLang = 'en';
    try {
      const savedLang = localStorage.getItem('portfolio_lang');
      if (savedLang === 'vi' || savedLang === 'en') {
        currentLang = savedLang;
      }
    } catch (e) {}

    const langSwitcherCapsule = document.getElementById('lang-switcher');
    const globeWrap = document.getElementById('lang-globe-wrap');
    const langTrack = document.getElementById('lang-track');
    const langPills = document.querySelectorAll('.lang-pill');

    function syncSeasonTranslations(lang) {
      if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) return;
      const dict = TRANSLATIONS[lang];
      if (SEASONS_DATA.spring) {
        SEASONS_DATA.spring.name = dict.season_spring_name || SEASONS_DATA.spring.name;
        SEASONS_DATA.spring.quote = dict.spring_quote || dict.season_spring_quote || SEASONS_DATA.spring.quote;
        SEASONS_DATA.spring.avatarQuote = dict.spring_avatar || dict.season_spring_avatar || SEASONS_DATA.spring.avatarQuote;
        SEASONS_DATA.spring.footerQuote = dict.spring_footer || dict.season_spring_footer || SEASONS_DATA.spring.footerQuote;
      }
      if (SEASONS_DATA.summer) {
        SEASONS_DATA.summer.name = dict.season_summer_name || SEASONS_DATA.summer.name;
        SEASONS_DATA.summer.quote = dict.summer_quote || dict.season_summer_quote || SEASONS_DATA.summer.quote;
        SEASONS_DATA.summer.avatarQuote = dict.summer_avatar || dict.season_summer_avatar || SEASONS_DATA.summer.avatarQuote;
        SEASONS_DATA.summer.footerQuote = dict.summer_footer || dict.season_summer_footer || SEASONS_DATA.summer.footerQuote;
      }
      if (SEASONS_DATA.autumn) {
        SEASONS_DATA.autumn.name = dict.season_autumn_name || SEASONS_DATA.autumn.name;
        SEASONS_DATA.autumn.quote = dict.autumn_quote || dict.season_autumn_quote || SEASONS_DATA.autumn.quote;
        SEASONS_DATA.autumn.avatarQuote = dict.autumn_avatar || dict.season_autumn_avatar || SEASONS_DATA.autumn.avatarQuote;
        SEASONS_DATA.autumn.footerQuote = dict.autumn_footer || dict.season_autumn_footer || SEASONS_DATA.autumn.footerQuote;
      }
      if (SEASONS_DATA.winter) {
        SEASONS_DATA.winter.name = dict.season_winter_name || SEASONS_DATA.winter.name;
        SEASONS_DATA.winter.quote = dict.winter_quote || dict.season_winter_quote || SEASONS_DATA.winter.quote;
        SEASONS_DATA.winter.avatarQuote = dict.winter_avatar || dict.season_winter_avatar || SEASONS_DATA.winter.avatarQuote;
        SEASONS_DATA.winter.footerQuote = dict.winter_footer || dict.season_winter_footer || SEASONS_DATA.winter.footerQuote;
      }
    }

    function applyLanguage(lang, triggerEffects = false) {
      if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) return;
      currentLang = lang;
      const dict = TRANSLATIONS[lang];

      // Update root html lang
      document.documentElement.lang = lang;
      document.documentElement.setAttribute('data-lang', lang);

      // Update capsule data attribute and kinetic animations
      if (langSwitcherCapsule) {
        langSwitcherCapsule.setAttribute('data-active-lang', lang);
        if (triggerEffects) {
          langSwitcherCapsule.classList.remove('is-sliding');
          void langSwitcherCapsule.offsetWidth;
          langSwitcherCapsule.classList.add('is-sliding');
          setTimeout(() => langSwitcherCapsule.classList.remove('is-sliding'), 380);
        }
      }

      // Globe 3D spin on user interaction
      if (triggerEffects) {
        if (globeWrap) {
          globeWrap.classList.remove('lang-spin');
          void globeWrap.offsetWidth;
          globeWrap.classList.add('lang-spin');
          setTimeout(() => globeWrap.classList.remove('lang-spin'), 600);
        }
      }

      // Update pills active state
      langPills.forEach(pill => {
        const isMatch = pill.getAttribute('data-lang') === lang;
        pill.classList.toggle('active', isMatch);
        pill.setAttribute('aria-pressed', String(isMatch));
      });

      // Update [data-i18n] text content
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
          const svg = el.querySelector('svg');
          if (svg) {
            const textNodes = Array.from(el.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
            if (textNodes.length > 0) {
              textNodes[textNodes.length - 1].textContent = ' ' + dict[key].trim();
            } else {
              el.innerHTML = svg.outerHTML + ' ' + dict[key];
            }
          } else {
            el.textContent = dict[key];
          }
        }
      });

      // Update [data-i18n-html] innerHTML
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) {
          el.innerHTML = dict[key];
        }
      });

      // Update [data-i18n-placeholder]
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
          el.setAttribute('placeholder', dict[key]);
        }
      });

      // Update [data-i18n-title]
      document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key] !== undefined) {
          el.setAttribute('title', dict[key]);
          if (el.hasAttribute('aria-label')) {
            el.setAttribute('aria-label', dict[key]);
          }
        }
      });

      // Synchronize Four Seasons dictionary and UI text
      syncSeasonTranslations(lang);
      if (typeof updateSeason === 'function') {
        updateSeason(currentSeason);
      }

      // Update Typewriter roles
      if (window.updateTypewriterRoles && dict.hero_typewriter_roles) {
        window.updateTypewriterRoles(dict.hero_typewriter_roles);
      }

      // Persist user selection
      try {
        localStorage.setItem('portfolio_lang', lang);
      } catch (e) {}
    }

    // Pill click handler with ripple wave
    langPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = pill.getAttribute('data-lang');

        // Dynamic click ripple wave
        if (langTrack) {
          const rect = langTrack.getBoundingClientRect();
          const pillRect = pill.getBoundingClientRect();
          const ripple = document.createElement('span');
          ripple.className = 'lang-ripple';
          const clickX = e.clientX ? (e.clientX - rect.left) : (pillRect.left - rect.left + pillRect.width / 2);
          const clickY = e.clientY ? (e.clientY - rect.top) : (pillRect.top - rect.top + pillRect.height / 2);
          ripple.style.left = clickX + 'px';
          ripple.style.top = clickY + 'px';
          langTrack.appendChild(ripple);
          setTimeout(() => ripple.remove(), 550);
        }

        if (targetLang && targetLang !== currentLang) {
          applyLanguage(targetLang, true);
        }
      });
    });

    // Globe icon click shortcut (toggles between EN and VI)
    if (globeWrap) {
      globeWrap.addEventListener('click', (e) => {
        e.preventDefault();
        const nextLang = currentLang === 'en' ? 'vi' : 'en';
        applyLanguage(nextLang, true);
      });
    }

    // Initialize with currentLang (default English) without playing sound
    applyLanguage(currentLang, false);

    // Expose global helper
    window.setLanguage = (lang) => applyLanguage(lang, true);
    window.getCurrentLanguage = () => currentLang;
  }

  initLanguageEngine();


  /* ============================================================
     7. THREE.JS 3D FOUR SEASONS LIVING TREE
     Photorealistic tree images on textured planes with:
     - Mouse-tracking parallax 3D camera tilt
     - Smooth seasonal cross-fade via opacity
     - 3D particle system (petals/leaves/fireflies/snow)
     - Ambient lighting & ground shadow
     - Click to burst particles
     ============================================================ */
  const container3D = document.getElementById('tree-3d-container');
  if (container3D && typeof THREE !== 'undefined') {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.3, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container3D.appendChild(renderer.domElement);

    // Responsive sizing
    let containerW = 680, containerH = 600;
    function resize3D() {
      const rect = container3D.getBoundingClientRect();
      containerW = rect.width || 680;
      containerH = rect.height || 600;
      camera.aspect = containerW / containerH;
      if (camera.aspect < 1.0) {
        camera.position.z = 5.2 * (1.0 / camera.aspect) * 0.92;
      } else {
        camera.position.z = 5.2;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(containerW, containerH);
    }
    window.addEventListener('resize', resize3D, { passive: true });
    resize3D();

    // === LIGHTING ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff5e6, 0.9);
    dirLight.position.set(3, 5, 4);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x88bbff, 0.35);
    rimLight.position.set(-3, 2, -2);
    scene.add(rimLight);

    // Subtle point light for warmth
    const pointLight = new THREE.PointLight(0xffaa55, 0.4, 12);
    pointLight.position.set(0, -1, 3);
    scene.add(pointLight);

    // === TREE TEXTURES & PLANES ===
    const treeSources = {
      spring: 'assets/images/tree-spring.jpg',
      summer: 'assets/images/tree-summer.jpg',
      autumn: 'assets/images/tree-autumn.jpg',
      winter: 'assets/images/tree-winter.jpg'
    };

    const treePlanes = {};
    let activeSeasonKey3D = currentSeason;
    let prevSeasonKey3D = null;
    let crossfadeProgress = 1;

    // Process tree image: convert dark background to transparent
    function createAlphaTexture(imgSrc, callback) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = imgSrc;
      img.onload = () => {
        const offCanvas = document.createElement('canvas');
        const w = img.naturalWidth || 1024;
        const h = img.naturalHeight || 1024;
        offCanvas.width = w;
        offCanvas.height = h;
        const offCtx = offCanvas.getContext('2d');
        offCtx.drawImage(img, 0, 0, w, h);
        try {
          const imgData = offCtx.getImageData(0, 0, w, h);
          const d = imgData.data;
          for (let i = 0; i < d.length; i += 4) {
            const lum = Math.max(d[i], d[i+1], d[i+2]);
            if (lum < 16) {
              d[i+3] = 0;
            } else if (lum < 52) {
              d[i+3] = Math.round(((lum - 16) / 36) * d[i+3]);
            }
          }
          offCtx.putImageData(imgData, 0, 0);
        } catch(e) { /* CORS fallback: use original */ }

        const texture = new THREE.CanvasTexture(offCanvas);
        texture.encoding = THREE.sRGBEncoding;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        callback(texture);
      };
    }

    // Tree plane geometry
    const treeGeo = new THREE.PlaneGeometry(3.8, 3.8, 1, 1);

    Object.entries(treeSources).forEach(([season, src]) => {
      createAlphaTexture(src, (texture) => {
        const mat = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          alphaTest: 0.02,
          side: THREE.DoubleSide,
          roughness: 0.75,
          metalness: 0.05,
          depthWrite: true
        });
        const mesh = new THREE.Mesh(treeGeo, mat);
        mesh.position.set(0, 0.1, 0);
        mesh.visible = (season === activeSeasonKey3D);
        if (season !== activeSeasonKey3D) {
          mat.opacity = 0;
        }
        scene.add(mesh);
        treePlanes[season] = mesh;
      });
    });

    // === GROUND SHADOW DISC ===
    const shadowGeo = new THREE.CircleGeometry(1.6, 48);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.25,
      depthWrite: false
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -1.78, 0.05);
    scene.add(shadowMesh);

    // === 3D PARTICLE SYSTEM ===
    const PARTICLE_COUNT = 200;
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    const particleVelocities = [];
    const particleSizes = new Float32Array(PARTICLE_COUNT);
    const particleColors = new Float32Array(PARTICLE_COUNT * 3);
    const particleAlphas = new Float32Array(PARTICLE_COUNT);

    function getSeasonParticleColors(season) {
      const isDay = document.body.classList.contains('theme-day');
      const palettes = {
        spring: isDay
          ? [[0.62,0.10,0.33], [0.75,0.09,0.36], [0.86,0.15,0.47], [0.96,0.25,0.37]]
          : [[0.96,0.45,0.71], [0.98,0.81,0.91], [0.99,0.64,0.68], [0.96,0.25,0.37]],
        summer: isDay
          ? [[0.05,0.41,0.30], [0.02,0.59,0.41], [0.06,0.73,0.51], [0.20,0.83,0.60]]
          : [[0.06,0.73,0.51], [0.20,0.83,0.60], [0.43,0.91,0.72], [1.00,0.94,0.54]],
        autumn: isDay
          ? [[0.68,0.24,0.05], [0.76,0.25,0.05], [0.92,0.35,0.05], [0.96,0.62,0.04]]
          : [[0.98,0.45,0.09], [0.92,0.35,0.05], [0.86,0.15,0.15], [0.98,0.75,0.14]],
        winter: isDay
          ? [[0.90,0.95,1.0], [0.88,0.94,1.0], [0.73,0.90,0.99], [0.22,0.74,0.97]]
          : [[1.0,1.0,1.0], [0.88,0.95,0.99], [0.58,0.77,0.99], [0.22,0.74,0.97]]
      };
      return palettes[season] || palettes.spring;
    }

    function resetParticle(i, burst = false) {
      const spread = burst ? 1.2 : 2.4;
      particlePositions[i*3]   = (Math.random() - 0.5) * spread;
      particlePositions[i*3+1] = burst ? (Math.random() * 1.0 + 0.2) : (Math.random() * 3.5 + 1.8);
      particlePositions[i*3+2] = (Math.random() - 0.5) * 2.0;
      const speedMul = burst ? (Math.random() * 3 + 1.5) : 1;
      particleVelocities[i] = {
        vx: ((Math.random() - 0.5) * 0.012 + 0.003) * speedMul,
        vy: -(Math.random() * 0.008 + 0.004) * speedMul,
        vz: (Math.random() - 0.5) * 0.006 * speedMul,
        rotPhase: Math.random() * Math.PI * 2
      };
      particleSizes[i] = Math.random() * 0.06 + 0.03;
      particleAlphas[i] = Math.random() * 0.6 + 0.4;

      const colors = getSeasonParticleColors(currentSeason);
      const c = colors[Math.floor(Math.random() * colors.length)];
      particleColors[i*3]   = c[0];
      particleColors[i*3+1] = c[1];
      particleColors[i*3+2] = c[2];
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particleVelocities.push({vx: 0, vy: 0, vz: 0, rotPhase: 0});
      resetParticle(i);
      particlePositions[i*3+1] = (Math.random() - 0.5) * 4;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('aSize', new THREE.BufferAttribute(particleSizes, 1));
    particleGeo.setAttribute('aColor', new THREE.BufferAttribute(particleColors, 3));
    particleGeo.setAttribute('aAlpha', new THREE.BufferAttribute(particleAlphas, 1));

    const particleVertShader = `
      attribute float aSize;
      attribute vec3 aColor;
      attribute float aAlpha;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vColor = aColor;
        vAlpha = aAlpha;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * (320.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;
    const particleFragShader = `
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float alpha = smoothstep(0.5, 0.15, d) * vAlpha;
        gl_FragColor = vec4(vColor, alpha);
      }
    `;

    const particleMat = new THREE.ShaderMaterial({
      vertexShader: particleVertShader,
      fragmentShader: particleFragShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // === MOUSE TRACKING FOR PARALLAX 3D ===
    let mouseX3D = 0, mouseY3D = 0;
    let targetCamX = 0, targetCamY = 0.3;
    let wind3D = 0.003;
    let targetWind3D = 0.003;

    container3D.addEventListener('mousemove', (e) => {
      const rect = container3D.getBoundingClientRect();
      mouseX3D = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY3D = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetCamX = mouseX3D * 0.6;
      targetCamY = 0.3 - mouseY3D * 0.3;
      targetWind3D = mouseX3D * 0.015;
    }, { passive: true });

    container3D.addEventListener('mouseleave', () => {
      targetCamX = 0;
      targetCamY = 0.3;
      targetWind3D = 0.003;
    });

    // Click to burst 3D particles
    function burst3DParticles(count = 60) {
      for (let i = 0; i < Math.min(count, PARTICLE_COUNT); i++) {
        resetParticle(i, true);
      }
      particleGeo.attributes.position.needsUpdate = true;
      particleGeo.attributes.aColor.needsUpdate = true;
      particleGeo.attributes.aAlpha.needsUpdate = true;
      particleGeo.attributes.aSize.needsUpdate = true;
    }

    container3D.addEventListener('click', () => burst3DParticles(60));

    // === SEASON TRANSITION ===
    window.triggerSeasonTransition = (newSeason) => {
      if (newSeason !== activeSeasonKey3D) {
        prevSeasonKey3D = activeSeasonKey3D;
        activeSeasonKey3D = newSeason;
        crossfadeProgress = 0;
        if (treePlanes[newSeason]) {
          treePlanes[newSeason].visible = true;
          treePlanes[newSeason].material.opacity = 0;
        }
      }
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const colors = getSeasonParticleColors(newSeason);
        const c = colors[Math.floor(Math.random() * colors.length)];
        particleColors[i*3]   = c[0];
        particleColors[i*3+1] = c[1];
        particleColors[i*3+2] = c[2];
      }
      particleGeo.attributes.aColor.needsUpdate = true;
      burst3DParticles(50);
    };

    // === DYNAMIC LIGHTING UPDATES ===
    function updateLighting() {
      const isDay = document.body.classList.contains('theme-day');
      ambientLight.intensity = isDay ? 0.85 : 0.55;
      dirLight.intensity = isDay ? 1.1 : 0.75;
      dirLight.color.setHex(isDay ? 0xfff8ee : 0xdde8ff);
      rimLight.intensity = isDay ? 0.2 : 0.4;
      rimLight.color.setHex(isDay ? 0xccddee : 0x6688cc);
      pointLight.intensity = isDay ? 0.25 : 0.5;
      shadowMesh.material.opacity = isDay ? 0.12 : 0.3;
    }

    // === RENDER LOOP ===
    let time3D = 0;
    const clock = new THREE.Clock();

    function animate3D() {
      requestAnimationFrame(animate3D);
      const dt = clock.getDelta();
      time3D += dt;

      // Smooth camera parallax
      camera.position.x += (targetCamX - camera.position.x) * 0.04;
      camera.position.y += (targetCamY - camera.position.y) * 0.04;
      camera.lookAt(0, 0.1, 0);

      // Wind
      wind3D += (targetWind3D - wind3D) * 0.03;

      // Subtle tree sway
      Object.entries(treePlanes).forEach(([season, mesh]) => {
        if (mesh.visible) {
          mesh.rotation.y = Math.sin(time3D * 0.4) * 0.02 + wind3D * 0.3;
          mesh.rotation.z = Math.sin(time3D * 0.3 + 1) * 0.005;
        }
      });

      // Cross-fade between seasons
      if (crossfadeProgress < 1) {
        crossfadeProgress += dt * 1.2;
        if (crossfadeProgress > 1) crossfadeProgress = 1;
      }
      Object.entries(treePlanes).forEach(([season, mesh]) => {
        if (season === activeSeasonKey3D) {
          mesh.material.opacity = crossfadeProgress;
          mesh.visible = true;
        } else if (season === prevSeasonKey3D && crossfadeProgress < 1) {
          mesh.material.opacity = 1 - crossfadeProgress;
          mesh.visible = true;
        } else {
          mesh.material.opacity = 0;
          mesh.visible = false;
        }
      });

      // Update 3D particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const v = particleVelocities[i];
        particlePositions[i*3]   += v.vx + wind3D * 0.4;
        particlePositions[i*3+1] += v.vy;
        particlePositions[i*3+2] += v.vz;

        particlePositions[i*3] += Math.sin(time3D * 1.2 + v.rotPhase) * 0.001;

        if (particlePositions[i*3+1] < -2.2 ||
            particlePositions[i*3] > 3.5 ||
            particlePositions[i*3] < -3.5) {
          resetParticle(i);
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Update lighting for theme changes
      updateLighting();

      renderer.render(scene, camera);
    }

    animate3D();
  }


  /* ============================================================
     8. ANIMATED STATS COUNTER
     ============================================================ */
  const statDigits = document.querySelectorAll('.stat-digit');

  function runCounter(el, target, duration = 1600) {
    const start = performance.now();
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(target * ease);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(step);
  }

  const statsSection = document.querySelector('.about-stats-column');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statDigits.forEach(num => {
            const target = parseInt(num.dataset.target, 10) || 0;
            runCounter(num, target);
          });
        }
      });
    }, { threshold: 0.25 });

    statsObserver.observe(statsSection);
  }


  /* ============================================================
     9. HERO ROLE TYPEWRITER
     ============================================================ */
  const typewriterEl = document.getElementById('hero-typewriter');
  if (typewriterEl) {
    let roles = [
      'Frontend Developer',
      'FullStack Engineer',
      'UI/UX Craftsperson',
      'Software Architect'
    ];
    try {
      const activeLang = localStorage.getItem('portfolio_lang') || 'en';
      if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[activeLang] && TRANSLATIONS[activeLang].hero_typewriter_roles) {
        roles = TRANSLATIONS[activeLang].hero_typewriter_roles;
      }
    } catch (e) {}

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 80;
    let typeTimeout = null;

    function typeLoop() {
      const currentText = roles[roleIdx % roles.length];

      if (isDeleting) {
        charIdx--;
        typewriterEl.textContent = currentText.substring(0, charIdx);
        typingSpeed = 38;
      } else {
        charIdx++;
        typewriterEl.textContent = currentText.substring(0, charIdx);
        typingSpeed = 80;
      }

      if (!isDeleting && charIdx === currentText.length) {
        isDeleting = true;
        typingSpeed = 2200;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typingSpeed = 400;
      }

      typeTimeout = setTimeout(typeLoop, typingSpeed);
    }
    typeTimeout = setTimeout(typeLoop, 900);

    window.updateTypewriterRoles = function(newRoles) {
      if (!Array.isArray(newRoles) || newRoles.length === 0) return;
      roles = newRoles;
      roleIdx = 0;
      charIdx = 0;
      isDeleting = false;
      if (typeTimeout) clearTimeout(typeTimeout);
      typeLoop();
    };
  }


  /* ============================================================
     10. MOBILE DROPDOWN MENU & FORM FEEDBACK
     ============================================================ */
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinksContainer = document.getElementById('nav-links');

  if (mobileBtn && navLinksContainer) {
    let isClosing = false;
    const closeMobileMenu = () => {
      if (!navLinksContainer.classList.contains('open') || isClosing) return;
      isClosing = true;
      navLinksContainer.classList.add('closing');
      mobileBtn.setAttribute('aria-expanded', 'false');
      setTimeout(() => {
        navLinksContainer.classList.remove('open', 'closing');
        isClosing = false;
      }, 220);
    };

    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isClosing) return;
      if (navLinksContainer.classList.contains('open')) {
        closeMobileMenu();
      } else {
        navLinksContainer.classList.add('open');
        mobileBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // Close when clicking any link inside the dropdown
    const allDrawerLinks = navLinksContainer.querySelectorAll('a');
    allDrawerLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close when pressing Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinksContainer.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Close when clicking outside header/dropdown
    document.addEventListener('click', (e) => {
      if (navLinksContainer.classList.contains('open')) {
        const header = document.getElementById('site-header');
        if (header && !header.contains(e.target)) {
          closeMobileMenu();
        }
      }
    });
  }

  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const msg = document.getElementById('cf-msg').value.trim();

      const activeLang = localStorage.getItem('portfolio_lang') || 'en';
      const dict = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[activeLang]) ? TRANSLATIONS[activeLang] : null;

      if (!name || !email || !msg) {
        alert(activeLang === 'vi' ? 'Vui lòng điền đầy đủ các thông tin cần thiết!' : 'Please fill in all required fields!');
        return;
      }

      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      const sendingMsg = dict ? dict.form_submitting : 'Sending message...';
      submitBtn.innerHTML = `<span>${sendingMsg}</span>`;

      await new Promise(r => setTimeout(r, 1200));

      const successMsg = dict ? dict.form_success : 'Message sent successfully! 🎉';
      submitBtn.innerHTML = `<span>${successMsg}</span>`;
      submitBtn.style.background = '#10b981';
      contactForm.reset();

      setTimeout(() => {
        submitBtn.innerHTML = origText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3500);
    });
  }

  /* ---- Copy Email to Clipboard Handler (Dual-Option Support) ---- */
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const email = copyEmailBtn.getAttribute('data-email') || 'ngotientai17112004@gmail.com';

      function onCopiedSuccess() {
        const iconCopy = copyEmailBtn.querySelector('.icon-copy');
        const iconCheck = copyEmailBtn.querySelector('.icon-check');
        const toast = copyEmailBtn.querySelector('.copy-toast');

        const activeLang = localStorage.getItem('portfolio_lang') || 'en';
        copyEmailBtn.classList.add('copied');
        if (iconCopy) iconCopy.style.display = 'none';
        if (iconCheck) iconCheck.style.display = 'block';
        if (toast) toast.textContent = activeLang === 'vi' ? 'Đã chép!' : 'Copied!';

        setTimeout(() => {
          copyEmailBtn.classList.remove('copied');
          if (iconCopy) iconCopy.style.display = 'block';
          if (iconCheck) iconCheck.style.display = 'none';
          if (toast) {
            const currentLang = localStorage.getItem('portfolio_lang') || 'en';
            toast.textContent = currentLang === 'vi' ? 'Sao chép' : 'Copy';
          }
        }, 2200);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(onCopiedSuccess).catch(() => {
          fallbackCopyText(email, onCopiedSuccess);
        });
      } else {
        fallbackCopyText(email, onCopiedSuccess);
      }
    });
  }

  function fallbackCopyText(text, callback) {
    try {
      const tempInput = document.createElement('textarea');
      tempInput.value = text;
      tempInput.style.position = 'fixed';
      tempInput.style.left = '-9999px';
      tempInput.style.top = '0';
      document.body.appendChild(tempInput);
      tempInput.focus();
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      if (callback) callback();
    } catch (err) {}
  }

  /* ============================================================
     11. TXEMA ALBERO 3D MECHANICAL KEYBOARD ENGINE
     (Section 3 Tech Stack & Downwards Scroll Choreography)
     ============================================================ */
  function initMechanicalKeyboard() {
    const canvas = document.getElementById('keyboard-canvas');
    const wrapper = document.getElementById('keyboard-3d-wrapper');
    if (!canvas || !wrapper || typeof THREE === 'undefined' || typeof KEYBOARD_SKILLS === 'undefined') {
      return;
    }

    // --- Audio Engine (switch_press.mp3 & switch_release.mp3) ---
    let audioCtx = null;
    const KEY_SOUND_URLS = ['assets/audio/switch_press.mp3', 'assets/audio/switch_release.mp3'];
    const keySoundBuffers = [null, null];
    let keySoundsLoading = null;

    function installAudioUnlock() {
      const unlock = () => {
        if (audioCtx && audioCtx.state === 'suspended') {
          audioCtx.resume().catch(() => {});
        }
        window.removeEventListener('pointerdown', unlock);
        window.removeEventListener('keydown', unlock);
        window.removeEventListener('touchstart', unlock);
      };
      window.addEventListener('pointerdown', unlock, { once: true });
      window.addEventListener('keydown', unlock, { once: true });
      window.addEventListener('touchstart', unlock, { once: true });
    }

    function loadKeySounds(ctx) {
      if (keySoundsLoading) return keySoundsLoading;
      keySoundsLoading = Promise.all(
        KEY_SOUND_URLS.map((url, i) =>
          fetch(url)
            .then(r => r.arrayBuffer())
            .then(buf => ctx.decodeAudioData(buf))
            .then(decoded => { keySoundBuffers[i] = decoded; })
            .catch(() => {})
        )
      ).then(() => {});
      return keySoundsLoading;
    }

    function playKeyClick(seed = 0) {
      try {
        if (!audioCtx) {
          const Ctor = window.AudioContext || window.webkitAudioContext;
          if (!Ctor) return;
          audioCtx = new Ctor();
          installAudioUnlock();
        }
        const ctx = audioCtx;
        if (ctx.state === 'suspended') {
          ctx.resume().catch(() => {});
          return;
        }
        const trigger = () => {
          const available = keySoundBuffers.filter(b => b !== null);
          if (available.length === 0) return;
          const buffer = available[Math.floor(Math.random() * available.length)];
          // Per-key playback rate detune (±4%)
          const detune = 1 + (((seed * 9301 + 49297) % 233280) / 233280 - 0.5) * 0.08;
          const src = ctx.createBufferSource();
          src.buffer = buffer;
          src.playbackRate.value = detune;
          const gain = ctx.createGain();
          gain.gain.value = 0.72;
          src.connect(gain);
          gain.connect(ctx.destination);
          src.start();
        };
        if (keySoundBuffers.some(b => b !== null)) {
          trigger();
        } else {
          loadKeySounds(ctx).then(trigger);
        }
      } catch (err) {
        // Audio failure must never break 3D rendering
      }
    }

    // --- Three.js Scene Setup ---
    const scene = new THREE.Scene();

    function getStageSize() {
      const rect = wrapper.getBoundingClientRect();
      const w = wrapper.clientWidth || (rect.width > 0 ? rect.width : 1100);
      const h = wrapper.clientHeight || (rect.height > 0 ? rect.height : 640);
      return { width: Math.max(320, w), height: Math.max(400, h) };
    }

    // --- 3D Keyboard Responsive Showcase Pose System ---
    function getResponsivePose() {
      const w = window.innerWidth;
      if (w < 480) {
        // Small mobile screens (portrait phones 320px - 479px)
        return {
          isMobile: true,
          yaw: Math.PI * 0.38,
          pitch: Math.PI * 0.16,
          roll: Math.PI * 0.08,
          posX: 0.0,
          posY: -0.38,
          posZ: 0,
          scale: 1.16,
          textPos: new THREE.Vector3(-0.96, 1.35, 1.15),
          textRot: new THREE.Euler(-0.62, 0.08, 0.32, 'XYZ'),
          textScale: 0.78,
          camPos: new THREE.Vector3(0.0, 2.65, 8.8),
          fov: 25
        };
      } else if (w < 768) {
        // Large phones / small phablets (480px - 767px)
        return {
          isMobile: true,
          yaw: Math.PI * 0.38,
          pitch: Math.PI * 0.16,
          roll: Math.PI * 0.08,
          posX: 0.0,
          posY: -0.32,
          posZ: 0,
          scale: 1.22,
          textPos: new THREE.Vector3(-1.08, 1.40, 1.15),
          textRot: new THREE.Euler(-0.65, 0.08, 0.35, 'XYZ'),
          textScale: 0.82,
          camPos: new THREE.Vector3(0.0, 2.75, 9.2),
          fov: 24
        };
      } else if (w < 1024) {
        // Tablet screen (768px - 1023px)
        return {
          isMobile: false,
          yaw: Math.PI * 0.39,
          pitch: Math.PI * 0.15,
          roll: Math.PI * 0.11,
          posX: 0.16,
          posY: 0.32,
          posZ: 0,
          scale: 1.12,
          textPos: new THREE.Vector3(-1.38, 0.66, 1.25),
          textRot: new THREE.Euler(-0.95, 0.18, 0.98, 'XYZ'),
          textScale: 0.88,
          camPos: new THREE.Vector3(0.8, 3.2, 10.0),
          fov: 22
        };
      } else {
        // Desktop / Laptop (1024px+)
        return {
          isMobile: false,
          yaw: Math.PI * 0.40,
          pitch: Math.PI * 0.14,
          roll: Math.PI * 0.13,
          posX: 0.32,
          posY: 0.46,
          posZ: 0,
          scale: 1.38,
          textPos: new THREE.Vector3(-1.58, 0.74, 1.35),
          textRot: new THREE.Euler(-0.95, 0.18, 0.98, 'XYZ'),
          textScale: 1.0,
          camPos: new THREE.Vector3(1.4, 3.2, 9.8),
          fov: 22
        };
      }
    }

    const initSize = getStageSize();
    const initPose = getResponsivePose();
    const camera = new THREE.PerspectiveCamera(initPose.fov, initSize.width / initSize.height, 0.1, 100);
    camera.position.copy(initPose.camPos);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(initSize.width, initSize.height);
    renderer.outputEncoding = THREE.sRGBEncoding;

    // --- Lighting (Crisp top-bright, soft natural diffuse shading, no glare) ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.35);
    dirLight.position.set(-4, 7, 3);
    scene.add(dirLight);

    const hemiLight = new THREE.HemisphereLight(0xeaf2fb, 0x0a1428, 0.25);
    scene.add(hemiLight);

    // --- Geometry Helpers ---
    function makeRoundedRectShape(width, depth, cornerRadius) {
      const shape = new THREE.Shape();
      const w = width / 2;
      const d = depth / 2;
      const r = Math.min(cornerRadius, w, d);
      shape.moveTo(-w + r, -d);
      shape.lineTo(w - r, -d);
      shape.quadraticCurveTo(w, -d, w, -d + r);
      shape.lineTo(w, d - r);
      shape.quadraticCurveTo(w, d, w - r, d);
      shape.lineTo(-w + r, d);
      shape.quadraticCurveTo(-w, d, -w, d - r);
      shape.lineTo(-w, -d + r);
      shape.quadraticCurveTo(-w, -d, -w + r, -d);
      return shape;
    }

    function createExtrudedBox(width, depth, height, cornerRadius, bevelSize, topScale = 1) {
      const shape = makeRoundedRectShape(width, depth, cornerRadius);
      const extrudeDepth = Math.max(0.001, height - 2 * bevelSize);
      const geom = new THREE.ExtrudeGeometry(shape, {
        depth: extrudeDepth,
        bevelEnabled: bevelSize > 0,
        bevelThickness: bevelSize,
        bevelSize: bevelSize,
        bevelSegments: 2,
        steps: 1,
        curveSegments: 12
      });
      geom.rotateX(-Math.PI / 2);
      geom.translate(0, -height / 2 + bevelSize, 0);

      if (topScale !== 1) {
        const pos = geom.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const y = pos.getY(i);
          const t = (y + height / 2) / height;
          const factor = THREE.MathUtils.lerp(1, topScale, t);
          pos.setX(i, pos.getX(i) * factor);
          pos.setZ(i, pos.getZ(i) * factor);
        }
        pos.needsUpdate = true;
        geom.computeVertexNormals();
      }
      return geom;
    }

    // --- SVG Icon Texture Generator ---
    function makeIconTexture(svgPath, hexColor, size = 256) {
      const iconCanvas = document.createElement('canvas');
      iconCanvas.width = size;
      iconCanvas.height = size;
      const ctx = iconCanvas.getContext('2d');
      ctx.clearRect(0, 0, size, size);

      const iconTargetSize = Math.round(size * 0.62);
      const scale = iconTargetSize / 24;
      ctx.save();
      ctx.translate(size / 2, size / 2);
      ctx.scale(scale, scale);
      ctx.translate(-12, -12);
      ctx.fillStyle = hexColor.startsWith('#') ? hexColor : '#' + hexColor;
      if (svgPath) {
        ctx.fill(new Path2D(svgPath));
      }
      ctx.restore();

      const tex = new THREE.CanvasTexture(iconCanvas);
      tex.encoding = THREE.sRGBEncoding;
      tex.needsUpdate = true;
      return tex;
    }

    // --- Keyboard Mesh Construction ---
    const COLS = 5;
    const ROWS = 3;
    const KEYCAP_SIZE = 0.4;
    const KEYCAP_HEIGHT = 0.28;
    const KEYCAP_TOP_SCALE = 0.78;
    const COL_SPACING = 0.42;
    const ROW_SPACING = 0.42;
    const BASE_WIDTH = 2.4;
    const BASE_DEPTH = 1.4;
    const BASE_HEIGHT = 0.26;
    const ICON_PLANE_SIZE = KEYCAP_SIZE * KEYCAP_TOP_SCALE * 0.78;
    const PRESS_DEPTH = 0.15;

    const keyboardGroup = new THREE.Group();
    keyboardGroup.rotation.order = 'YXZ';
    scene.add(keyboardGroup);

    // Seasonal Tray Colors matching Portfolio's 4 Seasons
    const SEASON_KEYBOARD_THEMES = {
      spring: {
        tray: '#f472b6',       // Sakura Blossom Rose Pink
        accent: '#f472b6',
        tagline: '#fbcfe8',
        name: 'Mùa Xuân'
      },
      summer: {
        tray: '#10b981',       // Lush Emerald Green
        accent: '#10b981',
        tagline: '#a7f3d0',
        name: 'Mùa Hạ'
      },
      autumn: {
        tray: '#f97316',       // Warm Golden Amber / Terracotta
        accent: '#f97316',
        tagline: '#fed7aa',
        name: 'Mùa Thu'
      },
      winter: {
        tray: '#38bdf8',       // Frosted Glacier Ice Blue
        accent: '#38bdf8',
        tagline: '#bae6fd',
        name: 'Mùa Đông'
      }
    };

    function getCurrentSeasonKey() {
      return document.documentElement.getAttribute('data-season') || document.body.getAttribute('data-season') || 'spring';
    }

    function getInitialTrayColor() {
      const s = getCurrentSeasonKey();
      return SEASON_KEYBOARD_THEMES[s]?.tray || '#f472b6';
    }

    // Keyboard Base Tray
    const baseGeom = createExtrudedBox(BASE_WIDTH, BASE_DEPTH, BASE_HEIGHT, 0.12, 0.02, 1);
    const baseMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(getInitialTrayColor()),
      roughness: 0.38,
      metalness: 0.22
    });
    const baseMesh = new THREE.Mesh(baseGeom, baseMat);
    keyboardGroup.add(baseMesh);

    // Switch Plate (anodized metallic plate sitting under keycaps)
    const plateGeom = createExtrudedBox(BASE_WIDTH * 0.94, BASE_DEPTH * 0.92, 0.04, 0.08, 0.01, 1);
    const plateMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(getInitialTrayColor()),
      roughness: 0.25,
      metalness: 0.65
    });
    const plateMesh = new THREE.Mesh(plateGeom, plateMat);
    plateMesh.position.set(0, BASE_HEIGHT / 2 + 0.01, 0);
    keyboardGroup.add(plateMesh);

    // Seasonal RGB Underglow Light
    const underglowLight = new THREE.PointLight(new THREE.Color(getInitialTrayColor()), 2.6, 6);
    underglowLight.position.set(0, -0.2, 0.1);
    keyboardGroup.add(underglowLight);

    window.updateKeyboardSeason = function(seasonKey) {
      update3DCallout(currentSkill);
    };

    // Shared keycap geometry
    const keycapGeom = createExtrudedBox(KEYCAP_SIZE, KEYCAP_SIZE, KEYCAP_HEIGHT, 0.05, 0.012, KEYCAP_TOP_SCALE);
    const keycapY = BASE_HEIGHT / 2 + KEYCAP_HEIGHT / 2 + 0.005;
    const iconY = KEYCAP_HEIGHT / 2 + 0.0015;

    // Keys State List & Meshes
    const keycaps = [];
    const interactiveMeshes = [];

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const index = row * COLS + col;
        const skill = KEYBOARD_SKILLS[index] || {
          slug: 'key' + index,
          title: 'Skill ' + index,
          hex: 'ffffff',
          path: '',
          tagline: 'Công nghệ hiện đại'
        };

        const x = (col - (COLS - 1) / 2) * COL_SPACING;
        const z = (row - (ROWS - 1) / 2) * ROW_SPACING;

        const keyGroup = new THREE.Group();
        keyGroup.position.set(x, keycapY, z);

        const pressGroup = new THREE.Group();
        keyGroup.add(pressGroup);

        // Authentic 2-Tone Custom Mechanical Keyboard Keycaps:
        // - Alphas (Inner Cols 1, 2, 3): Soothing matte PBT off-white / light slate (#dde4ec), 0 glare, eye-friendly
        // - Modifiers (Outer Cols 0 & 4): Sleek matte slate-gray PBT (#3e4a5b), high-contrast tactile styling
        const isModifier = (col === 0 || col === 4);
        const keycapBaseHex = isModifier ? 0x3e4a5b : 0xdde4ec;

        const mat = new THREE.MeshPhysicalMaterial({
          color: keycapBaseHex,
          roughness: 0.65,
          clearcoat: 0.05,
          clearcoatRoughness: 0.25,
          metalness: 0.0,
          emissive: 0x000000,
          emissiveIntensity: 0.0
        });

        const keyMesh = new THREE.Mesh(keycapGeom, mat);
        keyMesh.userData = { index, row, col, skill, id: `${row}-${col}` };
        pressGroup.add(keyMesh);
        interactiveMeshes.push(keyMesh);

        // Tech Logo Color with optimal contrast on Alpha vs Modifier keycaps
        let iconColor = skill.hex || skill.color || '#61DAFB';
        if (isModifier) {
          if (skill.slug === 'python') iconColor = '#38bdf8';
          else if (skill.slug === 'csharp' || skill.slug === 'php') iconColor = '#86efac';
          else if (skill.slug === 'nodedotjs') iconColor = '#4ade80';
          else if (skill.slug === 'git') iconColor = '#fb7185';
          else if (skill.slug === 'tailwindcss') iconColor = '#22d3ee';
          else if (skill.slug === 'javascript') iconColor = '#facc15';
        }

        // Official Simple-Icon Logo Plane
        const iconTex = makeIconTexture(skill.path, iconColor);
        const iconGeom = new THREE.PlaneGeometry(ICON_PLANE_SIZE, ICON_PLANE_SIZE);
        const iconMat = new THREE.MeshBasicMaterial({
          map: iconTex,
          transparent: true,
          depthWrite: false
        });
        const iconMesh = new THREE.Mesh(iconGeom, iconMat);
        iconMesh.position.set(0, iconY, 0);
        iconMesh.rotation.set(-Math.PI / 2, 0, 0);
        pressGroup.add(iconMesh);

        keyboardGroup.add(keyGroup);

        keycaps.push({
          index,
          row,
          col,
          id: `${row}-${col}`,
          skill,
          mesh: keyMesh,
          pressGroup,
          mat,
          pressY: 0,
          targetY: 0,
          liftAmp: 0,
          contactAmp: 0,
          wavePhase: row * 0.9 + col * 0.55,
          randomBob: {
            freq: 0.6 + Math.random() * 0.6,
            phase: Math.random() * Math.PI * 2,
            threshold: 0.45 + Math.random() * 0.2
          }
        });
      }
    }

    // --- 3D Floating Title & Tagline Group Beside Keyboard (Txema Albero Callout) ---
    const textGroup = new THREE.Group();
    const currentPose = getResponsivePose();
    textGroup.position.copy(currentPose.textPos);
    textGroup.rotation.copy(currentPose.textRot);
    textGroup.scale.setScalar(currentPose.textScale);
    textGroup.visible = true;
    scene.add(textGroup);

    // High-Resolution 2D Canvas for 3D Tagline plane
    const taglineCanvas = document.createElement('canvas');
    taglineCanvas.width = 1024;
    taglineCanvas.height = 384;
    const taglineCtx = taglineCanvas.getContext('2d');
    const taglineTex = new THREE.CanvasTexture(taglineCanvas);
    taglineTex.encoding = THREE.sRGBEncoding;
    taglineTex.anisotropy = 4;
    const taglineMat = new THREE.MeshBasicMaterial({
      map: taglineTex,
      transparent: true,
      depthWrite: false,
      toneMapped: false
    });
    // Left edge aligns with title (x=0) and sits right under baseline
    const taglineMesh = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.9), taglineMat);
    taglineMesh.position.set(1.2, -0.46, 0);
    textGroup.add(taglineMesh);

    // --- 3D Typography Palette: Tailored per skill, Adaptive Day & Night Modes ---
    const SKILL_3D_PALETTES = {
      typescript: {
        night: { front: '#38bdf8', side: '#1d4ed8', emissive: '#0284c7' }, // Electric sky-blue with royal blue depth & soft cyan glow
        day:   { front: '#1d4ed8', side: '#1e3a8a', emissive: '#000000' }  // Bold royal blue, razor-sharp on warm linen paper
      },
      javascript: {
        night: { front: '#fde047', side: '#ca8a04', emissive: '#854d0e' },
        day:   { front: '#b45309', side: '#78350f', emissive: '#000000' }
      },
      html5: {
        night: { front: '#fb923c', side: '#c2410c', emissive: '#7c2d12' },
        day:   { front: '#c2410c', side: '#7c2d12', emissive: '#000000' }
      },
      css: {
        night: { front: '#c084fc', side: '#7e22ce', emissive: '#581c87' },
        day:   { front: '#7e22ce', side: '#4c1d95', emissive: '#000000' }
      },
      tailwindcss: {
        night: { front: '#22d3ee', side: '#0891b2', emissive: '#155e75' },
        day:   { front: '#0891b2', side: '#164e63', emissive: '#000000' }
      },
      python: {
        night: { front: '#60a5fa', side: '#2563eb', emissive: '#1e3a8a' },
        day:   { front: '#2563eb', side: '#1e40af', emissive: '#000000' }
      },
      react: {
        night: { front: '#67e8f9', side: '#0284c7', emissive: '#0369a1' },
        day:   { front: '#0284c7', side: '#075985', emissive: '#000000' }
      },
      nextdotjs: {
        night: { front: '#f8fafc', side: '#64748b', emissive: '#334155' },
        day:   { front: '#0f172a', side: '#020617', emissive: '#000000' }
      },
      nestjs: {
        night: { front: '#fb7185', side: '#e11d48', emissive: '#9f1239' },
        day:   { front: '#e11d48', side: '#9f1239', emissive: '#000000' }
      },
      nodedotjs: {
        night: { front: '#86efac', side: '#16a34a', emissive: '#14532d' },
        day:   { front: '#15803d', side: '#14532d', emissive: '#000000' }
      },
      csharp: {
        night: { front: '#86efac', side: '#16a34a', emissive: '#14532d' },
        day:   { front: '#15803d', side: '#14532d', emissive: '#000000' }
      },
      dotnet: {
        night: { front: '#c084fc', side: '#7e22ce', emissive: '#581c87' },
        day:   { front: '#7e22ce', side: '#4c1d95', emissive: '#000000' }
      },
      mysql: {
        night: { front: '#38bdf8', side: '#0284c7', emissive: '#075985' },
        day:   { front: '#0284c7', side: '#075985', emissive: '#000000' }
      },
      docker: {
        night: { front: '#38bdf8', side: '#0284c7', emissive: '#0369a1' },
        day:   { front: '#0284c7', side: '#0c4a6e', emissive: '#000000' }
      },
      git: {
        night: { front: '#f87171', side: '#dc2626', emissive: '#991b1b' },
        day:   { front: '#dc2626', side: '#991b1b', emissive: '#000000' }
      }
    };

    function getSkill3DColors(skill, isDay) {
      const slug = (skill?.slug || '').toLowerCase();
      const palette = SKILL_3D_PALETTES[slug];
      if (palette) {
        return isDay ? palette.day : palette.night;
      }
      return isDay 
        ? { front: '#1d4ed8', side: '#1e3a8a', emissive: '#000000' }
        : { front: '#38bdf8', side: '#1d4ed8', emissive: '#0284c7' };
    }

    function renderTaglineTexture(text) {
      const isDay = document.body.classList.contains('theme-day');
      const sKey = getCurrentSeasonKey();
      const sTheme = SEASON_KEYBOARD_THEMES[sKey] || SEASON_KEYBOARD_THEMES.spring;
      taglineCtx.clearRect(0, 0, taglineCanvas.width, taglineCanvas.height);
      taglineCtx.font = "600 40px 'Space Grotesk', -apple-system, sans-serif";
      
      // High-contrast, zero-glare, eye-comfortable legibility in both modes
      if (isDay) {
        taglineCtx.fillStyle = '#1e293b'; // Crisp deep slate on linen background
      } else {
        taglineCtx.fillStyle = sTheme.tagline || '#bae6fd';
      }
      taglineCtx.textBaseline = 'top';

      const words = (text || '').split(' ');
      let line = '';
      let y = 10;
      const lineHeight = 56;
      const maxWidth = taglineCanvas.width - 24;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = taglineCtx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          taglineCtx.fillText(line, 0, y);
          line = words[n] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      taglineCtx.fillText(line, 0, y);
      taglineTex.needsUpdate = true;
    }

    let loadedFont = null;
    let titleMesh = null;
    let currentSkill = KEYBOARD_SKILLS[1] || KEYBOARD_SKILLS[0]; // Default: TypeScript

    function update3DCallout(skill) {
      if (!skill) return;
      currentSkill = skill;

      const isDay = document.body.classList.contains('theme-day');
      const colors = getSkill3DColors(skill, isDay);

      // 1. Update 3D Extruded Title with Dual-Material Depth
      if (loadedFont && typeof THREE.TextGeometry !== 'undefined') {
        if (titleMesh) {
          textGroup.remove(titleMesh);
          if (titleMesh.geometry) titleMesh.geometry.dispose();
          if (Array.isArray(titleMesh.material)) {
            titleMesh.material.forEach(m => m && m.dispose && m.dispose());
          } else if (titleMesh.material) {
            titleMesh.material.dispose();
          }
        }
        try {
          const textGeo = new THREE.TextGeometry(skill.title, {
            font: loadedFont,
            size: 0.22,
            height: 0.055,
            depth: 0.055,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.006,
            bevelSize: 0.003,
            bevelOffset: 0,
            bevelSegments: 3
          });

          // Material 0: Front face (vivid, anti-glare, pristine contrast)
          const frontMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color(colors.front),
            roughness: isDay ? 0.32 : 0.24,
            metalness: isDay ? 0.06 : 0.16,
            emissive: new THREE.Color(colors.emissive || 0x000000),
            emissiveIntensity: isDay ? 0.0 : 0.28
          });

          // Material 1: Extruded side bevels (rich structural depth & shadow)
          const sideMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color(colors.side),
            roughness: isDay ? 0.52 : 0.44,
            metalness: isDay ? 0.12 : 0.24
          });

          titleMesh = new THREE.Mesh(textGeo, [frontMat, sideMat]);
          textGroup.add(titleMesh);
        } catch (e) {
          console.warn('TextGeometry warning:', e);
        }
      }

      // 2. Update 3D Tagline canvas texture
      renderTaglineTexture(skill.tagline || '');
    }

    // Safely load typeface font using THREE.FontLoader
    function tryLoadFont() {
      if (typeof THREE.FontLoader !== 'undefined') {
        try {
          const fontLoader = new THREE.FontLoader();
          fontLoader.load('assets/fonts/space_grotesk_bold.typeface.json', (font) => {
            loadedFont = font;
            update3DCallout(currentSkill);
          }, undefined, (err) => {
            console.warn('Font load warning:', err);
          });
        } catch (err) {
          console.warn('FontLoader init warning:', err);
        }
      } else {
        setTimeout(tryLoadFont, 100);
      }
    }
    tryLoadFont();

    // --- 3D Keyboard Showcase Pose & State (Tech Stack Only) ---
    const KEYBOARD_POSE = {
      yaw: Math.PI * 0.40,
      pitch: Math.PI * 0.14,
      roll: Math.PI * 0.13,
      posX: 0.32,
      posY: 0.46,
      posZ: 0,
      scale: 1.38
    };

    let hoveredKeyId = '0-1'; // Default: row 0, col 1 (TypeScript)

    // --- Raycasting for 3D Keycap Hover & Click ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    function getCanvasRelativeCoords(e) {
      const rect = canvas.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        return null;
      }
      return {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1
      };
    }

    window.addEventListener('pointermove', (e) => {
      const coords = getCanvasRelativeCoords(e);
      if (!coords) {
        if (hoveredKeyId !== null) {
          hoveredKeyId = null;
          document.body.style.cursor = '';
        }
        return;
      }

      mouse.x = coords.x;
      mouse.y = coords.y;

      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(interactiveMeshes);

      if (hits.length > 0) {
        const hitKey = hits[0].object.userData;
        if (hoveredKeyId !== hitKey.id) {
          hoveredKeyId = hitKey.id;
          playKeyClick(hitKey.index);
          update3DCallout(hitKey.skill);
          document.body.style.cursor = 'pointer';
        }
      } else {
        if (hoveredKeyId !== null) {
          hoveredKeyId = null;
          document.body.style.cursor = '';
        }
      }
    });

    window.addEventListener('pointerdown', (e) => {
      const coords = getCanvasRelativeCoords(e);
      if (!coords) return;

      mouse.x = coords.x;
      mouse.y = coords.y;

      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(interactiveMeshes);

      if (hits.length > 0) {
        const hitKey = hits[0].object.userData;
        const cap = keycaps.find(k => k.id === hitKey.id);
        if (cap) {
          playKeyClick(hitKey.index + 5);
          update3DCallout(hitKey.skill);
          cap.pressY = -PRESS_DEPTH * 1.6;
        }
      }
    });

    // --- Render & Animation Loop (IntersectionObserver GPU Optimization) ---
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.01 });
    visibilityObserver.observe(wrapper);

    let prevTime = performance.now();
    const blackColor = new THREE.Color(0x000000);
    let lastIsDay = document.body.classList.contains('theme-day');

    window.updateKeyboardTheme = function(isDay) {
      lastIsDay = isDay;
      update3DCallout(currentSkill);
      if (typeof ambientLight !== 'undefined') {
        ambientLight.intensity = isDay ? 0.75 : 0.45;
      }
      if (typeof dirLight !== 'undefined') {
        dirLight.intensity = isDay ? 1.15 : 1.35;
      }
    };

    function animateKeyboard(currentTime) {
      requestAnimationFrame(animateKeyboard);

      // Save GPU/battery when user is not viewing the skills section
      if (!isVisible) return;

      // Real-time Day / Night mode synchronization
      const currentIsDay = document.body.classList.contains('theme-day');
      if (currentIsDay !== lastIsDay) {
        lastIsDay = currentIsDay;
        update3DCallout(currentSkill);
        if (typeof ambientLight !== 'undefined') {
          ambientLight.intensity = currentIsDay ? 0.75 : 0.45;
        }
        if (typeof dirLight !== 'undefined') {
          dirLight.intensity = currentIsDay ? 1.15 : 1.35;
        }
      }

      const delta = Math.min((currentTime - prevTime) / 1000, 0.1);
      prevTime = currentTime;
      const t = currentTime / 1000;

      // Gentle floating animation
      const yawSwing = 0.035;
      const pitchSwing = 0.015;
      const period = 18;
      const w = (Math.PI * 2) / period;

      const pose = getResponsivePose();
      keyboardGroup.rotation.y = pose.yaw + Math.sin(t * w) * yawSwing;
      keyboardGroup.rotation.x = pose.pitch + Math.sin(t * w * 0.6) * pitchSwing;
      keyboardGroup.rotation.z = pose.roll;
      keyboardGroup.position.set(
        pose.posX,
        pose.posY + Math.sin(t * 0.6) * 0.03,
        pose.posZ
      );
      keyboardGroup.scale.setScalar(pose.scale);

      // Smoothly lerp keyboard base tray, plate & underglow light to active season color
      const activeSeason = getCurrentSeasonKey();
      const targetTheme = SEASON_KEYBOARD_THEMES[activeSeason] || SEASON_KEYBOARD_THEMES.spring;
      const targetTrayColor = new THREE.Color(targetTheme.tray);
      const targetAccentColor = new THREE.Color(targetTheme.accent);

      baseMat.color.lerp(targetTrayColor, 0.08);
      if (typeof plateMat !== 'undefined') plateMat.color.lerp(targetTrayColor, 0.08);
      if (typeof underglowLight !== 'undefined') underglowLight.color.lerp(targetAccentColor, 0.08);

      // Keycaps per-frame animation (depress, seasonal emissive glow on hover, 0 idle)
      keycaps.forEach(cap => {
        const isHovered = (hoveredKeyId === cap.id);
        const pressed = isHovered ? -PRESS_DEPTH : 0;

        cap.pressY = THREE.MathUtils.lerp(cap.pressY, pressed, 0.25);
        cap.pressGroup.position.y = cap.pressY;

        // Emissive glow lerp: vibrant on hover with seasonal accent color, 0 on idle (realistic matte PBT shading)
        const targetIntensity = isHovered ? 0.75 : 0.0;
        cap.mat.emissiveIntensity = THREE.MathUtils.lerp(cap.mat.emissiveIntensity, targetIntensity, 0.2);
        cap.mat.emissive.lerp(isHovered ? targetAccentColor : blackColor, 0.2);
      });

      renderer.render(scene, camera);
    }

    requestAnimationFrame(animateKeyboard);

    // --- Container Resize Handling ---
    function handleResize() {
      const size = getStageSize();
      const pose = getResponsivePose();
      camera.aspect = size.width / size.height;
      camera.fov = pose.fov;
      camera.updateProjectionMatrix();
      camera.position.copy(pose.camPos);
      camera.lookAt(0, 0, 0);
      renderer.setSize(size.width, size.height);

      if (typeof textGroup !== 'undefined' && textGroup) {
        textGroup.position.copy(pose.textPos);
        textGroup.rotation.copy(pose.textRot);
        textGroup.scale.setScalar(pose.textScale);
      }
    }
    window.addEventListener('resize', handleResize);
    setTimeout(handleResize, 100);
    setTimeout(handleResize, 500);
  }

  // Launch Mechanical Keyboard
  initMechanicalKeyboard();

  // --- Developer IDE Window Tabs & Copy Handler ---
  (function initDevIDE() {
    const tabAbout = document.getElementById('ideTabAbout');
    const tabStack = document.getElementById('ideTabStack');
    const paneAbout = document.getElementById('paneAbout');
    const paneStack = document.getElementById('paneStack');
    const lineNumbers = document.getElementById('ideLineNumbers');
    const langTag = document.getElementById('ideLangTag');
    const copyBtn = document.getElementById('ideCopyBtn');

    if (!tabAbout || !tabStack || !paneAbout || !paneStack) return;

    function setFile(file) {
      if (file === 'about') {
        tabAbout.classList.add('ide-tab--active');
        tabAbout.setAttribute('aria-selected', 'true');
        tabStack.classList.remove('ide-tab--active');
        tabStack.setAttribute('aria-selected', 'false');
        paneAbout.style.display = '';
        paneStack.style.display = 'none';
        if (langTag) langTag.textContent = 'TypeScript 5.x';
        if (lineNumbers) {
          lineNumbers.innerHTML = '<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span>';
        }
      } else {
        tabStack.classList.add('ide-tab--active');
        tabStack.setAttribute('aria-selected', 'true');
        tabAbout.classList.remove('ide-tab--active');
        tabAbout.setAttribute('aria-selected', 'false');
        paneStack.style.display = '';
        paneAbout.style.display = 'none';
        if (langTag) langTag.textContent = 'JSON';
        if (lineNumbers) {
          lineNumbers.innerHTML = '<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>';
        }
      }
    }

    tabAbout.addEventListener('click', () => setFile('about'));
    tabStack.addEventListener('click', () => setFile('stack'));

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const isAbout = tabAbout.classList.contains('ide-tab--active');
        const activePane = isAbout ? paneAbout : paneStack;
        const textToCopy = activePane ? activePane.innerText : '';
        try {
          await navigator.clipboard.writeText(textToCopy);
          copyBtn.classList.add('copied');
          const idleIcon = copyBtn.querySelector('.copy-icon-idle');
          const checkIcon = copyBtn.querySelector('.copy-icon-check');
          const copyText = copyBtn.querySelector('.ide-copy-text');
          const curLang = localStorage.getItem('portfolio_lang') || 'en';
          const curDict = (window.TRANSLATIONS && window.TRANSLATIONS[curLang]) || (window.TRANSLATIONS && window.TRANSLATIONS.en);
          if (idleIcon) idleIcon.style.display = 'none';
          if (checkIcon) checkIcon.style.display = 'inline-block';
          if (copyText) copyText.textContent = curDict ? curDict.ide_copied : 'Copied!';
          setTimeout(() => {
            copyBtn.classList.remove('copied');
            if (idleIcon) idleIcon.style.display = '';
            if (checkIcon) checkIcon.style.display = 'none';
            const restoreLang = localStorage.getItem('portfolio_lang') || 'en';
            const restoreDict = (window.TRANSLATIONS && window.TRANSLATIONS[restoreLang]) || (window.TRANSLATIONS && window.TRANSLATIONS.en);
            if (copyText) copyText.textContent = restoreDict ? restoreDict.ide_copy : 'Copy';
          }, 2000);
        } catch (err) {
          console.warn('Clipboard copy failed:', err);
        }
      });
    }
  })();

  /* ============================================================
     PORTFOLIO CREATIVE PRELOADER (Dev HUD + 4 Seasons Canvas Engine)
     ============================================================ */
  function initPortfolioPreloader() {
    const preloader = document.getElementById('portfolio-preloader');
    if (!preloader) return;

    const bar = document.getElementById('preloader-bar');
    const percentEl = document.getElementById('preloader-percent');
    const terminalLog = document.getElementById('preloader-terminal-log');
    const metricStatus = document.getElementById('preloader-metric-status');
    const canvas = document.getElementById('preloader-particles-canvas');

    let isDismissed = false;
    let particleRafId = null;

    /* ---- Seasonal Particles Canvas Simulation ---- */
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext('2d');
      let cw = (canvas.width = window.innerWidth);
      let ch = (canvas.height = window.innerHeight);

      window.addEventListener('resize', () => {
        if (!isDismissed && canvas) {
          cw = canvas.width = window.innerWidth;
          ch = canvas.height = window.innerHeight;
        }
      });

      const particleColors = {
        spring: ['#f472b6', '#fbcfe8', '#fda4af', '#ffffff'],
        summer: ['#10b981', '#34d399', '#fef08a', '#ffffff'],
        autumn: ['#f97316', '#fb923c', '#fdba74', '#ef4444'],
        winter: ['#38bdf8', '#7dd3fc', '#bae6fd', '#ffffff']
      };

      const colors = particleColors[currentSeason] || particleColors.spring;
      const particles = [];
      const count = Math.min(38, Math.floor(cw / 28));

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * cw,
          y: Math.random() * ch,
          size: Math.random() * 3.5 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 0.8 + (currentSeason === 'autumn' ? 0.4 : 0),
          vy: Math.random() * 0.9 + 0.4,
          angle: Math.random() * Math.PI * 2,
          angularSpeed: (Math.random() - 0.5) * 0.04,
          opacity: Math.random() * 0.6 + 0.25
        });
      }

      function drawParticle(p) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (currentSeason === 'spring') {
          // Delicate sakura petal shape
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.5);
          ctx.bezierCurveTo(p.size, -p.size, p.size * 1.2, p.size, 0, p.size * 1.6);
          ctx.bezierCurveTo(-p.size * 1.2, p.size, -p.size, -p.size, 0, -p.size * 1.5);
          ctx.fill();
        } else if (currentSeason === 'winter') {
          // Hexagonal snowflake or crystal dot
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1;
          for (let k = 0; k < 3; k++) {
            ctx.beginPath();
            ctx.moveTo(0, -p.size);
            ctx.lineTo(0, p.size);
            ctx.stroke();
            ctx.rotate(Math.PI / 3);
          }
        } else if (currentSeason === 'autumn') {
          // Floating maple diamond leaf
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.4);
          ctx.lineTo(p.size * 1.1, 0);
          ctx.lineTo(0, p.size * 1.4);
          ctx.lineTo(-p.size * 1.1, 0);
          ctx.closePath();
          ctx.fill();
        } else {
          // Summer glowing firefly circle with soft aura
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.9, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      function renderParticles() {
        if (isDismissed) return;
        ctx.clearRect(0, 0, cw, ch);

        // Draw soft cyber constellation lines between nearby particles
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 90) {
              ctx.strokeStyle = particles[i].color;
              ctx.globalAlpha = (1 - dist / 90) * 0.12;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        particles.forEach(p => {
          p.x += p.vx + Math.sin(p.angle) * 0.4;
          p.y += p.vy;
          p.angle += p.angularSpeed;

          if (p.y > ch + 20) {
            p.y = -20;
            p.x = Math.random() * cw;
          }
          if (p.x < -20) p.x = cw + 20;
          if (p.x > cw + 20) p.x = -20;

          drawParticle(p);
        });

        particleRafId = requestAnimationFrame(renderParticles);
      }

      particleRafId = requestAnimationFrame(renderParticles);
    }

    /* ---- Progress Counter & Terminal Stream ---- */
    const duration = 1600; // 1.6s smooth cinematic experience
    const startTime = performance.now();
    let lastLoggedStage = -1;

    const activePreloaderLang = localStorage.getItem('portfolio_lang') || 'en';
    const preloaderDict = (window.TRANSLATIONS && window.TRANSLATIONS[activePreloaderLang]) || (window.TRANSLATIONS && window.TRANSLATIONS.en) || null;

    const logStages = [
      {
        maxPct: 22,
        text: preloaderDict && preloaderDict.preloader_s1
          ? preloaderDict.preloader_s1.replace('{SEASON}', currentSeason.toUpperCase())
          : `[01/05] Mounting Four Seasons dynamic core (${currentSeason.toUpperCase()})...`,
        status: 'BOOTING'
      },
      {
        maxPct: 48,
        text: preloaderDict && preloaderDict.preloader_s2
          ? preloaderDict.preloader_s2
          : `[02/05] Compiling WebGL shaders & Living Tree buffers...`,
        status: 'LOADING'
      },
      {
        maxPct: 72,
        text: preloaderDict && preloaderDict.preloader_s3
          ? preloaderDict.preloader_s3
          : `[03/05] Calibrating 3D mechanical keyboard audio & physics...`,
        status: 'CALIBRATING'
      },
      {
        maxPct: 92,
        text: preloaderDict && preloaderDict.preloader_s4
          ? preloaderDict.preloader_s4
          : `[04/05] Optimizing FullStack & Software Engineer runtime...`,
        status: 'OPTIMIZING'
      },
      {
        maxPct: 100,
        text: preloaderDict && preloaderDict.preloader_s5
          ? preloaderDict.preloader_s5
          : `[05/05] Workspace ready. Launching portfolio...`,
        status: 'READY'
      }
    ];

    function updateTerminalLog(pct) {
      for (let i = 0; i < logStages.length; i++) {
        if (pct <= logStages[i].maxPct) {
          if (lastLoggedStage !== i) {
            lastLoggedStage = i;
            if (terminalLog) terminalLog.textContent = logStages[i].text;
            if (metricStatus) metricStatus.textContent = logStages[i].status;
          }
          break;
        }
      }
    }

    function dismissPreloader() {
      if (isDismissed) return;
      isDismissed = true;

      if (bar) bar.style.width = '100%';
      if (percentEl) percentEl.textContent = '100%';
      if (terminalLog) {
        terminalLog.textContent = preloaderDict && preloaderDict.preloader_complete
          ? preloaderDict.preloader_complete
          : `[COMPLETE] All systems optimal. Welcome to my portfolio!`;
        terminalLog.style.color = '#10b981';
      }
      if (metricStatus) {
        metricStatus.textContent = 'ONLINE [OK]';
        metricStatus.style.color = '#10b981';
      }

      setTimeout(() => {
        preloader.classList.add('preloader--hidden');
        document.body.classList.remove('preloader-active');
        if (particleRafId) cancelAnimationFrame(particleRafId);

        // Recalculate section scroll tracker now that full document height is restored
        syncActiveSection();

        setTimeout(() => {
          preloader.style.display = 'none';
        }, 900);
      }, 240);
    }

    function step(now) {
      if (isDismissed) return;
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Fast beginning up to 75%, gentle glide to 95%, then instant snap
      let pct = 0;
      if (t < 0.6) {
        pct = (t / 0.6) * 78;
      } else {
        pct = 78 + Math.pow((t - 0.6) / 0.4, 1.25) * 22;
      }
      pct = Math.min(Math.round(pct), 100);

      if (bar) bar.style.width = pct + '%';
      if (percentEl) percentEl.textContent = pct + '%';
      updateTerminalLog(pct);

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        dismissPreloader();
      }
    }

    requestAnimationFrame(step);

    // Fallback safety timeout (forces complete after 2.8s in case of slow devices)
    setTimeout(() => {
      dismissPreloader();
    }, 2800);
  }

  initPortfolioPreloader();

  console.log('%c🌸 Txema Albero & Four Seasons Engine · Loaded Successfully!', 'color:#f472b6; font-size:14px; font-weight:700;');
});
