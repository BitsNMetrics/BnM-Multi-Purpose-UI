import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Brain, ChartBar, Zap, CheckCircle, Play, Download, Settings, BarChart3 } from 'lucide-react';

interface HowItWorksProps {
  config?: {
    brandName?: string;
    colors?: {
      primary?: string;
      secondary?: string;
      accent?: string;
    };
  };
}

const HowItWorks: React.FC<HowItWorksProps> = ({ config }) => {
  const { brandName = 'Nova AI', colors = { primary: '#8b5cf6', secondary: '#a855f7', accent: '#c084fc' } } = config || {};

  const steps = [
    {
      icon: Upload,
      title: 'Connect Your Data',
      description: 'Seamlessly integrate with your existing tools and databases. Support for 100+ integrations including CRM, ERP, and analytics platforms.',
      features: ['One-click API integration', 'Real-time data sync', 'Secure data encryption'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Brain,
      title: 'AI Analysis & Processing',
      description: 'Our advanced AI algorithms analyze your data in real-time, identifying patterns, trends, and actionable insights.',
      features: ['Machine learning models', 'Predictive analytics', 'Natural language processing'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: ChartBar,
      title: 'Get Actionable Insights',
      description: 'Receive personalized recommendations, automated reports, and intelligent alerts to optimize your business decisions.',
      features: ['Custom dashboards', 'Automated reporting', 'Smart notifications'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 rounded-full border text-sm font-semibold mb-8"
              style={{
                background: `linear-gradient(to right, ${colors.primary}20, ${colors.secondary}20)`,
                borderColor: `${colors.primary}40`,
                color: colors.primary
              }}
            >
              <Zap className="w-4 h-4 mr-2" />
              Simple 3-Step Process
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6"
            >
              How It Works
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            >
              Get started with {brandName} in just three simple steps. Our platform makes AI accessible to everyone.
            </motion.p>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 dark:from-slate-400 dark:to-slate-500 flex items-center justify-center text-white font-bold text-sm z-20">
                    {index + 1}
                  </div>

                  {/* Step Card */}
                  <div className={`${step.bgColor} rounded-3xl p-8 lg:p-10 border border-slate-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} mb-6 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <button className="mt-6 w-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:shadow-lg">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interactive Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 lg:mt-32"
          >
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-center text-white">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  See It In Action
                </h3>
                <p className="text-xl text-slate-300 mb-8">
                  Watch how Nova AI transforms your data into actionable insights in real-time.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    <Play className="w-5 h-5 mr-2 inline" />
                    Watch Demo
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20">
                    <Download className="w-5 h-5 mr-2 inline" />
                    Download Guide
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '5 min', label: 'Setup Time', icon: Settings },
              { number: '99.9%', label: 'Accuracy', icon: CheckCircle },
              { number: '24/7', label: 'Monitoring', icon: BarChart3 },
              { number: '100+', label: 'Integrations', icon: Zap },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 