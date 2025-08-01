import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Brain, Rocket, Users, CheckCircle, Star, Globe, Award, Clock, Target, BarChart3, Cpu, Database, Cloud, Lock } from 'lucide-react';
import { Button } from '../../../core/components/Button';

interface HeroProps {
  config?: {
    brandName?: string;
    tagline?: string;
    colors?: {
      primary: string;
      secondary: string;
      accent: string;
    };
    font?: string;
  };
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  const tagline = config?.tagline || 'Transform your business with AI';
  const colors = config?.colors || {
    primary: '#8b5cf6',
    secondary: '#a855f7',
    accent: '#c084fc',
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)` 
          }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: `linear-gradient(135deg, ${colors.secondary}20, ${colors.accent}20)` 
          }}
        />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full opacity-60"
          style={{ backgroundColor: colors.primary }}
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full opacity-60"
          style={{ backgroundColor: colors.secondary }}
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full opacity-60"
          style={{ backgroundColor: colors.accent }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full border text-sm font-semibold mb-8 shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                borderColor: `${colors.primary}30`,
                color: colors.primary
              }}
            >
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Intelligence Platform
              <Star className="w-4 h-4 ml-2" style={{ color: colors.accent }} />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-8 leading-tight"
            >
              {tagline}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Leverage the power of artificial intelligence to analyze data, predict trends, 
              and make smarter business decisions. Get actionable insights in real-time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
            >
              <Button 
                className="text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  boxShadow: `0 25px 50px -12px ${colors.primary}40`
                }}
              >
                <Rocket className="w-6 h-6 mr-3" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <Button variant="outline" className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105">
                <Play className="w-6 h-6 mr-3" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center space-x-8 mb-16"
            >
              <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                <Clock className="w-5 h-5" style={{ color: colors.secondary }} />
                <span className="font-medium">14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                <Shield className="w-5 h-5" style={{ color: colors.accent }} />
                <span className="font-medium">Cancel anytime</span>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` 
                  }}
                >
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">50K+</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Active Users</div>
              </div>
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` 
                  }}
                >
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">99.9%</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Uptime</div>
              </div>
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})` 
                  }}
                >
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">40%</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">ROI Increase</div>
              </div>
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})` 
                  }}
                >
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">24/7</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Support</div>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">Trusted by leading companies worldwide</p>
              <div className="flex flex-wrap items-center justify-center space-x-8 opacity-60">
                <div className="flex items-center space-x-2">
                  <Globe className="w-8 h-8 text-slate-400" />
                  <span className="text-slate-600 dark:text-slate-400 font-semibold">GlobalTech</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cpu className="w-8 h-8 text-slate-400" />
                  <span className="text-slate-600 dark:text-slate-400 font-semibold">DataCorp</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Database className="w-8 h-8 text-slate-400" />
                  <span className="text-slate-600 dark:text-slate-400 font-semibold">CloudFlow</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cloud className="w-8 h-8 text-slate-400" />
                  <span className="text-slate-600 dark:text-slate-400 font-semibold">SecureNet</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-8 h-8 text-slate-400" />
                  <span className="text-slate-600 dark:text-slate-400 font-semibold">TrustBank</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 