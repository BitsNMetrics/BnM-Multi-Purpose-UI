import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Cloud, Smartphone, Globe } from 'lucide-react';

interface SkillsProps {
  config: any;
}

const Skills: React.FC<SkillsProps> = ({ config }) => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'GraphQL', level: 78 },
      ]
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Photoshop', level: 80 },
        { name: 'Illustrator', level: 75 },
        { name: 'Sketch', level: 70 },
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Git', level: 92 },
        { name: 'CI/CD', level: 78 },
        { name: 'Kubernetes', level: 70 },
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 80 },
        { name: 'iOS Development', level: 75 },
        { name: 'Android Development', level: 70 },
        { name: 'PWA', level: 88 },
      ]
    },
    {
      icon: Globe,
      title: 'Other Technologies',
      skills: [
        { name: 'Blockchain', level: 75 },
        { name: 'Machine Learning', level: 70 },
        { name: 'Web3', level: 80 },
        { name: 'Three.js', level: 65 },
        { name: 'Electron', level: 72 },
      ]
    }
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
            My <span style={{ color: config.colors.primary }}>Skills</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                    }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold" style={{ color: config.colors.primary }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className="h-full rounded-full transition-all duration-300"
                          style={{ 
                            background: `linear-gradient(90deg, ${config.colors.primary}, ${config.colors.secondary})`,
                            boxShadow: `0 0 10px ${config.colors.primary}40`
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Additional Skills & Tools
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Technologies and tools I work with on a regular basis
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js', 'Python',
              'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Vercel',
              'Git', 'GitHub', 'Figma', 'Adobe XD', 'Tailwind CSS', 'Sass',
              'Next.js', 'Nuxt.js', 'Express.js', 'FastAPI', 'GraphQL', 'REST API'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.02 }}
                viewport={{ once: true }}
                className="group"
              >
                <div 
                  className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group-hover:scale-105"
                  style={{
                    boxShadow: `0 4px 15px ${config.colors.primary}10`
                  }}
                >
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Work Together?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <button 
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
                boxShadow: `0 10px 25px -5px ${config.colors.primary}40`
              }}
            >
              <span>Let's Talk</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 