import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../core/context/ThemeContext';
import { useTemplate } from '../../core/context/TemplateContext';
import Hero from './pages/Hero.tsx';
import About from './pages/About.tsx';
import Skills from './pages/Skills.tsx';
import Projects from './pages/Projects.tsx';
import Experience from './pages/Experience.tsx';
import Testimonials from './pages/Testimonials.tsx';
import Contact from './pages/Contact.tsx';
import Footer from './pages/Footer.tsx';

const PortfolioTemplate: React.FC = () => {
  const { isDark } = useTheme();
  const { selectedTemplate, customConfig } = useTemplate();
  
  // Check if we're in preview mode
  const isPreviewMode = !!selectedTemplate;

  // Get configuration values with fallbacks to defaults
  const config = selectedTemplate?.config || {
    brandName: 'John Doe',
    tagline: 'Full Stack Developer & Designer',
    logo: '/logos/portfolio.svg',
    colors: {
      primary: '#7c3aed',
      secondary: '#ec4899',
      accent: '#f97316',
    },
    font: 'Poppins',
    fontSize: 'medium',
    containerWidth: 'max-w-7xl',
    sectionSpacing: 'py-20',
    navigationStyle: 'default',
    seo: {
      title: 'John Doe - Full Stack Developer',
      description: 'Passionate developer creating innovative digital experiences.',
      keywords: ['developer', 'portfolio', 'web development', 'design'],
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
                  {mergedConfig.brandName.split(' ').map(n => n[0]).join('')}
                </span>
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
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' }
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
                Resume
              </button>
              <button 
                className="text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                style={{ 
                  background: `linear-gradient(135deg, ${mergedConfig.colors.primary}, ${mergedConfig.colors.secondary})`,
                  boxShadow: `0 10px 25px -5px ${mergedConfig.colors.primary}40`
                }}
              >
                Hire Me
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

      {/* Main Content */}
      <main className={isPreviewMode ? "pt-0" : "pt-16 lg:pt-20"}>
        {/* Hero Section */}
        <Hero config={mergedConfig} />
        
        {/* About Section */}
        <section id="about" className={`w-full ${sectionSpacing}`}>
          <About config={mergedConfig} />
        </section>

        {/* Skills Section */}
        <section id="skills" className={`w-full ${sectionSpacing}`}>
          <Skills config={mergedConfig} />
        </section>

        {/* Projects Section */}
        <section id="projects" className={`w-full ${sectionSpacing}`}>
          <Projects config={mergedConfig} />
        </section>

        {/* Experience Section */}
        <section id="experience" className={`w-full ${sectionSpacing}`}>
          <Experience config={mergedConfig} />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={`w-full ${sectionSpacing}`}>
          <Testimonials config={mergedConfig} />
        </section>

        {/* Contact Section */}
        <section id="contact" className={`w-full ${sectionSpacing}`}>
          <Contact config={mergedConfig} />
        </section>

        {/* Footer */}
        <Footer config={mergedConfig} />
      </main>
    </div>
  );
};

export default PortfolioTemplate; 