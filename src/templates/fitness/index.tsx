import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../core/context/ThemeContext';
import { useTemplate } from '../../core/context/TemplateContext';
import Hero from './pages/Hero';
import Programs from './pages/Programs';
import Features from './pages/Features';
import Trainers from './pages/Trainers';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const FitnessTemplate: React.FC = () => {
  const { isDark } = useTheme();
  const { selectedTemplate, customConfig } = useTemplate();
  
  // Check if we're in preview mode
  const isPreviewMode = !!selectedTemplate;

  // Get configuration values with fallbacks to defaults
  const config = selectedTemplate?.config || {
    brandName: 'FitLife Studio',
    tagline: 'Transform Your Body, Transform Your Life',
    logo: '/logos/fitlife.svg',
    colors: {
      primary: '#dc2626',
      secondary: '#ef4444',
      accent: '#f59e0b',
    },
    font: 'Inter',
    fontSize: 'medium',
    containerWidth: 'max-w-7xl',
    sectionSpacing: 'py-20',
    navigationStyle: 'default',
    seo: {
      title: 'FitLife Studio - Transform Your Body, Transform Your Life',
      description: 'Join our community and achieve your fitness goals with expert trainers and personalized programs.',
      keywords: ['fitness', 'gym', 'workout', 'training', 'health', 'wellness'],
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
      className={`min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 ${isDark ? 'dark bg-gradient-to-br from-slate-900 via-red-900/20 to-orange-900/20' : ''}`}
      style={customStyles}
    >
      {/* Modern Header with Glassmorphism */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-red-200/50 dark:border-red-800/50 ${
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
                  {mergedConfig.brandName?.charAt(0) || 'F'}
                </span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                {mergedConfig.brandName || 'FitLife Studio'}
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#programs" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Programs
              </a>
              <a href="#trainers" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Trainers
              </a>
              <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <button
              className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: mergedConfig.colors.primary }}
            >
              Start Free Trial
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

        {/* Programs Section */}
        <section className={sectionSpacing} id="programs">
          <Programs config={mergedConfig} />
        </section>

        {/* Features Section */}
        <section className={sectionSpacing}>
          <Features config={mergedConfig} />
        </section>

        {/* Trainers Section */}
        <section className={sectionSpacing} id="trainers">
          <Trainers config={mergedConfig} />
        </section>

        {/* Testimonials Section */}
        <section className={sectionSpacing}>
          <Testimonials config={mergedConfig} />
        </section>

        {/* Pricing Section */}
        <section className={sectionSpacing} id="pricing">
          <Pricing config={mergedConfig} />
        </section>

        {/* Contact Section */}
        <section className={sectionSpacing} id="contact">
          <Contact config={mergedConfig} />
        </section>
      </main>

      {/* Footer */}
      <Footer config={mergedConfig} />
    </div>
  );
};

export default FitnessTemplate; 