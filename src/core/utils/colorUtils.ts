// Color utility functions for the customization system

export const isValidHexColor = (color: string): boolean => {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexRegex.test(color);
};

export const normalizeHexColor = (color: string): string => {
  if (!color.startsWith('#')) {
    color = '#' + color;
  }
  
  // Convert 3-digit hex to 6-digit
  if (color.length === 4) {
    color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
  }
  
  return color.toUpperCase();
};

export const getContrastColor = (hexColor: string): string => {
  // Remove the # if present
  const hex = hexColor.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return black or white based on luminance
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

export const generateColorPalette = (primaryColor: string) => {
  const colors = {
    primary: primaryColor,
    secondary: adjustBrightness(primaryColor, -20),
    accent: adjustBrightness(primaryColor, 20),
    muted: adjustBrightness(primaryColor, -40),
    light: adjustBrightness(primaryColor, 60),
  };
  
  return colors;
};

export const adjustBrightness = (hexColor: string, percent: number): string => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  const factor = 1 + percent / 100;
  
  const newR = Math.min(255, Math.max(0, Math.round(r * factor)));
  const newG = Math.min(255, Math.max(0, Math.round(g * factor)));
  const newB = Math.min(255, Math.max(0, Math.round(b * factor)));
  
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
};

export const getColorScheme = (schemeName: string) => {
  const schemes = {
    purple: { primary: '#8b5cf6', secondary: '#a855f7', accent: '#c084fc' },
    blue: { primary: '#3b82f6', secondary: '#06b6d4', accent: '#0ea5e9' },
    green: { primary: '#10b981', secondary: '#059669', accent: '#34d399' },
    red: { primary: '#ef4444', secondary: '#dc2626', accent: '#f87171' },
    orange: { primary: '#f97316', secondary: '#ea580c', accent: '#fb923c' },
    pink: { primary: '#ec4899', secondary: '#db2777', accent: '#f472b6' },
    teal: { primary: '#14b8a6', secondary: '#0d9488', accent: '#5eead4' },
    indigo: { primary: '#6366f1', secondary: '#4f46e5', accent: '#a5b4fc' },
    yellow: { primary: '#eab308', secondary: '#ca8a04', accent: '#fde047' },
    gray: { primary: '#6b7280', secondary: '#4b5563', accent: '#9ca3af' },
  };
  
  return schemes[schemeName as keyof typeof schemes] || schemes.purple;
}; 