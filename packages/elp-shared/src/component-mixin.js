
import { css } from "@emotion/css"
import { composeSystem } from './extract-theme'

export const createStyledAttrsMixin = (name) => ({
  name,
  inheritAttrs: false,
  computed: {
    theme () {
      return this.$eleUiTheme || {}
    }
  },
  methods: {
    createClass (props = {}) {
      return css(composeSystem(props, this.theme))
    }
  }
})
