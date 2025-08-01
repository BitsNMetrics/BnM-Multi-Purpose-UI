import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  Download, 
  Palette, 
  Code, 
  Smartphone,
  Globe,
  Zap,
  Shield,
  Users,
  Clock,
  Award
} from 'lucide-react';
import { defaultTemplates } from '../config/templates';

const MarketplaceDemo: React.FC = () => {
  const [activeTemplate, setActiveTemplate] = useState(0);

  const features = [
    { icon: CheckCircle, title: 'Fully Customizable', desc: 'Colors, fonts, content, and layout' },
    { icon: Smartphone, title: '100% Responsive', desc: 'Perfect on all devices and screens' },
    { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed and performance' },
    { icon: Code, title: 'Clean Code', desc: 'Well-structured, maintainable codebase' },
    { icon: Shield, title: 'SEO Optimized', desc: 'Built with search engines in mind' },
    { icon: Download, title: 'Ready to Deploy', desc: 'Export to any platform instantly' },
  ];

  const stats = [
    { number: '10+', label: 'Professional Templates' },
    { number: '100%', label: 'Responsive Design' },
    { number: '∞', label: 'Customization Options' },
    { number: '24/7', label: 'Support Available' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'This kit saved us weeks of development time. The templates are professional and highly customizable.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Freelance Developer',
      company: 'WebSolutions',
      content: 'Perfect for client projects. The export functionality is a game-changer for my workflow.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Startup Founder',
      company: 'InnovateLab',
      content: 'We launched our landing page in just 2 hours. The quality exceeded our expectations.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted by 1000+ developers worldwide
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Multi-Purpose Landing Page Kit
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-8"
            >
              Professional landing page templates for every business need. 
              Fully customizable, responsive, and ready for production deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors">
                <Download className="w-5 h-5 inline mr-2" />
                Get Started Now
              </button>
              <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-semibold text-lg transition-colors">
                View Live Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Professional Templates
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose from our collection of expertly designed templates, 
              each crafted for specific business needs and industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {defaultTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveTemplate(index)}
              >
                <div className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  activeTemplate === index 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 relative">
                    {/* Template Preview Colors */}
                    <div className="absolute inset-0 flex">
                      {['#6366f1', '#8b5cf6', '#06b6d4'].map((color, i) => (
                        <div
                          key={i}
                          className="flex-1"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    
                    {/* Template Name Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <h3 className="text-white text-sm font-bold text-center px-2">
                        {template.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-white">
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">
                      {template.name}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {template.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Kit?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built with modern technologies and best practices for optimal performance and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-slate-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600">
              Join thousands of satisfied developers and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role} at {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers who trust our landing page kit for their projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-semibold text-lg transition-colors">
              <Download className="w-5 h-5 inline mr-2" />
              Download Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold text-lg transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Multi-Purpose Landing Page Kit</h3>
              <p className="text-slate-400">
                Professional templates for every business need.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Templates</h4>
              <ul className="space-y-2 text-slate-400">
                <li>AI SaaS</li>
                <li>Agency</li>
                <li>Startup</li>
                <li>Ecommerce</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Customization</li>
                <li>Export Options</li>
                <li>Responsive Design</li>
                <li>SEO Optimized</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Documentation</li>
                <li>Live Chat</li>
                <li>Email Support</li>
                <li>Updates</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Multi-Purpose Landing Page Kit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketplaceDemo; 