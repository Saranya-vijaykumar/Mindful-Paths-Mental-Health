const fs = require('fs');
const { getHead, getHeader, getFooter, BRAND_NAME, PHONE, CRISIS_PHONE, EMAIL, ADDRESS } = require('./build_site.js');

console.log('Generating about.html, programs.html, and program-details.html...');

// ==========================================
// 1. ABOUT.HTML
// ==========================================
const aboutHtml = `${getHead('About Us — Our Philosophy, Team & Sanctuary', 'Learn about SereneMind, our 15+ year journey, multidisciplinary board-certified clinical psychologists, and compassionate, judgment-free mental healthcare.')}
${getHeader('about')}

<main class="flex-grow">
  
  <!-- Breadcrumb & Header -->
  <section class="py-12 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
        <a href="index.html" class="hover:text-teal-600">Home</a>
        <span>/</span>
        <span class="text-teal-600 dark:text-teal-400">About Us</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white">
        A Sanctuary for Healing, Resilience & Inner Peace
      </h1>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl mt-3 leading-relaxed">
        Founded in 2011, SereneMind provides compassionate, evidence-based psychotherapy, psychological assessments, and holistic wellness support in a warm, confidential sanctuary setting.
      </p>
    </div>
  </section>

  <!-- Mission & Vision Section with Real Imagery -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-6 space-y-6">
          <span class="trust-badge"><i class="fas fa-compass"></i> Our Core Philosophy</span>
          <h2 class="text-3xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white leading-tight">
            Therapy Rooted in Empathy, Dignity, and Science
          </h2>
          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            We believe that mental healthcare should never feel sterile, intimidating, or clinical. Healing occurs when scientific rigor meets genuine human connection. Every client who walks through our doors is met with unconditional positive regard, cultural humility, and clinical excellence.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <div class="text-teal-600 dark:text-teal-400 font-bold text-lg mb-1 flex items-center gap-2">
                <i class="fas fa-heart"></i> Judgment-Free Space
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400">A safe haven where every identity, emotion, and story is validated with warmth.</p>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <div class="text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-1 flex items-center gap-2">
                <i class="fas fa-microscope"></i> Evidence-Based
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400">Protocols grounded in CBT, EMDR, Gottman Method, and neuro-affective research.</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-[4/3] img-zoom-container">
            <img src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1000&q=80" alt="Compassionate Psychotherapist Listening to Client" class="w-full h-full object-cover">
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 15-Year Timeline -->
  <section class="py-20 bg-slate-100/60 dark:bg-slate-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span class="trust-badge"><i class="fas fa-history"></i> Our Journey</span>
        <h2 class="text-3xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white">15 Years of Compassionate Impact</h2>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          From a two-room practice to a nationally recognized multidisciplinary mental wellness center.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md card-lift">
          <span class="text-2xl font-black text-teal-600 dark:text-teal-400 font-heading">2011</span>
          <h3 class="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">Center Founded</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Dr. Sarah Jenkins opens the initial counseling studio focusing on adult anxiety and trauma recovery.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md card-lift">
          <span class="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-heading">2016</span>
          <h3 class="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">Couples & Family Wing</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Expansion into systemic marriage and adolescent therapies with Gottman-certified clinicians.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md card-lift">
          <span class="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-heading">2020</span>
          <h3 class="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">Telehealth Nationwide</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Launched fully encrypted, accessible virtual telehealth care across 12 states during the global crisis.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md card-lift">
          <span class="text-2xl font-black text-amber-600 dark:text-amber-400 font-heading">2026</span>
          <h3 class="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">Integrative Sanctuary</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Over 40 licensed providers, dedicated meditation suites, and 15,000+ completed client transformations.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Sanctuary Facility Tour -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span class="trust-badge"><i class="fas fa-couch"></i> Designed for Comfort</span>
        <h2 class="text-3xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white">Our Sanctuary Environment</h2>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          Step inside our acoustic soundproof therapy rooms, soothing waiting lounges, and dedicated mindfulness suites.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift">
          <div class="h-56 overflow-hidden relative img-zoom-container">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Private Soundproof Consultation Suite" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white mb-1">Private Soundproof Consultation Suites</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Engineered with high-grade acoustic insulation, natural daylight, ergonomic armchairs, and calming flora.</p>
          </div>
        </div>

        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift">
          <div class="h-56 overflow-hidden relative img-zoom-container">
            <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80" alt="Mindfulness Meditation & Breathwork Lounge" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white mb-1">Mindfulness & Breathwork Lounge</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">A serene quiet space equipped with guided audio headphones, zafu cushions, and biofeedback tools.</p>
          </div>
        </div>

        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift">
          <div class="h-56 overflow-hidden relative img-zoom-container">
            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80" alt="Youth Expressive & Play Therapy Room" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white mb-1">Youth Expressive Art & Play Room</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Dedicated creative sandbox and expressive art materials allowing children to externalize emotion safely.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Accreditations & Board Leadership -->
  <section class="py-20 bg-slate-100/60 dark:bg-slate-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span class="trust-badge mb-4"><i class="fas fa-award"></i> Clinical Governance</span>
      <h2 class="text-3xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white mb-12">Accredited by National Clinical Boards</h2>
      
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col items-center justify-center">
          <i class="fas fa-shield-alt text-3xl text-teal-600 mb-2"></i>
          <span class="text-xs font-bold text-slate-800 dark:text-slate-200">HIPAA Security Standard</span>
        </div>
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col items-center justify-center">
          <i class="fas fa-graduation-cap text-3xl text-indigo-600 mb-2"></i>
          <span class="text-xs font-bold text-slate-800 dark:text-slate-200">APA Clinical Affiliate</span>
        </div>
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col items-center justify-center">
          <i class="fas fa-certificate text-3xl text-emerald-600 mb-2"></i>
          <span class="text-xs font-bold text-slate-800 dark:text-slate-200">NBCC Board Certified</span>
        </div>
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col items-center justify-center">
          <i class="fas fa-eye text-3xl text-amber-600 mb-2"></i>
          <span class="text-xs font-bold text-slate-800 dark:text-slate-200">EMDRIA Approved Protocols</span>
        </div>
      </div>
    </div>
  </section>

</main>

${getFooter()}
`;

fs.writeFileSync('about.html', aboutHtml);
console.log('Successfully wrote about.html');


// ==========================================
// 2. PROGRAMS.HTML / SERVICES.HTML
// ==========================================
const programsHtml = `${getHead('Services & Specialized Therapy Programs', 'Explore our comprehensive mental health counseling services. Individual therapy, couples counseling, teen support, trauma recovery, and online telehealth.')}
${getHeader('services')}

<main class="flex-grow">
  
  <!-- Breadcrumb & Header -->
  <section class="py-12 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
        <a href="index.html" class="hover:text-teal-600">Home</a>
        <span>/</span>
        <span class="text-teal-600 dark:text-teal-400">Counseling Services</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white">
        Evidence-Based Therapy & Counseling Services
      </h1>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl mt-3 leading-relaxed">
        Personalized clinical roadmaps designed to help you navigate life's challenges, restore emotional balance, and achieve sustainable mental well-being.
      </p>
    </div>
  </section>

  <!-- Interactive Filter & Live Search Bar -->
  <section class="py-8 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 sticky top-[73px] z-30 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      
      <!-- Category Filter Buttons -->
      <div class="flex flex-wrap items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
        <button type="button" class="service-filter-btn filter-btn active px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-teal-600 text-white" data-filter="all">All Services</button>
        <button type="button" class="service-filter-btn filter-btn px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300" data-filter="individual">Individual</button>
        <button type="button" class="service-filter-btn filter-btn px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300" data-filter="couples">Couples</button>
        <button type="button" class="service-filter-btn filter-btn px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300" data-filter="youth">Youth & Teens</button>
        <button type="button" class="service-filter-btn filter-btn px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300" data-filter="trauma">Trauma & EMDR</button>
        <button type="button" class="service-filter-btn filter-btn px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300" data-filter="telehealth">Telehealth</button>
      </div>

      <!-- Live Search Input -->
      <div class="relative w-full md:w-72">
        <i class="fas fa-search absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
        <input type="text" id="service-search-input" placeholder="Search services (e.g. CBT, anxiety)..." class="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500">
      </div>

    </div>
  </section>

  <!-- Services Grid -->
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div id="services-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Service 1 -->
        <div class="service-item bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between" data-category="individual">
          <div>
            <div class="h-52 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=800&q=80" alt="Individual Psychotherapy" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Individual Therapy</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Adult Psychotherapy & CBT</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Structured Cognitive Behavioral Therapy and psychodynamic exploration for depression, mood shifts, and personal growth.
              </p>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div><i class="fas fa-check text-teal-600 mr-1.5"></i> 50-Minute Clinical Sessions</div>
                <div><i class="fas fa-check text-teal-600 mr-1.5"></i> Personalized Coping Worksheets</div>
                <div><i class="fas fa-check text-teal-600 mr-1.5"></i> Superbill / Insurance Eligible</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$120 / session</span>
            <a href="program-details.html" class="px-4 py-2 rounded-xl bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 font-bold text-xs hover:bg-teal-600 hover:text-white transition-colors">View Details</a>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="service-item bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between" data-category="couples">
          <div>
            <div class="h-52 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80" alt="Couples & Marriage Therapy" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Couples Care</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Couples & Marriage Therapy</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Gottman-informed partnership sessions focusing on conflict de-escalation, emotional safety, and shared life goals.
              </p>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div><i class="fas fa-check text-indigo-600 mr-1.5"></i> Gottman Relationship Assessment</div>
                <div><i class="fas fa-check text-indigo-600 mr-1.5"></i> Conflict Repair Protocols</div>
                <div><i class="fas fa-check text-indigo-600 mr-1.5"></i> 60-75 Minute Sessions</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$160 / session</span>
            <a href="program-details.html" class="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 font-bold text-xs hover:bg-indigo-600 hover:text-white transition-colors">View Details</a>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="service-item bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between" data-category="youth">
          <div>
            <div class="h-52 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" alt="Teen & Adolescent Therapy" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Youth & Teens</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Teen & Adolescent Support</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Compassionate youth counseling addressing school anxiety, identity, peer pressure, and emotion regulation.
              </p>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div><i class="fas fa-check text-amber-600 mr-1.5"></i> Youth Specialist Counselors</div>
                <div><i class="fas fa-check text-amber-600 mr-1.5"></i> Creative Expressive Techniques</div>
                <div><i class="fas fa-check text-amber-600 mr-1.5"></i> Parent Check-ins Included</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$135 / session</span>
            <a href="program-details.html" class="px-4 py-2 rounded-xl bg-amber-50 dark:bg-slate-800 text-amber-700 dark:text-amber-300 font-bold text-xs hover:bg-amber-600 hover:text-white transition-colors">View Details</a>
          </div>
        </div>

        <!-- Service 4 -->
        <div class="service-item bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between" data-category="trauma">
          <div>
            <div class="h-52 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80" alt="Trauma & EMDR Recovery" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Trauma & PTSD</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Trauma & EMDR Recovery</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                EMDRIA-certified protocols to desensitize traumatic memories, soothe the amygdala, and resolve PTSD triggers.
              </p>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div><i class="fas fa-check text-emerald-600 mr-1.5"></i> Bilateral Stimulation Protocols</div>
                <div><i class="fas fa-check text-emerald-600 mr-1.5"></i> Somatic Body Grounding</div>
                <div><i class="fas fa-check text-emerald-600 mr-1.5"></i> Complex Trauma Certified</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$175 / session</span>
            <a href="program-details.html" class="px-4 py-2 rounded-xl bg-emerald-50 dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 font-bold text-xs hover:bg-emerald-600 hover:text-white transition-colors">View Details</a>
          </div>
        </div>

        <!-- Service 5 -->
        <div class="service-item bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between" data-category="individual">
          <div>
            <div class="h-52 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80" alt="Anxiety & Panic Treatment" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Anxiety & Stress</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Anxiety & Panic Management</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Targeted exposure response prevention (ERP), autonomic nervous regulation, and cognitive restructuring.
              </p>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div><i class="fas fa-check text-teal-600 mr-1.5"></i> Panic Attack Interrupter Drills</div>
                <div><i class="fas fa-check text-teal-600 mr-1.5"></i> Biofeedback Heart-Rate Variability</div>
                <div><i class="fas fa-check text-teal-600 mr-1.5"></i> Daily Anxiety Log Apps</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$125 / session</span>
            <a href="program-details.html" class="px-4 py-2 rounded-xl bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 font-bold text-xs hover:bg-teal-600 hover:text-white transition-colors">View Details</a>
          </div>
        </div>

        <!-- Service 6 -->
        <div class="service-item bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between" data-category="telehealth">
          <div>
            <div class="h-52 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=800&q=80" alt="Telehealth Virtual Therapy" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Virtual Telehealth</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Telehealth Virtual Care</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Encrypted high-definition virtual therapy from your computer or phone. Flexible morning, lunch, and evening slots.
              </p>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div><i class="fas fa-check text-indigo-600 mr-1.5"></i> HIPAA Compliant Video Rooms</div>
                <div><i class="fas fa-check text-indigo-600 mr-1.5"></i> Multi-State Licensed Clinicians</div>
                <div><i class="fas fa-check text-indigo-600 mr-1.5"></i> Easy 1-Click Join Link</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$115 / session</span>
            <a href="program-details.html" class="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 font-bold text-xs hover:bg-indigo-600 hover:text-white transition-colors">View Details</a>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Treatment Process Roadmap -->
  <section class="py-20 bg-slate-100/60 dark:bg-slate-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span class="trust-badge"><i class="fas fa-route"></i> Your Path to Healing</span>
        <h2 class="text-3xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white">Our 4-Step Clinical Treatment Process</h2>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          How we guide you from your initial confidential intake to lasting emotional clarity.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md">
          <div class="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mb-4">1</div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Confidential Intake</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">Comprehensive biopsychosocial assessment understanding your symptoms, history, and goals.</p>
        </div>
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md">
          <div class="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-4">2</div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Customized Plan</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">Collaboratively agreeing on therapy modalities (CBT, EMDR, Gottman) and session frequency.</p>
        </div>
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md">
          <div class="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center mb-4">3</div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Active Therapy</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">Engaging in deep processing, somatic drills, behavioral exposure, and weekly reflection toolkits.</p>
        </div>
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md">
          <div class="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mb-4">4</div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Long-term Resilience</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">Developing sustainable self-regulation skills, relapse prevention strategies, and maintenance check-ins.</p>
        </div>
      </div>
    </div>
  </section>

</main>

${getFooter()}
`;

fs.writeFileSync('programs.html', programsHtml);
fs.writeFileSync('services.html', programsHtml);
console.log('Successfully wrote programs.html and services.html');


// ==========================================
// 3. PROGRAM-DETAILS.HTML / SERVICE-DETAILS.HTML
// ==========================================
const programDetailsHtml = `${getHead('Cognitive Behavioral Therapy (CBT) & Anxiety Management', 'Comprehensive details on our evidence-based CBT and anxiety counseling roadmap. Learn about session structure, clinician guidance, and booking.')}
${getHeader('services')}

<main class="flex-grow">
  
  <!-- Breadcrumbs & Banner -->
  <section class="py-12 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
        <a href="index.html" class="hover:text-teal-600">Home</a>
        <span>/</span>
        <a href="programs.html" class="hover:text-teal-600">Services</a>
        <span>/</span>
        <span class="text-teal-600 dark:text-teal-400">Cognitive Behavioral Therapy (CBT)</span>
      </div>
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 text-xs font-bold mb-3">
        <i class="fas fa-check-circle"></i> Gold Standard Evidence-Based Modality
      </div>
      <h1 class="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white">
        Cognitive Behavioral Therapy (CBT) & Anxiety Care
      </h1>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl mt-3 leading-relaxed">
        A structured, goal-oriented psychotherapeutic modality designed to identify and rewire automatic negative cognitive distortions and reduce autonomic stress.
      </p>
    </div>
  </section>

  <!-- Main Content Grid with Sidebar -->
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left 8 Columns: Clinical Deep Dive -->
        <div class="lg:col-span-8 space-y-10">
          
          <!-- Hero Photo Frame -->
          <div class="rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl aspect-[16/9] img-zoom-container">
            <img src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=1200&q=80" alt="CBT Therapist with Client in Calm Office" class="w-full h-full object-cover">
          </div>

          <!-- Section 1: Overview -->
          <div class="space-y-4">
            <h2 class="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">What is Cognitive Behavioral Therapy?</h2>
            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Cognitive Behavioral Therapy (CBT) is one of the most rigorously researched and proven psychological treatments in modern clinical psychology. It operates on the foundational premise that our thoughts, emotions, physiological reactions, and behaviors are inextricably interconnected.
            </p>
            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              When we experience distress, our perceptions become skewed by cognitive distortions such as catastrophizing, black-and-white thinking, and overgeneralization. Under the compassionate guidance of our licensed psychologists, you will learn to spot these automatic thinking traps in real-time, test their validity objectively, and replace them with empowering, grounded responses.
            </p>
          </div>

          <!-- Section 2: Clinical Roadmap -->
          <div class="space-y-6">
            <h2 class="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">Our 4-Phase CBT Treatment Roadmap</h2>
            
            <div class="space-y-4">
              <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div class="flex items-center gap-3 mb-2">
                  <span class="w-8 h-8 rounded-lg bg-teal-600 text-white font-bold text-xs flex items-center justify-center">Phase 1</span>
                  <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Assessment & Cognitive Mapping</h3>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">We map your baseline symptoms using standardized inventories (PHQ-9, GAD-7) and identify specific situational triggers and somatic reactions.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div class="flex items-center gap-3 mb-2">
                  <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">Phase 2</span>
                  <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Cognitive Restructuring & Thought Records</h3>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Learn how to fill out 5-column thought records, examine evidence for and against negative beliefs, and construct balanced alternative thoughts.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div class="flex items-center gap-3 mb-2">
                  <span class="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">Phase 3</span>
                  <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Behavioral Activation & Gradual Exposure</h3>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Step-by-step exposure hierarchies to systematically dismantle avoidance behaviors, panic cycles, and social anxiety fears in a safe, controlled setting.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div class="flex items-center gap-3 mb-2">
                  <span class="w-8 h-8 rounded-lg bg-amber-600 text-white font-bold text-xs flex items-center justify-center">Phase 4</span>
                  <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Relapse Prevention & Lifelong Resilience</h3>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Consolidating your personalized mental health toolkit, creating an early warning action plan, and transitioning to quarterly maintenance check-ins.</p>
              </div>
            </div>
          </div>

          <!-- Section 3: What to Expect in Session 1 -->
          <div class="p-8 rounded-3xl bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 space-y-4">
            <h3 class="text-xl font-bold font-heading text-teal-950 dark:text-teal-100 flex items-center gap-2">
              <i class="fas fa-clock text-teal-600"></i> What to Expect in Your First 50-Minute Session
            </h3>
            <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Your first appointment is focused entirely on establishing trust and understanding your story. You will not be pressured to share anything you are not ready for. Your therapist will review your confidential intake questionnaire, listen to what brought you to therapy, answer all your questions, and outline a tailored roadmap for your sessions.
            </p>
          </div>

        </div>

        <!-- Right 4 Columns: Sticky Booking Sidebar -->
        <div class="lg:col-span-4">
          <div class="sticky top-28 space-y-6">
            
            <!-- Booking Card -->
            <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl">
              <span class="trust-badge mb-3"><i class="fas fa-calendar-check"></i> Direct Intake</span>
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-4">Book This Therapy Program</h3>
              
              <div class="space-y-3 pb-6 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Session Fee:</span>
                  <span class="font-bold text-slate-900 dark:text-white">$120 / 50-min session</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Session Format:</span>
                  <span class="font-bold text-slate-900 dark:text-white">In-Person or Video</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Insurance Eligibility:</span>
                  <span class="font-bold text-emerald-600">In-Network / Superbill</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Next Available Slot:</span>
                  <span class="font-bold text-teal-600">Within 48 Hours</span>
                </div>
              </div>

              <!-- Assigned Lead Clinician Preview -->
              <div class="py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1594824813590-78925b3997f0?auto=format&fit=crop&w=200&q=80" alt="Dr. Sarah Jenkins" class="w-12 h-12 rounded-full object-cover border-2 border-teal-500">
                <div>
                  <h4 class="text-xs font-bold text-slate-900 dark:text-white font-heading">Dr. Sarah Jenkins, Psy.D.</h4>
                  <p class="text-[11px] text-slate-500">Lead CBT Clinical Psychologist</p>
                </div>
              </div>

              <button type="button" class="open-appointment-modal w-full py-3.5 mt-6 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-lg shadow-teal-600/30 transition-all" data-service="individual" data-therapist="sarah">
                <i class="fas fa-calendar-alt mr-1.5"></i> Schedule Initial Consultation
              </button>

              <div class="text-center mt-3">
                <a href="tel:18002738255" class="text-[11px] text-slate-500 hover:text-teal-600 flex items-center justify-center gap-1.5">
                  <i class="fas fa-phone-alt"></i> Questions? Call ${PHONE}
                </a>
              </div>
            </div>

            <!-- Emergency Box -->
            <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200">
              <p class="font-bold mb-1"><i class="fas fa-info-circle"></i> Need Immediate Help?</p>
              <p>If in active crisis, call <a href="tel:988" class="font-bold underline">988 Lifeline</a> or text HOME to 741741 (Free & 24/7).</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

</main>

${getFooter()}
`;

fs.writeFileSync('program-details.html', programDetailsHtml);
fs.writeFileSync('service-details.html', programDetailsHtml);
console.log('Successfully wrote program-details.html and service-details.html');
