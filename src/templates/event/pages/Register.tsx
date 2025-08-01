import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface RegisterProps {
  config: any;
}

const Register: React.FC<RegisterProps> = ({ config }) => {
  const [selectedTicket, setSelectedTicket] = useState('early-bird');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    dietaryRestrictions: '',
    specialRequirements: ''
  });

  const ticketOptions = [
    {
      id: 'early-bird',
      name: 'Early Bird',
      price: 299,
      originalPrice: 399,
      description: 'Limited time offer - save $100',
      features: [
        'Full conference access',
        'All workshop sessions',
        'Networking events',
        'Conference materials',
        'Lunch included',
        'Certificate of attendance'
      ],
      available: true,
      badge: 'Most Popular'
    },
    {
      id: 'regular',
      name: 'Regular',
      price: 399,
      originalPrice: 399,
      description: 'Standard conference ticket',
      features: [
        'Full conference access',
        'All workshop sessions',
        'Networking events',
        'Conference materials',
        'Lunch included',
        'Certificate of attendance'
      ],
      available: true
    },
    {
      id: 'vip',
      name: 'VIP Experience',
      price: 599,
      originalPrice: 699,
      description: 'Premium experience with exclusive benefits',
      features: [
        'All regular features',
        'VIP seating at keynotes',
        'Exclusive networking dinner',
        'Meet & greet with speakers',
        'Priority workshop registration',
        'Swag bag with premium items',
        'Post-conference materials'
      ],
      available: true,
      badge: 'Premium'
    },
    {
      id: 'student',
      name: 'Student',
      price: 149,
      originalPrice: 299,
      description: 'Valid student ID required',
      features: [
        'Full conference access',
        'All workshop sessions',
        'Networking events',
        'Conference materials',
        'Lunch included',
        'Certificate of attendance'
      ],
      available: true,
      badge: 'Student Discount'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Registration submitted:', { ticket: selectedTicket, ...formData });
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
            Register Now
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Secure your spot at the most anticipated tech conference of the year. Choose your ticket and complete your registration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ticket Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Choose Your Ticket
            </h3>
            <div className="space-y-6">
              {ticketOptions.map((ticket, index) => (
                <motion.div
                  key={ticket.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedTicket === ticket.id
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80'
                  }`}
                  onClick={() => setSelectedTicket(ticket.id)}
                >
                  {ticket.badge && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                      {ticket.badge}
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {ticket.name}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {ticket.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        ${ticket.price}
                      </div>
                      {ticket.originalPrice !== ticket.price && (
                        <div className="text-sm text-slate-500 line-through">
                          ${ticket.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {ticket.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Registration Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Dietary Restrictions
                </label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  placeholder="e.g., Vegetarian, Gluten-free, etc."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Special Requirements
                </label>
                <textarea
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Any special requirements or accommodations needed..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Order Summary
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">
                      {ticketOptions.find(t => t.id === selectedTicket)?.name} Ticket
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      ${ticketOptions.find(t => t.id === selectedTicket)?.price}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Processing Fee</span>
                    <span className="font-semibold text-slate-900 dark:text-white">$9.99</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-slate-600 pt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-slate-900 dark:text-white">Total</span>
                      <span className="text-lg font-bold text-slate-900 dark:text-white">
                        ${(ticketOptions.find(t => t.id === selectedTicket)?.price || 0) + 9.99}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: config.colors.primary }}
              >
                Complete Registration
              </button>
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Questions About Registration?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our team is here to help with any questions about tickets, registration, or the event.
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
                View FAQ
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register; 