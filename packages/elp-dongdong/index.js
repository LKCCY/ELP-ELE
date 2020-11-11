import ElpDongdong from './src/elp-dongdong'

ElpCard.install = function (Vue) {
  Vue.component(ElpDongdong.name, ElpDongdong)
}

export default ElpDongdong
