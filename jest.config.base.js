module.exports = {
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.vue'
  ],
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.vue$': '<rootDir>/node_modules/vue-jest'
  }
}
