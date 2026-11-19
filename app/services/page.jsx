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
import Button from '@/components/ui/Button';
import {
  Building2,
  HardHat,
  Wrench,
  Compass,
  Factory,
  Leaf,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Plus,
  Minus,
  HelpCircle,
  Shield,
  Layers,
} from 'lucide-react';

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const services = [
    {
      id: 1,
      title: 'House & Residential Construction',
      tag: 'RESIDENTIAL',
      image: '/assets/service-1.jpg',
      icon: Building2,
      desc: 'Bespoke residential estates, multi-family condominiums, and custom luxury homes built with reinforced concrete, thermal insulation, and turn-key delivery.',
      points: ['Custom architectural drafting', 'Seismic structural stabilization', 'Smart home automation integration', 'Full 10-year builder structural warranty'],
    },
    {
      id: 2,
      title: 'Road & Heavy Civil Works',
      tag: 'INFRASTRUCTURE',
      image: '/assets/service-2.jpg',
      icon: HardHat,
      desc: 'Federal-grade asphalt paving, bridge civil engineering, underground drainage systems, and major highway overpass construction using laser grading.',
      points: ['High-density asphalt paving', 'Retention basins & culverts', 'Bridge & overpass engineering', 'Strict DOT regulatory compliance'],
    },
    {
      id: 3,
      title: 'Facility Maintenance & Retrofits',
      tag: 'MAINTENANCE',
      image: '/assets/service-3.jpg',
      icon: Wrench,
      desc: 'Preventative structural maintenance, seismic retrofits, HVAC integration, building envelope repairs, and 24/7 rapid response facility management.',
      points: ['Building envelope waterproofing', 'Concrete fracture remediation', 'Fire safety system overhauls', '24/7 emergency repair dispatch'],
    },
    {
      id: 4,
      title: 'Modern Architectural Structures',
      tag: 'COMMERCIAL',
      image: '/assets/tick_tock-1-1-600x600.jpg',
      icon: Compass,
      desc: 'Iconic curved-glass office headquarters, steel-frame exhibition arenas, and mixed-use commercial developments optimized for human flow and energy efficiency.',
      points: ['Structural steel fabrication', 'Acoustic & lighting engineering', 'Glass curtain wall facades', 'Interior tenant fit-outs'],
    },
    {
      id: 5,
      title: 'Industrial & Chemical Plants',
      tag: 'INDUSTRIAL',
      image: '/assets/process.jpg',
      icon: Factory,
      desc: 'Heavy-duty industrial warehouses, manufacturing assembly plants, cold storage facilities, and hazardous containment structures engineered for uptime.',
      points: ['Heavy machinery load foundations', 'Explosion-proof electrical rooms', 'High-bay automated racking pads', 'Hazardous runoff containment'],
    },
    {
      id: 6,
      title: 'Sustainable Eco-Green Building',
      tag: 'SUSTAINABILITY',
      image: '/assets/personal_gift-1-600x600.jpg',
      icon: Leaf,
      desc: 'Net-zero energy architectural projects incorporating solar photovoltaics, rainwater harvesting, geothermal heating, and low-VOC non-toxic materials.',
      points: ['LEED Platinum certification prep', 'Rooftop solar microgrid setups', 'Greywater bio-filtration', 'Passivhaus thermal efficiency'],
    },
  ];

  const tips = [
    {
      icon: Layers,
      title: 'Geotechnical Soil Core Sampling',
      desc: 'Always verify subterranean load-bearing capacity before pouring footings. Soil variability causes 78% of foundation shifts.',
    },
    {
      icon: Shield,
      title: 'Vapor Retarder Integrity',
      desc: 'Under-slab vapor barriers must maintain 15 mil puncture resistance to prevent ambient moisture infiltration into finished interiors.',
    },
    {
      icon: Lightbulb,
      title: 'Pre-Pour Laser Level Verification',
      desc: 'Double-checking rebar clearances and elevation benchmarks with dual-plane laser receivers eliminates concrete height variations.',
    },
  ];

  const faqs = [
    {
      q: 'How do you formulate project budgets and milestone estimates?',
      a: 'We perform complete 5D BIM quantities takeoffs using current regional material indices. Every bid includes detailed trade breakdowns with labor rates, equipment runtimes, and contingency allowances.',
    },
    {
      q: 'Do you manage local municipal building permits and zoning clearances?',
      a: 'Yes. Our in-house permit expeditor division handles all local zoning approvals, EPA environmental impact reports, stormwater compliance, and historical preservation clearances.',
    },
    {
      q: 'Can client-selected interior designers or MEP subcontractors be incorporated?',
      a: 'Absolutely. We operate as General Contractor or Construction Manager at Risk (CMAR), offering turnkey open-book coordination for your preferred interior designers or proprietary equipment vendors.',
    },
    {
      q: 'What warranties and performance bonds protect the development?',
      a: 'Every project is backed by comprehensive 100% Performance & Payment Surety Bonds, a 1-year comprehensive craftsmanship warranty, and a 10-year structural integrity guarantee.',
    },
  ];

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
        <PageBanner title="Services" breadcrumb="Our Services" bgImage="/assets/row-bg.jpg" />

        {/* 6-Service Grid Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="WHAT WE CAN DO FOR YOU"
              subtitle="Our Construction Services"
              title="End-to-End Civil & Architectural Solutions"
              description="From preliminary site survey and geotechnical zoning analysis to structural erection and post-occupancy facility servicing, our team delivers complete lifecycle control."
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.id}
                    className="bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-none group flex flex-col overflow-hidden"
                  >
                    {/* Image Header with Badge */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-[#f4c03b] text-[#243344] font-bold text-[10px] uppercase tracking-wider px-3 py-1 shadow">
                        {s.tag}
                      </div>
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#243344] group-hover:bg-[#f4c03b] text-[#f4c03b] group-hover:text-[#243344] flex items-center justify-center transition-colors shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-[#243344] mb-3 group-hover:text-[#f4c03b] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {s.desc}
                      </p>

                      {/* Checklist */}
                      <div className="space-y-2.5 mb-8 flex-1">
                        {s.points.map((pt, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                            <CheckCircle className="w-4 h-4 text-[#f4c03b] flex-shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action */}
                      <Button
                        href="/contact"
                        variant="primaryDarkHover"
                        className="w-full flex items-center justify-center gap-2"
                      >
                        Request Consultation
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Construction Tips Callout Banner */}
        <section className="py-16 bg-[#243344] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#f4c03b] block mb-2">
                  CONSTRUCTION BEST PRACTICES
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Engineering Tips for Long-Lasting Assets
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-md mt-3 md:mt-0">
                Key structural considerations that prevent costly remediation downstream.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tips.map((t, idx) => {
                const Icon = t.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#1c2734] p-8 border-t-4 border-[#f4c03b] rounded-none hover:translate-y-[-4px] transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-[#f4c03b]/10 rounded flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#f4c03b]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{t.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{t.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick FAQ Section */}
        <section className="py-20 bg-[#f7f9fb] border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="COMMON INQUIRIES"
              subtitle="Quick Clarifications"
              title="Frequently Asked Services Questions"
              centered
            />

            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#243344] hover:text-[#f4c03b] transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-[#f4c03b] flex-shrink-0" />
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#f4c03b] flex-shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Button href="/faq" variant="outline">
                Visit Complete FAQ Center →
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
