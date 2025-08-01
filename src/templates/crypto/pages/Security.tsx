import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Fingerprint, 
  Server, 
  Key, 
  CheckCircle,
  Database,
  Network,
  Zap,
  Users
} from 'lucide-react';

interface SecurityProps {
  config: any;
}

const Security: React.FC<SecurityProps> = ({ config: _config }) => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Cold Storage",
      description: "95% of assets stored in offline cold wallets with multi-signature protection",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Multi-Signature",
      description: "Requires multiple private keys to authorize transactions, preventing unauthorized access",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 surveillance systems detect and prevent suspicious activities instantly",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Fingerprint,
      title: "Biometric Security",
      description: "Advanced fingerprint and facial recognition for account access and transactions",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Server,
      title: "DDoS Protection",
      description: "Enterprise-grade protection against distributed denial-of-service attacks",
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: Key,
      title: "Encryption",
      description: "AES-256 encryption for all data transmission and storage",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const complianceItems = [
    "SOC 2 Type II Certified",
    "ISO 27001 Compliant",
    "GDPR Compliant",
    "PCI DSS Level 1",
    "Regulated by SEC",
    "Licensed in 50+ Countries"
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
            <Shield className="w-4 h-4 mr-2" />
            Security First
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Institutional-Grade
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Security
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Your assets are protected by the same security standards used by 
            major financial institutions and government agencies worldwide.
          </motion.p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
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

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-yellow-400 mb-2"
            >
              $50B+
            </motion.div>
            <div className="text-slate-400">Assets Protected</div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-yellow-400 mb-2"
            >
              0
            </motion.div>
            <div className="text-slate-400">Security Breaches</div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-yellow-400 mb-2"
            >
              95%
            </motion.div>
            <div className="text-slate-400">Cold Storage</div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-yellow-400 mb-2"
            >
              24/7
            </motion.div>
            <div className="text-slate-400">Monitoring</div>
          </div>
        </motion.div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Compliance */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-6"
            >
              Regulatory Compliance
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-slate-300 mb-8 leading-relaxed"
            >
              We maintain the highest standards of regulatory compliance across all jurisdictions 
              where we operate, ensuring your trading activities are fully compliant with local laws.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {complianceItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + (index * 0.1), duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Security Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              {/* Security Layers Visualization */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Cold Storage</div>
                    <div className="text-slate-400 text-sm">Offline protection</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Hot Wallet</div>
                    <div className="text-slate-400 text-sm">Multi-signature</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">API Security</div>
                    <div className="text-slate-400 text-sm">Encrypted access</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">User Accounts</div>
                    <div className="text-slate-400 text-sm">Biometric auth</div>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Secure
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security; 