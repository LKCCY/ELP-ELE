import ElementUI from "element-ui"

import "element-ui/lib/theme-chalk/index.css"
import '@vuepress/theme-default'
import ElpCore from '../../packages/elp-core'
import './components/index.js'



// 按需引入组件
import ElpCard from '../../packages/elp-card/index'

export default ({ Vue }) => {
  Vue.use(ElpCard)
  Vue.use(ElementUI)
  Vue.use(ElpCore)
}