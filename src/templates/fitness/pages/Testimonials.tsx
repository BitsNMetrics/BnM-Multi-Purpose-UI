import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Heart, Target } from 'lucide-react';

interface TestimonialsProps {
  config: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ config }) => {

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Lost 45 lbs in 8 months",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "FitLife Studio completely transformed my life! The personalized workout plans and nutrition guidance helped me lose 45 pounds and gain confidence. The trainers are amazing and the community is so supportive.",
      stats: {
        weightLost: "45 lbs",
        timeFrame: "8 months",
        workoutsCompleted: "120+"
      }
    },
    {
      name: "Marcus Johnson",
      role: "Gained 20 lbs muscle",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As someone who was always skinny, I never thought I could build muscle. The strength training program at FitLife Studio changed everything. I've gained 20 pounds of muscle and feel stronger than ever!",
      stats: {
        muscleGained: "20 lbs",
        timeFrame: "6 months",
        strengthIncrease: "300%"
      }
    },
    {
      name: "Sarah Chen",
      role: "Completed first marathon",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The endurance training program helped me complete my first marathon! The coaches are incredibly knowledgeable and the community kept me motivated throughout the entire journey.",
      stats: {
        marathonTime: "4:15:30",
        trainingWeeks: "16 weeks",
        milesRun: "500+"
      }
    },
    {
      name: "David Wilson",
      role: "Improved flexibility & mobility",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "After years of desk work, I had terrible posture and flexibility. The yoga and mobility classes at FitLife Studio have completely changed my quality of life. I can now touch my toes and have no more back pain!",
      stats: {
        flexibilityGained: "200%",
        painReduction: "90%",
        classesAttended: "80+"
      }
    },
    {
      name: "Amanda Rodriguez",
      role: "Achieved 6-pack abs",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I always dreamed of having visible abs but never knew how to achieve it. The core training program and nutrition coaching at FitLife Studio made it possible. I'm in the best shape of my life!",
      stats: {
        bodyFatReduction: "12%",
        timeFrame: "10 months",
        coreWorkouts: "150+"
      }
    },
    {
      name: "Robert Kim",
      role: "Overcame injury & returned stronger",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "After a serious knee injury, I thought my fitness days were over. The rehabilitation program at FitLife Studio not only helped me recover but made me stronger than before. The trainers are true professionals.",
      stats: {
        recoveryTime: "8 months",
        strengthRegained: "120%",
        confidenceRestored: "100%"
      }
    }
  ];

  const overallStats = [
    { number: "10,000+", label: "Happy Members", icon: Heart },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
    { number: "500+", label: "Transformations", icon: Target },
    { number: "4.9/5", label: "Average Rating", icon: Star }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Real Results from Real People
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how our members have transformed their lives and achieved their fitness goals with {config.brandName}.
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {overallStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-red-500" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Stats */}
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  {Object.entries(testimonial.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="font-bold text-red-600 dark:text-red-400">{value}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Watch More Success Stories
          </h3>
          <p className="text-xl mb-8 text-red-100">
            See our members' transformations in action with video testimonials and before/after photos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
              Watch Videos
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
              Share Your Story
            </button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Trusted by fitness professionals and recommended by:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold text-gray-400">NASM</div>
            <div className="text-lg font-semibold text-gray-400">ACE</div>
            <div className="text-lg font-semibold text-gray-400">CrossFit</div>
            <div className="text-lg font-semibold text-gray-400">Yoga Alliance</div>
            <div className="text-lg font-semibold text-gray-400">Precision Nutrition</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 