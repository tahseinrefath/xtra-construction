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
} from 'lucide-react';

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
      image: '/assets/row-bg.jpg',
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
      image: '/assets/about-company.jpg',
      icon: Leaf,
      desc: 'Net-zero energy architectural projects incorporating solar photovoltaics, rainwater harvesting, geothermal heating, and low-VOC non-toxic materials.',
      points: ['LEED Platinum certification prep', 'Rooftop solar microgrid setups', 'Greywater bio-filtration', 'Passivhaus thermal efficiency'],
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
                        variant="primary"
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
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
