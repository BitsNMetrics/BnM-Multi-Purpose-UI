import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeConfig, defaultTheme, darkTheme, themePresets, ThemePreset } from '../../config/theme';

interface ThemeContextType {
  theme: ThemeConfig;
  isDark: boolean;
  toggleTheme: () => void;
  setThemePreset: (preset: ThemePreset) => void;
  updateTheme: (updates: Partial<ThemeConfig>) => void;
  themePresets: typeof themePresets;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: ThemePreset;
  initialDarkMode?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = 'modern',
  initialDarkMode = false,
}) => {
  const [isDark, setIsDark] = useState(initialDarkMode);
  const [currentPreset, setCurrentPreset] = useState<ThemePreset>(initialTheme);
  const [customTheme, setCustomTheme] = useState<Partial<ThemeConfig>>({});

  // Get base theme based on dark mode
  const baseTheme = isDark ? darkTheme : defaultTheme;
  
  // Get preset colors
  const presetColors = themePresets[currentPreset];
  
  // Merge themes
  const theme: ThemeConfig = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      ...presetColors,
      ...customTheme.colors,
    },
    ...customTheme,
  };

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Set CSS custom properties
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    // Set dark mode class
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Set font family
    root.style.setProperty('--font-sans', theme.fonts.sans);
    root.style.setProperty('--font-mono', theme.fonts.mono);
    root.style.setProperty('--font-display', theme.fonts.display);
  }, [theme, isDark]);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('landing-kit-theme');
    const savedDarkMode = localStorage.getItem('landing-kit-dark-mode');
    
    if (savedTheme) {
      setCurrentPreset(savedTheme as ThemePreset);
    }
    
    if (savedDarkMode) {
      setIsDark(savedDarkMode === 'true');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('landing-kit-dark-mode', newDarkMode.toString());
  };

  const setThemePreset = (preset: ThemePreset) => {
    setCurrentPreset(preset);
    localStorage.setItem('landing-kit-theme', preset);
  };

  const updateTheme = (updates: Partial<ThemeConfig>) => {
    setCustomTheme(prev => ({ ...prev, ...updates }));
  };

  const value: ThemeContextType = {
    theme,
    isDark,
    toggleTheme,
    setThemePreset,
    updateTheme,
    themePresets,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 