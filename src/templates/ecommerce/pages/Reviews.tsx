import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp, MessageCircle, User, Calendar } from 'lucide-react';

interface ReviewsProps {
  config: any;
}

const Reviews: React.FC<ReviewsProps> = ({ config }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'verified' | 'recent'>('all');

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
      rating: 5,
      date: '2024-01-15',
      verified: true,
      title: 'Amazing product quality!',
      content: 'I was skeptical at first, but this product exceeded all my expectations. The quality is outstanding and the customer service was exceptional. Highly recommend!',
      helpful: 24,
      replies: 2,
      tags: ['Quality', 'Customer Service']
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: '/avatars/michael.jpg',
      rating: 5,
      date: '2024-01-12',
      verified: true,
      title: 'Perfect for my business needs',
      content: 'As a small business owner, I needed a reliable solution. This product has been a game-changer for our operations. Fast delivery and great value for money.',
      helpful: 18,
      replies: 1,
      tags: ['Business', 'Value']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: '/avatars/emily.jpg',
      rating: 4,
      date: '2024-01-10',
      verified: true,
      title: 'Great product with minor improvements needed',
      content: 'Overall, I\'m very satisfied with the purchase. The product works well and the features are impressive. Would love to see some additional customization options.',
      helpful: 12,
      replies: 3,
      tags: ['Features', 'Customization']
    },
    {
      id: 4,
      name: 'David Thompson',
      avatar: '/avatars/david.jpg',
      rating: 5,
      date: '2024-01-08',
      verified: false,
      title: 'Exceeded expectations',
      content: 'I\'ve tried many similar products, but this one stands out. The attention to detail and build quality is remarkable. Worth every penny!',
      helpful: 8,
      replies: 0,
      tags: ['Quality', 'Value']
    },
    {
      id: 5,
      name: 'Lisa Wang',
      avatar: '/avatars/lisa.jpg',
      rating: 5,
      date: '2024-01-05',
      verified: true,
      title: 'Outstanding customer experience',
      content: 'From the moment I placed my order to receiving the product, everything was perfect. The packaging was secure and the product arrived in pristine condition.',
      helpful: 15,
      replies: 1,
      tags: ['Customer Experience', 'Packaging']
    }
  ];

  const stats = {
    averageRating: 4.8,
    totalReviews: 1247,
    verifiedPurchases: 89,
    recommendRate: 96
  };

  const filteredReviews = reviews.filter(review => {
    if (activeTab === 'verified') return review.verified;
    if (activeTab === 'recent') return new Date(review.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return true;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
      />
    ));
  };

  return (
    <section className="w-full py-20 bg-white dark:bg-slate-900">
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
            Customer <span style={{ color: config.colors.primary }}>Reviews</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            See what our customers are saying about their experience with our products and services.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: config.colors.primary }}>
              {stats.averageRating}
            </div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(stats.averageRating))}
            </div>
            <p className="text-slate-600 dark:text-slate-300">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: config.colors.primary }}>
              {stats.totalReviews.toLocaleString()}
            </div>
            <p className="text-slate-600 dark:text-slate-300">Total Reviews</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: config.colors.primary }}>
              {stats.verifiedPurchases}%
            </div>
            <p className="text-slate-600 dark:text-slate-300">Verified Purchases</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: config.colors.primary }}>
              {stats.recommendRate}%
            </div>
            <p className="text-slate-600 dark:text-slate-300">Would Recommend</p>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-2">
            <div className="flex items-center space-x-2">
              {[
                { key: 'all', label: 'All Reviews', count: reviews.length },
                { key: 'verified', label: 'Verified', count: reviews.filter(r => r.verified).length },
                { key: 'recent', label: 'Recent', count: reviews.filter(r => new Date(r.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-lg'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {review.name}
                      </h4>
                      {review.verified && (
                        <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(review.rating)}
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-4">
                <h5 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {review.title}
                </h5>
                <div className="relative">
                  <Quote className="w-6 h-6 text-slate-300 dark:text-slate-600 absolute -top-2 -left-2" />
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed pl-4">
                    {review.content}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {review.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full"
                    style={{
                      backgroundColor: `${config.colors.primary}20`,
                      color: config.colors.primary
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Review Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">Helpful ({review.helpful})</span>
                  </button>
                  <button className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">Reply ({review.replies})</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Share Your Experience
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              We'd love to hear about your experience with our products.
            </p>
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              Write a Review
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews; 