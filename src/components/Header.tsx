import React, { useState, useRef, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { NaagdeviLogo } from './NaagdeviLogo';
import { UrgentBanner } from './UrgentBanner';
import { useLanguage } from '../context/LanguageContext';
import { useDiscreet } from '../context/DiscreetContext';
import { useTheme } from '../context/ThemeContext';
import { Palette } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(140);
  const { lang } = useLanguage();
  const { enableDiscreetMode } = useDiscreet();
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const updateHeight = () => {
      if (!headerRef.current || mobileMenuOpen) return;
      const h = headerRef.current.offsetHeight;
      if (h > 0) {
        setHeaderHeight(h);
      }
    };

    updateHeight();
    const observer = new ResizeObserver(() => {
      updateHeight();
    });
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    window.addEventListener('resize', updateHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.services, href: '#services' },
    { name: t.rituals, href: '#rituals' },
    { name: t.whyUs, href: '#why-us' },
    { name: t.testimonials, href: '#testimonials' },
    { name: t.faq, href: '#faq' },
    { name: t.contact, href: '#contact' },
    {
      name: '🌐 शहर व SEO डायरेक्टरी',
      href: '#seo-directory'
    },
  ];

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 w-full max-w-full ${
          theme === 'sacred-parchment'
            ? 'bg-white/95 border-b border-amber-200/90 text-stone-900 shadow-sm'
            : 'bg-[var(--bg-header,#130702)]/95 border-b border-amber-500/30 text-white shadow-xl shadow-black/50'
        }`}
      >
        {/* 1. Top Scrolling Marquee Banner - Always Fixed at Top */}
        <UrgentBanner />

        {/* 2. Mobile Dedicated Direct Helpline Bar - Phone number fills the full width with larger font */}
        <div className="sm:hidden bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-white px-2.5 py-1.5 flex items-center justify-between border-b border-amber-500/40 shadow-xs w-full max-w-full gap-2">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 whitespace-nowrap">
              {t.helpline}
            </span>
          </div>

          {/* Full-width expanding Call Baba Ji button - Perfectly fitted in the box */}
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            title="Direct Call Baba Ji"
            className="flex-1 min-h-[38px] flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-stone-950 py-1.5 px-3 rounded-full font-black shadow-md active:scale-95 transition-all whitespace-nowrap relative overflow-hidden ring-1 ring-yellow-300"
          >
            {/* Phone Icon */}
            <Phone className="w-4 h-4 text-stone-950 shrink-0 fill-stone-950 relative z-10" />

            {/* Bold Mobile Number - Fits box symmetrically */}
            <span className="tracking-wide font-black text-sm xs:text-base text-stone-950 relative z-10 leading-none">
              {CONTACT_INFO.phoneDisplay}
            </span>
          </a>
        </div>

        {/* 3. Main Brand Navigation Bar - Always Fixed */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 gap-2 w-full min-w-0">
          {/* Brand Logo - Animated Maa Naagdevi Photo Medallion (Guaranteed Zero Overlap on Mobile) */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink min-w-0 max-w-[calc(100vw-110px)] sm:max-w-none">
            <div className="relative flex items-center justify-center shrink-0">
              <NaagdeviLogo size="sm" />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className={`heading-mystic text-sm xs:text-base sm:text-xl md:text-2xl font-black tracking-wide uppercase leading-tight truncate transition-colors ${
                theme === 'sacred-parchment' ? 'text-stone-950 group-hover:text-amber-800' : 'text-yellow-100 group-hover:text-yellow-300'
              }`}>
                Naagmata Jyotish
              </span>
              {/* Pure Hindi Subtitle */}
              <div className="flex items-center gap-1 text-[9px] xs:text-[10px] sm:text-xs font-bold leading-tight mt-0.5 min-w-0">
                <span className={`font-bold font-['Noto_Sans_Devanagari',sans-serif] truncate max-w-[190px] xs:max-w-[260px] sm:max-w-none ${
                  theme === 'sacred-parchment' ? 'text-amber-800' : 'text-amber-300'
                }`}>
                  श्री माँ नागदेवी सिद्ध पीठ • उज्जैन
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation - Responsive with priority items */}
          <nav className={`hidden xl:flex items-center justify-center gap-2.5 2xl:gap-4 text-xs 2xl:text-sm font-bold shrink min-w-0 px-1 ${
            theme === 'sacred-parchment' ? 'text-stone-800' : 'text-stone-200'
          }`}>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`py-1 relative whitespace-nowrap hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-500 after:absolute after:bottom-0 after:left-0 after:transition-all ${
                  theme === 'sacred-parchment' ? 'hover:text-amber-700' : 'hover:text-yellow-300'
                } ${
                  idx >= 4 ? 'hidden 2xl:inline-block' : 'inline-block'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions, Theme, Language Switcher & Call Button - Guaranteed Zero Clipping */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0 ml-auto">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              type="button"
              title={`थीम: ${theme === 'sacred-parchment' ? 'स्वर्ण व क्रीम' : theme === 'cosmic-dark' ? 'कृष्ण व स्वर्ण' : 'भगवा व स्वर्ण'} (थीम बदलने के लिए क्लिक करें)`}
              className={`px-2.5 sm:px-3 py-1.5 h-8 sm:h-9 md:h-10 rounded-full text-xs font-bold transition-all active:scale-95 cursor-pointer shrink-0 flex items-center gap-1.5 shadow-xs ${
                theme === 'sacred-parchment'
                  ? 'bg-amber-50/90 hover:bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-stone-900/90 hover:bg-stone-800 text-yellow-300 border border-amber-500/50'
              }`}
            >
              <Palette className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="text-[11px] font-black tracking-wide whitespace-nowrap">
                {theme === 'sacred-parchment' ? 'स्वर्ण व क्रीम' : theme === 'cosmic-dark' ? 'कृष्ण व स्वर्ण' : 'भगवा व स्वर्ण'}
              </span>
            </button>

            {/* Discreet Panic Mode Quick Hide Button */}
            <button
              onClick={enableDiscreetMode}
              type="button"
              title="100% Private Discreet Mode (Instant Disguise • Press Esc)"
              className={`hidden sm:inline-flex items-center justify-center gap-1.5 p-2 2xl:px-3 h-8 sm:h-9 md:h-10 rounded-full text-xs font-bold transition-all active:scale-95 cursor-pointer shrink-0 shadow-2xs ${
                theme === 'sacred-parchment'
                  ? 'bg-white hover:bg-amber-50 text-stone-800 border border-amber-300'
                  : 'bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-amber-500/40'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden 2xl:inline">{lang === 'hi' ? 'सीक्रेट मोड' : lang === 'en' ? 'Private Mode' : 'સિક્રેટ મોડ'}</span>
            </button>

            {/* Call button - GUARANTEED 100% VISIBLE WITH NO CLIPPING ON ANY SCREEN */}
            <a
              id="header-call-btn"
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              title="Direct Call Baba Ji - 24/7 Available Worldwide (+91 97141 27309)"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-white font-black px-3.5 sm:px-4.5 md:px-5 h-9 md:h-10 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap shrink-0 border-2 border-yellow-200 ring-2 ring-yellow-400/20 min-w-max"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0 fill-white" />
              <span className="font-sans font-black tracking-wide text-white whitespace-nowrap">
                {CONTACT_INFO.phoneDisplay}
              </span>
              <span className="hidden 2xl:inline-flex text-[9px] uppercase font-black bg-white/20 text-white px-1.5 py-0.5 rounded-full border border-white/30 ml-0.5">
                24/7
              </span>
            </a>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 text-yellow-200 hover:text-white focus:outline-none rounded-lg border border-amber-500/40 bg-stone-900/80 hover:bg-stone-850 cursor-pointer shrink-0 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 pb-5 pt-2 border-t border-amber-500/30 bg-[#0e0d0b] space-y-3 shadow-2xl border-b border-amber-500/40 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="flex justify-between items-center pb-2 border-b border-stone-800">
            <span className="text-xs text-amber-300 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> १००% पूर्णतः गोपनीय व सुरक्षित
            </span>
            <span className="text-[11px] font-black text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40">
              ● पूज्य बाबाजी ऑनलाइन उपलब्ध हैं
            </span>
          </div>

          {/* High Priority Direct Call in Mobile Drawer */}
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full min-h-[54px] bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-stone-950 font-black py-3.5 px-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-amber-500/30 transition-all active:scale-98 border-2 border-yellow-200 ring-2 ring-yellow-400/20"
          >
            <Phone className="w-5 h-5 text-stone-950 animate-bounce shrink-0" />
            <span className="font-black text-lg xs:text-xl tracking-wider text-stone-950 whitespace-nowrap">
              {CONTACT_INFO.phoneDisplay}
            </span>
          </a>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs sm:text-sm font-semibold text-stone-200 hover:text-yellow-300 py-2.5 px-3 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-800 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-amber-400 text-xs">→</span>
              </a>
            ))}
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
