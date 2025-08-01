import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../core/context/ThemeContext';
import { useTemplate } from '../../core/context/TemplateContext';
import Hero from './pages/Hero';
import Features from './pages/Features';
import Screenshots from './pages/Screenshots';
import Download from './pages/Download';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const MobileAppTemplate: React.FC = () => {
  const { isDark } = useTheme();
  const { selectedTemplate, customConfig } = useTemplate();
  
  // Check if we're in preview mode
  const isPreviewMode = !!selectedTemplate;

  // Get configuration values with fallbacks to defaults
  const config = selectedTemplate?.config || {
    brandName: 'AppFlow',
    tagline: 'Streamline Your Workflow',
    logo: '/logos/appflow.svg',
    colors: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#ec4899',
    },
    font: 'Inter',
    fontSize: 'medium',
    containerWidth: 'max-w-7xl',
    sectionSpacing: 'py-20',
    navigationStyle: 'default',
    seo: {
      title: 'AppFlow - Streamline Your Workflow',
      description: 'The ultimate productivity app for modern professionals.',
      keywords: ['mobile app', 'productivity', 'workflow', 'iOS', 'android'],
    },
    features: {
      darkMode: true,
      animations: true,
      analytics: true,
    },
  };

  // Merge custom config with default config
  const mergedConfig = {
    ...config,
    ...customConfig,
    colors: {
      ...config.colors,
      ...customConfig.colors,
    },
    seo: {
      ...config.seo,
      ...customConfig.seo,
    },
    features: {
      ...config.features,
      ...customConfig.features,
    },
  };

  // Apply custom font family and other styles
  const fontFamily = mergedConfig.font || 'Inter';
  const containerWidth = mergedConfig.containerWidth || 'max-w-7xl';
  const sectionSpacing = mergedConfig.sectionSpacing || 'py-20';

  // Apply custom colors as CSS variables
  const customStyles = {
    '--color-primary': mergedConfig.colors.primary,
    '--color-secondary': mergedConfig.colors.secondary,
    '--color-accent': mergedConfig.colors.accent,
    '--font-family': fontFamily,
  } as React.CSSProperties;

  return (
    <div 
      className={`min-h-screen ${isDark ? 'dark' : ''}`}
      style={customStyles}
    >
      {/* Modern Header with Glassmorphism */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/10 ${
          isPreviewMode ? 'relative top-0' : 'fixed top-0 left-0 right-0 z-50'
        }`}
      >
        <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${containerWidth}`}>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${mergedConfig.colors.primary}, ${mergedConfig.colors.secondary})` 
                }}
              >
                <span className="text-white font-bold text-lg lg:text-xl">
                  {mergedConfig.brandName?.charAt(0) || 'A'}
                </span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                {mergedConfig.brandName || 'AppFlow'}
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Features
              </a>
              <a href="#screenshots" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Screenshots
              </a>
              <a href="#download" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Download
              </a>
              <a href="#reviews" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Reviews
              </a>
            </nav>

            {/* CTA Button */}
            <button
              className="px-6 py-3 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: mergedConfig.colors.primary }}
            >
              Download App
            </button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className={`${isPreviewMode ? '' : 'pt-16 lg:pt-20'}`}>
        {/* Hero Section */}
        <section className={sectionSpacing}>
          <Hero config={mergedConfig} />
        </section>

        {/* Features Section */}
        <section className={sectionSpacing} id="features">
          <Features config={mergedConfig} />
        </section>

        {/* Screenshots Section */}
        <section className={sectionSpacing} id="screenshots">
          <Screenshots config={mergedConfig} />
        </section>

        {/* Download Section */}
        <section className={sectionSpacing} id="download">
          <Download config={mergedConfig} />
        </section>

        {/* Reviews Section */}
        <section className={sectionSpacing} id="reviews">
          <Reviews config={mergedConfig} />
        </section>

        {/* Contact Section */}
        <section className={sectionSpacing}>
          <Contact config={mergedConfig} />
        </section>
      </main>

      {/* Footer */}
      <Footer config={mergedConfig} />
    </div>
  );
};

export default MobileAppTemplate; 