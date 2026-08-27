import { test, expect } from '@playwright/test';

test('renders the appointments feature block in Spanish', async ({ page }) => {
  await page.goto('/');
  const heading = page.locator('#appointments-heading');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText(
    'Cada Cita en Su Lugar, Sin Dobles Reservas'
  );
});

test('appointments block lists the scheduling capabilities', async ({
  page,
}) => {
  await page.goto('/');
  const block = page.locator('#appointments-heading').locator('..');
  await expect(block).toContainText('conflictos de horario');
  await expect(block).toContainText('permiso');
  await expect(block).toContainText('resumen');
});

test('appointments copy switches to English', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'EN' }).click();
  await expect(page.locator('#appointments-heading')).toHaveText(
    'Every Appointment in Its Place, No Double Bookings'
  );
});
