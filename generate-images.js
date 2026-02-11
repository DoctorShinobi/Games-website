#!/usr/bin/env node

// Simple image generator using canvas
const fs = require('fs');
const path = require('path');

// Since we're in a static context, we'll create SVG placeholders instead
// that look professional and match the design

const images = {
    'deadwatch-button.png': `<svg width="280" height="280" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#2d1a3e;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#1a0f1e;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="280" height="280" fill="url(#grad1)"/>
        <text x="140" y="90" font-size="48" font-weight="bold" fill="#00d4ff" text-anchor="middle" font-family="Arial">DEAD</text>
        <text x="140" y="150" font-size="48" font-weight="bold" fill="#ff00ff" text-anchor="middle" font-family="Arial">WATCH</text>
        <circle cx="140" cy="200" r="30" fill="none" stroke="#00d4ff" stroke-width="2"/>
        <line x1="140" y1="170" x2="140" y2="150" stroke="#00d4ff" stroke-width="2"/>
        <line x1="140" y1="230" x2="140" y2="250" stroke="#00d4ff" stroke-width="2"/>
    </svg>`,
    
    'outcore-button.png': `<svg width="280" height="280" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#0f1a2e;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#1a2d4e;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="280" height="280" fill="url(#grad2)"/>
        <text x="140" y="100" font-size="52" font-weight="bold" fill="#00d4ff" text-anchor="middle" font-family="Arial">OUT</text>
        <text x="140" y="160" font-size="52" font-weight="bold" fill="#00d4ff" text-anchor="middle" font-family="Arial">CORE</text>
        <rect x="80" y="190" width="120" height="60" fill="none" stroke="#ff00ff" stroke-width="2" rx="5"/>
        <circle cx="95" cy="220" r="4" fill="#ff00ff"/>
        <circle cx="140" cy="220" r="4" fill="#ff00ff"/>
        <circle cx="185" cy="220" r="4" fill="#ff00ff"/>
    </svg>`,
    
    'deadwatch-header.png': `<svg width="500" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#2d1a3e;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#0f0f1e;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="500" height="400" fill="url(#grad3)"/>
        <text x="250" y="60" font-size="48" font-weight="bold" fill="#00d4ff" text-anchor="middle" font-family="Arial">DEAD WATCH</text>
        <text x="250" y="120" font-size="20" fill="#b0b0b0" text-anchor="middle" font-family="Arial">A Time-Loop Mystery</text>
        <rect x="50" y="150" width="400" height="200" fill="none" stroke="#00d4ff" stroke-width="2" rx="10"/>
        <text x="250" y="250" font-size="16" fill="#d0d0d0" text-anchor="middle" font-family="Arial">Explore. Remember. Escape.</text>
        <line x1="100" y1="180" x2="400" y2="180" stroke="#ff00ff" stroke-width="1" opacity="0.5"/>
        <line x1="100" y1="320" x2="400" y2="320" stroke="#ff00ff" stroke-width="1" opacity="0.5"/>
    </svg>`,
    
    'outcore-header.png': `<svg width="500" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#0f1a2e;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#1a2d4e;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="500" height="400" fill="url(#grad4)"/>
        <text x="250" y="60" font-size="48" font-weight="bold" fill="#00d4ff" text-anchor="middle" font-family="Arial">OUTCORE</text>
        <text x="250" y="120" font-size="20" fill="#b0b0b0" text-anchor="middle" font-family="Arial">Desktop Mystery Awaits</text>
        <rect x="60" y="150" width="380" height="200" fill="none" stroke="#00d4ff" stroke-width="2" rx="10"/>
        <rect x="80" y="170" width="100" height="80" fill="none" stroke="#ff00ff" stroke-width="1"/>
        <rect x="210" y="170" width="100" height="80" fill="none" stroke="#ff00ff" stroke-width="1"/>
        <rect x="340" y="170" width="40" height="160" fill="none" stroke="#ff00ff" stroke-width="1"/>
        <text x="250" y="300" font-size="16" fill="#d0d0d0" text-anchor="middle" font-family="Arial">Who is she? Why are you here?</text>
    </svg>`
};

const imagesDir = path.join(__dirname, 'images');

// Create SVG files as HTML-safe fallback
for (const [filename, svgContent] of Object.entries(images)) {
    const filePath = path.join(imagesDir, filename);
    fs.writeFileSync(filePath, svgContent, 'utf8');
    console.log(`Created ${filename}`);
}

console.log('All placeholder images created successfully!');
