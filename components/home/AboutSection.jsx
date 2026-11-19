'use client';

import React, { useState } from 'react';
import { CheckCircle2, Award, X } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { siteData } from '@/data/siteData';

export default function AboutSection() {
  const { about } = siteData;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="scroll-mt-20 md:scroll-mt-24 py-20 md:py-28 bg-[#f7f9fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: About Image with Floating Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image Frame with Gold Shadow Box */}
              <div className="relative z-10 overflow-hidden shadow-2xl">
                <img
                  src={about.image}
                  alt="About Our Company"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative Accent Border Frame behind image */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#f4c03b] z-0 hidden sm:block pointer-events-none" />

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-8 -right-4 sm:right-6 z-20 bg-[#243344] text-white p-6 shadow-2xl border-l-4 border-[#f4c03b] max-w-xs flex items-center gap-4">
                <div className="text-4xl md:text-5xl font-black text-[#f4c03b]">
                  {about.experienceYears}
                </div>
                <div className="text-xs uppercase tracking-wider font-bold text-gray-200">
                  {about.experienceText}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content & Bullet Points */}
          <div className="lg:col-span-6 pt-6 lg:pt-0">
            <SectionHeading
              tag={about.tag}
              subtitle={about.subtitle}
              title={about.title}
              description={about.description}
              align="left"
            />

            {/* Bullet Points */}
            <div className="space-y-3.5 mb-9">
              {about.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f4c03b] shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#243344] font-medium leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <Button onClick={() => setModalOpen(true)} variant="primaryDarkHover" size="md">
              {about.ctaText}
            </Button>
          </div>
        </div>
      </div>

      {/* Read More Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white max-w-2xl w-full p-8 md:p-10 shadow-2xl border-t-4 border-[#f4c03b] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#243344]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f4c03b]">
              About Company
            </span>
            <h3 className="text-2xl font-black text-[#243344] mt-1 mb-4">
              Building Excellence Since 1999
            </h3>
            <p className="text-sm md:text-base text-[#6c7a89] leading-relaxed mb-4">
              Established with an unyielding commitment to safety, architectural precision, and client partnership, XTRA Construction has evolved into an industry benchmark. Our team manages complex infrastructural projects, residential high-rises, and industrial complexes across the nation.
            </p>
            <p className="text-sm md:text-base text-[#6c7a89] leading-relaxed mb-6">
              We leverage modern BIM modeling, state-of-the-art earthmoving equipment, and sustainably certified materials to deliver landmarks that stand the test of time.
            </p>
            <Button onClick={() => setModalOpen(false)} variant="primary" size="sm">
              Close Window
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
