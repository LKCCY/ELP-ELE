import { background, border, color, borderRadius, flexbox, grid, layout, position, shadow, space, typography, compose } from 'styled-system'

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