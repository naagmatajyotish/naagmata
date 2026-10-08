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
      className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 text-center py-14 md:py-24 overflow-hidden bg-gradient-to-b from-amber-50/70 via-amber-100/30 to-[#fdfcf7] w-full max-w-full"
    >
      {/* Background starlight & sacred geometry pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Ambient warm glow bubbles */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] max-w-[100vw] rounded-full pointer-events-none opacity-40 bg-[radial-gradient(circle,rgba(217,119,6,0.25)_0%,transparent_70%)]"
      ></div>
      <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 max-w-[100vw] rounded-full pointer-events-none opacity-30 bg-[radial-gradient(circle,rgba(252,211,77,0.3)_0%,transparent_70%)]"></div>

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
                <span className="font-['Noto_Sans_Devanagari',sans-serif]">श्री माँ नागदेवी सिद्ध पीठ • उज्जैन एवं हरिद्वार</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Sacred Badge - Guaranteed Single-Line Alignment */}
        <div className="inline-flex items-center justify-center gap-2 bg-white/95 border border-amber-300 px-3.5 sm:px-5 py-1.5 rounded-full backdrop-blur-sm shadow-xs max-w-[95vw]">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
          <p className="text-amber-900 font-bold uppercase tracking-normal sm:tracking-wide text-[11px] xs:text-xs sm:text-sm whitespace-nowrap truncate">
            विश्व प्रसिद्ध वैदिक ज्योतिषी एवं समस्त समस्या समाधान विशेषज्ञ
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="heading-mystic text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2a2203]">
          <span className="block mb-2 sm:mb-3 leading-[1.35] sm:leading-[1.3] pt-1">
            प्रेम संबंध, विवाह बाधा, गुप्त धन एवं पारिवारिक कलह का समाधान
          </span>
          <span className="inline-block py-1 px-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 leading-[1.35] sm:leading-[1.3]">
            प्रामाणिक वैदिक ज्योतिष एवं माँ नागदेवी सिद्ध अनुष्ठान द्वारा
          </span>
        </h1>

        {/* Sacred Chanting Verse */}
        <div className="bg-amber-100/60 border border-amber-200/80 py-1.5 px-4 rounded-full max-w-xl mx-auto">
          <p className="text-amber-900 text-xs sm:text-sm font-serif tracking-wider font-semibold">
            ॥ ॐ नवकुल नागदेव्यै च विद्महे विषदन्तायै धीमहि तन्नो सर्पः प्रचोदयात् ॥
          </p>
        </div>

        {/* Subtitle - Bold and Properly Aligned */}
        <p className="text-[#2a2203] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-bold text-center px-2">
          क्या आप प्रेम में बढ़ती दूरी, माता-पिता की असहमति, विवाह में रुकावट, ब्रेकअप, गुप्त धन बाधा या पति-पत्नी के तनाव से व्यथित हैं? पूज्य बाबाजी माँ नागदेवी की दिव्य कृपा और वैदिक ज्योतिष द्वारा देते हैं 100% गोपनीय और सात्विक समाधान।
        </p>

        {/* Key Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-2 text-xs">
          <div className="flex items-center justify-center gap-2 bg-white/90 border border-amber-200 py-3 px-3 rounded-2xl text-stone-800 shadow-xs hover:border-amber-400 transition-colors">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-semibold">वैदिक मार्गदर्शन</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/90 border border-amber-200 py-3 px-3 rounded-2xl text-stone-800 shadow-xs hover:border-amber-400 transition-colors">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-semibold">100% पूर्णतः गोपनीय</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/90 border border-amber-200 py-3 px-3 rounded-2xl text-stone-800 shadow-xs hover:border-amber-400 transition-colors">
            <Flame className="w-4 h-4 text-orange-600 shrink-0" />
            <span className="font-semibold">सात्विक हवन अनुष्ठान</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/90 border border-amber-200 py-3 px-3 rounded-2xl text-stone-800 shadow-xs hover:border-amber-400 transition-colors">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
            <span className="font-semibold">35+ वर्षों का अनुभव</span>
          </div>
        </div>

        {/* Call to Actions - Direct Call as First & Highest Priority */}
        <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-3xl mx-auto w-full">
          <a
            id="hero-call-btn"
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="w-full sm:w-auto flex-1 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black px-6 sm:px-8 py-4 sm:py-5 rounded-2xl flex items-center justify-center gap-4 transition-all transform hover:-translate-y-1 shadow-2xl shadow-amber-600/40 cursor-pointer border-2 border-yellow-300 ring-4 ring-amber-400/30 active:scale-98"
          >
            <Phone className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 animate-bounce text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
            <span className="flex flex-col items-center justify-center text-center leading-tight">
              <span className="text-lg xs:text-xl sm:text-2xl font-black text-white whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] tracking-wide">
                सीधा फोन करें बाबाजी को:
              </span>
              <span className="text-2xl xs:text-3xl sm:text-4xl font-black tracking-wider whitespace-nowrap text-yellow-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] pt-0.5">
                +91&nbsp;97141&nbsp;27309
              </span>
            </span>
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto bg-stone-900 hover:bg-stone-950 text-amber-300 font-black px-7 sm:px-9 py-4 sm:py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-stone-900/30 cursor-pointer border-2 border-amber-400/80 whitespace-nowrap active:scale-98"
          >
            <Sparkles className="w-6 h-6 text-yellow-300 shrink-0" />
            <span className="text-base sm:text-lg md:text-xl font-black tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">समस्त सेवाएं एवं अनुष्ठान देखें</span>
            <ArrowDown className="w-5 h-5 text-amber-400 shrink-0" />
          </a>
        </div>

        {/* Call Preference Notification Pill - Properly Aligned & Centered */}
        <div className="pt-2 flex items-center justify-center px-3">
          <div className="inline-flex items-center justify-center gap-2 bg-amber-100/90 border border-amber-300/80 px-4 py-2 rounded-2xl sm:rounded-full text-xs font-bold text-amber-900 shadow-2xs text-center max-w-xl">
            <Phone className="w-3.5 h-3.5 text-amber-700 animate-pulse shrink-0 self-center" />
            <span className="leading-snug text-center">
              <span>तत्काल एवं सटीक समाधान हेतु सीधा फोन कॉल करें</span>
              <span className="mx-1.5 text-amber-600 font-semibold">•</span>
              <span className="text-amber-950 font-black">24/7 निःशुल्क प्रारंभिक परामर्श</span>
            </span>
          </div>
        </div>

        {/* Special Highlight Pills for Key Sacred Anushthans */}
        <div className="pt-1 flex flex-col items-center justify-center gap-2 px-3">
          <a
            href="#gupt-dhan-highlight"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500/15 via-amber-500/20 to-yellow-500/15 hover:from-yellow-500/25 hover:to-amber-500/30 border border-yellow-400/80 px-4 py-1.5 rounded-full text-xs font-bold text-amber-950 shadow-xs text-center transition-all hover:scale-[1.02] max-w-xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse shrink-0" />
            <span>विशेष साधना: गुप्त धन व गड़ा धन सिद्धि (माँ नागदेवी व कुबेर महायज्ञ)</span>
            <span className="text-amber-700 font-extrabold text-[11px]">→</span>
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500/15 via-orange-500/20 to-amber-500/15 hover:from-amber-500/25 hover:to-orange-500/30 border border-amber-400/80 px-4 py-1.5 rounded-full text-xs font-bold text-amber-950 shadow-xs text-center transition-all hover:scale-[1.02] max-w-xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse shrink-0" />
            <span>विशेष अनुष्ठान: कामदेव-रति आकर्षण साधना एवं दांपत्य सुख</span>
            <span className="text-amber-700 font-extrabold text-[11px]">→</span>
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500/15 via-orange-500/20 to-amber-500/15 hover:from-red-500/25 hover:to-orange-500/30 border border-orange-400/80 px-4 py-1.5 rounded-full text-xs font-bold text-orange-950 shadow-xs text-center transition-all hover:scale-[1.02] max-w-xl"
          >
            <Shield className="w-3.5 h-3.5 text-orange-700 shrink-0" />
            <span>विशेष अनुष्ठान: पति की मदिरा/व्यसन मुक्ति एवं राहु शांति</span>
            <span className="text-orange-700 font-extrabold text-[11px]">→</span>
          </a>

          <a
            href="#par-istri-highlight"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600/15 via-rose-500/20 to-amber-500/15 hover:from-red-600/25 hover:to-rose-500/30 border border-red-400/80 px-4 py-1.5 rounded-full text-xs font-bold text-red-950 shadow-xs text-center transition-all hover:scale-[1.02] max-w-xl"
          >
            <Shield className="w-3.5 h-3.5 text-red-700 shrink-0" />
            <span>विशेष अनुष्ठान: पति का पर-स्त्री मोह, गुप्त आकर्षण एवं सौतन बाधा निवारण</span>
            <span className="text-red-700 font-extrabold text-[11px]">→</span>
          </a>
        </div>

        {/* Direct consultation hint & live activity badge - Centered Unit */}
        <div className="pt-3 flex items-center justify-center px-4 text-xs font-medium text-stone-700">
          <div className="inline-flex items-center justify-center gap-2 text-center max-w-xl">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <p className="leading-snug text-center font-semibold text-stone-800">
              {t.subActivity}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
