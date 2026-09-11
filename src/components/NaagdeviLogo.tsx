import React from 'react';

interface NaagdeviLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showText?: boolean;
  glow?: boolean;
  showSnakes?: boolean;
}

// Sacred Vedic Black Cobra (कृष्ण नाग / Kaal Naag) SVG with Hood, Scales, Gem & Forked Red Tongue
const BlackSerpentSVG: React.FC<{
  flip?: boolean;
  className?: string;
  idSuffix?: string;
  glowColor?: string;
}> = ({ flip = false, className = '', idSuffix = '1' }) => (
  <svg
    viewBox="0 0 140 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.65)] ${flip ? '-scale-x-100' : ''} ${className}`}
  >
    <defs>
      {/* Sleek Obsidian Black Cobra Body Gradient */}
      <linearGradient id={`blackCobraSkin-${idSuffix}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#292524" />
        <stop offset="25%" stopColor="#1c1917" />
        <stop offset="60%" stopColor="#0c0a09" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>

      {/* Glossy Charcoal Sheen for 3D realism */}
      <linearGradient id={`blackCobraHighlight-${idSuffix}`} x1="30%" y1="0%" x2="70%" y2="100%">
        <stop offset="0%" stopColor="#57534e" />
        <stop offset="40%" stopColor="#292524" />
        <stop offset="100%" stopColor="#09090b" />
      </linearGradient>

      {/* Segmented Dark Scales on Belly */}
      <linearGradient id={`blackCobraBelly-${idSuffix}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#18181b" />
        <stop offset="50%" stopColor="#3f3f46" />
        <stop offset="100%" stopColor="#09090b" />
      </linearGradient>

      {/* Piercing Crimson/Red Eye */}
      <radialGradient id={`blackCobraEye-${idSuffix}`} cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="50%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#7f1d1d" />
      </radialGradient>

      {/* Mystical Naag-Mani on Forehead */}
      <radialGradient id={`blackCobraGem-${idSuffix}`} cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="45%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </radialGradient>
    </defs>

    {/* Serpent Body Coils S-Curve with deep black contour */}
    <path
      d="M50 250 C 30 238, 15 215, 22 190 C 30 160, 85 165, 96 138 C 106 112, 76 92, 70 78"
      stroke="#000000"
      strokeWidth="26"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M50 250 C 30 238, 15 215, 22 190 C 30 160, 85 165, 96 138 C 106 112, 76 92, 70 78"
      stroke={`url(#blackCobraSkin-${idSuffix})`}
      strokeWidth="22"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Highlight stripe for 3D curvature */}
    <path
      d="M50 250 C 30 238, 15 215, 22 190 C 30 160, 85 165, 96 138 C 106 112, 76 92, 70 78"
      stroke={`url(#blackCobraHighlight-${idSuffix})`}
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Inner Belly Scale Ribs */}
    <path
      d="M50 250 C 30 238, 15 215, 22 190 C 30 160, 85 165, 96 138 C 106 112, 76 92, 70 78"
      stroke={`url(#blackCobraBelly-${idSuffix})`}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="4 6"
    />

    {/* Expanded Black Cobra Hood (फन / Phan) */}
    <path
      d="M70 78 C 45 74, 12 58, 15 32 C 18 10, 48 15, 70 17 C 92 15, 122 10, 125 32 C 128 58, 95 74, 70 78 Z"
      fill={`url(#blackCobraSkin-${idSuffix})`}
      stroke="#44403c"
      strokeWidth="2"
    />
    {/* Inner Hood Ribs & Sacred Tantrik Marks */}
    <path
      d="M32 42 C 48 56, 92 56, 108 42 M38 30 C 52 42, 88 42, 102 30"
      stroke="#78716c"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.75"
    />
    {/* Sacred Red / Golden Vermillion Tilak on Hood */}
    <path
      d="M70 24 L70 50 M62 34 Q70 42 78 34"
      stroke="#ef4444"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* Head Center */}
    <path
      d="M56 25 C 56 10, 84 10, 84 25 C 84 32, 56 32, 56 25 Z"
      fill="#1c1917"
      stroke="#78716c"
      strokeWidth="1.2"
    />

    {/* Radiant Naag-Mani on Forehead */}
    <circle cx="70" cy="18" r="4.2" fill={`url(#blackCobraGem-${idSuffix})`} stroke="#fef08a" strokeWidth="1" />
    <circle cx="68.5" cy="16.5" r="1.3" fill="#ffffff" opacity="0.9" />

    {/* Glowing Fierce Red Eyes */}
    <circle cx="60" cy="24" r="2.7" fill={`url(#blackCobraEye-${idSuffix})`} />
    <circle cx="61" cy="23" r="0.9" fill="#ffffff" />
    <circle cx="80" cy="24" r="2.7" fill={`url(#blackCobraEye-${idSuffix})`} />
    <circle cx="81" cy="23" r="0.9" fill="#ffffff" />

    {/* Animated Forked Tongue (चंचल लाल जिह्वा) */}
    <g className="animate-tongue">
      <path
        d="M70 11 L70 -1 M70 -1 L63 -7 M70 -1 L77 -7"
        stroke="#dc2626"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const NaagdeviLogo: React.FC<NaagdeviLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  glow = true,
  showSnakes = size === 'hero' || size === 'xl',
}) => {
  // Dimensions configurations based on requested size
  const config = {
    sm: {
      container: 'w-10 h-10 sm:w-11 sm:h-11',
      glowSpread: 'blur-md scale-110',
    },
    md: {
      container: 'w-14 h-14',
      glowSpread: 'blur-lg scale-115',
    },
    lg: {
      container: 'w-24 h-24',
      glowSpread: 'blur-xl scale-120',
    },
    xl: {
      container: 'w-36 h-36',
      glowSpread: 'blur-2xl scale-125',
    },
    hero: {
      container: 'w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80',
      glowSpread: 'blur-3xl scale-130',
    },
  }[size] || {
    container: 'w-14 h-14',
    glowSpread: 'blur-lg scale-115',
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* 1. Divine Aura Radiance (Golden halo contour behind the goddess and snakes) */}
      {glow && (
        <div
          className={`absolute inset-0 bg-gradient-to-t from-amber-600/30 via-yellow-500/35 to-amber-300/20 ${config.glowSpread} pointer-events-none -z-30 animate-divine-pulse`}
        />
      )}

      {/* 2. Multiple Compact Black Cobras Behind Photo (काले नागों का समूह, माँ के पीछे व आस-पास) */}
      {showSnakes && (
        <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-visible">
          {/* Snake 1: Left Upper Black Cobra (Up-Down & Left-Right floating) */}
          <div className="absolute -left-6 sm:-left-12 md:-left-16 -top-2 sm:-top-6 w-20 h-40 sm:w-28 sm:h-52 md:w-32 md:h-60 animate-snake-1 pointer-events-none opacity-95">
            <BlackSerpentSVG idSuffix="left-upper" />
          </div>

          {/* Snake 2: Right Upper Black Cobra (Up-Down & Right-Left floating) */}
          <div className="absolute -right-6 sm:-right-12 md:-right-16 -top-2 sm:-top-6 w-20 h-40 sm:w-28 sm:h-52 md:w-32 md:h-60 animate-snake-2 pointer-events-none opacity-95">
            <BlackSerpentSVG flip={true} idSuffix="right-upper" />
          </div>

          {/* Snake 3: Left Lower Black Cobra (Deep flanks) */}
          <div className="absolute -left-4 sm:-left-8 md:-left-10 top-16 sm:top-24 md:top-32 w-16 h-34 sm:w-22 sm:h-44 md:w-26 md:h-50 animate-snake-3 pointer-events-none opacity-90">
            <BlackSerpentSVG idSuffix="left-lower" />
          </div>

          {/* Snake 4: Right Lower Black Cobra (Deep flanks) */}
          <div className="absolute -right-4 sm:-right-8 md:-right-10 top-16 sm:top-24 md:top-32 w-16 h-34 sm:w-22 sm:h-44 md:w-26 md:h-50 animate-snake-4 pointer-events-none opacity-90">
            <BlackSerpentSVG flip={true} idSuffix="right-lower" />
          </div>

          {/* Snake 5: Crown Center Canopy Black Cobra (Peeking just behind Maa's Golden Crown) */}
          <div className="absolute -top-10 sm:-top-16 md:-top-20 left-1/2 -translate-x-1/2 w-18 h-36 sm:w-24 sm:h-48 md:w-28 md:h-54 animate-snake-crown pointer-events-none opacity-90">
            <BlackSerpentSVG idSuffix="center-crown" />
          </div>

          {/* Golden Kundalini Mystical Aura Waves connecting the serpents */}
          <div className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 w-48 sm:w-64 md:w-80 h-20 sm:h-28 opacity-60 animate-snake-crown pointer-events-none -z-20">
            <svg viewBox="0 0 200 70" fill="none" className="w-full h-full filter drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]">
              <path
                d="M15 55 Q55 10 100 8 Q145 10 185 55"
                stroke="#d97706"
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M30 60 Q65 18 100 15 Q135 18 170 60"
                stroke="#fbbf24"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>
          </div>
        </div>
      )}

      {/* 3. Forefront: Pure PNG Deity Cutout (Maa Naagdevi - Supreme Deity) */}
      <div className={`relative ${config.container} animate-divine-float z-10 flex items-center justify-center`}>
        <img
          src="/images/naagdevi_maa_transparent.png"
          alt="Maa Naagdevi - Supreme Serpent Goddess PNG Cutout"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          width="400"
          height="400"
          className="w-full h-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Optional Brand Text */}
      {showText && (
        <div className="ml-3 flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="heading-mystic text-lg font-bold text-stone-900">
              Maa Naagdevi
            </span>
            <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded border border-amber-300">
              Siddha
            </span>
          </div>
          <span className="text-[10px] text-amber-800 uppercase tracking-widest font-sans font-medium">
            Naagmata Tantrik Jyotish
          </span>
        </div>
      )}
    </div>
  );
};
