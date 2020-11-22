const path = require('path')

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
  }
}