const lessVars = require('../../../theme/index')
const varsReg = /^var\(--(?:.*),\s?(.+)\)$/

export const extractVars = (options = {}) => {
  const allVars = { ...lessVars, ...options }
  const result = {}
  for (let key in allVars) {
    let _value = allVars[key] || ''
    if (_value.match(varsReg)) _value = _value.match(varsReg)[1]
    result[key] = _value
  }
  return result
}

export const insertVars = (object = {}) => {
  let root = document.documentElement
  for (let key in object) {
    root.style.setProperty(`--${key}`, object[key])
  }
}

export const combineVars = (options) => {
  const _result = extractVars(options)
  insertVars(_result)
}
