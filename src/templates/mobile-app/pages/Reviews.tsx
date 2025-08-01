import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp, MessageCircle } from 'lucide-react';

interface ReviewsProps {
  config: any;
}

const Reviews: React.FC<ReviewsProps> = ({ config }) => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      rating: 5,
      review: 'This app has completely transformed how our team works. The collaboration features are incredible and the interface is so intuitive.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Designer',
      company: 'Self-employed',
      rating: 5,
      review: 'I\'ve tried dozens of productivity apps, but this one stands out. The cross-platform sync works flawlessly and the automation features save me hours every week.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'StartupXYZ',
      rating: 5,
      review: 'The analytics dashboard gives us incredible insights into our team\'s productivity. We\'ve seen a 40% increase in efficiency since switching.',
      avatar: 'ER'
    }
  ];

  const stats = [
    { number: '4.8★', label: 'App Store Rating' },
    { number: '50K+', label: 'Reviews' },
    { number: '10M+', label: 'Downloads' },
    { number: '98%', label: 'Satisfaction Rate' }
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
            Loved by{' '}
            <span 
              className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              style={{ 
                background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Millions
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their productivity with our app.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-slate-300 dark:text-slate-600">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Stars */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  "{review.review}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {review.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {review.role} at {review.company}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <ThumbsUp className="w-5 h-5 text-green-500" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                Join 10M+ users
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-blue-500" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                Leave a review
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews; 