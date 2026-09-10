const fs = require('fs');

// 1. Definition of 8 Comprehensive Services with Dedicated Pricing & Section Structure
const ALL_SERVICES_DATA = [
  {
    id: 'individual',
    category: 'Individual Care',
    title: 'Individual Psychotherapy',
    subtitle: 'Evidence-based CBT, ACT, and somatic regulation for anxiety, chronic stress, and life transitions.',
    file: 'service-individual-therapy.html',
    img: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80',
    clinician: 'Dr. Sarah Jenkins, Psy.D.',
    priceSession: '$175',
    sessionUnit: '/ 50-min session',
    monthlyPrice: '$620',
    monthlyUnit: '/ month (4 sessions)',
    saveBadge: 'Save $80/mo',
    cptCode: 'CPT 90834',
    badge: 'HSA/FSA Eligible',
    isPopular: false,
    features: [
      '50-minute dedicated one-on-one clinical hour',
      'Personalized somatic coping & cognitive restructuring',
      'Confidential Client Sanctuary portal & encrypted messaging',
      'Automated monthly itemized Superbill for PPO reimbursement'
    ],
    btnText: 'Book Individual Intake'
  },
  {
    id: 'couples',
    category: 'Relationship Care',
    title: 'Couples & Marriage Counseling',
    subtitle: 'Gottman-informed frameworks to bridge communication impasses and restore romantic warmth.',
    file: 'service-couples-therapy.html',
    img: 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?auto=format&fit=crop&w=800&q=80',
    clinician: 'Dr. Marcus Vance, LMFT',
    priceSession: '$225',
    sessionUnit: '/ 75-min session',
    monthlyPrice: '$790',
    monthlyUnit: '/ month (4 extended sessions)',
    saveBadge: 'Save $110/mo',
    cptCode: 'CPT 90847',
    badge: 'Joint Intake',
    isPopular: true,
    features: [
      '75-minute extended dialogue session for deeper relational safety',
      'Gottman method conflict de-escalation & intimacy rebuilding',
      'Structured between-session connection exercises',
      'Joint portal access with secure therapist messaging'
    ],
    btnText: 'Begin Couples Care'
  },
  {
    id: 'trauma',
    category: 'Trauma Recovery',
    title: 'EMDR & Somatic Trauma Healing',
    subtitle: 'Certified bilateral stimulation to reprocess trauma, PTSD, and somatic triggers safely.',
    file: 'service-trauma-emdr.html',
    img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80',
    clinician: 'Elena Rostova, LCSW, CCTP',
    priceSession: '$195',
    sessionUnit: '/ 60-min session',
    monthlyPrice: '$690',
    monthlyUnit: '/ month (4 sessions)',
    saveBadge: 'Save $90/mo',
    cptCode: 'CPT 90837',
    badge: 'Certified Clinician',
    isPopular: false,
    features: [
      '60-minute somatic bilateral eye movement reprocessing',
      'Safe nervous system stabilization before memory recall',
      'Polyvagal regulation toolkit & symptom tracking',
      'Itemized Superbills for trauma out-of-network benefits'
    ],
    btnText: 'Choose EMDR Care'
  },
  {
    id: 'teen',
    category: 'Youth Sanctuary',
    title: 'Teen & Adolescent Counseling',
    subtitle: 'Safe, empathetic space for adolescents (ages 12-19) navigating academic anxiety and peer pressure.',
    file: 'service-teen-counseling.html',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    clinician: 'Dr. David Kim, M.D. & Youth Specialists',
    priceSession: '$165',
    sessionUnit: '/ 50-min session',
    monthlyPrice: '$580',
    monthlyUnit: '/ month (4 sessions)',
    saveBadge: 'Save $80/mo',
    cptCode: 'CPT 90834',
    badge: 'Ages 12–19',
    isPopular: false,
    features: [
      '50-minute youth-centered counseling in cozy lounge suite',
      'Collaborative parent guidance & check-in alignments',
      'Specialized emotional regulation and resilience kits',
      'Flexible afternoon & after-school scheduling'
    ],
    btnText: 'Book Teen Intake'
  },
  {
    id: 'telehealth',
    category: 'Virtual Care',
    title: 'Encrypted Telehealth Video Sanctuary',
    subtitle: 'Secure, high-definition online therapy from your private home with zero commute stress.',
    file: 'service-telehealth.html',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    clinician: 'Dr. Maya Patel, Ph.D.',
    priceSession: '$175',
    sessionUnit: '/ 50-min session',
    monthlyPrice: '$620',
    monthlyUnit: '/ month (4 sessions)',
    saveBadge: 'Save $80/mo',
    cptCode: 'CPT 90834',
    badge: 'Zero Commute',
    isPopular: false,
    features: [
      'Encrypted HIPAA-compliant video link accessible on any device',
      'Integrated whiteboard & real-time mindfulness exercises',
      'Statewide licensed clinician coverage',
      'Automated Superbill delivery via Client Sanctuary'
    ],
    btnText: 'Start Virtual Therapy'
  },
  {
    id: 'groups',
    category: 'Group Therapy',
    title: 'Mindfulness & Somatic Group Cohorts',
    subtitle: 'Intimate cohorts (6-8 members) exploring polyvagal resets, somatic breathing, and shared empathy.',
    file: 'service-mindfulness.html',
    img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    clinician: 'James Thornton, LCSW',
    priceSession: '$75',
    sessionUnit: '/ 90-min cohort session',
    monthlyPrice: '$480',
    monthlyUnit: '/ full 8-week cohort',
    saveBadge: 'Save $120 total',
    cptCode: 'CPT 90853',
    badge: 'Community Haven',
    isPopular: false,
    features: [
      '90-minute therapist-facilitated group dialogue & grounding',
      'Curated 8-week somatic regulation journal & workbook',
      'Confidential peer connection in acoustic sanctuary suite',
      'Eligible for out-of-network group therapy reimbursement'
    ],
    btnText: 'Join Group Circle'
  },
  {
    id: 'psychiatry',
    category: 'Integrative Medicine',
    title: 'Psychiatric Evaluation & Medication',
    subtitle: 'Holistic psychiatric diagnostic evaluations and mindful psychopharmacological guidance.',
    file: 'service-individual-therapy.html#psychiatry',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    clinician: 'Dr. David Kim, M.D.',
    priceSession: '$275',
    sessionUnit: '/ 60-min initial evaluation',
    monthlyPrice: '$140',
    monthlyUnit: '/ 30-min follow-up check',
    saveBadge: 'Board-Certified M.D.',
    cptCode: 'CPT 99204 / 99213',
    badge: 'Board-Certified M.D.',
    isPopular: false,
    features: [
      'Comprehensive 60-minute psychiatric neurobiological intake',
      'Conservative, evidence-based medication protocols',
      'Close collaboration with your primary psychotherapist',
      'Direct electronic prescriptions sent to your local pharmacy'
    ],
    btnText: 'Schedule Medical Consult'
  },
  {
    id: 'family',
    category: 'Family Counseling',
    title: 'Family Systems & Parent Guidance',
    subtitle: 'Restoring healthy boundaries, intergenerational empathy, and communication within families.',
    file: 'service-couples-therapy.html#family',
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    clinician: 'Dr. Marcus Vance, LMFT',
    priceSession: '$210',
    sessionUnit: '/ 60-min session',
    monthlyPrice: '$740',
    monthlyUnit: '/ month (4 sessions)',
    saveBadge: 'Save $100/mo',
    cptCode: 'CPT 90846',
    badge: 'Whole-Family Care',
    isPopular: false,
    features: [
      '60-minute multi-member structural family therapy session',
      'De-escalating parent-teen conflict & emotional volatility',
      'Establishing mutual household agreements and boundaries',
      'Collaborative action plans with clinical follow-ups'
    ],
    btnText: 'Begin Family Care'
  }
];

// 2. Definition of 6 Authentic, Relatable Blog Articles with Verified Photos
const UPDATED_BLOG_ARTICLES = [
  {
    file: 'blog-details.html',
    slug: 'stop-overthinking-spiral',
    aliasFile: 'blog-overcoming-anxiety.html',
    title: 'How to Stop an Overthinking Spiral: 5 Clinically Proven Calming Practices',
    category: 'Anxiety & Grounding',
    readTime: '5 Min Read',
    author: 'Dr. Sarah Jenkins, Psy.D.',
    authorRole: 'Clinical Director & Anxiety Specialist',
    authorImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    heroImg: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Practical, nervous-system-first techniques you can use anytime your chest tightens, thoughts race, or worry begins spiraling out of control.',
    quote: 'You cannot talk an anxious nervous system into calm using logic alone; you must speak to the body first through the breath and physical senses.',
    contentHtml: `
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Have you ever noticed your shoulders rising toward your ears, your breathing turning shallow, and a tight knot forming in your chest during a tense moment or overwhelming day? These are not flaws in your willpower—they are autonomic survival responses triggered by an overstimulated nervous system.
      </p>
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        When anxiety spikes, your prefrontal cortex (the rational, problem-solving center of the brain) goes partially offline as your amygdala prepares for danger. This is why repeating logical affirmations often fails when you are in the throes of panic. To truly calm the mind, we must first signal physical safety to the body.
      </p>
      
      <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#B25338] space-y-2 my-6">
        <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">Core Clinical Takeaway</span>
        <blockquote class="font-heading text-xl italic text-[#294657] dark:text-[#F8F6F1]">
          &ldquo;You cannot talk an anxious nervous system into calm using logic alone; you must speak to the body first through the breath and physical senses.&rdquo;
        </blockquote>
      </div>

      <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] pt-4">5 Actionable Grounding Steps for Immediate Relief</h2>
      
      <div class="space-y-4 my-6">
        <div class="p-5 rounded-2xl bg-white dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10 space-y-2">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-[#24586E]/15 text-[#24586E] dark:text-[#8FAFC0] flex items-center justify-center font-bold text-sm">1</span>
            <h4 class="font-bold text-[#294657] dark:text-[#F8F6F1]">The Physiological Double Inhale</h4>
          </div>
          <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96] pl-11">Take two quick, consecutive inhales through your nose without exhaling in between, followed by one long, slow, vocalized exhale through your mouth. Doing this two to three times re-inflates collapsed air sacs (alveoli) and decelerates heart rate within 30 seconds.</p>
        </div>

        <div class="p-5 rounded-2xl bg-white dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10 space-y-2">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-[#B25338]/15 text-[#B25338] flex items-center justify-center font-bold text-sm">2</span>
            <h4 class="font-bold text-[#294657] dark:text-[#F8F6F1]">The 5-4-3-2-1 Sensory Grounding Reset</h4>
          </div>
          <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96] pl-11">Pause and identify 5 objects you can visually see, 4 tactile sensations you can feel against your skin, 3 distinct sounds in the room, 2 pleasant aromas, and 1 kind reassurance you can whisper to yourself.</p>
        </div>

        <div class="p-5 rounded-2xl bg-white dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10 space-y-2">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center font-bold text-sm">3</span>
            <h4 class="font-bold text-[#294657] dark:text-[#F8F6F1]">Firm Plantar Contact (Feet on Floor)</h4>
          </div>
          <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96] pl-11">Press the balls and heels of your feet deeply into the floor. Feel the solid firmness underneath you. Shifting weight gently activates proprioceptive feedback and halts spinning mental rumination.</p>
        </div>
      </div>

      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Healing from chronic anxiety is not about never experiencing nervous energy again; it is about trusting your ability to welcome the sensation without panic, knowing you have practical anchors to return to safety.
      </p>
    `
  },
  {
    file: 'blog-couples-communication.html',
    slug: 'break-recurring-fights',
    aliasFile: 'blog-relationship-communication.html',
    title: 'Why Couples Keep Having the Same Fight (And How to Finally Break the Cycle)',
    category: 'Couples & Marriage',
    readTime: '7 Min Read',
    author: 'Dr. Marcus Vance, LMFT',
    authorRole: 'Senior Relationship & Couples Clinician',
    authorImg: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    heroImg: 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Why arguments quickly turn into defensive spirals, and how small shifts in emotional vulnerability can transform marital tension into deep connection.',
    quote: 'Behind every sharp criticism, hostile comment, or cold defensive wall lies an unmet universal longing to be seen, appreciated, and loved.',
    contentHtml: `
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Couples frequently arrive in our clinic exhausted by cyclical fights that erupt over minuscule triggers—unwashed dishes in the sink, a delayed text message, or an ambiguous tone of voice. Yet when we examine the neurological dynamics, partners are rarely fighting about chores; they are desperate bids for emotional safety and reassurance.
      </p>
      
      <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#B25338] space-y-2 my-6">
        <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">Clinical Ground Rule</span>
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
    slug: 'sleep-therapist-bedtime-guide',
    aliasFile: 'blog-quieting-night-thoughts.html',
    title: "Can't Sleep Because Your Mind Won't Shut Down? A Therapist's Bedtime Guide",
    category: 'Sleep & Rest',
    readTime: '6 Min Read',
    author: 'James Thornton, LCSW',
    authorRole: 'Mindfulness & Sleep Health Specialist',
    authorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    heroImg: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Why your brain suddenly remembers everything you have ever worried about the moment your head hits the pillow—and how to wind down peacefully.',
    quote: 'Bedtime rumination occurs because your brain finally has silence; if you do not give it time to process thoughts during daylight, it will demand an audience at midnight.',
    contentHtml: `
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        It is an agonizingly familiar cycle: you spend your day completely exhausted, craving nothing more than your bed. Yet the instant your head touches the pillow and the bedroom lights go dark, your mind suddenly springs into overdrive—replaying conversations from five years ago, calculating tomorrow's schedule, and catastrophizing future deadlines.
      </p>
      
      <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#B25338] space-y-2 my-6">
        <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">The Circadian Psychology</span>
        <blockquote class="font-heading text-xl italic text-[#294657] dark:text-[#F8F6F1]">
          &ldquo;Bedtime rumination occurs because your brain finally experiences stillness; if you do not give it quiet moments to process during the day, it will demand an audience at midnight.&rdquo;
        </blockquote>
      </div>

      <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] pt-4">The 3-Step Nighttime Transition Protocol</h2>
      <div class="space-y-4 my-6 text-sm">
        <div class="p-4 rounded-xl bg-white dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10">
          <strong class="text-[#294657] dark:text-[#F8F6F1]">1. The 9:00 PM "Worry Dump":</strong> Keep a physical notebook away from your mattress. Spend 7 minutes writing down everything that is troubling you. Closing the notebook gives your brain symbolic permission to park those concerns until morning.
        </div>
        <div class="p-4 rounded-xl bg-white dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10">
          <strong class="text-[#294657] dark:text-[#F8F6F1]">2. The 20-Minute Reset Rule:</strong> If you are tossing and turning for more than 20 minutes, get out of bed. Your bed must remain psychologically paired with sleep, not frustration. Read under warm dim lighting until eyelids feel naturally heavy.
        </div>
        <div class="p-4 rounded-xl bg-white dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10">
          <strong class="text-[#294657] dark:text-[#F8F6F1]">3. Body-Scan Progressive Relaxation:</strong> Systematically release tension from your jaw, drop your shoulders away from your ears, unclench your fingers, and focus on the warm weight of your limbs sinking into the mattress.
        </div>
      </div>
    `
  },
  {
    file: 'blog-burnout-perfectionism.html',
    slug: 'unlearning-burnout',
    aliasFile: 'blog-healing-burnout.html',
    title: 'Recognizing Emotional Burnout Before You Break Down: Gentle Healing Strategies',
    category: 'Burnout & Career',
    readTime: '6 Min Read',
    author: 'Dr. Maya Patel, Ph.D.',
    authorRole: 'Workplace Psychology & Resilience Researcher',
    authorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    heroImg: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Why high achievers confuse exhaustion with productivity, and how honoring rest as a biological necessity restores vitality and joy.',
    quote: 'Rest is not a reward you earn after you finish everything on your to-do list; rest is a non-negotiable biological precondition for living well.',
    contentHtml: `
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        In modern culture, chronic stress is frequently glorified as a badge of honor. High performers, caregivers, and perfectionists pride themselves on powering through fatigue, ignoring subtle warning signals from their bodies until complete emotional depletion forces them to a standstill.
      </p>

      <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#B25338] space-y-2 my-6">
        <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">Biological Truth</span>
        <blockquote class="font-heading text-xl italic text-[#294657] dark:text-[#F8F6F1]">
          &ldquo;Rest is not a luxury or a prize you earn after finishing every task; rest is an essential biological precondition for nervous system recovery.&rdquo;
        </blockquote>
      </div>

      <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] pt-4">Subtle Warning Signs of Functional Burnout</h2>
      <ul class="list-disc list-inside space-y-2 text-sm text-[#27343B]/80 dark:text-[#7d8d96] pl-2 my-4">
        <li><strong>Emotional numbness:</strong> Feeling detached or indifferent toward projects and relationships you once loved.</li>
        <li><strong>Cynicism and irritability:</strong> Feeling easily exasperated by routine inquiries from colleagues or loved ones.</li>
        <li><strong>Physical symptoms:</strong> Chronic gastrointestinal knots, persistent tension headaches, and lingering fatigue despite 8 hours of sleep.</li>
      </ul>
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Reversing burnout requires compassionate boundary renegotiation. Saying &ldquo;no&rdquo; to non-essential obligations is not selfishness—it is how you preserve the emotional bandwidth to show up meaningfully for what matters.
      </p>
    `
  },
  {
    file: 'blog-emdr-trauma-recovery.html',
    slug: 'how-emdr-therapy-heals-trauma',
    aliasFile: 'blog-understanding-emdr.html',
    title: 'How EMDR Therapy Helps Your Brain Heal from Past Painful Experiences',
    category: 'Trauma & EMDR',
    readTime: '8 Min Read',
    author: 'Elena Rostova, LCSW, CCTP',
    authorRole: 'Certified EMDR Trauma Clinician',
    authorImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    heroImg: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'How bilateral sensory stimulation allows the brain to reprocess unprocessed traumatic memories without forcing you to relive painful details.',
    quote: 'Trauma is not what happened to you in the past; trauma is what continues to happen inside your nervous system in the absence of an empathetic witness.',
    contentHtml: `
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        When a person undergoes a profoundly frightening or painful event, the brain's standard memory processing can become overwhelmed. Rather than storing the event as a resolved past memory, the incident remains &ldquo;frozen&rdquo; in the nervous system—complete with the original sounds, visceral sensations, and intense panic.
      </p>
      
      <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#B25338] space-y-2 my-6">
        <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">Clinical Insight</span>
        <blockquote class="font-heading text-xl italic text-[#294657] dark:text-[#F8F6F1]">
          &ldquo;Trauma is not merely what happened to you in the past; trauma is what continues to echo inside your autonomic physiology in the present moment.&rdquo;
        </blockquote>
      </div>

      <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] pt-4">The Science of Bilateral Stimulation</h2>
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Eye Movement Desensitization and Reprocessing (EMDR) employs rhythmic bilateral sensory inputs—such as alternating side-to-side eye movements or gentle hand buzzers—while holding a memory in mind. This mimics the neurobiological processing of REM sleep, decreasing emotional charge and integrating the memory into standard autobiographical storage.
      </p>
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        After successful EMDR therapy, you do not forget the memory; rather, the memory loses its visceral hold. You can look back at the past and say: &ldquo;That happened to me, it was painful, but it is over now, and I am safe today.&rdquo;
      </p>
    `
  },
  {
    file: 'blog-mindfulness-self-compassion.html',
    slug: 'silencing-harsh-inner-critic',
    aliasFile: 'blog-mindfulness-guide.html',
    title: 'Silencing Your Harsh Inner Critic: The Gentle Art of Daily Self-Compassion',
    category: 'Self-Worth & Healing',
    readTime: '5 Min Read',
    author: 'Dr. David Kim, Psy.D.',
    authorRole: 'Mindfulness & Cognitive Psychology Specialist',
    authorImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    heroImg: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Why self-criticism consistently fails as a motivational strategy, and how speaking to yourself with genuine warmth rewires emotional resilience.',
    quote: 'Notice how you speak to yourself when you make a mistake; would you ever speak that way to a cherished friend or a small child in tears?',
    contentHtml: `
      <p class="text-base leading-relaxed text-[#27343B] dark:text-[#EBF1F4]">
        Many individuals believe that harboring a fierce, relentless inner critic is the only mechanism that keeps them ambitious, disciplined, and productive. They fear that if they soften their self-talk, they will slip into complacency.
      </p>
      
      <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#B25338] space-y-2 my-6">
        <span class="text-xs font-bold uppercase tracking-wider text-[#B25338]">The Compassion Shift</span>
        <blockquote class="font-heading text-xl italic text-[#294657] dark:text-[#F8F6F1]">
          &ldquo;Self-criticism activates the threat-defense system, flooding your bloodstream with cortisol; self-compassion activates the mammalian caregiving system, releasing oxytocin and genuine motivation.&rdquo;
        </blockquote>
      </div>

      <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1] pt-4">Dr. Kristin Neff's 3 Pillars of Self-Compassion</h2>
      <div class="space-y-4 my-6">
        <div class="p-5 rounded-2xl bg-white dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10 space-y-1.5">
          <h4 class="font-bold text-[#294657] dark:text-[#F8F6F1]">1. Self-Kindness over Harsh Self-Judgment</h4>
          <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96]">Offering yourself gentleness and understanding when suffering, failing, or feeling inadequate, rather than ignoring pain or scolding yourself.</p>
        </div>
        <div class="p-5 rounded-2xl bg-white dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10 space-y-1.5">
          <h4 class="font-bold text-[#294657] dark:text-[#F8F6F1]">2. Common Humanity over Isolation</h4>
          <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96]">Recognizing that suffering, imperfection, and difficulty are part of the shared human experience—not something that happens to you alone.</p>
        </div>
        <div class="p-5 rounded-2xl bg-white dark:bg-[#11191f] border border-[#D1DEE5] dark:border-white/10 space-y-1.5">
          <h4 class="font-bold text-[#294657] dark:text-[#F8F6F1]">3. Mindfulness over Over-Identification</h4>
          <p class="text-xs sm:text-sm text-[#27343B]/80 dark:text-[#7d8d96]">Holding painful thoughts and feelings in balanced awareness rather than exaggerating them or spiraling into catastrophic narratives.</p>
        </div>
      </div>
    `
  }
];

// Helper: Build the 8-Service Section-Wise Grid HTML
function buildServicesGridHtml() {
  return `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 items-stretch">
      ${ALL_SERVICES_DATA.map(s => `
        <div class="card-wellness p-6 rounded-3xl bg-white dark:bg-[#17232b] border ${s.isPopular ? 'border-2 border-[#B25338] shadow-xl' : 'border border-[#D1DEE5] dark:border-white/10 shadow-md'} flex flex-col justify-between h-full relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group">
          
          ${s.isPopular ? `
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B25338] text-white text-[10px] uppercase font-bold tracking-wider shadow-md z-10 flex items-center gap-1.5">
              <i class="fas fa-star text-[9px]"></i> Most Popular
            </div>
          ` : ''}

          <div class="flex flex-col flex-1">
            <!-- Service Image Container (Strictly Uniform Height & Aspect) -->
            <a href="${s.file}" class="block overflow-hidden rounded-2xl mb-4 relative aspect-[16/10] w-full bg-[#EBF1F4]/40 dark:bg-[#1e2d37]">
              <img src="${s.img}" alt="${s.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute top-3 left-3">
                <span class="px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#17232b]/90 backdrop-blur-md text-[10px] font-bold text-[#294657] dark:text-[#8FAFC0] shadow-sm">
                  ${s.badge}
                </span>
              </div>
            </a>

            <!-- Header & Subtitle (Uniform Min-Height) -->
            <div class="min-h-[110px] space-y-1.5 flex flex-col justify-start">
              <div class="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#B25338]">
                <span>${s.category}</span>
                <span class="text-[#24586E] dark:text-[#8FAFC0]">${s.cptCode}</span>
              </div>
              <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1] leading-snug">
                <a href="${s.file}" class="hover:text-[#B25338] transition-colors">${s.title}</a>
              </h3>
              <p class="text-xs text-[#27343B]/75 dark:text-[#7d8d96] leading-relaxed line-clamp-2">
                ${s.subtitle}
              </p>
            </div>

            <!-- Price Row (Strictly Aligned) -->
            <div class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1] py-3.5 border-y border-[#D1DEE5] dark:border-white/10 my-4 flex items-baseline justify-between">
              <div>
                <span class="price-val">${s.priceSession}</span>
                <span class="text-xs font-sans font-normal text-[#27343B]/70 dark:text-[#7d8d96] block sm:inline">${s.sessionUnit}</span>
              </div>
              <span class="text-[10px] font-sans font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                ${s.saveBadge}
              </span>
            </div>

            <!-- Features Checklist (Uniform Spacing) -->
            <ul class="text-xs space-y-2 text-[#27343B]/80 dark:text-[#7d8d96] mb-6 flex-1">
              ${s.features.map(f => `
                <li class="flex items-start gap-2">
                  <i class="fas fa-check text-[#B25338] mt-0.5 text-[10px] shrink-0"></i>
                  <span class="leading-tight">${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Bottom Action Buttons (Strictly Aligned at Bottom) -->
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
  `;
}

// Helper: Build the Master 8-Service Fee Comparison Schedule Table
function buildMasterFeeTableHtml() {
  return `
    <div class="overflow-x-auto rounded-3xl border border-[#D1DEE5] dark:border-white/10 shadow-md">
      <table class="w-full text-left text-xs border-collapse">
        <thead>
          <tr class="bg-[#EDF3F6] dark:bg-[#11191f] text-[#294657] dark:text-[#F8F6F1] font-bold border-b-2 border-[#CBD8E0] dark:border-white/10">
            <th class="py-4 px-6">Clinical Modality / Service</th>
            <th class="py-4 px-6">Duration</th>
            <th class="py-4 px-6">Per-Session Rate</th>
            <th class="py-4 px-6">Monthly Care Package</th>
            <th class="py-4 px-6">Billing Code</th>
            <th class="py-4 px-6">Format Available</th>
            <th class="py-4 px-6 text-right">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#D8E3E9] dark:divide-white/10 text-[#27343B] dark:text-[#EBF1F4]">
          ${ALL_SERVICES_DATA.map((s, idx) => `
            <tr class="hover:bg-[#F3F7FA] dark:hover:bg-white/5 transition-colors ${idx % 2 === 1 ? 'bg-[#F8F6F1]/40 dark:bg-white/[0.02]' : ''}">
              <td class="py-4 px-6 font-bold text-[#294657] dark:text-[#F8F6F1]">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#B25338]"></span>
                  <a href="${s.file}" class="hover:text-[#B25338]">${s.title}</a>
                </div>
              </td>
              <td class="py-4 px-6 font-medium">${s.sessionUnit.replace('/ ', '')}</td>
              <td class="py-4 px-6 font-bold text-[#294657] dark:text-[#F8F6F1]">${s.priceSession}</td>
              <td class="py-4 px-6">
                <span class="font-semibold text-emerald-700 dark:text-emerald-400">${s.monthlyPrice}</span>
                <span class="text-[10px] text-[#27343B]/60 dark:text-[#7d8d96]">(${s.saveBadge})</span>
              </td>
              <td class="py-4 px-6 font-mono text-[11px] text-[#24586E] dark:text-[#8FAFC0]">${s.cptCode}</td>
              <td class="py-4 px-6"><span class="text-emerald-700 dark:text-emerald-400 font-semibold"><i class="fas fa-check-circle mr-1"></i> In-Person / Video</span></td>
              <td class="py-4 px-6 text-right">
                <button type="button" class="open-appointment-btn text-[#B25338] hover:underline font-bold">
                  Book Intake &rarr;
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// 3. Export to file for execution
module.exports = {
  ALL_SERVICES_DATA,
  UPDATED_BLOG_ARTICLES,
  buildServicesGridHtml,
  buildMasterFeeTableHtml
};

console.log('Setup data helper complete.');
