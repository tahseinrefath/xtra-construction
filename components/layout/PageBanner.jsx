import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

/**
 * PageBanner — reusable hero banner for all subpages
 * Props:
 *   title        {string}  — page title shown in h1
 *   breadcrumb   {string}  — optional last crumb (defaults to title)
 *   bgImage      {string}  — optional override bg image URL
 */
export default function PageBanner({ title, breadcrumb, bgImage }) {
  const crumb = breadcrumb || title;

  return (
    <section
      className="relative w-full h-48 md:h-56 flex items-center justify-center overflow-hidden"
      style={{
        background: bgImage
          ? `linear-gradient(rgba(28,39,52,0.82), rgba(28,39,52,0.82)), url(${bgImage}) center/cover no-repeat`
          : undefined,
        backgroundColor: bgImage ? undefined : '#1c2734',
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #f4c03b 0px, #f4c03b 1px, transparent 0px, transparent 50%)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Gold left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#f4c03b]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Title */}
        <h1 className="text-white font-bold text-3xl md:text-4xl uppercase tracking-widest mb-4">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center justify-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-[#f4c03b] hover:text-white transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </li>
            <li className="text-gray-300 font-medium">{crumb}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
