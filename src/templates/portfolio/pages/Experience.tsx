import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Award, Users, TrendingUp } from 'lucide-react';

interface ExperienceProps {
  config: any;
}

const Experience: React.FC<ExperienceProps> = ({ config }) => {
  const experiences = [
    {
      company: 'TechCorp Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies.',
      achievements: [
        'Led a team of 5 developers to deliver 3 major product features',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL'],
      type: 'Full-time'
    },
    {
      company: 'StartupXYZ',
      position: 'Lead Frontend Developer',
      period: '2020 - 2022',
      location: 'Remote',
      description: 'Built scalable frontend architecture for a fast-growing SaaS platform.',
      achievements: [
        'Architected and built the main product dashboard',
        'Implemented design system used across 10+ applications',
        'Reduced bundle size by 35% through code splitting',
        'Achieved 95% test coverage for critical components'
      ],
      technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Jest', 'Vite'],
      type: 'Full-time'
    },
    {
      company: 'Digital Agency',
      position: 'Full Stack Developer',
      period: '2018 - 2020',
      location: 'New York, NY',
      description: 'Developed custom web solutions for clients across various industries.',
      achievements: [
        'Delivered 15+ client projects on time and budget',
        'Built e-commerce platform generating $2M+ in sales',
        'Optimized websites achieving 90+ PageSpeed scores',
        'Collaborated with designers to implement pixel-perfect designs'
      ],
      technologies: ['JavaScript', 'PHP', 'WordPress', 'MySQL', 'Laravel', 'Vue.js'],
      type: 'Full-time'
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      period: '2016 - 2018',
      location: 'Remote',
      description: 'Provided web development services to small businesses and startups.',
      achievements: [
        'Completed 25+ projects for various clients',
        'Specialized in WordPress and custom web applications',
        'Built responsive websites with modern design principles',
        'Maintained 100% client satisfaction rate'
      ],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'HTML/CSS', 'MySQL', 'jQuery'],
      type: 'Freelance'
    }
  ];

  const education = [
    {
      institution: 'Stanford University',
      degree: 'Master of Computer Science',
      period: '2014 - 2016',
      location: 'Stanford, CA',
      description: 'Specialized in Software Engineering and Web Technologies',
      achievements: ['GPA: 3.9/4.0', 'Graduated with honors', 'Research in Web Performance']
    },
    {
      institution: 'University of California',
      degree: 'Bachelor of Science in Computer Science',
      period: '2010 - 2014',
      location: 'Berkeley, CA',
      description: 'Major in Computer Science with minor in Design',
      achievements: ['GPA: 3.8/4.0', 'Dean\'s List all semesters', 'Capstone project award']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'SAA-C03'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credential: 'GCP-001'
    },
    {
      name: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      date: '2021',
      credential: 'CSM-001'
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
            Work <span style={{ color: config.colors.primary }}>Experience</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            My professional journey and the impact I've made in various roles and organizations.
          </p>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-6 w-4 h-4 rounded-full border-4 border-white dark:border-slate-800 shadow-lg"
                  style={{ backgroundColor: config.colors.primary }}
                />
                
                <div className="ml-16">
                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          {exp.position}
                        </h3>
                        <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
                          <div className="flex items-center space-x-2">
                            <ExternalLink className="w-4 h-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <span 
                          className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white"
                          style={{ backgroundColor: config.colors.secondary }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2" style={{ color: config.colors.primary }} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div 
                              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: config.colors.accent }}
                            />
                            <span className="text-slate-600 dark:text-slate-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2" style={{ color: config.colors.primary }} />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Education
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              My academic background and qualifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${edu.degree}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-lg font-semibold" style={{ color: config.colors.primary }}>
                    {edu.institution}
                  </p>
                  <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 mt-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {edu.description}
                  </p>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-slate-600 dark:text-slate-400">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Certifications
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Professional certifications and credentials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 text-center">
                  <div 
                    className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})` 
                    }}
                  >
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm font-semibold" style={{ color: config.colors.primary }}>
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {cert.date} • {cert.credential}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience; 