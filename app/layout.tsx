import type React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import { Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://barbershop-studio.com'),
  title: {
    default: 'Studio Barbershop Pro - Sistema de Gestión para Barberías',
    template: '%s | Studio Barbershop Pro',
  },
  description:
    'Plataforma profesional de gestión operativa para barberías. Coordina servicios en tiempo real, gestiona tu equipo, genera reportes automáticos y optimiza las operaciones diarias de tu barbería. Ahorra horas de trabajo administrativo.',
  keywords: [
    'sistema gestión barbería',
    'software barbería',
    'gestión operativa barbería',
    'administración barbería',
    'control servicios barbería',
    'reportes barbería',
    'gestión personal barbería',
    'software barber shop',
    'sistema barberías Costa Rica',
    'app gestión barberos',
    'coordinación servicios barbería',
    'analytics barbería',
    'barbería digital',
    'gestión de citas',
    'control de inventario barbería',
    'software para barberos',
    'sistema POS barbería',
  ],
  authors: [{ name: 'Geovanny Cordero', url: 'https://geovannycordero.com' }],
  creator: 'Geovanny Cordero',
  publisher: 'Studio Barbershop Pro',
  applicationName: 'Studio Barbershop Pro',
  referrer: 'origin-when-cross-origin',
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://barbershop-studio.com',
    languages: {
      'es-CR': 'https://barbershop-studio.com',
      es: 'https://barbershop-studio.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: 'https://barbershop-studio.com',
    title: 'Studio Barbershop Pro - Sistema de Gestión para Barberías',
    description:
      'Gestiona las operaciones de tu barbería con eficiencia total. Coordina servicios, gestiona personal y accede a reportes en tiempo real.',
    siteName: 'Studio Barbershop Pro',
    images: [
      {
        url: '/images/design-mode/main_logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Studio Barbershop Pro - Sistema de Gestión para Barberías',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Barbershop Pro - Sistema de Gestión para Barberías',
    description:
      'Plataforma profesional para gestionar operaciones de barberías. Ahorra tiempo y optimiza tu negocio.',
    images: ['/images/design-mode/main_logo.jpeg'],
    creator: '@geovannycordero',
    site: '@studio_barbershop_pro',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  manifest: '/manifest.json',
  category: 'business',
  classification: 'Business Software',
  other: {
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es-CR'>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
