import React from 'react';
import { Building2, ShieldCheck, HardHat } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteData } from '@/data/siteData';

export default function FeatureCards() {
  const { featureCards } = siteData;

  const iconMap = {
    Building2: <Building2 className="w-8 h-8 text-[#f4c03b]" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#f4c03b]" />,
    HardHat: <HardHat className="w-8 h-8 text-[#f4c03b]" />,
  };

  return (
    <section className="relative z-20 -mt-16 md:-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Floating Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {featureCards.map((card) => {
          return (
            <div
              key={card.id}
              className={`relative bg-white p-8 md:p-10 shadow-theme-card transition-all duration-300 hover:-translate-y-2 hover:shadow-theme-card-hover border-b-4 ${
                card.highlighted
                  ? 'border-[#f4c03b]'
                  : 'border-[#243344] hover:border-[#f4c03b]'
              } group`}
            >
              {/* Badge Number */}
              <div className="absolute top-6 right-8 text-4xl font-black text-gray-100 group-hover:text-[#f4c03b]/20 transition-colors select-none">
                {card.badge}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-[#243344] flex items-center justify-center mb-6 group-hover:bg-[#f4c03b] transition-colors duration-300">
                {card.imageIcon ? (
                  <img
                    src={card.imageIcon}
                    alt={card.title}
                    className="w-9 h-9 object-contain brightness-0 invert group-hover:brightness-0 transition-all"
                  />
                ) : (
                  <span className="text-[#f4c03b] group-hover:text-[#243344] transition-colors">
                    {iconMap[card.icon]}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-[#243344] mb-3 group-hover:text-[#f4c03b] transition-colors">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#6c7a89] leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
