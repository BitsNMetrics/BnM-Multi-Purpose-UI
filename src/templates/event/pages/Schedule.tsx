import React from 'react';
import { motion } from 'framer-motion';

interface ScheduleProps {
  config: any;
}

const Schedule: React.FC<ScheduleProps> = ({ config }) => {
  const scheduleData = [
    {
      day: 'Day 1',
      date: 'March 15, 2024',
      sessions: [
        {
          time: '09:00 - 09:30',
          title: 'Opening Ceremony',
          speaker: 'Sarah Johnson',
          role: 'Conference Director',
          type: 'keynote',
          room: 'Main Hall'
        },
        {
          time: '09:30 - 10:30',
          title: 'The Future of AI in Business',
          speaker: 'Dr. Michael Chen',
          role: 'AI Research Lead',
          type: 'keynote',
          room: 'Main Hall'
        },
        {
          time: '10:45 - 11:45',
          title: 'Building Scalable Systems',
          speaker: 'Alex Rodriguez',
          role: 'Senior Architect',
          type: 'workshop',
          room: 'Room A'
        },
        {
          time: '11:45 - 12:45',
          title: 'Cloud-Native Development',
          speaker: 'Emma Wilson',
          role: 'Cloud Specialist',
          type: 'workshop',
          room: 'Room B'
        },
        {
          time: '12:45 - 14:00',
          title: 'Networking Lunch',
          speaker: '',
          role: '',
          type: 'break',
          room: 'Dining Hall'
        },
        {
          time: '14:00 - 15:00',
          title: 'Cybersecurity Best Practices',
          speaker: 'David Kim',
          role: 'Security Expert',
          type: 'panel',
          room: 'Main Hall'
        },
        {
          time: '15:15 - 16:15',
          title: 'Data Science Workshop',
          speaker: 'Lisa Park',
          role: 'Data Scientist',
          type: 'workshop',
          room: 'Room C'
        }
      ]
    },
    {
      day: 'Day 2',
      date: 'March 16, 2024',
      sessions: [
        {
          time: '09:00 - 10:00',
          title: 'Digital Transformation Strategies',
          speaker: 'Robert Smith',
          role: 'Digital Strategist',
          type: 'keynote',
          room: 'Main Hall'
        },
        {
          time: '10:15 - 11:15',
          title: 'Machine Learning Applications',
          speaker: 'Dr. Jennifer Lee',
          role: 'ML Researcher',
          type: 'workshop',
          room: 'Room A'
        },
        {
          time: '11:30 - 12:30',
          title: 'Startup Success Stories',
          speaker: 'Mark Thompson',
          role: 'Entrepreneur',
          type: 'panel',
          room: 'Main Hall'
        },
        {
          time: '12:30 - 13:45',
          title: 'Lunch & Networking',
          speaker: '',
          role: '',
          type: 'break',
          room: 'Dining Hall'
        },
        {
          time: '13:45 - 14:45',
          title: 'Blockchain Technology',
          speaker: 'Nina Patel',
          role: 'Blockchain Developer',
          type: 'workshop',
          room: 'Room B'
        },
        {
          time: '15:00 - 16:00',
          title: 'Closing Keynote',
          speaker: 'Dr. James Wilson',
          role: 'Tech Visionary',
          type: 'keynote',
          room: 'Main Hall'
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'workshop':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'panel':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'break':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

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
            Event Schedule
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Join us for two days of inspiring talks, hands-on workshops, and networking opportunities with industry leaders.
          </p>
        </motion.div>

        {/* Schedule Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {scheduleData.map((day, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: index === 0 ? config.colors.primary : 'transparent',
                  color: index === 0 ? 'white' : config.colors.primary,
                  border: `2px solid ${config.colors.primary}`
                }}
              >
                {day.day}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Schedule Content */}
        <div className="space-y-8">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {day.day}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {day.date}
                </p>
              </div>

              <div className="space-y-6">
                {day.sessions.map((session, sessionIndex) => (
                  <motion.div
                    key={sessionIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: sessionIndex * 0.1 }}
                    className="flex flex-col lg:flex-row gap-6 p-6 rounded-xl bg-gradient-to-r from-white/50 to-white/30 dark:from-slate-700/50 dark:to-slate-700/30 border border-white/20 dark:border-slate-600/20"
                  >
                    {/* Time */}
                    <div className="lg:w-1/4">
                      <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">
                        Time
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        {session.time}
                      </div>
                    </div>

                    {/* Session Info */}
                    <div className="lg:w-3/4">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(session.type)}`}>
                              {session.type.toUpperCase()}
                            </span>
                            {session.room && (
                              <span className="text-sm text-slate-500 dark:text-slate-400">
                                📍 {session.room}
                              </span>
                            )}
                          </div>
                          
                          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                            {session.title}
                          </h4>
                          
                          {session.speaker && (
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                                {session.speaker.charAt(0)}
                              </div>
                              <div>
                                <div className="font-semibold text-slate-900 dark:text-white">
                                  {session.speaker}
                                </div>
                                <div className="text-sm text-slate-600 dark:text-slate-300">
                                  {session.role}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Action Button */}
                        {session.type !== 'break' && (
                          <button
                            className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            style={{ backgroundColor: config.colors.primary }}
                          >
                            Add to Calendar
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Don't Miss Out!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Secure your spot at the most anticipated tech conference of the year.
            </p>
            <button
              className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Get Your Tickets Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule; 