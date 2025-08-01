import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  ArrowRight,
  Star,
  Calendar,
  Target
} from 'lucide-react';

interface CasesProps {
  config: any;
}

const Cases: React.FC<CasesProps> = ({ config }) => {
  const caseStudies = [
    {
      title: 'TechStart E-commerce',
      category: 'E-commerce',
      description: 'Helped a startup increase online sales by 300% through comprehensive digital marketing and UX optimization.',
      results: [
        { metric: 'Revenue Increase', value: '300%', icon: TrendingUp },
        { metric: 'Traffic Growth', value: '450%', icon: Users },
        { metric: 'ROI', value: '850%', icon: DollarSign }
      ],
      duration: '6 months',
      rating: 5,
      image: '/previews/ecommerce.jpg'
    },
    {
      title: 'FinTech Mobile App',
      category: 'Mobile Development',
      description: 'Developed a comprehensive mobile banking solution that processed over $50M in transactions.',
      results: [
        { metric: 'User Growth', value: '200%', icon: Users },
        { metric: 'Transaction Volume', value: '$50M+', icon: DollarSign },
        { metric: 'App Store Rating', value: '4.8★', icon: Star }
      ],
      duration: '8 months',
      rating: 5,
      image: '/previews/mobile-app.jpg'
    },
    {
      title: 'Healthcare Platform',
      category: 'SaaS',
      description: 'Built a telemedicine platform serving 100,000+ patients with 99.9% uptime.',
      results: [
        { metric: 'Patient Reach', value: '100K+', icon: Users },
        { metric: 'Uptime', value: '99.9%', icon: Target },
        { metric: 'Cost Reduction', value: '40%', icon: TrendingUp }
      ],
      duration: '12 months',
      rating: 5,
      image: '/previews/ai-saas.jpg'
    }
  ];

  return (
    <div className="relative">
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
            Success Stories
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries achieve remarkable growth and success.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-black/20 backdrop-blur-sm">
                    {caseStudy.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-1">
                  {[...Array(caseStudy.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {caseStudy.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {caseStudy.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 mx-auto mb-2">
                        <result.icon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {result.value}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span>{caseStudy.duration}</span>
                  </div>
                  <button className="flex items-center text-sm font-semibold text-slate-700 dark:text-white hover:text-slate-900 dark:hover:text-white transition-colors group-hover:translate-x-1">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
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
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's work together to achieve similar results for your business. Our proven strategies and expertise can help you reach your goals.
            </p>
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cases; 