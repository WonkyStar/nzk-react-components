import React from "react";
import styled from "styled-components";
import ICONS from "./icons";

export interface IconProps {
  name: string;
  $size?: string;
  fill?: string;
}

const SvgWrapper = styled.div<IconProps>`
  height: ${(props) => props.$size};
  width: ${(props) => props.$size};
  display: inline-flex;

  svg {
    width: 100% !important;
    height: 100% !important;
  }
`;

const Icon = (props: IconProps) => {
  return (
    <SvgWrapper {...props}>
      {React.cloneElement(ICONS[props.name], props)}
    </SvgWrapper>
  );
};

Icon.defaultProps = {
  size: null,
};

export default Icon;
