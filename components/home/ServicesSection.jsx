'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { siteData } from '@/data/siteData';

export default function ServicesSection() {
  const { services } = siteData;

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          tag={services.tag}
          subtitle={services.subtitle}
          title={services.title}
          align="center"
        />

        {/* 3 Interactive Cards with Hover Background Image Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.items.map((item) => (
            <div
              key={item.id}
              className="relative group bg-[#f7f9fb] p-8 md:p-10 shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 min-h-[420px] flex flex-col justify-between"
            >
              {/* Background Image Reveal on Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform ease-out"
                style={{ backgroundImage: `url('${item.bgImage}')` }}
              />
              {/* Dark Gradient Overlay over Background Image on Hover */}
              <div className="absolute inset-0 bg-[#243344]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Content Layer */}
              <div className="relative z-10">
                {/* Icon Box */}
                <div className="w-20 h-20 bg-white group-hover:bg-[#f4c03b] shadow-md flex items-center justify-center p-4 mb-8 transition-colors duration-300">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-black text-[#243344] group-hover:text-white transition-colors duration-300 mb-4">
                  {item.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm md:text-base text-[#6c7a89] group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Footer Link */}
              <div className="relative z-10 pt-6 border-t border-gray-200/60 group-hover:border-white/20 transition-colors">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#243344] group-hover:text-[#f4c03b] transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Full-Width Dream Callout Banner Strip */}
        <div className="mt-16 bg-[#243344] text-white p-8 md:p-12 shadow-xl border-l-8 border-[#f4c03b] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f4c03b]">
              Get Started Today
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-1">
              {services.banner.headline}
            </h3>
          </div>
          <Button href={services.banner.link} variant="primary" size="lg" className="shrink-0">
            {services.banner.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
