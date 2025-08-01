import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, TrendingUp, Users, Star } from 'lucide-react';

interface SolutionProps {
  config: any;
}

const Solution: React.FC<SolutionProps> = ({ config }) => {
  const solutions = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Our platform processes tasks 10x faster than traditional solutions, saving hours of manual work.',
      benefit: '90% time reduction'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Built with the latest security protocols and compliance standards to protect your sensitive data.',
      benefit: '99.9% uptime guarantee'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      description: 'Grows with your business, handling increased load without performance degradation.',
      benefit: 'Unlimited scalability'
    },
    {
      icon: Users,
      title: 'Intuitive User Experience',
      description: 'Designed with users in mind, featuring clean interfaces and streamlined workflows.',
      benefit: '95% user satisfaction'
    },
    {
      icon: Star,
      title: 'AI-Powered Intelligence',
      description: 'Advanced algorithms that learn and adapt to your specific needs and preferences.',
      benefit: 'Smart automation'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Trusted by thousands of companies worldwide with measurable improvements in efficiency.',
      benefit: 'ROI in 30 days'
    }
  ];

  const stats = [
    { number: '10x', label: 'Faster Performance' },
    { number: '90%', label: 'Cost Reduction' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
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
            Our <span style={{ color: config.colors.primary }}>Solution</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We've built a revolutionary platform that addresses every pain point with cutting-edge technology 
            and innovative design principles.
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

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.title}
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
                  {solution.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <div 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${config.colors.primary}20`,
                    color: config.colors.primary
                  }}
                >
                  {solution.benefit}
                </div>
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
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Join the thousands of companies that have already revolutionized their operations with our platform.
            </p>
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution; 