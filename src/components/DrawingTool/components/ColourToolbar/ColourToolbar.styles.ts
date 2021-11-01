import styled from 'styled-components'
import { Mode } from '../../DrawingTool'

export const Container = styled.div<{mode: Mode, size: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  flex-wrap: ${props => props.mode === 'landscape' ? 'wrap' : 'no-wrap'};
  height: ${props => props.mode === 'portrait' ? 'auto' : '80%'};
  width: ${props => props.mode === 'portrait' ? '80%' : 'auto'};
`

export const ScrollContainer = styled.div<{mode: Mode, size: number}>`
  height: ${props => `calc(100% - ${3.5 * props.size}px)`};
  background-color: rgba(255, 255, 255, .5);
  border-radius: ${props => props.size}px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: ${props => props.mode === 'portrait' ? '8px' : 0};
  padding-right: ${props => props.mode === 'portrait' ? '8px' : 0};
  margin-bottom: ${props => props.mode === 'portrait' ? '0px' : '7px'};
  margin-left: ${props => props.mode === 'portrait' ? '7px' : '0px'};
  margin-right: ${props => props.mode === 'portrait' ? '7px' : '0px'};
  position: relative;
  flex: 1 1 auto;
  display: flex;
  flex-wrap: ${props => props.mode === 'landscape' ? 'wrap' : 'no-wrap'};
  justify-content: ${props => props.mode === 'landscape' ? 'center' : 'flex-start'};;
  align-items: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  > div {
    margin-bottom: ${props => props.mode === 'landscape' ? `${Math.floor(props.size / 5)}px` : 0};
    margin-right: ${props => props.mode === 'portrait' ? `${Math.floor(props.size / 5)}px` : 0};
  }
`


