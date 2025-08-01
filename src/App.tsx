import React from 'react';
import { ThemeProvider } from './core/context/ThemeContext';
import { TemplateProvider } from './core/context/TemplateContext';
import { TemplateDashboard } from './selector/TemplateDashboard';
import { TemplatePreview } from './selector/TemplatePreview';
import { useTemplate } from './core/context/TemplateContext';
import { Button } from './core/components/Button';
import { Grid } from 'lucide-react';

const AppContent: React.FC = () => {
  const { selectedTemplate, setSelectedTemplate } = useTemplate();

  return (
    <div className="App">
      {selectedTemplate ? (
        <div>
          <div className="fixed top-4 right-4 z-50">
            <Button
              onClick={() => setSelectedTemplate(null)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Grid className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
          <TemplatePreview />
        </div>
      ) : (
        <TemplateDashboard />
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
