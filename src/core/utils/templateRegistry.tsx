import React, { lazy, Suspense } from 'react';

// Template component imports
const AISaaSTemplate = lazy(() => import('../../templates/ai-saas'));
const PortfolioTemplate = lazy(() => import('../../templates/portfolio'));
const EcommerceTemplate = lazy(() => import('../../templates/ecommerce'));
const StartupTemplate = lazy(() => import('../../templates/startup'));
const MobileAppTemplate = lazy(() => import('../../templates/mobile-app'));
const CryptoTemplate = lazy(() => import('../../templates/crypto'));
const AgencyTemplate = lazy(() => import('../../templates/agency'));
const EventTemplate = lazy(() => import('../../templates/event'));
const EducationTemplate = lazy(() => import('../../templates/education'));
const FitnessTemplate = lazy(() => import('../../templates/fitness'));

// Template registry mapping
export const templateRegistry: Record<string, React.ComponentType> = {
  'ai-saas': AISaaSTemplate,
  'portfolio': PortfolioTemplate,
  'ecommerce': EcommerceTemplate,
  'startup': StartupTemplate,
  'mobile-app': MobileAppTemplate,
  'crypto': CryptoTemplate,
  'agency': AgencyTemplate,
  'event': EventTemplate,
  'education': EducationTemplate,
  'fitness': FitnessTemplate,
  // Add other templates as they are completed
};

// Template component with loading fallback
export const TemplateComponent: React.FC<{ templateId: string }> = ({ templateId }) => {
  const TemplateComponent = templateRegistry[templateId];
  
  if (!TemplateComponent) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-2xl font-semibold mb-2">Template Not Found</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            The template "{templateId}" is not available yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400">Loading template...</p>
        </div>
      </div>
    }>
      <TemplateComponent />
    </Suspense>
  );
}; 