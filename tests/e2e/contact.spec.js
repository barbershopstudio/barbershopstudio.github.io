import { test, expect } from '@playwright/test';

test('the demo CTA is a real mailto link with the original subject/body', async ({
  page,
}) => {
  await page.goto('/');
  const href = await page.locator('#cta-demo').getAttribute('href');
  expect(href).toMatch(
    /^mailto:contact\.barbershop\.studio@gmail\.com\?subject=/
  );
  expect(href).toContain(
    encodeURIComponent('Solicitud de Demostración - Studio Barbershop Pro')
  );
});

test('the WhatsApp card links straight to wa.me with the right message', async ({
  page,
}) => {
  await page.goto('/');
  const href = await page.locator('#contact-whatsapp').getAttribute('href');
  expect(href).toBe(
    'https://wa.me/50688527576?text=' +
      encodeURIComponent(
        'Hola, me interesa conocer más sobre Studio Barbershop Pro para mi barbería.'
      )
  );
});

test('the email card links to a mailto with the original inquiry text', async ({
  page,
}) => {
  await page.goto('/');
  const href = await page.locator('#contact-email').getAttribute('href');
  expect(href).toMatch(
    /^mailto:contact\.barbershop\.studio@gmail\.com\?subject=/
  );
  expect(href).toContain(
    encodeURIComponent('Consulta sobre Studio Barbershop Pro')
  );
});

test('the Calendly card links to the original booking URL', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('#contact-calendly')).toHaveAttribute(
    'href',
    'https://calendly.com/contact-barbershop-studio/30min'
  );
});

test('contact links update to English copy after switching locale', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'EN' }).click();
  const href = await page.locator('#contact-whatsapp').getAttribute('href');
  expect(href).toBe(
    'https://wa.me/50688527576?text=' +
      encodeURIComponent(
        "Hi, I'd like to learn more about Studio Barbershop Pro for my barbershop."
      )
  );
});
