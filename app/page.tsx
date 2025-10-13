'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Check,
  BarChart3,
  Users,
  ClipboardList,
  TrendingUp,
  Clock,
  Zap,
  Palette,
  Sparkles,
  ImageIcon,
  Type,
  MessageCircle,
  Mail,
  Calendar,
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Studio Barbershop Pro',
    description:
      'Sistema profesional de gestión operativa para barberías. Coordina servicios en tiempo real, gestiona tu equipo y genera reportes automáticos.',
    url: 'https://barbershop-studio.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    author: {
      '@type': 'Person',
      name: 'Geovanny Cordero',
      url: 'https://geovannycordero.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Studio Barbershop Pro',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
    screenshot: '/images/design-mode/home_big.png',
    softwareVersion: '1.0.0',
    datePublished: '2025-01-27',
    inLanguage: 'es-CR',
  };

  // Email functions
  const sendDemoRequest = () => {
    const subject = encodeURIComponent(
      'Solicitud de Demostración - Studio Barbershop Pro'
    );
    const body = encodeURIComponent(`Hola,

Me interesa solicitar una demostración del sistema Studio Barbershop Pro para mi barbería.

Por favor, contácteme para coordinar una demostración personalizada.

Este es mi número de whatsapp: [incluir número de whatsapp]

Gracias.`);
    window.open(
      `mailto:contact.barbershop.studio@gmail.com?subject=${subject}&body=${body}`
    );
  };

  // Contact functions
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Hola, me interesa conocer más sobre Studio Barbershop Pro para mi barbería.'
    );
    window.open(`https://wa.me/50688527576?text=${message}`, '_blank');
  };

  const openEmail = () => {
    const subject = encodeURIComponent('Consulta sobre Studio Barbershop Pro');
    const body = encodeURIComponent(`Hola,

Me interesa conocer más sobre el sistema Studio Barbershop Pro para mi barbería.

Por favor, contácteme para coordinar una demostración.

Gracias.`);
    window.open(
      `mailto:contact.barbershop.studio@gmail.com?subject=${subject}&body=${body}`
    );
  };

  const openCalendly = () => {
    window.open(
      'https://calendly.com/contact-barbershop-studio/30min',
      '_blank'
    );
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className='min-h-screen'>
        {/* Hero Section */}
        <header className='container mx-auto px-4 py-16 sm:py-20 md:py-32'>
          <div className='max-w-5xl mx-auto text-center space-y-6 sm:space-y-8'>
            <div className='inline-block'>
              <Image
                src='/images/design-mode/main_logo.jpeg'
                alt='Studio Barbershop Pro - Sistema de gestión profesional para barberías'
                width={180}
                height={180}
                className='mx-auto mb-6 sm:mb-8 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44'
                priority
              />
            </div>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight'>
              Gestiona las Operaciones de Tu Barbería con Eficiencia Total
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
              Sistema profesional de gestión operativa para barberías. Coordina
              a tu equipo, asigna servicios en tiempo real, genera reportes
              automáticos y controla cada detalle de tu negocio desde una sola
              plataforma. Recupera horas de trabajo administrativo y enfócate en
              lo que realmente importa: tus clientes.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4'>
              <Button
                size='lg'
                className='text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto'
                onClick={sendDemoRequest}
              >
                Solicitar Demostración
              </Button>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <section
          className='border-y border-border'
          aria-label='Estadísticas de eficiencia'
        >
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border'>
              <div className='p-6 sm:p-8 md:p-12 text-center sm:text-left'>
                <div className='text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-primary'>
                  7hrs+
                </div>
                <div className='text-muted-foreground text-sm sm:text-base'>
                  Ahorradas por semana en gestión administrativa
                </div>
              </div>
              <div className='p-6 sm:p-8 md:p-12 text-center sm:text-left'>
                <div className='text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-primary'>
                  100%
                </div>
                <div className='text-muted-foreground text-sm sm:text-base'>
                  Visibilidad operativa en tiempo real
                </div>
              </div>
              <div className='p-6 sm:p-8 md:p-12 text-center sm:text-left sm:col-span-2 lg:col-span-1'>
                <div className='text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-primary'>
                  0
                </div>
                <div className='text-muted-foreground text-sm sm:text-base'>
                  Papeles, confusión y errores manuales
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className='container mx-auto px-4 py-16 sm:py-20 md:py-32'
          aria-labelledby='features-heading'
        >
          <div className='text-center mb-12 sm:mb-16'>
            <h2
              id='features-heading'
              className='text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance'
            >
              Control Operativo Completo en Tiempo Real
            </h2>
            <p className='text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4'>
              Software diseñado específicamente para simplificar la gestión
              diaria de tu barbería
            </p>
          </div>

          <div className='grid gap-12 sm:gap-16 md:gap-20'>
            {/* Feature 1 - Service Management */}
            <article className='grid md:grid-cols-2 gap-6 sm:gap-8 items-center'>
              <div className='space-y-4 sm:space-y-6'>
                <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium'>
                  <ClipboardList className='w-4 h-4' />
                  Gestión de Servicios en Vivo
                </div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                  Coordina Servicios al Instante
                </h3>
                <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
                  ¿Pierdes tiempo anotando servicios en papel o tratando de
                  recordar quién está atendiendo a cada cliente? Con nuestro
                  sistema de gestión para barberías, registra cada servicio en
                  segundos, asigna barberos específicos y mantén un seguimiento
                  preciso de todo lo que sucede en tu local. Cada servicio queda
                  documentado con hora, barbero y precio, eliminando confusiones
                  y mejorando la organización de tu equipo.
                </p>
                <ul className='space-y-3'>
                  <li className='flex gap-3 items-start'>
                    <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                    <span className='text-sm sm:text-base text-muted-foreground'>
                      Registra servicios de barbería en tiempo real desde
                      cualquier dispositivo
                    </span>
                  </li>
                  <li className='flex gap-3 items-start'>
                    <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                    <span className='text-sm sm:text-base text-muted-foreground'>
                      Asigna servicios específicos a cada barbero según su
                      especialidad
                    </span>
                  </li>
                  <li className='flex gap-3 items-start'>
                    <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                    <span className='text-sm sm:text-base text-muted-foreground'>
                      Visualiza el progreso del día y servicios completados al
                      instante
                    </span>
                  </li>
                </ul>
              </div>
              <div className='order-first md:order-last'>
                <Card className='overflow-hidden border-border bg-card'>
                  <CardContent className='p-0'>
                    <Image
                      src='/images/design-mode/home_big.png'
                      alt='Interfaz de gestión de servicios de barbería en tiempo real mostrando selección de servicios como corte moderno, corte clásico, barba y marcado con precios'
                      width={800}
                      height={600}
                      className='w-full h-auto'
                      loading='lazy'
                    />
                  </CardContent>
                </Card>
              </div>
            </article>

            {/* Feature 2 - Reports & Analytics */}
            <article className='grid md:grid-cols-2 gap-6 sm:gap-8 items-center'>
              <div className='space-y-4 sm:space-y-6'>
                <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium'>
                  <BarChart3 className='w-4 h-4' />
                  Reportes Operativos Inteligentes
                </div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                  Toma Decisiones Basadas en Datos Reales
                </h3>
                <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
                  Olvídate de las hojas de cálculo y los cálculos manuales.
                  Accede a reportes detallados y analytics que te muestran
                  exactamente cuánto ha generado cada barbero, qué servicios son
                  los más solicitados y en qué horarios tu negocio es más
                  productivo. Identifica oportunidades de mejora, reconoce a tu
                  equipo más eficiente y optimiza tus recursos para maximizar
                  ganancias. Todo actualizado en tiempo real, sin esfuerzo
                  adicional.
                </p>
                <ul className='space-y-3'>
                  <li className='flex gap-3 items-start'>
                    <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                    <span className='text-sm sm:text-base text-muted-foreground'>
                      Consulta ingresos diarios, semanales y mensuales por
                      barbero
                    </span>
                  </li>
                  <li className='flex gap-3 items-start'>
                    <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                    <span className='text-sm sm:text-base text-muted-foreground'>
                      Identifica servicios más rentables y horarios pico de
                      actividad
                    </span>
                  </li>
                  <li className='flex gap-3 items-start'>
                    <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                    <span className='text-sm sm:text-base text-muted-foreground'>
                      Gráficos visuales que simplifican el análisis de tu
                      negocio
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <Card className='overflow-hidden border-border bg-card'>
                  <CardContent className='p-0'>
                    <Image
                      src='/images/design-mode/reports_large_scree.png'
                      alt='Dashboard de reportes y analytics para barberías mostrando ingresos diarios, distribución de ganancias, servicios por tipo y rendimiento por hora con gráficos interactivos'
                      width={800}
                      height={600}
                      className='w-full h-auto'
                      loading='lazy'
                    />
                  </CardContent>
                </Card>
              </div>
            </article>

            {/* Feature 3 - Team Management */}
            <article className='grid md:grid-cols-2 gap-6 sm:gap-8 items-center'>
              <div className='space-y-4 sm:space-y-6'>
                <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium'>
                  <Users className='w-4 h-4' />
                  Acceso Seguro para Todo el Equipo
                </div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                  Tu Equipo Conectado y Coordinado
                </h3>
                <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
                  Dale a cada miembro de tu equipo acceso personalizado según su
                  rol en la gestión de personal. Los barberos pueden registrar
                  sus propios servicios y consultar su rendimiento, mientras tú
                  como administrador mantienes el control total sobre la
                  información sensible del negocio. Sistema de autenticación
                  seguro con códigos de verificación por correo electrónico que
                  garantiza que solo personas autorizadas accedan a tu
                  información. Sin contraseñas complicadas, solo simplicidad y
                  seguridad.
                </p>
                <ul className='space-y-3'>
                  <li className='flex gap-3 items-start'>
                    <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                    <span className='text-sm sm:text-base text-muted-foreground'>
                      Roles diferenciados: Administrador y Barbero con permisos
                      específicos
                    </span>
                  </li>
                  <li className='flex gap-3 items-start'>
                    <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                    <span className='text-sm sm:text-base text-muted-foreground'>
                      Autenticación segura con códigos de verificación por email
                    </span>
                  </li>
                  <li className='flex gap-3 items-start'>
                    <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                    <span className='text-sm sm:text-base text-muted-foreground'>
                      Cada barbero ve su propio rendimiento y servicios
                      realizados
                    </span>
                  </li>
                </ul>
              </div>
              <div className='order-first md:order-last'>
                <Card className='overflow-hidden border-border bg-card'>
                  <CardContent className='p-0'>
                    <Image
                      src='/images/design-mode/login_with_code.png'
                      alt='Sistema de autenticación seguro para barbería con verificación por código de 6 dígitos enviado por correo electrónico'
                      width={800}
                      height={600}
                      className='w-full h-auto'
                      loading='lazy'
                    />
                  </CardContent>
                </Card>
              </div>
            </article>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          className='border-y border-border bg-secondary/30'
          aria-labelledby='benefits-heading'
        >
          <div className='container mx-auto px-4 py-16 sm:py-20 md:py-32'>
            <div className='max-w-4xl mx-auto'>
              <h2
                id='benefits-heading'
                className='text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center'
              >
                Beneficios que Transforman Tu Día a Día
              </h2>
              <div className='grid sm:grid-cols-2 gap-6 sm:gap-8'>
                <Card className='border-border bg-card'>
                  <CardContent className='p-6 sm:p-8 space-y-4'>
                    <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                      <Clock className='w-6 h-6 text-primary' />
                    </div>
                    <h3 className='text-xl sm:text-2xl font-bold'>
                      Ahorra Horas de Trabajo Administrativo
                    </h3>
                    <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                      Elimina el papeleo, las anotaciones manuales y los
                      cálculos de fin de día. Lo que antes te tomaba horas en
                      gestión administrativa, ahora lo haces en minutos. Dedica
                      ese tiempo a atender más clientes o simplemente a
                      descansar.
                    </p>
                  </CardContent>
                </Card>

                <Card className='border-border bg-card'>
                  <CardContent className='p-6 sm:p-8 space-y-4'>
                    <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                      <Users className='w-6 h-6 text-primary' />
                    </div>
                    <h3 className='text-xl sm:text-2xl font-bold'>
                      Gestión Inteligente de Personal
                    </h3>
                    <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                      Asigna roles, controla accesos y define especialidades
                      para cada barbero. Gestiona múltiples ubicaciones desde un
                      solo lugar y mantén a tu equipo organizado y motivado con
                      métricas claras de rendimiento.
                    </p>
                  </CardContent>
                </Card>

                <Card className='border-border bg-card'>
                  <CardContent className='p-6 sm:p-8 space-y-4'>
                    <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                      <Zap className='w-6 h-6 text-primary' />
                    </div>
                    <h3 className='text-xl sm:text-2xl font-bold'>
                      Operaciones Más Rápidas y Eficientes
                    </h3>
                    <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                      Registra servicios en segundos, consulta información al
                      instante y coordina a tu equipo sin complicaciones. La
                      velocidad de operación se traduce en más clientes
                      atendidos y mayores ingresos para tu barbería.
                    </p>
                  </CardContent>
                </Card>

                <Card className='border-border bg-card'>
                  <CardContent className='p-6 sm:p-8 space-y-4'>
                    <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                      <TrendingUp className='w-6 h-6 text-primary' />
                    </div>
                    <h3 className='text-xl sm:text-2xl font-bold'>
                      Decisiones Estratégicas Informadas
                    </h3>
                    <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                      Accede a métricas de rendimiento en tiempo real,
                      identifica tendencias y optimiza precios y servicios.
                      Conoce exactamente qué funciona en tu negocio y qué
                      necesita mejorar para crecer de forma sostenible.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section
          className='container mx-auto px-4 py-16 sm:py-20 md:py-32'
          aria-labelledby='customization-heading'
        >
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-12 sm:mb-16 space-y-4'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4'>
                <Sparkles className='w-4 h-4' />
                Personalización Total
              </div>
              <h2
                id='customization-heading'
                className='text-3xl sm:text-4xl md:text-5xl font-bold text-balance'
              >
                Tu Marca, Tu Identidad, Tu App
              </h2>
              <p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed'>
                Cada barbería es única, y tu aplicación también debe serlo.
                Personaliza completamente el sistema con tu marca, colores
                corporativos, logo y nombre de tu negocio. Ofrece a tu equipo y
                clientes una experiencia 100% alineada con tu identidad visual,
                sin comprometer la funcionalidad profesional que necesitas.
              </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
              <Card className='border-border bg-card hover:bg-secondary/50 transition-colors'>
                <CardContent className='p-6 space-y-4 text-center'>
                  <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto'>
                    <ImageIcon className='w-7 h-7 text-primary' />
                  </div>
                  <h3 className='text-lg font-bold'>Logo Personalizado</h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    Integra el logo de tu barbería en toda la aplicación para
                    reforzar tu identidad de marca
                  </p>
                </CardContent>
              </Card>

              <Card className='border-border bg-card hover:bg-secondary/50 transition-colors'>
                <CardContent className='p-6 space-y-4 text-center'>
                  <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto'>
                    <Palette className='w-7 h-7 text-primary' />
                  </div>
                  <h3 className='text-lg font-bold'>Colores Corporativos</h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    Adapta la paleta de colores completa para que coincida
                    perfectamente con tu branding
                  </p>
                </CardContent>
              </Card>

              <Card className='border-border bg-card hover:bg-secondary/50 transition-colors'>
                <CardContent className='p-6 space-y-4 text-center'>
                  <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto'>
                    <Type className='w-7 h-7 text-primary' />
                  </div>
                  <h3 className='text-lg font-bold'>Nombre de Tu Negocio</h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    Personaliza el nombre de la aplicación con el de tu barbería
                    en todas las pantallas
                  </p>
                </CardContent>
              </Card>

              <Card className='border-border bg-card hover:bg-secondary/50 transition-colors'>
                <CardContent className='p-6 space-y-4 text-center'>
                  <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto'>
                    <Sparkles className='w-7 h-7 text-primary' />
                  </div>
                  <h3 className='text-lg font-bold'>Elementos Visuales</h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    Ajusta tipografías, iconos y otros detalles visuales según
                    tus preferencias
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className='border-border bg-gradient-to-br from-secondary/50 to-secondary/20'>
              <CardContent className='p-8 sm:p-12'>
                <div className='grid md:grid-cols-2 gap-8 items-center'>
                  <div className='space-y-6'>
                    <h3 className='text-2xl sm:text-3xl font-bold'>
                      Solución White-Label Completa
                    </h3>
                    <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
                      No es solo un software genérico. Es TU plataforma de
                      gestión con tu identidad visual completa. Perfecto para
                      barberías que quieren proyectar profesionalismo y
                      coherencia de marca en cada interacción con su equipo.
                    </p>
                    <ul className='space-y-3'>
                      <li className='flex gap-3 items-start'>
                        <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                        <span className='text-sm sm:text-base text-muted-foreground'>
                          Personalización completa sin costos adicionales
                        </span>
                      </li>
                      <li className='flex gap-3 items-start'>
                        <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                        <span className='text-sm sm:text-base text-muted-foreground'>
                          Implementación de tu branding en menos de 24 horas
                        </span>
                      </li>
                      <li className='flex gap-3 items-start'>
                        <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                        <span className='text-sm sm:text-base text-muted-foreground'>
                          Actualizaciones de diseño cuando lo necesites
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className='order-first md:order-last'>
                    <div className='relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 flex items-center justify-center'>
                      <div className='text-center space-y-4'>
                        <div className='w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6'>
                          <Palette className='w-12 h-12 text-primary' />
                        </div>
                        <p className='text-lg font-semibold'>Tu Logo Aquí</p>
                        <p className='text-sm text-muted-foreground px-4'>
                          Visualiza tu marca en cada pantalla de la aplicación
                        </p>
                        <div className='flex gap-2 justify-center pt-4'>
                          <div className='w-8 h-8 rounded-full bg-red-500/80'></div>
                          <div className='w-8 h-8 rounded-full bg-blue-500/80'></div>
                          <div className='w-8 h-8 rounded-full bg-amber-500/80'></div>
                          <div className='w-8 h-8 rounded-full bg-emerald-500/80'></div>
                        </div>
                        <p className='text-xs text-muted-foreground'>
                          Tus colores corporativos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section
          className='border-y border-border bg-secondary/30 overflow-hidden'
          aria-labelledby='testimonials-heading'
        >
          <div className='container mx-auto px-4 py-16 sm:py-20 md:py-32'>
            <div className='max-w-6xl mx-auto'>
              <div className='text-center mb-12 sm:mb-16 space-y-4'>
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4'>
                  <Quote className='w-4 h-4' />
                  Testimonios de Clientes
                </div>
                <h2
                  id='testimonials-heading'
                  className='text-3xl sm:text-4xl md:text-5xl font-bold text-balance'
                >
                  Barberías que Confían en Nosotros
                </h2>
                <p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed'>
                  Descubre cómo otras barberías han transformado sus operaciones
                  y mejorado su eficiencia con nuestro sistema de gestión
                  profesional
                </p>
              </div>

              <div className='relative'>
                <div className='absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none' />
                <div className='absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none' />

                <div className='flex animate-scroll-left'>
                  {[
                    {
                      initials: 'CB',
                      color:
                        'from-primary/20 to-primary/5 border-primary/20 text-primary',
                      quote:
                        'Desde que implementamos este sistema, hemos reducido el tiempo de gestión administrativa en un 70%. Ahora puedo enfocarme en atender a mis clientes y mi equipo está más organizado que nunca.',
                      name: 'Classic Barber Studio',
                      location: 'San José, Costa Rica',
                      url: 'https://example.com',
                    },
                    {
                      initials: 'EB',
                      color:
                        'from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-500',
                      quote:
                        'La facilidad de uso es impresionante. Mi equipo aprendió a usar el sistema en menos de una hora. Los reportes en tiempo real nos han ayudado a identificar nuestros servicios más rentables.',
                      name: 'Elite Barbershop',
                      location: 'Heredia, Costa Rica',
                      url: 'https://example.com',
                    },
                    {
                      initials: 'UB',
                      color:
                        'from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-500',
                      quote:
                        'Gestionar tres ubicaciones era un caos antes de este sistema. Ahora puedo ver en tiempo real qué está pasando en cada local. La personalización con nuestro logo le da un toque muy profesional.',
                      name: 'Urban Barber Co.',
                      location: 'Cartago, Costa Rica',
                      url: 'https://example.com',
                    },
                    {
                      initials: 'KB',
                      color:
                        'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-500',
                      quote:
                        'Este sistema me permite mostrarle a cada barbero su rendimiento diario y reconocer a los más productivos. La transparencia ha mejorado la moral y la eficiencia del equipo.',
                      name: 'Kings Barbershop',
                      location: 'Alajuela, Costa Rica',
                      url: 'https://example.com',
                    },
                  ].map((testimonial, index) => (
                    <Card
                      key={`first-${index}`}
                      className='flex-shrink-0 w-[320px] sm:w-[380px] mx-3 border-border bg-card hover:bg-secondary/50 transition-all duration-300 group'
                    >
                      <CardContent className='p-5 sm:p-6 space-y-4'>
                        <div className='flex items-center justify-between'>
                          <div
                            className={`w-14 h-14 rounded-lg bg-gradient-to-br ${testimonial.color.split(' ').slice(0, 3).join(' ')} flex items-center justify-center`}
                          >
                            <div
                              className={`text-lg font-bold ${testimonial.color.split(' ').slice(3).join(' ')}`}
                            >
                              {testimonial.initials}
                            </div>
                          </div>
                          <Quote className='w-6 h-6 text-primary/20' />
                        </div>
                        <blockquote className='text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-4'>
                          {testimonial.quote}
                        </blockquote>
                        <div className='flex items-center justify-between pt-3 border-t border-border'>
                          <div>
                            <p className='font-semibold text-foreground text-sm'>
                              {testimonial.name}
                            </p>
                            <p className='text-xs text-muted-foreground'>
                              {testimonial.location}
                            </p>
                          </div>
                          <a
                            href={testimonial.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors'
                            aria-label={`Visitar sitio web de ${testimonial.name}`}
                          >
                            Visitar
                            <ExternalLink className='w-3.5 h-3.5' />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {[
                    {
                      initials: 'CB',
                      color:
                        'from-primary/20 to-primary/5 border-primary/20 text-primary',
                      quote:
                        'Desde que implementamos este sistema, hemos reducido el tiempo de gestión administrativa en un 70%. Ahora puedo enfocarme en atender a mis clientes y mi equipo está más organizado que nunca.',
                      name: 'Classic Barber Studio',
                      location: 'San José, Costa Rica',
                      url: 'https://example.com',
                    },
                    {
                      initials: 'EB',
                      color:
                        'from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-500',
                      quote:
                        'La facilidad de uso es impresionante. Mi equipo aprendió a usar el sistema en menos de una hora. Los reportes en tiempo real nos han ayudado a identificar nuestros servicios más rentables.',
                      name: 'Elite Barbershop',
                      location: 'Heredia, Costa Rica',
                      url: 'https://example.com',
                    },
                    {
                      initials: 'UB',
                      color:
                        'from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-500',
                      quote:
                        'Gestionar tres ubicaciones era un caos antes de este sistema. Ahora puedo ver en tiempo real qué está pasando en cada local. La personalización con nuestro logo le da un toque muy profesional.',
                      name: 'Urban Barber Co.',
                      location: 'Cartago, Costa Rica',
                      url: 'https://example.com',
                    },
                    {
                      initials: 'KB',
                      color:
                        'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-500',
                      quote:
                        'Este sistema me permite mostrarle a cada barbero su rendimiento diario y reconocer a los más productivos. La transparencia ha mejorado la moral y la eficiencia del equipo.',
                      name: 'Kings Barbershop',
                      location: 'Alajuela, Costa Rica',
                      url: 'https://example.com',
                    },
                  ].map((testimonial, index) => (
                    <Card
                      key={`second-${index}`}
                      className='flex-shrink-0 w-[320px] sm:w-[380px] mx-3 border-border bg-card hover:bg-secondary/50 transition-all duration-300 group'
                    >
                      <CardContent className='p-5 sm:p-6 space-y-4'>
                        <div className='flex items-center justify-between'>
                          <div
                            className={`w-14 h-14 rounded-lg bg-gradient-to-br ${testimonial.color.split(' ').slice(0, 3).join(' ')} flex items-center justify-center`}
                          >
                            <div
                              className={`text-lg font-bold ${testimonial.color.split(' ').slice(3).join(' ')}`}
                            >
                              {testimonial.initials}
                            </div>
                          </div>
                          <Quote className='w-6 h-6 text-primary/20' />
                        </div>
                        <blockquote className='text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-4'>
                          {testimonial.quote}
                        </blockquote>
                        <div className='flex items-center justify-between pt-3 border-t border-border'>
                          <div>
                            <p className='font-semibold text-foreground text-sm'>
                              {testimonial.name}
                            </p>
                            <p className='text-xs text-muted-foreground'>
                              {testimonial.location}
                            </p>
                          </div>
                          <a
                            href={testimonial.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors'
                            aria-label={`Visitar sitio web de ${testimonial.name}`}
                          >
                            Visitar
                            <ExternalLink className='w-3.5 h-3.5' />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className='mt-12 sm:mt-16 text-center'>
                <div className='inline-flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                    <Check className='w-5 h-5 text-primary' />
                    <span className='text-sm sm:text-base'>
                      Implementación en 24-48 horas
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Check className='w-5 h-5 text-primary' />
                    <span className='text-sm sm:text-base'>
                      Soporte técnico incluido
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Check className='w-5 h-5 text-primary' />
                    <span className='text-sm sm:text-base'>
                      Capacitación personalizada
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section
          className='border-y border-border bg-secondary/30'
          aria-labelledby='contact-heading'
        >
          <div className='container mx-auto px-4 py-16 sm:py-20 md:py-32'>
            <div className='max-w-4xl mx-auto'>
              <div className='text-center mb-12 sm:mb-16'>
                <h2
                  id='contact-heading'
                  className='text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance'
                >
                  ¿Listo para Transformar tu Barbería?
                </h2>
                <p className='text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4'>
                  Contáctanos hoy mismo y descubre cómo Studio Barbershop Pro
                  puede revolucionar las operaciones de tu negocio
                </p>
              </div>

              <div className='grid sm:grid-cols-3 gap-6 sm:gap-8'>
                {/* WhatsApp */}
                <Card
                  className='border-border bg-card hover:bg-secondary/50 transition-colors cursor-pointer group'
                  onClick={openWhatsApp}
                >
                  <CardContent className='p-6 sm:p-8 space-y-4 text-center'>
                    <div className='w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto group-hover:bg-green-500/20 transition-colors'>
                      <MessageCircle className='w-8 h-8 text-green-500' />
                    </div>
                    <h3 className='text-xl font-bold'>WhatsApp</h3>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      Chatea con nosotros directamente
                    </p>
                    <p className='text-sm font-medium text-green-500'>
                      +506 8852-7576
                    </p>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card
                  className='border-border bg-card hover:bg-secondary/50 transition-colors cursor-pointer group'
                  onClick={openEmail}
                >
                  <CardContent className='p-6 sm:p-8 space-y-4 text-center'>
                    <div className='w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto group-hover:bg-blue-500/20 transition-colors'>
                      <Mail className='w-8 h-8 text-blue-500' />
                    </div>
                    <h3 className='text-xl font-bold'>Email</h3>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      Envíanos un mensaje detallado
                    </p>
                    <p className='text-sm font-medium text-blue-500 break-all'>
                      contact.barbershop.studio@gmail.com
                    </p>
                  </CardContent>
                </Card>

                {/* Calendly */}
                <Card
                  className='border-border bg-card hover:bg-secondary/50 transition-colors cursor-pointer group'
                  onClick={openCalendly}
                >
                  <CardContent className='p-6 sm:p-8 space-y-4 text-center'>
                    <div className='w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto group-hover:bg-purple-500/20 transition-colors'>
                      <Calendar className='w-8 h-8 text-purple-500' />
                    </div>
                    <h3 className='text-xl font-bold'>Agenda una Reunión</h3>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      Reserva una cita de 30 minutos
                    </p>
                    <p className='text-sm font-medium text-purple-500'>
                      Calendly
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className='mt-12 text-center'>
                <p className='text-sm text-muted-foreground'>
                  <strong>Tiempo de respuesta:</strong> Menos de 3 horas en
                  WhatsApp • 24 horas por email
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='border-t border-border'>
          <div className='container mx-auto px-4 py-8 sm:py-12'>
            <div className='text-center space-y-4'>
              <p className='text-sm sm:text-base text-muted-foreground'>
                Desarrollo por:{' '}
                <a
                  href='https://geovannycordero.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-foreground hover:text-primary transition-colors font-medium'
                >
                  geovannycordero.com
                </a>
              </p>
              <p className='text-xs sm:text-sm text-muted-foreground'>
                © 2025 Studio Barbershop Pro. Sistema de gestión para
                barberías. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
