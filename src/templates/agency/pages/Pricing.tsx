import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star,
  ArrowRight,
  Users,
  Target,
  Award
} from 'lucide-react';

interface PricingProps {
  config: any;
}

const Pricing: React.FC<PricingProps> = ({ config }) => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses looking to establish their online presence.',
      features: [
        'Website Design & Development',
        'Basic SEO Optimization',
        'Social Media Setup',
        'Monthly Analytics Report',
        'Email Support',
        '2 Revisions'
      ],
      popular: false,
      icon: Target
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'Comprehensive digital marketing and development services for growing businesses.',
      features: [
        'Everything in Starter',
        'Advanced SEO Strategy',
        'Content Marketing',
        'PPC Campaign Management',
        'Social Media Management',
        'Weekly Analytics Report',
        'Priority Support',
        'Unlimited Revisions'
      ],
      popular: true,
      icon: Award
    },
    {
      name: 'Enterprise',
      price: '$10,000',
      period: '/month',
      description: 'Full-service digital transformation for large organizations.',
      features: [
        'Everything in Professional',
        'Custom Software Development',
        'Advanced Analytics & Reporting',
        'Dedicated Account Manager',
        '24/7 Priority Support',
        'Custom Integrations',
        'Performance Optimization',
        'Security Audits'
      ],
      popular: false,
      icon: Users
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
            Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our proven methodology and dedicated support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border ${
                plan.popular 
                  ? 'border-blue-500/50 dark:border-blue-400/50 ring-2 ring-blue-500/20' 
                  : 'border-slate-200/50 dark:border-slate-700/50'
              } hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 inline" />
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
              Need a Custom Solution?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              We offer custom pricing for enterprise clients and specialized projects. Let's discuss your specific needs.
            </p>
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              Contact Us for Custom Quote
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing; 