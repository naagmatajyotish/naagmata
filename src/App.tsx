import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { DiscreetProvider } from './context/DiscreetContext';
import { DiscreetOverlay } from './components/DiscreetOverlay';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GlobalPresence } from './components/GlobalPresence';
import { SeoKeywordsDirectory } from './components/SeoKeywordsDirectory';
import { SacredDarshan3D } from './components/SacredDarshan3D';
import { ConsultationForm } from './components/ConsultationForm';
import { VoiceNoteRecorder } from './components/VoiceNoteRecorder';
import { AuraEnergyScanner } from './components/AuraEnergyScanner';
import { VedicCalculator } from './components/VedicCalculator';
import { SacredProcess } from './components/SacredProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <LanguageProvider>
      <DiscreetProvider>
        {/* Discreet Panic Mode Overlay (Instant Devotional Disguise • Press Esc) */}
        <DiscreetOverlay />

        <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#fdfcf7] text-[#2a2203] selection:bg-amber-500 selection:text-white flex flex-col font-sans transition-colors duration-400">
          {/* Main Sticky Header with Top Scrolling Marquee & 24/7 Helpline */}
          <Header />

          {/* Main Page Sections */}
          <main className="flex-1 w-full max-w-full overflow-x-hidden">
            {/* Hero Section with Grand Animated Maa Naagdevi Centerpiece */}
            <Hero />

            {/* Quick Crisis Consultation Booking Widget */}
            <ConsultationForm />

            {/* 1-Click Voice Note to Baba Ji (Audio Recording & Instant WhatsApp Delivery) */}
            <VoiceNoteRecorder />

            {/* Sacred Services Section (Expanded and Interactive) */}
            <ServicesSection />

            {/* International & Abroad Vedic Consultations (USA, UK, Canada, Australia, UAE) */}
            <GlobalPresence />

            {/* Local & International Astrological SEO Keywords Directory */}
            <SeoKeywordsDirectory />

            {/* 3D Divine Darshan & Ashirwad of Maa Naagdevi (Interactive 3D Cutout) */}
            <SacredDarshan3D />

            {/* Vedic Aura & Negative Energy Diagnostic Scanner */}
            <AuraEnergyScanner />

            {/* Love Problem Diagnosis & Relationship Remedy Finder */}
            <VedicCalculator />

            {/* Ancient 4-Stage Remedy Process */}
            <SacredProcess />

            {/* Trust Badges & Hallmarks */}
            <WhyChooseUs />

            {/* Verified Devotee Testimonials */}
            <Testimonials />

            {/* Frequently Asked Questions */}
            <FaqSection />

            {/* Direct Contact & Ashram Details */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Action Buttons (Sticky Mobile Bar + Desktop Quick Dial + Panic Hide) */}
          <FloatingActions />
        </div>
      </DiscreetProvider>
    </LanguageProvider>
  );
}

