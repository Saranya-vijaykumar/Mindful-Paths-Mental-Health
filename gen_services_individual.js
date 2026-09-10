const fs = require('fs');
const { getHead, getHeader, getFooter, IMAGES, BRAND_NAME, PHONE } = require('./gen_layout');

console.log('Generating 6 dedicated individual therapy service pages...');

const SERVICES_DATA = [
  {
    slug: 'service-individual-therapy',
    alias: 'service-details',
    title: 'Individual Psychotherapy & Anxiety Management',
    shortTitle: 'Individual Psychotherapy',
    tagline: 'Evidence-based Cognitive Behavioral Therapy (CBT) and somatic pacing for anxiety, perfectionism, and burnout.',
    badge: 'Individual Care',
    image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=1200&q=80',
    duration: '50 Minutes',
    fee: '$175 / Session',
    format: 'In-Person (Manhattan Suite) or Encrypted Telehealth',
    insurance: 'Superbill Provided (Out-of-Network)',
    leadTherapist: {
      name: 'Dr. Sarah Jenkins, Psy.D.',
      role: 'Lead Clinical Psychologist & Anxiety Specialist',
      url: 'therapist-sarah-jenkins.html',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
      quote: '“CBT isn’t about forced positive thinking; it is about accurate, compassionate thinking and nervous system safety.”'
    },
    issues: [
      { title: 'Catastrophic Thinking & Worry Spirals', desc: 'Deconstruct repetitive "what-if" loops into objective, manageable facts and realistic problem-solving.' },
      { title: 'Physical Panic & Nervous System Spikes', desc: 'Master somatic vagal nerve resets to quiet chest tightness, shallow breathing, and sudden adrenaline surges.' },
      { title: 'Perfectionism & High-Functioning Burnout', desc: 'Unhook your core identity from relentless achievement, learning sustainable pacing and restful living.' },
      { title: 'Assertive Boundaries & Self-Advocacy', desc: 'Set kind, firm limits at work and with family without guilt, resentment, or anxiety.' }
    ],
    phases: [
      { step: 'Phase 01', title: 'Intake Assessment & Trigger Mapping', desc: 'We identify root stressors, evaluate panic and anxiety patterns, and establish immediate somatic grounding tools.' },
      { step: 'Phase 02', title: 'Cognitive Restructuring & Habit Audits', desc: 'Uncover subconscious cognitive distortions, test automatic thoughts, and create healthier response mechanisms.' },
      { step: 'Phase 03', title: 'Gradual Exposure & Nervous System Resilience', desc: 'Gently face avoidance behaviors in a controlled, supportive environment until the nervous system feels secure.' },
      { step: 'Phase 04', title: 'Long-Term Relapse Prevention', desc: 'Consolidate lifelong cognitive self-care rituals, stress contingency plans, and continuous personal growth.' }
    ],
    faqs: [
      { q: 'How is your individual psychotherapy different from standard talk therapy?', a: 'We combine cognitive restructuring with somatic nervous system regulation. Rather than just talking about anxiety, you learn real-time physiological tools to calm adrenaline spikes.' },
      { q: 'How many sessions are typically recommended?', a: 'Most clients notice meaningful symptom relief within 8 to 12 weekly sessions, with many choosing ongoing bi-weekly maintenance for personal growth.' },
      { q: 'Can I do sessions online?', a: 'Yes, all individual therapy sessions are fully available via our encrypted, HIPAA-compliant telehealth platform across the state.' }
    ],
    related: [
      { title: 'Trauma Recovery & EMDR', url: 'service-trauma-emdr.html' },
      { title: 'Mindfulness & Stress Rituals', url: 'service-mindfulness.html' }
    ]
  },
  {
    slug: 'service-couples-therapy',
    title: 'Couples & Marriage Counseling (Gottman Method)',
    shortTitle: 'Couples Counseling',
    tagline: 'Gottman-informed and Emotionally Focused Therapy (EFT) to rebuild intimate trust, de-escalate defensiveness, and restore warmth.',
    badge: 'Relationship Care',
    image: 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?auto=format&fit=crop&w=1200&q=80',
    duration: '75 Minutes',
    fee: '$225 / Session',
    format: 'In-Person Consultation Lounge or Dual Video Telehealth',
    insurance: 'Superbill Provided (Out-of-Network)',
    leadTherapist: {
      name: 'Dr. Marcus Vance, LMFT',
      role: 'Licensed Marriage & Family Therapist',
      url: 'therapist-marcus-vance.html',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
      quote: '“Conflict is not the end of intimacy; handled with safety, it is the doorway to profound mutual understanding.”'
    },
    issues: [
      { title: 'De-escalating the Four Horsemen', desc: 'Identify and replace criticism, contempt, defensiveness, and stonewalling with gentle, vulnerable dialogue.' },
      { title: 'Healing After Infidelity & Betrayal', desc: 'Navigate structured disclosure, genuine atonement, emotional safety re-establishment, and gradual trust rebuilding.' },
      { title: 'Reigniting Romantic & Sexual Intimacy', desc: 'Overcome emotional disconnect and mismatched desires by cultivating safe, playful, and affectionate vulnerability.' },
      { title: 'Parenting & Household Division Friction', desc: 'Align co-parenting values, clarify household responsibilities, and protect couple sanctuary time.' }
    ],
    phases: [
      { step: 'Phase 01', title: 'Comprehensive Gottman Assessment', desc: 'Joint history interview followed by individual intake sessions to map the relational landscape and emotional safety levels.' },
      { step: 'Phase 02', title: 'Conflict De-escalation Framework', desc: 'Learn real-time timeout protocols, physiological self-soothing, and repair attempts to halt toxic arguments.' },
      { step: 'Phase 03', title: 'Attachment & Vulnerability Dialogue', desc: 'Unpack underlying childhood wounds, emotional longings, and create empathetic attunement.' },
      { step: 'Phase 04', title: 'Shared Dreams & Lasting Rituals', desc: 'Construct shared family culture, intentional connection rituals, and resilient partnership goals.' }
    ],
    faqs: [
      { q: 'What if my partner is hesitant or reluctant to attend?', a: 'This is very common. We provide a calm, balanced, non-blaming space where neither partner is made the "problem." An introductory 15-minute consultation often puts hesitation at ease.' },
      { q: 'Are 75-minute sessions required?', a: 'We find 75-minute sessions provide the necessary pacing for both partners to speak, process, and regulate without feeling rushed through sensitive topics.' },
      { q: 'Can we attend if we live in different locations?', a: 'Yes. Our encrypted telehealth suite allows split-screen dual attendance from two separate computers or mobile devices.' }
    ],
    related: [
      { title: 'Individual Psychotherapy', url: 'service-individual-therapy.html' },
      { title: 'Teen & Adolescent Care', url: 'service-teen-counseling.html' }
    ]
  },
  {
    slug: 'service-trauma-emdr',
    title: 'Trauma Recovery & EMDR Therapy',
    shortTitle: 'Trauma & EMDR',
    tagline: 'Gentle, somatic reprocessing for unresolved trauma, chronic hyper-vigilance, and PTSD through certified EMDR protocols.',
    badge: 'Trauma Recovery',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80',
    duration: '60 Minutes',
    fee: '$195 / Session',
    format: 'In-Person Acoustic Suite or Encrypted Telehealth',
    insurance: 'Superbill Provided (Out-of-Network)',
    leadTherapist: {
      name: 'Elena Rostova, LCSW, CCTP',
      role: 'Certified Clinical Trauma Specialist & EMDR Clinician',
      url: 'therapist-elena-rostova.html',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      quote: '“Trauma is not what happened to you; it is what happens inside you in the absence of an empathetic witness. We hold that safe container.”'
    },
    issues: [
      { title: 'Single-Incident & Complex PTSD', desc: 'Process motor vehicle accidents, assaults, medical trauma, and chronic childhood relational neglect.' },
      { title: 'Chronic Hyper-Vigilance & Startle Reflex', desc: 'Soothe an over-activated sympathetic nervous system that perceives constant environmental danger.' },
      { title: 'Intrusive Flashbacks & Nightmares', desc: 'Desensitize vivid sensory triggers so memories lose their visceral charge and feel like the distant past.' },
      { title: 'Somatic Armoring & Dissociation', desc: 'Gently reconnect mind and body through somatic tracking, polyvagal grounding, and safe embodiment.' }
    ],
    phases: [
      { step: 'Phase 01', title: 'History Taking & Treatment Planning', desc: 'Thorough mapping of past targets while identifying existing psychological strengths and safe harbors.' },
      { step: 'Phase 02', title: 'Preparation & Somatic Stabilization', desc: 'Establishing the "Calm Safe Place" exercise, container techniques, and bilateral stimulation pacing.' },
      { step: 'Phase 03', title: 'Assessment & Desensitization', desc: 'Using bilateral eye movements or tactile pulsers to reprocess traumatic memory nodes without re-traumatization.' },
      { step: 'Phase 04', title: 'Installation of Positive Cognitions', desc: 'Embedding empowering beliefs ("I am safe now", "I have choices") and somatic body scans.' }
    ],
    faqs: [
      { q: 'Do I have to talk in detail about what happened?', a: 'No. One of the greatest benefits of EMDR is that you do not have to recount traumatic memories aloud in graphic detail for the brain to reprocess them successfully.' },
      { q: 'Is EMDR safe for remote telehealth?', a: 'Yes. We utilize secure, clinical-grade bilateral visual and auditory stimulation software specifically designed for remote trauma therapy.' },
      { q: 'Will I feel emotional or tired after a session?', a: 'Reprocessing can feel like an intensive emotional workout. We design sessions with ample grounding time at the end and recommend calm evenings afterward.' }
    ],
    related: [
      { title: 'Individual Psychotherapy', url: 'service-individual-therapy.html' },
      { title: 'Mindfulness & Stress Rituals', url: 'service-mindfulness.html' }
    ]
  },
  {
    slug: 'service-teen-counseling',
    title: 'Teen & Adolescent Counseling',
    shortTitle: 'Teen Counseling',
    tagline: 'Empowering, judgment-free psychological care for youth navigating academic pressure, identity, social anxiety, and emotional storms.',
    badge: 'Youth & Family',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    duration: '50 Minutes',
    fee: '$165 / Session',
    format: 'Youth Sanctuary Studio or Secure Video Telehealth',
    insurance: 'Superbill Provided (Out-of-Network)',
    leadTherapist: {
      name: 'Dr. David Kim, M.D.',
      role: 'Child & Adolescent Psychiatrist & Neurobiologist',
      url: 'therapist-david-kim.html',
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
      quote: '“Teens don’t need another adult telling them what to think; they need an empathetic space that helps them trust their own mind.”'
    },
    issues: [
      { title: 'Academic Perfectionism & Burnout', desc: 'Overcome paralyzing school anxiety, procrastination cycles, and excessive pressure around college admissions.' },
      { title: 'Social Anxiety & Digital Overwhelm', desc: 'Navigate peer dynamics, social exclusion, cyberbullying, and digital comparison with healthy boundaries.' },
      { title: 'Identity, Self-Esteem & Expression', desc: 'A safe, affirmative space to explore neurodiversity, gender identity, values, and emerging autonomy.' },
      { title: 'Emotional Regulation & Mood Swings', desc: 'Learn Dialectical Behavior Therapy (DBT) distress tolerance skills to navigate intense emotional surges without acting out.' }
    ],
    phases: [
      { step: 'Phase 01', title: 'Collaborative Youth & Parent Intake', desc: 'Building trust directly with the teen while understanding parental concerns in a transparent, confidential structure.' },
      { step: 'Phase 02', title: 'Emotional Vocabulary & Coping Toolkit', desc: 'Equipping the adolescent with practical distress tolerance, somatic calming, and communication tools.' },
      { step: 'Phase 03', title: 'Identity & Interpersonal Skill Pacing', desc: 'Navigating peer relationships, boundary setting, and self-compassion practices.' },
      { step: 'Phase 04', title: 'Family Bridge Sessions', desc: 'Structured joint check-ins that foster lasting parent-teen empathy and mutual understanding.' }
    ],
    faqs: [
      { q: 'How is confidentiality handled with minors?', a: 'Teens need a truly confidential space to be honest. While parents are kept informed of general progress and safety concerns, session content remains confidential between the therapist and the teen.' },
      { q: 'What ages do you work with?', a: 'Our adolescent clinic specializes in youth ages 12 through 19, as well as college students in early adulthood.' },
      { q: 'Are parents involved in every session?', a: 'Sessions are primarily 1-on-1 with the teen. Brief parent check-ins are conducted periodically with the teen’s consent and knowledge.' }
    ],
    related: [
      { title: 'Couples & Family Care', url: 'service-couples-therapy.html' },
      { title: 'Individual Psychotherapy', url: 'service-individual-therapy.html' }
    ]
  },
  {
    slug: 'service-telehealth',
    title: 'Confidential Telehealth Video Sanctuary',
    shortTitle: 'Telehealth Video Care',
    tagline: 'Access premier board-certified psychological care from the comfort and privacy of your home through our encrypted HIPAA portal.',
    badge: 'Virtual Sanctuary',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    duration: '50 Minutes',
    fee: '$175 / Session',
    format: '100% Encrypted Video (Statewide Licensure)',
    insurance: 'Superbill Provided (Out-of-Network)',
    leadTherapist: {
      name: 'Dr. Maya Patel, Ph.D.',
      role: 'Neuropsychologist & Mindfulness Researcher',
      url: 'therapist-maya-patel.html',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      quote: '“Healing doesn’t require a commute. Creating your sanctuary in your own living space integrates clinical growth into real life.”'
    },
    issues: [
      { title: 'Zero Commute & Schedule Flexibility', desc: 'Fit weekly therapy seamlessly between work meetings, family care, or college classes without travel stress.' },
      { title: 'Comfort of Your Familiar Sanctuary', desc: 'Engage in vulnerable therapy with your favorite tea, blanket, or therapy pet beside you for natural nervous system safety.' },
      { title: 'Access Specialist Care Anywhere in State', desc: 'Connect with elite clinicians regardless of geographic location, rural living, or mobility constraints.' },
      { title: 'Seamless Client Portal Integration', desc: 'Review clinician session notes, track daily mood logs, and message your counselor securely in one dashboard.' }
    ],
    phases: [
      { step: 'Phase 01', title: '1-Click Encrypted Onboarding', desc: 'Receive your secure confidential link with no software downloads needed; test video/audio in 30 seconds.' },
      { step: 'Phase 02', title: 'Remote Clinical Sanctuary Setup', desc: 'Establish privacy protocols, ambient lighting, and somatic regulation rituals in your home space.' },
      { step: 'Phase 03', title: 'Interactive Virtual Modalities', desc: 'Utilize digital whiteboard reflections, screen-shared worksheets, and remote bilateral EMDR tools.' },
      { step: 'Phase 04', title: 'Ongoing Sanctuary Dashboard', desc: 'Sync your post-session therapist takeaways directly to your personal client sanctuary portal.' }
    ],
    faqs: [
      { q: 'Is telehealth as effective as in-person therapy?', a: 'Dozens of clinical research studies show that video therapy delivers identical clinical outcomes to in-person sessions for anxiety, depression, and trauma.' },
      { q: 'What technology do I need?', a: 'Any smartphone, tablet, laptop, or desktop with a camera, microphone, and stable internet connection. No downloads or installations required.' },
      { q: 'How is my medical privacy protected?', a: 'We utilize banking-grade 256-bit AES encryption compliant with all federal HIPAA and HITECH standards. Video calls are never recorded.' }
    ],
    related: [
      { title: 'Individual Psychotherapy', url: 'service-individual-therapy.html' },
      { title: 'Mindfulness & Stress Rituals', url: 'service-mindfulness.html' }
    ]
  },
  {
    slug: 'service-mindfulness',
    title: 'Mindfulness & Somatic Stress Rituals',
    shortTitle: 'Mindfulness & Somatics',
    tagline: 'Polyvagal vagus nerve stabilization, 4-4-4 box breathing rituals, and intimate 8-week group anxiety cohorts.',
    badge: 'Holistic & Group Care',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
    duration: '60 Min (1-on-1) / 90 Min (Group)',
    fee: '$150 / 1-on-1 · $75 / Cohort',
    format: 'Mindful Sanctuary Studio & Group Lounge',
    insurance: 'Superbill Provided (Out-of-Network)',
    leadTherapist: {
      name: 'James Thornton, LPC',
      role: 'Somatic Psychotherapist & Breathwork Practitioner',
      url: 'therapist-james-thornton.html',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
      quote: '“You cannot think your way out of a nervous system state. You have to breathe, soften, and ground your way back to safety.”'
    },
    issues: [
      { title: 'Polyvagal Vagus Nerve Toning', desc: 'Stimulate the ventral vagal brake through vocal toning, gentle neck releases, and cold exposure techniques.' },
      { title: '4-4-4 Box Breathing Mastery', desc: 'Learn exact physiological oxygen-carbon dioxide ratios to manually interrupt panic surges within 90 seconds.' },
      { title: 'Interoceptive Body Scanning', desc: 'Recognize early physical somatic cues of stress (jaw clenching, stomach knots) before they escalate to anxiety.' },
      { title: 'Shared Human Empathy & Shame Release', desc: 'In 8-week cohorts (6-8 members), discover that you are never alone in what your body feels.' }
    ],
    phases: [
      { step: 'Phase 01', title: 'Nervous System Profiling', desc: 'Map your personal autonomic nervous system zones (safe/social, fight/flight, freeze/shutdown).' },
      { step: 'Phase 02', title: 'Somatic Resourcing & Anchors', desc: 'Develop physical touchstones, grounding postures, and breathwork practices that immediately lower heart rate.' },
      { step: 'Phase 03', title: 'Group Cohort Attunement', desc: 'Share reflections in a warm, confidential circle; cultivate relational safety and collective grounding.' },
      { step: 'Phase 04', title: 'Daily Living Mindful Rituals', desc: 'Integrate micro-grounding rituals into your morning routine, workday transitions, and bedtime wind-down.' }
    ],
    faqs: [
      { q: 'Do I have to participate in a group, or can I do 1-on-1?', a: 'Both options are fully supported. Many clients start with 1-on-1 somatic grounding and choose to join an 8-week cohort when they feel ready.' },
      { q: 'Is this meditation or therapy?', a: 'This is clinical somatic psychotherapy grounded in neurobiology, polyvagal theory, and mindfulness. It is active, structured, and clinically guided.' },
      { q: 'Do you offer an interactive breathwork tool?', a: 'Yes! You can experience our interactive 4-4-4 box breathing tool on our website at any time.' }
    ],
    related: [
      { title: 'Individual Psychotherapy', url: 'service-individual-therapy.html' },
      { title: 'Trauma Recovery & EMDR', url: 'service-trauma-emdr.html' }
    ]
  }
];

function buildServicePage(data) {
  const head = getHead(
    data.title + ' | ' + BRAND_NAME,
    data.tagline
  );
  const header = getHeader('services');

  const content = `
  <!-- Breadcrumbs -->
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#EBF1F4] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#D7B7A5] transition-colors">Home</a>
      <span>/</span>
      <a href="services.html" class="hover:text-[#D7B7A5] transition-colors">Services</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">${data.shortTitle}</span>
    </div>
  </div>

  <!-- Main Service Detail Section -->
  <section class="py-16 bg-white dark:bg-[#17232b] transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left: Service Deep Dive -->
        <div class="lg:col-span-8 space-y-8">
          
          <!-- Hero Banner Image -->
          <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#1e2d37] group">
            <img src="${data.image}" alt="${data.title}" class="w-full h-80 sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700">
          </div>

          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D7B7A5]/10 text-[#D7B7A5] text-xs font-bold uppercase tracking-wider">
              <i class="fas fa-heart-pulse"></i> ${data.badge}
            </div>
            <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-tight">
              ${data.title}
            </h1>
            <p class="text-base sm:text-lg text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">
              ${data.tagline}
            </p>
          </div>

          <!-- What We Address Grid -->
          <div class="space-y-4 pt-4">
            <h2 class="font-heading text-2xl sm:text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">
              What We Address in Sessions
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              ${data.issues.map(iss => `
                <div class="p-5 rounded-2xl bg-[#F8F6F1]/70 dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 space-y-2 hover:shadow-md transition-shadow">
                  <strong class="text-sm font-bold text-[#294657] dark:text-[#F8F6F1] flex items-center gap-2">
                    <i class="fas fa-check-circle text-[#8FAFC0]"></i> ${iss.title}
                  </strong>
                  <p class="text-[#27343B] dark:text-[#7d8d96] leading-relaxed">${iss.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 4-Phase Clinical Pathway -->
          <div class="space-y-6 pt-6">
            <div class="space-y-2">
              <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Structured Healing Roadmap</span>
              <h2 class="font-heading text-2xl sm:text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">
                The 4-Phase Therapeutic Progression
              </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              ${data.phases.map(ph => `
                <div class="p-6 rounded-2xl bg-white dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 space-y-2.5 shadow-sm">
                  <span class="text-xs font-bold text-[#D7B7A5] uppercase tracking-wider">${ph.step}</span>
                  <h3 class="font-heading text-base font-bold text-[#294657] dark:text-[#F8F6F1]">${ph.title}</h3>
                  <p class="text-xs text-[#27343B] dark:text-[#7d8d96] leading-relaxed">${ph.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- FAQ Accordion -->
          <div class="space-y-4 pt-6">
            <h2 class="font-heading text-2xl sm:text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">
              Frequently Asked Questions
            </h2>
            <div class="space-y-3">
              ${data.faqs.map((faq, idx) => `
                <details class="group p-5 rounded-2xl bg-[#F8F6F1]/50 dark:bg-[#1e2d37]/40 border border-[#EBF1F4] dark:border-white/10 [&_summary::-webkit-details-marker]:hidden" ${idx === 0 ? 'open' : ''}>
                  <summary class="flex items-center justify-between cursor-pointer font-bold text-xs sm:text-sm text-[#294657] dark:text-[#F8F6F1]">
                    <span>${faq.q}</span>
                    <i class="fas fa-chevron-down text-xs text-[#D7B7A5] group-open:rotate-180 transition-transform duration-200"></i>
                  </summary>
                  <p class="mt-3 text-xs text-[#27343B] dark:text-[#7d8d96] leading-relaxed border-t border-[#EBF1F4] dark:border-white/10 pt-3">
                    ${faq.a}
                  </p>
                </details>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- Right Sidebar -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- Service Snapshot Card -->
          <div class="p-7 rounded-3xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 space-y-5 shadow-sm sticky top-28">
            <div class="space-y-1">
              <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Intake Details</span>
              <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">Session Snapshot</h3>
            </div>

            <ul class="text-xs space-y-3.5 text-[#27343B] dark:text-[#7d8d96] divide-y divide-[#EBF1F4] dark:divide-white/10">
              <li class="flex justify-between items-center pt-2">
                <span>Session Duration:</span>
                <strong class="text-[#294657] dark:text-[#F8F6F1] font-bold">${data.duration}</strong>
              </li>
              <li class="flex justify-between items-center pt-3">
                <span>Investment / Fee:</span>
                <strong class="text-[#294657] dark:text-[#F8F6F1] font-bold">${data.fee}</strong>
              </li>
              <li class="flex justify-between items-center pt-3">
                <span>Format:</span>
                <strong class="text-[#294657] dark:text-[#F8F6F1] font-bold text-right">${data.format.split('(')[0]}</strong>
              </li>
              <li class="flex justify-between items-center pt-3">
                <span>Insurance / Superbill:</span>
                <strong class="text-[#8FAFC0] font-bold">Yes (Out-of-Network)</strong>
              </li>
            </ul>

            <button type="button" class="open-appointment-btn w-full py-4 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2" data-service="${data.shortTitle}">
              <i class="far fa-calendar-check"></i>
              <span>Book Intake for This Service</span>
            </button>

            <!-- Matched Specialist Card -->
            <div class="pt-5 border-t border-[#EBF1F4] dark:border-white/10 space-y-3">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#294657] dark:text-[#8FAFC0]">Lead Clinician</span>
              <a href="${data.leadTherapist.url}" class="flex items-center gap-3.5 p-3 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 hover:border-[#D7B7A5]/40 hover:shadow-sm transition-all group">
                <img src="${data.leadTherapist.img}" alt="${data.leadTherapist.name}" class="w-14 h-14 rounded-2xl object-cover object-center border-2 border-[#D7B7A5]/20 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                <div>
                  <h4 class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1] group-hover:text-[#D7B7A5] transition-colors flex items-center gap-1">
                    ${data.leadTherapist.name} <i class="fas fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </h4>
                  <div class="text-[11px] text-[#D7B7A5] font-medium">${data.leadTherapist.role.split('&')[0]}</div>
                </div>
              </a>
              <p class="text-[11px] text-[#27343B]/80 dark:text-[#7d8d96]/80 italic leading-relaxed">
                ${data.leadTherapist.quote}
              </p>
            </div>

            <!-- Related Services Links -->
            <div class="pt-4 border-t border-[#EBF1F4] dark:border-white/10 space-y-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#294657] dark:text-[#8FAFC0]">Related Pathways</span>
              <div class="flex flex-col gap-1.5 text-xs">
                ${data.related.map(rel => `
                  <a href="${rel.url}" class="text-[#27343B] dark:text-[#7d8d96] hover:text-[#D7B7A5] font-semibold flex items-center justify-between py-1 transition-colors">
                    <span>${rel.title}</span>
                    <i class="fas fa-angle-right text-[10px] text-[#D7B7A5]"></i>
                  </a>
                `).join('')}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
  `;

  return head + header + content + getFooter();
}

// Generate all individual service pages
SERVICES_DATA.forEach(svc => {
  const html = buildServicePage(svc);
  const targetFile = svc.slug + '.html';
  fs.writeFileSync(targetFile, html);
  console.log('✓ Generated', targetFile);

  if (svc.alias) {
    fs.writeFileSync(svc.alias + '.html', html);
    console.log('✓ Updated alias', svc.alias + '.html');
  }
});

console.log('All individual therapy service pages generated successfully!');
