
import { css } from "@emotion/css"
import { composeSystem } from './extract-theme'

export const createStyledAttrsMixin = (name) => ({
  name,
  inheritAttrs: false,
  computed: {
    theme () {
      return this.$eleUiTheme || {}
    },
    /** Split style attributes and native attributes */
    splitProps () {
      const _attrs = this.$attrs
      const styles = Object.assign({}, this.componentStyles || {}, _attrs)
      return { styleAttrs: styles }
      // const { styleAttrs, nativeAttrs } = extractAttrs(styles)

      // return {
      //   styleAttrs,
      //   nativeAttrs
      // }

    },
    className () {
      const { styleAttrs } = this.splitProps
      // TODO: 生成css
      const boxStylesObject = composeSystem(styleAttrs, this.theme)
      return css(boxStylesObject)
    },
    /** Computed attributes object */
    computedAttrs () {
      return {
        ...name && { 'elp-component-name': name },
        ...this.splitProps.nativeAttrs
      }
    }
  },
  methods: {
    createClass (props = {}) {
      return css(composeSystem(props, this.theme))
    }
  }
})
