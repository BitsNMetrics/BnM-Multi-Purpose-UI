import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../core/context/ThemeContext';
import { useTemplate } from '../../core/context/TemplateContext';
import Hero from './pages/Hero';
import Schedule from './pages/Schedule';
import Speakers from './pages/Speakers';
import Venue from './pages/Venue';
import Register from './pages/Register';
import FAQ from './pages/FAQ';
import Footer from './pages/Footer';

const EventTemplate: React.FC = () => {
  const { isDark } = useTheme();
  const { selectedTemplate, customConfig } = useTemplate();
  
  // Check if we're in preview mode
  const isPreviewMode = !!selectedTemplate;

  // Get configuration values with fallbacks to defaults
  const config = selectedTemplate?.config || {
    brandName: 'TechConf 2024',
    tagline: 'The Future of Technology',
    logo: '/logos/techconf.svg',
    colors: {
      primary: '#8b5cf6',
      secondary: '#ec4899',
      accent: '#f59e0b',
    },
    font: 'Poppins',
    fontSize: 'medium',
    containerWidth: 'max-w-7xl',
    sectionSpacing: 'py-20',
    navigationStyle: 'default',
    seo: {
      title: 'TechConf 2024 - The Future of Technology',
      description: 'Join industry leaders at the premier technology conference.',
      keywords: ['conference', 'technology', 'event', 'networking', 'innovation'],
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
  const fontFamily = mergedConfig.font || 'Poppins';
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
      className={`min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 ${isDark ? 'dark bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20' : ''}`}
      style={customStyles}
    >
      {/* Modern Header with Glassmorphism */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-purple-200/50 dark:border-purple-800/50 ${
          isPreviewMode ? 'relative top-0' : 'fixed top-0 left-0 right-0 z-50'
        }`}
      >
        <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${containerWidth}`}>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${mergedConfig.colors.primary}, ${mergedConfig.colors.secondary})` 
                }}
              >
                <span className="text-white font-bold text-lg lg:text-xl">
                  {mergedConfig.brandName?.charAt(0) || 'T'}
                </span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                {mergedConfig.brandName || 'TechConf 2024'}
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#schedule" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Schedule
              </a>
              <a href="#speakers" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Speakers
              </a>
              <a href="#venue" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Venue
              </a>
              <a href="#register" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Register
              </a>
            </nav>

            {/* CTA Button */}
            <button
              className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: mergedConfig.colors.primary }}
            >
              Get Tickets
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

        {/* Schedule Section */}
        <section className={sectionSpacing} id="schedule">
          <Schedule config={mergedConfig} />
        </section>

        {/* Speakers Section */}
        <section className={sectionSpacing} id="speakers">
          <Speakers config={mergedConfig} />
        </section>

        {/* Venue Section */}
        <section className={sectionSpacing} id="venue">
          <Venue config={mergedConfig} />
        </section>

        {/* Register Section */}
        <section className={sectionSpacing} id="register">
          <Register config={mergedConfig} />
        </section>

        {/* FAQ Section */}
        <section className={sectionSpacing} id="faq">
          <FAQ config={mergedConfig} />
        </section>
      </main>

      {/* Footer */}
      <Footer config={mergedConfig} />
    </div>
  );
};

export default EventTemplate; 