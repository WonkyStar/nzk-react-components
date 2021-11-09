import styled from 'styled-components'
import { Orientation } from '../../DrawingTool'

export const Container = styled.div<{orientation: Orientation, size: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  flex-wrap: ${props => props.orientation === 'LANDSCAPE' ? 'wrap' : 'no-wrap'};
  height: ${props => props.orientation === 'PORTRAIT' ? 'auto' : '80%'};
  width: ${props => props.orientation === 'PORTRAIT' ? '80%' : 'auto'};
`

export const ScrollContainer = styled.div<{orientation: Orientation, size: number}>`
  height: ${props => `calc(100% - ${3.5 * props.size}px)`};
  background-color: rgba(255, 255, 255, .5);
  border-radius: ${props => props.size}px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: ${props => props.orientation === 'PORTRAIT' ? '8px' : 0};
  padding-right: ${props => props.orientation === 'PORTRAIT' ? '8px' : 0};
  margin-bottom: ${props => props.orientation === 'PORTRAIT' ? '0px' : '7px'};
  margin-left: ${props => props.orientation === 'PORTRAIT' ? '7px' : '0px'};
  margin-right: ${props => props.orientation === 'PORTRAIT' ? '7px' : '0px'};
  position: relative;
  flex: 1 1 auto;
  display: flex;
  flex-wrap: ${props => props.orientation === 'LANDSCAPE' ? 'wrap' : 'no-wrap'};
  justify-content: ${props => props.orientation === 'LANDSCAPE' ? 'center' : 'flex-start'};;
  align-items: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  > div {
    margin-bottom: ${props => props.orientation === 'LANDSCAPE' ? `${Math.floor(props.size / 5)}px` : 0};
    margin-right: ${props => props.orientation === 'PORTRAIT' ? `${Math.floor(props.size / 5)}px` : 0};
  }
`


