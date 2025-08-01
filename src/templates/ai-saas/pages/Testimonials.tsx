import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight, CheckCircle, Heart, Users, Clock, Award, Smile } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechFlow',
      company: 'TechFlow Inc.',
      avatar: 'SJ',
      rating: 5,
      content: 'Nova AI has completely transformed how we analyze our customer data. The insights we get are incredible and have helped us increase our conversion rates by 40%.',
      metrics: { improvement: '40%', metric: 'Conversion Rate' }
    },
    {
      name: 'Michael Chen',
      role: 'Head of Analytics',
      company: 'DataCorp',
      avatar: 'MC',
      rating: 5,
      content: 'The integration was seamless and the AI predictions are spot-on. We\'ve reduced our decision-making time from weeks to hours. Absolutely game-changing.',
      metrics: { improvement: '90%', metric: 'Faster Decisions' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Marketing',
      company: 'GrowthLabs',
      avatar: 'ER',
      rating: 5,
      content: 'Nova AI helped us identify customer segments we never knew existed. Our marketing ROI has increased dramatically since implementing their recommendations.',
      metrics: { improvement: '65%', metric: 'Marketing ROI' }
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'StartupXYZ',
      avatar: 'DK',
      rating: 5,
      content: 'As a startup, we needed powerful analytics without the complexity. Nova AI delivered exactly that. It\'s like having a data scientist on our team.',
      metrics: { improvement: '300%', metric: 'Revenue Growth' }
    },
    {
      name: 'Lisa Thompson',
      role: 'Operations Director',
      company: 'ScaleUp Co.',
      avatar: 'LT',
      rating: 5,
      content: 'The automated reporting feature saves us hours every week. The insights are actionable and have helped us optimize our operations significantly.',
      metrics: { improvement: '50%', metric: 'Time Saved' }
    },
    {
      name: 'Alex Morgan',
      role: 'Product Manager',
      company: 'InnovateTech',
      avatar: 'AM',
      rating: 5,
      content: 'Nova AI\'s predictive analytics have revolutionized our product development process. We can now make data-driven decisions with confidence.',
      metrics: { improvement: '75%', metric: 'Product Success Rate' }
    }
  ];

  const stats = [
    { number: '98%', label: 'Customer Satisfaction', icon: Smile, color: 'text-green-500' },
    { number: '4.9/5', label: 'Average Rating', icon: Star, color: 'text-yellow-500' },
    { number: '10K+', label: 'Happy Customers', icon: Users, color: 'text-blue-500' },
    { number: '24/7', label: 'Support Available', icon: Clock, color: 'text-purple-500' }
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border border-yellow-200/50 dark:border-yellow-700/30 text-yellow-700 dark:text-yellow-300 text-sm font-semibold mb-8"
            >
              <Star className="w-4 h-4 mr-2" />
              Trusted by 10,000+ Companies
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6"
            >
              What Our Customers Say
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            >
              Join thousands of companies that have transformed their business with Nova AI.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-600/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-purple-500" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Metrics */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-4 mb-6">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {testimonial.metrics.improvement}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.metrics.metric} Improvement
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-center text-white"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Success Stories
              </h3>
              <p className="text-xl text-slate-300 mb-8">
                See how Nova AI can transform your business. Start your free trial today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  <CheckCircle className="w-5 h-5 mr-2 inline" />
                  Start Free Trial
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20">
                  Read More Reviews
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 