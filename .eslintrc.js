module.exports = {
  root: true,
  extends: ['alloy', 'alloy/typescript'],
  globals: {
    page: 'readonly',
    globalThis: 'readonly',
    __HMR_HOSTNAME__: 'readonly',
    __HMR_PORT__: 'readonly',
    __HMR_PROTOCOL__: 'readonly',
    __dirname: 'off',
    __filename: 'off',
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'max-nested-callbacks': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-require-imports': 'off',
  },
}
