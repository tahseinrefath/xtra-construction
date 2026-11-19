'use client';

import React from 'react';
import { Building2, ShieldCheck, HardHat } from 'lucide-react';
import { siteData } from '@/data/siteData';

export default function FeatureCards() {
  const { featureCards } = siteData;

  const renderIcon = (iconName) => {
    const iconClass =
      'w-8 h-8 text-current stroke-current transition-colors duration-300 stroke-[2]';

    switch (iconName) {
      case 'Building2':
        return <Building2 className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'HardHat':
        return <HardHat className={iconClass} />;
      default:
        return <Building2 className={iconClass} />;
    }
  };

  return (
    <section className="relative z-20 -mt-16 md:-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Floating Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {featureCards.map((card) => (
          <div
            key={card.id}
            className="relative bg-white p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-[#243344] hover:border-[#f4c03b] group cursor-pointer"
          >
            {/* Top-Right Badge Number */}
            <div className="absolute top-6 right-8 text-4xl font-black text-gray-200 group-hover:text-[#f4c03b]/30 transition-colors duration-300 select-none">
              {card.badge}
            </div>

            {/* Icon Box */}
            <div className="w-16 h-16 bg-[#243344] text-[#f4c03b] group-hover:bg-[#f4c03b] group-hover:text-[#243344] flex items-center justify-center mb-6 transition-all duration-300 shadow-sm group-hover:shadow-md [&>svg]:text-current [&>svg]:stroke-current">
              {renderIcon(card.icon)}
            </div>

            {/* Title */}
            <h3 className="text-xl font-extrabold text-[#243344] mb-3 group-hover:text-[#f4c03b] transition-colors duration-300">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#6c7a89] leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
