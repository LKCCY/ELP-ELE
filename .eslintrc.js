module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
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
