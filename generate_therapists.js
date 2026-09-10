const fs = require('fs');
const { getHead, getHeader, getFooter, BRAND_NAME, PHONE, CRISIS_PHONE, EMAIL, ADDRESS } = require('./build_site.js');

console.log('Generating coaches.html and individual therapist profile pages...');

// ==========================================
// 1. COACHES.HTML / THERAPISTS.HTML
// ==========================================
const coachesHtml = `${getHead('Licensed Therapists & Clinical Psychologists', 'Meet our board-certified clinical psychologists, marriage & family therapists, and trauma counselors. Browse bios, credentials, and book direct consultations.')}
${getHeader('therapists')}

<main class="flex-grow">
  
  <!-- Breadcrumbs & Header -->
  <section class="py-12 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
        <a href="index.html" class="hover:text-teal-600">Home</a>
        <span>/</span>
        <span class="text-teal-600 dark:text-teal-400">Our Therapists</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white">
        Meet Our Licensed Clinical Therapists
      </h1>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl mt-3 leading-relaxed">
        Compassionate, board-certified clinical psychologists and counselors dedicated to walking alongside you on your journey toward mental resilience and self-discovery.
      </p>
    </div>
  </section>

  <!-- Interactive Filter & Live Search Bar -->
  <section class="py-8 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 sticky top-[73px] z-30 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      
      <!-- Category Filter Buttons -->
      <div class="flex flex-wrap items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
        <button type="button" class="therapist-filter-btn filter-btn active px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-teal-600 text-white" data-filter="all">All Clinicians</button>
        <button type="button" class="therapist-filter-btn filter-btn px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300" data-filter="anxiety">Anxiety & Mood</button>
        <button type="button" class="therapist-filter-btn filter-btn px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300" data-filter="couples">Couples & Marriage</button>
        <button type="button" class="therapist-filter-btn filter-btn px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300" data-filter="trauma">Trauma & EMDR</button>
        <button type="button" class="therapist-filter-btn filter-btn px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300" data-filter="youth">Child & Youth</button>
      </div>

      <!-- Live Search Input -->
      <div class="relative w-full md:w-72">
        <i class="fas fa-search absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
        <input type="text" id="therapist-search-input" placeholder="Search by name or specialty..." class="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500">
      </div>

    </div>
  </section>

  <!-- Therapists Grid -->
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div id="therapists-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Clinician 1 -->
        <div class="therapist-item bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between" data-category="anxiety">
          <div>
            <div class="h-64 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1594824813590-78925b3997f0?auto=format&fit=crop&w=800&q=80" alt="Dr. Sarah Jenkins Psy.D." class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">14+ Yrs Exp</span>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">Dr. Sarah Jenkins</h3>
                <span class="text-xs font-bold text-amber-500 flex items-center gap-1"><i class="fas fa-star"></i> 4.9 (180+)</span>
              </div>
              <p class="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-3">Psy.D. Licensed Clinical Psychologist</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Specializing in Cognitive Behavioral Therapy (CBT), adult anxiety disorders, panic relief, OCD, and burnout recovery.
              </p>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div><i class="fas fa-certificate text-teal-600 mr-1.5"></i> Stanford Psychology Doctorate</div>
                <div><i class="fas fa-user-shield text-teal-600 mr-1.5"></i> In-Network: Aetna, BCBS, Cigna</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$165 / hr</span>
            <div class="flex items-center gap-2">
              <a href="coach-sophia-novak.html" class="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-teal-600 hover:text-white transition-colors">Profile</a>
              <button type="button" class="open-appointment-modal px-3.5 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs shadow hover:bg-teal-500 transition-colors" data-therapist="sarah">Book</button>
            </div>
          </div>
        </div>

        <!-- Clinician 2 -->
        <div class="therapist-item bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between" data-category="couples">
          <div>
            <div class="h-64 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" alt="Dr. Marcus Vance LMFT" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">11+ Yrs Exp</span>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">Dr. Marcus Vance</h3>
                <span class="text-xs font-bold text-amber-500 flex items-center gap-1"><i class="fas fa-star"></i> 5.0 (140+)</span>
              </div>
              <p class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">LMFT Licensed Marriage & Family Therapist</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Gottman Method Level 3 Certified specialist guiding couples through high-conflict de-escalation, infidelity recovery, and intimacy.
              </p>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div><i class="fas fa-certificate text-indigo-600 mr-1.5"></i> Gottman Institute Certified</div>
                <div><i class="fas fa-user-shield text-indigo-600 mr-1.5"></i> In-Network: UnitedHealthcare, Oxford</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$170 / hr</span>
            <div class="flex items-center gap-2">
              <a href="coach-julian-alvarez.html" class="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-indigo-600 hover:text-white transition-colors">Profile</a>
              <button type="button" class="open-appointment-modal px-3.5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow hover:bg-indigo-500 transition-colors" data-therapist="marcus">Book</button>
            </div>
          </div>
        </div>

        <!-- Clinician 3 -->
        <div class="therapist-item bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between" data-category="trauma">
          <div>
            <div class="h-64 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" alt="Elena Rostova LCSW" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">9+ Yrs Exp</span>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">Elena Rostova</h3>
                <span class="text-xs font-bold text-amber-500 flex items-center gap-1"><i class="fas fa-star"></i> 4.9 (165+)</span>
              </div>
              <p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">LCSW, CCTP Trauma & EMDR Specialist</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Expert in EMDR bilateral stimulation protocols, complex PTSD resolution, somatic nervous regulation, and grief counseling.
              </p>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div><i class="fas fa-certificate text-emerald-600 mr-1.5"></i> EMDRIA International Certified</div>
                <div><i class="fas fa-user-shield text-emerald-600 mr-1.5"></i> In-Network: Aetna, Medicare</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$155 / hr</span>
            <div class="flex items-center gap-2">
              <a href="coach-elena-chen.html" class="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-emerald-600 hover:text-white transition-colors">Profile</a>
              <button type="button" class="open-appointment-modal px-3.5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow hover:bg-emerald-500 transition-colors" data-therapist="elena">Book</button>
            </div>
          </div>
        </div>

        <!-- Clinician 4 -->
        <div class="therapist-item bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between" data-category="youth">
          <div>
            <div class="h-64 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80" alt="Dr. David Kim M.D." class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">16+ Yrs Exp</span>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">Dr. David Kim</h3>
                <span class="text-xs font-bold text-amber-500 flex items-center gap-1"><i class="fas fa-star"></i> 4.9 (210+)</span>
              </div>
              <p class="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-3">M.D. Child & Adolescent Psychiatrist</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Triple board-certified pediatric specialist supporting children and teens with ADHD, school anxiety, mood regulation, and family balance.
              </p>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div><i class="fas fa-certificate text-amber-600 mr-1.5"></i> Harvard Child Psychiatry Fellowship</div>
                <div><i class="fas fa-user-shield text-amber-600 mr-1.5"></i> In-Network: Blue Cross, Cigna</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$190 / hr</span>
            <div class="flex items-center gap-2">
              <a href="coach-dmitri-kozlov.html" class="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-amber-600 hover:text-white transition-colors">Profile</a>
              <button type="button" class="open-appointment-modal px-3.5 py-2 rounded-xl bg-amber-600 text-white font-bold text-xs shadow hover:bg-amber-500 transition-colors" data-therapist="david">Book</button>
            </div>
          </div>
        </div>

        <!-- Clinician 5 -->
        <div class="therapist-item bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between" data-category="anxiety">
          <div>
            <div class="h-64 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80" alt="Maya Lin LMHC" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">8+ Yrs Exp</span>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">Maya Lin</h3>
                <span class="text-xs font-bold text-amber-500 flex items-center gap-1"><i class="fas fa-star"></i> 4.8 (115+)</span>
              </div>
              <p class="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-3">LMHC Mindfulness & Stress Coach</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Integrates mindfulness-based stress reduction (MBSR), ACT, somatic breathwork, and self-compassion training.
              </p>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div><i class="fas fa-certificate text-teal-600 mr-1.5"></i> MBSR Certified Teacher</div>
                <div><i class="fas fa-user-shield text-teal-600 mr-1.5"></i> In-Network: Aetna, Optum</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$140 / hr</span>
            <div class="flex items-center gap-2">
              <a href="coach-sophia-novak.html" class="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-teal-600 hover:text-white transition-colors">Profile</a>
              <button type="button" class="open-appointment-modal px-3.5 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs shadow hover:bg-teal-500 transition-colors">Book</button>
            </div>
          </div>
        </div>

        <!-- Clinician 6 -->
        <div class="therapist-item bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between" data-category="trauma">
          <div>
            <div class="h-64 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" alt="Dr. Robert Hayes Ph.D." class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">15+ Yrs Exp</span>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">Dr. Robert Hayes</h3>
                <span class="text-xs font-bold text-amber-500 flex items-center gap-1"><i class="fas fa-star"></i> 5.0 (195+)</span>
              </div>
              <p class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Ph.D. Addiction & Trauma Psychologist</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Specialized in dual-diagnosis recovery, emotional sobriety, executive burnout, and relapse prevention frameworks.
              </p>
              <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div><i class="fas fa-certificate text-indigo-600 mr-1.5"></i> APA Clinical Addiction Specialist</div>
                <div><i class="fas fa-user-shield text-indigo-600 mr-1.5"></i> In-Network: BCBS, Cigna</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$180 / hr</span>
            <div class="flex items-center gap-2">
              <a href="coach-julian-alvarez.html" class="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-indigo-600 hover:text-white transition-colors">Profile</a>
              <button type="button" class="open-appointment-modal px-3.5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow hover:bg-indigo-500 transition-colors">Book</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

</main>

${getFooter()}
`;

fs.writeFileSync('coaches.html', coachesHtml);
fs.writeFileSync('therapists.html', coachesHtml);
console.log('Successfully wrote coaches.html and therapists.html');


// ==========================================
// 2. INDIVIDUAL THERAPIST PROFILES
// ==========================================
function generateTherapistProfile(filename, name, title, photoUrl, yearsExp, fee, rating, bio, degrees, insurance) {
  const content = `${getHead(name + ' — ' + title, 'Learn about ' + name + ', credentials, clinical philosophy, accepted insurance, and book an intake session.')}
${getHeader('therapists')}

<main class="flex-grow">
  
  <!-- Breadcrumb & Header -->
  <section class="py-12 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
        <a href="index.html" class="hover:text-teal-600">Home</a>
        <span>/</span>
        <a href="coaches.html" class="hover:text-teal-600">Therapists</a>
        <span>/</span>
        <span class="text-teal-600 dark:text-teal-400">${name}</span>
      </div>
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="trust-badge mb-2"><i class="fas fa-certificate"></i> Licensed Clinical Staff</span>
          <h1 class="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white">${name}</h1>
          <p class="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-1">${title} &bull; ${yearsExp} Experience</p>
        </div>
        <div class="text-left md:text-right">
          <div class="text-2xl font-black text-slate-900 dark:text-white font-heading">${fee}</div>
          <p class="text-xs text-slate-500">In-Person & Telehealth Available</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Profile Content Grid -->
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left 8 Columns -->
        <div class="lg:col-span-8 space-y-10">
          
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl">
            <div class="md:col-span-5 rounded-2xl overflow-hidden aspect-square img-zoom-container">
              <img src="${photoUrl}" alt="${name}" class="w-full h-full object-cover">
            </div>
            <div class="md:col-span-7 space-y-3">
              <div class="flex items-center gap-1 text-amber-400 text-sm">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1.5">${rating} Verified Rating</span>
              </div>
              <h2 class="text-xl font-bold font-heading text-slate-900 dark:text-white">Clinical Philosophy</h2>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${bio}</p>
            </div>
          </div>

          <!-- Education & Credentials -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold font-heading text-slate-900 dark:text-white">Education & Board Certifications</h3>
            <div class="space-y-3">
              ${degrees.map(d => `
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
                  <i class="fas fa-graduation-cap text-teal-600 mt-1"></i>
                  <div>
                    <h4 class="text-xs font-bold text-slate-900 dark:text-white">${d.title}</h4>
                    <p class="text-xs text-slate-500">${d.institution} &bull; ${d.year}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Accepted Insurance -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold font-heading text-slate-900 dark:text-white">Accepted Insurance Networks</h3>
            <div class="flex flex-wrap gap-2">
              ${insurance.map(ins => `<span class="px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-xs font-bold text-teal-800 dark:text-teal-300"><i class="fas fa-check-circle mr-1"></i> ${ins}</span>`).join('')}
              <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300">Out-of-Network Superbills Provided</span>
            </div>
          </div>

        </div>

        <!-- Right 4 Columns: Direct Booking Card -->
        <div class="lg:col-span-4">
          <div class="sticky top-28 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-5">
            <span class="trust-badge"><i class="fas fa-calendar-check"></i> Book With ${name.split(' ')[1] || name}</span>
            <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">Reserve a Session</h3>
            
            <form onsubmit="event.preventDefault(); window.showToast('Intake request for ' + '${name}' + ' reserved! Check your email for confirmation.', 'success'); this.reset();" class="space-y-3.5">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Full Name *</label>
                <input type="text" required placeholder="John Smith" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                <input type="email" required placeholder="john@example.com" class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Session Format</label>
                <select class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500">
                  <option>Telehealth Virtual Video</option>
                  <option>In-Person at Clinic Sanctuary</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Preferred Date</label>
                <input type="date" required class="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500">
              </div>

              <button type="submit" class="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-lg shadow-teal-600/30 transition-all">
                Request Intake Consultation
              </button>
            </form>

            <div class="pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
              <a href="coaches.html" class="text-xs font-bold text-slate-500 hover:text-teal-600">&larr; Return to All Clinicians</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

</main>

${getFooter()}
`;
  fs.writeFileSync(filename, content);
  console.log('Successfully wrote ' + filename);
}

// 1. Dr. Sarah Jenkins (coach-sophia-novak.html)
generateTherapistProfile(
  'coach-sophia-novak.html',
  'Dr. Sarah Jenkins',
  'Psy.D. Licensed Clinical Psychologist',
  'https://images.unsplash.com/photo-1594824813590-78925b3997f0?auto=format&fit=crop&w=800&q=80',
  '14+ Years',
  '$165 / hr',
  '4.9 / 5.0 (185+ reviews)',
  'My approach is collaborative, grounded in warmth and Cognitive Behavioral principles. I help adults dismantle chronic worry, perfectionism, and anxiety loops by cultivating mindful awareness and evidence-based coping agility.',
  [
    { title: 'Doctor of Psychology (Psy.D.) in Clinical Psychology', institution: 'Stanford University', year: '2012' },
    { title: 'Master of Science in Behavioral Health', institution: 'University of Washington', year: '2009' },
    { title: 'Certified Cognitive Behavioral Therapist (CBT)', institution: 'Beck Institute for Cognitive Behavior Therapy', year: '2014' }
  ],
  ['Aetna', 'Blue Cross Blue Shield', 'Cigna', 'Medicare', 'UnitedHealthcare']
);

// 2. Dr. Marcus Vance (coach-julian-alvarez.html)
generateTherapistProfile(
  'coach-julian-alvarez.html',
  'Dr. Marcus Vance',
  'LMFT Licensed Marriage & Family Therapist',
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
  '11+ Years',
  '$170 / hr',
  '5.0 / 5.0 (142+ reviews)',
  'Relationships are our greatest source of joy and our deepest vulnerability. Using the Gottman Method and Emotionally Focused Therapy (EFT), I guide couples from cyclical defensiveness into deep emotional safety, mutual trust, and rekindled intimacy.',
  [
    { title: 'Master of Arts in Marriage & Family Therapy', institution: 'Northwestern University', year: '2015' },
    { title: 'Certified Gottman Relationship Therapist Level 3', institution: 'The Gottman Institute', year: '2017' },
    { title: 'Emotionally Focused Couples Therapy (EFCT) Fellow', institution: 'ICEEFT', year: '2019' }
  ],
  ['UnitedHealthcare', 'Oxford', 'Aetna', 'Cigna']
);

// 3. Elena Rostova (coach-elena-chen.html)
generateTherapistProfile(
  'coach-elena-chen.html',
  'Elena Rostova',
  'LCSW, CCTP Certified Clinical Trauma Professional',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
  '9+ Years',
  '$155 / hr',
  '4.9 / 5.0 (168+ reviews)',
  'Trauma lives in the nervous system as much as the mind. Through EMDR and somatic regulation, we help you process overwhelming memories safely, desensitize emotional triggers, and reclaim full autonomy over your story.',
  [
    { title: 'Master of Social Work (MSW)', institution: 'Columbia University School of Social Work', year: '2017' },
    { title: 'EMDR Certified Therapist', institution: 'EMDR International Association (EMDRIA)', year: '2018' },
    { title: 'Certified Clinical Trauma Professional (CCTP)', institution: 'IATP', year: '2020' }
  ],
  ['Aetna', 'Blue Cross Blue Shield', 'Medicare', 'Optum']
);

// 4. Dr. David Kim (coach-dmitri-kozlov.html)
generateTherapistProfile(
  'coach-dmitri-kozlov.html',
  'Dr. David Kim',
  'M.D. Board-Certified Child & Adolescent Psychiatrist',
  'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
  '16+ Years',
  '$190 / hr',
  '4.9 / 5.0 (215+ reviews)',
  'Children and adolescents communicate through emotion, behavior, and play. I work closely with young people and their parents to address ADHD, school refusal, panic, and identity challenges with clinical precision and gentle empathy.',
  [
    { title: 'Doctor of Medicine (M.D.)', institution: 'Johns Hopkins School of Medicine', year: '2010' },
    { title: 'Child & Adolescent Psychiatry Fellowship', institution: 'Harvard Medical School / Boston Childrens Hospital', year: '2014' },
    { title: 'Board Certification in General & Pediatric Psychiatry', institution: 'American Board of Psychiatry and Neurology', year: '2015' }
  ],
  ['Blue Cross Blue Shield', 'Cigna', 'UnitedHealthcare', 'Aetna']
);
