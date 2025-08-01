import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Star, Users, Clock, Shield } from 'lucide-react';

interface CTAProps {
  config: any;
}

const CTA: React.FC<CTAProps> = ({ config }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const benefits = [
    {
      icon: Zap,
      title: 'Early Access',
      description: 'Be the first to try new features'
    },
    {
      icon: Star,
      title: 'Exclusive Pricing',
      description: 'Lock in special beta rates'
    },
    {
      icon: Users,
      title: 'Direct Feedback',
      description: 'Shape the product roadmap'
    }
  ];

  const stats = [
    { number: '2,847', label: 'Beta Signups' },
    { number: '30', label: 'Days to Launch' },
    { number: '50+', label: 'Features Available' }
  ];

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

  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto mb-8 rounded-3xl flex items-center justify-center shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
            }}
          >
            <Zap className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Join the <span style={{ color: config.colors.primary }}>Revolution</span>?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Don't miss out on being part of the future. Join thousands of early adopters who are already 
            transforming their businesses with our revolutionary platform.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: config.colors.primary }}>
                  {stat.number}
                </div>
                <p className="text-slate-400 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Signup Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="group px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2 disabled:opacity-50"
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
              className="text-green-400 text-sm mb-4"
            >
              ✅ You're on the list! We'll notify you when we launch.
            </motion.div>
          )}

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">30-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${config.colors.primary}20, ${config.colors.secondary}20)` 
                  }}
                >
                  <IconComponent 
                    className="w-8 h-8" 
                    style={{ color: config.colors.primary }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-300">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-4">
              Limited Time Offer
            </h3>
            <p className="text-slate-300 mb-6">
              Beta users get 50% off for life. This offer expires when we launch publicly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: config.colors.primary }}
              >
                Claim Your Discount
              </button>
              <button
                className="px-8 py-4 rounded-2xl font-semibold border-2 border-slate-600 text-slate-300 transition-all duration-300 hover:bg-slate-700"
              >
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 