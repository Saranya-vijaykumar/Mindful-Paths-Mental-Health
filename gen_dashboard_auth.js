const fs = require('fs');
const path = require('path');
const { getHead, getHeader, getFooter, IMAGES, BRAND_NAME, PHONE } = require('./gen_layout');

console.log('Generating authentication and client portal pages...');

// Shared Dashboard Header/Nav Component for Client Sanctuary
function getPortalNav(active = 'dashboard') {
  return `
  <!-- Client Portal Top Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-[#17232b]/95 backdrop-blur-md border-b border-[#EBF1F4] dark:border-white/10 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand & Section -->
      <div class="flex items-center gap-4">
        <a href="index.html" class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-[#D7B7A5] flex items-center justify-center text-white">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </div>
          <span class="font-heading font-bold text-lg text-[#294657] dark:text-[#F8F6F1]">${BRAND_NAME}</span>
        </a>
        <span class="text-xs px-2.5 py-0.5 rounded-full bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] font-bold hidden sm:inline-block">Client Sanctuary</span>
      </div>

      <!-- Desktop Links -->
      <nav class="hidden md:flex items-center gap-5 text-xs font-bold text-[#27343B] dark:text-[#EBF1F4]">
        <a href="dashboard.html" class="hover:text-[#D7B7A5] py-1 transition-colors ${active === 'dashboard' ? 'text-[#D7B7A5] border-b-2 border-[#D7B7A5]' : ''}">
          <i class="fas fa-th-large mr-1"></i> Sanctuary
        </a>
        <a href="appointments.html" class="hover:text-[#D7B7A5] py-1 transition-colors ${active === 'appointments' ? 'text-[#D7B7A5] border-b-2 border-[#D7B7A5]' : ''}">
          <i class="far fa-calendar-alt mr-1"></i> Appointments
        </a>
        <a href="messages.html" class="hover:text-[#D7B7A5] py-1 transition-colors ${active === 'messages' ? 'text-[#D7B7A5] border-b-2 border-[#D7B7A5]' : ''}">
          <i class="far fa-comments mr-1"></i> Messages
        </a>
        <a href="mood-journal.html" class="hover:text-[#D7B7A5] py-1 transition-colors ${active === 'mood' ? 'text-[#D7B7A5] border-b-2 border-[#D7B7A5]' : ''}">
          <i class="far fa-smile mr-1"></i> Mood Journal
        </a>
        <a href="shared-notes.html" class="hover:text-[#D7B7A5] py-1 transition-colors ${active === 'notes' ? 'text-[#D7B7A5] border-b-2 border-[#D7B7A5]' : ''}">
          <i class="far fa-file-alt mr-1"></i> Shared Notes
        </a>
      </nav>

      <!-- Right Profile & Logout -->
      <div class="flex items-center gap-3">
        <!-- Theme Toggle -->
        <button type="button" class="theme-toggle-btn w-9 h-9 rounded-full bg-[#F8F6F1] dark:bg-[#1e2d37] text-[#27343B] dark:text-[#F8F6F1] flex items-center justify-center border border-[#EBF1F4] dark:border-white/10" aria-label="Toggle Theme">
          <i class="fas fa-moon moon-icon text-xs"></i>
          <i class="fas fa-sun sun-icon text-xs hidden"></i>
        </button>

        <!-- User Profile Pill -->
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10">
          <div class="w-6 h-6 rounded-full bg-[#D7B7A5] text-white flex items-center justify-center text-[10px] font-bold">AM</div>
          <span class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1] hidden sm:inline" id="portal-user-name">Alex Morgan</span>
        </div>

        <!-- Safe Logout Button -->
        <button type="button" id="auth-logout-btn" data-action="logout" class="px-3.5 py-1.5 rounded-full bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-900/20 dark:hover:bg-red-900/40 dark:text-red-300 text-xs font-bold transition-colors flex items-center gap-1.5" title="Sign Out Safely">
          <i class="fas fa-sign-out-alt"></i> <span class="hidden sm:inline">Sign Out</span>
        </button>
      </div>

    </div>

    <!-- Mobile Subnav Bar -->
    <div class="md:hidden flex items-center justify-around py-2 border-t border-[#EBF1F4] dark:border-white/10 text-[11px] font-bold text-[#27343B] dark:text-[#EBF1F4]">
      <a href="dashboard.html" class="${active === 'dashboard' ? 'text-[#D7B7A5]' : ''}"><i class="fas fa-th-large block text-center text-xs"></i> Overview</a>
      <a href="appointments.html" class="${active === 'appointments' ? 'text-[#D7B7A5]' : ''}"><i class="far fa-calendar-alt block text-center text-xs"></i> Sessions</a>
      <a href="messages.html" class="${active === 'messages' ? 'text-[#D7B7A5]' : ''}"><i class="far fa-comments block text-center text-xs"></i> Chat</a>
      <a href="mood-journal.html" class="${active === 'mood' ? 'text-[#D7B7A5]' : ''}"><i class="far fa-smile block text-center text-xs"></i> Mood</a>
      <a href="shared-notes.html" class="${active === 'notes' ? 'text-[#D7B7A5]' : ''}"><i class="far fa-file-alt block text-center text-xs"></i> Notes</a>
    </div>
  </header>
  `;
}

// =========================================================================
// 1. login.html — Split Screen Auth with 1-Click Demo Logins
// =========================================================================
function buildLogin() {
  const head = getHead('Sign In | Client & Clinician Sanctuary', 'Confidential login portal for clients and clinicians.');
  return head + `
  <section class="min-h-screen flex items-stretch bg-white dark:bg-[#11191f]">
    
    <!-- Left Hero Image Banner -->
    <div class="hidden lg:block lg:w-1/2 relative bg-[#17232b]">
      <img src="${IMAGES.auth_hero}" alt="Serene forest sunlight" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-between p-12 text-white">
        <a href="index.html" class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-[#D7B7A5] flex items-center justify-center text-white shadow-md">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </div>
          <span class="font-heading text-2xl font-bold">${BRAND_NAME}</span>
        </a>
        <div class="space-y-3">
          <span class="text-xs uppercase tracking-wider text-[#8FAFC0] font-bold">Confidential Client Sanctuary</span>
          <h2 class="font-heading text-3xl font-bold">Your private portal for continuous healing and clinical reflections.</h2>
          <p class="text-xs text-[#EBF1F4]">Protected by 256-bit AES encryption &amp; federal HIPAA compliance.</p>
        </div>
      </div>
    </div>

    <!-- Right Login Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-[#F8F6F1] dark:bg-[#11191f]">
      <div class="w-full max-w-md space-y-6">
        
        <div class="flex items-center justify-between">
          <a href="index.html" class="text-xs font-bold text-[#27343B] dark:text-[#7d8d96] hover:text-[#D7B7A5] flex items-center gap-1.5 transition-colors">
            <i class="fas fa-arrow-left"></i> Back to Home
          </a>
          <button type="button" class="theme-toggle-btn w-9 h-9 rounded-full bg-white dark:bg-[#1e2d37] text-[#27343B] dark:text-[#F8F6F1] flex items-center justify-center border border-[#EBF1F4] dark:border-white/10 shadow-sm" aria-label="Toggle Theme">
            <i class="fas fa-moon moon-icon text-xs"></i>
            <i class="fas fa-sun sun-icon text-xs hidden"></i>
          </button>
        </div>

        <div class="space-y-2">
          <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">Welcome Back</span>
          <h1 class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">Sign in to your sanctuary</h1>
          <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">Manage sessions, review therapist notes, and record mood reflections.</p>
        </div>

        <!-- Inline Feedback Banner (Error / Success) -->
        <div id="login-alert" class="hidden p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all"></div>

        <!-- Quick Demo Credentials Helper -->
        <div class="p-4 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-2.5 shadow-sm">
          <div class="flex items-center justify-between text-[11px]">
            <span class="font-bold text-[#294657] dark:text-[#8FAFC0] uppercase tracking-wider">Demo Accounts (Click to Fill)</span>
            <span class="text-[#27343B]/70 dark:text-[#7d8d96]/70">Password: <strong class="font-mono text-[#294657] dark:text-[#F8F6F1]">demo12345</strong></span>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button type="button" id="demo-client-btn" class="py-2.5 px-3 rounded-xl bg-[#D7B7A5]/10 hover:bg-[#D7B7A5]/20 text-[#D7B7A5] text-xs font-bold transition-all flex items-center justify-center gap-1.5" title="Fill client demo: alex@example.com">
              <i class="fas fa-user"></i> Client Demo
            </button>
            <button type="button" id="demo-admin-btn" class="py-2.5 px-3 rounded-xl bg-[#294657]/10 hover:bg-[#294657]/20 text-[#294657] dark:text-[#8FAFC0] text-xs font-bold transition-all flex items-center justify-center gap-1.5" title="Fill clinician demo: sarah.jenkins@mindfulpaths.com">
              <i class="fas fa-user-md"></i> Clinician Demo
            </button>
          </div>
        </div>

        <!-- Login Form -->
        <form id="portal-login-form" class="space-y-4 text-xs" novalidate>
          <div>
            <label class="block font-bold text-[#294657] dark:text-[#EBF1F4] mb-1">Email Address *</label>
            <div class="relative">
              <input type="email" id="login-email" required placeholder="alex@example.com" class="w-full pl-9 pr-3.5 py-3 rounded-xl bg-white dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs text-[#294657] dark:text-[#F8F6F1] focus:outline-none focus:border-[#D7B7A5] transition-colors">
              <i class="far fa-envelope absolute left-3 top-3.5 text-[#27343B]/50 dark:text-[#7d8d96]/50"></i>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="block font-bold text-[#294657] dark:text-[#EBF1F4]">Password *</label>
              <a href="#" id="forgot-pass-btn" class="text-[11px] text-[#D7B7A5] hover:underline font-semibold">Forgot password?</a>
            </div>
            <div class="relative">
              <input type="password" id="login-password" required placeholder="••••••••" class="w-full pl-9 pr-10 py-3 rounded-xl bg-white dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs text-[#294657] dark:text-[#F8F6F1] focus:outline-none focus:border-[#D7B7A5] transition-colors">
              <i class="fas fa-lock absolute left-3 top-3.5 text-[#27343B]/50 dark:text-[#7d8d96]/50"></i>
              <button type="button" id="toggle-login-password" class="absolute right-3 top-2.5 text-[#27343B]/60 dark:text-[#7d8d96]/60 hover:text-[#D7B7A5] p-1.5 transition-colors" title="Toggle password visibility">
                <i class="far fa-eye" id="login-pass-eye"></i>
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between text-[11px]">
            <label class="flex items-center gap-1.5 text-[#27343B] dark:text-[#7d8d96] cursor-pointer select-none">
              <input type="checkbox" id="remember-me" checked class="rounded text-[#D7B7A5] focus:ring-0"> Remember this browser
            </label>
            <span class="text-[#27343B]/70 dark:text-[#7d8d96]/70">256-Bit SSL Secured</span>
          </div>

          <button type="submit" id="login-submit-btn" class="w-full py-3.5 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2">
            <span>Sign In to Sanctuary</span>
            <i class="fas fa-arrow-right text-[10px]"></i>
          </button>
        </form>

        <div class="text-center text-xs text-[#27343B] dark:text-[#7d8d96] pt-1">
          Don't have an account yet? <a href="register.html" class="font-bold text-[#D7B7A5] hover:underline">Complete Intake Registration</a>
        </div>

      </div>
    </div>
  </section>

  <script src="assets/js/main.js"></script>
  <script src="assets/js/auth.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const redirectTarget = urlParams.get('redirect');
      const reason = urlParams.get('reason');
      const isLoggedOut = urlParams.get('logged_out');
      const isRegistered = urlParams.get('registered');
      const registeredEmail = urlParams.get('email');

      const alertEl = document.getElementById('login-alert');
      const emailInput = document.getElementById('login-email');
      const passInput = document.getElementById('login-password');
      const togglePassBtn = document.getElementById('toggle-login-password');
      const passEye = document.getElementById('login-pass-eye');
      const form = document.getElementById('portal-login-form');

      function showAlert(msg, type = 'error') {
        if (!alertEl) return;
        alertEl.className = 'p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all';
        if (type === 'error') {
          alertEl.classList.add('bg-red-50', 'text-red-700', 'border', 'border-red-200', 'dark:bg-red-950/40', 'dark:text-red-300', 'dark:border-red-800/50');
          alertEl.innerHTML = '<i class="fas fa-exclamation-circle text-red-500"></i> <span>' + msg + '</span>';
        } else if (type === 'success') {
          alertEl.classList.add('bg-emerald-50', 'text-emerald-800', 'border', 'border-emerald-200', 'dark:bg-emerald-950/40', 'dark:text-emerald-300', 'dark:border-emerald-800/50');
          alertEl.innerHTML = '<i class="fas fa-check-circle text-emerald-500"></i> <span>' + msg + '</span>';
        } else {
          alertEl.classList.add('bg-amber-50', 'text-amber-800', 'border', 'border-amber-200', 'dark:bg-amber-950/40', 'dark:text-amber-300', 'dark:border-amber-800/50');
          alertEl.innerHTML = '<i class="fas fa-info-circle text-amber-500"></i> <span>' + msg + '</span>';
        }
        alertEl.classList.remove('hidden');
      }

      function hideAlert() {
        if (alertEl) alertEl.classList.add('hidden');
      }

      // Initial query params banner feedback
      if (isRegistered === 'true' && registeredEmail) {
        emailInput.value = registeredEmail;
        showAlert('Registration successful! Please enter your password to sign in.', 'success');
        passInput.focus();
      } else if (reason === 'unauthorized') {
        showAlert('Please sign in to access your confidential sanctuary.', 'info');
      } else if (isLoggedOut === 'true') {
        showAlert('You have been signed out safely.', 'info');
      }

      // Toggle password visibility
      if (togglePassBtn && passInput && passEye) {
        togglePassBtn.addEventListener('click', () => {
          const isPassword = passInput.getAttribute('type') === 'password';
          passInput.setAttribute('type', isPassword ? 'text' : 'password');
          passEye.classList.toggle('fa-eye', !isPassword);
          passEye.classList.toggle('fa-eye-slash', isPassword);
        });
      }

      // Forgot password hint
      const forgotBtn = document.getElementById('forgot-pass-btn');
      if (forgotBtn) {
        forgotBtn.addEventListener('click', (e) => {
          e.preventDefault();
          showAlert('To reset your password or recover your confidential record, please contact clinical support at (555) 234-7890.', 'info');
        });
      }

      function getNextPage(defaultRole) {
        if (redirectTarget) {
          return decodeURIComponent(redirectTarget);
        }
        return defaultRole === 'admin' ? 'admin-dashboard.html' : 'dashboard.html';
      }

      // Auto-fill Client Demo
      const clientBtn = document.getElementById('demo-client-btn');
      if (clientBtn) {
        clientBtn.addEventListener('click', () => {
          emailInput.value = 'alex@example.com';
          passInput.value = 'demo12345';
          hideAlert();
          emailInput.classList.remove('border-red-500');
          passInput.classList.remove('border-red-500');
          if (window.showToast) window.showToast('Client demo credentials filled (alex@example.com)', 'info');
          passInput.focus();
        });
      }

      // Auto-fill Clinician Demo
      const adminBtn = document.getElementById('demo-admin-btn');
      if (adminBtn) {
        adminBtn.addEventListener('click', () => {
          emailInput.value = 'sarah.jenkins@mindfulpaths.com';
          passInput.value = 'demo12345';
          hideAlert();
          emailInput.classList.remove('border-red-500');
          passInput.classList.remove('border-red-500');
          if (window.showToast) window.showToast('Clinician demo credentials filled (sarah.jenkins@mindfulpaths.com)', 'info');
          passInput.focus();
        });
      }

      // Strict Login Form Submission Handler
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          hideAlert();
          emailInput.classList.remove('border-red-500');
          passInput.classList.remove('border-red-500');

          const email = (emailInput.value || '').trim();
          const password = passInput.value || '';

          if (!email) {
            showAlert('Please enter your registered email address.', 'error');
            emailInput.classList.add('border-red-500');
            emailInput.focus();
            return;
          }

          if (!password) {
            showAlert('Please enter your password.', 'error');
            passInput.classList.add('border-red-500');
            passInput.focus();
            return;
          }

          // Strict verification against registered users in MindfulAuth
          const authResult = MindfulAuth.authenticate(email, password);

          if (!authResult.success) {
            showAlert(authResult.error, 'error');
            passInput.classList.add('border-red-500');
            if (window.showToast) window.showToast(authResult.error, 'error');
            return;
          }

          // Successful authentication
          const user = MindfulAuth.login(authResult.user);
          showAlert('Authentication successful! Entering sanctuary...', 'success');
          if (window.showToast) window.showToast('Welcome back, ' + user.name.split(' ')[0] + '! Opening Sanctuary...', 'success');

          const submitBtn = document.getElementById('login-submit-btn');
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Entering Sanctuary...</span>';
          }

          setTimeout(() => {
            window.location.href = getNextPage(user.role);
          }, 450);
        });
      }
    });
  </script>
</body>
</html>
`;
}

// =========================================================================
// 2. register.html — Client Intake Registration
// =========================================================================
function buildRegister() {
  const head = getHead('Client Registration | Intake Sanctuary', 'Register for therapy intake and private client portal.');
  return head + `
  <section class="min-h-screen flex items-center justify-center p-6 bg-[#F8F6F1] dark:bg-[#11191f]">
    <div class="w-full max-w-lg bg-white dark:bg-[#17232b] p-8 sm:p-10 rounded-3xl border border-[#EBF1F4] dark:border-white/10 shadow-2xl space-y-6">
      
      <div class="flex items-center justify-between">
        <a href="index.html" class="text-xs font-bold text-[#27343B] dark:text-[#7d8d96] hover:text-[#D7B7A5] flex items-center gap-1.5 transition-colors">
          <i class="fas fa-arrow-left"></i> Home
        </a>
        <a href="login.html" class="text-xs font-bold text-[#D7B7A5] hover:underline">Already registered? Log In</a>
      </div>

      <div class="space-y-1">
        <span class="text-xs font-bold uppercase tracking-wider text-[#D7B7A5]">New Client Intake</span>
        <h1 class="font-heading text-2xl sm:text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">Create Your Sanctuary Account</h1>
        <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">HIPAA-compliant client profile registration. Only registered accounts can access the client dashboard.</p>
      </div>

      <!-- Inline Alert Banner -->
      <div id="register-alert" class="hidden p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all"></div>

      <form id="register-form" class="space-y-4 text-xs" novalidate>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-[#294657] dark:text-[#EBF1F4] mb-1">Full Legal Name *</label>
            <input type="text" id="reg-name" required placeholder="e.g. Rachel Adams" class="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs text-[#294657] dark:text-[#F8F6F1] focus:outline-none focus:border-[#D7B7A5]">
          </div>
          <div>
            <label class="block font-bold text-[#294657] dark:text-[#EBF1F4] mb-1">Preferred Name</label>
            <input type="text" id="reg-preferred-name" placeholder="e.g. Rae" class="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs text-[#294657] dark:text-[#F8F6F1] focus:outline-none focus:border-[#D7B7A5]">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-[#294657] dark:text-[#EBF1F4] mb-1">Email Address *</label>
            <input type="email" id="reg-email" required placeholder="name@example.com" class="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs text-[#294657] dark:text-[#F8F6F1] focus:outline-none focus:border-[#D7B7A5]">
          </div>
          <div>
            <label class="block font-bold text-[#294657] dark:text-[#EBF1F4] mb-1">Phone Number</label>
            <input type="tel" id="reg-phone" placeholder="(555) 000-0000" class="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs text-[#294657] dark:text-[#F8F6F1] focus:outline-none focus:border-[#D7B7A5]">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block font-bold text-[#294657] dark:text-[#EBF1F4] mb-1">Create Password * (min. 6 chars)</label>
            <div class="relative">
              <input type="password" id="reg-password" required minlength="6" placeholder="••••••••" class="w-full px-3.5 py-2.5 pr-9 rounded-xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs text-[#294657] dark:text-[#F8F6F1] focus:outline-none focus:border-[#D7B7A5]">
              <button type="button" id="toggle-reg-password" class="absolute right-2.5 top-2 text-[#27343B]/60 dark:text-[#7d8d96]/60 hover:text-[#D7B7A5] p-1" title="Toggle password visibility">
                <i class="far fa-eye" id="reg-pass-eye"></i>
              </button>
            </div>
          </div>
          <div>
            <label class="block font-bold text-[#294657] dark:text-[#EBF1F4] mb-1">Confirm Password *</label>
            <div class="relative">
              <input type="password" id="reg-confirm-password" required minlength="6" placeholder="••••••••" class="w-full px-3.5 py-2.5 pr-9 rounded-xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs text-[#294657] dark:text-[#F8F6F1] focus:outline-none focus:border-[#D7B7A5]">
              <button type="button" id="toggle-reg-confirm-password" class="absolute right-2.5 top-2 text-[#27343B]/60 dark:text-[#7d8d96]/60 hover:text-[#D7B7A5] p-1" title="Toggle confirm password visibility">
                <i class="far fa-eye" id="reg-confirm-pass-eye"></i>
              </button>
            </div>
          </div>
        </div>

        <div>
          <label class="block font-bold text-[#294657] dark:text-[#EBF1F4] mb-1">What focus area are you seeking support for?</label>
          <select id="reg-focus" class="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs text-[#294657] dark:text-[#F8F6F1] focus:outline-none focus:border-[#D7B7A5]">
            <option value="anxiety">Stress, Anxiety &amp; Panic</option>
            <option value="couples">Relationship &amp; Couples Counseling</option>
            <option value="trauma">Trauma Recovery &amp; EMDR</option>
            <option value="teen">Teen &amp; Adolescent Counseling</option>
            <option value="transitions">Life Transitions &amp; Burnout</option>
          </select>
        </div>

        <div class="flex items-start gap-2 pt-1">
          <input type="checkbox" id="reg-consent" required class="mt-0.5 rounded text-[#D7B7A5] focus:ring-0">
          <label for="reg-consent" class="text-[11px] text-[#27343B] dark:text-[#7d8d96] cursor-pointer">
            I consent to confidential electronic communication and HIPAA medical privacy terms.
          </label>
        </div>

        <button type="submit" id="reg-submit-btn" class="w-full py-3.5 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2">
          <span>Create Account &amp; Proceed to Login</span>
          <i class="fas fa-arrow-right text-[10px]"></i>
        </button>
      </form>
    </div>
  </section>

  <script src="assets/js/main.js"></script>
  <script src="assets/js/auth.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const alertEl = document.getElementById('register-alert');
      const form = document.getElementById('register-form');
      const passInput = document.getElementById('reg-password');
      const confirmInput = document.getElementById('reg-confirm-password');

      function showAlert(msg, type = 'error') {
        if (!alertEl) return;
        alertEl.className = 'p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all';
        if (type === 'error') {
          alertEl.classList.add('bg-red-50', 'text-red-700', 'border', 'border-red-200', 'dark:bg-red-950/40', 'dark:text-red-300', 'dark:border-red-800/50');
          alertEl.innerHTML = '<i class="fas fa-exclamation-circle text-red-500"></i> <span>' + msg + '</span>';
        } else {
          alertEl.classList.add('bg-emerald-50', 'text-emerald-800', 'border', 'border-emerald-200', 'dark:bg-emerald-950/40', 'dark:text-emerald-300', 'dark:border-emerald-800/50');
          alertEl.innerHTML = '<i class="fas fa-check-circle text-emerald-500"></i> <span>' + msg + '</span>';
        }
        alertEl.classList.remove('hidden');
      }

      function hideAlert() {
        if (alertEl) alertEl.classList.add('hidden');
      }

      // Password toggles
      const togglePass = document.getElementById('toggle-reg-password');
      const passEye = document.getElementById('reg-pass-eye');
      if (togglePass && passInput && passEye) {
        togglePass.addEventListener('click', () => {
          const isPass = passInput.getAttribute('type') === 'password';
          passInput.setAttribute('type', isPass ? 'text' : 'password');
          passEye.classList.toggle('fa-eye', !isPass);
          passEye.classList.toggle('fa-eye-slash', isPass);
        });
      }

      const toggleConfirm = document.getElementById('toggle-reg-confirm-password');
      const confirmEye = document.getElementById('reg-confirm-pass-eye');
      if (toggleConfirm && confirmInput && confirmEye) {
        toggleConfirm.addEventListener('click', () => {
          const isPass = confirmInput.getAttribute('type') === 'password';
          confirmInput.setAttribute('type', isPass ? 'text' : 'password');
          confirmEye.classList.toggle('fa-eye', !isPass);
          confirmEye.classList.toggle('fa-eye-slash', isPass);
        });
      }

      // Submit registration
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          hideAlert();

          const name = (document.getElementById('reg-name').value || '').trim();
          const preferredName = (document.getElementById('reg-preferred-name').value || '').trim();
          const email = (document.getElementById('reg-email').value || '').trim();
          const phone = (document.getElementById('reg-phone').value || '').trim();
          const password = passInput.value || '';
          const confirmPassword = confirmInput.value || '';
          const focusArea = document.getElementById('reg-focus').value;
          const consent = document.getElementById('reg-consent').checked;

          if (!name) {
            showAlert('Please enter your full legal name.', 'error');
            document.getElementById('reg-name').focus();
            return;
          }

          if (!email || !email.includes('@') || !email.includes('.')) {
            showAlert('Please enter a valid email address.', 'error');
            document.getElementById('reg-email').focus();
            return;
          }

          if (!password) {
            showAlert('Please create a password.', 'error');
            passInput.focus();
            return;
          }

          if (password.length < 6) {
            showAlert('Password must be at least 6 characters long.', 'error');
            passInput.focus();
            return;
          }

          if (password !== confirmPassword) {
            showAlert('Passwords do not match. Please re-enter your password.', 'error');
            confirmInput.focus();
            return;
          }

          if (!consent) {
            showAlert('Please check the box to agree to the HIPAA medical privacy terms.', 'error');
            return;
          }

          const registerResult = MindfulAuth.register({
            name,
            preferredName,
            email,
            password,
            phone,
            focusArea,
            role: 'client'
          });

          if (!registerResult.success) {
            showAlert(registerResult.error, 'error');
            if (window.showToast) window.showToast(registerResult.error, 'error');
            return;
          }

          showAlert('Account registered successfully! Redirecting to login...', 'success');
          if (window.showToast) window.showToast('Account registered! Redirecting to login...', 'success');

          const submitBtn = document.getElementById('reg-submit-btn');
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Redirecting to Sign In...</span>';
          }

          setTimeout(() => {
            window.location.href = 'login.html?registered=true&email=' + encodeURIComponent(email);
          }, 800);
        });
      }
    });
  </script>
</body>
</html>
`;
}

function getProtectedHead(title, desc, targetPage) {
  const baseHead = getHead(title, desc);
  const guard = `
  <!-- Early Auth Guard: Sanctuary Pages require authentication -->
  <script>
    (function() {
      try {
        var user = JSON.parse(localStorage.getItem('mindfulpaths_auth_user') || localStorage.getItem('calmind_auth_user'));
        if (!user || !user.email) {
          window.location.replace('login.html?redirect=' + encodeURIComponent('${targetPage}') + '&reason=unauthorized');
        }
      } catch(e) {
        window.location.replace('login.html?redirect=' + encodeURIComponent('${targetPage}') + '&reason=unauthorized');
      }
    })();
  </script>
  `;
  return baseHead.replace('</head>', guard + '</head>');
}

// =========================================================================
// 3. dashboard.html — Client Sanctuary Overview
// =========================================================================
function buildDashboard() {
  const head = getProtectedHead('Client Sanctuary | Dashboard', 'Private client wellness space for sessions, mood tracking, and therapist notes.', 'dashboard.html');
  const nav = getPortalNav('dashboard');
  const content = `
  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    
    <!-- Greeting & Status Banner -->
    <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#294657] to-[#1d3340] text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
      <div class="space-y-2">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#8FAFC0]">
          <span class="w-2 h-2 rounded-full bg-[#8FAFC0] animate-pulse"></span> Active Therapeutic Care
        </div>
        <h1 class="font-heading text-3xl font-bold" id="dashboard-greeting-name">Good morning, Alex</h1>
        <p class="text-xs sm:text-sm text-white/80 max-w-lg">
          Your next session with <strong class="text-[#f0baa9]">Dr. Sarah Jenkins</strong> is scheduled for this Thursday at 2:00 PM EST via secure video.
        </p>
      </div>
      <div class="flex gap-3">
        <button type="button" class="open-appointment-btn px-6 py-3 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white text-xs font-bold shadow-md transition-all">
          Book New Session
        </button>
      </div>
    </div>

    <!-- Quick Stats Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
      <div class="p-5 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-1">
        <span class="text-[#27343B] dark:text-[#7d8d96]">Next Appointment</span>
        <div class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">Thu, 2:00 PM</div>
        <div class="text-[11px] text-[#8FAFC0] font-bold">Telehealth Link Active</div>
      </div>
      <div class="p-5 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-1">
        <span class="text-[#27343B] dark:text-[#7d8d96]">Sessions Completed</span>
        <div class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">14 Sessions</div>
        <div class="text-[11px] text-[#D7B7A5] font-bold">Consistent Progress</div>
      </div>
      <div class="p-5 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-1">
        <span class="text-[#27343B] dark:text-[#7d8d96]">Weekly Mood Pulse</span>
        <div class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">🙂 Calm &amp; Steady</div>
        <div class="text-[11px] text-[#8FAFC0] font-bold">+18% vs Last Month</div>
      </div>
      <div class="p-5 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-1">
        <span class="text-[#27343B] dark:text-[#7d8d96]">Therapist Messages</span>
        <div class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">1 New Note</div>
        <div class="text-[11px] text-[#D7B7A5] font-bold"><a href="messages.html" class="underline">View Message</a></div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Left Column: Quick Mood Log & Shared Notes -->
      <div class="lg:col-span-8 space-y-6">
        
        <!-- Live Quick Mood Logging Widget -->
        <div class="p-6 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-heading text-lg font-bold text-[#294657] dark:text-[#F8F6F1]">Today's Emotional Pulse</h3>
              <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">How are you feeling in this exact moment?</p>
            </div>
            <a href="mood-journal.html" class="text-xs font-bold text-[#D7B7A5] hover:underline">Full Journal &rarr;</a>
          </div>

          <!-- Emojis -->
          <div class="flex justify-between max-w-sm pt-2">
            <button type="button" class="mood-opt text-3xl hover:scale-125 transition-transform" data-mood="Great" title="Great">😊</button>
            <button type="button" class="mood-opt text-3xl hover:scale-125 transition-transform" data-mood="Good" title="Good">🙂</button>
            <button type="button" class="mood-opt text-3xl hover:scale-125 transition-transform p-1.5 rounded-xl bg-[#D7B7A5]/20 border border-[#D7B7A5]" data-mood="Okay" title="Okay">😐</button>
            <button type="button" class="mood-opt text-3xl hover:scale-125 transition-transform" data-mood="Low" title="Low">😔</button>
            <button type="button" class="mood-opt text-3xl hover:scale-125 transition-transform" data-mood="Difficult" title="Difficult">😣</button>
          </div>

          <div class="flex gap-2 pt-2">
            <input type="text" id="dashboard-mood-note" placeholder="Optional reflection (e.g. feeling grounded after a walk)..." class="flex-1 px-3.5 py-2.5 rounded-xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 text-xs">
            <button type="button" id="dashboard-mood-save" class="px-5 py-2.5 rounded-xl bg-[#D7B7A5] hover:bg-[#c5a390] text-white text-xs font-bold transition-all">Save</button>
          </div>
        </div>

        <!-- Latest Shared Note Snippet -->
        <div class="p-6 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah" class="w-10 h-10 rounded-xl object-cover">
              <div>
                <h3 class="font-heading text-base font-bold text-[#294657] dark:text-[#F8F6F1]">Latest Clinical Note from Dr. Jenkins</h3>
                <span class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Session #14 &middot; Post-Consultation Takeaway</span>
              </div>
            </div>
            <a href="shared-notes.html" class="text-xs font-bold text-[#D7B7A5] hover:underline">View All &rarr;</a>
          </div>

          <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#8FAFC0] text-xs text-[#27343B] dark:text-[#EBF1F4] leading-relaxed italic space-y-2">
            <p>
              &ldquo;Alex did wonderful work today untangling the belief that resting equates to laziness. Reminder for this week: when you notice the urge to check work emails past 7 PM, do 3 rounds of 4-4-4 box breathing and let your phone stay in the other room.&rdquo;
            </p>
          </div>
        </div>

      </div>

      <!-- Right Column: Next Session Action Card -->
      <div class="lg:col-span-4 space-y-6">
        
        <div class="p-6 rounded-3xl bg-[#F8F6F1] dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-4">
          <span class="text-[11px] font-bold uppercase text-[#D7B7A5] tracking-wider">Upcoming Session</span>
          <div class="space-y-1">
            <h4 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Individual CBT Session</h4>
            <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">With Dr. Sarah Jenkins, Psy.D.</p>
          </div>

          <div class="p-3.5 bg-white dark:bg-[#1e2d37] rounded-xl text-xs space-y-1.5">
            <div class="flex items-center gap-2 text-[#294657] dark:text-[#F8F6F1] font-semibold">
              <i class="far fa-calendar-alt text-[#D7B7A5]"></i> Thursday, Sept 12, 2026
            </div>
            <div class="flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
              <i class="far fa-clock text-[#8FAFC0]"></i> 2:00 PM - 2:50 PM EST
            </div>
            <div class="flex items-center gap-2 text-[#27343B] dark:text-[#7d8d96]">
              <i class="fas fa-video text-[#D7B7A5]"></i> Encrypted Video Room #MP-4821
            </div>
          </div>

          <a href="https://meet.google.com" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md">
            <i class="fas fa-video"></i> Join Video Consultation
          </a>

          <div class="flex justify-between text-xs pt-1">
            <a href="appointments.html" class="text-[#27343B] dark:text-[#7d8d96] hover:underline">Reschedule</a>
            <a href="messages.html" class="text-[#D7B7A5] font-bold hover:underline">Message Dr. Jenkins</a>
          </div>
        </div>

      </div>

    </div>

  </main>
  `;
  return head + nav + content + '<script src="assets/js/mood-journal.js"></script>' + getFooter();
}

// =========================================================================
// 4. appointments.html — Appointments Management
// =========================================================================
function buildAppointments() {
  const head = getProtectedHead('Appointments | Client Sanctuary', 'Manage upcoming and past therapy sessions.', 'appointments.html');
  const nav = getPortalNav('appointments');
  const content = `
  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
      <div>
        <h1 class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">Therapy Sessions</h1>
        <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">View upcoming appointments, past session dates, or schedule a new visit.</p>
      </div>
      <button type="button" class="open-appointment-btn px-6 py-3 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white text-xs font-bold shadow-md">
        <i class="far fa-calendar-plus mr-1.5"></i> Schedule New Session
      </button>
    </div>

    <!-- Upcoming Sessions Card -->
    <div class="p-6 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-4">
      <h2 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Upcoming Confirmed Sessions</h2>
      
      <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] border border-[#EBF1F4] dark:border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-[#D7B7A5]/20 text-[#D7B7A5] flex items-center justify-center text-lg font-bold">
            12
          </div>
          <div>
            <div class="text-xs font-bold text-[#294657] dark:text-[#F8F6F1]">Individual CBT Therapy Session</div>
            <div class="text-[11px] text-[#27343B] dark:text-[#7d8d96]">Thursday, Sept 12 &middot; 2:00 PM - 2:50 PM EST &middot; Dr. Sarah Jenkins</div>
            <span class="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[#8FAFC0]/20 text-[#294657] dark:text-[#8FAFC0] text-[10px] font-bold">Telehealth Video</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <a href="https://meet.google.com" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-[#294657] hover:bg-[#1d3340] text-white text-xs font-bold shadow-sm">
            Join Video
          </a>
          <button type="button" class="open-appointment-btn px-4 py-2.5 rounded-full bg-white dark:bg-[#17232b] text-[#27343B] dark:text-[#EBF1F4] border border-[#EBF1F4] dark:border-white/10 text-xs font-bold hover:border-[#D7B7A5]/50 transition-all" data-service="Individual Therapy" data-therapist="Dr. Sarah Jenkins">
            Reschedule
          </button>
        </div>
      </div>
    </div>

    <!-- Past Completed Sessions List -->
    <div class="p-6 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-4">
      <h2 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Past Completed Sessions</h2>
      
      <div class="space-y-3 text-xs">
        <div class="p-4 rounded-xl bg-[#F8F6F1]/60 dark:bg-[#1e2d37]/40 flex justify-between items-center">
          <div>
            <strong class="text-[#294657] dark:text-[#F8F6F1] block">Session #14 &middot; Individual CBT</strong>
            <span class="text-[#27343B] dark:text-[#7d8d96]">Sept 5, 2026 &middot; 50 Mins &middot; Dr. Sarah Jenkins</span>
          </div>
          <a href="shared-notes.html" class="font-bold text-[#D7B7A5] hover:underline">View Notes &rarr;</a>
        </div>

        <div class="p-4 rounded-xl bg-[#F8F6F1]/60 dark:bg-[#1e2d37]/40 flex justify-between items-center">
          <div>
            <strong class="text-[#294657] dark:text-[#F8F6F1] block">Session #13 &middot; Somatic Grounding</strong>
            <span class="text-[#27343B] dark:text-[#7d8d96]">Aug 29, 2026 &middot; 50 Mins &middot; Dr. Sarah Jenkins</span>
          </div>
          <a href="shared-notes.html" class="font-bold text-[#D7B7A5] hover:underline">View Notes &rarr;</a>
        </div>

        <div class="p-4 rounded-xl bg-[#F8F6F1]/60 dark:bg-[#1e2d37]/40 flex justify-between items-center">
          <div>
            <strong class="text-[#294657] dark:text-[#F8F6F1] block">Session #12 &middot; Cognitive Restructuring</strong>
            <span class="text-[#27343B] dark:text-[#7d8d96]">Aug 22, 2026 &middot; 50 Mins &middot; Dr. Sarah Jenkins</span>
          </div>
          <a href="shared-notes.html" class="font-bold text-[#D7B7A5] hover:underline">View Notes &rarr;</a>
        </div>
      </div>
    </div>

  </main>
  `;
  return head + nav + content + getFooter();
}

// =========================================================================
// 5. messages.html — Secure Counselor Messaging Center
// =========================================================================
function buildMessages() {
  const head = getProtectedHead('Counselor Messages | Client Sanctuary', 'Confidential chat thread with Dr. Sarah Jenkins.', 'messages.html');
  const nav = getPortalNav('messages');
  const content = `
  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="bg-white dark:bg-[#17232b] rounded-3xl border border-[#EBF1F4] dark:border-white/10 shadow-xl overflow-hidden flex flex-col h-[680px]">
      
      <!-- Chat Header -->
      <div class="p-5 bg-[#F8F6F1] dark:bg-[#1e2d37] border-b border-[#EBF1F4] dark:border-white/10 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah" class="w-10 h-10 rounded-xl object-cover">
          <div>
            <h2 class="font-heading text-base font-bold text-[#294657] dark:text-[#F8F6F1]">Dr. Sarah Jenkins, Psy.D.</h2>
            <span class="text-[11px] text-[#8FAFC0] font-bold"><i class="fas fa-circle text-[8px] mr-1"></i> Active Counselor</span>
          </div>
        </div>
        <span class="text-xs px-3 py-1 rounded-full bg-white dark:bg-[#17232b] text-[#27343B] dark:text-[#7d8d96] border border-[#EBF1F4] dark:border-white/10">
          Encrypted Non-Crisis Messaging
        </span>
      </div>

      <!-- Messages Stream -->
      <div id="chat-messages-stream" class="flex-1 p-6 overflow-y-auto space-y-4 text-xs">
        
        <!-- Therapist Message -->
        <div class="flex items-start gap-3 max-w-lg">
          <img src="${IMAGES.therapist_sarah}" alt="Dr. Sarah" class="w-7 h-7 rounded-full object-cover shrink-0">
          <div class="p-4 rounded-2xl rounded-tl-none bg-[#F8F6F1] dark:bg-[#1e2d37] text-[#27343B] dark:text-[#EBF1F4] space-y-1">
            <p>Hi Alex, hope your week has felt manageable. Remember to give yourself permission to step away from your desk for 5 minutes of mindful breath today.</p>
            <span class="text-[10px] text-[#5b6c75] block">Yesterday, 4:15 PM</span>
          </div>
        </div>

        <!-- Client Message -->
        <div class="flex items-start justify-end gap-3 max-w-lg ml-auto">
          <div class="p-4 rounded-2xl rounded-tr-none bg-[#D7B7A5] text-white space-y-1">
            <p>Thank you Dr. Sarah! Practiced the box breathing when anxiety flared up during our team standup. Really helped steady my heartbeat.</p>
            <span class="text-[10px] text-white/70 block">Today, 10:30 AM</span>
          </div>
          <div class="w-7 h-7 rounded-full bg-[#294657] text-white flex items-center justify-center font-bold text-[10px] shrink-0">AM</div>
        </div>

      </div>

      <!-- Input Area -->
      <div class="p-4 bg-[#F8F6F1] dark:bg-[#1e2d37] border-t border-[#EBF1F4] dark:border-white/10">
        <form id="chat-composer-form" class="flex items-center gap-3">
          <input type="text" id="chat-input-text" placeholder="Type a reflection or question for Dr. Jenkins..." class="flex-1 px-4 py-3 rounded-full bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 text-xs text-[#294657] dark:text-[#F8F6F1] focus:outline-none focus:border-[#D7B7A5]">
          <button type="submit" class="px-6 py-3 rounded-full bg-[#D7B7A5] hover:bg-[#c5a390] text-white font-bold text-xs shadow-md transition-all">
            Send Message
          </button>
        </form>
      </div>

    </div>
  </main>

  <script src="assets/js/messaging.js"></script>
  `;
  return head + nav + content + getFooter();
}

// =========================================================================
// 6. mood-journal.html — Mood Tracking & Trigger Reflection Journal
// =========================================================================
function buildMoodJournal() {
  return fs.readFileSync(path.join(__dirname, 'mood-journal.html'), 'utf8');
}

// =========================================================================
// 7. shared-notes.html — Shared Clinical Notes & Takeaways
// =========================================================================
function buildSharedNotes() {
  const head = getProtectedHead('Shared Clinical Notes | Client Sanctuary', 'Read post-session takeaways, grounding homework, and reflections from your therapist.', 'shared-notes.html');
  const nav = getPortalNav('notes');
  const content = `
  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    <div>
      <h1 class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">Shared Clinical Notes</h1>
      <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">Curated takeaways, cognitive reframes, and grounding rituals recorded with your clinician.</p>
    </div>

    <div class="space-y-6">
      
      <!-- Note 1 -->
      <div class="p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 shadow-lg space-y-4">
        <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pb-4 border-b border-[#EBF1F4] dark:border-white/10">
          <div>
            <span class="text-xs font-bold uppercase text-[#D7B7A5]">Session #14 Takeaway</span>
            <h2 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Reframing Perfectionism &amp; Rest</h2>
          </div>
          <span class="text-xs text-[#27343B] dark:text-[#7d8d96]">Sept 5, 2026 &middot; Dr. Sarah Jenkins</span>
        </div>

        <div class="text-xs text-[#27343B] dark:text-[#EBF1F4] space-y-3 leading-relaxed">
          <p><strong>Core Breakthrough:</strong> Alex recognized that taking rest felt emotionally threatening because childhood attachment rewarded productivity above presence. We reframed rest not as an earned prize, but as a biological maintenance prerequisite.</p>
          <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] border-l-4 border-[#D7B7A5] space-y-1">
            <strong class="text-[#294657] dark:text-[#F8F6F1] block">Homework &amp; Somatic Rituals for the Week:</strong>
            <ul class="list-disc pl-5 space-y-1">
              <li>Practice 4 cycles of box breathing before turning on laptop in the morning.</li>
              <li>Set a strict 'screens-off' boundary at 8:00 PM on Tuesday and Thursday.</li>
              <li>Journal one moment each evening where you felt content without having to 'achieve' anything.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Note 2 -->
      <div class="p-8 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 shadow-lg space-y-4">
        <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pb-4 border-b border-[#EBF1F4] dark:border-white/10">
          <div>
            <span class="text-xs font-bold uppercase text-[#8FAFC0]">Session #13 Takeaway</span>
            <h2 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Physical Panic Sensations &amp; Vagal Toning</h2>
          </div>
          <span class="text-xs text-[#27343B] dark:text-[#7d8d96]">Aug 29, 2026 &middot; Dr. Sarah Jenkins</span>
        </div>

        <div class="text-xs text-[#27343B] dark:text-[#EBF1F4] space-y-3 leading-relaxed">
          <p><strong>Core Breakthrough:</strong> Explored how heart palpitations during public presentations are sympathetic nervous surges, not signs of heart failure or embarrassment. Taught bilateral hand tapping to anchor.</p>
        </div>
      </div>

    </div>
  </main>
  `;
  return head + nav + content + getFooter();
}

// =========================================================================
// 8. admin-dashboard.html — Clinician & Practice Workspace
// =========================================================================
function buildAdminDashboard() {
  const head = getProtectedHead('Clinician Workspace | Practice Portal', 'Clinical management workspace for caseloads, notes, and session schedules.', 'admin-dashboard.html');
  const content = `
  <!-- Clinician Workspace Top Bar -->
  <header class="sticky top-0 z-40 bg-[#1d3340] text-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-xl bg-[#D7B7A5] flex items-center justify-center text-white font-bold text-xs">
          MP
        </div>
        <span class="font-heading font-bold text-lg">Clinician Workspace</span>
        <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#8FAFC0]/30 text-[#8FAFC0]">Dr. Sarah Jenkins</span>
      </div>

      <div class="flex items-center gap-3 text-xs">
        <a href="index.html" class="hover:text-[#f0baa9]">View Public Site</a>
        <span>|</span>
        <button type="button" id="auth-logout-btn" data-action="logout" class="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-all">
          Sign Out
        </button>
      </div>
    </div>
  </header>

  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    <div>
      <h1 class="font-heading text-3xl font-bold text-[#294657] dark:text-[#F8F6F1]">Practice &amp; Caseload Overview</h1>
      <p class="text-xs text-[#27343B] dark:text-[#7d8d96]">Confidential clinician management view for Dr. Sarah Jenkins, Psy.D.</p>
    </div>

    <!-- Practice Metrics -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
      <div class="p-5 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-1">
        <span class="text-[#27343B] dark:text-[#7d8d96]">Active Caseload</span>
        <div class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">28 Clients</div>
        <div class="text-[11px] text-[#8FAFC0] font-bold">Capacity: 92%</div>
      </div>
      <div class="p-5 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-1">
        <span class="text-[#27343B] dark:text-[#7d8d96]">Today's Consultations</span>
        <div class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">5 Sessions</div>
        <div class="text-[11px] text-[#D7B7A5] font-bold">Next at 2:00 PM</div>
      </div>
      <div class="p-5 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-1">
        <span class="text-[#27343B] dark:text-[#7d8d96]">Pending Intakes</span>
        <div class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">3 Requests</div>
        <div class="text-[11px] text-[#8FAFC0] font-bold">Review Required</div>
      </div>
      <div class="p-5 rounded-2xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-1">
        <span class="text-[#27343B] dark:text-[#7d8d96]">Draft Progress Notes</span>
        <div class="font-heading text-2xl font-bold text-[#294657] dark:text-[#F8F6F1]">2 Pending</div>
        <div class="text-[11px] text-[#D7B7A5] font-bold">Due Today</div>
      </div>
    </div>

    <!-- Today's Schedule -->
    <div class="p-6 rounded-3xl bg-white dark:bg-[#17232b] border border-[#EBF1F4] dark:border-white/10 space-y-4">
      <h2 class="font-heading text-xl font-bold text-[#294657] dark:text-[#F8F6F1]">Today's Client Schedule</h2>
      <div class="space-y-3 text-xs">
        <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] flex justify-between items-center">
          <div>
            <strong class="text-[#294657] dark:text-[#F8F6F1] block">Alex Morgan &middot; Individual CBT (Session #15)</strong>
            <span class="text-[#27343B] dark:text-[#7d8d96]">2:00 PM - 2:50 PM &middot; Telehealth Room #MP-4821</span>
          </div>
          <span class="px-3 py-1 rounded-full bg-[#294657] text-white font-bold">Start Session</span>
        </div>
        <div class="p-4 rounded-2xl bg-[#F8F6F1] dark:bg-[#1e2d37] flex justify-between items-center">
          <div>
            <strong class="text-[#294657] dark:text-[#F8F6F1] block">Jordan Lee &middot; Anxiety Intake Consultation</strong>
            <span class="text-[#27343B] dark:text-[#7d8d96]">3:30 PM - 4:15 PM &middot; In-Person Suite A</span>
          </div>
          <span class="px-3 py-1 rounded-full bg-white dark:bg-[#17232b] text-[#294657] dark:text-[#F8F6F1] border border-[#EBF1F4] dark:border-white/10 font-bold">Client Arrived</span>
        </div>
      </div>
    </div>

  </main>
  `;
  return head + content + getFooter();
}

// Write the files
const portalPages = [
  { file: 'login.html', fn: buildLogin },
  { file: 'register.html', fn: buildRegister },
  { file: 'dashboard.html', fn: buildDashboard },
  { file: 'appointments.html', fn: buildAppointments },
  { file: 'messages.html', fn: buildMessages },
  { file: 'mood-journal.html', fn: buildMoodJournal },
  { file: 'shared-notes.html', fn: buildSharedNotes },
  { file: 'admin-dashboard.html', fn: buildAdminDashboard },
];

portalPages.forEach(p => {
  fs.writeFileSync(path.join(__dirname, p.file), p.fn(), 'utf8');
  console.log(`✓ Generated ${p.file}`);
});
