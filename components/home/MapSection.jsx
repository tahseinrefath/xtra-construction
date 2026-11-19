'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

const DEPARTMENTS = [
  'Business Department',
  'Construction Department',
  'Engineering Department',
  'Architecture Department',
  'Project Management',
  'Customer Support',
];

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (818) 23 45 679',
    href: 'tel:+18182345679',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Support@constrcution.com',
    href: 'mailto:Support@constrcution.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '2346 Johnson St. New York, USA',
    href: 'https://maps.google.com/?q=2346+Johnson+St,+New+York,+NY',
  },
];

export default function MapSection() {
  const [form, setForm] = useState({ department: 'Business Department', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.message.trim()) return;
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setForm({ department: 'Business Department', message: '' });
    }, 3000);
  };

  return (
    <section id="location-map" className="relative w-full overflow-hidden" aria-label="Location and contact">
      {/* ── Full-width Interactive Map Embed ── */}
      <div className="relative w-full h-[520px] md:h-[560px] overflow-hidden bg-gray-200">
        <iframe
          title="Jayam Construction New York Headquarters"
          src="https://maps.google.com/maps?q=Financial+District,+Lower+Manhattan,+New+York,+NY&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full border-0 grayscale-[25%] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Contact Cards — Top-Left (Exact replica of user screenshot) */}
        <div className="absolute top-6 left-6 z-20 flex flex-col gap-3.5 w-72 sm:w-80">
          {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label === 'Address' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/98 backdrop-blur-md rounded-2xl px-5 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-black/5 group hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f4c03b] flex items-center justify-center flex-shrink-0 group-hover:bg-[#243344] transition-colors shadow-sm">
                <Icon className="w-6 h-6 text-[#243344] group-hover:text-[#f4c03b] transition-colors stroke-[2]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-extrabold leading-none mb-1">
                  {label}
                </p>
                <p className="text-xs sm:text-sm text-[#243344] font-extrabold leading-tight truncate">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Floating Quick Dispatch Form — Top-Right */}
        <div className="hidden md:block absolute top-6 right-6 bottom-6 z-20 w-80 lg:w-96">
          <div className="bg-[#243344]/95 backdrop-blur-md rounded-2xl p-7 h-full flex flex-col shadow-2xl border border-white/10">
            <h3 className="text-white font-extrabold text-base uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-[#f4c03b] rounded-full inline-block" />
              Dispatch Inquiry
            </h3>

            {status === 'success' ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center">
                <CheckCircle className="w-12 h-12 text-[#f4c03b]" />
                <p className="text-white font-bold text-sm">
                  Inquiry Dispatched!
                </p>
                <p className="text-gray-300 text-xs">
                  Our dispatch office will review your message immediately.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                <div>
                  <label className="block text-gray-300 text-[11px] uppercase tracking-wider font-bold mb-1.5">
                    Department
                  </label>
                  <select
                    value={form.department}
                    onChange={(e) => setForm((p) => ({ ...p, department: e.target.value }))}
                    className="w-full bg-[#1c2734] border border-white/10 text-white text-xs rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#f4c03b] transition-colors cursor-pointer"
                  >
                    {DEPARTMENTS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="block text-gray-300 text-[11px] uppercase tracking-wider font-bold mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Briefly describe your project requirements..."
                    required
                    className="flex-1 w-full bg-[#1c2734] border border-white/10 text-white text-xs rounded-lg p-3 focus:outline-none focus:border-[#f4c03b] transition-colors resize-none placeholder-gray-500 min-h-[90px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#f4c03b] hover:bg-white text-[#243344] font-extrabold uppercase tracking-widest text-xs py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer shadow-lg"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
