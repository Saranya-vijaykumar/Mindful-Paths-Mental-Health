const fs = require('fs');
const path = require('path');

console.log('=== SereneMind Mental Health Counseling Center Verification ===\n');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
console.log(`Found ${htmlFiles.length} HTML files to inspect.`);

// 1. Check Image Uniqueness
console.log('\n--- 1. Image Uniqueness Audit ---');
const imageUsage = new Map(); // url -> [files]

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/https:\/\/images\.unsplash\.com\/[^\s"'>]+/g) || [];
  matches.forEach(url => {
    // Normalize url without size query params if needed, or by exact id
    const baseId = url.split('?')[0];
    if (!imageUsage.has(baseId)) {
      imageUsage.set(baseId, []);
    }
    imageUsage.get(baseId).push(file);
  });
});

let duplicatesFound = 0;
imageUsage.forEach((files, url) => {
  const uniqueFiles = [...new Set(files)];
  // We allow the same therapist image on their bio page and the therapists directory page,
  // but let's check if unrelated sections repeat images.
  if (uniqueFiles.length > 2) {
    console.warn(`[Potential Image Overuse] ${url} used in: ${uniqueFiles.join(', ')}`);
    duplicatesFound++;
  }
});
if (duplicatesFound === 0) {
  console.log('✓ Image audit passed: No excessive image duplication detected.');
}

// 2. Check Internal HTML Links
console.log('\n--- 2. Internal Link Integrity Audit ---');
let brokenLinks = 0;
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const linkMatches = content.match(/href="([^"#:]+\.html)"/g) || [];
  linkMatches.forEach(l => {
    const target = l.replace('href="', '').replace('"', '');
    if (!fs.existsSync(target)) {
      console.error(`[BROKEN LINK] in ${file} -> ${target}`);
      brokenLinks++;
    }
  });
});
if (brokenLinks === 0) {
  console.log('✓ Link audit passed: 100% of internal HTML links point to valid existing files.');
}

// 3. Check for leftover swimming/aquatic artifacts
console.log('\n--- 3. Aquatic/Swimming Artifact Scan ---');
let aquaticMatches = 0;
const aquaticTerms = ['aquapro', 'aquafit', 'aquariumpro', 'swimmer', 'olympic-50m', 'swim lessons'];
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8').toLowerCase();
  aquaticTerms.forEach(term => {
    if (content.includes(term)) {
      console.warn(`[Aquatic Term Found] "${term}" in ${file}`);
      aquaticMatches++;
    }
  });
});
if (aquaticMatches === 0) {
  console.log('✓ Aquatic scan passed: Zero swimming or aquatic remnants found.');
}

// 4. Verify Core Required Pages exist
console.log('\n--- 4. Required Pages Checklist ---');
const requiredPages = [
  'index.html',
  'home-agency.html',
  'about.html',
  'services.html',
  'service-details.html',
  'therapists.html',
  'resources.html',
  'pricing.html',
  'blog.html',
  'blog-details.html',
  'contact.html',
  'admin-dashboard.html',
  'client-dashboard.html',
  'login.html',
  'register.html',
  '404.html',
  'maintenance.html'
];

requiredPages.forEach(p => {
  if (fs.existsSync(p)) {
    const size = fs.statSync(p).size;
    console.log(`✓ ${p.padEnd(25)} (${size} bytes)`);
  } else {
    console.error(`✗ MISSING PAGE: ${p}`);
  }
});

console.log('\n=== Verification Complete ===');
