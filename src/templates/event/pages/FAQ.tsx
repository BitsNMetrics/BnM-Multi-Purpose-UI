import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FAQProps {
  config: any;
}

const FAQ: React.FC<FAQProps> = ({ config }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      id: 1,
      question: 'What is included in my conference ticket?',
      answer: 'Your conference ticket includes full access to all keynote sessions, workshop sessions, networking events, conference materials, lunch, and a certificate of attendance. VIP tickets also include exclusive benefits like VIP seating, meet & greet with speakers, and premium swag bags.'
    },
    {
      id: 2,
      question: 'Can I get a refund if I can\'t attend?',
      answer: 'We offer a full refund up to 30 days before the event. Between 30-14 days before the event, we offer a 50% refund. No refunds are available within 14 days of the event. You can also transfer your ticket to another person at any time.'
    },
    {
      id: 3,
      question: 'Is the venue accessible for people with disabilities?',
      answer: 'Yes, our venue is fully accessible with ramps, elevators, and accessible restrooms. We also provide assistive listening devices and can accommodate special dietary requirements. Please let us know about any specific needs during registration.'
    },
    {
      id: 4,
      question: 'What should I bring to the conference?',
      answer: 'We recommend bringing a laptop or tablet for workshop sessions, business cards for networking, comfortable clothing, and a notebook. WiFi will be provided, and all presentation materials will be available digitally.'
    },
    {
      id: 5,
      question: 'Are meals included in the ticket price?',
      answer: 'Yes, lunch is included for all ticket types. Coffee breaks and refreshments are also provided throughout the day. VIP ticket holders receive additional catering benefits during exclusive events.'
    },
    {
      id: 6,
      question: 'Can I attend only specific sessions?',
      answer: 'Conference tickets provide access to all sessions. However, some workshops may have limited capacity and require advance registration. VIP ticket holders get priority registration for workshops.'
    },
    {
      id: 7,
      question: 'Is there parking available at the venue?',
      answer: 'Yes, free parking is available for all attendees. The venue has a large parking lot with designated spaces for conference attendees. We also recommend carpooling or using public transportation when possible.'
    },
    {
      id: 8,
      question: 'Will the sessions be recorded?',
      answer: 'Keynote sessions will be recorded and made available to attendees after the conference. Workshop sessions are not recorded to encourage interactive participation. VIP ticket holders receive access to additional post-conference materials.'
    },
    {
      id: 9,
      question: 'What COVID-19 safety measures are in place?',
      answer: 'We follow all local health guidelines and implement appropriate safety measures. This may include mask requirements, social distancing, and enhanced cleaning protocols. We\'ll communicate specific measures closer to the event date.'
    },
    {
      id: 10,
      question: 'Can I bring a guest to networking events?',
      answer: 'Networking events are included with your conference ticket. If you\'d like to bring a guest who doesn\'t have a conference ticket, you can purchase additional networking-only passes, subject to availability.'
    },
    {
      id: 11,
      question: 'What is the dress code for the conference?',
      answer: 'The dress code is business casual. We recommend comfortable clothing as you\'ll be moving between sessions and networking throughout the day. Some evening events may have specific dress requirements.'
    },
    {
      id: 12,
      question: 'How can I connect with other attendees before the event?',
      answer: 'We\'ll provide access to our conference app and online community platform where you can connect with other attendees, speakers, and sponsors. You\'ll receive login details after registration.'
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Find answers to common questions about the conference, registration, and what to expect.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Registration', 'Venue', 'Schedule', 'Tickets'].map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: index === 0 ? config.colors.primary : 'transparent',
                  color: index === 0 ? 'white' : config.colors.primary,
                  border: `2px solid ${config.colors.primary}`
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <motion.div
                    animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 text-slate-500 dark:text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openItems.includes(item.id) ? 'auto' : 0,
                  opacity: openItems.includes(item.id) ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">
              📧
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Email Support
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Get quick answers to your questions
            </p>
            <a
              href="mailto:support@techconf.com"
              className="inline-block px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              Send Email
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">
              💬
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Live Chat
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Chat with our support team
            </p>
            <button
              className="inline-block px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              Start Chat
            </button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">
              📞
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Phone Support
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Call us during business hours
            </p>
            <a
              href="tel:+1-555-123-4567"
              className="inline-block px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              Call Now
            </a>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our support team is here to help with any questions not covered in our FAQ.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Contact Support
              </button>
              <button
                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Download Event Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ; 