import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface ScreenshotsProps {
  config: any;
}

const Screenshots: React.FC<ScreenshotsProps> = ({ config }) => {
  const screenshots = [
    {
      title: 'Dashboard',
      description: 'Get a bird\'s eye view of all your tasks and projects',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Task Management',
      description: 'Create, organize, and track tasks with ease',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Team Collaboration',
      description: 'Work together with your team in real-time',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Analytics',
      description: 'Track your productivity and team performance',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            See It In{' '}
            <span 
              className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              style={{ 
                background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Action
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore the intuitive interface and powerful features that make productivity effortless.
          </p>
        </motion.div>

        {/* Screenshots Carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 snap-center"
              >
                <div className="relative group">
                  {/* Phone Frame */}
                  <div className="relative mx-auto w-80 h-96">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 rounded-[3rem] shadow-2xl">
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-full" />
                      
                      {/* Screen Content */}
                      <div className={`absolute inset-2 bg-gradient-to-br ${screenshot.color} rounded-[2.5rem] overflow-hidden`}>
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
                              {/* Header */}
                              <div className="flex items-center justify-between">
                                <div className="h-6 bg-white/20 rounded w-24" />
                                <div className="h-6 bg-white/20 rounded w-8" />
                              </div>
                              
                              {/* Content based on screenshot type */}
                              {index === 0 && (
                                <div className="space-y-3">
                                  <div className="h-4 bg-white/20 rounded w-full" />
                                  <div className="h-4 bg-white/20 rounded w-3/4" />
                                  <div className="grid grid-cols-2 gap-3 mt-4">
                                    <div className="h-16 bg-white/20 rounded-lg" />
                                    <div className="h-16 bg-white/20 rounded-lg" />
                                    <div className="h-16 bg-white/20 rounded-lg" />
                                    <div className="h-16 bg-white/20 rounded-lg" />
                                  </div>
                                </div>
                              )}
                              
                              {index === 1 && (
                                <div className="space-y-3">
                                  <div className="space-y-2">
                                    <div className="h-3 bg-white/20 rounded w-full" />
                                    <div className="h-3 bg-white/20 rounded w-5/6" />
                                    <div className="h-3 bg-white/20 rounded w-4/5" />
                                  </div>
                                  <div className="space-y-2 mt-4">
                                    <div className="h-3 bg-white/20 rounded w-full" />
                                    <div className="h-3 bg-white/20 rounded w-5/6" />
                                    <div className="h-3 bg-white/20 rounded w-4/5" />
                                  </div>
                                </div>
                              )}
                              
                              {index === 2 && (
                                <div className="space-y-3">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full" />
                                    <div className="h-4 bg-white/20 rounded w-24" />
                                  </div>
                                  <div className="space-y-2">
                                    <div className="h-3 bg-white/20 rounded w-full" />
                                    <div className="h-3 bg-white/20 rounded w-5/6" />
                                  </div>
                                  <div className="flex items-center space-x-3 mt-4">
                                    <div className="w-8 h-8 bg-white/20 rounded-full" />
                                    <div className="h-4 bg-white/20 rounded w-20" />
                                  </div>
                                </div>
                              )}
                              
                              {index === 3 && (
                                <div className="space-y-3">
                                  <div className="h-20 bg-white/20 rounded-lg" />
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="h-12 bg-white/20 rounded" />
                                    <div className="h-12 bg-white/20 rounded" />
                                    <div className="h-12 bg-white/20 rounded" />
                                    <div className="h-12 bg-white/20 rounded" />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[3rem] flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                
                {/* Caption */}
                <div className="text-center mt-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {screenshot.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
            <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
            <ChevronRight className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === 0 
                  ? 'bg-purple-500' 
                  : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screenshots; 