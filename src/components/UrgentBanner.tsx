import React from 'react';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';

export const UrgentBanner: React.FC = () => {
  const tickerItems = [
    { text: '॥ Om Navakula Naagdevyai Namah ॥', highlight: true, href: '#sacred-darshan' },
    { text: '🐍 Shri Maa Naagdevi Siddha Peeth • Top Rated Indian Astrologer & Vashikaran Specialist in USA, UK, Canada, Australia & Worldwide' },
    { text: '✨ Explore Authentic Vedic Vashikaran & Shanti Havans', highlight: true, href: '#services' },
    { text: '🔱 Love Problem Solution & Vashikaran • Intercaste Marriage Specialist • Husband Wife Dispute Solution' },
    { text: '🔒 35+ Years of Proven Vedic Lineage — 100% Confidential Vashikaran Consultations' },
    { text: '📞 24/7 Global Helpline: +91 97141 27309 (Call / WhatsApp Baba Ji)', highlight: true, href: `tel:${CONTACT_INFO.phoneRaw}` },
    { text: '🌺 Negative Energy Cleansing, Pure Sattvic Vashikaran & Consecrated Raksha Kavach' },
    { text: '🌟 Consultations Available in All Time Zones (EST, CST, PST, GMT, AEST, GST) • Call Now' },
  ];

  return (
    <div
      id="sacred-marquee-banner"
      className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-stone-950 py-1 sm:py-1.5 border-b border-amber-400/80 shadow-xs relative overflow-hidden select-none font-sans w-full max-w-full"
    >
      {/* Subtle edge fade at screen boundaries */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-amber-600 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-amber-600 to-transparent z-10" />

      {/* 100% Full-Width Continuous Scrolling Track - Zero Overlap, Clean Flow */}
      <div className="overflow-hidden w-full max-w-full relative">
        <div className="animate-marquee-left flex items-center space-x-6 sm:space-x-8 text-[11px] sm:text-xs font-bold tracking-wide">
          {/* Set 1 */}
          {tickerItems.map((item, index) =>
            item.href ? (
              <a
                key={`item-1-${index}`}
                href={item.href}
                className={`inline-flex items-center gap-2 whitespace-nowrap transition-transform hover:scale-105 active:scale-95 cursor-pointer ${
                  item.highlight
                    ? 'text-stone-950 font-black px-2.5 py-0.5 bg-white/70 hover:bg-white rounded-full border border-amber-600/40 shadow-xs'
                    : 'text-stone-900 hover:text-stone-950'
                }`}
              >
                {item.href.startsWith('tel') && <Phone className="w-3 h-3 text-amber-900 animate-bounce shrink-0" />}
                {item.href === '#services' && <Sparkles className="w-3 h-3 text-amber-900 animate-pulse shrink-0" />}
                <span>{item.text}</span>
                <span className="text-amber-800 text-xs opacity-70">◆</span>
              </a>
            ) : (
              <span
                key={`item-1-${index}`}
                className={`inline-flex items-center gap-2 whitespace-nowrap ${
                  item.highlight
                    ? 'text-stone-950 font-black px-2.5 py-0.5 bg-white/70 rounded-full border border-amber-600/40 shadow-xs'
                    : 'text-stone-900'
                }`}
              >
                <span>{item.text}</span>
                <span className="text-amber-800 text-xs opacity-70">◆</span>
              </span>
            )
          )}

          {/* Set 2 (for seamless infinite loop) */}
          {tickerItems.map((item, index) =>
            item.href ? (
              <a
                key={`item-2-${index}`}
                href={item.href}
                className={`inline-flex items-center gap-2 whitespace-nowrap transition-transform hover:scale-105 active:scale-95 cursor-pointer ${
                  item.highlight
                    ? 'text-stone-950 font-black px-2.5 py-0.5 bg-white/70 hover:bg-white rounded-full border border-amber-600/40 shadow-xs'
                    : 'text-stone-900 hover:text-stone-950'
                }`}
              >
                {item.href.startsWith('tel') && <Phone className="w-3 h-3 text-amber-900 animate-bounce shrink-0" />}
                {item.href === '#services' && <Sparkles className="w-3 h-3 text-amber-900 animate-pulse shrink-0" />}
                <span>{item.text}</span>
                <span className="text-amber-800 text-xs opacity-70">◆</span>
              </a>
            ) : (
              <span
                key={`item-2-${index}`}
                className={`inline-flex items-center gap-2 whitespace-nowrap ${
                  item.highlight
                    ? 'text-stone-950 font-black px-2.5 py-0.5 bg-white/70 rounded-full border border-amber-600/40 shadow-xs'
                    : 'text-stone-900'
                }`}
              >
                <span>{item.text}</span>
                <span className="text-amber-800 text-xs opacity-70">◆</span>
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};
