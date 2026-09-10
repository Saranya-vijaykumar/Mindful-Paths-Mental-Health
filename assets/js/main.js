/**
 * Mindful Paths — Core JavaScript Engine
 * Author: Mindful Paths Psychological Sanctuary
 * Version: 5.0.0 (Unified Universal System)
 * Pure Vanilla JS: Theme, RTL, Booking Modal, Contact Inquiry, Pricing Toggle, Search/Filter, Toasts
 */

(function () {
  'use strict';

  // Prevent duplicate execution if script is loaded multiple times
  if (window.__MINDFUL_PATHS_INITIALIZED__) {
    return;
  }
  window.__MINDFUL_PATHS_INITIALIZED__ = true;

  // ==========================================
  // 1. Theme Manager (Dark / Light Mode)
  // ==========================================
  function initTheme() {
    const savedTheme = localStorage.getItem('mindfulpaths_theme') || localStorage.getItem('calmind_theme') || localStorage.getItem('serenemind_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      updateThemeIcons(true);
    } else {
      document.documentElement.classList.remove('dark');
      updateThemeIcons(false);
    }
  }

  let isTogglingTheme = false;
  function toggleTheme() {
    if (isTogglingTheme) return;
    isTogglingTheme = true;
    setTimeout(() => { isTogglingTheme = false; }, 200);

    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('mindfulpaths_theme', isDark ? 'dark' : 'light');
    localStorage.setItem('calmind_theme', isDark ? 'dark' : 'light');
    localStorage.setItem('serenemind_theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
    if (window.showToast) {
      window.showToast(`Switched to ${isDark ? 'Dark' : 'Light'} Mode`, 'info', 2000);
    }
  }

  window.toggleTheme = toggleTheme;
  window.initTheme = initTheme;

  function updateThemeIcons(isDark) {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      const sunIcon = btn.querySelector('.sun-icon, .fa-sun');
      const moonIcon = btn.querySelector('.moon-icon, .fa-moon');
      const label = btn.querySelector('.theme-label');
      if (sunIcon && moonIcon) {
        if (isDark) {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
          if (label) label.textContent = 'Light';
        } else {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
          if (label) label.textContent = 'Dark';
        }
      }
    });
  }

  document.addEventListener('click', (e) => {
    const themeBtn = e.target.closest('.theme-toggle-btn');
    if (themeBtn) {
      e.preventDefault();
      e.stopPropagation();
      toggleTheme();
    }
  });

  // ==========================================
  // 2. RTL Engine (Right-To-Left)
  // ==========================================
  function initRTL() {
    const savedRTL = localStorage.getItem('mindfulpaths_direction') || localStorage.getItem('calmind_direction') || localStorage.getItem('serenemind_direction');
    if (savedRTL === 'rtl') {
      document.documentElement.setAttribute('dir', 'rtl');
      updateRTLBtns(true);
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      updateRTLBtns(false);
    }
  }

  function toggleRTL() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', newDir);
    localStorage.setItem('mindfulpaths_direction', newDir);
    localStorage.setItem('calmind_direction', newDir);
    localStorage.setItem('serenemind_direction', newDir);
    updateRTLBtns(newDir === 'rtl');
    if (window.showToast) {
      window.showToast(`Layout switched to ${newDir.toUpperCase()}`, 'info', 2500);
    }
  }

  function updateRTLBtns(isRTL) {
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      const textSpan = btn.querySelector('.rtl-text');
      if (textSpan) textSpan.textContent = isRTL ? 'LTR' : 'RTL';
    });
  }

  document.addEventListener('click', (e) => {
    const rtlBtn = e.target.closest('.rtl-toggle-btn');
    if (rtlBtn) {
      e.preventDefault();
      toggleRTL();
    }
  });

  // Run Theme and RTL immediately
  initTheme();
  initRTL();

  // ==========================================
  // 3. Mobile Navigation Drawer (Universal Delegated Engine)
  // ==========================================
  function getMobileDrawerElements() {
    return {
      drawer: document.getElementById('mobile-menu-drawer'),
      backdrop: document.getElementById('mobile-menu-backdrop')
    };
  }

  function openMobileMenu() {
    const { drawer, backdrop } = getMobileDrawerElements();
    if (drawer && backdrop) {
      drawer.classList.remove('translate-x-full', '-translate-x-full');
      drawer.classList.add('translate-x-0');
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    const { drawer, backdrop } = getMobileDrawerElements();
    if (drawer && backdrop) {
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      if (isRTL) {
        drawer.classList.add('-translate-x-full');
      } else {
        drawer.classList.add('translate-x-full');
      }
      drawer.classList.remove('translate-x-0');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      backdrop.classList.remove('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = '';
    }
  }

  window.openMobileMenu = openMobileMenu;
  window.closeMobileMenu = closeMobileMenu;

  // Global Delegated Click & Touch Handler for 100% Mobile & Desktop Reliability
  document.addEventListener('click', (e) => {
    // 1. Mobile Menu Open Toggle (Handles icon clicks, buttons, attributes)
    const toggleBtn = e.target.closest('#mobile-menu-toggle, .mobile-menu-toggle, [data-mobile-menu-toggle]');
    if (toggleBtn) {
      e.preventDefault();
      openMobileMenu();
      return;
    }

    // 2. Mobile Menu Close Button
    const closeBtn = e.target.closest('#mobile-menu-close, .mobile-menu-close, [data-mobile-menu-close]');
    if (closeBtn) {
      e.preventDefault();
      closeMobileMenu();
      return;
    }

    // 3. Mobile Backdrop Tap
    if (e.target && e.target.id === 'mobile-menu-backdrop') {
      e.preventDefault();
      closeMobileMenu();
      return;
    }

    // 4. Link clicked inside Mobile Drawer (Navigate and dismiss drawer)
    const drawerLink = e.target.closest('#mobile-menu-drawer a');
    if (drawerLink) {
      closeMobileMenu();
    }
  });

  // ==========================================
  // 4. Universal Appointment Booking Modal
  // ==========================================
  const appointmentModal = document.getElementById('appointment-modal');
  const appointmentForm = document.getElementById('appointment-booking-form');

  function openAppointmentModal(service = '', therapist = '') {
    const modal = document.getElementById('appointment-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // Auto-prefill service/therapist if fields exist
    if (service && appointmentForm) {
      const serviceSelect = appointmentForm.querySelector('select[name="service"]');
      if (serviceSelect) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].text.toLowerCase().includes(service.toLowerCase()) || serviceSelect.options[i].value.toLowerCase().includes(service.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }
    }
    if (therapist && appointmentForm) {
      const therapistSelect = appointmentForm.querySelector('select[name="therapist"]');
      if (therapistSelect) {
        for (let i = 0; i < therapistSelect.options.length; i++) {
          if (therapistSelect.options[i].text.toLowerCase().includes(therapist.toLowerCase()) || therapistSelect.options[i].value.toLowerCase().includes(therapist.toLowerCase())) {
            therapistSelect.selectedIndex = i;
            break;
          }
        }
      }
    }
  }

  function closeAppointmentModal() {
    const modal = document.getElementById('appointment-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const bookTrigger = e.target.closest('.open-appointment-modal, .open-appointment-btn, [data-book-session]');
    if (bookTrigger) {
      e.preventDefault();
      const service = bookTrigger.getAttribute('data-service') || '';
      const therapist = bookTrigger.getAttribute('data-therapist') || '';
      openAppointmentModal(service, therapist);
    }

    const closeBtn = e.target.closest('#appointment-modal-close, .close-appointment-modal');
    if (closeBtn) {
      e.preventDefault();
      closeAppointmentModal();
    }

    if (e.target === appointmentModal) {
      closeAppointmentModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAppointmentModal();
      closeMobileMenu();
    }
  });

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = appointmentForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i> Confirming with Care Coordinator...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Request Received';
        }
        closeAppointmentModal();
        appointmentForm.reset();
        window.showToast('Appointment request sent! Our clinical intake coordinator will call you within 2 business hours.', 'success', 6000);
      }, 1000);
    });
  }

  // ==========================================
  // 5. Contact & General Inquiry Form Handler
  // ==========================================
  const contactForm = document.getElementById('contact-inquiry-form') || document.querySelector('section form');
  if (contactForm && !contactForm.id.includes('appointment')) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i> Sending Confidential Inquiry...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Inquiry';
        }
        contactForm.reset();
        window.showToast('Thank you for reaching out. A client intake specialist will respond to your confidential inquiry shortly.', 'success', 6000);
      }, 900);
    });
  }

  // ==========================================
  // 6. Interactive Mental Wellness Screener (PHQ-9 / GAD-7)
  // ==========================================
  const screenerForm = document.getElementById('wellness-screener-form');
  const screenerResult = document.getElementById('screener-result');

  if (screenerForm) {
    screenerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const radios = screenerForm.querySelectorAll('input[type="radio"]:checked');
      if (radios.length < 3) {
        window.showToast('Please answer all questions to generate your clinical insight.', 'error');
        return;
      }

      let score = 0;
      radios.forEach(r => { score += parseInt(r.value, 10); });

      let title = '';
      let text = '';
      let badgeColor = '';

      if (score <= 2) {
        title = 'Minimal Emotional Distress (Score: ' + score + '/9)';
        text = 'Your responses indicate mild everyday stressors. Mindful breathing, proper sleep hygiene, and preventive self-help routines can help you maintain this healthy baseline.';
        badgeColor = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300';
      } else if (score <= 5) {
        title = 'Mild to Moderate Stress Burden (Score: ' + score + '/9)';
        text = 'You are experiencing notable stress or situational anxiety. A few targeted counseling sessions focusing on Cognitive Restructuring or EMDR grounding could provide immediate relief.';
        badgeColor = 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300';
      } else {
        title = 'Elevated Anxiety or Depressive Fatigue (Score: ' + score + '/9)';
        text = 'Your stress level is significantly impacting your daily wellbeing. We strongly recommend speaking with one of our licensed clinical psychologists for a personalized, judgment-free intake session.';
        badgeColor = 'bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300';
      }

      if (screenerResult) {
        screenerResult.innerHTML = `
          <div class="p-6 rounded-2xl border border-[#EBF1F4] dark:border-white/10 bg-white dark:bg-[#17232b] shadow-xl space-y-4 animate-fade-in">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full text-xs font-bold ${badgeColor}">
                <i class="fas fa-shield-heart mr-1.5"></i> Screener Result
              </span>
              <button type="button" class="text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200" onclick="document.getElementById('screener-result').innerHTML = '';">
                <i class="fas fa-redo mr-1"></i> Retake
              </button>
            </div>
            <h4 class="text-lg font-heading font-bold text-[#294657] dark:text-white">${title}</h4>
            <p class="text-sm text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">${text}</p>
            <div class="pt-2 flex flex-col sm:flex-row gap-3">
              <button type="button" class="open-appointment-modal px-5 py-2.5 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md">
                <i class="fas fa-calendar-check mr-2"></i> Book Free 15-Min Consultation
              </button>
              <a href="resources.html" class="px-5 py-2.5 rounded-full bg-[#F8F6F1] dark:bg-[#1e2d37] text-[#294657] dark:text-[#F8F6F1] font-bold text-xs text-center border border-[#EBF1F4] dark:border-white/10">
                Explore Free CBT Self-Help Guides
              </a>
            </div>
          </div>
        `;
        screenerResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // ==========================================
  // 7. Pricing Toggle (Monthly vs Annual 20% Off)
  // ==========================================
  const pricingToggle = document.getElementById('pricing-billing-toggle');
  if (pricingToggle) {
    pricingToggle.addEventListener('change', () => {
      const isAnnual = pricingToggle.checked;
      const priceAmounts = document.querySelectorAll('[data-monthly-price]');
      const billingLabels = document.querySelectorAll('.billing-cycle-label');

      priceAmounts.forEach(el => {
        const monthly = parseFloat(el.getAttribute('data-monthly-price'));
        const yearly = parseFloat(el.getAttribute('data-yearly-price')) || Math.round(monthly * 0.8);
        el.textContent = isAnnual ? yearly : monthly;
      });

      billingLabels.forEach(lbl => {
        lbl.textContent = isAnnual ? '/session (billed annually)' : '/session';
      });

      window.showToast(isAnnual ? 'Applied 20% Annual Care Plan Discount!' : 'Switched to Standard Pay-Per-Session Plan', 'info');
    });
  }

  // ==========================================
  // 8. Dynamic Filter & Search Engine
  // ==========================================
  function initFilterEngine(filterBtnAttr, cardAttr, searchInputId) {
    const filterBtns = document.querySelectorAll(`[${filterBtnAttr}]`);
    const cards = document.querySelectorAll(`[${cardAttr}]`);
    const searchInput = document.getElementById(searchInputId);

    if (!filterBtns.length && !cards.length && !searchInput) return;

    let currentFilter = 'all';
    let currentSearch = '';

    function applyFilter() {
      cards.forEach(card => {
        const categories = (card.getAttribute(cardAttr) || '').toLowerCase();
        const text = (card.textContent || '').toLowerCase();

        const matchesFilter = currentFilter === 'all' || categories.includes(currentFilter.toLowerCase());
        const matchesSearch = !currentSearch || text.includes(currentSearch.toLowerCase());

        if (matchesFilter && matchesSearch) {
          card.classList.remove('hidden');
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.classList.add('hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
        }
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        currentFilter = btn.getAttribute(filterBtnAttr) || 'all';

        filterBtns.forEach(b => {
          b.classList.remove('bg-[#D7B7A5]', 'text-white', 'shadow-md');
          b.classList.add('bg-white', 'dark:bg-[#17232b]', 'text-[#27343B]', 'dark:text-[#EBF1F4]');
        });
        btn.classList.remove('bg-white', 'dark:bg-[#17232b]', 'text-[#27343B]', 'dark:text-[#EBF1F4]');
        btn.classList.add('bg-[#D7B7A5]', 'text-white', 'shadow-md');

        applyFilter();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim();
        applyFilter();
      });
    }
  }

  initFilterEngine('data-service-filter', 'data-service-category', 'services-search-input');
  initFilterEngine('data-therapist-filter', 'data-therapist-specialty', 'therapists-search-input');
  initFilterEngine('data-blog-filter', 'data-blog-category', 'blog-search-input');

  // ==========================================
  // 9. FAQ Accordions (Universal Delegated Engine)
  // ==========================================
  document.addEventListener('click', (e) => {
    const header = e.target.closest('.accordion-header, [data-accordion-toggle]');
    if (header) {
      e.preventDefault();
      const content = header.nextElementSibling || document.querySelector(header.getAttribute('data-target'));
      const icon = header.querySelector('.accordion-icon, .fa-chevron-down');
      const isExpanded = content && !content.classList.contains('hidden');

      const parent = header.closest('.accordion-group') || (header.parentElement && header.parentElement.parentElement);
      if (parent) {
        parent.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
        parent.querySelectorAll('.accordion-icon, .fa-chevron-down').forEach(i => i.classList.remove('rotate-180'));
      }

      if (!isExpanded && content) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    }
  });

  // ==========================================
  // 10. Scroll Experience Suite: Progress Bar, Elevation & Reveal Animations
  // ==========================================
  const mainHeader = document.getElementById('main-header');
  const backToTopBtn = document.getElementById('back-to-top');

  // A. Dynamic Scroll Progress Bar
  let scrollProgressBar = document.getElementById('scroll-progress-bar');
  if (!scrollProgressBar) {
    scrollProgressBar = document.createElement('div');
    scrollProgressBar.id = 'scroll-progress-bar';
    document.body.appendChild(scrollProgressBar);
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Update scroll progress width
    if (docHeight > 0 && scrollProgressBar) {
      const pct = Math.min(Math.max((scrollY / docHeight) * 100, 0), 100);
      scrollProgressBar.style.width = `${pct}%`;
    }

    if (mainHeader) {
      if (scrollY > 20) {
        mainHeader.classList.add('shadow-md');
      } else {
        mainHeader.classList.remove('shadow-md');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // B. Scroll-Triggered Reveal Animation Engine (IntersectionObserver)
  function initScrollReveals() {
    const autoSelectors = [
      '.card-wellness',
      '.clinician-card',
      'section > div > .grid > div',
      'section > div > .grid > article',
      'section h1',
      'section h2',
      '.mask-arch-tall',
      '.mask-arch',
      '.mask-asymmetric-leaf',
      '.mask-scallop',
      '.reveal-on-scroll'
    ];

    const elementsToReveal = new Set();

    autoSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        // Skip elements inside header, mobile drawer, modals, footer, or forms
        if (el.closest('#main-header') || el.closest('#mobile-drawer') || el.closest('#appointment-modal') || el.closest('footer') || el.closest('form')) return;
        elementsToReveal.add(el);
      });
    });

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });
    }

    elementsToReveal.forEach((el) => {
      if (!el.classList.contains('reveal-on-scroll') && 
          !el.classList.contains('reveal-scale') && 
          !el.classList.contains('reveal-slide-left') && 
          !el.classList.contains('reveal-slide-right')) {
        el.classList.add('reveal-on-scroll');
      }

      // Add cascading stagger delay based on grid sibling position
      if (el.parentElement && el.parentElement.children.length > 1) {
        const siblingIndex = Array.from(el.parentElement.children).indexOf(el);
        if (siblingIndex > 0 && siblingIndex <= 6) {
          el.style.transitionDelay = `${siblingIndex * 110}ms`;
        }
      }

      if (observer) {
        observer.observe(el);
      } else {
        el.classList.add('is-revealed');
      }
    });
  }

  // ==========================================
  // 11. Animated Stats Counters
  // ==========================================
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter-target]');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter-target'), 10);
          const prefix = el.getAttribute('data-counter-prefix') || '';
          const suffix = el.getAttribute('data-counter-suffix') || '';
          const duration = 1600;
          const startTime = performance.now();

          function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOut * target);

            el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
            }
          }

          requestAnimationFrame(updateCount);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(c => counterObserver.observe(c));
  }
  // ==========================================
  // 12. Clean Static Background (Zero Animations)
  // ==========================================
  function initAmbientBackground() {
    // Remove any previously created canvas wrapper or moving elements
    const existing = document.getElementById('ambient-scroll-canvas-wrap');
    if (existing) {
      existing.remove();
    }
  }

  // ==========================================
  // 13. Toast Notification Engine
  // ==========================================
  window.showToast = function (message, type = 'success', duration = 5000) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed bottom-5 right-5 rtl:right-auto rtl:left-5 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const isSuccess = type === 'success';
    const isError = type === 'error';
    const bgClass = isSuccess 
      ? 'bg-emerald-50 text-emerald-900 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-100 dark:border-emerald-800'
      : isError
      ? 'bg-rose-50 text-rose-900 border-rose-300 dark:bg-rose-950 dark:text-rose-100 dark:border-rose-800'
      : 'bg-[#F8F6F1] text-[#294657] border-[#EBF1F4] dark:bg-[#17232b] dark:text-[#F8F6F1] dark:border-white/10';

    const icon = isSuccess 
      ? '<i class="fas fa-check-circle text-emerald-500 text-base shrink-0"></i>'
      : isError
      ? '<i class="fas fa-exclamation-circle text-rose-500 text-base shrink-0"></i>'
      : '<i class="fas fa-heart text-[#D7B7A5] text-base shrink-0"></i>';

    toast.className = `flex items-center gap-3 p-4 rounded-2xl shadow-2xl border text-xs font-bold pointer-events-auto transition-all transform duration-300 opacity-0 translate-y-3 ${bgClass}`;
    toast.innerHTML = `
      ${icon}
      <span class="flex-1 leading-snug">${message}</span>
      <button class="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 p-1" onclick="this.parentElement.remove()" aria-label="Dismiss toast">
        <i class="fas fa-times"></i>
      </button>
    `;

    container.appendChild(toast);
    requestAnimationFrame(() => {
      toast.classList.remove('opacity-0', 'translate-y-3');
      toast.classList.add('opacity-100', 'translate-y-0');
    });

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-3');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  };

  // ==========================================
  // 14. Universal Footer Functionality Engine 🩺✨
  // ==========================================
  function initFooterInteractions() {
    // A. Footer Newsletter Form Submission
    const newsletterForms = document.querySelectorAll('#footer-newsletter-form, .footer-newsletter-form');
    newsletterForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (!input || !input.value.trim()) return;

        const email = input.value.trim();
        // Save to localStorage for demo persistence
        try {
          const subscribers = JSON.parse(localStorage.getItem('mp_newsletter_subscribers') || '[]');
          if (!subscribers.includes(email)) {
            subscribers.push(email);
            localStorage.setItem('mp_newsletter_subscribers', JSON.stringify(subscribers));
          }
        } catch (err) {}

        input.value = '';
        window.showToast('Thank you for subscribing to Quiet Moments! Your weekly clinical reflection is on its way.', 'success');
      });
    });

    // B. Crisis Support Quick Notification
    document.querySelectorAll('.open-crisis-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.showToast('Immediate Crisis Support: Dial or text 988 anytime for 24/7 confidential help, or text HOME to 741741.', 'error', 8000);
      });
    });
  }

  // Run on DOM Ready
  
  // ==========================================
  // 15. Award-Winning Interactive Experience Suite 🏆✨
  // ==========================================
  function initAwardWinningSuite() {
    // A. Inject Global Analog Film Grain Overlay
    if (!document.querySelector('.grain-overlay')) {
      const grain = document.createElement('div');
      grain.className = 'grain-overlay';
      grain.setAttribute('aria-hidden', 'true');
      document.body.prepend(grain);
    }

    // B. Inject & Drive Reading Progress Bar
    let progressBar = document.querySelector('.reading-progress-bar');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'reading-progress-bar';
      progressBar.setAttribute('aria-hidden', 'true');
      document.body.prepend(progressBar);
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // C. 3D Card Tilt Physics with Specular Sheen
    const tiltSelectors = '.card-wellness, .clinician-card, .price-card, .tilt-interactive, .service-card, .editorial-card';
    const tiltCards = document.querySelectorAll(tiltSelectors);

    tiltCards.forEach(card => {
      card.classList.add('tilt-card-active');
      
      let sheen = card.querySelector('.tilt-sheen');
      if (!sheen) {
        sheen = document.createElement('div');
        sheen.className = 'tilt-sheen';
        card.appendChild(sheen);
      }

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5.5; // subtle tilt angle
        const rotateY = ((x - centerX) / centerX) * 5.5;

        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
        card.style.setProperty('--mouse-x', ((x / rect.width) * 100) + '%');
        card.style.setProperty('--mouse-y', ((y / rect.height) * 100) + '%');
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }


  
  // ==========================================
  // Mindful Somatic "Breathe In... Breathe Out" Load Experience
  // ==========================================
  function initMindfulBreathingLoader() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Check recent breath timestamp (10s throttle for fast navigations, but fresh on reloads)
    const lastBreathed = sessionStorage.getItem('mindful_last_breathed');
    const now = Date.now();
    if (lastBreathed && (now - parseInt(lastBreathed, 10)) < 12000) {
      return; // Skipped for rapid same-session page clicks
    }
    sessionStorage.setItem('mindful_last_breathed', now.toString());

    // Create breathing loader overlay
    const loader = document.createElement('div');
    loader.id = 'mindful-breathing-loader';
    loader.className = 'fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#F8F6F1]/95 dark:bg-[#11191f]/95 text-[#294657] dark:text-[#F8F6F1] transition-opacity duration-700 select-none';
    
    loader.innerHTML = `
      <div class="relative flex flex-col items-center justify-center p-6 text-center max-w-sm mx-auto">
        <!-- Brand Monogram -->
        <div class="mb-6 flex items-center gap-2.5">
          <span class="w-8 h-8 rounded-full bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center text-sm font-heading font-bold shadow-sm">M</span>
          <span class="font-heading text-lg font-bold tracking-tight text-[#294657] dark:text-[#F8F6F1]">Mindful Paths</span>
        </div>

        <!-- Somatic Breath Ring Visualization -->
        <div class="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center my-3">
          <!-- Outer Pulsing Glow -->
          <div id="breath-glow-ring" class="breath-glow-pulse absolute inset-0 rounded-full bg-[#8FAFC0]/20 dark:bg-[#8FAFC0]/15 blur-xl pointer-events-none"></div>
          
          <!-- Outer Reference Boundary Ring -->
          <div class="absolute inset-1 rounded-full border-2 border-dashed border-[#8FAFC0]/30 dark:border-white/15 animate-spin" style="animation-duration: 40s;"></div>
          
          <!-- Animated Expanding/Contracting Breathing Circle -->
          <div id="breath-circle" class="w-20 h-20 rounded-full bg-gradient-to-tr from-[#8FAFC0] via-[#A2BCCE] to-[#D7B7A5] shadow-2xl flex items-center justify-center text-white text-xl">
            <i class="fas fa-wind opacity-90 transition-transform duration-500" id="breath-icon"></i>
          </div>
        </div>

        <!-- Dynamic Breathing Status -->
        <div class="mt-5 space-y-1.5 min-h-[64px]">
          <div id="breath-phase-text" class="font-heading text-2xl sm:text-3xl font-bold tracking-wide text-[#294657] dark:text-[#F8F6F1]">
            Breathe in...
          </div>
          <p id="breath-sub-text" class="text-xs sm:text-sm text-[#27343B]/70 dark:text-[#7d8d96]">
            Inhale deeply and gently open space.
          </p>
        </div>

        <!-- Skip / Enter Sanctuary Button -->
        <button type="button" id="skip-breath-btn" class="mt-7 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 hover:border-[#8FAFC0] text-xs font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer">
          <span>Enter Sanctuary</span>
          <i class="fas fa-arrow-right text-[10px]"></i>
        </button>
      </div>
    `;

    document.body.appendChild(loader);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const circle = document.getElementById('breath-circle');
    const phaseText = document.getElementById('breath-phase-text');
    const subText = document.getElementById('breath-sub-text');
    const skipBtn = document.getElementById('skip-breath-btn');
    let cycleTimeout = null;
    let isDismissed = false;

    function dismissLoader() {
      if (isDismissed) return;
      isDismissed = true;
      if (cycleTimeout) clearTimeout(cycleTimeout);
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      setTimeout(() => {
        document.body.style.overflow = prevOverflow;
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 700);
    }

    skipBtn.addEventListener('click', dismissLoader);

    // Breathing rhythm lifecycle:
    // Phase 1: Inhale (Expand circle over 3.2s)
    // Phase 2: Hold gently (1.2s)
    // Phase 3: Exhale (Contract circle over 3.0s)
    // Phase 4: Gentle fade into page
    function runBreathAnimation() {
      if (!circle || !phaseText || !subText) return;

      // Inhale
      circle.style.transition = 'transform 3.2s cubic-bezier(0.4, 0, 0.2, 1)';
      circle.style.transform = 'scale(1.85)';
      phaseText.textContent = 'Breathe in...';
      subText.textContent = 'Inhale deeply and gently open space.';

      cycleTimeout = setTimeout(() => {
        if (isDismissed) return;
        // Hold
        phaseText.textContent = 'Hold gently...';
        subText.textContent = 'Notice the calm stillness within.';

        cycleTimeout = setTimeout(() => {
          if (isDismissed) return;
          // Exhale
          circle.style.transition = 'transform 3.0s cubic-bezier(0.4, 0, 0.2, 1)';
          circle.style.transform = 'scale(1.0)';
          phaseText.textContent = 'Breathe out...';
          subText.textContent = 'Release tension and arrive.';

          cycleTimeout = setTimeout(() => {
            if (isDismissed) return;
            dismissLoader();
          }, 3100);
        }, 1200);
      }, 3200);
    }

    setTimeout(runBreathAnimation, 120);
  }

  window.triggerBreatheModal = function() {
    sessionStorage.removeItem('mindful_last_breathed');
    initMindfulBreathingLoader();
  };


function initApp() {
    initMindfulBreathingLoader();
    initAwardWinningSuite();
    initCounters();
    initScrollReveals();
    initAmbientBackground();
    initFooterInteractions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
