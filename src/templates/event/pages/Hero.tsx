import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  Star,
  ArrowRight,
  Play
} from 'lucide-react';

interface HeroProps {
  config: any;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20" />
      
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
                <Star className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Premier Tech Conference
                </span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                The Future of{' '}
                <span 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  style={{ 
                    background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Technology
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
                Join industry leaders, innovators, and visionaries for three days of inspiring talks, workshops, and networking opportunities.
              </p>
            </div>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">March 15-17, 2024</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">3 Days</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">San Francisco</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Convention Center</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">2,500+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Attendees</div>
                </div>
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
                Register Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                className="flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-slate-700 dark:text-white bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Trailer
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
            {/* Main Event Card */}
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="space-y-6">
                {/* Event Header */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    TechConf 2024
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    The Future of Technology
                  </p>
                </div>

                {/* Countdown */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">45</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">12</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">30</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">15</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Seconds</div>
                  </div>
                </div>

                {/* Event Stats */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">Speakers</span>
                    <span className="font-semibold text-slate-900 dark:text-white">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">Sessions</span>
                    <span className="font-semibold text-slate-900 dark:text-white">100+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">Workshops</span>
                    <span className="font-semibold text-slate-900 dark:text-white">25+</span>
                  </div>
                </div>

                {/* Early Bird */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-4 border border-green-200/50 dark:border-green-700/50">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">
                      Early Bird Pricing
                    </div>
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                      $299
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      Save $200 - Ends Soon
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Users className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Clock className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 