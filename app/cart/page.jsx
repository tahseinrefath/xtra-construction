import CartView from '@/components/views/CartView';

export const metadata = {
  title: 'Shopping Cart & Order Summary',
  description:
    'Review your active construction hardware cart, calculate real-time coupon savings, and proceed to SSL-encrypted checkout.',
  keywords: [
    'Construction Shopping Cart',
    'Order Checkout',
    'Contractor Hardware Cart',
    'Discount Coupons Construction',
  ],
  alternates: {
    canonical: '/cart',
  },
  openGraph: {
    title: 'Shopping Cart | XTRA Construction',
    description: 'Review your selected construction packages and equipment items.',
    url: '/cart',
    siteName: 'XTRA Construction',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Shopping Cart | XTRA Construction',
    description: 'Review your order and calculate shipping totals.',
  },
};

export default function Page() {
  return <CartView />;
}
