import {defineConfig} from 'eslint/config';
import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsdoc from 'eslint-plugin-tsdoc';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    ignores: ['dist/', 'coverage/', 'node_modules/', '__tests__/'],
  },
  {
    extends: compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
    ),

    plugins: {
      '@typescript-eslint': typescriptEslintEslintPlugin,
      tsdoc,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
    },

    rules: {
      'tsdoc/syntax': 'warn',
      '@typescript-eslint/no-var-requires': 'warn',
      'no-redeclare': 'off',
    },
  },
]);
