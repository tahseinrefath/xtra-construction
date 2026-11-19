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
import { Lock, User, Mail, ShieldCheck, KeyRound, UserPlus } from 'lucide-react';

export default function MyAccountPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('both'); // 'login' | 'register' | 'both'

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
    remember: false,
  });

  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    company: '',
  });

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
        <PageBanner title="My Account" breadcrumb="Client Portal" bgImage="/assets/row-bg.jpg" />

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="CLIENT & CONTRACTOR PORTAL"
              subtitle="Access Your Project Dashboard"
              title="Secure Authentication for Clients & Partners"
              description="Sign in to view real-time site camera feeds, architectural drawing revision logs, approved change orders, and milestone billing statements."
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Column 1: Login Box */}
              <div className="bg-[#f7f9fb] border border-gray-200 p-8 sm:p-10 shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 bg-[#243344] flex items-center justify-center text-[#f4c03b]">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#243344]">Client Login</h3>
                    <p className="text-xs text-gray-500">Access your active construction account</p>
                  </div>
                </div>

                <form className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#243344] mb-2">
                      Username or Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={loginForm.username}
                        onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                        className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b]"
                        placeholder="vance@corporation.com"
                      />
                      <User className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-[#243344] mb-2">
                      Account Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b]"
                        placeholder="••••••••••••"
                      />
                      <KeyRound className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-gray-600 select-none">
                      <input
                        type="checkbox"
                        checked={loginForm.remember}
                        onChange={(e) => setLoginForm({ ...loginForm, remember: e.target.checked })}
                        className="w-4 h-4 accent-[#f4c03b] rounded cursor-pointer"
                      />
                      <span>Remember Me</span>
                    </label>

                    <a href="#" className="font-semibold text-gray-500 hover:text-[#f4c03b] transition-colors">
                      Lost your password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#243344] hover:bg-[#f4c03b] hover:text-[#243344] text-white font-extrabold text-xs uppercase tracking-widest py-4 transition-all duration-300 shadow cursor-pointer mt-4"
                  >
                    Log In to Dashboard
                  </button>
                </form>
              </div>

              {/* Column 2: Register Box */}
              <div className="bg-[#f7f9fb] border border-gray-200 p-8 sm:p-10 shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 bg-[#f4c03b] flex items-center justify-center text-[#243344]">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#243344]">Register Account</h3>
                    <p className="text-xs text-gray-500">For new sub-contractors, vendors, and clients</p>
                  </div>
                </div>

                <form className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#243344] mb-2">
                      Corporate Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                        className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b]"
                        placeholder="procurement@partner.com"
                      />
                      <Mail className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-[#243344] mb-2">
                      Choose Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                        className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b]"
                        placeholder="At least 8 characters..."
                      />
                      <KeyRound className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-[#243344] mb-2">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={registerForm.company}
                      onChange={(e) => setRegisterForm({ ...registerForm, company: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b]"
                      placeholder="e.g. Skyline Structural Engineering LLC"
                    />
                  </div>

                  <p className="text-[11px] text-gray-500 leading-relaxed pt-1">
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for purposes described in our privacy policy.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#f4c03b] hover:bg-[#243344] hover:text-white text-[#243344] font-extrabold text-xs uppercase tracking-widest py-4 transition-all duration-300 shadow cursor-pointer mt-4"
                  >
                    Register Contractor Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
