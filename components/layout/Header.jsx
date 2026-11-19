'use client';

import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { siteData } from '@/data/siteData';

export default function Header({ onOpenMobile }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const { navigation } = siteData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'fixed top-0 left-0 bg-[#243344] shadow-lg py-3'
          : 'relative bg-[#243344] py-4 md:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <img
            src="/assets/logo-construction.png"
            alt="Construction 2 Theme"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navigation.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(true)}
                  onMouseLeave={() => setActiveDropdown(false)}
                >
                  <button className="flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-white hover:text-[#f4c03b] transition-colors py-2">
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 w-48 bg-[#1c2734] border-t-2 border-[#f4c03b] shadow-2xl py-2 z-50 transition-all duration-200 ${
                      activeDropdown
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {item.children.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2.5 text-xs uppercase font-semibold text-gray-300 hover:text-[#243344] hover:bg-[#f4c03b] transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold tracking-widest uppercase text-white hover:text-[#f4c03b] transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#f4c03b] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="#quote"
            className="hidden sm:inline-flex bg-[#f4c03b] text-[#243344] font-extrabold text-xs uppercase tracking-wider px-5 py-3 hover:bg-white transition-all duration-300 shadow-sm"
          >
            Free Consultation
          </a>

          <button
            onClick={onOpenMobile}
            className="lg:hidden p-2 text-white hover:text-[#f4c03b] transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
