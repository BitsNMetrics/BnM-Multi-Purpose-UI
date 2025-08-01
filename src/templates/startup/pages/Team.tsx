import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

interface TeamProps {
  config: any;
}

const Team: React.FC<TeamProps> = ({ config }) => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at Google. Led teams of 200+ engineers and shipped products used by millions.',
      avatar: '/team/sarah.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'sarah@company.com'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Senior Architect at Amazon. Built scalable systems handling billions of requests daily.',
      avatar: '/team/michael.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'michael@company.com'
      }
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Product',
      bio: 'Product leader with 10+ years experience. Previously led product at Stripe and Airbnb.',
      avatar: '/team/emily.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'emily@company.com'
      }
    },
    {
      name: 'David Kim',
      role: 'Head of Design',
      bio: 'Award-winning designer with expertise in user experience and product design.',
      avatar: '/team/david.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'david@company.com'
      }
    }
  ];

  const stats = [
    { number: '50+', label: 'Years Combined Experience' },
    { number: '4', label: 'Ex-Google/Amazon/Facebook' },
    { number: '100M+', label: 'Users Impacted' },
    { number: '$2B+', label: 'Revenue Generated' }
  ];

  return (
    <section className="w-full py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Meet Our <span style={{ color: config.colors.primary }}>Team</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Founded by industry veterans with decades of experience building and scaling successful companies. 
            We're passionate about solving real problems with innovative technology.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: config.colors.primary }}
              >
                {stat.number}
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {member.name.charAt(0)}
                </span>
              </div>
              
              {/* Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p 
                  className="text-sm font-medium mb-3"
                  style={{ color: config.colors.primary }}
                >
                  {member.role}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-blue-400 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-600 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Join Our Team
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              We're always looking for talented individuals who are passionate about innovation and making a difference.
            </p>
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: config.colors.primary }}
            >
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 