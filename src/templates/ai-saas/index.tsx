import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../core/context/ThemeContext';
import { useTemplate } from '../../core/context/TemplateContext';
import Hero from './pages/Hero.tsx';
import Features from './pages/Features.tsx';
import HowItWorks from './pages/HowItWorks.tsx';
import Integrations from './pages/Integrations.tsx';
import Testimonials from './pages/Testimonials.tsx';
import Pricing from './pages/Pricing.tsx';
import FAQ from './pages/FAQ.tsx';
import CTA from './pages/CTA.tsx';
import Footer from './pages/Footer.tsx';

const AISaaSTemplate: React.FC = () => {
  const { isDark } = useTheme();
  const { selectedTemplate, customConfig } = useTemplate();
  
  // Check if we're in preview mode (when a template is selected in the dashboard)
  const isPreviewMode = !!selectedTemplate;

  // Get configuration values with fallbacks to defaults
  const config = selectedTemplate?.config || {
    brandName: 'Nova AI',
    tagline: 'Intelligence Platform',
    logo: '/logos/nova-ai.svg',
    colors: {
      primary: '#6366f1',
      secondary: '#06b6d4',
      accent: '#f59e0b',
    },
    font: 'Inter',
    fontSize: 'medium',
    containerWidth: 'max-w-7xl',
    sectionSpacing: 'py-20',
    navigationStyle: 'default',
    seo: {
      title: 'Nova AI - Next-Generation AI Solutions',
      description: 'Transform your business with cutting-edge AI tools and analytics.',
      keywords: ['AI', 'SaaS', 'analytics', 'machine learning', 'automation'],
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

  // Apply custom font family
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
      {/* Modern Header with Glassmorphism - Positioned below dashboard controls in preview mode */}
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
                <span className="text-white font-bold text-lg lg:text-xl">AI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 dark:text-white font-bold text-xl lg:text-2xl">
                  {mergedConfig.brandName}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 -mt-1">
                  {mergedConfig.tagline}
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: 'Features', href: '#features' },
                { name: 'How It Works', href: '#how-it-works' },
                { name: 'Integrations', href: '#integrations' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'FAQ', href: '#faq' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium text-sm"
                  style={{ 
                    '--hover-color': mergedConfig.colors.primary 
                  } as React.CSSProperties}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:block text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium text-sm">
                Sign In
              </button>
              <button 
                className="text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                style={{ 
                  background: `linear-gradient(135deg, ${mergedConfig.colors.primary}, ${mergedConfig.colors.secondary})`,
                  boxShadow: `0 10px 25px -5px ${mergedConfig.colors.primary}40`
                }}
              >
                Start Free Trial
              </button>
              
              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200">
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content - Full Width Layout */}
      <main className={isPreviewMode ? "pt-0" : "pt-16 lg:pt-20"}>
        {/* Hero Section */}
        <Hero config={mergedConfig} />
        
        {/* Features Section */}
        <section id="features" className={`w-full ${sectionSpacing}`}>
          <Features config={mergedConfig} />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className={`w-full ${sectionSpacing}`}>
          <HowItWorks config={{ brandName: mergedConfig.brandName, colors: mergedConfig.colors }} />
        </section>

        {/* Integrations Section */}
        <section id="integrations" className={`w-full ${sectionSpacing}`}>
          <Integrations config={{ brandName: mergedConfig.brandName, colors: mergedConfig.colors }} />
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className={`w-full ${sectionSpacing}`}>
          <Pricing config={{ brandName: mergedConfig.brandName, colors: mergedConfig.colors }} />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={`w-full ${sectionSpacing}`}>
          <Testimonials />
        </section>

        {/* FAQ Section */}
        <section id="faq" className={`w-full ${sectionSpacing}`}>
          <FAQ />
        </section>

        {/* CTA Section */}
        <section className={`w-full ${sectionSpacing}`}>
          <CTA />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default AISaaSTemplate; 