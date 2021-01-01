module.exports = {
  projects: ['<rootDir>/packages/**/__test__'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/packages/**/__test__/*.spec.(js|jsx|ts|tsx)'
  ],
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.vue$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ]
}
