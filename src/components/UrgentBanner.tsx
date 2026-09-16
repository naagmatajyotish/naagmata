import React from 'react';
import { Sparkles, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const UrgentBanner: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].ticker;

  const tickerItems = [
    { text: t.verse, highlight: true, href: '#sacred-darshan' },
    { text: t.gujaratPromo, highlight: true, href: '#international-seo' },
    { text: t.brandTag },
    { text: t.servicesTag, highlight: true, href: '#services' },
    { text: t.disputesTag },
    { text: t.trustTag },
    { text: t.helplineTag, highlight: true, href: `tel:${CONTACT_INFO.phoneRaw}` },
  ];

  return (
    <div
      id="sacred-marquee-banner"
      className="bg-gradient-to-r from-stone-950 via-zinc-900 to-stone-950 text-white py-2 border-b border-amber-500/30 shadow-sm relative overflow-hidden select-none font-sans w-full max-w-full"
    >
      {/* Subtle edge fade at screen boundaries */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-10"
        style={{
          background: 'linear-gradient(to right, #0c0a09, transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-10"
        style={{
          background: 'linear-gradient(to left, #0c0a09, transparent)',
        }}
      />

      {/* 100% Full-Width Continuous Scrolling Track - Ultra Crisp, High Contrast Dark Banner */}
      <div className="overflow-hidden w-full max-w-full relative">
        <div className="animate-marquee-left flex items-center space-x-6 sm:space-x-8 text-[11px] sm:text-xs font-semibold tracking-wide">
          {/* Set 1 */}
          {tickerItems.map((item, index) =>
            item.href ? (
              <a
                key={`item-1-${index}`}
                href={item.href}
                className={`inline-flex items-center gap-2 whitespace-nowrap transition-transform hover:scale-105 active:scale-95 cursor-pointer ${
                  item.highlight
                    ? 'bg-amber-400/15 hover:bg-amber-400/25 text-amber-300 border border-amber-400/40 font-extrabold px-3 py-0.5 rounded-full shadow-2xs'
                    : 'text-stone-200 hover:text-white'
                }`}
              >
                {item.href.startsWith('tel') && <Phone className="w-3.5 h-3.5 text-amber-400 animate-bounce shrink-0" />}
                {item.href === '#services' && <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />}
                <span className="drop-shadow-xs">{item.text}</span>
                <span className="text-amber-400/80 text-xs">◆</span>
              </a>
            ) : (
              <span
                key={`item-1-${index}`}
                className={`inline-flex items-center gap-2 whitespace-nowrap ${
                  item.highlight
                    ? 'bg-amber-400/15 text-amber-300 border border-amber-400/40 font-extrabold px-3 py-0.5 rounded-full shadow-2xs'
                    : 'text-stone-200'
                }`}
              >
                <span className="drop-shadow-xs">{item.text}</span>
                <span className="text-amber-400/80 text-xs">◆</span>
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
                    ? 'bg-amber-400/15 hover:bg-amber-400/25 text-amber-300 border border-amber-400/40 font-extrabold px-3 py-0.5 rounded-full shadow-2xs'
                    : 'text-stone-200 hover:text-white'
                }`}
              >
                {item.href.startsWith('tel') && <Phone className="w-3.5 h-3.5 text-amber-400 animate-bounce shrink-0" />}
                {item.href === '#services' && <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />}
                <span className="drop-shadow-xs">{item.text}</span>
                <span className="text-amber-400/80 text-xs">◆</span>
              </a>
            ) : (
              <span
                key={`item-2-${index}`}
                className={`inline-flex items-center gap-2 whitespace-nowrap ${
                  item.highlight
                    ? 'bg-amber-400/15 text-amber-300 border border-amber-400/40 font-extrabold px-3 py-0.5 rounded-full shadow-2xs'
                    : 'text-stone-200'
                }`}
              >
                <span className="drop-shadow-xs">{item.text}</span>
                <span className="text-amber-400/80 text-xs">◆</span>
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};
