import { test, expect } from '@playwright/test';

test('renders every landmark section from the original app', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('#features-heading')).toBeVisible();
  await expect(page.locator('#benefits-heading')).toBeVisible();
  await expect(page.locator('#customization-heading')).toBeVisible();
  await expect(page.locator('#contact-heading')).toBeVisible();
});

test('hero renders the default Spanish copy', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText(
    'Gestiona las Operaciones de Tu Barbería con Eficiencia Total'
  );
});

test('every image has non-empty alt text', async ({ page }) => {
  await page.goto('/');
  const images = page.locator('img');
  const count = await images.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const alt = await images.nth(i).getAttribute('alt');
    expect(alt?.length).toBeGreaterThan(0);
  }
});

test('structured data is present and parses as JSON-LD', async ({ page }) => {
  await page.goto('/');
  const json = await page.locator('#structured-data').textContent();
  const data = JSON.parse(json);
  expect(data['@type']).toBe('SoftwareApplication');
  expect(data.name).toBe('Studio Barbershop Pro');
});
