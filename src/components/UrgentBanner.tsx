import React from 'react';
import { Sparkles, Phone, Lock } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface TickerItem {
  text: string;
  highlight?: boolean;
  href?: string;
  badgeClass?: string;
  icon?: 'phone' | 'sparkles' | 'lock';
}

export const UrgentBanner: React.FC = React.memo(() => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].ticker;

  const tickerItems: TickerItem[] = [
    { text: t.verse, highlight: true, href: '#sacred-darshan' },
    { text: t.gujaratPromo, highlight: true, href: '#international-seo' },
    { text: t.brandTag },
    {
      text: t.parIstriTag,
      highlight: true,
      href: '#par-istri-highlight',
      badgeClass: 'bg-red-600/30 text-yellow-200 border border-red-400/80 font-extrabold px-3 py-0.5 rounded-full shadow-xs',
      icon: 'lock'
    },
    { text: t.servicesTag, highlight: true, href: '#services', icon: 'sparkles' },
    {
      text: t.santanTag,
      highlight: true,
      href: '#services',
      badgeClass: 'bg-emerald-500/20 text-emerald-200 border border-emerald-400/60 font-extrabold px-3 py-0.5 rounded-full shadow-xs',
      icon: 'sparkles'
    },
    {
      text: t.guptDhanTag,
      highlight: true,
      href: '#services',
      badgeClass: 'bg-yellow-500/20 text-yellow-200 border border-yellow-400/60 font-extrabold px-3 py-0.5 rounded-full shadow-xs',
      icon: 'sparkles'
    },
    { text: t.disputesTag },
    { text: t.trustTag },
    { text: t.helplineTag, highlight: true, href: `tel:${CONTACT_INFO.phoneRaw}`, icon: 'phone' },
  ];

  const defaultHighlightClass = 'bg-amber-400/20 text-amber-300 border border-amber-400/50 font-extrabold px-3 py-0.5 rounded-full shadow-2xs';

  const renderIcon = (icon?: string) => {
    if (icon === 'phone') return <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
    if (icon === 'lock') return <Lock className="w-3.5 h-3.5 text-yellow-300 shrink-0" />;
    if (icon === 'sparkles') return <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
    return null;
  };

  const renderItemContent = (item: TickerItem, keyPrefix: string, index: number) => {
    const itemClass = item.badgeClass
      ? item.badgeClass
      : item.highlight
      ? defaultHighlightClass
      : 'text-stone-200 hover:text-white';

    if (item.href) {
      return (
        <a
          key={`${keyPrefix}-${index}`}
          href={item.href}
          className={`inline-flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${itemClass}`}
        >
          {renderIcon(item.icon)}
          <span className="drop-shadow-xs">{item.text}</span>
          <span className="text-amber-400/80 text-xs">◆</span>
        </a>
      );
    }

    return (
      <span
        key={`${keyPrefix}-${index}`}
        className={`inline-flex items-center gap-2 whitespace-nowrap shrink-0 ${itemClass}`}
      >
        {renderIcon(item.icon)}
        <span className="drop-shadow-xs">{item.text}</span>
        <span className="text-amber-400/80 text-xs">◆</span>
      </span>
    );
  };

  return (
    <div
      id="sacred-marquee-banner"
      className="bg-gradient-to-r from-stone-950 via-zinc-900 to-stone-950 text-white py-2 border-b border-amber-500/30 shadow-xs relative overflow-hidden select-none font-sans w-full max-w-full"
      style={{ contain: 'paint layout' }}
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

      {/* 100% Full-Width Continuous Scrolling Track - Ultra Crisp, 60fps Smooth */}
      <div className="overflow-hidden w-full max-w-full relative" style={{ contain: 'paint' }}>
        <div className="animate-marquee-left flex items-center space-x-6 sm:space-x-8 text-[11px] sm:text-xs font-semibold tracking-wide">
          {/* Set 1 */}
          {tickerItems.map((item, index) => renderItemContent(item, 'item-1', index))}

          {/* Set 2 (for seamless infinite loop) */}
          {tickerItems.map((item, index) => renderItemContent(item, 'item-2', index))}
        </div>
      </div>
    </div>
  );
});
