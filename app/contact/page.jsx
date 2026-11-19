import ContactView from '@/components/views/ContactView';

export const metadata = {
  title: 'Contact Senior Engineering Dispatch & RFPs',
  description:
    'Connect directly with XTRA Construction dispatch headquarters, request an official RFP tender review, or speak with our senior engineering team.',
  keywords: [
    'Contact Construction Company',
    'RFP Tender Submission',
    'General Contractor New York',
    'Construction Estimating Office',
    'Civil Engineering Inquiries',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Engineering Dispatch | XTRA Construction',
    description:
      'Send an official project inquiry, submit design documents, or visit our central New York headquarters.',
    url: '/contact',
    siteName: 'XTRA Construction',
    images: [
      {
        url: '/assets/about-company.jpg',
        width: 800,
        height: 765,
        alt: 'Contact XTRA Construction',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Engineering Dispatch | XTRA Construction',
    description: 'Connect with our project estimators and discipline heads.',
    images: ['/assets/about-company.jpg'],
  },
};

export default function Page() {
  return <ContactView />;
}
