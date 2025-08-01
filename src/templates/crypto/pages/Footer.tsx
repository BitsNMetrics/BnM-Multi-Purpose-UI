import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Github, 
  Globe,
  Shield,
  TrendingUp,
  Smartphone,
  Download,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  config: any;
}

const Footer: React.FC<FooterProps> = ({ config: _config }) => {
  const footerLinks = {
    product: [
      { name: "Trading Platform", href: "#" },
      { name: "Mobile App", href: "#" },
      { name: "API Access", href: "#" },
      { name: "Trading Bots", href: "#" },
      { name: "Portfolio Analytics", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Contact", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Trading Guide", href: "#" },
      { name: "Security", href: "#" },
      { name: "Status", href: "#" },
      { name: "Support", href: "#" }
    ],
    legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
      { name: "Licenses", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">₿</span>
                </div>
                <span className="text-2xl font-bold text-white">CryptoFlow</span>
              </div>
              
              <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                The world's most advanced cryptocurrency trading platform. 
                Join millions of traders who trust us with their digital assets.
              </p>

              {/* Download App Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex items-center space-x-3 px-6 py-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors duration-300">
                  <Download className="w-5 h-5 text-white" />
                  <div className="text-left">
                    <div className="text-white text-sm font-medium">Download App</div>
                    <div className="text-slate-400 text-xs">iOS & Android</div>
                  </div>
                </button>
                
                <button className="flex items-center space-x-3 px-6 py-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors duration-300">
                  <Globe className="w-5 h-5 text-white" />
                  <div className="text-left">
                    <div className="text-white text-sm font-medium">Web Platform</div>
                    <div className="text-slate-400 text-xs">Trade anywhere</div>
                  </div>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-yellow-400 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Links Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1), duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stay Updated
                </h3>
                <p className="text-slate-300">
                  Get the latest trading insights, market updates, and platform features 
                  delivered to your inbox.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                />
                <button className="group px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center">
                  <span>Subscribe</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 border-t border-slate-800"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>© 2024 CryptoFlow. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>SOC 2 Certified</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Regulated Trading</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Smartphone className="w-4 h-4" />
                <span>Mobile Ready</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 