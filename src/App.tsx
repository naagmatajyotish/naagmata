import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { UrgentBanner } from './components/UrgentBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GlobalPresence } from './components/GlobalPresence';
import { SacredDarshan3D } from './components/SacredDarshan3D';
import { ConsultationForm } from './components/ConsultationForm';
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
    <ThemeProvider>
      <div className="min-h-screen bg-[#fdfcf7] text-[#2a2203] selection:bg-amber-500 selection:text-white flex flex-col font-sans transition-colors duration-400">
        {/* Top Urgent Alert Banner */}
        <UrgentBanner />

        {/* Main Header / Navigation */}
        <Header />

        {/* Main Page Sections */}
        <main className="flex-1">
          {/* Hero Section with Grand Animated Maa Naagdevi Centerpiece */}
          <Hero />

          {/* Quick Crisis Consultation Booking Widget */}
          <ConsultationForm />

          {/* Sacred Services Section (Expanded and Interactive) */}
          <ServicesSection />

          {/* International & Abroad Vedic Consultations (USA, UK, Canada, Australia, UAE) */}
          <GlobalPresence />

          {/* 3D Divine Darshan & Ashirwad of Maa Naagdevi (Interactive 3D Cutout) */}
          <SacredDarshan3D />

          {/* Love Problem Diagnosis & Instant Vashikaran Remedy Finder */}
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

        {/* Floating Action Buttons (Sticky Mobile Bar + Desktop Quick Dial) */}
        <FloatingActions />
      </div>
    </ThemeProvider>
  );
}
