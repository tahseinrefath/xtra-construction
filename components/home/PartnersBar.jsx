import React from 'react';
import { siteData } from '@/data/siteData';

export default function PartnersBar() {
  const { partners } = siteData;

  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6c7a89]">
            Trusted by Industry Leaders Worldwide
          </span>
        </div>

        {/* 5 Logos Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flip-card w-36 h-20 flex items-center justify-center p-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="flip-card-inner w-full h-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
