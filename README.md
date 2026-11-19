# 🏗️ XTRA Construction — Frontend Engineering Task

A production-ready, pixel-perfect frontend application recreating the **XTRA Construction** corporate web platform, built with **Next.js 14 (App Router)** and **Tailwind CSS**.

- **Live Deployed App (Netlify)**: [https://xtra-construction.netlify.app/](https://xtra-construction.netlify.app/)
- **GitHub Repository**: [https://github.com/tahseinrefath/xtra-construction](https://github.com/tahseinrefath/xtra-construction)
- **Reference Website**: [XTRA Construction 2 Theme Demo](https://xtratheme.com/elementor/construction-2/)

---

## 1. Project Overview

This project is a high-performance, responsive civil engineering and contracting website featuring a comprehensive 9-route architecture:

1. **Home (`/`)**: Animated hero carousel, overlapping floating feature highlight cards with hover inversion, company about narrative, services grid, 3-step process execution workflow, filterable project portfolio with lightbox modal, quote estimate request form, testimonial slider with signature gold offset avatar shadows, interactive Google Maps section with floating contact cards and dispatch form, and client logos.
2. **About (`/about`)**: Company legacy narrative, 3 corporate pillars, executive leadership profiles, and animated skill proficiency bars.
3. **Services (`/services`)**: Full 6-service civil architectural grid, best practice engineering recommendations, and technical FAQ drawer.
4. **Contact (`/contact`)**: Headquarters details, direct dispatch inquiry form with encryption feedback, and unified interactive Google Maps section.
5. **FAQ (`/faq`)**: Categorized accordion knowledge base with interactive search and rapid inquiry widget.
6. **Blog (`/blog`)**: Construction science articles, categorized sidebar, search filter, and fallback image safety.
7. **Shop (`/shop`)**: Hardware and safety packages catalog with interactive rating badges and add-to-cart triggers.
8. **Cart (`/cart`)**: Complete cart table with quantity adjusters, item removal, coupon discount validation, and order summaries.
9. **My Account (`/my-account`)**: Dual client/contractor authentication portal with tab toggles and form validation.

All pages include dynamic search engine optimization (page-specific `<title>`, OpenGraph, Twitter Cards, Schema.org `ConstructionBusiness` JSON-LD structured data, dynamic `/sitemap.xml`, and `/robots.txt`).

---

## 2. Technology Used

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | `14.2.35` | App Router architecture, static site generation (SSG), dynamic SEO metadata routes |
| **Library** | React | `18.3.1` | Component architecture, state hooks, and client-side context |
| **Styling** | Tailwind CSS | `3.4.14` | Utility-first responsive design tokens, layout grids, and animations |
| **Icons** | Lucide React | `^0.460.0` | Consistent 1.5px/2px SVG icon system |
| **Typography** | Google Fonts | Web Font API | Primary: `Poppins` (Headings & UI); Secondary: `Roboto` (Body) |
| **State** | React Context API | `CartContext` | Global shopping cart and discount state management |
| **CSS Tooling** | PostCSS & Autoprefixer | `8.4.47` / `10.4.20` | Vendor prefixing and CSS pipeline optimization |

---

## 3. Installation Instructions

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher
- **Git**: `v2.x`

### Setup Steps
```bash
# 1. Clone the repository
git clone https://github.com/tahseinrefath/xtra-construction.git

# 2. Navigate to the project directory
cd xtra-construction

# 3. Install dependencies
npm install
```

---

## 4. Development Command

To start the local development server with Fast Refresh and Hot Module Reloading (HMR):

```bash
npm run dev
```

The application will be accessible at:
```
http://localhost:3000
```

---

## 5. Build Command

To compile, optimize, and generate the static production build:

```bash
npm run build
```

### Previewing the Production Build Locally
```bash
npm run start
```
Runs the compiled application locally on port `3000` to verify production performance and pre-rendered routes.

---

## 6. Deployment Instructions

### Netlify Deployment (Active Live Deployment)
The application is deployed on Netlify with automated continuous deployment from the `prod` branch:
- **Live URL**: [https://xtra-construction.netlify.app/](https://xtra-construction.netlify.app/)
- **Build Settings**:
  - **Build Command**: `npm run build`
  - **Publish Directory**: `.next`
  - **Node Version**: `18.x` or `20.x`
  - **Plugin**: `@netlify/plugin-nextjs` (detected automatically)

### Alternative: Vercel Deployment
1. Connect your GitHub repository at [vercel.com](https://vercel.com).
2. Framework preset will automatically detect **Next.js**.
3. Click **Deploy**. Vercel will provision static edge nodes in under 60 seconds.

---

## 7. Environment Configuration Details

The frontend runs standalone without mandatory external environment variables. If integrating with production email dispatch or headless CMS services, configure a `.env.local` file in the project root:

```env
# .env.local — Application Environment Settings

# Form Dispatch Webhook Endpoint (Optional external API)
NEXT_PUBLIC_API_ENDPOINT=https://api.yourdomain.com/v1

# Corporate Dispatch Email Receiver (For server-side dispatch)
CONTACT_FORM_RECEIVER=Support@constrcution.com

# Analytics / Tag Manager (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

> **Security Note:** Variables prefixed with `NEXT_PUBLIC_` are bundled into client-side JavaScript. Sensitive API keys or secrets must omit this prefix and run inside server-side handlers only.

---

## 8. Brief API Documentation

### 1. Form Submission State Machines (Client-Side)

#### Quote Request Dispatch (`QuoteSection.jsx`)
- **Trigger**: `#quote` submission form.
- **Payload**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Commercial Tower RFP",
    "department": "Engineering Department",
    "message": "Detailed structural load requirements..."
  }
  ```
- **Validation**:
  - `name`: String, non-empty, sanitized.
  - `email`: Valid RFC 5322 email regex (`/\S+@\S+\.\S+/`).
  - `message`: Required, minimum 10 characters.
- **Response Handling**: Simulated 1000ms async delay with encrypted status feedback and non-blocking toast alert.

#### Rapid Office Dispatch (`MapSection.jsx`)
- **Trigger**: Interactive map quick inquiry widget.
- **Payload**:
  ```json
  {
    "department": "Business Department",
    "message": "Project timeline query"
  }
  ```
- **Response**: In-card confirmation state with reset timer.

---

### 2. Global State Actions (`CartContext.jsx`)

The global shopping cart operates via a predictable action-reducer pattern:

| Action Type | Payload | Function |
| :--- | :--- | :--- |
| `ADD_TO_CART` | `{ id, title, price, image }` | Appends item or increments existing quantity |
| `UPDATE_QUANTITY` | `{ id, delta }` | Adjusts quantity (`min: 1`) |
| `REMOVE_ITEM` | `{ id }` | Filters item out of active state |
| `APPLY_COUPON` | `{ code: "XTRA10" }` | Validates code and calculates 10% subtotal deduction |
| `CLEAR_CART` | `none` | Flushes state upon successful order checkout |

---

### 3. SEO & Crawler Endpoints

- **`/sitemap.xml`**: Dynamically generates search engine XML sitemap containing all 9 routes with priority scores and change frequencies.
- **`/robots.txt`**: Serves crawler rules, indexing policies, and sitemap references.

---

## 9. Dependencies

### Runtime Dependencies
```json
{
  "next": "^14.2.15",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "lucide-react": "^0.460.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.4"
}
```

### Development Dependencies
```json
{
  "tailwindcss": "^3.4.14",
  "postcss": "^8.4.47",
  "autoprefixer": "^10.4.20"
}
```

---

## 10. Assumptions

1. **Standalone Architecture**: The original WordPress/Elementor dependencies, PHP backend hooks, and RevSlider scripts have been deliberately replaced with native React components, CSS animations, and Next.js App Router static generation.
2. **Local Asset Bundling**: All 28 image assets, brand logos, and icons are stored locally in `/public/assets` and `/public` for instant load performance, zero CDN latency, and high offline stability.
3. **Form Submissions**: Form inputs validate against client-side rules and provide realistic simulated network latency (1.0s - 1.5s) with feedback toasts.
4. **Browser Compatibility**: Targeted for modern evergreen browsers (Chrome, Edge, Firefox, Safari) using modern ES6+ standards, CSS Flexbox, and CSS Grid.

---

## 11. Known Limitations

1. **Mock Payment Gateway**: The shopping cart (`/cart`) calculates taxes, discounts, and itemized totals, but does not connect to live Stripe/PayPal payment processors.
2. **Simulated Authentication**: The login and registration tabs in `/my-account` validate credential formatting and password constraints, but do not query an external SQL/NoSQL database.
3. **Search Indexing**: The search modal provides keyword matching and filter routing across services and articles, without a dedicated full-text search backend (e.g., Elasticsearch/Algolia).

---

## 12. Submission Details

- **Assignment**: UI Development Task
- **Candidate WhatsApp Submission Contact**: **98405 99789**
- **Live Netlify URL**: [https://xtra-construction.netlify.app/](https://xtra-construction.netlify.app/)
- **GitHub Repository**: [https://github.com/tahseinrefath/xtra-construction](https://github.com/tahseinrefath/xtra-construction)

### WhatsApp Message Submission Template
```
Hello,

Please find my completed UI Development Task submission below:

Candidate Name: Tahsein Rifath M
Contact Number: 98405 99789
GitHub Repository: https://github.com/tahseinrefath/xtra-construction
Live Netlify URL: https://xtra-construction.netlify.app/
Tech Stack: Next.js 14 (App Router), React 18, Tailwind CSS, Lucide Icons
```
