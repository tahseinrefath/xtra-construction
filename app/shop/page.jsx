import ShopView from '@/components/views/ShopView';

export const metadata = {
  title: 'Professional Hardware, Safety Gear & Tool Kits Store',
  description:
    'Shop job-site certified contractor tool bundles, OSHA-compliant fall protection harnesses, optical laser levels, and heavy-duty masonry supplies.',
  keywords: [
    'Construction Tools Store',
    'Contractor Hardware Packages',
    'OSHA Safety Gear Kits',
    'Rotary Laser Leveler',
    'Rebar Tie Consumables',
  ],
  alternates: {
    canonical: '/shop',
  },
  openGraph: {
    title: 'Equipment & Tool Store | XTRA Construction',
    description:
      'Job-site tested tools, safety apparatus, laser levels, and contractor packages trusted on active projects.',
    url: '/shop',
    siteName: 'XTRA Construction',
    images: [
      {
        url: '/assets/personal_gift-1-600x600.jpg',
        width: 600,
        height: 600,
        alt: 'Contractor Tool Kits',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equipment & Tool Store | XTRA Construction',
    description: 'Job-site tested contractor packages and safety equipment.',
    images: ['/assets/personal_gift-1-600x600.jpg'],
  },
};

export default function Page() {
  return <ShopView />;
}
