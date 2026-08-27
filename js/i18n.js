import { translations } from './translations.js';
import {
  EMAIL,
  WHATSAPP_NUMBER,
  SIGNUP_URL,
  buildMailto,
  buildWhatsAppUrl,
} from './links.js';

const STORAGE_KEY = 'locale';

function get(obj, path) {
  return path
    .split('.')
    .reduce((value, key) => (value == null ? value : value[key]), obj);
}

function detectLocale() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'es') return stored;
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
}

function applyText(dict) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = get(dict, el.getAttribute('data-i18n'));
    if (typeof value === 'string') el.textContent = value;
  });
}

function applyAttrs(dict) {
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.getAttribute('data-i18n-attr')
      .split(';')
      .forEach(pair => {
        const [attr, path] = pair.split(':');
        const value = get(dict, path);
        if (typeof value === 'string') el.setAttribute(attr, value);
      });
  });
}

function applyContactLinks(dict) {
  const cta = document.getElementById('cta-demo');
  if (cta) {
    cta.href = buildMailto(
      EMAIL,
      dict.actions.demoRequest.subject,
      dict.actions.demoRequest.body
    );
  }
  const whatsapp = document.getElementById('contact-whatsapp');
  if (whatsapp) {
    whatsapp.href = buildWhatsAppUrl(
      WHATSAPP_NUMBER,
      dict.actions.whatsappMessage
    );
  }
  const email = document.getElementById('contact-email');
  if (email) {
    email.href = buildMailto(
      EMAIL,
      dict.actions.contactEmail.subject,
      dict.actions.contactEmail.body
    );
  }
}

function applyPricingLinks() {
  ['pricing-basico-cta', 'pricing-profesional-cta'].forEach(id => {
    const cta = document.getElementById(id);
    if (cta) cta.href = SIGNUP_URL;
  });
}

function applyJsonLd(dict, locale) {
  const script = document.getElementById('structured-data');
  if (!script) return;
  const data = JSON.parse(script.textContent);
  data.description = dict.meta.jsonLdDescription;
  data.inLanguage = locale === 'en' ? 'en' : 'es-CR';
  script.textContent = JSON.stringify(data);
}

function applyToggleState(locale) {
  document.querySelectorAll('[data-locale-btn]').forEach(btn => {
    const isActive = btn.getAttribute('data-locale-btn') === locale;
    btn.setAttribute('aria-pressed', String(isActive));
    btn.classList.toggle('is-active', isActive);
  });
}

function applyLocale(locale) {
  const dict = translations[locale];
  applyText(dict);
  applyAttrs(dict);
  applyContactLinks(dict);
  applyPricingLinks();
  applyJsonLd(dict, locale);
  applyToggleState(locale);
  document.documentElement.lang = locale === 'en' ? 'en' : 'es-CR';
}

function setLocale(locale) {
  window.localStorage.setItem(STORAGE_KEY, locale);
  applyLocale(locale);
}

function initI18n() {
  applyLocale(detectLocale());
  document.querySelectorAll('[data-locale-btn]').forEach(btn => {
    btn.addEventListener('click', () =>
      setLocale(btn.getAttribute('data-locale-btn'))
    );
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initI18n);
}
