import { test, expect } from '@playwright/test';

test('renders both plan cards with their CRC prices', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#pricing-heading')).toBeVisible();
  await expect(page.locator('#pricing-basico')).toContainText('₡17,000');
  await expect(page.locator('#pricing-profesional')).toContainText('₡23,000');
});

test('both plans list appointment scheduling as an included feature', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('#pricing-basico')).toContainText(
    'Agenda de citas'
  );
  await expect(page.locator('#pricing-profesional')).toContainText(
    'Agenda de citas'
  );
});

test('each plan CTA links to the app signup page', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#pricing-basico-cta')).toHaveAttribute(
    'href',
    'https://app.barbershop-studio.com/signup'
  );
  await expect(page.locator('#pricing-profesional-cta')).toHaveAttribute(
    'href',
    'https://app.barbershop-studio.com/signup'
  );
});

test('pricing copy updates to English after switching locale', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'EN' }).click();
  await expect(page.locator('#pricing-heading')).toHaveText(
    'Simple, Transparent Pricing'
  );
});
