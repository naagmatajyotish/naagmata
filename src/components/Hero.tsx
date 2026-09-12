import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Sparkles, Clock, Star, Flame } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { NaagdeviLogo } from './NaagdeviLogo';

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 text-center py-14 md:py-24 overflow-hidden transition-colors duration-400 w-full max-w-full"
      style={{
        background: 'radial-gradient(ellipse at top, var(--hero-grad-from, #fef3c7) 0%, var(--hero-grad-via, #fffbeb) 50%, var(--hero-grad-to, #fbf8f3) 100%)'
      }}
    >
      {/* Background starlight & sacred geometry pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(var(--accent-primary,#d97706)_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Ambient warm glow bubbles (Hardware-accelerated radial gradients without heavy CSS blurs) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] max-w-[100vw] rounded-full pointer-events-none opacity-40 bg-[radial-gradient(circle,rgba(217,119,6,0.35)_0%,transparent_70%)]"
      ></div>
      <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 max-w-[100vw] rounded-full pointer-events-none opacity-30 bg-[radial-gradient(circle,rgba(252,211,77,0.4)_0%,transparent_70%)]"></div>

      <div className="max-w-4xl mx-auto space-y-6 relative z-10 w-full">
        {/* Divine Maa Naagdevi Animated Sacred Medallion / Centerpiece */}
        <div className="flex flex-col items-center justify-center pt-2 pb-2">
          <div className="relative group flex flex-col items-center">
            {/* Animated Photo Logo */}
            <NaagdeviLogo size="hero" glow={true} />

            {/* Sacred Naag-Mani Bottom Blessed Title */}
            <div className="mt-3 inline-flex flex-col items-center gap-0.5 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white px-4 py-1.5 rounded-2xl border border-yellow-300 shadow-md shadow-amber-900/20">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                <span>🐍</span>
                <span>Naagmata Jyotish • Shri Maa Naagdevi Siddha Peeth</span>
                <span>✨</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-yellow-200 font-bold">
                <span className="font-['Noto_Sans_Devanagari',sans-serif]">नागमाता ज्योतिष</span>
                <span className="text-yellow-400">•</span>
                <span className="font-['Noto_Sans_Gujarati',sans-serif]">નાગમાતા જ્યોતિષ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Sacred Badge */}
        <div className="inline-flex items-center gap-2 bg-white/90 border border-amber-300/80 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-xs">
          <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
          <p className="text-amber-800 font-bold uppercase tracking-widest text-xs md:text-sm">
            World Renowned Astrologer & Vedic Vashikaran Specialist
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="heading-mystic text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-stone-900 leading-tight">
          Solve All Love & Life Problems <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
            With Powerful Vedic Vashikaran
          </span>
        </h1>

        {/* Sacred Chanting Verse */}
        <div className="bg-amber-100/60 border border-amber-200/80 py-1.5 px-4 rounded-full max-w-xl mx-auto">
          <p className="text-amber-900 text-xs sm:text-sm font-serif tracking-wider font-semibold">
            ॥ Om Navakula Naagdevyai Cha Vidmahe Vishadantayai Dheemahi Tanno Sarpah Prachodayat ॥
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-stone-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Facing relationship separation, family hesitation, or lost love? With the divine blessings of Maa Naagdevi and ancient Vedic Vashikaran astrology, Baba Ji provides authentic, confidential, and safe spiritual guidance.
        </p>

        {/* Key Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-2 text-xs">
          <div className="flex items-center justify-center gap-2 bg-white/90 border border-amber-200 py-3 px-3 rounded-2xl text-stone-800 shadow-xs hover:border-amber-400 transition-colors">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-semibold">Vedic Guidance</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/90 border border-amber-200 py-3 px-3 rounded-2xl text-stone-800 shadow-xs hover:border-amber-400 transition-colors">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-semibold">100% Confidential</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/90 border border-amber-200 py-3 px-3 rounded-2xl text-stone-800 shadow-xs hover:border-amber-400 transition-colors">
            <Flame className="w-4 h-4 text-orange-600 shrink-0" />
            <span className="font-semibold">Sattvic Vashikaran</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/90 border border-amber-200 py-3 px-3 rounded-2xl text-stone-800 shadow-xs hover:border-amber-400 transition-colors">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
            <span className="font-semibold">35+ Yrs Experience</span>
          </div>
        </div>

        {/* Call to Actions - Direct Call as First & Highest Priority */}
        <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            id="hero-call-btn"
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black px-9 py-4 rounded-2xl flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-1 text-base md:text-lg shadow-xl shadow-amber-500/35 cursor-pointer border border-amber-300 ring-4 ring-amber-400/20"
          >
            <Phone className="w-5 h-5 shrink-0 animate-bounce" />
            <span>Direct Call Baba Ji: {CONTACT_INFO.phoneDisplay}</span>
          </a>

          <a
            id="hero-whatsapp-btn"
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-4 rounded-2xl flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-0.5 text-base md:text-lg shadow-lg shadow-emerald-600/20 cursor-pointer border border-emerald-500"
          >
            <MessageCircle className="w-5 h-5 text-white shrink-0" />
            <span>Chat With Baba Ji on WhatsApp</span>
          </a>
        </div>

        {/* Call Preference Notification Pill */}
        <div className="pt-1 flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 bg-amber-100/90 border border-amber-300/80 px-3.5 py-1 rounded-full text-xs font-bold text-amber-900 shadow-2xs">
            <Phone className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
            <span>Direct Phone Call Preferred for Immediate Solution • 24/7 Free Initial Guidance</span>
          </span>
        </div>

        {/* Direct consultation hint & live activity badge */}
        <div className="pt-3 flex items-center justify-center space-x-2 text-xs text-stone-600 font-medium">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span>Baba Ji is currently in Siddha Sadhana & accepting urgent cases worldwide</span>
        </div>
      </div>
    </section>
  );
};
