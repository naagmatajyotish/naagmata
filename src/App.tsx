import React, { Suspense, lazy } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { DiscreetProvider } from './context/DiscreetContext';
import { DiscreetOverlay } from './components/DiscreetOverlay';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ParIstriHighlightBanner } from './components/ParIstriHighlightBanner';
import { ServicesSection } from './components/ServicesSection';
import { FloatingActions } from './components/FloatingActions';

// Lazy load below-the-fold heavy interactive components for instantaneous initial page render
const GlobalPresence = lazy(() => import('./components/GlobalPresence').then(m => ({ default: m.GlobalPresence })));
const SeoKeywordsDirectory = lazy(() => import('./components/SeoKeywordsDirectory').then(m => ({ default: m.SeoKeywordsDirectory })));
const SacredDarshan3D = lazy(() => import('./components/SacredDarshan3D').then(m => ({ default: m.SacredDarshan3D })));
const AuraEnergyScanner = lazy(() => import('./components/AuraEnergyScanner').then(m => ({ default: m.AuraEnergyScanner })));
const VedicCalculator = lazy(() => import('./components/VedicCalculator').then(m => ({ default: m.VedicCalculator })));
const BhojpatraKavach = lazy(() => import('./components/BhojpatraKavach').then(m => ({ default: m.BhojpatraKavach })));
const SacredProcess = lazy(() => import('./components/SacredProcess').then(m => ({ default: m.SacredProcess })));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const FaqSection = lazy(() => import('./components/FaqSection').then(m => ({ default: m.FaqSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Subtle lightweight placeholder to maintain layout stability during lazy chunk loading
const SectionFallback = () => (
  <div className="w-full py-16 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-amber-500 border-t-transparent animate-spin opacity-40"></div>
  </div>
);

export default function App() {
  return (
    <LanguageProvider>
      <DiscreetProvider>
        {/* Discreet Panic Mode Overlay (Instant Devotional Disguise • Press Esc) */}
        <DiscreetOverlay />

        <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#fdfcf7] text-[#2a2203] selection:bg-amber-500 selection:text-white flex flex-col font-sans transition-colors duration-400">
          {/* Main Sticky Header with Top Scrolling Marquee & 24/7 Helpline - Loaded Instantly */}
          <Header />

          {/* Main Page Sections */}
          <main className="flex-1 w-full max-w-full overflow-x-hidden">
            {/* Above-the-fold Critical Sections (Instant Load without delay) */}
            <Hero />
            {/* Special Highlight Banner: Par-Istri Moh & Sautan Badha Nivaran */}
            <ParIstriHighlightBanner />
            <ServicesSection />

            {/* Below-the-fold Interactive Components (Deferred for ultra-fast First Contentful Paint) */}
            <Suspense fallback={<SectionFallback />}>
              <div className="mobile-fast-render">
                {/* International & Abroad Vedic Consultations (USA, UK, Canada, Australia, UAE) */}
                <GlobalPresence />
              </div>

              <div className="mobile-fast-render">
                {/* Local & International Astrological SEO Keywords Directory */}
                <SeoKeywordsDirectory />
              </div>

              <div className="mobile-fast-render">
                {/* 3D Divine Darshan & Ashirwad of Maa Naagdevi (Interactive 3D Cutout) */}
                <SacredDarshan3D />
              </div>

              <div className="mobile-fast-render">
                {/* Vedic Aura & Negative Energy Diagnostic Scanner */}
                <AuraEnergyScanner />
              </div>

              <div className="mobile-fast-render">
                {/* Love Problem Diagnosis & Relationship Remedy Finder */}
                <VedicCalculator />
              </div>

              <div className="mobile-fast-render">
                {/* Personalized Sacred Vedic Bhojpatra Raksha Kavach */}
                <BhojpatraKavach />
              </div>

              <div className="mobile-fast-render">
                {/* Ancient 4-Stage Remedy Process */}
                <SacredProcess />
              </div>

              <div className="mobile-fast-render">
                {/* Trust Badges & Hallmarks */}
                <WhyChooseUs />
              </div>

              <div className="mobile-fast-render">
                {/* Verified Devotee Testimonials */}
                <Testimonials />
              </div>

              <div className="mobile-fast-render">
                {/* Frequently Asked Questions */}
                <FaqSection />
              </div>

              <div className="mobile-fast-render">
                {/* Direct Contact & Ashram Details */}
                <ContactSection />
              </div>
            </Suspense>
          </main>

          {/* Footer */}
          <Suspense fallback={null}>
            <div className="mobile-fast-render">
              <Footer />
            </div>
          </Suspense>

          {/* Floating Action Buttons (Sticky Mobile Bar + Desktop Quick Dial + Panic Hide) - Instantly ready */}
          <FloatingActions />
        </div>
      </DiscreetProvider>
    </LanguageProvider>
  );
}

