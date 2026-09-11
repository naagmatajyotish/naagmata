import React, { useState, useRef, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { NaagdeviLogo } from './NaagdeviLogo';
import { UrgentBanner } from './UrgentBanner';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(114);

  useEffect(() => {
    const updateHeight = () => {
      if (!headerRef.current) return;
      // Calculate height of non-drawer portion
      if (!mobileMenuOpen) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: '3D Darshan', href: '#sacred-darshan' },
    { name: 'Love Solutions', href: '#calculator' },
    { name: 'Global / NRI', href: '#international-seo' },
    { name: 'Why Baba Ji', href: '#why-us' },
    { name: 'Sacred Rituals', href: '#rituals' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-[#fdfcf7]/98 backdrop-blur-md border-b border-amber-200/80 transition-colors duration-300 shadow-sm w-full max-w-full overflow-x-clip"
      >
        {/* 1. Top Scrolling Marquee Banner - Always Fixed at Top */}
        <UrgentBanner />

        {/* 2. Mobile Dedicated Direct Helpline Bar - 24/7 Helpline Always Fixed */}
        <div className="sm:hidden bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-white px-3 py-1.5 flex items-center justify-between border-b border-amber-500/50 shadow-md w-full max-w-full">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-300">
              24/7 HELPLINE:
            </span>
          </div>
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            title="Direct Call Baba Ji"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 hover:from-amber-300 hover:to-yellow-300 text-stone-950 px-3 py-0.5 rounded-full font-black text-xs tracking-wide shadow-md border border-white active:scale-95 transition-all shrink-0"
          >
            <Phone className="w-3 h-3 text-stone-950 fill-stone-950 shrink-0 animate-bounce" />
            <span className="font-sans font-black">{CONTACT_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* 3. Main Brand Navigation Bar - Always Fixed */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 md:px-8 py-2 sm:py-2.5">
        {/* Brand Logo - Animated Maa Naagdevi Photo Medallion with guaranteed spacing */}
        <a href="#" className="flex items-center space-x-2 sm:space-x-3 group shrink-0 min-w-0 mr-3 lg:mr-6 xl:mr-8">
          <div className="relative flex items-center justify-center shrink-0">
            <NaagdeviLogo size="sm" />
          </div>
          <div className="flex flex-col min-w-0 justify-center">
            <span className="heading-mystic text-sm xs:text-base sm:text-xl md:text-2xl font-extrabold tracking-wide text-[#2a2203] group-hover:text-amber-800 transition-colors uppercase leading-tight whitespace-nowrap">
              Naagmata Jyotish
            </span>
            {/* Hindi and Gujarati Subtitle requested by user */}
            <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] xs:text-[10px] sm:text-xs font-bold text-amber-900 leading-tight mt-0.5 whitespace-nowrap">
              <span className="text-amber-950 font-bold font-['Noto_Sans_Devanagari',sans-serif]">नागमाता ज्योतिष</span>
              <span className="text-amber-400 font-normal select-none">•</span>
              <span className="text-amber-800 font-bold font-['Noto_Sans_Gujarati',sans-serif]">નાગમાતા જ્યોતિષ</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation - Active on screens >= 1280px (xl) where all links fit comfortably with generous gaps */}
        <nav className="hidden xl:flex items-center justify-center gap-4 2xl:gap-6 text-xs 2xl:text-sm font-bold text-[#4a3b04] flex-1 px-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-amber-800 transition-colors py-1 relative whitespace-nowrap hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions & Call Button */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 ml-auto">
          {/* Quick WhatsApp Chat on Desktop & Tablet */}
          <a
            id="header-whatsapp-btn"
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat directly on WhatsApp with Baba Ji"
            className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 md:px-3.5 h-8 sm:h-9 md:h-10 rounded-full border border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-white shrink-0" />
            <span>WhatsApp</span>
          </a>

          {/* Call button - Vibrant Saffron Orange Pill with High Contrast */}
          <a
            id="header-call-btn"
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            title="Direct Call Baba Ji - 24/7 Available Worldwide (+91 97141 27309)"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black px-3 sm:px-4 md:px-5 h-8 sm:h-9 md:h-10 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-orange-600/30 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap shrink-0 border border-amber-300 ring-1 ring-amber-400/30"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0 animate-bounce" />
            <span className="hidden xs:inline font-sans font-black tracking-wide text-white">
              {CONTACT_INFO.phoneDisplay}
            </span>
            <span className="xs:hidden font-sans font-black tracking-wide text-white">
              Call Now
            </span>
            <span className="hidden 2xl:inline-flex text-[9px] uppercase font-black bg-black/20 text-yellow-100 px-1.5 py-0.5 rounded-full border border-amber-200/40 ml-0.5">
              24/7 CALL
            </span>
          </a>

          {/* Quick Mobile WhatsApp Icon Button */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Chat"
            className="sm:hidden w-8 h-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-sm border border-emerald-500 shrink-0 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Mobile & Compact Desktop Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 text-[#2a2203] hover:text-amber-800 focus:outline-none rounded-lg border border-amber-200/80 bg-amber-50/70 hover:bg-amber-100/80 cursor-pointer shrink-0 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 pb-5 pt-2 border-t border-amber-200/80 bg-[#fdfcf7] space-y-3 shadow-xl border-b border-amber-200/60">
          <div className="flex justify-between items-center pb-2 border-b border-amber-100">
            <span className="text-xs text-amber-800 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Strictly 100% Confidential & Private
            </span>
            <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              ● Baba Ji Online
            </span>
          </div>

          {/* High Priority Direct Call in Mobile Drawer */}
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-md transition-all active:scale-98"
          >
            <Phone className="w-4 h-4 text-white animate-bounce" />
            <span>Direct Call Baba Ji: {CONTACT_INFO.phoneDisplay}</span>
          </a>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs sm:text-sm font-semibold text-[#2a2203] hover:text-amber-900 py-2.5 px-3 rounded-xl bg-amber-50/80 hover:bg-amber-100/80 border border-amber-200/40 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-amber-500 text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-1 flex flex-col gap-2">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-sm active:scale-98 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with Baba Ji on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>

    {/* Fixed Header Spacer: Reserves exact vertical space so page content is never hidden */}
    <div
      style={{ height: `${headerHeight}px` }}
      className="w-full shrink-0 pointer-events-none select-none"
      aria-hidden="true"
    />
  </>
  );
};
