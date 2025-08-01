import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';

interface PricingProps {
  config: any;
}

const Pricing: React.FC<PricingProps> = ({ config: _config }) => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for beginners getting started with crypto trading",
      features: [
        "Basic trading interface",
        "10 cryptocurrencies",
        "0.5% trading fees",
        "Email support",
        "Mobile app access",
        "Basic charts"
      ],
      popular: false,
      gradient: "from-slate-600 to-slate-700"
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Advanced features for serious traders",
      features: [
        "Advanced trading interface",
        "100+ cryptocurrencies",
        "0.2% trading fees",
        "Priority support",
        "Advanced charts & indicators",
        "API access",
        "Portfolio analytics",
        "Trading bots"
      ],
      popular: true,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Institutional",
      price: "$99",
      period: "/month",
      description: "Enterprise-grade platform for professional traders",
      features: [
        "Institutional trading interface",
        "200+ cryptocurrencies",
        "0.1% trading fees",
        "Dedicated account manager",
        "Custom trading strategies",
        "White-label solutions",
        "Advanced risk management",
        "24/7 phone support"
      ],
      popular: false,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Pricing Plans
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Choose Your
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Trading Plan
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Start trading for free or upgrade to unlock advanced features, 
            lower fees, and professional trading tools.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div className={`relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border ${
                plan.popular 
                  ? 'border-yellow-500/50 shadow-2xl shadow-yellow-500/20' 
                  : 'border-slate-700/50'
              } hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105`}>
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (featureIndex * 0.1), duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index * 0.2) + 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-lg hover:shadow-yellow-500/25'
                      : 'bg-slate-700/50 text-white border border-slate-600 hover:bg-slate-700/70'
                  }`}
                >
                  {plan.name === "Starter" ? "Get Started Free" : "Choose Plan"}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Secure Trading</div>
                  <div className="text-slate-400 text-sm">Bank-grade security</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Fast Execution</div>
                  <div className="text-slate-400 text-sm">Under 10ms latency</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">24/7 Support</div>
                  <div className="text-slate-400 text-sm">Always here to help</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 