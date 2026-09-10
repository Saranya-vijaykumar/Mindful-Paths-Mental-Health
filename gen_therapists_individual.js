const fs = require('fs');
const path = require('path');
const { getHead, getHeader, getFooter, IMAGES, BRAND_NAME, PHONE } = require('./gen_layout');

console.log('Generating individual therapist detail pages for all clinicians...');

const THERAPISTS = [
  {
    id: 'sarah-jenkins',
    filename: 'therapist-sarah-jenkins.html',
    name: 'Dr. Sarah Jenkins, Psy.D.',
    shortName: 'Dr. Sarah Jenkins',
    roleTag: 'Lead Clinical Psychologist',
    subTitle: 'Specializing in Adult Anxiety, Panic Disorders, Somatic Grounding & High-Achiever Burnout',
    license: 'NY #024819',
    image: IMAGES.therapist_sarah,
    fee: '$175 / 50-Min Session',
    opening: 'This Thursday at 2:00 PM EST',
    quote: 'My philosophy centers on creating a space of unconditional respect. When clients enter my room, they often carry immense exhaustion from trying to hold everything together. We slow down the frantic pace, examine the stories fueling your anxiety, and re-anchor in what truly matters to you.',
    approach: 'Dr. Jenkins integrates evidence-based Cognitive Behavioral Therapy (CBT) with modern somatic regulation techniques. Her sessions are non-clinical, warm, and collaborative. Rather than viewing anxiety as a defect, she views it as an overprotective nervous system response that can be gently retrained toward safety.',
    specialties: [
      { name: 'Cognitive Behavioral Restructuring', icon: 'fas fa-brain' },
      { name: 'Somatic Vagal Grounding', icon: 'fas fa-lungs' },
      { name: 'Perfectionism & Executive Burnout', icon: 'fas fa-briefcase' },
      { name: 'Relational Attachment & Transitions', icon: 'fas fa-compass' }
    ],
    credentials: [
      { text: 'Doctorate in Clinical Psychology (Psy.D.) – Columbia University', icon: 'fas fa-graduation-cap' },
      { text: 'Certified Cognitive Behavioral Therapist – Beck Institute', icon: 'fas fa-certificate' },
      { text: 'Active Member, American Psychological Association (APA)', icon: 'fas fa-award' },
      { text: '12+ Years Clinical Practice & Mindful Supervision', icon: 'fas fa-shield-alt' }
    ]
  },
  {
    id: 'marcus-vance',
    filename: 'therapist-marcus-vance.html',
    name: 'Dr. Marcus Vance, LMFT',
    shortName: 'Dr. Marcus Vance',
    roleTag: 'Marriage & Family Specialist',
    subTitle: 'Specializing in Couples Reconciliation, Gottman Method, Conflict De-escalation & Intimacy',
    license: 'NY #018934',
    image: IMAGES.therapist_marcus,
    fee: '$225 / 75-Min Session',
    opening: 'This Thursday at 5:30 PM EST',
    quote: 'Conflict in a relationship is not a sign that love has died; it is an unskillful protest of emotional disconnection. When both partners feel safe, valued, and truly heard, repair happens naturally and intimacy flourishes.',
    approach: 'Dr. Vance utilizes Gottman-informed couples therapy and Emotionally Focused Therapy (EFT). He specializes in breaking entrenched circular arguments, rebuilding emotional trust after betrayals, and creating compassionate frameworks for long-term romantic vitality.',
    specialties: [
      { name: 'Gottman Method Couples Therapy', icon: 'fas fa-heart' },
      { name: 'Emotional Focused Therapy (EFT)', icon: 'fas fa-hand-holding-heart' },
      { name: 'Infidelity Recovery & Trust Repair', icon: 'fas fa-shield-heart' },
      { name: 'Pre-Marital & Co-Parenting Counseling', icon: 'fas fa-users' }
    ],
    credentials: [
      { text: 'Master of Science in Marriage & Family Therapy – Northwestern University', icon: 'fas fa-graduation-cap' },
      { text: 'Certified Gottman Method Couples Therapist (Level 3)', icon: 'fas fa-certificate' },
      { text: 'Clinical Fellow, American Association for Marriage & Family Therapy (AAMFT)', icon: 'fas fa-award' },
      { text: '14+ Years Guiding Hundreds of Couples', icon: 'fas fa-shield-alt' }
    ]
  },
  {
    id: 'elena-rostova',
    filename: 'therapist-elena-rostova.html',
    name: 'Elena Rostova, LCSW, CCTP',
    shortName: 'Elena Rostova',
    roleTag: 'Certified Trauma Specialist',
    subTitle: 'Specializing in EMDR Therapy, Somatic Experiencing, Complex PTSD & Nervous System Resets',
    license: 'NY #032145',
    image: IMAGES.therapist_elena,
    fee: '$195 / 60-Min Session',
    opening: 'This Friday at 11:00 AM EST',
    quote: 'Trauma is not just what happened to you in the past; it is the physical imprint left in your nervous system today. Through bilateral stimulation and somatic pacing, we guide your body out of chronic fight-or-flight into restorative peace.',
    approach: 'Elena specializes in EMDR (Eye Movement Desensitization and Reprocessing) and Somatic Experiencing. She provides a deeply grounded, judgment-free space to gently resolve traumatic memories, emotional numbness, and hyper-vigilance without requiring clients to recount distressing stories repeatedly.',
    specialties: [
      { name: 'EMDR Bilateral Reprocessing', icon: 'fas fa-feather-pointed' },
      { name: 'Polyvagal Somatic Regulation', icon: 'fas fa-wind' },
      { name: 'Complex Developmental Trauma', icon: 'fas fa-shield-halved' },
      { name: 'Grief, Loss & Bereavement Counseling', icon: 'fas fa-spa' }
    ],
    credentials: [
      { text: 'Master of Social Work (MSW) – NYU Silver School of Social Work', icon: 'fas fa-graduation-cap' },
      { text: 'Certified Clinical Trauma Professional (CCTP) & EMDRIA Member', icon: 'fas fa-certificate' },
      { text: 'Somatic Experiencing Intermediate Practitioner (SEEL)', icon: 'fas fa-award' },
      { text: '10+ Years Dedicated Trauma Care Practice', icon: 'fas fa-shield-alt' }
    ]
  },
  {
    id: 'david-kim',
    filename: 'therapist-david-kim.html',
    name: 'Dr. David Kim, M.D.',
    shortName: 'Dr. David Kim',
    roleTag: 'Child & Adolescent Psychiatrist',
    subTitle: 'Specializing in Holistic Medication Management, Adolescent ADHD, Mood Disorders & Neurobiology',
    license: 'NY #041289',
    image: IMAGES.therapist_david,
    fee: '$250 / 50-Min Session',
    opening: 'Next Monday at 10:00 AM EST',
    quote: 'Medication, when indicated, is never a substitute for lifestyle, therapy, or relational connection—it is a supportive bridge to lower debilitating symptoms so that genuine psychological growth can take root.',
    approach: 'Dr. Kim combines rigorous medical psychopharmacology with holistic nutrition, sleep hygiene, and adolescent family counseling. He takes time to educate parents and young adults on the neurobiology of attention, anxiety, and depression.',
    specialties: [
      { name: 'Adolescent ADHD & Executive Function', icon: 'fas fa-user-graduate' },
      { name: 'Conservative Medication Management', icon: 'fas fa-capsules' },
      { name: 'Pediatric Mood & Anxiety Evaluations', icon: 'fas fa-child' },
      { name: 'Sleep & Circadian Rhythm Support', icon: 'fas fa-moon' }
    ],
    credentials: [
      { text: 'Doctor of Medicine (M.D.) – Johns Hopkins University', icon: 'fas fa-graduation-cap' },
      { text: 'Psychiatric Residency & Fellowship – Cornell Presbyterian', icon: 'fas fa-certificate' },
      { text: 'Fellow, American Academy of Child & Adolescent Psychiatry (AACAP)', icon: 'fas fa-award' },
      { text: '16+ Years Clinical Psychiatry Experience', icon: 'fas fa-shield-alt' }
    ]
  },
  {
    id: 'maya-patel',
    filename: 'therapist-maya-patel.html',
    name: 'Dr. Maya Patel, Ph.D.',
    shortName: 'Dr. Maya Patel',
    roleTag: 'Neuropsychologist & Mindfulness Researcher',
    subTitle: 'Specializing in Mindfulness-Based Stress Reduction (MBSR), Cognitive Clarity & Values Alignment',
    license: 'NY #029411',
    image: IMAGES.therapist_maya,
    fee: '$185 / 50-Min Session',
    opening: 'This Wednesday at 11:00 AM EST',
    quote: 'Our minds generate thousands of thoughts each day, but thoughts are not facts. Mindfulness gives you the psychological space between stimulus and response—where your freedom, agency, and serenity live.',
    approach: 'Dr. Patel translates neuroscience into practical daily rituals. Combining cognitive psychology with mindfulness meditation, she helps high-performing professionals and creatives break out of automatic anxiety loops and lead deeply intentional lives.',
    specialties: [
      { name: 'Mindfulness-Based Stress Reduction (MBSR)', icon: 'fas fa-spa' },
      { name: 'Cognitive Processing & Focus', icon: 'fas fa-brain' },
      { name: 'Values-Based Life Direction', icon: 'fas fa-compass' },
      { name: 'Imposter Feelings & Shame Resilience', icon: 'fas fa-seedling' }
    ],
    credentials: [
      { text: 'Doctorate in Clinical Psychology (Ph.D.) – Harvard University', icon: 'fas fa-graduation-cap' },
      { text: 'Qualified MBSR Teacher – Brown Mindfulness Center', icon: 'fas fa-certificate' },
      { text: 'Member, APA Division 38 (Society for Health Psychology)', icon: 'fas fa-award' },
      { text: '11+ Years Clinical & Neuropsychological Research', icon: 'fas fa-shield-alt' }
    ]
  },
  {
    id: 'james-thornton',
    filename: 'therapist-james-thornton.html',
    name: 'James Thornton, LPC',
    shortName: 'James Thornton',
    roleTag: 'Licensed Professional Counselor',
    subTitle: "Specializing in Men's Emotional Health, Life Transitions, Identity & Somatic Regulation",
    license: 'NY #015672',
    image: IMAGES.therapist_james,
    fee: '$165 / 50-Min Session',
    opening: 'This Friday at 2:00 PM EST',
    quote: 'Men are often conditioned to bottle vulnerability until it manifests as irritability or numbness. In our room, you can set down the heavy expectation of always having it together and learn emotional fluency without shame.',
    approach: 'James offers a grounded, pragmatic approach to mental health. He blends active listening with practical somatic breathwork, helping men navigate career crossroads, relational expectations, fatherhood transitions, and emotional regulation.',
    specialties: [
      { name: "Men's Mental Health & Stress", icon: 'fas fa-user-shield' },
      { name: 'Life & Career Transitions', icon: 'fas fa-road' },
      { name: 'Emotional Expression & Anger Reset', icon: 'fas fa-bolt' },
      { name: 'Somatic Grounding & Breathwork', icon: 'fas fa-lungs' }
    ],
    credentials: [
      { text: 'Master of Arts in Counseling Psychology – Fordham University', icon: 'fas fa-graduation-cap' },
      { text: 'National Certified Counselor (NCC) – NBCC', icon: 'fas fa-certificate' },
      { text: 'Certified Somatic Breathwork Facilitator', icon: 'fas fa-award' },
      { text: '9+ Years Counseling Men & Families', icon: 'fas fa-shield-alt' }
    ]
  }
];

function buildIndividualTherapistPage(t) {
  const head = getHead(
    `${t.name} — ${t.roleTag}`,
    `Learn about ${t.name}, specialties in ${t.subTitle}, credentials, and schedule a confidential intake session.`
  );
  const header = getHeader('therapists');

  // Other clinicians for footer grid
  const otherClinicians = THERAPISTS.filter(x => x.id !== t.id).slice(0, 3);

  const content = `
  <!-- Breadcrumb -->
  <div class="py-4 bg-[#EBF1F4]/40 dark:bg-[#17232b] border-b border-[#EBF1F4] dark:border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
      <a href="index.html" class="hover:text-[#D7B7A5]">Home</a>
      <span>/</span>
      <a href="therapists.html" class="hover:text-[#D7B7A5]">Therapists</a>
      <span>/</span>
      <span class="text-[#294657] dark:text-[#F8F6F1] font-bold">${t.shortName}</span>
    </div>
  </div>

  <!-- Main Profile Section -->
  <section class="py-16 bg-white dark:bg-[#17232b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Column: Portrait & Credentials -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Standardized Aspect Ratio Portrait Card -->
          <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#1e2d37] bg-[#EBF1F4]/40 dark:bg-[#17232b] relative aspect-[4/5] group">
            <img src="${t.image}" alt="${t.name}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
            
            <div class="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md p-4 rounded-2xl border border-[#EBF1F4] dark:border-white/10 shadow-lg">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-sm font-bold text-[#294657] dark:text-[#F8F6F1]">${t.shortName}</div>
                  <div class="text-[11px] text-[#8FAFC0] font-bold flex items-center gap-1">
                    <span class="w-2 h-2 rounded-full bg-[#8FAFC0] animate-pulse"></span> ${t.roleTag}
                  </div>
                </div>
                <span class="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-[#D7B7A5]/10 text-[#D7B7A5]">${t.license}</span>
              </div>
            </div>
          </div>

          <!-- Credentials & Accreditations Card -->
          <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 space-y-3 text-xs">
            <h3 class="font-heading font-bold text-sm text-[#294657] dark:text-[#F8F6F1]">Credentials &amp; Accreditations</h3>
            <ul class="space-y-2.5 text-[#27343B] dark:text-[#7d8d96]">
              ${t.credentials.map(c => `
                <li class="flex items-center gap-2.5">
                  <i class="${c.icon} text-[#D7B7A5] w-4 text-center"></i>
                  <span>${c.text}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Quick Consultation Stats Card -->
          <div class="p-6 rounded-3xl bg-white dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 space-y-3 text-xs">
            <h3 class="font-heading font-bold text-sm text-[#294657] dark:text-[#F8F6F1]">Consultation Details</h3>
            <ul class="space-y-2 text-[#27343B] dark:text-[#7d8d96]">
              <li class="flex justify-between"><span>Format:</span> <strong class="text-[#294657] dark:text-[#F8F6F1]">In-Person &amp; Telehealth</strong></li>
              <li class="flex justify-between"><span>Session Investment:</span> <strong class="text-[#294657] dark:text-[#F8F6F1]">${t.fee}</strong></li>
              <li class="flex justify-between"><span>Superbill for PPO:</span> <strong class="text-[#8FAFC0]">Provided Monthly</strong></li>
              <li class="flex justify-between"><span>Next Opening:</span> <strong class="text-[#D7B7A5]">${t.opening}</strong></li>
            </ul>
          </div>

        </div>

        <!-- Right Column: Profile Info & Booking -->
        <div class="lg:col-span-7 space-y-8">
          
          <div class="space-y-2">
            <span class="inline-block px-3.5 py-1 rounded-full bg-[#D7B7A5]/10 text-xs font-bold uppercase text-[#D7B7A5] tracking-wider">
              ${t.roleTag}
            </span>
            <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#294657] dark:text-[#F8F6F1]">
              ${t.name}
            </h1>
            <p class="text-sm text-[#8FAFC0] font-semibold leading-relaxed">
              ${t.subTitle}
            </p>
          </div>

          <!-- Philosophy Quote Block -->
          <blockquote class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#D7B7A5] text-sm text-[#27343B] dark:text-[#EBF1F4] italic leading-relaxed">
            &ldquo;${t.quote}&rdquo;
          </blockquote>

          <!-- Approach Section -->
          <div class="space-y-3">
            <h2 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">Clinical Approach &amp; Perspective</h2>
            <p class="text-sm text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">
              ${t.approach}
            </p>
          </div>

          <!-- Areas of Specialization Grid -->
          <div class="space-y-3">
            <h3 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Areas of Specialization</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              ${t.specialties.map(s => `
                <div class="p-4 bg-[#F8F6F1] dark:bg-[#1e2d37] rounded-2xl border border-[#EBF1F4] dark:border-white/10 font-semibold text-[#294657] dark:text-[#F8F6F1] flex items-center gap-2.5">
                  <i class="${s.icon} text-[#D7B7A5] text-base w-5 text-center"></i> ${s.name}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Schedule Booking Action Box -->
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#294657] to-[#1d3340] text-white shadow-xl space-y-4">
            <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <h4 class="font-heading text-xl font-bold">Schedule Intake with ${t.shortName}</h4>
                <p class="text-xs text-[#EBF1F4]">Next available opening: <strong class="text-[#f0baa9]">${t.opening}</strong></p>
              </div>
              <button type="button" class="open-appointment-btn px-8 py-3.5 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white text-xs font-bold shadow-lg transition-all hover:scale-105 active:scale-95 shrink-0">
                Book Confidential Session
              </button>
            </div>
            <div class="pt-3 border-t border-white/15 flex flex-wrap gap-4 text-xs text-white/80">
              <span><i class="fas fa-check-circle text-[#8FAFC0] mr-1"></i> Dedicated Clinical Hour</span>
              <span><i class="fas fa-check-circle text-[#8FAFC0] mr-1"></i> Out-of-Network Superbills</span>
              <span><i class="fas fa-check-circle text-[#8FAFC0] mr-1"></i> Manhattan Suite or Encrypted Video</span>
            </div>
          </div>

        </div>

      </div>

      <!-- Other Clinicians Grid -->
      <div class="mt-20 pt-12 border-t border-[#EBF1F4] dark:border-white/10">
        <div class="flex flex-col sm:flex-row justify-between sm:items-end gap-3 mb-8">
          <div>
            <span class="text-xs font-bold uppercase text-[#D7B7A5]">Other Specialists</span>
            <h3 class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">Explore Other Clinicians in Our Practice</h3>
          </div>
          <a href="therapists.html" class="text-xs font-bold text-[#D7B7A5] hover:underline flex items-center gap-1">
            View All Therapists <i class="fas fa-arrow-right text-[10px]"></i>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          ${otherClinicians.map(c => `
            <div class="card-wellness overflow-hidden rounded-3xl bg-white dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 flex flex-col h-full group hover:shadow-xl transition-all">
              <div class="relative aspect-[4/5] w-full overflow-hidden bg-[#EBF1F4]/40 dark:bg-[#17232b]">
                <img src="${c.image}" alt="${c.name}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-[#17232b]/90 text-[10px] font-bold text-[#294657] dark:text-[#8FAFC0]">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#8FAFC0] inline-block mr-1"></span> Accepts Intake
                  </span>
                </div>
              </div>
              <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span class="text-[10px] font-bold uppercase text-[#D7B7A5]">${c.roleTag}</span>
                  <h4 class="font-heading font-bold text-base text-[#294657] dark:text-[#F8F6F1]">${c.name}</h4>
                </div>
                <a href="${c.filename}" class="text-xs font-bold text-[#D7B7A5] hover:underline flex items-center gap-1 pt-2 border-t border-[#EBF1F4] dark:border-white/10">
                  View Full Profile <i class="fas fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  </section>
  `;

  return head + header + content + getFooter();
}

// Generate all individual therapist pages
THERAPISTS.forEach(t => {
  const html = buildIndividualTherapistPage(t);
  fs.writeFileSync(path.join(__dirname, t.filename), html, 'utf8');
  console.log(`✓ Generated ${t.filename}`);
});

// Also ensure therapist-details.html points to Dr. Sarah Jenkins
const sarahHtml = buildIndividualTherapistPage(THERAPISTS[0]);
fs.writeFileSync(path.join(__dirname, 'therapist-details.html'), sarahHtml, 'utf8');
console.log('✓ Updated therapist-details.html (synced with Dr. Sarah Jenkins profile)');
