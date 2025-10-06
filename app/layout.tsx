import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Studio Barbershop Pro - Sistema de Gestión para Barberías | Gestión Operativa Completa",
  description:
    "Plataforma profesional de gestión operativa para barberías. Coordina servicios en tiempo real, gestiona tu equipo, genera reportes automáticos y optimiza las operaciones diarias de tu barbería. Ahorra horas de trabajo administrativo.",
  keywords: [
    "sistema gestión barbería",
    "software barbería",
    "gestión operativa barbería",
    "administración barbería",
    "control servicios barbería",
    "reportes barbería",
    "gestión personal barbería",
    "software barber shop",
    "sistema barberías Costa Rica",
    "app gestión barberos",
    "coordinación servicios barbería",
    "analytics barbería",
  ],
  authors: [{ name: "Geovanny Cordero", url: "https://geovannycordero.com" }],
  creator: "Geovanny Cordero",
  publisher: "Studio Barbershop Pro",
  openGraph: {
    type: "website",
    locale: "es_CR",
    title: "Studio Barbershop Pro - Sistema de Gestión para Barberías",
    description:
      "Gestiona las operaciones de tu barbería con eficiencia total. Coordina servicios, gestiona personal y accede a reportes en tiempo real.",
    siteName: "Studio Barbershop Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Barbershop Pro - Sistema de Gestión para Barberías",
    description: "Plataforma profesional para gestionar operaciones de barberías. Ahorra tiempo y optimiza tu negocio.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
