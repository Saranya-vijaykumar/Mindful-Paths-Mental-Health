const fs = require('fs');
const {
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
} = require('./site_builder_layout.js');

console.log('Generating Home-Agency, About, Contact, and Pricing pages...');

// ==========================================
// 2. HOME-AGENCY.HTML (Home Page 2 - Niche-Specific Practice)
// ==========================================
function buildHomeAgency() {
  const content = `
<main class="flex-grow">
  <!-- Hero Section: Specialized Clinical Practice -->
  <section class="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-slate-900 text-white">
    <!-- Subtle Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-r from-teal-950/80 via-slate-900/90 to-indigo-950/80 -z-10"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-xs font-bold">
            <i class="fas fa-brain text-indigo-400"></i> Executive Burnout & Complex Trauma Intensive Track
          </div>

          <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]">
            High-Performance Psychotherapy & <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">Restorative Care</span>
          </h1>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Engineered for founders, executives, medical professionals, and high-responsibility leaders navigating acute burnout, emotional depletion, and acute relational stress.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button type="button" class="open-appointment-modal w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-sm shadow-xl shadow-teal-500/20 transition-all flex items-center justify-center gap-2">
              <i class="fas fa-user-shield"></i> Request Executive Intake
            </button>
            <a href="pricing.html" class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2">
              <i class="fas fa-receipt text-teal-400"></i> Superbill Concierge
            </a>
          </div>

          <!-- Feature Bullets -->
          <div class="pt-4 flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-slate-300 font-semibold">
            <span class="flex items-center gap-1.5"><i class="fas fa-check-circle text-teal-400"></i> Direct Clinician Cellphone Access</span>
            <span class="flex items-center gap-1.5"><i class="fas fa-check-circle text-teal-400"></i> Weekend & Early Morning Slots</span>
            <span class="flex items-center gap-1.5"><i class="fas fa-check-circle text-teal-400"></i> Private VIP Entrance</span>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 group">
            <img src="${IMAGES.hero_home2}" alt="Executive in deep restorative mindfulness by a sunlit sanctuary window" class="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700" loading="eager">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700">
              <p class="text-xs font-bold text-teal-300 uppercase tracking-wider">Clinical Intensive Track</p>
              <p class="text-sm font-heading font-bold text-white mt-0.5">4-Week Executive Nervous System Reset</p>
              <p class="text-[11px] text-slate-400 mt-1">Includes quantitative HRV biofeedback and psychiatric review.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 4-Phase Clinical Pathway -->
  <section class="py-20 bg-white dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span class="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
          Our Methodology
        </span>
        <h2 class="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          The 4-Phase Restorative Pathway
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          From acute crisis stabilization to permanent neurological calm, our clinical protocols follow a structured trajectory.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-heading font-bold text-lg">01</div>
          <h3 class="font-heading font-bold text-base text-slate-900 dark:text-white">Comprehensive Intake</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            In-depth clinical diagnostic evaluation examining nervous system baseline, sleep architecture, trauma history, and cognitive stressors.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-heading font-bold text-lg">02</div>
          <h3 class="font-heading font-bold text-base text-slate-900 dark:text-white">Somatic De-escalation</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Targeting autonomic hyper-arousal with vagus nerve reset exercises, EMDR bilateral stimulation, and physical grounding techniques.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-heading font-bold text-lg">03</div>
          <h3 class="font-heading font-bold text-base text-slate-900 dark:text-white">Cognitive Restructuring</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Dismantling high-pressure cognitive distortions, perfectionistic demands, and imposter scripts using advanced CBT and ACT frameworks.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-heading font-bold text-lg">04</div>
          <h3 class="font-heading font-bold text-base text-slate-900 dark:text-white">Relapse Prevention</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Establishing sustainable psychological boundaries, restorative micro-rituals, and biometric monitoring to safeguard lasting vitality.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Corporate & Specialized Tracks -->
  <section class="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <span class="text-xs uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
            Specialized Practice
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Designed for High-Discretion & Demanding Lifestyles
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            We understand that prominent executives, public figures, and senior clinicians require confidentiality beyond ordinary commercial standards. Our Manhattan and Brooklyn suites feature private appointment staggered spacing so you never wait in an open lounge.
          </p>
          <div class="space-y-3">
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
              <i class="fas fa-user-secret text-teal-600 text-lg"></i>
              <div>
                <p class="text-xs font-bold text-slate-900 dark:text-white">Alias Record Filing Option</p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400">Strict non-disclosure intake procedures for public figures.</p>
              </div>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
              <i class="fas fa-laptop-medical text-indigo-600 text-lg"></i>
              <div>
                <p class="text-xs font-bold text-slate-900 dark:text-white">End-to-End Encrypted Telehealth</p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400">256-bit AES encrypted tele-session links with zero recordings.</p>
              </div>
            </div>
          </div>
          <button type="button" class="open-appointment-modal px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md">
            Schedule Private Intake Call
          </button>
        </div>

        <div class="relative">
          <img src="${IMAGES.about_suite}" alt="Serene luxury counseling reception suite with soundproofing" class="rounded-3xl shadow-xl object-cover w-full h-[400px]">
        </div>
      </div>
    </div>
  </section>
</main>
`;

  return getHead('Home 2 — Specialized Care & Executive Sanctuary', 'Specialized mental health counseling, executive burnout tracks, and trauma recovery at SereneMind.')
    + getHeader('home-agency')
    + content
    + getFooter();
}

// ==========================================
// 3. ABOUT.HTML (About Us)
// ==========================================
function buildAbout() {
  const content = `
<main class="flex-grow">
  <!-- Hero Section -->
  <section class="py-16 lg:py-24 bg-gradient-to-b from-teal-50/50 to-transparent dark:from-teal-950/20 dark:to-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <span class="text-xs uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
        Our Sanctuary & Story
      </span>
      <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        A Dedicated Sanctuary for Compassionate Healing
      </h1>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Founded in 2011, SereneMind bridges rigorous clinical neuropsychology with profound empathy, creating a tranquil environment where clients feel truly seen, safe, and supported.
      </p>
    </div>
  </section>

  <!-- Clinical Philosophy & Director Section -->
  <section class="py-16 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-6">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-slate-800">
            <img src="${IMAGES.about_director}" alt="Dr. Rachel Vance, Clinical Director conducting an intake session" class="w-full h-[440px] object-cover">
            <div class="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow border border-slate-200 dark:border-slate-700">
              <p class="text-xs font-bold text-slate-900 dark:text-white">Dr. Rachel Vance, Ph.D., ABPP</p>
              <p class="text-[11px] text-teal-600 dark:text-teal-400">Founder & Chief Clinical Officer</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 space-y-6">
          <span class="text-xs uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400">Our Guiding Principle</span>
          <h2 class="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            "Therapy should not feel clinical, sterile, or bureaucratic. It should feel like stepping into a peaceful sanctuary."
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            We reject the outdated assembly-line approach to mental healthcare. At SereneMind, our clinicians carry intentionally capped caseloads, ensuring that each patient receives deep attention, thoughtful custom protocols, and unhurried clinical support.
          </p>
          <div class="grid grid-cols-2 gap-4 pt-2">
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p class="font-heading text-2xl font-black text-teal-600">15+</p>
              <p class="text-xs text-slate-500 dark:text-slate-400">Years of Clinical Excellence</p>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p class="font-heading text-2xl font-black text-indigo-600">98.4%</p>
              <p class="text-xs text-slate-500 dark:text-slate-400">Patient Progress Metric</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 15-Year Clinical Timeline -->
  <section class="py-20 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-2">
        <h2 class="font-heading text-3xl font-bold text-slate-900 dark:text-white">Our 15-Year Clinical Journey</h2>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Evolution from a single community office to an accredited psychological sanctuary.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <span class="text-xs font-bold text-teal-600 dark:text-teal-400">2011 &middot; Foundation</span>
          <h3 class="font-heading font-bold text-base text-slate-900 dark:text-white">Manhattan Practice</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Dr. Rachel Vance establishes our first outpatient practice in Midtown Manhattan focusing on adult anxiety and grief.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400">2016 &middot; Expansion</span>
          <h3 class="font-heading font-bold text-base text-slate-900 dark:text-white">Couples & Trauma Wing</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Integrated certified Gottman marriage counseling and specialized EMDR bilateral trauma rooms into our clinical offerings.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">2020 &middot; Innovation</span>
          <h3 class="font-heading font-bold text-base text-slate-900 dark:text-white">HIPAA Telehealth Suite</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Launched fully encrypted video tele-sessions, providing seamless continuity of care to over 4,000 clients during lockdown.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400">2026 &middot; Present</span>
          <h3 class="font-heading font-bold text-base text-slate-900 dark:text-white">Integrative Sanctuary</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Operating 3 physical wellness centers in Manhattan and Brooklyn, featuring acoustic sound isolation suites and biofeedback labs.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Sanctuary Facility Showcase (Unique Imagery) -->
  <section class="py-20 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-14 space-y-2">
        <span class="text-xs uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400">Sanctuary Environments</span>
        <h2 class="font-heading text-3xl font-bold text-slate-900 dark:text-white">Tour Our Restorative Suites</h2>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Designed by healthcare environmental architects to promote neuro-sensory calm and total acoustic privacy.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="group rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
          <img src="${IMAGES.about_suite}" alt="Welcoming reception lounge with ergonomic seating and warm natural lighting" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="p-4 bg-white dark:bg-slate-900">
            <h4 class="font-heading font-bold text-sm text-slate-900 dark:text-white">Welcome Lounge</h4>
            <p class="text-[11px] text-slate-500">Low-sensory tea station & natural lighting</p>
          </div>
        </div>

        <div class="group rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
          <img src="${IMAGES.about_acoustic}" alt="Soundproof private consultation therapy room with acoustic panels" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="p-4 bg-white dark:bg-slate-900">
            <h4 class="font-heading font-bold text-sm text-slate-900 dark:text-white">Acoustic Therapy Suite</h4>
            <p class="text-[11px] text-slate-500">55dB soundproof acoustic isolation</p>
          </div>
        </div>

        <div class="group rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
          <img src="${IMAGES.about_garden}" alt="Botanical zen garden for mindful somatic grounding exercises" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="p-4 bg-white dark:bg-slate-900">
            <h4 class="font-heading font-bold text-sm text-slate-900 dark:text-white">Botanical Zen Courtyard</h4>
            <p class="text-[11px] text-slate-500">Mindful outdoor grounding patio</p>
          </div>
        </div>

        <div class="group rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
          <img src="${IMAGES.about_group_suite}" alt="Circular group counseling suite with comfortable seating" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="p-4 bg-white dark:bg-slate-900">
            <h4 class="font-heading font-bold text-sm text-slate-900 dark:text-white">Group Workshop Suite</h4>
            <p class="text-[11px] text-slate-500">Circular acoustic seating arrangement</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
`;

  return getHead('About Us — Clinical Mission & Sanctuary', 'Learn about SereneMind Counseling Center, our 15-year clinical journey, our acoustic suites, and leadership.')
    + getHeader('about')
    + content
    + getFooter();
}

// ==========================================
// 4. CONTACT.HTML (Contact Us)
// ==========================================
function buildContact() {
  const content = `
<main class="flex-grow">
  <!-- Top Banner -->
  <section class="py-14 bg-gradient-to-b from-teal-50/60 to-transparent dark:from-teal-950/20 dark:to-transparent text-center space-y-3">
    <span class="text-xs uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
      Confidential Intake
    </span>
    <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
      Connect With Our Care Team
    </h1>
    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
      Whether you have questions about insurance coverage, session availability, or finding the right therapist, we are here to support you.
    </p>
  </section>

  <!-- 3 Clinic Sanctuary Locations -->
  <section class="py-12 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Location 1 -->
        <div class="rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-6 space-y-4">
          <div class="relative h-40 rounded-2xl overflow-hidden">
            <img src="${IMAGES.clinic_manhattan}" alt="Manhattan Flagship Sanctuary exterior" class="w-full h-full object-cover">
          </div>
          <div>
            <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white">Manhattan Flagship</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">450 Wellness Pavilion Blvd, Suite 300, New York, NY 10016</p>
          </div>
          <div class="text-xs space-y-1 text-slate-600 dark:text-slate-300">
            <p><i class="fas fa-phone text-teal-500 mr-2"></i> +1 (212) 555-0192</p>
            <p><i class="fas fa-clock text-teal-500 mr-2"></i> Mon-Sat: 8:00 AM – 8:00 PM</p>
            <p><i class="fas fa-subway text-teal-500 mr-2"></i> Subways: 4, 5, 6, N, Q, R (Union Sq)</p>
          </div>
        </div>

        <!-- Location 2 -->
        <div class="rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-6 space-y-4">
          <div class="relative h-40 rounded-2xl overflow-hidden">
            <img src="${IMAGES.clinic_brooklyn}" alt="Brooklyn Heights Wellness Suite exterior" class="w-full h-full object-cover">
          </div>
          <div>
            <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white">Brooklyn Heights Suite</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">128 Pierrepont St, Floor 4, Brooklyn, NY 11201</p>
          </div>
          <div class="text-xs space-y-1 text-slate-600 dark:text-slate-300">
            <p><i class="fas fa-phone text-teal-500 mr-2"></i> +1 (718) 555-0144</p>
            <p><i class="fas fa-clock text-teal-500 mr-2"></i> Tue-Sun: 9:00 AM – 7:00 PM</p>
            <p><i class="fas fa-subway text-teal-500 mr-2"></i> Subways: 2, 3, A, C (Borough Hall)</p>
          </div>
        </div>

        <!-- Location 3 -->
        <div class="rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-6 space-y-4">
          <div class="relative h-40 rounded-2xl overflow-hidden">
            <img src="${IMAGES.clinic_telehealth}" alt="Telehealth Virtual Clinic video setup" class="w-full h-full object-cover">
          </div>
          <div>
            <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white">Telehealth Nationwide</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Encrypted Video Sessions Across NY, NJ, CT, CA, FL</p>
          </div>
          <div class="text-xs space-y-1 text-slate-600 dark:text-slate-300">
            <p><i class="fas fa-phone text-teal-500 mr-2"></i> ${PHONE}</p>
            <p><i class="fas fa-clock text-teal-500 mr-2"></i> 7 Days a Week: 7:00 AM – 9:00 PM EST</p>
            <p><i class="fas fa-laptop text-teal-500 mr-2"></i> HIPAA Video Portal (Web & Mobile)</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Interactive Confidential Inquiry Form -->
  <section class="py-16 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div class="border-b border-slate-100 dark:border-slate-800 pb-4">
          <h2 class="font-heading text-2xl font-bold text-slate-900 dark:text-white">Send a Confidential Inquiry</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Our clinical care coordinator responds to inquiries within 2 business hours.</p>
        </div>

        <form id="contact-inquiry-form" class="space-y-4" onsubmit="event.preventDefault(); window.showToast('Inquiry sent! A care coordinator will reach out confidentially.', 'success'); this.reset();">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Full Name *</label>
              <input type="text" required placeholder="Alex Morgan" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
              <input type="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
              <input type="tel" required placeholder="(555) 000-0000" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Preferred Location</label>
              <select class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500">
                <option value="manhattan">Manhattan Flagship Suite</option>
                <option value="brooklyn">Brooklyn Heights Suite</option>
                <option value="telehealth">Confidential Telehealth Video</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">How can we support you? (Confidential)</label>
            <textarea rows="3" required placeholder="Tell us about what brings you to SereneMind or any insurance questions..." class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"></textarea>
          </div>

          <div class="flex items-start gap-2">
            <input type="checkbox" id="contact-consent" required class="mt-0.5 rounded text-teal-600">
            <label for="contact-consent" class="text-[11px] text-slate-500 dark:text-slate-400">
              I consent to receiving a confidential response via phone or email in accordance with HIPAA standards.
            </label>
          </div>

          <button type="submit" class="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-lg shadow-teal-600/20 transition-all">
            Submit Confidential Inquiry
          </button>
        </form>
      </div>
    </div>
  </section>
</main>
`;

  return getHead('Contact Us & 24/7 Crisis Support', 'Contact SereneMind Counseling Center. 3 clinical sanctuary locations in Manhattan and Brooklyn, plus telehealth.')
    + getHeader('contact')
    + content
    + getFooter();
}

// ==========================================
// 5. PRICING.HTML (Pricing & Insurance)
// ==========================================
function buildPricing() {
  const content = `
<main class="flex-grow">
  <!-- Header -->
  <section class="py-16 bg-gradient-to-b from-teal-50/50 to-transparent dark:from-teal-950/20 dark:to-transparent text-center space-y-4">
    <span class="text-xs uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
      Transparent Clinical Pricing
    </span>
    <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
      Clear Rates & Seamless Superbill Support
    </h1>
    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
      No hidden clinic fees. Transparent pay-per-session rates with automated monthly Superbills for 60–80% out-of-network insurance reimbursement.
    </p>

    <!-- Monthly / Annual Toggle -->
    <div class="pt-4 flex items-center justify-center gap-3">
      <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Standard Per-Session</span>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" id="pricing-billing-toggle" class="sr-only peer">
        <div class="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
      </label>
      <span class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
        Care Plan Commitment <span class="bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full">Save 20%</span>
      </span>
    </div>
  </section>

  <!-- 3 Pricing Cards -->
  <section class="py-12 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Card 1: Essential Care -->
        <div class="card-lift rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-8 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Essential Care</span>
            <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white">Individual Psychotherapy</h3>
            <p class="text-xs text-slate-600 dark:text-slate-400">Structured one-on-one sessions addressing anxiety, mood, and situational stress.</p>
            
            <div class="pt-2">
              <span class="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">$</span>
              <span class="text-4xl font-heading font-extrabold text-slate-900 dark:text-white" data-monthly-price="120" data-yearly-price="96">120</span>
              <span class="text-xs text-slate-500 dark:text-slate-400 billing-cycle-label">/session</span>
            </div>

            <ul class="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 pt-2">
              <li><i class="fas fa-check text-teal-500 mr-2"></i> 50-Minute Weekly Session</li>
              <li><i class="fas fa-check text-teal-500 mr-2"></i> In-Person or Telehealth</li>
              <li><i class="fas fa-check text-teal-500 mr-2"></i> Secure Client Portal Access</li>
              <li><i class="fas fa-check text-teal-500 mr-2"></i> Automated Monthly Superbills</li>
            </ul>
          </div>

          <button type="button" class="open-appointment-modal w-full py-3 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-teal-600 hover:text-white text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors" data-service="individual">
            Select Essential Plan
          </button>
        </div>

        <!-- Card 2: Comprehensive Healing (Highlighted) -->
        <div class="card-lift rounded-3xl bg-white dark:bg-slate-900 border-2 border-teal-500 shadow-2xl p-8 relative flex flex-col justify-between space-y-6">
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-teal-600 text-white text-[10px] font-bold uppercase tracking-wider shadow">
            Most Popular
          </div>

          <div class="space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-teal-600">Comprehensive Healing</span>
            <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white">Couples or Trauma Protocol</h3>
            <p class="text-xs text-slate-600 dark:text-slate-400">Intensive therapy utilizing Gottman relationship tools or EMDR somatic trauma work.</p>
            
            <div class="pt-2">
              <span class="text-3xl font-heading font-extrabold text-teal-600">$</span>
              <span class="text-4xl font-heading font-extrabold text-teal-600" data-monthly-price="175" data-yearly-price="140">175</span>
              <span class="text-xs text-slate-500 dark:text-slate-400 billing-cycle-label">/session</span>
            </div>

            <ul class="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 pt-2">
              <li><i class="fas fa-check text-teal-500 mr-2"></i> 60-Minute Extended Sessions</li>
              <li><i class="fas fa-check text-teal-500 mr-2"></i> Lead Clinical Psychologist (Psy.D. / LMFT)</li>
              <li><i class="fas fa-check text-teal-500 mr-2"></i> EMDR Protocol & Relational Assessments</li>
              <li><i class="fas fa-check text-teal-500 mr-2"></i> Superbill Concierge Assistance</li>
              <li><i class="fas fa-check text-teal-500 mr-2"></i> Between-Session Care Messaging</li>
            </ul>
          </div>

          <button type="button" class="open-appointment-modal w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-lg shadow-teal-600/30 transition-all" data-service="couples">
            Select Comprehensive Plan
          </button>
        </div>

        <!-- Card 3: Integrative Sanctuary -->
        <div class="card-lift rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-8 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-500">Integrative Sanctuary</span>
            <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white">Psychiatric & Somatic Care</h3>
            <p class="text-xs text-slate-600 dark:text-slate-400">Collaborative therapy with board-certified M.D. psychiatric evaluations and HRV biofeedback.</p>
            
            <div class="pt-2">
              <span class="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">$</span>
              <span class="text-4xl font-heading font-extrabold text-slate-900 dark:text-white" data-monthly-price="240" data-yearly-price="192">240</span>
              <span class="text-xs text-slate-500 dark:text-slate-400 billing-cycle-label">/session</span>
            </div>

            <ul class="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 pt-2">
              <li><i class="fas fa-check text-indigo-500 mr-2"></i> 75-Minute Dual Clinician Oversight</li>
              <li><i class="fas fa-check text-indigo-500 mr-2"></i> M.D. Psychiatric Evaluation Included</li>
              <li><i class="fas fa-check text-indigo-500 mr-2"></i> Priority Scheduling (Evenings & Weekends)</li>
              <li><i class="fas fa-check text-indigo-500 mr-2"></i> Expedited Prior-Authorization Support</li>
            </ul>
          </div>

          <button type="button" class="open-appointment-modal w-full py-3 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-indigo-600 hover:text-white text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors" data-service="trauma">
            Select Integrative Plan
          </button>
        </div>

      </div>
    </div>
  </section>

  <!-- Superbill Guide Section -->
  <section class="py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <h2 class="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">How Out-of-Network Superbill Works</h2>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Most PPO health plans reimburse 60% to 80% of our session fees.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <span class="font-heading font-bold text-lg text-teal-600">Step 1</span>
          <h3 class="font-heading font-bold text-sm text-slate-900 dark:text-white">Attend Your Session</h3>
          <p class="text-xs text-slate-500">Pay your session fee upfront with HSA, FSA, credit or debit card.</p>
        </div>
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <span class="font-heading font-bold text-lg text-indigo-600">Step 2</span>
          <h3 class="font-heading font-bold text-sm text-slate-900 dark:text-white">Receive Monthly Superbill</h3>
          <p class="text-xs text-slate-500">We automatically generate your itemized clinical Superbill with CPT & diagnostic codes.</p>
        </div>
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <span class="font-heading font-bold text-lg text-emerald-600">Step 3</span>
          <h3 class="font-heading font-bold text-sm text-slate-900 dark:text-white">Receive Reimbursement</h3>
          <p class="text-xs text-slate-500">Upload to your insurance app and receive direct deposit reimbursement check.</p>
        </div>
      </div>
    </div>
  </section>
</main>
`;

  return getHead('Transparent Pricing & Insurance Superbills', 'Transparent mental health therapy pricing, insurance reimbursement guide, and care plans at SereneMind.')
    + getHeader('pricing')
    + content
    + getFooter();
}

fs.writeFileSync('home-agency.html', buildHomeAgency());
console.log('✓ home-agency.html generated successfully.');

fs.writeFileSync('about.html', buildAbout());
console.log('✓ about.html generated successfully.');

fs.writeFileSync('contact.html', buildContact());
console.log('✓ contact.html generated successfully.');

fs.writeFileSync('pricing.html', buildPricing());
console.log('✓ pricing.html generated successfully.');

module.exports = { buildHomeAgency, buildAbout, buildContact, buildPricing };
