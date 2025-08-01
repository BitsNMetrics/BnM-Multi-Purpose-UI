import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Changelog', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Support', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Compliance', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@novaai.com', href: 'mailto:hello@novaai.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 border-t border-white/10">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">AI</span>
                  </div>
                  <div>
                    <span className="text-white font-bold text-2xl">Nova AI</span>
                    <div className="text-slate-400 text-sm">Intelligence Platform</div>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
                  Transform your business with the power of artificial intelligence. 
                  Advanced analytics, predictive insights, and automated workflows.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      <contact.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                      <span className="text-sm">{contact.text}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-200" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Footer Links */}
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold mb-6 capitalize">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 + linkIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="py-8 border-t border-white/10"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Stay Updated
                </h3>
                <p className="text-slate-400 text-sm">
                  Get the latest AI insights and product updates delivered to your inbox.
                </p>
              </div>
              
              <div className="flex w-full lg:w-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 lg:w-80 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex flex-col md:flex-row items-center gap-4 text-slate-400 text-sm">
              <p>© 2024 Nova AI. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <span>Made with ❤️ in San Francisco</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-slate-400 text-sm">
                <span>Status</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>All Systems Operational</span>
                </div>
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-200" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 