<template>
  <div>
    <div>选中内容：{{ selected || '暂无' }}</div>
    <elp-tag-select
      v-model="value"
      label="产品线"
      label-in-change
      @change="change"
      :props="props"
      :tags="tags"/>
  </div>
</template>

<script>
export default {
  name: 'docs-tag-select-props',
  data () {
    return {
      value: '',
      tags: [
        { cName: '京东动力', eName: 'EasyBI' },
        { cName: '微策略', eName: 'EasyIdea' },
        { cName: '标签平台', eName: 'EasyLabel' },
      ],
      props: {
        label: 'cName',
        value: 'eName',
      },
      selected: null,
    }
  },
  methods: {
    change(val) {
      this.selected = val && val.cName ? `${val.cName}(${val.eName})` : null
    }
  }
}
</script>

<style scoped>

</style>