import React, { createContext, useContext, useState } from 'react';
import type { TemplateConfig } from '../../config/templates';
import { defaultTemplates } from '../../config/templates';

interface TemplateContextType {
  selectedTemplate: TemplateConfig | null;
  setSelectedTemplate: (template: TemplateConfig | null) => void;
  templates: TemplateConfig[];
  currentPage: string;
  setCurrentPage: (page: string) => void;
  customConfig: Partial<TemplateConfig['config']>;
  updateCustomConfig: (updates: Partial<TemplateConfig['config']>) => void;
  resetCustomConfig: () => void;
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error('useTemplate must be used within a TemplateProvider');
  }
  return context;
};

interface TemplateProviderProps {
  children: React.ReactNode;
  initialTemplate?: string;
}

export const TemplateProvider: React.FC<TemplateProviderProps> = ({
  children,
  initialTemplate,
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateConfig | null>(
    initialTemplate 
      ? defaultTemplates.find(t => t.id === initialTemplate) || null
      : null
  );
  
  const [currentPage, setCurrentPage] = useState('hero');
  const [customConfig, setCustomConfig] = useState<Partial<TemplateConfig['config']>>({});

  const updateCustomConfig = (updates: Partial<TemplateConfig['config']>) => {
    setCustomConfig(prev => ({ ...prev, ...updates }));
  };

  const resetCustomConfig = () => {
    setCustomConfig({});
  };

  const value: TemplateContextType = {
    selectedTemplate,
    setSelectedTemplate,
    templates: defaultTemplates,
    currentPage,
    setCurrentPage,
    customConfig,
    updateCustomConfig,
    resetCustomConfig,
  };

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
}; 