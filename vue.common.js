module.exports = {
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          primary: 'var(--yellow, red)'
        }
      }
    }
  },
  lintOnSave: true,
  publicPath: '/',
  productionSourceMap: false
}
