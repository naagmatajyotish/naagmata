import React from 'react';
import { Phone, ShieldCheck, Sparkles, Clock, Star, Flame, ArrowDown, Shield } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { NaagdeviLogo } from './NaagdeviLogo';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Hero: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].hero;

  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 text-center py-14 md:py-24 overflow-hidden bg-gradient-to-b from-[var(--hero-grad-from,#260e03)] via-[var(--hero-grad-via,#1a0902)] to-[var(--hero-grad-to,#130601)] w-full max-w-full text-white"
    >
      {/* Background starlight & sacred geometry pattern */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Ambient warm glow bubbles */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] max-w-[100vw] rounded-full pointer-events-none opacity-30 bg-[radial-gradient(circle,rgba(234,179,8,0.2)_0%,transparent_70%)]"
      ></div>
      <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 max-w-[100vw] rounded-full pointer-events-none opacity-25 bg-[radial-gradient(circle,rgba(245,158,11,0.25)_0%,transparent_70%)]"></div>

      <div className="max-w-4xl mx-auto space-y-6 relative z-10 w-full">
        {/* Divine Maa Naagdevi Animated Sacred Medallion / Centerpiece */}
        <div className="flex flex-col items-center justify-center pt-2 pb-2">
          <div className="relative group flex flex-col items-center">
            {/* Animated Photo Logo */}
            <NaagdeviLogo size="hero" glow={true} />

            {/* Sacred Naag-Mani Bottom Blessed Title */}
            <div className="relative z-20 mt-4 sm:mt-5 inline-flex flex-col items-center gap-0.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-stone-950 font-black px-3.5 sm:px-4 py-1.5 rounded-2xl border-2 border-yellow-200 shadow-xl shadow-amber-500/20 max-w-[95vw]">
              <div className="flex flex-wrap items-center justify-center gap-1 text-[11px] xs:text-xs sm:text-sm font-extrabold uppercase tracking-wide text-center">
                <span>🐍</span>
                <span>Naagmata Jyotish • Shri Maa Naagdevi Siddha Peeth</span>
                <span>✨</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-stone-900 font-bold text-center">
                <span className="font-['Noto_Sans_Devanagari',sans-serif]">श्री माँ नागदेवी सिद्ध पीठ • उज्जैन एवं हरिद्वार</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Sacred Badge - Guaranteed Mobile Responsive Alignment */}
        <div className="inline-flex items-center justify-center gap-2 bg-stone-900/90 border border-amber-500/50 px-3.5 sm:px-5 py-1.5 rounded-2xl sm:rounded-full backdrop-blur-sm shadow-md max-w-[95vw]">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 shrink-0" />
          <p className="text-yellow-200 font-bold uppercase tracking-normal sm:tracking-wide text-[10px] xs:text-xs sm:text-sm text-center">
            विश्व प्रसिद्ध वैदिक ज्योतिषी एवं समस्त समस्या समाधान विशेषज्ञ
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="heading-mystic text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
          <span className="block mb-2 sm:mb-3 leading-[1.35] sm:leading-[1.3] pt-1">
            प्रेम संबंध, विवाह बाधा, गुप्त धन एवं पारिवारिक कलह का समाधान
          </span>
          <span className="inline-block py-1 px-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 leading-[1.35] sm:leading-[1.3]">
            प्रामाणिक वैदिक ज्योतिष एवं माँ नागदेवी सिद्ध अनुष्ठान द्वारा
          </span>
        </h1>

        {/* Sacred Chanting Verse */}
        <div className="bg-stone-900/90 border border-amber-500/40 py-2 px-3 sm:px-4 rounded-2xl sm:rounded-full max-w-xl mx-auto">
          <p className="text-yellow-300 text-[11px] xs:text-xs sm:text-sm font-serif tracking-wider font-bold text-center leading-relaxed">
            ॥ ॐ नवकुल नागदेव्यै च विद्महे विषदन्तायै धीमहि तन्नो सर्पः प्रचोदयात् ॥
          </p>
        </div>

        {/* Subtitle - Bold and Properly Aligned */}
        <p className="text-stone-300 text-xs sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-bold text-center px-2">
          क्या आप प्रेम में बढ़ती दूरी, माता-पिता की असहमति, विवाह में रुकावट, ब्रेकअप, गुप्त धन बाधा या पति-पत्नी के तनाव से व्यथित हैं? पूज्य बाबाजी माँ नागदेवी की दिव्य कृपा और वैदिक ज्योतिष द्वारा देते हैं 100% गोपनीय और सात्विक समाधान।
        </p>

        {/* Key Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-2xl mx-auto pt-2 text-[11px] sm:text-xs">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-stone-900/90 border border-amber-500/30 py-2.5 sm:py-3 px-2 sm:px-3 rounded-2xl text-stone-200 shadow-xs hover:border-amber-400 transition-colors text-center">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
            <span className="font-semibold">वैदिक मार्गदर्शन</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-stone-900/90 border border-amber-500/30 py-2.5 sm:py-3 px-2 sm:px-3 rounded-2xl text-stone-200 shadow-xs hover:border-amber-400 transition-colors text-center">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
            <span className="font-semibold">100% पूर्णतः गोपनीय</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-stone-900/90 border border-amber-500/30 py-2.5 sm:py-3 px-2 sm:px-3 rounded-2xl text-stone-200 shadow-xs hover:border-amber-400 transition-colors text-center">
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 shrink-0" />
            <span className="font-semibold">सात्विक हवन अनुष्ठान</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-stone-900/90 border border-amber-500/30 py-2.5 sm:py-3 px-2 sm:px-3 rounded-2xl text-stone-200 shadow-xs hover:border-amber-400 transition-colors text-center">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400 shrink-0" />
            <span className="font-semibold">35+ वर्षों का अनुभव</span>
          </div>
        </div>

        {/* Call to Actions - Direct Call as First & Highest Priority (Properly aligned with large text fitting the box) */}
        <div className="pt-4 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto w-full px-1 sm:px-0">
          <a
            id="hero-call-btn"
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="w-full min-h-[64px] sm:min-h-[76px] bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-stone-950 font-black px-3.5 sm:px-6 py-3.5 sm:py-4.5 rounded-2xl flex items-center justify-center gap-2.5 sm:gap-3.5 transition-all transform hover:-translate-y-1 shadow-2xl shadow-amber-500/30 cursor-pointer border-2 border-yellow-200 ring-4 ring-yellow-400/30 active:scale-98"
          >
            <Phone className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 animate-bounce text-stone-950 drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]" />
            <span className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black tracking-wide whitespace-nowrap text-stone-950 text-center leading-none">
              {CONTACT_INFO.phoneDisplay}
            </span>
          </a>

          <a
            href="#services"
            className="w-full min-h-[64px] sm:min-h-[76px] bg-stone-900 hover:bg-stone-850 text-yellow-300 font-black px-3.5 sm:px-6 py-3.5 sm:py-4.5 rounded-2xl flex items-center justify-center gap-2 sm:gap-3 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-black/60 cursor-pointer border-2 border-amber-500/60 active:scale-98"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 shrink-0" />
            <span className="text-base sm:text-xl md:text-2xl font-black tracking-wide text-center leading-tight">
              समस्त सेवाएं एवं अनुष्ठान देखें
            </span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 shrink-0 hidden xs:inline-block" />
          </a>
        </div>

        {/* Call Preference Notification Pill - Properly Aligned & Centered without overlap */}
        <div className="pt-2 flex items-center justify-center px-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-stone-900/90 border border-amber-500/50 px-3 sm:px-4 py-2 rounded-2xl sm:rounded-full text-[11px] sm:text-xs font-bold text-yellow-200 shadow-2xs text-center max-w-xl">
            <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0 self-center" />
            <span>24/7 हेल्पलाइन: {CONTACT_INFO.phoneDisplay}</span>
            <span className="hidden sm:inline text-amber-500">•</span>
            <span className="text-white font-black">24/7 निःशुल्क प्रारंभिक परामर्श</span>
          </div>
        </div>

        {/* Special Highlight Pills for Key Sacred Anushthans */}
        <div className="pt-1 flex flex-col items-center justify-center gap-2 px-2">
          <a
            href="#gupt-dhan-highlight"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900/90 hover:bg-stone-850 border border-amber-500/50 px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-full text-xs font-bold text-yellow-200 shadow-xs text-center transition-all hover:scale-[1.01] max-w-xl leading-snug"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
            <span>विशेष साधना: गुप्त धन व गड़ा धन सिद्धि (माँ नागदेवी व कुबेर महायज्ञ)</span>
            <span className="text-amber-400 font-extrabold text-[11px]">→</span>
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900/90 hover:bg-stone-850 border border-amber-500/50 px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-full text-xs font-bold text-yellow-200 shadow-xs text-center transition-all hover:scale-[1.01] max-w-xl leading-snug"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
            <span>विशेष अनुष्ठान: कामदेव-रति आकर्षण साधना एवं दांपत्य सुख</span>
            <span className="text-amber-400 font-extrabold text-[11px]">→</span>
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900/90 hover:bg-stone-850 border border-amber-500/50 px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-full text-xs font-bold text-yellow-200 shadow-xs text-center transition-all hover:scale-[1.01] max-w-xl leading-snug"
          >
            <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>विशेष अनुष्ठान: पति की मदिरा/व्यसन मुक्ति एवं राहु शांति</span>
            <span className="text-amber-400 font-extrabold text-[11px]">→</span>
          </a>

          <a
            href="#par-istri-highlight"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900/90 hover:bg-stone-850 border border-amber-500/50 px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-full text-xs font-bold text-yellow-200 shadow-xs text-center transition-all hover:scale-[1.01] max-w-xl leading-snug"
          >
            <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>विशेष अनुष्ठान: पति का पर-स्त्री मोह, गुप्त आकर्षण एवं सौतन बाधा निवारण</span>
            <span className="text-amber-400 font-extrabold text-[11px]">→</span>
          </a>
        </div>

        {/* Direct consultation hint & live activity badge - Centered Unit */}
        <div className="pt-3 flex items-center justify-center px-4 text-xs font-medium text-stone-300">
          <div className="inline-flex items-center justify-center gap-2 text-center max-w-xl">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <p className="leading-snug text-center font-semibold text-amber-200/90">
              {t.subActivity}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
