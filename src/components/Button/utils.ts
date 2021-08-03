import { getLuminance } from 'polished'
import { BaseProps } from './Button'

export const getTextColor = (props: BaseProps) => {
  if (props.color) {
    return props.color
  }
  if (getLuminance(props.backgroundColor) <= 0.5) return '#fff'
  return '#000'
}

export const getTextSize = (props: BaseProps) => {
  if (props.fontSize) {
    return props.fontSize
  }
  return `${props.height / 2.5}px`
}

export const getPadding = (props: BaseProps) => {
  return `${0.001 * props.height}px ${props.height / 2}px`
}

export const getSizeComparedToBase = (
  props: BaseProps,
  originalValue: number
) => {
  return (props.height * originalValue) / 64
}

