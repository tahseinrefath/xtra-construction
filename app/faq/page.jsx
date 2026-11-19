import FaqView from '@/components/views/FaqView';

export const metadata = {
  title: 'Frequently Asked Questions & Engineering Support',
  description:
    'Find answers regarding XTRA Construction licensing, 5D BIM feasibility, fixed-price and GMP contracts, permits, OSHA safety benchmarks, and warranty coverage.',
  keywords: [
    'Construction FAQ',
    'General Contractor Questions',
    'BIM Estimating FAQ',
    'Construction Warranties',
    'OSHA Safety Compliance',
  ],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ & Support | XTRA Construction',
    description:
      'Transparent answers regarding our architectural drafting, bidding frameworks, on-site safety, and warranties.',
    url: '/faq',
    siteName: 'XTRA Construction',
    images: [
      {
        url: '/assets/about-company.jpg',
        width: 800,
        height: 765,
        alt: 'FAQ Support Desk at XTRA Construction',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ & Support | XTRA Construction',
    description: 'Everything you need to know about our construction process.',
    images: ['/assets/about-company.jpg'],
  },
};

export default function Page() {
  return <FaqView />;
}
