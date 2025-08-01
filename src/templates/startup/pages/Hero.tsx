import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Zap, Star, Clock } from 'lucide-react';

interface HeroProps {
  config: any;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer - Launch in 30 days
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const stats = [
    { icon: Users, number: '2,847', label: 'Beta Signups' },
    { icon: Star, number: '4.9/5', label: 'Early Reviews' },
    { icon: Zap, number: '50+', label: 'Features' }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{ 
                backgroundColor: `${config.colors.primary}20`,
                color: config.colors.primary
              }}
            >
              <Clock className="w-4 h-4" />
              <span>Launching Soon - Join the Beta</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              The Future of{' '}
              <span style={{ color: config.colors.primary }}>
                Innovation
              </span>
              {' '}is Here
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Join thousands of early adopters who are already experiencing the next generation of technology. 
              Be among the first to shape the future.
            </motion.p>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Launching in:</p>
              <div className="flex justify-center lg:justify-start space-x-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <div 
                      className="text-2xl md:text-3xl font-bold rounded-xl px-3 py-2"
                      style={{ 
                        backgroundColor: `${config.colors.primary}20`,
                        color: config.colors.primary
                      }}
                    >
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 capitalize">
                      {unit}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Beta Signup Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0 mb-8"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="group px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center space-x-2 disabled:opacity-50"
                style={{ backgroundColor: config.colors.primary }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Join Beta</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </motion.form>

            {/* Success/Error Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 dark:text-green-400 text-sm mb-4"
              >
                ✅ You're on the list! We'll notify you when we launch.
              </motion.div>
            )}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center space-x-2 mb-1">
                      <IconComponent className="w-5 h-5" style={{ color: config.colors.primary }} />
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">
                        {stat.number}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative">
              {/* Background Elements */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-20 blur-3xl"
                style={{ 
                  background: `radial-gradient(circle, ${config.colors.primary}, ${config.colors.secondary})` 
                }}
              />
              
              {/* Main Card */}
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div 
                      className="w-24 h-24 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                      }}
                    >
                      <span className="text-white font-bold text-3xl">
                        {config.brandName?.charAt(0) || 'L'}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {config.brandName || 'LaunchPad'}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Beta Version
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center"
              >
                <Zap className="w-8 h-8" style={{ color: config.colors.primary }} />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center"
              >
                <Star className="w-6 h-6" style={{ color: config.colors.secondary }} />
              </motion.div>
            </div>

            {/* Play Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: config.colors.primary }}
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 