import React, { createContext, useContext, useState, useEffect } from 'react';

export type LanguageMode = 'gu-en' | 'hi' | 'en';

export interface LanguageContextType {
  lang: LanguageMode;
  setLang: (mode: LanguageMode) => void;
  isGujaratiMix: boolean;
  isHindi: boolean;
  isEnglish: boolean;
  detectedRegionName: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectInitialLanguage(): LanguageMode {
  try {
    const saved = localStorage.getItem('naagmata_selected_lang');
    if (saved === 'gu-en' || saved === 'hi' || saved === 'en') {
      return saved as LanguageMode;
    }

    const navLangs = navigator.languages ? [...navigator.languages] : [navigator.language || ''];
    const primary = (navLangs[0] || '').toLowerCase();

    // 1. Explicit Hindi preference in browser/device
    if (primary.startsWith('hi')) {
      return 'hi';
    }

    // 2. Explicit Gujarati preference in browser/device
    if (primary.startsWith('gu')) {
      return 'gu-en';
    }

    // 3. Timezone analysis
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const isIndia = tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta';

    if (!isIndia) {
      // Outside India: Check if user has Indian language installed
      const hasIndianLang = navLangs.some((l) => /^(hi|gu|pa|mr|bn|te|ta|ur)/i.test(l));
      if (!hasIndianLang) {
        // Pure Western / International visitor ("Angrez" / Abroad English native)
        return 'en';
      }
      // If outside India but has Gujarati language, give Gujarati + English mix
      const hasGujarati = navLangs.some((l) => l.toLowerCase().startsWith('gu'));
      if (hasGujarati) return 'gu-en';
      return 'en';
    }

    // In India: Check if any Hindi dialect
    const hasHindi = navLangs.some((l) => l.toLowerCase().startsWith('hi'));
    if (hasHindi) return 'hi';

    // Default for Gujarat & India
    return 'gu-en';
  } catch (e) {
    return 'gu-en';
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<LanguageMode>(() => detectInitialLanguage());
  const [detectedRegionName, setDetectedRegionName] = useState<string>('');

  const setLang = (mode: LanguageMode) => {
    setLangState(mode);
    try {
      localStorage.setItem('naagmata_selected_lang', mode);
      // Also update html lang attribute
      const htmlLang = mode === 'hi' ? 'hi' : mode === 'en' ? 'en' : 'gu';
      document.documentElement.lang = htmlLang;
    } catch (e) {
      // ignore
    }
  };

  // Optional background Geo-detection for higher precision on first visit
  useEffect(() => {
    const saved = localStorage.getItem('naagmata_selected_lang');
    if (saved) return; // User already has a preference, do not override

    // Fast non-blocking client-side IP location hint
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 1800);

    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        clearTimeout(timer);
        if (data && data.country_code) {
          const country = data.country_code.toUpperCase();
          const region = (data.region || '').toLowerCase();
          const city = (data.city || '').toLowerCase();
          setDetectedRegionName(data.city ? `${data.city}, ${data.country_name}` : data.country_name || '');

          // Check if North India (Delhi, UP, Rajasthan, Bihar, MP, Haryana, Punjab, etc.)
          const northIndiaRegions = [
            'delhi', 'national capital territory of delhi', 'uttar pradesh', 'bihar',
            'rajasthan', 'madhya pradesh', 'haryana', 'punjab', 'himachal pradesh',
            'uttarakhand', 'jharkhand', 'chhattisgarh'
          ];
          const isNorthIndia = country === 'IN' && northIndiaRegions.some((r) => region.includes(r) || city.includes(r));

          // Check if Gujarat
          const isGujarat = country === 'IN' && (region.includes('gujarat') || ['ahmedabad', 'surat', 'vadodara', 'rajkot', 'gandhinagar', 'bhavnagar', 'jamnagar'].some((c) => city.includes(c)));

          if (isNorthIndia) {
            setLangState('hi');
          } else if (isGujarat) {
            setLangState('gu-en');
          } else if (country !== 'IN') {
            // Abroad: check if user's browser has gujarati or hindi
            const navLangs = navigator.languages ? [...navigator.languages] : [navigator.language || ''];
            const hasGujarati = navLangs.some((l) => l.toLowerCase().startsWith('gu'));
            const hasHindi = navLangs.some((l) => l.toLowerCase().startsWith('hi'));
            if (hasGujarati) {
              setLangState('gu-en'); // Abroad Gujarati
            } else if (hasHindi) {
              setLangState('hi');
            } else {
              setLangState('en'); // Pure English for Western/Foreign visitor
            }
          }
        }
      })
      .catch(() => {
        // Fallback to initial browser detection already set
      });

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        isGujaratiMix: lang === 'gu-en',
        isHindi: lang === 'hi',
        isEnglish: lang === 'en',
        detectedRegionName,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
