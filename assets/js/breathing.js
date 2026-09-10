/**
 * Mindful Paths — Interactive "Take a Breath" Tool
 * 4-4-4-4 Clinical Box Breathing Engine
 * Works across home-2.html, resources.html, and all demo widgets
 */

(function () {
  'use strict';

  let breathingActive = false;
  let timerInterval = null;
  let currentSeconds = 4;
  let currentPhaseIndex = 0;
  let cycleCount = 0;

  const PHASES = [
    { name: 'Inhale Slowly', prompt: 'Fill your lungs with cool, calming air', scaleClass: 'scale-115', auraClass: 'scale-125 bg-[#8FAFC0]/35' },
    { name: 'Hold Breath', prompt: 'Remain centered and peaceful in stillness', scaleClass: 'scale-115', auraClass: 'scale-120 bg-[#8FAFC0]/30' },
    { name: 'Exhale Gently', prompt: 'Release all tension, hurry, and stress', scaleClass: 'scale-90', auraClass: 'scale-90 bg-[#294657]/20' },
    { name: 'Hold Empty', prompt: 'Rest calmly before the next gentle breath', scaleClass: 'scale-90', auraClass: 'scale-85 bg-[#294657]/15' }
  ];

  function initBreathingTool() {
    const circle = document.getElementById('breathing-circle');
    const aura = document.getElementById('breathing-aura');
    const stageEl = document.getElementById('breathing-stage') || document.getElementById('breathing-phase-text');
    const timerEl = document.getElementById('breathing-timer') || document.getElementById('breathing-timer-text');
    const cyclesEl = document.getElementById('breathing-cycles') || document.getElementById('breathing-cycles-completed');
    const startBtn = document.getElementById('breathing-start-btn') || document.getElementById('breathing-toggle-btn');
    const resetBtn = document.getElementById('breathing-reset-btn');

    if (!circle || !startBtn) return;

    function updateVisuals() {
      const p = PHASES[currentPhaseIndex];
      if (stageEl) stageEl.textContent = p.name;
      if (timerEl) timerEl.textContent = `${currentSeconds}s`;
      if (cyclesEl) {
        if (cyclesEl.id === 'breathing-cycles') {
          cyclesEl.textContent = `Cycle ${cycleCount}/4`;
        } else {
          cyclesEl.textContent = cycleCount;
        }
      }

      if (circle) {
        circle.classList.remove('scale-115', 'scale-90', 'scale-125');
        circle.classList.add(p.scaleClass);
      }

      if (aura) {
        aura.className = `absolute inset-0 rounded-full blur-xl transition-all duration-1000 transform ${p.auraClass}`;
      }
    }

    function tick() {
      if (currentSeconds > 1) {
        currentSeconds--;
        if (timerEl) timerEl.textContent = `${currentSeconds}s`;
      } else {
        currentSeconds = 4;
        currentPhaseIndex = (currentPhaseIndex + 1) % PHASES.length;

        if (currentPhaseIndex === 0) {
          cycleCount++;
          if (cycleCount === 4 && window.showToast) {
            window.showToast('Wonderful work! You have completed 4 full mindful cycles of box breathing.', 'success', 5000);
          }
        }

        updateVisuals();
      }
    }

    function start() {
      breathingActive = true;
      startBtn.innerHTML = '<i class="fas fa-pause mr-1.5"></i> Pause Breathing';
      startBtn.classList.remove('bg-[#D7B7A5]');
      startBtn.classList.add('bg-[#294657]');
      updateVisuals();
      timerInterval = setInterval(tick, 1000);
    }

    function pause() {
      breathingActive = false;
      clearInterval(timerInterval);
      startBtn.innerHTML = '<i class="fas fa-play mr-1.5"></i> Resume Breathing';
      startBtn.classList.remove('bg-[#294657]');
      startBtn.classList.add('bg-[#D7B7A5]');
    }

    function reset() {
      breathingActive = false;
      clearInterval(timerInterval);
      currentSeconds = 4;
      currentPhaseIndex = 0;
      cycleCount = 0;

      startBtn.innerHTML = '<i class="fas fa-play mr-1.5"></i> Begin 4-4-4 Breathing';
      startBtn.classList.remove('bg-[#294657]');
      startBtn.classList.add('bg-[#D7B7A5]');

      if (stageEl) stageEl.textContent = 'Ready';
      if (timerEl) timerEl.textContent = 'Press Start Below';
      if (cyclesEl) {
        if (cyclesEl.id === 'breathing-cycles') {
          cyclesEl.textContent = 'Cycle 0/4';
        } else {
          cyclesEl.textContent = '0';
        }
      }

      if (circle) {
        circle.classList.remove('scale-115', 'scale-125');
        circle.classList.add('scale-90');
      }

      if (aura) {
        aura.className = 'absolute inset-0 rounded-full bg-[#8FAFC0]/20 blur-xl transition-transform duration-1000 transform scale-90';
      }
    }

    startBtn.addEventListener('click', () => {
      if (breathingActive) pause();
      else start();
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', reset);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBreathingTool);
  } else {
    initBreathingTool();
  }
})();
