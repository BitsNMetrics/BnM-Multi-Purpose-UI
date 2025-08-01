import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, Building2, Calendar } from 'lucide-react';

interface TestimonialsProps {
  config: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ config }) => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      avatar: 'SJ',
      rating: 5,
      date: 'March 2024',
      content: 'John delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made our vision come to life perfectly. The site is fast, responsive, and has significantly improved our conversion rates.',
      project: 'E-commerce Platform',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB']
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      company: 'InnovateLab',
      avatar: 'MC',
      rating: 5,
      date: 'February 2024',
      content: 'Working with John was a game-changer for our startup. He not only built a robust SaaS platform but also provided valuable insights on architecture and scalability. His code quality and documentation are outstanding.',
      project: 'SaaS Dashboard',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS']
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'Creative Agency',
      avatar: 'ER',
      rating: 5,
      date: 'January 2024',
      content: 'John transformed our agency website into a modern, professional platform that perfectly represents our brand. His design sensibility and technical skills are unmatched. Our clients love the new site!',
      project: 'Agency Website',
      technologies: ['Vue.js', 'Tailwind CSS', 'WordPress', 'PHP']
    },
    {
      name: 'David Kim',
      position: 'Founder',
      company: 'HealthTech Solutions',
      avatar: 'DK',
      rating: 5,
      date: 'December 2023',
      content: 'John built our healthcare platform with precision and care. He understood the complex requirements and delivered a secure, HIPAA-compliant solution. His expertise in healthcare tech is invaluable.',
      project: 'Healthcare Platform',
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker']
    },
    {
      name: 'Lisa Thompson',
      position: 'Product Manager',
      company: 'EduTech Pro',
      avatar: 'LT',
      rating: 5,
      date: 'November 2023',
      content: 'John developed our learning management system with incredible attention to user experience. The platform is intuitive, fast, and has received excellent feedback from our students and instructors.',
      project: 'Learning Management System',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io']
    },
    {
      name: 'Alex Wong',
      position: 'Operations Manager',
      company: 'Logistics Plus',
      avatar: 'AW',
      rating: 5,
      date: 'October 2023',
      content: 'John created a comprehensive logistics tracking system that streamlined our operations. His understanding of business processes and ability to translate them into efficient software is remarkable.',
      project: 'Logistics Platform',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis']
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '45+' },
    { label: 'Average Rating', value: '5.0' },
    { label: 'Years Experience', value: '5+' }
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Client <span style={{ color: config.colors.primary }}>Testimonials</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Hear what my clients have to say about working together and the results we've achieved.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div 
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                }}
              >
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${testimonial.company}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                    }}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Project Info */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {testimonial.project}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: `${config.colors.primary}15`,
                          color: config.colors.primary
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                      }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                        <Building2 className="w-4 h-4" />
                        <span>{testimonial.position} at {testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div 
            className="relative rounded-3xl p-12 overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
            }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mx-auto mb-6 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-white text-white" />
                  ))}
                </div>
              </div>

              <blockquote className="text-2xl md:text-3xl font-medium text-white text-center mb-8 leading-relaxed max-w-4xl mx-auto">
                "John is not just a developer; he's a true partner in our success. His technical expertise, 
                attention to detail, and commitment to delivering exceptional results have made him an 
                invaluable asset to our team. Every project we've worked on together has exceeded expectations."
              </blockquote>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl">
                    SJ
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-white">
                      Sarah Johnson
                    </h4>
                    <p className="text-white/80">
                      CEO, TechStart Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Join My Happy Clients?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life. I'm committed to delivering 
              exceptional results that exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                  boxShadow: `0 10px 25px -5px ${config.colors.primary}40`
                }}
              >
                <span>Start Your Project</span>
              </button>
              <button className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: config.colors.primary,
                  color: config.colors.primary
                }}
              >
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials; 