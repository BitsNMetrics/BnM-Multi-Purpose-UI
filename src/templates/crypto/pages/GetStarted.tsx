import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  Shield, 
  CreditCard, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Download,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';

interface GetStartedProps {
  config: any;
}

const GetStarted: React.FC<GetStartedProps> = ({ config: _config }) => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Account",
      description: "Sign up with your email and complete identity verification",
      gradient: "from-blue-500 to-cyan-500",
      details: [
        "Email verification",
        "KYC/AML compliance",
        "Two-factor authentication",
        "Account security setup"
      ]
    },
    {
      icon: Shield,
      title: "Verify Identity",
      description: "Complete KYC verification to unlock full trading features",
      gradient: "from-green-500 to-emerald-500",
      details: [
        "Government ID upload",
        "Proof of address",
        "Facial recognition",
        "Background check"
      ]
    },
    {
      icon: CreditCard,
      title: "Deposit Funds",
      description: "Add funds using bank transfer, card, or cryptocurrency",
      gradient: "from-yellow-500 to-orange-500",
      details: [
        "Bank wire transfer",
        "Credit/debit cards",
        "Cryptocurrency deposits",
        "Instant verification"
      ]
    },
    {
      icon: TrendingUp,
      title: "Start Trading",
      description: "Begin trading with advanced charts and real-time data",
      gradient: "from-purple-500 to-pink-500",
      details: [
        "Real-time market data",
        "Advanced trading tools",
        "Portfolio tracking",
        "Risk management"
      ]
    }
  ];

  const features = [
    {
      icon: Download,
      title: "Mobile App",
      description: "Trade on the go with our iOS and Android apps"
    },
    {
      icon: Smartphone,
      title: "Demo Account",
      description: "Practice with virtual funds before trading real money"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Available in 150+ countries with local support"
    },
    {
      icon: Zap,
      title: "Fast Setup",
      description: "Get started in under 10 minutes with instant verification"
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
            <UserPlus className="w-4 h-4 mr-2" />
            Get Started
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Start Trading in
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Minutes
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Join millions of traders worldwide. Our simple 4-step process 
            gets you trading cryptocurrencies safely and securely in minutes.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -left-4 -top-4 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                {/* Step Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Details */}
                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (detailIndex * 0.1), duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + (index * 0.1), duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-12 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Trading?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join over 2 million traders who trust our platform for their cryptocurrency trading. 
              Get started today and experience the future of digital asset trading.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <span>Create Free Account</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-700/50 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400">2M+</div>
                <div className="text-slate-400 text-sm">Active Traders</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">$50B+</div>
                <div className="text-slate-400 text-sm">Trading Volume</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                <div className="text-slate-400 text-sm">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-slate-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted; 