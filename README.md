<div align="center">

<br />

# 🏗️ XTRA Construction 2 — UI Recreation

### A Corporate-Grade, Pixel-Perfect Frontend Recreation

**Built with Next.js 14 · Tailwind CSS · React 18 · Lucide Icons**

<br />

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-f4c03b?style=for-the-badge)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-28a745?style=for-the-badge&logo=github-actions&logoColor=white)]()

<br />

> **Assignment Submission** — UI Development Task  
> Reference Site: [xtratheme.com/elementor/construction-2](https://xtratheme.com/elementor/construction-2/)

<br />

---

</div>

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Design System](#-design-system)
- [Component Reference](#-component-reference)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Production Build](#-production-build)
- [Deployment Guide](#-deployment-guide)
- [Environment Configuration](#-environment-configuration)
- [API & Form Documentation](#-api--form-documentation)
- [Responsive Design](#-responsive-design)
- [Performance Metrics](#-performance-metrics)
- [Dependencies](#-dependencies)
- [Known Limitations & Assumptions](#-known-limitations--assumptions)
- [Submission Details](#-submission-details)

---

## 🏢 Project Overview

This project is a **complete, production-grade frontend recreation** of the [XTRA Construction 2](https://xtratheme.com/elementor/construction-2/) WordPress theme demo, rebuilt from the ground up using modern web technologies — without relying on WordPress, Elementor, or any page builder dependencies.

The objective was to faithfully replicate the reference website's:
- **Visual Design** — colors, typography, spacing, layout, iconography
- **UI Components** — sliders, modals, carousels, filter tabs, forms
- **User Interactions** — hover effects, animated transitions, sticky navigation, back-to-top
- **Responsiveness** — pixel-perfect rendering across Desktop (1440px+), Laptop (1024px), Tablet (768px), and Mobile (375px)

All content, assets, and layouts are encoded in a clean, maintainable React component architecture powered by Next.js 14 App Router.

---

## 🌐 Live Demo

| Environment | URL |
| :--- | :--- |
| **Local Development** | `http://localhost:3000` |
| **Production (Vercel)** | *(Add your Vercel URL after deployment)* |
| **Production (Netlify)** | *(Add your Netlify URL after deployment)* |
| **Reference Site** | [xtratheme.com/elementor/construction-2](https://xtratheme.com/elementor/construction-2/) |

---

## ✨ Key Features

| # | Feature | Description |
|---|---|---|
| 01 | **Animated Hero Slider** | Dual-slide autoplaying carousel (7s interval) with Ken Burns scale effect, animated text reveals, arrow navigation, and dot pagination |
| 02 | **Sticky Navigation Header** | Transparent-to-solid transition on scroll with multi-level dropdown menus and an animated gold underline hover effect on nav links |
| 03 | **Floating Feature Cards** | 3 Cards overlapping the hero section using negative margin (`-mt-24`) with numbered badges, icon hover inversions, and bottom-border accent animations |
| 04 | **Services Hover Reveal** | Service cards that dynamically reveal a full background image with a dark overlay on hover, creating a cinematic depth effect |
| 05 | **Filterable Project Portfolio** | Real-time category filtering (`All`, `Building`, `Construction`, `Renovation`, `Road Construction`) with smooth image grid transitions and an inline Lightbox modal |
| 06 | **Quote Request Form** | Multi-field contact form with client-side validation, department selector, animated loading spinner, and a contextual success toast notification |
| 07 | **Testimonial Carousel** | Manual slide carousel featuring the signature `box-shadow: -15px 15px 0px 0px #f4c03b` gold offset avatar portrait |
| 08 | **Search Modal** | Full-screen keyword search overlay with trending chip shortcuts and keyboard (`Escape`) dismissal support |
| 09 | **Mobile Drawer Navigation** | Full off-canvas mobile menu with an accordion `Pages` submenu, inline search trigger, contact info, and social links |
| 10 | **Back-to-Top Button** | Scroll-threshold-activated floating button with smooth scroll animation |
| 11 | **Local Asset Bundle** | All 28 high-resolution images, icons, and logos stored locally in `public/assets/` for maximum performance and zero CDN dependency |

---

## 🛠️ Technology Stack

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND STACK                          │
├─────────────────────┬───────────────────────────────────────┤
│ Framework           │ Next.js 14.2 (App Router)             │
│ UI Library          │ React 18.3                            │
│ Styling             │ Tailwind CSS 3.4 + Custom CSS         │
│ Icon Library        │ Lucide React 0.460                    │
│ Typography          │ Google Fonts — Poppins & Roboto        │
│ Build Tool          │ Next.js (Webpack 5 + SWC)             │
│ Package Manager     │ npm 11.x                              │
│ Language            │ JavaScript (JSX) — ES2022+            │
│ Node.js Runtime     │ v18.17.0+                             │
└─────────────────────┴───────────────────────────────────────┘
```

### Why This Stack?

| Decision | Rationale |
| :--- | :--- |
| **Next.js App Router** | Server-first architecture with zero-config static export, built-in SEO metadata, optimized image delivery, and instant Vercel/Netlify deployment |
| **Tailwind CSS** | Utility-first paradigm enables pixel-precise spacing and color tokens (`#f4c03b`, `#243344`) without writing a single line of custom stylesheet for layout |
| **React Client Components** | Isolates interactive features (slider, filter, form, modals) in `'use client'` components while keeping the shell as a lightweight static render |
| **Lucide React** | Tree-shakeable SVG icon library with consistent 1.5px stroke weight matching the reference site's icon style |
| **Local Assets** | Eliminates external CDN round-trips; all 28 assets served from `/public/assets/` via Next.js's optimized static file pipeline |

---

## 🗂️ Project Architecture

```
Jayam Task/
│
├── app/                          # Next.js App Router
│   ├── layout.jsx                # Root layout — fonts, metadata, viewport
│   ├── page.jsx                  # Home page — composes all 12 sections
│   └── globals.css               # Tailwind directives + custom CSS utilities
│
├── components/
│   ├── layout/                   # Structural layout components
│   │   ├── TopBar.jsx            # Top info bar — phone, socials, search, CTA
│   │   ├── Header.jsx            # Sticky navigation header with dropdown
│   │   ├── MobileDrawer.jsx      # Off-canvas mobile navigation drawer
│   │   ├── SearchModal.jsx       # Full-screen keyword search overlay
│   │   ├── Footer.jsx            # Footer with logo, socials, copyright bar
│   │   └── BackToTop.jsx         # Floating scroll-to-top button
│   │
│   ├── home/                     # Page section components
│   │   ├── HeroSlider.jsx        # Autoplaying hero carousel (Slide 1 & 2)
│   │   ├── FeatureCards.jsx      # 3 floating feature highlight cards
│   │   ├── AboutSection.jsx      # Company profile + Read More modal
│   │   ├── ServicesSection.jsx   # 3 service cards + dream callout banner
│   │   ├── ProcessSection.jsx    # 3-step construction process workflow
│   │   ├── ProjectsGallery.jsx   # Filterable portfolio + Lightbox modal
│   │   ├── QuoteSection.jsx      # Quote request form with validation
│   │   ├── TestimonialsSlider.jsx # Customer review carousel
│   │   └── PartnersBar.jsx       # 5 client/partner logo showcase
│   │
│   └── ui/                       # Reusable atomic UI primitives
│       ├── Button.jsx            # Multi-variant button (primary/secondary/outline)
│       ├── SectionHeading.jsx    # Tag + subtitle + title + description block
│       ├── LightboxModal.jsx     # Full-screen image preview modal
│       └── Toast.jsx             # Auto-dismissing notification toast
│
├── data/
│   └── siteData.js               # Centralized content — nav, slides, services, projects
│
├── public/
│   └── assets/                   # 28 locally bundled images, logos, and icons
│       ├── logo-construction.png
│       ├── footer-logo-construction.png
│       ├── about-company.jpg
│       ├── service-1.jpg / service-2.jpg / service-3.jpg
│       ├── s1.png / s2.png / s3.png
│       ├── process.jpg
│       ├── row-bg.jpg
│       ├── safety-icon.png
│       ├── portfolio[1-8].jpg    # 8 project gallery images
│       ├── team[1-3].jpg         # 3 testimonial avatars
│       └── logo-[1-5].png        # 5 client brand logos
│
├── .gitignore
├── jsconfig.json                 # Path alias: @/* → root
├── next.config.mjs               # Next.js configuration
├── postcss.config.mjs            # PostCSS for Tailwind
├── tailwind.config.js            # Custom design tokens
├── package.json
└── README.md                     # This file
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| **Primary Gold / Yellow** | `#f4c03b` | Buttons, badges, hover accents, avatar shadow, active states |
| **Primary Dark Navy** | `#243344` | Headings, header background, card text, dark overlays |
| **Deep Background** | `#1c2734` | Footer, hero overlay, search modal background |
| **Darkest Background** | `#16202c` | Quote section, copyright bar, deepest contrast layers |
| **Body Text** | `#6c7a89` | Paragraphs, descriptions, metadata labels |
| **Light Section BG** | `#f7f9fb` | Alternate section backgrounds (About, Process, Testimonials) |
| **White** | `#ffffff` | Card backgrounds, service cards, testimonial cards |
| **Border Subtle** | `rgba(36,51,68,0.08)` | Card borders, dividers, separator lines |

### Typography

| Role | Font | Weight | Size Range |
|---|---|---|---|
| **Display / H1** | Poppins | 900 (Black) | `3xl → 6xl` (responsive) |
| **Section Headings** | Poppins | 800 (ExtraBold) | `2xl → 4xl` |
| **Card Titles** | Poppins | 700 (Bold) | `xl → 2xl` |
| **Sub-labels / Badges** | Poppins | 700 Uppercase | `xs` with `tracking-widest` |
| **Body Paragraphs** | Roboto / Poppins | 400 (Regular) | `sm → base`, `leading-relaxed` |
| **Button Labels** | Poppins | 700 (Bold) | `xs → sm`, uppercase, `tracking-wider` |

### Signature Visual Effect

The testimonial section uses the XTRA Construction theme's signature avatar portrait shadow:

```css
.avatar-gold-shadow {
  box-shadow: -15px 15px 0px 0px #f4c03b;
}
```

---

## 🧩 Component Reference

### Layout Components

#### `<TopBar />`
Renders the informational top bar visible on desktop (`md+`) screens.
- Props: `onOpenSearch: () => void`
- Displays: Company phone, social icon links (Facebook, Twitter, Instagram, LinkedIn), search trigger, and "Free Consultation" CTA button

#### `<Header />`
Sticky navigation header with scroll-awareness.
- Props: `onOpenMobile: () => void`
- Features: Logo, navigation links, dropdown menu for "Pages", scroll shadow activation, and Free Consultation button

#### `<MobileDrawer />`
Slide-in off-canvas mobile navigation menu.
- Props: `isOpen: boolean`, `onClose: () => void`, `onOpenSearch: () => void`

#### `<SearchModal />`
Full-screen translucent search overlay.
- Props: `isOpen: boolean`, `onClose: () => void`, `onSearch: (term: string) => void`

---

### Home Section Components

#### `<HeroSlider />`
Auto-playing hero carousel — no external dependencies.
- **Interval**: 7000ms auto-advance
- **Transition**: CSS opacity fade + Ken Burns scale transform
- **Controls**: Previous/Next chevron buttons + clickable dot indicators

#### `<ProjectsGallery />`
Real-time category filter + Lightbox preview.
- **Filter State**: React `useState` — filters `siteData.projects.items` array by `categories[]` membership
- **Lightbox**: Opens `<LightboxModal />` with the selected project's image, title, and category

#### `<QuoteSection />`
Client-validated contact/quote form.
- **Validation Rules**:
  - `name`: Required, non-empty string
  - `email`: Required, regex `/\S+@\S+\.\S+/`
  - `message`: Required, non-empty string
- **On Submit**: 1000ms simulated async delay → success `<Toast />` shown → form state reset

---

### UI Primitives

#### `<Button />`
Fully polymorphic button — renders as `<a>` when `href` is supplied, otherwise `<button>`.

```jsx
<Button variant="primary" size="lg" href="#quote">Free Consultation</Button>
<Button variant="outline" size="md" onClick={handler}>Learn More</Button>
```

| Variant | Appearance |
|---|---|
| `primary` | Gold background → Dark navy on hover |
| `secondary` | Dark navy background → Gold on hover |
| `outline` | White border/text → Gold fill on hover |
| `outlineDark` | Dark border → Gold fill on hover |
| `white` | White background → Gold on hover |

---

## 🚀 Getting Started

### Prerequisites

Ensure the following are installed on your system before proceeding:

| Requirement | Minimum Version | Check Command |
|---|---|---|
| **Node.js** | v18.17.0 | `node --version` |
| **npm** | v9.0.0 | `npm --version` |
| **Git** | v2.x | `git --version` |

---

### Installation

**Step 1 — Clone the repository**
```bash
git clone https://github.com/<your-username>/<your-repository-name>.git
cd "Jayam Task"
```

**Step 2 — Install all dependencies**
```bash
npm install
```

> This installs Next.js, React, Tailwind CSS, Lucide React, and all dev dependencies (autoprefixer, PostCSS) as defined in `package.json`.

---

## 💻 Development

### Start Local Development Server
```bash
npm run dev
```

| Info | Detail |
|---|---|
| **Local URL** | `http://localhost:3000` |
| **Hot Module Reload** | Enabled — changes reflect instantly without page refresh |
| **Fast Refresh** | React component state is preserved during edits |

---

### Available Scripts

| Script | Command | Description |
|---|---|---|
| **Development** | `npm run dev` | Start local dev server with HMR at `localhost:3000` |
| **Production Build** | `npm run build` | Compile and optimize for production |
| **Production Preview** | `npm run start` | Serve the production build locally |
| **Lint** | `npm run lint` | Run Next.js ESLint rules across the codebase |

---

## 📦 Production Build

### Build the Application
```bash
npm run build
```

**Expected output:**
```
✓ Compiled successfully
✓ Generating static pages (4/4)

Route (app)                     Size     First Load JS
┌ ○ /                           13.7 kB         101 kB
└ ○ /_not-found                  873 B          88.1 kB
+ First Load JS shared          87.2 kB
○ (Static) prerendered as static content
```

### Preview Production Locally
```bash
npm run start
```
Navigate to `http://localhost:3000` to verify the production build.

---

## ☁️ Deployment Guide

### Option A — Vercel *(Recommended for Next.js)*

Vercel is the official deployment platform for Next.js and provides zero-configuration deployment.

**Steps:**
1. Push your code to a GitHub repository.
2. Sign in at [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel auto-detects **Next.js** — no settings needed.
5. Click **"Deploy"**.
6. Your live URL will be provisioned in under 60 seconds.

**Automatic Re-deployments:**
Every future `git push` to the `main` branch triggers an automatic re-deployment.

---

### Option B — Netlify

**Steps:**
1. Push your code to a GitHub repository.
2. Sign in at [netlify.com](https://netlify.com) and click **"Add new site"** → **"Import an existing project"**.
3. Connect your GitHub repository.
4. Configure build settings:

| Setting | Value |
|---|---|
| **Build command** | `npm run build` |
| **Publish directory** | `.next` |
| **Node.js version** | `18` |

5. Click **"Deploy site"**.

> **Note:** Netlify requires the `@netlify/plugin-nextjs` plugin for full Next.js App Router compatibility. It is auto-installed on first deployment detection.

---

### Option C — Manual Static Export *(Optional)*

If you prefer a fully static output for traditional web hosting:

```bash
# In next.config.mjs, add:
# output: 'export'

npm run build
# Output folder: ./out/
```

> Static export disables server-side features. Since this app is fully client-rendered, no features are lost.

---

## ⚙️ Environment Configuration

This application runs fully client-side with no required environment variables for the base frontend.

If extending the project with real backend APIs (e.g., sending the quote form to an email service), create a `.env.local` file in the root directory:

```env
# .env.local — Never commit this file to version control

# Optional: Real-time form submission endpoint
NEXT_PUBLIC_API_ENDPOINT=https://api.yourdomain.com/quote

# Optional: Email service API key (server-side only)
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxx

# Optional: Contact email receiver
CONTACT_FORM_RECEIVER=info@construction.com
```

> **Security Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never put secret keys in `NEXT_PUBLIC_` variables.

---

## 📡 API & Form Documentation

### Quote Form — `components/home/QuoteSection.jsx`

The quote request form is fully self-contained with client-side validation.

#### Form Fields

| Field | Type | Required | Validation |
|---|---|---|---|
| `name` | `text` | ✅ Yes | Non-empty string |
| `email` | `email` | ✅ Yes | Valid email format (`/\S+@\S+\.\S+/`) |
| `subject` | `text` | ❌ No | Any string |
| `department` | `select` | ❌ No | One of: `Business Department`, `Personal Department`, `Support Department`, `Others` |
| `message` | `textarea` | ✅ Yes | Non-empty string |

#### Form State Machine

```
IDLE → [Submit clicked]
  ├─ Validation FAIL  → Display per-field error messages (no submission)
  └─ Validation PASS  → Loading state (spinner shown, 1000ms)
                           └─ SUCCESS → Toast notification shown → Form reset → IDLE
```

#### Extending to a Real Backend

Replace the simulated timeout in `QuoteSection.jsx` with a real API call:

```js
// Replace the setTimeout block with:
const response = await fetch('/api/quote', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});

if (response.ok) {
  setToastOpen(true);
  setFormData({ name: '', email: '', subject: '', department: departments[0], message: '' });
}
```

---

### Search — `components/layout/SearchModal.jsx`

The search modal currently provides UI feedback and passes the search term to a toast notification. To wire it to a real search engine:

```js
// In app/page.jsx, replace the handleSearch handler:
const handleSearch = async (term) => {
  const results = await fetch(`/api/search?q=${encodeURIComponent(term)}`);
  // Handle results...
};
```

---

## 📱 Responsive Design

The application is built **mobile-first** using Tailwind CSS's responsive prefix system.

### Breakpoints

| Breakpoint | Width | Layout Behavior |
|---|---|---|
| **Mobile** | `< 640px` | Single column, no top bar, hamburger nav, touch sliders |
| **Small** | `640px – 767px` | 2-column project grid, expanded buttons |
| **Tablet** | `768px – 1023px` | 2-col services, condensed testimonial avatar, hamburger nav |
| **Laptop** | `1024px – 1279px` | Full desktop nav revealed, 3-col service grid |
| **Desktop** | `≥ 1280px` | Full 7-column header, 4-col project grid, max-width containers |

### Zero Horizontal Scroll

All containers use `overflow-x: hidden` on `body` and controlled `max-w-7xl` with responsive padding:

```css
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

---

## ⚡ Performance Metrics

| Metric | Value |
|---|---|
| **JS Bundle (Homepage)** | 101 kB First Load |
| **Static Pages Generated** | 2 (SSG) |
| **Assets Locally Bundled** | 28 files |
| **External Font Requests** | 1 (Google Fonts via `<link>`) |
| **External Image Requests** | 0 (all assets local) |
| **Build Time** | ~15 seconds |

---

## 📦 Dependencies

### Runtime Dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | `^14.2.15` | React framework with App Router and SSG |
| `react` | `^18.3.1` | UI component library |
| `react-dom` | `^18.3.1` | DOM rendering for React |
| `lucide-react` | `^0.460.0` | Tree-shakeable SVG icon system |
| `clsx` | `^2.1.1` | Conditional className utility |
| `tailwind-merge` | `^2.5.4` | Merge conflicting Tailwind utility classes |

### Development Dependencies

| Package | Version | Purpose |
|---|---|---|
| `tailwindcss` | `^3.4.14` | Utility-first CSS framework |
| `autoprefixer` | `^10.4.20` | Automatic vendor-prefix injection |
| `postcss` | `^8.4.47` | CSS transformation pipeline |

---

## 📌 Known Limitations & Assumptions

### Assumptions Made

1. **Single Page Recreation**: The assignment requires the Home Page (`/`) only. Internal sub-pages (e.g., `/about`, `/services`, `/shop`) are represented in the navigation structure as anchor links or `#` placeholders.

2. **Form Submission**: The quote request form uses a simulated backend response (1000ms delay + toast). In a production environment, this would be connected to a mail delivery API (SendGrid, Resend, AWS SES) or a CRM endpoint.

3. **Search Functionality**: The search modal provides accurate UI/UX behavior (overlay, keyword input, trending chips, Escape key dismissal, toast feedback) but does not connect to a search index. Full-text search would require integration with Algolia, Meilisearch, or a custom API route.

4. **Font Loading**: Google Fonts (`Poppins`, `Roboto`) are loaded via a standard `<link>` tag. During production build in an offline environment, font stylesheet fetching is skipped but fonts load correctly in the browser when network is available.

5. **Image Optimization**: `next/image` optimization is set to `unoptimized: true` in `next.config.mjs` to support both static export and standard deployments without requiring a separate image CDN configuration.

### Known Limitations

| Item | Detail |
|---|---|
| **WordPress PHP Logic** | Elementor shortcodes, WooCommerce cart, and WordPress authentication flows are not applicable in a static React build and are intentionally excluded |
| **RevSlider JS** | The original Slider Revolution plugin's proprietary JavaScript animations are reproduced using native CSS transitions and React state management |
| **Dynamic Blog/Portfolio Data** | The original site uses WordPress CMS for blog posts and portfolio entries. This recreation uses structured static data from `data/siteData.js` |

---

## 📲 Submission Details

**Assignment:** UI Development Task  
**Reference:** [XTRA Construction 2 Demo](https://xtratheme.com/elementor/construction-2/)  
**Framework:** Next.js 14 (App Router) + Tailwind CSS

### WhatsApp Submission Format

Send the following message to **+91 98405 99789**:

```
Hello,

Please find my UI Development Task submission below:

👤 Name        : [Your Full Name]
📱 Phone       : [Your Phone Number]
🔗 GitHub Repo : https://github.com/<username>/<repository>
🌐 Live URL    : https://<your-project>.vercel.app
⚙️  Stack       : Next.js 14 · Tailwind CSS · React 18 · Lucide Icons
```

---

## 📄 License

This project is submitted as part of a UI development evaluation. The design and imagery are based on the XTRA Construction 2 WordPress theme demo by [Codevz](https://xtratheme.com/) and are used for assessment purposes only.

---

<div align="center">

**Crafted with precision and care for the UI Development Assignment**

*Next.js · Tailwind CSS · React 18 · Lucide Icons*

</div>
