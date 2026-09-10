/**
 * Mindful Paths — Signature Feature: "Start Your Wellness Journey"
 * Interactive Discovery Pathway Engine
 * Supports home-2.html and any legacy pages with robust null-guards
 */

(function () {
  'use strict';

  const JOURNEY_DATA = {
    anxiety: {
      badge: 'Recommended Pathway: Anxiety & Nervous System Balance',
      title: 'Cognitive Behavioral & Somatic Reset',
      tagline: 'Grounded somatic pacing & evidence-based Cognitive Behavioral Therapy (CBT)',
      service: 'Individual Therapy & CBT',
      serviceUrl: 'service-individual-therapy.html',
      frequency: '50-min weekly session',
      format: 'In-Person or Telehealth',
      opening: 'This Thursday 2:00 PM',
      therapist: 'Dr. Sarah Jenkins, Psy.D.',
      therapistRole: 'Lead Psychologist',
      therapistUrl: 'therapist-details.html',
      therapistImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
      quote: '“We don’t try to eliminate all anxiety—we help your nervous system realize it is safe right here.”',
      description: 'Designed specifically for persistent tension, overthinking, and nervous system fatigue. We integrate cognitive restructuring with polyvagal somatic breathing to quiet mental noise and ground your body.'
    },
    relationships: {
      badge: 'Recommended Pathway: Couples & Marriage Connection',
      title: 'Gottman-Informed Relational Repair',
      tagline: 'Gottman-informed communication, emotional safety, and conflict resolution',
      service: 'Couples & Marriage Counseling',
      serviceUrl: 'service-couples-therapy.html',
      frequency: '60-min bi-weekly sessions',
      format: 'Couples Suite or Dual Video',
      opening: 'Friday at 3:30 PM',
      therapist: 'Dr. Marcus Vance, LMFT',
      therapistRole: 'Licensed Marriage & Family Therapist',
      therapistUrl: 'therapist-details.html',
      therapistImg: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
      quote: '“Healthy relationships aren’t devoid of conflict; they possess the tools and safety to repair smoothly.”',
      description: 'Move past defensive cycles into empathetic dialogue. Rebuild emotional safety, heal relational wounds, and rediscover shared intimacy in a supportive, judgment-free environment.'
    },
    trauma: {
      badge: 'Recommended Pathway: Trauma Recovery & EMDR',
      title: 'Bilateral Stimulation & Somatic Grounding',
      tagline: 'Gentle desensitization, somatic stabilization, and nervous system safety',
      service: 'Trauma Recovery & EMDR',
      serviceUrl: 'service-trauma-emdr.html',
      frequency: '60-min structured protocol',
      format: 'In-Person Acoustic Suite',
      opening: 'Next Monday 10:00 AM',
      therapist: 'Elena Rostova, LCSW, CCTP',
      therapistRole: 'Certified Trauma & EMDR Specialist',
      therapistUrl: 'therapist-details.html',
      therapistImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      quote: '“Trauma lives in the nervous system. We pace our work gently so your mind and body heal in harmony.”',
      description: 'Gently process distressing memories and post-traumatic triggers without having to re-live every detail. Reprogram fight-or-flight somatic responses into embodied safety.'
    },
    growth: {
      badge: 'Recommended Pathway: Mindfulness & Somatic Grounding',
      title: 'Mindful Alignment & Deep Self-Inquiry',
      tagline: 'Values alignment, overcoming imposter feelings, and mindful purpose',
      service: 'Mindfulness & Somatic Grounding',
      serviceUrl: 'service-mindfulness.html',
      frequency: '50-min weekly or bi-weekly',
      format: 'Garden Studio or Telehealth',
      opening: 'Wednesday at 11:00 AM',
      therapist: 'Dr. Maya Patel, Ph.D.',
      therapistRole: 'Neuropsychologist & Mindfulness Lead',
      therapistUrl: 'therapist-details.html',
      therapistImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      quote: '“When we cultivate stillness, we discover that clarity and wisdom were already waiting within us.”',
      description: 'Connect with your inner values, dissolve persistent imposter syndrome, and cultivate unconditional self-compassion through somatic awareness and intentional life design.'
    },
    teen: {
      badge: 'Recommended Pathway: Adolescent & Young Adult Mentorship',
      title: 'Safe Harbor for Academic & Emotional Stress',
      tagline: 'Relatable mentorship for academic burnout, social anxiety, and identity',
      service: 'Teen & Adolescent Psychotherapy',
      serviceUrl: 'service-teen-counseling.html',
      frequency: '45-min weekly sessions',
      format: 'Youth Loft or Secure App Video',
      opening: 'Tomorrow at 4:30 PM',
      therapist: 'James Thornton, LPC',
      therapistRole: 'Adolescent & Family Specialist',
      therapistUrl: 'therapist-details.html',
      therapistImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
      quote: '“Every young person deserves a space where their feelings are validated and their voice truly matters.”',
      description: 'A genuine, non-clinical environment where teens feel respected and truly heard. Equipping young minds with emotional vocabulary, confidence, and stress resilience.'
    },
    burnout: {
      badge: 'Recommended Pathway: Career Fatigue & High-Functioning Anxiety',
      title: 'Executive Nervous System Reset & Boundaries',
      tagline: 'Sustainable energy, boundary restoration, and holistic balance',
      service: 'Telehealth Video Sessions',
      serviceUrl: 'service-telehealth.html',
      frequency: '50-min flexible scheduling',
      format: 'Encrypted Telehealth (Global Access)',
      opening: 'This Thursday 5:00 PM',
      therapist: 'Dr. David Kim, M.D.',
      therapistRole: 'Board-Certified Psychiatrist',
      therapistUrl: 'therapist-details.html',
      therapistImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
      quote: '“Sustainable excellence requires honoring biological limits and creating authentic restorative margin.”',
      description: 'Specialized protocol for entrepreneurs, executives, and clinicians facing chronic exhaustion. Establish healthy boundaries, recover physical vitality, and rebuild meaning.'
    }
  };

  // Legacy aliases
  JOURNEY_DATA.family = JOURNEY_DATA.relationships;
  JOURNEY_DATA.transitions = JOURNEY_DATA.burnout;

  function initWellnessJourney() {
    const journeyBtns = document.querySelectorAll('.journey-btn, .journey-option-btn, [data-journey], [data-journey-key]');
    const resultCard = document.getElementById('journey-result-card') || document.getElementById('journey-recommendation-card');

    if (!journeyBtns.length) return;

    function renderPathway(key) {
      const data = JOURNEY_DATA[key] || JOURNEY_DATA.anxiety;

      // Update button active styles
      journeyBtns.forEach(btn => {
        const btnKey = btn.getAttribute('data-journey') || btn.getAttribute('data-journey-key');
        const isMatch = btnKey === key;

        if (isMatch) {
          btn.classList.add('active', 'border-[#D7B7A5]', 'bg-[#F8F6F1]', 'text-[#294657]', 'dark:bg-[#1e2d37]', 'dark:border-[#D7B7A5]', 'dark:text-[#F8F6F1]', 'shadow-sm');
          btn.classList.remove('bg-white', 'dark:bg-[#17232b]', 'border-[#EBF1F4]', 'dark:border-white/10', 'text-[#27343B]', 'dark:text-[#EBF1F4]');
        } else {
          btn.classList.remove('active', 'border-[#D7B7A5]', 'bg-[#F8F6F1]', 'text-[#294657]', 'dark:bg-[#1e2d37]', 'dark:border-[#D7B7A5]', 'dark:text-[#F8F6F1]', 'shadow-sm');
          btn.classList.add('bg-white', 'dark:bg-[#17232b]', 'border-[#EBF1F4]', 'dark:border-white/10', 'text-[#27343B]', 'dark:text-[#EBF1F4]');
        }
      });

      if (!resultCard) return;

      // Smooth transition
      resultCard.style.opacity = '0.35';
      resultCard.style.transform = 'translateY(4px)';

      setTimeout(() => {
        // Direct home-2 targets
        const badgeEl = document.getElementById('journey-badge');
        const titleEl = document.getElementById('journey-title');
        const descEl = document.getElementById('journey-description');
        const freqEl = document.getElementById('journey-frequency');
        const formatEl = document.getElementById('journey-format');
        const openEl = document.getElementById('journey-opening');
        const imgEl = document.getElementById('journey-therapist-img');
        const specEl = document.getElementById('journey-therapist-spec');
        const nameEl = document.getElementById('journey-therapist-name');
        const quoteEl = document.getElementById('journey-therapist-quote');

        if (badgeEl) badgeEl.textContent = data.badge;
        if (titleEl) titleEl.textContent = data.title;
        if (descEl) descEl.textContent = data.description;
        if (freqEl) freqEl.textContent = data.frequency;
        if (formatEl) formatEl.textContent = data.format;
        if (openEl) openEl.textContent = data.opening;
        if (imgEl) {
          imgEl.src = data.therapistImg;
          imgEl.alt = data.therapist;
        }
        if (specEl) specEl.textContent = data.therapistRole;
        if (nameEl) nameEl.textContent = data.therapist;
        if (quoteEl) quoteEl.innerHTML = `&ldquo;${data.quote.replace(/[“”"]/g, '')}&rdquo;`;

        // Update appointment booking button data attributes
        const bookBtn = resultCard.querySelector('.open-appointment-btn, .open-appointment-modal');
        if (bookBtn) {
          bookBtn.setAttribute('data-service', data.service);
          bookBtn.setAttribute('data-therapist', data.therapist);
        }

        // Legacy container support
        const legacyContainer = document.getElementById('journey-recommendation-card');
        if (legacyContainer && !badgeEl) {
          legacyContainer.innerHTML = `
            <div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#17232b] border border-[#8FAFC0]/30 shadow-xl space-y-6">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-white/10">
                <div>
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FAFC0]/15 text-[#294657] dark:text-[#8FAFC0] text-xs font-bold uppercase tracking-wider">
                    <i class="fas fa-sparkles"></i> Recommended Pathway
                  </span>
                  <h3 class="font-heading text-2xl sm:text-3xl font-bold text-[#294657] dark:text-white mt-2">${data.title}</h3>
                  <p class="text-xs text-stone-500 dark:text-stone-400 mt-1">${data.tagline}</p>
                </div>
                <div class="text-right rtl:text-left shrink-0">
                  <span class="text-xs text-stone-400">Next Available Intake</span>
                  <p class="text-xs font-bold text-[#D7B7A5] flex items-center sm:justify-end gap-1"><i class="far fa-clock"></i> ${data.opening}</p>
                </div>
              </div>

              <p class="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">${data.description}</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <a href="${data.therapistUrl}" class="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F6F1]/70 dark:bg-[#11191f]/70 border border-stone-200/60 dark:border-white/5 hover:border-[#D7B7A5]/50 hover:shadow-md transition-all group" title="View ${data.therapist} Profile">
                  <img src="${data.therapistImg}" alt="${data.therapist}" class="w-14 h-14 rounded-2xl object-cover border-2 border-[#8FAFC0]/60 shadow-sm group-hover:scale-105 transition-transform">
                  <div>
                    <span class="text-[10px] font-bold text-[#D7B7A5] uppercase tracking-wider">Matched Clinician</span>
                    <h4 class="font-heading text-base font-bold text-[#294657] dark:text-white group-hover:text-[#D7B7A5] transition-colors flex items-center gap-1.5">
                      ${data.therapist} <i class="fas fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </h4>
                    <p class="text-xs text-stone-500 dark:text-stone-400">${data.therapistRole}</p>
                  </div>
                </a>

                <a href="${data.serviceUrl}" class="flex flex-col justify-center p-4 rounded-2xl bg-[#F8F6F1]/70 dark:bg-[#11191f]/70 border border-stone-200/60 dark:border-white/5 hover:border-[#D7B7A5]/50 hover:shadow-md transition-all group" title="Explore ${data.service} Details">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold text-[#294657] dark:text-[#8FAFC0] uppercase tracking-wider">Service &amp; Modality</span>
                    <span class="text-[10px] font-bold text-[#D7B7A5] group-hover:underline flex items-center gap-1">Details <i class="fas fa-arrow-right text-[9px]"></i></span>
                  </div>
                  <h4 class="text-xs font-bold text-stone-800 dark:text-white mt-0.5 group-hover:text-[#D7B7A5] transition-colors">${data.service}</h4>
                  <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5"><i class="fas fa-shield-alt text-[#8FAFC0] mr-1"></i> ${data.format}</p>
                </a>
              </div>

              <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                  <i class="fas fa-check-circle text-[#8FAFC0]"></i> No referral needed &bull; 100% HIPAA protected
                </div>
                <button type="button" class="open-appointment-modal w-full sm:w-auto px-8 h-12 rounded-full bg-[#D7B7A5] hover:bg-[#b8937f] text-white font-bold text-xs shadow-lg shadow-[#D7B7A5]/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2" data-service="${data.service}" data-therapist="${data.therapist}">
                  <span>Book This Pathway</span>
                  <i class="fas fa-arrow-right text-xs"></i>
                </button>
              </div>
            </div>
          `;
        }

        resultCard.style.opacity = '1';
        resultCard.style.transform = 'translateY(0)';
      }, 150);
    }

    journeyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const key = btn.getAttribute('data-journey') || btn.getAttribute('data-journey-key');
        if (key) {
          renderPathway(key);
        }
      });
    });

    // Default selection
    renderPathway('anxiety');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWellnessJourney);
  } else {
    initWellnessJourney();
  }
})();
