import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Palette, Globe, Zap, Star, Mail } from 'lucide-react';

interface ProjectsProps {
  config: any;
}

const Projects: React.FC<ProjectsProps> = ({ config }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'api', label: 'APIs & Backend' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 245, forks: 89 }
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics dashboard with machine learning insights. Built with TypeScript, Python, and TensorFlow for predictive analytics.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['TypeScript', 'Python', 'TensorFlow', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 189, forks: 67 }
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with React Native. Includes workout planning, progress tracking, and social features.',
      image: '/api/placeholder/400/300',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 156, forks: 43 }
    },
    {
      id: 4,
      title: 'Design System Library',
      description: 'Comprehensive design system with reusable components, documentation, and design tokens. Built for scalability and consistency.',
      image: '/api/placeholder/400/300',
      category: 'design',
      technologies: ['Storybook', 'Figma', 'CSS-in-JS', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 98, forks: 32 }
    },
    {
      id: 5,
      title: 'RESTful API Service',
      description: 'High-performance REST API with authentication, rate limiting, and comprehensive documentation. Built with Express.js and PostgreSQL.',
      image: '/api/placeholder/400/300',
      category: 'api',
      technologies: ['Express.js', 'PostgreSQL', 'JWT', 'Swagger'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 134, forks: 56 }
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations and responsive design. Built with Next.js and Framer Motion.',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['Next.js', 'Framer Motion', 'TailwindCSS', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 78, forks: 21 }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ 
              backgroundColor: `${config.colors.primary}15`,
              borderColor: config.colors.primary,
              color: config.colors.primary,
              border: `1px solid ${config.colors.primary}30`
            }}
          >
            <Code className="w-4 h-4 mr-2" />
            Featured Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6"
          >
            My Latest
            <span className="block" style={{ color: config.colors.primary }}>
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            A collection of my recent work showcasing my skills in web development, mobile apps, and design.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === filter.id
                  ? 'text-white shadow-2xl'
                  : 'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              style={activeFilter === filter.id ? {
                background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                boxShadow: `0 10px 25px -5px ${config.colors.primary}40`
              } : {}}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl shadow-lg">
                {/* Project Image */}
                <div className="relative h-64 border-b border-slate-200 dark:border-slate-700">
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${config.colors.primary}10, ${config.colors.secondary}10)` 
                    }}
                  >
                    <div className="text-center">
                      <div 
                        className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ 
                          background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                        }}
                      >
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-slate-900 dark:text-white text-lg font-semibold">{project.title}</div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <div 
                        className="text-white px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ 
                          background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                        }}
                      >
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-sm font-medium border-2 transition-all duration-300 hover:scale-105"
                        style={{ 
                          borderColor: config.colors.primary,
                          color: config.colors.primary,
                          backgroundColor: `${config.colors.primary}10`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-slate-500 dark:text-slate-400 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center">
                        <Github className="w-4 h-4 mr-1" />
                        {project.stats.forks}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
                        style={{ 
                          backgroundColor: `${config.colors.primary}20`,
                          color: config.colors.primary
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                      >
                        <Code className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Want to See More?
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects, or let's discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                  boxShadow: `0 10px 25px -5px ${config.colors.primary}40`
                }}
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </button>
              <button className="border-2 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                style={{ 
                  borderColor: config.colors.primary,
                  color: config.colors.primary
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 