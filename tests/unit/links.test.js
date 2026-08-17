import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildMailto,
  buildWhatsAppUrl,
  EMAIL,
  WHATSAPP_NUMBER,
} from '../../js/links.js';
import { translations } from '../../js/translations.js';

test('EMAIL and WHATSAPP_NUMBER match the numbers baked into the original app', () => {
  assert.equal(EMAIL, 'contact.barbershop.studio@gmail.com');
  assert.equal(WHATSAPP_NUMBER, '50688527576');
});

test('buildMailto reproduces sendDemoRequest()', () => {
  const { subject, body } = translations.es.actions.demoRequest;
  const url = buildMailto(EMAIL, subject, body);
  assert.equal(
    url,
    `mailto:contact.barbershop.studio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  );
});

test('buildMailto reproduces openEmail()', () => {
  const { subject, body } = translations.es.actions.contactEmail;
  const url = buildMailto(EMAIL, subject, body);
  assert.match(url, /^mailto:contact\.barbershop\.studio@gmail\.com\?subject=/);
  assert.ok(url.includes(encodeURIComponent(body)));
});

test('buildWhatsAppUrl reproduces openWhatsApp()', () => {
  const message = translations.es.actions.whatsappMessage;
  const url = buildWhatsAppUrl(WHATSAPP_NUMBER, message);
  assert.equal(
    url,
    `https://wa.me/50688527576?text=${encodeURIComponent(message)}`
  );
});
