import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Palette, 
  Code, 
  Smartphone, 
  Globe,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { defaultTemplates } from '../config/templates';

interface ThumbnailGeneratorProps {
  onDownload?: (dataUrl: string) => void;
}

const ThumbnailGenerator: React.FC<ThumbnailGeneratorProps> = ({ onDownload }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateThumbnail = async () => {
    if (!canvasRef.current) return;
    
    setIsGenerating(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to 16:9 ratio (1920x1080)
    canvas.width = 1920;
    canvas.height = 1080;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 1920, 1080);
    gradient.addColorStop(0, '#1e293b');
    gradient.addColorStop(0.5, '#334155');
    gradient.addColorStop(1, '#475569');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1920, 1080);

    // Add subtle pattern overlay
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    for (let i = 0; i < 1920; i += 40) {
      for (let j = 0; j < 1080; j += 40) {
        ctx.fillRect(i, j, 1, 1);
      }
    }

    // Main title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 72px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Multi-Purpose Landing Page Kit', 960, 120);

    // Subtitle
    ctx.fillStyle = '#94a3b8';
    ctx.font = '32px Inter, sans-serif';
    ctx.fillText('Professional templates for every business need', 960, 180);

    // Template grid (3x3 layout)
    const templateColors = [
      ['#6366f1', '#8b5cf6', '#06b6d4'], // AI SaaS
      ['#3b82f6', '#1e40af', '#1e293b'], // Agency
      ['#10b981', '#059669', '#064e3b'], // Startup
      ['#f59e0b', '#d97706', '#92400e'], // Ecommerce
      ['#8b5cf6', '#7c3aed', '#5b21b6'], // Portfolio
      ['#fbbf24', '#f59e0b', '#d97706'], // Crypto
      ['#ec4899', '#db2777', '#be185d'], // Mobile App
      ['#06b6d4', '#0891b2', '#0e7490'], // Event
      ['#10b981', '#059669', '#047857'], // Education
    ];

    const templateNames = [
      'AI SaaS', 'Agency', 'Startup', 'Ecommerce', 'Portfolio',
      'Crypto', 'Mobile App', 'Event', 'Education'
    ];

    const startX = 200;
    const startY = 250;
    const cardWidth = 480;
    const cardHeight = 280;
    const gap = 40;

    for (let i = 0; i < 9; i++) {
      const row = Math.floor(i / 3);
      const col = i % 3;
      const x = startX + col * (cardWidth + gap);
      const y = startY + row * (cardHeight + gap);

      // Card background
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
      ctx.shadowBlur = 20;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 10;
      ctx.fillRect(x, y, cardWidth, cardHeight);
      ctx.shadowColor = 'transparent';

      // Color bar
      const colors = templateColors[i];
      const colorBarHeight = 8;
      for (let j = 0; j < colors.length; j++) {
        ctx.fillStyle = colors[j];
        ctx.fillRect(x, y + j * colorBarHeight, cardWidth, colorBarHeight);
      }

      // Template name
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 24px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(templateNames[i], x + cardWidth / 2, y + 60);

      // Features
      ctx.fillStyle = '#64748b';
      ctx.font = '16px Inter, sans-serif';
      const features = ['Responsive', 'Customizable', 'Modern'];
      features.forEach((feature, index) => {
        ctx.fillText(feature, x + cardWidth / 2, y + 90 + index * 25);
      });

      // Rating
      ctx.fillStyle = '#fbbf24';
      ctx.font = '20px Inter, sans-serif';
      ctx.fillText('★★★★★', x + cardWidth / 2, y + 180);
    }

    // Bottom section with features
    const features = [
      { icon: '🎨', text: 'Fully Customizable' },
      { icon: '📱', text: '100% Responsive' },
      { icon: '⚡', text: 'Lightning Fast' },
      { icon: '🚀', text: 'Ready to Deploy' }
    ];

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Key Features', 960, 850);

    features.forEach((feature, index) => {
      const x = 400 + index * 350;
      ctx.fillStyle = '#94a3b8';
      ctx.font = '48px Inter, sans-serif';
      ctx.fillText(feature.icon, x, 920);
      ctx.fillStyle = '#ffffff';
      ctx.font = '20px Inter, sans-serif';
      ctx.fillText(feature.text, x, 960);
    });

    // CTA button
    const buttonX = 960 - 120;
    const buttonY = 1000;
    const buttonWidth = 240;
    const buttonHeight = 50;

    // Button background
    const buttonGradient = ctx.createLinearGradient(buttonX, buttonY, buttonX + buttonWidth, buttonY + buttonHeight);
    buttonGradient.addColorStop(0, '#3b82f6');
    buttonGradient.addColorStop(1, '#1d4ed8');
    ctx.fillStyle = buttonGradient;
    ctx.shadowColor = 'rgba(59, 130, 246, 0.3)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 5;
    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
    ctx.shadowColor = 'transparent';

    // Button text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Get Started Now', buttonX + buttonWidth / 2, buttonY + 32);

    // Convert to data URL
    const dataUrl = canvas.toDataURL('image/png');
    setIsGenerating(false);
    
    if (onDownload) {
      onDownload(dataUrl);
    }
  };

  useEffect(() => {
    generateThumbnail();
  }, []);

  const handleDownload = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'multi-landing-kit-thumbnail.png';
      link.href = canvasRef.current.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Thumbnail Generator
          </h1>
          <p className="text-slate-300 text-lg">
            Generate a professional 16:9 thumbnail for your landing page kit
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Preview
                </h2>
                <p className="text-slate-600">
                  1920x1080 (16:9 ratio) - Perfect for marketplace listings
                </p>
              </div>
              <button
                onClick={handleDownload}
                disabled={isGenerating}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                {isGenerating ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                {isGenerating ? 'Generating...' : 'Download PNG'}
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="relative">
              <canvas
                ref={canvasRef}
                className="w-full h-auto border border-slate-200 rounded-lg shadow-lg"
                style={{ aspectRatio: '16/9' }}
              />
              {isGenerating && (
                <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">Generating thumbnail...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Template Overview
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {defaultTemplates.slice(0, 9).map((template, index) => (
                <div key={template.id} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    {template.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            This thumbnail showcases all 10 professional templates with modern design and key features
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailGenerator; 