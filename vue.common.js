const path = require('path')
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath)
const lessVars = require(resolvePath('./theme/index'))

module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      less: {
        globalVars: lessVars
      }
    }
  },
  lintOnSave: true,
  publicPath: '/',
  productionSourceMap: false
}
