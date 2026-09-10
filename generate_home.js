const fs = require('fs');
const { getHead, getHeader, getFooter, BRAND_NAME, PHONE, CRISIS_PHONE, EMAIL, ADDRESS } = require('./build_site.js');

console.log('Generating index.html and home-agency.html...');

// ==========================================
// 1. INDEX.HTML (Home Page 1 - General Clinic)
// ==========================================
const indexHtml = `${getHead('SereneMind — Premier Mental Health Counseling & Psychological Wellness Center', 'Compassionate, evidence-based mental health counseling for individuals, couples, teens, and families. 100% confidential in-person & telehealth sessions.')}
${getHeader('home')}

<main class="flex-grow">
  
  <!-- Hero Section -->
  <section class="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Hero Content -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-700/50 text-teal-800 dark:text-teal-200 text-xs font-bold shadow-sm">
            <i class="fas fa-shield-heart text-teal-600 dark:text-teal-400"></i>
            <span>Judgment-Free & 100% Confidential Support</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-slate-900 dark:text-white leading-[1.12] tracking-tight">
            Compassionate Care for Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-indigo-600">Emotional Well-Being</span>
          </h1>

          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Whether you are navigating anxiety, depression, relationship hurdles, or life transitions, our board-certified clinical psychologists and licensed therapists provide a safe, empathetic space for lasting healing.
          </p>

          <!-- CTAs & Action Row -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button type="button" class="open-appointment-modal w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-sm shadow-xl shadow-teal-600/25 hover:shadow-teal-600/35 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <i class="fas fa-calendar-check"></i> Schedule Intake Session
            </button>
            <a href="facilities.html" class="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-sm border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow flex items-center justify-center gap-2">
              <i class="fas fa-spa text-teal-600"></i> Free Mindfulness Tools
            </a>
          </div>

          <!-- Trust Badges & Insurance Note -->
          <div class="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <div class="flex items-center gap-2">
              <i class="fas fa-user-shield text-teal-600 text-sm"></i>
              <span>HIPAA Compliant</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fas fa-certificate text-indigo-600 text-sm"></i>
              <span>APA Accredited Team</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fas fa-file-invoice-dollar text-emerald-600 text-sm"></i>
              <span>Insurance & Superbills Accepted</span>
            </div>
          </div>
        </div>

        <!-- Right Hero Visual with Floating Glass Cards -->
        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            
            <!-- Main Hero Image Frame -->
            <div class="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/10 border-4 border-white dark:border-slate-800 aspect-[4/5] img-zoom-container">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" alt="Compassionate Counselor in Modern Therapy Office" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
              
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <span class="inline-block bg-teal-500/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Sanctuary Setting</span>
                <p class="text-sm font-semibold text-teal-50">"Therapy is not about fixing what is broken; it is about discovering your resilience."</p>
              </div>
            </div>

            <!-- Floating Card 1: Verified Client Score -->
            <div class="absolute -top-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3.5 animate-bounce-subtle z-20">
              <div class="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/80 flex items-center justify-center text-teal-600 text-xl font-bold">
                <i class="fas fa-star text-amber-400"></i>
              </div>
              <div>
                <div class="text-lg font-extrabold text-slate-900 dark:text-white font-heading">4.9 / 5.0</div>
                <div class="text-xs text-slate-500 dark:text-slate-400">1,850+ Verified Client Reviews</div>
              </div>
            </div>

            <!-- Floating Card 2: 24/7 Available Sessions -->
            <div class="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3.5 z-20">
              <div class="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 flex items-center justify-center text-indigo-600 text-lg">
                <i class="fas fa-video"></i>
              </div>
              <div>
                <div class="text-sm font-bold text-slate-900 dark:text-white font-heading">In-Person & Telehealth</div>
                <div class="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Appointments Available This Week
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Quick Action & Interactive Screener Row -->
  <section class="py-12 bg-white dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Action 1 -->
        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 card-lift">
          <div class="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xl mb-4">
            <i class="fas fa-user-friends"></i>
          </div>
          <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">Individual Psychotherapy</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Personalized 1-on-1 counseling exploring anxiety, trauma, self-esteem, and purpose.</p>
          <a href="programs.html" class="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1">Learn More <i class="fas fa-arrow-right text-[10px]"></i></a>
        </div>

        <!-- Action 2 -->
        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 card-lift">
          <div class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl mb-4">
            <i class="fas fa-heart"></i>
          </div>
          <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">Couples & Marriage</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Rebuild intimacy, de-escalate recurring conflicts, and deepen mutual trust.</p>
          <a href="programs.html" class="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">Learn More <i class="fas fa-arrow-right text-[10px]"></i></a>
        </div>

        <!-- Action 3 -->
        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 card-lift">
          <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl mb-4">
            <i class="fas fa-child"></i>
          </div>
          <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">Teen & Child Support</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Specialized adolescent counselors guiding youth through social stress and emotions.</p>
          <a href="programs.html" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1">Learn More <i class="fas fa-arrow-right text-[10px]"></i></a>
        </div>

        <!-- Action 4 -->
        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 card-lift">
          <div class="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xl mb-4">
            <i class="fas fa-laptop-medical"></i>
          </div>
          <h3 class="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">Virtual Telehealth</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Secure, HIPAA-compliant video counseling from the privacy and comfort of home.</p>
          <a href="programs.html" class="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1">Learn More <i class="fas fa-arrow-right text-[10px]"></i></a>
        </div>

      </div>
    </div>
  </section>

  <!-- Interactive Box Breathing & Quick Self-Assessment Feature -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-teal-500/20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Interactive Box Breathing Visualizer -->
          <div class="lg:col-span-6 text-center space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold">
              <i class="fas fa-wind"></i> 1-Minute Grounding Exercise
            </div>
            <h2 class="text-3xl font-extrabold font-heading text-white">Interactive Box Breathing</h2>
            <p class="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Box breathing is an evidence-based clinical technique used to regulate the nervous system, lower cortisol, and restore mental calmness.
            </p>

            <!-- Animated Visualizer Container -->
            <div class="py-8 flex flex-col items-center justify-center">
              <div id="breathing-circle" class="w-44 h-44 rounded-full border-4 border-teal-400 flex flex-col items-center justify-center transition-all duration-1000 shadow-2xl bg-teal-950/40">
                <span id="breathing-timer-text" class="text-3xl font-extrabold font-heading text-teal-200">4s</span>
                <span id="breathing-phase-text" class="text-xs font-bold text-teal-300 uppercase tracking-widest mt-1">Inhale Slowly</span>
              </div>
            </div>

            <div>
              <button type="button" id="breathing-toggle-btn" class="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-lg shadow-teal-600/30 transition-all">
                <i class="fas fa-pause mr-1.5"></i> Pause Exercise
              </button>
            </div>
          </div>

          <!-- Quick 3-Question Mood Screener Widget -->
          <div class="lg:col-span-6 bg-white/10 dark:bg-slate-950/60 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-md">
            <div class="mb-4">
              <span class="text-xs font-bold text-amber-300 uppercase tracking-wider">Confidential Self-Check</span>
              <h3 class="text-xl font-bold font-heading text-white mt-1">Quick Emotional Wellness Screener</h3>
              <p class="text-xs text-slate-300 mt-1">Answer 3 brief questions to receive customized self-care recommendations.</p>
            </div>

            <form id="mood-screener-form" class="space-y-4">
              <div>
                <label class="block text-xs font-semibold text-slate-200 mb-1.5">1. In the past 2 weeks, how often have you felt overwhelmed or anxious?</label>
                <select class="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-teal-400">
                  <option value="0">Not at all (0)</option>
                  <option value="1">Several days (1)</option>
                  <option value="2">More than half the days (2)</option>
                  <option value="3">Nearly every day (3)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-200 mb-1.5">2. How often have you had trouble sleeping or feeling rested?</label>
                <select class="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-teal-400">
                  <option value="0">Not at all (0)</option>
                  <option value="1">Several days (1)</option>
                  <option value="2">More than half the days (2)</option>
                  <option value="3">Nearly every day (3)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-200 mb-1.5">3. How often have you felt disconnected or lacking motivation?</label>
                <select class="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-teal-400">
                  <option value="0">Not at all (0)</option>
                  <option value="1">Several days (1)</option>
                  <option value="2">More than half the days (2)</option>
                  <option value="3">Nearly every day (3)</option>
                </select>
              </div>

              <button type="submit" class="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all">
                Calculate Wellness Insight
              </button>
            </form>

            <!-- Result Box -->
            <div id="screener-result-box" class="hidden mt-4 p-4 rounded-xl bg-slate-900/90 border border-teal-500/40 text-xs">
              <div class="flex items-center justify-between mb-1.5">
                <span id="screener-score-desc" class="font-bold text-teal-300">Mild Stress Indicator</span>
                <span id="screener-score-val" class="font-extrabold text-white">2 / 9</span>
              </div>
              <p id="screener-recommendation" class="text-slate-300 leading-relaxed">
                Your responses indicate mild occasional tension. Regular mindfulness exercises, sleep hygiene, and our self-care guides are recommended.
              </p>
              <div class="mt-3 pt-3 border-t border-slate-800 flex justify-end">
                <button type="button" class="open-appointment-modal font-bold text-teal-400 hover:underline">
                  Speak with a Counselor &rarr;
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- Comprehensive Therapy Services Grid -->
  <section class="py-20 bg-slate-100/60 dark:bg-slate-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span class="trust-badge"><i class="fas fa-stethoscope"></i> Evidence-Based Modalities</span>
        <h2 class="text-3xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white">Comprehensive Counseling Services</h2>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Our multidimensional approach integrates Cognitive Behavioral Therapy (CBT), EMDR, Mindfulness, and Psychodynamic techniques tailored to your unique journey.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Service Card 1 -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between">
          <div>
            <div class="h-48 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=800&q=80" alt="Individual Psychotherapy Session" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">1-on-1 Session</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Individual Psychotherapy</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                A safe, non-judgmental space to process life transitions, manage stress, build emotional resilience, and rediscover personal purpose.
              </p>
              <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div class="flex items-center gap-2"><i class="fas fa-check text-teal-600"></i> CBT & Mindfulness Integrations</div>
                <div class="flex items-center gap-2"><i class="fas fa-check text-teal-600"></i> 50-Minute Weekly Sessions</div>
                <div class="flex items-center gap-2"><i class="fas fa-check text-teal-600"></i> In-Person or Telehealth</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$120 <span class="text-xs font-normal text-slate-500">/ session</span></span>
            <a href="program-details.html" class="px-4 py-2 rounded-xl bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 font-bold text-xs hover:bg-teal-600 hover:text-white transition-colors">Details & Booking</a>
          </div>
        </div>

        <!-- Service Card 2 -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between">
          <div>
            <div class="h-48 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80" alt="Couples and Relationship Counseling" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Relationship Care</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Couples & Marriage Therapy</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Evidence-based Gottman & Emotionally Focused Therapy (EFT) methods to dissolve destructive conflict cycles and renew emotional intimacy.
              </p>
              <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div class="flex items-center gap-2"><i class="fas fa-check text-indigo-600"></i> Gottman Method Guided</div>
                <div class="flex items-center gap-2"><i class="fas fa-check text-indigo-600"></i> Communication & Conflict Repair</div>
                <div class="flex items-center gap-2"><i class="fas fa-check text-indigo-600"></i> Pre-Marital & Long-term Support</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$160 <span class="text-xs font-normal text-slate-500">/ session</span></span>
            <a href="program-details.html" class="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 font-bold text-xs hover:bg-indigo-600 hover:text-white transition-colors">Details & Booking</a>
          </div>
        </div>

        <!-- Service Card 3 -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between">
          <div>
            <div class="h-48 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" alt="Teen and Adolescent Mental Health" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Youth & Teens</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Teen & Adolescent Therapy</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Empowering adolescents through social pressures, identity exploration, academic stress, and family communication with certified youth specialists.
              </p>
              <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div class="flex items-center gap-2"><i class="fas fa-check text-amber-600"></i> Expressive & Play Therapy Tools</div>
                <div class="flex items-center gap-2"><i class="fas fa-check text-amber-600"></i> Collaborative Parent Sessions</div>
                <div class="flex items-center gap-2"><i class="fas fa-check text-amber-600"></i> Confidential Safe Space</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$135 <span class="text-xs font-normal text-slate-500">/ session</span></span>
            <a href="program-details.html" class="px-4 py-2 rounded-xl bg-amber-50 dark:bg-slate-800 text-amber-700 dark:text-amber-300 font-bold text-xs hover:bg-amber-600 hover:text-white transition-colors">Details & Booking</a>
          </div>
        </div>

        <!-- Service Card 4 -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between">
          <div>
            <div class="h-48 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80" alt="Trauma Recovery and EMDR" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Trauma & PTSD</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Trauma & EMDR Recovery</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Certified EMDR (Eye Movement Desensitization and Reprocessing) protocols to process traumatic memories safely without re-traumatization.
              </p>
              <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div class="flex items-center gap-2"><i class="fas fa-check text-emerald-600"></i> EMDRIA-Certified Clinicians</div>
                <div class="flex items-center gap-2"><i class="fas fa-check text-emerald-600"></i> Somatic Regulation Practices</div>
                <div class="flex items-center gap-2"><i class="fas fa-check text-emerald-600"></i> Complex PTSD Protocols</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$175 <span class="text-xs font-normal text-slate-500">/ session</span></span>
            <a href="program-details.html" class="px-4 py-2 rounded-xl bg-emerald-50 dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 font-bold text-xs hover:bg-emerald-600 hover:text-white transition-colors">Details & Booking</a>
          </div>
        </div>

        <!-- Service Card 5 -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between">
          <div>
            <div class="h-48 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80" alt="Anxiety and Panic Management" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Anxiety & Panic</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Anxiety & Stress Management</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Structured Cognitive Behavioral tools, exposure response prevention, and somatic calming drills for generalized anxiety and panic attacks.
              </p>
              <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div class="flex items-center gap-2"><i class="fas fa-check text-teal-600"></i> Panic Cycle De-escalation</div>
                <div class="flex items-center gap-2"><i class="fas fa-check text-teal-600"></i> Biofeedback & Breath Training</div>
                <div class="flex items-center gap-2"><i class="fas fa-check text-teal-600"></i> Practical Daily Action Plans</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$125 <span class="text-xs font-normal text-slate-500">/ session</span></span>
            <a href="program-details.html" class="px-4 py-2 rounded-xl bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 font-bold text-xs hover:bg-teal-600 hover:text-white transition-colors">Details & Booking</a>
          </div>
        </div>

        <!-- Service Card 6 -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift flex flex-col justify-between">
          <div>
            <div class="h-48 overflow-hidden relative img-zoom-container">
              <img src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=800&q=80" alt="Online Telehealth Therapy" class="w-full h-full object-cover">
              <span class="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Anywhere Care</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Telehealth Virtual Care</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Access your assigned licensed therapist via our encrypted high-definition video suite. Flexible scheduling including early mornings and evenings.
              </p>
              <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <div class="flex items-center gap-2"><i class="fas fa-check text-indigo-600"></i> Encrypted Video Rooms</div>
                <div class="flex items-center gap-2"><i class="fas fa-check text-indigo-600"></i> No Commute, Zero Hassle</div>
                <div class="flex items-center gap-2"><i class="fas fa-check text-indigo-600"></i> Multi-State Licensed Providers</div>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 dark:text-white font-heading">$115 <span class="text-xs font-normal text-slate-500">/ session</span></span>
            <a href="program-details.html" class="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 font-bold text-xs hover:bg-indigo-600 hover:text-white transition-colors">Details & Booking</a>
          </div>
        </div>

      </div>

      <div class="mt-12 text-center">
        <a href="programs.html" class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md shadow-teal-600/20 transition-all">
          Explore All Specialized Programs <i class="fas fa-arrow-right text-xs"></i>
        </a>
      </div>

    </div>
  </section>

  <!-- Meet Our Licensed Clinical Therapists Spotlight -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div class="space-y-3 max-w-2xl">
          <span class="trust-badge"><i class="fas fa-user-md"></i> Board-Certified Specialists</span>
          <h2 class="text-3xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white">Meet Our Dedicated Clinical Team</h2>
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Every SereneMind therapist holds advanced doctoral or master's clinical licensure, bringing deep compassion and specialized expertise to your sessions.
          </p>
        </div>
        <a href="coaches.html" class="inline-flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline self-start md:self-auto">
          View All Clinicians <i class="fas fa-arrow-right text-xs"></i>
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Therapist 1 -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift">
          <div class="h-64 overflow-hidden relative img-zoom-container">
            <img src="https://images.unsplash.com/photo-1594824813590-78925b3997f0?auto=format&fit=crop&w=800&q=80" alt="Dr. Sarah Jenkins Psy.D." class="w-full h-full object-cover">
            <span class="absolute bottom-3 left-3 bg-teal-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">14+ Years Exp</span>
          </div>
          <div class="p-5">
            <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Dr. Sarah Jenkins</h3>
            <p class="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-2">Psy.D. Clinical Psychologist</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">Specializes in adult depression, OCD, life transitions, and mindfulness-based cognitive restructuring.</p>
            <div class="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Fee: $165/hr</span>
              <a href="coach-sophia-novak.html" class="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline">View Profile &rarr;</a>
            </div>
          </div>
        </div>

        <!-- Therapist 2 -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift">
          <div class="h-64 overflow-hidden relative img-zoom-container">
            <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" alt="Dr. Marcus Vance LMFT" class="w-full h-full object-cover">
            <span class="absolute bottom-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">11+ Years Exp</span>
          </div>
          <div class="p-5">
            <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Dr. Marcus Vance</h3>
            <p class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">LMFT Couples & Family</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">Gottman-certified marriage counselor helping couples heal attachment injuries and conflict.</p>
            <div class="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Fee: $170/hr</span>
              <a href="coach-julian-alvarez.html" class="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">View Profile &rarr;</a>
            </div>
          </div>
        </div>

        <!-- Therapist 3 -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift">
          <div class="h-64 overflow-hidden relative img-zoom-container">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" alt="Elena Rostova LCSW" class="w-full h-full object-cover">
            <span class="absolute bottom-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">9+ Years Exp</span>
          </div>
          <div class="p-5">
            <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Elena Rostova</h3>
            <p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">LCSW, CCTP Trauma Specialist</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">Expert in EMDR, somatic regulation, childhood trauma processing, and grief recovery.</p>
            <div class="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Fee: $155/hr</span>
              <a href="coach-elena-chen.html" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">View Profile &rarr;</a>
            </div>
          </div>
        </div>

        <!-- Therapist 4 -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift">
          <div class="h-64 overflow-hidden relative img-zoom-container">
            <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80" alt="Dr. David Kim M.D." class="w-full h-full object-cover">
            <span class="absolute bottom-3 left-3 bg-amber-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md">16+ Years Exp</span>
          </div>
          <div class="p-5">
            <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Dr. David Kim</h3>
            <p class="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">M.D. Child & Adolescent</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">Specializing in pediatric mood regulation, ADHD counseling, school anxiety, and family dynamics.</p>
            <div class="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Fee: $190/hr</span>
              <a href="coach-dmitri-kozlov.html" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline">View Profile &rarr;</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Impact Numbers / Trust Counters -->
  <section class="py-16 bg-gradient-to-r from-teal-900 via-teal-800 to-indigo-950 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="text-4xl sm:text-5xl font-black font-heading text-teal-300 mb-1" data-counter="15000">0</div>
          <div class="text-xs sm:text-sm font-semibold text-slate-200">Sessions Completed</div>
        </div>
        <div>
          <div class="text-4xl sm:text-5xl font-black font-heading text-teal-300 mb-1" data-counter="98">0</div>
          <div class="text-xs sm:text-sm font-semibold text-slate-200">Client Satisfaction Rate %</div>
        </div>
        <div>
          <div class="text-4xl sm:text-5xl font-black font-heading text-teal-300 mb-1" data-counter="42">0</div>
          <div class="text-xs sm:text-sm font-semibold text-slate-200">Licensed Clinicians</div>
        </div>
        <div>
          <div class="text-4xl sm:text-5xl font-black font-heading text-teal-300 mb-1" data-counter="16">0</div>
          <div class="text-xs sm:text-sm font-semibold text-slate-200">Years of Clinical Excellence</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Verified Client Stories & Testimonials -->
  <section class="py-20 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span class="trust-badge"><i class="fas fa-quote-left"></i> Verified Journeys</span>
        <h2 class="text-3xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white">Stories of Healing & Renewal</h2>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Hear from individuals and couples who transformed their lives through thoughtful, judgment-free clinical guidance.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Review 1 -->
        <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl card-lift flex flex-col justify-between">
          <div>
            <div class="flex text-amber-400 text-sm gap-1 mb-4">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6">
              "Working with Dr. Jenkins completely shifted how I view my panic attacks. For years I felt paralyzed. Her CBT exercises gave me real, practical tools that restored my confidence at work and home."
            </p>
          </div>
          <div class="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Emily R." class="w-11 h-11 rounded-full object-cover border-2 border-teal-500">
            <div>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white font-heading">Emily R.</h4>
              <p class="text-xs text-slate-500">Individual Therapy (10 Months)</p>
            </div>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl card-lift flex flex-col justify-between">
          <div>
            <div class="flex text-amber-400 text-sm gap-1 mb-4">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6">
              "My partner and I were on the brink of divorce when we met Dr. Vance. His calm, neutral facilitation helped us hear each other for the first time in 5 years. We cannot recommend SereneMind enough."
            </p>
          </div>
          <div class="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" alt="Michael & Clara T." class="w-11 h-11 rounded-full object-cover border-2 border-indigo-500">
            <div>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white font-heading">Michael & Clara T.</h4>
              <p class="text-xs text-slate-500">Couples Counseling (6 Months)</p>
            </div>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl card-lift flex flex-col justify-between">
          <div>
            <div class="flex text-amber-400 text-sm gap-1 mb-4">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6">
              "EMDR therapy with Elena helped me untangle childhood trauma that traditional talk therapy never could reach. The sanctuary clinic space is so warm and calming. Truly life-changing care."
            </p>
          </div>
          <div class="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80" alt="Samantha K." class="w-11 h-11 rounded-full object-cover border-2 border-emerald-500">
            <div>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white font-heading">Samantha K.</h4>
              <p class="text-xs text-slate-500">Trauma & EMDR Care (1 Year)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Latest Mental Health Articles / Research Preview -->
  <section class="py-20 bg-slate-100/60 dark:bg-slate-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div class="space-y-3 max-w-2xl">
          <span class="trust-badge"><i class="fas fa-book-open"></i> Clinical Insights</span>
          <h2 class="text-3xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white">Mental Health & Self-Care Library</h2>
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Read clinician-authored articles on emotional regulation, boundary setting, relationships, and mindfulness.
          </p>
        </div>
        <a href="blog.html" class="inline-flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline self-start md:self-auto">
          View All Articles <i class="fas fa-arrow-right text-xs"></i>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Blog 1 -->
        <article class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift">
          <div class="h-52 overflow-hidden relative img-zoom-container">
            <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80" alt="Overcoming Anxiety in Daily Life" class="w-full h-full object-cover">
            <span class="absolute top-4 left-4 bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Anxiety & Coping</span>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-3 text-xs text-slate-400 mb-2">
              <span><i class="far fa-calendar-alt"></i> August 18, 2026</span>
              <span>&bull;</span>
              <span><i class="far fa-clock"></i> 6 min read</span>
            </div>
            <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2 hover:text-teal-600 transition-colors">
              <a href="blog-details.html">Overcoming Daily Anxiety: 4 Somatic Techniques Grounded in Neuroscience</a>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              Explore how vagus nerve stimulation, progressive muscle relaxation, and box breathing disrupt acute panic responses.
            </p>
            <a href="blog-details.html" class="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1">Read Article &rarr;</a>
          </div>
        </article>

        <!-- Blog 2 -->
        <article class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift">
          <div class="h-52 overflow-hidden relative img-zoom-container">
            <img src="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&w=800&q=80" alt="Preventing Workplace Burnout" class="w-full h-full object-cover">
            <span class="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Mindfulness</span>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-3 text-xs text-slate-400 mb-2">
              <span><i class="far fa-calendar-alt"></i> August 12, 2026</span>
              <span>&bull;</span>
              <span><i class="far fa-clock"></i> 5 min read</span>
            </div>
            <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2 hover:text-indigo-600 transition-colors">
              <a href="blog-detail-adult-confidence.html">5 Mindful Habits to Prevent Workplace Burnout and Chronic Fatigue</a>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              How to establish psychological work boundaries, micro-rest intervals, and mindful detachment to sustain energy.
            </p>
            <a href="blog-detail-adult-confidence.html" class="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1">Read Article &rarr;</a>
          </div>
        </article>

        <!-- Blog 3 -->
        <article class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg card-lift">
          <div class="h-52 overflow-hidden relative img-zoom-container">
            <img src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=800&q=80" alt="Building Emotional Intimacy in Couples" class="w-full h-full object-cover">
            <span class="absolute top-4 left-4 bg-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Relationships</span>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-3 text-xs text-slate-400 mb-2">
              <span><i class="far fa-calendar-alt"></i> August 05, 2026</span>
              <span>&bull;</span>
              <span><i class="far fa-clock"></i> 7 min read</span>
            </div>
            <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2 hover:text-amber-600 transition-colors">
              <a href="blog-detail-dive-start.html">Building Emotional Safety: How Vulnerability Strengthens Partnership</a>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              Practical communication frameworks to replace defensiveness with curiosity during high-stakes relationship talks.
            </p>
            <a href="blog-detail-dive-start.html" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1">Read Article &rarr;</a>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- Final Calming CTA -->
  <section class="py-20 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-teal-700 via-teal-600 to-indigo-700 rounded-3xl p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
        <div class="relative z-10 max-w-2xl mx-auto space-y-6">
          <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
            <i class="fas fa-heart"></i> Take the First Step Today
          </span>
          <h2 class="text-3xl sm:text-5xl font-black font-heading text-white leading-tight">
            You Do Not Have to Carry This Alone.
          </h2>
          <p class="text-base sm:text-lg text-teal-50 leading-relaxed">
            Our compassionate care coordinators are here to match you with the ideal therapist for your goals and schedule.
          </p>
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button type="button" class="open-appointment-modal w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-teal-800 font-extrabold text-sm shadow-xl hover:bg-teal-50 transition-all">
              Book a Free 15-Minute Consultation
            </button>
            <a href="tel:18002738255" class="w-full sm:w-auto px-7 py-4 rounded-2xl bg-teal-900/60 text-white font-bold text-sm border border-teal-300/40 hover:bg-teal-900 transition-all flex items-center justify-center gap-2">
              <i class="fas fa-phone-alt"></i> Call Us: ${PHONE}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

${getFooter()}
`;

fs.writeFileSync('index.html', indexHtml);
console.log('Successfully wrote index.html');


// ==========================================
// 2. HOME-AGENCY.HTML (Home Page 2 - Specialized Clinic & Holistic Practice)
// ==========================================
const homeAgencyHtml = `${getHead('SereneMind Specialized Practice — Holistic Psychiatry & Intensive Therapy', 'Specialized mental health clinic offering holistic psychiatric evaluation, corporate wellness programs, and intensive outpatient support.')}
${getHeader('home-agency')}

<main class="flex-grow">
  
  <!-- Niche Hero Section -->
  <section class="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold">
            <i class="fas fa-brain"></i> Advanced Holistic Mental Health & Psychiatry
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-white leading-tight">
            Integrative Psychiatry & <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-indigo-400">Intensive Emotional Care</span>
          </h1>

          <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Bridging clinical psychiatric evaluations, neuro-affective therapy, executive burnout rehabilitation, and mindful somatic health into one cohesive healing sanctuary.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button type="button" class="open-appointment-modal w-full sm:w-auto px-8 py-4 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-xl shadow-teal-500/25 transition-all">
              Request Clinical Evaluation
            </button>
            <a href="batch-timings.html" class="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-800 text-white font-bold text-sm border border-slate-700 hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
              <i class="fas fa-calendar-alt text-teal-400"></i> Intensive Workshop Schedule
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 aspect-[4/5] img-zoom-container">
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80" alt="Holistic Mindfulness Meditation Retreat" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 text-white">
              <span class="inline-block bg-indigo-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Holistic Modality</span>
              <p class="text-sm font-semibold">Integrative mind-body wellness programs for professionals & executives.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Specialized Programs Grid -->
  <section class="py-20 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span class="trust-badge"><i class="fas fa-layer-group"></i> Niche Clinical Programs</span>
        <h2 class="text-3xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white">Targeted Specialized Treatment Tracks</h2>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          Designed for complex emotional challenges requiring multidisciplinary collaboration between therapists and medical psychiatric directors.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Track 1 -->
        <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl card-lift">
          <div class="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center text-xl mb-4">
            <i class="fas fa-briefcase"></i>
          </div>
          <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Executive & Corporate Wellness</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
            Confidential high-performance stress mitigation, imposter syndrome resolution, and leadership emotional intelligence training.
          </p>
          <a href="program-details.html" class="text-xs font-bold text-teal-600 hover:underline">Explore Program &rarr;</a>
        </div>

        <!-- Track 2 -->
        <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl card-lift">
          <div class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center text-xl mb-4">
            <i class="fas fa-pills"></i>
          </div>
          <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Psychiatric Evaluation & Medication</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
            Conservative, evidence-based medication management paired closely with psychotherapeutic counseling for mood disorders.
          </p>
          <a href="program-details.html" class="text-xs font-bold text-indigo-600 hover:underline">Explore Program &rarr;</a>
        </div>

        <!-- Track 3 -->
        <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl card-lift">
          <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center text-xl mb-4">
            <i class="fas fa-users"></i>
          </div>
          <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Intensive Outpatient Support Groups</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
            Cohort-based weekly therapeutic circles for grief recovery, postpartum emotional transitions, and substance relapse prevention.
          </p>
          <a href="batch-timings.html" class="text-xs font-bold text-amber-600 hover:underline">Explore Program &rarr;</a>
        </div>

      </div>
    </div>
  </section>

</main>

${getFooter()}
`;

fs.writeFileSync('home-agency.html', homeAgencyHtml);
console.log('Successfully wrote home-agency.html');
