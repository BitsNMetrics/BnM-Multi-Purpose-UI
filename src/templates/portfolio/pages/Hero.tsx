import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter, Code, Palette, Zap } from 'lucide-react';

interface HeroProps {
  config: any;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(135deg, ${config.colors.primary}05, ${config.colors.secondary}05)` 
          }}
        ></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${config.colors.primary}10` }}
        ></div>
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${config.colors.secondary}10` }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{ 
                backgroundColor: `${config.colors.primary}15`,
                borderColor: config.colors.primary,
                color: config.colors.primary,
                border: `1px solid ${config.colors.primary}30`
              }}
            >
              <Code className="w-4 h-4 mr-2" />
              {config.tagline}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Hi, I'm
              <span className="block" style={{ color: config.colors.primary }}>
                {config.brandName}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
            >
              I create exceptional digital experiences that combine cutting-edge technology with beautiful design. 
              Passionate about building products that make a difference.
            </motion.p>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
            >
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border-2"
                  style={{ 
                    borderColor: config.colors.primary,
                    color: config.colors.primary,
                    backgroundColor: `${config.colors.primary}10`
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <button 
                className="text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                  boxShadow: `0 10px 25px -5px ${config.colors.primary}40`
                }}
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button 
                className="border-2 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                style={{ 
                  borderColor: config.colors.primary,
                  color: config.colors.primary
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, label: 'GitHub', color: 'hover:text-gray-400' },
                { icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
                { icon: Twitter, label: 'Twitter', color: 'hover:text-blue-400' },
                { icon: Mail, label: 'Email', color: 'hover:text-red-400' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  style={{ 
                    borderColor: config.colors.primary,
                    color: config.colors.primary,
                    backgroundColor: `${config.colors.primary}10`
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image/Work Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Profile Image Container */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-3xl blur-xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${config.colors.primary}30, ${config.colors.secondary}30)` 
                  }}
                ></motion.div>
                
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-2xl">
                  {/* Profile Image Placeholder */}
                  <div 
                    className="w-64 h-64 mx-auto mb-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${config.colors.primary}10, ${config.colors.secondary}10)` 
                    }}
                  >
                    <div className="text-center">
                      <div 
                        className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg"
                        style={{ 
                          background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                        }}
                      >
                        <span className="text-white text-3xl font-bold">
                          {config.brandName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-slate-900 dark:text-white text-lg font-semibold">{config.brandName}</div>
                      <div className="text-slate-600 dark:text-slate-400 text-sm">{config.tagline}</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { number: '50+', label: 'Projects', icon: Code },
                      { number: '5+', label: 'Years', icon: Palette },
                      { number: '100%', label: 'Success', icon: Zap }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        className="text-center"
                      >
                        <div 
                          className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-xl border-2"
                          style={{ 
                            borderColor: config.colors.primary,
                            backgroundColor: `${config.colors.primary}10`
                          }}
                        >
                          <stat.icon className="w-6 h-6" style={{ color: config.colors.primary }} />
                        </div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.number}</div>
                        <div className="text-slate-600 dark:text-slate-400 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Current Status */}
                  <div 
                    className="rounded-2xl p-4 border-2"
                    style={{ 
                      borderColor: config.colors.primary,
                      backgroundColor: `${config.colors.primary}10`
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-slate-900 dark:text-white font-semibold">Currently Available</div>
                        <div className="text-slate-600 dark:text-slate-400 text-sm">Open for new opportunities</div>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-8 h-8 rounded-full blur-sm"
                style={{ backgroundColor: `${config.colors.primary}30` }}
              ></motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full blur-sm"
                style={{ backgroundColor: `${config.colors.secondary}30` }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: `${config.colors.primary}30` }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 rounded-full mt-2"
            style={{ backgroundColor: `${config.colors.primary}60` }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero; 