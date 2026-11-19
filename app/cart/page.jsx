'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import MobileDrawer from '@/components/layout/MobileDrawer';
import SearchModal from '@/components/layout/SearchModal';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import PageBanner from '@/components/layout/PageBanner';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { items, updateQty, removeItem, subtotal } = useCart();

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
                      {/* Product details */}
                      <td className="py-4 px-6 flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover border border-gray-200"
                        />
                        <span className="font-bold text-[#243344]">{item.name}</span>
                      </td>

                      {/* Price */}
                      <td className="py-4 px-6 font-semibold text-gray-700">
                        ${item.price.toFixed(2)}
                      </td>

                      {/* Quantity Stepper */}
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

                      {/* Subtotal */}
                      <td className="py-4 px-6 text-right font-extrabold text-[#243344]">
                        ${(item.price * item.qty).toFixed(2)}
                      </td>

                      {/* Remove Button */}
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
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
