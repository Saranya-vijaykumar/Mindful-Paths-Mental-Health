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

console.log('Generating Blog & Blog Details pages...');

// ==========================================
// 10. BLOG.HTML (Clinical Wellness Blog)
// ==========================================
function buildBlog() {
  const content = `
<main class="flex-grow">
  <!-- Header -->
  <section class="py-16 bg-gradient-to-b from-teal-50/50 to-transparent dark:from-teal-950/20 dark:to-transparent text-center space-y-4">
    <span class="text-xs uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
      Evidence-Based Mental Health Journal
    </span>
    <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
      Clinical Insights & Emotional Wellness
    </h1>
    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
      Explore articles authored by our licensed clinical psychologists, marriage therapists, and neuropsychologists on neurobiology, relational habits, and somatic resilience.
    </p>

    <!-- Search & Filter Bar -->
    <div class="pt-6 max-w-3xl mx-auto px-4 space-y-4">
      <div class="relative">
        <i class="fas fa-search absolute left-4 rtl:left-auto rtl:right-4 top-3.5 text-slate-400 text-sm"></i>
        <input type="text" id="blog-search-input" placeholder="Search by topic, symptom, or author (e.g. vagus, sleep, couples, burnout, Jenkins)..." class="w-full pl-11 rtl:pl-4 rtl:pr-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white shadow-sm focus:outline-none focus:border-teal-500">
      </div>

      <div class="flex flex-wrap items-center justify-center gap-2">
        <button type="button" data-blog-filter="all" class="px-3.5 py-1.5 rounded-xl bg-teal-600 text-white text-xs font-bold shadow-sm">All Articles</button>
        <button type="button" data-blog-filter="anxiety" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Anxiety & Somatics</button>
        <button type="button" data-blog-filter="relationships" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Relationships</button>
        <button type="button" data-blog-filter="sleep" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Sleep & Insomnia</button>
        <button type="button" data-blog-filter="burnout" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Burnout</button>
        <button type="button" data-blog-filter="perfectionism" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors">Perfectionism</button>
      </div>
    </div>
  </section>

  <!-- Featured Article Hero -->
  <section class="py-6 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="card-lift rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
        <div class="lg:col-span-6 h-64 lg:h-96 overflow-hidden">
          <img src="${IMAGES.blog_detail_hero}" alt="Ocean horizon illustrating emotional calm and neurological regulation" class="w-full h-full object-cover">
        </div>
        <div class="lg:col-span-6 p-8 lg:p-12 space-y-4">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-[10px] font-bold uppercase tracking-wider">
              Featured Clinical Guide
            </span>
            <span class="text-xs text-slate-500">7 Min Read</span>
          </div>
          <h2 class="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white hover:text-teal-600 transition-colors">
            <a href="blog-details.html">Calming the Overactive Nervous System: Evidence-Based Somatic & CBT Approaches</a>
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            How polyvagal theory, physiological sighs, and cognitive reframing interrupt fight-or-flight adrenal cascades. Written by Dr. Sarah Jenkins, Psy.D.
          </p>
          <div class="pt-2 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins" class="w-10 h-10 rounded-full object-cover">
              <div>
                <p class="text-xs font-bold text-slate-900 dark:text-white">Dr. Sarah Jenkins, Psy.D.</p>
                <p class="text-[10px] text-slate-500">Clinical Psychologist & Director</p>
              </div>
            </div>
            <a href="blog-details.html" class="px-4 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 transition-colors">
              Read Deep Dive &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6 Distinct Blog Cards Grid -->
  <section class="py-16 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Post 1 -->
        <article data-blog-category="anxiety,somatic,vagus" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-52 overflow-hidden">
              <img src="${IMAGES.blog_somatic}" alt="Vagus nerve somatic calm" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">Anxiety & Somatics</span>
            </div>
            <div class="p-6 space-y-3">
              <div class="flex items-center gap-2 text-[11px] text-slate-500">
                <span>7 min read</span> &bull; <span>Dr. Sarah Jenkins</span>
              </div>
              <h3 class="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                <a href="blog-details.html">The Neurobiology of Panic: Why Your Body Reacts Before Your Mind</a>
              </h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                Understand how the amygdala bypasses rational prefrontal cognition during panic attacks, and the exact somatic grounding steps to restore equilibrium.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0">
            <a href="blog-details.html" class="text-xs font-bold text-teal-600 hover:underline inline-flex items-center gap-1">Read Article &rarr;</a>
          </div>
        </article>

        <!-- Post 2 -->
        <article data-blog-category="relationships,couples,communication" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-52 overflow-hidden">
              <img src="${IMAGES.blog_nvc}" alt="Non-violent communication in intimate partnership" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">Relationships</span>
            </div>
            <div class="p-6 space-y-3">
              <div class="flex items-center gap-2 text-[11px] text-slate-500">
                <span>5 min read</span> &bull; <span>Dr. Marcus Vance</span>
              </div>
              <h3 class="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                <a href="blog-detail-dryland-rotator.html">Non-Violent Communication: Transform Conflict into Intimate Connection</a>
              </h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                The 4-step framework used by Gottman couples therapists to express vulnerable needs without triggering defensiveness or emotional stonewalling.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0">
            <a href="blog-detail-dryland-rotator.html" class="text-xs font-bold text-indigo-600 hover:underline inline-flex items-center gap-1">Read Article &rarr;</a>
          </div>
        </article>

        <!-- Post 3 -->
        <article data-blog-category="sleep,insomnia,cbt" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-52 overflow-hidden">
              <img src="${IMAGES.blog_sleep}" alt="CBT-I for insomnia and restful sleep" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">Sleep & Insomnia</span>
            </div>
            <div class="p-6 space-y-3">
              <div class="flex items-center gap-2 text-[11px] text-slate-500">
                <span>6 min read</span> &bull; <span>Elena Rostova</span>
              </div>
              <h3 class="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                <a href="blog-detail-warm-pool.html">Cognitive Restructuring for Insomnia: Resetting Your Night Mind</a>
              </h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                Why checking the clock at 3:00 AM activates hyperarousal, and the evidence-based CBT-I protocol to reset natural adenosine sleep pressure.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0">
            <a href="blog-detail-warm-pool.html" class="text-xs font-bold text-emerald-600 hover:underline inline-flex items-center gap-1">Read Article &rarr;</a>
          </div>
        </article>

        <!-- Post 4 -->
        <article data-blog-category="burnout,corporate,mindfulness" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-52 overflow-hidden">
              <img src="${IMAGES.blog_desk}" alt="Desk somatic rituals for corporate workday burnout" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">Burnout</span>
            </div>
            <div class="p-6 space-y-3">
              <div class="flex items-center gap-2 text-[11px] text-slate-500">
                <span>4 min read</span> &bull; <span>Dr. Maya Patel</span>
              </div>
              <h3 class="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                <a href="blog-detail-dive-start.html">5-Minute Somatic Desk Rituals for High-Stress Workdays</a>
              </h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                Micro-interventions you can practice discreetly during intense corporate meetings to lower heart rate variability and relieve shoulder tension.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0">
            <a href="blog-detail-dive-start.html" class="text-xs font-bold text-amber-600 hover:underline inline-flex items-center gap-1">Read Article &rarr;</a>
          </div>
        </article>

        <!-- Post 5 -->
        <article data-blog-category="anxiety,postpartum,transitions" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-52 overflow-hidden">
              <img src="${IMAGES.blog_postpartum}" alt="Postpartum emotional health and maternal transitions" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">Postpartum</span>
            </div>
            <div class="p-6 space-y-3">
              <div class="flex items-center gap-2 text-[11px] text-slate-500">
                <span>8 min read</span> &bull; <span>Elena Rostova</span>
              </div>
              <h3 class="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors">
                <a href="blog-detail-packing.html">What to Prepare for Your First Therapy Session: A Calming Guide</a>
              </h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                Demystifying clinical intake. What you need to bring, what questions to ask your clinician, and how to feel completely at ease.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0">
            <a href="blog-detail-packing.html" class="text-xs font-bold text-rose-600 hover:underline inline-flex items-center gap-1">Read Article &rarr;</a>
          </div>
        </article>

        <!-- Post 6 -->
        <article data-blog-category="perfectionism,imposter,mindset" class="card-lift group rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="relative h-52 overflow-hidden">
              <img src="${IMAGES.blog_perfectionism}" alt="Deconstructing perfectionism and the imposter phenomenon" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">Perfectionism</span>
            </div>
            <div class="p-6 space-y-3">
              <div class="flex items-center gap-2 text-[11px] text-slate-500">
                <span>6 min read</span> &bull; <span>James Thornton</span>
              </div>
              <h3 class="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                <a href="blog-detail-adult-confidence.html">Overcoming Perfectionism & The Imposter Phenomenon</a>
              </h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                Why high achievers fall trap to catastrophic self-criticism, and the therapeutic cognitive shifts that build authentic self-worth.
              </p>
            </div>
          </div>
          <div class="p-6 pt-0">
            <a href="blog-detail-adult-confidence.html" class="text-xs font-bold text-teal-600 hover:underline inline-flex items-center gap-1">Read Article &rarr;</a>
          </div>
        </article>

      </div>
    </div>
  </section>
</main>
`;

  return getHead('Clinical Wellness Journal & Psychological Insights', 'Evidence-based articles on anxiety, somatic therapy, couples communication, and burnout recovery.')
    + getHeader('blog')
    + content
    + getFooter();
}

// ==========================================
// 11. BLOG-DETAILS.HTML (Clinical Article Deep Dive)
// ==========================================
function buildBlogDetails() {
  const content = `
<main class="flex-grow">
  <!-- Article Header -->
  <article class="py-16 bg-white dark:bg-slate-950">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- Breadcrumb & Tags -->
      <div class="flex items-center justify-between text-xs">
        <a href="blog.html" class="text-teal-600 font-bold hover:underline">&larr; Back to Wellness Blog</a>
        <span class="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-bold border border-teal-200 dark:border-teal-800">
          Neurobiology & Anxiety
        </span>
      </div>

      <!-- Title & Subtitle -->
      <div class="space-y-4">
        <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
          Calming the Overactive Nervous System: Evidence-Based Somatic & CBT Approaches
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          How polyvagal theory, autonomic down-regulation, and targeted cognitive restructuring work together to disarm panic and restore chronic calm.
        </p>
      </div>

      <!-- Author Bio Bar -->
      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins" class="w-12 h-12 rounded-full object-cover">
          <div>
            <p class="text-xs font-bold text-slate-900 dark:text-white">Dr. Sarah Jenkins, Psy.D.</p>
            <p class="text-[10px] text-slate-500">Lead Clinical Psychologist &bull; September 2026 &bull; 7 Min Read</p>
          </div>
        </div>
        <button type="button" class="open-appointment-modal hidden sm:inline-flex px-3.5 py-1.5 rounded-xl bg-teal-600 text-white font-bold text-xs" data-therapist="sarah">
          Consult Dr. Jenkins
        </button>
      </div>

      <!-- Main Feature Image -->
      <div class="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
        <img src="${IMAGES.blog_detail_hero}" alt="Ocean horizon symbolizing nervous system tranquility" class="w-full h-80 sm:h-96 object-cover">
      </div>

      <!-- Article Content Body -->
      <div class="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-6">
        <p class="text-base font-medium text-slate-800 dark:text-slate-200">
          When an acute wave of panic strikes, the brain does not reason first. In less than 150 milliseconds, the amygdala fires a cascade of corticotropin-releasing hormones through the sympathetic trunk, dilating pupils, spiking heart rate, and shunting blood away from the digestive tract toward major muscle groups.
        </p>

        <h2 class="font-heading text-xl font-bold text-slate-900 dark:text-white pt-4">
          1. The Polyvagal Perspective: Safety Before Cognition
        </h2>
        <p>
          Formulated by Dr. Stephen Porges, Polyvagal Theory explains why telling an anxious client to simply <em>"calm down"</em> or <em>"think rationally"</em> rarely succeeds during hyper-arousal. The prefrontal cortex—the seat of logic and planning—has been temporarily deprived of metabolic bandwidth.
        </p>
        <p>
          To create receptive conditions for cognitive change, we must first signal visceral safety through the ventral vagal nerve complex. This is achieved via bottom-up somatic interventions:
        </p>

        <div class="p-6 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 space-y-2 my-4">
          <h4 class="font-heading font-bold text-xs uppercase tracking-wider text-teal-800 dark:text-teal-200">
            Clinical Exercise: The Dual Inhale Physiological Sigh
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Take two rapid inhales through your nose (one deep, followed immediately by a quick top-off puff), then a long, slow, unforced exhale through open lips. Performing this twice empties collapsed alveoli and instantly stimulates the vagus nerve to slow heart rate within 20 seconds.
          </p>
        </div>

        <h2 class="font-heading text-xl font-bold text-slate-900 dark:text-white pt-4">
          2. Cognitive Restructuring: Disarming the Catastrophe Loop
        </h2>
        <p>
          Once somatic safety is established, we apply Cognitive Behavioral Therapy (CBT) to test the catastrophic prediction. High anxiety consistently overestimates the probability of danger while underestimating one's ability to cope.
        </p>
        <blockquote class="p-4 border-l-4 border-teal-500 bg-slate-50 dark:bg-slate-900 italic text-slate-600 dark:text-slate-400">
          "Thoughts are not facts; they are cognitive hypotheses. You are the scientist observing the thought, not the prisoner compelled to obey it."
        </blockquote>

        <h2 class="font-heading text-xl font-bold text-slate-900 dark:text-white pt-4">
          3. Daily Preventive Blueprint
        </h2>
        <ul class="list-disc pl-5 space-y-2 text-xs text-slate-600 dark:text-slate-300">
          <li><strong>Morning Circadian Grounding:</strong> View natural outdoor light within 30 minutes of waking to anchor cortisol awakening response.</li>
          <li><strong>Midday Box Breathing:</strong> Practice 4 cycles of 4-4-4-4 box breathing before opening your email inbox.</li>
          <li><strong>Digital Sunset:</strong> Eliminate blue-spectrum mobile devices 60 minutes before bedtime to prevent melatonin inhibition.</li>
        </ul>
      </div>

      <!-- Author Bio Box -->
      <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6 mt-12">
        <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins" class="w-20 h-20 rounded-2xl object-cover shrink-0">
        <div class="space-y-1 text-center sm:text-left rtl:sm:text-right">
          <h3 class="font-heading font-bold text-base text-slate-900 dark:text-white">Written by Dr. Sarah Jenkins, Psy.D.</h3>
          <p class="text-xs text-teal-600 font-semibold">Lead Clinical Psychologist &bull; 14 Years Clinical Practice</p>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Dr. Jenkins leads our adult anxiety and trauma clinic in Manhattan. She is currently accepting new individual therapy and telehealth patients.
          </p>
        </div>
      </div>

      <!-- Back to Blog CTA -->
      <div class="pt-6 text-center">
        <a href="blog.html" class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-teal-600 text-white font-bold text-xs shadow hover:bg-teal-700 transition-colors">
          Browse More Clinical Articles <i class="fas fa-arrow-right"></i>
        </a>
      </div>

    </div>
  </article>
</main>
`;

  return getHead('Calming the Overactive Nervous System', 'Clinical guide on somatic nervous system regulation and CBT for panic and anxiety by Dr. Sarah Jenkins.')
    + getHeader('blog')
    + content
    + getFooter();
}

fs.writeFileSync('blog.html', buildBlog());
console.log('✓ blog.html generated successfully.');

fs.writeFileSync('blog-details.html', buildBlogDetails());
console.log('✓ blog-details.html generated successfully.');

module.exports = { buildBlog, buildBlogDetails };
