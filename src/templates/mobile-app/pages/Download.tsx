import React from 'react';
import { motion } from 'framer-motion';
import { Download as DownloadIcon, QrCode, Smartphone, Globe, Star } from 'lucide-react';

interface DownloadProps {
  config: any;
}

const Download: React.FC<DownloadProps> = ({ config }) => {
  const downloadOptions = [
    {
      platform: 'iOS App Store',
      icon: Smartphone,
      rating: '4.8★',
      downloads: '10M+',
      color: 'from-blue-500 to-cyan-500',
      buttonText: 'Download on App Store'
    },
    {
      platform: 'Google Play Store',
      icon: Smartphone,
      rating: '4.7★',
      downloads: '8M+',
      color: 'from-green-500 to-emerald-500',
      buttonText: 'Get it on Google Play'
    },
    {
      platform: 'Web App',
      icon: Globe,
      rating: '4.9★',
      downloads: '5M+',
      color: 'from-purple-500 to-pink-500',
      buttonText: 'Open Web App'
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
            Download{' '}
            <span 
              className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              style={{ 
                background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Now
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Available on all your favorite platforms. Start boosting your productivity today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Download Options */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {downloadOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {option.platform}
                        </h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            {option.rating}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">
                            {option.downloads} downloads
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      style={{ backgroundColor: config.colors.primary }}
                    >
                      <DownloadIcon className="w-4 h-4 mr-2 inline" />
                      {option.buttonText}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative inline-block">
              {/* QR Code Mockup */}
              <div className="w-64 h-64 bg-white rounded-2xl shadow-2xl p-6">
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-1 w-48 h-48">
                    {/* QR Code Pattern */}
                    {Array.from({ length: 64 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full rounded-sm ${
                          Math.random() > 0.5 ? 'bg-slate-800' : 'bg-transparent'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <QrCode className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Smartphone className="w-5 h-5 text-white" />
              </motion.div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Scan to Download
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Point your camera at the QR code to download the app instantly
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              Free forever • No credit card required
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Download; 