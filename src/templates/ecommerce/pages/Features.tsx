import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Leaf, Wifi, Battery } from 'lucide-react';

interface FeaturesProps {
  config: any;
}

const Features: React.FC<FeaturesProps> = ({ config }) => {
  const features = [
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Uses 40% less energy than traditional devices while maintaining peak performance.',
      highlight: '40% Less Energy'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with end-to-end encryption and regular updates.',
      highlight: 'Bank-Level Security'
    },
    {
      icon: Smartphone,
      title: 'Smart Connectivity',
      description: 'Seamlessly connects with your smartphone and other smart home devices.',
      highlight: 'IoT Ready'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Made from sustainable materials and designed for minimal environmental impact.',
      highlight: '100% Sustainable'
    },
    {
      icon: Wifi,
      title: 'Wireless Design',
      description: 'No messy cables with our advanced wireless technology and long-range connectivity.',
      highlight: 'Wireless Freedom'
    },
    {
      icon: Battery,
      title: 'Long Battery Life',
      description: 'Up to 48 hours of continuous use on a single charge with fast charging.',
      highlight: '48h Battery'
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Discover what makes our products stand out from the competition with cutting-edge technology and innovative design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full">
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlight */}
                <div 
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: config.colors.accent }}
                >
                  {feature.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-12 border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50K+', label: 'Happy Customers' },
                { number: '4.9★', label: 'Average Rating' },
                { number: '24/7', label: 'Support' },
                { number: '2Y', label: 'Warranty' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features; 