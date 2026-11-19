import MyAccountView from '@/components/views/MyAccountView';

export const metadata = {
  title: 'Client & Contractor Portal Authentication',
  description:
    'Secure single sign-on access for real-time site camera telemetry, architectural drawings revision logs, and contractor billing disbursements.',
  keywords: [
    'Client Construction Portal',
    'Contractor Dashboard Login',
    'Project Camera Feeds',
    'Drawing Revision Logs',
  ],
  alternates: {
    canonical: '/my-account',
  },
  openGraph: {
    title: 'Client & Contractor Portal | XTRA Construction',
    description: 'Secure access to your active project dashboards and milestone disbursements.',
    url: '/my-account',
    siteName: 'XTRA Construction',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Client & Contractor Portal | XTRA Construction',
    description: 'Secure authentication for clients and partners.',
  },
};

export default function Page() {
  return <MyAccountView />;
}
