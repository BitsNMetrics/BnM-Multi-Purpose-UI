import React from 'react';
import { motion } from 'framer-motion';
import { Download, Star, Zap } from 'lucide-react';

interface HeroProps {
  config: any;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50"
              >
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  #1 Productivity App
                </span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Streamline Your{' '}
                <span 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  style={{ 
                    background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Workflow
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
                The ultimate productivity app for modern professionals. Organize tasks, collaborate seamlessly, and achieve more in less time.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">10M+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">4.8★</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Countries</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                className="flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: config.colors.primary }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </button>
              <button
                className="flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-slate-700 dark:text-white bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </button>
            </motion.div>
          </motion.div>

          {/* Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-96">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 rounded-[3rem] shadow-2xl">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-full" />
                
                {/* Screen Content */}
                <div className="absolute inset-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-[2.5rem] overflow-hidden">
                  <div className="h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-2 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="flex-1 p-6 text-white">
                      <div className="space-y-4">
                        <div className="h-8 bg-white/20 rounded-lg" />
                        <div className="h-4 bg-white/20 rounded w-3/4" />
                        <div className="h-4 bg-white/20 rounded w-1/2" />
                        <div className="grid grid-cols-2 gap-3 mt-6">
                          <div className="h-16 bg-white/20 rounded-lg" />
                          <div className="h-16 bg-white/20 rounded-lg" />
                          <div className="h-16 bg-white/20 rounded-lg" />
                          <div className="h-16 bg-white/20 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Star className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 