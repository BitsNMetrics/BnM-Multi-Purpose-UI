import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Play, Dumbbell, Heart, Zap, Target } from 'lucide-react';

interface ProgramsProps {
  config: any;
}

const Programs: React.FC<ProgramsProps> = ({ config }) => {
  const programs = [
    {
      id: 1,
      title: 'Strength Training Pro',
      category: 'Strength',
      trainer: 'Mike Johnson',
      duration: '12 weeks',
      members: '2,450',
      rating: 4.9,
      price: '$199',
      originalPrice: '$299',
      image: 'bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30',
      icon: Dumbbell,
      popular: true,
      description: 'Build muscle and increase strength with this comprehensive program.',
    },
    {
      id: 2,
      title: 'Cardio Blast',
      category: 'Cardio',
      trainer: 'Sarah Chen',
      duration: '8 weeks',
      members: '1,890',
      rating: 4.8,
      price: '$149',
      originalPrice: '$199',
      image: 'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30',
      icon: Heart,
      description: 'Boost your endurance and burn calories with high-intensity cardio.',
    },
    {
      id: 3,
      title: 'HIIT Master',
      category: 'HIIT',
      trainer: 'Alex Rodriguez',
      duration: '6 weeks',
      members: '3,120',
      rating: 4.9,
      price: '$179',
      originalPrice: '$249',
      image: 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30',
      icon: Zap,
      popular: true,
      description: 'Maximum results in minimum time with this intense program.',
    },
    {
      id: 4,
      title: 'Yoga Flow',
      category: 'Yoga',
      trainer: 'Emma Wilson',
      duration: '10 weeks',
      members: '1,670',
      rating: 4.7,
      price: '$129',
      originalPrice: '$179',
      image: 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30',
      icon: Target,
      description: 'Find balance and flexibility with mindful yoga practice.',
    },
  ];

  const categories = [
    { name: 'All', count: 50, active: true },
    { name: 'Strength', count: 15 },
    { name: 'Cardio', count: 12 },
    { name: 'HIIT', count: 8 },
    { name: 'Yoga', count: 10 },
    { name: 'Pilates', count: 5 },
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
            Fitness Programs
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Choose from our expert-designed programs to achieve your fitness goals faster and more effectively.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category.name}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                category.active
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-red-900/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Program Card */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Popular Badge */}
                {program.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}

                {/* Program Image */}
                <div className={`${program.image} rounded-xl p-4 mb-4 relative overflow-hidden`}>
                  <program.icon className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Program Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-red-600 dark:text-red-400">
                      {program.category}
                    </span>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {program.rating}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    by {program.trainer}
                  </p>

                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {program.description}
                  </p>

                  {/* Program Stats */}
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {program.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {program.members}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">
                        {program.price}
                      </span>
                      <span className="text-sm text-slate-500 line-through">
                        {program.originalPrice}
                      </span>
                    </div>
                    <button
                      className="flex items-center px-4 py-2 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-lg"
                      style={{ backgroundColor: config.colors.primary }}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            className="inline-flex items-center px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ backgroundColor: config.colors.primary }}
          >
            View All Programs
            <Dumbbell className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Programs; 