import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Shield, Heart, Star, Award } from 'lucide-react';

interface BenefitsProps {
  config: any;
}

const Benefits: React.FC<BenefitsProps> = ({ config }) => {
  const benefits = [
    {
      icon: Leaf,
      title: 'Eco-Friendly Design',
      description: 'Made with sustainable materials and environmentally conscious manufacturing processes.',
      features: ['Recycled materials', 'Biodegradable packaging', 'Carbon neutral shipping']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Engineered for maximum efficiency and reliability in all conditions.',
      features: ['Advanced technology', 'Energy efficient', 'Long-lasting durability']
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Rigorous testing and quality control ensure every product meets our high standards.',
      features: ['2-year warranty', 'Quality tested', 'Premium materials']
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Exceptional customer service and support throughout your entire journey.',
      features: ['24/7 support', 'Easy returns', 'Personalized assistance']
    },
    {
      icon: Star,
      title: 'Award Winning',
      description: 'Recognized by industry experts and trusted by thousands of satisfied customers.',
      features: ['Industry awards', 'Customer choice', 'Expert recommended']
    },
    {
      icon: Award,
      title: 'Innovation Leader',
      description: 'Pioneering new technologies and setting industry standards for excellence.',
      features: ['Cutting-edge tech', 'Industry first', 'Future-proof design']
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Customer Satisfaction' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '24/7', label: 'Support Available' },
    { number: '2-Year', label: 'Warranty' }
  ];

  return (
    <section className="w-full py-20 bg-white dark:bg-slate-900">
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
            Why Choose <span style={{ color: config.colors.primary }}>Our Products</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover the unique advantages that make our products stand out from the competition and deliver exceptional value to our customers.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: config.colors.primary }}
              >
                {stat.number}
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
                  {benefit.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <div 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: config.colors.primary }}
                      />
                      {feature}
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
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Experience the Difference
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Join thousands of satisfied customers who have already discovered the benefits of our premium products.
            </p>
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              Shop Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 