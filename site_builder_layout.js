const fs = require('fs');
const path = require('path');

console.log('--- Configuring Calmind Premium Theme Layout ---');

// ==========================================
// Curated 100% Unique Mental Health Photo Catalog
// Warm, Empathetic, Calmind ThemeForest Style
// ==========================================
const IMAGES = {
  // Hero Imagery (1-on-1 Compassionate Therapy Consultation)
  hero_home1: 'assets/images/hero-calmind.jpg', // Tender compassionate embrace matching Calmind reference design
  hero_home2: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80', // Individual in peaceful meditation by sunlit window

  // Clinic & Sanctuary Facilities
  about_director: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80', // Empathetic Clinical Director in consultation
  about_suite: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', // Soundproof private acoustic consultation suite
  about_acoustic: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80', // Sensory regulation library
  about_garden: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80', // Mindful botanical courtyard lounge
  about_group_suite: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', // Group workshop circular lounge

  // Therapists (6 Board-Certified Clinicians)
  therapist_sarah: 'https://images.unsplash.com/photo-1594824813590-78925b3997f0?auto=format&fit=crop&w=800&q=80', // Dr. Sarah Jenkins, Psy.D.
  therapist_marcus: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80', // Dr. Marcus Vance, LMFT
  therapist_elena: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80', // Elena Rostova, LCSW, CCTP
  therapist_david: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80', // Dr. David Kim, M.D. Psychiatrist
  therapist_maya: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', // Dr. Maya Patel, Ph.D.
  therapist_james: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', // James Thornton, LPC

  // Core Therapy Services (6 Unique)
  service_individual: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80', // Individual Psychotherapy
  service_couples: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80', // Couples & Marriage Counseling
  service_teen: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', // Teen & Adolescent Therapy
  service_trauma: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80', // Trauma Recovery & EMDR
  service_anxiety: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80', // Stress & Anxiety Management
  service_telehealth: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=800&q=80', // Confidential Telehealth Video

  // Service Details Specific
  service_detail_hero: 'https://images.unsplash.com/photo-1573497491768-6b18a1b4bf08?auto=format&fit=crop&w=1200&q=80', // CBT Treatment Hero
  service_detail_session: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80', // Active listening session

  // Blog Articles (6 Unique Topics)
  blog_somatic: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80', // Somatic Vagus Nerve
  blog_nvc: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=800&q=80', // Relational Communication
  blog_sleep: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&w=800&q=80', // Sleep & Insomnia
  blog_desk: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80', // 5-Minute Desk Rituals
  blog_postpartum: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80', // First Therapy Session Prep
  blog_perfectionism: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&w=800&q=80', // Rewiring Perfectionism

  // Blog Details Specific Hero
  blog_detail_hero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', // Tranquil ocean horizon

  // Verified Client Testimonial Avatars
  client_1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  client_2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  client_3: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
  client_4: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',

  // Self-Help & Resources Suite Specific
  resource_meditation: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
  resource_worksheets: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
  resource_crisis: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',

  // Contact Clinic Locations
  clinic_manhattan: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  clinic_brooklyn: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  clinic_telehealth: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',

  // Authentication Hero Split
  auth_hero: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80'
};

const BRAND_NAME = 'Calmind';
const BRAND_TAGLINE = 'Psychology, Therapy and Counseling';
const PHONE = '+1 (800) 273-8255';
const CRISIS_HOTLINE = '988';
const EMAIL = 'care@calmind-therapy.com';
const ADDRESS = '450 Wellness Pavilion Blvd, Suite 300, New York, NY 10016';

// Common Head Generator with Calmind Fonts & Palette
function getHead(pageTitle, pageDescription, extraHead = '') {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle} | ${BRAND_NAME} — Psychology, Therapy & Counseling</title>
  <meta name="description" content="${pageDescription}">
  <meta property="og:title" content="${pageTitle} | ${BRAND_NAME}">
  <meta property="og:description" content="${pageDescription}">
  <meta property="og:type" content="website">

  <!-- Early Theme & Direction Persistence Handler -->
  <script>
    (function() {
      var t = localStorage.getItem('calmind_theme') || localStorage.getItem('serenemind_theme');
      if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      var d = localStorage.getItem('calmind_direction') || localStorage.getItem('serenemind_direction');
      if (d === 'rtl') {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }
    })();
  </script>

  <!-- Google Fonts: Playfair Display (Serif Luxury Headings), Plus Jakarta Sans (Clean Modern Sans), and Cairo (RTL) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN + Calmind Palette Extension -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#fdf8f5',
              100: '#faece5',
              200: '#f4d7ca',
              300: '#ecbaa6',
              400: '#e29578',
              500: '#d48166',
              600: '#c36b50', // Calmind signature warm terracotta
              700: '#a6533b',
              800: '#874330',
              900: '#6e3728',
              950: '#3b1a12',
            },
            sand: {
              50: '#fdfcfb',
              100: '#faf5f0',
              200: '#f4ebe1',
              300: '#ebded0',
              400: '#d8c7b5',
              500: '#c5b09c',
            },
            espresso: {
              800: '#262220',
              900: '#1c1917', // Calmind deep espresso dark background
              950: '#141110',
            },
            accent: {
              400: '#94b49f',
              500: '#7b9e87',
              600: '#5c7c66',
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            heading: ['"Playfair Display"', 'Georgia', 'serif'],
            rtl: ['"Cairo"', '"Plus Jakarta Sans"', 'sans-serif']
          }
        }
      }
    }
  </script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
  ${extraHead}
</head>
<body class="bg-[#FAF5F0] text-slate-800 dark:bg-[#141110] dark:text-[#F5ECE5] transition-colors duration-300 min-h-screen flex flex-col justify-between overflow-x-hidden">
`;
}

// Common Header & Clean, Perfectly Aligned Navigation Bar
function getHeader(activePage = '') {
  const isHome = activePage === 'home' || activePage === 'home-agency';
  const isAbout = activePage === 'about';
  const isServices = activePage === 'services' || activePage === 'service-details';
  const isTherapists = activePage === 'therapists';
  const isResources = activePage === 'resources';
  const isPricing = activePage === 'pricing';
  const isBlog = activePage === 'blog' || activePage === 'blog-details';
  const isContact = activePage === 'contact';

  return `
  <!-- Top Announcement / 24/7 Crisis Helpline Bar -->
  <div class="bg-espresso-900 text-sand-100 text-xs font-medium py-2.5 px-4 border-b border-white/10">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="bg-primary-500/20 text-primary-300 border border-primary-400/30 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span> 24/7 Crisis Support
        </span>
        <span class="text-sand-200 text-[11px] sm:text-xs">In emotional distress? Dial <a href="tel:988" class="font-bold underline text-primary-300 hover:text-white transition-colors">988 Lifeline</a> or text <span class="font-bold text-primary-300">HOME to 741741</span></span>
      </div>
      <div class="flex items-center space-x-5 rtl:space-x-reverse text-sand-300 text-xs">
        <a href="tel:18002738255" class="hover:text-white transition-colors flex items-center gap-1.5">
          <i class="fas fa-phone-alt text-[11px] text-primary-400"></i> ${PHONE}
        </a>
        <span class="text-white/20 hidden md:inline">|</span>
        <span class="hidden md:inline-flex items-center gap-1.5 text-sand-300">
          <i class="far fa-clock text-primary-400"></i> Mon-Sat 8AM - 8PM EST
        </span>
      </div>
    </div>
  </div>

  <!-- Calmind Navbar Header with Precision Horizontal & Vertical Alignment -->
  <header id="main-header" class="sticky top-0 z-40 bg-[#FAF5F0]/95 dark:bg-[#1C1917]/95 backdrop-blur-md border-b border-sand-300/60 dark:border-white/10 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
      
      <!-- Left: Calmind Brand Logo (Matching Reference Image) -->
      <a href="index.html" class="flex items-center gap-3 group shrink-0" title="${BRAND_NAME} — Psychology and Counseling">
        <!-- Calmind Dual Hands Heart SVG -->
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary-600 to-primary-400 flex items-center justify-center text-white shadow-md shadow-primary-600/25 group-hover:scale-105 transition-transform duration-300">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <span class="font-heading text-2xl font-bold tracking-tight text-espresso-900 dark:text-white leading-none">
          ${BRAND_NAME}
        </span>
      </a>

      <!-- Center: Clean, Centered Desktop Nav Menu (Matching Reference Image) -->
      <nav class="hidden lg:flex items-center gap-7 xl:gap-8 text-sm font-semibold text-slate-700 dark:text-sand-200">
        <!-- Home Dropdown -->
        <div class="relative group py-2 flex items-center">
          <a href="index.html" class="inline-flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 ${isHome ? 'text-primary-600 dark:text-primary-400 font-bold' : ''}">
            Home <i class="fas fa-chevron-down text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200"></i>
          </a>
          <div class="absolute top-full left-0 rtl:left-auto rtl:right-0 pt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div class="bg-white dark:bg-espresso-900 rounded-2xl shadow-xl border border-sand-200 dark:border-white/10 p-2">
              <a href="index.html" class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-heart text-primary-500 w-4"></i> Home 1 &middot; Balance & Care
              </a>
              <a href="home-agency.html" class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-brain text-primary-500 w-4"></i> Home 2 &middot; Specialized Care
              </a>
            </div>
          </div>
        </div>

        <a href="about.html" class="inline-flex items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${isAbout ? 'text-primary-600 dark:text-primary-400 font-bold' : ''}">About</a>

        <!-- Services Dropdown -->
        <div class="relative group py-2 flex items-center">
          <a href="services.html" class="inline-flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 ${isServices ? 'text-primary-600 dark:text-primary-400 font-bold' : ''}">
            Services <i class="fas fa-chevron-down text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200"></i>
          </a>
          <div class="absolute top-full left-0 rtl:left-auto rtl:right-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div class="bg-white dark:bg-espresso-900 rounded-2xl shadow-xl border border-sand-200 dark:border-white/10 p-2">
              <a href="services.html" class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-hand-holding-heart text-primary-500 w-4"></i> All Therapy Services
              </a>
              <a href="service-details.html" class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-file-medical-alt text-primary-500 w-4"></i> CBT & Anxiety Details
              </a>
              <a href="batch-timings.html" class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-users text-primary-500 w-4"></i> Group Cohorts Schedule
              </a>
            </div>
          </div>
        </div>

        <!-- Pages Dropdown (Matching Reference Theme) -->
        <div class="relative group py-2 flex items-center">
          <a href="#" class="inline-flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 ${isTherapists || isResources || isPricing ? 'text-primary-600 dark:text-primary-400 font-bold' : ''}">
            Pages <i class="fas fa-chevron-down text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200"></i>
          </a>
          <div class="absolute top-full left-0 rtl:left-auto rtl:right-0 pt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div class="bg-white dark:bg-espresso-900 rounded-2xl shadow-xl border border-sand-200 dark:border-white/10 p-2">
              <a href="therapists.html" class="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-user-md text-primary-500 w-4"></i> Therapists Directory
              </a>
              <a href="resources.html" class="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-lungs text-primary-500 w-4"></i> Self-Help & Breathing
              </a>
              <a href="pricing.html" class="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-tags text-primary-500 w-4"></i> Pricing & Insurance
              </a>
              <a href="client-dashboard.html" class="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-user-circle text-primary-500 w-4"></i> Patient Portal
              </a>
              <a href="admin-dashboard.html" class="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-chart-line text-primary-500 w-4"></i> Clinician Workspace
              </a>
              <a href="login.html" class="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-sign-in-alt text-primary-500 w-4"></i> Client Login / Register
              </a>
              <a href="404.html" class="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-compass text-primary-500 w-4"></i> 404 Mindful Page
              </a>
              <a href="maintenance.html" class="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-tools text-primary-500 w-4"></i> Maintenance Mode
              </a>
            </div>
          </div>
        </div>

        <!-- Blog Dropdown -->
        <div class="relative group py-2 flex items-center">
          <a href="blog.html" class="inline-flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 ${isBlog ? 'text-primary-600 dark:text-primary-400 font-bold' : ''}">
            Blog <i class="fas fa-chevron-down text-[10px] opacity-60 group-hover:rotate-180 transition-transform duration-200"></i>
          </a>
          <div class="absolute top-full left-0 rtl:left-auto rtl:right-0 pt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div class="bg-white dark:bg-espresso-900 rounded-2xl shadow-xl border border-sand-200 dark:border-white/10 p-2">
              <a href="blog.html" class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-newspaper text-primary-500 w-4"></i> Wellness Journal
              </a>
              <a href="blog-details.html" class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i class="fas fa-book-reader text-primary-500 w-4"></i> Clinical Deep Dive
              </a>
            </div>
          </div>
        </div>

        <a href="contact.html" class="inline-flex items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${isContact ? 'text-primary-600 dark:text-primary-400 font-bold' : ''}">Contact</a>
      </nav>

      <!-- Right: Action Controls & Pill Button (Balanced & Vertically Centered) -->
      <div class="flex items-center gap-3 shrink-0">
        <!-- Theme Toggle -->
        <button type="button" class="theme-toggle-btn w-10 h-10 rounded-full bg-white dark:bg-espresso-800 text-slate-600 dark:text-sand-200 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center transition-colors border border-sand-200 dark:border-white/10 shadow-sm" title="Toggle Theme" aria-label="Toggle Theme">
          <i class="fas fa-moon moon-icon text-xs"></i>
          <i class="fas fa-sun sun-icon text-xs hidden"></i>
        </button>

        <!-- RTL Toggle -->
        <button type="button" class="rtl-toggle-btn px-3 h-10 rounded-full bg-white dark:bg-espresso-800 text-slate-600 dark:text-sand-200 hover:text-primary-600 dark:hover:text-primary-400 text-xs font-bold transition-colors border border-sand-200 dark:border-white/10 shadow-sm flex items-center gap-1.5" title="Toggle Direction" aria-label="Toggle Direction">
          <i class="fas fa-globe text-xs"></i> <span class="rtl-text">RTL</span>
        </button>

        <!-- Calmind Terracotta Pill Login Button -->
        <a href="login.html" class="nav-auth-btn inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold shadow-md shadow-primary-600/25 transition-all duration-200 hover:scale-105 active:scale-95 shrink-0" title="Sign In to Portal">
          <i class="fas fa-user-circle text-sm"></i> <span class="nav-auth-text">Login</span>
        </a>

        <!-- Mobile Menu Hamburger -->
        <button type="button" id="mobile-menu-toggle" class="lg:hidden w-10 h-10 rounded-full bg-white dark:bg-espresso-800 text-slate-700 dark:text-sand-200 hover:text-primary-600 flex items-center justify-center transition-colors border border-sand-200 dark:border-white/10 shadow-sm" aria-label="Open Menu">
          <i class="fas fa-bars text-sm"></i>
        </button>
      </div>

    </div>
  </header>
`;
}

// Common Footer, Appointment Modal, Mobile Drawer & Scripts
function getFooter() {
  return `
  <!-- Calmind Footer in Deep Espresso Charcoal -->
  <footer class="bg-[#1C1917] text-[#D8C7B5] pt-16 pb-12 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
        
        <!-- Col 1: Brand & Credentials -->
        <div class="lg:col-span-2 space-y-4">
          <a href="index.html" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-primary-600 flex items-center justify-center text-white shadow-md">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <span class="font-heading text-2xl font-bold text-white tracking-tight">${BRAND_NAME}</span>
          </a>
          <p class="text-xs leading-relaxed text-sand-300 max-w-sm">
            Professional therapy and compassionate support to help you heal, grow, and live a more fulfilling, balanced life.
          </p>
          
          <!-- Trust & Accreditation Badges -->
          <div class="pt-2 flex flex-wrap gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-primary-300 text-xs font-semibold border border-white/10">
              <i class="fas fa-shield-alt text-primary-400"></i> HIPAA Compliant
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-sand-200 text-xs font-semibold border border-white/10">
              <i class="fas fa-certificate text-primary-400"></i> APA Accredited
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-sand-200 text-xs font-semibold border border-white/10">
              <i class="fas fa-star text-primary-400"></i> 4.9/5 Rating
            </span>
          </div>

          <!-- Social Links -->
          <div class="flex items-center gap-3 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-600 hover:text-white flex items-center justify-center text-sand-300 transition-colors" aria-label="LinkedIn"><i class="fab fa-linkedin-in text-xs"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-600 hover:text-white flex items-center justify-center text-sand-300 transition-colors" aria-label="Facebook"><i class="fab fa-facebook-f text-xs"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-600 hover:text-white flex items-center justify-center text-sand-300 transition-colors" aria-label="Instagram"><i class="fab fa-instagram text-xs"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-600 hover:text-white flex items-center justify-center text-sand-300 transition-colors" aria-label="Twitter"><i class="fab fa-twitter text-xs"></i></a>
          </div>
        </div>

        <!-- Col 2: Services -->
        <div class="space-y-3">
          <h4 class="font-heading font-bold text-sm uppercase tracking-wider text-white">Therapy Services</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="services.html" class="hover:text-primary-300 transition-colors">Individual Therapy</a></li>
            <li><a href="services.html" class="hover:text-primary-300 transition-colors">Couples Counseling</a></li>
            <li><a href="services.html" class="hover:text-primary-300 transition-colors">Teen & Adolescent Care</a></li>
            <li><a href="services.html" class="hover:text-primary-300 transition-colors">Trauma & EMDR Recovery</a></li>
            <li><a href="service-details.html" class="hover:text-primary-300 transition-colors">CBT for Anxiety & Panic</a></li>
            <li><a href="services.html" class="hover:text-primary-300 transition-colors">Online Telehealth Video</a></li>
          </ul>
        </div>

        <!-- Col 3: Self-Help & Portals -->
        <div class="space-y-3">
          <h4 class="font-heading font-bold text-sm uppercase tracking-wider text-white">Patient Sanctuary</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="resources.html" class="hover:text-primary-300 transition-colors">Box Breathing Exercise</a></li>
            <li><a href="resources.html" class="hover:text-primary-300 transition-colors">Mental Wellness Screener</a></li>
            <li><a href="pricing.html" class="hover:text-primary-300 transition-colors">Transparent Pricing & Superbills</a></li>
            <li><a href="therapists.html" class="hover:text-primary-300 transition-colors">Licensed Clinicians Directory</a></li>
            <li><a href="client-dashboard.html" class="text-primary-300 hover:text-primary-200 transition-colors font-bold"><i class="fas fa-lock text-[10px] mr-1"></i> Patient Portal</a></li>
            <li><a href="admin-dashboard.html" class="text-primary-300 hover:text-primary-200 transition-colors font-bold"><i class="fas fa-user-md text-[10px] mr-1"></i> Clinician Workspace</a></li>
          </ul>
        </div>

        <!-- Col 4: Confidential Care & Crisis -->
        <div class="space-y-3">
          <h4 class="font-heading font-bold text-sm uppercase tracking-wider text-white">Confidential Care</h4>
          <div class="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span class="text-[11px] uppercase font-bold text-primary-300 flex items-center gap-1.5">
              <i class="fas fa-phone-volume text-primary-400"></i> 24/7 Crisis Hotline
            </span>
            <p class="text-xs text-sand-300">
              In emotional crisis? Call or text <a href="tel:988" class="font-bold text-primary-300 underline">988</a> (Free & Confidential).
            </p>
          </div>
          <div class="text-xs space-y-1.5 text-sand-400">
            <p><i class="fas fa-map-marker-alt text-primary-400 mr-1.5"></i> ${ADDRESS}</p>
            <p><i class="fas fa-envelope text-primary-400 mr-1.5"></i> ${EMAIL}</p>
            <p><i class="fas fa-phone text-primary-400 mr-1.5"></i> ${PHONE}</p>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-sand-400">
        <p>&copy; 2026 ${BRAND_NAME} Psychological & Counseling Practice. All rights reserved.</p>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
          <a href="contact.html" class="hover:text-sand-200 transition-colors">Privacy Policy</a>
          <a href="contact.html" class="hover:text-sand-200 transition-colors">HIPAA Disclosures</a>
          <a href="contact.html" class="hover:text-sand-200 transition-colors">Terms of Care</a>
          <a href="404.html" class="hover:text-sand-200 transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Universal Appointment Booking Modal -->
  <div id="appointment-modal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-md hidden items-center justify-center p-4">
    <div class="relative w-full max-w-lg bg-[#FAF5F0] dark:bg-[#1C1917] rounded-3xl shadow-2xl border border-sand-300 dark:border-white/10 overflow-hidden animate-fade-in">
      
      <!-- Modal Header -->
      <div class="px-6 py-5 bg-gradient-to-r from-primary-600 to-primary-500 text-white flex items-center justify-between">
        <div>
          <h3 class="font-heading text-xl font-bold">Book a Confidential Session</h3>
          <p class="text-xs text-primary-100">100% HIPAA-compliant & judgment-free intake</p>
        </div>
        <button type="button" id="appointment-modal-close" class="text-white/80 hover:text-white w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-colors" aria-label="Close modal">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <!-- Modal Body / Form -->
      <form id="appointment-booking-form" class="p-6 space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-sand-200 mb-1">Your Full Name *</label>
            <input type="text" name="name" required placeholder="e.g. Alex Morgan" class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-primary-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-sand-200 mb-1">Email Address *</label>
            <input type="email" name="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-primary-500">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-sand-200 mb-1">Phone Number *</label>
            <input type="tel" name="phone" required placeholder="(555) 000-0000" class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-primary-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-sand-200 mb-1">Session Format *</label>
            <select name="format" class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-primary-500">
              <option value="telehealth">Telehealth (Secure Video)</option>
              <option value="manhattan">In-Person (Manhattan Sanctuary)</option>
              <option value="brooklyn">In-Person (Brooklyn Heights Suite)</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-sand-200 mb-1">Service Desired</label>
            <select name="service" class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-primary-500">
              <option value="">Select Service (or General Intake)</option>
              <option value="individual">Individual Therapy</option>
              <option value="couples">Couples Counseling</option>
              <option value="teen">Teen Counseling</option>
              <option value="trauma">Trauma & EMDR Recovery</option>
              <option value="cbt">CBT for Anxiety & Panic</option>
              <option value="telehealth">Online Video Therapy</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-sand-200 mb-1">Preferred Clinician</label>
            <select name="therapist" class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-primary-500">
              <option value="">First Available Specialist</option>
              <option value="sarah">Dr. Sarah Jenkins, Psy.D. (Psychologist)</option>
              <option value="marcus">Dr. Marcus Vance, LMFT (Couples)</option>
              <option value="elena">Elena Rostova, LCSW (Trauma / EMDR)</option>
              <option value="david">Dr. David Kim, M.D. (Child / Adolescent)</option>
              <option value="maya">Dr. Maya Patel, Ph.D. (Neuropsychology)</option>
              <option value="james">James Thornton, LPC (Mindfulness / CBT)</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 dark:text-sand-200 mb-1">What brings you to counseling? (Confidential)</label>
          <textarea name="notes" rows="2" placeholder="Briefly describe what you'd like support with..." class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-primary-500"></textarea>
        </div>

        <div class="flex items-start gap-2 pt-1">
          <input type="checkbox" id="modal-hipaa" required class="mt-0.5 rounded text-primary-600 focus:ring-primary-500">
          <label for="modal-hipaa" class="text-[11px] text-slate-500 dark:text-sand-400">
            I understand that Calmind protects all information under federal HIPAA guidelines and state medical confidentiality laws.
          </label>
        </div>

        <button type="submit" class="w-full py-3.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow-lg shadow-primary-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-95">
          Submit Confidential Booking Request
        </button>
      </form>

    </div>
  </div>

  <!-- Mobile Navigation Drawer -->
  <div id="mobile-menu-backdrop" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300"></div>
  <aside id="mobile-menu-drawer" class="fixed top-0 right-0 rtl:right-auto rtl:left-0 w-80 max-w-[85vw] h-full bg-[#FAF5F0] dark:bg-[#1C1917] z-50 shadow-2xl p-6 overflow-y-auto transform translate-x-full rtl:-translate-x-full transition-transform duration-300 flex flex-col justify-between" aria-label="Mobile Navigation">
    <div>
      <div class="flex items-center justify-between mb-6 pb-4 border-b border-sand-300/60 dark:border-white/10">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-primary-600 flex items-center justify-center text-white">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span class="font-heading font-bold text-lg text-slate-900 dark:text-white">${BRAND_NAME}</span>
        </div>
        <button type="button" id="mobile-menu-close" class="text-slate-400 hover:text-slate-600 dark:hover:text-sand-200 text-base w-8 h-8 rounded-full bg-white dark:bg-espresso-800 flex items-center justify-center" aria-label="Close menu">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <nav class="space-y-1.5 text-xs font-semibold text-slate-700 dark:text-sand-200">
        <a href="index.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600"><i class="fas fa-home text-primary-500 w-4"></i> Home (Balance & Care)</a>
        <a href="home-agency.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600"><i class="fas fa-brain text-primary-500 w-4"></i> Home 2 (Specialized)</a>
        <a href="about.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600"><i class="fas fa-heart text-primary-500 w-4"></i> About Us</a>
        <a href="services.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600"><i class="fas fa-hand-holding-heart text-primary-500 w-4"></i> Services</a>
        <a href="service-details.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600 pl-7 rtl:pl-3 rtl:pr-7 text-slate-500"><i class="fas fa-angle-right text-[10px] w-3"></i> Service Details (CBT)</a>
        <a href="therapists.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600"><i class="fas fa-user-md text-primary-500 w-4"></i> Therapists</a>
        <a href="resources.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600"><i class="fas fa-lungs text-primary-500 w-4"></i> Self-Help & Breathing</a>
        <a href="pricing.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600"><i class="fas fa-tags text-primary-500 w-4"></i> Pricing & Plans</a>
        <a href="blog.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600"><i class="fas fa-newspaper text-primary-500 w-4"></i> Wellness Blog</a>
        <a href="contact.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary-50 dark:hover:bg-espresso-800 hover:text-primary-600"><i class="fas fa-envelope text-primary-500 w-4"></i> Contact</a>
        <div class="pt-2 border-t border-sand-300/60 dark:border-white/10 space-y-1.5">
          <a href="client-dashboard.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-primary-50 dark:bg-espresso-800 text-primary-700 dark:text-primary-300 font-bold"><i class="fas fa-user-circle w-4"></i> Patient Portal</a>
          <a href="admin-dashboard.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-sand-200 dark:bg-espresso-800 text-slate-800 dark:text-sand-200 font-bold"><i class="fas fa-chart-line w-4"></i> Clinician Workspace</a>
          <a href="login.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-white dark:hover:bg-espresso-800"><i class="fas fa-sign-in-alt w-4 text-slate-400"></i> Login / Register</a>
        </div>
      </nav>
    </div>

    <div class="pt-6 border-t border-sand-300/60 dark:border-white/10 space-y-3">
      <a href="login.html" class="mobile-nav-auth-btn w-full py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95">
        <i class="fas fa-user-circle"></i> <span class="mobile-auth-label">Login / Register</span>
      </a>
      <div class="text-center">
        <a href="tel:988" class="text-xs text-primary-600 font-bold hover:underline flex items-center justify-center gap-1.5">
          <i class="fas fa-phone-alt"></i> 24/7 Crisis Hotline: 988
        </a>
      </div>
    </div>
  </aside>

  <!-- Back to Top Button -->
  <button type="button" id="back-to-top" class="fixed bottom-6 left-6 rtl:left-auto rtl:right-6 w-10 h-10 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 hover:bg-primary-700 z-30" aria-label="Scroll to top">
    <i class="fas fa-arrow-up text-xs"></i>
  </button>

  <!-- Core JavaScript Engine -->
  <script src="assets/js/main.js"></script>
</body>
</html>
`;
}

module.exports = {
  getHead,
  getHeader,
  getFooter,
  IMAGES,
  BRAND_NAME,
  BRAND_TAGLINE,
  PHONE,
  CRISIS_HOTLINE,
  EMAIL,
  ADDRESS
};
