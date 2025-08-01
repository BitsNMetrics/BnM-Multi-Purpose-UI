import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Package, CreditCard, Truck, Shield, HelpCircle } from 'lucide-react';

interface FAQProps {
  config: any;
}

const FAQ: React.FC<FAQProps> = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqCategories = [
    { key: 'all', label: 'All Questions', icon: HelpCircle },
    { key: 'ordering', label: 'Ordering', icon: Package },
    { key: 'payment', label: 'Payment', icon: CreditCard },
    { key: 'shipping', label: 'Shipping', icon: Truck },
    { key: 'returns', label: 'Returns', icon: Shield }
  ];

  const faqData = [
    {
      id: 1,
      category: 'ordering',
      question: 'How do I place an order?',
      answer: 'Placing an order is simple! Browse our products, add items to your cart, and proceed to checkout. You can pay securely using credit cards, PayPal, or other payment methods. You\'ll receive an order confirmation email once your purchase is complete.'
    },
    {
      id: 2,
      category: 'ordering',
      question: 'Can I modify or cancel my order?',
      answer: 'Orders can be modified or cancelled within 2 hours of placement. After this time, your order will be processed and shipped. Please contact our customer service team immediately if you need to make changes to your order.'
    },
    {
      id: 3,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through our encrypted payment gateway.'
    },
    {
      id: 4,
      category: 'payment',
      question: 'Is my payment information secure?',
      answer: 'Absolutely! We use industry-standard SSL encryption to protect your payment information. We never store your credit card details on our servers. All transactions are processed through secure, PCI-compliant payment processors.'
    },
    {
      id: 5,
      category: 'shipping',
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. International shipping typically takes 7-14 business days depending on your location. You\'ll receive tracking information once your order ships.'
    },
    {
      id: 6,
      category: 'shipping',
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can check shipping costs and estimated delivery times during checkout by entering your shipping address.'
    },
    {
      id: 7,
      category: 'shipping',
      question: 'How much does shipping cost?',
      answer: 'Shipping costs depend on your location and the shipping method you choose. Standard shipping is free for orders over $50, while express shipping has a flat rate of $15. International shipping costs are calculated based on weight and destination.'
    },
    {
      id: 8,
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Return shipping is free for defective items. Please contact our customer service team to initiate a return.'
    },
    {
      id: 9,
      category: 'returns',
      question: 'How do I return an item?',
      answer: 'To return an item, contact our customer service team within 30 days of purchase. We\'ll provide you with a return authorization number and shipping label. Once we receive your return, we\'ll process your refund within 5-7 business days.'
    },
    {
      id: 10,
      category: 'returns',
      question: 'Are there any items that cannot be returned?',
      answer: 'Some items cannot be returned for hygiene or safety reasons, including personalized items, digital downloads, and certain electronics. These restrictions are clearly noted on the product page before purchase.'
    },
    {
      id: 11,
      category: 'ordering',
      question: 'Do you offer bulk discounts?',
      answer: 'Yes! We offer volume discounts for bulk orders. Discounts start at 10% for orders of 10+ units and increase with larger quantities. Contact our sales team for custom pricing on large orders.'
    },
    {
      id: 12,
      category: 'payment',
      question: 'Can I save my payment information for future purchases?',
      answer: 'Yes, you can securely save your payment information in your account for faster checkout. This information is encrypted and stored securely. You can manage your saved payment methods in your account settings.'
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
    <section className="w-full py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
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
            Find answers to common questions about our products, ordering process, shipping, and more.
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
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600 text-slate-900 dark:text-white"
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
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
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
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
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
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Our customer support team is here to help you 24/7.
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
                Live Chat
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 