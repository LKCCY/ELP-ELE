module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'prefer-const': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    Object.assign(
      {
        files: [ '**/__test__/*.spec.js' ],
        env: { jest: true },
        plugins: [ 'jest' ],
      },
      require('eslint-plugin-jest').configs.recommended
    )
  ]
}
