import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Instagram, Twitter } from 'lucide-react';

interface TrainersProps {
  config: any;
}

const Trainers: React.FC<TrainersProps> = ({ config }) => {

  const trainers = [
    {
      name: "Sarah Johnson",
      role: "Head Personal Trainer",
      specialty: "Strength Training & HIIT",
      experience: "8+ years",
      rating: 4.9,
      clients: 150,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face",
      bio: "Certified personal trainer specializing in strength training and high-intensity interval training. Helped over 500 clients achieve their fitness goals.",
      certifications: ["NASM-CPT", "ACE-CPT", "CrossFit L2"],
      social: {
        instagram: "@sarahfitness",
        twitter: "@sarahjohnson"
      }
    },
    {
      name: "Mike Chen",
      role: "Yoga & Flexibility Expert",
      specialty: "Yoga & Mobility",
      experience: "12+ years",
      rating: 4.8,
      clients: 200,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Experienced yoga instructor with expertise in flexibility training and mindfulness. Former professional athlete turned wellness coach.",
      certifications: ["RYT-500", "Yoga Alliance", "Mobility Specialist"],
      social: {
        instagram: "@mikeyoga",
        twitter: "@mikechen"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "Nutrition & Wellness Coach",
      specialty: "Nutrition & Weight Loss",
      experience: "6+ years",
      rating: 4.9,
      clients: 120,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Registered dietitian and certified nutrition coach. Specializes in sustainable weight loss and performance nutrition for athletes.",
      certifications: ["RD", "CNS", "Precision Nutrition"],
      social: {
        instagram: "@emmanutrition",
        twitter: "@emmarodriguez"
      }
    },
    {
      name: "David Thompson",
      role: "Cardio & Endurance Specialist",
      specialty: "Running & Cycling",
      experience: "10+ years",
      rating: 4.7,
      clients: 180,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Former marathon runner and cycling coach. Expert in endurance training and cardiovascular fitness programs.",
      certifications: ["USATF Coach", "UCI Coach", "First Aid"],
      social: {
        instagram: "@davidendurance",
        twitter: "@davidthompson"
      }
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Meet Our Expert Trainers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our certified professionals are here to guide you on your fitness journey with personalized training and expert advice.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Trainer Image */}
              <div className="relative mb-6">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{trainer.rating}</span>
                </div>
              </div>

              {/* Trainer Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {trainer.name}
                </h3>
                <p className="text-red-600 dark:text-red-400 font-semibold mb-2">
                  {trainer.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {trainer.specialty}
                </p>

                {/* Stats */}
                <div className="flex justify-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600 dark:text-gray-300">{trainer.experience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-red-500" />
                    <span className="text-gray-600 dark:text-gray-300">{trainer.clients}+ clients</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {trainer.bio}
                </p>

                {/* Certifications */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Certifications:</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {trainer.certifications.map((cert, certIndex) => (
                      <span 
                        key={certIndex}
                        className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-1 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a 
                    href={`https://instagram.com/${trainer.social.instagram.replace('@', '')}`}
                    className="text-red-500 hover:text-red-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://twitter.com/${trainer.social.twitter.replace('@', '')}`}
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
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
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Fitness Journey?
          </h3>
          <p className="text-xl mb-8 text-red-100">
            Book a free consultation with one of our expert trainers and get a personalized workout plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
              View All Trainers
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trainers; 