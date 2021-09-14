import { createStyleFunction, createParser } from '@class101/styled-system__core'
// v4 api shims
import layout from '@class101/styled-system__layout'
import color from '@class101/styled-system__color'
import typography from '@class101/styled-system__typography'
import flexbox from '@class101/styled-system__flexbox'
import grid from '@class101/styled-system__grid'
import border from '@class101/styled-system__border'
import background from '@class101/styled-system__background'
import position from '@class101/styled-system__position'

export {
  get,
  createParser,
  createStyleFunction,
  compose,
  system,
} from '@class101/styled-system__core'

export { margin, padding, space } from '@class101/styled-system__space'
export { color } from '@class101/styled-system__color'
export { layout } from '@class101/styled-system__layout'
export { typography } from '@class101/styled-system__typography'
export { flexbox } from '@class101/styled-system__flexbox'
export { border } from '@class101/styled-system__border'
export { background } from '@class101/styled-system__background'
export { position } from '@class101/styled-system__position'
export { grid } from '@class101/styled-system__grid'
export { shadow } from '@class101/styled-system__shadow'
export { default as boxShadow, default as textShadow } from '@class101/styled-system__shadow'

export {
  variant,
  buttonStyle,
  textStyle,
  colorStyle
} from '@class101/styled-system__variant'

const {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY
} = layout
const { opacity } = color
const {
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
} = typography

const {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} = flexbox
const {
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
} = grid
const {
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
} = border
const {
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
} = background
const {
  zIndex,
  top,
  right,
  bottom,
  left,
} = position

export { default as borders } from '@class101/styled-system__border'
export {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
  // color
  opacity,
  // typography
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
  // flexbox
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  // grid
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  // border
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  // background
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  // position
  zIndex,
  top,
  right,
  bottom,
  left,
}

// v4 style API shim
export const style = ({
  prop,
  cssProperty,
  alias,
  key,
  transformValue,
  scale,
  // new api
  properties,
}) => {
  const config = {}
  config[prop] = createStyleFunction({
    properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue,
  })
  if (alias) config[alias] = config[prop]
  const parse = createParser(config)

  return parse
}
