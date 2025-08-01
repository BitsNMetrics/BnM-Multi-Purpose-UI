import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  config: any;
}

const Footer: React.FC<FooterProps> = ({ config }) => {
  const footerLinks = {
    event: [
      { name: 'Schedule', href: '#schedule' },
      { name: 'Speakers', href: '#speakers' },
      { name: 'Venue', href: '#venue' },
      { name: 'Register', href: '#register' },
      { name: 'FAQ', href: '#faq' }
    ],
    resources: [
      { name: 'Event Guide', href: '#' },
      { name: 'Travel Info', href: '#' },
      { name: 'Sponsors', href: '#' },
      { name: 'Media Kit', href: '#' },
      { name: 'Press Release', href: '#' }
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Live Chat', href: '#' },
      { name: 'Email Support', href: 'mailto:support@techconf.com' },
      { name: 'Phone Support', href: 'tel:+1-555-123-4567' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Refund Policy', href: '#' },
      { name: 'Code of Conduct', href: '#' },
      { name: 'Accessibility', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'Facebook', href: '#', icon: 'f' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'YouTube', href: '#', icon: '▶' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                      }}
                    >
                      <span className="text-white font-bold text-xl">
                        {config.brandName?.charAt(0) || 'T'}
                      </span>
                    </div>
                    <span className="text-2xl font-bold">
                      {config.brandName || 'TechConf 2024'}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 mb-6 max-w-md">
                    Join industry leaders at the premier technology conference. Experience inspiring talks, 
                    hands-on workshops, and networking opportunities that will shape the future of technology.
                  </p>
                  
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-sm font-semibold">{social.icon}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Event Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-6">Event</h3>
                <ul className="space-y-3">
                  {footerLinks.event.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-6">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Support Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-6">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-t border-slate-800 py-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Stay Updated
                </h3>
                <p className="text-slate-300">
                  Get the latest updates about speakers, schedule changes, and exclusive content.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ backgroundColor: config.colors.primary }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-t border-slate-800 py-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="text-sm text-slate-400">
                © 2024 {config.brandName || 'TechConf 2024'}. All rights reserved.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 