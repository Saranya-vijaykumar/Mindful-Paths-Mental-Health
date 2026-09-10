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

console.log('Generating Calmind Index (Matching Uploaded Theme Reference)...');

function buildIndex() {
  const content = `
<main class="flex-grow">
  <!-- Hero Section: Matching "Find Balance in Your Life" from Calmind Mockup -->
  <section class="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
    <!-- Subtle Botanical Leaf Silhouette Background -->
    <div class="absolute -top-12 -left-12 w-64 h-64 opacity-20 pointer-events-none text-primary-400 dark:opacity-10">
      <svg viewBox="0 0 100 100" class="w-full h-full fill-current"><path d="M50 0 C70 30 90 60 50 100 C10 60 30 30 50 0 Z"/></svg>
    </div>
    <div class="absolute bottom-4 right-4 w-72 h-72 opacity-15 pointer-events-none text-primary-500 dark:opacity-10">
      <svg viewBox="0 0 100 100" class="w-full h-full fill-current"><path d="M50 0 C70 30 90 60 50 100 C10 60 30 30 50 0 Z"/></svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Hero Column -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/80 dark:bg-primary-950/60 border border-primary-200 dark:border-primary-800/60 text-primary-700 dark:text-primary-300 text-xs font-bold shadow-sm">
            <i class="fas fa-heart text-primary-500"></i>
            <span>Compassionate, Judgment-Free Support</span>
          </div>

          <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso-900 dark:text-white tracking-tight leading-[1.12]">
            Find Balance in <span class="text-primary-600 dark:text-primary-400 italic">Your Life</span>
          </h1>

          <p class="text-base sm:text-lg text-slate-600 dark:text-sand-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
            A safe, judgment-free sanctuary offering personalized psychotherapy and compassionate guidance to help you heal, grow, and restore emotional peace.
          </p>

          <!-- Action Buttons -->
          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button type="button" class="open-appointment-modal w-full sm:w-auto px-8 h-12 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow-xl shadow-primary-600/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              Book a Session
            </button>
            <a href="about.html" class="w-full sm:w-auto px-7 h-12 rounded-full bg-white dark:bg-espresso-800 hover:bg-sand-100 dark:hover:bg-espresso-700 text-slate-800 dark:text-sand-200 font-bold text-xs border border-sand-300 dark:border-white/10 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              Learn More
            </a>
          </div>

          <!-- Feature Bullets -->
          <div class="pt-6 grid grid-cols-3 gap-6 border-t border-sand-300/80 dark:border-white/10 max-w-lg mx-auto lg:mx-0">
            <div>
              <p class="font-heading text-2xl sm:text-3xl font-bold text-espresso-900 dark:text-white" data-counter-target="500" data-counter-suffix="+">500+</p>
              <p class="text-xs text-slate-500 dark:text-sand-400">Successful Sessions</p>
            </div>
            <div>
              <p class="font-heading text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400" data-counter-target="15" data-counter-suffix="+">15+</p>
              <p class="text-xs text-slate-500 dark:text-sand-400">Years Experience</p>
            </div>
            <div>
              <p class="font-heading text-2xl sm:text-3xl font-bold text-espresso-900 dark:text-white" data-counter-target="100" data-counter-suffix="+">100+</p>
              <p class="text-xs text-slate-500 dark:text-sand-400">Happy Clients</p>
            </div>
          </div>
        </div>

        <!-- Right Hero Visual: 1-on-1 Compassionate Therapy Consultation -->
        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <!-- Calmind Warm Glow Silhouette -->
            <div class="absolute -top-6 -right-6 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl -z-10"></div>
            <div class="absolute -bottom-6 -left-6 w-64 h-64 bg-sand-300/40 dark:bg-primary-900/20 rounded-full blur-3xl -z-10"></div>

            <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-espresso-800 group">
              <img src="${IMAGES.hero_home1}" alt="Compassionate emotional embrace and healing support" class="w-full h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="eager">
              <div class="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent"></div>
              
              <!-- Floating Next Session Badge -->
              <div class="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 dark:bg-espresso-900/95 backdrop-blur-md shadow-xl border border-sand-200 dark:border-white/10 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
                    <i class="fas fa-heart text-base"></i>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-slate-900 dark:text-white">Next Available Opening</p>
                    <p class="text-[11px] text-primary-600 dark:text-primary-400 font-semibold">Today &middot; 4:30 PM (In-Person or Video)</p>
                  </div>
                </div>
                <button type="button" class="open-appointment-modal px-4 py-2 rounded-full bg-primary-600 text-white text-xs font-bold hover:bg-primary-700 transition-colors shrink-0">
                  Book
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Section 2: "We're Here to Listen and Support You" -->
  <section class="py-16 bg-white dark:bg-espresso-900 border-y border-sand-300/60 dark:border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5">
          <div class="rounded-3xl overflow-hidden shadow-xl border-4 border-sand-100 dark:border-espresso-800">
            <img src="${IMAGES.about_director}" alt="Psychologist listening attentively and supporting client" class="w-full h-80 sm:h-96 object-cover">
          </div>
        </div>
        <div class="lg:col-span-7 space-y-5">
          <span class="text-xs uppercase font-bold tracking-widest text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/60 px-3 py-1 rounded-full border border-primary-200 dark:border-primary-800/60">
            About Our Practice
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl font-bold text-espresso-900 dark:text-white">
            We're Here to Listen and Support You
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-sand-300 leading-relaxed font-normal">
            A safe space to talk, heal, and grow. Whether you are navigating acute panic, life transitions, or relational struggles, our licensed therapists provide individualized therapy and expert guidance for a healthier, happier you.
          </p>
          <div class="pt-2 flex gap-4">
            <a href="about.html" class="px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow-md transition-colors">
              Learn More About Us
            </a>
            <button type="button" class="open-appointment-modal px-6 py-3 rounded-full bg-sand-200 dark:bg-espresso-800 text-espresso-900 dark:text-sand-200 font-bold text-xs hover:bg-sand-300 transition-colors">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: "Therapy That Fits Your Needs" -->
  <section class="py-20 bg-[#FAF5F0] dark:bg-[#141110]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span class="text-xs uppercase font-bold tracking-widest text-primary-600 dark:text-primary-400">
          Professional Care
        </span>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-espresso-900 dark:text-white">
          Therapy That Fits Your Needs
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-sand-400">
          Individual therapy, couples counseling, and expert guidance for a healthier, happier life.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Individual Therapy -->
        <div class="card-lift rounded-3xl bg-white dark:bg-espresso-900 border border-sand-300/80 dark:border-white/10 p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xl">
              <i class="fas fa-user"></i>
            </div>
            <div class="rounded-2xl overflow-hidden h-44">
              <img src="${IMAGES.service_individual}" alt="Individual Therapy" class="w-full h-full object-cover">
            </div>
            <h3 class="font-heading text-xl font-bold text-espresso-900 dark:text-white">Individual Therapy</h3>
            <p class="text-xs text-slate-600 dark:text-sand-300 leading-relaxed">
              Dedicated one-on-one sessions addressing anxiety, mood transitions, depression, and personal resilience.
            </p>
          </div>
          <div class="pt-4 border-t border-sand-200 dark:border-white/10 flex items-center justify-between">
            <a href="services.html" class="text-xs font-bold text-primary-600 hover:underline">Learn More &rarr;</a>
            <button type="button" class="open-appointment-modal px-4 py-1.5 rounded-full bg-primary-600 text-white text-xs font-bold hover:bg-primary-700" data-service="individual">Book</button>
          </div>
        </div>

        <!-- Couples Counseling -->
        <div class="card-lift rounded-3xl bg-white dark:bg-espresso-900 border border-sand-300/80 dark:border-white/10 p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xl">
              <i class="fas fa-heart"></i>
            </div>
            <div class="rounded-2xl overflow-hidden h-44">
              <img src="${IMAGES.service_couples}" alt="Couples Counseling" class="w-full h-full object-cover">
            </div>
            <h3 class="font-heading text-xl font-bold text-espresso-900 dark:text-white">Couples Counseling</h3>
            <p class="text-xs text-slate-600 dark:text-sand-300 leading-relaxed">
              Repair trust, disarm defensive communication loops, and rekindle emotional intimacy with Gottman protocols.
            </p>
          </div>
          <div class="pt-4 border-t border-sand-200 dark:border-white/10 flex items-center justify-between">
            <a href="services.html" class="text-xs font-bold text-primary-600 hover:underline">Learn More &rarr;</a>
            <button type="button" class="open-appointment-modal px-4 py-1.5 rounded-full bg-primary-600 text-white text-xs font-bold hover:bg-primary-700" data-service="couples">Book</button>
          </div>
        </div>

        <!-- Online Sessions -->
        <div class="card-lift rounded-3xl bg-white dark:bg-espresso-900 border border-sand-300/80 dark:border-white/10 p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xl">
              <i class="fas fa-laptop-medical"></i>
            </div>
            <div class="rounded-2xl overflow-hidden h-44">
              <img src="${IMAGES.service_telehealth}" alt="Online Telehealth Video Sessions" class="w-full h-full object-cover">
            </div>
            <h3 class="font-heading text-xl font-bold text-espresso-900 dark:text-white">Online Video Sessions</h3>
            <p class="text-xs text-slate-600 dark:text-sand-300 leading-relaxed">
              High-definition HIPAA-encrypted video appointments from your home with zero app downloads required.
            </p>
          </div>
          <div class="pt-4 border-t border-sand-200 dark:border-white/10 flex items-center justify-between">
            <a href="services.html" class="text-xs font-bold text-primary-600 hover:underline">Learn More &rarr;</a>
            <button type="button" class="open-appointment-modal px-4 py-1.5 rounded-full bg-primary-600 text-white text-xs font-bold hover:bg-primary-700" data-service="telehealth">Book</button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Section 4: Dark Espresso Section "Empowering You to Live a Better Life" -->
  <section class="py-20 bg-[#1C1917] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-5 space-y-6">
          <span class="text-xs uppercase font-bold tracking-widest text-primary-400">Our Approach</span>
          <h2 class="font-heading text-3xl sm:text-4xl font-bold leading-tight">
            Empowering You to Live a Better Life
          </h2>
          <p class="text-xs sm:text-sm text-sand-300 leading-relaxed">
            We combine proven clinical methods with genuine care to help you find clarity, build resilience, and achieve lasting psychological change.
          </p>
          
          <!-- Metric counters with matching icons -->
          <div class="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div class="space-y-1">
              <i class="fas fa-users text-primary-400 text-lg"></i>
              <p class="font-heading text-2xl font-bold" data-counter-target="100" data-counter-suffix="+">100+</p>
              <p class="text-[11px] text-sand-400">Happy Clients</p>
            </div>
            <div class="space-y-1">
              <i class="fas fa-star text-primary-400 text-lg"></i>
              <p class="font-heading text-2xl font-bold" data-counter-target="15" data-counter-suffix="+">15+</p>
              <p class="text-[11px] text-sand-400">Years Experience</p>
            </div>
            <div class="space-y-1">
              <i class="fas fa-heart text-primary-400 text-lg"></i>
              <p class="font-heading text-2xl font-bold" data-counter-target="500" data-counter-suffix="+">500+</p>
              <p class="text-[11px] text-sand-400">Successful Sessions</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-4">
          <div class="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-primary-600/30 text-primary-400 flex items-center justify-center shrink-0 text-lg">
              <i class="fas fa-user-check"></i>
            </div>
            <div>
              <h4 class="font-heading font-bold text-base text-white">Personalized Support</h4>
              <p class="text-xs text-sand-300 mt-1">Tailored therapy designed around your unique history, pacing, and emotional goals.</p>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-primary-600/30 text-primary-400 flex items-center justify-center shrink-0 text-lg">
              <i class="fas fa-certificate"></i>
            </div>
            <div>
              <h4 class="font-heading font-bold text-base text-white">Experienced Clinicians</h4>
              <p class="text-xs text-sand-300 mt-1">Licensed psychologists, LMFTs, and LCSWs with board credentials you can trust.</p>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-primary-600/30 text-primary-400 flex items-center justify-center shrink-0 text-lg">
              <i class="fas fa-shield-alt"></i>
            </div>
            <div>
              <h4 class="font-heading font-bold text-base text-white">Confidential & Safe</h4>
              <p class="text-xs text-sand-300 mt-1">Your privacy and comfort come first with full HIPAA-compliant encryption.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Section 5: "Insights for a Better You" (Matching Mockup Blog Cards) -->
  <section class="py-20 bg-white dark:bg-espresso-900 border-t border-sand-300/60 dark:border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div class="space-y-2">
          <span class="text-xs uppercase font-bold tracking-widest text-primary-600 dark:text-primary-400">
            Latest Articles
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl font-bold text-espresso-900 dark:text-white">
            Insights for a Better You
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-sand-400">
            Explore articles by our clinical team on emotional health, relationships, and mindfulness.
          </p>
        </div>
        <a href="blog.html" class="px-6 py-2.5 rounded-full bg-sand-200 dark:bg-espresso-800 text-espresso-900 dark:text-sand-200 font-bold text-xs hover:bg-primary-600 hover:text-white transition-colors">
          View All Articles
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Blog 1: 5 Ways to Manage Stress and Anxiety -->
        <article class="card-lift group rounded-3xl bg-sand-100 dark:bg-espresso-800 border border-sand-200 dark:border-white/10 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="h-48 overflow-hidden">
              <img src="${IMAGES.blog_somatic}" alt="5 Ways to Manage Stress and Anxiety" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6 space-y-2">
              <span class="text-[11px] text-primary-600 font-semibold">Stress & Anxiety &bull; May 2, 2026</span>
              <h3 class="font-heading text-lg font-bold text-espresso-900 dark:text-white group-hover:text-primary-600 transition-colors">
                <a href="blog-details.html">5 Ways to Manage Stress and Anxiety in Everyday Life</a>
              </h3>
              <p class="text-xs text-slate-600 dark:text-sand-300 line-clamp-2">
                Learn somatic grounding and cognitive reframing techniques to de-escalate tension quickly.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0">
            <a href="blog-details.html" class="text-xs font-bold text-primary-600 hover:underline">Read More &rarr;</a>
          </div>
        </article>

        <!-- Blog 2: Building Self-Compassion -->
        <article class="card-lift group rounded-3xl bg-sand-100 dark:bg-espresso-800 border border-sand-200 dark:border-white/10 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="h-48 overflow-hidden">
              <img src="${IMAGES.blog_perfectionism}" alt="Building Self Compassion" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6 space-y-2">
              <span class="text-[11px] text-primary-600 font-semibold">Self-Care &bull; April 18, 2026</span>
              <h3 class="font-heading text-lg font-bold text-espresso-900 dark:text-white group-hover:text-primary-600 transition-colors">
                <a href="blog-detail-adult-confidence.html">Building Self-Compassion: Silencing Your Inner Critic</a>
              </h3>
              <p class="text-xs text-slate-600 dark:text-sand-300 line-clamp-2">
                Why high achievers struggle with self-judgment, and practical steps to foster gentle resilience.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0">
            <a href="blog-detail-adult-confidence.html" class="text-xs font-bold text-primary-600 hover:underline">Read More &rarr;</a>
          </div>
        </article>

        <!-- Blog 3: Effective Communication Tips -->
        <article class="card-lift group rounded-3xl bg-sand-100 dark:bg-espresso-800 border border-sand-200 dark:border-white/10 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="h-48 overflow-hidden">
              <img src="${IMAGES.blog_nvc}" alt="Effective Communication Tips for Couples" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6 space-y-2">
              <span class="text-[11px] text-primary-600 font-semibold">Relationships &bull; April 5, 2026</span>
              <h3 class="font-heading text-lg font-bold text-espresso-900 dark:text-white group-hover:text-primary-600 transition-colors">
                <a href="blog-detail-dryland-rotator.html">Effective Communication Tips for Healthy Relationships</a>
              </h3>
              <p class="text-xs text-slate-600 dark:text-sand-300 line-clamp-2">
                How Non-Violent Communication turns arguments into opportunities for vulnerable connection.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0">
            <a href="blog-detail-dryland-rotator.html" class="text-xs font-bold text-primary-600 hover:underline">Read More &rarr;</a>
          </div>
        </article>

      </div>
    </div>
  </section>
</main>
`;

  return getHead('Find Balance in Your Life', 'Professional therapy and compassionate psychological support to help you heal, grow, and thrive at Calmind.')
    + getHeader('home')
    + content
    + getFooter();
}

fs.writeFileSync('index.html', buildIndex());
console.log('✓ index.html regenerated in Calmind theme.');

module.exports = { buildIndex };
