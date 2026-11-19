'use client';

import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onSearch }) {
  const [query, setQuery] = useState('');
  const trending = ['place', 'silence', 'create', 'logo', 'like'];

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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      onClose();
    }
  };

  const handleTrendingClick = (tag) => {
    setQuery(tag);
    onSearch(tag);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c2734]/95 p-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Close search"
        >
          <X className="w-7 h-7" />
        </button>

        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type keyword to search  ..."
            className="w-full bg-transparent border-b-2 border-[#f4c03b] py-4 pr-12 text-xl md:text-3xl text-white placeholder:text-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-[#f4c03b] hover:text-white transition-colors"
            aria-label="Submit search"
          >
            <Search className="w-7 h-7" />
          </button>
        </form>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-gray-300">
          <span className="font-semibold text-gray-400">Trending searches:</span>
          {trending.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTrendingClick(tag)}
              className="text-[#f4c03b] hover:underline px-1 py-0.5 font-medium"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
