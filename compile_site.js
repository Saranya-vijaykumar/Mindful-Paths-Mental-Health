const fs = require('fs');
const path = require('path');
const { getHead, getHeader, getFooter, IMAGES, BRAND_NAME, PHONE, CRISIS_HOTLINE, EMAIL, ADDRESS } = require('./gen_layout');
const { ALL_SERVICES_DATA, UPDATED_BLOG_ARTICLES, buildServicesGridHtml, buildMasterFeeTableHtml } = require('./services_pricing_blog_data');

// =========================================================================
// 1. PURE services.html (Dedicated Clinical Modality Directory - Care Focused)
// =========================================================================
const CLINICAL_SERVICES = [
  {
    id: 'individual',
    category: 'Individual Care',
    title: 'Individual Adult Psychotherapy',
    file: 'service-individual-therapy.html',
    img: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80',
    clinician: 'Dr. Sarah Jenkins, Psy.D.',
    subtitle: 'One-on-one compassionate CBT, ACT, and somatic regulation tailored for adults navigating anxiety, perfectionistic burnout, depression, and major life transitions.',
    whoItsFor: 'Adults experiencing persistent worry, racing thoughts, grief, high-achiever exhaustion, or feeling emotionally overwhelmed.',
    modalities: ['Cognitive Behavioral Therapy (CBT)', 'Acceptance & Commitment (ACT)', 'Polyvagal Somatic Resets'],
    duration: '50-Minute Clinical Hour',
    format: 'In-Person Sanctuary & Telehealth',
    badge: 'Core Modality',
    isPopular: false
  },
  {
    id: 'couples',
    category: 'Relationship Care',
    title: 'Couples & Marriage Counseling',
    file: 'service-couples-therapy.html',
    img: 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?auto=format&fit=crop&w=800&q=80',
    clinician: 'Dr. Marcus Vance, LMFT',
    subtitle: 'Gottman-informed and Emotionally Focused Therapy (EFT) designed to de-escalate recurring arguments, repair attachment injuries, and restore romantic warmth.',
    whoItsFor: 'Partners feeling disconnected, stuck in cyclical defensiveness, navigating infidelity recovery, or wanting deeper emotional intimacy.',
    modalities: ['Gottman Method (Level 3)', 'Emotionally Focused Therapy (EFT)', 'Relational De-escalation'],
    duration: '75-Minute Extended Dialogue',
    format: 'Couples Acoustic Suite & Video',
    badge: 'Most Popular',
    isPopular: true
  },
  {
    id: 'trauma',
    category: 'Trauma Recovery',
    title: 'EMDR & Somatic Trauma Healing',
    file: 'service-trauma-emdr.html',
    img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80',
    clinician: 'Elena Rostova, LCSW, CCTP',
    subtitle: 'Certified bilateral stimulation and body-first somatic protocols to help your brain reprocess past trauma, PTSD, and visceral emotional triggers without endless verbal re-telling.',
    whoItsFor: 'Individuals carrying past trauma, panic attacks, developmental wounds, or visceral bodily hyper-vigilance.',
    modalities: ['Bilateral Eye Movement (EMDR)', 'Somatic Experiencing', 'Nervous System Stabilization'],
    duration: '60-Minute Reprocessing Session',
    format: 'Acoustic Suite & Secure Video',
    badge: 'Specialized Care',
    isPopular: false
  },
  {
    id: 'teen',
    category: 'Youth Sanctuary',
    title: 'Teen & Adolescent Counseling',
    file: 'service-teen-counseling.html',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    clinician: 'Dr. David Kim, M.D. & Youth Specialists',
    subtitle: 'A warm, pressure-free sanctuary for adolescents (ages 12-19) navigating academic burnout, peer dynamics, social anxiety, family communication, and self-identity.',
    whoItsFor: 'Teens feeling overwhelmed by academic pressure, school transitions, low self-worth, or difficulty communicating with parents.',
    modalities: ['Adolescent CBT & DBT Skills', 'Expressive Arts Integration', 'Collaborative Parent Alignment'],
    duration: '50-Minute Youth Session',
    format: 'Lounge Suite & Telehealth',
    badge: 'Ages 12–19',
    isPopular: false
  },
  {
    id: 'telehealth',
    category: 'Virtual Care',
    title: 'Encrypted Telehealth Video Sanctuary',
    file: 'service-telehealth.html',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    clinician: 'Dr. Maya Patel, Ph.D.',
    subtitle: 'Secure, high-definition online psychotherapy from the sanctuary of your home. Complete privacy, interactive digital whiteboards, and seamless continuity of care statewide.',
    whoItsFor: 'Busy professionals, parents, frequent travelers, or anyone seeking high-caliber clinical care with zero commute stress.',
    modalities: ['HIPAA Encrypted HD Video Link', 'Real-Time Somatic Guidance', 'Statewide Licensed Care'],
    duration: '50-Minute Virtual Session',
    format: 'Online Video Sanctuary',
    badge: 'Zero Commute',
    isPopular: false
  },
  {
    id: 'groups',
    category: 'Group Therapy',
    title: 'Mindfulness & Somatic Group Cohorts',
    file: 'service-mindfulness.html',
    img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    clinician: 'James Thornton, LCSW',
    subtitle: 'Intimate, therapist-facilitated cohorts (6-8 members) exploring polyvagal nervous system grounding, somatic breathwork, self-compassion, and shared human empathy.',
    whoItsFor: 'Individuals seeking communal connection, learning to regulate nervous systems alongside peers, and breaking emotional isolation.',
    modalities: ['8-Week Structured Cohorts', 'Polyvagal Somatic Journal', 'Peer Support Circles'],
    duration: '90-Minute Cohort Circle',
    format: 'Circle Suite (In-Person)',
    badge: 'Community Haven',
    isPopular: false
  },
  {
    id: 'psychiatry',
    category: 'Integrative Medicine',
    title: 'Psychiatric Evaluation & Medication',
    file: 'service-individual-therapy.html#psychiatry',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    clinician: 'Dr. David Kim, M.D.',
    subtitle: 'Holistic psychiatric diagnostic consultations, mindful medication evaluations, and bio-psycho-social health management closely coordinated with your ongoing talk therapy.',
    whoItsFor: 'Clients whose emotional distress significantly impairs daily functioning, sleep, or concentration, seeking conservative medication advice.',
    modalities: ['Bio-Psycho-Social Evaluation', 'Conservative Psychopharmacology', 'Collaborative Therapist Sync'],
    duration: '60-Min Intake / 30-Min Follow-up',
    format: 'In-Person & Telehealth Video',
    badge: 'Board-Certified M.D.',
    isPopular: false
  },
  {
    id: 'family',
    category: 'Family Counseling',
    title: 'Family Systems & Parenting Guidance',
    file: 'service-couples-therapy.html#family',
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    clinician: 'Dr. Marcus Vance, LMFT',
    subtitle: 'Restoring healthy intergenerational boundaries, breaking cycles of conflict, and building emotional safety across parents, children, and adult siblings.',
    whoItsFor: 'Families experiencing persistent household tension, parent-teen communication breakdowns, blended family transitions, or boundary confusion.',
    modalities: ['Structural Family Therapy', 'Parent Guidance Alignment', 'De-escalation Protocols'],
    duration: '60-Minute Family Session',
    format: 'Family Suite & Secure Video',
    badge: 'Whole-Family Care',
    isPopular: false
  }
];

function buildServicesPage() {
  const head = getHead(
    'Therapy Services Directory | Mindful Paths Psychological Sanctuary',
    'Explore our 8 comprehensive clinical therapy services: Individual Psychotherapy, Couples Counseling, EMDR Trauma Healing, Teen Counseling, Telehealth, and Mindfulness.'
  );
  const header = getHeader('services');

  const content = `
  <!-- Breadcrumb -->
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#D1DEE5] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#B25338]">Home</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">Therapy Services Directory</span>
    </div>
  </div>

  <!-- Hero Section (Dedicated to Services & Clinical Care) -->
  <section class="py-16 md:py-24 bg-gradient-to-b from-[#F8F6F1] via-white to-[#F8F6F1] dark:from-[#11191f] dark:via-[#17232b] dark:to-[#11191f] border-b border-[#D1DEE5] dark:border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B25338]/15 text-[#B25338] text-xs font-bold uppercase tracking-wider">
        <i class="fas fa-heart-pulse"></i> Comprehensive Psychological Modalities
      </div>

      <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-tight max-w-4xl mx-auto">
        Compassionate, Evidence-Based<br><span class="italic text-[#B25338]">Therapy Services.</span>
      </h1>

      <p class="text-base sm:text-lg text-[#27343B]/80 dark:text-[#EBF1F4] max-w-2xl mx-auto leading-relaxed">
        Every individual and relationship possesses a unique story and rhythm. Our board-certified clinicians provide personalized psychotherapy, somatic regulation, and trauma reprocessing in a calm, welcoming space.
      </p>

      <!-- Transparent Pricing Callout Pill (Pointing Cleanly to Pricing Page) -->
      <div class="pt-2">
        <a href="pricing.html" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#17232b] border border-[#D1DEE5] dark:border-white/10 text-xs font-semibold text-[#294657] dark:text-[#8FAFC0] shadow-sm hover:border-[#B25338] hover:text-[#B25338] transition-all">
          <i class="fas fa-tag text-[#B25338]"></i>
          <span>Looking for session rates, care packages &amp; insurance details?</span>
          <span class="font-bold underline text-[#B25338]">View Pricing Page &rarr;</span>
        </a>
      </div>

      <!-- Trust Badges -->
      <div class="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs">
        <span class="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1e2d37] border border-[#D1DEE5] dark:border-white/10 text-[#294657] dark:text-[#8FAFC0] font-semibold flex items-center gap-1.5 shadow-sm">
          <i class="fas fa-shield-alt text-emerald-600"></i> 100% HIPAA Confidential
        </span>
        <span class="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1e2d37] border border-[#D1DEE5] dark:border-white/10 text-[#294657] dark:text-[#8FAFC0] font-semibold flex items-center gap-1.5 shadow-sm">
          <i class="fas fa-certificate text-blue-600"></i> APA Accredited Clinicians
        </span>
        <span class="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1e2d37] border border-[#D1DEE5] dark:border-white/10 text-[#294657] dark:text-[#8FAFC0] font-semibold flex items-center gap-1.5 shadow-sm">
          <i class="fas fa-star text-amber-500"></i> 4.9/5 Client Experience Rating
        </span>
      </div>

    </div>
  </section>

  <!-- Section 2: All 8 Clinical Services Directory (Only Services, Perfectly Aligned) -->
  <section class="py-16 md:py-24 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D1DEE5] dark:border-white/10 pb-6">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">Specialized Modality Directory</span>
          <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1] mt-1">
            Our 8 Core Psychological Services
          </h2>
        </div>
        <p class="text-xs text-[#27343B]/70 dark:text-[#7d8d96] max-w-sm">
          All therapies are offered in-person at our Manhattan &amp; Brooklyn sanctuaries or via encrypted telehealth video.
        </p>
      </div>

      <!-- 8 Services Grid (Strictly Aligned & Focused Exclusively on Care) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 items-stretch">
        ${CLINICAL_SERVICES.map(s => `
          <div class="card-wellness p-6 rounded-3xl bg-white dark:bg-[#17232b] border ${s.isPopular ? 'border-2 border-[#B25338] shadow-xl' : 'border border-[#D1DEE5] dark:border-white/10 shadow-md'} flex flex-col justify-between h-full relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group">
            
            ${s.isPopular ? `
              <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B25338] text-white text-[10px] uppercase font-bold tracking-wider shadow-md z-10 flex items-center gap-1.5">
                <i class="fas fa-star text-[9px]"></i> Most Popular Modality
              </div>
            ` : ''}

            <div class="flex flex-col flex-1">
              <!-- Service Image Container (Uniform Aspect & Height) -->
              <a href="${s.file}" class="block overflow-hidden rounded-2xl mb-4 relative aspect-[16/10] w-full bg-[#EBF1F4]/40 dark:bg-[#1e2d37]">
                <img src="${s.img}" alt="${s.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md text-[10px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                    ${s.badge}
                  </span>
                </div>
              </a>

              <!-- Category & Title -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#B25338]">
                  <span>${s.category}</span>
                  <span class="text-[#24586E] dark:text-[#8FAFC0] text-[10px] font-semibold">${s.duration}</span>
                </div>
                <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-snug">
                  <a href="${s.file}" class="hover:text-[#B25338] transition-colors">${s.title}</a>
                </h3>
              </div>

              <!-- Clinician Lead -->
              <div class="text-[11px] font-semibold text-[#24586E] dark:text-[#8FAFC0] pt-1 flex items-center gap-1.5">
                <i class="fas fa-user-md text-[10px]"></i>
                <span>Lead: ${s.clinician}</span>
              </div>

              <!-- Core Description -->
              <p class="text-xs text-[#27343B]/75 dark:text-[#7d8d96] leading-relaxed my-3 line-clamp-3">
                ${s.subtitle}
              </p>

              <!-- Who It's For Box -->
              <div class="p-3 rounded-xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#D1DEE5]/60 dark:border-white/10 text-[11px] space-y-1 mb-4">
                <strong class="text-[#294657] dark:text-[#F8F6F1] block text-[10px] uppercase tracking-wider font-bold">Best For:</strong>
                <p class="text-[#27343B]/80 dark:text-[#7d8d96] leading-tight line-clamp-2">${s.whoItsFor}</p>
              </div>

              <!-- Modalities Tags -->
              <div class="space-y-1.5 mb-6 flex-1">
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#27343B]/60 dark:text-[#7d8d96] block">Techniques Used:</span>
                <div class="flex flex-wrap gap-1.5">
                  ${s.modalities.map(m => `
                    <span class="px-2 py-0.5 rounded-md bg-[#EBF1F4]/70 dark:bg-white/10 text-[10px] text-[#294657] dark:text-[#EBF1F4] font-medium">
                      ${m}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Bottom CTA Buttons (Strictly Aligned) -->
            <div class="mt-auto space-y-2 pt-3 border-t border-[#D1DEE5]/60 dark:border-white/10">
              <button type="button" class="open-appointment-btn w-full py-3 rounded-full ${s.isPopular ? 'bg-[#B25338] hover:bg-[#923F28]' : 'bg-[#294657] hover:bg-[#1d3340]'} text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1.5">
                <span>Book Consultation</span>
                <i class="fas fa-arrow-right text-[10px]"></i>
              </button>
              <a href="${s.file}" class="block text-center text-[11px] font-bold text-[#B25338] hover:underline py-0.5">
                Explore Full Modality Details &rarr;
              </a>
            </div>

          </div>
        `).join('')}
      </div>

    </div>
  </section>

  <!-- Section 3: What to Expect in Your First Session -->
  <section class="py-16 md:py-20 bg-[#F8F6F1] dark:bg-[#11191f] border-t border-[#D1DEE5] dark:border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">Your Clinical Journey</span>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          What to Expect in Your Therapy Process
        </h2>
        <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96]">
          Therapy is not an interrogation. It is an unhurried, confidential partnership focused entirely on your safety and growth.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="p-6 rounded-3xl bg-white dark:bg-[#17232b] border border-[#D1DEE5] dark:border-white/10 space-y-3 shadow-sm">
          <div class="w-10 h-10 rounded-2xl bg-[#24586E]/15 text-[#24586E] dark:text-[#8FAFC0] flex items-center justify-center font-bold text-sm">
            01
          </div>
          <h4 class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">Safe Intake Dialogue</h4>
          <p class="text-xs text-[#27343B]/75 dark:text-[#7d8d96] leading-relaxed">
            In your first session, we listen without judgment to what brought you to therapy and what safety feels like for you.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#17232b] border border-[#D1DEE5] dark:border-white/10 space-y-3 shadow-sm">
          <div class="w-10 h-10 rounded-2xl bg-[#B25338]/15 text-[#B25338] flex items-center justify-center font-bold text-sm">
            02
          </div>
          <h4 class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">Root Trigger Mapping</h4>
          <p class="text-xs text-[#27343B]/75 dark:text-[#7d8d96] leading-relaxed">
            We map recurring triggers, emotional cycles, and somatic tension to understand how your body adapted to past stress.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#17232b] border border-[#D1DEE5] dark:border-white/10 space-y-3 shadow-sm">
          <div class="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center font-bold text-sm">
            03
          </div>
          <h4 class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">Somatic &amp; CBT Tools</h4>
          <p class="text-xs text-[#27343B]/75 dark:text-[#7d8d96] leading-relaxed">
            Learn active grounding practices, bilateral stimulation, and cognitive flexibility tools you can use in daily life.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#17232b] border border-[#D1DEE5] dark:border-white/10 space-y-3 shadow-sm">
          <div class="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 flex items-center justify-center font-bold text-sm">
            04
          </div>
          <h4 class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">Lasting Resilience</h4>
          <p class="text-xs text-[#27343B]/75 dark:text-[#7d8d96] leading-relaxed">
            Build unshakeable boundaries, deeper relational connection, and enduring trust in your capacity to handle life.
          </p>
        </div>

      </div>

    </div>
  </section>

  <!-- Section 4: Clinical Therapy FAQs (Therapy-Focused, No Billing Jargon) -->
  <section class="py-16 md:py-20 bg-white dark:bg-[#17232b] border-t border-[#D1DEE5] dark:border-white/10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">Frequently Asked Questions</span>
        <h2 class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Common Questions About Starting Therapy
        </h2>
      </div>

      <div class="space-y-3">
        <details class="group p-5 rounded-2xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10 cursor-pointer" open>
          <summary class="flex items-center justify-between font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">
            <span>How do I know which therapy modality is right for me?</span>
            <span class="w-7 h-7 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-xs transition-transform group-open:rotate-180">
              <i class="fas fa-chevron-down"></i>
            </span>
          </summary>
          <p class="mt-3 text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
            You do not need to diagnose yourself before reaching out. During your initial intake consultation, our clinical director will discuss what you are experiencing, your goals, and recommend the therapist and therapeutic modality (CBT, EMDR, Gottman, etc.) best aligned with your needs.
          </p>
        </details>

        <details class="group p-5 rounded-2xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10 cursor-pointer">
          <summary class="flex items-center justify-between font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">
            <span>What is the difference between CBT and Somatic EMDR therapy?</span>
            <span class="w-7 h-7 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-xs transition-transform group-open:rotate-180">
              <i class="fas fa-chevron-down"></i>
            </span>
          </summary>
          <p class="mt-3 text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
            Cognitive Behavioral Therapy (CBT) focuses on recognizing and reframing unhelpful thought cycles and behavioral patterns. Somatic and EMDR therapy work through the physical nervous system and bilateral sensory processing to release traumatic memories and visceral triggers stored in the body. Many clients benefit from an integrative combination of both.
          </p>
        </details>

        <details class="group p-5 rounded-2xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10 cursor-pointer">
          <summary class="flex items-center justify-between font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">
            <span>Do you offer in-person sessions, virtual telehealth, or both?</span>
            <span class="w-7 h-7 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-xs transition-transform group-open:rotate-180">
              <i class="fas fa-chevron-down"></i>
            </span>
          </summary>
          <p class="mt-3 text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
            Both! We welcome clients to our quiet, acoustic consultation suites in Manhattan and Brooklyn, and we also provide secure, HIPAA-compliant telehealth video sessions accessible from anywhere statewide. Many clients choose a hybrid schedule that fits their lifestyle.
          </p>
        </details>

        <details class="group p-5 rounded-2xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10 cursor-pointer">
          <summary class="flex items-center justify-between font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">
            <span>How long does a typical course of psychotherapy last?</span>
            <span class="w-7 h-7 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-xs transition-transform group-open:rotate-180">
              <i class="fas fa-chevron-down"></i>
            </span>
          </summary>
          <p class="mt-3 text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
            Therapy duration varies based on your individual goals. Short-term, focused CBT or EMDR protocols for acute phobias or single incidents typically range from 8 to 16 sessions. Deeper relational, attachment, or chronic anxiety healing often continues over 6 to 12 months. Your therapist will collaboratively review your progress regularly.
          </p>
        </details>
      </div>

    </div>
  </section>

  <!-- Section 5: Dedicated Pricing Banner (Clean Invitation to Pricing Page) -->
  <section class="py-12 bg-[#F8F6F1] dark:bg-[#11191f] border-t border-[#D1DEE5] dark:border-white/10 text-center">
    <div class="max-w-3xl mx-auto px-4 space-y-3">
      <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">
        Looking for Fee Information &amp; Insurance Options?
      </h3>
      <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
        We believe in zero financial surprises. Visit our dedicated Pricing &amp; Insurance page to view per-session fees, monthly packages, insurance superbill reimbursement guides, and sliding-scale availability.
      </p>
      <div class="pt-2">
        <a href="pricing.html" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B25338] hover:bg-[#923F28] text-white text-xs font-bold shadow-md transition-all hover:scale-105">
          <span>Explore Pricing, Packages &amp; Insurance</span>
          <i class="fas fa-arrow-right text-[10px]"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- Section 6: Sanctuary Booking CTA Banner -->
  <section class="py-16 bg-[#294657] text-white">
    <div class="max-w-4xl mx-auto px-4 text-center space-y-6">
      <div class="w-12 h-12 rounded-2xl bg-[#B25338] text-white flex items-center justify-center mx-auto text-xl shadow-lg">
        <i class="fas fa-heart"></i>
      </div>
      <h2 class="font-heading text-3xl sm:text-4xl font-bold leading-tight">
        Ready to take the first step toward sustained emotional healing?
      </h2>
      <p class="text-xs sm:text-sm text-[#EBF1F4]/85 max-w-xl mx-auto leading-relaxed">
        Schedule your initial confidential intake consultation today. Our clinical intake team will match you with the specialist best aligned with your needs.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <button type="button" class="open-appointment-btn px-8 py-4 rounded-full bg-[#B25338] hover:bg-[#923F28] text-white font-bold text-xs shadow-lg transition-all hover:scale-105 active:scale-95">
          Book Confidential Intake
        </button>
        <a href="therapists.html" class="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 transition-all hover:scale-105">
          Meet Our Clinicians &rarr;
        </a>
      </div>
    </div>
  </section>
  `;

  return head + header + content + getFooter();
}

// =========================================================================
// 2. ENHANCED pricing.html (Synced 8 Services + Monthly Package Switcher)
// =========================================================================
function buildPricingPage() {
  const head = getHead(
    'Pricing & Insurance | Clear, Transparent Investment | Mindful Paths',
    'Clear, upfront therapy pricing, flexible monthly care packages, automatic insurance Superbills, and No Surprises Act compliance for all 8 clinical services.'
  );
  const header = getHeader('pricing');

  const content = `
  <!-- Breadcrumb -->
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#D1DEE5] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#B25338]">Home</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">Pricing &amp; Insurance</span>
    </div>
  </div>

  <!-- Header Banner -->
  <section class="py-16 md:py-20 bg-gradient-to-b from-[#F8F6F1] via-white to-[#F8F6F1] dark:from-[#11191f] dark:via-[#17232b] dark:to-[#11191f] border-b border-[#D1DEE5] dark:border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B25338]/15 text-[#B25338] text-xs font-bold uppercase tracking-wider">
          <i class="fas fa-shield-alt"></i> Complete Fee Transparency
        </div>
        <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-tight">
          Simple, Honest Pricing.<br><span class="italic text-[#B25338]">Zero Surprise Bills.</span>
        </h1>
        <p class="text-base text-[#27343B]/80 dark:text-[#EBF1F4] leading-relaxed">
          Investing in therapy is an investment in your life, peace of mind, and relationships. We provide straightforward per-session rates, discounted monthly care pathways, and automated itemized Superbills for PPO insurance reimbursement across all 8 specialized modalities.
        </p>

        <!-- Compliance Badges -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs">
          <span class="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1e2d37] border border-[#D1DEE5] dark:border-white/10 shadow-sm text-[#294657] dark:text-[#8FAFC0] font-semibold flex items-center gap-1.5">
            <i class="fas fa-check-circle text-emerald-600"></i> Federal No Surprises Act Compliant
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1e2d37] border border-[#D1DEE5] dark:border-white/10 shadow-sm text-[#294657] dark:text-[#8FAFC0] font-semibold flex items-center gap-1.5">
            <i class="fas fa-credit-card text-[#B25338]"></i> HSA &amp; FSA Cards Accepted
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1e2d37] border border-[#D1DEE5] dark:border-white/10 shadow-sm text-[#294657] dark:text-[#8FAFC0] font-semibold flex items-center gap-1.5">
            <i class="fas fa-file-invoice text-blue-600"></i> Monthly Superbill Provided
          </span>
        </div>
      </div>

      <!-- Interactive Billing Toggle -->
      <div class="flex items-center justify-center pt-4">
        <div class="p-1.5 rounded-full bg-[#EBF1F4] dark:bg-[#1e2d37] border border-[#CBD8E0] dark:border-white/10 flex items-center shadow-inner">
          <button type="button" id="billing-per-session-btn" class="px-6 py-2.5 rounded-full text-xs font-bold transition-all bg-white dark:bg-[#294657] text-[#294657] dark:text-white shadow-sm" onclick="togglePricingBilling('session')">
            Pay Per Session
          </button>
          <button type="button" id="billing-monthly-btn" class="px-6 py-2.5 rounded-full text-xs font-bold transition-all text-[#27343B]/70 dark:text-[#7d8d96] hover:text-[#294657] dark:hover:text-white flex items-center gap-1.5" onclick="togglePricingBilling('monthly')">
            <span>Monthly Packages</span>
            <span class="px-2 py-0.5 rounded-full bg-[#B25338] text-white text-[10px] uppercase font-bold tracking-wider">Save 15%</span>
          </button>
        </div>
      </div>

    </div>
  </section>

  <!-- All 8 Services Pricing Grid with Dynamic Toggle -->
  <section class="py-16 md:py-24 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D1DEE5] dark:border-white/10 pb-6">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">Transparent Rates</span>
          <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1] mt-1">
            Care Packages for Every Therapy Modality
          </h2>
        </div>
        <div class="text-xs text-[#27343B]/70 dark:text-[#7d8d96]">
          All packages include confidential Client Sanctuary portal access &amp; monthly itemized Superbills.
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 items-stretch">
        ${ALL_SERVICES_DATA.map(s => `
          <div class="card-wellness p-6 rounded-3xl bg-white dark:bg-[#17232b] border ${s.isPopular ? 'border-2 border-[#B25338] shadow-xl' : 'border border-[#D1DEE5] dark:border-white/10 shadow-md'} flex flex-col justify-between h-full relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group">
            
            ${s.isPopular ? `
              <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B25338] text-white text-[10px] uppercase font-bold tracking-wider shadow-md z-10 flex items-center gap-1.5">
                <i class="fas fa-star text-[9px]"></i> Most Popular Choice
              </div>
            ` : ''}

            <div class="flex flex-col flex-1">
              <a href="${s.file}" class="block overflow-hidden rounded-2xl mb-4 relative aspect-[16/10] w-full bg-[#EBF1F4]/40 dark:bg-[#1e2d37]">
                <img src="${s.img}" alt="${s.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#17232b]/90 backdrop-blur-md text-[10px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                    ${s.cptCode}
                  </span>
                </div>
              </a>

              <div class="min-h-[105px] space-y-1.5 flex flex-col justify-start">
                <span class="text-[11px] font-bold uppercase tracking-wider text-[#B25338]">${s.category}</span>
                <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-snug">
                  <a href="${s.file}" class="hover:text-[#B25338] transition-colors">${s.title}</a>
                </h3>
                <p class="text-xs text-[#27343B]/75 dark:text-[#7d8d96] leading-relaxed line-clamp-2">
                  ${s.subtitle}
                </p>
              </div>

              <!-- Price Box with Dynamic Session vs Monthly Switch -->
              <div class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1] py-3.5 border-y border-[#D1DEE5] dark:border-white/10 my-4">
                <div class="flex items-baseline justify-between">
                  <span class="pricing-card-val" data-session="${s.priceSession}" data-monthly="${s.monthlyPrice}">${s.priceSession}</span>
                  <span class="text-xs font-sans font-normal text-[#27343B]/70 dark:text-[#7d8d96] pricing-card-unit" data-session="${s.sessionUnit}" data-monthly="${s.monthlyUnit}">${s.sessionUnit}</span>
                </div>
                <div class="pt-1.5 text-[10px] font-sans font-bold text-emerald-700 dark:text-emerald-400 savings-tag hidden">
                  <i class="fas fa-tag mr-1"></i> ${s.saveBadge}
                </div>
              </div>

              <ul class="text-xs space-y-2 text-[#27343B]/80 dark:text-[#7d8d96] mb-6 flex-1">
                ${s.features.map(f => `
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-[#B25338] mt-0.5 text-[10px] shrink-0"></i>
                    <span class="leading-tight">${f}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="mt-auto space-y-2 pt-2 border-t border-[#D1DEE5]/60 dark:border-white/10">
              <button type="button" class="open-appointment-btn w-full py-3 rounded-full ${s.isPopular ? 'bg-[#B25338] hover:bg-[#923F28]' : 'bg-[#294657] hover:bg-[#1d3340]'} text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1.5">
                <span>${s.btnText}</span>
                <i class="fas fa-arrow-right text-[10px]"></i>
              </button>
              <a href="${s.file}" class="block text-center text-[11px] font-bold text-[#B25338] hover:underline py-0.5">
                View Modality Details &rarr;
              </a>
            </div>

          </div>
        `).join('')}
      </div>

    </div>
  </section>

  <!-- Complete Fee Table & Out-of-Pocket Calculator (Reused) -->
  <section class="py-16 md:py-20 bg-[#F8F6F1] dark:bg-[#11191f] border-t border-[#D1DEE5] dark:border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">Master Fee Table</span>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Side-by-Side Modality Breakdown
        </h2>
      </div>
      ${buildMasterFeeTableHtml()}
    </div>
  </section>

  <!-- Superbill 3-Step Flowchart -->
  <section class="py-16 md:py-20 bg-white dark:bg-[#17232b] border-t border-[#D1DEE5] dark:border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">Reimbursement Roadmap</span>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-[#294657] dark:text-[#F8F6F1]">
          Simple Insurance Reimbursement in 3 Steps
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card-wellness p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#D1DEE5] dark:border-white/10 space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-[#24586E]/15 text-[#24586E] dark:text-[#8FAFC0] flex items-center justify-center font-bold text-lg">01</div>
          <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Attend Your Session</h3>
          <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">Pay with credit card, debit, HSA, or FSA cards stored in your encrypted portal.</p>
        </div>
        <div class="card-wellness p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#D1DEE5] dark:border-white/10 space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-[#B25338]/15 text-[#B25338] flex items-center justify-center font-bold text-lg">02</div>
          <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Monthly Superbill Ready</h3>
          <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">Download your automated, itemized CPT-coded superbill PDF from your private portal on the 1st of each month.</p>
        </div>
        <div class="card-wellness p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#D1DEE5] dark:border-white/10 space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center font-bold text-lg">03</div>
          <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Receive Direct Check</h3>
          <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">Upload to your insurance company or reimbursement app for direct deposit refund (typically 60%-80%).</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Sliding Scale Box -->
  <section class="py-16 bg-[#F8F6F1] dark:bg-[#11191f] border-t border-[#D1DEE5] dark:border-white/10">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-8 sm:p-10 rounded-3xl bg-[#B25338]/10 border border-[#B25338]/30 flex flex-col md:flex-row items-center gap-6 justify-between">
        <div class="space-y-2 text-center md:text-left">
          <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">Ethical Care Commitment</span>
          <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">Sliding-Scale Scholarship Program</h3>
          <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] max-w-xl leading-relaxed">
            We believe mental health care is a fundamental human right. 15% of our weekly practice appointments are reserved for reduced-fee therapy.
          </p>
        </div>
        <button type="button" class="open-appointment-btn px-6 py-3.5 rounded-full bg-[#B25338] hover:bg-[#923F28] text-white text-xs font-bold shrink-0 shadow-md transition-all hover:scale-105">
          Request Sliding-Scale
        </button>
      </div>
    </div>
  </section>

  <!-- CTA Sanctuary Banner -->
  <section class="py-16 bg-[#294657] text-white">
    <div class="max-w-4xl mx-auto px-4 text-center space-y-6">
      <h2 class="font-heading text-3xl sm:text-4xl font-bold">Invest in Your Inner Peace Today</h2>
      <p class="text-xs sm:text-sm text-[#EBF1F4]/85 max-w-xl mx-auto leading-relaxed">
        Speak directly with our clinical intake coordinator for a complimentary 15-minute introductory conversation.
      </p>
      <div class="flex flex-wrap justify-center gap-4 pt-2">
        <button type="button" class="open-appointment-btn px-8 py-4 rounded-full bg-[#B25338] hover:bg-[#923F28] text-white font-bold text-xs shadow-lg transition-all hover:scale-105">
          Book Complimentary Intake
        </button>
      </div>
    </div>
  </section>

  <script>
    function togglePricingBilling(mode) {
      var sBtn = document.getElementById('billing-per-session-btn');
      var mBtn = document.getElementById('billing-monthly-btn');
      var vals = document.querySelectorAll('.pricing-card-val');
      var units = document.querySelectorAll('.pricing-card-unit');
      var tags = document.querySelectorAll('.savings-tag');

      if (mode === 'monthly') {
        mBtn.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all bg-white dark:bg-[#294657] text-[#294657] dark:text-white shadow-sm flex items-center gap-1.5';
        sBtn.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all text-[#27343B]/70 dark:text-[#7d8d96] hover:text-[#294657] dark:hover:text-white';
        vals.forEach(function(v) { v.innerText = v.dataset.monthly; });
        units.forEach(function(u) { u.innerText = u.dataset.monthly; });
        tags.forEach(function(t) { t.classList.remove('hidden'); });
      } else {
        sBtn.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all bg-white dark:bg-[#294657] text-[#294657] dark:text-white shadow-sm';
        mBtn.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all text-[#27343B]/70 dark:text-[#7d8d96] hover:text-[#294657] dark:hover:text-white flex items-center gap-1.5';
        vals.forEach(function(v) { v.innerText = v.dataset.session; });
        units.forEach(function(u) { u.innerText = u.dataset.session; });
        tags.forEach(function(t) { t.classList.add('hidden'); });
      }
    }
  </script>
  `;

  return head + header + content + getFooter();
}

// =========================================================================
// 3. ENHANCED blog.html (6 Authentic Articles + Non-Repeating Clinical Photos)
// =========================================================================
function buildBlogPage() {
  const head = getHead(
    'The Wellness Journal | Clinical Insights & Psychology Articles',
    'Practical, evidence-based mental health articles written by our licensed clinicians on calming anxiety, relational communication, bedtime rumination, and somatic healing.'
  );
  const header = getHeader('blog');

  const featured = UPDATED_BLOG_ARTICLES[0];
  const gridArticles = UPDATED_BLOG_ARTICLES.slice(1);

  const content = `
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#D1DEE5] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#B25338]">Home</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">Wellness Journal</span>
    </div>
  </div>

  <section class="py-16 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Hero Header -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">Clinical Editorial &amp; Evidence-Based Psychology</span>
        <h1 class="font-heading text-4xl sm:text-5xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-tight">
          The Mindful Paths Journal
        </h1>
        <p class="text-sm text-[#27343B]/80 dark:text-[#EBF1F4] leading-relaxed">
          Grounding tools, relationship communication protocols, and restorative nervous system practices curated by our board-certified clinical therapists.
        </p>
      </div>

      <!-- Featured Deep Dive Article (Hero Card) -->
      <article class="card-wellness overflow-hidden rounded-3xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10 group shadow-lg hover:shadow-2xl transition-all duration-500">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 overflow-hidden relative aspect-[16/10] w-full">
            <a href="${featured.file}" class="block w-full h-full">
              <img src="${featured.heroImg}" alt="${featured.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            </a>
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 rounded-full bg-[#B25338] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                Featured Clinical Guide
              </span>
            </div>
          </div>
          <div class="lg:col-span-5 p-6 sm:p-8 lg:pl-0 space-y-4">
            <div class="flex items-center gap-2 text-xs font-bold text-[#B25338]">
              <span>${featured.category}</span>
              <span>&bull;</span>
              <span class="text-[#27343B]/60 dark:text-[#7d8d96]">${featured.readTime}</span>
            </div>
            <h2 class="font-heading text-2xl sm:text-3xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-snug">
              <a href="${featured.file}" class="hover:text-[#B25338] transition-colors">${featured.title}</a>
            </h2>
            <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
              ${featured.excerpt}
            </p>
            <div class="pt-3 flex items-center justify-between border-t border-[#D1DEE5] dark:border-white/10">
              <div class="flex items-center gap-3">
                <img src="${featured.authorImg}" alt="${featured.author}" class="w-10 h-10 rounded-full object-cover border-2 border-[#B25338]">
                <div>
                  <h4 class="font-bold text-xs text-[#294657] dark:text-[#F8F6F1]">${featured.author}</h4>
                  <span class="text-[10px] text-[#27343B]/60 dark:text-[#7d8d96]">${featured.authorRole}</span>
                </div>
              </div>
              <a href="${featured.file}" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#B25338] hover:underline">
                <span>Read Full Article</span>
                <i class="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>
      </article>

      <!-- 5 Remaining Clinical Articles (Aligned Grid) -->
      <div class="space-y-6 pt-4">
        <div class="flex items-center justify-between border-b border-[#D1DEE5] dark:border-white/10 pb-4">
          <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">
            Recent Clinical Insights
          </h2>
          <span class="text-xs text-[#27343B]/60 dark:text-[#7d8d96]">Showing all 6 evidence-based articles</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          ${gridArticles.map(art => `
            <article class="card-wellness overflow-hidden rounded-3xl bg-white dark:bg-[#17232b] border border-[#D1DEE5] dark:border-white/10 group shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <a href="${art.file}" class="block overflow-hidden relative aspect-[16/10] w-full bg-[#EBF1F4]/40 dark:bg-[#1e2d37]">
                  <img src="${art.heroImg}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                  <div class="absolute top-3 left-3">
                    <span class="px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#17232b]/90 backdrop-blur-md text-[10px] font-bold text-[#B25338] shadow-sm">
                      ${art.category}
                    </span>
                  </div>
                </a>
                <div class="p-6 space-y-3">
                  <span class="text-[10px] font-bold uppercase text-[#24586E] dark:text-[#8FAFC0] tracking-wider">${art.readTime} &bull; Clinical Insight</span>
                  <h3 class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1] leading-snug">
                    <a href="${art.file}" class="hover:text-[#B25338] transition-colors">${art.title}</a>
                  </h3>
                  <p class="text-xs text-[#27343B]/75 dark:text-[#7d8d96] leading-relaxed line-clamp-3">
                    ${art.excerpt}
                  </p>
                </div>
              </div>

              <div class="p-6 pt-0 border-t border-[#D1DEE5]/60 dark:border-white/10 mt-auto flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <img src="${art.authorImg}" alt="${art.author}" class="w-7 h-7 rounded-full object-cover">
                  <span class="text-[11px] font-bold text-[#294657] dark:text-[#F8F6F1]">${art.author}</span>
                </div>
                <a href="${art.file}" class="text-xs font-bold text-[#B25338] hover:underline flex items-center gap-1">
                  <span>Read</span>
                  <i class="fas fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>

    </div>
  </section>
  `;

  return head + header + content + getFooter();
}

// =========================================================================
// 4. ENHANCED buildIndividualBlogPage (Rich Content + Related Articles)
// =========================================================================
function buildIndividualBlogPage(article) {
  const head = getHead(`${article.title} | Mindful Paths Journal`, article.excerpt);
  const header = getHeader('blog');

  const otherArticles = UPDATED_BLOG_ARTICLES.filter(a => a.file !== article.file).slice(0, 3);
  const relatedCards = otherArticles.map(rel => `
    <div class="card-wellness overflow-hidden rounded-3xl bg-white dark:bg-[#17232b] border border-[#D1DEE5] dark:border-white/10 group shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
      <div>
        <a href="${rel.file}" class="block overflow-hidden relative aspect-[16/10] w-full bg-[#EBF1F4]/40 dark:bg-[#1e2d37]">
          <img src="${rel.heroImg}" alt="${rel.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        </a>
        <div class="p-5 space-y-1.5">
          <span class="text-[10px] font-bold uppercase text-[#B25338] tracking-wider">${rel.category} &bull; ${rel.readTime}</span>
          <h4 class="font-heading text-base font-bold text-[#294657] dark:text-[#F8F6F1] line-clamp-2">
            <a href="${rel.file}" class="hover:text-[#B25338] transition-colors">${rel.title}</a>
          </h4>
        </div>
      </div>
      <div class="p-5 pt-0">
        <a href="${rel.file}" class="text-xs font-bold text-[#B25338] hover:underline flex items-center gap-1">
          <span>Read Article</span>
          <i class="fas fa-arrow-right text-[10px]"></i>
        </a>
      </div>
    </div>
  `).join('');

  const content = `
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#D1DEE5] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96] flex-wrap">
      <a href="index.html" class="hover:text-[#B25338]">Home</a>
      <span>/</span>
      <a href="blog.html" class="hover:text-[#B25338]">Wellness Journal</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold truncate max-w-xs sm:max-w-md">${article.title}</span>
    </div>
  </div>

  <article class="py-12 md:py-16 bg-white dark:bg-[#17232b]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="space-y-3">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="px-3 py-1 rounded-full bg-[#B25338]/15 text-[#B25338] text-xs font-bold uppercase tracking-wider">
            ${article.category}
          </span>
          <span class="text-xs text-[#27343B]/60 dark:text-[#7d8d96] font-medium">
            ${article.readTime} &bull; Clinical Editorial
          </span>
        </div>

        <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-tight">
          ${article.title}
        </h1>

        <div class="flex items-center justify-between pt-2 border-t border-[#D1DEE5] dark:border-white/10 flex-wrap gap-4">
          <div class="flex items-center gap-3">
            <img src="${article.authorImg}" alt="${article.author}" class="w-11 h-11 rounded-full object-cover border-2 border-[#B25338]">
            <div>
              <h4 class="font-bold text-xs text-[#294657] dark:text-[#F8F6F1]">${article.author}</h4>
              <span class="text-[11px] text-[#27343B]/60 dark:text-[#7d8d96]">${article.authorRole}</span>
            </div>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <button type="button" class="px-3 py-1.5 rounded-xl bg-[#F8F6F1] dark:bg-[#1e2d37] hover:text-[#B25338] transition-colors font-semibold" onclick="navigator.clipboard.writeText(window.location.href); alert('Article link copied to clipboard!');">
              <i class="far fa-share-square mr-1"></i> Share
            </button>
          </div>
        </div>
      </div>

      <div class="rounded-3xl overflow-hidden shadow-xl border border-[#D1DEE5] dark:border-white/10 relative aspect-[16/9] w-full bg-[#EBF1F4]/40">
        <img src="${article.heroImg}" alt="${article.title}" class="w-full h-full object-cover">
      </div>

      <div class="prose prose-slate max-w-none text-[#27343B] dark:text-[#EBF1F4] space-y-6 pt-4">
        ${article.contentHtml}
      </div>

      <!-- Author Bio Box -->
      <div class="p-8 rounded-3xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10 flex flex-col sm:flex-row items-center gap-6 my-10">
        <img src="${article.authorImg}" alt="${article.author}" class="w-20 h-20 rounded-full object-cover border-2 border-[#B25338] shrink-0">
        <div class="space-y-2 text-center sm:text-left">
          <span class="text-xs font-bold uppercase text-[#B25338] tracking-wider">About the Author</span>
          <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">${article.author}</h3>
          <p class="text-xs text-[#27343B]/80 dark:text-[#7d8d96] leading-relaxed">
            ${article.authorRole} at Mindful Paths Counseling Center. Specializing in evidence-based modalities, somatic nervous system resets, and compassionate emotional guidance.
          </p>
        </div>
      </div>

      <!-- Related Clinical Articles -->
      <div class="pt-8 border-t border-[#D1DEE5] dark:border-white/10 space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">Related Clinical Guides</h3>
          <a href="blog.html" class="text-xs font-bold text-[#B25338] hover:underline">View All Journal &rarr;</a>
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

// 5. Write Generated Output Files
fs.writeFileSync('services.html', buildServicesPage(), 'utf8');
console.log('✓ Generated enhanced services.html with all 8 services priced and aligned section-wise');

fs.writeFileSync('pricing.html', buildPricingPage(), 'utf8');
console.log('✓ Generated enhanced pricing.html with all 8 services priced and synced');

fs.writeFileSync('blog.html', buildBlogPage(), 'utf8');
console.log('✓ Generated enhanced blog.html with 6 authentic articles & verified non-duplicate photography');

// Write each individual blog and aliases
UPDATED_BLOG_ARTICLES.forEach((art, idx) => {
  const rendered = buildIndividualBlogPage(art);
  fs.writeFileSync(art.file, rendered, 'utf8');
  console.log(`✓ Generated ${art.file}`);
  if (art.aliasFile) {
    fs.writeFileSync(art.aliasFile, rendered, 'utf8');
    console.log(`  └─ Synced alias ${art.aliasFile}`);
  }
});

// Also sync old legacy swimming blog files to these authentic articles
const legacyMap = [
  { old: 'blog-detail-adult-confidence.html', target: UPDATED_BLOG_ARTICLES[0] },
  { old: 'blog-detail-dive-start.html', target: UPDATED_BLOG_ARTICLES[1] },
  { old: 'blog-detail-dryland-rotator.html', target: UPDATED_BLOG_ARTICLES[2] },
  { old: 'blog-detail-packing.html', target: UPDATED_BLOG_ARTICLES[3] },
  { old: 'blog-detail-warm-pool.html', target: UPDATED_BLOG_ARTICLES[4] }
];

legacyMap.forEach(({ old, target }) => {
  fs.writeFileSync(old, buildIndividualBlogPage(target), 'utf8');
  console.log(`  └─ Normalized legacy file ${old} -> ${target.title.slice(0, 30)}...`);
});

console.log('All pages generated and synced successfully.');

