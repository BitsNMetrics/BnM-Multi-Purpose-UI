import React, { useState } from 'react';
import { ThemeProvider } from './core/context/ThemeContext';
import { TemplateProvider } from './core/context/TemplateContext';
import { TemplateDashboard } from './selector/TemplateDashboard';
import { TemplatePreview } from './selector/TemplatePreview';
import DemoGallery from './components/DemoGallery';
import ThumbnailGenerator from './components/ThumbnailGenerator';
import MarketplaceDemo from './components/MarketplaceDemo';
import { useTemplate } from './core/context/TemplateContext';
import { defaultTemplates } from './config/templates';
import { Button } from './core/components/Button';
import { Grid, Layout, Image, Globe } from 'lucide-react';

const AppContent: React.FC = () => {
  const { selectedTemplate, setSelectedTemplate } = useTemplate();
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [isThumbnailMode, setIsThumbnailMode] = useState(false);
  const [isMarketplaceMode, setIsMarketplaceMode] = useState(false);

  const handleTemplateSelect = (templateId: string) => {
    const template = defaultTemplates.find(t => t.id === templateId);
    if (template) {
      setSelectedTemplate(template);
      setIsDemoMode(false);
      setIsThumbnailMode(false);
      setIsMarketplaceMode(false);
    }
  };

  const handleBackToDemo = () => {
    setSelectedTemplate(null);
    setIsDemoMode(true);
    setIsThumbnailMode(false);
    setIsMarketplaceMode(false);
  };

  if (isMarketplaceMode) {
    return (
      <div>
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={() => setIsMarketplaceMode(false)}
            className="bg-slate-600 hover:bg-slate-700 text-white"
          >
            <Grid className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
        <MarketplaceDemo />
      </div>
    );
  }

  if (isThumbnailMode) {
    return (
      <div>
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={() => setIsThumbnailMode(false)}
            className="bg-slate-600 hover:bg-slate-700 text-white"
          >
            <Grid className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
        <ThumbnailGenerator />
      </div>
    );
  }

  if (isDemoMode) {
    return <DemoGallery onTemplateSelect={handleTemplateSelect} />;
  }

  return (
    <div className="App">
      {selectedTemplate ? (
        <div>
          <div className="fixed top-4 right-4 z-50">
            <Button
              onClick={handleBackToDemo}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Grid className="w-4 h-4 mr-2" />
              View All Templates
            </Button>
          </div>
          <TemplatePreview />
        </div>
      ) : (
        <div>
          <div className="fixed top-4 right-4 z-50 flex gap-2">
            <Button
              onClick={() => setIsDemoMode(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Layout className="w-4 h-4 mr-2" />
              Demo Gallery
            </Button>
            <Button
              onClick={() => setIsMarketplaceMode(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              <Globe className="w-4 h-4 mr-2" />
              Marketplace
            </Button>
            <Button
              onClick={() => setIsThumbnailMode(true)}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Image className="w-4 h-4 mr-2" />
              Thumbnail
            </Button>
          </div>
          <TemplateDashboard />
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <TemplateProvider>
        <AppContent />
      </TemplateProvider>
    </ThemeProvider>
  );
}

export default App;
