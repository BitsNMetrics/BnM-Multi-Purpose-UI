import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, DollarSign, Users, Zap, XCircle } from 'lucide-react';

interface ProblemProps {
  config: any;
}

const Problem: React.FC<ProblemProps> = ({ config }) => {
  const problems = [
    {
      icon: Clock,
      title: 'Time-Consuming Processes',
      description: 'Manual workflows that take hours to complete, reducing productivity and increasing frustration.',
      impact: 'Loses 15+ hours per week'
    },
    {
      icon: DollarSign,
      title: 'High Operational Costs',
      description: 'Expensive legacy systems and inefficient processes that drain resources and limit growth.',
      impact: 'Costs $50K+ annually'
    },
    {
      icon: Users,
      title: 'Poor User Experience',
      description: 'Complex interfaces and confusing workflows that drive users away and reduce engagement.',
      impact: '40% user drop-off rate'
    },
    {
      icon: AlertTriangle,
      title: 'Security Vulnerabilities',
      description: 'Outdated systems with known security flaws that put sensitive data at risk.',
      impact: 'High security risk'
    },
    {
      icon: XCircle,
      title: 'Limited Scalability',
      description: 'Systems that can\'t handle growth, causing bottlenecks and missed opportunities.',
      impact: 'Blocks 60% growth potential'
    },
    {
      icon: Zap,
      title: 'Lack of Innovation',
      description: 'Stagnant technology that prevents companies from staying competitive in the market.',
      impact: 'Falling behind competitors'
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
            The Problem We're <span style={{ color: config.colors.primary }}>Solving</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Traditional solutions are failing to meet the demands of modern businesses. 
            We've identified the key pain points that are holding companies back from reaching their full potential.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <motion.div
                key={problem.title}
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
                  {problem.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {problem.description}
                </p>
                
                <div 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${config.colors.primary}20`,
                    color: config.colors.primary
                  }}
                >
                  {problem.impact}
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
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Sound Familiar?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              If you're experiencing these challenges, you're not alone. 
              Join thousands of companies that are ready for a better solution.
            </p>
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              See Our Solution
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem; 