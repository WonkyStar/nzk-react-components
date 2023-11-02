import { ReactHTML } from 'react';
import { StyledSpanButton  } from './Button.styles'
import { Size, Theme } from './types';

export type BaseProps = {
  as?: keyof ReactHTML
  backgroundColor?: string;
  height?: number;
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

  size?: Size
  theme?: Theme
}

export type ButtonProps = {
} & BaseProps

const Button = StyledSpanButton

export default Button
