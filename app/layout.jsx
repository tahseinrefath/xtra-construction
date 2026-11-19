import './globals.css';
import { CartProvider } from '@/context/CartContext';

export const metadata = {
  metadataBase: new URL('https://construction.xtratheme.com'),
  title: {
    default: 'XTRA Construction – Premier Civil Engineering & General Contracting',
    template: '%s | XTRA Construction',
  },
  description:
    'Comprehensive construction, civil engineering, road works, and facility maintenance solutions built with quality and safety.',
  keywords: [
    'Construction',
    'Building Engineering',
    'Road Works',
    'Maintenance',
    'Architecture',
    'General Contractor',
    'Commercial Builders',
    'LEED Certified Construction',
  ],
  authors: [{ name: 'XTRA Construction Team' }],
  creator: 'XTRA Construction',
  publisher: 'XTRA Construction',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://construction.xtratheme.com',
    siteName: 'XTRA Construction',
    title: 'XTRA Construction – Premier Civil Engineering & General Contracting',
    description:
      'Over 25 years of master construction, commercial developments, and LEED certified building techniques.',
    images: [
      {
        url: '/assets/about-company.jpg',
        width: 800,
        height: 765,
        alt: 'XTRA Construction Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XTRA Construction – Building & Engineering',
    description: 'Premier construction, commercial architecture, and heavy civil engineering.',
    images: ['/assets/about-company.jpg'],
    creator: '@xtratheme',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ConstructionBusiness',
    name: 'XTRA Construction',
    image: 'https://construction.xtratheme.com/assets/logo-construction.png',
    description:
      'Comprehensive construction, civil engineering, road works, and facility maintenance solutions.',
    telephone: '+1-818-23-45-678',
    email: 'info@construction-demo.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2346 Johnson St',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10007',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$$$',
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#243344" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-[#243344] bg-white antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
