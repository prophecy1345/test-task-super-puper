import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off'
    }
  },
  {
    files: ['**/*.vue'],
    plugins: {
      vue: eslintPluginVue
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        extraFileExtensions: ['.vue']
      },
      globals: {
        'Event': 'readonly',
        'HTMLInputElement': 'readonly',
        'setTimeout': 'readonly',
        'clearTimeout': 'readonly',
        'window': 'readonly',
        'document': 'readonly'
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/html-self-closing': ['warn', {
        html: {
          void: 'any',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }]
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**']
  }
];
