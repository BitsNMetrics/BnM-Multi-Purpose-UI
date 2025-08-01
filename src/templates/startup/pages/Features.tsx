import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, BarChart3, Settings, Smartphone } from 'lucide-react';

interface FeaturesProps {
  config: any;
}

const Features: React.FC<FeaturesProps> = ({ config }) => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process data and complete tasks in milliseconds, not minutes.',
      details: ['Real-time processing', 'Instant results', 'Optimized algorithms']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance.',
      details: ['SOC 2 Type II', 'GDPR compliant', '256-bit encryption']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration tools.',
      details: ['Live editing', 'Version control', 'Role-based access']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights with powerful analytics and reporting.',
      details: ['Custom dashboards', 'Real-time metrics', 'Predictive analytics']
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Connect with your existing tools and workflows effortlessly.',
      details: ['API-first design', '100+ integrations', 'Custom webhooks']
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Access your data and manage workflows from anywhere.',
      details: ['Native mobile apps', 'Offline support', 'Push notifications']
    }
  ];

  return (
    <section className="w-full py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Powerful <span style={{ color: config.colors.primary }}>Features</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Everything you need to streamline your operations, boost productivity, and scale your business 
            with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div 
                  className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${config.colors.primary}20, ${config.colors.secondary}20)` 
                  }}
                >
                  <IconComponent 
                    className="w-8 h-8" 
                    style={{ color: config.colors.primary }}
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <div 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: config.colors.primary }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              See It in Action
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Experience the power of our platform with a personalized demo.
            </p>
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              Request Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 