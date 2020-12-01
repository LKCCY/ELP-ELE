<template>
  <div v-elp:card="cardStyle">
    <header v-if="title" v-elp:card-head="headStyle">
      <div>
        <el-tooltip :content="tooltip">
          <i class="el-icon-warning" v-if="tooltip"></i>
        </el-tooltip>
        <span v-elp:card-title="headTitleStyle">{{title}}</span>
        <span v-elp:card-subtitle="headSubStyle">{{subTitle}}</span>
      </div>
      <div>
        <slot name="operate"></slot>
      </div>
    </header>
    <main v-elp:card-main="mainStyle">
      <slot></slot>
    </main>
  </div>
</template>

<script>

import { createStyledAttrsMixin } from 'elp-shared'

export default {
  name: 'elp-card',
  mixins: [createStyledAttrsMixin('ElpCard')],
  props: {
    title: String,
    subTitle: String,
    tooltip: {
      type: String
    }
  },
  computed: {
    cardStyle () {
      return { bg: '#fff' }
    },
    headStyle () {
      return {
        p: '16px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid',
        borderColor: 'colorBorder'
      }
    },
    headTitleStyle () {
      return {
        fontSize: '16px',
        color: 'primary',
        fontWeight: 600,
        mr: '10px'
      }
    },
    headSubStyle () {
      return {
        fontSize: '12px',
        color: 'secondary'
      }
    },
    mainStyle () {
      let _mainP = this.title ? '20px 30px' : '30px'
      return {
        p: _mainP,
        color: 'regular',
        fontSize: '14px'
      }
    }
  },
}
</script>

<style lang="less">
  body {
    color: @primary;
  }
</style>