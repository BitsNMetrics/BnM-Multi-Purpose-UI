import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Smartphone, Users, Zap, Shield, Clock, BarChart3 } from 'lucide-react';

interface FeaturesProps {
  config: any;
}

const Features: React.FC<FeaturesProps> = ({ config }) => {
  const features = [
    {
      icon: Smartphone,
      title: 'Cross-Platform Sync',
      description: 'Seamlessly sync your data across iOS, Android, and web platforms. Never lose your progress.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together with your team in real-time. Share tasks, assign responsibilities, and track progress.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and workflows. Focus on what matters most while we handle the rest.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols keep your data safe and compliant.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Time Tracking',
      description: 'Track time spent on tasks and projects. Get insights into your productivity patterns.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting to help you understand and improve your workflow.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Powerful Features for{' '}
            <span 
              className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              style={{ 
                background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Everything you need to stay organized, collaborate effectively, and achieve your goals faster than ever before.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              All features included in free plan
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features; 