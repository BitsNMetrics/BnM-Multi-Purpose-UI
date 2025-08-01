export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  category: string;
}

export const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    avatar: '/avatars/sarah.jpg',
    content: 'This platform has completely transformed how we approach our projects. The efficiency gains are incredible!',
    rating: 5,
    category: 'general',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateCorp',
    avatar: '/avatars/michael.jpg',
    content: 'The best investment we\'ve made this year. Our team productivity has increased by 300%.',
    rating: 5,
    category: 'general',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthLab',
    avatar: '/avatars/emily.jpg',
    content: 'Outstanding support and incredible features. This has become an essential part of our daily workflow.',
    rating: 5,
    category: 'general',
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'CTO',
    company: 'DataFlow Systems',
    avatar: '/avatars/david.jpg',
    content: 'The integration capabilities are phenomenal. We\'ve automated processes that used to take hours.',
    rating: 5,
    category: 'general',
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Operations Manager',
    company: 'ScaleUp Solutions',
    avatar: '/avatars/lisa.jpg',
    content: 'Reliable, fast, and user-friendly. Exactly what we needed to scale our operations.',
    rating: 5,
    category: 'general',
  },
];

export const aiSaasTestimonials: Testimonial[] = [
  {
    id: 'ai-1',
    name: 'Dr. Alex Zhang',
    role: 'AI Research Lead',
    company: 'NeuralTech',
    avatar: '/avatars/alex.jpg',
    content: 'The AI capabilities are cutting-edge. We\'ve reduced our development time by 60% using this platform.',
    rating: 5,
    category: 'ai-saas',
  },
  {
    id: 'ai-2',
    name: 'Rachel Green',
    role: 'Data Scientist',
    company: 'Predictive Analytics Co.',
    avatar: '/avatars/rachel.jpg',
    content: 'Incredible accuracy and speed. The machine learning models are state-of-the-art.',
    rating: 5,
    category: 'ai-saas',
  },
  {
    id: 'ai-3',
    name: 'Tom Wilson',
    role: 'VP Engineering',
    company: 'SmartSolutions',
    avatar: '/avatars/tom.jpg',
    content: 'The API is incredibly well-designed. Integration was seamless and the documentation is excellent.',
    rating: 5,
    category: 'ai-saas',
  },
];

export const ecommerceTestimonials: Testimonial[] = [
  {
    id: 'ecom-1',
    name: 'Jennifer Martinez',
    role: 'E-commerce Manager',
    company: 'Fashion Forward',
    avatar: '/avatars/jennifer.jpg',
    content: 'Our conversion rates increased by 45% after implementing this solution. The checkout process is flawless.',
    rating: 5,
    category: 'ecommerce',
  },
  {
    id: 'ecom-2',
    name: 'Robert Davis',
    role: 'Founder',
    company: 'Artisan Goods',
    avatar: '/avatars/robert.jpg',
    content: 'Perfect for small businesses. The setup was easy and the features are exactly what we needed.',
    rating: 5,
    category: 'ecommerce',
  },
  {
    id: 'ecom-3',
    name: 'Amanda Foster',
    role: 'Digital Marketing Manager',
    company: 'Lifestyle Brands',
    avatar: '/avatars/amanda.jpg',
    content: 'The analytics and marketing tools are game-changing. We\'ve seen incredible ROI.',
    rating: 5,
    category: 'ecommerce',
  },
];

export const portfolioTestimonials: Testimonial[] = [
  {
    id: 'port-1',
    name: 'Chris Anderson',
    role: 'Creative Director',
    company: 'Design Studio X',
    avatar: '/avatars/chris.jpg',
    content: 'The portfolio templates are stunning. Our clients love the modern, professional look.',
    rating: 5,
    category: 'portfolio',
  },
  {
    id: 'port-2',
    name: 'Maria Garcia',
    role: 'Freelance Designer',
    company: 'Self-employed',
    avatar: '/avatars/maria.jpg',
    content: 'This helped me land my biggest client yet. The presentation is absolutely professional.',
    rating: 5,
    category: 'portfolio',
  },
  {
    id: 'port-3',
    name: 'James Lee',
    role: 'UX Designer',
    company: 'Digital Agency',
    avatar: '/avatars/james.jpg',
    content: 'Clean, modern, and highly customizable. Exactly what I needed for my portfolio.',
    rating: 5,
    category: 'portfolio',
  },
];

export const getTestimonialsByCategory = (category: string): Testimonial[] => {
  switch (category) {
    case 'ai-saas':
      return aiSaasTestimonials;
    case 'ecommerce':
      return ecommerceTestimonials;
    case 'portfolio':
      return portfolioTestimonials;
    default:
      return defaultTestimonials;
  }
}; 