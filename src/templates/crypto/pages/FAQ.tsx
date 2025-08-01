import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQProps {
  config: any;
}

const FAQ: React.FC<FAQProps> = ({ config: _config }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How secure is the platform?",
      answer: "Our platform uses institutional-grade security with 95% of assets stored in cold storage, multi-signature wallets, and 24/7 monitoring. We're SOC 2 Type II certified and compliant with global regulations including SEC, GDPR, and PCI DSS Level 1."
    },
    {
      question: "What cryptocurrencies can I trade?",
      answer: "We support 200+ cryptocurrencies including Bitcoin, Ethereum, and all major altcoins. New tokens are regularly added based on market demand and regulatory compliance. You can view the complete list in our trading interface."
    },
    {
      question: "What are the trading fees?",
      answer: "Trading fees start at 0.1% for institutional accounts and range from 0.2% to 0.5% for retail traders. We offer volume discounts and maker rebates. All fees are transparent and displayed before each trade."
    },
    {
      question: "How fast is order execution?",
      answer: "Our platform achieves sub-10ms execution speeds with 99.9% uptime. We use high-frequency trading infrastructure and direct market access to ensure the fastest possible order execution for all users."
    },
    {
      question: "Can I use trading bots and APIs?",
      answer: "Yes! We provide REST and WebSocket APIs for algorithmic trading. Pro and Institutional accounts can access advanced trading bots, automated strategies, and custom integrations. API documentation is available in your account dashboard."
    },
    {
      question: "Is the platform regulated?",
      answer: "Yes, we are fully regulated and licensed in 50+ countries. We maintain compliance with SEC, FINRA, and other regulatory bodies. Our platform undergoes regular audits and maintains all necessary licenses for cryptocurrency trading."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept bank transfers, credit cards, debit cards, and cryptocurrency deposits. We support local payment methods in 150+ countries. All fiat deposits are processed through regulated financial institutions."
    },
    {
      question: "How do I get started with trading?",
      answer: "Getting started is easy! Simply create an account, complete KYC verification, deposit funds, and start trading. We provide educational resources, demo accounts, and 24/7 support to help you get started safely."
    },
    {
      question: "What happens if I lose my private keys?",
      answer: "We use a hybrid custody model. For hot wallets, we provide secure key recovery options. For cold storage, we use multi-signature technology with institutional-grade backup systems. We've never lost a customer's assets."
    },
    {
      question: "Do you offer mobile trading?",
      answer: "Yes! Our mobile app is available for iOS and Android with full feature parity. You get real-time alerts, biometric login, touch-optimized charts, and all trading features on the go. Download from App Store or Google Play."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Got Questions?
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Everything you need to know about trading cryptocurrencies safely and securely 
            on our platform. Can't find what you're looking for? Contact our support team.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="border-t border-slate-700/50 pt-6">
                        <p className="text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-300 mb-6">
              Our support team is available 24/7 to help you with any questions 
              about trading, security, or platform features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                Contact Support
              </button>
              <button className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-700/50 transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 