const path = require('path')
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath)
const lessVars = require(resolvePath('../../theme/index'))

module.exports = {
  title: 'Element Ui Pro',
  port: 4000,
  base: '/',
  dest: './dist',
  themeConfig: {
    nav: [
      { text: '组件', link: '/guide/' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '基本配置',
          children: ['']
        },
        {
          title: '数据展示',
          children: [
            'data-display/elp-dongdong'
          ]
        },
        {
          title: '布局',
          children: [
            'layout/elp-card'
          ]
        }
      ]
    }
  },
  chainWebpack:  (config, isServer) => {
    config.module
      .rule('myRules')
      .test(/\.less$/)
      .use('lessloader')
      .loader('less-loader')
      .tap(options => {
        let _options = options || {}
        return { ..._options, globalVars: lessVars }
      })
  }
}
