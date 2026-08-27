import { test, expect } from '@playwright/test';

test('renders the FAQ section with native disclosure items', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('#faq-heading')).toBeVisible();
  await expect(page.locator('.faq__list details')).toHaveCount(6);
});

test('FAQ covers payment, activation time and plan limits', async ({
  page,
}) => {
  await page.goto('/');
  const faq = page.locator('.faq__list');
  await expect(faq).toContainText('SINPE');
  await expect(faq).toContainText('pocas horas');
  await expect(faq).toContainText('ubicación');
});

test('the first FAQ question switches to English', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'EN' }).click();
  await expect(page.locator('.faq__list summary').first()).toHaveText(
    'How do I pay for my subscription?'
  );
});
