import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Shield, 
  Zap, 
  TrendingUp, 
  Lock, 
  Globe, 
  Smartphone, 
  Cpu,
  DollarSign,
  Users,
  Clock,
  Target
} from 'lucide-react';

interface FeaturesProps {
  config: any;
}

const Features: React.FC<FeaturesProps> = ({ config: _config }) => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Charts",
      description: "Professional trading charts with 100+ technical indicators, drawing tools, and real-time data feeds.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Institutional Security",
      description: "Bank-grade security with cold storage, multi-signature wallets, and 24/7 monitoring.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Ultra-low latency trading with execution speeds under 10ms and 99.9% uptime guarantee.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Smart Trading",
      description: "AI-powered trading bots, automated strategies, and portfolio optimization tools.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Lock,
      title: "Regulated Platform",
      description: "Fully compliant with global regulations, licensed in multiple jurisdictions worldwide.",
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Trade 200+ cryptocurrencies across 150+ countries with local payment methods.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Seamless mobile experience with real-time alerts, biometric login, and touch-optimized interface.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "API Access",
      description: "REST and WebSocket APIs for algorithmic trading, custom integrations, and automated systems.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: DollarSign,
      title: "Low Fees",
      description: "Competitive trading fees starting from 0.1% with volume discounts and maker rebates.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join our active trading community with educational resources, market analysis, and expert insights.",
      gradient: "from-rose-500 to-red-500"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support with live chat, email, and dedicated account managers.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Target,
      title: "Portfolio Analytics",
      description: "Advanced portfolio tracking with performance metrics, risk analysis, and tax reporting tools.",
      gradient: "from-cyan-500 to-blue-500"
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
            <Zap className="w-4 h-4 mr-2" />
            Trading Features
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Everything You Need to
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Trade Like a Pro
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Our platform combines cutting-edge technology with institutional-grade security 
            to provide the ultimate trading experience for both beginners and professionals.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-yellow-400 mb-2"
            >
              200+
            </motion.div>
            <div className="text-slate-400">Cryptocurrencies</div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-yellow-400 mb-2"
            >
              150+
            </motion.div>
            <div className="text-slate-400">Countries</div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-yellow-400 mb-2"
            >
              10ms
            </motion.div>
            <div className="text-slate-400">Execution Speed</div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-yellow-400 mb-2"
            >
              99.9%
            </motion.div>
            <div className="text-slate-400">Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 