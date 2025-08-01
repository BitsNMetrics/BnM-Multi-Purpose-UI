import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Calendar, Award, Users } from 'lucide-react';

interface AboutProps {
  config: any;
}

const About: React.FC<AboutProps> = ({ config }) => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Users, label: 'Happy Clients', value: '50+' },
    { icon: Download, label: 'Projects Completed', value: '100+' },
    { icon: Mail, label: 'Response Time', value: '< 2h' },
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
            About <span style={{ color: config.colors.primary }}>Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies and a keen eye for design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Background Gradient */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-20 blur-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                }}
              />
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <div 
                      className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl font-bold text-white shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                      }}
                    >
                      {config.brandName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {config.brandName}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {config.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full shadow-lg"
                style={{ backgroundColor: config.colors.accent }}
              />
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full shadow-lg"
                style={{ backgroundColor: config.colors.secondary }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Crafting Digital Experiences
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating exceptional digital experiences. 
                My expertise spans from modern frontend frameworks to robust backend systems, always with a focus on 
                performance, accessibility, and user experience.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I believe in continuous learning and staying 
                ahead of industry trends.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                <span className="text-slate-700 dark:text-slate-300">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                <span className="text-slate-700 dark:text-slate-300">Available for hire</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                <span className="text-slate-700 dark:text-slate-300">hello@johndoe.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                <span className="text-slate-700 dark:text-slate-300">5+ Years Experience</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                  boxShadow: `0 10px 25px -5px ${config.colors.primary}40`
                }}
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div 
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                  boxShadow: `0 10px 25px -5px ${config.colors.primary}30`
                }}
              >
                <stat.icon className="w-8 h-8 text-white" />
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
      </div>
    </div>
  );
};

export default About; 