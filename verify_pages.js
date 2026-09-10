const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'index.html',
  'home-2.html',
  'about.html',
  'services.html',
  'service-details.html',
  'service-individual-therapy.html',
  'service-couples-therapy.html',
  'service-trauma-emdr.html',
  'service-teen-counseling.html',
  'service-telehealth.html',
  'service-mindfulness.html',
  'therapists.html',
  'therapist-details.html',
  'resources.html',
  'blog.html',
  'blog-details.html',
  'contact.html',
  'pricing.html',
  'login.html',
  'register.html',
  'dashboard.html',
  'appointments.html',
  'messages.html',
  'mood-journal.html',
  'shared-notes.html',
  'admin-dashboard.html',
  '404.html',
  'coming-soon.html'
];

console.log('--- AUDITING 22 REQUIRED PAGES ---');

let missing = [];
let allValid = true;

requiredFiles.forEach(f => {
  const p = path.join(__dirname, f);
  if (!fs.existsSync(p)) {
    missing.push(f);
    allValid = false;
  } else {
    const stats = fs.statSync(p);
    if (stats.size === 0) {
      console.error(`ERROR: ${f} is empty!`);
      allValid = false;
    } else {
      console.log(`✓ ${f} (${stats.size} bytes)`);
    }
  }
});

if (missing.length > 0) {
  console.error('Missing files:', missing);
} else {
  console.log('\n✓ ALL 22 REQUIRED FILES PRESENT AND NON-EMPTY!');
}

console.log('\n--- AUDITING INTERNAL LINKS ---');
const hrefRegex = /href=["']([^"']+\.html)(#[^"']*)?["']/g;
let brokenLinks = [];

requiredFiles.forEach(f => {
  const content = fs.readFileSync(path.join(__dirname, f), 'utf8');
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const target = match[1];
    if (!target.startsWith('http') && !fs.existsSync(path.join(__dirname, target))) {
      brokenLinks.push({ from: f, to: target });
    }
  }
});

if (brokenLinks.length > 0) {
  console.error('Broken links found:', brokenLinks);
} else {
  console.log('✓ 100% INTERNAL LINKS VALID (0 broken links found)!');
}

console.log('\n--- AUDITING HERO IMAGE ON HOME-2.HTML ---');
const home2Content = fs.readFileSync(path.join(__dirname, 'home-2.html'), 'utf8');
if (home2Content.includes('hero-calmind.jpg')) {
  console.log('✓ hero-calmind.jpg is referenced on home-2.html');
} else {
  console.error('✗ hero-calmind.jpg NOT found on home-2.html');
}

console.log('\n--- AUDITING JAVASCRIPT ENGINES ---');
const jsFiles = [
  'assets/js/main.js',
  'assets/js/wellness-journey.js',
  'assets/js/breathing.js',
  'assets/js/mood-journal.js',
  'assets/js/messaging.js',
  'assets/js/auth.js'
];
jsFiles.forEach(f => {
  if (fs.existsSync(path.join(__dirname, f))) {
    console.log(`✓ ${f} exists`);
  } else {
    console.error(`✗ ${f} missing!`);
  }
});
