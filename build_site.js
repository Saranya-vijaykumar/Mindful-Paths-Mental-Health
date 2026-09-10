const fs = require('fs');
const path = require('path');

console.log('Generating SereneMind Mental Health Counseling Center template pages...');

const BRAND_NAME = 'SereneMind';
const BRAND_SUB = 'Mental Health & Psychological Wellness Center';
const PHONE = '+1 (800) 273-8255';
const CRISIS_PHONE = '988';
const EMAIL = 'care@serenemind-clinic.com';
const ADDRESS = '450 Wellness Pavilion Blvd, Suite 300, New York, NY 10016';

function getHead(title, desc) {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${BRAND_NAME} — Mental Health & Counseling Center</title>
  <meta name="description" content="${desc}">
  <meta property="og:title" content="${title} | ${BRAND_NAME}">
  <meta property="og:description" content="${desc}">
  <meta property="og:type" content="website">

  <!-- Early Theme & Direction Persistence Handler -->
  <script>
    (function() {
      var t = localStorage.getItem('serenemind_theme') || localStorage.getItem('aquapro_theme');
      if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      var d = localStorage.getItem('serenemind_direction') || localStorage.getItem('aquapro_direction');
      if (d === 'rtl') {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }
    })();
  </script>

  <!-- Tailwind CSS CDN + Config -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#f0fdfa',
              100: '#ccfbf1',
              200: '#99f6e4',
              300: '#5eead4',
              400: '#2dd4bf',
              500: '#14b8a6',
              600: '#0d9488',
              700: '#0f766e',
              800: '#115e59',
              900: '#134e4a',
            },
            accent: {
              400: '#818cf8',
              500: '#6366f1',
              600: '#4f46e5',
            },
            warm: {
              50: '#fffbeb',
              100: '#fef3c7',
              500: '#f59e0b',
              600: '#d97706'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            heading: ['"Outfit"', 'sans-serif'],
            rtl: ['"Cairo"', '"Plus Jakarta Sans"', 'sans-serif']
          }
        }
      }
    }
  </script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 min-h-screen flex flex-col justify-between">
`;
}

function getHeader(activePage = '') {
  const isHome = activePage === 'home' || activePage === 'home-agency';
  const isAbout = activePage === 'about';
  const isServices = activePage === 'services';
  const isTherapists = activePage === 'therapists';
  const isResources = activePage === 'resources' || activePage === 'schedule';
  const isPricing = activePage === 'pricing';
  const isBlog = activePage === 'blog';
  const isContact = activePage === 'contact';

  return `
  <!-- Top Announcement / Crisis Helpline Bar -->
  <div class="bg-gradient-to-r from-teal-800 via-teal-700 to-indigo-900 text-white text-xs font-semibold py-2.5 px-4 shadow-sm">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> 24/7 Confidential
        </span>
        <span class="text-teal-50">In immediate emotional crisis? Dial <a href="tel:988" class="font-bold underline text-amber-300 hover:text-amber-200">988 Lifeline</a> or text <span class="font-bold text-amber-300">HOME to 741741</span></span>
      </div>
      <div class="flex items-center space-x-6 rtl:space-x-reverse text-teal-100">
        <a href="tel:18002738255" class="hover:text-white transition-colors flex items-center gap-1.5">
          <i class="fas fa-phone-alt text-[11px] text-teal-300"></i> ${PHONE}
        </a>
        <span class="hidden md:inline-block text-teal-400/60">|</span>
        <a href="batch-timings.html" class="hover:text-amber-300 transition-colors flex items-center gap-1.5">
          <i class="far fa-clock text-teal-300"></i> Group Schedules
        </a>
      </div>
    </div>
  </div>

  <!-- Header / Navigation -->
  <header id="main-header" class="sticky top-0 z-50 glass-nav border-b border-slate-200/80 dark:border-slate-800/80 py-3.5 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      
      <!-- Brand Logo -->
      <a href="index.html" class="flex items-center gap-3 group" title="${BRAND_NAME} Home">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform duration-300">
          <i class="fas fa-spa text-lg"></i>
        </div>
        <div class="flex flex-col">
          <span class="font-heading text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
            ${BRAND_NAME} <span class="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest bg-teal-50 dark:bg-teal-950/80 px-2 py-0.5 rounded-md border border-teal-200 dark:border-teal-800">Care</span>
          </span>
          <span class="text-[10px] font-medium text-slate-500 dark:text-slate-400 hidden sm:block">Counseling & Psychological Wellness</span>
        </div>
      </a>

      <!-- Desktop Navigation Menu -->
      <nav class="hidden lg:flex items-center space-x-7 rtl:space-x-reverse text-sm font-semibold text-slate-700 dark:text-slate-200">
        <!-- Home Dropdown -->
        <div class="relative group">
          <a href="index.html" class="flex items-center gap-1 py-2 hover:text-teal-600 dark:hover:text-teal-400 ${isHome ? 'text-teal-600 dark:text-teal-400 font-bold' : ''}">
            Home <i class="fas fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform duration-200"></i>
          </a>
          <div class="absolute top-full left-0 rtl:left-auto rtl:right-0 mt-1 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <a href="index.html" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <i class="fas fa-clinic-medical text-teal-600 w-4"></i> Home 1 – General Clinic
            </a>
            <a href="home-agency.html" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <i class="fas fa-brain text-indigo-600 w-4"></i> Home 2 – Specialized Care
            </a>
          </div>
        </div>

        <a href="about.html" class="hover:text-teal-600 dark:hover:text-teal-400 transition-colors ${isAbout ? 'text-teal-600 dark:text-teal-400 font-bold' : ''}">About Us</a>
        <a href="programs.html" class="hover:text-teal-600 dark:hover:text-teal-400 transition-colors ${isServices ? 'text-teal-600 dark:text-teal-400 font-bold' : ''}">Services</a>
        <a href="coaches.html" class="hover:text-teal-600 dark:hover:text-teal-400 transition-colors ${isTherapists ? 'text-teal-600 dark:text-teal-400 font-bold' : ''}">Therapists</a>
        
        <!-- Resources Dropdown -->
        <div class="relative group">
          <a href="facilities.html" class="flex items-center gap-1 py-2 hover:text-teal-600 dark:hover:text-teal-400 ${isResources ? 'text-teal-600 dark:text-teal-400 font-bold' : ''}">
            Self-Help & Center <i class="fas fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform duration-200"></i>
          </a>
          <div class="absolute top-full left-0 rtl:left-auto rtl:right-0 mt-1 w-60 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <a href="facilities.html" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <i class="fas fa-heart text-teal-600 w-4"></i> Self-Help Suite & Sanctuary
            </a>
            <a href="batch-timings.html" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <i class="fas fa-calendar-alt text-indigo-600 w-4"></i> Group Sessions Timetable
            </a>
          </div>
        </div>

        <a href="pricing.html" class="hover:text-teal-600 dark:hover:text-teal-400 transition-colors ${isPricing ? 'text-teal-600 dark:text-teal-400 font-bold' : ''}">Pricing & Insurance</a>
        <a href="blog.html" class="hover:text-teal-600 dark:hover:text-teal-400 transition-colors ${isBlog ? 'text-teal-600 dark:text-teal-400 font-bold' : ''}">Wellness Blog</a>
        <a href="contact.html" class="hover:text-teal-600 dark:hover:text-teal-400 transition-colors ${isContact ? 'text-teal-600 dark:text-teal-400 font-bold' : ''}">Contact</a>
      </nav>

      <!-- Action Controls -->
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <!-- Theme Toggle -->
        <button type="button" class="theme-toggle-btn w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 flex items-center justify-center transition-colors border border-slate-200 dark:border-slate-700" title="Toggle Dark/Light Mode" aria-label="Toggle Theme">
          <i class="fas fa-moon moon-icon text-sm"></i>
          <i class="fas fa-sun sun-icon text-sm hidden"></i>
        </button>

        <!-- RTL Toggle -->
        <button type="button" class="rtl-toggle-btn px-2.5 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 text-xs font-bold transition-colors border border-slate-200 dark:border-slate-700 flex items-center gap-1" title="Toggle RTL/LTR" aria-label="Toggle Direction">
          <i class="fas fa-globe text-xs"></i> <span class="rtl-text">RTL</span>
        </button>

        <!-- Client Portal Link -->
        <a href="client-dashboard.html" class="hidden sm:flex items-center gap-1.5 px-3.5 h-9 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all" title="Client Portal">
          <i class="fas fa-user-circle text-teal-600 dark:text-teal-400"></i> Portal
        </a>

        <!-- Primary CTA: Book Session -->
        <button type="button" class="open-appointment-modal hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white text-xs font-bold shadow-md shadow-teal-600/20 hover:shadow-teal-600/30 transition-all duration-200 hover:-translate-y-0.5">
          <i class="fas fa-calendar-check"></i> Book Session
        </button>

        <!-- Mobile Menu Hamburger -->
        <button type="button" id="mobile-menu-toggle" class="lg:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-teal-600 flex items-center justify-center transition-colors border border-slate-200 dark:border-slate-700" aria-label="Open Navigation Menu">
          <i class="fas fa-bars text-base"></i>
        </button>
      </div>

    </div>
  </header>
`;
}

function getFooter() {
  return `
  <!-- Footer -->
  <footer class="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Newsletter & Trust Grid -->
      <div class="bg-gradient-to-r from-teal-900/60 to-indigo-950/80 rounded-3xl p-8 sm:p-10 border border-teal-500/20 mb-16 shadow-2xl backdrop-blur-sm flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="max-w-xl">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-400/30 mb-3">
            <i class="fas fa-spa"></i> SereneMind Mental Health Digest
          </span>
          <h3 class="text-2xl sm:text-3xl font-bold text-white font-heading mb-2">Subscribe to Guided Wellness & Self-Care</h3>
          <p class="text-slate-300 text-sm">Receive evidence-based mindfulness exercises, therapist insights, and coping toolkits directly in your inbox. No spam, ever.</p>
        </div>
        <form class="w-full lg:w-auto flex flex-col sm:flex-row gap-3 min-w-[320px]" onsubmit="event.preventDefault(); window.showToast('Thank you for subscribing to our wellness digest!', 'success'); this.reset();">
          <input type="email" required placeholder="Enter your email address" class="px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 flex-1">
          <button type="submit" class="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-lg shadow-teal-600/30 transition-all duration-200 whitespace-nowrap">
            Join Community
          </button>
        </form>
      </div>

      <!-- Main Footer Columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        
        <!-- Column 1: Brand Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md">
              <i class="fas fa-spa text-lg"></i>
            </div>
            <span class="font-heading text-2xl font-black tracking-tight text-white">${BRAND_NAME}</span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">
            A state-of-the-art mental health and psychological wellness center dedicated to compassionate, evidence-based therapy. Providing judgment-free support for individuals, couples, adolescents, and families.
          </p>
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="trust-badge text-[11px] bg-teal-950 text-teal-300 border-teal-800"><i class="fas fa-shield-alt"></i> HIPAA Compliant</span>
            <span class="trust-badge text-[11px] bg-indigo-950 text-indigo-300 border-indigo-800"><i class="fas fa-certificate"></i> APA & NBCC Certified</span>
            <span class="trust-badge text-[11px] bg-slate-800 text-slate-300 border-slate-700"><i class="fas fa-lock"></i> 100% Confidential</span>
          </div>
          <div class="flex items-center space-x-3 rtl:space-x-reverse text-slate-400">
            <a href="#" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook"><i class="fab fa-facebook-f text-sm"></i></a>
            <a href="#" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram"><i class="fab fa-instagram text-sm"></i></a>
            <a href="#" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-colors" aria-label="LinkedIn"><i class="fab fa-linkedin-in text-sm"></i></a>
            <a href="#" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-colors" aria-label="YouTube"><i class="fab fa-youtube text-sm"></i></a>
          </div>
        </div>

        <!-- Column 2: Clinical Services -->
        <div>
          <h4 class="text-white font-heading font-bold text-base mb-4 tracking-wide">Therapy Services</h4>
          <ul class="space-y-2.5 text-sm text-slate-400">
            <li><a href="programs.html" class="hover:text-teal-400 transition-colors">Individual Psychotherapy</a></li>
            <li><a href="programs.html" class="hover:text-teal-400 transition-colors">Couples & Marriage Counseling</a></li>
            <li><a href="programs.html" class="hover:text-teal-400 transition-colors">Teen & Adolescent Support</a></li>
            <li><a href="programs.html" class="hover:text-teal-400 transition-colors">Trauma & EMDR Therapy</a></li>
            <li><a href="programs.html" class="hover:text-teal-400 transition-colors">Anxiety & Depression Relief</a></li>
            <li><a href="programs.html" class="hover:text-teal-400 transition-colors">Telehealth Virtual Sessions</a></li>
          </ul>
        </div>

        <!-- Column 3: Resources & Self-Help -->
        <div>
          <h4 class="text-white font-heading font-bold text-base mb-4 tracking-wide">Resources & Portals</h4>
          <ul class="space-y-2.5 text-sm text-slate-400">
            <li><a href="facilities.html" class="hover:text-teal-400 transition-colors">Self-Help & Guided Exercises</a></li>
            <li><a href="batch-timings.html" class="hover:text-teal-400 transition-colors">Weekly Group Timetable</a></li>
            <li><a href="coaches.html" class="hover:text-teal-400 transition-colors">Meet Licensed Clinicians</a></li>
            <li><a href="pricing.html" class="hover:text-teal-400 transition-colors">Insurance & Superbill Info</a></li>
            <li><a href="client-dashboard.html" class="hover:text-teal-400 transition-colors">Client Patient Portal</a></li>
            <li><a href="admin-dashboard.html" class="hover:text-teal-400 transition-colors">Admin Workspace</a></li>
          </ul>
        </div>

        <!-- Column 4: Contact & Locations -->
        <div>
          <h4 class="text-white font-heading font-bold text-base mb-4 tracking-wide">Clinic Inquiries</h4>
          <ul class="space-y-3 text-sm text-slate-400">
            <li class="flex items-start gap-2.5">
              <i class="fas fa-map-marker-alt text-teal-400 mt-1"></i>
              <span>${ADDRESS}</span>
            </li>
            <li class="flex items-center gap-2.5">
              <i class="fas fa-phone-alt text-teal-400"></i>
              <a href="tel:18002738255" class="hover:text-teal-400 transition-colors">${PHONE}</a>
            </li>
            <li class="flex items-center gap-2.5">
              <i class="fas fa-envelope text-teal-400"></i>
              <a href="mailto:${EMAIL}" class="hover:text-teal-400 transition-colors">${EMAIL}</a>
            </li>
            <li class="flex items-center gap-2.5 text-xs text-amber-300">
              <i class="fas fa-exclamation-triangle"></i>
              <span>Crisis Lifeline: Dial 988 (24/7)</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Crisis Emergency Banner -->
      <div class="border-t border-slate-800/80 pt-6 pb-6 text-xs text-slate-400 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
        <p class="mb-1"><strong class="text-amber-400">EMERGENCY NOTICE:</strong> If you are experiencing thoughts of self-harm, a psychiatric crisis, or are in immediate physical danger, please do not wait for an email response. Immediately call <strong class="text-white">988</strong> (Suicide & Crisis Lifeline), call <strong class="text-white">911</strong>, or proceed to the nearest emergency room.</p>
      </div>

      <!-- Copyright & Subfooter -->
      <div class="border-t border-slate-800 mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>&copy; 2026 ${BRAND_NAME} Counseling Center. All rights reserved. Multipurpose Mental Health Template.</p>
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <a href="about.html" class="hover:text-slate-400">Privacy Policy</a>
          <span>&bull;</span>
          <a href="about.html" class="hover:text-slate-400">HIPAA Notice</a>
          <span>&bull;</span>
          <a href="contact.html" class="hover:text-slate-400">Terms of Care</a>
        </div>
      </div>

    </div>
  </footer>

  <!-- Universal Appointment Booking Modal -->
  <div id="appointment-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="modal-content bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-lg w-full p-6 sm:p-8 relative">
      <button type="button" class="close-appointment-modal absolute top-5 right-5 rtl:right-auto rtl:left-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-colors" aria-label="Close Modal">
        <i class="fas fa-times"></i>
      </button>

      <div class="mb-6">
        <span class="trust-badge mb-2"><i class="fas fa-lock"></i> 100% Confidential Intake</span>
        <h3 id="modal-title" class="text-2xl font-bold font-heading text-slate-900 dark:text-white">Request a Confidential Session</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Select your preferred counseling modality and licensed clinician. Our care coordinator will confirm within 2 hours.</p>
      </div>

      <form id="appointment-modal-form" class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
          <input type="text" name="full_name" required placeholder="Jane Doe" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-teal-500">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
            <input type="email" name="email" required placeholder="jane@example.com" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-teal-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
            <input type="tel" name="phone" required placeholder="(555) 000-1234" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-teal-500">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Therapy Focus *</label>
            <select name="service" class="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-teal-500">
              <option value="individual">Individual Psychotherapy</option>
              <option value="couples">Couples & Marriage Therapy</option>
              <option value="teen">Teen & Adolescent Support</option>
              <option value="trauma">Trauma Recovery (EMDR)</option>
              <option value="anxiety">Anxiety & Stress Management</option>
              <option value="telehealth">Virtual Telehealth Care</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Preferred Clinician</label>
            <select name="therapist" class="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-teal-500">
              <option value="any">First Available Best Match</option>
              <option value="sarah">Dr. Sarah Jenkins (Psy.D.)</option>
              <option value="marcus">Dr. Marcus Vance (LMFT)</option>
              <option value="elena">Elena Rostova (LCSW, EMDR)</option>
              <option value="david">Dr. David Kim (M.D., Youth)</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Session Format</label>
            <select name="format" class="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-teal-500">
              <option value="telehealth">Online Video Telehealth</option>
              <option value="in-person">In-Person at Sanctuary Suite</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Preferred Date</label>
            <input type="date" name="date" class="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-teal-500">
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Brief Note (Optional & Confidential)</label>
          <textarea name="notes" rows="2" placeholder="Tell us what you'd like to work on..." class="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-teal-500"></textarea>
        </div>

        <button type="submit" class="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-lg shadow-teal-600/30 transition-all duration-200">
          Confirm Appointment Request
        </button>
      </form>
    </div>
  </div>

  <!-- Mobile Menu Drawer -->
  <div id="mobile-menu-backdrop" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <aside id="mobile-menu-drawer" class="fixed top-0 right-0 rtl:right-auto rtl:left-0 w-80 max-w-[85vw] h-full bg-white dark:bg-slate-900 z-50 shadow-2xl p-6 overflow-y-auto transform translate-x-full transition-transform duration-300 flex flex-col justify-between" aria-label="Mobile Navigation">
    <div>
      <div class="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
            <i class="fas fa-spa"></i>
          </div>
          <span class="font-heading font-bold text-lg text-slate-900 dark:text-white">${BRAND_NAME}</span>
        </div>
        <button type="button" id="mobile-menu-close" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center" aria-label="Close menu">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <nav class="space-y-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
        <a href="index.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600"><i class="fas fa-home text-teal-600 w-4"></i> Home (General Clinic)</a>
        <a href="home-agency.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600"><i class="fas fa-brain text-indigo-600 w-4"></i> Home 2 (Specialized)</a>
        <a href="about.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600"><i class="fas fa-info-circle text-teal-600 w-4"></i> About Us</a>
        <a href="programs.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600"><i class="fas fa-hand-holding-heart text-teal-600 w-4"></i> Services</a>
        <a href="coaches.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600"><i class="fas fa-user-md text-teal-600 w-4"></i> Therapists</a>
        <a href="facilities.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600"><i class="fas fa-spa text-teal-600 w-4"></i> Self-Help & Sanctuary</a>
        <a href="batch-timings.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600"><i class="fas fa-calendar-alt text-teal-600 w-4"></i> Group Schedules</a>
        <a href="pricing.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600"><i class="fas fa-tag text-teal-600 w-4"></i> Pricing & Insurance</a>
        <a href="blog.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600"><i class="fas fa-newspaper text-teal-600 w-4"></i> Wellness Blog</a>
        <a href="contact.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-600"><i class="fas fa-envelope text-teal-600 w-4"></i> Contact Us</a>
        <a href="client-dashboard.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300"><i class="fas fa-user-circle w-4"></i> Client Portal</a>
        <a href="admin-dashboard.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300"><i class="fas fa-chart-line w-4"></i> Admin Workspace</a>
      </nav>
    </div>

    <div class="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
      <button type="button" class="open-appointment-modal w-full py-2.5 rounded-xl bg-teal-600 text-white font-bold text-xs shadow-md">
        <i class="fas fa-calendar-check mr-1.5"></i> Book Appointment
      </button>
      <div class="text-center">
        <a href="tel:988" class="text-xs text-rose-500 font-bold hover:underline flex items-center justify-center gap-1.5">
          <i class="fas fa-phone-alt"></i> Crisis Hotline: 988
        </a>
      </div>
    </div>
  </aside>

  <!-- Back to top button -->
  <button type="button" id="back-to-top" class="fixed bottom-6 left-6 rtl:left-auto rtl:right-6 w-11 h-11 rounded-full bg-teal-600 text-white shadow-lg shadow-teal-600/30 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 hover:bg-teal-500 z-40" aria-label="Scroll to top">
    <i class="fas fa-arrow-up text-sm"></i>
  </button>

  <!-- Scripts -->
  <script src="assets/js/main.js"></script>
  <script src="assets/js/forms.js"></script>
</body>
</html>
`;
}

module.exports = { getHead, getHeader, getFooter, BRAND_NAME, BRAND_SUB, PHONE, CRISIS_PHONE, EMAIL, ADDRESS };
