/**
 * Mindful Paths — Authentication & Route Guard Engine
 * Secure client/clinician authentication with persistent registered accounts
 */

window.MindfulAuth = (function () {
  'use strict';

  const AUTH_KEY = 'mindfulpaths_auth_user';
  const FALLBACK_KEY = 'calmind_auth_user';
  const REGISTERED_USERS_KEY = 'mindfulpaths_registered_users';

  const DEFAULT_USERS = [
    {
      name: 'Alex Morgan',
      email: 'alex@example.com',
      password: 'demo12345',
      role: 'client',
      phone: '(555) 234-5678',
      focusArea: 'anxiety'
    },
    {
      name: 'Dr. Sarah Jenkins',
      email: 'sarah.jenkins@mindfulpaths.com',
      password: 'demo12345',
      role: 'admin',
      phone: '(555) 890-1234',
      focusArea: 'clinical'
    }
  ];

  const PROTECTED_PAGES = [
    'dashboard.html',
    'client-dashboard.html',
    'appointments.html',
    'messages.html',
    'mood-journal.html',
    'shared-notes.html',
    'admin-dashboard.html'
  ];

  function getRegisteredUsers() {
    try {
      const data = localStorage.getItem(REGISTERED_USERS_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading registered users from localStorage:', e);
    }
    try {
      localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(DEFAULT_USERS));
    } catch (e) {}
    return DEFAULT_USERS.slice();
  }

  function saveRegisteredUsers(users) {
    try {
      localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Error saving registered users to localStorage:', e);
    }
  }

  function register(userData) {
    if (!userData || !userData.email || !userData.password) {
      return { success: false, error: 'Email and password are required for registration.' };
    }

    const email = userData.email.trim().toLowerCase();
    const name = (userData.name || '').trim();
    const password = userData.password;

    if (!name) {
      return { success: false, error: 'Please enter your full legal name.' };
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters long.' };
    }

    const users = getRegisteredUsers();
    const exists = users.some(u => u.email.toLowerCase() === email);
    if (exists) {
      return {
        success: false,
        error: 'An account with this email address is already registered. Please sign in.'
      };
    }

    const role = (userData.role || (email.includes('admin') || email.includes('dr.') ? 'admin' : 'client'));
    const newUser = {
      name: name,
      preferredName: (userData.preferredName || '').trim() || name.split(' ')[0],
      email: email,
      password: password,
      role: role,
      phone: userData.phone || '',
      focusArea: userData.focusArea || 'general',
      registeredAt: new Date().toISOString()
    };

    users.push(newUser);
    saveRegisteredUsers(users);

    return { success: true, user: newUser };
  }

  function authenticate(email, password) {
    if (!email || !password) {
      return { success: false, error: 'Please enter both your email address and password.' };
    }

    const cleanEmail = email.trim().toLowerCase();
    const users = getRegisteredUsers();
    const user = users.find(u => u.email.toLowerCase() === cleanEmail);

    if (!user) {
      return {
        success: false,
        error: 'No registered account found with this email address. Please complete intake registration first.'
      };
    }

    if (user.password !== password) {
      return {
        success: false,
        error: 'Incorrect password entered. Please check your password and try again.'
      };
    }

    return { success: true, user };
  }

  function getUser() {
    try {
      const data = localStorage.getItem(AUTH_KEY) || localStorage.getItem(FALLBACK_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  function isAuthenticated() {
    const u = getUser();
    return !!(u && u.email);
  }

  function login(userData = {}) {
    const role = userData.role || (userData.email && (userData.email.includes('admin') || userData.email.includes('dr.')) ? 'admin' : 'client');
    const defaultName = role === 'admin' ? 'Dr. Sarah Jenkins' : 'Alex Morgan';
    const defaultEmail = role === 'admin' ? 'sarah.jenkins@mindfulpaths.com' : 'alex@example.com';

    const user = {
      name: userData.name && userData.name.trim() ? userData.name.trim() : defaultName,
      email: userData.email && userData.email.trim() ? userData.email.trim().toLowerCase() : defaultEmail,
      role: role,
      token: 'mp_jwt_' + Math.random().toString(36).substring(2, 10),
      loggedInAt: new Date().toISOString()
    };

    const json = JSON.stringify(user);
    try {
      localStorage.setItem(AUTH_KEY, json);
      localStorage.setItem(FALLBACK_KEY, json);
    } catch (e) {}
    updateNavState();
    return user;
  }

  function logout(redirectUrl = 'login.html?logged_out=true') {
    try {
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(FALLBACK_KEY);
    } catch (e) {}
    updateNavState();
    if (window.showToast) {
      window.showToast('You have been signed out safely from your sanctuary.', 'info');
    }
    setTimeout(() => {
      window.location.href = redirectUrl;
    }, 350);
  }

  function requireAuth(target = 'dashboard.html') {
    if (!isAuthenticated()) {
      const page = encodeURIComponent(window.location.pathname.split('/').pop() || target);
      window.location.replace(`login.html?redirect=${page}&reason=unauthorized`);
      return false;
    }
    return true;
  }

  function checkRouteGuard() {
    const page = (window.location.pathname.split('/').pop() || '').toLowerCase();
    if (PROTECTED_PAGES.includes(page)) {
      if (!isAuthenticated()) {
        const redirectPage = encodeURIComponent(page);
        window.location.replace(`login.html?redirect=${redirectPage}&reason=unauthorized`);
        return false;
      }
    }
    return true;
  }

  function updateNavState() {
    const user = getUser();
    const path = (window.location.pathname.split('/').pop() || '').toLowerCase();
    const isAuthPage = path === 'login.html' || path === 'register.html';

    document.querySelectorAll('.nav-auth-btn').forEach(btn => {
      if (!isAuthPage) {
        if (user && user.email) {
          btn.href = user.role === 'admin' ? 'admin-dashboard.html' : 'dashboard.html';
          const label = btn.querySelector('.nav-auth-text');
          if (label) {
            const firstName = user.name ? user.name.split(' ')[0] : 'Portal';
            label.textContent = firstName;
          }
          btn.title = 'Access Sanctuary (' + user.name + ')';
        } else {
          btn.href = 'login.html';
          const label = btn.querySelector('.nav-auth-text');
          if (label) label.textContent = 'Client Login';
          btn.title = 'Sign In to Sanctuary';
        }
      }
    });

    const greetingEl = document.getElementById('dashboard-greeting-name');
    if (greetingEl && user && user.name) {
      greetingEl.textContent = 'Good morning, ' + user.name.split(' ')[0];
    }

    const portalUserName = document.getElementById('portal-user-name');
    if (portalUserName && user && user.name) {
      portalUserName.textContent = user.name;
    }
  }

  // Pre-initialize registered users store
  getRegisteredUsers();

  // Execute Route Guard immediately
  checkRouteGuard();

  document.addEventListener('click', (e) => {
    const logoutBtn = e.target.closest('#auth-logout-btn, #dashboard-logout-btn, [data-action="logout"]');
    if (logoutBtn) {
      e.preventDefault();
      logout('login.html?logged_out=true');
    }
  });

  document.addEventListener('DOMContentLoaded', updateNavState);

  return {
    getUser,
    isAuthenticated,
    getRegisteredUsers,
    register,
    authenticate,
    login,
    logout,
    requireAuth,
    checkRouteGuard,
    updateNavState
  };
})();

// Bridge CalmindAuth to MindfulAuth for complete cross-compatibility
window.CalmindAuth = window.MindfulAuth;
