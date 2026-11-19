import './globals.css';

export const metadata = {
  title: 'Construction 2 WordPress Theme – Building and Maintenance',
  description:
    'Comprehensive construction, civil engineering, road works, and facility maintenance solutions built with quality and safety.',
  keywords: [
    'Construction',
    'Building Engineering',
    'Road Works',
    'Maintenance',
    'Architecture',
    'Contractor',
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-[#243344] bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
