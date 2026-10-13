import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorTheme = 'sacred-parchment' | 'cosmic-dark' | 'royal-saffron';

interface ThemeOption {
  id: ColorTheme;
  label: string;
  shortLabel: string;
  badge: string;
  bgHex: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'sacred-parchment',
    label: 'Sacred Golden Cream / Divine Parchment (पवित्र स्वर्ण व क्रीम)',
    shortLabel: 'Golden Cream',
    badge: '📜 स्वर्ण व क्रीम',
    bgHex: '#fdfcf7',
  },
  {
    id: 'cosmic-dark',
    label: 'Mystic Cosmic Dark / Midnight Gold (गहन कृष्ण व स्वर्ण)',
    shortLabel: 'Midnight Gold',
    badge: '✨ कृष्ण व स्वर्ण',
    bgHex: '#090807',
  },
  {
    id: 'royal-saffron',
    label: 'Royal Saffron & Temple Gold (राजसी भगवा व स्वर्ण)',
    shortLabel: 'Royal Saffron',
    badge: '🚩 भगवा व स्वर्ण',
    bgHex: '#160802',
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
  // Default to Sacred Golden Cream / Divine Parchment (#fdfcf7) as shown in user's 2.png screenshot
  const [theme, setTheme] = useState<ColorTheme>(() => {
    try {
      const version = localStorage.getItem('naagmata_theme_v2');
      if (!version) {
        localStorage.setItem('naagmata_theme_v2', 'parchment_default');
        localStorage.setItem('naagmata_theme', 'sacred-parchment');
        return 'sacred-parchment';
      }
      const saved = localStorage.getItem('naagmata_theme') as ColorTheme;
      if (saved && (saved === 'sacred-parchment' || saved === 'cosmic-dark' || saved === 'royal-saffron')) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'sacred-parchment';
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
    root.style.setProperty('color-scheme', theme === 'sacred-parchment' ? 'light' : 'dark');
    root.style.setProperty('background-color', currentOpt.bgHex, 'important');
    if (document.body) {
      document.body.style.setProperty('background-color', currentOpt.bgHex, 'important');
      document.body.style.setProperty('color', theme === 'sacred-parchment' ? '#1c1917' : '#fffdf5', 'important');
    }

    // Toggle corresponding classes
    root.classList.remove('theme-sacred-parchment', 'theme-cosmic-dark', 'theme-royal-saffron');
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'sacred-parchment') return 'cosmic-dark';
      if (prev === 'cosmic-dark') return 'royal-saffron';
      return 'sacred-parchment';
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
