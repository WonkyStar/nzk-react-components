import styled from 'styled-components';
import { AvatarColorsProps } from './Avatar';

export const Wrapper = styled.div`
  position: relative;
  --border-color: ${(props: { size?: string, colors?: AvatarColorsProps }) => props.colors?.border};
  --shadow-color: ${(props: { size?: string, colors?: AvatarColorsProps }) => props.colors?.shadow};
  --dropshadow-color: ${(props: { size?: string, colors?: AvatarColorsProps }) => props.colors?.dropshadow};
  --size: ${(props: { size?: string, colors?: AvatarColorsProps }) => props.size};
  height: calc(var(--size) + calc(var(--size) * 0.1));
  width: var(--size);
  box-sizing: content-box !important;
`

export const AvatarImage = styled.div`
  height: calc(var(--size) - calc(var(--size) * 0.1));
  width: calc(100% - calc(var(--size) * 0.1));
  background-image: url(${(props: { src?: string }) => props.src});
  background-size: cover;
  background-position: center;
  border: calc(var(--size) * 0.05) solid var(--border-color);
  box-shadow: 0 calc(var(--size) * 0.05) 0 var(--shadow-color), 0 calc(var(--size) * 0.1) 0 var(--dropshadow-color);
  background-color: #ebebeb;
  border-radius: 50%;
  overflow: hidden;
`

export const Flag = styled.div`
  position: absolute;
  height: calc(var(--size) * 0.35);
  width: calc(var(--size) * 0.35);
  top: 0;
  right: 0;
  background-image: url(${(props: { src?: string }) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: calc(var(--size) * 0.6 * 0.05) solid var(--border-color);
  box-shadow: 0 calc(var(--size) * 0.6 * 0.05) 0 var(--shadow-color), 0 calc(var(--size) * 0.6 * 0.1) 0 var(--dropshadow-color);
  
`
