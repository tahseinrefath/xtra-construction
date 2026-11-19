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
import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const contactCards = [
    {
      icon: Phone,
      title: 'Telephone & Dispatch',
      details: ['+1 (818) 23 45 679 (Office)', '+1 (818) 23 45 680 (24/7 Site Dispatch)'],
      actionText: 'Call Now',
      actionHref: 'tel:+18182345679',
    },
    {
      icon: Mail,
      title: 'Email & Tenders',
      details: ['Support@constrcution.com', 'Bids@constrcution.com'],
      actionText: 'Write To Us',
      actionHref: 'mailto:Support@constrcution.com',
    },
    {
      icon: MapPin,
      title: 'Corporate Headquarters',
      details: ['2346 Johnson St. Financial District', 'New York, NY 10005, United States'],
      actionText: 'Open in Maps',
      actionHref: 'https://maps.google.com/?q=New+York,+USA',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday – Friday: 08:00 AM – 06:00 PM', 'Saturday: 09:00 AM – 02:00 PM (Site Only)'],
      actionText: 'Working Days',
      actionHref: '#',
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
        <PageBanner title="Contact" breadcrumb="Contact Us" bgImage="/assets/row-bg.jpg" />

        {/* Contact Info Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="GET IN TOUCH WITH US"
              subtitle="We Are Here to Help"
              title="Speak Directly with Our Senior Engineering Team"
              description="Whether you are submitting an RFP tender, seeking commercial partnership, or inquiring about our project capabilities, our dispatch office will connect you with the appropriate discipline head."
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-100 p-8 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#f4c03b] group text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-[#243344] group-hover:bg-[#f4c03b] flex items-center justify-center transition-colors duration-300 mb-6">
                      <Icon className="w-8 h-8 text-[#f4c03b] group-hover:text-[#243344] transition-colors duration-300" />
                    </div>

                    <h3 className="text-lg font-bold text-[#243344] mb-3 group-hover:text-[#f4c03b] transition-colors">
                      {card.title}
                    </h3>

                    <div className="space-y-1 mb-6 flex-1">
                      {card.details.map((d, i) => (
                        <p key={i} className="text-xs text-gray-600 font-medium leading-relaxed">
                          {d}
                        </p>
                      ))}
                    </div>

                    <a
                      href={card.actionHref}
                      className="text-xs font-bold uppercase tracking-wider text-[#243344] hover:text-[#f4c03b] transition-colors border-b border-gray-200 hover:border-[#f4c03b] pb-1"
                    >
                      {card.actionText} →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Full Interactive Map Embed */}
        <section className="relative w-full h-[450px] overflow-hidden bg-gray-100 border-t border-gray-200">
          <iframe
            title="Office Location Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.025,40.695,-73.960,40.740&layer=mapnik&marker=40.7128,-74.006"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
