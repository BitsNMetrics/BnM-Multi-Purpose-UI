import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Award,
  Users,
  Target,
  TrendingUp
} from 'lucide-react';

interface TeamProps {
  config: any;
}

const Team: React.FC<TeamProps> = ({ config }) => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: '10+ years in digital marketing and business strategy. Former VP at Google.',
      expertise: ['Strategic Planning', 'Business Development', 'Team Leadership'],
      avatar: '/avatars/sarah.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@agency.com'
      }
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Lead Developer',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud architecture.',
      expertise: ['Full-Stack Development', 'Cloud Architecture', 'DevOps'],
      avatar: '/avatars/michael.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@agency.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      bio: 'Award-winning designer with a passion for creating memorable brand experiences.',
      expertise: ['Brand Design', 'UI/UX Design', 'Creative Strategy'],
      avatar: '/avatars/emily.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@agency.com'
      }
    },
    {
      name: 'David Kim',
      role: 'Marketing Director',
      bio: 'Data-driven marketer specializing in growth hacking and conversion optimization.',
      expertise: ['Growth Marketing', 'Analytics', 'Conversion Optimization'],
      avatar: '/avatars/david.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@agency.com'
      }
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Team Members' },
    { icon: Target, value: '500+', label: 'Projects Completed' },
    { icon: Award, value: '25+', label: 'Industry Awards' },
    { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in business strategy, technology, design, and marketing.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-slate-600 dark:text-slate-400">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white dark:border-slate-800" />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {member.role}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                {member.bio}
              </p>

              {/* Expertise */}
              <div className="space-y-2 mb-6">
                {member.expertise.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-xs text-slate-600 dark:text-slate-400">
                    {skill}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Join Our Team
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about creating exceptional results for our clients.
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
    </div>
  );
};

export default Team; 