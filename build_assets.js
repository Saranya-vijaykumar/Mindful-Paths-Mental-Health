const fs = require('fs');
const css = `/* ===================================================================
   Mindful Paths — Premium Multipurpose & Psychological Wellness Template
   Palette: Terracotta (#C8755D), Warm Cream (#F7F1E8), Sage (#8FA58D), 
            Deep Teal (#285A58), Warm Brown (#6B5145), Pure White (#FFFFFF)
   Typography: Playfair Display (Serif), Plus Jakarta Sans, Cairo (RTL)
   =================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

:root {
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-rtl: 'Cairo', 'Plus Jakarta Sans', sans-serif;

  /* Mindful Paths Luxury Wellness Palette */
  --color-terracotta: #C8755D;
  --color-terracotta-hover: #b4634c;
  --color-terracotta-light: #f7ebe7;
  --color-cream: #F7F1E8;
  --color-cream-card: #FFFFFF;
  --color-sage: #8FA58D;
  --color-sage-light: #edf2ed;
  --color-teal: #285A58;
  --color-teal-dark: #1e4543;
  --color-teal-light: #e6efee;
  --color-brown: #6B5145;
  --color-brown-light: #a48c82;
  
  /* Dark Mode Tokens */
  --color-dark-bg: #121818;
  --color-dark-surface: #182221;
  --color-dark-border: rgba(247, 241, 232, 0.12);
  --color-dark-text: #F7F1E8;
}

/* Base Document Setup */
html {
  font-family: var(--font-sans);
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  background-color: var(--color-cream);
  color: var(--color-brown);
  transition: background-color 0.3s ease, color 0.3s ease;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Headings */
h1, h2, h3, h4, h5, h6, .font-heading {
  font-family: var(--font-heading);
  letter-spacing: -0.015em;
  color: var(--color-teal);
}

.dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6, .dark .font-heading {
  color: #F7F1E8;
}

/* Dark Mode Styles */
html.dark body {
  background-color: var(--color-dark-bg);
  color: #e5ddd5;
}

/* RTL Support */
[dir="rtl"] {
  font-family: var(--font-rtl);
  text-align: right;
}

[dir="rtl"] h1, [dir="rtl"] h2, [dir="rtl"] h3, [dir="rtl"] h4, [dir="rtl"] .font-heading {
  font-family: var(--font-rtl);
}

[dir="rtl"] .rtl-flip {
  transform: scaleX(-1);
}

/* Cursors */
a, button, [role="button"], input[type="submit"], select, .clickable-card {
  cursor: pointer;
}

/* Luxury Elevation Cards */
.card-wellness {
  background-color: #FFFFFF;
  border: 1px solid rgba(107, 81, 69, 0.1);
  border-radius: 1.25rem;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
}

.card-wellness:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px -8px rgba(40, 90, 88, 0.12), 0 4px 12px -2px rgba(200, 117, 93, 0.08);
  border-color: rgba(200, 117, 93, 0.3);
}

.dark .card-wellness {
  background-color: var(--color-dark-surface);
  border-color: var(--color-dark-border);
}

.dark .card-wellness:hover {
  box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.4), 0 4px 12px -2px rgba(200, 117, 93, 0.2);
  border-color: rgba(200, 117, 93, 0.4);
}

/* Image Zoom Wrapper */
.img-zoom-wrapper {
  overflow: hidden;
  position: relative;
  border-radius: inherit;
}

.img-zoom-wrapper img {
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-wellness:hover .img-zoom-wrapper img,
.img-zoom-wrapper:hover img {
  transform: scale(1.05);
}

/* Primary Button with Terracotta Highlight */
.btn-terracotta {
  background-color: var(--color-terracotta);
  color: #FFFFFF;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.8125rem;
  padding: 0.75rem 1.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 6px 20px -2px rgba(200, 117, 93, 0.35);
  transition: all 0.25s ease;
}

.btn-terracotta:hover {
  background-color: var(--color-terracotta-hover);
  transform: scale(1.03);
  box-shadow: 0 10px 25px -2px rgba(200, 117, 93, 0.45);
}

.btn-terracotta:active {
  transform: scale(0.97);
}

/* Secondary Button Teal/Outline */
.btn-outline-teal {
  background-color: transparent;
  color: var(--color-teal);
  border: 1.5px solid var(--color-teal);
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.8125rem;
  padding: 0.75rem 1.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.25s ease;
}

.btn-outline-teal:hover {
  background-color: var(--color-teal);
  color: #FFFFFF;
  transform: scale(1.03);
}

.dark .btn-outline-teal {
  color: #F7F1E8;
  border-color: rgba(247, 241, 232, 0.4);
}

.dark .btn-outline-teal:hover {
  background-color: var(--color-teal);
  border-color: var(--color-teal);
  color: #FFFFFF;
}

/* Wellness Journey Connecting Line */
.journey-path-container {
  position: relative;
}

.journey-path-line {
  position: absolute;
  top: 50%;
  left: 5%;
  right: 5%;
  height: 2px;
  background: linear-gradient(to right, #8FA58D, #C8755D, #285A58);
  z-index: 0;
  opacity: 0.3;
}

@media (max-width: 1023px) {
  .journey-path-line {
    top: 5%;
    bottom: 5%;
    left: 2rem;
    width: 2px;
    height: auto;
    right: auto;
  }
}

/* Take a Breath Interactive Circle */
.breathing-visual-circle {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 3px solid rgba(40, 90, 88, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 4s ease-in-out, box-shadow 4s ease-in-out, background-color 4s ease-in-out, border-color 4s ease-in-out;
  box-shadow: 0 0 0 0 rgba(143, 165, 141, 0.4);
}

.breathing-visual-circle.inhale {
  transform: scale(1.22);
  background-color: rgba(143, 165, 141, 0.18);
  border-color: rgba(143, 165, 141, 0.8);
  box-shadow: 0 0 45px 15px rgba(143, 165, 141, 0.3);
}

.breathing-visual-circle.hold {
  transform: scale(1.22);
  background-color: rgba(40, 90, 88, 0.18);
  border-color: rgba(40, 90, 88, 0.8);
  box-shadow: 0 0 50px 20px rgba(40, 90, 88, 0.3);
}

.breathing-visual-circle.exhale {
  transform: scale(0.92);
  background-color: rgba(200, 117, 93, 0.12);
  border-color: rgba(200, 117, 93, 0.6);
  box-shadow: 0 0 15px 5px rgba(200, 117, 93, 0.2);
}

/* Toast Container */
#toast-container {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 24rem;
  pointer-events: none;
}

[dir="rtl"] #toast-container {
  right: auto;
  left: 1.5rem;
}

/* Custom Scrollbars */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(107, 81, 69, 0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(40, 90, 88, 0.25);
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(40, 90, 88, 0.45);
}

.dark ::-webkit-scrollbar-thumb {
  background: rgba(247, 241, 232, 0.25);
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

fs.writeFileSync('assets/css/style.css', css);
console.log('assets/css/style.css written successfully.');
