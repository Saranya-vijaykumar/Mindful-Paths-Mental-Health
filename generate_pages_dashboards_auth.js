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

console.log('Generating Dashboards, Auth, 404, and Maintenance pages...');

// ==========================================
// 12. ADMIN-DASHBOARD.HTML (Clinician & Practice Management)
// ==========================================
function buildAdminDashboard() {
  const adminGuardScript = `
  <!-- Early Auth Guard: Clinician Workspace requires authentication -->
  <script>
    (function() {
      try {
        var user = JSON.parse(localStorage.getItem('calmind_auth_user'));
        if (!user || !user.email) {
          window.location.replace('login.html?redirect=admin-dashboard.html&reason=unauthorized');
        }
      } catch(e) {
        window.location.replace('login.html?redirect=admin-dashboard.html&reason=unauthorized');
      }
    })();
  </script>
`;

  const content = `
<main class="flex-grow py-8 bg-slate-100 dark:bg-slate-950">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
    
    <!-- Top Bar -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div class="flex items-center gap-4">
        <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins" class="w-14 h-14 rounded-2xl object-cover border-2 border-primary-500">
        <div>
          <div class="flex items-center gap-2">
            <h1 id="clinician-display-name" class="font-heading text-xl font-bold text-slate-900 dark:text-white">Clinician Workspace: Dr. Sarah Jenkins</h1>
            <span class="px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-[10px] font-bold border border-primary-200 dark:border-primary-800">Practice Director</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400">Manhattan Flagship Suite &bull; Today's Schedule: 6 Sessions (2 In-Person, 4 Telehealth)</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <button type="button" class="open-appointment-modal px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow transition-all">
          <i class="fas fa-plus mr-1.5"></i> Schedule Patient
        </button>
        <a href="client-dashboard.html" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 transition-colors">
          View Client Portal
        </a>
        <button type="button" id="auth-logout-btn" class="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 font-bold text-xs border border-rose-500/20 flex items-center gap-1.5 transition-all" title="Sign out of Clinician Workspace">
          <i class="fas fa-sign-out-alt"></i> Sign Out
        </button>
      </div>
    </div>

    <!-- 4 KPI Metrics -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs text-slate-500 font-bold uppercase tracking-wider">Active Caseload</span>
          <div class="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center text-sm">
            <i class="fas fa-users"></i>
          </div>
        </div>
        <p class="font-heading text-3xl font-extrabold text-slate-900 dark:text-white" data-counter-target="38">38</p>
        <p class="text-[11px] text-teal-600 font-semibold"><i class="fas fa-arrow-up mr-1"></i> +4 new intakes this month</p>
      </div>

      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs text-slate-500 font-bold uppercase tracking-wider">Sessions This Week</span>
          <div class="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm">
            <i class="fas fa-calendar-check"></i>
          </div>
        </div>
        <p class="font-heading text-3xl font-extrabold text-slate-900 dark:text-white" data-counter-target="24">24</p>
        <p class="text-[11px] text-indigo-600 font-semibold">100% capacity utilization</p>
      </div>

      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs text-slate-500 font-bold uppercase tracking-wider">Clinical Progress</span>
          <div class="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm">
            <i class="fas fa-chart-line"></i>
          </div>
        </div>
        <p class="font-heading text-3xl font-extrabold text-emerald-600" data-counter-target="96" data-counter-suffix="%">96%</p>
        <p class="text-[11px] text-slate-500">Based on PHQ-9 symptom decreases</p>
      </div>

      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs text-slate-500 font-bold uppercase tracking-wider">Superbill Claims</span>
          <div class="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm">
            <i class="fas fa-file-invoice-dollar"></i>
          </div>
        </div>
        <p class="font-heading text-3xl font-extrabold text-slate-900 dark:text-white" data-counter-target="42">42</p>
        <p class="text-[11px] text-emerald-600 font-semibold"><i class="fas fa-check-circle mr-1"></i> All batches generated</p>
      </div>

    </div>

    <!-- Today's Appointment Roster Table -->
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-sm overflow-hidden">
      <div class="flex items-center justify-between">
        <h2 class="font-heading text-lg font-bold text-slate-900 dark:text-white">Today's Appointment Schedule</h2>
        <span class="text-xs text-slate-500">September 6, 2026 &bull; Eastern Time</span>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left rtl:text-right text-xs">
          <thead>
            <tr class="border-b border-slate-100 dark:border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
              <th class="py-3 px-4">Time Slot</th>
              <th class="py-3 px-4">Patient Name</th>
              <th class="py-3 px-4">Modality / Service</th>
              <th class="py-3 px-4">Format</th>
              <th class="py-3 px-4">Status</th>
              <th class="py-3 px-4 text-right rtl:text-left">Clinical Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
            <tr>
              <td class="py-3.5 px-4 font-bold text-slate-900 dark:text-white">09:00 AM</td>
              <td class="py-3.5 px-4 font-semibold">Robert S.</td>
              <td class="py-3.5 px-4">EMDR / Trauma Protocol (Phase 4)</td>
              <td class="py-3.5 px-4"><span class="px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300">Manhattan Suite 3</span></td>
              <td class="py-3.5 px-4"><span class="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-[10px]">Completed</span></td>
              <td class="py-3.5 px-4 text-right rtl:text-left"><button type="button" class="text-xs text-teal-600 font-bold hover:underline" onclick="window.showToast('Opened Clinical SOAP Notes for Robert S.', 'info')">View SOAP Note</button></td>
            </tr>
            <tr>
              <td class="py-3.5 px-4 font-bold text-slate-900 dark:text-white">11:00 AM</td>
              <td class="py-3.5 px-4 font-semibold">Amara K.</td>
              <td class="py-3.5 px-4">Executive CBT & Panic De-escalation</td>
              <td class="py-3.5 px-4"><span class="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">Telehealth Video</span></td>
              <td class="py-3.5 px-4"><span class="px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-bold text-[10px]">In Session</span></td>
              <td class="py-3.5 px-4 text-right rtl:text-left"><button type="button" class="px-3 py-1 rounded-lg bg-teal-600 text-white font-bold text-xs shadow hover:bg-teal-700" onclick="window.showToast('Joining Telehealth Room: Jenkins / Amara K.', 'success')">Join Video Room</button></td>
            </tr>
            <tr>
              <td class="py-3.5 px-4 font-bold text-slate-900 dark:text-white">02:30 PM</td>
              <td class="py-3.5 px-4 font-semibold">Michael & Claire D.</td>
              <td class="py-3.5 px-4">Couples Communication Intake</td>
              <td class="py-3.5 px-4"><span class="px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300">Manhattan Suite 1</span></td>
              <td class="py-3.5 px-4"><span class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[10px]">Confirmed</span></td>
              <td class="py-3.5 px-4 text-right rtl:text-left"><button type="button" class="text-xs text-teal-600 font-bold hover:underline" onclick="window.showToast('Loaded Pre-Intake Assessment for Michael & Claire', 'info')">Review Intake Form</button></td>
            </tr>
            <tr>
              <td class="py-3.5 px-4 font-bold text-slate-900 dark:text-white">04:30 PM</td>
              <td class="py-3.5 px-4 font-semibold">Jonathan P.</td>
              <td class="py-3.5 px-4">Social Anxiety & Exposure Homework</td>
              <td class="py-3.5 px-4"><span class="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">Telehealth Video</span></td>
              <td class="py-3.5 px-4"><span class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[10px]">Confirmed</span></td>
              <td class="py-3.5 px-4 text-right rtl:text-left"><button type="button" class="text-xs text-teal-600 font-bold hover:underline" onclick="window.showToast('Prepared Video Room Link for Jonathan P.', 'info')">Prepare Room</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</main>
`;

  return getHead('Clinician & Practice Workspace', 'Clinician dashboard, patient schedule, session management, and telemetry at Calmind.', adminGuardScript)
    + getHeader('admin-dashboard')
    + content
    + getFooter();
}

// ==========================================
// 13. CLIENT-DASHBOARD.HTML (Client Patient Portal)
// ==========================================
function buildClientDashboard() {
  const clientGuardScript = `
  <!-- Early Auth Guard: Client Dashboard requires authentication -->
  <script>
    (function() {
      try {
        var user = JSON.parse(localStorage.getItem('calmind_auth_user'));
        if (!user || !user.email) {
          window.location.replace('login.html?redirect=client-dashboard.html&reason=unauthorized');
        }
      } catch(e) {
        window.location.replace('login.html?redirect=client-dashboard.html&reason=unauthorized');
      }
    })();
  </script>
`;

  const content = `
<main class="flex-grow py-10 bg-[#FAF5F0] dark:bg-[#141110]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
    
    <!-- Welcome Header: Warm Non-Clinical Sanctuary -->
    <div class="bg-gradient-to-r from-espresso-900 via-espresso-800 to-primary-900 text-white p-6 sm:p-8 rounded-[2rem] shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/10">
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-full bg-primary-600/30 border border-primary-400/40 text-primary-300 text-xs font-bold uppercase tracking-wider">
            Confidential Client Sanctuary
          </span>
          <span class="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
            <i class="fas fa-shield-alt"></i> HIPAA Protected
          </span>
        </div>
        <h1 id="user-display-name" class="font-heading text-2xl sm:text-3xl font-bold">Welcome Back, Alex Morgan</h1>
        <p class="text-xs sm:text-sm text-sand-200 max-w-xl">
          Your next 1-on-1 psychotherapy session with <strong>Dr. Sarah Jenkins</strong> is scheduled for <strong>Tomorrow at 3:00 PM EST</strong>. (<span id="user-display-email" class="text-primary-300 font-semibold">alex@example.com</span>)
        </p>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <button type="button" class="open-appointment-modal px-5 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow-lg shadow-primary-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
          <i class="fas fa-calendar-plus"></i> Book a Session
        </button>
        <button type="button" class="px-5 py-3 rounded-full bg-white dark:bg-espresso-800 text-espresso-900 dark:text-white font-bold text-xs shadow-md hover:bg-sand-100 transition-all hover:scale-105 active:scale-95 flex items-center gap-2" onclick="window.showToast('Launching Secure Telehealth Video Sanctuary...', 'success')">
          <i class="fas fa-video text-primary-600"></i> Join Video Room
        </button>
        <button type="button" id="dashboard-logout-btn" class="px-5 py-3 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-400/30 font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2" title="Sign out of Client Sanctuary">
          <i class="fas fa-sign-out-alt"></i> Sign Out
        </button>
      </div>
    </div>

    <!-- Portal Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Left 7 Cols: Mood Journal, Shared Notes & Secure Messaging -->
      <div class="lg:col-span-7 space-y-6">
        
        <!-- 1. Private Mood Tracking & Emotional Journal -->
        <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-espresso-900 border border-sand-300/60 dark:border-white/10 shadow-sm space-y-5">
          <div class="flex items-center justify-between">
            <h2 class="font-heading text-lg font-bold text-espresso-900 dark:text-white flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm">
                <i class="fas fa-heartbeat"></i>
              </span>
              Daily Emotional Pulse & Private Mood Journal
            </h2>
            <span class="text-[11px] font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950 px-2.5 py-1 rounded-full">Private & Confidential</span>
          </div>
          <p class="text-xs text-slate-600 dark:text-sand-300">
            Check in with your nervous system. Track how you feel today to reveal patterns over time:
          </p>
          
          <div class="grid grid-cols-5 gap-2 text-center">
            <button type="button" class="p-3 rounded-2xl bg-sand-50 dark:bg-espresso-800 border border-sand-200 dark:border-white/5 hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-950/30 transition-all text-center space-y-1" onclick="window.showToast('Logged mood: Calm & Centered', 'success')">
              <span class="text-2xl block">😌</span>
              <span class="text-[10px] font-bold text-slate-700 dark:text-sand-200 block">Calm</span>
            </button>
            <button type="button" class="p-3 rounded-2xl bg-sand-50 dark:bg-espresso-800 border border-sand-200 dark:border-white/5 hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-950/30 transition-all text-center space-y-1" onclick="window.showToast('Logged mood: Grounded & Present', 'success')">
              <span class="text-2xl block">😊</span>
              <span class="text-[10px] font-bold text-slate-700 dark:text-sand-200 block">Grounded</span>
            </button>
            <button type="button" class="p-3 rounded-2xl bg-sand-50 dark:bg-espresso-800 border border-sand-200 dark:border-white/5 hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-950/30 transition-all text-center space-y-1" onclick="window.showToast('Logged mood: Neutral / Still', 'info')">
              <span class="text-2xl block">😐</span>
              <span class="text-[10px] font-bold text-slate-700 dark:text-sand-200 block">Neutral</span>
            </button>
            <button type="button" class="p-3 rounded-2xl bg-sand-50 dark:bg-espresso-800 border border-sand-200 dark:border-white/5 hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-950/30 transition-all text-center space-y-1" onclick="window.showToast('Logged mood: Anxious / Racing', 'info')">
              <span class="text-2xl block">😰</span>
              <span class="text-[10px] font-bold text-slate-700 dark:text-sand-200 block">Anxious</span>
            </button>
            <button type="button" class="p-3 rounded-2xl bg-sand-50 dark:bg-espresso-800 border border-sand-200 dark:border-white/5 hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-950/30 transition-all text-center space-y-1" onclick="window.showToast('Logged mood: Depleted / Heavy', 'info')">
              <span class="text-2xl block">😔</span>
              <span class="text-[10px] font-bold text-slate-700 dark:text-sand-200 block">Depleted</span>
            </button>
          </div>

          <!-- Private Reflection Journal Input -->
          <div class="pt-2 space-y-2">
            <label for="private-journal-entry" class="text-xs font-bold text-espresso-900 dark:text-white flex items-center justify-between">
              <span>Personal Reflection & Trigger Log</span>
              <span class="text-[10px] font-normal text-slate-400">Only visible to you & therapist</span>
            </label>
            <textarea id="private-journal-entry" rows="3" placeholder="Write any thoughts, stressors, triggers, or small victories you experienced today..." class="w-full p-3.5 rounded-2xl bg-sand-50 dark:bg-espresso-800 border border-sand-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"></textarea>
            <div class="flex justify-end">
              <button type="button" class="px-4 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow transition-transform hover:scale-105 active:scale-95" onclick="var el = document.getElementById('private-journal-entry'); if(el.value.trim()){window.showToast('Private journal reflection saved securely.', 'success'); el.value='';} else {window.showToast('Please type a thought before saving.', 'info');}">
                Save to Private Journal
              </button>
            </div>
          </div>
        </div>

        <!-- 2. Secure Counselor Messaging Center (Direct & Confidential) -->
        <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-espresso-900 border border-sand-300/60 dark:border-white/10 shadow-sm space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="font-heading text-lg font-bold text-espresso-900 dark:text-white flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm">
                <i class="fas fa-comment-medical"></i>
              </span>
              Secure Counselor Messaging
            </h2>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
              <i class="fas fa-lock"></i> End-to-End Encrypted
            </span>
          </div>
          
          <p class="text-xs text-slate-500 dark:text-sand-400">
            Confidential asynchronous communication with your clinician <strong>Dr. Sarah Jenkins, Psy.D.</strong>
          </p>

          <!-- Conversation Thread -->
          <div class="space-y-3 p-4 rounded-2xl bg-sand-50 dark:bg-espresso-800/60 border border-sand-200 dark:border-white/5 max-h-60 overflow-y-auto" id="chat-thread">
            <!-- Therapist Message -->
            <div class="flex items-start gap-3">
              <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah Jenkins" class="w-8 h-8 rounded-full object-cover shrink-0">
              <div class="space-y-1">
                <div class="p-3 rounded-2xl rounded-tl-none bg-white dark:bg-espresso-700 text-xs text-slate-800 dark:text-sand-100 shadow-sm">
                  <p class="font-bold text-[11px] text-primary-600 dark:text-primary-400 mb-0.5">Dr. Sarah Jenkins, Psy.D.</p>
                  Hi Alex, remember to try the 2 physiological sighs if you notice tension rising before your morning team meeting. Looking forward to our session tomorrow.
                </div>
                <span class="text-[10px] text-slate-400 pl-1">Yesterday &middot; 4:15 PM</span>
              </div>
            </div>

            <!-- Client Message -->
            <div class="flex items-start justify-end gap-3">
              <div class="space-y-1 text-right">
                <div class="p-3 rounded-2xl rounded-tr-none bg-primary-600 text-white text-xs shadow-sm text-left">
                  Thank you Dr. Jenkins! I practiced the double inhale breathing this morning and felt my heart rate slow right back down.
                </div>
                <span class="text-[10px] text-slate-400 pr-1">Today &middot; 10:22 AM &middot; Delivered</span>
              </div>
            </div>
          </div>

          <!-- Message Input -->
          <div class="flex items-center gap-2 pt-2">
            <input type="text" id="secure-message-input" placeholder="Type a secure, private message to Dr. Jenkins..." class="flex-grow p-3 rounded-full bg-sand-50 dark:bg-espresso-800 border border-sand-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-primary-500">
            <button type="button" class="px-5 h-10 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold shadow transition-transform hover:scale-105 active:scale-95 flex items-center gap-1.5 shrink-0" onclick="var mi = document.getElementById('secure-message-input'); if(mi.value.trim()){window.showToast('Secure message sent to Dr. Jenkins.', 'success'); mi.value='';} else {window.showToast('Please type a message first.', 'info');}">
              <i class="fas fa-paper-plane text-[11px]"></i> Send
            </button>
          </div>
        </div>

        <!-- 3. Shared Therapist Notes & Clinical Action Items -->
        <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-espresso-900 border border-sand-300/60 dark:border-white/10 shadow-sm space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="font-heading text-lg font-bold text-espresso-900 dark:text-white flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm">
                <i class="fas fa-clipboard-check"></i>
              </span>
              Shared Therapist Notes & Clinical Homework
            </h2>
            <span class="text-[11px] text-slate-500">Updated Sept 2, 2026</span>
          </div>

          <div class="p-5 rounded-2xl bg-sand-50 dark:bg-espresso-800/60 border border-sand-200 dark:border-white/5 space-y-3 text-xs text-slate-700 dark:text-sand-200">
            <div class="flex items-center justify-between border-b border-sand-200 dark:border-white/10 pb-2">
              <span class="font-bold text-espresso-900 dark:text-white">CBT Session Takeaways</span>
              <span class="text-primary-600 dark:text-primary-400 font-semibold">Clinician: Dr. Sarah Jenkins</span>
            </div>
            <p class="leading-relaxed">
              <strong>Core Reflection:</strong> <em>"Notice when your chest tightens during Monday morning executive standups. Do not fight the sensation; practice the 2 physiological sighs to discharge adrenalin before responding."</em>
            </p>
            <div class="pt-2 flex flex-wrap items-center gap-3">
              <a href="resources.html" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 font-bold text-[11px] hover:underline">
                <i class="fas fa-lungs"></i> Launch 4-4-4-4 Box Breathing
              </a>
              <span class="text-[11px] text-slate-500">Practice 2x daily</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Right 5 Cols: Upcoming Sessions & Superbill Receipts -->
      <div class="lg:col-span-5 space-y-6">
        
        <!-- 4. Upcoming Appointments Card -->
        <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-espresso-900 border border-sand-300/60 dark:border-white/10 shadow-sm space-y-5">
          <div class="flex items-center justify-between">
            <h2 class="font-heading text-lg font-bold text-espresso-900 dark:text-white flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm">
                <i class="fas fa-calendar-alt"></i>
              </span>
              Upcoming Appointments
            </h2>
            <span class="text-[11px] font-bold text-primary-600">2 Scheduled</span>
          </div>
          
          <div class="space-y-3">
            <!-- Confirmed Session -->
            <div class="p-4 rounded-2xl bg-primary-50/60 dark:bg-primary-950/40 border border-primary-200 dark:border-primary-800/60 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-primary-900 dark:text-primary-200">Tomorrow &middot; 3:00 PM EST</span>
                <span class="px-2.5 py-0.5 rounded-full bg-primary-600 text-white text-[10px] font-bold">Confirmed</span>
              </div>
              <p class="text-xs font-bold text-slate-900 dark:text-white">50-Min Cognitive Restructuring</p>
              <div class="flex items-center justify-between pt-1">
                <p class="text-[11px] text-slate-500 dark:text-sand-400">Dr. Sarah Jenkins &bull; Telehealth Video</p>
                <button type="button" class="text-primary-600 font-bold text-xs hover:underline" onclick="window.showToast('Telehealth session link sent to email.', 'info')">Link Ready</button>
              </div>
            </div>

            <!-- Future Session -->
            <div class="p-4 rounded-2xl bg-sand-50 dark:bg-espresso-800/60 border border-sand-200 dark:border-white/5 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-700 dark:text-sand-200">Sept 15, 2026 &middot; 3:00 PM EST</span>
                <span class="px-2.5 py-0.5 rounded-full bg-sand-200 dark:bg-espresso-700 text-slate-700 dark:text-sand-300 text-[10px] font-bold">Upcoming</span>
              </div>
              <p class="text-xs font-bold text-slate-900 dark:text-white">50-Min Panic De-escalation</p>
              <p class="text-[11px] text-slate-500 dark:text-sand-400">Dr. Sarah Jenkins &bull; Telehealth Video</p>
            </div>
          </div>

          <!-- Quick Book Therapy Session Trigger -->
          <button type="button" class="open-appointment-modal w-full py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow-md transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
            <i class="fas fa-plus"></i> Book Another Therapy Session
          </button>
        </div>

        <!-- 5. Superbills & Insurance Reimbursement -->
        <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-espresso-900 border border-sand-300/60 dark:border-white/10 shadow-sm space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="font-heading text-lg font-bold text-espresso-900 dark:text-white flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-xl bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm">
                <i class="fas fa-file-invoice-dollar"></i>
              </span>
              Monthly Superbills
            </h2>
            <a href="pricing.html" class="text-[11px] text-primary-600 dark:text-primary-400 hover:underline">Reimbursement Guide</a>
          </div>
          
          <ul class="divide-y divide-sand-200 dark:divide-white/10 text-xs">
            <li class="py-3 flex items-center justify-between">
              <div>
                <p class="font-bold text-slate-900 dark:text-white">August 2026 Superbill</p>
                <p class="text-[10px] text-slate-500 dark:text-sand-400">4 Sessions &bull; $700 Total &bull; CPT 90834</p>
              </div>
              <button type="button" class="text-primary-600 font-bold hover:underline inline-flex items-center gap-1" onclick="window.showToast('Downloaded August 2026 Superbill (PDF)', 'success')">
                <i class="fas fa-download"></i> PDF
              </button>
            </li>
            <li class="py-3 flex items-center justify-between">
              <div>
                <p class="font-bold text-slate-900 dark:text-white">July 2026 Superbill</p>
                <p class="text-[10px] text-slate-500 dark:text-sand-400">4 Sessions &bull; $700 Total &bull; CPT 90834</p>
              </div>
              <button type="button" class="text-primary-600 font-bold hover:underline inline-flex items-center gap-1" onclick="window.showToast('Downloaded July 2026 Superbill (PDF)', 'success')">
                <i class="fas fa-download"></i> PDF
              </button>
            </li>
          </ul>
        </div>

      </div>

    </div>

  </div>
</main>
`;

  return getHead('Client Patient Portal', 'Confidential client patient portal, telehealth sessions, daily mood tracking, shared notes, and secure counselor messaging.', clientGuardScript)
    + getHeader('client-dashboard')
    + content
    + getFooter();
}

// ==========================================
// ==========================================
// 14. LOGIN.HTML & REGISTER.HTML (Authentication)
// ==========================================
function buildLogin() {
  const content = `
<main class="flex-grow flex items-center justify-center py-12 px-4 bg-[#FAF5F0] dark:bg-[#141110]">
  <div class="w-full max-w-4xl bg-white dark:bg-[#1C1917] rounded-[2rem] shadow-2xl border border-sand-300/60 dark:border-white/10 overflow-hidden grid grid-cols-1 md:grid-cols-12">
    
    <!-- Left Visual Column -->
    <div class="md:col-span-5 relative hidden md:block">
      <img src="${IMAGES.auth_hero}" alt="Tranquil sunlight through deep green trees in sanctuary" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/40 to-transparent p-8 flex flex-col justify-between text-white">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-2xl bg-primary-600 flex items-center justify-center text-white shadow-md">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div>
            <span class="font-heading font-bold text-lg leading-none">${BRAND_NAME}</span>
            <span class="block text-[10px] text-sand-300 uppercase tracking-wider">Confidential Portal</span>
          </div>
        </div>
        <div class="space-y-2">
          <p class="font-heading font-bold text-base leading-snug">"Taking this step is a testament to your courage and self-compassion."</p>
          <p class="text-[11px] text-sand-200 flex items-center gap-1.5"><i class="fas fa-shield-alt text-primary-400"></i> 100% HIPAA protected portal</p>
        </div>
      </div>
    </div>

    <!-- Right Form Column -->
    <div class="md:col-span-7 p-8 sm:p-10 space-y-5">
      <div>
        <div class="flex items-center justify-between">
          <h1 class="font-heading text-2xl font-bold text-slate-900 dark:text-white">Confidential Portal Sign In</h1>
          <span class="inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
            <i class="fas fa-lock text-[9px]"></i> 256-Bit SSL
          </span>
        </div>
        <p class="text-xs text-slate-500 dark:text-sand-400 mt-1">Access your telehealth sessions, therapist notes, and mood journal.</p>
      </div>

      <!-- Notification Alerts -->
      <div id="alert-unauthorized" class="hidden p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-3">
        <div class="w-8 h-8 rounded-xl bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 flex items-center justify-center shrink-0 text-sm">
          <i class="fas fa-lock"></i>
        </div>
        <div>
          <p class="font-bold">Authentication Required</p>
          <p class="text-[11px] opacity-90">Please sign in first to access your confidential dashboard.</p>
        </div>
      </div>

      <div id="alert-logged-out" class="hidden p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs flex items-center gap-3">
        <div class="w-8 h-8 rounded-xl bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 flex items-center justify-center shrink-0 text-sm">
          <i class="fas fa-check"></i>
        </div>
        <div>
          <p class="font-bold">Signed Out Safely</p>
          <p class="text-[11px] opacity-90">Your session was closed securely. You may sign back in anytime.</p>
        </div>
      </div>

      <div id="alert-already-in" class="hidden p-4 rounded-2xl bg-primary-50 dark:bg-primary-950/40 border border-primary-300 dark:border-primary-800 text-primary-950 dark:text-primary-100 text-xs space-y-2">
        <div class="flex items-center justify-between">
          <span class="font-bold flex items-center gap-1.5"><i class="fas fa-user-circle text-primary-600"></i> Active Session Found</span>
          <span id="active-user-badge" class="px-2 py-0.5 rounded-full bg-primary-200 dark:bg-primary-900 text-primary-900 dark:text-primary-100 text-[10px] font-bold">Client</span>
        </div>
        <p class="text-[11px]">You are currently signed in as <strong id="active-user-name">Alex Morgan</strong>.</p>
        <div class="flex items-center gap-2 pt-1">
          <a id="active-user-dashboard-link" href="client-dashboard.html" class="px-4 py-2 rounded-xl bg-primary-600 text-white font-bold text-xs hover:bg-primary-700 transition-colors inline-flex items-center gap-1.5 shadow-sm">
            Continue to Dashboard <i class="fas fa-arrow-right text-[10px]"></i>
          </a>
          <button type="button" onclick="CalmindAuth.logout('login.html?logged_out=true')" class="px-3.5 py-2 rounded-xl bg-sand-200 dark:bg-espresso-800 text-slate-700 dark:text-sand-200 font-bold text-xs hover:bg-sand-300 transition-colors">
            Sign Out
          </button>
        </div>
      </div>

      <!-- Quick 1-Click Demo Login Bar -->
      <div class="p-3.5 rounded-2xl bg-sand-100/90 dark:bg-espresso-800/90 border border-sand-200 dark:border-white/10 space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold text-slate-700 dark:text-sand-200 flex items-center gap-1.5">
            <i class="fas fa-bolt text-primary-600"></i> Instant 1-Click Demo Login:
          </span>
          <span class="text-[10px] text-slate-400">Zero typing required</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <button type="button" id="btn-demo-client" class="px-3 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1.5">
            <i class="fas fa-user-check"></i> Demo Client (Alex)
          </button>
          <button type="button" id="btn-demo-admin" class="px-3 py-2 rounded-xl bg-espresso-900 hover:bg-black text-sand-100 font-bold text-xs shadow-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1.5 border border-white/10">
            <i class="fas fa-user-md"></i> Demo Clinician (Dr. Sarah)
          </button>
        </div>
      </div>

      <!-- Role Switcher -->
      <div>
        <label class="block text-[11px] font-bold text-slate-500 dark:text-sand-400 uppercase tracking-wider mb-1.5">Portal Type</label>
        <div class="grid grid-cols-2 p-1 rounded-2xl bg-sand-100 dark:bg-espresso-800 text-xs font-bold text-center border border-sand-200 dark:border-white/10">
          <button type="button" id="tab-client" class="py-2 rounded-xl bg-primary-600 text-white shadow-sm transition-all">
            <i class="fas fa-user mr-1"></i> Patient Portal
          </button>
          <button type="button" id="tab-admin" class="py-2 rounded-xl text-slate-600 dark:text-sand-300 hover:text-slate-900 dark:hover:text-white transition-all">
            <i class="fas fa-user-md mr-1"></i> Clinician / Staff
          </button>
        </div>
      </div>

      <!-- Standard Form -->
      <form id="portal-login-form" class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-slate-700 dark:text-sand-200 mb-1">Email Address</label>
          <input type="email" id="login-email" required value="alex@example.com" placeholder="name@example.com" class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors">
        </div>

        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="block text-xs font-bold text-slate-700 dark:text-sand-200">Password</label>
            <a href="#" onclick="event.preventDefault(); window.showToast('Password reset link dispatched to registered email.', 'info');" class="text-[11px] text-primary-600 hover:underline">Forgot password?</a>
          </div>
          <div class="relative">
            <input type="password" id="login-password" required value="password123" placeholder="••••••••" class="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors pr-10">
            <button type="button" id="toggle-pw-btn" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-sand-200 text-xs" aria-label="Toggle password visibility">
              <i class="far fa-eye" id="toggle-pw-icon"></i>
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between text-xs">
          <label class="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-sand-300 select-none">
            <input type="checkbox" id="login-remember" checked class="rounded text-primary-600 focus:ring-primary-500"> Remember device for 30 days
          </label>
        </div>

        <button type="submit" id="login-submit-btn" class="w-full py-3.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow-lg shadow-primary-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
          <span>Sign In to Portal</span>
          <i class="fas fa-arrow-right text-[11px]"></i>
        </button>
      </form>

      <div class="pt-2 text-center text-xs text-slate-500 dark:text-sand-400">
        Don't have an account yet? <a href="register.html" class="text-primary-600 font-bold hover:underline">Register for Intake</a>
      </div>
    </div>

  </div>
</main>

<script>
  (function() {
    var currentRole = 'client';
    var tabClient = document.getElementById('tab-client');
    var tabAdmin = document.getElementById('tab-admin');
    var emailInput = document.getElementById('login-email');
    var pwInput = document.getElementById('login-password');
    var form = document.getElementById('portal-login-form');
    var submitBtn = document.getElementById('login-submit-btn');
    var btnDemoClient = document.getElementById('btn-demo-client');
    var btnDemoAdmin = document.getElementById('btn-demo-admin');
    var togglePwBtn = document.getElementById('toggle-pw-btn');
    var togglePwIcon = document.getElementById('toggle-pw-icon');

    // Parse URL params for notification banners
    var params = new URLSearchParams(window.location.search);
    var reason = params.get('reason');
    var loggedOut = params.get('logged_out');
    var redirectTarget = params.get('redirect');

    if (reason === 'unauthorized') {
      var unauthAlert = document.getElementById('alert-unauthorized');
      if (unauthAlert) unauthAlert.classList.remove('hidden');
    }
    if (loggedOut === 'true') {
      var logoutAlert = document.getElementById('alert-logged-out');
      if (logoutAlert) logoutAlert.classList.remove('hidden');
    }

    // Check if already authenticated
    try {
      var existingUser = JSON.parse(localStorage.getItem('calmind_auth_user'));
      if (existingUser && existingUser.email) {
        var alreadyInAlert = document.getElementById('alert-already-in');
        var nameEl = document.getElementById('active-user-name');
        var badgeEl = document.getElementById('active-user-badge');
        var linkEl = document.getElementById('active-user-dashboard-link');
        if (alreadyInAlert && nameEl && badgeEl && linkEl) {
          nameEl.textContent = existingUser.name || existingUser.email;
          badgeEl.textContent = existingUser.role === 'admin' ? 'Clinician' : 'Client';
          linkEl.href = existingUser.role === 'admin' ? 'admin-dashboard.html' : 'client-dashboard.html';
          alreadyInAlert.classList.remove('hidden');
        }
      }
    } catch(e) {}

    // Role switching
    function setRole(role) {
      currentRole = role;
      if (role === 'admin') {
        tabAdmin.className = 'py-2 rounded-xl bg-espresso-900 text-white shadow-sm transition-all';
        tabClient.className = 'py-2 rounded-xl text-slate-600 dark:text-sand-300 hover:text-slate-900 dark:hover:text-white transition-all';
        if (emailInput.value === 'alex@example.com') emailInput.value = 'sarah.jenkins@calmind.com';
      } else {
        tabClient.className = 'py-2 rounded-xl bg-primary-600 text-white shadow-sm transition-all';
        tabAdmin.className = 'py-2 rounded-xl text-slate-600 dark:text-sand-300 hover:text-slate-900 dark:hover:text-white transition-all';
        if (emailInput.value === 'sarah.jenkins@calmind.com') emailInput.value = 'alex@example.com';
      }
    }

    if (tabClient) tabClient.addEventListener('click', function() { setRole('client'); });
    if (tabAdmin) tabAdmin.addEventListener('click', function() { setRole('admin'); });

    // Password visibility toggle
    if (togglePwBtn && pwInput && togglePwIcon) {
      togglePwBtn.addEventListener('click', function() {
        if (pwInput.type === 'password') {
          pwInput.type = 'text';
          togglePwIcon.className = 'far fa-eye-slash';
        } else {
          pwInput.type = 'password';
          togglePwIcon.className = 'far fa-eye';
        }
      });
    }

    // Helper: Execute login and route
    function executeLogin(name, email, role) {
      if (window.CalmindAuth) {
        window.CalmindAuth.login({ name: name, email: email, role: role });
      } else {
        localStorage.setItem('calmind_auth_user', JSON.stringify({ name: name, email: email, role: role, token: 'demo' }));
      }
      if (window.showToast) {
        window.showToast('Welcome, ' + name + '! Loading your sanctuary...', 'success');
      }
      var target = (redirectTarget && !redirectTarget.includes('login.html'))
        ? decodeURIComponent(redirectTarget)
        : (role === 'admin' ? 'admin-dashboard.html' : 'client-dashboard.html');
      setTimeout(function() {
        window.location.href = target;
      }, 500);
    }

    // Quick Demo Buttons
    if (btnDemoClient) {
      btnDemoClient.addEventListener('click', function() {
        executeLogin('Alex Morgan', 'alex@example.com', 'client');
      });
    }
    if (btnDemoAdmin) {
      btnDemoAdmin.addEventListener('click', function() {
        executeLogin('Dr. Sarah Jenkins', 'sarah.jenkins@calmind.com', 'admin');
      });
    }

    // Form Submit
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var email = emailInput.value.trim();
        var password = pwInput.value.trim();

        if (!email || !password) {
          if (window.showToast) window.showToast('Please enter both email and password.', 'error');
          return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i> Authenticating...';

        var computedName = currentRole === 'admin' ? 'Dr. Sarah Jenkins' : (email.toLowerCase().includes('alex') ? 'Alex Morgan' : email.split('@')[0]);
        setTimeout(function() {
          executeLogin(computedName, email, currentRole);
        }, 600);
      });
    }
  })();
</script>
`;

  return getHead('Patient & Clinician Portal Sign In', 'Secure client portal login for Calmind Psychology & Counseling Center.')
    + getHeader('login')
    + content
    + getFooter();
}

function buildRegister() {
  const content = `
<main class="flex-grow flex items-center justify-center py-12 px-4 bg-[#FAF5F0] dark:bg-[#141110]">
  <div class="w-full max-w-4xl bg-white dark:bg-[#1C1917] rounded-[2rem] shadow-2xl border border-sand-300/60 dark:border-white/10 overflow-hidden grid grid-cols-1 md:grid-cols-12">
    
    <!-- Left Visual Column -->
    <div class="md:col-span-5 relative hidden md:block">
      <img src="${IMAGES.auth_hero}" alt="Sunlit peaceful trees in sanctuary" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/40 to-transparent p-8 flex flex-col justify-between text-white">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-2xl bg-primary-600 flex items-center justify-center text-white shadow-md">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span class="font-heading font-bold text-lg leading-none">${BRAND_NAME}</span>
        </div>
        <div class="space-y-2">
          <p class="font-heading font-bold text-base leading-snug">"Beginning therapy is a brave, restorative step toward lasting peace."</p>
          <p class="text-[11px] text-sand-200 flex items-center gap-1.5"><i class="fas fa-shield-alt text-primary-400"></i> All intake forms protected by HIPAA</p>
        </div>
      </div>
    </div>

    <!-- Right Form Column -->
    <div class="md:col-span-7 p-8 sm:p-10 space-y-6">
      <div>
        <h1 class="font-heading text-2xl font-bold text-slate-900 dark:text-white">Register for Confidential Care</h1>
        <p class="text-xs text-slate-500 dark:text-sand-400 mt-1">Create your secure portal profile to complete intake questionnaires.</p>
      </div>

      <form id="portal-register-form" class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-sand-200 mb-1">Full Legal Name *</label>
            <input type="text" id="reg-name" required placeholder="Alex Morgan" class="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-sand-200 mb-1">Email Address *</label>
            <input type="email" id="reg-email" required placeholder="alex@example.com" class="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-sand-200 mb-1">Create Password *</label>
            <input type="password" id="reg-password" required placeholder="Minimum 8 characters" class="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 dark:text-sand-200 mb-1">Preferred Modality</label>
            <select id="reg-modality" class="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 dark:bg-espresso-800 border border-sand-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-primary-500 transition-colors">
              <option value="individual">Individual Therapy</option>
              <option value="couples">Couples Counseling</option>
              <option value="teen">Teen Therapy</option>
              <option value="trauma">Trauma & EMDR</option>
            </select>
          </div>
        </div>

        <div class="flex items-start gap-2 pt-1">
          <input type="checkbox" id="reg-hipaa" required class="mt-0.5 rounded text-primary-600 focus:ring-primary-500">
          <label for="reg-hipaa" class="text-[11px] text-slate-500 dark:text-sand-400">
            I consent to HIPAA disclosures and clinical communications via secure email and portal.
          </label>
        </div>

        <button type="submit" id="reg-submit-btn" class="w-full py-3.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow-lg shadow-primary-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
          <span>Complete Registration & Enter Sanctuary</span>
          <i class="fas fa-arrow-right text-[11px]"></i>
        </button>
      </form>

      <div class="pt-2 text-center text-xs text-slate-500 dark:text-sand-400">
        Already registered? <a href="login.html" class="text-primary-600 font-bold hover:underline">Sign In</a>
      </div>
    </div>

  </div>
</main>

<script>
  (function() {
    var form = document.getElementById('portal-register-form');
    var submitBtn = document.getElementById('reg-submit-btn');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('reg-name').value.trim();
        var email = document.getElementById('reg-email').value.trim();
        var password = document.getElementById('reg-password').value.trim();

        if (!name || !email || !password) {
          if (window.showToast) window.showToast('Please fill out all required fields.', 'error');
          return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i> Registering Profile...';

        setTimeout(function() {
          if (window.CalmindAuth) {
            window.CalmindAuth.login({ name: name, email: email, role: 'client' });
          } else {
            localStorage.setItem('calmind_auth_user', JSON.stringify({ name: name, email: email, role: 'client' }));
          }
          if (window.showToast) {
            window.showToast('Welcome to Calmind, ' + name + '! Your sanctuary is prepared.', 'success');
          }
          setTimeout(function() {
            window.location.href = 'client-dashboard.html';
          }, 500);
        }, 600);
      });
    }
  })();
</script>
`;

  return getHead('Confidential Patient Registration', 'Register for therapy intake and portal access at Calmind Psychology & Counseling Center.')
    + getHeader('register')
    + content
    + getFooter();
}

// ==========================================
// 15. 404.HTML (Mindful Error Page)
// ==========================================
function build404() {
  const content = `
<main class="flex-grow flex items-center justify-center py-20 px-4 text-center">
  <div class="max-w-md mx-auto space-y-6">
    <div class="w-20 h-20 rounded-3xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center text-3xl mx-auto shadow-sm">
      <i class="fas fa-feather-alt"></i>
    </div>
    <div class="space-y-2">
      <span class="text-xs font-bold uppercase tracking-widest text-teal-600">Page Not Found &middot; 404</span>
      <h1 class="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
        Take a Deep Breath
      </h1>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        Even paths that seem lost lead somewhere meaningful. The page you are looking for may have moved or been updated. Let us help you find your way back.
      </p>
    </div>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
      <a href="index.html" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow transition-all">
        Return to Home
      </a>
      <a href="services.html" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 transition-colors">
        Browse Services
      </a>
    </div>

    <p class="text-[11px] text-slate-400 pt-4">
      In emotional crisis? Dial <a href="tel:988" class="font-bold text-rose-500 underline">988 Lifeline</a> (Free & Confidential).
    </p>
  </div>
</main>
`;

  return getHead('Page Not Found &middot; SereneMind', 'Mindful 404 error page for SereneMind Counseling Center.')
    + getHeader('404')
    + content
    + getFooter();
}

// ==========================================
// 16. MAINTENANCE.HTML (Coming Soon / Scheduled Maintenance)
// ==========================================
function buildMaintenance() {
  const content = `
<main class="flex-grow flex items-center justify-center py-20 px-4 text-center">
  <div class="max-w-lg mx-auto space-y-6">
    <div class="w-16 h-16 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center text-2xl mx-auto">
      <i class="fas fa-tools"></i>
    </div>
    
    <div class="space-y-2">
      <span class="text-xs font-bold uppercase tracking-widest text-teal-600">Digital Sanctuary Update</span>
      <h1 class="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
        Scheduled System Maintenance
      </h1>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        We are mindfully enhancing our encrypted client portal to serve you better. All scheduled in-person and video appointments continue as planned.
      </p>
    </div>

    <!-- Live Countdown Timer -->
    <div class="grid grid-cols-4 gap-3 max-w-sm mx-auto text-center">
      <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <span class="font-heading font-black text-2xl text-teal-600">00</span>
        <span class="text-[10px] text-slate-400 block">Days</span>
      </div>
      <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <span class="font-heading font-black text-2xl text-teal-600">02</span>
        <span class="text-[10px] text-slate-400 block">Hours</span>
      </div>
      <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <span class="font-heading font-black text-2xl text-teal-600">45</span>
        <span class="text-[10px] text-slate-400 block">Mins</span>
      </div>
      <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <span class="font-heading font-black text-2xl text-teal-600">20</span>
        <span class="text-[10px] text-slate-400 block">Secs</span>
      </div>
    </div>

    <!-- Notification Form -->
    <form class="flex gap-2 max-w-sm mx-auto" onsubmit="event.preventDefault(); window.showToast('Thank you! We will notify you once portal upgrades finish.', 'success'); this.reset();">
      <input type="email" required placeholder="Enter email for notice..." class="flex-1 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500">
      <button type="submit" class="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow">Notify Me</button>
    </form>

    <div class="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-800 dark:text-rose-300">
      <p class="font-bold">In immediate emotional crisis?</p>
      <p class="text-[11px] mt-0.5">Please dial <strong>988</strong> or text <strong>HOME to 741741</strong> for 24/7 free confidential help.</p>
    </div>
  </div>
</main>
`;

  return getHead('Scheduled Maintenance &middot; SereneMind', 'System maintenance and portal upgrades at SereneMind Counseling Center.')
    + getHeader('maintenance')
    + content
    + getFooter();
}

// ==========================================
// 17. BATCH-TIMINGS.HTML (Group Sessions Timetable)
// ==========================================
function buildBatchTimings() {
  const content = `
<main class="flex-grow">
  <section class="py-16 bg-gradient-to-b from-teal-50/50 to-transparent dark:from-teal-950/20 dark:to-transparent text-center space-y-4">
    <span class="text-xs uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
      Weekly Therapeutic Community
    </span>
    <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
      Group Therapy & Workshop Schedules
    </h1>
    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
      Small, closed-cohort therapeutic groups (maximum 8 participants) fostering mutual validation, shared coping skills, and supportive community.
    </p>
  </section>

  <section class="py-12 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div class="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-x-auto">
        <table class="w-full text-left rtl:text-right text-xs">
          <thead>
            <tr class="border-b border-slate-200 dark:border-slate-700 text-slate-500 uppercase text-[10px] tracking-wider">
              <th class="py-3 px-4">Day & Time</th>
              <th class="py-3 px-4">Group Focus & Title</th>
              <th class="py-3 px-4">Facilitating Clinician</th>
              <th class="py-3 px-4">Location</th>
              <th class="py-3 px-4">Cohort Size</th>
              <th class="py-3 px-4 text-right rtl:text-left">RSVP</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
            <tr>
              <td class="py-4 px-4 font-bold text-slate-900 dark:text-white">Monday &bull; 6:30 PM</td>
              <td class="py-4 px-4 font-semibold">Overcoming Perfectionism & Chronic Worry</td>
              <td class="py-4 px-4">Dr. Sarah Jenkins, Psy.D.</td>
              <td class="py-4 px-4"><span class="px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300">Manhattan Suite 4</span></td>
              <td class="py-4 px-4">6 / 8 seats filled</td>
              <td class="py-4 px-4 text-right rtl:text-left"><button type="button" class="open-appointment-modal px-3 py-1.5 rounded-xl bg-teal-600 text-white font-bold text-xs" data-service="individual">RSVP</button></td>
            </tr>
            <tr>
              <td class="py-4 px-4 font-bold text-slate-900 dark:text-white">Tuesday &bull; 7:00 PM</td>
              <td class="py-4 px-4 font-semibold">Mindful Somatic Grounding for Burnout</td>
              <td class="py-4 px-4">Dr. Maya Patel, Ph.D.</td>
              <td class="py-4 px-4"><span class="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">Telehealth Video</span></td>
              <td class="py-4 px-4">5 / 8 seats filled</td>
              <td class="py-4 px-4 text-right rtl:text-left"><button type="button" class="open-appointment-modal px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs" data-service="telehealth">RSVP</button></td>
            </tr>
            <tr>
              <td class="py-4 px-4 font-bold text-slate-900 dark:text-white">Wednesday &bull; 6:00 PM</td>
              <td class="py-4 px-4 font-semibold">Trauma Survivors Grounding & Connection</td>
              <td class="py-4 px-4">Elena Rostova, LCSW</td>
              <td class="py-4 px-4"><span class="px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300">Brooklyn Suite 2</span></td>
              <td class="py-4 px-4">Closed Cohort</td>
              <td class="py-4 px-4 text-right rtl:text-left"><button type="button" class="open-appointment-modal px-3 py-1.5 rounded-xl bg-teal-600 text-white font-bold text-xs" data-service="trauma">Waitlist</button></td>
            </tr>
            <tr>
              <td class="py-4 px-4 font-bold text-slate-900 dark:text-white">Thursday &bull; 7:15 PM</td>
              <td class="py-4 px-4 font-semibold">Gottman Relational Workshop for Couples</td>
              <td class="py-4 px-4">Dr. Marcus Vance, LMFT</td>
              <td class="py-4 px-4"><span class="px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300">Manhattan Suite 1</span></td>
              <td class="py-4 px-4">4 / 6 couples</td>
              <td class="py-4 px-4 text-right rtl:text-left"><button type="button" class="open-appointment-modal px-3 py-1.5 rounded-xl bg-teal-600 text-white font-bold text-xs" data-service="couples">RSVP</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
</main>
`;

  return getHead('Group Therapy & Workshop Schedules', 'Weekly group therapy schedules and mindful workshops at SereneMind Counseling Center.')
    + getHeader('resources')
    + content
    + getFooter();
}

// Generate files
fs.writeFileSync('admin-dashboard.html', buildAdminDashboard());
console.log('✓ admin-dashboard.html generated successfully.');

fs.writeFileSync('client-dashboard.html', buildClientDashboard());
console.log('✓ client-dashboard.html generated successfully.');

fs.writeFileSync('login.html', buildLogin());
console.log('✓ login.html generated successfully.');

fs.writeFileSync('register.html', buildRegister());
console.log('✓ register.html generated successfully.');

fs.writeFileSync('404.html', build404());
console.log('✓ 404.html generated successfully.');

fs.writeFileSync('maintenance.html', buildMaintenance());
console.log('✓ maintenance.html generated successfully.');

fs.writeFileSync('batch-timings.html', buildBatchTimings());
console.log('✓ batch-timings.html generated successfully.');

module.exports = {
  buildAdminDashboard,
  buildClientDashboard,
  buildLogin,
  buildRegister,
  build404,
  buildMaintenance,
  buildBatchTimings
};
