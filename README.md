# DohPay Solutions - Bablas-Sip Station

## Overview
Revolutionary automated beverage dispensing technology built by young engineers at the Chandaria Business Innovation and Incubation Center in Nairobi, Kenya.

## Project Structure
```
src/
├── components/
│   ├── ui/                    # Reusable UI components (shadcn/ui)
│   └── site/                  # Business-specific components
│       ├── BablasSpecs.tsx    # Product specifications and pricing
│       ├── Careers.tsx        # Career opportunities with application forms
│       └── ApplicationForm.tsx # Job application modal
├── pages/
│   ├── Index.tsx              # Main homepage
│   ├── Projects.tsx           # Projects detail page
│   └── NotFound.tsx           # 404 page
├── assets/                    # Images and static assets
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
├── index.css                  # Global styles and design system
└── main.tsx                   # Application entry point
```

## Technology Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom Design System
- **UI Components**: shadcn/ui with custom glassmorphism variants
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Design System Features
- **Glassmorphism UI**: iOS 17-inspired frosted glass effects
- **Orange Primary Color**: `--primary: 28 100% 50%` (orange theme)
- **Custom Button Variants**: Glass buttons with hover animations
- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Optimized for dark backgrounds

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation
1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### VS Code Setup
1. **Recommended Extensions**
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Importer
   - Auto Rename Tag
   - Prettier - Code formatter
   - GitLens

2. **VS Code Settings** (`.vscode/settings.json`)
   ```json
   {
     "typescript.preferences.importModuleSpecifier": "relative",
     "tailwindCSS.includeLanguages": {
       "typescript": "javascript",
       "typescriptreact": "javascript"
     },
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```

3. **Useful VS Code Shortcuts**
   - `Ctrl+Shift+P` - Command Palette
   - `Ctrl+`` ` - Terminal
   - `Ctrl+Shift+E` - Explorer
   - `F12` - Go to Definition
   - `Alt+Shift+F` - Format Document

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development/staging
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features

### 1. Glassmorphism Design System
- Custom CSS classes for glass effects
- Backdrop blur and gradient borders
- Hover animations and transitions

### 2. Career Application System
- Individual job position cards
- Modal-based application forms
- File upload for resumes/CVs
- Form validation and toast notifications

### 3. Product Specifications
- Detailed Bablas-Sip Station specs
- Pricing tiers with installment options
- Technical feature highlights

### 4. Responsive Layout
- Mobile-first design approach
- Adaptive grid systems
- Touch-friendly interactions

## Deployment

### Lovable Platform
1. Open [Lovable Project](https://lovable.dev/projects/eca50ba7-7ebc-49f6-af4f-663cd44a27c6)
2. Click Share → Publish

### Manual Deployment
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider:
   - Netlify: Drag & drop the `dist` folder
   - Vercel: Connect GitHub repository
   - GitHub Pages: Push `dist` to `gh-pages` branch

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## Environment Variables
No environment variables needed for basic functionality. For production deployment with contact forms, you may need:
- Email service API keys
- Analytics tracking IDs

## Troubleshooting

### Common Issues
1. **Build failing**: Ensure all dependencies are installed with `npm install`
2. **Styling issues**: Check Tailwind CSS configuration in `tailwind.config.ts`
3. **Import errors**: Verify path aliases in `vite.config.ts`

### Development Tips
- Use the browser dev tools for responsive testing
- Check console for TypeScript errors
- Use React Developer Tools for component debugging
- Test glassmorphism effects on different backgrounds

## License
© 2024 DohPay Solutions. All rights reserved.

## Contact
- Email: hello@dohpay.co.ke
- Phone: +254 700 000 000
- Location: Chandaria Business Innovation and Incubation Center, Nairobi, Kenya