import React from 'react';

export default function SectionHeading({
  tag,
  subtitle,
  title,
  description,
  align = 'center',
  theme = 'light',
  dark = false,
  centered,
  className = '',
}) {
  const isCenter = centered !== undefined ? Boolean(centered) : align === 'center';
  const isDark = Boolean(dark) || theme === 'dark';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {/* Subtitle / Tag */}
      {(tag || subtitle) && (
        <div
          className={`flex items-center gap-2 mb-2 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          <span className="w-6 h-[2px] bg-[#f4c03b]"></span>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#f4c03b]">
            {subtitle || tag}
          </span>
          <span className="w-6 h-[2px] bg-[#f4c03b]"></span>
        </div>
      )}

      {/* Main Title */}
      {title && (
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight md:leading-[1.2] ${
            isDark ? 'text-white' : 'text-[#243344]'
          }`}
        >
          {title}
        </h2>
      )}

      {/* Optional Description */}
      {description && (
        <p
          className={`mt-4 text-sm md:text-base leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-[#6c7a89]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
