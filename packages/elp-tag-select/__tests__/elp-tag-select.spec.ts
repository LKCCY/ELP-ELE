import { createWrapper, shallowMount, Wrapper } from '@vue/test-utils'
import './install-element-ui.js'
import ElpTagSelect from '../src/elp-tag-select.vue'
import Vue from 'vue'

function getWrapper (propsData: any) : Wrapper<Vue> {
  const wrapper = shallowMount(ElpTagSelect, { propsData })
  return wrapper
}

describe('ElpTagSelect.vue', () => {
  describe('基本功能测试', () => {
    let wrapper : Wrapper<Vue>
    const tags = [
      { label: 'label-1', value: 'val-1' },
      { label: 'label-2', value: 'val-2' }
    ]
    const propsData = {
      label: 'label-name',
      value: '',
      tags
    }
    beforeAll(() => {
      wrapper = getWrapper(propsData)
    })
    test('快照测试', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
    it('属性测试-label', () => {
      const el = wrapper.find('label')
      expect(el.text()).toMatch(propsData.label)
    })
    it('属性测试-tags：测试列表正常渲染', () => {
      const elTagList = wrapper.findAll('.ep-tag')
      expect(elTagList.length).toEqual(2)
      for (let i = 0; i < elTagList.length; i++) {
        expect(elTagList.at(i).text()).toMatch(tags[i].label)
      }
    })
    it('属性测试-show-more：默认开启自动隐藏功能', () => {
      const el = wrapper.find('.list-more')
      expect(el.isVisible).toBeTruthy()
    })
    it('属性测试-label-width：默认100px', () => {
      const el = wrapper.find('label')
      expect(el.attributes('style')).toMatch(/width:\s*100px/)
    })
    it('属性测试-is-required：默认可以取消选中', async () => {
      const el = wrapper.find('.ep-tag')
      expect(el.classes('ep-tag__checked')).toBeFalsy()
      el.trigger('click')
      await wrapper.vm.$nextTick()
      expect(el.classes('ep-tag__checked')).toBeTruthy()
      el.trigger('click')
      await wrapper.vm.$nextTick()
      expect(el.classes('ep-tag__checked')).toBeFalsy()

      const emited = wrapper.emitted()
      expect(emited).toHaveProperty('input')
      expect(emited).toHaveProperty('change')
      expect(emited.input![0][0]).toBe(emited.change![0][0])
      expect(emited.input![1][0]).toBe(emited.change![1][0])
      expect(emited.input![0][0]).toBe(tags[0].value)
      expect(emited.input![1][0]).toBe('')
    })
  })

  describe('自定义属性测试', () => {
    const commonProps = {
      label: 'label-name',
      value: '',
      tags: [
        { label: 'label-1', value: 'val-1' },
        { label: 'label-2', value: 'val-2' }
      ]
    }
    it('属性测试-v-model：测试默认值', async () => {
      const propsData = Object.assign({}, commonProps)
      propsData.value = commonProps.tags[0].value
      const wrapper = getWrapper(propsData)
      const el = wrapper.find('.ep-tag')
      expect(el.classes('ep-tag__checked')).toBeTruthy()
    })
    it('属性测试-size：设置为medium', () => {
      const propsData = Object.assign({ size: 'medium' }, commonProps)

      const wrapper = getWrapper(propsData)
      const el = wrapper.findAll('.ep-tag--medium')
      expect(el.length).toEqual(2)
    })
    it('属性测试-label-width：设置为300px', () => {
      const propsData = Object.assign({ labelWidth: 300 }, commonProps)
      const wrapper = getWrapper(propsData)
      const el = wrapper.find('label')
      expect(el.attributes('style')).toMatch(/width:\s*300px/)
    })
    it('属性测试-show-more：设置为超出后不隐藏', () => {
      const propsData = Object.assign({ showMore: false }, commonProps)
      const wrapper = getWrapper(propsData)
      const el = wrapper.find('.list-more')
      expect(el.isVisible()).toBeFalsy()
    })
    it('属性测试-placeholder：tags为空时显示placeholder内容', () => {
      const propsData = Object.assign({ placeholder: '暂无内容' }, commonProps)
      propsData.tags = []
      const wrapper = getWrapper(propsData)
      const el = wrapper.find('.placeholder')
      expect(el.text()).toMatch(propsData.placeholder)
    })
    it('属性测试-is-required：至少选择一项', async () => {
      const propsData = Object.assign({ isRequired: true }, commonProps)
      const wrapper = getWrapper(propsData)
      const el = wrapper.find('.ep-tag')
      expect(el.classes('ep-tag__checked')).toBeFalsy()
      el.trigger('click')
      await wrapper.vm.$nextTick()
      expect(el.classes('ep-tag__checked')).toBeTruthy()
      el.trigger('click')
      await wrapper.vm.$nextTick()
      expect(el.classes('ep-tag__checked')).toBeTruthy()

      const emited = wrapper.emitted()
      expect(emited.input![0][0]).toBe(emited.change![0][0])
      expect(emited.input![1][0]).toBe(emited.change![1][0])
      expect(emited.input![0][0]).toBe(commonProps.tags[0].value)
      expect(emited.input![1][0]).toBe(commonProps.tags[0].value)
    })
    it('属性测试-multiple：允许多选', async () => {
      const propsData = Object.assign({ multiple: true }, commonProps)
      const wrapper = getWrapper(propsData)
      const el = wrapper.findAll('.ep-tag')
      expect(el.at(0).classes('ep-tag__checked')).toBeFalsy()
      expect(el.at(1).classes('ep-tag__checked')).toBeFalsy()
      el.at(0).trigger('click')
      el.at(1).trigger('click')
      await wrapper.vm.$nextTick()
      expect(el.at(0).classes('ep-tag__checked')).toBeTruthy()
      expect(el.at(1).classes('ep-tag__checked')).toBeTruthy()

      const emited = wrapper.emitted()
      expect(emited.input![0][0]).toEqual([propsData.tags[0].value])
      expect(emited.input![1][0]).toEqual([propsData.tags[0].value, propsData.tags[1].value])
    })
    it('属性测试-label-in-value：测试其兼容性', async () => {
      const propsData = Object.assign({ labelInValue: true }, commonProps)
      const wrapper = getWrapper(propsData)
      const el = wrapper.find('.ep-tag')
      el.trigger('click')
      await wrapper.vm.$nextTick()
      const emited = wrapper.emitted()
      expect(emited.input![0][0]).toEqual(propsData.tags[0].value)
      expect(emited.change![0][0]).toEqual(propsData.tags[0])
    })
    it('属性测试-label-in-change：返回value时同时返回label', async () => {
      const propsData = Object.assign({ labelInChange: true }, commonProps)
      const wrapper = getWrapper(propsData)
      const el = wrapper.find('.ep-tag')
      el.trigger('click')
      await wrapper.vm.$nextTick()
      const emited = wrapper.emitted()
      expect(emited.input![0][0]).toEqual(propsData.tags[0].value)
      expect(emited.change![0][0]).toEqual(propsData.tags[0])
    })
    it('属性测试-props：允许指定tags属性中的key-val', () => {
      const localProps = {
        label: 'label-name',
        value: '',
        tags: [
          { id: 'label-1', name: 'val-1' },
          { id: 'label-2', name: 'val-2' }
        ],
        props: { label: 'id', value: 'name' }
      }
      const wrapper = getWrapper(localProps)
      const elTagList = wrapper.findAll('.ep-tag')
      expect(elTagList.length).toEqual(2)
      for (let i = 0; i < elTagList.length; i++) {
        expect(elTagList.at(i).text()).toMatch(localProps.tags[i].id)
      }
    })
  })
})
