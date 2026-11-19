'use client';

import React, { useState, useEffect } from 'react';
import { Cookie, X, Shield, ChevronRight } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent-accepted');
    if (!accepted) {
      // Slight delay so it doesn't flash immediately on page load
      const t = setTimeout(() => {
        setVisible(true);
        setTimeout(() => setAnimating(true), 50);
      }, 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent-accepted', 'true');
    setAnimating(false);
    setTimeout(() => setVisible(false), 400);
  };

  const handleDecline = () => {
    setAnimating(false);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-[9999] max-w-sm w-full transition-all duration-400 ${
        animating
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Card */}
      <div className="bg-[#1c2734] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#f4c03b] via-[#f4c03b]/70 to-transparent" />

        <div className="p-5">
          {/* Top row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#f4c03b]/10 border border-[#f4c03b]/20 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-[#f4c03b]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">Cookie Preferences</p>
                <p className="text-gray-400 text-[11px] mt-0.5 flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#f4c03b]" />
                  Your privacy is protected
                </p>
              </div>
            </div>
            <button
              onClick={handleDecline}
              className="text-gray-500 hover:text-gray-300 transition-colors p-0.5 flex-shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body text */}
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            We use cookies to enhance your browsing experience, serve personalized content,
            and analyse our traffic. By clicking{' '}
            <span className="text-white font-medium">"Accept All"</span>, you consent to
            our use of cookies.{' '}
            <a href="#" className="text-[#f4c03b] hover:underline">
              Learn more
            </a>
          </p>

          {/* Cookie types row */}
          <div className="flex gap-2 mb-4">
            {['Essential', 'Analytics', 'Marketing'].map((type, i) => (
              <span
                key={type}
                className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${
                  i === 0
                    ? 'border-[#f4c03b]/40 text-[#f4c03b] bg-[#f4c03b]/5'
                    : 'border-white/10 text-gray-400 bg-white/5'
                }`}
              >
                {type}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleDecline}
              className="flex-1 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400 border border-white/10 rounded-lg hover:border-white/30 hover:text-white transition-all"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 py-2 text-xs font-bold uppercase tracking-wider bg-[#f4c03b] text-[#243344] rounded-lg hover:bg-white transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-[#f4c03b]/20"
            >
              Accept All
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
