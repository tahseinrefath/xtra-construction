import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { siteData } from '@/data/siteData';

export default function Footer() {
  const { footer, company } = siteData;

  return (
    <footer id="site_footer" className="bg-[#1c2734] text-white pt-16 md:pt-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Footer Brand Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={footer.logo}
            alt="Construction Logo"
            className="w-64 md:w-80 h-auto object-contain"
          />
        </div>

        {/* Company Overview Statement */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          {company.footerAbout}
        </p>

        {/* Social Icons (Yellow boxes with dark icons, dark hover) */}
        <div className="flex justify-center items-center gap-3 mb-14">
          <a
            href="#"
            className="w-10 h-10 bg-[#f4c03b] text-[#243344] flex items-center justify-center hover:bg-white transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 fill-current" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-[#f4c03b] text-[#243344] flex items-center justify-center hover:bg-white transition-all duration-300"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 fill-current" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-[#f4c03b] text-[#243344] flex items-center justify-center hover:bg-white transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-[#f4c03b] text-[#243344] flex items-center justify-center hover:bg-white transition-all duration-300"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 fill-current" />
          </a>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 py-6 bg-[#16202c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#f4c03b] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
