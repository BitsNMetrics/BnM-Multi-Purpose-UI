import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Eye, 
  Palette, 
  Download, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useTemplate } from '../core/context/TemplateContext';
import { defaultTemplates } from '../config/templates';

interface DemoGalleryProps {
  onTemplateSelect: (templateId: string) => void;
}

const DemoGallery: React.FC<DemoGalleryProps> = ({ onTemplateSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Templates', count: defaultTemplates.length },
    { id: 'business', name: 'Business', count: defaultTemplates.filter(t => ['agency', 'startup'].includes(t.id)).length },
    { id: 'tech', name: 'Technology', count: defaultTemplates.filter(t => ['ai-saas', 'mobile-app', 'crypto'].includes(t.id)).length },
    { id: 'lifestyle', name: 'Lifestyle', count: defaultTemplates.filter(t => ['fitness', 'education', 'portfolio'].includes(t.id)).length },
    { id: 'events', name: 'Events', count: defaultTemplates.filter(t => ['event'].includes(t.id)).length },
    { id: 'commerce', name: 'Commerce', count: defaultTemplates.filter(t => ['ecommerce'].includes(t.id)).length },
  ];

  const filteredTemplates = defaultTemplates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'business' && ['agency', 'startup'].includes(template.id)) ||
      (selectedCategory === 'tech' && ['ai-saas', 'mobile-app', 'crypto'].includes(template.id)) ||
      (selectedCategory === 'lifestyle' && ['fitness', 'education', 'portfolio'].includes(template.id)) ||
      (selectedCategory === 'events' && ['event'].includes(template.id)) ||
      (selectedCategory === 'commerce' && ['ecommerce'].includes(template.id));
    
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const getTemplateFeatures = (templateId: string) => {
    const features = {
      'ai-saas': ['AI Integration', 'Analytics Dashboard', 'API Ready'],
      'agency': ['Portfolio Showcase', 'Client Management', 'Service Catalog'],
      'startup': ['Pitch Deck', 'Team Profiles', 'Investor Info'],
      'ecommerce': ['Product Catalog', 'Shopping Cart', 'Payment Integration'],
      'portfolio': ['Project Gallery', 'Skills Showcase', 'Contact Forms'],
      'crypto': ['Price Charts', 'Wallet Integration', 'Trading Features'],
      'mobile-app': ['App Screenshots', 'Download Links', 'Feature Highlights'],
      'event': ['Event Schedule', 'Speaker Profiles', 'Registration'],
      'education': ['Course Catalog', 'Student Portal', 'Progress Tracking'],
      'fitness': ['Workout Plans', 'Trainer Profiles', 'Membership Options']
    };
    return features[templateId as keyof typeof features] || [];
  };

  const getTemplateColors = (templateId: string) => {
    const colors = {
      'ai-saas': ['#6366f1', '#8b5cf6', '#06b6d4'],
      'agency': ['#3b82f6', '#1e40af', '#1e293b'],
      'startup': ['#10b981', '#059669', '#064e3b'],
      'ecommerce': ['#f59e0b', '#d97706', '#92400e'],
      'portfolio': ['#8b5cf6', '#7c3aed', '#5b21b6'],
      'crypto': ['#fbbf24', '#f59e0b', '#d97706'],
      'mobile-app': ['#ec4899', '#db2777', '#be185d'],
      'event': ['#06b6d4', '#0891b2', '#0e7490'],
      'education': ['#10b981', '#059669', '#047857'],
      'fitness': ['#ef4444', '#dc2626', '#b91c1c']
    };
    return colors[templateId as keyof typeof colors] || ['#6b7280'];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Multi-Purpose Landing Page Kit
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            >
              Professional landing page templates for every business need. 
              Fully customizable, responsive, and ready for production.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center space-x-8 mt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{defaultTemplates.length}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Responsive</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">∞</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Customizable</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Eye className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              {/* Template Preview */}
              <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 overflow-hidden">
                {/* Color Preview */}
                <div className="absolute inset-0 flex">
                  {getTemplateColors(template.id).map((color, i) => (
                    <div
                      key={i}
                      className="flex-1"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                {/* Template Name Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4">
                    {template.name}
                  </h3>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onTemplateSelect(template.id)}
                    className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    title="Preview Template"
                  >
                    <Eye className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                  </button>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {template.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                  {template.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {getTemplateFeatures(template.id).slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => onTemplateSelect(template.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                    Preview
                  </button>
                  <button
                    onClick={() => onTemplateSelect(template.id)}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    title="Customize"
                  >
                    <Palette className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-slate-400 dark:text-slate-500 text-lg">
              No templates found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Choose any template, customize it to match your brand, and export it ready for production. 
              No coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onTemplateSelect('ai-saas')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Start Customizing
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <Download className="h-4 w-4" />
                Download All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoGallery; 