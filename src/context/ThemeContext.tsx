import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorTheme = 'royal-saffron' | 'cosmic-dark' | 'temple-maroon';

interface ThemeOption {
  id: ColorTheme;
  label: string;
  shortLabel: string;
  badge: string;
  bgHex: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'royal-saffron',
    label: 'Royal Saffron & Temple Gold (राजसी भगवा व स्वर्ण)',
    shortLabel: 'Royal Saffron',
    badge: '🚩 भगवा व स्वर्ण',
    bgHex: '#160802',
  },
  {
    id: 'cosmic-dark',
    label: 'Mystic Cosmic Dark / Midnight Gold (गहन कृष्ण व स्वर्ण)',
    shortLabel: 'Midnight Gold',
    badge: '✨ कृष्ण व स्वर्ण',
    bgHex: '#090807',
  },
  {
    id: 'temple-maroon',
    label: 'Sacred Vermillion & Deep Maroon (दिव्य सिंदूर व महरून)',
    shortLabel: 'Temple Maroon',
    badge: '🕉️ सिंदूर व महरून',
    bgHex: '#150508',
  },
];

interface ThemeContextType {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
  toggleTheme: () => void;
  themeLabel: string;
  themeOptions: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to Royal Saffron & Temple Gold per user request
  const [theme, setTheme] = useState<ColorTheme>(() => {
    try {
      const saved = localStorage.getItem('naagmata_theme') as ColorTheme;
      if (saved === 'royal-saffron' || saved === 'cosmic-dark' || saved === 'temple-maroon') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'royal-saffron';
  });

  useEffect(() => {
    try {
      localStorage.setItem('naagmata_theme', theme);
    } catch {
      // ignore
    }

    const currentOpt = THEME_OPTIONS.find(t => t.id === theme) || THEME_OPTIONS[0];
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.setProperty('color-scheme', 'dark');
    root.style.setProperty('background-color', currentOpt.bgHex, 'important');
    if (document.body) {
      document.body.style.setProperty('background-color', currentOpt.bgHex, 'important');
    }

    // Toggle corresponding classes
    root.classList.remove('theme-cosmic-dark', 'theme-royal-saffron', 'theme-temple-maroon');
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'royal-saffron') return 'cosmic-dark';
      if (prev === 'cosmic-dark') return 'temple-maroon';
      return 'royal-saffron';
    });
  };

  const currentTheme = THEME_OPTIONS.find(t => t.id === theme) || THEME_OPTIONS[0];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        themeLabel: currentTheme.label,
        themeOptions: THEME_OPTIONS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
