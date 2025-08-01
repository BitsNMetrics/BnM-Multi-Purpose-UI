import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

interface HeroProps {
  config: any;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20" />
      
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
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50"
              >
                <Award className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Award-Winning Agency
                </span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Transform Your{' '}
                <span 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                  style={{ 
                    background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Business
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
                We help businesses scale and grow through strategic consulting, digital marketing, and innovative solutions that drive real results.
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
                <div className="text-2xl font-bold text-slate-900 dark:text-white">500+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">$50M+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">95%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Success Rate</div>
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
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                className="flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-slate-700 dark:text-white bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                View Our Work
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: config.colors.primary }}
                    >
                      <span className="text-white font-bold text-lg">
                        {config.brandName?.charAt(0) || 'S'}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {config.brandName || 'Strategic Partners'}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Business Growth Experts
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">+127%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Growth</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-32 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                    <div className="text-lg font-bold text-slate-900 dark:text-white">$2.4M</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                    <div className="text-lg font-bold text-slate-900 dark:text-white">+45%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Traffic</div>
                  </div>
                </div>

                {/* Success Indicators */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Increased conversion rate by 300%
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Reduced customer acquisition cost by 40%
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Improved customer satisfaction to 98%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Users className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 