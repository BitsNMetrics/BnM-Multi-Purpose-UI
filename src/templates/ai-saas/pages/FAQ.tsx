import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle, BookOpen, Users } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How quickly can I get started with Nova AI?',
      answer: 'You can get started with Nova AI in under 5 minutes. Simply sign up for a free trial, connect your data sources, and our AI will begin analyzing your data immediately. No complex setup or technical expertise required.'
    },
    {
      question: 'What data sources does Nova AI support?',
      answer: 'Nova AI supports 100+ integrations including popular CRM platforms like Salesforce and HubSpot, analytics tools like Google Analytics and Mixpanel, marketing platforms, e-commerce systems, and custom APIs. We can connect to virtually any data source you use.'
    },
    {
      question: 'Is my data secure with Nova AI?',
      answer: 'Absolutely. We use bank-level encryption (AES-256) and are SOC 2 Type II compliant. Your data is encrypted both in transit and at rest. We never share your data with third parties and you maintain full ownership of your data at all times.'
    },
    {
      question: 'How accurate are the AI predictions?',
      answer: 'Our AI models achieve 99.9% accuracy on average across all predictions. We continuously train our models on new data and use advanced machine learning techniques to ensure the highest possible accuracy for your specific use case.'
    },
    {
      question: 'Can I customize the AI models for my business?',
      answer: 'Yes! Nova AI offers custom model training based on your specific data and business requirements. Our team of data scientists can work with you to create tailored AI models that perfectly fit your industry and use case.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 customer support through multiple channels including live chat, email, and phone. Enterprise customers get dedicated account managers and priority support. We also offer comprehensive documentation, video tutorials, and training sessions.'
    },
    {
      question: 'How does pricing work?',
      answer: 'Nova AI offers flexible pricing plans starting at $99/month. Pricing is based on data volume and features needed. We offer a 14-day free trial with no credit card required, and enterprise customers can get custom pricing based on their specific requirements.'
    },
    {
      question: 'Can I export my data and insights?',
      answer: 'Yes, you can export all your data and insights in multiple formats including CSV, JSON, and PDF. You can also set up automated reports and dashboards that can be shared with your team or integrated into other tools via our API.'
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      action: 'Browse Docs',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with other Nova AI users',
      action: 'Join Community',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-white dark:bg-slate-900">
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
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-200/50 dark:border-indigo-700/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-8"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Got Questions?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            >
              Find answers to the most common questions about Nova AI. Can't find what you're looking for? Contact our support team.
            </motion.p>
          </motion.div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="space-y-4">
              {faqs.slice(0, 4).map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              {faqs.slice(4, 8).map((faq, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index + 4) * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index + 4 ? null : index + 4)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index + 4 ? (
                      <Minus className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === index + 4 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Support Options */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-600/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${option.color} mb-6 shadow-lg`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {option.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {option.description}
                </p>
                <button className="w-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:shadow-lg">
                  {option.action}
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-center text-white"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Still Have Questions?
              </h3>
              <p className="text-xl text-purple-100 mb-8">
                Our support team is here to help. Get in touch and we'll get back to you within 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  <MessageCircle className="w-5 h-5 mr-2 inline" />
                  Contact Support
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 