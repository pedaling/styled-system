
# @class101/styled-system__props

Utilities for using Styled System props

```sh
npm i @class101/styled-system__props
```

```js
import { pick, omit } from '@class101/styled-system__props'

const attr = omit({
  id: 'keep-this',
  color: 'primary',
})
// { id: 'keep-this' }

const props = pick({
  className: 'hello',
  color: 'secondary',
})
// { color: 'secondary' }
```

MIT License
