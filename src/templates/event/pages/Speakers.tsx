import React from 'react';
import { motion } from 'framer-motion';

interface SpeakersProps {
  config: any;
}

const Speakers: React.FC<SpeakersProps> = ({ config }) => {
  const speakers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Conference Director & AI Researcher',
      company: 'TechCorp',
      image: '/speakers/sarah-johnson.jpg',
      bio: 'Leading expert in artificial intelligence with 15+ years of experience in machine learning and data science.',
      expertise: ['AI/ML', 'Data Science', 'Research'],
      social: {
        twitter: '@sarahjohnson',
        linkedin: 'sarah-johnson-ai',
        github: 'sarahjohnson'
      },
      sessions: ['Opening Ceremony', 'AI Panel Discussion']
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'AI Research Lead',
      company: 'InnovateAI',
      image: '/speakers/michael-chen.jpg',
      bio: 'Pioneering researcher in neural networks and deep learning applications for business solutions.',
      expertise: ['Deep Learning', 'Neural Networks', 'Business AI'],
      social: {
        twitter: '@michaelchen_ai',
        linkedin: 'michael-chen-ai',
        github: 'michaelchen'
      },
      sessions: ['The Future of AI in Business']
    },
    {
      id: 3,
      name: 'Alex Rodriguez',
      role: 'Senior Software Architect',
      company: 'ScaleTech',
      image: '/speakers/alex-rodriguez.jpg',
      bio: 'Expert in building scalable, high-performance systems for enterprise applications.',
      expertise: ['System Architecture', 'Scalability', 'Cloud Computing'],
      social: {
        twitter: '@alexrodriguez',
        linkedin: 'alex-rodriguez-arch',
        github: 'alexrodriguez'
      },
      sessions: ['Building Scalable Systems']
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'Cloud Specialist',
      company: 'CloudFirst',
      image: '/speakers/emma-wilson.jpg',
      bio: 'Cloud infrastructure expert specializing in multi-cloud deployments and DevOps practices.',
      expertise: ['Cloud Computing', 'DevOps', 'Infrastructure'],
      social: {
        twitter: '@emmawilson',
        linkedin: 'emma-wilson-cloud',
        github: 'emmawilson'
      },
      sessions: ['Cloud-Native Development']
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'Cybersecurity Expert',
      company: 'SecureNet',
      image: '/speakers/david-kim.jpg',
      bio: 'Leading cybersecurity consultant with expertise in threat detection and prevention strategies.',
      expertise: ['Cybersecurity', 'Threat Detection', 'Security Architecture'],
      social: {
        twitter: '@davidkim_security',
        linkedin: 'david-kim-security',
        github: 'davidkim'
      },
      sessions: ['Cybersecurity Best Practices']
    },
    {
      id: 6,
      name: 'Lisa Park',
      role: 'Senior Data Scientist',
      company: 'DataFlow',
      image: '/speakers/lisa-park.jpg',
      bio: 'Data science expert specializing in predictive analytics and business intelligence solutions.',
      expertise: ['Data Science', 'Predictive Analytics', 'Business Intelligence'],
      social: {
        twitter: '@lisapark_ds',
        linkedin: 'lisa-park-datascience',
        github: 'lisapark'
      },
      sessions: ['Data Science Workshop']
    },
    {
      id: 7,
      name: 'Robert Smith',
      role: 'Digital Transformation Strategist',
      company: 'TransformTech',
      image: '/speakers/robert-smith.jpg',
      bio: 'Strategic advisor helping organizations navigate digital transformation and innovation.',
      expertise: ['Digital Transformation', 'Innovation', 'Strategy'],
      social: {
        twitter: '@robertsmith_dt',
        linkedin: 'robert-smith-transform',
        github: 'robertsmith'
      },
      sessions: ['Digital Transformation Strategies']
    },
    {
      id: 8,
      name: 'Dr. Jennifer Lee',
      role: 'Machine Learning Researcher',
      company: 'ML Labs',
      image: '/speakers/jennifer-lee.jpg',
      bio: 'Research scientist focused on advancing machine learning algorithms and applications.',
      expertise: ['Machine Learning', 'Research', 'Algorithm Development'],
      social: {
        twitter: '@jenniferlee_ml',
        linkedin: 'jennifer-lee-ml',
        github: 'jenniferlee'
      },
      sessions: ['Machine Learning Applications']
    }
  ];

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Meet Our Speakers
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Learn from industry leaders, researchers, and innovators who are shaping the future of technology.
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Speaker Image */}
                <div className="relative mb-6">
                  <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold">
                    {speaker.name.charAt(0)}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🎤</span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                    {speaker.role}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    {speaker.company}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs font-semibold rounded-full"
                        style={{
                          backgroundColor: `${config.colors.primary}20`,
                          color: config.colors.primary
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {speaker.bio}
                  </p>

                  {/* Sessions */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                      SESSIONS:
                    </p>
                    <div className="space-y-1">
                      {speaker.sessions.map((session, sessionIndex) => (
                        <p key={sessionIndex} className="text-xs text-slate-600 dark:text-slate-300">
                          • {session}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {speaker.social.twitter && (
                      <a
                        href={`https://twitter.com/${speaker.social.twitter.replace('@', '')}`}
                        className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-sm">𝕏</span>
                      </a>
                    )}
                    {speaker.social.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${speaker.social.linkedin}`}
                        className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-sm">in</span>
                      </a>
                    )}
                    {speaker.social.github && (
                      <a
                        href={`https://github.com/${speaker.social.github}`}
                        className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-sm">⌥</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Connect with Speakers
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Follow our speakers on social media and stay updated with their latest insights and research.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Follow on Twitter
              </button>
              <button
                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Connect on LinkedIn
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Speakers; 