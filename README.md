# ANSHUL RATURI - Portfolio Website

A modern, single-screen portfolio landing page built with clean HTML, CSS, and best practices.

## 📋 Overview

This is a professional portfolio website for ANSHUL RATURI, a 2nd-year Diploma student at Pithuwala Polytechnic, Dehradun. The site showcases tech skills in Python, Java, and C++, with a focus on practical applications and AI development.

## 🎯 Features

- **Single-screen design** - No scrolling required, optimized viewport
- **Responsive layout** - Adapts beautifully from desktop to mobile
- **Dark theme with gold accents** - Professional and modern aesthetic
- **Fast load times** - Optimized images and minimal dependencies
- **Accessible** - Semantic HTML, ARIA labels, and keyboard navigation
- **SEO optimized** - Meta tags, Open Graph, and Twitter Card support
- **Direct contact** - WhatsApp integration for quick outreach

## 📁 File Structure

```
PROJECT/
├── index.html              # Main portfolio page
├── styles.css              # Complete styling
├── content.md              # Content reference
├── README.md               # This file
├── ANSHUL.png             # Hero portrait image
└── assets/
    ├── instagram-qr-placeholder.svg   # Instagram QR code
    └── og-image.svg                    # Open Graph preview image
```

## 🎨 Design Details

### Color Palette
- **Background**: #050505 (Deep Black)
- **Secondary**: #0f0f0f (Very Dark Gray)
- **Primary Text**: #f1f1f1 (Off-white)
- **Secondary Text**: #c2c2c2 (Light Gray)
- **Muted Text**: #7d7d7d (Gray)
- **Accent**: #e0ad44 (Gold)

### Typography
- **Headers**: Inter (Sans-serif) - Bold, Uppercase, Letter-spaced
- **Body**: Roboto (Sans-serif) - Clean, Professional
- **Fallback**: System fonts for faster loading

### Layout
The hero section uses CSS Grid with three columns:
- **Left Column**: Introduction text (Hi, I am ANSHUL RATURI)
- **Center Column**: Portrait photo (3:4 aspect ratio)
- **Right Column**: Role & description
- **Bottom Row**: Contact info and social links

## 🚀 Quick Start

1. **Replace profile photo**: `ANSHUL.png` with your portrait
2. **Update QR code**: Replace `assets/instagram-qr-placeholder.svg`
3. **Verify links**: Check WhatsApp and Instagram URLs
4. **Deploy**: Push to GitHub Pages or any static host

## 📱 Responsive Breakpoints

- **Desktop**: Full 3-column grid layout (1025px+)
- **Tablet** (1024px and below): Single column, stacked sections
- **Mobile** (640px and below): Optimized small screen layout

## 🔗 Links

- **WhatsApp**: https://wa.me/917456057507
- **Instagram**: https://www.instagram.com/anshulraturi

## 📋 Customization

### Change contact information
Update in `index.html`:
- Line ~27: WhatsApp link
- Line ~74: Instagram link

### Modify content
Edit text in `index.html` around:
- Lines ~40-50: Introduction and hero text
- Lines ~64-69: Info sections

### Adjust styling
- Color variables: Line 1-9 in `styles.css`
- Spacing/sizing: Use CSS variables or media queries
- Fonts: Update via Google Fonts link in HTML

## ✨ Performance

- No JavaScript required
- CSS-only interactions (hover effects)
- Optimized image delivery with proper alt text
- Minimal HTTP requests
- Lighthouse score optimized

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and descriptions
- Skip-to-content link
- Keyboard navigation support
- High contrast colors (WCAG AA+)
- Motion preferences respected

## 🌐 Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings** > **Pages**
3. Set **Source** to main branch and root folder
4. Visit `yourusername.github.io/repo-name`

## 📝 Notes

- The page is intentionally locked to one viewport (no scrolling)
- All interactions are keyboard accessible
- Print-friendly stylesheet included
- Respects user's motion preferences (prefers-reduced-motion)
- Supports dark mode and respects system color scheme

---

Built with care for a clean, professional online presence.