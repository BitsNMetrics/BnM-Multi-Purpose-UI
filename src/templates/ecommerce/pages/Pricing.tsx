import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Truck, Clock } from 'lucide-react';

interface PricingProps {
  config: any;
}

const Pricing: React.FC<PricingProps> = ({ config }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Basic product features',
        'Email support',
        '5GB storage',
        'Standard shipping',
        '30-day return policy'
      ],
      popular: false,
      icon: Shield,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        'All Starter features',
        'Priority support',
        '25GB storage',
        'Free shipping',
        '60-day return policy',
        'Advanced analytics',
        'Custom branding'
      ],
      popular: true,
      icon: Zap,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'All Professional features',
        '24/7 phone support',
        'Unlimited storage',
        'Express shipping',
        '90-day return policy',
        'White-label solution',
        'API access',
        'Dedicated account manager'
      ],
      popular: false,
      icon: Star,
      color: 'from-purple-500 to-purple-600'
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
            Choose Your <span style={{ color: config.colors.primary }}>Plan</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Get the perfect plan for your business needs. All plans include our core features with flexible pricing options.
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
                    Most Popular
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
                <Truck className="w-6 h-6" style={{ color: config.colors.primary }} />
                <span className="text-slate-700 dark:text-slate-300">Free Shipping</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Shield className="w-6 h-6" style={{ color: config.colors.primary }} />
                <span className="text-slate-700 dark:text-slate-300">Secure Payment</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-6 h-6" style={{ color: config.colors.primary }} />
                <span className="text-slate-700 dark:text-slate-300">24/7 Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 