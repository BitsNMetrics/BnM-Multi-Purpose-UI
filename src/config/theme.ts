export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
  };
  fonts: {
    sans: string;
    mono: string;
    display: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
}

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#3b82f6',
    secondary: '#0ea5e9',
    accent: '#8b5cf6',
    background: '#ffffff',
    foreground: '#0f172a',
    muted: '#64748b',
    border: '#e2e8f0',
  },
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'JetBrains Mono, monospace',
    display: 'Poppins, system-ui, sans-serif',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
};

export const darkTheme: ThemeConfig = {
  ...defaultTheme,
  colors: {
    primary: '#3b82f6',
    secondary: '#0ea5e9',
    accent: '#8b5cf6',
    background: '#0f172a',
    foreground: '#f8fafc',
    muted: '#94a3b8',
    border: '#334155',
  },
};

export const themePresets = {
  modern: {
    primary: '#6366f1',
    secondary: '#06b6d4',
    accent: '#f59e0b',
  },
  corporate: {
    primary: '#1e40af',
    secondary: '#059669',
    accent: '#dc2626',
  },
  creative: {
    primary: '#7c3aed',
    secondary: '#ec4899',
    accent: '#f97316',
  },
  minimal: {
    primary: '#374151',
    secondary: '#6b7280',
    accent: '#9ca3af',
  },
  vibrant: {
    primary: '#ef4444',
    secondary: '#10b981',
    accent: '#f59e0b',
  },
} as const;

export type ThemePreset = keyof typeof themePresets; 