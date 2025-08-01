# Setup Guide

This guide will help you set up the Multi-Purpose Landing Kit on your local development environment.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for version control)

### Checking Your Environment

Run these commands to verify your setup:

```bash
node --version
npm --version
git --version
```

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd multi-landing-kit
```

### 2. Install Dependencies

```bash
npm install
```

If you encounter any peer dependency warnings, you can use:

```bash
npm install --legacy-peer-deps
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### 4. Verify Installation

Open your browser and navigate to the local development URL. You should see:

- The Template Dashboard with 10+ template cards
- A modern, responsive interface
- Theme toggle functionality
- Template preview capabilities

## Development Workflow

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run test suite

### File Structure Overview

```
src/
├── core/           # Shared components and utilities
├── templates/      # Individual template files
├── selector/       # Dashboard and preview components
├── config/         # Theme and configuration
├── data/           # Content data
└── scripts/        # Build and export scripts
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific settings:

```env
VITE_APP_TITLE=Multi-Purpose Landing Kit
VITE_APP_DESCRIPTION=Professional landing page templates
```

### TailwindCSS Configuration

The project uses TailwindCSS with custom configuration. Key files:

- `tailwind.config.js` - Main configuration
- `postcss.config.js` - PostCSS plugins
- `src/index.css` - Global styles and utilities

### TypeScript Configuration

TypeScript is configured with strict settings:

- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node.js settings

## Troubleshooting

### Common Issues

#### 1. Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port.

#### 2. Dependency Installation Issues

If you encounter dependency conflicts:

```bash
npm install --legacy-peer-deps
```

#### 3. TypeScript Errors

If you see TypeScript errors:

```bash
npm run build
```

This will show you any type issues that need to be resolved.

#### 4. TailwindCSS Not Working

Ensure your CSS imports are correct in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Getting Help

If you encounter issues not covered here:

1. Check the [GitHub Issues](https://github.com/your-repo/issues)
2. Review the [Customization Guide](./customization.md)
3. Contact support at support@yourdomain.com

## Next Steps

After successful setup:

1. Explore the [Template Dashboard](../src/selector/TemplateDashboard.tsx)
2. Try customizing a template in the [Preview Mode](../src/selector/TemplatePreview.tsx)
3. Read the [Customization Guide](./customization.md)
4. Check out the [Deployment Guide](./deployment.md)

## Development Tips

### Hot Reload

The development server supports hot reload. Changes to your files will automatically refresh the browser.

### Browser DevTools

Use browser developer tools to:
- Inspect component structure
- Debug theme changes
- Test responsive design
- Monitor performance

### Code Quality

The project includes:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
- Jest for testing

Run these tools regularly to maintain code quality:

```bash
npm run lint
npm run test
``` 