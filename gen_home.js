const fs = require('fs');
const path = require('path');
const { getHead, getHeader, getFooter, IMAGES, BRAND_NAME, PHONE } = require('./gen_layout');

console.log('Generating index.html and home-2.html...');

// =========================================================================
// 1. index.html — Multipurpose Services Landing
// =========================================================================
function buildIndex() {
  const head = getHead(
    'Mindful Paths — Psychological Wellness & Therapy Services',
    'Award-winning multidisciplinary mental health and wellness center providing individual therapy, couples counseling, and specialized emotional care.'
  );

  const header = getHeader('home');

  const content = `
  <!-- Hero Section -->
  <section class="relative pt-12 pb-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#F8F6F1] via-[#EBF1F4]/40 to-[#F8F6F1] dark:from-[#11191f] dark:via-[#17232b] dark:to-[#11191f]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left: Editorial Typography & CTAs -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-[#17232b]/80 border border-[#EBF1F4] dark:border-white/10 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-[#D7B7A5] animate-ping"></span>
            <span class="text-xs font-bold uppercase tracking-wider text-[#294657] dark:text-[#8FAFC0]">Evidence-Based &amp; Human-Centered Therapy</span>
          </div>

          <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#294657] dark:text-[#F8F6F1] leading-[1.15]">
            A safe sanctuary to <span class="italic text-[#D7B7A5]">heal</span>, reconnect, and thrive.
          </h1>

          <p class="text-base sm:text-lg text-[#27343B] dark:text-[#EBF1F4] leading-relaxed max-w-xl">
            Mindful Paths pairs empathetic licensed clinicians with personalized psychological care. Whether you are navigating chronic anxiety, relationship transitions, or seeking deeper balance, we walk with you.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <button type="button" class="open-appointment-btn px-7 py-4 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-sm shadow-lg shadow-[#D7B7A5]/30 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2.5">
              <i class="far fa-calendar-check"></i> Book Confidential Intake
            </button>
            <a href="home-2.html" class="px-7 py-4 rounded-full bg-white dark:bg-[#17232b] hover:bg-[#fdf7f5] dark:hover:bg-[#1e2d37] text-[#294657] dark:text-[#F8F6F1] font-bold text-sm border border-[#EBF1F4] dark:border-white/10 shadow-sm transition-all duration-200 flex items-center gap-2">
              <i class="fas fa-heart text-[#D7B7A5]"></i> Explore The Wellness Journey
            </a>
          </div>

          <!-- Trust Badges Under Hero -->
          <div class="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#EBF1F4] dark:border-white/10">
            <div>
              <div class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">15+</div>
              <div class="text-xs text-[#27343B] dark:text-[#7d8d96]">Years of Practice</div>
            </div>
            <div>
              <div class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">12k+</div>
              <div class="text-xs text-[#27343B] dark:text-[#7d8d96]">Sessions Completed</div>
            </div>
            <div>
              <div class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">98%</div>
              <div class="text-xs text-[#27343B] dark:text-[#7d8d96]">Client Satisfaction</div>
            </div>
            <div>
              <div class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">100%</div>
              <div class="text-xs text-[#27343B] dark:text-[#7d8d96]">HIPAA Confidential</div>
            </div>
          </div>
        </div>

        <!-- Right: Hero Visual Card with Floating Badges -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#1e2d37] bg-white dark:bg-[#17232b] flex items-center justify-center p-3 sm:p-4 group">
            <img src="${IMAGES.hero_home1}" alt="Mindful Paths Brain and Psychological Health" class="w-auto h-auto max-h-[460px] max-w-full object-contain mx-auto rounded-2xl transform group-hover:scale-105 transition-transform duration-700">
          </div>

          <!-- Floating Badge 1: Next Available Slot -->
          <div class="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-[#17232b] p-3.5 rounded-2xl shadow-xl border border-[#EBF1F4] dark:border-white/10 flex items-center gap-3 animate-float">
            <div class="w-10 h-10 rounded-xl bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center font-bold text-base">
              <i class="fas fa-check-circle"></i>
            </div>
            <div>
              <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">Intake Open</div>
              <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">This Week &middot; In-Person &amp; Video</div>
            </div>
          </div>

          <!-- Floating Badge 2: Licensed Therapists -->
          <div class="absolute -bottom-6 -right-4 sm:-right-6 bg-white dark:bg-[#17232b] p-4 rounded-2xl shadow-xl border border-[#EBF1F4] dark:border-white/10 flex items-center gap-3">
            <div class="flex -space-x-2 rtl:space-x-reverse">
              <img src="${IMAGES.therapist_sarah}" class="w-9 h-9 rounded-full border-2 border-white object-cover" alt="Dr. Sarah">
              <img src="${IMAGES.therapist_marcus}" class="w-9 h-9 rounded-full border-2 border-white object-cover" alt="Dr. Marcus">
              <img src="${IMAGES.therapist_elena}" class="w-9 h-9 rounded-full border-2 border-white object-cover" alt="Elena">
            </div>
            <div>
              <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">Board Certified</div>
              <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">6 Specialist Clinicians</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Core Services Grid -->
  <section class="py-20 bg-white dark:bg-[#17232b] transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-16">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Personalized Clinical Pathways</span>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Specialized care tailored to where you are.
        </h2>
        <p class="text-sm sm:text-base text-[#27343B] dark:text-[#EBF1F4]">
          Every individual experience is unique. We provide evidence-based modalities spanning cognitive, somatic, relational, and trauma-informed psychotherapy.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Service 1: Individual Psychotherapy -->
        <div class="card-wellness p-8 rounded-3xl bg-[#F8F6F1]/50 dark:bg-[#1e2d37]/40 border border-[#EBF1F4] dark:border-white/10 hover:shadow-xl transition-all group flex flex-col justify-between">
          <div>
            <a href="service-individual-therapy.html" class="block w-14 h-14 rounded-2xl bg-[#D7B7A5]/10 text-[#D7B7A5] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#D7B7A5] group-hover:text-white transition-colors" title="View Individual Psychotherapy Details">
              <i class="fas fa-brain"></i>
            </a>
            <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1] mb-2.5">
              <a href="service-individual-therapy.html" class="hover:text-[#D7B7A5] transition-colors">Individual Psychotherapy</a>
            </h3>
            <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#7d8d96] leading-relaxed mb-6">
              One-on-one sessions addressing anxiety, depression, perfectionism, and life transitions with Cognitive Behavioral and somatic modalities.
            </p>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-[#EBF1F4] dark:border-white/10 text-xs">
            <span class="font-semibold text-[#8FAFC0]">50 Min &middot; Weekly</span>
            <a href="service-individual-therapy.html" class="font-bold text-[#D7B7A5] hover:underline flex items-center gap-1">
              Explore Details <i class="fas fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Service 2: Couples & Marriage Therapy -->
        <div class="card-wellness p-8 rounded-3xl bg-[#F8F6F1]/50 dark:bg-[#1e2d37]/40 border border-[#EBF1F4] dark:border-white/10 hover:shadow-xl transition-all group flex flex-col justify-between">
          <div>
            <a href="service-couples-therapy.html" class="block w-14 h-14 rounded-2xl bg-[#294657]/10 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#294657] group-hover:text-white transition-colors" title="View Couples Therapy Details">
              <i class="fas fa-hands-holding-child"></i>
            </a>
            <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1] mb-2.5">
              <a href="service-couples-therapy.html" class="hover:text-[#D7B7A5] transition-colors">Couples &amp; Marriage Therapy</a>
            </h3>
            <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#7d8d96] leading-relaxed mb-6">
              Gottman-informed and Emotionally Focused Therapy (EFT) to rebuild intimate trust, de-escalate circular arguments, and restore genuine empathy.
            </p>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-[#EBF1F4] dark:border-white/10 text-xs">
            <span class="font-semibold text-[#8FAFC0]">75 Min &middot; Bi-Weekly</span>
            <a href="service-couples-therapy.html" class="font-bold text-[#D7B7A5] hover:underline flex items-center gap-1">
              Explore Details <i class="fas fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Service 3: Trauma & EMDR Therapy -->
        <div class="card-wellness p-8 rounded-3xl bg-[#F8F6F1]/50 dark:bg-[#1e2d37]/40 border border-[#EBF1F4] dark:border-white/10 hover:shadow-xl transition-all group flex flex-col justify-between">
          <div>
            <a href="service-trauma-emdr.html" class="block w-14 h-14 rounded-2xl bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#8FAFC0] group-hover:text-white transition-colors" title="View Trauma & EMDR Details">
              <i class="fas fa-feather-pointed"></i>
            </a>
            <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1] mb-2.5">
              <a href="service-trauma-emdr.html" class="hover:text-[#D7B7A5] transition-colors">Trauma &amp; EMDR Therapy</a>
            </h3>
            <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#7d8d96] leading-relaxed mb-6">
              Gentle, somatic reprocessing for unresolved past trauma, chronic hyper-vigilance, and single-incident distress through certified EMDR protocols.
            </p>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-[#EBF1F4] dark:border-white/10 text-xs">
            <span class="font-semibold text-[#8FAFC0]">60 Min &middot; Weekly</span>
            <a href="service-trauma-emdr.html" class="font-bold text-[#D7B7A5] hover:underline flex items-center gap-1">
              Explore Details <i class="fas fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Service 4: Teen & Adolescent Counseling -->
        <div class="card-wellness p-8 rounded-3xl bg-[#F8F6F1]/50 dark:bg-[#1e2d37]/40 border border-[#EBF1F4] dark:border-white/10 hover:shadow-xl transition-all group flex flex-col justify-between">
          <div>
            <a href="service-teen-counseling.html" class="block w-14 h-14 rounded-2xl bg-[#D7B7A5]/10 text-[#D7B7A5] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#D7B7A5] group-hover:text-white transition-colors" title="View Teen Counseling Details">
              <i class="fas fa-user-graduate"></i>
            </a>
            <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1] mb-2.5">
              <a href="service-teen-counseling.html" class="hover:text-[#D7B7A5] transition-colors">Teen &amp; Adolescent Counseling</a>
            </h3>
            <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#7d8d96] leading-relaxed mb-6">
              Judgment-free, empowering guidance for teens dealing with academic stress, identity questions, social anxiety, and emotional regulation.
            </p>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-[#EBF1F4] dark:border-white/10 text-xs">
            <span class="font-semibold text-[#8FAFC0]">50 Min &middot; In-Person / Video</span>
            <a href="service-teen-counseling.html" class="font-bold text-[#D7B7A5] hover:underline flex items-center gap-1">
              Explore Details <i class="fas fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Service 5: Confidential Telehealth Video -->
        <div class="card-wellness p-8 rounded-3xl bg-[#F8F6F1]/50 dark:bg-[#1e2d37]/40 border border-[#EBF1F4] dark:border-white/10 hover:shadow-xl transition-all group flex flex-col justify-between">
          <div>
            <a href="service-telehealth.html" class="block w-14 h-14 rounded-2xl bg-[#294657]/10 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#294657] group-hover:text-white transition-colors" title="View Telehealth Details">
              <i class="fas fa-laptop-medical"></i>
            </a>
            <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1] mb-2.5">
              <a href="service-telehealth.html" class="hover:text-[#D7B7A5] transition-colors">Confidential Telehealth Video</a>
            </h3>
            <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#7d8d96] leading-relaxed mb-6">
              Access board-certified psychological care from the comfort and privacy of your home through our encrypted, HIPAA-compliant digital portal.
            </p>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-[#EBF1F4] dark:border-white/10 text-xs">
            <span class="font-semibold text-[#8FAFC0]">Statewide Licensure</span>
            <a href="service-telehealth.html" class="font-bold text-[#D7B7A5] hover:underline flex items-center gap-1">
              Explore Details <i class="fas fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        <!-- Service 6: Mindfulness & Stress Rituals -->
        <div class="card-wellness p-8 rounded-3xl bg-[#F8F6F1]/50 dark:bg-[#1e2d37]/40 border border-[#EBF1F4] dark:border-white/10 hover:shadow-xl transition-all group flex flex-col justify-between">
          <div>
            <a href="service-mindfulness.html" class="block w-14 h-14 rounded-2xl bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#8FAFC0] group-hover:text-white transition-colors" title="View Mindfulness Details">
              <i class="fas fa-spa"></i>
            </a>
            <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1] mb-2.5">
              <a href="service-mindfulness.html" class="hover:text-[#D7B7A5] transition-colors">Mindfulness &amp; Stress Rituals</a>
            </h3>
            <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#7d8d96] leading-relaxed mb-6">
              Cultivate somatic grounding, polyvagal nerve stabilization, and nervous system regulation tools you can practice anywhere in daily life.
            </p>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-[#EBF1F4] dark:border-white/10 text-xs">
            <span class="font-semibold text-[#8FAFC0]">Workshops &amp; 1-on-1</span>
            <a href="service-mindfulness.html" class="font-bold text-[#D7B7A5] hover:underline flex items-center gap-1">
              Explore Details <i class="fas fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

      </div>

      <div class="mt-12 text-center">
        <a href="services.html" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white font-bold text-xs shadow-md transition-all">
          View Full Services Directory <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- The Wellness Journey: 5-Stage Roadmap -->
  <section class="py-20 bg-[#F8F6F1] dark:bg-[#11191f] border-y border-[#EBF1F4] dark:border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-16">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">The Emotional Journey</span>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Discover &rarr; Connect &rarr; Understand &rarr; Heal &rarr; Grow
        </h2>
        <p class="text-sm sm:text-base text-[#27343B] dark:text-[#EBF1F4]">
          Therapy is not a clinical fix—it is a deeply restorative progression toward understanding yourself with kindness and clarity.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
        
        <!-- Step 1 -->
        <div class="bg-white dark:bg-[#17232b] p-6 rounded-2xl border border-[#EBF1F4] dark:border-white/10 space-y-3">
          <div class="w-10 h-10 rounded-xl bg-[#D7B7A5]/10 text-[#D7B7A5] flex items-center justify-center font-bold text-sm">
            01
          </div>
          <h3 class="font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">Discover</h3>
          <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">
            Explore your inner feelings without judgment. Clarify what has felt heavy or overwhelming.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="bg-white dark:bg-[#17232b] p-6 rounded-2xl border border-[#EBF1F4] dark:border-white/10 space-y-3">
          <div class="w-10 h-10 rounded-xl bg-[#294657]/10 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center font-bold text-sm">
            02
          </div>
          <h3 class="font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">Connect</h3>
          <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">
            Partner with a warm, certified clinician chosen specifically for your personality and goals.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="bg-white dark:bg-[#17232b] p-6 rounded-2xl border border-[#EBF1F4] dark:border-white/10 space-y-3">
          <div class="w-10 h-10 rounded-xl bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center font-bold text-sm">
            03
          </div>
          <h3 class="font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">Understand</h3>
          <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">
            Unpack root triggers, relational attachments, and thought patterns in total confidence.
          </p>
        </div>

        <!-- Step 4 -->
        <div class="bg-white dark:bg-[#17232b] p-6 rounded-2xl border border-[#EBF1F4] dark:border-white/10 space-y-3">
          <div class="w-10 h-10 rounded-xl bg-[#D7B7A5]/10 text-[#D7B7A5] flex items-center justify-center font-bold text-sm">
            04
          </div>
          <h3 class="font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">Heal</h3>
          <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">
            Apply somatic exercises, nervous system resets, and cognitive flexibility to release distress.
          </p>
        </div>

        <!-- Step 5 -->
        <div class="bg-white dark:bg-[#17232b] p-6 rounded-2xl border border-[#EBF1F4] dark:border-white/10 space-y-3">
          <div class="w-10 h-10 rounded-xl bg-[#294657]/10 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center font-bold text-sm">
            05
          </div>
          <h3 class="font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">Grow</h3>
          <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">
            Integrate lasting boundaries, deep self-worth, and vibrant presence into every chapter ahead.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Featured Clinicians -->
  <section class="py-20 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Licensed Specialists</span>
          <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
            Meet our empathetic clinicians.
          </h2>
        </div>
        <a href="therapists.html" class="inline-flex items-center gap-2 text-xs font-bold text-[#D7B7A5] hover:underline">
          View All 6 Therapists <i class="fas fa-arrow-right"></i>
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Clinician 1 -->
        <div class="card-wellness overflow-hidden rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col h-full group hover:shadow-2xl transition-all duration-300">
          <a href="therapist-sarah-jenkins.html" class="block relative aspect-[4/5] w-full overflow-hidden bg-[#EBF1F4]/40 dark:bg-[#1e2d37]">
            <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins, Psy.D." class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md text-[11px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                <span class="w-2 h-2 rounded-full bg-[#8FAFC0] animate-pulse"></span> Accepts Intake
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-[11px] font-semibold text-white/90"><i class="fas fa-video mr-1"></i> In-Person &amp; Video</span>
            </div>
          </a>
          <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
            <div class="space-y-1.5">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#D7B7A5] block">Clinical Psychologist &middot; Psy.D.</span>
              <h3 class="font-heading font-bold text-lg text-[#294657] dark:text-[#F8F6F1]">
                <a href="therapist-sarah-jenkins.html" class="hover:text-[#D7B7A5] transition-colors">Dr. Sarah Jenkins</a>
              </h3>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96] leading-relaxed">Specializes in adult anxiety, high-achiever burnout &amp; CBT restructuring.</p>
            </div>
            <div class="pt-3 flex items-center justify-between border-t border-[#EBF1F4] dark:border-white/10 text-xs">
              <span class="text-[11px] text-[#8FAFC0] font-bold"><i class="far fa-clock mr-1"></i> Next: Thu 2 PM</span>
              <a href="therapist-sarah-jenkins.html" class="font-bold text-[#D7B7A5] hover:text-[#c5a390] flex items-center gap-1 transition-colors">
                Profile <i class="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Clinician 2 -->
        <div class="card-wellness overflow-hidden rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col h-full group hover:shadow-2xl transition-all duration-300">
          <a href="therapist-marcus-vance.html" class="block relative aspect-[4/5] w-full overflow-hidden bg-[#EBF1F4]/40 dark:bg-[#1e2d37]">
            <img src="${IMAGES.therapist_marcus}" alt="Dr. Marcus Vance, LMFT" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md text-[11px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                <span class="w-2 h-2 rounded-full bg-[#8FAFC0] animate-pulse"></span> Accepts Intake
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-[11px] font-semibold text-white/90"><i class="fas fa-video mr-1"></i> Couples Suite &amp; Video</span>
            </div>
          </a>
          <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
            <div class="space-y-1.5">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#294657] dark:text-[#8FAFC0] block">Marriage &amp; Family &middot; LMFT</span>
              <h3 class="font-heading font-bold text-lg text-[#294657] dark:text-[#F8F6F1]">
                <a href="therapist-marcus-vance.html" class="hover:text-[#D7B7A5] transition-colors">Dr. Marcus Vance</a>
              </h3>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96] leading-relaxed">Couples reconciliation, de-escalating arguments &amp; Gottman therapy.</p>
            </div>
            <div class="pt-3 flex items-center justify-between border-t border-[#EBF1F4] dark:border-white/10 text-xs">
              <span class="text-[11px] text-[#8FAFC0] font-bold"><i class="far fa-clock mr-1"></i> Next: Thu 5:30 PM</span>
              <a href="therapist-marcus-vance.html" class="font-bold text-[#D7B7A5] hover:text-[#c5a390] flex items-center gap-1 transition-colors">
                Profile <i class="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Clinician 3 -->
        <div class="card-wellness overflow-hidden rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col h-full group hover:shadow-2xl transition-all duration-300">
          <a href="therapist-elena-rostova.html" class="block relative aspect-[4/5] w-full overflow-hidden bg-[#EBF1F4]/40 dark:bg-[#1e2d37]">
            <img src="${IMAGES.therapist_elena}" alt="Elena Rostova, LCSW, CCTP" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md text-[11px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                <span class="w-2 h-2 rounded-full bg-[#8FAFC0] animate-pulse"></span> Accepts Intake
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-[11px] font-semibold text-white/90"><i class="fas fa-video mr-1"></i> EMDR Certified</span>
            </div>
          </a>
          <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
            <div class="space-y-1.5">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#D7B7A5] block">Trauma Specialist &middot; LCSW, CCTP</span>
              <h3 class="font-heading font-bold text-lg text-[#294657] dark:text-[#F8F6F1]">
                <a href="therapist-elena-rostova.html" class="hover:text-[#D7B7A5] transition-colors">Elena Rostova</a>
              </h3>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96] leading-relaxed">Certified EMDR clinician, somatic experiencing &amp; nervous system resets.</p>
            </div>
            <div class="pt-3 flex items-center justify-between border-t border-[#EBF1F4] dark:border-white/10 text-xs">
              <span class="text-[11px] text-[#8FAFC0] font-bold"><i class="far fa-clock mr-1"></i> Next: Fri 11 AM</span>
              <a href="therapist-elena-rostova.html" class="font-bold text-[#D7B7A5] hover:text-[#c5a390] flex items-center gap-1 transition-colors">
                Profile <i class="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Clinician 4 -->
        <div class="card-wellness overflow-hidden rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 flex flex-col h-full group hover:shadow-2xl transition-all duration-300">
          <a href="therapist-david-kim.html" class="block relative aspect-[4/5] w-full overflow-hidden bg-[#EBF1F4]/40 dark:bg-[#1e2d37]">
            <img src="${IMAGES.therapist_david}" alt="Dr. David Kim, M.D." class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md text-[11px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                <span class="w-2 h-2 rounded-full bg-[#8FAFC0] animate-pulse"></span> Accepts Intake
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-[11px] font-semibold text-white/90"><i class="fas fa-video mr-1"></i> Child &amp; Adolescent Care</span>
            </div>
          </a>
          <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
            <div class="space-y-1.5">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#294657] dark:text-[#8FAFC0] block">Psychiatrist &middot; M.D.</span>
              <h3 class="font-heading font-bold text-lg text-[#294657] dark:text-[#F8F6F1]">
                <a href="therapist-david-kim.html" class="hover:text-[#D7B7A5] transition-colors">Dr. David Kim</a>
              </h3>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96] leading-relaxed">Holistic medication management, adolescent ADHD &amp; neurobiology.</p>
            </div>
            <div class="pt-3 flex items-center justify-between border-t border-[#EBF1F4] dark:border-white/10 text-xs">
              <span class="text-[11px] text-[#8FAFC0] font-bold"><i class="far fa-clock mr-1"></i> Next: Mon 10 AM</span>
              <a href="therapist-david-kim.html" class="font-bold text-[#D7B7A5] hover:text-[#c5a390] flex items-center gap-1 transition-colors">
                Profile <i class="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Client Testimonials & Stories -->
  <section class="py-20 bg-[#F8F6F1] dark:bg-[#11191f] border-t border-[#EBF1F4] dark:border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-16">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Client Experiences</span>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Words from those who found their path.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card-wellness p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-4">
          <div class="flex text-amber-400 text-xs">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#7d8d96] leading-relaxed italic">
            &ldquo;From my very first intake session, I didn't feel like a case file or patient number. I felt welcomed, safe, and unconditionally heard. My panic episodes have dropped by 80% in 4 months.&rdquo;
          </p>
          <div class="flex items-center gap-3 pt-3 border-t border-[#EBF1F4] dark:border-white/10">
            <img src="${IMAGES.client_1}" alt="Client avatar" class="w-10 h-10 rounded-full object-cover">
            <div>
              <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">Rachel K.</div>
              <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Individual CBT &middot; 6 Months</div>
            </div>
          </div>
        </div>

        <div class="card-wellness p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-4">
          <div class="flex text-amber-400 text-xs">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#7d8d96] leading-relaxed italic">
            &ldquo;My spouse and I had stopped talking about anything meaningful. Dr. Marcus gave us conversational frameworks that de-escalated defensiveness. We feel like genuine partners again.&rdquo;
          </p>
          <div class="flex items-center gap-3 pt-3 border-t border-[#EBF1F4] dark:border-white/10">
            <img src="${IMAGES.client_2}" alt="Client avatar" class="w-10 h-10 rounded-full object-cover">
            <div>
              <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">David &amp; Maya M.</div>
              <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Couples Counseling &middot; 8 Months</div>
            </div>
          </div>
        </div>

        <div class="card-wellness p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-4">
          <div class="flex text-amber-400 text-xs">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#7d8d96] leading-relaxed italic">
            &ldquo;The Client Sanctuary portal is unbelievable. Being able to log my mood, review Dr. Sarah's post-session notes, and send questions confidentially makes therapy feel continuous and reassuring.&rdquo;
          </p>
          <div class="flex items-center gap-3 pt-3 border-t border-[#EBF1F4] dark:border-white/10">
            <img src="${IMAGES.client_3}" alt="Client avatar" class="w-10 h-10 rounded-full object-cover">
            <div>
              <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">Liam S.</div>
              <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Telehealth Client &middot; 1 Year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="py-16 bg-gradient-to-r from-[#294657] to-[#1d3340] text-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <span class="inline-block px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#f0baa9] uppercase tracking-wider">
        Your Safe Beginning
      </span>
      <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
        Ready to speak with someone who truly listens?
      </h2>
      <p class="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
        Schedule your 15-minute complimentary introductory consultation with our clinical director to be matched with your ideal specialist.
      </p>
      <div class="flex flex-wrap justify-center gap-4 pt-2">
        <button type="button" class="open-appointment-btn px-8 py-4 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-lg shadow-black/20 transition-all hover:scale-105 active:scale-95">
          Request Intake Consultation
        </button>
        <a href="contact.html" class="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all">
          Contact Practice Office
        </a>
      </div>
    </div>
  </section>
  `;

  return head + header + content + getFooter();
}

// =========================================================================
// 2. home-2.html — The Wellness Journey Flagship Experience
// =========================================================================
function buildHome2() {
  const head = getHead(
    'The Wellness Journey | Mindful Paths Flagship Experience',
    'Experience our signature emotional progression: Discover, Connect, Understand, Heal, and Grow with interactive journey matching and live box breathing.'
  );

  const header = getHeader('home-2');

  const content = `
  <!-- Signature Hero Section with Generated Embrace Image -->
  <section class="relative pt-12 pb-24 md:py-32 bg-gradient-to-b from-[#F8F6F1] via-[#EBF1F4]/50 to-[#F8F6F1] dark:from-[#11191f] dark:via-[#17232b] dark:to-[#11191f] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        <!-- Left: Editorial Storytelling -->
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D7B7A5]/10 text-[#D7B7A5] border border-[#D7B7A5]/20 text-xs font-bold uppercase tracking-wider">
            <i class="fas fa-heart text-[#D7B7A5]"></i> Flagship Mental Wellness Demo
          </div>

          <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#294657] dark:text-[#F8F6F1] leading-[1.12]">
            Your journey toward <span class="italic text-[#D7B7A5]">inner peace</span> begins with one breath.
          </h1>

          <p class="text-base sm:text-lg text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">
            Welcome to a non-clinical, empathetic psychological wellness space designed around your emotional needs. Here, you are never judged—only understood, supported, and guided.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="#wellness-journey-section" class="px-7 py-4 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-lg shadow-[#D7B7A5]/30 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2">
              <i class="fas fa-route"></i> Start Your Wellness Journey
            </a>
            <a href="#breathing-tool-section" class="px-7 py-4 rounded-full bg-white dark:bg-[#17232b] hover:bg-[#fdf7f5] dark:hover:bg-[#1e2d37] text-[#294657] dark:text-[#F8F6F1] font-bold text-xs border border-[#EBF1F4] dark:border-white/10 shadow-sm transition-all duration-200 flex items-center gap-2">
              <i class="fas fa-lungs text-[#8FAFC0]"></i> Take a Breath (4-4-4)
            </a>
          </div>

          <!-- The Safe Harbor Philosophy Quote Card -->
          <div class="p-4 rounded-2xl bg-white/80 dark:bg-[#17232b]/80 border border-[#EBF1F4] dark:border-white/10 shadow-sm space-y-1">
            <div class="flex items-center gap-2 text-xs font-bold text-[#D7B7A5]">
              <i class="fas fa-sparkles text-amber-400"></i> The Safe Harbor Philosophy
            </div>
            <p class="font-heading text-sm sm:text-base font-semibold italic text-[#294657] dark:text-[#F8F6F1]">
              "Healing happens when we are accepted exactly as we are."
            </p>
          </div>

          <!-- Compassionate Statement -->
          <div class="pt-1 flex items-center gap-3 text-xs text-[#27343B] dark:text-[#7d8d96]">
            <i class="fas fa-shield-halved text-[#8FAFC0] text-base"></i>
            <span>No referral needed &middot; 100% confidential &middot; In-person &amp; secure telehealth</span>
          </div>
        </div>

        <!-- Right: The Hero Visual Card (Compassionate Therapist Welcoming You) -->
        <div class="lg:col-span-6 relative flex items-center justify-center">
          <!-- Card Container: Full Image Display With Perfect Alignment -->
          <div class="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#1e2d37] bg-white dark:bg-[#17232b] p-3 sm:p-5 flex items-center justify-center group">
            <div class="relative w-full max-h-[560px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#FAF7FD] to-[#F1ECF8] dark:from-[#1e1c27] dark:to-[#17232b]">
              <img src="${IMAGES.hero_home2}" alt="Compassionate therapist extending welcoming hand" class="w-auto h-auto max-h-[530px] max-w-full object-contain mx-auto -mt-3 transform group-hover:scale-105 transition-transform duration-700">
            </div>
          </div>

          <!-- Floating Badge 1: Compassionate Welcome -->
          <div class="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-[#17232b] p-3.5 rounded-2xl shadow-xl border border-[#EBF1F4] dark:border-white/10 flex items-center gap-3 animate-float z-10">
            <div class="w-10 h-10 rounded-xl bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center font-bold text-base">
              <i class="fas fa-heart text-[#D7B7A5]"></i>
            </div>
            <div>
              <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">Warm Welcome</div>
              <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Compassionate &middot; Non-judgmental</div>
            </div>
          </div>

          <!-- Floating Badge 2: Safe Client Sanctuary -->
          <div class="absolute -bottom-5 -right-4 sm:-right-6 bg-white dark:bg-[#17232b] p-4 rounded-2xl shadow-xl border border-[#EBF1F4] dark:border-white/10 flex items-center gap-3 z-10">
            <div class="w-11 h-11 rounded-xl bg-[#D7B7A5]/10 text-[#D7B7A5] flex items-center justify-center text-lg">
              <i class="fas fa-user-shield"></i>
            </div>
            <div>
              <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">Safe Client Sanctuary</div>
              <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Confidential care &amp; guidance</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- SIGNATURE FEATURE: "Start Your Wellness Journey" Discovery Selector -->
  <section id="wellness-journey-section" class="py-20 bg-white dark:bg-[#17232b] border-y border-[#EBF1F4] dark:border-white/10 scroll-mt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Interactive Care Recommendation</span>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Where would you like to begin?
        </h2>
        <p class="text-sm text-[#27343B] dark:text-[#EBF1F4]">
          Select the focus area that best aligns with what you are experiencing. We will match you with the ideal modality, clinician, and timeline.
        </p>
      </div>

      <!-- 6 Journey Options (Wellness Journey Selector) -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10" id="journey-options-container">
        <button type="button" data-journey="anxiety" class="journey-btn active p-4 rounded-2xl border-2 text-center transition-all bg-[#F8F6F1] border-[#D7B7A5] text-[#294657] dark:bg-[#1e2d37] dark:border-[#D7B7A5] dark:text-[#F8F6F1] shadow-sm">
          <div class="text-xl mb-2 text-[#D7B7A5]"><i class="fas fa-cloud-sun"></i></div>
          <div class="text-xs font-bold">Stress &amp; Anxiety</div>
        </button>

        <button type="button" data-journey="relationships" class="journey-btn p-4 rounded-2xl border-2 text-center transition-all bg-white border-[#EBF1F4] text-[#27343B] hover:border-[#D7B7A5]/50 dark:bg-[#17232b] dark:border-white/10 dark:text-[#EBF1F4]">
          <div class="text-xl mb-2 text-[#294657] dark:text-[#8FAFC0]"><i class="fas fa-hand-holding-heart"></i></div>
          <div class="text-xs font-bold">Relationships</div>
        </button>

        <button type="button" data-journey="trauma" class="journey-btn p-4 rounded-2xl border-2 text-center transition-all bg-white border-[#EBF1F4] text-[#27343B] hover:border-[#D7B7A5]/50 dark:bg-[#17232b] dark:border-white/10 dark:text-[#EBF1F4]">
          <div class="text-xl mb-2 text-[#8FAFC0]"><i class="fas fa-shield-heart"></i></div>
          <div class="text-xs font-bold">Trauma &amp; EMDR</div>
        </button>

        <button type="button" data-journey="growth" class="journey-btn p-4 rounded-2xl border-2 text-center transition-all bg-white border-[#EBF1F4] text-[#27343B] hover:border-[#D7B7A5]/50 dark:bg-[#17232b] dark:border-white/10 dark:text-[#EBF1F4]">
          <div class="text-xl mb-2 text-[#D7B7A5]"><i class="fas fa-seedling"></i></div>
          <div class="text-xs font-bold">Personal Growth</div>
        </button>

        <button type="button" data-journey="teen" class="journey-btn p-4 rounded-2xl border-2 text-center transition-all bg-white border-[#EBF1F4] text-[#27343B] hover:border-[#D7B7A5]/50 dark:bg-[#17232b] dark:border-white/10 dark:text-[#EBF1F4]">
          <div class="text-xl mb-2 text-[#294657] dark:text-[#8FAFC0]"><i class="fas fa-user-graduate"></i></div>
          <div class="text-xs font-bold">Teen Support</div>
        </button>

        <button type="button" data-journey="burnout" class="journey-btn p-4 rounded-2xl border-2 text-center transition-all bg-white border-[#EBF1F4] text-[#27343B] hover:border-[#D7B7A5]/50 dark:bg-[#17232b] dark:border-white/10 dark:text-[#EBF1F4]">
          <div class="text-xl mb-2 text-[#8FAFC0]"><i class="fas fa-battery-half"></i></div>
          <div class="text-xs font-bold">Burnout &amp; Career</div>
        </button>
      </div>

      <!-- Dynamic Journey Match Result Card -->
      <div id="journey-result-card" class="bg-[#F8F6F1] dark:bg-[#11191f] p-8 sm:p-10 rounded-3xl border border-[#EBF1F4] dark:border-white/10 shadow-lg transition-all">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-8 space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D7B7A5]/10 text-[#D7B7A5] text-xs font-bold">
              <span id="journey-badge">Recommended Pathway: Anxiety &amp; Nervous System Balance</span>
            </div>
            <h3 id="journey-title" class="font-heading text-2xl sm:text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">
              Cognitive Behavioral &amp; Somatic Reset
            </h3>
            <p id="journey-description" class="text-sm text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">
              Designed specifically for persistent tension, overthinking, and nervous system fatigue. We integrate cognitive restructuring with polyvagal somatic breathing to quiet mental noise and ground your body.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div class="p-3 bg-white dark:bg-[#17232b] rounded-xl border border-[#EBF1F4] dark:border-white/10">
                <span class="text-[#27343B] dark:text-[#7d8d96] block">Session Frequency</span>
                <span id="journey-frequency" class="font-bold text-[#294657] dark:text-[#F8F6F1]">50-min weekly session</span>
              </div>
              <div class="p-3 bg-white dark:bg-[#17232b] rounded-xl border border-[#EBF1F4] dark:border-white/10">
                <span class="text-[#27343B] dark:text-[#7d8d96] block">Recommended Format</span>
                <span id="journey-format" class="font-bold text-[#294657] dark:text-[#F8F6F1]">In-Person or Telehealth</span>
              </div>
              <div class="p-3 bg-white dark:bg-[#17232b] rounded-xl border border-[#EBF1F4] dark:border-white/10">
                <span class="text-[#27343B] dark:text-[#7d8d96] block">Next Intake Opening</span>
                <span id="journey-opening" class="font-bold text-[#8FAFC0]">This Thursday 2:00 PM</span>
              </div>
            </div>
          </div>

          <!-- Matched Clinician Mini Card -->
          <div class="lg:col-span-4 bg-white dark:bg-[#17232b] p-6 rounded-3xl border border-[#EBF1F4] dark:border-white/10 space-y-4 shadow-sm">
            <div class="flex items-center gap-4">
              <img id="journey-therapist-img" src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins" class="w-20 h-20 rounded-2xl object-cover object-center border-2 border-[#D7B7A5]/30 shadow-md shrink-0">
              <div class="space-y-1">
                <div class="text-[11px] text-[#D7B7A5] font-bold uppercase tracking-wider" id="journey-therapist-spec">Lead Psychologist</div>
                <div class="font-heading font-bold text-lg text-[#294657] dark:text-[#F8F6F1] leading-snug" id="journey-therapist-name">Dr. Sarah Jenkins, Psy.D.</div>
                <span class="inline-flex items-center gap-1 text-[11px] text-[#8FAFC0] font-semibold"><i class="fas fa-check-circle text-[10px]"></i> Board Certified</span>
              </div>
            </div>
            <p class="text-xs text-[#27343B] dark:text-[#7d8d96]" id="journey-therapist-quote">
              &ldquo;We don't try to eliminate all anxiety—we help your nervous system realize it is safe right here.&rdquo;
            </p>
            <button type="button" class="open-appointment-btn w-full py-3 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all">
              Book with This Specialist
            </button>
          </div>

        </div>
      </div>

    </div>
  </section>

  <!-- INTERACTIVE "TAKE A BREATH" 4-4-4 BOX BREATHING SECTION -->
  <section id="breathing-tool-section" class="py-20 bg-[#F8F6F1] dark:bg-[#11191f] scroll-mt-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      
      <div class="space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-[#8FAFC0]">Somatic Reset Tool</span>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Take a Gentle Breath
        </h2>
        <p class="text-xs sm:text-sm text-[#27343B] dark:text-[#EBF1F4] max-w-md mx-auto">
          Box breathing stimulates the vagus nerve and lowers acute cortisol within 90 seconds. Follow the circle below:
        </p>
      </div>

      <!-- Breathing Interactive Circle Canvas -->
      <div class="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto flex items-center justify-center">
        <!-- Outer Glowing Aura -->
        <div id="breathing-aura" class="absolute inset-0 rounded-full bg-[#8FAFC0]/20 blur-xl transition-transform duration-1000 transform scale-90"></div>
        
        <!-- Main Animated Circle -->
        <div id="breathing-circle" class="w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-[#294657] to-[#8FAFC0] text-white flex flex-col items-center justify-center p-6 shadow-2xl transition-transform duration-1000 transform scale-90">
          <span id="breathing-stage" class="font-heading text-2xl sm:text-3xl font-bold">Ready</span>
          <span id="breathing-timer" class="text-xs font-semibold text-white/80 mt-1">Press Start Below</span>
          <span id="breathing-cycles" class="text-[10px] uppercase font-bold text-white/60 tracking-wider mt-3">Cycle 0/4</span>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center justify-center gap-4 pt-2">
        <button type="button" id="breathing-start-btn" class="px-8 py-3.5 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95">
          <i class="fas fa-play mr-1.5"></i> Begin 4-4-4 Breathing
        </button>
        <button type="button" id="breathing-reset-btn" class="px-6 py-3.5 rounded-full bg-white dark:bg-[#17232b] hover:bg-[#EBF1F4] text-[#294657] dark:text-[#F8F6F1] font-bold text-xs border border-[#EBF1F4] dark:border-white/10 transition-all">
          <i class="fas fa-rotate-left mr-1.5"></i> Reset
        </button>
      </div>

      <p class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">
        Inhale 4s &middot; Hold 4s &middot; Exhale 4s &middot; Hold 4s
      </p>

    </div>
  </section>

  <!-- CLIENT PORTAL / SANCTUARY PREVIEW -->
  <section class="py-20 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-6 space-y-6">
          <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Private Client Sanctuary</span>
          <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
            Your confidential therapeutic space between sessions.
          </h2>
          <p class="text-sm text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">
            Healing doesn't pause when your 50-minute appointment concludes. Every client receives complimentary access to their encrypted Mindful Paths Sanctuary:
          </p>

          <div class="space-y-3 pt-2">
            <div class="flex items-start gap-3">
              <div class="w-7 h-7 rounded-lg bg-[#D7B7A5]/10 text-[#D7B7A5] flex items-center justify-center shrink-0 text-xs">
                <i class="fas fa-smile"></i>
              </div>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96]"><strong class="text-[#294657] dark:text-[#F8F6F1]">Private Mood Journal:</strong> Track daily emotional fluctuations and identify recurring situational triggers.</p>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-7 h-7 rounded-lg bg-[#294657]/10 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center shrink-0 text-xs">
                <i class="fas fa-file-lines"></i>
              </div>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96]"><strong class="text-[#294657] dark:text-[#F8F6F1]">Shared Clinical Notes:</strong> Re-read coping tools, journal prompts, and breakthroughs recorded together in session.</p>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-7 h-7 rounded-lg bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center shrink-0 text-xs">
                <i class="fas fa-comment-dots"></i>
              </div>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96]"><strong class="text-[#294657] dark:text-[#F8F6F1]">Secure Counselor Messaging:</strong> Asynchronous check-ins for non-emergency reflections between appointments.</p>
            </div>
          </div>

          <div class="pt-4 flex items-center gap-4">
            <a href="login.html" class="px-7 py-3.5 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all">
              Sign In to Sanctuary
            </a>
            <a href="register.html" class="px-7 py-3.5 rounded-full bg-[#F8F6F1] dark:bg-[#1e2d37] text-[#294657] dark:text-[#F8F6F1] font-bold text-xs border border-[#EBF1F4] dark:border-white/10 transition-all">
              Register Intake
            </a>
          </div>
        </div>

        <!-- Dashboard UI Mockup Preview -->
        <div class="lg:col-span-6">
          <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 shadow-xl space-y-4">
            <!-- Mock Header -->
            <div class="flex items-center justify-between pb-3 border-b border-[#EBF1F4] dark:border-white/10">
              <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-full bg-[#D7B7A5] text-white flex items-center justify-center text-xs font-bold">AM</div>
                <div>
                  <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">Good morning, Alex</div>
                  <div class="text-[10px] text-[#8FAFC0]">Next Session: Thursday 2:00 PM</div>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] text-[10px] font-bold">Active Client</span>
            </div>

            <!-- Mock Mood Quick Log -->
            <div class="p-4 bg-white dark:bg-[#17232b] rounded-2xl border border-[#EBF1F4] dark:border-white/10 space-y-2">
              <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">How are you feeling right now?</div>
              <div class="flex justify-between text-2xl pt-1 select-none">
                <span class="mock-mood-emoji cursor-pointer hover:scale-125 transition-transform" data-home-mood="great" title="Feeling Great">😊</span>
                <span class="mock-mood-emoji cursor-pointer hover:scale-125 transition-transform" data-home-mood="good" title="Feeling Good">🙂</span>
                <span class="mock-mood-emoji cursor-pointer hover:scale-125 transition-transform p-1 rounded-lg bg-[#D7B7A5]/20" data-home-mood="okay" title="Feeling Okay">😐</span>
                <span class="mock-mood-emoji cursor-pointer hover:scale-125 transition-transform" data-home-mood="low" title="Feeling Low">😔</span>
                <span class="mock-mood-emoji cursor-pointer hover:scale-125 transition-transform" data-home-mood="difficult" title="Feeling Difficult">😣</span>
              </div>
            </div>

            <!-- Mock Upcoming Session Card -->
            <div class="p-4 bg-white dark:bg-[#17232b] rounded-2xl border border-[#EBF1F4] dark:border-white/10 flex items-center justify-between">
              <div>
                <div class="text-[10px] uppercase font-bold text-[#D7B7A5]">Upcoming Telehealth Session</div>
                <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">With Dr. Sarah Jenkins</div>
                <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Thursday, Sept 12 &middot; 2:00 PM (50 Min)</div>
              </div>
              <span class="px-3 py-1.5 rounded-full bg-[#294657] text-white text-[11px] font-bold">Join Video</span>
            </div>

            <!-- Mock Shared Notes Snippet -->
            <div class="p-4 bg-white dark:bg-[#17232b] rounded-2xl border border-[#EBF1F4] dark:border-white/10 space-y-1">
              <div class="text-[10px] uppercase font-bold text-[#8FAFC0]">Therapist Shared Reflection</div>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96] italic">
                &ldquo;Remember: whenever you notice the chest tightness, pause for 3 box breaths before replying to stressful emails.&rdquo;
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Script Inclusions for Interactive Engines -->
  <script src="assets/js/wellness-journey.js"></script>
  <script src="assets/js/breathing.js"></script>
  <script src="assets/js/mood-journal.js"></script>
  `;

  return head + header + content + getFooter();
}

// Write the files
fs.writeFileSync(path.join(__dirname, 'index.html'), buildIndex(), 'utf8');
console.log('✓ Generated index.html');

fs.writeFileSync(path.join(__dirname, 'home-2.html'), buildHome2(), 'utf8');
console.log('✓ Generated home-2.html');
