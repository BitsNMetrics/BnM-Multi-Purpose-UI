export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export const defaultFeatures: Feature[] = [
  {
    id: '1',
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing tools and workflows.',
    icon: '🔗',
    category: 'general',
  },
  {
    id: '2',
    title: 'Real-time Analytics',
    description: 'Get instant insights into your performance and user behavior.',
    icon: '📊',
    category: 'general',
  },
  {
    id: '3',
    title: 'Advanced Security',
    description: 'Enterprise-grade security to protect your data and users.',
    icon: '🔒',
    category: 'general',
  },
  {
    id: '4',
    title: '24/7 Support',
    description: 'Round-the-clock support to help you succeed.',
    icon: '🛟',
    category: 'general',
  },
  {
    id: '5',
    title: 'Mobile Responsive',
    description: 'Perfect experience across all devices and screen sizes.',
    icon: '📱',
    category: 'general',
  },
  {
    id: '6',
    title: 'Custom Branding',
    description: 'Fully customizable to match your brand identity.',
    icon: '🎨',
    category: 'general',
  },
];

export const aiSaasFeatures: Feature[] = [
  {
    id: 'ai-1',
    title: 'Advanced AI Models',
    description: 'State-of-the-art machine learning models for accurate predictions.',
    icon: '🤖',
    category: 'ai-saas',
  },
  {
    id: 'ai-2',
    title: 'Natural Language Processing',
    description: 'Understand and process human language with high accuracy.',
    icon: '💬',
    category: 'ai-saas',
  },
  {
    id: 'ai-3',
    title: 'Computer Vision',
    description: 'Analyze and understand images and videos automatically.',
    icon: '👁️',
    category: 'ai-saas',
  },
  {
    id: 'ai-4',
    title: 'Predictive Analytics',
    description: 'Forecast trends and patterns with machine learning.',
    icon: '🔮',
    category: 'ai-saas',
  },
  {
    id: 'ai-5',
    title: 'API Access',
    description: 'Easy-to-use REST API for seamless integration.',
    icon: '🔌',
    category: 'ai-saas',
  },
  {
    id: 'ai-6',
    title: 'Custom Training',
    description: 'Train models on your own data for specialized tasks.',
    icon: '🎯',
    category: 'ai-saas',
  },
];

export const ecommerceFeatures: Feature[] = [
  {
    id: 'ecom-1',
    title: 'Secure Checkout',
    description: 'PCI-compliant payment processing with multiple payment options.',
    icon: '💳',
    category: 'ecommerce',
  },
  {
    id: 'ecom-2',
    title: 'Inventory Management',
    description: 'Track stock levels and automate reordering processes.',
    icon: '📦',
    category: 'ecommerce',
  },
  {
    id: 'ecom-3',
    title: 'Order Fulfillment',
    description: 'Streamlined order processing and shipping management.',
    icon: '🚚',
    category: 'ecommerce',
  },
  {
    id: 'ecom-4',
    title: 'Customer Analytics',
    description: 'Deep insights into customer behavior and preferences.',
    icon: '📈',
    category: 'ecommerce',
  },
  {
    id: 'ecom-5',
    title: 'Multi-channel Selling',
    description: 'Sell across multiple platforms from one dashboard.',
    icon: '🛍️',
    category: 'ecommerce',
  },
  {
    id: 'ecom-6',
    title: 'Marketing Tools',
    description: 'Built-in marketing features to boost sales.',
    icon: '📢',
    category: 'ecommerce',
  },
];

export const portfolioFeatures: Feature[] = [
  {
    id: 'port-1',
    title: 'Project Showcase',
    description: 'Beautiful galleries to display your best work.',
    icon: '🖼️',
    category: 'portfolio',
  },
  {
    id: 'port-2',
    title: 'Skills Display',
    description: 'Highlight your expertise and technical skills.',
    icon: '⚡',
    category: 'portfolio',
  },
  {
    id: 'port-3',
    title: 'Contact Forms',
    description: 'Easy ways for clients to get in touch with you.',
    icon: '📧',
    category: 'portfolio',
  },
  {
    id: 'port-4',
    title: 'Blog Integration',
    description: 'Share your thoughts and establish thought leadership.',
    icon: '✍️',
    category: 'portfolio',
  },
  {
    id: 'port-5',
    title: 'Testimonials',
    description: 'Showcase client feedback and recommendations.',
    icon: '💬',
    category: 'portfolio',
  },
  {
    id: 'port-6',
    title: 'SEO Optimized',
    description: 'Built-in SEO features to improve your visibility.',
    icon: '🔍',
    category: 'portfolio',
  },
];

export const getFeaturesByCategory = (category: string): Feature[] => {
  switch (category) {
    case 'ai-saas':
      return aiSaasFeatures;
    case 'ecommerce':
      return ecommerceFeatures;
    case 'portfolio':
      return portfolioFeatures;
    default:
      return defaultFeatures;
  }
}; 