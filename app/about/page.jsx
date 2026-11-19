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
import { Building2, Wrench, ShieldCheck, CheckCircle2, Award, Users, HardHat, Clock } from 'lucide-react';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const pillars = [
    {
      icon: Building2,
      title: 'General Construction',
      desc: 'From high-rise commercial structures to custom residential properties, our construction capabilities combine cutting-edge technology with precision craftsmanship.',
    },
    {
      icon: HardHat,
      title: 'Modern Structures',
      desc: 'Engineered for resilience and aesthetic superiority, we build earthquake-resistant, LEED-certified smart buildings engineered for long-term sustainability.',
    },
    {
      icon: Wrench,
      title: 'Facility Maintenance',
      desc: 'Comprehensive lifecycle management, ongoing preventive inspections, and structural restorations that ensure your assets maintain value and security.',
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
        {/* Subpage Banner */}
        <PageBanner title="About" breadcrumb="About Us" bgImage="/assets/row-bg.jpg" />

        {/* 1. Company Narrative Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image with signature gold offset frame */}
              <div className="relative">
                <div className="relative z-10 overflow-hidden shadow-2xl">
                  <img
                    src="/assets/about-company.jpg"
                    alt="XTRA Construction Leadership"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Gold geometric backing frame */}
                <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#f4c03b] -z-0 hidden sm:block" />

                {/* 25 Years Badge */}
                <div className="absolute -bottom-8 right-6 z-20 bg-[#243344] text-white p-6 shadow-xl border-b-4 border-[#f4c03b] text-center">
                  <span className="block text-4xl font-extrabold text-[#f4c03b]">25+</span>
                  <span className="text-xs uppercase font-semibold tracking-wider text-gray-300">
                    Years of Trust & Precision
                  </span>
                </div>
              </div>

              {/* Right Column: Company Narrative */}
              <div>
                <SectionHeading
                  tag="ABOUT OUR COMPANY"
                  subtitle="It's All About Quality & Craftsmanship"
                  title="Leading the Construction Industry with Distinction"
                  description="Founded on the principles of engineering honesty, safety, and rigorous execution, our firm has delivered over 450 major architectural and industrial projects worldwide. We blend traditional craftsmanship with BIM modeling and eco-friendly standards."
                />

                <div className="mt-8 space-y-4">
                  {[
                    'Master craftspeople and certified licensed structural engineers',
                    'Zero-compromise environmental and occupational safety records',
                    'Transparent milestone billing with guaranteed on-time handover',
                    'Lifetime structural warranty on all residential and commercial builds',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#f4c03b] flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="primary">
                    Get Free Quote
                  </Button>
                  <Button href="/services" variant="outline">
                    Explore Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Three Pillars Grid */}
        <section className="py-20 bg-[#f7f9fb] border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="CORE PILLARS"
              subtitle="What Drives Us Every Day"
              title="Built on Inflexible Standards of Engineering"
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-8 border-b-4 border-transparent hover:border-[#f4c03b] shadow-md hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-[#243344] group-hover:bg-[#f4c03b] flex items-center justify-center transition-colors duration-300 mb-6">
                      <Icon className="w-7 h-7 text-[#f4c03b] group-hover:text-[#243344] transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#243344] mb-3 group-hover:text-[#f4c03b] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
