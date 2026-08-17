import { defineConfig, globalIgnores } from 'eslint/config';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

// ponytail: hand-listed instead of pulling in the `globals` package for two
// environments' worth of identifiers.
const browserGlobals = {
  window: 'readonly',
  document: 'readonly',
  navigator: 'readonly',
  localStorage: 'readonly',
  console: 'readonly',
};

const nodeGlobals = {
  process: 'readonly',
  console: 'readonly',
};

const eslintConfig = defineConfig([
  {
    files: ['js/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: browserGlobals,
    },
  },
  {
    files: ['tests/unit/**/*.js', 'tests/e2e/**/*.js', 'playwright.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: nodeGlobals,
    },
  },
  prettierRecommended,
  {
    rules: {
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': ['warn', { allow: ['warn', 'error', 'log'] }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  globalIgnores(['node_modules/**', 'test-results/**', 'playwright-report/**']),
]);

export default eslintConfig;
