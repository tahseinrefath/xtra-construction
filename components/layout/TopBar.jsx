'use client';

import React from 'react';
import { Phone, Search, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { siteData } from '@/data/siteData';

export default function TopBar({ onOpenSearch }) {
  const { company } = siteData;

  return (
    <div className="bg-[#1c2734] text-white text-xs border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-2 text-gray-300">
          <span>Have any questions? call us</span>
          <a
            href={`tel:${company.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 font-bold text-[#f4c03b] hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{company.phone}</span>
          </a>
        </div>

        {/* Right: Socials + Search + Consultation */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-gray-400 border-r border-white/10 pr-4">
            <a
              href="#"
              className="hover:text-[#f4c03b] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="hover:text-[#f4c03b] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="hover:text-[#f4c03b] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="hover:text-[#f4c03b] transition-colors"
              aria-label="Linkedin"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={onOpenSearch}
            className="p-1.5 text-gray-300 hover:text-[#f4c03b] transition-colors flex items-center gap-1.5"
            aria-label="Search"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-wider font-semibold">Search</span>
          </button>

        </div>
      </div>
    </div>
  );
}
