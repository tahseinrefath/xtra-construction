import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteData } from '@/data/siteData';

export default function ProcessSection() {
  const { process } = siteData;

  return (
    <section id="process" className="py-20 md:py-28 bg-[#f7f9fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content & 3 Steps */}
          <div className="lg:col-span-7">
            <SectionHeading
              tag={process.tag}
              subtitle={process.subtitle}
              title={process.title}
              description={process.description}
              align="left"
            />

            {/* 3 Steps */}
            <div className="space-y-6 mt-8">
              {process.steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white p-6 md:p-8 shadow-sm border-l-4 border-[#243344] hover:border-[#f4c03b] transition-all duration-300 hover:shadow-md flex items-start gap-6 group"
                >
                  {/* Step Number Circle / Square */}
                  <div className="w-14 h-14 bg-[#243344] text-[#f4c03b] group-hover:bg-[#f4c03b] group-hover:text-[#243344] font-black text-xl flex items-center justify-center shrink-0 transition-colors duration-300">
                    {step.number}
                  </div>

                  {/* Step Text */}
                  <div>
                    <h3 className="text-xl font-extrabold text-[#243344] group-hover:text-[#f4c03b] transition-colors mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#6c7a89] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Process Construction Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden shadow-2xl">
                <img
                  src={process.image}
                  alt="Construction Process Workflow"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative Gold Frame */}
              <div className="absolute -top-6 -right-6 w-full h-full border-4 border-[#f4c03b] z-0 hidden sm:block pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
