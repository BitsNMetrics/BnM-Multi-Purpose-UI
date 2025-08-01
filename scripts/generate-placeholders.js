const fs = require('fs');
const path = require('path');

// Template configurations
const templates = [
  { id: 'startup', name: 'Startup Launch', color1: '#ef4444', color2: '#f97316' },
  { id: 'agency', name: 'Agency & Consulting', color1: '#1e40af', color2: '#3b82f6' },
  { id: 'event', name: 'Event & Conference', color1: '#8b5cf6', color2: '#ec4899' },
  { id: 'fitness', name: 'Health & Fitness', color1: '#dc2626', color2: '#ef4444' },
  { id: 'education', name: 'Education & Courses', color1: '#059669', color2: '#10b981' },
  { id: 'crypto', name: 'Crypto & Finance', color1: '#f59e0b', color2: '#f97316' },
  { id: 'mobile-app', name: 'Mobile App', color1: '#6366f1', color2: '#8b5cf6' }
];

// Generate SVG logo
function generateLogoSVG(template) {
  return `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="40" height="40" rx="8" fill="url(#gradient)"/>
  <text x="20" y="26" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="bold">${template.id.substring(0, 2).toUpperCase()}</text>
  <text x="50" y="20" fill="#374151" font-family="Arial, sans-serif" font-size="16" font-weight="bold">${template.name.split(' ')[0]}</text>
  <text x="50" y="35" fill="#6B7280" font-family="Arial, sans-serif" font-size="12">${template.name.split(' ').slice(1).join(' ')}</text>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${template.color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${template.color2};stop-opacity:1" />
    </linearGradient>
  </defs>
</svg>`;
}

// Generate SVG thumbnail
function generateThumbnailSVG(template) {
  return `<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="#f8fafc"/>
  <rect x="20" y="20" width="360" height="260" rx="12" fill="white" stroke="#e2e8f0" stroke-width="2"/>
  <rect x="40" y="40" width="320" height="60" rx="8" fill="url(#gradient)"/>
  <text x="200" y="75" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="18" font-weight="bold">${template.name}</text>
  <rect x="40" y="120" width="150" height="40" rx="6" fill="#f1f5f9"/>
  <rect x="210" y="120" width="150" height="40" rx="6" fill="#f1f5f9"/>
  <rect x="40" y="180" width="320" height="80" rx="6" fill="#f8fafc"/>
  <text x="200" y="220" text-anchor="middle" fill="#64748b" font-family="Arial, sans-serif" font-size="14">Professional landing page</text>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${template.color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${template.color2};stop-opacity:1" />
    </linearGradient>
  </defs>
</svg>`;
}

// Generate SVG preview
function generatePreviewSVG(template) {
  return `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#f8fafc"/>
  <rect x="40" y="40" width="720" height="520" rx="16" fill="white" stroke="#e2e8f0" stroke-width="2"/>
  <rect x="80" y="80" width="640" height="120" rx="12" fill="url(#gradient)"/>
  <text x="400" y="140" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="32" font-weight="bold">${template.name}</text>
  <text x="400" y="170" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16">Professional landing page</text>
  <rect x="80" y="240" width="300" height="80" rx="8" fill="#f1f5f9"/>
  <rect x="420" y="240" width="300" height="80" rx="8" fill="#f1f5f9"/>
  <rect x="80" y="360" width="640" height="160" rx="8" fill="#f8fafc"/>
  <text x="400" y="420" text-anchor="middle" fill="#64748b" font-family="Arial, sans-serif" font-size="18">Features • Pricing • Testimonials • FAQ</text>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${template.color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${template.color2};stop-opacity:1" />
    </linearGradient>
  </defs>
</svg>`;
}

// Generate all placeholder files
templates.forEach(template => {
  // Generate logo
  const logoSVG = generateLogoSVG(template);
  fs.writeFileSync(path.join(__dirname, '../public/logos', `${template.id}.svg`), logoSVG);
  
  // Generate thumbnail
  const thumbnailSVG = generateThumbnailSVG(template);
  fs.writeFileSync(path.join(__dirname, '../public/thumbnails', `${template.id}.jpg`), thumbnailSVG);
  
  // Generate preview
  const previewSVG = generatePreviewSVG(template);
  fs.writeFileSync(path.join(__dirname, '../public/previews', `${template.id}.jpg`), previewSVG);
});

console.log('Generated placeholder images for all templates!'); 