const fs = require('fs');
const path = require('path');
const { getHead, getHeader, getFooter, IMAGES, BRAND_NAME, PHONE, CRISIS_HOTLINE, EMAIL, ADDRESS } = require('./gen_layout');

console.log('Generating core marketing and clinical pages...');

// =========================================================================
// 1. about.html
// =========================================================================
function buildAbout() {
  const head = getHead('About Us | Philosophy & Sanctuary', 'Learn about our non-clinical approach to psychological wellness, our clinical director, and our calm acoustic consultation suites.');
  const header = getHeader('about');
  const content = `
  <!-- Breadcrumb -->
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#EBF1F4] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#D7B7A5]">Home</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">About Us</span>
    </div>
  </div>

  <!-- Hero Story -->
  <section class="py-16 md:py-24 bg-gradient-to-b from-[#F8F6F1] to-white dark:from-[#11191f] dark:to-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-6 space-y-6">
          <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Our Clinical Philosophy</span>
          <h1 class="font-heading text-4xl sm:text-5xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-tight">
            We built Mindful Paths as the sanctuary we wished existed.
          </h1>
          <p class="text-sm sm:text-base text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">
            Traditional therapy often feels cold, bureaucratic, and sterile. In contrast, Mindful Paths was intentionally designed to resemble a warm living room or botanical sanctuary—where you are invited to soften, take off your defensive armor, and speak the unfiltered truth.
          </p>
          <div class="pt-2 grid grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10">
              <div class="font-heading text-2xl font-bold text-[#D7B7A5]">100%</div>
              <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">Judgment-Free Care</div>
              <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Unconditional positive regard for all identities and backgrounds.</div>
            </div>
            <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10">
              <div class="font-heading text-2xl font-bold text-[#8FAFC0]">Integrative</div>
              <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">Mind &amp; Body Unity</div>
              <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Polyvagal somatic grounding paired with cognitive psychology.</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 relative">
          <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#1e2d37]">
            <img src="${IMAGES.about_director}" alt="Empathetic clinical director" class="w-full h-[450px] object-cover">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sanctuary Acoustic Suites -->
  <section class="py-20 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-16">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Thoughtful Environment</span>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Physical spaces created for profound safety.
        </h2>
        <p class="text-sm text-[#27343B] dark:text-[#EBF1F4]">
          Every detail—from triple-glazed acoustic soundproofing to circadian lighting and air purification—serves to quiet nervous system hyper-vigilance.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="rounded-3xl overflow-hidden bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 shadow-sm">
          <img src="${IMAGES.about_suite}" alt="Private consultation room" class="w-full h-56 object-cover">
          <div class="p-6 space-y-2">
            <h3 class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">Private Acoustic Suites</h3>
            <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">Double-insulated walls and gentle pink-noise attenuation ensure complete confidentiality.</p>
          </div>
        </div>

        <div class="rounded-3xl overflow-hidden bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 shadow-sm">
          <img src="${IMAGES.about_garden}" alt="Courtyard garden" class="w-full h-56 object-cover">
          <div class="p-6 space-y-2">
            <h3 class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">Mindful Botanical Courtyard</h3>
            <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">An indoor garden lounge with living greenery where clients decompress before and after sessions.</p>
          </div>
        </div>

        <div class="rounded-3xl overflow-hidden bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 shadow-sm">
          <img src="${IMAGES.about_acoustic}" alt="Consultation library" class="w-full h-56 object-cover">
          <div class="p-6 space-y-2">
            <h3 class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">Sensory Regulation Library</h3>
            <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">Curated reading materials, organic herbal teas, and sensory grounding tools readily available.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
  return head + header + content + getFooter();
}

// =========================================================================
// 2. services.html
// =========================================================================

// =========================================================================
// SHARED SERVICES & PRICING TEMPLATES (UNIFIED DESIGN ARCHITECTURE)
// =========================================================================
function getSharedServicesPricingCards() {
  return `
      <!-- Services & Pricing Grid (6 Identical Unified Modalities) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        
        <!-- 1. Individual Care -->
        <div class="card-wellness p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col justify-between h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div>
            <a href="service-individual-therapy.html" class="block overflow-hidden rounded-2xl mb-4 group">
              <img src="${IMAGES.service_individual}" alt="Individual psychotherapy" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500">
            </a>
            <div class="min-h-[90px] space-y-1.5">
              <span class="text-xs font-bold uppercase tracking-wider text-[#8FAFC0]">Individual Care</span>
              <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                <a href="service-individual-therapy.html" class="hover:text-[#D7B7A5] transition-colors">Individual Psychotherapy</a>
              </h3>
              <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">One-on-one CBT and somatic grounding for anxiety, depression, and high-functioning burnout.</p>
            </div>

            <!-- Aligned Price Baseline -->
            <div class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1] py-4 border-y border-[#EBF1F4] dark:border-white/10 my-5 flex items-baseline justify-between">
              <div>$175 <span class="text-xs font-sans font-normal text-[#27343B]/70 dark:text-[#7d8d96]">/ 50-min session</span></div>
              <span class="text-[11px] font-sans font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">HSA/FSA Eligible</span>
            </div>

            <ul class="text-xs space-y-3 text-[#27343B]/80 dark:text-[#7d8d96]">
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>50-minute dedicated clinical hour</span></li>
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>Confidential Client Sanctuary portal access</span></li>
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>Monthly itemized superbills for PPO reimbursement</span></li>
            </ul>
          </div>

          <div class="pt-6 mt-auto space-y-2.5">
            <button type="button" class="open-appointment-btn w-full py-3.5 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2">
              <span>Book Individual Intake</span>
              <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
            <a href="service-individual-therapy.html" class="block text-center text-xs font-bold text-[#D7B7A5] hover:underline py-1">
              Explore Modality Details &rarr;
            </a>
          </div>
        </div>

        <!-- 2. Couples Care (Most Popular Highlight) -->
        <div class="card-wellness p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#17232b] border-2 border-[#D7B7A5] shadow-xl flex flex-col justify-between h-full relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D7B7A5] text-white text-[10px] uppercase font-bold tracking-wider shadow-sm z-10 flex items-center gap-1.5">
            <i class="fas fa-star text-[9px]"></i> Most Popular
          </div>

          <div>
            <a href="service-couples-therapy.html" class="block overflow-hidden rounded-2xl mb-4 group">
              <img src="${IMAGES.service_couples}" alt="Couples therapy" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500">
            </a>
            <div class="min-h-[90px] space-y-1.5">
              <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Relationship Care</span>
              <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                <a href="service-couples-therapy.html" class="hover:text-[#D7B7A5] transition-colors">Couples &amp; Marriage Counseling</a>
              </h3>
              <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">Gottman-informed frameworks to bridge communication impasses and restore deep romantic intimacy.</p>
            </div>

            <!-- Aligned Price Baseline -->
            <div class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1] py-4 border-y border-[#EBF1F4] dark:border-white/10 my-5 flex items-baseline justify-between">
              <div>$225 <span class="text-xs font-sans font-normal text-[#27343B]/70 dark:text-[#7d8d96]">/ 75-min session</span></div>
              <span class="text-[11px] font-sans font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">Joint Intake</span>
            </div>

            <ul class="text-xs space-y-3 text-[#27343B]/80 dark:text-[#7d8d96]">
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#D7B7A5]"></i> <span>75-minute extended dialogue session</span></li>
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#D7B7A5]"></i> <span>Relational dialogue protocols &amp; home exercises</span></li>
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#D7B7A5]"></i> <span>Joint Client Sanctuary portal access</span></li>
            </ul>
          </div>

          <div class="pt-6 mt-auto space-y-2.5">
            <button type="button" class="open-appointment-btn w-full py-3.5 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2">
              <span>Begin Couples Care</span>
              <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
            <a href="service-couples-therapy.html" class="block text-center text-xs font-bold text-[#D7B7A5] hover:underline py-1">
              Explore Modality Details &rarr;
            </a>
          </div>
        </div>

        <!-- 3. Trauma & EMDR Recovery -->
        <div class="card-wellness p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col justify-between h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div>
            <a href="service-trauma-emdr.html" class="block overflow-hidden rounded-2xl mb-4 group">
              <img src="${IMAGES.service_trauma}" alt="Trauma therapy" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500">
            </a>
            <div class="min-h-[90px] space-y-1.5">
              <span class="text-xs font-bold uppercase tracking-wider text-[#8FAFC0]">Trauma Recovery</span>
              <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                <a href="service-trauma-emdr.html" class="hover:text-[#D7B7A5] transition-colors">EMDR &amp; Somatic Healing</a>
              </h3>
              <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">Certified somatic trauma reprocessing without endlessly verbalizing painful events.</p>
            </div>

            <!-- Aligned Price Baseline -->
            <div class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1] py-4 border-y border-[#EBF1F4] dark:border-white/10 my-5 flex items-baseline justify-between">
              <div>$195 <span class="text-xs font-sans font-normal text-[#27343B]/70 dark:text-[#7d8d96]">/ 60-min session</span></div>
              <span class="text-[11px] font-sans font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">Certified Clinicians</span>
            </div>

            <ul class="text-xs space-y-3 text-[#27343B]/80 dark:text-[#7d8d96]">
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>60-minute somatic bilateral reprocessing</span></li>
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>Polyvagal nervous system grounding workbook</span></li>
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>Encrypted between-session symptom tracking</span></li>
            </ul>
          </div>

          <div class="pt-6 mt-auto space-y-2.5">
            <button type="button" class="open-appointment-btn w-full py-3.5 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2">
              <span>Choose EMDR Care</span>
              <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
            <a href="service-trauma-emdr.html" class="block text-center text-xs font-bold text-[#D7B7A5] hover:underline py-1">
              Explore Modality Details &rarr;
            </a>
          </div>
        </div>

        <!-- 4. Teen & Adolescent Care -->
        <div class="card-wellness p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col justify-between h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div>
            <a href="service-teen-counseling.html" class="block overflow-hidden rounded-2xl mb-4 group">
              <img src="${IMAGES.service_teen}" alt="Teen counseling" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500">
            </a>
            <div class="min-h-[90px] space-y-1.5">
              <span class="text-xs font-bold uppercase tracking-wider text-[#8FAFC0]">Youth Care</span>
              <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                <a href="service-teen-counseling.html" class="hover:text-[#D7B7A5] transition-colors">Teen &amp; Adolescent Counseling</a>
              </h3>
              <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">Secure haven for adolescents navigating academic burnout, peer relationships, and identity.</p>
            </div>

            <!-- Aligned Price Baseline -->
            <div class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1] py-4 border-y border-[#EBF1F4] dark:border-white/10 my-5 flex items-baseline justify-between">
              <div>$165 <span class="text-xs font-sans font-normal text-[#27343B]/70 dark:text-[#7d8d96]">/ 50-min session</span></div>
              <span class="text-[11px] font-sans font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">Ages 12-19</span>
            </div>

            <ul class="text-xs space-y-3 text-[#27343B]/80 dark:text-[#7d8d96]">
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>50-minute youth-centered counseling session</span></li>
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>Collaborative parent-guidance alignment</span></li>
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>Specialized adolescent coping toolkits</span></li>
            </ul>
          </div>

          <div class="pt-6 mt-auto space-y-2.5">
            <button type="button" class="open-appointment-btn w-full py-3.5 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2">
              <span>Book Teen Intake</span>
              <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
            <a href="service-teen-counseling.html" class="block text-center text-xs font-bold text-[#D7B7A5] hover:underline py-1">
              Explore Modality Details &rarr;
            </a>
          </div>
        </div>

        <!-- 5. Encrypted Telehealth Video -->
        <div class="card-wellness p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col justify-between h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div>
            <a href="service-telehealth.html" class="block overflow-hidden rounded-2xl mb-4 group">
              <img src="${IMAGES.service_telehealth}" alt="Telehealth therapy" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500">
            </a>
            <div class="min-h-[90px] space-y-1.5">
              <span class="text-xs font-bold uppercase tracking-wider text-[#8FAFC0]">Virtual Care</span>
              <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                <a href="service-telehealth.html" class="hover:text-[#D7B7A5] transition-colors">Encrypted Telehealth Video</a>
              </h3>
              <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">Convenient HD video sessions from your home with integrated digital notes and mood tracking.</p>
            </div>

            <!-- Aligned Price Baseline -->
            <div class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1] py-4 border-y border-[#EBF1F4] dark:border-white/10 my-5 flex items-baseline justify-between">
              <div>$175 <span class="text-xs font-sans font-normal text-[#27343B]/70 dark:text-[#7d8d96]">/ 50-min session</span></div>
              <span class="text-[11px] font-sans font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">Zero Commute</span>
            </div>

            <ul class="text-xs space-y-3 text-[#27343B]/80 dark:text-[#7d8d96]">
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>Secure HIPAA-compliant HD video link</span></li>
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>Digital whiteboard &amp; real-time session transcripts</span></li>
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>Statewide licensed clinician coverage</span></li>
            </ul>
          </div>

          <div class="pt-6 mt-auto space-y-2.5">
            <button type="button" class="open-appointment-btn w-full py-3.5 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2">
              <span>Start Virtual Therapy</span>
              <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
            <a href="service-telehealth.html" class="block text-center text-xs font-bold text-[#D7B7A5] hover:underline py-1">
              Explore Modality Details &rarr;
            </a>
          </div>
        </div>

        <!-- 6. Mindfulness & Somatic Cohorts -->
        <div class="card-wellness p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col justify-between h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div>
            <a href="service-mindfulness.html" class="block overflow-hidden rounded-2xl mb-4 group">
              <img src="${IMAGES.service_anxiety}" alt="Group therapy cohorts" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500">
            </a>
            <div class="min-h-[90px] space-y-1.5">
              <span class="text-xs font-bold uppercase tracking-wider text-[#8FAFC0]">Group Therapy</span>
              <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                <a href="service-mindfulness.html" class="hover:text-[#D7B7A5] transition-colors">Mindfulness &amp; Somatic Cohorts</a>
              </h3>
              <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">8-week intimate cohorts (6-8 members) exploring polyvagal resets, grounding, and mutual empathy.</p>
            </div>

            <!-- Aligned Price Baseline -->
            <div class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1] py-4 border-y border-[#EBF1F4] dark:border-white/10 my-5 flex items-baseline justify-between">
              <div>$75 <span class="text-xs font-sans font-normal text-[#27343B]/70 dark:text-[#7d8d96]">/ 90-min cohort</span></div>
              <span class="text-[11px] font-sans font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">Community Haven</span>
            </div>

            <ul class="text-xs space-y-3 text-[#27343B]/80 dark:text-[#7d8d96]">
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>90-minute therapist-facilitated group work</span></li>
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>Curated somatic breathing &amp; reflection workbook</span></li>
              <li class="flex items-center gap-2.5"><i class="fas fa-check text-[#8FAFC0]"></i> <span>Supportive, confidential peer community</span></li>
            </ul>
          </div>

          <div class="pt-6 mt-auto space-y-2.5">
            <button type="button" class="open-appointment-btn w-full py-3.5 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2">
              <span>Join Group Circle</span>
              <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
            <a href="service-mindfulness.html" class="block text-center text-xs font-bold text-[#D7B7A5] hover:underline py-1">
              Explore Modality Details &rarr;
            </a>
          </div>
        </div>

      </div>
  `;
}

function getSharedInsuranceFaqSection() {
  return `
    <!-- Insurance & Superbill Transparency Section -->
    <section class="py-16 bg-[#F8F6F1] dark:bg-[#11191f] border-t border-[#EBF1F4] dark:border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-5 space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Fee Transparency</span>
            <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-tight">
              Insurance, Superbills &amp; Out-of-Network Coverage
            </h2>
            <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
              We operate as an out-of-network provider to safeguard your absolute clinical privacy and keep care entirely between you and your therapist—free from arbitrary diagnosis mandates or visit caps.
            </p>
            <div class="p-4 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-2 text-xs">
              <div class="font-bold text-[#294657] dark:text-[#F8F6F1] flex items-center gap-2">
                <i class="fas fa-balance-scale text-[#8FAFC0]"></i>
                <span>Federal No Surprises Act Protected</span>
              </div>
              <p class="text-[11px] text-[#27343B]/70 dark:text-[#7d8d96]">
                You have the legal right to receive a Good Faith Estimate (GFE) explaining your expected clinical healthcare costs before scheduling.
              </p>
            </div>
          </div>

          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div class="p-6 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-3 shadow-sm">
              <div class="w-10 h-10 rounded-2xl bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 class="font-heading text-base font-bold text-[#294657] dark:text-[#F8F6F1]">PPO Out-of-Network</h4>
              <p class="text-[11px] text-[#27343B]/70 dark:text-[#7d8d96] leading-relaxed">
                Most PPO insurance plans reimburse between <strong>60% to 80%</strong> of therapy session fees after deductible.
              </p>
            </div>

            <div class="p-6 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-3 shadow-sm">
              <div class="w-10 h-10 rounded-2xl bg-[#D7B7A5]/20 text-[#D7B7A5] flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 class="font-heading text-base font-bold text-[#294657] dark:text-[#F8F6F1]">Automatic Superbill</h4>
              <p class="text-[11px] text-[#27343B]/70 dark:text-[#7d8d96] leading-relaxed">
                At the close of each month, an itemized superbill is automatically generated directly in your Client Sanctuary.
              </p>
            </div>

            <div class="p-6 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-3 shadow-sm">
              <div class="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 class="font-heading text-base font-bold text-[#294657] dark:text-[#F8F6F1]">HSA / FSA Cards</h4>
              <p class="text-[11px] text-[#27343B]/70 dark:text-[#7d8d96] leading-relaxed">
                You can directly pay for all clinical psychotherapy using pre-tax funds through your employer HSA or FSA debit card.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- Interactive Fee & Service Comparison Table -->
    <section class="py-16 bg-white dark:bg-[#17232b] border-t border-[#EBF1F4] dark:border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Direct Comparison</span>
          <h2 class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">
            Side-by-Side Modality Breakdown
          </h2>
          <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96]">
            Every session is conducted by board-certified, licensed psychotherapists in accordance with APA ethical guidelines.
          </p>
        </div>

        <div class="overflow-x-auto rounded-3xl border border-[#EBF1F4] dark:border-white/10 shadow-sm">
          <table class="w-full text-left text-xs border-collapse">
            <thead>
              <tr class="bg-[#F8F6F1] dark:bg-[#11191f] text-[#294657] dark:text-[#F8F6F1] font-bold border-b border-[#EBF1F4] dark:border-white/10">
                <th class="py-4 px-6">Modality / Service</th>
                <th class="py-4 px-6">Session Duration</th>
                <th class="py-4 px-6">Standard Fee</th>
                <th class="py-4 px-6">Format Available</th>
                <th class="py-4 px-6">Superbill Provided</th>
                <th class="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#EBF1F4] dark:divide-white/10 text-[#27343B] dark:text-[#EBF1F4]">
              <tr class="hover:bg-[#F8F6F1]/50 dark:hover:bg-white/5 transition-colors">
                <td class="py-4 px-6 font-bold text-[#294657] dark:text-[#F8F6F1]">Individual Psychotherapy</td>
                <td class="py-4 px-6">50 Minutes</td>
                <td class="py-4 px-6 font-semibold">$175</td>
                <td class="py-4 px-6">In-Person or Telehealth</td>
                <td class="py-4 px-6"><span class="text-emerald-600 dark:text-emerald-400 font-semibold"><i class="fas fa-check mr-1"></i> Yes (Out-of-Network)</span></td>
                <td class="py-4 px-6 text-right"><button type="button" class="open-appointment-btn text-[#D7B7A5] hover:underline font-bold">Book Intake &rarr;</button></td>
              </tr>
              <tr class="hover:bg-[#F8F6F1]/50 dark:hover:bg-white/5 transition-colors bg-[#D7B7A5]/5">
                <td class="py-4 px-6 font-bold text-[#294657] dark:text-[#F8F6F1]">Couples &amp; Marriage Care</td>
                <td class="py-4 px-6">75 Minutes</td>
                <td class="py-4 px-6 font-semibold">$225</td>
                <td class="py-4 px-6">In-Person or Telehealth</td>
                <td class="py-4 px-6"><span class="text-emerald-600 dark:text-emerald-400 font-semibold"><i class="fas fa-check mr-1"></i> Yes (Out-of-Network)</span></td>
                <td class="py-4 px-6 text-right"><button type="button" class="open-appointment-btn text-[#D7B7A5] hover:underline font-bold">Book Intake &rarr;</button></td>
              </tr>
              <tr class="hover:bg-[#F8F6F1]/50 dark:hover:bg-white/5 transition-colors">
                <td class="py-4 px-6 font-bold text-[#294657] dark:text-[#F8F6F1]">EMDR &amp; Somatic Trauma</td>
                <td class="py-4 px-6">60 Minutes</td>
                <td class="py-4 px-6 font-semibold">$195</td>
                <td class="py-4 px-6">In-Person or Telehealth</td>
                <td class="py-4 px-6"><span class="text-emerald-600 dark:text-emerald-400 font-semibold"><i class="fas fa-check mr-1"></i> Yes (Out-of-Network)</span></td>
                <td class="py-4 px-6 text-right"><button type="button" class="open-appointment-btn text-[#D7B7A5] hover:underline font-bold">Book Intake &rarr;</button></td>
              </tr>
              <tr class="hover:bg-[#F8F6F1]/50 dark:hover:bg-white/5 transition-colors">
                <td class="py-4 px-6 font-bold text-[#294657] dark:text-[#F8F6F1]">Teen &amp; Adolescent Counseling</td>
                <td class="py-4 px-6">50 Minutes</td>
                <td class="py-4 px-6 font-semibold">$165</td>
                <td class="py-4 px-6">In-Person or Telehealth</td>
                <td class="py-4 px-6"><span class="text-emerald-600 dark:text-emerald-400 font-semibold"><i class="fas fa-check mr-1"></i> Yes (Out-of-Network)</span></td>
                <td class="py-4 px-6 text-right"><button type="button" class="open-appointment-btn text-[#D7B7A5] hover:underline font-bold">Book Intake &rarr;</button></td>
              </tr>
              <tr class="hover:bg-[#F8F6F1]/50 dark:hover:bg-white/5 transition-colors">
                <td class="py-4 px-6 font-bold text-[#294657] dark:text-[#F8F6F1]">Encrypted Telehealth Video</td>
                <td class="py-4 px-6">50 Minutes</td>
                <td class="py-4 px-6 font-semibold">$175</td>
                <td class="py-4 px-6">Online HD Video Sanctuary</td>
                <td class="py-4 px-6"><span class="text-emerald-600 dark:text-emerald-400 font-semibold"><i class="fas fa-check mr-1"></i> Yes (Out-of-Network)</span></td>
                <td class="py-4 px-6 text-right"><button type="button" class="open-appointment-btn text-[#D7B7A5] hover:underline font-bold">Book Intake &rarr;</button></td>
              </tr>
              <tr class="hover:bg-[#F8F6F1]/50 dark:hover:bg-white/5 transition-colors">
                <td class="py-4 px-6 font-bold text-[#294657] dark:text-[#F8F6F1]">Mindfulness &amp; Anxiety Cohorts</td>
                <td class="py-4 px-6">90 Minutes</td>
                <td class="py-4 px-6 font-semibold">$75 / wk</td>
                <td class="py-4 px-6">Intimate Group (6-8 members)</td>
                <td class="py-4 px-6"><span class="text-emerald-600 dark:text-emerald-400 font-semibold"><i class="fas fa-check mr-1"></i> Yes (Out-of-Network)</span></td>
                <td class="py-4 px-6 text-right"><button type="button" class="open-appointment-btn text-[#D7B7A5] hover:underline font-bold">Book Intake &rarr;</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Shared FAQ Section (Accordion) -->
    <section class="py-16 bg-[#F8F6F1] dark:bg-[#11191f] border-t border-[#EBF1F4] dark:border-white/10">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div class="text-center space-y-2">
          <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Clear Answers</span>
          <h2 class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">
            Frequently Asked Questions
          </h2>
          <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96]">
            Transparent guidance about investment, scheduling, insurance, and clinical policies.
          </p>
        </div>

        <div class="space-y-3" id="pricing-services-faq">
          
          <details class="group p-5 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 [&_summary::-webkit-details-marker]:hidden cursor-pointer" open>
            <summary class="flex items-center justify-between font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">
              <span>How do I submit superbills for insurance reimbursement?</span>
              <span class="w-7 h-7 rounded-full bg-[#F8F6F1] dark:bg-white/10 flex items-center justify-center text-xs transition-transform group-open:rotate-180">
                <i class="fas fa-chevron-down"></i>
              </span>
            </summary>
            <p class="mt-3 text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
              At the end of each calendar month, our administrative portal automatically generates an itemized, CPT-coded superbill in your private Client Sanctuary account. You can download this document as a PDF and upload it directly to your insurance company's portal or via reimbursement apps (like Reimbursify). Most clients receive direct deposit reimbursements within 14 to 21 business days.
            </p>
          </details>

          <details class="group p-5 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
            <summary class="flex items-center justify-between font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">
              <span>What is your cancellation and rescheduling policy?</span>
              <span class="w-7 h-7 rounded-full bg-[#F8F6F1] dark:bg-white/10 flex items-center justify-center text-xs transition-transform group-open:rotate-180">
                <i class="fas fa-chevron-down"></i>
              </span>
            </summary>
            <p class="mt-3 text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
              Because your clinician reserves a dedicated clinical hour exclusively for you, we require a minimum of <strong>24 hours notice</strong> for cancellations or rescheduling. Cancellations made with less than 24 hours notice are subject to the standard session fee, with exceptions for acute medical emergencies.
            </p>
          </details>

          <details class="group p-5 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
            <summary class="flex items-center justify-between font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">
              <span>Can I pay using Health Savings (HSA) or Flexible Spending (FSA) accounts?</span>
              <span class="w-7 h-7 rounded-full bg-[#F8F6F1] dark:bg-white/10 flex items-center justify-center text-xs transition-transform group-open:rotate-180">
                <i class="fas fa-chevron-down"></i>
              </span>
            </summary>
            <p class="mt-3 text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
              Yes, absolutely. Licensed psychotherapy is an IRS-qualified medical expense. You can store your HSA or FSA debit card directly on file in your encrypted portal to cover all session fees tax-free.
            </p>
          </details>

          <details class="group p-5 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
            <summary class="flex items-center justify-between font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">
              <span>Are in-person and telehealth video session fees identical?</span>
              <span class="w-7 h-7 rounded-full bg-[#F8F6F1] dark:bg-white/10 flex items-center justify-center text-xs transition-transform group-open:rotate-180">
                <i class="fas fa-chevron-down"></i>
              </span>
            </summary>
            <p class="mt-3 text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
              Yes. Whether you meet your clinician in our soundproof Manhattan or Brooklyn suites or through our encrypted HIPAA-compliant virtual room, fees are identical and provide the exact same clinical depth, continuous care, and superbill eligibility.
            </p>
          </details>

        </div>
      </div>
    </section>

    <!-- Warm Sanctuary CTA Banner -->
    <section class="py-16 bg-[#294657] text-white">
      <div class="max-w-4xl mx-auto px-4 text-center space-y-6">
        <div class="w-12 h-12 rounded-2xl bg-[#D7B7A5] text-white flex items-center justify-center mx-auto text-xl shadow-lg">
          <i class="fas fa-heart"></i>
        </div>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold leading-tight">
          Ready to take the first step toward sustained emotional healing?
        </h2>
        <p class="text-xs sm:text-sm text-[#EBF1F4]/85 max-w-xl mx-auto leading-relaxed">
          Schedule your initial confidential intake consultation today. Our clinical intake team will match you with the specialist best aligned with your needs.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button type="button" class="open-appointment-btn px-8 py-4 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-lg transition-all hover:scale-105 active:scale-95">
            Book Confidential Intake
          </button>
          <a href="therapists.html" class="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 transition-all hover:scale-105">
            Meet Our Clinicians &rarr;
          </a>
        </div>
      </div>
    </section>
  `;
}

function buildServices() {
  const head = getHead('Therapy Services & Transparent Investment | Mindful Paths', 'Explore our comprehensive psychological services, fee transparency, individual psychotherapy, couples counseling, and somatic EMDR trauma care.');
  const header = getHeader('services');
  const content = `
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#EBF1F4] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#D7B7A5]">Home</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">Services</span>
    </div>
  </div>

  <section class="py-16 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-16">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Clinical Modalities &amp; Investment</span>
        <h1 class="font-heading text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Compassionate, Evidence-Based Therapy
        </h1>
        <p class="text-sm text-[#27343B] dark:text-[#EBF1F4]">
          Find the therapeutic support tailored to your unique emotional needs, schedule, and relationship dynamics—with complete fee transparency under the federal No Surprises Act.
        </p>
        
        <!-- Trust Badges Row -->
        <div class="pt-3 flex flex-wrap items-center justify-center gap-2.5">
          <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#8FAFC0]/15 text-[#294657] dark:text-[#8FAFC0] text-xs font-semibold">
            <i class="fas fa-shield-alt text-[#8FAFC0]"></i> HIPAA Compliant
          </span>
          <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D7B7A5]/15 text-[#294657] dark:text-[#D7B7A5] text-xs font-semibold">
            <i class="fas fa-certificate text-[#D7B7A5]"></i> APA Accredited
          </span>
          <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-semibold">
            <i class="fas fa-star text-amber-500"></i> 4.9/5 Clinical Rating
          </span>
        </div>
      </div>

      ${getSharedServicesPricingCards()}

    </div>
  </section>

  ${getSharedInsuranceFaqSection()}
  `;
  return head + header + content + getFooter();
}

// =========================================================================
// 3. service-details.html
// =========================================================================
function buildServiceDetails() {
  const head = getHead('Individual CBT & Anxiety Details', 'Deep-dive into our Cognitive Behavioral Therapy protocol for anxiety, panic, and chronic perfectionism.');
  const header = getHeader('services');
  const content = `
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#EBF1F4] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#D7B7A5]">Home</a>
      <span>/</span>
      <a href="services.html" class="hover:text-[#D7B7A5]">Services</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">Individual CBT for Anxiety</span>
    </div>
  </div>

  <section class="py-16 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div class="lg:col-span-8 space-y-6">
          <div class="rounded-3xl overflow-hidden shadow-xl mb-6">
            <img src="${IMAGES.service_detail_hero}" alt="CBT session" class="w-full h-80 sm:h-96 object-cover">
          </div>

          <span class="text-xs font-bold uppercase text-[#D7B7A5]">Clinical Deep-Dive</span>
          <h1 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
            Cognitive Behavioral Therapy for Anxiety &amp; Panic
          </h1>

          <p class="text-sm sm:text-base text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">
            Anxiety is not a character flaw or a permanent state of mind; it is an overactive nervous system signaling perceived danger where physical danger does not exist. Through Cognitive Behavioral Therapy (CBT) integrated with somatic grounding, we teach your brain and body to interpret cues realistically.
          </p>

          <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] pt-4">What We Address in Sessions</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] space-y-1">
              <strong class="text-[#294657] dark:text-[#F8F6F1] block"><i class="fas fa-check-circle text-[#8FAFC0] mr-1.5"></i> Catastrophic Thinking</strong>
              <p class="text-[#27343B] dark:text-[#7d8d96]">Deconstruct 'what if' spirals into manageable, objective facts.</p>
            </div>
            <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] space-y-1">
              <strong class="text-[#294657] dark:text-[#F8F6F1] block"><i class="fas fa-check-circle text-[#8FAFC0] mr-1.5"></i> Physical Panic Sensations</strong>
              <p class="text-[#27343B] dark:text-[#7d8d96]">Learn somatic vagal nerve resets to quiet chest tightness and palpitations.</p>
            </div>
            <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] space-y-1">
              <strong class="text-[#294657] dark:text-[#F8F6F1] block"><i class="fas fa-check-circle text-[#8FAFC0] mr-1.5"></i> Perfectionism &amp; Burnout</strong>
              <p class="text-[#27343B] dark:text-[#7d8d96]">Unhook self-worth from exhaustive overachievement and people-pleasing.</p>
            </div>
            <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] space-y-1">
              <strong class="text-[#294657] dark:text-[#F8F6F1] block"><i class="fas fa-check-circle text-[#8FAFC0] mr-1.5"></i> Boundary Setting</strong>
              <p class="text-[#27343B] dark:text-[#7d8d96]">Practice kind, assertive communication in relationships without guilt.</p>
            </div>
          </div>
        </div>

        <!-- Sidebar: Book & Clinician -->
        <div class="lg:col-span-4 space-y-6">
          <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 space-y-4">
            <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Service Snapshot</h3>
            <ul class="text-xs space-y-2.5 text-[#27343B] dark:text-[#7d8d96]">
              <li class="flex justify-between"><span>Format:</span> <strong class="text-[#294657] dark:text-[#F8F6F1]">In-Person or Video</strong></li>
              <li class="flex justify-between"><span>Session Duration:</span> <strong class="text-[#294657] dark:text-[#F8F6F1]">50 Minutes</strong></li>
              <li class="flex justify-between"><span>Fee:</span> <strong class="text-[#294657] dark:text-[#F8F6F1]">$175 / Session</strong></li>
              <li class="flex justify-between"><span>Superbill Provided:</span> <strong class="text-[#8FAFC0]">Yes (Out-of-Network)</strong></li>
            </ul>

            <button type="button" class="open-appointment-btn w-full py-3.5 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all">
              Book Intake for This Service
            </button>
          </div>

          <div class="p-6 rounded-3xl bg-white dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 space-y-3">
            <div class="flex items-center gap-3.5">
              <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins" class="w-16 h-16 rounded-2xl object-cover object-center border-2 border-[#D7B7A5]/30 shadow-sm shrink-0">
              <div>
                <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">Dr. Sarah Jenkins, Psy.D.</div>
                <div class="text-[11px] text-[#D7B7A5] font-bold">Primary Anxiety Specialist</div>
              </div>
            </div>
            <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">
              &ldquo;CBT isn't about positive thinking; it's about accurate, compassionate thinking.&rdquo;
            </p>
            <a href="therapist-details.html" class="block text-center text-xs font-bold text-[#294657] dark:text-[#8FAFC0] hover:underline pt-2">
              View Clinician Profile &rarr;
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
  return head + header + content + getFooter();
}

// =========================================================================
// 4. therapists.html
// =========================================================================
function buildTherapists() {
  const head = getHead(
    'Our Clinical Team & Specializations — Mindful Paths',
    'Meet our licensed psychologists, marriage and family therapists, trauma specialists, and mindful practitioners. Dig deep with human-centered psychotherapy.'
  );
  const header = getHeader('therapists.html');
  const content = `
  <!-- =========================================================================
       SECTION 1: Editorial Hero ("Dig deep with me.")
       Warm Cream Canvas (#F8F6F1) + Overlapping Arch Capsule & Pine Forest Backdrop
       ========================================================================= -->
  <section class="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-[#F8F6F1] dark:bg-[#11191f] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        <!-- Left: Editorial Typography -->
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#294657]/10 dark:bg-white/10 text-[#294657] dark:text-[#8FAFC0] font-bold text-xs uppercase tracking-wider">
            <i class="fas fa-seedling text-[#8FAFC0]"></i> Kraft-Inspired Psychotherapy
          </div>

          <h1 class="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-[1.08] tracking-tight">
            Dig deep<br>with me.
          </h1>

          <p class="text-base sm:text-lg text-[#27343B] dark:text-[#EBF1F4] leading-relaxed max-w-md">
            Relational therapy for modern relationships, high-achiever burnout, and profound emotional healing.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <button type="button" class="open-appointment-btn px-8 py-4 rounded-full bg-[#294657] hover:bg-[#1d3340] dark:bg-[#8FAFC0] dark:text-[#11191f] text-white font-bold text-sm shadow-xl shadow-[#294657]/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2.5">
              <i class="far fa-calendar-check"></i> Book A Call
            </button>
            <a href="#emotion-section" class="px-7 py-4 rounded-full bg-white dark:bg-[#17232b] hover:bg-[#faf6f2] text-[#294657] dark:text-[#F8F6F1] font-bold text-sm border border-[#EBF1F4] dark:border-white/10 shadow-sm transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <i class="fas fa-heart text-[#D7B7A5]"></i> Explore By Emotion
            </a>
          </div>

          <div class="pt-2 flex items-center gap-3 text-xs text-[#27343B] dark:text-[#7d8d96]">
            <i class="fas fa-shield-halved text-[#8FAFC0] text-sm"></i>
            <span>100% HIPAA Confidential &middot; In-person suites &amp; secure telehealth</span>
          </div>
        </div>

        <!-- Right: Overlapping Arch Capsule & Forest Pine Backdrop -->
        <div class="lg:col-span-6 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px]">
          <!-- Forest Pine Nature Photo on Right Half -->
          <div class="absolute right-0 top-0 bottom-0 w-3/4 sm:w-2/3 h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-[#1e2d37]">
            <img src="${IMAGES.forest_pine}" alt="Lush evergreen pine forest canopy" class="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-l from-transparent via-[#294657]/20 to-[#294657]/40 pointer-events-none"></div>
          </div>

          <!-- Overlapping Arch Capsule Portrait (as in reference image) -->
          <div class="relative z-10 mr-auto lg:ml-4 w-56 sm:w-64 md:w-72 aspect-[3/4] rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-[#17232b] bg-[#FAF8F5] dark:bg-[#17232b] transform hover:scale-105 transition-transform duration-500 group">
            <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins smiling warmly with coffee mug" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="absolute bottom-4 left-0 right-0 text-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Dr. Sarah Jenkins &middot; Psy.D.
            </div>
          </div>

          <!-- Floating Pill Badge -->
          <div class="absolute -bottom-4 left-4 sm:left-8 bg-white dark:bg-[#17232b] p-3.5 rounded-2xl shadow-xl border border-[#EBF1F4] dark:border-white/10 flex items-center gap-3 animate-float z-20">
            <div class="w-10 h-10 rounded-xl bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center font-bold text-sm">
              <i class="fas fa-check-circle"></i>
            </div>
            <div>
              <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">Intake Open</div>
              <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Private suites &amp; telehealth</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Fluid Wave Divider: Cream to Sage -->
  <div class="wave-divider bg-[#F8F6F1] dark:bg-[#11191f]">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="text-[#98B49B] dark:text-[#1b2b20] fill-current">
      <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
    </svg>
  </div>

  <!-- =========================================================================
       SECTION 2: "Let's take a beat."
       Soft Sage Green Canvas (#98B49B) + Cloud Blob & Arch Window
       ========================================================================= -->
  <section class="py-16 md:py-24 bg-[#98B49B] dark:bg-[#1b2b20] text-[#1E2E23] dark:text-[#e8efe9] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        <!-- Left Column: Storytelling & Organic Scalloped Cloud Photo -->
        <div class="lg:col-span-6 space-y-8">
          <div class="space-y-4">
            <h2 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E2E23] dark:text-white leading-[1.12]">
              Let's take a beat.
            </h2>
            <p class="text-base sm:text-lg text-[#25392C] dark:text-[#d3e2d6] leading-relaxed max-w-lg">
              For high achievers and perfectionists, it can feel much more comfortable to intellectualize and talk about your problems from a distance.
            </p>
            <p class="text-base sm:text-lg text-[#25392C] dark:text-[#d3e2d6] leading-relaxed max-w-lg font-medium">
              Allowing yourself to feel your deeper emotions can be painful, scary, and uncomfortable.
            </p>
          </div>

          <!-- The Organic 3-Lobe Scalloped Cloud / Blob Masked Photo (from reference screenshot) -->
          <div class="relative flex items-center justify-center lg:justify-start pt-4">
            <div class="organic-scallop-cloud overflow-hidden w-64 h-72 sm:w-72 sm:h-80 shadow-2xl border-4 border-white/60 dark:border-white/20 bg-[#bad0bd] dark:bg-[#25392c]">
              <img src="${IMAGES.client_mindful_green}" alt="Mindful reflection in cozy green sweater" class="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700">
            </div>
            <div class="absolute -bottom-4 right-8 lg:right-auto lg:left-56 bg-white/90 dark:bg-[#17232b]/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg text-xs font-bold text-[#1E2E23] dark:text-white flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#D7B7A5] animate-ping"></span> Somatic Grounding
            </div>
          </div>
        </div>

        <!-- Right Column: Arch Window Art Therapy & Empathetic Callout -->
        <div class="lg:col-span-6 space-y-8 flex flex-col items-center lg:items-end">
          <!-- Arch Window Photo (Floor art / watercolors as in reference) -->
          <div class="w-64 h-80 sm:w-72 sm:h-96 mask-arch overflow-hidden shadow-2xl border-4 border-white/60 dark:border-white/20 bg-[#bad0bd] dark:bg-[#25392c] group">
            <img src="${IMAGES.art_therapy}" alt="Art therapy and creative emotional expression" class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700">
          </div>

          <!-- Empathetic Callout Card -->
          <div class="max-w-md bg-white/30 dark:bg-black/20 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/40 dark:border-white/10 space-y-3">
            <p class="text-sm sm:text-base text-[#1E2E23] dark:text-[#e8efe9] leading-relaxed">
              Therapy is a safe space for you to experience those feelings and seek greater understanding of yourself, as opposed to analyzing and talking about how you feel from a distance.
            </p>
            <p class="font-heading text-lg font-bold text-[#1E2E23] dark:text-white italic">
              Does this sound familiar? Let's dig in.
            </p>
            <div class="pt-2">
              <a href="#clinicians-grid" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E2E23] hover:bg-[#121c15] text-white font-bold text-xs shadow-lg transition-all hover:scale-105">
                <i class="fas fa-arrow-down"></i> Explore Our 6 Clinicians
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Fluid Wave Divider: Sage to Cream -->
  <div class="wave-divider bg-[#98B49B] dark:bg-[#1b2b20]">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="text-[#F8F6F1] dark:text-[#11191f] fill-current">
      <path d="M0,0 C200,80 400,-20 600,60 C800,140 1050,20 1200,50 L1200,120 L0,120 Z"></path>
    </svg>
  </div>

  <!-- =========================================================================
       SECTION 3: Interactive Emotion Somatic Explorer & Animations
       User Requirement: "emotion ku animation add pannu"
       ========================================================================= -->
  <section id="emotion-section" class="py-20 md:py-28 bg-[#F8F6F1] dark:bg-[#11191f] border-b border-[#EBF1F4] dark:border-white/10 scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-14">
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D7B7A5]/15 text-[#D7B7A5] font-bold text-xs uppercase tracking-wider">
          <i class="fas fa-sparkles text-amber-400"></i> Somatic Emotional Resonance Engine
        </span>
        <h2 class="font-heading text-4xl sm:text-5xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-tight">
          What emotion are you holding today?
        </h2>
        <p class="text-sm sm:text-base text-[#27343B] dark:text-[#7d8d96] leading-relaxed">
          Select what you are experiencing. Experience an immediate calming somatic rhythm and see which clinician specializes in your exact emotional landscape.
        </p>
      </div>

      <!-- 6 Interactive Emotion Selectors -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" id="emotion-buttons-container">
        <!-- 1. Anxiety -->
        <button type="button" data-emotion="anxiety" class="emotion-pill active p-5 rounded-3xl bg-white dark:bg-[#17232b] border-2 border-[#8FAFC0] shadow-lg flex flex-col items-center text-center space-y-3 transition-all duration-300 transform hover:-translate-y-1 group relative">
          <div class="relative w-14 h-14 rounded-2xl bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            <span class="emotion-ripple-ring text-[#8FAFC0]/50"></span>
            <i class="fas fa-water"></i>
          </div>
          <div>
            <div class="font-bold text-sm text-[#294657] dark:text-[#F8F6F1]">Anxiety</div>
            <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Overwhelm &middot; Racing</div>
          </div>
        </button>

        <!-- 2. Burnout -->
        <button type="button" data-emotion="burnout" class="emotion-pill p-5 rounded-3xl bg-white dark:bg-[#17232b] border-2 border-transparent hover:border-[#D7B7A5] shadow-sm hover:shadow-lg flex flex-col items-center text-center space-y-3 transition-all duration-300 transform hover:-translate-y-1 group relative">
          <div class="relative w-14 h-14 rounded-2xl bg-[#D7B7A5]/20 text-[#D7B7A5] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            <i class="fas fa-battery-quarter"></i>
          </div>
          <div>
            <div class="font-bold text-sm text-[#294657] dark:text-[#F8F6F1]">Burnout</div>
            <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Fatigue &middot; Pressure</div>
          </div>
        </button>

        <!-- 3. Relationship -->
        <button type="button" data-emotion="relationship" class="emotion-pill p-5 rounded-3xl bg-white dark:bg-[#17232b] border-2 border-transparent hover:border-[#294657] shadow-sm hover:shadow-lg flex flex-col items-center text-center space-y-3 transition-all duration-300 transform hover:-translate-y-1 group relative">
          <div class="relative w-14 h-14 rounded-2xl bg-[#294657]/15 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            <i class="fas fa-heart-crack"></i>
          </div>
          <div>
            <div class="font-bold text-sm text-[#294657] dark:text-[#F8F6F1]">Conflict</div>
            <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Distance &middot; Couples</div>
          </div>
        </button>

        <!-- 4. Grief -->
        <button type="button" data-emotion="grief" class="emotion-pill p-5 rounded-3xl bg-white dark:bg-[#17232b] border-2 border-transparent hover:border-[#BACDE5] shadow-sm hover:shadow-lg flex flex-col items-center text-center space-y-3 transition-all duration-300 transform hover:-translate-y-1 group relative">
          <div class="relative w-14 h-14 rounded-2xl bg-[#BACDE5]/30 text-[#294657] dark:text-[#BACDE5] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            <i class="fas fa-cloud-rain"></i>
          </div>
          <div>
            <div class="font-bold text-sm text-[#294657] dark:text-[#F8F6F1]">Grief</div>
            <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Loss &middot; Sorrow</div>
          </div>
        </button>

        <!-- 5. Adolescent / ADHD -->
        <button type="button" data-emotion="adhd" class="emotion-pill p-5 rounded-3xl bg-white dark:bg-[#17232b] border-2 border-transparent hover:border-[#98B49B] shadow-sm hover:shadow-lg flex flex-col items-center text-center space-y-3 transition-all duration-300 transform hover:-translate-y-1 group relative">
          <div class="relative w-14 h-14 rounded-2xl bg-[#98B49B]/25 text-[#1E2E23] dark:text-[#98B49B] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            <i class="fas fa-brain"></i>
          </div>
          <div>
            <div class="font-bold text-sm text-[#294657] dark:text-[#F8F6F1]">Focus</div>
            <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">ADHD &middot; Youth</div>
          </div>
        </button>

        <!-- 6. Inner Peace -->
        <button type="button" data-emotion="peace" class="emotion-pill p-5 rounded-3xl bg-white dark:bg-[#17232b] border-2 border-transparent hover:border-[#D7B7A5] shadow-sm hover:shadow-lg flex flex-col items-center text-center space-y-3 transition-all duration-300 transform hover:-translate-y-1 group relative">
          <div class="relative w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            <i class="fas fa-seedling"></i>
          </div>
          <div>
            <div class="font-bold text-sm text-[#294657] dark:text-[#F8F6F1]">Growth</div>
            <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Mindfulness &middot; Peace</div>
          </div>
        </button>
      </div>

      <!-- Live Emotional Somatic Feedback Panel (Animated) -->
      <div id="emotion-feedback-panel" class="mt-10 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 p-6 sm:p-10 shadow-2xl transition-all duration-500">
        <!-- Rendered by client script below -->
      </div>

    </div>
  </section>

  <!-- Fluid Wave Divider: Cream to Periwinkle -->
  <div class="wave-divider bg-[#F8F6F1] dark:bg-[#11191f]">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="text-[#BACDE5] dark:text-[#182330] fill-current">
      <path d="M0,0 C300,70 500,0 750,70 C950,130 1100,20 1200,40 L1200,120 L0,120 Z"></path>
    </svg>
  </div>

  <!-- =========================================================================
       SECTION 4: Centered Editorial Feature ("Hi, I'm Dr. Sarah.")
       Soft Periwinkle Canvas (#BACDE5) + Arch Window Portrait Frame
       ========================================================================= -->
  <section class="py-16 md:py-24 bg-[#BACDE5] dark:bg-[#182330] text-[#1a2c3d] dark:text-[#E8F0F8] overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      
      <!-- Heading -->
      <h2 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#152331] dark:text-white">
        Hi, I'm Dr. Sarah.
      </h2>

      <!-- Arch Window Frame Portrait (from reference screenshot) -->
      <div class="w-52 h-72 sm:w-60 sm:h-80 mx-auto mask-arch overflow-hidden shadow-2xl border-4 border-white/70 dark:border-white/20 bg-white dark:bg-[#17232b] group">
        <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins in soft attire" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700">
      </div>

      <!-- Empathetic Bio Paragraphs -->
      <div class="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-[#213547] dark:text-[#d0e0ed] leading-relaxed">
        <p>
          I am a Licensed Clinical Psychologist and Clinical Director at Mindful Paths. I'm passionate about helping people uncover and live in alignment with the innate goodness and wisdom we all possess.
        </p>
        <p>
          I specialize in relational issues, both with individuals and couples, and how this contributes to anxiety, depression, or low self-esteem. I work with individuals, couples, and families grappling with life transitions related to career, parenthood, and emotional vulnerability.
        </p>
      </div>

      <!-- Pill Buttons -->
      <div class="pt-2 flex flex-wrap items-center justify-center gap-4">
        <a href="therapist-sarah-jenkins.html" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#152331] hover:bg-[#0c1620] text-white font-bold text-xs shadow-xl transition-all hover:scale-105 active:scale-95">
          Meet Dr. Sarah Jenkins &rarr;
        </a>
        <button type="button" class="open-appointment-btn px-8 py-4 rounded-full bg-white dark:bg-[#17232b] text-[#152331] dark:text-white font-bold text-xs shadow-md border border-white/60 hover:bg-[#FAF8F5] transition-all hover:scale-105">
          Book Confidential Session
        </button>
      </div>

    </div>
  </section>

  <!-- Fluid Wave Divider: Periwinkle to Alabaster -->
  <div class="wave-divider bg-[#BACDE5] dark:bg-[#182330]">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="text-[#F8F6F1] dark:text-[#11191f] fill-current">
      <path d="M0,0 C180,90 400,-10 650,80 C850,150 1050,10 1200,50 L1200,120 L0,120 Z"></path>
    </svg>
  </div>

  <!-- =========================================================================
       SECTION 5: Full Clinician Directory (Arch & Capsule Aesthetics)
       ========================================================================= -->
  <section id="clinicians-grid" class="py-20 md:py-28 bg-[#F8F6F1] dark:bg-[#11191f] scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D7B7A5]/15 text-[#D7B7A5] font-bold text-xs uppercase tracking-wider mb-2">
            <i class="fas fa-users"></i> Clinical Directory
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#294657] dark:text-[#F8F6F1]">
            Meet our licensed clinicians.
          </h2>
          <p class="text-sm sm:text-base text-[#27343B] dark:text-[#7d8d96] mt-2">
            Every clinician brings specialized terminal licensure, humanistic empathy, and profound psychological safety.
          </p>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full md:w-72">
          <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-[#27343B]/40 dark:text-[#7d8d96] text-xs"></i>
          <input type="text" id="clinician-search-input" placeholder="Search by name or focus..." class="w-full pl-10 pr-4 py-3 rounded-full bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 text-xs text-[#27343B] dark:text-[#F8F6F1] placeholder-[#27343B]/40 focus:outline-none focus:ring-2 focus:ring-[#8FAFC0] shadow-sm">
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap gap-2.5 mb-10" id="clinician-filter-tabs">
        <button type="button" data-filter="all" class="filter-tab active px-5 py-2.5 rounded-full text-xs font-bold bg-[#294657] text-white shadow-sm transition-all">All Clinicians (6)</button>
        <button type="button" data-filter="anxiety" class="filter-tab px-5 py-2.5 rounded-full text-xs font-bold bg-white dark:bg-[#17232b] text-[#294657] dark:text-[#F8F6F1] border border-[#EBF1F4] dark:border-white/10 hover:border-[#8FAFC0] transition-all">Anxiety &amp; Burnout</button>
        <button type="button" data-filter="couples" class="filter-tab px-5 py-2.5 rounded-full text-xs font-bold bg-white dark:bg-[#17232b] text-[#294657] dark:text-[#F8F6F1] border border-[#EBF1F4] dark:border-white/10 hover:border-[#8FAFC0] transition-all">Couples &amp; Family</button>
        <button type="button" data-filter="trauma" class="filter-tab px-5 py-2.5 rounded-full text-xs font-bold bg-white dark:bg-[#17232b] text-[#294657] dark:text-[#F8F6F1] border border-[#EBF1F4] dark:border-white/10 hover:border-[#8FAFC0] transition-all">Trauma &amp; EMDR</button>
        <button type="button" data-filter="psychiatry" class="filter-tab px-5 py-2.5 rounded-full text-xs font-bold bg-white dark:bg-[#17232b] text-[#294657] dark:text-[#F8F6F1] border border-[#EBF1F4] dark:border-white/10 hover:border-[#8FAFC0] transition-all">Psychiatry &amp; Youth</button>
        <button type="button" data-filter="mindfulness" class="filter-tab px-5 py-2.5 rounded-full text-xs font-bold bg-white dark:bg-[#17232b] text-[#294657] dark:text-[#F8F6F1] border border-[#EBF1F4] dark:border-white/10 hover:border-[#8FAFC0] transition-all">Mindfulness &amp; MBSR</button>
      </div>

      <!-- 6 Clinicians in Arch Window Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="clinicians-cards-grid">
        
        <!-- 1. Dr. Sarah Jenkins -->
        <div class="clinician-card card-wellness rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col h-full group hover:shadow-2xl transition-all duration-500 overflow-hidden" data-category="anxiety" data-name="sarah jenkins">
          <a href="therapist-sarah-jenkins.html" class="block relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7FD] dark:bg-[#1e2d37]">
            <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins, Psy.D." class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4 z-10">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md text-[11px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                <span class="w-2 h-2 rounded-full bg-[#8FAFC0] animate-pulse"></span> Accepts Intake
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-[11px] font-semibold text-white/90"><i class="fas fa-video mr-1"></i> In-Person &middot; Telehealth</span>
            </div>
          </a>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#D7B7A5] block">Clinical Psychologist &middot; Psy.D.</span>
              <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                <a href="therapist-sarah-jenkins.html" class="hover:text-[#D7B7A5] transition-colors">Dr. Sarah Jenkins</a>
              </h3>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96] leading-relaxed">Adult anxiety, high-achiever burnout, panic recovery &amp; evidence-based cognitive therapy.</p>
            </div>
            <div class="pt-4 flex items-center justify-between border-t border-[#EBF1F4] dark:border-white/10 text-xs">
              <span class="text-[11px] text-[#27343B] dark:text-[#7d8d96] font-medium"><i class="far fa-clock text-[#8FAFC0] mr-1"></i> Next: Thu 2 PM</span>
              <a href="therapist-sarah-jenkins.html" class="font-bold text-[#D7B7A5] hover:text-[#c5a390] flex items-center gap-1 transition-colors">
                View Profile <i class="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- 2. Dr. Marcus Vance -->
        <div class="clinician-card card-wellness rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col h-full group hover:shadow-2xl transition-all duration-500 overflow-hidden" data-category="couples" data-name="marcus vance">
          <a href="therapist-marcus-vance.html" class="block relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7FD] dark:bg-[#1e2d37]">
            <img src="${IMAGES.therapist_marcus}" alt="Dr. Marcus Vance, LMFT" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4 z-10">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md text-[11px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                <span class="w-2 h-2 rounded-full bg-[#8FAFC0] animate-pulse"></span> Accepts Intake
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-[11px] font-semibold text-white/90"><i class="fas fa-video mr-1"></i> Couples Suite &middot; Telehealth</span>
            </div>
          </a>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#294657] dark:text-[#8FAFC0] block">Marriage &amp; Family &middot; LMFT</span>
              <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                <a href="therapist-marcus-vance.html" class="hover:text-[#D7B7A5] transition-colors">Dr. Marcus Vance</a>
              </h3>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96] leading-relaxed">Couples reconciliation, de-escalating conflict cycles, Gottman method &amp; emotional intimacy.</p>
            </div>
            <div class="pt-4 flex items-center justify-between border-t border-[#EBF1F4] dark:border-white/10 text-xs">
              <span class="text-[11px] text-[#27343B] dark:text-[#7d8d96] font-medium"><i class="far fa-clock text-[#8FAFC0] mr-1"></i> Next: Thu 5:30 PM</span>
              <a href="therapist-marcus-vance.html" class="font-bold text-[#D7B7A5] hover:text-[#c5a390] flex items-center gap-1 transition-colors">
                View Profile <i class="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- 3. Elena Rostova -->
        <div class="clinician-card card-wellness rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col h-full group hover:shadow-2xl transition-all duration-500 overflow-hidden" data-category="trauma" data-name="elena rostova">
          <a href="therapist-elena-rostova.html" class="block relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7FD] dark:bg-[#1e2d37]">
            <img src="${IMAGES.therapist_elena}" alt="Elena Rostova, LCSW, CCTP" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4 z-10">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md text-[11px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                <span class="w-2 h-2 rounded-full bg-[#8FAFC0] animate-pulse"></span> Accepts Intake
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-[11px] font-semibold text-white/90"><i class="fas fa-video mr-1"></i> EMDR Certified Clinician</span>
            </div>
          </a>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#D7B7A5] block">Trauma Specialist &middot; LCSW, CCTP</span>
              <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                <a href="therapist-elena-rostova.html" class="hover:text-[#D7B7A5] transition-colors">Elena Rostova</a>
              </h3>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96] leading-relaxed">Certified EMDR clinician, somatic nervous system resets, bereavement &amp; complex PTSD recovery.</p>
            </div>
            <div class="pt-4 flex items-center justify-between border-t border-[#EBF1F4] dark:border-white/10 text-xs">
              <span class="text-[11px] text-[#27343B] dark:text-[#7d8d96] font-medium"><i class="far fa-clock text-[#8FAFC0] mr-1"></i> Next: Fri 11 AM</span>
              <a href="therapist-elena-rostova.html" class="font-bold text-[#D7B7A5] hover:text-[#c5a390] flex items-center gap-1 transition-colors">
                View Profile <i class="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- 4. Dr. David Kim -->
        <div class="clinician-card card-wellness rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col h-full group hover:shadow-2xl transition-all duration-500 overflow-hidden" data-category="psychiatry" data-name="david kim">
          <a href="therapist-david-kim.html" class="block relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7FD] dark:bg-[#1e2d37]">
            <img src="${IMAGES.therapist_david}" alt="Dr. David Kim, M.D." class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4 z-10">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md text-[11px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                <span class="w-2 h-2 rounded-full bg-[#8FAFC0] animate-pulse"></span> Accepts Intake
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-[11px] font-semibold text-white/90"><i class="fas fa-video mr-1"></i> Adolescent &middot; Adult Care</span>
            </div>
          </a>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#294657] dark:text-[#8FAFC0] block">Psychiatrist &middot; M.D.</span>
              <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                <a href="therapist-david-kim.html" class="hover:text-[#D7B7A5] transition-colors">Dr. David Kim</a>
              </h3>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96] leading-relaxed">Holistic medication consultations, adolescent ADHD, mood stabilization &amp; neurobiology.</p>
            </div>
            <div class="pt-4 flex items-center justify-between border-t border-[#EBF1F4] dark:border-white/10 text-xs">
              <span class="text-[11px] text-[#27343B] dark:text-[#7d8d96] font-medium"><i class="far fa-clock text-[#8FAFC0] mr-1"></i> Next: Mon 10 AM</span>
              <a href="therapist-david-kim.html" class="font-bold text-[#D7B7A5] hover:text-[#c5a390] flex items-center gap-1 transition-colors">
                View Profile <i class="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- 5. Dr. Maya Patel -->
        <div class="clinician-card card-wellness rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col h-full group hover:shadow-2xl transition-all duration-500 overflow-hidden" data-category="mindfulness" data-name="maya patel">
          <a href="therapist-maya-patel.html" class="block relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7FD] dark:bg-[#1e2d37]">
            <img src="${IMAGES.therapist_maya}" alt="Dr. Maya Patel, Ph.D." class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4 z-10">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md text-[11px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                <span class="w-2 h-2 rounded-full bg-[#8FAFC0] animate-pulse"></span> Accepts Intake
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-[11px] font-semibold text-white/90"><i class="fas fa-video mr-1"></i> MBSR Researcher &middot; Telehealth</span>
            </div>
          </a>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#D7B7A5] block">Ph.D. Neuropsychologist</span>
              <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                <a href="therapist-maya-patel.html" class="hover:text-[#D7B7A5] transition-colors">Dr. Maya Patel</a>
              </h3>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96] leading-relaxed">Mindfulness-based stress reduction (MBSR), values realignment &amp; executive burnout recovery.</p>
            </div>
            <div class="pt-4 flex items-center justify-between border-t border-[#EBF1F4] dark:border-white/10 text-xs">
              <span class="text-[11px] text-[#27343B] dark:text-[#7d8d96] font-medium"><i class="far fa-clock text-[#8FAFC0] mr-1"></i> Next: Wed 11 AM</span>
              <a href="therapist-maya-patel.html" class="font-bold text-[#D7B7A5] hover:text-[#c5a390] flex items-center gap-1 transition-colors">
                View Profile <i class="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- 6. James Thornton -->
        <div class="clinician-card card-wellness rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col h-full group hover:shadow-2xl transition-all duration-500 overflow-hidden" data-category="mindfulness" data-name="james thornton">
          <a href="therapist-james-thornton.html" class="block relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7FD] dark:bg-[#1e2d37]">
            <img src="${IMAGES.therapist_james}" alt="James Thornton, LPC" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4 z-10">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md text-[11px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                <span class="w-2 h-2 rounded-full bg-[#8FAFC0] animate-pulse"></span> Accepts Intake
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-[11px] font-semibold text-white/90"><i class="fas fa-video mr-1"></i> Men's Emotional Health</span>
            </div>
          </a>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#294657] dark:text-[#8FAFC0] block">LPC Mindfulness Clinician</span>
              <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                <a href="therapist-james-thornton.html" class="hover:text-[#D7B7A5] transition-colors">James Thornton</a>
              </h3>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96] leading-relaxed">Men's emotional health, major life transitions, boundary setting &amp; somatic grounding.</p>
            </div>
            <div class="pt-4 flex items-center justify-between border-t border-[#EBF1F4] dark:border-white/10 text-xs">
              <span class="text-[11px] text-[#27343B] dark:text-[#7d8d96] font-medium"><i class="far fa-clock text-[#8FAFC0] mr-1"></i> Next: Fri 2 PM</span>
              <a href="therapist-james-thornton.html" class="font-bold text-[#D7B7A5] hover:text-[#c5a390] flex items-center gap-1 transition-colors">
                View Profile <i class="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Client-Side Emotion Resonance & Directory Filter Script -->
  <script>
    (function() {
      // 1. Emotion Resonance Data
      var emotionData = {
        anxiety: {
          title: 'Anxiety & Nervous System Overwhelm',
          color: '#8FAFC0',
          badge: 'Somatic Grounding & CBT',
          rhythmText: 'Inhale peace (4s) ... Release tension (6s)',
          affirmation: '"Your body is trying to protect you. Together, we help your nervous system remember safety."',
          therapistName: 'Dr. Sarah Jenkins, Psy.D.',
          therapistTitle: 'Clinical Psychologist & Director',
          therapistImage: '${IMAGES.therapist_sarah}',
          profileLink: 'therapist-sarah-jenkins.html',
          filterKey: 'anxiety'
        },
        burnout: {
          title: 'Chronic Burnout & High-Achiever Fatigue',
          color: '#D7B7A5',
          badge: 'MBSR & Values Alignment',
          rhythmText: 'Drop your shoulders ... Unclench your jaw',
          affirmation: '"You are not a machine. Your worth is not defined by how much you produce or endure."',
          therapistName: 'Dr. Maya Patel, Ph.D.',
          therapistTitle: 'Ph.D. Neuropsychologist',
          therapistImage: '${IMAGES.therapist_maya}',
          profileLink: 'therapist-maya-patel.html',
          filterKey: 'mindfulness'
        },
        relationship: {
          title: 'Relational Conflict & Intimacy Distance',
          color: '#294657',
          badge: 'Gottman Method & Relational Repair',
          rhythmText: 'Softening defensiveness ... Listening deeply',
          affirmation: '"Conflict is not the end of closeness—it is an unguided bid for deeper connection."',
          therapistName: 'Dr. Marcus Vance, LMFT',
          therapistTitle: 'Marriage & Family Therapist',
          therapistImage: '${IMAGES.therapist_marcus}',
          profileLink: 'therapist-marcus-vance.html',
          filterKey: 'couples'
        },
        grief: {
          title: 'Tender Grief, Loss & Complex Trauma',
          color: '#BACDE5',
          badge: 'Certified EMDR & Bereavement',
          rhythmText: 'Holding space ... Gentle slow breaths',
          affirmation: '"Grief is love with nowhere to go. We give your sorrow a gentle, sacred place to land."',
          therapistName: 'Elena Rostova, LCSW, CCTP',
          therapistTitle: 'Trauma Specialist & EMDR Clinician',
          therapistImage: '${IMAGES.therapist_elena}',
          profileLink: 'therapist-elena-rostova.html',
          filterKey: 'trauma'
        },
        adhd: {
          title: 'Focus Struggles, Youth & Life Transitions',
          color: '#98B49B',
          badge: 'Developmental Neuropsychiatry',
          rhythmText: 'Re-centering attention ... One mindful step',
          affirmation: '"Your brain works differently, not incorrectly. We build systems that honor how you think."',
          therapistName: 'Dr. David Kim, M.D.',
          therapistTitle: 'Board-Certified Psychiatrist',
          therapistImage: '${IMAGES.therapist_david}',
          profileLink: 'therapist-david-kim.html',
          filterKey: 'psychiatry'
        },
        peace: {
          title: 'Cultivating Wholeness & Emotional Grounding',
          color: '#D7B7A5',
          badge: 'Mindful Somatic Grounding',
          rhythmText: 'Breathe into your heart center ... Root down',
          affirmation: '"True peace is not the absence of life storms; it is the quiet harbor inside yourself."',
          therapistName: 'James Thornton, LPC',
          therapistTitle: 'Licensed Professional Counselor',
          therapistImage: '${IMAGES.therapist_james}',
          profileLink: 'therapist-james-thornton.html',
          filterKey: 'mindfulness'
        }
      };

      function renderEmotionPanel(key) {
        var data = emotionData[key] || emotionData.anxiety;
        var panel = document.getElementById('emotion-feedback-panel');
        if (!panel) return;

        panel.innerHTML = 
          '<div class=\"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center\">' +
            '<div class=\"lg:col-span-7 space-y-5\">' +
              '<div class=\"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-sm\" style=\"background-color:' + data.color + ';\">' +
                '<i class=\"fas fa-heart-pulse\"></i> ' + data.badge +
              '</div>' +
              '<h3 class=\"font-heading text-2xl sm:text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]\">' + data.title + '</h3>' +
              '<p class=\"text-sm sm:text-base italic text-[#27343B] dark:text-[#d3e0e8] leading-relaxed border-l-4 pl-4\" style=\"border-color:' + data.color + ';\">' +
                data.affirmation +
              '</p>' +
              '<div class=\"flex items-center gap-3 pt-2 text-xs font-semibold text-[#27343B] dark:text-[#8FAFC0]\">' +
                '<span class=\"w-3 h-3 rounded-full animate-ping\" style=\"background-color:' + data.color + ';\"></span>' +
                '<span>Somatic Rhythm: ' + data.rhythmText + '</span>' +
              '</div>' +
            '</div>' +

            '<div class=\"lg:col-span-5 bg-[#FAF8F5] dark:bg-[#11191f] p-5 sm:p-6 rounded-3xl border border-[#EBF1F4] dark:border-white/10 flex items-center gap-4 group shadow-md\">' +
              '<div class=\"w-20 h-24 sm:w-24 sm:h-28 mask-arch overflow-hidden flex-shrink-0 border-2 border-white shadow-md\">' +
                '<img src=\"' + data.therapistImage + '\" alt=\"' + data.therapistName + '\" class=\"w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500\">' +
              '</div>' +
              '<div class=\"space-y-1.5 flex-1\">' +
                '<div class=\"text-[11px] font-bold uppercase tracking-wider text-[#D7B7A5]\">Recommended Clinician</div>' +
                '<h4 class=\"font-heading text-base sm:text-lg font-bold text-[#294657] dark:text-[#F8F6F1]\">' + data.therapistName + '</h4>' +
                '<p class=\"text-xs text-[#27343B] dark:text-[#7d8d96]\">' + data.therapistTitle + '</p>' +
                '<div class=\"pt-2 flex items-center gap-2\">' +
                  '<a href=\"' + data.profileLink + '\" class=\"px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-sm hover:opacity-90 transition-opacity\" style=\"background-color:' + data.color + ';\">View Profile</a>' +
                  '<button type=\"button\" class=\"filter-directory-btn text-xs font-bold text-[#294657] dark:text-[#8FAFC0] hover:underline\" data-filter=\"' + data.filterKey + '\">Filter Directory &darr;</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>';

        // Bind filter directory button
        var filterBtn = panel.querySelector('.filter-directory-btn');
        if (filterBtn) {
          filterBtn.addEventListener('click', function() {
            var targetFilter = this.getAttribute('data-filter');
            applyFilter(targetFilter);
            var gridEl = document.getElementById('clinicians-grid');
            if (gridEl) gridEl.scrollIntoView({ behavior: 'smooth' });
          });
        }
      }

      // Initialize emotion buttons
      var emotionButtons = document.querySelectorAll('.emotion-pill');
      emotionButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          emotionButtons.forEach(function(b) {
            b.classList.remove('active', 'border-[#8FAFC0]', 'shadow-lg');
            b.classList.add('border-transparent');
            var ripple = b.querySelector('.emotion-ripple-ring');
            if (ripple) ripple.remove();
          });
          btn.classList.add('active', 'border-[#8FAFC0]', 'shadow-lg');
          btn.classList.remove('border-transparent');
          var iconBox = btn.querySelector('.relative');
          if (iconBox && !iconBox.querySelector('.emotion-ripple-ring')) {
            var ring = document.createElement('span');
            ring.className = 'emotion-ripple-ring text-[#8FAFC0]/50';
            iconBox.appendChild(ring);
          }
          var emotionKey = btn.getAttribute('data-emotion');
          renderEmotionPanel(emotionKey);
        });
      });

      // Initial render with anxiety
      renderEmotionPanel('anxiety');

      // 2. Directory Filtering & Search
      var filterTabs = document.querySelectorAll('.filter-tab');
      var clinicianCards = document.querySelectorAll('.clinician-card');
      var searchInput = document.getElementById('clinician-search-input');

      function applyFilter(category) {
        filterTabs.forEach(function(tab) {
          if (tab.getAttribute('data-filter') === category) {
            tab.classList.add('active', 'bg-[#294657]', 'text-white');
            tab.classList.remove('bg-white', 'dark:bg-[#17232b]', 'text-[#294657]', 'dark:text-[#F8F6F1]');
          } else {
            tab.classList.remove('active', 'bg-[#294657]', 'text-white');
            tab.classList.add('bg-white', 'dark:bg-[#17232b]', 'text-[#294657]', 'dark:text-[#F8F6F1]');
          }
        });

        clinicianCards.forEach(function(card) {
          var cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      }

      filterTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
          var cat = this.getAttribute('data-filter');
          applyFilter(cat);
        });
      });

      if (searchInput) {
        searchInput.addEventListener('input', function() {
          var query = this.value.toLowerCase().trim();
          clinicianCards.forEach(function(card) {
            var name = card.getAttribute('data-name') || '';
            var text = card.textContent.toLowerCase();
            if (name.indexOf(query) !== -1 || text.indexOf(query) !== -1) {
              card.style.display = '';
            } else {
              card.style.display = 'none';
            }
          });
        });
      }

    })();
  </script>
  `;
  return head + header + content + getFooter();
}

// =========================================================================
// 5. therapist-details.html
// =========================================================================
function buildTherapistDetails() {
  const head = getHead('Dr. Sarah Jenkins, Psy.D. | Clinician Profile', 'Licensed Clinical Psychologist specializing in adult anxiety, burnout, and evidence-based CBT.');
  const header = getHeader('therapists');
  const content = `
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#EBF1F4] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#D7B7A5]">Home</a>
      <span>/</span>
      <a href="therapists.html" class="hover:text-[#D7B7A5]">Therapists</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">Dr. Sarah Jenkins</span>
    </div>
  </div>

  <section class="py-16 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left: Prominent Portrait & Credentials Card -->
        <div class="lg:col-span-5 space-y-6">
          <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#1e2d37] bg-[#EBF1F4]/40 dark:bg-[#17232b] relative aspect-[4/5]">
            <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins, Psy.D." class="w-full h-full object-cover object-center">
            <div class="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md p-4 rounded-2xl border border-[#EBF1F4] dark:border-white/10 shadow-lg">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-sm font-bold text-[#294657] dark:text-[#F8F6F1]">Dr. Sarah Jenkins, Psy.D.</div>
                  <div class="text-[11px] text-[#8FAFC0] font-bold"><i class="fas fa-check-circle"></i> Licensed Clinical Psychologist</div>
                </div>
                <span class="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-[#D7B7A5]/10 text-[#D7B7A5]">NY #024819</span>
              </div>
            </div>
          </div>

          <!-- Quick Stats / Credentials -->
          <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 space-y-3 text-xs">
            <h3 class="font-heading font-bold text-sm text-[#294657] dark:text-[#F8F6F1]">Credentials &amp; Accreditations</h3>
            <ul class="space-y-2.5 text-[#27343B] dark:text-[#7d8d96]">
              <li class="flex items-center gap-2"><i class="fas fa-graduation-cap text-[#D7B7A5]"></i> Doctorate in Clinical Psychology (Psy.D.) &ndash; Columbia University</li>
              <li class="flex items-center gap-2"><i class="fas fa-certificate text-[#8FAFC0]"></i> Certified Cognitive Behavioral Therapist &ndash; Beck Institute</li>
              <li class="flex items-center gap-2"><i class="fas fa-award text-[#D7B7A5]"></i> Member, American Psychological Association (APA)</li>
              <li class="flex items-center gap-2"><i class="fas fa-shield-alt text-[#8FAFC0]"></i> 12+ Years Clinical Practice &amp; Mindful Supervision</li>
            </ul>
          </div>
        </div>

        <!-- Right: Profile Info & Booking -->
        <div class="lg:col-span-7 space-y-8">
          <div class="space-y-2">
            <span class="inline-block px-3.5 py-1 rounded-full bg-[#D7B7A5]/10 text-xs font-bold uppercase text-[#D7B7A5] tracking-wider">
              Lead Clinical Psychologist
            </span>
            <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#294657] dark:text-[#F8F6F1]">
              Dr. Sarah Jenkins, Psy.D.
            </h1>
            <p class="text-sm text-[#8FAFC0] font-semibold">
              Specializing in Adult Anxiety, Panic Disorders, Somatic Grounding &amp; High-Achiever Burnout
            </p>
          </div>

          <!-- Philosophy Quote Block -->
          <blockquote class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#D7B7A5] text-sm text-[#27343B] dark:text-[#EBF1F4] italic leading-relaxed">
            &ldquo;My philosophy centers on creating a space of unconditional respect. When clients enter my room, they often carry immense exhaustion from trying to hold everything together. We slow down the frantic pace, examine the stories fueling your anxiety, and re-anchor in what truly matters to you.&rdquo;
          </blockquote>

          <div class="space-y-3">
            <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">Clinical Approach &amp; Perspective</h2>
            <p class="text-sm text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">
              Dr. Jenkins integrates evidence-based Cognitive Behavioral Therapy (CBT) with modern somatic regulation techniques. Her sessions are non-clinical, warm, and collaborative. Rather than viewing anxiety as a defect, she views it as an overprotective nervous system response that can be gently retrained toward safety.
            </p>
          </div>

          <div class="space-y-3">
            <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Areas of Specialization</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-4 bg-[#F8F6F1] dark:bg-[#1e2d37] rounded-2xl border border-[#EBF1F4] dark:border-white/10 font-semibold text-[#294657] dark:text-[#F8F6F1] flex items-center gap-2.5">
                <i class="fas fa-brain text-[#D7B7A5] text-base"></i> Cognitive Behavioral Restructuring
              </div>
              <div class="p-4 bg-[#F8F6F1] dark:bg-[#1e2d37] rounded-2xl border border-[#EBF1F4] dark:border-white/10 font-semibold text-[#294657] dark:text-[#F8F6F1] flex items-center gap-2.5">
                <i class="fas fa-lungs text-[#8FAFC0] text-base"></i> Somatic Vagal Grounding
              </div>
              <div class="p-4 bg-[#F8F6F1] dark:bg-[#1e2d37] rounded-2xl border border-[#EBF1F4] dark:border-white/10 font-semibold text-[#294657] dark:text-[#F8F6F1] flex items-center gap-2.5">
                <i class="fas fa-briefcase text-[#D7B7A5] text-base"></i> Perfectionism &amp; Executive Burnout
              </div>
              <div class="p-4 bg-[#F8F6F1] dark:bg-[#1e2d37] rounded-2xl border border-[#EBF1F4] dark:border-white/10 font-semibold text-[#294657] dark:text-[#F8F6F1] flex items-center gap-2.5">
                <i class="fas fa-compass text-[#8FAFC0] text-base"></i> Relational Attachment &amp; Transitions
              </div>
            </div>
          </div>

          <!-- Schedule Booking Action Box -->
          <div class="p-6 rounded-3xl bg-gradient-to-r from-[#294657] to-[#1d3340] text-white shadow-xl space-y-4">
            <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <div>
                <h4 class="font-heading text-xl font-bold">Schedule Intake with Dr. Jenkins</h4>
                <p class="text-xs text-[#EBF1F4]">Next available opening: <strong class="text-[#f0baa9]">This Thursday at 2:00 PM EST</strong></p>
              </div>
              <button type="button" class="open-appointment-btn px-7 py-3.5 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white text-xs font-bold shadow-lg transition-all hover:scale-105 active:scale-95 shrink-0">
                Book Confidential Session
              </button>
            </div>
            <div class="pt-3 border-t border-white/15 flex flex-wrap gap-4 text-xs text-white/80">
              <span><i class="fas fa-check-circle text-[#8FAFC0] mr-1"></i> 50-Min Session ($175)</span>
              <span><i class="fas fa-check-circle text-[#8FAFC0] mr-1"></i> Out-of-Network Superbills</span>
              <span><i class="fas fa-check-circle text-[#8FAFC0] mr-1"></i> In-Person &amp; Telehealth</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
  `;
  return head + header + content + getFooter();
}

// =========================================================================
// 6. resources.html
// =========================================================================
function buildResources() {
  const head = getHead('Self-Help & Resources | Box Breathing & Screeners', 'Free emotional regulation tools, 4-4-4 box breathing circle, and mental wellness screeners.');
  const header = getHeader('resources');
  const content = `
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#EBF1F4] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#D7B7A5]">Home</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">Resources</span>
    </div>
  </div>

  <!-- Breathing Tool Component -->
  <section class="py-16 bg-[#F8F6F1] dark:bg-[#11191f]">
    <div class="max-w-3xl mx-auto px-4 text-center space-y-6">
      <span class="text-xs font-bold uppercase tracking-wider text-[#8FAFC0]">Interactive Somatic Tool</span>
      <h1 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
        Box Breathing Meditation
      </h1>
      <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#EBF1F4]">
        Follow the 4-4-4 rhythm below to steady heart-rate variability and soothe acute stress.
      </p>

      <div class="relative w-60 h-60 mx-auto flex items-center justify-center pt-4">
        <div id="breathing-circle" class="w-48 h-48 rounded-full bg-gradient-to-tr from-[#294657] to-[#8FAFC0] text-white flex flex-col items-center justify-center p-6 shadow-2xl transition-transform duration-1000 transform scale-90">
          <span id="breathing-stage" class="font-heading text-2xl font-bold">Ready</span>
          <span id="breathing-timer" class="text-xs text-white/80 mt-1">Press Start Below</span>
        </div>
      </div>

      <div class="flex justify-center gap-3 pt-2">
        <button type="button" id="breathing-start-btn" class="px-7 py-3 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all">
          <i class="fas fa-play mr-1.5"></i> Begin Breathing
        </button>
        <button type="button" id="breathing-reset-btn" class="px-5 py-3 rounded-full bg-white dark:bg-[#17232b] text-[#294657] dark:text-[#F8F6F1] font-bold text-xs border border-[#EBF1F4] dark:border-white/10 transition-all">
          Reset
        </button>
      </div>
    </div>
  </section>

  <!-- Crisis Resources Banner -->
  <section class="py-16 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] mb-6">24/7 Immediate Crisis Support</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
        <div class="p-6 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 space-y-2">
          <strong class="text-sm text-[#D7B7A5] block">988 Suicide &amp; Crisis Lifeline</strong>
          <p class="text-[#27343B] dark:text-[#7d8d96]">Free, confidential 24/7 support across the US. Call or text 988.</p>
        </div>
        <div class="p-6 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 space-y-2">
          <strong class="text-sm text-[#294657] dark:text-[#8FAFC0] block">Crisis Text Line</strong>
          <p class="text-[#27343B] dark:text-[#7d8d96]">Text HOME to 741741 to connect with a crisis counselor 24/7.</p>
        </div>
        <div class="p-6 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 space-y-2">
          <strong class="text-sm text-[#8FAFC0] block">The Trevor Project</strong>
          <p class="text-[#27343B] dark:text-[#7d8d96]">LGBTQ+ youth crisis support. Call 1-866-488-7386 anytime.</p>
        </div>
      </div>
    </div>
  </section>

  <script src="assets/js/breathing.js"></script>
  `;
  return head + header + content + getFooter();
}

// =========================================================================
// 7. blog.html & Individual Clinical Articles
// =========================================================================
const BLOG_ARTICLES = [
  {
    file: 'blog-details.html',
    slug: 'overcoming-daily-anxiety',
    aliasFile: 'blog-overcoming-anxiety.html',
    title: 'Overcoming Daily Anxiety: 5 Gentle Grounding Practices That Actually Work',
    category: 'Anxiety & Grounding',
    readTime: '5 Min Read',
    author: 'Dr. Sarah Jenkins, Psy.D.',
    authorRole: 'Clinical Director & Anxiety Specialist',
    authorImg: IMAGES.therapist_sarah,
    heroImg: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Practical, body-based grounding tools you can use anytime your chest tightens, thoughts start racing, or anxiety threatens to take over your day.',
    quote: 'You cannot talk an anxious nervous system into calm using logic alone; you must speak to the body first through the breath.',
    contentHtml: `
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Have you ever noticed your shoulders rising toward your ears, your breathing turning shallow, and a tight knot forming in your chest during a tense moment or overwhelming day? These are not flaws in your willpower—they are autonomic survival responses triggered by an overstimulated nervous system.
      </p>
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        When anxiety spikes, your prefrontal cortex (the rational, problem-solving center of the brain) goes partially offline as your amygdala prepares for danger. This is why repeating logical affirmations often fails when you are in the throes of panic. To truly calm the mind, we must first signal physical safety to the body.
      </p>
      
      <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#D7B7A5] space-y-2 my-6">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Core Clinical Takeaway</span>
        <blockquote class="font-heading text-xl italic text-[#294657] dark:text-[#F8F6F1]">
          &ldquo;You cannot talk an anxious nervous system into calm using logic alone; you must speak to the body first through the breath and physical senses.&rdquo;
        </blockquote>
      </div>

      <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] pt-4">5 Actionable Grounding Steps for Immediate Relief</h2>
      
      <div class="space-y-4 my-6">
        <div class="p-5 rounded-2xl bg-white dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 space-y-2">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center font-bold text-sm">1</span>
            <h4 class="font-bold text-[#294657] dark:text-[#F8F6F1]">The Physiological Sigh</h4>
          </div>
          <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96] pl-11">Take two quick inhales through the nose without exhaling in between, followed by one long, slow, vocalized exhale through the mouth. Repeating this two to three times pops collapsed alveoli in the lungs and immediately slows the heart rate.</p>
        </div>

        <div class="p-5 rounded-2xl bg-white dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 space-y-2">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-[#D7B7A5]/20 text-[#D7B7A5] flex items-center justify-center font-bold text-sm">2</span>
            <h4 class="font-bold text-[#294657] dark:text-[#F8F6F1]">The 5-4-3-2-1 Sensory Reset</h4>
          </div>
          <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96] pl-11">Look around your environment right now and name 5 things you can see, 4 textures you can physically touch, 3 sounds you can hear, 2 scents you can smell, and 1 positive affirmation you can tell yourself.</p>
        </div>

        <div class="p-5 rounded-2xl bg-white dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 space-y-2">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center font-bold text-sm">3</span>
            <h4 class="font-bold text-[#294657] dark:text-[#F8F6F1]">Weight Transfer &amp; Feet on Floor</h4>
          </div>
          <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96] pl-11">Press your feet firmly into the floor. Feel the solid earth supporting you. Shifting your weight side-to-side stimulates proprioceptors in your calves and ankles, anchoring your attention away from racing thoughts.</p>
        </div>
      </div>

      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Healing from chronic anxiety is not about never feeling anxious again; it is about building trust in your body that you possess the tools to navigate anxiety when it arrives.
      </p>
    `
  },
  {
    file: 'blog-couples-communication.html',
    slug: 'couples-communication',
    aliasFile: 'blog-relationship-communication.html',
    title: 'How to Talk Through Disagreements Without Hurting Each Other',
    category: 'Couples & Marriage',
    readTime: '7 Min Read',
    author: 'Dr. Marcus Vance, LMFT',
    authorRole: 'Senior Relationship & Couples Clinician',
    authorImg: IMAGES.therapist_marcus,
    heroImg: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Why arguments quickly turn into defensive spirals, and how small shifts in emotional vulnerability can transform marital tension into deep connection.',
    quote: 'Behind every sharp criticism or cold defensive wall lies an unmet emotional longing waiting to be acknowledged.',
    contentHtml: `
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Couples frequently arrive in our clinic exhausted by cyclical fights that erupt over minuscule triggers—unwashed dishes in the sink, a delayed text message, or an ambiguous tone of voice. Yet when we examine the neurological dynamics, partners are rarely fighting about chores; they are desperate bids for emotional safety and reassurance.
      </p>
      
      <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#D7B7A5] space-y-2 my-6">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Clinical Ground Rule</span>
        <blockquote class="font-heading text-xl italic text-[#294657] dark:text-[#F8F6F1]">
          &ldquo;Behind every sharp criticism, hostile comment, or cold defensive wall lies an unmet universal longing to be seen, appreciated, and loved.&rdquo;
        </blockquote>
      </div>

      <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] pt-4">The Gentle Startup Technique</h2>
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Clinical research by the Gottman Institute reveals that 96% of conversations end on the exact same emotional note they began. If a conversation begins with a harsh accusation (&ldquo;You never listen to me!&rdquo;), the partner's nervous system instinctively retreats into defensive counter-attack.
      </p>
      <ul class="list-disc list-inside space-y-2 text-sm text-[#27343B]/80 dark:text-[#7d8d96] pl-2 my-4">
        <li><strong>Describe what is happening without judgment:</strong> State the facts rather than attributing malicious motives.</li>
        <li><strong>State your vulnerability:</strong> &ldquo;I feel lonely and overwhelmed right now&rdquo; triggers compassion; &ldquo;You don't care about me&rdquo; triggers defensiveness.</li>
        <li><strong>Make a polite, specific request:</strong> State clearly what would help you feel supported in this moment.</li>
      </ul>
    `
  },
  {
    file: 'blog-bedtime-rumination.html',
    slug: 'quieting-night-thoughts',
    aliasFile: 'blog-quieting-night-thoughts.html',
    title: 'Quieting Your Mind at 2 AM: How to Fall Asleep Without Racing Thoughts',
    category: 'Sleep & Night Wellness',
    readTime: '6 Min Read',
    author: 'James Thornton, LCSW',
    authorRole: 'Sleep & Dialectical Behavioral Specialist',
    authorImg: IMAGES.therapist_james,
    heroImg: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Simple cognitive defusion exercises and nighttime routines to halt catastrophic bedtime mental loops and restore deep, restorative sleep.',
    quote: 'The midnight brain is an unreliable narrator; never negotiate your life choices in the dark.',
    contentHtml: `
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Lying awake at 2:00 AM while your prefrontal cortex replays a conversation from three months ago or invents catastrophic financial scenarios is an exhausting experience. In clinical psychology, this is known as nocturnal cognitive hyperarousal.
      </p>
      
      <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#D7B7A5] space-y-2 my-6">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Midnight Cognitive Rule</span>
        <blockquote class="font-heading text-xl italic text-[#294657] dark:text-[#F8F6F1]">
          &ldquo;The midnight brain is an unreliable narrator lacking daytime serotonin and dopamine; never make major life evaluations in the dark.&rdquo;
        </blockquote>
      </div>

      <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] pt-4">The 20-Minute Bed Rule</h2>
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        If you have been tossing and turning for more than 20 minutes, get out of bed immediately. Staying in bed while frustrated trains your subconscious brain to associate your mattress with anxiety rather than rest.
      </p>
      <ul class="list-disc list-inside space-y-2 text-sm text-[#27343B]/80 dark:text-[#7d8d96] pl-2 my-4">
        <li><strong>Sit in a dimly lit, comfortable chair:</strong> Keep lighting soft and amber (avoid blue screens).</li>
        <li><strong>The Worry Download:</strong> Grab a notebook and write down the 3 concerns circling in your head. Tell yourself: &ldquo;These are safe on paper. I will address them tomorrow at 10:00 AM.&rdquo;</li>
        <li><strong>Return only when sleepy:</strong> Crawl back into bed only when heavy eyelids and yawning return naturally.</li>
      </ul>
    `
  },
  {
    file: 'blog-burnout-perfectionism.html',
    slug: 'unlearning-burnout',
    aliasFile: 'blog-healing-burnout.html',
    title: 'Unlearning Burnout: Why Rest Is a Biological Need, Not a Reward You Earn',
    category: 'Workplace Well-being',
    readTime: '8 Min Read',
    author: 'Dr. Maya Patel, Ph.D.',
    authorRole: 'Occupational Health & Neurodiversity Specialist',
    authorImg: IMAGES.therapist_maya,
    heroImg: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Deconstructing the trap of hyper-productivity, boundary collapse, and physiological depletion among hardworking achievers.',
    quote: 'Rest is not a reward you earn after depletion; it is the fundamental fuel that makes life meaningful.',
    contentHtml: `
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        High-functioning perfectionism is often celebrated in modern culture. We praise the individual who replies to emails at midnight, takes on extra projects without complaining, and pushes through illness with caffeine. But under the clinical microscope, this chronic hyper-performance is frequently an anxious coping strategy designed to outrun feelings of inadequacy.
      </p>

      <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#D7B7A5] space-y-2 my-6">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Burnout Antidote</span>
        <blockquote class="font-heading text-xl italic text-[#294657] dark:text-[#F8F6F1]">
          &ldquo;Rest is not a conditional reward you must earn through exhaustion; it is the fundamental biological right that enables human existence.&rdquo;
        </blockquote>
      </div>

      <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] pt-4">Rebuilding Healthy Psychological Boundaries</h2>
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Reversing burnout requires radical boundary renegotiation. Practice saying: &ldquo;I would love to help with that, but my plate is currently full for this week.&rdquo; Setting a boundary is not letting others down; it is preserving the energy necessary to deliver quality care to your life and work.
      </p>
    `
  },
  {
    file: 'blog-emdr-trauma-recovery.html',
    slug: 'understanding-emdr',
    aliasFile: 'blog-understanding-emdr.html',
    title: 'Understanding EMDR Therapy: How Your Brain Heals Painful Memories',
    category: 'Trauma Recovery',
    readTime: '9 Min Read',
    author: 'Elena Rostova, LPC',
    authorRole: 'EMDR Certified Trauma Specialist',
    authorImg: IMAGES.therapist_elena,
    heroImg: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    excerpt: 'How bilateral eye movements unlock trapped traumatic stress in the nervous system, helping you find peace without endless retelling.',
    quote: 'Trauma is not what happened to you; it is what happened inside of you as a result of what happened.',
    contentHtml: `
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        For decades, conventional wisdom held that healing from trauma required clients to verbally dissect painful events over and over. For many survivors, this led to secondary retraumatization and emotional flooding. Eye Movement Desensitization and Reprocessing (EMDR) revolutionized psychological trauma care by showing that the brain has an innate capacity to heal when memories are properly processed.
      </p>

      <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#D7B7A5] space-y-2 my-6">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Trauma Paradigm</span>
        <blockquote class="font-heading text-xl italic text-[#294657] dark:text-[#F8F6F1]">
          &ldquo;Trauma is not merely what occurred in your past; it is the frozen somatic imprint and unfinished survival response stuck within your nervous system.&rdquo;
        </blockquote>
      </div>

      <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] pt-4">How Bilateral Stimulation Works</h2>
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        By pairing a target memory with gentle, rhythmic bilateral stimulation (tracking fingers side to side or holding gentle tactile pulsers), EMDR mimics the memory-consolidation processes of REM dream sleep. The emotional charge dissolves, allowing your brain to reach a peaceful realization: &ldquo;It was painful, but it is over now, and I am safe.&rdquo;
      </p>
    `
  },
  {
    file: 'blog-mindfulness-self-compassion.html',
    slug: 'silencing-inner-critic',
    aliasFile: 'blog-mindfulness-guide.html',
    title: 'Silencing Your Harsh Inner Critic: The Gentle Art of Self-Compassion',
    category: 'Mindfulness & Self-Worth',
    readTime: '6 Min Read',
    author: 'Dr. David Kim, Psy.D.',
    authorRole: 'Mindfulness Director & Clinical Psychologist',
    authorImg: IMAGES.therapist_david,
    heroImg: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Why treating yourself with the same warmth you give a dear friend rewires neural pathways, relieves shame, and builds true resilience.',
    quote: 'Compassion is not letting yourself off the hook; it is providing yourself the safety needed to courageously grow.',
    contentHtml: `
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        When a close friend makes a mistake or goes through a painful breakup, we instinctively speak to them with kindness, understanding, and warmth. Yet when we stumble ourselves, our internal voice is often brutal: &ldquo;Why can't you get anything right? What is wrong with you?&rdquo;
      </p>

      <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#D7B7A5] space-y-2 my-6">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Compassionate Stance</span>
        <blockquote class="font-heading text-xl italic text-[#294657] dark:text-[#F8F6F1]">
          &ldquo;Self-compassion is not letting yourself off the hook; it is providing yourself the neurological safety needed to courageously take responsibility and grow.&rdquo;
        </blockquote>
      </div>

      <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] pt-4">The Hand-Over-Heart Somatic Practice</h2>
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Whenever you feel self-criticism or embarrassment rising, place one warm hand gently over the center of your chest. Take three slow, abdominal breaths. The gentle tactile warmth stimulates oxytocin release, lowering heart rate and soothing your nervous system in seconds.
      </p>
    `
  }
];

function buildIndividualBlogPage(article) {
  const head = getHead(`${article.title} | Mindful Paths Journal`, article.excerpt);
  const header = getHeader('blog');

  const otherArticles = BLOG_ARTICLES.filter(a => a.file !== article.file).slice(0, 3);
  const relatedCards = otherArticles.map(rel => `
    <div class="card-wellness overflow-hidden rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 group shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
      <div>
        <a href="${rel.file}" class="block overflow-hidden">
          <img src="${rel.heroImg}" alt="${rel.title}" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500">
        </a>
        <div class="p-5 space-y-1.5">
          <span class="text-[10px] font-bold uppercase text-[#D7B7A5] tracking-wider">${rel.category} &bull; ${rel.readTime}</span>
          <h4 class="font-heading text-base font-bold text-[#294657] dark:text-[#F8F6F1] line-clamp-2">
            <a href="${rel.file}" class="hover:text-[#D7B7A5] transition-colors">${rel.title}</a>
          </h4>
        </div>
      </div>
      <div class="p-5 pt-0">
        <a href="${rel.file}" class="text-xs font-bold text-[#D7B7A5] hover:underline flex items-center gap-1">
          <span>Read Article</span>
          <i class="fas fa-arrow-right text-[10px]"></i>
        </a>
      </div>
    </div>
  `).join('');

  const content = `
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#EBF1F4] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96] flex-wrap">
      <a href="index.html" class="hover:text-[#D7B7A5]">Home</a>
      <span>/</span>
      <a href="blog.html" class="hover:text-[#D7B7A5]">Wellness Journal</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold truncate max-w-xs sm:max-w-md">${article.title}</span>
    </div>
  </div>

  <article class="py-12 md:py-16 bg-white dark:bg-[#17232b]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="space-y-3">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="px-3 py-1 rounded-full bg-[#D7B7A5]/20 text-[#D7B7A5] text-xs font-bold uppercase tracking-wider">
            ${article.category}
          </span>
          <span class="text-xs text-[#27343B]/60 dark:text-[#7d8d96] font-medium">
            ${article.readTime} &bull; Clinical Editorial
          </span>
        </div>

        <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-tight">
          ${article.title}
        </h1>

        <div class="flex items-center justify-between pt-2 border-t border-[#EBF1F4] dark:border-white/10 flex-wrap gap-4">
          <div class="flex items-center gap-3">
            <img src="${article.authorImg}" alt="${article.author}" class="w-11 h-11 rounded-full object-cover border-2 border-[#D7B7A5]">
            <div>
              <h4 class="font-bold text-xs text-[#294657] dark:text-[#F8F6F1]">${article.author}</h4>
              <span class="text-[11px] text-[#27343B]/70 dark:text-[#7d8d96]">${article.authorRole}</span>
            </div>
          </div>
          <div class="flex items-center gap-2 text-xs text-[#27343B]/60 dark:text-white/40">
            <button type="button" class="px-3 py-1.5 rounded-xl border border-[#EBF1F4] dark:border-white/10 hover:border-[#D7B7A5] flex items-center gap-1.5 transition-colors" onclick="navigator.clipboard.writeText(window.location.href); if(window.showToast) window.showToast('Article link copied to clipboard', 'info');">
              <i class="far fa-share-square"></i>
              <span>Share</span>
            </button>
            <a href="blog.html" class="px-3 py-1.5 rounded-xl bg-[#F8F6F1] dark:bg-[#1e2d37] hover:text-[#D7B7A5] transition-colors font-semibold">
              &larr; All Articles
            </a>
          </div>
        </div>
      </div>

      <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F8F6F1] dark:border-white/10 my-6">
        <img src="${article.heroImg}" alt="${article.title}" class="w-full h-80 sm:h-[420px] object-cover">
      </div>

      <div class="space-y-6">
        ${article.contentHtml}
      </div>

      <div class="p-6 sm:p-8 rounded-3xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 space-y-4">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <img src="${article.authorImg}" alt="${article.author}" class="w-16 h-16 rounded-2xl object-cover border-2 border-[#D7B7A5] shrink-0">
            <div>
              <span class="text-[10px] uppercase font-bold text-[#D7B7A5] tracking-wider block">Written by Clinician</span>
              <h3 class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">${article.author}</h3>
              <p class="text-xs text-[#27343B]/70 dark:text-[#7d8d96]">${article.authorRole} at Mindful Paths Sanctuary</p>
            </div>
          </div>
          <button type="button" class="open-appointment-btn px-6 py-3 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all shrink-0 hover:scale-105 active:scale-95">
            Book Session with ${article.author.split(',')[0]}
          </button>
        </div>
      </div>

      <div class="space-y-6 pt-6 border-t border-[#EBF1F4] dark:border-white/10">
        <div class="flex items-center justify-between">
          <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Related Clinical Articles</h3>
          <a href="blog.html" class="text-xs font-bold text-[#D7B7A5] hover:underline">View All Journal &rarr;</a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          ${relatedCards}
        </div>
      </div>
    </div>
  </article>
  `;

  return head + header + content + getFooter();
}

function buildBlog() {
  const head = getHead('The Wellness Journal | Clinical Insights & Psychology Articles', 'Evidence-based articles written by our licensed clinicians on somatic tools, attachment healing, and emotional self-compassion.');
  const header = getHeader('blog');

  const featured = BLOG_ARTICLES[0];
  const gridArticles = BLOG_ARTICLES.slice(1);

  const cardsHtml = gridArticles.map(art => `
    <div class="card-wellness overflow-hidden rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 group shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <a href="${art.file}" class="block overflow-hidden">
          <img src="${art.heroImg}" alt="${art.title}" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500">
        </a>
        <div class="p-6 space-y-2.5">
          <div class="flex items-center justify-between text-[11px]">
            <span class="font-bold uppercase tracking-wider text-[#D7B7A5]">${art.category}</span>
            <span class="text-[#27343B]/60 dark:text-[#7d8d96] font-medium">${art.readTime}</span>
          </div>
          <h3 class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1] leading-snug">
            <a href="${art.file}" class="hover:text-[#D7B7A5] transition-colors">${art.title}</a>
          </h3>
          <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed line-clamp-2">
            ${art.excerpt}
          </p>
        </div>
      </div>
      <div class="p-6 pt-0 border-t border-[#EBF1F4] dark:border-white/10 flex items-center justify-between mt-4">
        <div class="flex items-center gap-2">
          <img src="${art.authorImg}" alt="${art.author}" class="w-7 h-7 rounded-full object-cover">
          <span class="text-[11px] font-semibold text-[#294657] dark:text-[#F8F6F1]">${art.author.split(',')[0]}</span>
        </div>
        <a href="${art.file}" class="text-xs font-bold text-[#D7B7A5] hover:underline flex items-center gap-1">
          <span>Read Article</span>
          <i class="fas fa-arrow-right text-[10px]"></i>
        </a>
      </div>
    </div>
  `).join('');

  const content = `
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#EBF1F4] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#D7B7A5]">Home</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">Wellness Journal</span>
    </div>
  </div>

  <section class="py-16 bg-[#F8F6F1] dark:bg-[#11191f]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">The Wellness Journal</span>
        <h1 class="font-heading text-4xl sm:text-5xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-tight">
          Clinical Insights for Mind &amp; Soul
        </h1>
        <p class="text-sm text-[#27343B]/85 dark:text-[#EBF1F4]">
          Written by our board-certified clinicians on somatic tools, attachment healing, nervous system regulation, and self-compassion.
        </p>
      </div>

      <div class="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7 overflow-hidden rounded-2xl">
          <a href="${featured.file}" class="block group">
            <img src="${featured.heroImg}" alt="${featured.title}" class="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700">
          </a>
        </div>
        <div class="lg:col-span-5 space-y-4">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-[#D7B7A5]/20 text-[#D7B7A5] text-xs font-bold uppercase tracking-wider">
              Featured Deep Dive
            </span>
            <span class="text-xs text-[#27343B]/60 dark:text-[#7d8d96] font-medium">${featured.readTime}</span>
          </div>

          <h2 class="font-heading text-2xl sm:text-3xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-snug">
            <a href="${featured.file}" class="hover:text-[#D7B7A5] transition-colors">${featured.title}</a>
          </h2>

          <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
            ${featured.excerpt}
          </p>

          <div class="pt-3 flex items-center justify-between border-t border-[#EBF1F4] dark:border-white/10">
            <div class="flex items-center gap-3">
              <img src="${featured.authorImg}" alt="${featured.author}" class="w-10 h-10 rounded-full object-cover border-2 border-[#D7B7A5]">
              <div>
                <h4 class="font-bold text-xs text-[#294657] dark:text-[#F8F6F1]">${featured.author}</h4>
                <span class="text-[10px] text-[#27343B]/60 dark:text-[#7d8d96]">Clinical Director</span>
              </div>
            </div>
            <a href="${featured.file}" class="px-5 py-2.5 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95">
              Read Deep Dive &rarr;
            </a>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">Recent Clinical Insights</h2>
          <span class="text-xs text-[#27343B]/70 dark:text-[#7d8d96]">All Articles Peer-Reviewed</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${cardsHtml}
        </div>
      </div>

    </div>
  </section>

  <section class="py-16 bg-[#294657] text-white">
    <div class="max-w-3xl mx-auto px-4 text-center space-y-5">
      <div class="w-12 h-12 rounded-2xl bg-[#D7B7A5] text-white flex items-center justify-center mx-auto text-xl shadow-lg">
        <i class="far fa-envelope-open"></i>
      </div>
      <h2 class="font-heading text-3xl font-bold">Mindful Paths Weekly Newsletter</h2>
      <p class="text-xs sm:text-sm text-[#EBF1F4]/80 leading-relaxed">
        Receive our Sunday morning somatic reflection: one actionable nervous system exercise, one relational perspective, and zero spam.
      </p>
      <form class="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2" onsubmit="event.preventDefault(); if(window.showToast) window.showToast('Thank you for subscribing to our clinical reflections.', 'success'); this.reset();">
        <input type="email" required placeholder="Enter your email address" class="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-white/60 focus:outline-none focus:border-[#D7B7A5]">
        <button type="submit" class="px-6 py-3 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all shrink-0 hover:scale-105">
          Join Sanctuary
        </button>
      </form>
    </div>
  </section>
  `;

  return head + header + content + getFooter();
}

function buildBlogDetails() {
  return buildIndividualBlogPage(BLOG_ARTICLES[0]);
}

// =========================================================================
// 9. contact.html
// =========================================================================
function buildContact() {
  const head = getHead('Contact Us & Crisis Hotline | Mindful Paths', 'Get in touch with our clinical care coordinators, locate our Manhattan and Brooklyn sanctuaries, or access 24/7 crisis support.');
  const header = getHeader('contact');
  const content = `
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#EBF1F4] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#D7B7A5]">Home</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">Contact</span>
    </div>
  </div>

  <section class="py-16 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div class="lg:col-span-5 space-y-6">
          <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Direct Support</span>
          <h1 class="font-heading text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
            We are here to help you take the first step.
          </h1>
          <p class="text-sm text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">
            Reach out to our intake care coordinators for scheduling questions, insurance superbills, or clinician match consultations.
          </p>

          <div class="space-y-4 pt-2 text-xs">
            <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 space-y-1">
              <strong class="text-[#294657] dark:text-[#F8F6F1] block"><i class="fas fa-map-marker-alt text-[#D7B7A5] mr-2"></i> Manhattan Sanctuary</strong>
              <p class="text-[#27343B] dark:text-[#7d8d96]">450 Wellness Pavilion Blvd, Suite 300, New York, NY 10016</p>
            </div>
            <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 space-y-1">
              <strong class="text-[#294657] dark:text-[#F8F6F1] block"><i class="fas fa-phone-alt text-[#8FAFC0] mr-2"></i> Phone &amp; Confidential Voicemail</strong>
              <p class="text-[#27343B] dark:text-[#7d8d96]">${PHONE}</p>
            </div>
            <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 space-y-1">
              <strong class="text-[#294657] dark:text-[#F8F6F1] block"><i class="fas fa-envelope text-[#D7B7A5] mr-2"></i> Confidential Intake Email</strong>
              <p class="text-[#27343B] dark:text-[#7d8d96]">${EMAIL}</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="p-8 rounded-3xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 space-y-4">
            <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">Send a Confidential Inquiry</h2>
            <form id="contact-inquiry-form" class="space-y-4 text-xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-bold text-[#294657] dark:text-[#EBF1F4] mb-1">Your Name</label>
                  <input type="text" required placeholder="Alex Morgan" class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs">
                </div>
                <div>
                  <label class="block font-bold text-[#294657] dark:text-[#EBF1F4] mb-1">Email Address</label>
                  <input type="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs">
                </div>
              </div>
              <div>
                <label class="block font-bold text-[#294657] dark:text-[#EBF1F4] mb-1">Message / Question</label>
                <textarea rows="4" placeholder="How can we support you today?" class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs"></textarea>
              </div>
              <button type="submit" class="px-8 py-3.5 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
  return head + header + content + getFooter();
}

// =========================================================================
// 10. pricing.html — Dedicated, Transparent, Multi-Tier Care Pathways
// =========================================================================
function buildPricing() {
  const head = getHead('Pricing & Insurance | Clear, Transparent Investment | Mindful Paths', 'Clear, upfront therapy pricing, flexible monthly care packages, automatic insurance Superbills, and No Surprises Act compliance.');
  const header = getHeader('pricing');

  const content = `
  <!-- Breadcrumb -->
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#EBF1F4] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#D7B7A5]">Home</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">Pricing &amp; Insurance</span>
    </div>
  </div>

  <!-- Header Banner -->
  <section class="py-16 md:py-20 bg-gradient-to-b from-[#F8F6F1] via-white to-[#F8F6F1] dark:from-[#11191f] dark:via-[#17232b] dark:to-[#11191f]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D7B7A5]/15 text-[#D7B7A5] text-xs font-bold uppercase tracking-wider">
          <i class="fas fa-shield-alt"></i> Complete Fee Transparency
        </div>
        <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-tight">
          Simple, Honest Pricing.<br><span class="italic text-[#D7B7A5]">Zero Surprise Bills.</span>
        </h1>
        <p class="text-base text-[#27343B]/80 dark:text-[#EBF1F4] leading-relaxed">
          Investing in therapy is an investment in your life, peace of mind, and relationships. We provide straightforward per-session rates, discounted monthly care pathways, and automated itemized Superbills for PPO insurance reimbursement.
        </p>

        <!-- Compliance Badges -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs">
          <span class="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 shadow-sm text-[#294657] dark:text-[#8FAFC0] font-semibold flex items-center gap-1.5">
            <i class="fas fa-check-circle text-emerald-500"></i> Federal No Surprises Act Compliant
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 shadow-sm text-[#294657] dark:text-[#8FAFC0] font-semibold flex items-center gap-1.5">
            <i class="fas fa-credit-card text-[#D7B7A5]"></i> HSA &amp; FSA Cards Accepted
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 shadow-sm text-[#294657] dark:text-[#8FAFC0] font-semibold flex items-center gap-1.5">
            <i class="fas fa-file-invoice text-blue-500"></i> Monthly Superbill Provided
          </span>
        </div>
      </div>

      <!-- Interactive Billing Toggle -->
      <div class="flex items-center justify-center pt-4">
        <div class="p-1.5 rounded-full bg-[#EBF1F4] dark:bg-[#1e2d37] border border-[#d6e1e8]/60 dark:border-white/10 flex items-center shadow-inner">
          <button type="button" id="billing-per-session-btn" class="px-6 py-2.5 rounded-full text-xs font-bold transition-all bg-white dark:bg-[#294657] text-[#294657] dark:text-white shadow-sm" onclick="toggleBilling('session')">
            Pay Per Session
          </button>
          <button type="button" id="billing-monthly-btn" class="px-6 py-2.5 rounded-full text-xs font-bold transition-all text-[#27343B]/70 dark:text-[#7d8d96] hover:text-[#294657] dark:hover:text-white flex items-center gap-1.5" onclick="toggleBilling('monthly')">
            <span>Monthly Packages</span>
            <span class="px-2 py-0.5 rounded-full bg-[#D7B7A5] text-white text-[10px] uppercase font-bold tracking-wider">Save 15%</span>
          </button>
        </div>
      </div>

      <!-- 3 Structured Core Pricing Tiers -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
        
        <!-- Tier 1: Essential Individual Care -->
        <div class="card-wellness p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
          <div class="space-y-6">
            <div class="space-y-2">
              <span class="text-xs font-bold uppercase tracking-wider text-[#8FAFC0]">Individual Healing</span>
              <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">Essential Pathway</h3>
              <p class="text-xs text-[#27343B]/70 dark:text-[#7d8d96] leading-relaxed">
                Focused, compassionate therapy for anxiety, life transitions, grief, or personal self-discovery.
              </p>
            </div>

            <div class="py-5 border-y border-[#EBF1F4] dark:border-white/10">
              <div class="flex items-baseline gap-2">
                <span class="font-heading text-5xl font-bold text-[#294657] dark:text-[#F8F6F1] price-value" data-session="$165" data-monthly="$590">$165</span>
                <span class="text-xs text-[#27343B]/70 dark:text-[#7d8d96] price-unit font-medium" data-session="/ 50-min session" data-monthly="/ month (4 sessions)">/ 50-min session</span>
              </div>
              <div class="pt-2 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 savings-notice hidden">
                <i class="fas fa-tag"></i> Includes 4 weekly sessions (Save $70/mo)
              </div>
            </div>

            <div class="space-y-3 text-xs text-[#27343B]/85 dark:text-[#EBF1F4]">
              <span class="font-bold text-[#294657] dark:text-[#F8F6F1] block text-[11px] uppercase tracking-wider">What Is Included:</span>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#8FAFC0] mt-0.5"></i>
                <span>50-minute dedicated one-on-one session</span>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#8FAFC0] mt-0.5"></i>
                <span>Choice of in-person sanctuary or secure telehealth</span>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#8FAFC0] mt-0.5"></i>
                <span>Confidential Client Sanctuary portal access</span>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#8FAFC0] mt-0.5"></i>
                <span>Automatic monthly Superbill for PPO reimbursement</span>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#8FAFC0] mt-0.5"></i>
                <span>24/7 crisis support hotline integration</span>
              </div>
            </div>
          </div>

          <div class="pt-8">
            <button type="button" class="open-appointment-btn w-full py-3.5 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
              <span>Book Essential Session</span>
              <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>

        <!-- Tier 2: Comprehensive Healing & EMDR (FEATURED / MOST POPULAR) -->
        <div class="card-wellness p-8 rounded-3xl bg-white dark:bg-[#17232b] border-2 border-[#D7B7A5] shadow-2xl relative flex flex-col justify-between transform lg:-translate-y-2">
          
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D7B7A5] text-white text-[10px] uppercase font-bold tracking-wider shadow-sm z-10 flex items-center gap-1.5">
            <i class="fas fa-star text-[9px]"></i> Most Popular Choice
          </div>

          <div class="space-y-6">
            <div class="space-y-2 pt-1">
              <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Comprehensive Care</span>
              <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">Deep Healing &amp; EMDR</h3>
              <p class="text-xs text-[#27343B]/70 dark:text-[#7d8d96] leading-relaxed">
                In-depth recovery for trauma, deep-seated anxiety, panic, or long-standing emotional patterns.
              </p>
            </div>

            <div class="py-5 border-y border-[#EBF1F4] dark:border-white/10">
              <div class="flex items-baseline gap-2">
                <span class="font-heading text-5xl font-bold text-[#294657] dark:text-[#F8F6F1] price-value" data-session="$210" data-monthly="$750">$210</span>
                <span class="text-xs text-[#27343B]/70 dark:text-[#7d8d96] price-unit font-medium" data-session="/ 60-min session" data-monthly="/ month (4 sessions)">/ 60-min session</span>
              </div>
              <div class="pt-2 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 savings-notice hidden">
                <i class="fas fa-tag"></i> Includes 4 extended sessions (Save $90/mo)
              </div>
            </div>

            <div class="space-y-3 text-xs text-[#27343B]/85 dark:text-[#EBF1F4]">
              <span class="font-bold text-[#294657] dark:text-[#F8F6F1] block text-[11px] uppercase tracking-wider">Everything in Essential, Plus:</span>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#D7B7A5] mt-0.5"></i>
                <span><strong>60-minute extended session</strong> for deeper processing</span>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#D7B7A5] mt-0.5"></i>
                <span>Certified EMDR &amp; Somatic bilateral stimulation</span>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#D7B7A5] mt-0.5"></i>
                <span>Personalized Nervous System Grounding Roadmap</span>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#D7B7A5] mt-0.5"></i>
                <span>Direct portal messaging with 24h clinician reply</span>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#D7B7A5] mt-0.5"></i>
                <span>Priority scheduling (evening &amp; weekend spots)</span>
              </div>
            </div>
          </div>

          <div class="pt-8">
            <button type="button" class="open-appointment-btn w-full py-4 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-lg shadow-[#D7B7A5]/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
              <span>Start Deep Healing</span>
              <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>

        <!-- Tier 3: Couples & Relational Sanctuary -->
        <div class="card-wellness p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
          <div class="space-y-6">
            <div class="space-y-2">
              <span class="text-xs font-bold uppercase tracking-wider text-[#8FAFC0]">Relationship Care</span>
              <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">Couples Sanctuary</h3>
              <p class="text-xs text-[#27343B]/70 dark:text-[#7d8d96] leading-relaxed">
                Structured Gottman counseling to bridge communication impasses and rebuild trust and intimacy.
              </p>
            </div>

            <div class="py-5 border-y border-[#EBF1F4] dark:border-white/10">
              <div class="flex items-baseline gap-2">
                <span class="font-heading text-5xl font-bold text-[#294657] dark:text-[#F8F6F1] price-value" data-session="$225" data-monthly="$790">$225</span>
                <span class="text-xs text-[#27343B]/70 dark:text-[#7d8d96] price-unit font-medium" data-session="/ 75-min session" data-monthly="/ month (4 sessions)">/ 75-min session</span>
              </div>
              <div class="pt-2 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 savings-notice hidden">
                <i class="fas fa-tag"></i> Includes 4 joint sessions (Save $110/mo)
              </div>
            </div>

            <div class="space-y-3 text-xs text-[#27343B]/85 dark:text-[#EBF1F4]">
              <span class="font-bold text-[#294657] dark:text-[#F8F6F1] block text-[11px] uppercase tracking-wider">What Is Included:</span>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#8FAFC0] mt-0.5"></i>
                <span><strong>75-minute extended dual session</strong> for both partners</span>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#8FAFC0] mt-0.5"></i>
                <span>Gottman Method relational dialogue frameworks</span>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#8FAFC0] mt-0.5"></i>
                <span>Joint Client Portal access with shared exercise log</span>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#8FAFC0] mt-0.5"></i>
                <span>Between-session communication protocols</span>
              </div>
              <div class="flex items-start gap-2.5">
                <i class="fas fa-check text-[#8FAFC0] mt-0.5"></i>
                <span>De-escalation crisis phone consultation</span>
              </div>
            </div>
          </div>

          <div class="pt-8">
            <button type="button" class="open-appointment-btn w-full py-3.5 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
              <span>Begin Couples Care</span>
              <i class="fas fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Complete Transparent Fee Schedule Table -->
  <section class="py-16 bg-white dark:bg-[#17232b] border-t border-[#EBF1F4] dark:border-white/10">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Detailed Fee Schedule</span>
        <h2 class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Individual Service Investment
        </h2>
        <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96]">
          Every clinical appointment includes dedicated prep time, encrypted medical documentation, and automated Superbill creation.
        </p>
      </div>

      <div class="overflow-hidden rounded-3xl border border-[#EBF1F4] dark:border-white/10 shadow-lg">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="bg-[#F8F6F1] dark:bg-[#1e2d37] text-[#294657] dark:text-[#F8F6F1] font-heading text-sm">
              <th class="p-4 sm:p-5 font-bold">Clinical Service</th>
              <th class="p-4 sm:p-5 font-bold hidden sm:table-cell">Duration</th>
              <th class="p-4 sm:p-5 font-bold">Standard Fee</th>
              <th class="p-4 sm:p-5 font-bold hidden md:table-cell">Insurance Coding</th>
              <th class="p-4 sm:p-5 font-bold text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#EBF1F4] dark:divide-white/10 text-[#27343B] dark:text-[#EBF1F4]">
            
            <tr class="hover:bg-[#F8F6F1]/50 dark:hover:bg-[#1e2d37]/40 transition-colors">
              <td class="p-4 sm:p-5">
                <span class="font-bold text-[#294657] dark:text-[#F8F6F1] block text-sm">Initial Clinical Consultation</span>
                <span class="text-[11px] text-[#27343B]/70 dark:text-[#7d8d96]">15-minute phone match with Clinical Director</span>
              </td>
              <td class="p-4 sm:p-5 hidden sm:table-cell font-medium">15 Minutes</td>
              <td class="p-4 sm:p-5 font-bold text-emerald-600 dark:text-emerald-400 text-sm">FREE ($0)</td>
              <td class="p-4 sm:p-5 hidden md:table-cell text-gray-500 font-mono text-[11px]">Complimentary</td>
              <td class="p-4 sm:p-5 text-right">
                <button type="button" class="open-appointment-btn px-4 py-2 rounded-full bg-[#8FAFC0] hover:bg-[#7b9eb0] text-white font-bold text-[11px] transition-all">
                  Book Free Call
                </button>
              </td>
            </tr>

            <tr class="hover:bg-[#F8F6F1]/50 dark:hover:bg-[#1e2d37]/40 transition-colors">
              <td class="p-4 sm:p-5">
                <span class="font-bold text-[#294657] dark:text-[#F8F6F1] block text-sm">Diagnostic Intake &amp; Formulation</span>
                <span class="text-[11px] text-[#27343B]/70 dark:text-[#7d8d96]">Comprehensive clinical history and customized treatment plan</span>
              </td>
              <td class="p-4 sm:p-5 hidden sm:table-cell font-medium">60 Minutes</td>
              <td class="p-4 sm:p-5 font-bold text-[#294657] dark:text-[#F8F6F1] text-sm">$210</td>
              <td class="p-4 sm:p-5 hidden md:table-cell font-mono text-[11px] text-gray-500">CPT 90791</td>
              <td class="p-4 sm:p-5 text-right">
                <button type="button" class="open-appointment-btn px-4 py-2 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-[11px] transition-all">
                  Schedule Intake
                </button>
              </td>
            </tr>

            <tr class="hover:bg-[#F8F6F1]/50 dark:hover:bg-[#1e2d37]/40 transition-colors">
              <td class="p-4 sm:p-5">
                <span class="font-bold text-[#294657] dark:text-[#F8F6F1] block text-sm">Individual Adult Psychotherapy</span>
                <span class="text-[11px] text-[#27343B]/70 dark:text-[#7d8d96]">CBT, psychodynamic, and somatic one-on-one counseling</span>
              </td>
              <td class="p-4 sm:p-5 hidden sm:table-cell font-medium">50 Minutes</td>
              <td class="p-4 sm:p-5 font-bold text-[#294657] dark:text-[#F8F6F1] text-sm">$165</td>
              <td class="p-4 sm:p-5 hidden md:table-cell font-mono text-[11px] text-gray-500">CPT 90834</td>
              <td class="p-4 sm:p-5 text-right">
                <button type="button" class="open-appointment-btn px-4 py-2 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-[11px] transition-all">
                  Book Session
                </button>
              </td>
            </tr>

            <tr class="hover:bg-[#F8F6F1]/50 dark:hover:bg-[#1e2d37]/40 transition-colors">
              <td class="p-4 sm:p-5">
                <span class="font-bold text-[#294657] dark:text-[#F8F6F1] block text-sm">Couples &amp; Marriage Therapy</span>
                <span class="text-[11px] text-[#27343B]/70 dark:text-[#7d8d96]">Gottman-informed relational dialogue and conflict repair</span>
              </td>
              <td class="p-4 sm:p-5 hidden sm:table-cell font-medium">75 Minutes</td>
              <td class="p-4 sm:p-5 font-bold text-[#294657] dark:text-[#F8F6F1] text-sm">$225</td>
              <td class="p-4 sm:p-5 hidden md:table-cell font-mono text-[11px] text-gray-500">CPT 90847</td>
              <td class="p-4 sm:p-5 text-right">
                <button type="button" class="open-appointment-btn px-4 py-2 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-[11px] transition-all">
                  Book Couples
                </button>
              </td>
            </tr>

            <tr class="hover:bg-[#F8F6F1]/50 dark:hover:bg-[#1e2d37]/40 transition-colors">
              <td class="p-4 sm:p-5">
                <span class="font-bold text-[#294657] dark:text-[#F8F6F1] block text-sm">EMDR &amp; Somatic Trauma Reprocessing</span>
                <span class="text-[11px] text-[#27343B]/70 dark:text-[#7d8d96]">Bilateral stimulation with certified trauma specialist</span>
              </td>
              <td class="p-4 sm:p-5 hidden sm:table-cell font-medium">60 Minutes</td>
              <td class="p-4 sm:p-5 font-bold text-[#294657] dark:text-[#F8F6F1] text-sm">$195</td>
              <td class="p-4 sm:p-5 hidden md:table-cell font-mono text-[11px] text-gray-500">CPT 90837</td>
              <td class="p-4 sm:p-5 text-right">
                <button type="button" class="open-appointment-btn px-4 py-2 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-[11px] transition-all">
                  Book EMDR
                </button>
              </td>
            </tr>

            <tr class="hover:bg-[#F8F6F1]/50 dark:hover:bg-[#1e2d37]/40 transition-colors">
              <td class="p-4 sm:p-5">
                <span class="font-bold text-[#294657] dark:text-[#F8F6F1] block text-sm">Adolescent &amp; Teen Counseling</span>
                <span class="text-[11px] text-[#27343B]/70 dark:text-[#7d8d96]">Academic stress, social anxiety, and emotional regulation</span>
              </td>
              <td class="p-4 sm:p-5 hidden sm:table-cell font-medium">50 Minutes</td>
              <td class="p-4 sm:p-5 font-bold text-[#294657] dark:text-[#F8F6F1] text-sm">$165</td>
              <td class="p-4 sm:p-5 hidden md:table-cell font-mono text-[11px] text-gray-500">CPT 90834</td>
              <td class="p-4 sm:p-5 text-right">
                <button type="button" class="open-appointment-btn px-4 py-2 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-[11px] transition-all">
                  Book Teen
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  </section>

  <!-- Interactive Out-of-Pocket Insurance Calculator Widget -->
  <section class="py-16 bg-[#F8F6F1] dark:bg-[#11191f]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 shadow-xl space-y-8">
        <div class="space-y-2">
          <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Interactive Calculator</span>
          <h2 class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">
            Estimate Your Out-of-Pocket Cost
          </h2>
          <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96]">
            Most PPO insurance policies (Aetna, BlueCross BlueShield, Cigna, UnitedHealthcare) reimburse between 60% and 80% of out-of-network mental health fees after your deductible.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
          
          <!-- Calculator Controls -->
          <div class="space-y-5">
            <div>
              <label class="block text-xs font-bold text-[#294657] dark:text-[#F8F6F1] mb-2">Select Clinical Session Type:</label>
              <select id="calc-service" class="w-full px-4 py-3 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs font-semibold text-[#294657] dark:text-[#F8F6F1] focus:outline-none focus:border-[#D7B7A5]" onchange="calculateInsurance()">
                <option value="165">Individual Psychotherapy ($165)</option>
                <option value="210">Comprehensive / EMDR Trauma ($210)</option>
                <option value="225">Couples &amp; Marriage Therapy ($225)</option>
              </select>
            </div>

            <div>
              <div class="flex items-center justify-between text-xs font-bold text-[#294657] dark:text-[#F8F6F1] mb-2">
                <span>Estimated Insurance Reimbursement:</span>
                <span id="reimburse-percent-label" class="text-[#D7B7A5] font-extrabold text-sm">70%</span>
              </div>
              <input type="range" id="calc-reimburse-range" min="0" max="80" step="10" value="70" class="w-full accent-[#D7B7A5] cursor-pointer" oninput="calculateInsurance()">
              <div class="flex justify-between text-[10px] text-[#27343B]/60 dark:text-[#7d8d96] pt-1">
                <span>0% (Self-Pay)</span>
                <span>50%</span>
                <span>70% (Average PPO)</span>
                <span>80% (High PPO)</span>
              </div>
            </div>
          </div>

          <!-- Calculated Output Box -->
          <div class="p-6 sm:p-8 rounded-3xl bg-[#294657] text-white space-y-4">
            <span class="text-xs uppercase tracking-wider text-[#D7B7A5] font-bold block">Your Estimated Session Cost</span>
            
            <div class="flex items-baseline gap-2">
              <span id="calc-net-cost" class="font-heading text-5xl font-bold text-white">$49.50</span>
              <span class="text-xs text-white/70">/ session</span>
            </div>

            <div class="space-y-1.5 pt-2 border-t border-white/10 text-xs text-[#EBF1F4]">
              <div class="flex justify-between">
                <span>Standard Fee:</span>
                <span id="calc-standard-fee" class="font-bold">$165.00</span>
              </div>
              <div class="flex justify-between text-emerald-300">
                <span>Estimated PPO Check Back:</span>
                <span id="calc-reimbursed-amount" class="font-bold">-$115.50</span>
              </div>
            </div>

            <div class="p-3 rounded-xl bg-white/10 text-[11px] text-[#EBF1F4]/90 flex items-center gap-2">
              <i class="fas fa-magic text-[#D7B7A5]"></i>
              <span>Use HSA/FSA pre-tax funds to save an extra 25-30%!</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>

  <!-- How Superbill Reimbursement Works (3 Steps) -->
  <section class="py-16 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">How Insurance Works</span>
        <h2 class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Reimbursement Made Painless
        </h2>
        <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96]">
          We eliminate insurance headaches by providing instant itemized documentation right in your patient portal.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 space-y-3">
          <div class="w-10 h-10 rounded-2xl bg-[#8FAFC0] text-white flex items-center justify-center font-bold text-sm shadow-md">
            1
          </div>
          <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Attend Your Session</h3>
          <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
            Pay for your session using credit card, debit card, or your tax-free HSA / FSA card at the time of your appointment.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 space-y-3">
          <div class="w-10 h-10 rounded-2xl bg-[#D7B7A5] text-white flex items-center justify-center font-bold text-sm shadow-md">
            2
          </div>
          <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Receive Instant Superbill</h3>
          <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
            On the 1st of each month, your portal automatically generates an itemized Superbill with all required CPT and ICD-10 diagnostic codes.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 space-y-3">
          <div class="w-10 h-10 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-md">
            3
          </div>
          <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Get Reimbursed</h3>
          <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
            Upload the 1-page PDF to your insurance portal (or via the free Reimbursify app) and receive your reimbursement check within 14-21 days.
          </p>
        </div>

      </div>

      <!-- Sliding Scale Equity Program Box -->
      <div class="p-8 rounded-3xl bg-gradient-to-r from-[#F8F6F1] to-[#EBF1F4] dark:from-[#11191f] dark:to-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-3 py-0.5 rounded-full bg-[#D7B7A5]/20 text-[#D7B7A5] text-[10px] uppercase font-bold tracking-wider">Health Equity Commitment</span>
          </div>
          <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">Sliding-Scale Scholarship Program</h3>
          <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96] max-w-xl">
            We believe mental healthcare should never be out of reach due to temporary financial hardship. We reserve 15% of our clinical hours for reduced-rate counseling for students, teachers, and non-profit workers.
          </p>
        </div>
        <a href="contact.html?inquiry=sliding-scale" class="px-6 py-3.5 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-xs shadow-md transition-all shrink-0 hover:scale-105">
          Inquire About Sliding Scale
        </a>
      </div>

    </div>
  </section>

  <!-- Comprehensive Financial FAQ Accordion -->
  <section class="py-16 bg-[#F8F6F1] dark:bg-[#11191f]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div class="text-center space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Frequently Asked Questions</span>
        <h2 class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Insurance &amp; Financial FAQ
        </h2>
      </div>

      <div class="space-y-4">
        
        <div class="rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 overflow-hidden shadow-sm">
          <button type="button" class="w-full p-5 text-left font-bold text-[#294657] dark:text-[#F8F6F1] flex items-center justify-between gap-4" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180');">
            <span>Why is Mindful Paths an Out-of-Network practice?</span>
            <i class="fas fa-chevron-down text-xs transition-transform duration-200"></i>
          </button>
          <div class="p-5 pt-0 text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed border-t border-[#EBF1F4] dark:border-white/10">
            Insurance companies operating in-network mandate a psychiatric diagnosis on your permanent medical record, audit private therapy notes, and arbitrarily limit the number of sessions allowed. By remaining out-of-network, we protect 100% of your confidential privacy, allow you to see your clinician as long as you benefit, and still provide Superbills so you can receive your PPO insurance reimbursement.
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 overflow-hidden shadow-sm">
          <button type="button" class="w-full p-5 text-left font-bold text-[#294657] dark:text-[#F8F6F1] flex items-center justify-between gap-4" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180');">
            <span>What questions should I ask my insurance provider about out-of-network benefits?</span>
            <i class="fas fa-chevron-down text-xs transition-transform duration-200"></i>
          </button>
          <div class="p-5 pt-0 text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed border-t border-[#EBF1F4] dark:border-white/10 space-y-2">
            <p>Call the Member Services number on the back of your card and ask these 4 questions:</p>
            <ol class="list-decimal list-inside space-y-1 pl-1">
              <li>Do I have out-of-network mental health benefits for outpatient psychotherapy?</li>
              <li>What is my out-of-network deductible, and how much has been met this year?</li>
              <li>What is the reimbursement percentage for CPT code 90834 (individual therapy) or 90847 (couples therapy)?</li>
              <li>How do I submit an electronic Superbill claim for reimbursement?</li>
            </ol>
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 overflow-hidden shadow-sm">
          <button type="button" class="w-full p-5 text-left font-bold text-[#294657] dark:text-[#F8F6F1] flex items-center justify-between gap-4" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180');">
            <span>Can I use my Health Savings Account (HSA) or Flexible Spending Account (FSA)?</span>
            <i class="fas fa-chevron-down text-xs transition-transform duration-200"></i>
          </button>
          <div class="p-5 pt-0 text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed border-t border-[#EBF1F4] dark:border-white/10">
            Yes, absolutely. Licensed psychotherapy, psychological evaluations, and trauma counseling are recognized qualified medical expenses by the IRS. You can pay directly with your HSA/FSA debit card through our secure payment portal with pre-tax dollars.
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 overflow-hidden shadow-sm">
          <button type="button" class="w-full p-5 text-left font-bold text-[#294657] dark:text-[#F8F6F1] flex items-center justify-between gap-4" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180');">
            <span>What is your cancellation and rescheduling policy?</span>
            <i class="fas fa-chevron-down text-xs transition-transform duration-200"></i>
          </button>
          <div class="p-5 pt-0 text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed border-t border-[#EBF1F4] dark:border-white/10">
            Because our clinicians reserve your specific hour exclusively for you, we require at least 24 hours advance notice to cancel or reschedule without penalty. Appointments cancelled with less than 24 hours notice incur the regular session fee.
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Final Call to Action -->
  <section class="py-16 bg-[#294657] text-white">
    <div class="max-w-4xl mx-auto px-4 text-center space-y-6">
      <h2 class="font-heading text-3xl sm:text-4xl font-bold">
        Ready to take the first step toward lasting peace?
      </h2>
      <p class="text-sm text-[#EBF1F4]/80 max-w-xl mx-auto leading-relaxed">
        Speak with our Clinical Director during a complimentary 15-minute consultation to answer your questions, explore goals, and get matched with your ideal clinician.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <button type="button" class="open-appointment-btn px-8 py-4 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-lg transition-all hover:scale-105 active:scale-95">
          Schedule Free 15-Min Consultation
        </button>
        <a href="contact.html" class="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all">
          Contact Clinical Coordinators
        </a>
      </div>
    </div>
  </section>

  <!-- Interactive Pricing Script -->
  <script>
    function toggleBilling(mode) {
      const sessionBtn = document.getElementById('billing-per-session-btn');
      const monthlyBtn = document.getElementById('billing-monthly-btn');
      const priceValues = document.querySelectorAll('.price-value');
      const priceUnits = document.querySelectorAll('.price-unit');
      const notices = document.querySelectorAll('.savings-notice');

      if (mode === 'monthly') {
        sessionBtn.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all text-[#27343B]/70 dark:text-[#7d8d96] hover:text-[#294657] dark:hover:text-white';
        monthlyBtn.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all bg-white dark:bg-[#294657] text-[#294657] dark:text-white shadow-sm flex items-center gap-1.5';
        
        priceValues.forEach(el => el.textContent = el.getAttribute('data-monthly'));
        priceUnits.forEach(el => el.textContent = el.getAttribute('data-monthly'));
        notices.forEach(el => el.classList.remove('hidden'));
      } else {
        monthlyBtn.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all text-[#27343B]/70 dark:text-[#7d8d96] hover:text-[#294657] dark:hover:text-white flex items-center gap-1.5';
        sessionBtn.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all bg-white dark:bg-[#294657] text-[#294657] dark:text-white shadow-sm';
        
        priceValues.forEach(el => el.textContent = el.getAttribute('data-session'));
        priceUnits.forEach(el => el.textContent = el.getAttribute('data-session'));
        notices.forEach(el => el.classList.add('hidden'));
      }
    }

    function calculateInsurance() {
      const serviceSelect = document.getElementById('calc-service');
      const rangeInput = document.getElementById('calc-reimburse-range');
      const percentLabel = document.getElementById('reimburse-percent-label');
      const netCostEl = document.getElementById('calc-net-cost');
      const standardFeeEl = document.getElementById('calc-standard-fee');
      const reimbursedEl = document.getElementById('calc-reimbursed-amount');

      if (!serviceSelect || !rangeInput) return;

      const fee = parseFloat(serviceSelect.value);
      const percent = parseInt(rangeInput.value, 10);

      percentLabel.textContent = percent + '%';
      standardFeeEl.textContent = '$' + fee.toFixed(2);

      const reimbursed = fee * (percent / 100);
      const netCost = fee - reimbursed;

      reimbursedEl.textContent = '-$' + reimbursed.toFixed(2);
      netCostEl.textContent = '$' + netCost.toFixed(2);
    }
  </script>
  `;

  return head + header + content + getFooter();
}

// =========================================================================
// 11. 404.html
// =========================================================================
function build404() {
  const head = getHead('Page Not Found | Mindful Paths', 'The page you were looking for could not be found. Take a gentle breath and return home.');
  const header = getHeader('');
  const content = `
  <section class="py-24 bg-[#F8F6F1] dark:bg-[#11191f] flex-1 flex items-center justify-center">
    <div class="max-w-md mx-auto px-4 text-center space-y-6">
      <div class="w-20 h-20 rounded-3xl bg-[#D7B7A5]/10 text-[#D7B7A5] flex items-center justify-center text-3xl mx-auto">
        <i class="fas fa-compass"></i>
      </div>
      <div class="space-y-2">
        <span class="text-xs font-bold uppercase text-[#D7B7A5]">Mindful 404</span>
        <h1 class="font-heading text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Pause, take a breath.
        </h1>
        <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">
          The path you were searching for does not exist or may have been relocated. Sometimes getting lost is an invitation to pause and recalibrate.
        </p>
      </div>
      <div class="pt-2 flex justify-center gap-3">
        <a href="index.html" class="px-7 py-3.5 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all">
          Return to Sanctuary Home
        </a>
        <a href="resources.html" class="px-6 py-3.5 rounded-full bg-white dark:bg-[#17232b] text-[#294657] dark:text-[#F8F6F1] font-bold text-xs border border-[#EBF1F4] dark:border-white/10 transition-all">
          Box Breathing
        </a>
      </div>
    </div>
  </section>
  `;
  return head + header + content + getFooter();
}

// =========================================================================
// 12. coming-soon.html
// =========================================================================
function buildComingSoon() {
  const head = getHead('Scheduled Maintenance | Mindful Paths', 'Our sanctuary digital portal is currently undergoing scheduled maintenance.');
  const header = getHeader('');
  const content = `
  <section class="py-24 bg-[#F8F6F1] dark:bg-[#11191f] flex-1 flex items-center justify-center">
    <div class="max-w-md mx-auto px-4 text-center space-y-6">
      <div class="w-20 h-20 rounded-3xl bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center text-3xl mx-auto">
        <i class="fas fa-seedling"></i>
      </div>
      <div class="space-y-2">
        <span class="text-xs font-bold uppercase text-[#8FAFC0]">Scheduled Update</span>
        <h1 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Cultivating New Features
        </h1>
        <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">
          We are upgrading our client encryption protocols and video consultation suites. All patient records remain 100% secure under HIPAA.
        </p>
      </div>
      <div class="p-4 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 text-xs text-[#27343B] dark:text-[#7d8d96]">
        In urgent need of crisis support? Dial <a href="tel:988" class="font-bold text-[#D7B7A5] underline">988</a> (24/7 Free &amp; Confidential).
      </div>
      <a href="index.html" class="inline-block px-7 py-3 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-xs shadow-md transition-all">
        Back to Home
      </a>
    </div>
  </section>
  `;
  return head + header + content + getFooter();
}

// Write all pages
const pages = [
  { file: 'about.html', fn: buildAbout },
  { file: 'services.html', fn: buildServices },
  { file: 'therapists.html', fn: buildTherapists },
  { file: 'therapist-details.html', fn: buildTherapistDetails },
  { file: 'resources.html', fn: buildResources },
  { file: 'blog.html', fn: buildBlog },
  { file: 'blog-details.html', fn: () => buildIndividualBlogPage(BLOG_ARTICLES[0]) },
  { file: 'blog-couples-communication.html', fn: () => buildIndividualBlogPage(BLOG_ARTICLES[1]) },
  { file: 'blog-bedtime-rumination.html', fn: () => buildIndividualBlogPage(BLOG_ARTICLES[2]) },
  { file: 'blog-burnout-perfectionism.html', fn: () => buildIndividualBlogPage(BLOG_ARTICLES[3]) },
  { file: 'blog-emdr-trauma-recovery.html', fn: () => buildIndividualBlogPage(BLOG_ARTICLES[4]) },
  { file: 'blog-mindfulness-self-compassion.html', fn: () => buildIndividualBlogPage(BLOG_ARTICLES[5]) },
  { file: 'contact.html', fn: buildContact },
  { file: 'pricing.html', fn: buildPricing },
  { file: '404.html', fn: build404 },
  { file: 'coming-soon.html', fn: buildComingSoon },
];

pages.forEach(p => {
  fs.writeFileSync(path.join(__dirname, p.file), p.fn(), 'utf8');
  console.log(`✓ Generated ${p.file}`);
});
