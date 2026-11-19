'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import MobileDrawer from '@/components/layout/MobileDrawer';
import SearchModal from '@/components/layout/SearchModal';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import PageBanner from '@/components/layout/PageBanner';
import Toast from '@/components/ui/Toast';
import { useCart } from '@/context/CartContext';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  Tag,
  ShieldCheck,
  CheckCircle,
  X,
  Lock,
  PackageOpen,
  Star,
  Check,
} from 'lucide-react';
import Link from 'next/link';

export default function CartView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [couponInput, setCouponInput] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [addedUpsellId, setAddedUpsellId] = useState(null);

  const {
    items,
    updateQty,
    removeItem,
    subtotal,
    discount,
    total,
    coupon,
    applyCoupon,
    removeCoupon,
    addItem,
  } = useCart();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    if (res.success) {
      setToastMessage(`Coupon "${couponInput.toUpperCase()}" applied! ${(res.discount * 100).toFixed(0)}% discount.`);
      setCouponInput('');
    } else {
      setToastMessage('Invalid coupon code. Try SAVE10, BUILD20, or XTRA15.');
    }
  };

  const upsells = [
    {
      id: 101,
      name: 'High-Altitude Fall Harness',
      price: 54.0,
      rating: 5,
      image: '/assets/portfolio7-1-600x600.jpg',
    },
    {
      id: 102,
      name: 'Precision Dual Laser Target',
      price: 32.5,
      rating: 4.8,
      image: '/assets/portfolio10-1-600x600.jpg',
    },
    {
      id: 103,
      name: 'Galvanized Masonry Anchors (500pk)',
      price: 45.0,
      rating: 4.9,
      image: '/assets/portfolio3-1-600x600.jpg',
    },
    {
      id: 104,
      name: 'High-Viz Supervisor Hardhat',
      price: 24.0,
      rating: 4.7,
      image: '/assets/personal_gift-1-600x600.jpg',
    },
  ];

  const handleAddUpsell = (prod) => {
    addItem(prod);
    setAddedUpsellId(prod.id);
    setToastMessage(`Added "${prod.name}" to cart.`);
    setTimeout(() => setAddedUpsellId(null), 1500);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <TopBar onOpenSearch={() => setSearchOpen(true)} />
      <Header onOpenMobile={() => setMobileMenuOpen(true)} />
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSearch={() => {}}
      />

      <main className="flex-1">
        <PageBanner title="Cart" breadcrumb="Shopping Cart" bgImage="/assets/row-bg.jpg" />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {items.length === 0 ? (
              /* Empty Cart State */
              <div className="bg-[#f7f9fb] border border-gray-200 py-16 px-6 text-center max-w-2xl mx-auto shadow-sm">
                <div className="w-20 h-20 bg-[#243344] rounded-full flex items-center justify-center mx-auto mb-6">
                  <PackageOpen className="w-10 h-10 text-[#f4c03b]" />
                </div>
                <h2 className="text-2xl font-bold text-[#243344] mb-3">
                  Your Cart is Currently Empty
                </h2>
                <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto">
                  Before proceeding to checkout you must add some construction packages or contractor tools to your shopping cart.
                </p>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-[#f4c03b] hover:bg-[#243344] hover:text-white text-[#243344] font-extrabold text-xs uppercase tracking-widest px-8 py-4 transition-colors shadow"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Return to Store</span>
                </Link>
              </div>
            ) : (
              /* Populated Cart Grid */
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Cart Table & Coupon */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border border-gray-200">
                      <thead className="bg-[#243344] text-white text-xs uppercase font-extrabold tracking-wider">
                        <tr>
                          <th className="py-4 px-6">Product</th>
                          <th className="py-4 px-6">Price</th>
                          <th className="py-4 px-6 text-center">Quantity</th>
                          <th className="py-4 px-6 text-right">Subtotal</th>
                          <th className="py-4 px-6 text-center">Remove</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-sm">
                        {items.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-6 flex items-center gap-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover border border-gray-200"
                              />
                              <span className="font-bold text-[#243344]">{item.name}</span>
                            </td>
                            <td className="py-4 px-6 font-semibold text-gray-700">
                              ${item.price.toFixed(2)}
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center justify-center gap-2">
                                <button
                                  onClick={() => updateQty(item.id, item.qty - 1)}
                                  className="w-8 h-8 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#243344] hover:text-white transition-colors cursor-pointer"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="w-10 text-center font-bold text-sm">
                                  {item.qty}
                                </span>
                                <button
                                  onClick={() => updateQty(item.id, item.qty + 1)}
                                  className="w-8 h-8 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#243344] hover:text-white transition-colors cursor-pointer"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-right font-extrabold text-[#243344]">
                              ${(item.price * item.qty).toFixed(2)}
                            </td>
                            <td className="py-4 px-6 text-center">
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-2 cursor-pointer"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Coupon Code Strip */}
                  <div className="bg-[#f7f9fb] p-6 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <form onSubmit={handleApplyCoupon} className="flex gap-2 w-full sm:w-auto">
                      <div className="relative flex-1 sm:w-64">
                        <input
                          type="text"
                          placeholder="Coupon code (e.g. SAVE10)"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          className="w-full bg-white border border-gray-300 px-4 py-2.5 text-xs text-[#243344] uppercase tracking-wider focus:outline-none focus:border-[#f4c03b]"
                        />
                        <Tag className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#243344] hover:bg-[#f4c03b] hover:text-[#243344] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 transition-colors cursor-pointer"
                      >
                        Apply Coupon
                      </button>
                    </form>

                    {coupon && (
                      <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-1.5 text-green-700 text-xs font-bold">
                        <CheckCircle className="w-4 h-4" />
                        <span>{coupon.code} ({(coupon.discount * 100).toFixed(0)}% OFF)</span>
                        <button
                          onClick={removeCoupon}
                          className="ml-2 text-gray-400 hover:text-red-500 cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Order Summary / Cart Totals */}
                <div>
                  <div className="bg-[#f7f9fb] border border-gray-200 p-8 shadow-sm">
                    <h3 className="text-base uppercase font-extrabold text-[#243344] tracking-wider mb-6 pb-4 border-b border-gray-200">
                      Cart Totals
                    </h3>

                    <div className="space-y-4 text-sm mb-6">
                      <div className="flex justify-between items-center text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-bold text-[#243344]">${subtotal.toFixed(2)}</span>
                      </div>

                      {discount > 0 && (
                        <div className="flex justify-between items-center text-green-600 font-semibold">
                          <span>Coupon Discount</span>
                          <span>-${discount.toFixed(2)}</span>
                        </div>
                      )}

                      <div className="flex justify-between items-center text-gray-600">
                        <span>Standard Site Delivery</span>
                        <span className="font-bold text-green-600 uppercase text-xs">Free</span>
                      </div>

                      <div className="pt-4 border-t border-gray-200 flex justify-between items-center text-lg font-extrabold text-[#243344]">
                        <span>Grand Total</span>
                        <span className="text-[#f4c03b] text-2xl font-black">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setToastMessage('Checkout integration active. Ready for payment gateway.')}
                      className="w-full bg-[#f4c03b] hover:bg-[#243344] hover:text-white text-[#243344] font-extrabold text-xs uppercase tracking-widest py-4 transition-all duration-300 shadow flex items-center justify-center gap-2 cursor-pointer mb-6"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Proceed to Checkout</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500">
                      <ShieldCheck className="w-4 h-4 text-[#f4c03b]" />
                      <span>256-Bit SSL Encrypted Enterprise Checkout</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Upsell Recommendations Row */}
            <div className="mt-20 pt-16 border-t border-gray-200">
              <div className="mb-8">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#f4c03b] block mb-1">
                  RECOMMENDED ACCESSORIES
                </span>
                <h3 className="text-2xl font-bold text-[#243344]">
                  You May Also Be Interested In
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {upsells.map((u) => {
                  const isAdded = addedUpsellId === u.id;
                  return (
                    <div
                      key={u.id}
                      className="bg-[#f7f9fb] border border-gray-200 p-5 group flex flex-col justify-between hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-44 mb-4 overflow-hidden bg-white">
                        <img
                          src={u.image}
                          alt={u.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(u.rating)
                                  ? 'text-[#f4c03b] fill-[#f4c03b]'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>

                        <h4 className="text-sm font-bold text-[#243344] mb-2 leading-snug">
                          {u.name}
                        </h4>

                        <div className="flex items-center justify-between pt-2">
                          <span className="font-extrabold text-[#243344] text-base">
                            ${u.price.toFixed(2)}
                          </span>

                          <button
                            onClick={() => handleAddUpsell(u)}
                            className={`p-2 transition-colors cursor-pointer ${
                              isAdded
                                ? 'bg-green-600 text-white'
                                : 'bg-[#243344] text-white hover:bg-[#f4c03b] hover:text-[#243344]'
                            }`}
                            aria-label="Add upsell to cart"
                          >
                            {isAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />

      <Toast
        isOpen={Boolean(toastMessage)}
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
