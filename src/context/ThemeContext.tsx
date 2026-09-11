import React, { createContext, useContext, useEffect } from 'react';

export type VedicTheme = 'light-royal';

export interface ThemeConfig {
  id: VedicTheme;
  name: string;
  nameHi: string;
  description: string;
  icon: string;
  dotColor: string;
  bgSanctum: string;
  cardBg: string;
  cardSubtle: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  borderClass: string;
  borderSubtle: string;
  accentColor: string;
  glowColor: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  isDark: boolean;
}

export const SWARNA_MANDIR_THEME: ThemeConfig = {
  id: 'light-royal',
  name: 'Swarna Mandir Sandalwood',
  nameHi: 'Golden Temple Sandalwood',
  description: 'Imperial Royal Temple Gold & Fragrant Sandalwood Cream',
  icon: '✨',
  dotColor: 'bg-yellow-500',
  bgSanctum: '#fdfcf7',
  cardBg: '#ffffff',
  cardSubtle: '#fefce8',
  textPrimary: '#2a2203',
  textSecondary: '#544607',
  textMuted: '#713f12',
  borderClass: 'border-yellow-200/80',
  borderSubtle: 'border-yellow-100',
  accentColor: '#ca8a04',
  glowColor: 'rgba(202, 138, 4, 0.22)',
  gradientFrom: '#fef08a',
  gradientVia: '#fef9c3',
  gradientTo: '#fdfcf7',
  isDark: false,
};

export const THEME_CONFIGS: Record<VedicTheme, ThemeConfig> = {
  'light-royal': SWARNA_MANDIR_THEME,
};

interface ThemeContextType {
  theme: VedicTheme;
  setTheme: (theme: VedicTheme) => void;
  themeConfig: ThemeConfig;
  allThemes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme: VedicTheme = 'light-royal';

  useEffect(() => {
    localStorage.setItem('naagmata_light_theme', 'light-royal');
    const root = document.documentElement;
    root.setAttribute('data-theme', 'light-royal');
    root.style.colorScheme = 'light';
    if (document.body) {
      document.body.style.colorScheme = 'light';
    }

    const config = SWARNA_MANDIR_THEME;
    root.style.setProperty('--bg-sanctum', config.bgSanctum);
    root.style.setProperty('--bg-card', config.cardBg);
    root.style.setProperty('--bg-card-subtle', config.cardSubtle);
    root.style.setProperty('--text-primary', config.textPrimary);
    root.style.setProperty('--text-secondary', config.textSecondary);
    root.style.setProperty('--text-muted', config.textMuted);
    root.style.setProperty('--border-glow', config.glowColor);
    root.style.setProperty('--accent-primary', config.accentColor);
    root.style.setProperty('--hero-grad-from', config.gradientFrom);
    root.style.setProperty('--hero-grad-via', config.gradientVia);
    root.style.setProperty('--hero-grad-to', config.gradientTo);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: () => {},
        themeConfig: SWARNA_MANDIR_THEME,
        allThemes: [SWARNA_MANDIR_THEME],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useVedicTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useVedicTheme must be used within a ThemeProvider');
  }
  return context;
};
