'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import MobileDrawer from '@/components/layout/MobileDrawer';
import SearchModal from '@/components/layout/SearchModal';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import Toast from '@/components/ui/Toast';

import HeroSlider from '@/components/home/HeroSlider';
import FeatureCards from '@/components/home/FeatureCards';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import ProjectsGallery from '@/components/home/ProjectsGallery';
import QuoteSection from '@/components/home/QuoteSection';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import PartnersBar from '@/components/home/PartnersBar';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchFeedback, setSearchFeedback] = useState(null);

  const handleSearch = (term) => {
    setSearchFeedback(`Searching for "${term}" across all projects and services.`);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* 1. Top Bar */}
      <TopBar onOpenSearch={() => setSearchOpen(true)} />

      {/* 2. Main Sticky Header */}
      <Header onOpenMobile={() => setMobileMenuOpen(true)} />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSearch={handleSearch}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* 3. Hero Section Slider */}
        <HeroSlider />

        {/* 4. Features At A Glance (Overlapping Hero) */}
        <FeatureCards />

        {/* 5. About Our Company */}
        <AboutSection />

        {/* 6. Construction Services & Dream Callout */}
        <ServicesSection />

        {/* 7. Process of Construction (01, 02, 03 Steps) */}
        <ProcessSection />

        {/* 8. Portfolio Showcase / Latest Projects */}
        <ProjectsGallery />

        {/* 9. Request a Free & Fair Quote Form */}
        <QuoteSection />

        {/* 10. Testimonials Slider */}
        <TestimonialsSlider />

        {/* 11. Partners / Client Logos Bar */}
        <PartnersBar />
      </main>

      {/* 12. Footer & Copyright Bar */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Feedback Toast */}
      <Toast
        isOpen={Boolean(searchFeedback)}
        message={searchFeedback}
        onClose={() => setSearchFeedback(null)}
      />
    </div>
  );
}
