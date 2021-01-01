import { shallowMount } from '@vue/test-utils'
import ElpCard from '../src/elp-card.vue'

describe('card.vue', () => {
  const wrapper = shallowMount(ElpCard)
  test('elp-card快照', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
