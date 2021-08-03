import { darken, getLuminance, lighten } from 'polished'
import styled, { css } from 'styled-components'
import { BaseProps } from './Button'
import { getPadding, getSizeComparedToBase, getTextColor, getTextSize } from './utils'


export const getShadows = (props: BaseProps) => {
  let light = getLuminance(props.backgroundColor)
  let shadowColor =
    props.shadowColor
    || light && darken(0.2, props.backgroundColor)
    || !light && lighten(0.2, props.backgroundColor)
  let dropShadowColor = props.dropShadowColor || `rgba(0,0,0,0.3)`
  let strokeColor =
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

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rammetto One';
  border-radius: 1000px;
  cursor: pointer;
  user-select: none;
  ${(props: BaseProps) => css`
    background-color: ${props.backgroundColor};
    height: ${props.height}px;
    margin-bottom: ${getSizeComparedToBase(props, 12)}px;
    color: ${getTextColor(props)};
    font-size: ${getTextSize(props)};
    padding: ${getPadding(props)};
    ${getShadows(props)};
    filter: ${props.disabled ? 'grayscale(100%)' : 'none'};
  `};
  ${(props: BaseProps) => props.fullWidth && css`width: 100%;`}
  ${(props: BaseProps) => props.wiggle && css`
  animation: wiggle alternate-reverse 2s linear infinite;
  animation-delay: ${Math.random()}s;
    @keyframes wiggle {
      0% {
        transform: rotate(-3deg);
      }
      10% {
        transform: rotate(3deg);
      }
      20% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  `}
  ${(props: BaseProps) =>
    props.round &&
    css`
      width: ${props.height}px;
      padding: 0;
      flex-shrink: 0;
    `}

  svg {
    height: 100%;
    width: 100%;
  }
`