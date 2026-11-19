'use client';

import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import LightboxModal from '@/components/ui/LightboxModal';
import { siteData } from '@/data/siteData';

export default function ProjectsGallery() {
  const { projects } = siteData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    image: null,
    title: '',
    category: '',
  });

  const filteredProjects =
    activeCategory === 'All'
      ? projects.items
      : projects.items.filter((item) =>
          item.categories.includes(activeCategory)
        );

  const handleOpenLightbox = (item) => {
    setLightbox({
      isOpen: true,
      image: item.image,
      title: item.title,
      category: item.categories.join(', '),
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="projects" className="scroll-mt-20 md:scroll-mt-24 py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          tag={projects.tag}
          subtitle={projects.subtitle}
          title={projects.title}
          align="center"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {projects.categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs md:text-sm font-bold uppercase tracking-wider px-5 py-2.5 transition-all duration-300 rounded-none ${
                  isActive
                    ? 'bg-[#f4c03b] text-[#243344] shadow-md'
                    : 'bg-gray-100 text-[#243344] hover:bg-[#243344] hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 8 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden bg-gray-900 aspect-square shadow-md cursor-pointer"
              onClick={() => handleOpenLightbox(item)}
            >
              {/* Project Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#16202c]/95 via-[#243344]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                {/* Categories */}
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#f4c03b] mb-1">
                  {item.categories.join(', ')}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-4">
                  {item.title}
                </h3>

                {/* Zoom Icon Action */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#f4c03b] text-[#243344] flex items-center justify-center hover:bg-white transition-colors">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-semibold text-gray-200">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        image={lightbox.image}
        title={lightbox.title}
        category={lightbox.category}
        onClose={handleCloseLightbox}
      />
    </section>
  );
}
