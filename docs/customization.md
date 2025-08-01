# Customization Guide

This guide covers how to customize the Multi-Purpose Landing Kit to match your brand and requirements.

## Table of Contents

- [Theme Customization](#theme-customization)
- [Template Customization](#template-customization)
- [Content Management](#content-management)
- [Adding New Templates](#adding-new-templates)
- [Component Customization](#component-customization)
- [Advanced Customization](#advanced-customization)

## Theme Customization

### Color Schemes

The kit includes several pre-built color schemes. You can modify them in `src/config/theme.ts`:

```typescript
export const themePresets = {
  modern: {
    primary: '#3B82F6',
    secondary: '#06B6D4',
    accent: '#8B5CF6'
  },
  corporate: {
    primary: '#1F2937',
    secondary: '#6B7280',
    accent: '#DC2626'
  },
  // Add your custom theme here
  myBrand: {
    primary: '#YOUR_PRIMARY_COLOR',
    secondary: '#YOUR_SECONDARY_COLOR',
    accent: '#YOUR_ACCENT_COLOR'
  }
}
```

### Typography

Customize fonts in `src/config/theme.ts`:

```typescript
export const fontOptions = {
  'Inter': 'Inter, system-ui, sans-serif',
  'Poppins': 'Poppins, system-ui, sans-serif',
  'Roboto': 'Roboto, system-ui, sans-serif',
  // Add your custom font
  'MyFont': 'MyFont, system-ui, sans-serif'
}
```

### Dark Mode

The kit supports automatic dark mode. Customize dark mode colors:

```typescript
export const darkTheme: ThemeConfig = {
  colors: {
    primary: '#60A5FA',
    secondary: '#34D399',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F8FAFC'
  }
}
```

## Template Customization

### Template Configuration

Each template has a `config.json` file. Example structure:

```json
{
  "id": "ai-saas",
  "name": "AI Tools SaaS",
  "description": "Perfect for AI-powered applications",
  "category": "saas",
  "brandName": "Your AI Tool",
  "logo": "/logos/your-logo.png",
  "colors": {
    "primary": "#4F46E5",
    "secondary": "#06B6D4"
  },
  "font": "Inter",
  "seo": {
    "title": "Your AI Tool - Next Generation AI Solutions",
    "description": "Transform your business with our AI-powered platform",
    "keywords": "AI, machine learning, automation, SaaS"
  }
}
```

### Template Pages

Each template can have multiple pages. Common pages include:

- `Hero.tsx` - Main landing section
- `Features.tsx` - Feature showcase
- `Pricing.tsx` - Pricing plans
- `Testimonials.tsx` - Customer reviews
- `FAQ.tsx` - Frequently asked questions
- `Contact.tsx` - Contact form

### Adding Custom Sections

Create new sections by adding components to the template's `pages/` folder:

```typescript
// src/templates/ai-saas/pages/CustomSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const CustomSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Your Custom Section
          </h2>
          {/* Add your content here */}
        </motion.div>
      </div>
    </section>
  );
};
```

## Content Management

### Pricing Plans

Update pricing in `src/data/pricing.ts`:

```typescript
export const customPricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'Perfect for small teams',
    features: [
      'Up to 5 users',
      'Basic analytics',
      'Email support'
    ],
    popular: false,
    cta: 'Get Started'
  },
  // Add more plans...
];
```

### Testimonials

Add testimonials in `src/data/testimonials.ts`:

```typescript
export const customTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'CEO',
    company: 'Tech Corp',
    content: 'This tool transformed our business!',
    avatar: '/avatars/john.jpg',
    rating: 5
  }
];
```

### Features

Define features in `src/data/features.ts`:

```typescript
export const customFeatures: Feature[] = [
  {
    id: 'feature-1',
    title: 'AI-Powered Analytics',
    description: 'Get insights with our advanced AI algorithms',
    icon: 'ChartBarIcon',
    category: 'analytics'
  }
];
```

## Adding New Templates

### 1. Create Template Structure

```bash
mkdir src/templates/your-template
mkdir src/templates/your-template/pages
mkdir src/templates/your-template/assets
```

### 2. Add Configuration

Create `src/templates/your-template/config.json`:

```json
{
  "id": "your-template",
  "name": "Your Template Name",
  "description": "Description of your template",
  "category": "your-category",
  "tags": ["tag1", "tag2"],
  "thumbnail": "/thumbnails/your-template.jpg",
  "preview": "/previews/your-template.jpg",
  "features": ["Feature 1", "Feature 2"],
  "pages": ["Hero", "Features", "Pricing", "FAQ"],
  "config": {
    "brandName": "Your Brand",
    "logo": "/logos/your-logo.png",
    "colors": {
      "primary": "#3B82F6",
      "secondary": "#06B6D4"
    },
    "font": "Inter",
    "seo": {
      "title": "Your Template Title",
      "description": "Your template description"
    }
  }
}
```

### 3. Create Template Pages

Add your template pages in `src/templates/your-template/pages/`:

```typescript
// Hero.tsx
export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Your hero content */}
    </section>
  );
};

// Features.tsx
export const Features: React.FC = () => {
  return (
    <section className="features-section">
      {/* Your features content */}
    </section>
  );
};
```

### 4. Register Template

Add your template to `src/config/templates.ts`:

```typescript
export const defaultTemplates: TemplateConfig[] = [
  // ... existing templates
  {
    id: 'your-template',
    name: 'Your Template Name',
    description: 'Description of your template',
    category: 'your-category',
    // ... rest of configuration
  }
];
```

## Component Customization

### Button Component

Customize the Button component in `src/core/components/Button.tsx`:

```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white hover:bg-primary-700",
        secondary: "bg-secondary-600 text-white hover:bg-secondary-700",
        // Add your custom variants
        custom: "bg-custom-600 text-white hover:bg-custom-700"
      },
      size: {
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-lg",
        // Add your custom sizes
        xl: "h-14 px-8 text-xl"
      }
    }
  }
);
```

### Card Component

Customize the Card component in `src/core/components/Card.tsx`:

```typescript
const cardVariants = cva(
  "rounded-xl border bg-white shadow-soft dark:bg-neutral-900 dark:border-neutral-800",
  {
    variants: {
      variant: {
        default: "border-neutral-200",
        elevated: "shadow-large border-transparent",
        // Add your custom variants
        glass: "bg-white/80 backdrop-blur-sm border-white/20"
      }
    }
  }
);
```

## Advanced Customization

### Custom Hooks

Create custom hooks in `src/core/hooks/`:

```typescript
// src/core/hooks/useScrollPosition.ts
import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};
```

### Custom Animations

Add custom animations in `src/core/utils/animations.ts`:

```typescript
export const customAnimations = {
  slideInFromLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  fadeInUp: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
```

### Custom Utilities

Add utility functions in `src/core/utils/`:

```typescript
// src/core/utils/format.ts
export const formatCurrency = (amount: number, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};
```

## Best Practices

### 1. Maintain Consistency

- Use the design system consistently across all templates
- Follow the established color palette and typography
- Maintain consistent spacing and layout patterns

### 2. Performance Optimization

- Use lazy loading for images and components
- Optimize animations for smooth performance
- Minimize bundle size by tree-shaking unused code

### 3. Accessibility

- Ensure proper contrast ratios
- Add ARIA labels where necessary
- Test with screen readers
- Maintain keyboard navigation

### 4. Responsive Design

- Test on multiple screen sizes
- Use mobile-first approach
- Ensure touch targets are appropriately sized

## Troubleshooting

### Common Issues

1. **Theme not applying**: Check if the theme context is properly set up
2. **Animations not working**: Ensure Framer Motion is properly imported
3. **Styles not loading**: Verify TailwindCSS configuration
4. **TypeScript errors**: Check type definitions and imports

### Getting Help

- Check the [Setup Guide](./setup.md)
- Review the [API Reference](./api.md)
- Contact support at support@yourdomain.com 