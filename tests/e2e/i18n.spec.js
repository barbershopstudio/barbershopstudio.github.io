import { test, expect } from '@playwright/test';

test('clicking EN swaps the hero copy and persists the choice', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText(
    'Gestiona las Operaciones de Tu Barbería con Eficiencia Total'
  );

  await page.getByRole('button', { name: 'EN' }).click();
  await expect(page.locator('h1')).toHaveText(
    'Run Your Barbershop Operations With Total Efficiency'
  );
  await expect(page.getByRole('button', { name: 'EN' })).toHaveAttribute(
    'aria-pressed',
    'true'
  );
  await expect(page.getByRole('button', { name: 'ES' })).toHaveAttribute(
    'aria-pressed',
    'false'
  );

  const stored = await page.evaluate(() =>
    window.localStorage.getItem('locale')
  );
  expect(stored).toBe('en');

  await page.reload();
  await expect(page.locator('h1')).toHaveText(
    'Run Your Barbershop Operations With Total Efficiency'
  );
});

test('switching locale updates the <html lang> and the JSON-LD language', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'EN' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  const json = await page.locator('#structured-data').textContent();
  const data = JSON.parse(json);
  expect(data.inLanguage).toBe('en');
});
