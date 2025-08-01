import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award } from 'lucide-react';

interface SocialProofProps {
  config: any;
}

const SocialProof: React.FC<SocialProofProps> = ({ config }) => {
  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'CTO at TechCorp',
      content: 'This platform has completely transformed how we handle our operations. The efficiency gains are incredible.',
      rating: 5,
      company: 'TechCorp'
    },
    {
      name: 'Maria Garcia',
      role: 'VP of Engineering',
      content: 'Finally, a solution that actually delivers on its promises. Our team productivity has increased by 300%.',
      rating: 5,
      company: 'InnovateLab'
    },
    {
      name: 'James Wilson',
      role: 'CEO & Founder',
      content: 'The best investment we\'ve made this year. The ROI was immediate and continues to grow.',
      rating: 5,
      company: 'StartupXYZ'
    }
  ];

  const press = [
    { name: 'TechCrunch', logo: 'TC' },
    { name: 'Forbes', logo: 'F' },
    { name: 'Wired', logo: 'W' },
    { name: 'VentureBeat', logo: 'VB' }
  ];

  const awards = [
    { name: 'Best Startup 2024', issuer: 'Tech Awards' },
    { name: 'Innovation of the Year', issuer: 'Startup Weekly' },
    { name: 'Product of the Year', issuer: 'Tech Review' }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '500%', label: 'Average ROI' },
    { number: '24/7', label: 'Support' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
      />
    ));
  };

  return (
    <section className="w-full py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Trusted by <span style={{ color: config.colors.primary }}>Thousands</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have already transformed their businesses with our platform.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: config.colors.primary }}
              >
                {stat.number}
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-slate-300 dark:text-slate-600 absolute -top-2 -left-2" />
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-4">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                  <p className="text-sm font-medium" style={{ color: config.colors.primary }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Press & Awards */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Press Mentions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Featured In
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {press.map((outlet, index) => (
                <div key={outlet.name} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                    <span className="font-bold text-slate-600 dark:text-slate-300">
                      {outlet.logo}
                    </span>
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {outlet.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Awards & Recognition
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={award.name} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex items-center">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                    style={{ 
                      background: `linear-gradient(135deg, ${config.colors.primary}20, ${config.colors.secondary}20)` 
                    }}
                  >
                    <Award className="w-6 h-6" style={{ color: config.colors.primary }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {award.name}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {award.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Start your transformation today and see why thousands of companies choose us.
            </p>
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof; 