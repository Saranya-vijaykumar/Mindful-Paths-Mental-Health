/**
 * Mindful Paths — Client Mood Journal Engine
 * Connects mood-journal.html, dashboard.html, and home-2.html preview
 * Features: Full emoji selection, intensity slider, trigger tags, persistent storage, history cards, delete entries
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'mindfulpaths_mood_logs';

  const MOOD_DATA = {
    great: { label: 'Great', emoji: '😊', score: 5, color: '#8FAFC0', badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300', desc: 'Positive, energized & fulfilled' },
    good: { label: 'Good', emoji: '🙂', score: 4, color: '#7BAE7F', badgeBg: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300', desc: 'Calm, grounded & content' },
    okay: { label: 'Okay', emoji: '😐', score: 3, color: '#D4A373', badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300', desc: 'Neutral, balanced & steady' },
    low: { label: 'Low', emoji: '😔', score: 2, color: '#D7B7A5', badgeBg: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300', desc: 'Fatigued, vulnerable or reflective' },
    difficult: { label: 'Difficult', emoji: '😣', score: 1, color: '#9E2A2B', badgeBg: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300', desc: 'Overwhelmed, distressed or anxious' }
  };

  const DEFAULT_SAMPLE_LOGS = [
    {
      id: 1725900000001,
      mood: 'good',
      moodInfo: MOOD_DATA.good,
      intensity: 7,
      triggers: ['Mindfulness', 'Work & Career'],
      reflection: 'Practiced 4-4-4 diaphragmatic breathing before my morning review. Felt centered and capable throughout.',
      date: 'Sep 9, 2026',
      time: '09:30 AM'
    },
    {
      id: 1725800000002,
      mood: 'okay',
      moodInfo: MOOD_DATA.okay,
      intensity: 5,
      triggers: ['Sleep & Rest', 'Physical Health'],
      reflection: 'A bit fatigued after restless sleep, but took a gentle 20-minute walk outside which eased tension in my shoulders.',
      date: 'Sep 8, 2026',
      time: '04:15 PM'
    }
  ];

  function getLogs() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Error parsing mood logs:', e);
    }
    // Initialize with sample logs if empty
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SAMPLE_LOGS));
    } catch (e) {}
    return DEFAULT_SAMPLE_LOGS.slice();
  }

  function saveLog(rawMoodKey, reflection = '', intensity = 5, triggers = []) {
    const cleanKey = (rawMoodKey || 'good').toLowerCase().trim();
    const moodInfo = MOOD_DATA[cleanKey] || MOOD_DATA.good;
    const logs = getLogs();

    const now = new Date();
    const entry = {
      id: Date.now(),
      mood: cleanKey,
      moodInfo: moodInfo,
      intensity: parseInt(intensity, 10) || 5,
      triggers: Array.isArray(triggers) ? triggers : [],
      reflection: (reflection || '').trim(),
      date: now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    logs.unshift(entry);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(logs.slice(0, 50)));
    } catch (e) {}
    return entry;
  }

  function deleteLog(id) {
    let logs = getLogs();
    logs = logs.filter(item => String(item.id) !== String(id));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
    } catch (e) {}
    return logs;
  }

  function clearAllLogs() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    } catch (e) {}
  }

  function initMoodJournal() {
    let selectedMood = 'okay';
    let selectedTriggers = new Set();
    let currentIntensity = 5;

    // 1. Selector buttons on mood-journal.html
    const selectorContainer = document.getElementById('mood-journal-selector');
    const moodBtns = selectorContainer 
      ? selectorContainer.querySelectorAll('button') 
      : document.querySelectorAll('.journal-mood-btn, .mood-selector-btn, [data-mood]');

    const statusBanner = document.getElementById('mood-status-banner');
    const intensitySlider = document.getElementById('mood-intensity-slider');
    const intensityValueDisplay = document.getElementById('intensity-value-display');
    const noteInput = document.getElementById('journal-notes-input') || document.getElementById('mood-reflection-input');
    const noteCharCount = document.getElementById('note-char-count');
    const submitBtn = document.getElementById('journal-submit-btn') || document.getElementById('save-mood-entry-btn');
    const historyList = document.getElementById('journal-history-list') || document.getElementById('mood-history-list');
    const clearHistoryBtn = document.getElementById('clear-mood-history-btn');

    // Stats Elements
    const statTotal = document.getElementById('stat-total-logs');
    const statFrequent = document.getElementById('stat-frequent-mood');
    const statAvgIntensity = document.getElementById('stat-avg-intensity');

    function updateSelectedMoodUI(moodKey) {
      const cleanKey = (moodKey || 'okay').toLowerCase().trim();
      selectedMood = cleanKey;
      const info = MOOD_DATA[cleanKey] || MOOD_DATA.okay;

      moodBtns.forEach(btn => {
        const btnMood = (btn.getAttribute('data-mood') || '').toLowerCase().trim();
        const labelSpan = btn.querySelector('.mood-label') || btn.querySelector('span:last-child');
        const checkIcon = btn.querySelector('.mood-check-icon');

        if (btnMood === cleanKey) {
          // ACTIVE STYLING (Distinct border, high-contrast background, focus ring, scale)
          btn.className = 'journal-mood-btn active flex-1 min-w-[70px] sm:min-w-[90px] py-4 px-3 rounded-2xl border-2 border-[#D7B7A5] bg-[#D7B7A5]/20 dark:bg-[#1e2d37] ring-2 ring-[#D7B7A5] text-center transition-all flex flex-col items-center justify-center relative shadow-sm scale-105 cursor-pointer';
          if (labelSpan) {
            labelSpan.className = 'mood-label text-xs font-extrabold text-[#294657] dark:text-[#F8F6F1] mt-2 block';
          }
          if (checkIcon) checkIcon.classList.remove('hidden');
        } else {
          // INACTIVE STYLING (Consistent warm cream card with subtle border)
          btn.className = 'journal-mood-btn flex-1 min-w-[70px] sm:min-w-[90px] py-4 px-3 rounded-2xl border-2 border-[#EBF1F4] dark:border-white/10 hover:border-[#8FAFC0] bg-[#F8F6F1] dark:bg-[#1e2d37] text-center transition-all flex flex-col items-center justify-center relative cursor-pointer opacity-85 hover:opacity-100';
          if (labelSpan) {
            labelSpan.className = 'mood-label text-xs font-bold text-[#27343B]/80 dark:text-[#7d8d96] mt-2 block';
          }
          if (checkIcon) checkIcon.classList.add('hidden');
        }
      });

      if (statusBanner) {
        statusBanner.innerHTML = `<span class="text-xl">${info.emoji}</span> <span>Currently selected: <strong class="text-[#294657] dark:text-[#F8F6F1]">${info.label}</strong> — ${info.desc}</span>`;
      }
    }

    moodBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const mood = btn.getAttribute('data-mood');
        if (mood) {
          updateSelectedMoodUI(mood);
        }
      });
    });

    // 2. Trigger Pills selection
    document.querySelectorAll('.trigger-tag-btn').forEach(tagBtn => {
      tagBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const tag = tagBtn.getAttribute('data-tag');
        if (!tag) return;

        if (selectedTriggers.has(tag)) {
          selectedTriggers.delete(tag);
          tagBtn.classList.remove('bg-[#D7B7A5]', 'text-white', 'border-[#D7B7A5]');
          tagBtn.classList.add('bg-[#F8F6F1]', 'dark:bg-[#1e2d37]', 'text-[#27343B]', 'dark:text-[#F8F6F1]', 'border-[#EBF1F4]', 'dark:border-white/10');
          const icon = tagBtn.querySelector('.tag-check-icon');
          if (icon) icon.classList.add('hidden');
        } else {
          selectedTriggers.add(tag);
          tagBtn.classList.add('bg-[#D7B7A5]', 'text-white', 'border-[#D7B7A5]');
          tagBtn.classList.remove('bg-[#F8F6F1]', 'dark:bg-[#1e2d37]', 'text-[#27343B]', 'dark:text-[#F8F6F1]', 'border-[#EBF1F4]', 'dark:border-white/10');
          const icon = tagBtn.querySelector('.tag-check-icon');
          if (icon) icon.classList.remove('hidden');
        }
      });
    });

    // 3. Intensity Slider listener
    if (intensitySlider && intensityValueDisplay) {
      intensitySlider.addEventListener('input', () => {
        currentIntensity = parseInt(intensitySlider.value, 10);
        let label = 'Moderate';
        if (currentIntensity <= 3) label = 'Gentle / Mild';
        else if (currentIntensity <= 6) label = 'Balanced / Moderate';
        else if (currentIntensity <= 8) label = 'Elevated / Strong';
        else label = 'Intense / Peak';
        intensityValueDisplay.textContent = `Level ${currentIntensity} / 10 (${label})`;
      });
    }

    // 4. Character count for notes
    if (noteInput && noteCharCount) {
      noteInput.addEventListener('input', () => {
        const len = noteInput.value.length;
        noteCharCount.textContent = `${len} / 500`;
        if (len > 500) noteCharCount.classList.add('text-red-500');
        else noteCharCount.classList.remove('text-red-500');
      });
    }

    // 5. Render History & Analytics
    function renderStats(logs) {
      if (!logs.length) {
        if (statTotal) statTotal.textContent = '0';
        if (statFrequent) statFrequent.textContent = 'None';
        if (statAvgIntensity) statAvgIntensity.textContent = '0 / 10';
        return;
      }

      if (statTotal) statTotal.textContent = `${logs.length}`;

      // Frequency calculation
      const counts = {};
      let totalIntensity = 0;
      logs.forEach(l => {
        counts[l.mood] = (counts[l.mood] || 0) + 1;
        totalIntensity += (l.intensity || 5);
      });

      let topMood = 'good';
      let maxCount = 0;
      for (const m in counts) {
        if (counts[m] > maxCount) {
          maxCount = counts[m];
          topMood = m;
        }
      }

      const topInfo = MOOD_DATA[topMood] || MOOD_DATA.good;
      if (statFrequent) {
        statFrequent.innerHTML = `<span class="inline-flex items-center gap-1.5">${topInfo.emoji} ${topInfo.label}</span>`;
      }

      if (statAvgIntensity) {
        const avg = (totalIntensity / logs.length).toFixed(1);
        statAvgIntensity.textContent = `${avg} / 10`;
      }
    }

    function renderHistory() {
      if (!historyList) return;
      const logs = getLogs();
      renderStats(logs);

      if (!logs.length) {
        historyList.innerHTML = `
          <div class="p-8 text-center rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-2">
            <div class="w-12 h-12 rounded-full bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] flex items-center justify-center mx-auto text-xl">
              <i class="far fa-smile"></i>
            </div>
            <h4 class="font-heading text-base font-bold text-[#294657] dark:text-[#F8F6F1]">Your sanctuary is peaceful</h4>
            <p class="text-xs text-[#27343B]/70 dark:text-[#7d8d96]">No reflections logged yet. Record your daily emotional pulse above to start tracking your journey.</p>
          </div>
        `;
        return;
      }

      historyList.innerHTML = logs.map(log => {
        const info = log.moodInfo || MOOD_DATA[log.mood] || MOOD_DATA.good;
        const triggerPills = (log.triggers || []).map(t => 
          `<span class="px-2.5 py-0.5 rounded-full bg-white dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/10 text-[10px] font-semibold text-[#294657] dark:text-[#8FAFC0]">${t}</span>`
        ).join(' ');

        return `
          <div class="p-5 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-3 shadow-sm hover:shadow-md transition-shadow relative group">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-3xl">${info.emoji}</span>
                <div>
                  <div class="flex items-center gap-2">
                    <h4 class="font-heading text-sm font-bold text-[#294657] dark:text-[#F8F6F1]">${info.label}</h4>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${info.badgeBg || 'bg-gray-100 text-gray-800'}">
                      Intensity ${log.intensity || 5}/10
                    </span>
                  </div>
                  <span class="text-[11px] text-[#27343B]/60 dark:text-[#7d8d96]">${log.date} &bull; ${log.time}</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" class="delete-log-btn text-[#27343B]/40 hover:text-red-500 dark:text-white/40 dark:hover:text-red-400 p-2 transition-colors" data-delete-id="${log.id}" title="Delete this reflection">
                  <i class="far fa-trash-alt text-xs"></i>
                </button>
              </div>
            </div>

            ${log.triggers && log.triggers.length > 0 ? `
              <div class="flex flex-wrap gap-1.5 pt-1">
                ${triggerPills}
              </div>
            ` : ''}

            ${log.reflection ? `
              <div class="p-3.5 rounded-2xl bg-[#F8F6F1] dark:bg-[#11191f] border border-[#EBF1F4] dark:border-white/5 text-xs text-[#27343B] dark:text-[#EBF1F4] leading-relaxed">
                ${log.reflection}
              </div>
            ` : ''}
          </div>
        `;
      }).join('');

      // Wire delete buttons
      historyList.querySelectorAll('.delete-log-btn').forEach(delBtn => {
        delBtn.addEventListener('click', () => {
          const id = delBtn.getAttribute('data-delete-id');
          if (id) {
            deleteLog(id);
            renderHistory();
            if (window.showToast) window.showToast('Reflection removed from journal.', 'info');
          }
        });
      });
    }

    // 6. Submit reflection handler
    if (submitBtn) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const text = noteInput ? noteInput.value : '';
        const triggers = Array.from(selectedTriggers);
        
        // Save
        const newEntry = saveLog(selectedMood, text, currentIntensity, triggers);

        // Reset composer inputs
        if (noteInput) {
          noteInput.value = '';
          if (noteCharCount) noteCharCount.textContent = '0 / 500';
        }
        selectedTriggers.clear();
        document.querySelectorAll('.trigger-tag-btn').forEach(tb => {
          tb.classList.remove('bg-[#D7B7A5]', 'text-white', 'border-[#D7B7A5]');
          tb.classList.add('bg-[#F8F6F1]', 'dark:bg-[#1e2d37]', 'text-[#27343B]', 'dark:text-[#F8F6F1]', 'border-[#EBF1F4]', 'dark:border-white/10');
          const icon = tb.querySelector('.tag-check-icon');
          if (icon) icon.classList.add('hidden');
        });

        if (intensitySlider) {
          intensitySlider.value = '5';
          if (intensityValueDisplay) intensityValueDisplay.textContent = 'Level 5 / 10 (Balanced / Moderate)';
          currentIntensity = 5;
        }

        // Animate button success
        const origHtml = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-check mr-1.5"></i> <span>Saved to Sanctuary!</span>';
        submitBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-700');
        submitBtn.classList.remove('bg-[#D7B7A5]', 'hover:bg-[#c5a390]');

        setTimeout(() => {
          submitBtn.innerHTML = origHtml;
          submitBtn.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
          submitBtn.classList.add('bg-[#D7B7A5]', 'hover:bg-[#c5a390]');
        }, 1800);

        renderHistory();

        if (window.showToast) {
          const info = newEntry.moodInfo || MOOD_DATA[selectedMood] || MOOD_DATA.good;
          window.showToast(`${info.emoji} ${info.label} reflection saved to your Sanctuary.`, 'success');
        }
      });
    }

    // 7. Clear all history
    if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Are you sure you want to clear your local mood reflection history?')) {
          clearAllLogs();
          renderHistory();
          if (window.showToast) window.showToast('Reflection history cleared.', 'info');
        }
      });
    }

    // 8. Dashboard quick mood logger sync
    const dashMoodSave = document.getElementById('dashboard-mood-save');
    const dashMoodNote = document.getElementById('dashboard-mood-note');
    let dashSelectedMood = 'good';

    document.querySelectorAll('.mood-opt').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.mood-opt').forEach(o => {
          o.classList.remove('p-1.5', 'rounded-xl', 'bg-[#D7B7A5]/20', 'border', 'border-[#D7B7A5]', 'scale-125');
        });
        opt.classList.add('p-1.5', 'rounded-xl', 'bg-[#D7B7A5]/20', 'border', 'border-[#D7B7A5]', 'scale-125');
        dashSelectedMood = (opt.getAttribute('data-mood') || 'good').toLowerCase();
      });
    });

    if (dashMoodSave) {
      dashMoodSave.addEventListener('click', (e) => {
        e.preventDefault();
        const text = dashMoodNote ? dashMoodNote.value : '';
        saveLog(dashSelectedMood, text, 5, ['Quick Check-in']);
        if (dashMoodNote) dashMoodNote.value = '';
        renderHistory();
        if (window.showToast) {
          window.showToast('Daily reflection saved to your Sanctuary timeline.', 'success');
        }
      });
    }

    // 9. Home-2 preview mood emojis
    document.querySelectorAll('.mock-mood-emoji, [data-home-mood]').forEach(emojiEl => {
      emojiEl.addEventListener('click', () => {
        const mood = (emojiEl.getAttribute('data-home-mood') || 'good').toLowerCase();
        saveLog(mood, 'Quick check-in from The Wellness Journey', 5, ['Home Check-in']);
        if (window.showToast) {
          window.showToast('Mood logged! You can review past trends in your Client Sanctuary.', 'info');
        }
      });
    });

    // Initialize with "Okay" or default selection
    updateSelectedMoodUI('okay');
    renderHistory();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMoodJournal);
  } else {
    initMoodJournal();
  }
})();
