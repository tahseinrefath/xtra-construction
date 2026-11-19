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
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Award,
  Users,
  HardHat,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from 'lucide-react';

export default function AboutView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const pillars = [
    {
      icon: Building2,
      title: 'General Construction',
      desc: 'From high-rise commercial structures to custom residential properties, our construction capabilities combine cutting-edge technology with precision craftsmanship.',
    },
    {
      icon: HardHat,
      title: 'Modern Structures',
      desc: 'Engineered for resilience and aesthetic superiority, we build earthquake-resistant, LEED-certified smart buildings engineered for long-term sustainability.',
    },
    {
      icon: Wrench,
      title: 'Facility Maintenance',
      desc: 'Comprehensive lifecycle management, ongoing preventive inspections, and structural restorations that ensure your assets maintain value and security.',
    },
  ];

  const skills = [
    { name: 'Architecture & Design Precision', pct: 95 },
    { name: 'Civil & Structural Engineering', pct: 90 },
    { name: 'Road Construction & Infrastructure', pct: 92 },
    { name: 'Environmental & LEED Standards', pct: 86 },
    { name: 'Safety & OSHA Compliance', pct: 98 },
  ];

  const team = [
    {
      name: 'Arthur Vance',
      role: 'Chief Structural Architect',
      image: '/assets/team1.jpg',
      bio: '20+ years leading mega-structure commercial developments across North America.',
    },
    {
      name: 'Marcus Holloway',
      role: 'Head of Civil Engineering',
      image: '/assets/team2.jpg',
      bio: 'Specialist in heavy civil infrastructure, seismic engineering, and reinforced foundations.',
    },
    {
      name: 'Elena Rostova',
      role: 'Director of Sustainable Building',
      image: '/assets/team3.jpg',
      bio: 'Pioneer of net-zero energy design, advanced materials science, and BIM workflow automation.',
    },
  ];

  const stats = [
    { icon: Building2, number: '450+', label: 'Projects Completed' },
    { icon: Users, number: '120+', label: 'Engineers & Architects' },
    { icon: Award, number: '34+', label: 'Industry Design Awards' },
    { icon: ShieldCheck, number: '100%', label: 'Safety Compliance' },
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
        {/* Subpage Banner */}
        <PageBanner title="About" breadcrumb="About Us" bgImage="/assets/row-bg.jpg" />

        {/* 1. Company Narrative Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image with signature gold offset frame */}
              <div className="relative">
                <div className="relative z-10 overflow-hidden shadow-2xl">
                  <img
                    src="/assets/about-company.jpg"
                    alt="XTRA Construction Leadership"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Gold geometric backing frame */}
                <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#f4c03b] -z-0 hidden sm:block" />

                {/* 25 Years Badge */}
                <div className="absolute -bottom-8 right-6 z-20 bg-[#243344] text-white p-6 shadow-xl border-b-4 border-[#f4c03b] text-center">
                  <span className="block text-4xl font-extrabold text-[#f4c03b]">25+</span>
                  <span className="text-xs uppercase font-semibold tracking-wider text-gray-300">
                    Years of Trust & Precision
                  </span>
                </div>
              </div>

              {/* Right Column: Company Narrative */}
              <div>
                <SectionHeading
                  tag="ABOUT OUR COMPANY"
                  subtitle="It's All About Quality & Craftsmanship"
                  title="Leading the Construction Industry with Distinction"
                  description="Founded on the principles of engineering honesty, safety, and rigorous execution, our firm has delivered over 450 major architectural and industrial projects worldwide. We blend traditional craftsmanship with BIM modeling and eco-friendly standards."
                  align="left"
                />

                <div className="mt-8 space-y-4">
                  {[
                    'Master craftspeople and certified licensed structural engineers',
                    'Zero-compromise environmental and occupational safety records',
                    'Transparent milestone billing with guaranteed on-time handover',
                    'Lifetime structural warranty on all residential and commercial builds',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#f4c03b] flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4 items-center">
                  <Button href="/contact" variant="primaryDarkHover">
                    Get Free Quote
                  </Button>
                  <Button href="/services" variant="outlineDark">
                    Explore Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Three Pillars Grid */}
        <section className="py-20 bg-[#f7f9fb] border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="CORE PILLARS"
              subtitle="What Drives Us Every Day"
              title="Built on Inflexible Standards of Engineering"
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-8 border-b-4 border-transparent hover:border-[#f4c03b] shadow-md hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-[#243344] group-hover:bg-[#f4c03b] flex items-center justify-center transition-colors duration-300 mb-6">
                      <Icon className="w-7 h-7 text-[#f4c03b] group-hover:text-[#243344] transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#243344] mb-3 group-hover:text-[#f4c03b] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Skills Proficiency & Why Choose Us */}
        <section className="py-20 bg-[#1c2734] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <SectionHeading
                  tag="WE ARE PROFESSIONAL"
                  subtitle="Why Choose Our Team?"
                  title="Delivering Proven Mastery Across Modern Disciplines"
                  description="Our interdisciplinary team combines half a century of cumulative construction science. We hold international accreditations in structural safety, civil drafting, and LEED certified building techniques."
                  align="left"
                  theme="dark"
                  dark
                />

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="border-l-2 border-[#f4c03b] pl-4">
                    <h4 className="text-white font-bold text-base mb-1">State-of-the-Art Tools</h4>
                    <p className="text-xs text-gray-400">Drone site surveying, 3D laser scanning, and real-time project portals.</p>
                  </div>
                  <div className="border-l-2 border-[#f4c03b] pl-4">
                    <h4 className="text-white font-bold text-base mb-1">100% Fixed Quotes</h4>
                    <p className="text-xs text-gray-400">No unexpected surcharges. Every cost itemized down to the rivet.</p>
                  </div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-6 bg-[#243344] p-8 rounded-xl border border-white/5 shadow-2xl">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-[#f4c03b]">{skill.pct}%</span>
                    </div>
                    <div className="w-full bg-[#16202c] h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#f4c03b] to-yellow-300 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${skill.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Leadership Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="EXPERT LEADERSHIP"
              subtitle="Meet The Builders"
              title="The Specialists Behind Every Landmark"
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#243344] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex gap-2">
                        <a href="#" className="w-8 h-8 rounded bg-white/20 hover:bg-[#f4c03b] text-white hover:text-[#243344] flex items-center justify-center transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded bg-white/20 hover:bg-[#f4c03b] text-white hover:text-[#243344] flex items-center justify-center transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded bg-white/20 hover:bg-[#f4c03b] text-white hover:text-[#243344] flex items-center justify-center transition-colors">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#243344] mb-1 group-hover:text-[#f4c03b] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#f4c03b] mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Proven Metrics Counter Bar */}
        <section className="py-16 bg-[#243344] text-white border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={idx} className="text-center group">
                    <div className="w-14 h-14 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#f4c03b] transition-colors">
                      <Icon className="w-7 h-7 text-[#f4c03b] group-hover:text-[#243344] transition-colors" />
                    </div>
                    <div className="text-4xl font-extrabold text-white mb-1 tracking-tight">
                      {s.number}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      {s.label}
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
