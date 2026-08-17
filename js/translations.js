const es = {
  meta: {
    jsonLdDescription:
      'Sistema profesional de gestión operativa para barberías. Coordina servicios en tiempo real, gestiona tu equipo y genera reportes automáticos.',
  },
  actions: {
    demoRequest: {
      subject: 'Solicitud de Demostración - Studio Barbershop Pro',
      body: `Hola,

Me interesa solicitar una demostración del sistema Studio Barbershop Pro para mi barbería.

Por favor, contácteme para coordinar una demostración personalizada.

Este es mi número de whatsapp: [incluir número de whatsapp]

Gracias.`,
    },
    whatsappMessage:
      'Hola, me interesa conocer más sobre Studio Barbershop Pro para mi barbería.',
    contactEmail: {
      subject: 'Consulta sobre Studio Barbershop Pro',
      body: `Hola,

Me interesa conocer más sobre el sistema Studio Barbershop Pro para mi barbería.

Por favor, contácteme para coordinar una demostración.

Gracias.`,
    },
  },
  hero: {
    logoAlt:
      'Studio Barbershop Pro - Sistema de gestión profesional para barberías',
    title: 'Gestiona las Operaciones de Tu Barbería con Eficiencia Total',
    description:
      'Sistema profesional de gestión operativa para barberías. Coordina a tu equipo, asigna servicios en tiempo real, genera reportes automáticos y controla cada detalle de tu negocio desde una sola plataforma. Recupera horas de trabajo administrativo y enfócate en lo que realmente importa: tus clientes.',
    cta: 'Solicitar Demostración',
  },
  stats: {
    ariaLabel: 'Estadísticas de eficiencia',
    hours: {
      value: '7hrs+',
      label: 'Ahorradas por semana en gestión administrativa',
    },
    visibility: {
      value: '100%',
      label: 'Visibilidad operativa en tiempo real',
    },
    errors: {
      value: '0',
      label: 'Papeles, confusión y errores manuales',
    },
  },
  features: {
    heading: 'Control Operativo Completo en Tiempo Real',
    subheading:
      'Software diseñado específicamente para simplificar la gestión diaria de tu barbería',
    serviceManagement: {
      badge: 'Gestión de Servicios en Vivo',
      title: 'Coordina Servicios al Instante',
      description:
        '¿Pierdes tiempo anotando servicios en papel o tratando de recordar quién está atendiendo a cada cliente? Con nuestro sistema de gestión para barberías, registra cada servicio en segundos, asigna barberos específicos y mantén un seguimiento preciso de todo lo que sucede en tu local. Cada servicio queda documentado con hora, barbero y precio, eliminando confusiones y mejorando la organización de tu equipo.',
      bullets: [
        'Registra servicios de barbería en tiempo real desde cualquier dispositivo',
        'Asigna servicios específicos a cada barbero según su especialidad',
        'Visualiza el progreso del día y servicios completados al instante',
      ],
      imageAlt:
        'Interfaz de gestión de servicios de barbería en tiempo real mostrando selección de servicios como corte moderno, corte clásico, barba y marcado con precios',
    },
    reports: {
      badge: 'Reportes Operativos Inteligentes',
      title: 'Toma Decisiones Basadas en Datos Reales',
      description:
        'Olvídate de las hojas de cálculo y los cálculos manuales. Accede a reportes detallados y analytics que te muestran exactamente cuánto ha generado cada barbero, qué servicios son los más solicitados y en qué horarios tu negocio es más productivo. Identifica oportunidades de mejora, reconoce a tu equipo más eficiente y optimiza tus recursos para maximizar ganancias. Todo actualizado en tiempo real, sin esfuerzo adicional.',
      bullets: [
        'Consulta ingresos diarios, semanales y mensuales por barbero',
        'Identifica servicios más rentables y horarios pico de actividad',
        'Gráficos visuales que simplifican el análisis de tu negocio',
      ],
      imageAlt:
        'Dashboard de reportes y analytics para barberías mostrando ingresos diarios, distribución de ganancias, servicios por tipo y rendimiento por hora con gráficos interactivos',
    },
    team: {
      badge: 'Acceso Seguro para Todo el Equipo',
      title: 'Tu Equipo Conectado y Coordinado',
      description:
        'Dale a cada miembro de tu equipo acceso personalizado según su rol en la gestión de personal. Los barberos pueden registrar sus propios servicios y consultar su rendimiento, mientras tú como administrador mantienes el control total sobre la información sensible del negocio. Sistema de autenticación seguro con códigos de verificación por correo electrónico que garantiza que solo personas autorizadas accedan a tu información. Sin contraseñas complicadas, solo simplicidad y seguridad.',
      bullets: [
        'Roles diferenciados: Administrador y Barbero con permisos específicos',
        'Autenticación segura con códigos de verificación por email',
        'Cada barbero ve su propio rendimiento y servicios realizados',
      ],
      imageAlt:
        'Sistema de autenticación seguro para barbería con verificación por código de 6 dígitos enviado por correo electrónico',
    },
  },
  benefits: {
    heading: 'Beneficios que Transforman Tu Día a Día',
    cards: [
      {
        title: 'Ahorra Horas de Trabajo Administrativo',
        description:
          'Elimina el papeleo, las anotaciones manuales y los cálculos de fin de día. Lo que antes te tomaba horas en gestión administrativa, ahora lo haces en minutos. Dedica ese tiempo a atender más clientes o simplemente a descansar.',
      },
      {
        title: 'Gestión Inteligente de Personal',
        description:
          'Asigna roles, controla accesos y define especialidades para cada barbero. Gestiona múltiples ubicaciones desde un solo lugar y mantén a tu equipo organizado y motivado con métricas claras de rendimiento.',
      },
      {
        title: 'Operaciones Más Rápidas y Eficientes',
        description:
          'Registra servicios en segundos, consulta información al instante y coordina a tu equipo sin complicaciones. La velocidad de operación se traduce en más clientes atendidos y mayores ingresos para tu barbería.',
      },
      {
        title: 'Decisiones Estratégicas Informadas',
        description:
          'Accede a métricas de rendimiento en tiempo real, identifica tendencias y optimiza precios y servicios. Conoce exactamente qué funciona en tu negocio y qué necesita mejorar para crecer de forma sostenible.',
      },
    ],
  },
  customization: {
    badge: 'Personalización Total',
    heading: 'Tu Marca, Tu Identidad, Tu App',
    description:
      'Cada barbería es única, y tu aplicación también debe serlo. Personaliza completamente el sistema con tu marca, colores corporativos, logo y nombre de tu negocio. Ofrece a tu equipo y clientes una experiencia 100% alineada con tu identidad visual, sin comprometer la funcionalidad profesional que necesitas.',
    items: [
      {
        title: 'Logo Personalizado',
        description:
          'Integra el logo de tu barbería en toda la aplicación para reforzar tu identidad de marca',
      },
      {
        title: 'Colores Corporativos',
        description:
          'Adapta la paleta de colores completa para que coincida perfectamente con tu branding',
      },
      {
        title: 'Nombre de Tu Negocio',
        description:
          'Personaliza el nombre de la aplicación con el de tu barbería en todas las pantallas',
      },
      {
        title: 'Elementos Visuales',
        description:
          'Ajusta tipografías, iconos y otros detalles visuales según tus preferencias',
      },
    ],
    whiteLabel: {
      title: 'Solución White-Label Completa',
      description:
        'No es solo un software genérico. Es TU plataforma de gestión con tu identidad visual completa. Perfecto para barberías que quieren proyectar profesionalismo y coherencia de marca en cada interacción con su equipo.',
      bullets: [
        'Personalización completa sin costos adicionales',
        'Implementación de tu branding en menos de 24 horas',
        'Actualizaciones de diseño cuando lo necesites',
      ],
      logoPlaceholderTitle: 'Tu Logo Aquí',
      logoPlaceholderDescription:
        'Visualiza tu marca en cada pantalla de la aplicación',
      colorsCaption: 'Tus colores corporativos',
    },
  },
  contact: {
    heading: '¿Listo para Transformar tu Barbería?',
    description:
      'Contáctanos hoy mismo y descubre cómo Studio Barbershop Pro puede revolucionar las operaciones de tu negocio',
    whatsapp: {
      title: 'WhatsApp',
      description: 'Chatea con nosotros directamente',
    },
    email: { title: 'Email', description: 'Envíanos un mensaje detallado' },
    calendly: {
      title: 'Agenda una Reunión',
      description: 'Reserva una cita de 30 minutos',
    },
    responseTime: {
      prefix: 'Tiempo de respuesta:',
      rest: 'Menos de 3 horas en WhatsApp • 24 horas por email',
    },
  },
  footer: {
    developedByPrefix: 'Desarrollo por:',
    copyright:
      '© 2025 Studio Barbershop Pro. Sistema de gestión para barberías. Todos los derechos reservados.',
  },
};

const en = {
  meta: {
    jsonLdDescription:
      'Professional operations management system for barbershops. Coordinate services in real time, manage your team, and generate automatic reports.',
  },
  actions: {
    demoRequest: {
      subject: 'Demo Request - Studio Barbershop Pro',
      body: `Hi,

I'm interested in requesting a demo of the Studio Barbershop Pro system for my barbershop.

Please contact me to schedule a personalized demonstration.

Here is my WhatsApp number: [include your WhatsApp number]

Thank you.`,
    },
    whatsappMessage:
      "Hi, I'd like to learn more about Studio Barbershop Pro for my barbershop.",
    contactEmail: {
      subject: 'Inquiry about Studio Barbershop Pro',
      body: `Hi,

I'm interested in learning more about the Studio Barbershop Pro system for my barbershop.

Please contact me to schedule a demonstration.

Thank you.`,
    },
  },
  hero: {
    logoAlt:
      'Studio Barbershop Pro - Professional management system for barbershops',
    title: 'Run Your Barbershop Operations With Total Efficiency',
    description:
      'A professional operations management system for barbershops. Coordinate your team, assign services in real time, generate automatic reports, and control every detail of your business from a single platform. Reclaim hours of administrative work and focus on what really matters: your clients.',
    cta: 'Request a Demo',
  },
  stats: {
    ariaLabel: 'Efficiency statistics',
    hours: {
      value: '7hrs+',
      label: 'Saved per week on administrative work',
    },
    visibility: {
      value: '100%',
      label: 'Real-time operational visibility',
    },
    errors: {
      value: '0',
      label: 'Paperwork, confusion, and manual errors',
    },
  },
  features: {
    heading: 'Complete Real-Time Operational Control',
    subheading:
      "Software designed specifically to simplify your barbershop's daily management",
    serviceManagement: {
      badge: 'Live Service Management',
      title: 'Coordinate Services Instantly',
      description:
        "Wasting time jotting down services on paper or trying to remember who's serving each client? With our barbershop management system, log every service in seconds, assign specific barbers, and keep an accurate record of everything happening at your shop. Every service is logged with time, barber, and price, eliminating confusion and keeping your team organized.",
      bullets: [
        'Log barbershop services in real time from any device',
        'Assign specific services to each barber based on their specialty',
        "See the day's progress and completed services instantly",
      ],
      imageAlt:
        'Real-time barbershop service management interface showing service selection such as modern cut, classic cut, beard trim, and pricing',
    },
    reports: {
      badge: 'Smart Operational Reports',
      title: 'Make Decisions Based on Real Data',
      description:
        'Forget spreadsheets and manual calculations. Access detailed reports and analytics showing exactly how much each barber has earned, which services are most requested, and when your business is busiest. Spot opportunities for improvement, recognize your most efficient team members, and optimize resources to maximize profit. All updated in real time, with zero extra effort.',
      bullets: [
        'Check daily, weekly, and monthly income per barber',
        'Identify your most profitable services and peak hours',
        'Visual charts that make analyzing your business simple',
      ],
      imageAlt:
        'Barbershop reports and analytics dashboard showing daily income, revenue breakdown, services by type, and hourly performance with interactive charts',
    },
    team: {
      badge: 'Secure Access for the Whole Team',
      title: 'Your Team, Connected and Coordinated',
      description:
        'Give each team member personalized access based on their role. Barbers can log their own services and check their performance, while you as the admin keep full control over sensitive business information. A secure authentication system with email verification codes ensures only authorized people can access your data. No complicated passwords — just simplicity and security.',
      bullets: [
        'Distinct roles: Admin and Barber with specific permissions',
        'Secure authentication with email verification codes',
        'Each barber sees their own performance and completed services',
      ],
      imageAlt:
        'Secure barbershop authentication system with a 6-digit verification code sent by email',
    },
  },
  benefits: {
    heading: 'Benefits That Transform Your Day-to-Day',
    cards: [
      {
        title: 'Save Hours of Administrative Work',
        description:
          'Eliminate paperwork, manual notes, and end-of-day calculations. What used to take hours of admin work now takes minutes. Spend that time serving more clients — or just take a break.',
      },
      {
        title: 'Smart Staff Management',
        description:
          'Assign roles, control access, and define specialties for each barber. Manage multiple locations from one place and keep your team organized and motivated with clear performance metrics.',
      },
      {
        title: 'Faster, More Efficient Operations',
        description:
          'Log services in seconds, check information instantly, and coordinate your team without hassle. Faster operations mean more clients served and more revenue for your barbershop.',
      },
      {
        title: 'Informed Strategic Decisions',
        description:
          'Access real-time performance metrics, spot trends, and optimize pricing and services. Know exactly what works in your business and what needs improvement to grow sustainably.',
      },
    ],
  },
  customization: {
    badge: 'Total Customization',
    heading: 'Your Brand, Your Identity, Your App',
    description:
      "Every barbershop is unique, and your app should be too. Fully customize the system with your brand, corporate colors, logo, and business name. Give your team and clients an experience that's 100% aligned with your visual identity, without compromising the professional functionality you need.",
    items: [
      {
        title: 'Custom Logo',
        description:
          'Add your barbershop logo throughout the app to reinforce your brand identity',
      },
      {
        title: 'Corporate Colors',
        description:
          'Adapt the full color palette to match your branding perfectly',
      },
      {
        title: 'Your Business Name',
        description:
          'Customize the app name with your barbershop name on every screen',
      },
      {
        title: 'Visual Elements',
        description:
          'Adjust typography, icons, and other visual details to your preference',
      },
    ],
    whiteLabel: {
      title: 'Complete White-Label Solution',
      description:
        "It's not just generic software. It's YOUR management platform with your complete visual identity. Perfect for barbershops that want to project professionalism and brand consistency in every interaction with their team.",
      bullets: [
        'Complete customization at no extra cost',
        'Your branding implemented in under 24 hours',
        'Design updates whenever you need them',
      ],
      logoPlaceholderTitle: 'Your Logo Here',
      logoPlaceholderDescription:
        'Visualize your brand on every screen of the app',
      colorsCaption: 'Your corporate colors',
    },
  },
  contact: {
    heading: 'Ready to Transform Your Barbershop?',
    description:
      'Contact us today and discover how Studio Barbershop Pro can revolutionize your business operations',
    whatsapp: { title: 'WhatsApp', description: 'Chat with us directly' },
    email: { title: 'Email', description: 'Send us a detailed message' },
    calendly: {
      title: 'Schedule a Meeting',
      description: 'Book a 30-minute appointment',
    },
    responseTime: {
      prefix: 'Response time:',
      rest: 'Under 3 hours on WhatsApp • 24 hours by email',
    },
  },
  footer: {
    developedByPrefix: 'Developed by:',
    copyright:
      '© 2025 Studio Barbershop Pro. Barbershop management system. All rights reserved.',
  },
};

export const translations = { es, en };
