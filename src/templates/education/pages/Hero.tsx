import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Users, Clock, Award } from 'lucide-react';

interface HeroProps {
  config: any;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-green-900/20 dark:to-emerald-900/20" />
      
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
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-green-200/50 dark:border-green-700/50"
              >
                <GraduationCap className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Trusted by 50,000+ Students
                </span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Transform Your{' '}
                <span 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                  style={{ 
                    background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Future
                </span>{' '}
                Through Learning
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
                Join thousands of students achieving their dreams with our comprehensive online courses designed by industry experts.
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
                <div className="text-sm text-slate-600 dark:text-slate-400">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">50K+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Students</div>
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
                Start Learning Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                className="flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-slate-700 dark:text-white bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Browse Courses
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
            {/* Main Illustration */}
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {/* Course Cards */}
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-4">
                  <div className="w-8 h-8 bg-green-500 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Web Development</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Learn modern web technologies</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Data Science</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Master data analytics</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Design</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Create beautiful interfaces</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Marketing</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Grow your business</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 