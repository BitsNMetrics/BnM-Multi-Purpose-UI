import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Users, Calendar } from 'lucide-react';

interface PricingProps {
  config: any;
}

const Pricing: React.FC<PricingProps> = ({ config }) => {

  const plans = [
    {
      name: "Basic",
      price: "29",
      period: "month",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to basic workout library",
        "5 workout plans per month",
        "Basic progress tracking",
        "Email support",
        "Mobile app access",
        "Community forum access"
      ],
      popular: false,
      icon: Users,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Pro",
      price: "59",
      period: "month",
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "Everything in Basic",
        "Unlimited workout plans",
        "Personalized training programs",
        "1-on-1 trainer consultation",
        "Advanced analytics & insights",
        "Nutrition planning",
        "Video form analysis",
        "Priority support",
        "Exclusive content access"
      ],
      popular: true,
      icon: Zap,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Elite",
      price: "99",
      period: "month",
      description: "Ultimate fitness experience with premium features",
      features: [
        "Everything in Pro",
        "Unlimited trainer consultations",
        "Custom meal plans",
        "Recovery & wellness tracking",
        "Advanced body composition analysis",
        "Group training sessions",
        "Exclusive workshops",
        "Merchandise discounts",
        "24/7 priority support",
        "Personal success coach"
      ],
      popular: false,
      icon: Crown,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const addOns = [
    {
      name: "Personal Training Sessions",
      price: "75",
      period: "per session",
      description: "One-on-one sessions with certified personal trainers",
      features: ["Customized workout plans", "Form correction", "Progress tracking", "Nutrition guidance"]
    },
    {
      name: "Nutrition Coaching",
      price: "45",
      period: "per month",
      description: "Personalized nutrition plans and coaching",
      features: ["Custom meal plans", "Macro tracking", "Supplement guidance", "Weekly check-ins"]
    },
    {
      name: "Recovery & Wellness",
      price: "35",
      period: "per month",
      description: "Recovery tools and wellness programs",
      features: ["Stretching routines", "Mobility work", "Recovery tracking", "Wellness coaching"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Choose Your Fitness Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible pricing plans designed to fit your fitness goals and budget. Start your transformation today.
          </p>
        </motion.div>

        {/* Main Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-red-500 dark:border-red-500 scale-105' 
                  : 'border-gray-100 dark:border-gray-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}>
                {plan.popular ? 'Start Free Trial' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {addon.name}
                </h4>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-red-600 dark:text-red-400">${addon.price}</span>
                  <span className="text-gray-600 dark:text-gray-300">/{addon.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {addon.description}
                </p>
                <div className="space-y-2 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 border border-red-600 dark:border-red-400 py-2 px-4 rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300">
                  Add Service
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Can I cancel my subscription anytime?
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Is there a free trial available?
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! We offer a 7-day free trial for all Pro and Elite plans. No credit card required.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Can I change my plan later?
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! You can upgrade or downgrade your plan at any time from your account dashboard.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                What payment methods do you accept?
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                We accept all major credit cards, PayPal, and Apple Pay. All payments are secure and encrypted.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Fitness Journey?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of members who have already transformed their lives with {config.brandName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-red-600 text-red-600 dark:text-red-400 px-8 py-3 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 