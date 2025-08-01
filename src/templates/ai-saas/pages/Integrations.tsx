import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BarChart3, TrendingUp, MessageSquare, Zap, ArrowRight, Database, Cloud, Shield, Search, ExternalLink } from 'lucide-react';

interface IntegrationsProps {
  config?: {
    brandName?: string;
    colors?: {
      primary?: string;
      secondary?: string;
      accent?: string;
    };
  };
}

const Integrations: React.FC<IntegrationsProps> = ({ config }) => {
  const { brandName = 'Nova AI' } = config || {};

  const categories = [
    {
      name: 'CRM & Sales',
      icon: Briefcase,
      integrations: [
        { name: 'Salesforce', logo: 'SF', color: 'bg-blue-500' },
        { name: 'HubSpot', logo: 'HS', color: 'bg-orange-500' },
        { name: 'Pipedrive', logo: 'PD', color: 'bg-green-500' },
        { name: 'Zoho', logo: 'ZH', color: 'bg-red-500' },
        { name: 'Monday.com', logo: 'MD', color: 'bg-purple-500' },
        { name: 'Asana', logo: 'AS', color: 'bg-pink-500' }
      ]
    },
    {
      name: 'Analytics & Data',
      icon: BarChart3,
      integrations: [
        { name: 'Google Analytics', logo: 'GA', color: 'bg-blue-600' },
        { name: 'Mixpanel', logo: 'MP', color: 'bg-purple-600' },
        { name: 'Amplitude', logo: 'AM', color: 'bg-green-600' },
        { name: 'Segment', logo: 'SG', color: 'bg-red-600' },
        { name: 'Tableau', logo: 'TB', color: 'bg-blue-700' },
        { name: 'Power BI', logo: 'PB', color: 'bg-yellow-600' }
      ]
    },
    {
      name: 'Marketing & Ads',
      icon: TrendingUp,
      integrations: [
        { name: 'Google Ads', logo: 'GAds', color: 'bg-red-500' },
        { name: 'Facebook Ads', logo: 'FB', color: 'bg-blue-500' },
        { name: 'Mailchimp', logo: 'MC', color: 'bg-yellow-500' },
        { name: 'Klaviyo', logo: 'KV', color: 'bg-purple-500' },
        { name: 'Stripe', logo: 'SP', color: 'bg-blue-600' },
        { name: 'Shopify', logo: 'SH', color: 'bg-green-500' }
      ]
    },
    {
      name: 'Communication',
      icon: MessageSquare,
      integrations: [
        { name: 'Slack', logo: 'SL', color: 'bg-purple-500' },
        { name: 'Microsoft Teams', logo: 'MT', color: 'bg-blue-500' },
        { name: 'Discord', logo: 'DC', color: 'bg-indigo-500' },
        { name: 'Zoom', logo: 'ZM', color: 'bg-blue-600' },
        { name: 'Notion', logo: 'NT', color: 'bg-black' },
        { name: 'Airtable', logo: 'AT', color: 'bg-orange-500' }
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'One-Click Setup',
      description: 'Connect your tools with just one click. No complex configuration required.'
    },
    {
      icon: Database,
      title: 'Real-Time Sync',
      description: 'Data syncs automatically in real-time across all your connected platforms.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and SOC 2 compliance ensure your data stays secure.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native',
      description: 'Built for the cloud with 99.9% uptime and global CDN distribution.'
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200/50 dark:border-green-700/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-8"
            >
              <Zap className="w-4 h-4 mr-2" />
              100+ Integrations Available
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Connect Everything
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            >
              Seamlessly integrate with your existing tools and workflows. {brandName} works with the platforms you already use.
            </motion.p>
          </motion.div>

          {/* Integration Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-600/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Integrations Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.integrations.map((integration, integrationIndex) => (
                    <motion.div
                      key={integrationIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.1 + integrationIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:scale-105">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-lg ${integration.color} flex items-center justify-center text-white text-xs font-bold`}>
                            {integration.logo}
                          </div>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {integration.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* View All Button */}
                <button className="mt-6 w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                  View All {category.name} Integrations
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-center text-white"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Connect?
              </h3>
              <p className="text-xl text-purple-100 mb-8">
                Start integrating your tools with Nova AI today. Get up and running in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  <ExternalLink className="w-5 h-5 mr-2 inline" />
                  Browse All Integrations
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20">
                  <Search className="w-5 h-5 mr-2 inline" />
                  Search Integrations
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integrations; 