import HomeView from '@/components/views/HomeView';

export const metadata = {
  title: 'XTRA Construction – Premier Civil Engineering & General Contracting',
  description:
    'Comprehensive construction, civil engineering, road works, and facility maintenance solutions built with superior quality, precision, and OSHA-certified safety.',
  keywords: [
    'Construction',
    'Building Engineering',
    'Civil Engineering',
    'Road Works',
    'Facility Maintenance',
    'General Contractor',
    'Commercial Architecture',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'XTRA Construction – Premier Civil Engineering & General Contracting',
    description:
      'Over 25 years of master construction, commercial developments, and LEED certified building techniques.',
    url: '/',
    siteName: 'XTRA Construction',
    images: [
      {
        url: '/assets/about-company.jpg',
        width: 800,
        height: 765,
        alt: 'XTRA Construction Headquarters & Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XTRA Construction – Premier Civil Engineering & General Contracting',
    description:
      'Over 25 years of master construction, commercial developments, and LEED certified building techniques.',
    images: ['/assets/about-company.jpg'],
  },
};

export default function Page() {
  return <HomeView />;
}
