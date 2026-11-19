'use client';

import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-extrabold tracking-wider uppercase transition-all duration-300 rounded-none cursor-pointer focus:outline-none';

  const variants = {
    primary:
      'bg-[#f4c03b] text-[#243344] hover:bg-white hover:text-[#243344] shadow-md hover:shadow-xl active:scale-[0.98]',
    primaryDarkHover:
      'bg-[#f4c03b] text-[#243344] hover:bg-[#243344] hover:text-white shadow-md hover:shadow-xl active:scale-[0.98]',
    secondary:
      'bg-[#243344] text-white hover:bg-[#f4c03b] hover:text-[#243344] active:scale-[0.98]',
    outline:
      'border-2 border-white text-white hover:bg-[#f4c03b] hover:border-[#f4c03b] hover:text-[#243344] active:scale-[0.98]',
    outlineDark:
      'border-2 border-[#243344] text-[#243344] hover:bg-[#243344] hover:text-[#f4c03b] active:scale-[0.98]',
    white:
      'bg-white text-[#243344] hover:bg-[#f4c03b] hover:text-[#243344] shadow-md active:scale-[0.98]',
  };

  const sizes = {
    sm: 'text-xs py-2 px-4',
    md: 'text-xs md:text-sm py-3.5 px-7 font-bold',
    lg: 'text-sm md:text-base py-4 px-9 font-extrabold',
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${combinedStyles} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
