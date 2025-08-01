import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Play, BookOpen, Code, Palette, TrendingUp } from 'lucide-react';

interface CoursesProps {
  config: any;
}

const Courses: React.FC<CoursesProps> = ({ config }) => {
  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      category: 'Development',
      instructor: 'Sarah Johnson',
      duration: '40 hours',
      students: '12,450',
      rating: 4.8,
      price: '$89',
      originalPrice: '$199',
      image: 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30',
      icon: Code,
      popular: true,
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      category: 'Design',
      instructor: 'Mike Chen',
      duration: '35 hours',
      students: '8,920',
      rating: 4.9,
      price: '$79',
      originalPrice: '$149',
      image: 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30',
      icon: Palette,
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      category: 'Data Science',
      instructor: 'Dr. Emily Rodriguez',
      duration: '50 hours',
      students: '15,230',
      rating: 4.7,
      price: '$99',
      originalPrice: '$249',
      image: 'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30',
      icon: TrendingUp,
      popular: true,
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      category: 'Marketing',
      instructor: 'Alex Thompson',
      duration: '30 hours',
      students: '6,780',
      rating: 4.6,
      price: '$69',
      originalPrice: '$129',
      image: 'bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30',
      icon: TrendingUp,
    },
    {
      id: 5,
      title: 'Mobile App Development',
      category: 'Development',
      instructor: 'David Kim',
      duration: '45 hours',
      students: '9,340',
      rating: 4.8,
      price: '$94',
      originalPrice: '$179',
      image: 'bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30',
      icon: Code,
    },
    {
      id: 6,
      title: 'Business Analytics',
      category: 'Business',
      instructor: 'Lisa Wang',
      duration: '25 hours',
      students: '5,670',
      rating: 4.5,
      price: '$59',
      originalPrice: '$119',
      image: 'bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30',
      icon: TrendingUp,
    },
  ];

  const categories = [
    { name: 'All', count: 500, active: true },
    { name: 'Development', count: 120 },
    { name: 'Design', count: 85 },
    { name: 'Data Science', count: 95 },
    { name: 'Marketing', count: 75 },
    { name: 'Business', count: 125 },
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
            Popular Courses
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Choose from hundreds of courses created by industry experts and start your learning journey today.
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
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-green-900/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Course Card */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}

                {/* Course Image */}
                <div className={`${course.image} rounded-xl p-4 mb-4 relative overflow-hidden`}>
                  <course.icon className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Course Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {course.category}
                    </span>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {course.rating}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    by {course.instructor}
                  </p>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">
                        {course.price}
                      </span>
                      <span className="text-sm text-slate-500 line-through">
                        {course.originalPrice}
                      </span>
                    </div>
                    <button
                      className="flex items-center px-4 py-2 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-lg"
                      style={{ backgroundColor: config.colors.primary }}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Enroll
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
            View All Courses
            <BookOpen className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses; 