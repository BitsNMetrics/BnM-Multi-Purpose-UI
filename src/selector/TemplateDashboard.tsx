import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Search, Grid, List, Sparkles, Zap, Star, Play, Eye, Rocket, Sun, Moon, Download, Heart, Share2, Mail, Building2, Calendar, Dumbbell, GraduationCap, Bitcoin, Smartphone } from 'lucide-react';
import { useTemplate } from '../core/context/TemplateContext';
import { useTheme } from '../core/context/ThemeContext';
import { Button } from '../core/components/Button';
import { cn } from '../core/utils/cn';
import { fadeInUp, staggerContainer } from '../core/utils/animations';
import { templateCategories } from '../config/templates';

// Custom SVG Icons for each template domain
const TemplateIcons = {
  'ai-saas': ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M20 32c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12z" fill="currentColor" fillOpacity="0.2"/>
      <circle cx="26" cy="28" r="2" fill="currentColor"/>
      <circle cx="38" cy="28" r="2" fill="currentColor"/>
      <path d="M26 38c0 3.314 2.686 6 6 6s6-2.686 6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M16 20l8-8M48 20l-8-8M16 44l8 8M48 44l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'portfolio': ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="16" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 24h40M20 32h24M20 40h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="28" cy="12" r="4" fill="currentColor"/>
      <path d="M24 12h8M28 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'ecommerce': ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 20h32l-4 16H20L16 20z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="48" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="40" cy="48" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M20 20V16c0-2.209 1.791-4 4-4h16c2.209 0 4 1.791 4 4v4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M24 28h16M24 32h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'startup': ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8l8 16h16l-12 12 4 20-16-8-16 8 4-20L8 24h16l8-16z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="32" cy="32" r="4" fill="currentColor"/>
      <path d="M32 16v8M32 40v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'agency': ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="20" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M16 28h32M16 36h32M16 44h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="20" y="12" width="24" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="28" cy="16" r="1" fill="currentColor"/>
      <circle cx="36" cy="16" r="1" fill="currentColor"/>
    </svg>
  ),
  'event': ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="16" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 24h40M20 32h24M20 40h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="12" r="4" fill="currentColor"/>
      <path d="M28 12h8M32 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 28l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'fitness': ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M20 32h24M32 20v24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M24 24l16 16M40 24L24 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="32" r="4" fill="currentColor"/>
    </svg>
  ),
  'education': ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8l24 12v16c0 8.837-7.163 16-16 16s-16-7.163-16-16V20l24-12z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M16 20l16 8 16-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 28v8c0 4.418 3.582 8 8 8s8-3.582 8-8v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'crypto': ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M24 24h16v16H24z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M28 28h8v8h-8z" fill="currentColor"/>
      <path d="M32 20v8M32 36v8M44 32h-8M20 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'mobile-app': ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="8" width="24" height="48" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="24" y="16" width="16" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="32" cy="44" r="2" fill="currentColor"/>
      <path d="M28 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M26 20h12M26 24h12M26 28h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

export const TemplateDashboard: React.FC = () => {
  const { templates, setSelectedTemplate } = useTemplate();
  const { isDark, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filteredTemplates = useMemo(() => {
    return templates.filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [templates, searchQuery, selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Templates', count: templates.length, icon: Sparkles },
    ...Object.entries(templateCategories).map(([id, name]) => ({
      id,
      name,
      count: templates.filter(t => t.category === id).length,
      icon: id === 'ai-saas' ? Zap : id === 'portfolio' ? Star : id === 'ecommerce' ? Play : id === 'startup' ? Rocket : id === 'agency' ? Building2 : id === 'event' ? Calendar : id === 'fitness' ? Dumbbell : id === 'education' ? GraduationCap : id === 'crypto' ? Bitcoin : id === 'mobile-app' ? Smartphone : Eye,
    })),
  ];

  const getTemplateGradient = (templateId: string) => {
    const gradients = {
      'ai-saas': 'from-purple-600 via-blue-600 to-cyan-600',
      'portfolio': 'from-pink-600 via-purple-600 to-orange-600',
      'ecommerce': 'from-emerald-600 via-green-600 to-teal-600',
      'startup': 'from-red-600 via-orange-600 to-yellow-600',
      'agency': 'from-blue-600 via-indigo-600 to-purple-600',
      'event': 'from-purple-600 via-pink-600 to-red-600',
      'fitness': 'from-red-600 via-pink-600 to-purple-600',
      'education': 'from-green-600 via-emerald-600 to-blue-600',
      'crypto': 'from-yellow-600 via-orange-600 to-red-600',
      'mobile-app': 'from-blue-600 via-cyan-600 to-teal-600',
    };
    return gradients[templateId as keyof typeof gradients] || 'from-gray-600 via-gray-700 to-gray-800';
  };

  const getTemplateIcon = (templateId: string) => {
    const IconComponent = TemplateIcons[templateId as keyof typeof TemplateIcons];
    return IconComponent || TemplateIcons['ai-saas'];
  };

  const getTemplatePricing = (templateId: string) => {
    const pricing = {
      'ai-saas': { free: true, premium: 29, pro: 99 },
      'portfolio': { free: true, premium: 29, pro: 99 },
      'ecommerce': { free: false, premium: 49, pro: 149 },
      'startup': { free: true, premium: 39, pro: 129 },
      'agency': { free: false, premium: 59, pro: 179 },
      'event': { free: true, premium: 29, pro: 99 },
      'fitness': { free: false, premium: 49, pro: 149 },
      'education': { free: true, premium: 39, pro: 129 },
      'crypto': { free: false, premium: 69, pro: 199 },
      'mobile-app': { free: true, premium: 49, pro: 159 },
    };
    return pricing[templateId as keyof typeof pricing] || { free: false, premium: 49, pro: 149 };
  };

  const handleDownload = (templateId: string) => {
    const pricing = getTemplatePricing(templateId);
    if (pricing.free) {
      // Free download - capture email
      setShowEmailModal(true);
    } else {
      // Premium template - redirect to purchase
      window.open(`/purchase/${templateId}`, '_blank');
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your email service
    console.log('Email captured:', emailInput);
    setShowEmailModal(false);
    setEmailInput('');
    // Show success message and download link
  };

  const toggleFavorite = (templateId: string) => {
    setFavorites(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    );
  };

  return (
    <div className={cn(
      "min-h-screen relative overflow-hidden",
      isDark ? "bg-slate-900" : "bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
    )}>
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          </>
        )}
        
        {/* Floating Orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className={cn(
            "absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl",
            isDark ? "bg-purple-500/10" : "bg-purple-500/20"
          )}
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className={cn(
            "absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl",
            isDark ? "bg-blue-500/10" : "bg-blue-500/20"
          )}
        />
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 10
          }}
          className={cn(
            "absolute bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl",
            isDark ? "bg-pink-500/10" : "bg-pink-500/20"
          )}
        />
      </motion.div>

      {/* Mouse Follow Effect */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-screen",
          isDark 
            ? "bg-gradient-to-r from-purple-400 to-pink-400" 
            : "bg-gradient-to-r from-purple-500 to-pink-500"
        )}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: hoveredTemplate ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Header - Full Width */}
      <motion.header 
        className={cn(
          "sticky top-0 z-40 border-b backdrop-blur-xl",
          isDark 
            ? "border-white/10 bg-black/20" 
            : "border-slate-200 bg-white/80"
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="w-7 h-7 text-white" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30"
                />
              </div>
              <div>
                <h1 className={cn(
                  "text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                  isDark 
                    ? "from-white via-purple-200 to-pink-200" 
                    : "from-slate-900 via-purple-600 to-pink-600"
                )}>
                  Multi-Domain Landing Kit
                </h1>
                <p className={cn(
                  "text-lg font-medium",
                  isDark ? "text-slate-300" : "text-slate-600"
                )}>
                  {templates.length} Premium Templates Available
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={toggleTheme}
                className={cn(
                  "border-2 font-semibold transition-all duration-300 flex items-center space-x-2",
                  isDark 
                    ? "border-white/20 text-white hover:bg-white/10 hover:border-white/40" 
                    : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"
                )}
              >
                {isDark ? (
                  <>
                    <Sun className="w-5 h-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content - Full Width */}
      <main className="relative z-10 w-full">
        {/* Hero Section - Full Width */}
        <motion.section 
          className="w-full py-16 px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className={cn(
                "text-6xl md:text-8xl font-bold mb-8 leading-tight",
                isDark 
                  ? "text-white" 
                  : "text-slate-900"
              )}>
                <span className={cn(
                  "bg-gradient-to-r bg-clip-text text-transparent",
                  isDark 
                    ? "from-white via-purple-200 to-pink-200" 
                    : "from-slate-900 via-purple-600 to-pink-600"
                )}>
                  Choose Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Perfect Template
                </span>
              </h2>
              <p className={cn(
                "text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-medium",
                isDark ? "text-slate-300" : "text-slate-600"
              )}>
                Discover our collection of premium, responsive landing page templates designed for every industry and use case.
              </p>
            </motion.div>

            {/* Search and Filters - Full Width */}
            <motion.div 
              className="w-full max-w-6xl mx-auto space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Search Bar */}
              <div className="relative group">
                <Search className={cn(
                  "absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 transition-colors",
                  isDark ? "text-slate-400 group-focus-within:text-purple-400" : "text-slate-500 group-focus-within:text-purple-600"
                )} />
                <input
                  type="text"
                  placeholder="Search templates by name, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    "w-full pl-16 pr-6 py-5 rounded-2xl border-2 text-lg font-medium transition-all duration-300 placeholder-slate-400 focus:outline-none focus:ring-4",
                    isDark 
                      ? "border-white/10 bg-white/5 backdrop-blur-sm text-white focus:ring-purple-500/30 focus:border-purple-500/50" 
                      : "border-slate-200 bg-white/80 backdrop-blur-sm text-slate-900 focus:ring-purple-500/20 focus:border-purple-500/50"
                  )}
                />
                <motion.div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300",
                    isDark ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20" : "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                  )}
                  style={{ zIndex: -1 }}
                />
              </div>

              {/* Category Filters - Full Width with Horizontal Scroll */}
              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  {/* Category Buttons - Scrollable Container */}
                  <div className="flex-1 overflow-x-auto scrollbar-hide">
                    <div className="flex items-center space-x-4 min-w-max px-2">
                      {categories.map((category, index) => (
                        <motion.div
                          key={category.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                          className="flex-shrink-0"
                        >
                          <Button
                            variant={selectedCategory === category.id ? 'default' : 'outline'}
                            size="lg"
                            onClick={() => setSelectedCategory(category.id)}
                            className={cn(
                              "whitespace-nowrap backdrop-blur-sm transition-all duration-300 font-semibold text-base px-6 py-3 min-w-[140px]",
                              selectedCategory === category.id
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
                                : isDark
                                  ? "border-white/20 text-white hover:bg-white/10 hover:border-purple-500/50"
                                  : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-purple-500/50"
                            )}
                          >
                            <category.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                            <span className="truncate">{category.name}</span>
                            <span className={cn(
                              "ml-3 px-3 py-1 text-sm rounded-full font-bold flex-shrink-0",
                              selectedCategory === category.id
                                ? "bg-white/20"
                                : isDark ? "bg-white/10" : "bg-slate-200"
                            )}>
                              {category.count}
                            </span>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* View Mode Toggle - Fixed Position */}
                  <motion.div 
                    className={cn(
                      "flex items-center space-x-2 border-2 rounded-2xl p-2 backdrop-blur-sm ml-6 flex-shrink-0",
                      isDark ? "border-white/20" : "border-slate-200"
                    )}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="lg"
                      onClick={() => setViewMode('grid')}
                      className={cn(
                        "transition-all duration-300 font-semibold px-4",
                        viewMode === 'grid'
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg"
                          : isDark
                            ? "text-white hover:bg-white/10"
                            : "text-slate-700 hover:bg-slate-100"
                      )}
                    >
                      <Grid className="h-5 w-5 mr-2" />
                      Grid
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="lg"
                      onClick={() => setViewMode('list')}
                      className={cn(
                        "transition-all duration-300 font-semibold px-4",
                        viewMode === 'list'
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg"
                          : isDark
                            ? "text-white hover:bg-white/10"
                            : "text-slate-700 hover:bg-slate-100"
                      )}
                    >
                      <List className="h-5 w-5 mr-2" />
                      List
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Results Count - Full Width */}
        <motion.div 
          className="w-full px-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <div className="w-full">
            <p className={cn(
              "text-center text-lg font-semibold",
              isDark ? "text-slate-300" : "text-slate-600"
            )}>
              Showing <span className="text-purple-600 font-bold">{filteredTemplates.length}</span> of <span className="text-purple-600 font-bold">{templates.length}</span> templates
            </p>
          </div>
        </motion.div>

        {/* Template Grid - Full Width */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full px-8 pb-20"
        >
          <div className="w-full">
            <motion.div
              className={cn(
                'grid gap-8',
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1'
              )}
            >
              <AnimatePresence>
                {filteredTemplates.map((template, index) => {
                  const IconComponent = getTemplateIcon(template.id);
                  return (
                    <motion.div
                      key={template.id}
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      onHoverStart={() => setHoveredTemplate(template.id)}
                      onHoverEnd={() => setHoveredTemplate(null)}
                      className="group"
                    >
                      <motion.div
                        className={cn(
                          "relative h-full cursor-pointer transition-all duration-500",
                          viewMode === 'list' && "flex flex-row"
                        )}
                        whileHover={{ 
                          scale: 1.02,
                          y: -8,
                        }}
                        onClick={() => setSelectedTemplate(template)}
                      >
                        {/* Card Background */}
                        <div className={cn(
                          "relative h-full rounded-3xl border-2 overflow-hidden backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500",
                          viewMode === 'list' && "flex flex-row",
                          isDark 
                            ? "border-white/10 bg-white/5" 
                            : "border-slate-200 bg-white/80"
                        )}>
                          {/* Gradient Background */}
                          <div className={cn(
                            "absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-500",
                            getTemplateGradient(template.id)
                          )} />
                          
                          {/* Glass Effect */}
                          <div className={cn(
                            "absolute inset-0 backdrop-blur-sm",
                            isDark ? "bg-white/5" : "bg-white/80"
                          )} />
                          
                          {/* Animated Border */}
                          <motion.div
                            className="absolute inset-0 rounded-3xl"
                            style={{
                              background: `linear-gradient(45deg, transparent, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(147,51,234,0.1)'}, transparent)`,
                            }}
                            animate={{
                              backgroundPosition: ['0% 0%', '100% 100%'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />

                          {/* Template Preview */}
                          <div className={cn(
                            "relative h-56 overflow-hidden rounded-t-3xl",
                            viewMode === 'list' && "w-80 h-40"
                          )}>
                            <div className={cn(
                              "w-full h-full bg-gradient-to-br flex items-center justify-center relative overflow-hidden",
                              getTemplateGradient(template.id)
                            )}>
                              {/* Template Icon with Custom SVG */}
                              <motion.div
                                className="text-white flex items-center justify-center"
                                animate={{ 
                                  scale: hoveredTemplate === template.id ? 1.2 : 1,
                                  rotate: hoveredTemplate === template.id ? 5 : 0
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <IconComponent className="w-24 h-24 text-white/90" />
                              </motion.div>
                              
                              {/* Floating Elements */}
                              <motion.div
                                animate={{ 
                                  y: [-10, 10, -10],
                                  opacity: [0.3, 0.7, 0.3]
                                }}
                                transition={{ 
                                  duration: 4, 
                                  repeat: Infinity, 
                                  ease: "easeInOut",
                                  delay: index * 0.5
                                }}
                                className="absolute top-4 right-4 w-4 h-4 bg-white/30 rounded-full blur-sm"
                              />
                              <motion.div
                                animate={{ 
                                  y: [10, -10, 10],
                                  opacity: [0.5, 0.9, 0.5]
                                }}
                                transition={{ 
                                  duration: 3, 
                                  repeat: Infinity, 
                                  ease: "easeInOut",
                                  delay: index * 0.3
                                }}
                                className="absolute bottom-4 left-4 w-3 h-3 bg-white/40 rounded-full blur-sm"
                              />
                            </div>
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                              <span className={cn(
                                "px-4 py-2 text-sm font-bold rounded-full border-2 backdrop-blur-sm",
                                isDark 
                                  ? "bg-black/50 text-white border-white/20" 
                                  : "bg-white/90 text-slate-800 border-slate-200"
                              )}>
                                {templateCategories[template.category as keyof typeof templateCategories]}
                              </span>
                            </div>

                            {/* Preview Overlay */}
                            <motion.div
                              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                            >
                              <motion.div
                                className="flex items-center space-x-3 text-white font-bold text-lg"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileHover={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Eye className="w-6 h-6" />
                                <span>Preview Template</span>
                              </motion.div>
                            </motion.div>
                          </div>

                          {/* Template Info */}
                          <div className={cn(
                            "relative p-8 flex-1",
                            viewMode === 'list' && "flex flex-col justify-center"
                          )}>
                            <div className="mb-6">
                              <h3 className={cn(
                                "text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300",
                                isDark ? "text-white" : "text-slate-900"
                              )}>
                                {template.name}
                              </h3>
                              <p className={cn(
                                "text-base leading-relaxed line-clamp-2 font-medium",
                                isDark ? "text-slate-300" : "text-slate-600"
                              )}>
                                {template.description}
                              </p>
                            </div>
                            
                            {/* Pricing & Status */}
                            <div className="mb-6">
                              {(() => {
                                const pricing = getTemplatePricing(template.id);
                                return (
                                  <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                      {pricing.free ? (
                                        <span className="px-3 py-1 bg-green-500/20 text-green-600 text-sm font-bold rounded-full border border-green-500/30">
                                          FREE
                                        </span>
                                      ) : (
                                        <span className="px-3 py-1 bg-purple-500/20 text-purple-600 text-sm font-bold rounded-full border border-purple-500/30">
                                          PREMIUM
                                        </span>
                                      )}
                                      <span className={cn(
                                        "text-sm font-medium",
                                        isDark ? "text-slate-400" : "text-slate-500"
                                      )}>
                                        {pricing.free ? 'Free Download' : `From $${pricing.premium}`}
                                      </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <motion.button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleFavorite(template.id);
                                        }}
                                        className={cn(
                                          "p-2 rounded-full transition-colors",
                                          favorites.includes(template.id)
                                            ? "text-red-500 bg-red-500/10"
                                            : isDark
                                              ? "text-slate-400 hover:text-red-500 hover:bg-red-500/10"
                                              : "text-slate-500 hover:text-red-500 hover:bg-red-500/10"
                                        )}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                      >
                                        <Heart className={cn(
                                          "w-5 h-5",
                                          favorites.includes(template.id) && "fill-current"
                                        )} />
                                      </motion.button>
                                      <motion.button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          navigator.share?.({
                                            title: template.name,
                                            text: template.description,
                                            url: window.location.href
                                          });
                                        }}
                                        className={cn(
                                          "p-2 rounded-full transition-colors",
                                          isDark
                                            ? "text-slate-400 hover:text-blue-500 hover:bg-blue-500/10"
                                            : "text-slate-500 hover:text-blue-500 hover:bg-blue-500/10"
                                        )}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                      >
                                        <Share2 className="w-5 h-5" />
                                      </motion.button>
                                    </div>
                                  </div>
                                );
                              })()}
                            </div>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-3 mb-6">
                              {template.tags.slice(0, 3).map((tag) => (
                                <motion.span
                                  key={tag}
                                  className={cn(
                                    "px-4 py-2 text-sm font-semibold rounded-xl border-2 backdrop-blur-sm",
                                    isDark 
                                      ? "bg-white/10 border-white/20 text-slate-300" 
                                      : "bg-slate-100 border-slate-200 text-slate-700"
                                  )}
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {tag}
                                </motion.span>
                              ))}
                              {template.tags.length > 3 && (
                                <span className={cn(
                                  "px-4 py-2 text-sm font-semibold",
                                  isDark ? "text-slate-500" : "text-slate-400"
                                )}>
                                  +{template.tags.length - 3} more
                                </span>
                              )}
                            </div>

                            {/* Features */}
                            <div className={cn(
                              "text-sm mb-6 font-medium",
                              isDark ? "text-slate-400" : "text-slate-500"
                            )}>
                              <span className="font-bold text-purple-600">Features:</span> {template.features.slice(0, 3).join(', ')}
                              {template.features.length > 3 && '...'}
                            </div>

                            {/* CTA Buttons */}
                            <motion.div
                              className="flex items-center justify-between space-x-3"
                              initial={{ opacity: 0, y: 10 }}
                              whileHover={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDownload(template.id);
                                }}
                                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25 group-hover:shadow-xl group-hover:shadow-purple-500/40 transition-all duration-300 font-bold text-lg py-4"
                                size="lg"
                              >
                                <Download className="w-5 h-5 mr-3" />
                                <span>{getTemplatePricing(template.id).free ? 'Download Free' : 'Get Premium'}</span>
                              </Button>
                              <Button
                                variant="outline"
                                size="lg"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedTemplate(template);
                                }}
                                className={cn(
                                  "border-2 font-bold text-lg py-4 transition-all duration-300",
                                  isDark 
                                    ? "border-white/20 text-white hover:bg-white/10 hover:border-white/40" 
                                    : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"
                                )}
                              >
                                <Eye className="w-5 h-5 mr-3" />
                                <span>Preview</span>
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

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

        {/* Empty State */}
        <AnimatePresence>
          {filteredTemplates.length === 0 && (
            <motion.div
              className="w-full text-center py-20 px-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="text-9xl mb-8"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                🔍
              </motion.div>
              <h3 className={cn(
                "text-4xl font-bold mb-6",
                isDark ? "text-white" : "text-slate-900"
              )}>No templates found</h3>
              <p className={cn(
                "text-xl mb-10 max-w-2xl mx-auto font-medium",
                isDark ? "text-slate-400" : "text-slate-600"
              )}>
                Try adjusting your search or filter criteria to find the perfect template for your project.
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className={cn(
                  "border-2 font-bold text-lg px-8 py-4 transition-all duration-300",
                  isDark 
                    ? "border-white/20 text-white hover:bg-white/10 hover:border-white/40" 
                    : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"
                )}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}; 