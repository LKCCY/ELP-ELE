import ElementUI from "element-ui"

import "element-ui/lib/theme-chalk/index.css"
import '@vuepress/theme-default'
import ElpCore from '../../packages/elp-core/index.js'
import './components/index.js'



// 按需引入组件
import ElpCard from '../../packages/elp-card/index.js'
import ElpDongdong from '../../packages/elp-dongdong/index.js'

export default ({ Vue }) => {
  Vue.use(ElementUI)
  Vue.use(ElpCard)
  Vue.use(ElpDongdong)
  Vue.use(ElpCore, {})
}