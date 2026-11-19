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
import {
  Plus,
  Minus,
  CheckCircle2,
  Send,
  Loader2,
  MessageCircle,
} from 'lucide-react';

export default function FaqView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  const [askForm, setAskForm] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry',
    question: '',
  });
  const [isAsking, setIsAsking] = useState(false);
  const [askSubmitted, setAskSubmitted] = useState(false);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Firm' },
    { id: 'planning', label: 'Planning & Permits' },
    { id: 'cost', label: 'Cost & Tenders' },
    { id: 'quality', label: 'Safety & Quality' },
  ];

  const faqItems = [
    {
      id: 1,
      cat: 'general',
      q: 'How long has XTRA Construction operated, and in what jurisdictions are you licensed?',
      a: 'We have been in continuous commercial and residential operation for over 25 years. We hold Class-A Unlimited General Contractor licenses across New York, New Jersey, Connecticut, Pennsylvania, and Massachusetts, backed by $25M in comprehensive general liability coverage.',
    },
    {
      id: 2,
      cat: 'general',
      q: 'Do you work on both private commercial developments and public municipal contracts?',
      a: 'Yes. Our project portfolio is split approximately 55% commercial (corporate headquarters, retail complexes, mixed-use), 25% heavy civil (bridges, asphalt highways, culverts), and 20% custom architectural residences.',
    },
    {
      id: 3,
      cat: 'planning',
      q: 'What is your pre-construction planning and feasibility methodology?',
      a: 'Every engagement begins with 3D geotechnical ground radar surveys, municipal zoning easement analysis, and full 4D BIM constructability modeling to catch MEP clashes before steel fabrication begins.',
    },
    {
      id: 4,
      cat: 'planning',
      q: 'Who manages regulatory zoning variances and environmental permits?',
      a: 'Our in-house Regulatory Expediting division liaises directly with city boards, DEP, and EPA to secure environmental impact stamps, stormwater pollution prevention plans (SWPPP), and structural permits.',
    },
    {
      id: 5,
      cat: 'cost',
      q: 'What contract pricing models do you support for major capital works?',
      a: 'We offer Lump Sum (Fixed Price), Guaranteed Maximum Price (GMP) with shared savings clauses, and Cost-Plus with a transparent capped management fee depending on client risk preferences.',
    },
    {
      id: 6,
      cat: 'cost',
      q: 'How are unavoidable change orders handled during active foundation construction?',
      a: 'We enforce an Open-Book Change Order Protocol. Unforeseen subsurface discrepancies are logged with photographic evidence, unit labor/material breakdown sheets, and require dual-signoff from the project architect.',
    },
    {
      id: 7,
      cat: 'quality',
      q: 'What is your current occupational safety and OSHA compliance record?',
      a: 'We maintain an Experience Modification Rate (EMR) of 0.72—significantly superior to the national construction industry benchmark of 1.0. All site superintendents are OSHA-30 certified with daily toolbox briefings.',
    },
    {
      id: 8,
      cat: 'quality',
      q: 'What post-handover warranties protect our investment?',
      a: 'Every completed structure carries a 1-year total craftsmanship warranty covering finishes, mechanical, electrical, and plumbing, alongside a 10-year transferable structural foundation and framing guarantee.',
    },
  ];

  const filteredFaqs =
    activeCategory === 'all'
      ? faqItems
      : faqItems.filter((item) => item.cat === activeCategory);

  const handleAskSubmit = async (e) => {
    e.preventDefault();
    if (!askForm.name || !askForm.email || !askForm.question) {
      setToastMessage('Please fill out your question and contact info.');
      return;
    }
    setIsAsking(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsAsking(false);
    setAskSubmitted(true);
    setToastMessage(`Thanks ${askForm.name}! An engineer will reply regarding your inquiry shortly.`);
    setTimeout(() => {
      setAskSubmitted(false);
      setAskForm({ name: '', email: '', topic: 'General Inquiry', question: '' });
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
        <PageBanner title="FAQ" breadcrumb="Frequently Asked Questions" bgImage="/assets/row-bg.jpg" />

        {/* FAQ Center Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="FEEL FREE TO CONTACT US"
              subtitle="Do You Have Questions?"
              title="Everything You Need to Know About Our Process"
              description="Transparent answers to common questions regarding our architectural drafting, bidding frameworks, on-site safety, and post-construction handover guarantees."
              centered
            />

            {/* Category Filter Pills */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCategory(c.id);
                    setOpenIndex(0);
                  }}
                  className={`text-xs uppercase font-extrabold tracking-wider px-5 py-3 transition-all duration-200 border cursor-pointer ${
                    activeCategory === c.id
                      ? 'bg-[#f4c03b] text-[#243344] border-[#f4c03b] shadow-md'
                      : 'bg-[#f7f9fb] text-gray-600 border-gray-200 hover:bg-[#243344] hover:text-white hover:border-[#243344]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Accordion List */}
            <div className="mt-12 space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.id}
                    className={`border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-[#f4c03b] shadow-lg bg-white'
                        : 'border-gray-200 bg-[#f7f9fb] hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base text-[#243344] cursor-pointer"
                    >
                      <span className="flex items-center gap-3.5">
                        <span
                          className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 font-extrabold text-xs transition-colors ${
                            isOpen
                              ? 'bg-[#f4c03b] text-[#243344]'
                              : 'bg-white text-gray-400 border border-gray-200'
                          }`}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{faq.q}</span>
                      </span>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[#f4c03b] flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fast Inquiry Ask Us Widget */}
        <section className="py-20 bg-[#1c2734] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#243344] p-8 sm:p-12 rounded-none border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded bg-[#f4c03b] flex items-center justify-center text-[#243344]">
                  <MessageCircle className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#f4c03b]">
                    STILL HAVE QUESTIONS?
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    Ask an On-Duty Structural Engineer
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Cannot find the answer you need in our knowledge base? Send your question directly to our technical desk for an authoritative response.
              </p>

              {askSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-12 h-12 text-[#f4c03b] mb-3" />
                  <p className="text-lg font-bold text-white">Question Logged Successfully!</p>
                  <p className="text-xs text-gray-400 mt-1">Our engineering office will respond to your email within a few hours.</p>
                </div>
              ) : (
                <form onSubmit={handleAskSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={askForm.name}
                      onChange={(e) => setAskForm({ ...askForm, name: e.target.value })}
                      className="bg-[#1c2734] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f4c03b]"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={askForm.email}
                      onChange={(e) => setAskForm({ ...askForm, email: e.target.value })}
                      className="bg-[#1c2734] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f4c03b]"
                    />
                    <select
                      value={askForm.topic}
                      onChange={(e) => setAskForm({ ...askForm, topic: e.target.value })}
                      className="bg-[#1c2734] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f4c03b]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Cost & Estimating">Cost & Estimating</option>
                      <option value="Permits & Zoning">Permits & Zoning</option>
                      <option value="Structural Safety">Structural Safety</option>
                    </select>
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Type your specific technical or process question here..."
                    required
                    value={askForm.question}
                    onChange={(e) => setAskForm({ ...askForm, question: e.target.value })}
                    className="w-full bg-[#1c2734] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f4c03b] resize-none"
                  />

                  <button
                    type="submit"
                    disabled={isAsking}
                    className="bg-[#f4c03b] text-[#243344] font-bold text-xs uppercase tracking-wider px-8 py-3.5 hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isAsking ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Question...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Question</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
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
