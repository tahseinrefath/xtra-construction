'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ isOpen, image, title, category, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#1c2734] border border-gray-700 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#f4c03b] text-[#243344] hover:bg-white transition-colors"
          aria-label="Close image modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[4/3] w-full max-h-[75vh] bg-black">
          <img
            src={image}
            alt={title || 'Project Preview'}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 bg-[#243344] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-gray-700">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f4c03b]">
              {category}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white mt-0.5">
              {title}
            </h3>
          </div>
          <a
            href="#quote"
            onClick={onClose}
            className="inline-block text-xs font-bold uppercase tracking-wider bg-[#f4c03b] text-[#243344] px-4 py-2 hover:bg-white transition-colors self-start sm:self-auto"
          >
            Inquire About This Project
          </a>
        </div>
      </div>
    </div>
  );
}
