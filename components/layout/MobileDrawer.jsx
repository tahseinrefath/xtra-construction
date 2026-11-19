'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, Phone, Search, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { siteData } from '@/data/siteData';

export default function MobileDrawer({ isOpen, onClose, onOpenSearch }) {
  const [pagesOpen, setPagesOpen] = useState(false);
  const { navigation, company } = siteData;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-4/5 max-w-sm bg-[#1c2734] h-full shadow-2xl z-10 flex flex-col p-6 text-white overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-gray-700">
          <Link href="/" onClick={onClose}>
            <img
              src="/assets/logo-construction.png"
              alt="Construction"
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search button in mobile */}
        <button
          onClick={() => {
            onClose();
            onOpenSearch();
          }}
          className="mt-6 flex items-center justify-between w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-gray-300 hover:border-[#f4c03b] transition-colors cursor-pointer"
        >
          <span>Search the site...</span>
          <Search className="w-4 h-4 text-[#f4c03b]" />
        </button>

        {/* Navigation links */}
        <nav className="mt-6 flex-1 space-y-1">
          {navigation.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="border-b border-white/5">
                  <button
                    onClick={() => setPagesOpen(!pagesOpen)}
                    className="w-full flex items-center justify-between py-3 text-sm font-semibold tracking-wider uppercase text-gray-200 hover:text-[#f4c03b] cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        pagesOpen ? 'rotate-180 text-[#f4c03b]' : ''
                      }`}
                    />
                  </button>
                  {pagesOpen && (
                    <div className="pl-4 pb-2 space-y-2 border-l-2 border-[#f4c03b] ml-1 my-1">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={onClose}
                          className="block text-xs uppercase font-medium text-gray-400 hover:text-white py-1"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="block py-3 text-sm font-semibold tracking-wider uppercase text-gray-200 hover:text-[#f4c03b] border-b border-white/5"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-700 space-y-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="block text-center bg-[#f4c03b] text-[#243344] font-bold text-xs uppercase tracking-wider py-3 hover:bg-white transition-colors"
          >
            Free Consultation
          </Link>

          <div className="flex items-center gap-2 text-xs text-gray-300">
            <Phone className="w-4 h-4 text-[#f4c03b]" />
            <span>{company.phone}</span>
          </div>

          <div className="flex items-center gap-3 pt-2 text-gray-400">
            <a href="#" className="hover:text-[#f4c03b] p-1"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#f4c03b] p-1"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#f4c03b] p-1"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#f4c03b] p-1"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
