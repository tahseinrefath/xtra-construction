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
import Button from '@/components/ui/Button';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function BlogPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const posts = [
    {
      id: 1,
      title: 'A Place of Silence: Acoustic Insulation in High-Rise Structures',
      slug: 'place-of-silence',
      category: 'ARCHITECTURE',
      date: 'October 14, 2026',
      author: 'Arthur Vance',
      image: '/assets/portfolio7-600x600.jpg',
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
      image: '/assets/portfolio10-600x600.jpg',
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

        {/* Blog Listing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="CONSTRUCTION INTELLIGENCE"
              subtitle="Latest From Our Job Sites"
              title="Engineering Innovations & Architectural Insights"
              description="Technical perspectives, structural research, and industry developments penned by our master builders, civil engineers, and project executives."
              centered
            />

            {/* Articles Grid */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col overflow-hidden"
                >
                  {/* Featured Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#f4c03b] text-[#243344] font-bold text-[10px] uppercase tracking-wider px-3 py-1 shadow">
                      {post.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    {/* Meta info */}
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

                    <h2 className="text-xl font-bold text-[#243344] mb-3 group-hover:text-[#f4c03b] transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs uppercase font-bold text-[#243344] group-hover:text-[#f4c03b] flex items-center gap-2 transition-colors cursor-pointer">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
