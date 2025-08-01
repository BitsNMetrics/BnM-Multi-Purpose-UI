import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  config: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ config }) => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Web Developer',
      company: 'TechCorp',
      rating: 5,
      content: 'The web development course completely transformed my career. I went from knowing nothing to landing a job at a top tech company within 6 months.',
      avatar: 'SJ',
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'UI/UX Designer',
      company: 'Design Studio',
      rating: 5,
      content: 'The design courses are incredibly comprehensive. The instructors are industry experts who really know their stuff. Highly recommended!',
      avatar: 'MC',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      company: 'Analytics Inc',
      rating: 5,
      content: 'I learned more in 3 months with EduPro than I did in 2 years of self-study. The practical projects and expert guidance made all the difference.',
      avatar: 'ER',
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
            What Our Students Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Join thousands of satisfied students who have transformed their careers with our courses.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-green-500/20 absolute top-4 right-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 