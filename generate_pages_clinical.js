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

console.log('Generating Services, Service-Details, Therapists, and Resources pages...');

// ==========================================
// 6. SERVICES.HTML (Services Directory)
// ==========================================
function buildServices() {
  const content = `
<main class="flex-grow">
  <!-- Header -->
  <section class="py-16 bg-gradient-to-b from-teal-50/50 to-transparent dark:from-teal-950/20 dark:to-transparent text-center space-y-4">
    <span class="text-xs uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
      Specialized Care Directory
    </span>
    <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
      Evidence-Based Clinical Services
    </h1>
    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
      Browse our multidisciplinary mental health therapy tracks. Filter by specialty or search by symptoms to find your path to healing.
    </p>

    <!-- Search & Filter Controls -->
    <div class="pt-6 max-w-3xl mx-auto px-4 space-y-4">
      <!-- Search Input -->
      <div class="relative">
        <i class="fas fa-search absolute left-4 rtl:left-auto rtl:right-4 top-3.5 text-slate-400 text-sm"></i>
        <input type="text" id="services-search-input" placeholder="Search by clinical focus (e.g. anxiety, marriage, trauma, panic, OCD, teen)..." class="w-full pl-11 rtl:pl-4 rtl:pr-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white shadow-sm focus:outline-none focus:border-teal-500">
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-2">
        <button type="button" data-service-filter="all" class="px-3.5 py-1.5 rounded-xl bg-teal-600 text-white text-xs font-bold shadow-sm">All Services</button>
        <button type="button" data-service-filter="individual" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Individual</button>
        <button type="button" data-service-filter="couples" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Couples & Marriage</button>
        <button type="button" data-service-filter="teen" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Teens & Youth</button>
        <button type="button" data-service-filter="trauma" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Trauma & EMDR</button>
        <button type="button" data-service-filter="telehealth" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Telehealth Video</button>
      </div>
    </div>
  </section>

  <!-- Service Cards Grid -->
  <section class="py-12 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Card 1 -->
        <div data-service-category="individual,cbt,anxiety" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-52 overflow-hidden">
              <img src="${IMAGES.service_individual}" alt="Individual Psychotherapy consultation" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <span class="absolute top-3 left-3 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">Individual</span>
            </div>
            <div class="p-6 space-y-3">
              <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">Individual Adult Psychotherapy</h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Personalized 1-on-1 counseling targeting life transitions, emotional overwhelm, perfectionism, and personal healing with clinical warmth.
              </p>
              <div class="pt-2 flex flex-wrap gap-1.5 text-[10px]">
                <span class="px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-semibold border border-teal-200 dark:border-teal-800">50 Mins</span>
                <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">CBT & ACT</span>
                <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">In-Person & Virtual</span>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-700/60 mt-4">
            <a href="service-details.html" class="text-xs font-bold text-teal-600 hover:underline">View Protocol &rarr;</a>
            <button type="button" class="open-appointment-modal px-3 py-1.5 rounded-xl bg-teal-600 text-white text-xs font-bold" data-service="individual">Book</button>
          </div>
        </div>

        <!-- Card 2 -->
        <div data-service-category="couples,marriage,relationships" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-52 overflow-hidden">
              <img src="${IMAGES.service_couples}" alt="Couples Therapy and marriage counseling" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <span class="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">Couples</span>
            </div>
            <div class="p-6 space-y-3">
              <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">Couples & Marriage Therapy</h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                De-escalate destructive arguments, rebuild emotional safety after betrayal, and restore intimate partnership using Gottman and EFT techniques.
              </p>
              <div class="pt-2 flex flex-wrap gap-1.5 text-[10px]">
                <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200 dark:border-indigo-800">60-75 Mins</span>
                <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Gottman Method</span>
                <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">LMFT Specialists</span>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-700/60 mt-4">
            <a href="service-details.html" class="text-xs font-bold text-indigo-600 hover:underline">View Protocol &rarr;</a>
            <button type="button" class="open-appointment-modal px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold" data-service="couples">Book</button>
          </div>
        </div>

        <!-- Card 3 -->
        <div data-service-category="teen,adolescent,youth" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-52 overflow-hidden">
              <img src="${IMAGES.service_teen}" alt="Teen and adolescent therapy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <span class="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">Ages 12-19</span>
            </div>
            <div class="p-6 space-y-3">
              <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">Teen & Adolescent Support</h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Empowering adolescents through social anxiety, academic stress, identity questions, and peer pressure in a confidential, pressure-free space.
              </p>
              <div class="pt-2 flex flex-wrap gap-1.5 text-[10px]">
                <span class="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800">50 Mins</span>
                <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">DBT Skills</span>
                <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Parent Coordination</span>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-700/60 mt-4">
            <a href="service-details.html" class="text-xs font-bold text-emerald-600 hover:underline">View Protocol &rarr;</a>
            <button type="button" class="open-appointment-modal px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold" data-service="teen">Book</button>
          </div>
        </div>

        <!-- Card 4 -->
        <div data-service-category="trauma,emdr,ptsd" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-52 overflow-hidden">
              <img src="${IMAGES.service_trauma}" alt="Trauma recovery and EMDR therapy session" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <span class="absolute top-3 left-3 bg-teal-700 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">Trauma</span>
            </div>
            <div class="p-6 space-y-3">
              <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">Trauma Recovery & EMDR</h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Reprocess distressing memories, ease hypervigilance, and calm nervous system triggers safely using Eye Movement Desensitization & Reprocessing.
              </p>
              <div class="pt-2 flex flex-wrap gap-1.5 text-[10px]">
                <span class="px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-semibold border border-teal-200 dark:border-teal-800">60 Mins</span>
                <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">EMDRIA Certified</span>
                <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Somatic Resets</span>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-700/60 mt-4">
            <a href="service-details.html" class="text-xs font-bold text-teal-600 hover:underline">View Protocol &rarr;</a>
            <button type="button" class="open-appointment-modal px-3 py-1.5 rounded-xl bg-teal-600 text-white text-xs font-bold" data-service="trauma">Book</button>
          </div>
        </div>

        <!-- Card 5 -->
        <div data-service-category="individual,anxiety,depression,cbt" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-52 overflow-hidden">
              <img src="${IMAGES.service_anxiety}" alt="CBT and anxiety management consultation" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <span class="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">Anxiety & Mood</span>
            </div>
            <div class="p-6 space-y-3">
              <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">CBT & Anxiety Management</h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Dismantle panic loops, calm physical tachycardia, and rewrite catastrophic worry cycles through evidence-grounded Cognitive Behavioral Therapy.
              </p>
              <div class="pt-2 flex flex-wrap gap-1.5 text-[10px]">
                <span class="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-semibold border border-amber-200 dark:border-amber-800">50 Mins</span>
                <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">ERP Protocol</span>
                <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Psy.D. Led</span>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-700/60 mt-4">
            <a href="service-details.html" class="text-xs font-bold text-amber-600 hover:underline">View Protocol &rarr;</a>
            <button type="button" class="open-appointment-modal px-3 py-1.5 rounded-xl bg-amber-600 text-white text-xs font-bold" data-service="cbt">Book</button>
          </div>
        </div>

        <!-- Card 6 -->
        <div data-service-category="telehealth,virtual,online" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-52 overflow-hidden">
              <img src="${IMAGES.service_telehealth}" alt="Telehealth online therapy video session" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <span class="absolute top-3 left-3 bg-sky-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">Telehealth</span>
            </div>
            <div class="p-6 space-y-3">
              <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">Confidential Telehealth Video</h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect securely with our clinical psychologists from your home or office. End-to-end encrypted video portal with zero app downloads required.
              </p>
              <div class="pt-2 flex flex-wrap gap-1.5 text-[10px]">
                <span class="px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-semibold border border-sky-200 dark:border-sky-800">50 Mins</span>
                <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">256-Bit Encrypted</span>
                <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Evenings & Weekends</span>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-700/60 mt-4">
            <a href="service-details.html" class="text-xs font-bold text-sky-600 hover:underline">View Protocol &rarr;</a>
            <button type="button" class="open-appointment-modal px-3 py-1.5 rounded-xl bg-sky-600 text-white text-xs font-bold" data-service="telehealth">Book</button>
          </div>
        </div>

      </div>
    </div>
  </section>
</main>
`;

  return getHead('Clinical Therapy Services Directory', 'Comprehensive clinical mental health counseling programs for adults, couples, teens, and trauma recovery.')
    + getHeader('services')
    + content
    + getFooter();
}

// ==========================================
// 7. SERVICE-DETAILS.HTML (CBT & Anxiety Management)
// ==========================================
function buildServiceDetails() {
  const content = `
<main class="flex-grow">
  <!-- Hero Banner -->
  <section class="relative py-16 bg-slate-900 text-white overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-slate-900/95 to-slate-900/90 -z-10"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-4 max-w-3xl">
        <a href="services.html" class="inline-flex items-center gap-2 text-xs font-bold text-teal-400 hover:underline">
          <i class="fas fa-arrow-left"></i> Back to All Services
        </a>
        <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Cognitive Behavioral Therapy (CBT) & Anxiety Management
        </h1>
        <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
          An evidence-based, goal-oriented protocol designed to dismantle catastrophic thinking, calm autonomic nervous system hyper-arousal, and restore everyday calm.
        </p>
        <div class="flex flex-wrap gap-3 pt-2 text-xs">
          <span class="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-300"><i class="far fa-clock mr-1"></i> 50-Min Weekly Sessions</span>
          <span class="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-indigo-300"><i class="fas fa-certificate mr-1"></i> APA Gold Standard</span>
          <span class="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-300"><i class="fas fa-receipt mr-1"></i> Superbill Eligible</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Deep Dive Content & Sidebar -->
  <section class="py-16 bg-white dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left 8 Cols: Clinical Protocol & Expectations -->
        <div class="lg:col-span-8 space-y-10">
          
          <!-- Image -->
          <div class="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
            <img src="${IMAGES.service_detail_hero}" alt="CBT clinical protocol illustration and patient consultation" class="w-full h-80 object-cover">
          </div>

          <!-- Overview -->
          <div class="space-y-4">
            <h2 class="font-heading text-2xl font-bold text-slate-900 dark:text-white">How Cognitive Behavioral Therapy Works</h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Cognitive Behavioral Therapy operates on the scientific premise that our thoughts, physiological sensations, and behavioral patterns are deeply interconnected. When experiencing chronic anxiety or panic, our brain forms cognitive distortions—automatic catastrophe scripts such as <em>"I cannot handle this,"</em> or <em>"Something terrible will happen."</em>
            </p>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              In our structured CBT sessions, your licensed psychologist works alongside you as a collaborative investigative partner. We systematically test and reframe these automatic thoughts, replacing them with grounded, resilient internal narratives.
            </p>
          </div>

          <!-- 4-Phase Protocol Breakdown -->
          <div class="space-y-6">
            <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white">The 4-Phase Clinical Protocol</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="text-xs font-bold text-teal-600">Phase 1 &middot; Weeks 1–2</span>
                <h4 class="font-heading font-bold text-sm text-slate-900 dark:text-white">Cognitive Mapping</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">Identifying your unique anxiety triggers, somatic signals, and safety behaviors.</p>
              </div>

              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="text-xs font-bold text-indigo-600">Phase 2 &middot; Weeks 3–6</span>
                <h4 class="font-heading font-bold text-sm text-slate-900 dark:text-white">Somatic Down-Regulation</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">Mastering box breathing, progressive muscle relaxation, and vagal grounding to halt panic.</p>
              </div>

              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="text-xs font-bold text-emerald-600">Phase 3 &middot; Weeks 7–10</span>
                <h4 class="font-heading font-bold text-sm text-slate-900 dark:text-white">Cognitive Restructuring</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">Utilizing thought records and behavioral experiments to dissolve catastrophic thinking loops.</p>
              </div>

              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="text-xs font-bold text-amber-600">Phase 4 &middot; Weeks 11–14</span>
                <h4 class="font-heading font-bold text-sm text-slate-900 dark:text-white">Relapse Prevention</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">Constructing your long-term psychological maintenance blueprint to safeguard permanent recovery.</p>
              </div>
            </div>
          </div>

          <!-- Session 1 Expectations -->
          <div class="p-6 rounded-3xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 space-y-3">
            <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fas fa-clipboard-list text-teal-600"></i> What to Expect in Your First Session
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Your initial 50-minute consultation is gentle, conversational, and pressure-free. We will discuss your current symptoms, what coping mechanisms have or haven't worked in the past, and outline clear clinical benchmarks so you always know how your progress is measured.
            </p>
          </div>

          <!-- FAQ Accordion -->
          <div class="space-y-4">
            <h3 class="font-heading text-xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h3>
            <div class="accordion-group space-y-3">
              <div class="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                <button type="button" class="accordion-header w-full p-4 text-left rtl:text-right font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex justify-between items-center bg-slate-50 dark:bg-slate-900">
                  <span>How many sessions does CBT typically require?</span>
                  <i class="fas fa-chevron-down accordion-icon text-xs transition-transform duration-200"></i>
                </button>
                <div class="accordion-content p-4 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 hidden leading-relaxed">
                  CBT is structured and time-limited. Most clients report significant relief within 8 to 14 weekly sessions, while chronic conditions like OCD or complex anxiety may benefit from 16 to 20 sessions.
                </div>
              </div>

              <div class="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                <button type="button" class="accordion-header w-full p-4 text-left rtl:text-right font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex justify-between items-center bg-slate-50 dark:bg-slate-900">
                  <span>Can CBT be conducted effectively over telehealth video?</span>
                  <i class="fas fa-chevron-down accordion-icon text-xs transition-transform duration-200"></i>
                </button>
                <div class="accordion-content p-4 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 hidden leading-relaxed">
                  Yes. Extensive clinical trials by the American Psychological Association confirm that video-based CBT yields identical symptom reduction rates to in-person consultations.
                </div>
              </div>

              <div class="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                <button type="button" class="accordion-header w-full p-4 text-left rtl:text-right font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex justify-between items-center bg-slate-50 dark:bg-slate-900">
                  <span>Do you provide insurance superbills for reimbursement?</span>
                  <i class="fas fa-chevron-down accordion-icon text-xs transition-transform duration-200"></i>
                </button>
                <div class="accordion-content p-4 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 hidden leading-relaxed">
                  Yes. We generate itemized Superbills on the 1st of every month with full CPT and diagnostic codes. PPO insurance plans typically reimburse 60% to 80% of our out-of-network rates.
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Right 4 Cols: Sticky Booking Card & Lead Clinician -->
        <div class="lg:col-span-4 space-y-6">
          <!-- Sticky Booking Card -->
          <div class="sticky top-24 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-wider text-teal-600">Standard Intake Rate</span>
              <div class="flex items-baseline gap-1 mt-1">
                <span class="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">$175</span>
                <span class="text-xs text-slate-500">/ 50-minute session</span>
              </div>
              <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">HSA & FSA cards accepted. Superbill provided.</p>
            </div>

            <!-- Lead Doctor Box -->
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
              <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins" class="w-12 h-12 rounded-xl object-cover">
              <div>
                <p class="text-xs font-bold text-slate-900 dark:text-white">Dr. Sarah Jenkins, Psy.D.</p>
                <p class="text-[10px] text-teal-600 dark:text-teal-400">Lead Psychologist & CBT Director</p>
              </div>
            </div>

            <button type="button" class="open-appointment-modal w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-lg shadow-teal-600/30 transition-all" data-service="cbt" data-therapist="sarah">
              Book Intake Consultation
            </button>

            <div class="space-y-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
              <div class="flex items-center justify-between">
                <span>Format</span>
                <span class="font-bold text-slate-900 dark:text-white">In-Person & Telehealth</span>
              </div>
              <div class="flex items-center justify-between">
                <span>Next Availability</span>
                <span class="font-bold text-teal-600">Within 48 Hours</span>
              </div>
              <div class="flex items-center justify-between">
                <span>Location</span>
                <span class="font-bold text-slate-900 dark:text-white">Manhattan / Video</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</main>
`;

  return getHead('CBT & Anxiety Management Protocol', 'Cognitive Behavioral Therapy (CBT) and anxiety protocol at SereneMind Counseling Center.')
    + getHeader('services')
    + content
    + getFooter();
}

// ==========================================
// 8. THERAPISTS.HTML (Clinicians Directory)
// ==========================================
function buildTherapists() {
  const content = `
<main class="flex-grow">
  <!-- Header -->
  <section class="py-16 bg-gradient-to-b from-teal-50/50 to-transparent dark:from-teal-950/20 dark:to-transparent text-center space-y-4">
    <span class="text-xs uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
      Our Licensed Clinicians
    </span>
    <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
      Meet Our Board-Certified Specialists
    </h1>
    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
      Every therapist at SereneMind is licensed, trauma-informed, and committed to judgment-free care. Filter by specialty or search by name.
    </p>

    <!-- Search & Filters -->
    <div class="pt-6 max-w-3xl mx-auto px-4 space-y-4">
      <div class="relative">
        <i class="fas fa-search absolute left-4 rtl:left-auto rtl:right-4 top-3.5 text-slate-400 text-sm"></i>
        <input type="text" id="therapists-search-input" placeholder="Search by name, credential, or specialty (e.g. Jenkins, Gottman, EMDR, ADHD)..." class="w-full pl-11 rtl:pl-4 rtl:pr-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white shadow-sm focus:outline-none focus:border-teal-500">
      </div>

      <div class="flex flex-wrap items-center justify-center gap-2">
        <button type="button" data-therapist-filter="all" class="px-3.5 py-1.5 rounded-xl bg-teal-600 text-white text-xs font-bold shadow-sm">All Clinicians</button>
        <button type="button" data-therapist-filter="psychologist" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Psychologists (Psy.D.)</button>
        <button type="button" data-therapist-filter="couples" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Marriage & Family (LMFT)</button>
        <button type="button" data-therapist-filter="trauma" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Trauma & EMDR (LCSW)</button>
        <button type="button" data-therapist-filter="psychiatrist" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Psychiatrists (M.D.)</button>
      </div>
    </div>
  </section>

  <!-- Therapists Grid (6 Unique Clinicians) -->
  <section class="py-12 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Clinician 1 -->
        <div data-therapist-specialty="psychologist,cbt,anxiety" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between p-6">
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins" class="w-20 h-20 rounded-2xl object-cover border-2 border-teal-500 shadow">
              <div>
                <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white">Dr. Sarah Jenkins</h3>
                <p class="text-xs font-bold text-teal-600 dark:text-teal-400">Psy.D. Clinical Psychologist</p>
                <p class="text-[11px] text-slate-500">14 Years Clinical Experience</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Harvard trained. Specializes in Adult Anxiety, Panic, OCD, Exposure & Response Prevention (ERP), and Cognitive Behavioral Therapy.
            </p>
            <div class="flex flex-wrap gap-1.5 text-[10px]">
              <span class="px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-semibold">CBT Director</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Adult Anxiety</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Manhattan & Video</span>
            </div>
          </div>
          <div class="pt-4 border-t border-slate-200 dark:border-slate-700/60 mt-4 flex items-center justify-between">
            <div>
              <span class="text-xs font-bold text-slate-900 dark:text-white">$175</span>
              <span class="text-[10px] text-slate-500">/session</span>
            </div>
            <div class="flex gap-2">
              <a href="therapist-sarah-jenkins.html" class="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-xs font-bold hover:bg-slate-300 transition-colors">Bio</a>
              <button type="button" class="open-appointment-modal px-3.5 py-1.5 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition-colors" data-therapist="sarah">Book</button>
            </div>
          </div>
        </div>

        <!-- Clinician 2 -->
        <div data-therapist-specialty="couples,marriage,family" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between p-6">
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <img src="${IMAGES.therapist_marcus}" alt="Dr. Marcus Vance" class="w-20 h-20 rounded-2xl object-cover border-2 border-indigo-500 shadow">
              <div>
                <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white">Dr. Marcus Vance</h3>
                <p class="text-xs font-bold text-indigo-600 dark:text-indigo-400">LMFT Marriage & Family</p>
                <p class="text-[11px] text-slate-500">12 Years Clinical Experience</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Gottman Certified Level 3 practitioner. Specializes in communication breakdown, infidelity recovery, high-conflict couples, and premarital counseling.
            </p>
            <div class="flex flex-wrap gap-1.5 text-[10px]">
              <span class="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold">Gottman Certified</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Couples Intensive</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Brooklyn & Video</span>
            </div>
          </div>
          <div class="pt-4 border-t border-slate-200 dark:border-slate-700/60 mt-4 flex items-center justify-between">
            <div>
              <span class="text-xs font-bold text-slate-900 dark:text-white">$190</span>
              <span class="text-[10px] text-slate-500">/session</span>
            </div>
            <div class="flex gap-2">
              <a href="therapist-marcus-vance.html" class="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-xs font-bold hover:bg-slate-300 transition-colors">Bio</a>
              <button type="button" class="open-appointment-modal px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors" data-therapist="marcus">Book</button>
            </div>
          </div>
        </div>

        <!-- Clinician 3 -->
        <div data-therapist-specialty="trauma,emdr,ptsd" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between p-6">
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <img src="${IMAGES.therapist_elena}" alt="Elena Rostova" class="w-20 h-20 rounded-2xl object-cover border-2 border-teal-500 shadow">
              <div>
                <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white">Elena Rostova</h3>
                <p class="text-xs font-bold text-teal-600 dark:text-teal-400">LCSW, CCTP Trauma Specialist</p>
                <p class="text-[11px] text-slate-500">10 Years Clinical Experience</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Certified EMDRIA practitioner. Expertise in complex PTSD, childhood attachment wounds, grief, and somatic experiencing nervous system regulation.
            </p>
            <div class="flex flex-wrap gap-1.5 text-[10px]">
              <span class="px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-semibold">EMDR Certified</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Trauma / PTSD</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Manhattan & Video</span>
            </div>
          </div>
          <div class="pt-4 border-t border-slate-200 dark:border-slate-700/60 mt-4 flex items-center justify-between">
            <div>
              <span class="text-xs font-bold text-slate-900 dark:text-white">$165</span>
              <span class="text-[10px] text-slate-500">/session</span>
            </div>
            <div class="flex gap-2">
              <a href="therapist-elena-rostova.html" class="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-xs font-bold hover:bg-slate-300 transition-colors">Bio</a>
              <button type="button" class="open-appointment-modal px-3.5 py-1.5 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition-colors" data-therapist="elena">Book</button>
            </div>
          </div>
        </div>

        <!-- Clinician 4 -->
        <div data-therapist-specialty="psychiatrist,teen,evaluations" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between p-6">
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <img src="${IMAGES.therapist_david}" alt="Dr. David Kim" class="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-500 shadow">
              <div>
                <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white">Dr. David Kim</h3>
                <p class="text-xs font-bold text-emerald-600 dark:text-emerald-400">M.D. Child & Youth Psychiatrist</p>
                <p class="text-[11px] text-slate-500">15 Years Clinical Experience</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Columbia University trained board-certified psychiatrist. Specializes in adolescent mood disorders, ADHD diagnostics, and conservative psychopharmacology.
            </p>
            <div class="flex flex-wrap gap-1.5 text-[10px]">
              <span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold">M.D. Psychiatrist</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">ADHD / Youth</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Manhattan Suite</span>
            </div>
          </div>
          <div class="pt-4 border-t border-slate-200 dark:border-slate-700/60 mt-4 flex items-center justify-between">
            <div>
              <span class="text-xs font-bold text-slate-900 dark:text-white">$240</span>
              <span class="text-[10px] text-slate-500">/eval</span>
            </div>
            <div class="flex gap-2">
              <a href="therapist-david-kim.html" class="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-xs font-bold hover:bg-slate-300 transition-colors">Bio</a>
              <button type="button" class="open-appointment-modal px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors" data-therapist="david">Book</button>
            </div>
          </div>
        </div>

        <!-- Clinician 5 -->
        <div data-therapist-specialty="psychologist,burnout,neuropsychology" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between p-6">
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <img src="${IMAGES.therapist_maya}" alt="Dr. Maya Patel" class="w-20 h-20 rounded-2xl object-cover border-2 border-teal-500 shadow">
              <div>
                <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white">Dr. Maya Patel</h3>
                <p class="text-xs font-bold text-teal-600 dark:text-teal-400">Ph.D. Neuropsychology</p>
                <p class="text-[11px] text-slate-500">11 Years Clinical Experience</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Focuses on high-performance executive burnout, chronic stress resilience, biometric HRV biofeedback, and somatic polyvagal restoration.
            </p>
            <div class="flex flex-wrap gap-1.5 text-[10px]">
              <span class="px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-semibold">Neuropsychology</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Executive Stress</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Telehealth Nationwide</span>
            </div>
          </div>
          <div class="pt-4 border-t border-slate-200 dark:border-slate-700/60 mt-4 flex items-center justify-between">
            <div>
              <span class="text-xs font-bold text-slate-900 dark:text-white">$180</span>
              <span class="text-[10px] text-slate-500">/session</span>
            </div>
            <div class="flex gap-2">
              <button type="button" class="open-appointment-modal px-3.5 py-1.5 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition-colors" data-therapist="maya">Book</button>
            </div>
          </div>
        </div>

        <!-- Clinician 6 -->
        <div data-therapist-specialty="psychologist,mindfulness,cbt" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between p-6">
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <img src="${IMAGES.therapist_james}" alt="James Thornton" class="w-20 h-20 rounded-2xl object-cover border-2 border-indigo-500 shadow">
              <div>
                <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white">James Thornton</h3>
                <p class="text-xs font-bold text-indigo-600 dark:text-indigo-400">LPC, Mindfulness Counselor</p>
                <p class="text-[11px] text-slate-500">9 Years Clinical Experience</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Specializes in Mindfulness-Based Cognitive Therapy (MBCT), young adult identity, depression recovery, and existential meaning.
            </p>
            <div class="flex flex-wrap gap-1.5 text-[10px]">
              <span class="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold">MBCT Protocol</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Young Adults</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">Brooklyn & Video</span>
            </div>
          </div>
          <div class="pt-4 border-t border-slate-200 dark:border-slate-700/60 mt-4 flex items-center justify-between">
            <div>
              <span class="text-xs font-bold text-slate-900 dark:text-white">$150</span>
              <span class="text-[10px] text-slate-500">/session</span>
            </div>
            <div class="flex gap-2">
              <button type="button" class="open-appointment-modal px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors" data-therapist="james">Book</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</main>
`;

  return getHead('Licensed Clinical Psychologists & Counselors', 'Meet our board-certified clinical psychologists, marriage therapists, and trauma specialists.')
    + getHeader('therapists')
    + content
    + getFooter();
}

// ==========================================
// 9. RESOURCES.HTML (Self-Help & Resources Suite)
// ==========================================
function buildResources() {
  const content = `
<main class="flex-grow">
  <!-- Header -->
  <section class="py-16 bg-gradient-to-b from-teal-50/50 to-transparent dark:from-teal-950/20 dark:to-transparent text-center space-y-4">
    <span class="text-xs uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
      Self-Help & Clinical Sanctuary
    </span>
    <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
      Empowering Tools for Emotional Wellbeing
    </h1>
    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
      Free evidence-based somatic tools, clinical screening assessments, and downloadable CBT worksheets to support your journey.
    </p>
  </section>

  <!-- Interactive Box Breathing Suite -->
  <section class="py-12 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800/80">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <div class="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold">
          <i class="fas fa-lungs"></i> Clinical Vagus Nerve Pacing
        </div>
        <h2 class="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          4-4-4-4 Box Breathing Visualizer
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
          Follow the expanding circle: Inhale for 4 seconds, hold gently for 4, exhale slowly for 4, and hold empty for 4. Four complete cycles signal safe physiological calm to the brain.
        </p>

        <!-- Dynamic Animated Circle -->
        <div class="py-8 flex justify-center items-center">
          <div id="breathing-circle" class="w-52 h-52 sm:w-64 sm:h-64 rounded-full border-4 border-teal-500/60 shadow-2xl flex flex-col items-center justify-center transition-all duration-[4000ms] ease-in-out scale-100 bg-teal-500/20">
            <span id="breathing-phase-text" class="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white text-center px-4">Ready to Begin</span>
            <span id="breathing-timer-text" class="font-mono text-3xl sm:text-4xl font-black text-teal-600 dark:text-teal-400 mt-1">4s</span>
            <span id="breathing-sub-prompt" class="text-xs text-slate-500 dark:text-slate-400 text-center px-4 mt-1">Click Start Below</span>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <button type="button" id="breathing-toggle-btn" class="px-8 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-lg shadow-teal-600/30 transition-all flex items-center gap-2">
            <i class="fas fa-play text-xs"></i> Start Breathing Session
          </button>
          <span class="text-xs text-slate-500 dark:text-slate-400">Completed: <strong id="breathing-cycle-count" class="text-teal-600 dark:text-teal-400 font-bold">0</strong> cycles</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Downloadable Clinical CBT Worksheets -->
  <section class="py-16 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <span class="text-xs uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400">Self-Help Downloads</span>
        <h2 class="font-heading text-3xl font-bold text-slate-900 dark:text-white">Clinical Worksheets & Toolkits</h2>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Printable, therapist-approved guides to practice at home between appointments.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center text-lg">
              <i class="fas fa-file-pdf"></i>
            </div>
            <h3 class="font-heading font-bold text-sm text-slate-900 dark:text-white">CBT Thought Record</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              A 5-column exercise to identify cognitive distortions, question automatic thoughts, and write rational alternatives.
            </p>
          </div>
          <button type="button" class="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-600 hover:text-white text-xs font-bold transition-colors" onclick="window.showToast('Downloaded CBT Thought Record (PDF)', 'success')">
            <i class="fas fa-download mr-1.5"></i> Download PDF
          </button>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg">
              <i class="fas fa-file-pdf"></i>
            </div>
            <h3 class="font-heading font-bold text-sm text-slate-900 dark:text-white">5-4-3-2-1 Sensory Grounding</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Quick reference somatic sensory protocol to de-escalate panic attacks and physical dissociation.
            </p>
          </div>
          <button type="button" class="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-xs font-bold transition-colors" onclick="window.showToast('Downloaded 5-4-3-2-1 Grounding Sheet (PDF)', 'success')">
            <i class="fas fa-download mr-1.5"></i> Download PDF
          </button>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
              <i class="fas fa-file-pdf"></i>
            </div>
            <h3 class="font-heading font-bold text-sm text-slate-900 dark:text-white">CBT-I Sleep Hygiene Protocol</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Stimulus control checklist and sleep-restriction guidelines to rebuild natural circadian pressure.
            </p>
          </div>
          <button type="button" class="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-colors" onclick="window.showToast('Downloaded Sleep Hygiene Protocol (PDF)', 'success')">
            <i class="fas fa-download mr-1.5"></i> Download PDF
          </button>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-lg">
              <i class="fas fa-file-pdf"></i>
            </div>
            <h3 class="font-heading font-bold text-sm text-slate-900 dark:text-white">Non-Violent Dialogue Sheet</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              4-step relational script: Observation, Feeling, Core Need, and Actionable Request for couples.
            </p>
          </div>
          <button type="button" class="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white text-xs font-bold transition-colors" onclick="window.showToast('Downloaded Non-Violent Dialogue Sheet (PDF)', 'success')">
            <i class="fas fa-download mr-1.5"></i> Download PDF
          </button>
        </div>

      </div>
    </div>
  </section>

  <!-- 24/7 Crisis Helplines Emergency List -->
  <section class="py-12 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-6 rounded-3xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 space-y-4">
        <div class="flex items-center gap-3">
          <i class="fas fa-phone-volume text-rose-600 text-xl"></i>
          <div>
            <h3 class="font-heading font-bold text-base text-rose-900 dark:text-rose-200">24/7 Emergency & Crisis Lifelines</h3>
            <p class="text-xs text-rose-700 dark:text-rose-300">If you or a loved one is in immediate physical danger, call 911 or visit the nearest emergency room.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800">
            <p class="font-bold text-slate-900 dark:text-white">988 Lifeline</p>
            <p class="text-[11px] text-slate-500">Free, confidential call or text 24/7</p>
            <a href="tel:988" class="text-rose-600 font-bold hover:underline mt-1 inline-block">Dial 988</a>
          </div>
          <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800">
            <p class="font-bold text-slate-900 dark:text-white">Crisis Text Line</p>
            <p class="text-[11px] text-slate-500">Text HOME to 741741</p>
            <a href="sms:741741" class="text-rose-600 font-bold hover:underline mt-1 inline-block">Text Now</a>
          </div>
          <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800">
            <p class="font-bold text-slate-900 dark:text-white">The Trevor Project</p>
            <p class="text-[11px] text-slate-500">LGBTQ Youth Crisis Line</p>
            <a href="tel:18664887386" class="text-rose-600 font-bold hover:underline mt-1 inline-block">1-866-488-7386</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
`;

  return getHead('Resources & Self-Help Suite', 'Free mental health tools, 4-4-4-4 box breathing visualizer, CBT worksheets, and 24/7 crisis contacts.')
    + getHeader('resources')
    + content
    + getFooter();
}

// Generate files
fs.writeFileSync('services.html', buildServices());
console.log('✓ services.html generated successfully.');
fs.writeFileSync('programs.html', buildServices()); // Alias mirror

fs.writeFileSync('service-details.html', buildServiceDetails());
console.log('✓ service-details.html generated successfully.');
fs.writeFileSync('program-details.html', buildServiceDetails()); // Alias mirror

fs.writeFileSync('therapists.html', buildTherapists());
console.log('✓ therapists.html generated successfully.');
fs.writeFileSync('coaches.html', buildTherapists()); // Alias mirror

fs.writeFileSync('resources.html', buildResources());
console.log('✓ resources.html generated successfully.');
fs.writeFileSync('facilities.html', buildResources()); // Alias mirror

module.exports = { buildServices, buildServiceDetails, buildTherapists, buildResources };
