import BlogView from '@/components/views/BlogView';

export const metadata = {
  title: 'Construction News, Industry Insights & Engineering Articles',
  description:
    'Read authoritative technical publications on acoustic insulation, corporate civil branding, thermal envelope engineering, and modular steel framework optimization.',
  keywords: [
    'Construction Blog',
    'Civil Engineering Articles',
    'Acoustic Insulation Design',
    'Thermal Envelope Building Science',
    'Modular Steel Fabrication',
    'LEED Platinum Methods',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Construction Insights & Technical Articles | XTRA Construction',
    description:
      'Stay ahead of modern building science, job-site logistics, and architectural engineering trends.',
    url: '/blog',
    siteName: 'XTRA Construction',
    images: [
      {
        url: '/assets/portfolio7-1-600x600.jpg',
        width: 600,
        height: 600,
        alt: 'High-Rise Acoustic Engineering Article',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Insights & Technical Articles | XTRA Construction',
    description: 'Technical publications on modern structural engineering.',
    images: ['/assets/portfolio7-1-600x600.jpg'],
  },
};

export default function Page() {
  return <BlogView />;
}
