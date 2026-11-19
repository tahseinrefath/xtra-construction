'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import MobileDrawer from '@/components/layout/MobileDrawer';
import SearchModal from '@/components/layout/SearchModal';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import PageBanner from '@/components/layout/PageBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import Toast from '@/components/ui/Toast';
import { useCart } from '@/context/CartContext';
import { Star, ShoppingCart, Check, ArrowUpDown } from 'lucide-react';
import Link from 'next/link';

export default function ShopView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('featured');
  const [toastMessage, setToastMessage] = useState(null);
  const [addedId, setAddedId] = useState(null);

  const { addItem, itemCount } = useCart();

  const products = [
    {
      id: 1,
      name: 'Pack 2 Best Seller',
      category: 'Kits',
      price: 29.99,
      rating: 5,
      reviews: 24,
      badge: 'Best Seller',
      image: '/assets/personal_gift-1-600x600.jpg',
      desc: 'Standard commercial grade tool & fastener package for general contractors.',
    },
    {
      id: 2,
      name: 'Package 1 Premium Sets',
      category: 'Safety',
      price: 49.0,
      rating: 4.5,
      reviews: 18,
      badge: 'Featured',
      image: '/assets/tick_tock-1-1-600x600.jpg',
      desc: 'OSHA-compliant personal protective equipment and high-altitude safety harnesses.',
    },
    {
      id: 3,
      name: 'Package 2 Heavy Duty',
      category: 'Heavy',
      price: 89.0,
      rating: 4.8,
      reviews: 31,
      badge: 'Best Seller',
      image: '/assets/portfolio7-1-600x600.jpg',
      desc: 'Industrial masonry drills, core cutters, and diamond abrasive wheel sets.',
    },
    {
      id: 4,
      name: 'Pro Package Site Kit',
      category: 'Kits',
      price: 120.0,
      rating: 5,
      reviews: 42,
      badge: 'Featured',
      image: '/assets/portfolio10-1-600x600.jpg',
      desc: 'Complete supervisor surveying station: optical transit, tripod, and digital stadia.',
    },
    {
      id: 5,
      name: 'Product 2 Survey Leveler',
      category: 'Instruments',
      price: 35.0,
      rating: 4.6,
      reviews: 12,
      badge: 'New',
      image: '/assets/portfolio3-1-600x600.jpg',
      desc: 'Self-leveling 360-degree green beam rotary laser for foundation benchmarking.',
    },
    {
      id: 6,
      name: 'Special Pack Rebar Ties',
      category: 'Hardware',
      price: 65.0,
      rating: 4.9,
      reviews: 57,
      badge: 'Best Seller',
      image: '/assets/portfolio6-1-600x600.jpg',
      desc: '5,000-count galvanized epoxy-coated rebar ties and dual-battery automated tyer.',
    },
  ];

  const categories = ['ALL', 'Kits', 'Safety', 'Heavy', 'Instruments', 'Hardware'];

  const filtered = products
    .filter((p) => selectedCategory === 'ALL' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAddedId(product.id);
    setToastMessage(`Added "${product.name}" to your cart.`);
    setTimeout(() => setAddedId(null), 1800);
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
        <PageBanner title="Shop" breadcrumb="Store & Packages" bgImage="/assets/row-bg.jpg" />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="CONSTRUCTION STORE"
              subtitle="Professional Hardware & Tool Kits"
              title="Job-Site Tested Tools & Engineering Equipment"
              description="Certified contractor bundles, safety apparatus, laser leveling instruments, and heavy-duty structural consumables trusted on our active sites."
              centered
            />

            {/* Controls Bar: Category Pills + Sort + Cart Status Link */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-200 pb-6">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs uppercase font-extrabold tracking-wider px-4 py-2 transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#243344] text-[#f4c03b]'
                        : 'bg-[#f7f9fb] text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-[#f7f9fb] border border-gray-200 text-xs font-semibold text-[#243344] px-3 py-2 cursor-pointer focus:outline-none focus:border-[#f4c03b]"
                  >
                    <option value="featured">Featured First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>

                <Link
                  href="/cart"
                  className="bg-[#f4c03b] hover:bg-[#243344] hover:text-white text-[#243344] text-xs font-extrabold uppercase px-4 py-2 flex items-center gap-2 transition-colors shadow-sm"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Cart ({itemCount})</span>
                </Link>
              </div>
            </div>

            {/* Product Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item) => {
                const isJustAdded = addedId === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden"
                  >
                    {/* Thumbnail & Badge */}
                    <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {item.badge && (
                        <span className="absolute top-3 left-3 bg-[#f4c03b] text-[#243344] font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 shadow">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(item.rating)
                                ? 'text-[#f4c03b] fill-[#f4c03b]'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-[11px] text-gray-500 ml-1">
                          ({item.reviews})
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#243344] mb-2 group-hover:text-[#f4c03b] transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-xs text-gray-600 mb-4 flex-1 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xl font-extrabold text-[#243344]">
                          ${item.price.toFixed(2)}
                        </span>

                        <button
                          onClick={() => handleAddToCart(item)}
                          className={`text-xs uppercase font-extrabold px-4 py-2.5 flex items-center gap-2 transition-all cursor-pointer ${
                            isJustAdded
                              ? 'bg-green-600 text-white'
                              : 'bg-[#f4c03b] text-[#243344] hover:bg-[#243344] hover:text-white'
                          }`}
                        >
                          {isJustAdded ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4" />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
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
