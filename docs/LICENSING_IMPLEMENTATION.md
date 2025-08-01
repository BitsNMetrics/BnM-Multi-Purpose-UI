# Licensing & Protection System Implementation

## 🔐 **License Protection Architecture**

### **1. License Key Generation System**

```typescript
// src/core/licensing/LicenseGenerator.ts
export class LicenseGenerator {
  private static readonly ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  private static readonly KEY_LENGTH = 25;
  private static readonly SECTIONS = 5;
  private static readonly SECTION_LENGTH = 5;

  static generateLicense(type: LicenseType): string {
    const sections: string[] = [];
    
    for (let i = 0; i < this.SECTIONS; i++) {
      let section = '';
      for (let j = 0; j < this.SECTION_LENGTH; j++) {
        section += this.ALPHABET.charAt(
          Math.floor(Math.random() * this.ALPHABET.length)
        );
      }
      sections.push(section);
    }
    
    return sections.join('-');
  }

  static validateLicense(license: string): boolean {
    const pattern = /^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}$/;
    return pattern.test(license);
  }
}
```

### **2. License Validation System**

```typescript
// src/core/licensing/LicenseValidator.ts
export class LicenseValidator {
  private static readonly API_ENDPOINT = 'https://your-license-server.com/api/validate';

  static async validateLicense(license: string, domain: string): Promise<ValidationResult> {
    try {
      const response = await fetch(this.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          license,
          domain,
          timestamp: Date.now(),
        }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      return {
        valid: false,
        error: 'Network error during validation',
      };
    }
  }

  static validateOffline(license: string): boolean {
    // Basic offline validation using checksum
    const checksum = this.calculateChecksum(license);
    return checksum === this.getExpectedChecksum(license);
  }

  private static calculateChecksum(license: string): string {
    // Implementation of checksum calculation
    return crypto.createHash('sha256').update(license).digest('hex').substring(0, 8);
  }
}
```

### **3. Download Protection System**

```typescript
// src/core/download/DownloadProtector.ts
export class DownloadProtector {
  private static readonly DOWNLOAD_EXPIRY_HOURS = 24;
  private static readonly MAX_DOWNLOADS_PER_DAY = 5;

  static generateDownloadToken(license: string, userId: string): string {
    const payload = {
      license,
      userId,
      expiresAt: Date.now() + (this.DOWNLOAD_EXPIRY_HOURS * 60 * 60 * 1000),
      timestamp: Date.now(),
    };

    return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '24h' });
  }

  static validateDownloadToken(token: string): boolean {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      return decoded.expiresAt > Date.now();
    } catch {
      return false;
    }
  }

  static async trackDownload(license: string, userId: string): Promise<boolean> {
    // Track download count and enforce limits
    const downloadCount = await this.getDownloadCount(license, userId);
    
    if (downloadCount >= this.MAX_DOWNLOADS_PER_DAY) {
      return false;
    }

    await this.incrementDownloadCount(license, userId);
    return true;
  }
}
```

## 💳 **Payment Integration**

### **1. Stripe Integration**

```typescript
// src/core/payments/StripeService.ts
import Stripe from 'stripe';

export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2023-10-16',
    });
  }

  async createPaymentIntent(amount: number, currency: string = 'usd') {
    return await this.stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });
  }

  async createCheckoutSession(priceId: string, successUrl: string, cancelUrl: string) {
    return await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
  }
}
```

### **2. PayPal Integration**

```typescript
// src/core/payments/PayPalService.ts
import paypal from '@paypal/checkout-server-sdk';

export class PayPalService {
  private client: paypal.core.PayPalHttpClient;

  constructor() {
    const environment = process.env.NODE_ENV === 'production'
      ? new paypal.core.LiveEnvironment(process.env.PAYPAL_CLIENT_ID!, process.env.PAYPAL_CLIENT_SECRET!)
      : new paypal.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID!, process.env.PAYPAL_CLIENT_SECRET!);
    
    this.client = new paypal.core.PayPalHttpClient(environment);
  }

  async createOrder(amount: number, currency: string = 'USD') {
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: currency,
          value: amount.toString(),
        },
      }],
    });

    return await this.client.execute(request);
  }
}
```

## 🛡️ **Code Protection**

### **1. JavaScript Obfuscation**

```javascript
// build/obfuscate.js
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
  // ... other webpack config
  plugins: [
    new JavaScriptObfuscator({
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.75,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 0.4,
      debugProtection: false,
      debugProtectionInterval: 0,
      disableConsoleOutput: true,
      identifierNamesGenerator: 'hexadecimal',
      log: false,
      numbersToExpressions: true,
      renameGlobals: false,
      selfDefending: true,
      simplify: true,
      splitStrings: true,
      splitStringsChunkLength: 10,
      stringArray: true,
      stringArrayEncoding: ['base64'],
      stringArrayThreshold: 0.75,
      transformObjectKeys: true,
      unicodeEscapeSequence: false,
    }),
  ],
};
```

### **2. License Check Integration**

```typescript
// src/core/licensing/LicenseCheck.ts
export class LicenseCheck {
  private static licenseValid = false;
  private static lastCheck = 0;
  private static readonly CHECK_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours

  static async initialize(): Promise<boolean> {
    const license = localStorage.getItem('license_key');
    if (!license) {
      this.showLicensePrompt();
      return false;
    }

    const isValid = await this.validateLicense(license);
    this.licenseValid = isValid;
    
    if (!isValid) {
      this.showLicensePrompt();
    }

    return isValid;
  }

  static async validateLicense(license: string): Promise<boolean> {
    const now = Date.now();
    
    // Check if we need to validate again
    if (now - this.lastCheck < this.CHECK_INTERVAL) {
      return this.licenseValid;
    }

    try {
      const result = await LicenseValidator.validateLicense(license, window.location.hostname);
      this.licenseValid = result.valid;
      this.lastCheck = now;
      return result.valid;
    } catch (error) {
      // Fallback to offline validation
      return LicenseValidator.validateOffline(license);
    }
  }

  private static showLicensePrompt(): void {
    // Show license activation modal
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div class="license-modal">
        <h2>License Required</h2>
        <p>Please enter your license key to continue using this product.</p>
        <input type="text" id="license-input" placeholder="Enter license key">
        <button onclick="activateLicense()">Activate</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
}
```

## 📦 **Download System**

### **1. Secure Download Handler**

```typescript
// src/core/download/SecureDownload.ts
export class SecureDownload {
  static async downloadTemplate(templateId: string, license: string): Promise<void> {
    // Validate license first
    const isValid = await LicenseCheck.validateLicense(license);
    if (!isValid) {
      throw new Error('Invalid license');
    }

    // Generate download token
    const token = DownloadProtector.generateDownloadToken(license, 'user-id');
    
    // Track download
    const canDownload = await DownloadProtector.trackDownload(license, 'user-id');
    if (!canDownload) {
      throw new Error('Download limit exceeded');
    }

    // Create download URL
    const downloadUrl = `${process.env.API_URL}/download/${templateId}?token=${token}`;
    
    // Trigger download
    window.open(downloadUrl, '_blank');
  }

  static async downloadAllTemplates(license: string): Promise<void> {
    const templates = await this.getAvailableTemplates(license);
    
    for (const template of templates) {
      await this.downloadTemplate(template.id, license);
      // Add delay between downloads
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}
```

### **2. File Watermarking**

```typescript
// src/core/watermark/FileWatermarker.ts
export class FileWatermarker {
  static addWatermark(content: string, license: string): string {
    const watermark = `
      /*
       * Licensed to: ${this.getLicenseOwner(license)}
       * License Key: ${license.substring(0, 8)}...
       * Valid Until: ${this.getExpiryDate(license)}
       * 
       * This file is protected by copyright law.
       * Unauthorized distribution is prohibited.
       */
    `;
    
    return watermark + '\n' + content;
  }

  static addInvisibleWatermark(content: string, license: string): string {
    // Add invisible watermark using steganography techniques
    const watermark = this.encodeWatermark(license);
    return this.embedWatermark(content, watermark);
  }

  private static encodeWatermark(license: string): string {
    // Convert license to binary and encode
    return btoa(license).replace(/[^A-Za-z0-9]/g, '');
  }

  private static embedWatermark(content: string, watermark: string): string {
    // Embed watermark in comments and whitespace
    const lines = content.split('\n');
    const watermarkedLines = lines.map((line, index) => {
      if (index % 10 === 0) {
        return line + ' // ' + watermark.substring(index % watermark.length, index % watermark.length + 1);
      }
      return line;
    });
    
    return watermarkedLines.join('\n');
  }
}
```

## 🔧 **Implementation Steps**

### **Step 1: Set Up Environment Variables**
```bash
# .env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
JWT_SECRET=your_jwt_secret_key
LICENSE_SERVER_URL=https://your-license-server.com
```

### **Step 2: Install Dependencies**
```bash
npm install stripe @paypal/checkout-server-sdk jsonwebtoken crypto-js webpack-obfuscator
```

### **Step 3: Initialize License System**
```typescript
// src/main.tsx
import { LicenseCheck } from './core/licensing/LicenseCheck';

async function initializeApp() {
  const isLicensed = await LicenseCheck.initialize();
  
  if (isLicensed) {
    // Start the application
    ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
  } else {
    // Show license activation screen
    showLicenseActivation();
  }
}

initializeApp();
```

### **Step 4: Protect Build Process**
```javascript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import obfuscator from 'webpack-obfuscator';

export default defineConfig({
  plugins: [
    react(),
    obfuscator({
      // Obfuscation options
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          licensing: ['./src/core/licensing'],
        },
      },
    },
  },
});
```

## 📊 **Monitoring & Analytics**

### **1. Usage Tracking**
```typescript
// src/core/analytics/UsageTracker.ts
export class UsageTracker {
  static trackTemplateUsage(templateId: string, license: string): void {
    const data = {
      templateId,
      license: license.substring(0, 8) + '...',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
    };

    // Send to analytics server
    fetch('/api/analytics/usage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  static trackDownload(downloadId: string, license: string): void {
    // Track download analytics
  }
}
```

This implementation provides a comprehensive protection system that:
- ✅ Generates and validates license keys
- ✅ Protects downloads with time-limited tokens
- ✅ Integrates with major payment processors
- ✅ Obfuscates code to prevent reverse engineering
- ✅ Tracks usage and prevents abuse
- ✅ Watermarks files for identification

The system is designed to be both secure and user-friendly, ensuring that legitimate customers can easily access their purchases while preventing unauthorized distribution. 