import ElpCard from './src/elp-card.vue'

function install (Vue, opts = {}) {
  Vue.component(ElpCard.name, ElpCard)
}

export default install
