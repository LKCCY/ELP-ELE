const base = require('../../jest.config.base.js')
const pack = require('./package')
const packageName = pack.name
console.log('packageName: ', packageName)

module.exports = {
  ...base,
  roots: [
    `<rootDir>/packages/${packageName}`
  ],
  projects: [
    `<rootDir>/packages/${packageName}/jest.config.js`
  ],
  rootDir: '../..',
  moduleDirectories: ['../../node_modules', 'node_modules'],
  testRegex: `(packages/${packageName}/__tests__/.*|\\.(test|spec))\\.(tsx?|jsx?)$`
}
