import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Award } from 'lucide-react';

interface PricingProps {
  config: any;
}

const Pricing: React.FC<PricingProps> = ({ config }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const pricingPlans = [
    {
      name: 'Early Bird',
      description: 'Perfect for startups and small teams',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Up to 5 team members',
        'Core features included',
        'Email support',
        'Basic analytics',
        'API access',
        'Community forum'
      ],
      popular: false,
      icon: Star,
      color: 'from-blue-500 to-blue-600',
      badge: 'Limited Time'
    },
    {
      name: 'Founder',
      description: 'Ideal for growing companies',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        'Up to 25 team members',
        'All Early Bird features',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'White-label options',
        'Dedicated success manager'
      ],
      popular: true,
      icon: Zap,
      color: 'from-green-500 to-green-600',
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'Unlimited team members',
        'All Founder features',
        '24/7 phone support',
        'Custom development',
        'SLA guarantee',
        'On-premise deployment',
        'Custom training',
        'Dedicated account manager'
      ],
      popular: false,
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      badge: 'Enterprise'
    }
  ];

  const savings = billingCycle === 'yearly' ? 17 : 0;

  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
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
            Simple, Transparent <span style={{ color: config.colors.primary }}>Pricing</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Choose the perfect plan for your team. All plans include our core features with flexible pricing options.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Yearly
                {savings > 0 && (
                  <span className="ml-2 px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
                    Save {savings}%
                  </span>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-2 scale-105' 
                    : 'border-slate-200 dark:border-slate-700'
                }`}
                style={{
                  borderColor: plan.popular ? config.colors.primary : undefined
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-white font-semibold text-sm"
                    style={{ backgroundColor: config.colors.primary }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">
                      ${price}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 ml-2">
                      /{billingCycle === 'monthly' ? 'mo' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                      Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} per year
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                      : 'border-2 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                  style={{
                    backgroundColor: plan.popular ? config.colors.primary : 'transparent',
                    borderColor: plan.popular ? config.colors.primary : config.colors.primary,
                    color: plan.popular ? 'white' : config.colors.primary
                  }}
                >
                  Get Started
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Shield className="w-6 h-6" style={{ color: config.colors.primary }} />
                <span className="text-slate-700 dark:text-slate-300">30-day free trial</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Users className="w-6 h-6" style={{ color: config.colors.primary }} />
                <span className="text-slate-700 dark:text-slate-300">No setup fees</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Award className="w-6 h-6" style={{ color: config.colors.primary }} />
                <span className="text-slate-700 dark:text-slate-300">Cancel anytime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 