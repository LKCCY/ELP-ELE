import theme from './theme/index'

function install (Vue, opts = {}) {
  Vue.prototype.$eleUiTheme = theme
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}

export default install
