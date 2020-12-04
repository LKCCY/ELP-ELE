import { combineVars } from './utils/extract-css'

function install (Vue, opts = {}) {
  const theme = opts.theme
  const _vars = combineVars(theme)
}

export default install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
