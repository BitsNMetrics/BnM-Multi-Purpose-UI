# Multi-Purpose Landing Kit

A centralized, multi-domain, multi-purpose landing page frontend system built with React, TailwindCSS, and Framer Motion. This kit includes 10+ niche landing page templates that can be previewed, customized, and exported individually.

## 🚀 Features

- **10+ Pre-Built Templates**: AI SaaS, E-commerce, Portfolio, Agency, Fitness, Education, Crypto, Events, and more
- **Centralized Dashboard**: Template selector with live previews and customization options
- **Dynamic Theming**: Light/dark mode with customizable color palettes and typography
- **One-Click Export**: Generate standalone builds for any template
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **SEO Optimized**: Built-in SEO with React Helmet
- **Form Integration**: Newsletter and contact forms with validation
- **Animation System**: Smooth transitions powered by Framer Motion

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Radix UI** for accessible components
- **Formik & Yup** for form handling
- **React Helmet Async** for SEO
- **Jest & React Testing Library** for testing

## 📁 Project Structure

```
multi-landing-kit/
├── public/                 # Static assets
├── src/
│   ├── core/              # Shared components, hooks, utils
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # React context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── layouts/       # Layout components
│   │   └── utils/         # Utility functions
│   ├── engine/            # Template rendering system
│   ├── templates/         # Individual template files
│   │   ├── ai-saas/       # AI Tools SaaS template
│   │   ├── portfolio/     # Personal portfolio template
│   │   ├── ecommerce/     # E-commerce template
│   │   └── ...            # Other templates
│   ├── selector/          # Template dashboard and preview
│   ├── ui/                # UI patterns and animations
│   ├── data/              # Content data (pricing, testimonials)
│   ├── config/            # Theme and configuration
│   └── scripts/           # Build and export scripts
├── docs/                  # Documentation
├── tests/                 # Test files
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd multi-landing-kit
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📖 Usage

### Template Dashboard

When you first open the application, you'll see the Template Dashboard showing all available templates:

- **AI Tools SaaS**: Perfect for AI-powered applications
- **Personal Portfolio**: For developers, designers, and creatives
- **E-commerce**: Single product and DTC brand landing pages
- **Startup Launch**: Beta signup and product launch pages
- **Agency/Consulting**: Marketing, legal, and finance services
- **Event/Conference**: Event registration and information
- **Health & Fitness**: Coaching and wellness services
- **Education/Course**: EdTech and online learning platforms
- **Crypto/Finance**: Cryptocurrency and financial tools
- **Mobile App**: App store landing pages

### Template Preview

Click "Preview Template" on any template card to:

- View live preview of the template
- Navigate between different pages (Hero, Features, Pricing, FAQ)
- Customize branding options (colors, fonts, logo)
- Export the template as a standalone build

### Customization

Each template can be customized through:

1. **Brand Configuration**: Update brand name, logo, and colors
2. **Theme Presets**: Choose from pre-built color schemes
3. **Typography**: Select from available font families
4. **Content**: Edit pricing, features, and testimonials via JSON files

### Export Options

- **Standalone Build**: Generate optimized build for deployment
- **Source Code**: Export template-specific source files
- **Deploy to Vercel**: One-click deployment to Vercel

## 🎨 Customization Guide

### Adding a New Template

1. Create a new folder in `src/templates/`
2. Add `config.json` with template configuration
3. Create template pages in the `pages/` folder
4. Update the template selector to include your new template

### Modifying Theme

Edit `src/config/theme.ts` to:
- Add new color palettes
- Modify typography options
- Update animation settings

### Content Management

Update JSON files in `src/data/` to modify:
- Pricing plans (`pricing.ts`)
- Testimonials (`testimonials.ts`)
- Feature lists (`features.ts`)

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## 📦 Building for Production

Build the entire application:

```bash
npm run build
```

Build a specific template:

```bash
npm run export --template=ai-saas
```

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy to Netlify: `netlify deploy --prod`

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically build and deploy

### Firebase

1. Build the project: `npm run build`
2. Deploy to Firebase: `firebase deploy`

## 📚 Documentation

- [Setup Guide](./docs/setup.md)
- [Customization Guide](./docs/customization.md)
- [Template Development](./docs/templates.md)
- [Deployment Guide](./docs/deployment.md)
- [API Reference](./docs/api.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Check the [documentation](./docs/)
- Open an issue on GitHub
- Contact: support@yourdomain.com

## 🎯 Roadmap

- [ ] Additional template niches
- [ ] CMS integration (Sanity, Contentful)
- [ ] Advanced customization options
- [ ] Performance optimizations
- [ ] PWA support
- [ ] Multi-language support

---

**Built with ❤️ using React, TailwindCSS, and Framer Motion**
