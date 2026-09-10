/**
 * Mindful Paths — Counselor Messaging Interface
 * Asynchronous encrypted check-ins with realistic clinician simulated responses
 */

(function () {
  'use strict';

  function initMessaging() {
    const threadContainer = document.getElementById('chat-messages-stream') || document.getElementById('chat-thread');
    const composerForm = document.getElementById('chat-composer-form');
    const composerInput = document.getElementById('chat-input-text');
    const sendBtn = document.getElementById('chat-send-btn');
    const quickReplies = document.querySelectorAll('.quick-reply-pill');

    if (!threadContainer || !composerInput) return;

    function sendMessage(text) {
      if (!text || !text.trim()) return;

      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Append Client Message
      const clientMsg = document.createElement('div');
      clientMsg.className = 'flex justify-end gap-3 items-end animate-fade-in';
      clientMsg.innerHTML = `
        <div class="space-y-1 max-w-md">
          <div class="p-3.5 rounded-2xl rounded-br-sm bg-[#294657] text-white text-xs leading-relaxed shadow-sm font-normal">
            ${text}
          </div>
          <div class="flex justify-end items-center gap-1 text-[10px] text-stone-400">
            <span>${timeStr}</span>
            <i class="fas fa-check-double text-[#8FAFC0]"></i>
          </div>
        </div>
      `;
      threadContainer.appendChild(clientMsg);
      threadContainer.scrollTop = threadContainer.scrollHeight;

      composerInput.value = '';

      // Simulated Clinician Reply after 1.2s
      setTimeout(() => {
        const counselorMsg = document.createElement('div');
        counselorMsg.className = 'flex items-end gap-3 animate-fade-in';
        counselorMsg.innerHTML = `
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80" alt="Dr. Sarah Jenkins" class="w-8 h-8 rounded-full object-cover border-2 border-[#8FAFC0]/40 shadow-sm shrink-0">
          <div class="space-y-1 max-w-md">
            <div class="p-3.5 rounded-2xl rounded-bl-sm bg-white dark:bg-[#17232b] text-[#294657] dark:text-[#F8F6F1] border border-[#EBF1F4] dark:border-white/10 text-xs leading-relaxed shadow-sm font-normal">
              Thank you for sharing this with me, Alex. I hear how much you've been carrying this week. We will gently explore practical grounding anchors for this during our upcoming session tomorrow. Remember to take a mindful breath when you feel the surge.
            </div>
            <span class="text-[10px] text-stone-400 pl-1">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} &bull; Encrypted Portal</span>
          </div>
        `;
        threadContainer.appendChild(counselorMsg);
        threadContainer.scrollTop = threadContainer.scrollHeight;

        if (window.showToast) {
          window.showToast('Dr. Sarah Jenkins replied to your message in the sanctuary.', 'info');
        }
      }, 1200);
    }

    if (composerForm) {
      composerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sendMessage(composerInput.value);
      });
    }

    if (sendBtn) {
      sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sendMessage(composerInput.value);
      });
    }

    composerInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage(composerInput.value);
      }
    });

    quickReplies.forEach(pill => {
      pill.addEventListener('click', () => {
        sendMessage(pill.textContent.trim());
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMessaging);
  } else {
    initMessaging();
  }
})();
