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
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

export default function BlogView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [toastMessage, setToastMessage] = useState(null);

  const posts = [
    {
      id: 1,
      title: 'A Place of Silence: Acoustic Insulation in High-Rise Structures',
      slug: 'place-of-silence',
      category: 'ARCHITECTURE',
      date: 'October 14, 2026',
      author: 'Arthur Vance',
      image: '/assets/portfolio7-1-600x600.jpg',
      excerpt:
        'Investigating how decoupled acoustic drywall, resilient channels, and vibration-dampening neoprene pads create sound-isolated residential sanctuaries within busy metropolitan towers.',
      readTime: '6 min read',
    },
    {
      id: 2,
      title: 'How to Create a Construction Logo & Brand Like a Professional Firm',
      slug: 'construction-logo-branding',
      category: 'BUSINESS',
      date: 'October 08, 2026',
      author: 'Marcus Holloway',
      image: '/assets/tick_tock-1-1-600x600.jpg',
      excerpt:
        'Establishing visual authority, project signage standards, and trustworthy brand equity in competitive municipal and multi-family civil contracting markets.',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'Principles of Coldness: Thermal Envelope Engineering in Winter Climates',
      slug: 'principles-of-coldness-thermal-envelope',
      category: 'ENGINEERING',
      date: 'September 29, 2026',
      author: 'Elena Rostova',
      image: '/assets/portfolio10-1-600x600.jpg',
      excerpt:
        'Analyzing continuous polyisocyanurate exterior insulation, thermal bridge break fasteners, and triple-pane low-E glazing systems under severe sub-zero thermal stresses.',
      readTime: '8 min read',
    },
    {
      id: 4,
      title: 'Much Space in the World: Urban Optimization & Modular Frameworks',
      slug: 'urban-optimization-modular-steel',
      category: 'SUSTAINABILITY',
      date: 'September 18, 2026',
      author: 'Arthur Vance',
      image: '/assets/personal_gift-1-600x600.jpg',
      excerpt:
        'How off-site pre-fabricated structural steel bays reduce metropolitan jobsite street closures, optimize crane logistics, and accelerate project commissioning by 35%.',
      readTime: '5 min read',
    },
  ];

  const categories = [
    { name: 'ALL', count: 4 },
    { name: 'ARCHITECTURE', count: 12 },
    { name: 'BUSINESS', count: 6 },
    { name: 'ENGINEERING', count: 19 },
    { name: 'SUSTAINABILITY', count: 8 },
    { name: 'SAFETY PROTOCOLS', count: 14 },
  ];

  const recentPosts = [
    { title: 'Seismic Soil Liquefaction Countermeasures', date: 'Oct 19, 2026', image: '/assets/portfolio3-1-600x600.jpg' },
    { title: 'Post-Tensioned Slab Reinforcements', date: 'Oct 11, 2026', image: '/assets/portfolio6-1-600x600.jpg' },
    { title: 'BIM 5D Cost Control in Complex Builds', date: 'Sep 24, 2026', image: '/assets/portfolio9-1-600x600.jpg' },
  ];

  const tags = ['#SteelFrame', '#LEEDPlatinum', '#ConcretePours', '#BIMModeling', '#OSHA30', '#ThermalBreak', '#SoilMechanics'];

  const filteredPosts = posts.filter((p) => {
    const matchesCat = activeCategory === 'ALL' || p.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

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
        <PageBanner title="Blog" breadcrumb="News & Insights" bgImage="/assets/row-bg.jpg" />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Column: Posts List */}
              <div className="lg:col-span-2 space-y-10">
                {filteredPosts.length === 0 ? (
                  <div className="bg-[#f7f9fb] p-12 text-center border border-gray-200">
                    <p className="text-gray-600 text-base">No articles found matching your criteria.</p>
                    <button
                      onClick={() => {
                        setActiveCategory('ALL');
                        setSearchQuery('');
                      }}
                      className="mt-4 text-xs font-bold text-[#f4c03b] uppercase underline"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
                    >
                      <div className="relative h-72 sm:h-80 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/assets/about-company.jpg';
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-[#f4c03b] text-[#243344] font-bold text-[10px] uppercase tracking-wider px-3 py-1 shadow">
                          {post.category}
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#f4c03b]" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-[#f4c03b]" />
                            {post.author}
                          </span>
                          <span className="text-gray-400">• {post.readTime}</span>
                        </div>

                        <h2 className="text-2xl font-bold text-[#243344] mb-3 group-hover:text-[#f4c03b] transition-colors leading-snug">
                          {post.title}
                        </h2>

                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>

                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                          <button
                            onClick={() => setToastMessage(`Reading: ${post.title}`)}
                            className="text-xs uppercase font-extrabold tracking-wider text-[#243344] group-hover:text-[#f4c03b] flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            Read Full Article
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))
                )}

                {/* Pagination Controls */}
                <div className="pt-8 border-t border-gray-200 flex items-center justify-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(1)}
                    className="w-10 h-10 border border-gray-200 flex items-center justify-center text-xs font-bold hover:bg-[#243344] hover:text-white transition-colors disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage(1)}
                    className={`w-10 h-10 text-xs font-bold transition-colors cursor-pointer ${
                      currentPage === 1
                        ? 'bg-[#f4c03b] text-[#243344]'
                        : 'border border-gray-200 hover:bg-[#243344] hover:text-white'
                    }`}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setCurrentPage(2)}
                    className={`w-10 h-10 text-xs font-bold transition-colors cursor-pointer ${
                      currentPage === 2
                        ? 'bg-[#f4c03b] text-[#243344]'
                        : 'border border-gray-200 hover:bg-[#243344] hover:text-white'
                    }`}
                  >
                    2
                  </button>
                  <button
                    disabled={currentPage === 2}
                    onClick={() => setCurrentPage(2)}
                    className="w-10 h-10 border border-gray-200 flex items-center justify-center text-xs font-bold hover:bg-[#243344] hover:text-white transition-colors disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="space-y-8">
                {/* Search Box Widget */}
                <div className="bg-[#f7f9fb] p-6 border border-gray-200">
                  <h3 className="text-sm uppercase font-extrabold text-[#243344] tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-[#f4c03b]" />
                    Search Articles
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Keywords or topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-xs text-[#243344] focus:outline-none focus:border-[#f4c03b]"
                    />
                    <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="bg-[#f7f9fb] p-6 border border-gray-200">
                  <h3 className="text-sm uppercase font-extrabold text-[#243344] tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-[#f4c03b]" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setActiveCategory(c.name)}
                        className={`w-full flex items-center justify-between text-xs py-2 px-3 transition-colors cursor-pointer ${
                          activeCategory === c.name
                            ? 'bg-[#f4c03b] text-[#243344] font-bold'
                            : 'text-gray-700 hover:bg-white hover:text-[#f4c03b]'
                        }`}
                      >
                        <span>{c.name}</span>
                        <span className="text-[10px] opacity-75">({c.count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Articles Widget */}
                <div className="bg-[#f7f9fb] p-6 border border-gray-200">
                  <h3 className="text-sm uppercase font-extrabold text-[#243344] tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-[#f4c03b]" />
                    Recent Briefings
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((r, i) => (
                      <div key={i} className="flex gap-3 items-center group cursor-pointer">
                        <img
                          src={r.image}
                          alt={r.title}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/assets/about-company.jpg';
                          }}
                          className="w-14 h-14 object-cover flex-shrink-0 group-hover:opacity-80 transition-opacity"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-[#243344] group-hover:text-[#f4c03b] transition-colors line-clamp-2 leading-snug">
                            {r.title}
                          </h4>
                          <span className="text-[10px] text-gray-400 mt-1 block">{r.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tag Cloud */}
                <div className="bg-[#f7f9fb] p-6 border border-gray-200">
                  <h3 className="text-sm uppercase font-extrabold text-[#243344] tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-[#f4c03b]" />
                    Engineering Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-white border border-gray-200 text-gray-700 px-2.5 py-1 hover:border-[#f4c03b] hover:text-[#f4c03b] cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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
