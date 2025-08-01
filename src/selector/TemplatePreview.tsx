import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Settings, Download, Eye, Palette, Type, Image, Search, Zap, Rocket, Sun, Moon, Mail, Code, Save, RotateCcw, Check, Loader2 } from 'lucide-react';
import { useTemplate } from '../core/context/TemplateContext';
import { useTheme } from '../core/context/ThemeContext';
import { Button } from '../core/components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../core/components/Card';
import { cn } from '../core/utils/cn';
import { TemplateComponent } from '../core/utils/templateRegistry';
import { 
  generateStandaloneBuild, 
  generateSourceCode, 
  generateReactComponentExport, 
  generateNextJSProject,
  deployToVercel,
  deployToNetlify,
  deployToGitHubPages,
  downloadFile,
  type ExportConfig,
  type DeploymentConfig
} from '../core/utils/exportUtils';

// Predefined color schemes
const colorSchemes = {
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

// Font options
const fontOptions = [
  { value: 'Inter', label: 'Inter (Modern)', preview: 'Inter' },
  { value: 'Poppins', label: 'Poppins (Friendly)', preview: 'Poppins' },
  { value: 'Roboto', label: 'Roboto (Clean)', preview: 'Roboto' },
  { value: 'Open Sans', label: 'Open Sans (Readable)', preview: 'Open Sans' },
  { value: 'Montserrat', label: 'Montserrat (Elegant)', preview: 'Montserrat' },
  { value: 'Lato', label: 'Lato (Professional)', preview: 'Lato' },
  { value: 'Nunito', label: 'Nunito (Rounded)', preview: 'Nunito' },
  { value: 'Source Sans Pro', label: 'Source Sans Pro (Clean)', preview: 'Source Sans Pro' },
];

export const TemplatePreview: React.FC = () => {
  const { selectedTemplate, setSelectedTemplate, customConfig, updateCustomConfig } = useTemplate();
  const { isDark, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'preview' | 'customize' | 'export'>('preview');
  const [showCustomization, setShowCustomization] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [savedConfigs, setSavedConfigs] = useState<Record<string, any>>({});
  const [currentConfigName, setCurrentConfigName] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [deploymentUrl, setDeploymentUrl] = useState<string | null>(null);

  if (!selectedTemplate) {
    return null;
  }

  const handleBack = () => {
    setSelectedTemplate(null);
  };

  const handleExport = async (format: 'standalone' | 'source' | 'react-component' | 'nextjs') => {
    setIsExporting(true);
    setExportProgress(0);
    
    try {
      const projectInfo = {
        name: customConfig.brandName || selectedTemplate.name,
        description: customConfig.tagline || selectedTemplate.description,
        author: 'Your Name',
        license: 'MIT'
      };
      
      const buildOptions = {
        minify: true,
        includeDependencies: true,
        generateSitemap: true,
        optimizeImages: true
      };
      
      const exportConfig: ExportConfig = {
        templateId: selectedTemplate.id,
        customConfig,
        exportFormat: format,
        buildOptions,
        projectInfo
      };
      
      setExportProgress(25);
      
      let blob: Blob;
      let filename: string;
      
      switch (format) {
        case 'standalone':
          blob = await generateStandaloneBuild(exportConfig);
          filename = `${projectInfo.name.toLowerCase().replace(/\s+/g, '-')}-standalone.zip`;
          break;
        case 'source':
          blob = await generateSourceCode(exportConfig);
          filename = `${projectInfo.name.toLowerCase().replace(/\s+/g, '-')}-source.zip`;
          break;
        case 'react-component':
          blob = await generateReactComponentExport(exportConfig);
          filename = `${projectInfo.name.toLowerCase().replace(/\s+/g, '-')}-component.zip`;
          break;
        case 'nextjs':
          blob = await generateNextJSProject(exportConfig);
          filename = `${projectInfo.name.toLowerCase().replace(/\s+/g, '-')}-nextjs.zip`;
          break;
        default:
          throw new Error('Invalid export format');
      }
      
      setExportProgress(75);
      
      downloadFile(blob, filename);
      
      setExportProgress(100);
      
      // Show success message
      setTimeout(() => {
        setIsExporting(false);
        setExportProgress(0);
      }, 1000);
      
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
      setIsExporting(false);
      setExportProgress(0);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email captured:', emailInput);
    setShowEmailModal(false);
    setEmailInput('');
    // Here you would integrate with your email service
  };

  const handleColorSchemeChange = (schemeName: string) => {
    const scheme = colorSchemes[schemeName as keyof typeof colorSchemes];
    updateCustomConfig({
      colors: {
        primary: scheme.primary,
        secondary: scheme.secondary,
        accent: scheme.accent,
      }
    });
  };

  const handleFontChange = (fontValue: string) => {
    updateCustomConfig({ font: fontValue });
  };

  const handleSaveConfig = () => {
    if (currentConfigName.trim()) {
      setSavedConfigs(prev => ({
        ...prev,
        [currentConfigName]: { ...customConfig }
      }));
      setCurrentConfigName('');
    }
  };

  const handleLoadConfig = (configName: string) => {
    const config = savedConfigs[configName];
    if (config) {
      updateCustomConfig(config);
    }
  };

  const handleResetConfig = () => {
    updateCustomConfig({});
  };

  const handleDeploy = async (platform: 'vercel' | 'netlify' | 'github-pages') => {
    setIsDeploying(true);
    
    try {
      const projectInfo = {
        name: customConfig.brandName || selectedTemplate.name,
        description: customConfig.tagline || selectedTemplate.description,
        author: 'Your Name',
        license: 'MIT'
      };
      
      const exportConfig: ExportConfig = {
        templateId: selectedTemplate.id,
        customConfig,
        exportFormat: 'standalone',
        buildOptions: {
          minify: true,
          includeDependencies: true,
          generateSitemap: true,
          optimizeImages: true
        },
        projectInfo
      };
      
      const deploymentConfig: DeploymentConfig = {
        platform,
        projectName: projectInfo.name.toLowerCase().replace(/\s+/g, '-')
      };
      
      let url: string;
      
      switch (platform) {
        case 'vercel':
          url = await deployToVercel(exportConfig, deploymentConfig);
          break;
        case 'netlify':
          url = await deployToNetlify(exportConfig, deploymentConfig);
          break;
        case 'github-pages':
          url = await deployToGitHubPages(exportConfig, deploymentConfig);
          break;
        default:
          throw new Error('Invalid deployment platform');
      }
      
      setDeploymentUrl(url);
      
      // Show success message
      setTimeout(() => {
        setIsDeploying(false);
      }, 1000);
      
    } catch (error) {
      console.error('Deployment failed:', error);
      alert('Deployment failed. Please try again.');
      setIsDeploying(false);
    }
  };

  const tabs = [
    { id: 'preview', label: 'Preview', icon: Eye },
    { id: 'customize', label: 'Customize', icon: Settings },
    { id: 'export', label: 'Export', icon: Download },
  ];

  const getCurrentColors = () => {
    return {
      primary: customConfig.colors?.primary || selectedTemplate.config.colors.primary,
      secondary: customConfig.colors?.secondary || selectedTemplate.config.colors.secondary,
      accent: customConfig.colors?.accent || selectedTemplate.config.colors.accent,
    };
  };

  const currentColors = getCurrentColors();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Top Control Bar */}
      <motion.div 
        className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Templates</span>
              </Button>
              <div className="h-6 w-px bg-slate-300 dark:bg-slate-600" />
              <div>
                <h1 className="text-lg font-semibold text-slate-900 dark:text-white">{selectedTemplate.name}</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {selectedTemplate.description}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              {/* Tab Navigation */}
              <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setActiveTab(tab.id as any)}
                    className={cn(
                      "text-sm font-medium transition-all duration-200",
                      activeTab === tab.id
                        ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    )}
                  >
                    <tab.icon className="h-4 w-4 mr-2" />
                    {tab.label}
                  </Button>
                ))}
              </div>

              {/* Customize Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCustomization(!showCustomization)}
                className={cn(
                  "border-2 font-medium transition-all duration-200",
                  showCustomization
                    ? "border-purple-500 text-purple-600 bg-purple-50 dark:bg-purple-900/20"
                    : "border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-purple-500 hover:text-purple-600"
                )}
              >
                <Settings className="h-4 w-4 mr-2" />
                Customize
              </Button>

              {/* Export Button */}
              <Button
                size="sm"
                onClick={() => handleExport('standalone')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 font-medium"
                disabled={isExporting}
              >
                {isExporting ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Download className="h-4 w-4 mr-2" />
                )}
                {isExporting ? 'Exporting...' : 'Export'}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Main Preview Area */}
        <div className={cn(
          "flex-1 transition-all duration-300",
          showCustomization ? "mr-80" : "mr-0"
        )}>
          <div className="h-full overflow-auto">
            <AnimatePresence mode="wait">
              {activeTab === 'preview' && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="h-full w-full">
                    <div className="w-full h-full pt-4">
                      <TemplateComponent templateId={selectedTemplate.id} />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'customize' && (
                <motion.div
                  key="customize"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full p-6 overflow-y-auto"
                >
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Customize Template</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-8">
                        {/* Brand Customization */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                              <Type className="h-5 w-5" />
                              <span>Brand & Identity</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">Company Name</label>
                              <input
                                type="text"
                                value={customConfig.brandName || selectedTemplate.config.brandName}
                                onChange={(e) => updateCustomConfig({ brandName: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-600"
                                placeholder="Enter your company name"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-2">Tagline</label>
                              <input
                                type="text"
                                value={customConfig.tagline || selectedTemplate.config.tagline}
                                onChange={(e) => updateCustomConfig({ tagline: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-600"
                                placeholder="Enter your tagline"
                              />
                            </div>
                          </CardContent>
                        </Card>

                        {/* Color Scheme */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                              <Palette className="h-5 w-5" />
                              <span>Color Scheme</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            {/* Predefined Color Schemes */}
                            <div className="mb-6">
                              <label className="block text-sm font-medium mb-3">Quick Color Schemes</label>
                              <div className="grid grid-cols-2 gap-2">
                                {Object.entries(colorSchemes).map(([name, colors]) => (
                                  <button
                                    key={name}
                                    onClick={() => handleColorSchemeChange(name)}
                                    className="flex items-center space-x-2 p-2 rounded-lg border hover:border-purple-300 transition-colors"
                                  >
                                    <div className="flex space-x-1">
                                      <div className="w-3 h-3 rounded" style={{ backgroundColor: colors.primary }}></div>
                                      <div className="w-3 h-3 rounded" style={{ backgroundColor: colors.secondary }}></div>
                                      <div className="w-3 h-3 rounded" style={{ backgroundColor: colors.accent }}></div>
                                    </div>
                                    <span className="text-xs font-medium capitalize">{name}</span>
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Custom Color Pickers */}
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium mb-2">Primary Color</label>
                                <div className="flex space-x-2">
                                  <input
                                    type="color"
                                    value={currentColors.primary}
                                    onChange={(e) => updateCustomConfig({ 
                                      colors: { 
                                        ...currentColors, 
                                        primary: e.target.value 
                                      } 
                                    })}
                                    className="w-12 h-10 rounded-lg border cursor-pointer"
                                  />
                                  <input
                                    type="text"
                                    value={currentColors.primary}
                                    onChange={(e) => updateCustomConfig({ 
                                      colors: { 
                                        ...currentColors, 
                                        primary: e.target.value 
                                      } 
                                    })}
                                    className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-600"
                                    placeholder="#8b5cf6"
                                  />
                                </div>
                              </div>
                              
                              <div>
                                <label className="block text-sm font-medium mb-2">Secondary Color</label>
                                <div className="flex space-x-2">
                                  <input
                                    type="color"
                                    value={currentColors.secondary}
                                    onChange={(e) => updateCustomConfig({ 
                                      colors: { 
                                        ...currentColors, 
                                        secondary: e.target.value 
                                      } 
                                    })}
                                    className="w-12 h-10 rounded-lg border cursor-pointer"
                                  />
                                  <input
                                    type="text"
                                    value={currentColors.secondary}
                                    onChange={(e) => updateCustomConfig({ 
                                      colors: { 
                                        ...currentColors, 
                                        secondary: e.target.value 
                                      } 
                                    })}
                                    className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-600"
                                    placeholder="#a855f7"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="block text-sm font-medium mb-2">Accent Color</label>
                                <div className="flex space-x-2">
                                  <input
                                    type="color"
                                    value={currentColors.accent}
                                    onChange={(e) => updateCustomConfig({ 
                                      colors: { 
                                        ...currentColors, 
                                        accent: e.target.value 
                                      } 
                                    })}
                                    className="w-12 h-10 rounded-lg border cursor-pointer"
                                  />
                                  <input
                                    type="text"
                                    value={currentColors.accent}
                                    onChange={(e) => updateCustomConfig({ 
                                      colors: { 
                                        ...currentColors, 
                                        accent: e.target.value 
                                      } 
                                    })}
                                    className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-600"
                                    placeholder="#c084fc"
                                  />
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Typography */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                              <Type className="h-5 w-5" />
                              <span>Typography</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">Font Family</label>
                              <select
                                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-600"
                                value={customConfig.font || selectedTemplate.config.font}
                                onChange={(e) => handleFontChange(e.target.value)}
                              >
                                {fontOptions.map((font) => (
                                  <option key={font.value} value={font.value}>
                                    {font.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-2">Font Size Scale</label>
                              <select
                                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-600"
                                value={customConfig.fontSize || 'medium'}
                                onChange={(e) => updateCustomConfig({ fontSize: e.target.value })}
                              >
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                              </select>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-8">
                        {/* Layout Options */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                              <Settings className="h-5 w-5" />
                              <span>Layout Options</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">Container Width</label>
                              <select
                                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-600"
                                value={customConfig.containerWidth || 'max-w-7xl'}
                                onChange={(e) => updateCustomConfig({ containerWidth: e.target.value })}
                              >
                                <option value="max-w-4xl">Narrow (4xl)</option>
                                <option value="max-w-6xl">Medium (6xl)</option>
                                <option value="max-w-7xl">Wide (7xl)</option>
                                <option value="max-w-none">Full Width</option>
                              </select>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-2">Section Spacing</label>
                              <select
                                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-600"
                                value={customConfig.sectionSpacing || 'py-20'}
                                onChange={(e) => updateCustomConfig({ sectionSpacing: e.target.value })}
                              >
                                <option value="py-12">Compact</option>
                                <option value="py-16">Standard</option>
                                <option value="py-20">Spacious</option>
                                <option value="py-24">Extra Spacious</option>
                              </select>
                            </div>
                          </CardContent>
                        </Card>

                        {/* SEO Settings */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                              <Search className="h-5 w-5" />
                              <span>SEO & Meta Tags</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">Page Title</label>
                              <input
                                type="text"
                                value={customConfig.seo?.title || selectedTemplate.config.seo?.title}
                                onChange={(e) => updateCustomConfig({ 
                                  seo: { 
                                    ...selectedTemplate.config.seo, 
                                    title: e.target.value 
                                  } 
                                })}
                                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-600"
                                placeholder="Enter page title"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-2">Meta Description</label>
                              <textarea
                                value={customConfig.seo?.description || selectedTemplate.config.seo?.description}
                                onChange={(e) => updateCustomConfig({ 
                                  seo: { 
                                    ...selectedTemplate.config.seo, 
                                    description: e.target.value 
                                  } 
                                })}
                                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-600"
                                rows={3}
                                placeholder="Enter meta description"
                              />
                            </div>
                          </CardContent>
                        </Card>

                        {/* Save/Load Configurations */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                              <Save className="h-5 w-5" />
                              <span>Save Configuration</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex space-x-2">
                              <input
                                type="text"
                                value={currentConfigName}
                                onChange={(e) => setCurrentConfigName(e.target.value)}
                                placeholder="Configuration name"
                                className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-800 dark:border-slate-600"
                              />
                              <Button
                                onClick={handleSaveConfig}
                                disabled={!currentConfigName.trim()}
                                className="bg-green-500 hover:bg-green-600 text-white"
                              >
                                <Save className="h-4 w-4 mr-2" />
                                Save
                              </Button>
                            </div>
                            
                            {Object.keys(savedConfigs).length > 0 && (
                              <div>
                                <label className="block text-sm font-medium mb-2">Saved Configurations</label>
                                <div className="space-y-2">
                                  {Object.keys(savedConfigs).map((name) => (
                                    <div key={name} className="flex items-center justify-between p-2 border rounded-lg">
                                      <span className="text-sm">{name}</span>
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => handleLoadConfig(name)}
                                      >
                                        Load
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                      <Button
                        variant="outline"
                        onClick={handleResetConfig}
                        className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reset to Default
                      </Button>
                      
                      <div className="flex space-x-3">
                        <Button
                          variant="outline"
                          onClick={() => setActiveTab('preview')}
                          className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Preview Changes
                        </Button>
                        <Button
                          onClick={() => setActiveTab('export')}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Export Template
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'export' && (
                <motion.div
                  key="export"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full p-6 overflow-y-auto"
                >
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Export Template</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Export Formats */}
                      <div className="space-y-8">
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                              <Download className="h-5 w-5" />
                              <span>Export Formats</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between p-4 border rounded-lg hover:border-purple-500 transition-colors cursor-pointer">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                    <Download className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Standalone Build</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Complete, deployable website</p>
                                  </div>
                                </div>
                                <Button 
                                  size="sm" 
                                  className="bg-green-500 hover:bg-green-600 text-white"
                                  onClick={() => handleExport('standalone')}
                                  disabled={isExporting}
                                >
                                  {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Export'}
                                </Button>
                              </div>
                              
                              <div className="flex items-center justify-between p-4 border rounded-lg hover:border-purple-500 transition-colors cursor-pointer">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                    <Code className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Source Code</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Complete source files</p>
                                  </div>
                                </div>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleExport('source')}
                                  disabled={isExporting}
                                >
                                  {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Download'}
                                </Button>
                              </div>
                              
                              <div className="flex items-center justify-between p-4 border rounded-lg hover:border-purple-500 transition-colors cursor-pointer">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                    <Rocket className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white">React Component</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Reusable React component</p>
                                  </div>
                                </div>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleExport('react-component')}
                                  disabled={isExporting}
                                >
                                  {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Export'}
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Deployment Options */}
                      <div className="space-y-8">
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                              <Rocket className="h-5 w-5" />
                              <span>One-Click Deployment</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between p-4 border rounded-lg hover:border-purple-500 transition-colors cursor-pointer">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">V</span>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Deploy to Vercel</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Instant deployment</p>
                                  </div>
                                </div>
                                <Button 
                                  size="sm" 
                                  className="bg-black hover:bg-gray-800 text-white"
                                  onClick={() => handleDeploy('vercel')}
                                  disabled={isDeploying}
                                >
                                  {isDeploying ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Deploy'}
                                </Button>
                              </div>
                              
                              <div className="flex items-center justify-between p-4 border rounded-lg hover:border-purple-500 transition-colors cursor-pointer">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">N</span>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Deploy to Netlify</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">JAMstack hosting</p>
                                  </div>
                                </div>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleDeploy('netlify')}
                                  disabled={isDeploying}
                                >
                                  {isDeploying ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Deploy'}
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        <p>💡 Tip: Choose the export format that best fits your project needs</p>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button
                          variant="outline"
                          onClick={() => setActiveTab('customize')}
                          className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          Back to Customize
                        </Button>
                        <Button
                          onClick={() => handleExport('standalone')}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                          disabled={isExporting}
                        >
                          {isExporting ? (
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          ) : (
                            <Download className="w-5 h-5 mr-2" />
                          )}
                          {isExporting ? 'Exporting...' : 'Export Template'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Customization Sidebar */}
        <AnimatePresence>
          {showCustomization && (
            <motion.div
              initial={{ x: 320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 320, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-80 bg-white dark:bg-neutral-900 border-l overflow-y-auto"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Customization</h3>
                <div className="space-y-4">
                  {/* Color Schemes */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Color Scheme</label>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(colorSchemes).slice(0, 6).map(([name, colors]) => (
                        <button
                          key={name}
                          onClick={() => handleColorSchemeChange(name)}
                          className="flex items-center space-x-2 p-2 rounded-lg border hover:border-purple-300 transition-colors"
                        >
                          <div className="flex space-x-1">
                            <div className="w-3 h-3 rounded" style={{ backgroundColor: colors.primary }}></div>
                            <div className="w-3 h-3 rounded" style={{ backgroundColor: colors.secondary }}></div>
                            <div className="w-3 h-3 rounded" style={{ backgroundColor: colors.accent }}></div>
                          </div>
                          <span className="text-xs font-medium capitalize">{name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Font Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Font Family</label>
                    <select
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                      value={customConfig.font || selectedTemplate.config.font}
                      onChange={(e) => handleFontChange(e.target.value)}
                    >
                      {fontOptions.slice(0, 4).map((font) => (
                        <option key={font.value} value={font.value}>
                          {font.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Reset Button */}
                  <Button
                    variant="outline"
                    onClick={handleResetConfig}
                    className="w-full"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset to Default
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Email Capture Modal */}
      <AnimatePresence>
        {showEmailModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={cn(
                "w-full max-w-md rounded-3xl border-2 p-8",
                isDark 
                  ? "border-white/10 bg-slate-900" 
                  : "border-slate-200 bg-white"
              )}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className={cn(
                  "text-2xl font-bold mb-2",
                  isDark ? "text-white" : "text-slate-900"
                )}>
                  Get Your Free Template!
                </h3>
                <p className={cn(
                  "text-base",
                  isDark ? "text-slate-300" : "text-slate-600"
                )}>
                  Enter your email to download and get notified about new templates and updates.
                </p>
              </div>
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className={cn(
                    "absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2",
                    isDark ? "text-slate-400" : "text-slate-500"
                  )} />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                    className={cn(
                      "w-full pl-12 pr-4 py-4 rounded-2xl border-2 text-lg font-medium transition-all duration-300 focus:outline-none focus:ring-4",
                      isDark 
                        ? "border-white/10 bg-white/5 text-white focus:ring-green-500/30 focus:border-green-500/50" 
                        : "border-slate-200 bg-slate-50 text-slate-900 focus:ring-green-500/20 focus:border-green-500/50"
                    )}
                  />
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 font-bold text-lg py-4"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Download Free
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setShowEmailModal(false)}
                    className={cn(
                      "border-2 font-bold text-lg py-4 transition-all duration-300",
                      isDark 
                        ? "border-white/20 text-white hover:bg-white/10 hover:border-white/40" 
                        : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"
                    )}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className={cn(
                  "text-sm",
                  isDark ? "text-slate-400" : "text-slate-500"
                )}>
                  🔒 We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 