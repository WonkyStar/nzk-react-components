import styled from 'styled-components'
import { Orientation } from '../../DrawingTool'

export const Container = styled.div<{orientation: Orientation, buttonSize: number}>`
  custor: pointer;
  background-color: #ebebeb;
  border: 6px solid #d9d9d9;
  box-shadow: 0px 4px 0px rgba(0,0,0, .5);
  border-radius: ${props => props.buttonSize}px;
  width: ${props => props.orientation === 'LANDSCAPE' ? `${props.buttonSize + props.buttonSize * 0.2}px` : 'auto'};
  padding-bottom: ${props => props.orientation === 'LANDSCAPE' ? '4px' : '0px'};
  padding-right: ${props => props.orientation === 'LANDSCAPE' ? '0px' : '4px'};
  display: flex;
  flex-shrink: none;
  flex-wrap: ${props => props.orientation === 'LANDSCAPE' ? 'wrap' : 'no-wrap'};
  justify-content: center;
  align-items: center;
  position: relative;
  > div {
    transform: scale(1.2);
    &:first-child {
      position: relative;
      top: ${props => props.orientation === 'LANDSCAPE' ? '4px' : '0px'};
      left: ${props => props.orientation === 'PORTRAIT' ? '4px' : '0px'};
    }
  }
`

export const OpacityButton = styled.div<{orientation: Orientation, buttonSize: number}>`
  width: ${props => props.buttonSize}px;
  height: ${props => props.buttonSize}px;
  cursor: pointer;
`