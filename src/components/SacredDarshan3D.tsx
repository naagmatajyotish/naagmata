import React, { useState, useRef } from 'react';
import { Sparkles, Heart, Phone, MessageCircle, ShieldCheck, Flame, Sun } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import maaNaagdeviImage from '../assets/images/naagdevi_maa_transparent.png';

export const SacredDarshan3D: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [blessed, setBlessed] = useState(false);
  const [sparkleCount, setSparkleCount] = useState(0);

  // Handle interactive 3D perspective tilt on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalized between -1 and 1
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Max tilt angles: 12 degrees
    setRotateY(normX * 12);
    setRotateX(-normY * 12);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleAshirwadClick = () => {
    setBlessed(true);
    setSparkleCount(prev => prev + 1);
  };

  return (
    <section id="sacred-darshan" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-black text-amber-900 uppercase tracking-widest mb-3 shadow-xs">
          <Sun className="w-3.5 h-3.5 text-amber-700 animate-spin-slow" />
          <span>॥ श्री माँ नागदेवी दिव्य ३D प्रत्यक्ष दर्शन ॥</span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight">
          Divine 3D Sanctum of Shri Maa Naagdevi
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Experience the sacred spiritual presence of Maa Naagdevi in high-definition 3D. Move your cursor or finger to witness the divine aura, holy serpent canopy, and consecrated protective grace.
        </p>
      </div>

      {/* 3D Interactive Stage Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: '1200px',
          }}
          className="w-full max-w-2xl select-none"
        >
          {/* 3D Rotating Card Altar */}
          <div
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'}`,
              transformStyle: 'preserve-3d',
              transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            className="relative w-full rounded-3xl p-6 sm:p-10 border-2 border-amber-400/80 shadow-2xl bg-gradient-to-b from-[#1c1917] via-[#292524] to-[#0c0a09] text-white overflow-hidden"
          >
            {/* Dynamic Glare Reflection Overlay */}
            <div
              style={{
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(254, 240, 138, 0.25) 0%, transparent 60%)`,
              }}
              className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-200"
            />

            {/* Sacred Golden Ray Background Glow (Layer 0) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-gradient-to-tr from-amber-600/40 via-yellow-500/40 to-orange-500/30 blur-3xl animate-pulse" />
              {/* Star rays */}
              <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full border border-amber-400/30 animate-spin-slow opacity-40" />
            </div>

            {/* Top Sacred Header Badge (Layer 3D: translateZ 30px) */}
            <div 
              style={{ transform: 'translateZ(35px)' }}
              className="flex items-center justify-between gap-2 mb-4 relative z-20"
            >
              <div className="inline-flex items-center gap-1.5 bg-stone-900/90 border border-amber-400/60 px-3 py-1 rounded-full text-xs text-yellow-300 font-bold shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
                <span>Maa Naagdevi Siddha Peeth Darshan</span>
              </div>
              <div className="text-[11px] font-black text-amber-200 bg-amber-950/70 border border-amber-400/50 px-2.5 py-0.5 rounded-full">
                ३D INTERACTIVE
              </div>
            </div>

            {/* Main Centerpiece: Maa Naagdevi Transparent PNG in 3D Depth */}
            <div 
              style={{ transform: 'translateZ(75px)' }}
              className="relative flex flex-col items-center justify-center py-4 z-20"
            >
              {/* Consecrated 3D Radiant Aura Behind Cutout */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-radial from-yellow-300/30 via-amber-500/20 to-transparent blur-xl pointer-events-none -z-10 animate-divine-pulse" />

              {/* 3D PNG Cutout Image of Maa Naagdevi */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 transition-transform duration-300">
                <img
                  src={maaNaagdeviImage}
                  alt="Maa Naagdevi 3D Transparent Divine Cutout"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  width="400"
                  height="400"
                  style={{
                    filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.85)) drop-shadow(0 0 25px rgba(245,158,11,0.5))',
                  }}
                  className="w-full h-full object-contain pointer-events-none select-none"
                />

                {/* Left & Right Consecrated Golden Serpents */}
                <div className="absolute -bottom-2 -left-4 sm:-left-6 w-14 h-14 sm:w-18 sm:h-18 opacity-90 pointer-events-none">
                  <span className="text-3xl sm:text-4xl animate-bounce-slow">🐍</span>
                </div>
                <div className="absolute -bottom-2 -right-4 sm:-right-6 w-14 h-14 sm:w-18 sm:h-18 opacity-90 pointer-events-none">
                  <span className="text-3xl sm:text-4xl animate-bounce-slow" style={{ animationDelay: '0.8s' }}>🐍</span>
                </div>
              </div>

              {/* Consecrated Ashtadhatu Altar Platform (Layer 3D: translateZ 45px) */}
              <div 
                style={{ transform: 'translateZ(45px)' }}
                className="w-48 sm:w-64 h-4 bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 rounded-full border border-yellow-300 shadow-lg shadow-amber-900/60 -mt-2 mb-3"
              />

              {/* Sacred Beej Verse Display */}
              <div 
                style={{ transform: 'translateZ(60px)' }}
                className="text-center px-4 py-2 bg-stone-900/90 border border-amber-500/60 rounded-2xl max-w-lg mt-2 shadow-xl"
              >
                <p className="heading-mystic text-xs sm:text-sm md:text-base font-extrabold text-yellow-300 tracking-wide">
                  ॥ ॐ नवकुल नागदेव्यै च विद्महे विषदन्तायै धीमहि तन्नो सर्पः प्रचोदयात् ॥
                </p>
                <span className="text-[10px] text-amber-200 block mt-0.5 uppercase tracking-wider font-semibold">
                  Maa Naagdevi Maha Siddha Beej Mantra
                </span>
              </div>
            </div>

            {/* Interactive Ashirwad Action / Blessing Trigger (Layer 3D: translateZ 85px) */}
            <div 
              style={{ transform: 'translateZ(85px)' }}
              className="relative z-20 pt-4 text-center"
            >
              <button
                type="button"
                onClick={handleAshirwadClick}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 hover:from-amber-400 hover:to-yellow-300 text-stone-950 font-black px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/40 border-2 border-white cursor-pointer active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-stone-950 animate-spin-slow" />
                <span>🌺 Touch for Divine Ashirwad (माँ का आशीर्वाद लें)</span>
              </button>

              {/* Blessed Message Alert when touched */}
              {blessed && (
                <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-amber-950/95 via-stone-900 to-amber-950/95 border-2 border-yellow-400/80 text-yellow-200 text-xs sm:text-sm font-bold shadow-2xl animate-fade-in">
                  <p className="flex items-center justify-center gap-2 text-yellow-300 font-extrabold text-sm mb-1">
                    <span>✨</span>
                    <span>माँ नागदेवी का पावन आशीर्वाद आपको प्राप्त हुआ</span>
                    <span>✨</span>
                  </p>
                  <p className="text-stone-200 font-normal leading-relaxed text-xs">
                    "माँ नागदेवी की असीम अनुकंपा से आपके दांपत्य, प्रेम और जीवन के सभी विघ्न, ग्रह दोष व शत्रु बाधा शीघ्र शांत हों।"
                  </p>
                  <span className="text-[11px] text-amber-300 font-bold block mt-1">
                    आशीर्वाद क्रमांक: #{14800 + sparkleCount} • कल्याणमस्तु!
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons: Direct Call & WhatsApp to Connect with Baba Ji */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl">
          <a
            id="darshan-call-btn"
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="w-full sm:w-auto flex-1 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm shadow-xl border border-amber-300 active:scale-95 transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            <span>Direct Call Baba Ji: {CONTACT_INFO.phoneDisplay}</span>
          </a>

          <a
            id="darshan-whatsapp-btn"
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm shadow-lg border border-emerald-400 active:scale-95 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Request Consecrated Naag-Mani Kavach</span>
          </a>
        </div>
      </div>
    </section>
  );
};
