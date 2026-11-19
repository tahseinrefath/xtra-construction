'use client';

import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Toast from '@/components/ui/Toast';
import { siteData } from '@/data/siteData';

export default function QuoteSection() {
  const { quote } = siteData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    department: quote.departments[0],
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please include details about your inquiry.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate backend response
    setTimeout(() => {
      setLoading(false);
      setToastOpen(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        department: quote.departments[0],
        message: '',
      });
    }, 1000);
  };

  return (
    <section
      id="quote"
      className="scroll-mt-20 md:scroll-mt-24 relative py-20 md:py-28 bg-[#1c2734] text-white bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('${quote.bgImage}')`,
      }}
    >
      {/* Dark Contrast Overlay */}
      <div className="absolute inset-0 bg-[#16202c]/90 backdrop-blur-xs" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={quote.tag}
          subtitle={quote.subtitle}
          title={quote.title}
          description={quote.description}
          align="center"
          theme="dark"
        />

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 p-8 md:p-12 border border-white/10 shadow-2xl backdrop-blur-md space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Your Name <span className="text-[#f4c03b]">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className={`w-full bg-[#1c2734] border ${
                  errors.name ? 'border-red-500' : 'border-white/20'
                } px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f4c03b] transition-colors`}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Your Email <span className="text-[#f4c03b]">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className={`w-full bg-[#1c2734] border ${
                  errors.email ? 'border-red-500' : 'border-white/20'
                } px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f4c03b] transition-colors`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Subject */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project title or topic"
                className="w-full bg-[#1c2734] border border-white/20 px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f4c03b] transition-colors"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Department
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full bg-[#1c2734] border border-white/20 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f4c03b] transition-colors"
              >
                {quote.departments.map((dept) => (
                  <option key={dept} value={dept} className="bg-[#1c2734] text-white">
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
              Your Message <span className="text-[#f4c03b]">*</span>
            </label>
            <textarea
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your project requirements, scope, and estimated schedule..."
              className={`w-full bg-[#1c2734] border ${
                errors.message ? 'border-red-500' : 'border-white/20'
              } px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f4c03b] transition-colors`}
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 bg-[#f4c03b] text-[#243344] font-bold text-sm uppercase tracking-wider py-4 px-10 hover:bg-white transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <Toast
        isOpen={toastOpen}
        onClose={() => setToastOpen(false)}
        message="Thank you! Your quote inquiry has been submitted. Our team will contact you within 24 hours."
      />
    </section>
  );
}
