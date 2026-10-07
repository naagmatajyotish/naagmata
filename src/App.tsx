import React, { useState, useEffect, Suspense, lazy } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { DiscreetProvider } from './context/DiscreetContext';
import { DiscreetOverlay } from './components/DiscreetOverlay';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GuptDhanHighlightBanner } from './components/GuptDhanHighlightBanner';
import { ParIstriHighlightBanner } from './components/ParIstriHighlightBanner';
import { ServicesSection } from './components/ServicesSection';
import { FloatingActions } from './components/FloatingActions';

// Lazy loaded trust, directory & consultation components
const SeoDirectoryPage = lazy(() => import('./components/SeoDirectoryPage').then(m => ({ default: m.SeoDirectoryPage })));
const SacredProcess = lazy(() => import('./components/SacredProcess').then(m => ({ default: m.SacredProcess })));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const FaqSection = lazy(() => import('./components/FaqSection').then(m => ({ default: m.FaqSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

const SectionFallback = () => (
  <div className="w-full py-12 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-amber-500 border-t-transparent animate-spin opacity-40"></div>
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'seo-directory'>('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (
        hash.includes('seo-directory') ||
        hash.includes('directory') ||
        hash.includes('international-seo') ||
        hash.includes('keywords')
      ) {
        setCurrentView('seo-directory');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (view: 'home' | 'seo-directory', targetHash?: string) => {
    setCurrentView(view);
    if (targetHash) {
      window.location.hash = targetHash;
    } else if (view === 'home') {
      window.location.hash = '#services';
    } else {
      window.location.hash = '#seo-directory';
    }
  };

  return (
    <LanguageProvider>
      <DiscreetProvider>
        {/* Discreet Panic Mode Overlay (Instant Devotional Disguise • Press Esc) */}
        <DiscreetOverlay />

        <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#fdfcf7] text-[#2a2203] selection:bg-amber-500 selection:text-white flex flex-col font-sans transition-colors duration-400">
          {/* Main Sticky Header with Top Scrolling Marquee & 24/7 Helpline */}
          <Header />

          {/* Main Page Content */}
          <main className="flex-1 w-full max-w-full overflow-x-hidden">
            {currentView === 'home' ? (
              <>
                {/* 1. Hero Banner */}
                <Hero />

                {/* 2. Special Highlight Banner: Gupt Dhan & Gada Dhan Siddhi */}
                <GuptDhanHighlightBanner />

                {/* 3. Special Highlight Banner: Par-Istri Moh & Sautan Badha */}
                <ParIstriHighlightBanner />

                {/* 4. Core Services Section - Prominent, clean & distraction-free */}
                <ServicesSection />

                {/* 4. Trust, Process, Reviews & Contact */}
                <Suspense fallback={<SectionFallback />}>
                  {/* Ancient 4-Stage Remedy Process */}
                  <div className="mobile-fast-render">
                    <SacredProcess />
                  </div>

                  {/* Trust Badges & Hallmarks */}
                  <div className="mobile-fast-render">
                    <WhyChooseUs />
                  </div>

                  {/* Verified Devotee Testimonials */}
                  <div className="mobile-fast-render">
                    <Testimonials />
                  </div>

                  {/* Frequently Asked Questions */}
                  <div className="mobile-fast-render">
                    <FaqSection />
                  </div>

                  {/* Dedicated SEO & City Directory Gateway Banner */}
                  <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-stone-950 via-zinc-900 to-stone-950 text-white flex flex-col md:flex-row items-center justify-between gap-5 border border-amber-500/40 shadow-xl">
                      <div className="space-y-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-1">
                          <span>🌐</span>
                          <span>अखिल भारतीय एवं अंतर्राष्ट्रीय ज्योतिष केंद्र</span>
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl text-amber-200 font-serif">
                          भारत व विदेश के सभी शहरों के लिए विशेष ज्योतिष डायरेक्टरी
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-300 max-w-2xl">
                          मुंबई, दिल्ली, अहमदाबाद, सूरत, जयपुर, बेंगलुरु सहित USA, UK, Canada, Australia व UAE में ऑनलाइन व व्यक्तिगत परामर्श हेतु अलग डायरेक्टरी पृष्ठ देखें।
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => navigateTo('seo-directory', '#seo-directory')}
                        className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all active:scale-95 flex items-center gap-2"
                      >
                        <span>शहर डायरेक्टरी व कीवर्ड्स देखें</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>

                  {/* Direct Contact & Ashram Details */}
                  <div className="mobile-fast-render">
                    <ContactSection />
                  </div>
                </Suspense>
              </>
            ) : (
              /* DEDICATED SEPARATE SEO & KEYWORDS DIRECTORY PAGE */
              <Suspense fallback={<SectionFallback />}>
                <SeoDirectoryPage onBackToHome={() => navigateTo('home', '#services')} />
              </Suspense>
            )}
          </main>

          {/* Footer */}
          <Suspense fallback={null}>
            <div className="mobile-fast-render">
              <Footer />
            </div>
          </Suspense>

          {/* Floating Action Buttons (Sticky Mobile Bar + Desktop Quick Dial + Panic Hide) */}
          <FloatingActions />
        </div>
      </DiscreetProvider>
    </LanguageProvider>
  );
}
