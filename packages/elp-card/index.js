import ElpCard from './src/elp-card'

ElpCard.install = function (Vue) {
  Vue.component(Alert.name, ElpCard)
}

export default ElpCard
