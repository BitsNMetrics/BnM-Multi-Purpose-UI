import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Award, Clock, Smartphone, Globe, Shield, Headphones } from 'lucide-react';

interface FeaturesProps {
  config: any;
}

const Features: React.FC<FeaturesProps> = ({ config }) => {
  const features = [
    {
      icon: Play,
      title: 'Learn at Your Own Pace',
      description: 'Access course content 24/7 and learn at a speed that works for you.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Award,
      title: 'Certificates',
      description: 'Earn certificates upon completion to showcase your new skills.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Lifetime Access',
      description: 'Once enrolled, you have lifetime access to all course materials.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Learning',
      description: 'Learn on any device with our mobile-optimized platform.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with learners from around the world in our community.',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Shield,
      title: '30-Day Guarantee',
      description: 'Not satisfied? Get a full refund within 30 days, no questions asked.',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock support team.',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We provide everything you need to succeed in your learning journey with cutting-edge features and expert support.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Courses Available</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">50K+</div>
              <div className="text-green-100">Active Students</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">200+</div>
              <div className="text-green-100">Expert Instructors</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features; 