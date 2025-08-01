export interface PricingPlan {
  id: string;
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export const defaultPricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: {
      monthly: 29,
      annual: 290,
    },
    description: 'Perfect for individuals and small teams',
    features: [
      'Up to 5 projects',
      'Basic analytics',
      'Email support',
      '1GB storage',
      'Basic integrations',
    ],
    cta: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Professional',
    price: {
      monthly: 99,
      annual: 990,
    },
    description: 'Best for growing businesses',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'Advanced integrations',
      'Team collaboration',
      'Custom branding',
    ],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: {
      monthly: 299,
      annual: 2990,
    },
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated support',
      'Custom integrations',
      'Advanced security',
      'SLA guarantee',
      'On-premise option',
    ],
    cta: 'Contact Sales',
  },
];

export const aiSaasPricing: PricingPlan[] = [
  {
    id: 'hobby',
    name: 'Hobby',
    price: {
      monthly: 19,
      annual: 190,
    },
    description: 'Perfect for personal projects',
    features: [
      '100 API calls/month',
      'Basic AI models',
      'Community support',
      'Standard response time',
    ],
    cta: 'Start Free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: {
      monthly: 79,
      annual: 790,
    },
    description: 'For developers and small teams',
    features: [
      '10,000 API calls/month',
      'Advanced AI models',
      'Priority support',
      'Fast response time',
      'Custom training',
      'API access',
    ],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: {
      monthly: 299,
      annual: 2990,
    },
    description: 'For large-scale applications',
    features: [
      'Unlimited API calls',
      'All AI models',
      'Dedicated support',
      'Custom models',
      'On-premise deployment',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
  },
];

export const ecommercePricing: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: {
      monthly: 39,
      annual: 390,
    },
    description: 'Perfect for small stores',
    features: [
      'Up to 100 products',
      'Basic payment processing',
      'Email support',
      'Mobile responsive',
      'Basic analytics',
    ],
    cta: 'Start Selling',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: {
      monthly: 129,
      annual: 1290,
    },
    description: 'For growing businesses',
    features: [
      'Unlimited products',
      'Advanced payment options',
      'Priority support',
      'Advanced analytics',
      'Inventory management',
      'Multi-channel selling',
      'Custom domain',
    ],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: {
      monthly: 399,
      annual: 3990,
    },
    description: 'For large retailers',
    features: [
      'Everything in Premium',
      'Advanced automation',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced reporting',
      'Multi-store management',
    ],
    cta: 'Contact Sales',
  },
]; 