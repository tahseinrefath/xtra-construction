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
    href: 'https://maps.google.com/?q=New+York,+USA',
  },
];

export default function MapSection() {
  const [form, setForm] = useState({ department: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.message.trim()) return;
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setForm({ department: '', message: '' });
    }, 3000);
  };

  return (
    <section className="relative w-full" aria-label="Location and contact">
      {/* ── Full-width OpenStreetMap iframe ── */}
      <div className="relative w-full h-[480px] md:h-[520px] overflow-hidden">
        <iframe
          title="Jayam Construction Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-74.025,40.695,-73.960,40.740&layer=mapnik&marker=40.7128,-74.006"
          className="absolute inset-0 w-full h-full border-0 grayscale-[20%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Dark overlay — left side cards */}
        <div className="absolute top-6 left-6 z-10 flex flex-col gap-3 max-w-[220px]">
          {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label === 'Address' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl hover:shadow-2xl transition-shadow group"
            >
              <span className="w-9 h-9 rounded-lg bg-[#f4c03b] flex items-center justify-center flex-shrink-0 group-hover:bg-[#243344] transition-colors">
                <Icon className="w-4.5 h-4.5 text-[#243344] group-hover:text-[#f4c03b] transition-colors" style={{ width: '18px', height: '18px' }} />
              </span>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold leading-none mb-0.5">{label}</p>
                <p className="text-xs text-[#243344] font-semibold leading-snug">{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Dark form overlay — right side */}
        <div className="absolute top-6 right-6 bottom-6 z-10 w-full max-w-xs">
          <div className="bg-[#243344]/95 backdrop-blur-md rounded-2xl p-6 h-full flex flex-col shadow-2xl border border-white/10">
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#f4c03b] rounded-full inline-block" />
              Send a Message
            </h3>

            {status === 'success' ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-3">
                <CheckCircle className="w-12 h-12 text-[#f4c03b]" />
                <p className="text-white font-semibold text-sm text-center">
                  Message sent! We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                {/* Department select */}
                <div>
                  <label className="block text-gray-400 text-[11px] uppercase tracking-wider font-semibold mb-1.5">
                    Department
                  </label>
                  <select
                    value={form.department}
                    onChange={(e) => setForm((p) => ({ ...p, department: e.target.value }))}
                    className="w-full bg-[#1c2734] border border-white/10 text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#f4c03b] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select Department</option>
                    {DEPARTMENTS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* Message textarea */}
                <div className="flex-1 flex flex-col">
                  <label className="block text-gray-400 text-[11px] uppercase tracking-wider font-semibold mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="How can we help you?"
                    required
                    className="flex-1 w-full bg-[#1c2734] border border-white/10 text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#f4c03b] transition-colors resize-none placeholder-gray-500 min-h-[100px]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#f4c03b] hover:bg-white text-[#243344] font-bold uppercase tracking-wider text-sm py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
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
