import { test, expect } from '@playwright/test';

test('renders the "Cómo Empezar" section with four steps', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#how-heading')).toBeVisible();
  await expect(page.locator('.how__step')).toHaveCount(4);
});

test('step two explains the SINPE transfer with a reference code', async ({
  page,
}) => {
  await page.goto('/');
  const step2 = page.locator('.how__step').nth(1);
  await expect(step2).toContainText('SINPE');
  await expect(step2).toContainText('código de referencia');
});

test('the section CTA links to the app signup page', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#how-cta')).toHaveAttribute(
    'href',
    'https://app.barbershop-studio.com/signup'
  );
});

test('step one copy switches to English', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'EN' }).click();
  await expect(page.locator('.how__step').first()).toContainText(
    'Register your barbershop'
  );
});
