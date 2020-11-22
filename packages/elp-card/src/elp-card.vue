<template>
  <div component="elp-card" :class="createClass(cardProps)">
    <header v-if="title" :class="createClass(headProps)">
      <div>
        <el-tooltip :content="tooltip">
          <i class="el-icon-warning" v-if="tooltip"></i>
        </el-tooltip>
        <span :class="createClass(headTitleProps)">{{title}}</span>
        <span class="createClass(headSubProps)">{{subTitle}}</span>
      </div>
      <div>
        <slot name="operate"></slot>
      </div>
    </header>
    <main :class="createClass(mainProps)">
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
    cardProps () {
      return { bg: '#fff' }
    },
    headProps () {
      return {
        p: '16px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid',
        borderColor: 'colorBorder'
      }
    },
    headTitleProps () {
      return {
        fontSize: '16px',
        color: 'regular',
        fontWeight: 600,
        mr: '10px'
      }
    },
    headSubProps () {
      return {
        fontSize: '16px',
        color: 'secondary'
      }
    },
    mainProps () {
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
