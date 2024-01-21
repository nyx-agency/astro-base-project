module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: ['eslint-plugin-sort-keys-fix'],
  extends: [
    'plugin:vue/recommended',
    'plugin:vuetify/base',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    eqeqeq: ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'error',
    'sort-imports': 'warn',
    'sort-keys-fix/sort-keys-fix': 'error',
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true,
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/order-in-components': 'warn',
    'vue/sort-keys': ['warn', 'asc'],
    'no-unused-vars': 'warn',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'off',
      },
    },
  ],
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
