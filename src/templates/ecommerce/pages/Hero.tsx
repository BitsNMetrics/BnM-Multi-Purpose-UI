import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, Star, Shield, Truck, CheckCircle } from 'lucide-react';

interface HeroProps {
  config: any;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  const features = [
    { icon: Shield, text: '30-Day Money Back' },
    { icon: Truck, text: 'Free Shipping' },
    { icon: CheckCircle, text: '2-Year Warranty' }
  ];

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
              <ShoppingCart className="w-4 h-4 mr-2" />
              Eco-Friendly Technology
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Revolutionary
              <span className="block" style={{ color: config.colors.primary }}>
                {config.brandName}
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-slate-600 dark:text-slate-300">
                Sustainable Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
            >
              Experience the future of eco-friendly technology. Our innovative products combine cutting-edge performance with environmental responsibility.
            </motion.p>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start space-x-4 mb-8"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-slate-600 dark:text-slate-400">
                <strong className="text-slate-900 dark:text-white">4.9/5</strong> from 2,847 reviews
              </span>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium border-2"
                  style={{ 
                    borderColor: config.colors.primary,
                    color: config.colors.primary,
                    backgroundColor: `${config.colors.primary}10`
                  }}
                >
                  <feature.icon className="w-4 h-4" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <button 
                className="text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                  boxShadow: `0 10px 25px -5px ${config.colors.primary}40`
                }}
              >
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button 
                className="border-2 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                style={{ 
                  borderColor: config.colors.primary,
                  color: config.colors.primary
                }}
              >
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-600 dark:text-slate-400"
            >
              <span>🔒 Secure Checkout</span>
              <span>🚚 Free Shipping</span>
              <span>⭐ 30-Day Returns</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Product Image Container */}
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
                  {/* Product Image Placeholder */}
                  <div 
                    className="w-80 h-80 mx-auto mb-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${config.colors.primary}10, ${config.colors.secondary}10)` 
                    }}
                  >
                    <div className="text-center">
                      <div 
                        className="w-32 h-32 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ 
                          background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                        }}
                      >
                        <ShoppingCart className="w-16 h-16 text-white" />
                      </div>
                      <div className="text-slate-900 dark:text-white text-2xl font-bold mb-2">{config.brandName}</div>
                      <div className="text-slate-600 dark:text-slate-400 text-lg">Premium Product</div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                      <span className="text-2xl">$</span>299
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      <span className="line-through text-lg">$399</span>
                      <span className="ml-2 px-2 py-1 rounded-full text-sm font-bold text-white" style={{ backgroundColor: config.colors.accent }}>
                        25% OFF
                      </span>
                    </div>
                  </div>

                  {/* Product Features */}
                  <div className="space-y-3 mb-6">
                    {[
                      'Eco-friendly materials',
                      'Energy efficient',
                      'Smart connectivity',
                      '2-year warranty'
                    ].map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5" style={{ color: config.colors.primary }} />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <button 
                    className="w-full text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                      boxShadow: `0 10px 25px -5px ${config.colors.primary}40`
                    }}
                  >
                    Add to Cart - $299
                  </button>
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