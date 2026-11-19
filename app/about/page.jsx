import AboutView from '@/components/views/AboutView';

export const metadata = {
  title: 'About Our Company – Quality & Craftsmanship',
  description:
    'Founded on the principles of engineering honesty, safety, and rigorous execution with over 450 major architectural and industrial projects worldwide.',
  keywords: [
    'About XTRA Construction',
    'General Contractor Leadership',
    'Certified Civil Engineers',
    'LEED Certified Construction',
    'Commercial Architectural Planning',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Our Company | XTRA Construction',
    description:
      'Discover our 25+ years of engineering distinction, master tradesmen, LEED accredited practices, and complete project execution.',
    url: '/about',
    siteName: 'XTRA Construction',
    images: [
      {
        url: '/assets/about-company.jpg',
        width: 800,
        height: 765,
        alt: 'About XTRA Construction Team & Leadership',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Our Company | XTRA Construction',
    description:
      'Over 25 years of master construction and commercial architectural excellence.',
    images: ['/assets/about-company.jpg'],
  },
};

export default function Page() {
  return <AboutView />;
}
