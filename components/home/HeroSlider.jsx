'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { siteData } from '@/data/siteData';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slides = siteData.heroSlides;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="hero" className="relative w-full h-[620px] md:h-[700px] lg:h-[750px] overflow-hidden bg-[#1c2734]">
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Dark Contrast Overlay */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url('${slide.bgImage}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#16202c]/90 via-[#1c2734]/75 to-black/60" />

            {/* Slide Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl text-white pt-8">
                {/* Tag Badge */}
                <div className="inline-flex items-center gap-2 mb-4 bg-[#f4c03b] text-[#243344] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest shadow-sm">
                  <span>{slide.tag}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight md:leading-[1.1] mb-6 drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-9 leading-relaxed max-w-xl font-normal">
                  {slide.subtitle}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Button href={slide.primaryCta.href} variant="primary" size="lg">
                    {slide.primaryCta.label}
                  </Button>
                  <Button href={slide.secondaryCta.href} variant="outline" size="lg">
                    {slide.secondaryCta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Prev / Next Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/40 hover:bg-[#f4c03b] hover:text-[#243344] text-white flex items-center justify-center transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/40 hover:bg-[#f4c03b] hover:text-[#243344] text-white flex items-center justify-center transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-none ${
              i === current
                ? 'w-8 h-2 bg-[#f4c03b]'
                : 'w-2.5 h-2 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
