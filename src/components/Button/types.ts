export const Themes = {
  'primary': 'primary',
  'confirm': 'confirm',
  'the-pink': 'the-pink',
  'purple': 'purple',
  'red': 'red',
  'orange': 'orange',
  'green': 'green',
  'yellow': 'yellow',
  'white': 'white',
} as const

export type Theme = (typeof Themes)[keyof typeof Themes]

export const Sizes = {
  'xx-large': 'xx-large',
  'x-large': 'x-large',
  'large': 'large',
  'regular': 'regular',
  'small': 'small',
  'x-small': 'x-small',
}

export type Size = (typeof Sizes)[keyof typeof Sizes]
