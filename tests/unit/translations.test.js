import { test } from 'node:test';
import assert from 'node:assert/strict';
import { translations } from '../../js/translations.js';

function keyPaths(obj, prefix = '') {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (Array.isArray(value)) return [`${path}[]`];
    if (value && typeof value === 'object') return keyPaths(value, path);
    return [path];
  });
}

test('es and en locales exist', () => {
  assert.ok(translations.es);
  assert.ok(translations.en);
});

test('es and en have identical key shapes', () => {
  const esKeys = keyPaths(translations.es).sort();
  const enKeys = keyPaths(translations.en).sort();
  assert.deepEqual(enKeys, esKeys);
});

test('array fields have the same length in both locales', () => {
  assert.equal(
    translations.es.features.serviceManagement.bullets.length,
    translations.en.features.serviceManagement.bullets.length
  );
  assert.equal(
    translations.es.benefits.cards.length,
    translations.en.benefits.cards.length
  );
  assert.equal(
    translations.es.customization.items.length,
    translations.en.customization.items.length
  );
});

test('default locale (es) matches the current hero copy', () => {
  assert.equal(
    translations.es.hero.title,
    'Gestiona las Operaciones de Tu Barbería con Eficiencia Total'
  );
});
