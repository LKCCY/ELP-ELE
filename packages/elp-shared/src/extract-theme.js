import { background, border, color, borderRadius, flexbox, grid, layout, position, shadow, space, typography, compose } from 'styled-system'
import { css } from "@emotion/css"

const systemFunc= compose(
  space,
  layout,
  color,
  background,
  border,
  borderRadius,
  grid,
  position,
  shadow,
  typography,
  flexbox
)

export const composeSystem = (props = {}, theme = {}) => systemFunc({ ...props, theme })

export const createClass = (props = {}, theme = {}) => {
  return css(composeSystem(props, theme))
}