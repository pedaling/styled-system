import { variant } from '../src'
import { system, compose } from '@styled-system/core'

const theme = {
  colors: {
    blue: '#07c',
    black: '#111',
  },
}

const fontSize = system({ fontSize: true })
const color = system({ color: true })

test('variant returns style objects from theme', () => {
  const buttons = variant({ key: 'buttons' })
  const a = buttons({
    theme: {
      buttons: {
        primary: {
          padding: '32px',
          backgroundColor: 'tomato',
        },
      },
    },
    variant: 'primary',
  })
  expect(a).toEqual({
    padding: '32px',
    backgroundColor: 'tomato',
  })
})

test('variant prop can be customized', () => {
  const buttons = variant({ key: 'buttons', prop: 'type' })
  const a = buttons({
    theme: {
      buttons: {
        primary: {
          padding: '32px',
          backgroundColor: 'tomato',
        },
      },
    },
    type: 'primary',
  })
  expect(a).toEqual({
    padding: '32px',
    backgroundColor: 'tomato',
  })
})

test('variant can be composed', () => {
  const system = compose(
    variant({ key: 'typography' }),
    fontSize,
    color
  )
  const result = system({
    theme: {
      typography: {
        primary: {
          fontSize: '32px',
          color: '#fff',
        },
      },
    },
    variant: 'primary',
    color: '#111',
  })
  expect(result).toEqual({
    fontSize: '32px',
    color: '#111',
  })
})
