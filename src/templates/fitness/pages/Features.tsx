import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  Heart, 
  Users, 
  Clock, 
  Smartphone, 
  Award,
  TrendingUp,
  Zap
} from 'lucide-react';

interface FeaturesProps {
  config: any;
}

const Features: React.FC<FeaturesProps> = ({ config }) => {

  const features = [
    {
      icon: Dumbbell,
      title: "Personalized Workouts",
      description: "AI-powered workout plans tailored to your fitness level and goals"
    },
    {
      icon: Heart,
      title: "Health Tracking",
      description: "Monitor your heart rate, calories burned, and progress over time"
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Access to certified personal trainers and nutritionists"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "24/7 access to workouts that fit your busy lifestyle"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Track your progress anywhere with our mobile application"
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Earn badges and rewards as you reach your fitness milestones"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Members" },
    { number: "500+", label: "Workout Videos" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Why Choose {config.brandName}?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your fitness journey with our comprehensive platform designed to help you achieve your goals faster and more effectively.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-12">Our Impact in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-red-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Advanced Technology Meets Fitness
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Progress Analytics</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Detailed insights into your fitness journey with advanced analytics and progress tracking.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Results</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    See visible results in as little as 4 weeks with our proven workout methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-2xl p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Start Your Transformation Today
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join thousands of members who have already transformed their lives with {config.brandName}.
              </p>
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Get Started Free
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 