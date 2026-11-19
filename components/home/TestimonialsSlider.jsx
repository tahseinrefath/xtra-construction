'use client';

import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteData } from '@/data/siteData';

export default function TestimonialsSlider() {
  const { testimonials } = siteData;
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((p) => (p === 0 ? testimonials.items.length - 1 : p - 1));
  };

  const next = () => {
    setCurrent((p) => (p === testimonials.items.length - 1 ? 0 : p + 1));
  };

  const activeItem = testimonials.items[current];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#f7f9fb] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={testimonials.tag}
          subtitle={testimonials.subtitle}
          title={testimonials.title}
          align="center"
        />

        {/* Carousel Container */}
        <div className="relative mt-12 md:mt-16">
          <div className="relative bg-white shadow-theme-card p-8 sm:p-12 md:p-16 border border-gray-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Avatar with Signature Gold Offset Box Shadow */}
              <div className="shrink-0 relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative avatar-gold-shadow bg-gray-200 overflow-hidden">
                  <img
                    src={activeItem.avatar}
                    alt={activeItem.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Quote & Author Info */}
              <div className="flex-1 text-center md:text-left">
                <Quote className="w-10 h-10 text-[#f4c03b] mb-4 mx-auto md:mx-0 opacity-70" />
                <p className="text-base sm:text-lg md:text-xl text-[#243344] italic font-normal leading-relaxed mb-6">
                  &ldquo;{activeItem.quote}&rdquo;
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-lg md:text-xl font-black text-[#243344]">
                    {activeItem.author}
                  </h4>
                  <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#f4c03b] mt-0.5">
                    {activeItem.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-center md:justify-end gap-3 mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={prev}
                className="w-11 h-11 bg-gray-100 hover:bg-[#f4c03b] text-[#243344] flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-xs font-bold text-gray-400 px-2 tracking-widest">
                0{current + 1} / 0{testimonials.items.length}
              </div>
              <button
                onClick={next}
                className="w-11 h-11 bg-gray-100 hover:bg-[#f4c03b] text-[#243344] flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
