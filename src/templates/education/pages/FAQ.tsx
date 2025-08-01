import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  config: any;
}

const FAQ: React.FC<FAQProps> = ({ config }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I get started with a course?',
      answer: 'Simply sign up for a free account, browse our course catalog, and enroll in any course that interests you. You can start learning immediately with our free courses or upgrade to a premium plan for full access.',
    },
    {
      question: 'Do you offer certificates upon completion?',
      answer: 'Yes! All our courses come with a certificate of completion that you can download and share on your resume or LinkedIn profile. Certificates are recognized by employers worldwide.',
    },
    {
      question: 'Can I access courses on mobile devices?',
      answer: 'Absolutely! Our platform is fully responsive and works perfectly on smartphones and tablets. You can download our mobile app for an even better learning experience.',
    },
    {
      question: 'What if I\'m not satisfied with a course?',
      answer: 'We offer a 30-day money-back guarantee on all premium plans. If you\'re not completely satisfied, simply contact our support team and we\'ll process your refund, no questions asked.',
    },
    {
      question: 'How often are courses updated?',
      answer: 'We regularly update our courses to ensure they reflect the latest industry trends and technologies. Instructors typically update their courses every 3-6 months.',
    },
    {
      question: 'Can I interact with instructors?',
      answer: 'Yes! Premium subscribers can participate in live Q&A sessions, join discussion forums, and even book 1-on-1 mentoring sessions with instructors.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Find answers to common questions about our learning platform.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-slate-600 dark:text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-600 dark:text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Still have questions? We're here to help!
          </p>
          <button
            className="inline-flex items-center px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ backgroundColor: config.colors.primary }}
          >
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ; 