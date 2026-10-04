import React, { createContext, useContext, useState, useEffect } from 'react';

export type LanguageMode = 'hi' | 'gu-en' | 'en';

export interface LanguageContextType {
  lang: LanguageMode;
  setLang: (mode: LanguageMode) => void;
  isGujaratiMix: boolean;
  isHindi: boolean;
  isEnglish: boolean;
  detectedRegionName: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Website language permanently set to Hindi as requested
  const [lang] = useState<LanguageMode>('hi');

  const setLang = (_mode: LanguageMode) => {
    try {
      localStorage.setItem('naagmata_selected_lang', 'hi');
      document.documentElement.lang = 'hi';
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem('naagmata_selected_lang', 'hi');
      document.documentElement.lang = 'hi';
    } catch {
      // ignore
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        lang: 'hi',
        setLang,
        isGujaratiMix: false,
        isHindi: true,
        isEnglish: false,
        detectedRegionName: 'भारत',
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

