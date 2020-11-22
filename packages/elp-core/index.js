import theme from './theme/index'
import merge from 'lodash.merge'
import { generateClass } from './directives/class'

function install (Vue, opts = {}) {
  const _theme = opts.theme || {}
  const _resultTheme = merge(theme, _theme)
  Vue.directive('elp',generateClass(_resultTheme))
  Vue.prototype.$eleUiTheme = _resultTheme
  Vue.prototype.$eleUiProGlobal = opts
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}

export default install
