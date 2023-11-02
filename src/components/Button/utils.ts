import { css } from 'styled-components'
import { darken, getLuminance, lighten } from 'polished'

export const getTextColor = (props: {
  color?: string
  backgroundColor: string
}) => {
  if (props.color) {
    return props.color
  }
  if (props.backgroundColor && getLuminance(props.backgroundColor) <= 0.5) return '#fff'
  return '#000'
}


const hasFontSize = (props: {
  height: number
} | { fontSize: number }): props is { fontSize: number } => {
  return Boolean((props as { fontSize: number }).fontSize)
}

export const getTextSize = (props: {
  height: number
} | { fontSize: number }) => {
  if (hasFontSize(props)) {
    return props.fontSize
  }
  return `${props.height / 2.5}px`
}

export const getPadding = (props: { height: number }) => {
  return `${0.001 * props.height}px ${props.height / 2}px`
}

export const getSizeComparedToBase = (
  props: { height: number },
  originalValue: number
) => {
  return (props.height * originalValue) / 64
}

export const getShadows = (props: {
  backgroundColor: string
  shadowColor?: string
  dropShadowColor?: string
  strokeColor?: string
  height: number
}) => {
  const light = getLuminance(props.backgroundColor)
  const shadowColor =
    props.shadowColor
    || light && darken(0.2, props.backgroundColor)
    || !light && lighten(0.2, props.backgroundColor)
  const dropShadowColor = props.dropShadowColor || `rgba(0,0,0,0.3)`
  const strokeColor =
    props.strokeColor
    || light && lighten(0.1, props.backgroundColor)
    || !light && darken(0.1, props.backgroundColor)
  return css`
    box-shadow: 0 ${getSizeComparedToBase(props, 5)}px 0 ${shadowColor},
      0 ${getSizeComparedToBase(props, 12)}px 0 ${dropShadowColor},
      inset 0 0px 0px ${getSizeComparedToBase(props, 5)}px ${strokeColor};

    :active {
      transform: translateY(${getSizeComparedToBase(props, 7)}px);
      box-shadow: 0 ${getSizeComparedToBase(props, 5)}px 0 ${shadowColor},
        inset 0 0px 0px ${getSizeComparedToBase(props, 5)}px ${strokeColor};
    }
  `
}
