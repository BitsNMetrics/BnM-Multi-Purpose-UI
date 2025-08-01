import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Users, Shield, Globe, Sparkles } from 'lucide-react';

interface PricingProps {
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

const Pricing: React.FC<PricingProps> = ({ config }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const colors = config?.colors || {
    primary: '#8b5cf6',
    secondary: '#a855f7',
    accent: '#c084fc',
  };

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: isAnnual ? 29 : 39,
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 10,000 data points',
        'Basic AI analytics',
        '5 team members',
        'Email support',
        'Standard dashboards',
        'API access'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      popular: false
    },
    {
      name: 'Professional',
      icon: Crown,
      price: isAnnual ? 99 : 129,
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 data points',
        'Advanced AI analytics',
        'Unlimited team members',
        'Priority support',
        'Custom dashboards',
        'Advanced API access',
        'White-label options',
        'Advanced security'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Sparkles,
      price: isAnnual ? 299 : 399,
      description: 'For large organizations',
      features: [
        'Unlimited data points',
        'Custom AI models',
        'Unlimited everything',
        '24/7 phone support',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise deployment'
      ],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      popular: false
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${colors.primary}10` }}
        ></div>
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${colors.secondary}10` }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
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
            className="inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-6"
            style={{ 
              backgroundColor: `${colors.primary}20`,
              borderColor: `${colors.primary}30`,
              color: colors.primary
            }}
          >
            <Star className="w-4 h-4 mr-2" />
            Simple, Transparent Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Choose the Perfect
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Plan for Your Business
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Start free and scale as you grow. No hidden fees, no surprises. Cancel anytime.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <span className={`text-lg font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-purple-600' : 'bg-slate-600'
              }`}
              style={{ 
                backgroundColor: isAnnual ? colors.primary : '#475569'
              }}
            >
              <motion.div
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ duration: 0.3 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
              />
            </button>
            <span className={`text-lg font-medium ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Annual
              <span className="ml-2 px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                Save 25%
              </span>
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative group ${plan.popular ? 'md:-mt-8 md:mb-8' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="text-white px-6 py-2 rounded-full text-sm font-semibold"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` 
                    }}
                  >
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`relative h-full p-8 rounded-3xl border ${plan.borderColor} ${plan.bgColor} backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/10 ${
                plan.popular ? 'ring-2 ring-purple-500/50' : ''
              }`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` 
                    }}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-6">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-slate-400 ml-2">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-slate-500 mt-2">Billed annually</p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'text-white shadow-2xl group-hover:scale-105'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                  style={{ 
                    background: plan.popular 
                      ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
                      : undefined,
                    boxShadow: plan.popular ? `0 25px 50px -12px ${colors.primary}40` : undefined
                  }}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl border border-white/10 p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Contact our sales team for enterprise pricing and custom integrations tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  boxShadow: `0 25px 50px -12px ${colors.primary}40`
                }}
              >
                Contact Sales
              </button>
              <button className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 mb-8">Trusted by 10,000+ companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {[Shield, Globe, Users, Star].map((Icon, index) => (
              <div key={index} className="flex items-center text-slate-400">
                <Icon className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Trusted</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 