import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../core/context/ThemeContext';
import { useTemplate } from '../../core/context/TemplateContext';
import Hero from './pages/Hero.tsx';
import Problem from './pages/Problem.tsx';
import Solution from './pages/Solution.tsx';
import Features from './pages/Features.tsx';
import Team from './pages/Team.tsx';
import SocialProof from './pages/SocialProof.tsx';
import Pricing from './pages/Pricing.tsx';
import FAQ from './pages/FAQ.tsx';
import CTA from './pages/CTA.tsx';
import Footer from './pages/Footer.tsx';

const StartupTemplate: React.FC = () => {
  const { isDark } = useTheme();
  const { selectedTemplate, customConfig } = useTemplate();
  
  // Check if we're in preview mode
  const isPreviewMode = !!selectedTemplate;

  // Get configuration values with fallbacks to defaults
  const config = selectedTemplate?.config || {
    brandName: 'LaunchPad',
    tagline: 'The Future of Innovation',
    logo: '/logos/launchpad.svg',
    colors: {
      primary: '#ef4444',
      secondary: '#f97316',
      accent: '#8b5cf6',
    },
    font: 'Inter',
    fontSize: 'medium',
    containerWidth: 'max-w-7xl',
    sectionSpacing: 'py-20',
    navigationStyle: 'default',
    seo: {
      title: 'LaunchPad - The Future of Innovation',
      description: 'Join the revolution. Be the first to experience the future.',
      keywords: ['startup', 'innovation', 'beta', 'launch', 'technology'],
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
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${mergedConfig.colors.primary}, ${mergedConfig.colors.secondary})` 
                }}
              >
                <span className="text-white font-bold text-lg lg:text-xl">
                  {mergedConfig.brandName?.charAt(0) || 'L'}
                </span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                {mergedConfig.brandName || 'LaunchPad'}
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Features
              </a>
              <a href="#team" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Team
              </a>
              <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                FAQ
              </a>
            </nav>

            {/* CTA Button */}
            <button
              className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: mergedConfig.colors.primary }}
            >
              Join Beta
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

        {/* Problem Section */}
        <section className={sectionSpacing}>
          <Problem config={mergedConfig} />
        </section>

        {/* Solution Section */}
        <section className={sectionSpacing}>
          <Solution config={mergedConfig} />
        </section>

        {/* Features Section */}
        <section className={sectionSpacing} id="features">
          <Features config={mergedConfig} />
        </section>

        {/* Team Section */}
        <section className={sectionSpacing} id="team">
          <Team config={mergedConfig} />
        </section>

        {/* Social Proof Section */}
        <section className={sectionSpacing}>
          <SocialProof config={mergedConfig} />
        </section>

        {/* Pricing Section */}
        <section className={sectionSpacing} id="pricing">
          <Pricing config={mergedConfig} />
        </section>

        {/* FAQ Section */}
        <section className={sectionSpacing} id="faq">
          <FAQ config={mergedConfig} />
        </section>

        {/* CTA Section */}
        <section className={sectionSpacing}>
          <CTA config={mergedConfig} />
        </section>
      </main>

      {/* Footer */}
      <Footer config={mergedConfig} />
    </div>
  );
};

export default StartupTemplate; 