import { shallowMount } from '@vue/test-utils'
import ElpCard from '../src/elp-card.vue'

describe('card.vue', () => {
  const wrap = shallowMount(ElpCard)
test('快照测试', () => {
    expect(2 + 2).toBe(4)
  })
})
