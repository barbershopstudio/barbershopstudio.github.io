'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n/language-provider';
import { translations } from '@/lib/i18n/translations';
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

const benefitIcons = [Clock, Users, Zap, TrendingUp];
const customizationIcons = [ImageIcon, Palette, Type, Sparkles];

export default function Home() {
  const { locale, setLocale } = useLanguage();
  const content = translations[locale];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Studio Barbershop Pro',
    description: content.meta.jsonLdDescription,
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
    inLanguage: locale === 'en' ? 'en' : 'es-CR',
  };

  const sendDemoRequest = () => {
    const subject = encodeURIComponent(content.actions.demoRequest.subject);
    const body = encodeURIComponent(content.actions.demoRequest.body);
    window.open(
      `mailto:contact.barbershop.studio@gmail.com?subject=${subject}&body=${body}`
    );
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(content.actions.whatsappMessage);
    window.open(`https://wa.me/50688527576?text=${message}`, '_blank');
  };

  const openEmail = () => {
    const subject = encodeURIComponent(content.actions.contactEmail.subject);
    const body = encodeURIComponent(content.actions.contactEmail.body);
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
      <div className='fixed top-4 right-4 z-50 flex rounded-full border border-border bg-card p-1 shadow-sm'>
        <button
          type='button'
          onClick={() => setLocale('es')}
          aria-pressed={locale === 'es'}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            locale === 'es'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          ES
        </button>
        <button
          type='button'
          onClick={() => setLocale('en')}
          aria-pressed={locale === 'en'}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            locale === 'en'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          EN
        </button>
      </div>
      <div className='min-h-screen'>
        {/* Hero Section */}
        <header className='container mx-auto px-4 py-16 sm:py-20 md:py-32'>
          <div className='max-w-5xl mx-auto text-center space-y-6 sm:space-y-8'>
            <div className='inline-block'>
              <Image
                src='/images/design-mode/main_logo.jpeg'
                alt={content.hero.logoAlt}
                width={180}
                height={180}
                className='mx-auto mb-6 sm:mb-8 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44'
                priority
              />
            </div>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight'>
              {content.hero.title}
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
              {content.hero.description}
            </p>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4'>
              <Button
                size='lg'
                className='text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto'
                onClick={sendDemoRequest}
              >
                {content.hero.cta}
              </Button>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <section
          className='border-y border-border'
          aria-label={content.stats.ariaLabel}
        >
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border'>
              <div className='p-6 sm:p-8 md:p-12 text-center sm:text-left'>
                <div className='text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-primary'>
                  {content.stats.hours.value}
                </div>
                <div className='text-muted-foreground text-sm sm:text-base'>
                  {content.stats.hours.label}
                </div>
              </div>
              <div className='p-6 sm:p-8 md:p-12 text-center sm:text-left'>
                <div className='text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-primary'>
                  {content.stats.visibility.value}
                </div>
                <div className='text-muted-foreground text-sm sm:text-base'>
                  {content.stats.visibility.label}
                </div>
              </div>
              <div className='p-6 sm:p-8 md:p-12 text-center sm:text-left sm:col-span-2 lg:col-span-1'>
                <div className='text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-primary'>
                  {content.stats.errors.value}
                </div>
                <div className='text-muted-foreground text-sm sm:text-base'>
                  {content.stats.errors.label}
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
              {content.features.heading}
            </h2>
            <p className='text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4'>
              {content.features.subheading}
            </p>
          </div>

          <div className='grid gap-12 sm:gap-16 md:gap-20'>
            {/* Feature 1 - Service Management */}
            <article className='grid md:grid-cols-2 gap-6 sm:gap-8 items-center'>
              <div className='space-y-4 sm:space-y-6'>
                <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium'>
                  <ClipboardList className='w-4 h-4' />
                  {content.features.serviceManagement.badge}
                </div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                  {content.features.serviceManagement.title}
                </h3>
                <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
                  {content.features.serviceManagement.description}
                </p>
                <ul className='space-y-3'>
                  {content.features.serviceManagement.bullets.map(bullet => (
                    <li key={bullet} className='flex gap-3 items-start'>
                      <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                      <span className='text-sm sm:text-base text-muted-foreground'>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='order-first md:order-last'>
                <Card className='overflow-hidden border-border bg-card'>
                  <CardContent className='p-0'>
                    <Image
                      src='/images/design-mode/home_big.png'
                      alt={content.features.serviceManagement.imageAlt}
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
                  {content.features.reports.badge}
                </div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                  {content.features.reports.title}
                </h3>
                <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
                  {content.features.reports.description}
                </p>
                <ul className='space-y-3'>
                  {content.features.reports.bullets.map(bullet => (
                    <li key={bullet} className='flex gap-3 items-start'>
                      <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                      <span className='text-sm sm:text-base text-muted-foreground'>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Card className='overflow-hidden border-border bg-card'>
                  <CardContent className='p-0'>
                    <Image
                      src='/images/design-mode/reports_large_scree.png'
                      alt={content.features.reports.imageAlt}
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
                  {content.features.team.badge}
                </div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                  {content.features.team.title}
                </h3>
                <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
                  {content.features.team.description}
                </p>
                <ul className='space-y-3'>
                  {content.features.team.bullets.map(bullet => (
                    <li key={bullet} className='flex gap-3 items-start'>
                      <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                      <span className='text-sm sm:text-base text-muted-foreground'>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='order-first md:order-last'>
                <Card className='overflow-hidden border-border bg-card'>
                  <CardContent className='p-0'>
                    <Image
                      src='/images/design-mode/login_with_code.png'
                      alt={content.features.team.imageAlt}
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
                {content.benefits.heading}
              </h2>
              <div className='grid sm:grid-cols-2 gap-6 sm:gap-8'>
                {content.benefits.cards.map((card, index) => {
                  const Icon = benefitIcons[index];
                  return (
                    <Card key={card.title} className='border-border bg-card'>
                      <CardContent className='p-6 sm:p-8 space-y-4'>
                        <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                          <Icon className='w-6 h-6 text-primary' />
                        </div>
                        <h3 className='text-xl sm:text-2xl font-bold'>
                          {card.title}
                        </h3>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                          {card.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
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
                {content.customization.badge}
              </div>
              <h2
                id='customization-heading'
                className='text-3xl sm:text-4xl md:text-5xl font-bold text-balance'
              >
                {content.customization.heading}
              </h2>
              <p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed'>
                {content.customization.description}
              </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
              {content.customization.items.map((item, index) => {
                const Icon = customizationIcons[index];
                return (
                  <Card
                    key={item.title}
                    className='border-border bg-card hover:bg-secondary/50 transition-colors'
                  >
                    <CardContent className='p-6 space-y-4 text-center'>
                      <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto'>
                        <Icon className='w-7 h-7 text-primary' />
                      </div>
                      <h3 className='text-lg font-bold'>{item.title}</h3>
                      <p className='text-sm text-muted-foreground leading-relaxed'>
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className='border-border bg-gradient-to-br from-secondary/50 to-secondary/20'>
              <CardContent className='p-8 sm:p-12'>
                <div className='grid md:grid-cols-2 gap-8 items-center'>
                  <div className='space-y-6'>
                    <h3 className='text-2xl sm:text-3xl font-bold'>
                      {content.customization.whiteLabel.title}
                    </h3>
                    <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
                      {content.customization.whiteLabel.description}
                    </p>
                    <ul className='space-y-3'>
                      {content.customization.whiteLabel.bullets.map(bullet => (
                        <li key={bullet} className='flex gap-3 items-start'>
                          <Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
                          <span className='text-sm sm:text-base text-muted-foreground'>
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='order-first md:order-last'>
                    <div className='relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 flex items-center justify-center'>
                      <div className='text-center space-y-4'>
                        <div className='w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6'>
                          <Palette className='w-12 h-12 text-primary' />
                        </div>
                        <p className='text-lg font-semibold'>
                          {
                            content.customization.whiteLabel
                              .logoPlaceholderTitle
                          }
                        </p>
                        <p className='text-sm text-muted-foreground px-4'>
                          {
                            content.customization.whiteLabel
                              .logoPlaceholderDescription
                          }
                        </p>
                        <div className='flex gap-2 justify-center pt-4'>
                          <div className='w-8 h-8 rounded-full bg-red-500/80'></div>
                          <div className='w-8 h-8 rounded-full bg-blue-500/80'></div>
                          <div className='w-8 h-8 rounded-full bg-amber-500/80'></div>
                          <div className='w-8 h-8 rounded-full bg-emerald-500/80'></div>
                        </div>
                        <p className='text-xs text-muted-foreground'>
                          {content.customization.whiteLabel.colorsCaption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

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
                  {content.contact.heading}
                </h2>
                <p className='text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4'>
                  {content.contact.description}
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
                    <h3 className='text-xl font-bold'>
                      {content.contact.whatsapp.title}
                    </h3>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      {content.contact.whatsapp.description}
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
                    <h3 className='text-xl font-bold'>
                      {content.contact.email.title}
                    </h3>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      {content.contact.email.description}
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
                    <h3 className='text-xl font-bold'>
                      {content.contact.calendly.title}
                    </h3>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      {content.contact.calendly.description}
                    </p>
                    <p className='text-sm font-medium text-purple-500'>
                      Calendly
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className='mt-12 text-center'>
                <p className='text-sm text-muted-foreground'>
                  <strong>{content.contact.responseTime.prefix}</strong>{' '}
                  {content.contact.responseTime.rest}
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
                {content.footer.developedByPrefix}{' '}
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
                {content.footer.copyright}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
