# Studio Barbershop Pro - Landing Page

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/geovanny-corderos-projects/v0-barber-shop-landing-page)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A professional landing page for **Studio Barbershop Pro**, a comprehensive barbershop management system. This modern, responsive website showcases the features and benefits of the barbershop management platform, designed to help barbershops streamline their operations and improve efficiency.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Project Structure](#project-structure)
- [Key Features Showcased](#key-features-showcased)
- [Performance & SEO](#performance--seo)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 Overview

This landing page serves as the marketing frontend for **Studio Barbershop Pro**, a professional barbershop management system. The website is built with modern web technologies and focuses on:

- **Professional Design**: Clean, modern interface that reflects the quality of the barbershop management system
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Performance**: Fast loading times and smooth user experience
- **SEO Optimized**: Structured data, meta tags, and semantic HTML for better search engine visibility
- **Accessibility**: WCAG compliant design for inclusive user experience

## ✨ Features

### Landing Page Features
- **Hero Section**: Compelling headline with clear value proposition
- **Feature Showcase**: Interactive sections highlighting key system capabilities
- **Statistics Display**: Real-time metrics and benefits visualization
- **Contact Integration**: Multiple contact methods (WhatsApp, Email, Calendly)
- **Customization Section**: White-label solution presentation
- **Responsive Design**: Mobile-first approach with seamless cross-device experience

### Technical Features
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **Vercel Analytics**: Performance and user analytics
- **SEO Optimization**: Structured data and meta tags
- **Performance**: Optimized images and lazy loading

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 22.0.0 or higher
- **npm**: Version 10.0.0 or higher (comes with Node.js)
- **Git**: For version control

### Verify Installation

```bash
# Check Node.js version
node --version  # Should be 22.0.0 or higher

# Check npm version
npm --version   # Should be 10.0.0 or higher

# Check Git version
git --version
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/barber-shop-studio-landing-page-v0.git
   cd barber-shop-studio-landing-page-v0
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup** (if needed)
   ```bash
   # Copy environment variables template (if available)
   cp .env.example .env.local
   ```

## 💻 Development

### Start Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript type checking
```

### Development Guidelines

- **Code Style**: Follow ESLint and Prettier configurations
- **TypeScript**: Use strict typing for better code quality
- **Components**: Create reusable components in `/components`
- **Styling**: Use Tailwind CSS utility classes
- **Images**: Optimize images and use Next.js Image component

## 🏗 Build & Deployment

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Deployment on Vercel

The project is configured for easy deployment on Vercel:

1. **Automatic Deployment**: Connected to GitHub repository
2. **Preview Deployments**: Automatic previews for pull requests
3. **Production URL**: [https://vercel.com/geovanny-corderos-projects/v0-barber-shop-landing-page](https://vercel.com/geovanny-corderos-projects/v0-barber-shop-landing-page)

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📁 Project Structure

```
barber-shop-studio-landing-page-v0/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Home page component
├── components/            # Reusable components
│   └── ui/               # UI components
│       ├── button.tsx    # Button component
│       └── card.tsx      # Card component
├── lib/                  # Utility functions
│   └── utils.ts         # Helper utilities
├── public/              # Static assets
│   ├── images/          # Image assets
│   ├── favicon.ico      # Favicon
│   ├── manifest.json    # PWA manifest
│   └── robots.txt       # SEO robots file
├── styles/              # Additional styles
├── components.json      # shadcn/ui configuration
├── next.config.mjs     # Next.js configuration
├── package.json        # Dependencies and scripts
├── postcss.config.mjs  # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Key Features Showcased

### 1. Service Management
- Real-time service coordination
- Barber assignment system
- Service tracking and documentation

### 2. Reports & Analytics
- Daily, weekly, and monthly reports
- Performance metrics per barber
- Service popularity analysis
- Revenue optimization insights

### 3. Team Management
- Role-based access control
- Secure authentication system
- Individual performance tracking
- Multi-location support

### 4. Customization
- White-label solution
- Brand customization
- Logo integration
- Corporate color schemes

## ⚡ Performance & SEO

### Performance Optimizations
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Font Optimization**: Geist fonts with variable font support
- **Bundle Analysis**: Optimized bundle size

### SEO Features
- **Structured Data**: JSON-LD schema markup
- **Meta Tags**: Comprehensive meta tag configuration
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

### Analytics
- **Vercel Analytics**: Performance and user behavior tracking
- **Core Web Vitals**: Monitoring of key performance metrics

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   npm run type-check
   npm run format:check
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Add TypeScript types for new features
- Update documentation as needed
- Test your changes thoroughly

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

**Studio Barbershop Pro**

- **Website**: [https://barbershop-studio.com](https://barbershop-studio.com)
- **Email**: [contact.barbershop.studio@gmail.com](mailto:contact.barbershop.studio@gmail.com)
- **WhatsApp**: [+506 8852-7576](https://wa.me/50688527576)
- **Developer**: [Geovanny Cordero](https://geovannycordero.com)

### Support
- **Response Time**: Less than 3 hours via WhatsApp, 24 hours via email
- **Demo Requests**: Available through Calendly scheduling
- **Technical Support**: Included with implementation

---

**Built with ❤️ by [Geovanny Cordero](https://geovannycordero.com)**