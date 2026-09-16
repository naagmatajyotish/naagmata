import React, { useState, useRef, useEffect } from 'react';
import { Globe2, ChevronDown, Check, Sparkles } from 'lucide-react';
import { useLanguage, LanguageMode } from '../context/LanguageContext';

export const LanguageSelector: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { lang, setLang, detectedRegionName } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languageOptions: {
    id: LanguageMode;
    label: string;
    subLabel: string;
    flag: string;
    badge: string;
  }[] = [
    {
      id: 'gu-en',
      label: 'ગુજરાતી + English',
      subLabel: 'ગુજરાત અને NRI ગુજરાતીઓ માટે',
      flag: '🕉️',
      badge: 'Gujarat & NRI'
    },
    {
      id: 'hi',
      label: 'हिन्दी (Hindi)',
      subLabel: 'उत्तर भारत (दिल्ली, यूपी, बिहार, राजस्थान)',
      flag: '🇮🇳',
      badge: 'North India'
    },
    {
      id: 'en',
      label: 'Pure English',
      subLabel: 'USA, UK, Canada, Australia & Global',
      flag: '🌍',
      badge: 'Global / Western'
    }
  ];

  const currentOption = languageOptions.find((opt) => opt.id === lang) || languageOptions[0];

  return (
    <div ref={dropdownRef} className="relative inline-block text-left select-none">
      {/* Selector Trigger Button */}
      <button
        id="language-switcher-button"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`inline-flex items-center gap-1.5 rounded-full border border-amber-300/80 bg-amber-50/90 hover:bg-amber-100 text-stone-900 font-bold transition-all shadow-2xs hover:shadow-xs cursor-pointer ${
          compact
            ? 'px-2 py-1 text-[11px]'
            : 'px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-xs'
        }`}
        aria-expanded={dropdownOpen}
        aria-label="Select Language and Audience Mode"
      >
        <Globe2 className="w-3.5 h-3.5 text-amber-700 shrink-0 animate-spin-slow" />
        <span className="shrink-0">{currentOption.flag}</span>
        <span className="font-semibold truncate max-w-[95px] sm:max-w-none">
          {compact ? currentOption.badge : currentOption.label}
        </span>
        <ChevronDown className={`w-3 h-3 text-stone-600 shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div
          id="language-dropdown-menu"
          className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-white border-2 border-amber-300 shadow-2xl z-50 p-2 text-stone-900 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-2 border-b border-amber-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Select Language / भाषा चुनें</span>
            </div>
            {detectedRegionName && (
              <span className="text-[10px] text-stone-500 font-medium bg-stone-100 px-2 py-0.5 rounded-full">
                📍 {detectedRegionName}
              </span>
            )}
          </div>

          <div className="space-y-1.5 pt-1.5">
            {languageOptions.map((opt) => {
              const isSelected = opt.id === lang;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setLang(opt.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-100/90 text-amber-950 font-bold border border-amber-300'
                      : 'hover:bg-amber-50/80 text-stone-700'
                  }`}
                >
                  <span className="text-xl shrink-0 mt-0.5">{opt.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-extrabold text-stone-900">
                        {opt.label}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-white border border-stone-200 text-stone-600">
                        {opt.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                      {opt.subLabel}
                    </p>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-amber-700 shrink-0 mt-1" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-2 pt-2 border-t border-amber-100 px-2 text-[10px] text-stone-500 text-center">
            স্বતંત્ર સ્વયંસંચાલિત ભાષા શોધ (Auto-detected for your location)
          </div>
        </div>
      )}
    </div>
  );
};
