import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Target, 
  Users, 
  Globe, 
  Smartphone, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface ServicesProps {
  config: any;
}

const Services: React.FC<ServicesProps> = ({ config }) => {
  const services = [
    {
      icon: Target,
      title: 'Strategic Consulting',
      description: 'Data-driven insights to optimize your business strategy and drive sustainable growth.',
      features: ['Market Analysis', 'Competitive Research', 'Growth Strategy', 'Performance Metrics'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions to increase your online presence and conversions.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Social Media', 'Content Marketing'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Brand Development',
      description: 'Create a powerful brand identity that resonates with your target audience.',
      features: ['Brand Strategy', 'Visual Identity', 'Messaging', 'Brand Guidelines'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications that deliver exceptional user experiences.',
      features: ['Custom Design', 'Responsive Development', 'E-commerce', 'Performance Optimization'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Native Development', 'Cross-platform', 'UI/UX Design', 'App Store Optimization'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Optimization',
      description: 'Data-driven insights and continuous optimization to maximize your ROI.',
      features: ['Performance Tracking', 'A/B Testing', 'Conversion Optimization', 'ROI Analysis'],
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <div className="relative">
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
            Our Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We offer comprehensive business solutions designed to help your company grow, scale, and succeed in today's competitive market.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="flex items-center text-sm font-semibold text-slate-700 dark:text-white hover:text-slate-900 dark:hover:text-white transition-colors group-hover:translate-x-1">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
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
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals and drive sustainable growth.
            </p>
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              Schedule Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 