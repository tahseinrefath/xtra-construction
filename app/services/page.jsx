import ServicesView from '@/components/views/ServicesView';

export const metadata = {
  title: 'Civil & Architectural Construction Services',
  description:
    'Comprehensive construction services: residential developments, federal road & civil works, facility maintenance, modern curved-glass office towers, and industrial plants.',
  keywords: [
    'Construction Services',
    'Civil Engineering',
    'Asphalt Road Paving',
    'Facility Retrofits',
    'Architectural Glass Facades',
    'Industrial Plant Construction',
    'Green Building LEED',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Civil & Architectural Services | XTRA Construction',
    description:
      'Explore our full suite of residential, commercial, industrial, and heavy civil infrastructure services.',
    url: '/services',
    siteName: 'XTRA Construction',
    images: [
      {
        url: '/assets/tick_tock-1-1-600x600.jpg',
        width: 600,
        height: 600,
        alt: 'Modern Architectural Structures by XTRA Construction',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Civil & Architectural Services | XTRA Construction',
    description: 'Comprehensive construction and engineering services.',
    images: ['/assets/tick_tock-1-1-600x600.jpg'],
  },
};

export default function Page() {
  return <ServicesView />;
}
