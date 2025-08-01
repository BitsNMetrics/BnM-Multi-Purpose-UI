export interface TemplateConfig {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  thumbnail: string;
  preview: string;
  features: string[];
  pages: string[];
  config: {
    brandName: string;
    tagline?: string;
    logo: string;
    colors: {
      primary: string;
      secondary: string;
      accent: string;
    };
    font: string;
    fontSize?: string;
    containerWidth?: string;
    sectionSpacing?: string;
    navigationStyle?: string;
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
    features?: {
      darkMode?: boolean;
      animations?: boolean;
      analytics?: boolean;
    };
  };
}

export const templateCategories = {
  'ai-saas': 'AI & SaaS',
  'portfolio': 'Portfolio',
  'ecommerce': 'E-commerce',
  'startup': 'Startup',
  'agency': 'Agency',
  'event': 'Event',
  'fitness': 'Health & Fitness',
  'education': 'Education',
  'crypto': 'Crypto & Finance',
  'mobile-app': 'Mobile App',
} as const;

export const defaultTemplates: TemplateConfig[] = [
  {
    id: 'ai-saas',
    name: 'AI Tools SaaS',
    description: 'Modern landing page for AI-powered SaaS tools, chatbots, and analytics platforms.',
    category: 'ai-saas',
    tags: ['AI', 'SaaS', 'Technology', 'Analytics'],
    thumbnail: '/thumbnails/ai-saas.jpg',
    preview: '/previews/ai-saas.jpg',
    features: ['Hero Section', 'Features Grid', 'Pricing Tables', 'Testimonials', 'FAQ', 'Contact Form'],
    pages: ['hero', 'features', 'pricing', 'testimonials', 'faq', 'contact'],
    config: {
      brandName: 'Nova AI',
      tagline: 'Transform your business with AI',
      logo: '/logos/nova-ai.svg',
      colors: {
        primary: '#8b5cf6',
        secondary: '#a855f7',
        accent: '#c084fc',
      },
      font: 'Inter',
      fontSize: 'medium',
      containerWidth: 'max-w-7xl',
      sectionSpacing: 'py-20',
      navigationStyle: 'default',
      seo: {
        title: 'Nova AI - Next-Generation AI Solutions',
        description: 'Transform your business with cutting-edge AI tools and analytics.',
        keywords: ['AI', 'SaaS', 'analytics', 'machine learning', 'automation'],
      },
      features: {
        darkMode: true,
        animations: true,
        analytics: true,
      },
    },
  },
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    description: 'Professional portfolio template for developers, designers, and creatives.',
    category: 'portfolio',
    tags: ['Portfolio', 'Creative', 'Professional', 'Personal'],
    thumbnail: '/thumbnails/portfolio.jpg',
    preview: '/previews/portfolio.jpg',
    features: ['Hero Section', 'About', 'Projects', 'Skills', 'Experience', 'Contact'],
    pages: ['hero', 'about', 'projects', 'skills', 'experience', 'contact'],
    config: {
      brandName: 'John Doe',
      tagline: 'Full Stack Developer & Designer',
      logo: '/logos/portfolio.svg',
      colors: {
        primary: '#7c3aed',
        secondary: '#ec4899',
        accent: '#f97316',
      },
      font: 'Poppins',
      fontSize: 'medium',
      containerWidth: 'max-w-7xl',
      sectionSpacing: 'py-20',
      navigationStyle: 'default',
      seo: {
        title: 'John Doe - Full Stack Developer',
        description: 'Passionate developer creating innovative digital experiences.',
        keywords: ['developer', 'portfolio', 'web development', 'design'],
      },
      features: {
        darkMode: true,
        animations: true,
        analytics: true,
      },
    },
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Product',
    description: 'High-converting landing page for single products and DTC brands.',
    category: 'ecommerce',
    tags: ['E-commerce', 'Product', 'DTC', 'Sales'],
    thumbnail: '/thumbnails/ecommerce.jpg',
    preview: '/previews/ecommerce.jpg',
    features: ['Hero Section', 'Product Features', 'Benefits', 'Pricing', 'Reviews', 'Checkout'],
    pages: ['hero', 'features', 'benefits', 'pricing', 'reviews', 'checkout'],
    config: {
      brandName: 'EcoTech',
      logo: '/logos/ecotech.svg',
      colors: {
        primary: '#059669',
        secondary: '#10b981',
        accent: '#f59e0b',
      },
      font: 'Inter',
      seo: {
        title: 'EcoTech - Sustainable Technology Solutions',
        description: 'Revolutionary eco-friendly products for a better tomorrow.',
        keywords: ['eco-friendly', 'technology', 'sustainable', 'green'],
      },
    },
  },
  {
    id: 'startup',
    name: 'Startup Launch',
    description: 'Exciting launch page for startups with beta signup and waitlist features.',
    category: 'startup',
    tags: ['Startup', 'Launch', 'Beta', 'Innovation'],
    thumbnail: '/thumbnails/startup.jpg',
    preview: '/previews/startup.jpg',
    features: ['Hero Section', 'Problem/Solution', 'Features', 'Team', 'Beta Signup', 'Social Proof'],
    pages: ['hero', 'problem', 'features', 'team', 'signup', 'social'],
    config: {
      brandName: 'LaunchPad',
      logo: '/logos/launchpad.svg',
      colors: {
        primary: '#ef4444',
        secondary: '#f97316',
        accent: '#8b5cf6',
      },
      font: 'Inter',
      seo: {
        title: 'LaunchPad - The Future of Innovation',
        description: 'Join the revolution. Be the first to experience the future.',
        keywords: ['startup', 'innovation', 'beta', 'launch', 'technology'],
      },
    },
  },
  {
    id: 'agency',
    name: 'Agency & Consulting',
    description: 'Professional agency landing page for marketing, legal, and consulting services.',
    category: 'agency',
    tags: ['Agency', 'Consulting', 'Services', 'Professional'],
    thumbnail: '/thumbnails/agency.jpg',
    preview: '/previews/agency.jpg',
    features: ['Hero Section', 'Services', 'Case Studies', 'Team', 'Pricing', 'Contact'],
    pages: ['hero', 'services', 'cases', 'team', 'pricing', 'contact'],
    config: {
      brandName: 'Strategic Partners',
      logo: '/logos/strategic.svg',
      colors: {
        primary: '#1e40af',
        secondary: '#3b82f6',
        accent: '#f59e0b',
      },
      font: 'Inter',
      seo: {
        title: 'Strategic Partners - Business Growth Experts',
        description: 'Transform your business with our strategic consulting services.',
        keywords: ['consulting', 'agency', 'business', 'strategy', 'growth'],
      },
    },
  },
  {
    id: 'event',
    name: 'Event & Conference',
    description: 'Dynamic event landing page with registration and schedule features.',
    category: 'event',
    tags: ['Event', 'Conference', 'Registration', 'Schedule'],
    thumbnail: '/thumbnails/event.jpg',
    preview: '/previews/event.jpg',
    features: ['Hero Section', 'Schedule', 'Speakers', 'Venue', 'Registration', 'FAQ'],
    pages: ['hero', 'schedule', 'speakers', 'venue', 'register', 'faq'],
    config: {
      brandName: 'TechConf 2024',
      logo: '/logos/techconf.svg',
      colors: {
        primary: '#8b5cf6',
        secondary: '#ec4899',
        accent: '#f59e0b',
      },
      font: 'Poppins',
      seo: {
        title: 'TechConf 2024 - The Future of Technology',
        description: 'Join industry leaders at the premier technology conference.',
        keywords: ['conference', 'technology', 'event', 'networking', 'innovation'],
      },
    },
  },
  {
    id: 'fitness',
    name: 'Health & Fitness',
    description: 'Motivational fitness landing page for coaches and wellness programs.',
    category: 'fitness',
    tags: ['Fitness', 'Health', 'Wellness', 'Coaching'],
    thumbnail: '/thumbnails/fitness.jpg',
    preview: '/previews/fitness.jpg',
    features: ['Hero Section', 'Programs', 'Testimonials', 'Coach Bio', 'Pricing', 'Contact'],
    pages: ['hero', 'programs', 'testimonials', 'coach', 'pricing', 'contact'],
    config: {
      brandName: 'FitLife',
      logo: '/logos/fitlife.svg',
      colors: {
        primary: '#dc2626',
        secondary: '#ef4444',
        accent: '#f59e0b',
      },
      font: 'Poppins',
      seo: {
        title: 'FitLife - Transform Your Health Journey',
        description: 'Achieve your fitness goals with personalized coaching and programs.',
        keywords: ['fitness', 'health', 'coaching', 'wellness', 'training'],
      },
    },
  },
  {
    id: 'education',
    name: 'Education & Courses',
    description: 'Educational landing page for online courses and learning platforms.',
    category: 'education',
    tags: ['Education', 'Courses', 'Learning', 'EdTech'],
    thumbnail: '/thumbnails/education.jpg',
    preview: '/previews/education.jpg',
    features: ['Hero Section', 'Curriculum', 'Instructor', 'Pricing', 'Testimonials', 'Enrollment'],
    pages: ['hero', 'curriculum', 'instructor', 'pricing', 'testimonials', 'enroll'],
    config: {
      brandName: 'LearnHub',
      logo: '/logos/learnhub.svg',
      colors: {
        primary: '#059669',
        secondary: '#10b981',
        accent: '#f59e0b',
      },
      font: 'Inter',
      seo: {
        title: 'LearnHub - Master New Skills Online',
        description: 'Learn from industry experts with our comprehensive online courses.',
        keywords: ['education', 'online courses', 'learning', 'skills', 'training'],
      },
    },
  },
  {
    id: 'crypto',
    name: 'Crypto & Finance',
    description: 'Modern crypto and financial tools landing page with real-time data.',
    category: 'crypto',
    tags: ['Crypto', 'Finance', 'Trading', 'Blockchain'],
    thumbnail: '/thumbnails/crypto.jpg',
    preview: '/previews/crypto.jpg',
    features: ['Hero Section', 'Features', 'Pricing', 'Security', 'FAQ', 'Get Started'],
    pages: ['hero', 'features', 'pricing', 'security', 'faq', 'start'],
    config: {
      brandName: 'CryptoFlow',
      logo: '/logos/cryptoflow.svg',
      colors: {
        primary: '#f59e0b',
        secondary: '#f97316',
        accent: '#ef4444',
      },
      font: 'Inter',
      seo: {
        title: 'CryptoFlow - Advanced Trading Platform',
        description: 'Trade cryptocurrencies with confidence using our advanced platform.',
        keywords: ['crypto', 'trading', 'blockchain', 'finance', 'bitcoin'],
      },
    },
  },
  {
    id: 'mobile-app',
    name: 'Mobile App',
    description: 'App store optimized landing page for mobile applications.',
    category: 'mobile-app',
    tags: ['Mobile', 'App', 'iOS', 'Android'],
    thumbnail: '/thumbnails/mobile-app.jpg',
    preview: '/previews/mobile-app.jpg',
    features: ['Hero Section', 'Features', 'Screenshots', 'Download', 'Reviews', 'Contact'],
    pages: ['hero', 'features', 'screenshots', 'download', 'reviews', 'contact'],
    config: {
      brandName: 'AppFlow',
      logo: '/logos/appflow.svg',
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#ec4899',
      },
      font: 'Inter',
      seo: {
        title: 'AppFlow - Streamline Your Workflow',
        description: 'The ultimate productivity app for modern professionals.',
        keywords: ['mobile app', 'productivity', 'workflow', 'iOS', 'android'],
      },
    },
  },
]; 