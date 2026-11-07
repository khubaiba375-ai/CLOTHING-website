// ZK STORE — Clean Single-Scope Universal Bundle Generator (with Backend API Client)
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const orderedFiles = [
  'js/data/categories.js',
  'js/data/products.js',
  'js/services/api.js',
  'js/store/storage.js',
  'js/store/state.js',
  'js/components/toast.js',
  'js/components/navbar.js',
  'js/components/productCard.js',
  'js/components/quickViewModal.js',
  'js/components/cartDrawer.js',
  'js/components/wishlistDrawer.js',
  'js/components/searchModal.js',
  'js/components/sizeGuideModal.js',
  'js/components/footer.js',
  'js/pages/home.js',
  'js/pages/men.js',
  'js/pages/women.js',
  'js/pages/newArrivals.js',
  'js/pages/bestSellers.js',
  'js/pages/categories.js',
  'js/pages/productDetail.js',
  'js/pages/searchPage.js',
  'js/pages/cartPage.js',
  'js/pages/wishlistPage.js',
  'js/pages/checkoutPage.js',
  'js/pages/accountPage.js',
  'js/pages/orderTracking.js',
  'js/pages/aboutPage.js',
  'js/pages/contactPage.js',
  'js/pages/faqPage.js',
  'js/pages/shippingPage.js',
  'js/pages/privacyPage.js',
  'js/pages/termsPage.js',
  'js/app.js'
];

let bundleCode = `/* ==========================================================================
   ZK STORE — UNIVERSAL FULL-STACK STANDALONE BUNDLE
   All 20 Pages, Components, 50 Products Catalog, Backend API Client & Reactive Store
   ========================================================================== */
(function() {
  'use strict';

`;

for (const rel of orderedFiles) {
  let content = fs.readFileSync(path.join(ROOT, rel), 'utf8');

  // Strip all import statements
  content = content.replace(/^import\s+.*?;\s*$/gm, '');
  content = content.replace(/import\s*\{[\s\S]*?\}\s*from\s*['"].*?['"];?/g, '');

  // Strip export keywords
  content = content.replace(/^export\s+const\s+/gm, 'const ');
  content = content.replace(/^export\s+function\s+/gm, 'function ');
  content = content.replace(/^export\s+class\s+/gm, 'class ');
  content = content.replace(/^export\s+default\s+/gm, '');

  bundleCode += `\n/* ==================== FILE: ${rel} ==================== */\n`;
  bundleCode += content.trim();
  bundleCode += `\n`;
}

bundleCode += `\n})();\n`;

fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'dist', 'bundle.js'), bundleCode, 'utf8');
console.log('Successfully built dist/bundle.js with Backend API! Size:', bundleCode.length, 'bytes');
