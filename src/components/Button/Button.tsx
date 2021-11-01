import React from 'react'
import { Wrapper } from './Button.styles'
import { SIZES, THEMES } from './constants'

export interface BaseProps {
  backgroundColor: string;
  height: number;
  fullWidth?: boolean;
  children: any;
  color?: string;
  strokeColor?: string;
  dropShadowColor?: string;
  shadowColor?: string;
  fontSize?: string;
  round?: boolean;
  disabled?: boolean;
  wiggle?: boolean;
}

// @ts-ignore
export interface ButtonProps extends BaseProps {
  size?: 'x-small' | 'small' | 'regular' | 'large' | 'x-large' | 'xx-large';
  theme?: 'confirm' | 'primary' | 'the-pink' | 'purple' | 'red' | 'orange' | 'green' | 'yellow' | 'white';
  height?: number;
  backgroundColor?: string;
  children?: any;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    // @ts-ignore
    <Wrapper
      // @ts-ignore
      height={props.size && SIZES[props.size]}
      {...props}
      {...(props.theme ? THEMES[props.theme] : {})}
      onClick={() => {
        if (props.onClick) {
          props.onClick()
        }
      }}
    />
  )
}

export default Button
