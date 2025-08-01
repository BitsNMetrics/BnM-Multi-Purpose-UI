import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, Clock, Users, Shield } from 'lucide-react';

interface FAQProps {
  config: any;
}

const FAQ: React.FC<FAQProps> = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqCategories = [
    { key: 'all', label: 'All Questions', icon: HelpCircle },
    { key: 'beta', label: 'Beta Program', icon: Clock },
    { key: 'pricing', label: 'Pricing', icon: Users },
    { key: 'technical', label: 'Technical', icon: Shield }
  ];

  const faqData = [
    {
      id: 1,
      category: 'beta',
      question: 'How do I join the beta program?',
      answer: 'Joining our beta program is simple! Just enter your email address in the signup form on our homepage. We\'ll send you an invitation to join the beta within 24 hours. Beta users get early access to all features and exclusive pricing.'
    },
    {
      id: 2,
      category: 'beta',
      question: 'What are the benefits of being a beta user?',
      answer: 'Beta users get exclusive access to new features before anyone else, discounted pricing for life, direct access to our development team for feedback, and priority support. You\'ll also be part of shaping the future of our platform.'
    },
    {
      id: 3,
      category: 'pricing',
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 30-day free trial for all plans. No credit card required to start. You can explore all features and see if our platform is the right fit for your team before making any commitment.'
    },
    {
      id: 4,
      category: 'pricing',
      question: 'Can I change my plan later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments. There are no penalties for changing plans.'
    },
    {
      id: 5,
      category: 'technical',
      question: 'What integrations do you support?',
      answer: 'We support 100+ integrations including Slack, Microsoft Teams, Google Workspace, Salesforce, HubSpot, and many more. We also offer a robust API for custom integrations. Check our integrations page for the full list.'
    },
    {
      id: 6,
      category: 'technical',
      question: 'How secure is my data?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, SOC 2 Type II compliance, and regular security audits. Your data is encrypted in transit and at rest, and we never share your information with third parties.'
    },
    {
      id: 7,
      category: 'technical',
      question: 'Do you offer on-premise deployment?',
      answer: 'Yes, we offer on-premise deployment for Enterprise customers. This includes full installation support, custom training, and dedicated infrastructure management. Contact our sales team for more details.'
    },
    {
      id: 8,
      category: 'beta',
      question: 'How long will the beta program last?',
      answer: 'The beta program will run for approximately 6 months. After that, we\'ll launch our full platform. Beta users will automatically be converted to paying customers with their exclusive pricing locked in.'
    },
    {
      id: 9,
      category: 'pricing',
      question: 'What happens after my free trial ends?',
      answer: 'After your 30-day free trial, you can choose to continue with any of our paid plans. If you don\'t upgrade, your account will be paused but your data will be preserved for 90 days in case you want to return.'
    },
    {
      id: 10,
      category: 'technical',
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including email support for all plans, priority support for Founder and Enterprise plans, and 24/7 phone support for Enterprise customers. We also have a comprehensive knowledge base and community forum.'
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Frequently Asked <span style={{ color: config.colors.primary }}>Questions</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Find answers to common questions about our beta program, pricing, and platform features.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600 text-slate-900 dark:text-white"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            const count = faqData.filter(faq => 
              category.key === 'all' || faq.category === category.key
            ).length;
            
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.label}</span>
                <span className="text-sm opacity-75">({count})</span>
              </button>
            );
          })}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence>
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                        expandedItems.includes(faq.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6">
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <HelpCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No questions found
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Try adjusting your search terms or browse all categories.
            </p>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Our team is here to help you get started and answer any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: config.colors.primary }}
              >
                Contact Support
              </button>
              <button
                className="px-8 py-4 rounded-2xl font-semibold border-2 transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                style={{ 
                  borderColor: config.colors.primary,
                  color: config.colors.primary
                }}
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 