import ElpCard from './src/elp-card'

ElpCard.install = function (Vue) {
  Vue.component(ElpCard.name, ElpCard)
}

export default ElpCard