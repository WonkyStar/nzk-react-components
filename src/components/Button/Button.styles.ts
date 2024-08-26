import styled, { css } from "styled-components";
import { BaseProps } from "./Button";
import {
  getPadding,
  getShadows,
  getSizeComparedToBase,
  getTextColor,
  getTextSize,
} from "./utils";
import { SIZES, THEMES } from "./constants";

const getBaseStyle = () => {
  return css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: "Rammetto One";
    border-radius: 1000px;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
  `;
};

const getSizes = (props: {
  height: number;
  fontSize?: number;
  round?: boolean;
}) => {
  return css`
    outline: none;
    border: none;
    height: ${props.height}px;
    font-size: ${getTextSize(props)};
    margin-bottom: ${getSizeComparedToBase(props, 12)}px;
    padding: ${getPadding(props)};
    ${props.round &&
    css`
      width: ${props.height}px;
      padding: 0;
      flex-shrink: 0;
    `}
  `;
};

const getColors = (props: BaseProps) => {
  const theme = props.theme ? THEMES[props.theme] : undefined;
  const fallback = THEMES.primary;

  return {
    backgroundColor:
      theme?.backgroundColor ||
      props.backgroundColor ||
      fallback.backgroundColor,
    color: theme?.color || props.color,
    strokeColor: theme?.strokeColor || props.strokeColor,
    dropShadowColor: props.dropShadowColor || "rgba(0,0,0,0.3)",
    shadowColor: theme?.shadowColor || props.shadowColor,
  };
};

const getHeight = (props: BaseProps) => {
  const size = props.size ? SIZES[props.size] : undefined;
  return size || props.height || SIZES.regular;
};

const buttonProps = [
  "backgroundColor",
  "height",
  "fullWidth",
  "color",
  "strokeColor",
  "dropShadowColor",
  "shadowColor",
  "fontSize",
  "round",
  "disabled",
  "wiggle",
  "size",
  "theme",
];

export const StyledSpanButton = styled.div
  .withConfig({
    shouldForwardProp: (prop) => {
      return !buttonProps.includes(prop);
    },
  })
  .attrs((props) => ({
    role: "button" || props.role,
  }))<BaseProps>`
  ${(props) => {
    const colors = getColors(props);
    const height = getHeight(props);

    return css`
      // Base
      ${getBaseStyle()}
      // COLORS
      background-color: ${colors.backgroundColor};
      ${getShadows({ ...colors, height })};
      color: ${getTextColor(colors)};
      filter: ${props.disabled ? "grayscale(100%)" : "none"};

      // Dimensions
      ${getSizes({ height, round: props.round })}
    `;
  }}

  svg {
    height: 100%;
    width: 100%;
  }

`;
