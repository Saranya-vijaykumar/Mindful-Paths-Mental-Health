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

console.log('Generating Therapist bio pages and individual Blog articles...');

// ==========================================
// Therapist Bio Page Builder
// ==========================================
function buildTherapistBio(t) {
  const content = `
<main class="flex-grow py-12 bg-white dark:bg-slate-950">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
    
    <div class="flex items-center justify-between text-xs">
      <a href="therapists.html" class="text-teal-600 font-bold hover:underline">&larr; Back to All Clinicians</a>
      <span class="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-bold border border-teal-200 dark:border-teal-800">
        Board-Certified Clinician
      </span>
    </div>

    <!-- Top Profile Header Card -->
    <div class="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div class="md:col-span-4 text-center">
        <img src="${t.image}" alt="${t.name}" class="w-40 h-40 rounded-3xl object-cover mx-auto border-4 border-teal-500 shadow-xl">
        <div class="mt-4 flex justify-center gap-2">
          <span class="px-2.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-[10px] font-bold">${t.rate}</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">Accepting Patients</span>
        </div>
      </div>

      <div class="md:col-span-8 space-y-3">
        <span class="text-xs uppercase font-bold tracking-wider text-teal-600">${t.title}</span>
        <h1 class="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">${t.name}</h1>
        <p class="text-xs text-slate-500 dark:text-slate-400">${t.degrees} &bull; ${t.years} Years Clinical Practice &bull; ${t.location}</p>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
          ${t.bio}
        </p>

        <div class="pt-3 flex flex-wrap gap-3">
          <button type="button" class="open-appointment-modal px-5 py-2.5 rounded-xl bg-teal-600 text-white font-bold text-xs shadow hover:bg-teal-700 transition-all" data-therapist="${t.slug}">
            <i class="fas fa-calendar-check mr-1.5"></i> Book with ${t.name.split(' ')[0]}
          </button>
          <a href="pricing.html" class="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100">
            View Insurance & Rates
          </a>
        </div>
      </div>
    </div>

    <!-- Clinical Focus & Methodology -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <h3 class="font-heading font-bold text-base text-slate-900 dark:text-white">Primary Specializations</h3>
        <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300">
          ${t.specialties.map(s => `<li><i class="fas fa-check-circle text-teal-500 mr-2"></i> ${s}</li>`).join('')}
        </ul>
      </div>

      <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <h3 class="font-heading font-bold text-base text-slate-900 dark:text-white">Education & Board Certifications</h3>
        <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300">
          ${t.education.map(e => `<li><i class="fas fa-graduation-cap text-indigo-500 mr-2"></i> ${e}</li>`).join('')}
        </ul>
      </div>
    </div>

  </div>
</main>
`;

  return getHead(`${t.name} — ${t.title}`, `Profile, credentials, and appointments for ${t.name} at SereneMind.`)
    + getHeader('therapists')
    + content
    + getFooter();
}

const THERAPISTS = [
  {
    slug: 'sarah',
    name: 'Dr. Sarah Jenkins, Psy.D.',
    title: 'Lead Clinical Psychologist',
    degrees: 'Psy.D., ABPP Certified',
    years: '14',
    location: 'Manhattan Sanctuary & Telehealth',
    rate: '$175 / session',
    image: IMAGES.therapist_sarah,
    bio: 'Dr. Sarah Jenkins specializes in Cognitive Behavioral Therapy (CBT), adult panic disorders, OCD, and executive anxiety. Trained at Harvard and Columbia, she brings deep warmth and empirical rigor to every session.',
    specialties: ['Adult Panic Disorder & Phobias', 'Obsessive-Compulsive Disorder (ERP)', 'Corporate & Executive Burnout', 'Cognitive Restructuring Protocols'],
    education: ['Doctor of Psychology (Psy.D.) - Harvard Medical Affiliated', 'Board Certified in Clinical Psychology (ABPP)', 'Licensed Psychologist NY #019284']
  },
  {
    slug: 'marcus',
    name: 'Dr. Marcus Vance, LMFT',
    title: 'Marriage & Family Therapist',
    degrees: 'LMFT, Gottman Level 3',
    years: '12',
    location: 'Brooklyn Heights & Telehealth',
    rate: '$190 / session',
    image: IMAGES.therapist_marcus,
    bio: 'Dr. Marcus Vance focuses on repairing broken communication loops, rebuilding trust after betrayal, and helping partners rediscover emotional intimacy through the Gottman Method and Emotionally Focused Therapy (EFT).',
    specialties: ['Gottman Method Couples Therapy', 'Infidelity & Betrayal Recovery', 'Premarital Preparation', 'High-Conflict De-escalation'],
    education: ['Master of Science in Marriage & Family Therapy (Northwestern)', 'Certified Gottman Level 3 Practitioner', 'Licensed MFT NY #028391']
  },
  {
    slug: 'elena',
    name: 'Elena Rostova, LCSW, CCTP',
    title: 'Trauma & EMDR Specialist',
    degrees: 'LCSW, CCTP-II',
    years: '10',
    location: 'Manhattan Sanctuary & Telehealth',
    rate: '$165 / session',
    image: IMAGES.therapist_elena,
    bio: 'Elena Rostova provides trauma-informed psychotherapy utilizing EMDR bilateral stimulation, somatic experiencing, and attachment repair to help clients discharge deep-seated nervous system trauma.',
    specialties: ['Eye Movement Desensitization & Reprocessing (EMDR)', 'Complex PTSD & Childhood Trauma', 'Grief & Traumatic Bereavement', 'Vagus Nerve Somatic Regulation'],
    education: ['Master of Social Work (NYU Silver School of Social Work)', 'EMDRIA Certified EMDR Practitioner', 'Licensed Clinical Social Worker NY #084920']
  },
  {
    slug: 'david',
    name: 'Dr. David Kim, M.D.',
    title: 'Child & Adolescent Psychiatrist',
    degrees: 'M.D., Board Certified Psychiatrist',
    years: '15',
    location: 'Manhattan Sanctuary',
    rate: '$240 / evaluation',
    image: IMAGES.therapist_david,
    bio: 'Dr. David Kim is a board-certified psychiatrist trained at Columbia University who provides comprehensive diagnostic evaluations, conservative psychopharmacology, and supportive guidance for children, teens, and young adults.',
    specialties: ['Adolescent Mood & Anxiety Disorders', 'ADHD Comprehensive Diagnostics', 'Conservative Medication Management', 'Collaborative Family Psychotherapy'],
    education: ['Doctor of Medicine (M.D.) - Columbia University VP&S', 'Residency & Fellowship - NY Presbyterian Hospital', 'Double Board Certified in General & Child Psychiatry']
  }
];

// Write therapist bio files and alias coach files
THERAPISTS.forEach(t => {
  const html = buildTherapistBio(t);
  if (t.slug === 'sarah') {
    fs.writeFileSync('therapist-sarah-jenkins.html', html);
    fs.writeFileSync('coach-sophia-novak.html', html);
  } else if (t.slug === 'marcus') {
    fs.writeFileSync('therapist-marcus-vance.html', html);
    fs.writeFileSync('coach-julian-alvarez.html', html);
  } else if (t.slug === 'elena') {
    fs.writeFileSync('therapist-elena-rostova.html', html);
    fs.writeFileSync('coach-elena-chen.html', html);
  } else if (t.slug === 'david') {
    fs.writeFileSync('therapist-david-kim.html', html);
    fs.writeFileSync('coach-dmitri-kozlov.html', html);
  }
});
console.log('✓ Individual Therapist bio pages and coach aliases generated.');

// ==========================================
// Individual Blog Articles Builder
// ==========================================
function buildBlogArticle(art) {
  const content = `
<main class="flex-grow py-16 bg-white dark:bg-slate-950">
  <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
    
    <div class="flex items-center justify-between text-xs">
      <a href="blog.html" class="text-teal-600 font-bold hover:underline">&larr; Back to Wellness Blog</a>
      <span class="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-bold border border-teal-200 dark:border-teal-800">
        ${art.category}
      </span>
    </div>

    <div class="space-y-3">
      <h1 class="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
        ${art.title}
      </h1>
      <p class="text-sm text-slate-500">By ${art.author} &bull; ${art.readTime} &bull; Evidence-Based Psychology</p>
    </div>

    <div class="rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
      <img src="${art.image}" alt="${art.title}" class="w-full h-80 object-cover">
    </div>

    <div class="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-6">
      ${art.body}
    </div>

    <div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
      <a href="blog.html" class="text-xs font-bold text-teal-600 hover:underline">&larr; Read All Articles</a>
      <button type="button" class="open-appointment-modal px-4 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs shadow hover:bg-teal-700 transition-colors">
        Book a Consultation
      </button>
    </div>

  </article>
</main>
`;

  return getHead(art.title, `Read ${art.title} on the SereneMind Clinical Wellness Journal.`)
    + getHeader('blog')
    + content
    + getFooter();
}

const ARTICLES = [
  {
    file: 'blog-detail-dive-start.html',
    title: '5-Minute Somatic Desk Rituals for Corporate Burnout',
    category: 'Workplace Somatics',
    author: 'Dr. Maya Patel, Ph.D.',
    readTime: '4 Min Read',
    image: IMAGES.blog_desk,
    body: `
      <p class="text-base font-semibold text-slate-800 dark:text-slate-200">
        Corporate burnout rarely begins in the mind; it begins in the physical autonomic nervous system when chronic deadlines suppress our body's natural rest-and-digest recovery cycles.
      </p>
      <h2 class="font-heading text-xl font-bold text-slate-900 dark:text-white">1. The 30-Second Eyeball Palming Reset</h2>
      <p>
        Extended screen exposure causes ocular muscle strain, which directly communicates alertness and danger to the sympathetic nervous system. Rub your palms together until warm, gently cup your eyes in complete darkness, and breathe out for 6 seconds.
      </p>
      <h2 class="font-heading text-xl font-bold text-slate-900 dark:text-white">2. Bilateral Shoulder Shrug Discharges</h2>
      <p>
        Inhale deeply while raising shoulders towards your ears for 4 seconds, then drop them abruptly with a loud audible exhale. Repeating this 3 times releases trapezius tension accumulated from high-stress meetings.
      </p>
    `
  },
  {
    file: 'blog-detail-dryland-rotator.html',
    title: 'Non-Violent Communication: How to Disarm Defensive Reactions',
    category: 'Couples & Relationships',
    author: 'Dr. Marcus Vance, LMFT',
    readTime: '5 Min Read',
    image: IMAGES.blog_nvc,
    body: `
      <p class="text-base font-semibold text-slate-800 dark:text-slate-200">
        In high-stakes romantic relationships, 90% of arguments escalate not because of the underlying topic, but because the conversation begins with an accusation rather than a vulnerable expression of need.
      </p>
      <h2 class="font-heading text-xl font-bold text-slate-900 dark:text-white">The 4-Step NVC Framework</h2>
      <p>
        <strong>1. Observation:</strong> State the concrete facts without judgmental adjectives. <em>"When the dishes remained in the sink yesterday..."</em> instead of <em>"You never clean up."</em>
      </p>
      <p>
        <strong>2. Feeling:</strong> Express your genuine internal state. <em>"...I felt overwhelmed and exhausted."</em>
      </p>
      <p>
        <strong>3. Need:</strong> Name your core psychological value. <em>"...because I need shared partnership in our home."</em>
      </p>
      <p>
        <strong>4. Request:</strong> Propose an actionable, positive request. <em>"Could we agree to empty the sink before 9:00 PM tonight?"</em>
      </p>
    `
  },
  {
    file: 'blog-detail-warm-pool.html',
    title: 'Cognitive Restructuring for Insomnia: Resetting Your Night Routine',
    category: 'Sleep & Somatics',
    author: 'Elena Rostova, LCSW',
    readTime: '6 Min Read',
    image: IMAGES.blog_sleep,
    body: `
      <p class="text-base font-semibold text-slate-800 dark:text-slate-200">
        Chronic insomnia is sustained by conditioned bedtime anxiety. The moment a client lays their head on the pillow, the fear of not sleeping paradoxically triggers adrenaline release.
      </p>
      <h2 class="font-heading text-xl font-bold text-slate-900 dark:text-white">The 20-Minute Rule</h2>
      <p>
        If you have been awake in bed for more than 20 minutes, get up. Remaining in bed tossing and turning teaches your brain to associate the mattress with frustration. Move to a dimly lit armchair, read a paper book, and return to bed only when physical drowsiness returns.
      </p>
    `
  },
  {
    file: 'blog-detail-packing.html',
    title: 'What to Prepare for Your First Therapy Session: A Calming Guide',
    category: 'Intake Preparation',
    author: 'Elena Rostova, LCSW',
    readTime: '5 Min Read',
    image: IMAGES.blog_postpartum,
    body: `
      <p class="text-base font-semibold text-slate-800 dark:text-slate-200">
        Stepping into counseling for the first time is a courageous decision. Many first-time clients worry: <em>"What if I don't know what to say?"</em> or <em>"Will the therapist judge me?"</em>
      </p>
      <h2 class="font-heading text-xl font-bold text-slate-900 dark:text-white">What You Actually Need</h2>
      <p>
        You do not need an organized speech. You only need to show up as you are. Your licensed therapist is trained to gently guide the conversation, ask open-ended questions, and create a warm, non-judgmental environment.
      </p>
    `
  },
  {
    file: 'blog-detail-adult-confidence.html',
    title: 'Overcoming Perfectionism & The Imposter Phenomenon',
    category: 'Perfectionism & Mindset',
    author: 'James Thornton, LPC',
    readTime: '6 Min Read',
    image: IMAGES.blog_perfectionism,
    body: `
      <p class="text-base font-semibold text-slate-800 dark:text-slate-200">
        Perfectionism is not the pursuit of excellence; it is a defensive shield against the fear of shame, exposure, and feeling inadequate.
      </p>
      <h2 class="font-heading text-xl font-bold text-slate-900 dark:text-white">Decoupling Self-Worth from Achievement</h2>
      <p>
        In Cognitive Behavioral Therapy, we help clients distinguish between healthy striving (which is intrinsically motivating and joyful) and neurotic perfectionism (which is fueled by dread and catastrophic self-talk).
      </p>
    `
  }
];

ARTICLES.forEach(art => {
  fs.writeFileSync(art.file, buildBlogArticle(art));
});
console.log('✓ Individual Blog detail articles generated.');

module.exports = { THERAPISTS, ARTICLES };
