/// <reference types="react" />
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
export interface ButtonProps extends BaseProps {
    size?: 'x-small' | 'small' | 'regular' | 'large' | 'x-large' | 'xx-large';
    theme?: 'confirm' | 'primary' | 'the-pink' | 'purple' | 'red' | 'orange' | 'green' | 'yellow';
    height?: number;
    backgroundColor?: string;
    children?: any;
    disabled?: boolean;
    onClick?: () => void;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
