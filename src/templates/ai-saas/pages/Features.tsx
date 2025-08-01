import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, BarChart3, Cpu, Database, Cloud, Lock, Target, TrendingUp, Users, Globe, Settings, Palette, Code, Smartphone, Sparkles, Rocket, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../../core/components/Button';

interface FeaturesProps {
  config?: {
    brandName?: string;
    colors?: {
      primary: string;
      secondary: string;
      accent: string;
    };
    font?: string;
  };
}

const Features: React.FC<FeaturesProps> = ({ config }) => {
  const colors = config?.colors || {
    primary: '#8b5cf6',
    secondary: '#a855f7',
    accent: '#c084fc',
  };

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Analytics',
      description: 'Machine learning algorithms that analyze your data patterns and provide intelligent insights for better decision-making.',
      benefits: ['Predictive Analytics', 'Pattern Recognition', 'Real-time Processing'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized algorithms and cloud infrastructure ensure your data is processed and analyzed in milliseconds.',
      benefits: ['Sub-second Response', 'Scalable Architecture', 'Global CDN'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.',
      benefits: ['256-bit Encryption', 'SOC 2 Certified', 'GDPR Compliant'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: BarChart3,
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards that update in real-time, providing instant visibility into your business metrics.',
      benefits: ['Live Updates', 'Custom Widgets', 'Mobile Responsive'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: Cpu,
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and workflows with intelligent triggers and conditional logic.',
      benefits: ['Workflow Automation', 'Smart Triggers', 'Conditional Logic'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect with 100+ data sources including CRMs, ERPs, and custom APIs for comprehensive analysis.',
      benefits: ['100+ Integrations', 'API Support', 'Custom Connectors'],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20'
    }
  ];

  const advancedFeatures = [
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Built on modern cloud infrastructure for unlimited scalability and reliability.',
      iconColor: 'text-blue-500'
    },
    {
      icon: Lock,
      title: 'Zero-Trust Security',
      description: 'Advanced security model that verifies every request and connection.',
      iconColor: 'text-green-500'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'AI-powered audience segmentation and personalized recommendations.',
      iconColor: 'text-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Data-driven insights to optimize your business growth strategies.',
      iconColor: 'text-orange-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools for teams to work together efficiently.',
      iconColor: 'text-indigo-500'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Deploy your AI solutions across multiple regions and cloud providers.',
      iconColor: 'text-teal-500'
    }
  ];

  const customizationOptions = [
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Fully customizable themes, colors, and branding to match your company identity.',
      features: ['Custom Themes', 'Brand Colors', 'Logo Integration']
    },
    {
      icon: Code,
      title: 'API Access',
      description: 'RESTful APIs and SDKs for custom integrations and third-party applications.',
      features: ['REST APIs', 'Webhooks', 'SDK Libraries']
    },
    {
      icon: Settings,
      title: 'Advanced Configuration',
      description: 'Granular control over AI models, algorithms, and processing parameters.',
      features: ['Model Tuning', 'Algorithm Selection', 'Parameter Control']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native mobile applications for iOS and Android with full feature parity.',
      features: ['iOS App', 'Android App', 'Offline Support']
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ backgroundColor: `${colors.primary}10` }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ backgroundColor: `${colors.secondary}10` }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center px-6 py-3 rounded-full border text-sm font-semibold mb-8 shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
              borderColor: `${colors.primary}30`,
              color: colors.primary
            }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
            <Star className="w-4 h-4 ml-2" style={{ color: colors.accent }} />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI-powered tools designed to transform your business operations, 
            enhance productivity, and drive growth across all departments.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`h-full p-8 rounded-3xl border-2 border-slate-200/50 dark:border-slate-700/50 ${feature.bgColor} hover:shadow-2xl transition-all duration-500 hover:scale-105`}>
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` 
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Button variant="outline" className="w-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Advanced Capabilities
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Enterprise-grade features designed for scale, security, and performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)` 
                  }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: colors.primary }} />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customization Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-3xl p-12"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Customization Options
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Tailor the platform to your specific business needs and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customizationOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)` 
                  }}
                >
                  <option.icon className="w-8 h-8" style={{ color: colors.primary }} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {option.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              className="text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                boxShadow: `0 25px 50px -12px ${colors.primary}40`
              }}
            >
              <Rocket className="w-6 h-6 mr-3" />
              Explore All Features
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 