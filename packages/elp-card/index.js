import ElpCard from './src/elp-card.vue'

ElpCard.install = function (Vue) {
  Vue.component(ElpCard.name, ElpCard)
}

export default ElpCard
