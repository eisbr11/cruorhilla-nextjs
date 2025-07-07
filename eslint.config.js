import react from '@eslint-react/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import tsParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import js from '@eslint/js';

const config = [
  {
    name: 'cruorhilla/ignore',
    ignores: [
      '**/.history',
      '**/node_modules',
      '**/.next',
      '**/.github',
      '**/dist',
      '**/build',
      '**/coverage',
      '**/public',
      'next.config.js',
      './next-env.d.ts',
      'next-env.d.ts',
      '**/.yarn',
      '**/.vscode',
      '**/.idea',
      '**/.git',
      '**/.github',
      '**/.cache',
    ],
  },
  js.configs.recommended,
  {
    name: 'javascript/setup',
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2022,
        sourceType: 'module',
        projectService: true,
      },
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    name: 'javascript/extra',
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      'no-console': 'warn',
    },
  },
  // react settings
  react.configs.recommended,
  {
    name: 'react',
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {},
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        globals: {
          ...globals.browser,
        },
        project: './tsconfig.json',
        projectService: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/destructuring-assignment': 'off',
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
    },
  },
  {
    name: 'react/hooks',
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    name: 'typescript/setup',
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
  },
  {
    name: 'typescript/parser',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    name: 'typescript/rules',
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          prefix: ['T'],
        },
        {
          selector: 'enum',
          format: ['PascalCase'],
          prefix: ['E'],
        },
        {
          selector: 'enumMember',
          format: ['PascalCase', 'camelCase'],
        },
      ],
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' },
      ],

      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      // '@typescript-eslint/consistent-type-imports': [
      //   'warn',
      //   { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
      // ],
      'linebreak-style': 'off',
      'no-undef': 'off',
      'no-extra-boolean-cast': 'off',
    },
  },
  {
    name: 'import-rules',
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['./'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            [
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
              'unknown',
            ],
          ],

          'newlines-between': 'always',
          warnOnUnassignedImports: true,
        },
      ],

      'import/named': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-duplicates': 'off',

      'import/no-cycle': [
        'error',
        {
          maxDepth: 10,
        },
      ],

      'import/no-named-as-default': 'off',
      'import/prefer-default-export': 'off',
    },
  },
  jsxA11y.flatConfigs.recommended,
  {
    name: 'jsx-a11y/overrides',
    rules: {
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    },
  },
  {
    name: 'prettier/recommended',
    ...eslintPluginPrettierRecommended,
  },
];

export default config;
