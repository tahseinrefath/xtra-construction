'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import MobileDrawer from '@/components/layout/MobileDrawer';
import SearchModal from '@/components/layout/SearchModal';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import PageBanner from '@/components/layout/PageBanner';
import SectionHeading from '@/components/ui/SectionHeading';
import Toast from '@/components/ui/Toast';
import MapSection from '@/components/home/MapSection';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  Building,
  User,
} from 'lucide-react';

export default function ContactView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Business Department',
    subject: '',
    message: '',
    agree: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactCards = [
    {
      icon: Phone,
      title: 'Telephone & Dispatch',
      details: ['+1 (818) 23 45 679 (Office)', '+1 (818) 23 45 680 (24/7 Site Dispatch)'],
      actionText: 'Call Now',
      actionHref: 'tel:+18182345679',
    },
    {
      icon: Mail,
      title: 'Email & Tenders',
      details: ['Support@constrcution.com', 'Bids@constrcution.com'],
      actionText: 'Write To Us',
      actionHref: 'mailto:Support@constrcution.com',
    },
    {
      icon: MapPin,
      title: 'Corporate Headquarters',
      details: ['2346 Johnson St. Financial District', 'New York, NY 10005, United States'],
      actionText: 'Open in Maps',
      actionHref: 'https://maps.google.com/?q=New+York,+USA',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday – Friday: 08:00 AM – 06:00 PM', 'Saturday: 09:00 AM – 02:00 PM (Site Only)'],
      actionText: 'Working Days',
      actionHref: '#',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setToastMessage(`Thank you, ${formData.name}! Your message has been routed to the ${formData.department}.`);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'Business Department',
        subject: '',
        message: '',
        agree: true,
      });
    }, 4000);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <TopBar onOpenSearch={() => setSearchOpen(true)} />
      <Header onOpenMobile={() => setMobileMenuOpen(true)} />
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSearch={() => {}}
      />

      <main className="flex-1">
        <PageBanner title="Contact" breadcrumb="Contact Us" bgImage="/assets/row-bg.jpg" />

        {/* Contact Info Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="GET IN TOUCH WITH US"
              subtitle="We Are Here to Help"
              title="Speak Directly with Our Senior Engineering Team"
              description="Whether you are submitting an RFP tender, seeking commercial partnership, or inquiring about our project capabilities, our dispatch office will connect you with the appropriate discipline head."
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-100 p-8 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#f4c03b] group text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-[#243344] group-hover:bg-[#f4c03b] flex items-center justify-center transition-colors duration-300 mb-6">
                      <Icon className="w-8 h-8 text-[#f4c03b] group-hover:text-[#243344] transition-colors duration-300" />
                    </div>

                    <h3 className="text-lg font-bold text-[#243344] mb-3 group-hover:text-[#f4c03b] transition-colors">
                      {card.title}
                    </h3>

                    <div className="space-y-1 mb-6 flex-1">
                      {card.details.map((d, i) => (
                        <p key={i} className="text-xs text-gray-600 font-medium leading-relaxed">
                          {d}
                        </p>
                      ))}
                    </div>

                    <a
                      href={card.actionHref}
                      className="text-xs font-bold uppercase tracking-wider text-[#243344] hover:text-[#f4c03b] transition-colors border-b border-gray-200 hover:border-[#f4c03b] pb-1"
                    >
                      {card.actionText} →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dispatch Message & RFP Submission Form */}
        <section className="py-20 bg-[#f7f9fb] border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-[#243344] px-8 py-6 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#f4c03b]">
                    ONLINE DISPATCH & TENDERS
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Send an Official Project Inquiry
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-gray-300 text-xs">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
                  <span>Engineers On Call</span>
                </div>
              </div>

              <div className="p-8 sm:p-12">
                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-16 h-16 text-[#f4c03b] mb-4 animate-bounce" />
                    <h4 className="text-2xl font-bold text-[#243344] mb-2">Message Dispatched!</h4>
                    <p className="text-sm text-gray-600 max-w-md">
                      Your inquiry has been cataloged in our management portal. Our lead estimator will review the documents and contact you within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-xs uppercase font-bold text-[#243344] mb-2">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="Arthur Vance"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#f7f9fb] border border-gray-200 px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b] transition-colors"
                          />
                          <User className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs uppercase font-bold text-[#243344] mb-2">
                          Corporate Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            placeholder="vance@corporation.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#f7f9fb] border border-gray-200 px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b] transition-colors"
                          />
                          <Mail className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs uppercase font-bold text-[#243344] mb-2">
                          Telephone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            placeholder="+1 (818) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-[#f7f9fb] border border-gray-200 px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b] transition-colors"
                          />
                          <Phone className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
                        </div>
                      </div>

                      {/* Department */}
                      <div>
                        <label className="block text-xs uppercase font-bold text-[#243344] mb-2">
                          Target Department
                        </label>
                        <div className="relative">
                          <select
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                            className="w-full bg-[#f7f9fb] border border-gray-200 px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b] transition-colors"
                          >
                            <option value="Business Department">Business Department</option>
                            <option value="Architecture & Planning">Architecture & Planning</option>
                            <option value="Structural Engineering">Structural Engineering</option>
                            <option value="Tender Submissions & RFPs">Tender Submissions & RFPs</option>
                            <option value="Facility Maintenance">Facility Maintenance</option>
                          </select>
                          <Building className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs uppercase font-bold text-[#243344] mb-2">
                        Subject Line <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Commercial Office Building Tender - Phase 2"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#f7f9fb] border border-gray-200 px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b] transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase font-bold text-[#243344] mb-2">
                        Detailed Project Scope & Requirements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Please outline site location, gross square footage, anticipated timeline, and any special geotechnical requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#f7f9fb] border border-gray-200 px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b] transition-colors resize-y"
                      />
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="agree"
                        checked={formData.agree}
                        onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        className="w-4 h-4 accent-[#f4c03b] rounded cursor-pointer"
                      />
                      <label htmlFor="agree" className="text-xs text-gray-600 cursor-pointer select-none">
                        I understand that data submitted will be processed in accordance with the corporate privacy policy and ISO 9001 quality guidelines.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#f4c03b] text-[#243344] font-extrabold text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#243344] hover:text-white transition-all duration-300 shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Encrypting & Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Dispatch Inquiry to Estimators</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Full Interactive Map Embed — Harmonized with Home Page Signature Map */}
        <MapSection />
      </main>

      <Footer />
      <BackToTop />

      <Toast
        isOpen={Boolean(toastMessage)}
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
