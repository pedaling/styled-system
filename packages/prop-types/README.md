
# @class101/styled-system__prop-types

Add prop types to components built with Styled System

```sh
npm i styled-system @class101/styled-system__prop-types
```

```js
import styled from 'styled-components'
import { space, color } from 'styled-system'
import propTypes from '@class101/styled-system__prop-types'

const Box = styled('div')(space, color)

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
}
```

## Available Type Categories

* `space`
* `color`
* `layout`
* `typography`
* `flexbox`
* `border`
* `background`
* `position`
* `grid`

See props of each category in [the reference table](https://styled-system.com/table).

## Custom Props

```js
import styled from 'styled-components'
import { space, system } from 'styled-system'
import propTypes, { propType } from '@class101/styled-system__prop-types'

const gridGap = system({
  gap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: [0, 4, 8, 16, 32, 64, 128, 256, 512]
  }
})

const Stack = styled('div')(
  compose(space, gridGap)
)

Stack.propTypes = {
  ...propTypes.space,
  gap: propType,
}
```
