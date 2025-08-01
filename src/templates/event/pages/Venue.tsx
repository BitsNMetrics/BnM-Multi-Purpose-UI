import React from 'react';
import { motion } from 'framer-motion';

interface VenueProps {
  config: any;
}

const Venue: React.FC<VenueProps> = ({ config }) => {
  const venueInfo = {
    name: 'Tech Conference Center',
    address: '123 Innovation Drive, Tech City, TC 12345',
    description: 'A state-of-the-art conference center designed for technology events, featuring modern facilities and cutting-edge technology.',
    capacity: '500+ attendees',
    rooms: [
      {
        name: 'Main Hall',
        capacity: '300 people',
        features: ['Stage & Podium', 'HD Projection', 'Sound System', 'Recording Equipment'],
        description: 'Our largest venue space perfect for keynotes and main sessions.'
      },
      {
        name: 'Room A',
        capacity: '50 people',
        features: ['Interactive Displays', 'Whiteboards', 'Workshop Setup'],
        description: 'Ideal for hands-on workshops and interactive sessions.'
      },
      {
        name: 'Room B',
        capacity: '50 people',
        features: ['Video Conferencing', 'Screen Sharing', 'Collaboration Tools'],
        description: 'Perfect for technical sessions and demonstrations.'
      },
      {
        name: 'Room C',
        capacity: '30 people',
        features: ['Quiet Environment', 'Focus Areas', 'Small Group Setup'],
        description: 'Intimate setting for focused discussions and small workshops.'
      }
    ],
    facilities: [
      {
        name: 'High-Speed WiFi',
        description: 'Complimentary high-speed internet throughout the venue',
        icon: '📶'
      },
      {
        name: 'Catering Services',
        description: 'Coffee breaks, lunch, and refreshments included',
        icon: '☕'
      },
      {
        name: 'Parking',
        description: 'Free parking available for all attendees',
        icon: '🚗'
      },
      {
        name: 'Accessibility',
        description: 'Fully accessible venue with ramps and elevators',
        icon: '♿'
      },
      {
        name: 'Security',
        description: '24/7 security and badge-checking system',
        icon: '🔒'
      },
      {
        name: 'Networking Areas',
        description: 'Dedicated spaces for networking and collaboration',
        icon: '🤝'
      }
    ],
    nearby: [
      {
        name: 'Tech Hotel',
        distance: '0.2 miles',
        description: 'Partner hotel with special conference rates',
        type: 'Accommodation'
      },
      {
        name: 'Innovation Airport',
        distance: '15 miles',
        description: 'Major airport with direct flights from major cities',
        type: 'Transportation'
      },
      {
        name: 'Tech District Metro',
        distance: '0.1 miles',
        description: 'Metro station with frequent service',
        type: 'Transportation'
      },
      {
        name: 'Tech Plaza Restaurants',
        distance: '0.3 miles',
        description: 'Various dining options within walking distance',
        type: 'Dining'
      }
    ]
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
            Venue & Location
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Experience our world-class conference center designed to inspire innovation and collaboration.
          </p>
        </motion.div>

        {/* Venue Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                {venueInfo.name}
              </h3>
              <p className="text-lg mb-6 opacity-90">
                {venueInfo.description}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-lg">{venueInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👥</span>
                  <span className="text-lg">Capacity: {venueInfo.capacity}</span>
                </div>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl p-6 backdrop-blur-xl">
              <h4 className="text-xl font-bold mb-4">Quick Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span>8:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Event Start:</span>
                  <span>9:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Parking:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>WiFi:</span>
                  <span>Complimentary</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Venue Rooms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Conference Rooms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venueInfo.rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {room.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                      Capacity: {room.capacity}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {room.name.charAt(0)}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {room.description}
                </p>
                <div className="space-y-2">
                  {room.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Venue Facilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venueInfo.facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl mb-4">{facility.icon}</div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {facility.name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nearby Attractions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Nearby Attractions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {venueInfo.nearby.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {place.name}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {place.type}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    {place.distance}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {place.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Plan Your Visit
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get directions, book accommodation, and prepare for an amazing conference experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Get Directions
              </button>
              <button
                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Book Hotel
              </button>
              <button
                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Download Map
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Venue; 