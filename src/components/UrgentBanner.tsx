import React from 'react';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';

export const UrgentBanner: React.FC = () => {
  const tickerItems = [
    { text: '॥ Om Navakula Naagdevyai Namah ॥', highlight: true },
    { text: '🐍 Shri Maa Naagdevi Siddha Peeth • Top Rated Indian Astrologer in USA, UK, Canada, Australia & Worldwide' },
    { text: '✨ Get Ex-Love Back in 24-48 Hrs • Intercaste Love Marriage Specialist • Husband Wife Dispute Solution' },
    { text: '🔱 35+ Years of Proven Spiritual Austerity — Time-Tested & Authentic Vedic Solutions by Renowned Baba Ji' },
    { text: '🔒 Complete Confidentiality Assured • Sacred Privacy for All International Clients' },
    { text: '📞 24/7 Global Helpline (USA, UK, Canada, Australia, UAE, New Zealand) • Call / WhatsApp: +91 97141 27309' },
    { text: '🌺 Negative Energy Clearance, Authentic Tantrik Vashikaran, Evil Eye Removal & Graha Shanti' },
    { text: '🌟 Active Consultations in All International Time Zones (EST, CST, PST, GMT, AEST, GST) • Call Now' },
  ];

  return (
    <div
      id="sacred-marquee-banner"
      className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-stone-950 py-1.5 sm:py-2 border-b border-amber-400 shadow-sm relative overflow-hidden select-none font-sans z-50"
    >
      <div className="flex items-center">
        {/* Static Left Badge (Pill) linking directly to Services */}
        <div className="shrink-0 z-20 pl-2 pr-1.5 sm:px-4 flex items-center gap-1.5 bg-gradient-to-r from-amber-600 via-amber-600 to-transparent">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-700"></span>
          </span>
          <a
            href="#services"
            className="inline-flex items-center gap-1 bg-stone-950 hover:bg-stone-900 text-yellow-300 hover:text-yellow-200 text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full shadow-xs transition-colors cursor-pointer"
            title="Explore Astrological Services"
          >
            <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
            <span>SERVICES</span>
          </a>
        </div>

        {/* Right-to-Left Continuous Scrolling Track */}
        <div className="overflow-hidden flex-1 relative mask-gradient-edge">
          <div className="animate-marquee-left flex items-center space-x-6 sm:space-x-8 text-xs sm:text-sm font-bold tracking-wide">
            {/* Set 1 */}
            {tickerItems.map((item, index) => (
              <span
                key={`item-1-${index}`}
                className={`inline-flex items-center gap-2 whitespace-nowrap ${
                  item.highlight
                    ? 'text-stone-950 font-black px-2 py-0.5 bg-white/40 rounded-full border border-amber-600/30'
                    : 'text-stone-900'
                }`}
              >
                <span>{item.text}</span>
                <span className="text-amber-800 text-xs opacity-70">◆</span>
              </span>
            ))}

            {/* Set 2 (for seamless loop) */}
            {tickerItems.map((item, index) => (
              <span
                key={`item-2-${index}`}
                className={`inline-flex items-center gap-2 whitespace-nowrap ${
                  item.highlight
                    ? 'text-stone-950 font-black px-2 py-0.5 bg-white/40 rounded-full border border-amber-600/30'
                    : 'text-stone-900'
                }`}
              >
                <span>{item.text}</span>
                <span className="text-amber-800 text-xs opacity-70">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* Quick Direct Call Button on Desktop & Mobile */}
        <div className="shrink-0 z-20 px-2 sm:px-3 hidden sm:flex items-center gap-2 bg-gradient-to-l from-amber-600 via-amber-600 to-transparent">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 bg-stone-900 hover:bg-stone-950 text-yellow-300 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm transition-all hover:scale-105"
          >
            <Phone className="w-3 h-3 text-yellow-400 animate-bounce" />
            <span>{CONTACT_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
