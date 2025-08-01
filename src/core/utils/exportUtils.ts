import JSZip from 'jszip';

// Export utility functions for template export and deployment

export interface ExportConfig {
  templateId: string;
  customConfig: any;
  exportFormat: 'standalone' | 'source' | 'react-component' | 'nextjs';
  buildOptions: {
    minify: boolean;
    includeDependencies: boolean;
    generateSitemap: boolean;
    optimizeImages: boolean;
  };
  projectInfo: {
    name: string;
    description: string;
    author: string;
    license: string;
  };
}

export interface DeploymentConfig {
  platform: 'vercel' | 'netlify' | 'github-pages' | 'firebase';
  projectName: string;
  customDomain?: string;
}

// Generate standalone build (HTML/CSS/JS)
export const generateStandaloneBuild = async (config: ExportConfig): Promise<Blob> => {
  const { templateId, customConfig, buildOptions, projectInfo } = config;
  
  // Create the HTML structure
  const htmlContent = generateHTML(templateId, customConfig, projectInfo);
  const cssContent = generateCSS(customConfig, buildOptions);
  const jsContent = generateJS(customConfig, buildOptions);
  
  // Create a zip file with all assets
  const zip = new JSZip();
  
  // Add main files
  zip.file('index.html', htmlContent);
  zip.file('styles.css', cssContent);
  zip.file('script.js', jsContent);
  
  // Add project files
  zip.file('package.json', generatePackageJson(projectInfo));
  zip.file('README.md', generateReadme(projectInfo));
  
  if (buildOptions.generateSitemap) {
    zip.file('sitemap.xml', generateSitemap(projectInfo));
  }
  
  // Add assets folder structure
  zip.folder('assets');
  zip.folder('assets/images');
  zip.folder('assets/fonts');
  
  // Generate and return the zip file
  const zipBlob = await zip.generateAsync({ type: 'blob' });
  return zipBlob;
};

// Generate source code export
export const generateSourceCode = async (config: ExportConfig): Promise<Blob> => {
  const { templateId, customConfig, projectInfo } = config;
  
  const zip = new JSZip();
  
  // Add React component files
  zip.file('src/components/Template.tsx', generateReactComponentContent(templateId, customConfig));
  zip.file('src/styles/Template.css', generateReactCSS(customConfig));
  zip.file('src/utils/config.ts', generateConfigFile(customConfig));
  
  // Add project configuration
  zip.file('package.json', generateReactPackageJson(projectInfo));
  zip.file('tsconfig.json', generateTSConfig());
  zip.file('README.md', generateReactReadme(projectInfo));
  
  // Add build configuration
  zip.file('vite.config.ts', generateViteConfig());
  zip.file('tailwind.config.js', generateTailwindConfig(customConfig));
  
  const zipBlob = await zip.generateAsync({ type: 'blob' });
  return zipBlob;
};

// Generate React component export
export const generateReactComponentExport = async (config: ExportConfig): Promise<Blob> => {
  const { templateId, customConfig, projectInfo } = config;
  
  const zip = new JSZip();
  
  // Single React component file
  zip.file(`${projectInfo.name}.tsx`, generateStandaloneReactComponent(templateId, customConfig));
  zip.file('README.md', generateComponentReadme(projectInfo));
  
  const zipBlob = await zip.generateAsync({ type: 'blob' });
  return zipBlob;
};

// Generate Next.js project export
export const generateNextJSProject = async (config: ExportConfig): Promise<Blob> => {
  const { templateId, customConfig, projectInfo } = config;
  
  const zip = new JSZip();
  
  // Next.js project structure
  zip.file('pages/index.tsx', generateNextJSPage(templateId, customConfig));
  zip.file('styles/globals.css', generateNextJSCSS(customConfig));
  zip.file('components/Template.tsx', generateNextJSComponent(templateId, customConfig));
  
  // Next.js configuration
  zip.file('next.config.js', generateNextConfig());
  zip.file('package.json', generateNextPackageJson(projectInfo));
  zip.file('tailwind.config.js', generateTailwindConfig(customConfig));
  zip.file('README.md', generateNextReadme(projectInfo));
  
  const zipBlob = await zip.generateAsync({ type: 'blob' });
  return zipBlob;
};

// Deployment functions
export const deployToVercel = async (config: ExportConfig, deploymentConfig: DeploymentConfig): Promise<string> => {
  // Simulate Vercel deployment
  console.log('Deploying to Vercel...', { config, deploymentConfig });
  
  // In a real implementation, this would:
  // 1. Create a GitHub repository
  // 2. Push the code
  // 3. Connect to Vercel
  // 4. Deploy and return the URL
  
  return `https://${deploymentConfig.projectName}.vercel.app`;
};

export const deployToNetlify = async (config: ExportConfig, deploymentConfig: DeploymentConfig): Promise<string> => {
  console.log('Deploying to Netlify...', { config, deploymentConfig });
  return `https://${deploymentConfig.projectName}.netlify.app`;
};

export const deployToGitHubPages = async (config: ExportConfig, deploymentConfig: DeploymentConfig): Promise<string> => {
  console.log('Deploying to GitHub Pages...', { config, deploymentConfig });
  return `https://${deploymentConfig.author}.github.io/${deploymentConfig.projectName}`;
};

// Helper functions for generating content
const generateHTML = (templateId: string, customConfig: any, projectInfo: any): string => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${customConfig.seo?.title || projectInfo.name}</title>
    <meta name="description" content="${customConfig.seo?.description || projectInfo.description}">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=${customConfig.font || 'Inter'}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div id="root">
        <!-- Template content will be rendered here -->
        <div class="template-container">
            <h1>${customConfig.brandName || projectInfo.name}</h1>
            <p>${customConfig.tagline || projectInfo.description}</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>`;
};

const generateCSS = (customConfig: any, buildOptions: any): string => {
  const colors = customConfig.colors || {};
  
  return `:root {
    --color-primary: ${colors.primary || '#8b5cf6'};
    --color-secondary: ${colors.secondary || '#a855f7'};
    --color-accent: ${colors.accent || '#c084fc'};
    --font-family: '${customConfig.font || 'Inter'}', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-family);
    line-height: 1.6;
    color: #333;
}

.template-container {
    max-width: ${customConfig.containerWidth || 'max-w-7xl'};
    margin: 0 auto;
    padding: ${customConfig.sectionSpacing || 'py-20'};
}

h1 {
    color: var(--color-primary);
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

p {
    color: var(--color-secondary);
    font-size: 1.125rem;
    margin-bottom: 1rem;
}`;
};

const generateJS = (customConfig: any, buildOptions: any): string => {
  return `// Template JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Template loaded successfully');
    
    // Add any interactive functionality here
    const templateContainer = document.querySelector('.template-container');
    if (templateContainer) {
        templateContainer.style.opacity = '1';
    }
});`;
};

const generatePackageJson = (projectInfo: any): string => {
  return JSON.stringify({
    name: projectInfo.name.toLowerCase().replace(/\s+/g, '-'),
    version: '1.0.0',
    description: projectInfo.description,
    author: projectInfo.author,
    license: projectInfo.license,
    scripts: {
      start: 'python -m http.server 8000',
      build: 'echo "Build complete"'
    },
    dependencies: {},
    devDependencies: {}
  }, null, 2);
};

const generateReadme = (projectInfo: any): string => {
  return `# ${projectInfo.name}

${projectInfo.description}

## Getting Started

1. Extract the downloaded files
2. Open \`index.html\` in your browser
3. Or run \`npm start\` to serve locally

## Customization

Edit the following files to customize your template:
- \`styles.css\` - Modify colors and styling
- \`script.js\` - Add interactive functionality
- \`index.html\` - Update content and structure

## Deployment

Upload the files to any web hosting service:
- Netlify
- Vercel
- GitHub Pages
- Traditional web hosting

## License

${projectInfo.license}

## Author

${projectInfo.author}
`;
};

const generateSitemap = (projectInfo: any): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://yourdomain.com/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>`;
};

const generateReactComponentContent = (templateId: string, customConfig: any): string => {
  return `import React from 'react';
import './Template.css';

interface TemplateProps {
  config?: any;
}

export const Template: React.FC<TemplateProps> = ({ config = {} }) => {
  const mergedConfig = { ...${JSON.stringify(customConfig)}, ...config };
  
  return (
    <div className="template-container">
      <h1>{mergedConfig.brandName || 'Your Brand'}</h1>
      <p>{mergedConfig.tagline || 'Your tagline here'}</p>
      {/* Add your template content here */}
    </div>
  );
};

export default Template;`;
};

const generateReactCSS = (customConfig: any): string => {
  const colors = customConfig.colors || {};
  
  return `.template-container {
  --color-primary: ${colors.primary || '#8b5cf6'};
  --color-secondary: ${colors.secondary || '#a855f7'};
  --color-accent: ${colors.accent || '#c084fc'};
  --font-family: '${customConfig.font || 'Inter'}', sans-serif;
  
  font-family: var(--font-family);
  max-width: ${customConfig.containerWidth || 'max-w-7xl'};
  margin: 0 auto;
  padding: ${customConfig.sectionSpacing || 'py-20'};
}

.template-container h1 {
  color: var(--color-primary);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.template-container p {
  color: var(--color-secondary);
  font-size: 1.125rem;
  margin-bottom: 1rem;
}`;
};

const generateConfigFile = (customConfig: any): string => {
  return `export const templateConfig = ${JSON.stringify(customConfig, null, 2)};

export const getConfig = () => templateConfig;

export const updateConfig = (updates: any) => {
  Object.assign(templateConfig, updates);
};`;
};

const generateReactPackageJson = (projectInfo: any): string => {
  return JSON.stringify({
    name: projectInfo.name.toLowerCase().replace(/\s+/g, '-'),
    version: '1.0.0',
    description: projectInfo.description,
    author: projectInfo.author,
    license: projectInfo.license,
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview'
    },
    dependencies: {
      react: '^18.2.0',
      'react-dom': '^18.2.0'
    },
    devDependencies: {
      '@types/react': '^18.2.0',
      '@types/react-dom': '^18.2.0',
      '@vitejs/plugin-react': '^4.0.0',
      vite: '^4.4.0',
      tailwindcss: '^3.3.0',
      autoprefixer: '^10.4.0',
      postcss: '^8.4.0'
    }
  }, null, 2);
};

const generateTSConfig = (): string => {
  return JSON.stringify({
    compilerOptions: {
      target: 'ES2020',
      useDefineForClassFields: true,
      lib: ['ES2020', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      skipLibCheck: true,
      moduleResolution: 'bundler',
      allowImportingTsExtensions: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: 'react-jsx',
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noFallthroughCasesInSwitch: true
    },
    include: ['src'],
    references: [{ path: './tsconfig.node.json' }]
  }, null, 2);
};

const generateViteConfig = (): string => {
  return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})`;
};

const generateTailwindConfig = (customConfig: any): string => {
  const colors = customConfig.colors || {};
  
  return `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '${colors.primary || '#8b5cf6'}',
        secondary: '${colors.secondary || '#a855f7'}',
        accent: '${colors.accent || '#c084fc'}',
      },
      fontFamily: {
        sans: ['${customConfig.font || 'Inter'}', 'sans-serif'],
      },
    },
  },
  plugins: [],
}`;
};

const generateReactReadme = (projectInfo: any): string => {
  return `# ${projectInfo.name}

${projectInfo.description}

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Start development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Build for production:
   \`\`\`bash
   npm run build
   \`\`\`

## Customization

Edit the following files to customize your template:
- \`src/components/Template.tsx\` - Main component
- \`src/styles/Template.css\` - Styling
- \`src/utils/config.ts\` - Configuration

## License

${projectInfo.license}

## Author

${projectInfo.author}
`;
};

const generateStandaloneReactComponent = (templateId: string, customConfig: any): string => {
  return `import React from 'react';

interface TemplateProps {
  config?: any;
}

export const Template: React.FC<TemplateProps> = ({ config = {} }) => {
  const mergedConfig = { ...${JSON.stringify(customConfig)}, ...config };
  
  const styles = {
    container: {
      fontFamily: '${customConfig.font || 'Inter'}', sans-serif',
      maxWidth: '${customConfig.containerWidth || 'max-w-7xl'}',
      margin: '0 auto',
      padding: '${customConfig.sectionSpacing || 'py-20'}',
    },
    heading: {
      color: '${customConfig.colors?.primary || '#8b5cf6'}',
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    paragraph: {
      color: '${customConfig.colors?.secondary || '#a855f7'}',
      fontSize: '1.125rem',
      marginBottom: '1rem',
    }
  };
  
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{mergedConfig.brandName || 'Your Brand'}</h1>
      <p style={styles.paragraph}>{mergedConfig.tagline || 'Your tagline here'}</p>
      {/* Add your template content here */}
    </div>
  );
};

export default Template;`;
};

const generateComponentReadme = (projectInfo: any): string => {
  return `# ${projectInfo.name} - React Component

${projectInfo.description}

## Usage

\`\`\`jsx
import Template from './${projectInfo.name}.tsx';

function App() {
  return <Template config={{ brandName: 'My Brand' }} />;
}
\`\`\`

## Props

- \`config\` (optional): Configuration object to override defaults

## License

${projectInfo.license}

## Author

${projectInfo.author}
`;
};

const generateNextJSPage = (templateId: string, customConfig: any): string => {
  return `import Template from '../components/Template';

export default function Home() {
  return <Template />;
}`;
};

const generateNextJSComponent = (templateId: string, customConfig: any): string => {
  return `import React from 'react';

interface TemplateProps {
  config?: any;
}

export default function Template({ config = {} }: TemplateProps) {
  const mergedConfig = { ...${JSON.stringify(customConfig)}, ...config };
  
  return (
    <div className="template-container">
      <h1>{mergedConfig.brandName || 'Your Brand'}</h1>
      <p>{mergedConfig.tagline || 'Your tagline here'}</p>
      {/* Add your template content here */}
    </div>
  );
}`;
};

const generateNextJSCSS = (customConfig: any): string => {
  const colors = customConfig.colors || {};
  
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: ${colors.primary || '#8b5cf6'};
  --color-secondary: ${colors.secondary || '#a855f7'};
  --color-accent: ${colors.accent || '#c084fc'};
}

.template-container {
  @apply max-w-7xl mx-auto py-20;
  font-family: '${customConfig.font || 'Inter'}', sans-serif;
}

.template-container h1 {
  color: var(--color-primary);
  @apply text-4xl font-bold mb-4;
}

.template-container p {
  color: var(--color-secondary);
  @apply text-lg mb-4;
}`;
};

const generateNextConfig = (): string => {
  return `/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig`;
};

const generateNextPackageJson = (projectInfo: any): string => {
  return JSON.stringify({
    name: projectInfo.name.toLowerCase().replace(/\s+/g, '-'),
    version: '1.0.0',
    description: projectInfo.description,
    author: projectInfo.author,
    license: projectInfo.license,
    scripts: {
      dev: 'next dev',
      build: 'next build',
      start: 'next start',
      lint: 'next lint'
    },
    dependencies: {
      next: '^13.4.0',
      react: '^18.2.0',
      'react-dom': '^18.2.0'
    },
    devDependencies: {
      '@types/node': '^20.0.0',
      '@types/react': '^18.2.0',
      '@types/react-dom': '^18.2.0',
      eslint: '^8.0.0',
      'eslint-config-next': '^13.4.0',
      tailwindcss: '^3.3.0',
      autoprefixer: '^10.4.0',
      postcss: '^8.4.0'
    }
  }, null, 2);
};

const generateNextReadme = (projectInfo: any): string => {
  return `# ${projectInfo.name}

${projectInfo.description}

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## License

${projectInfo.license}

## Author

${projectInfo.author}
`;
};

// Download utility
export const downloadFile = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}; 