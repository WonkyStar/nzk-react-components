import React, { HTMLAttributes, forwardRef } from "react";
import styled from "styled-components";
import Button, { ButtonProps } from "../Button/Button";
import { SIZES } from "../Button/constants";

const Wrapper = styled.div<{ $overlap: number }>`
  display: flex;
  > .button--icon {
    z-index: 2;
  }
  > .button--label {
    margin-left: -${(props) => props.$overlap}px;
    z-index: 1;
  }
`;

export type IconButtonProps = {
  icon: any;
} & ButtonProps &
  HTMLAttributes<HTMLDivElement>;

export default forwardRef<HTMLDivElement, IconButtonProps>(
  (props: IconButtonProps, ref) => {
    const W = (props.size ? SIZES[props.size] : props.height) || 0;

    const buttonProps: ButtonProps = {
      backgroundColor: props.backgroundColor,
      height: props.height,
      fullWidth: props.fullWidth,
      children: props.children,
      color: props.color,
      strokeColor: props.strokeColor,
      dropShadowColor: props.dropShadowColor,
      shadowColor: props.shadowColor,
      fontSize: props.fontSize,
      round: props.round,
      disabled: props.disabled,
      wiggle: props.wiggle,
      size: props.size,
      theme: props.theme,
    };

    return (
      <Wrapper as={props.as} $overlap={0.3 * W} ref={ref} {...props}>
        <Button className="button--icon" {...buttonProps} as="span" round>
          {props.icon}
        </Button>
        <Button className="button--label" {...buttonProps} as="span" />
      </Wrapper>
    );
  }
);
