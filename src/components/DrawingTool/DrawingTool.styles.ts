
import styled from 'styled-components'
import { Mode } from './DrawingTool'

const getToolbarWidth = (props) => {
  if (props.mode === 'portrait') return '100%'
  return `${props.buttonSize + 10}px`
}

const getToolbarHeight = (props) => {
  if (props.mode === 'landscape') return '100%'
  return `${props.buttonSize + 10}px`
}

export const Container = styled.div<{mode: Mode, offsetTop: number, maxWidth: number, maxHeight: number}>`
  position: relative;
  width: 100%;
  height: ${props => `calc(100% - ${props.offsetTop}px)`};
  max-width: ${props => props.maxWidth}px;
  max-height: ${props => props.maxHeight}px;
  display: flex;
  flex-shrink: none;
  flex-direction: ${props => props.mode === 'landscape' ? 'row' : 'column'};
  top: ${props => `calc(50% - ${props.offsetTop/2}px)`};
  left: 50%;
  transform: translate(-50%, -50%);
  * {
    box-sizing: border-box;
  }
`

export const ButtonGroup = styled.div<{mode: Mode, buttonSize: number}>`
  display: flex;
  flex-shrink: none;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  > div {
    margin-bottom: ${props => props.mode === 'landscape' ? `${Math.floor(props.buttonSize / 5)}px` : 0};
    margin-right: ${props => props.mode === 'portrait' ? `${Math.floor(props.buttonSize / 5)}px` : 0};
  }
`

export const ColourButtonGroup = styled.div<{mode: Mode, buttonSize: number}>`
  background-color: rgba(255, 255, 255, .5);
  border-radius: ${props => props.buttonSize}px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: ${props => props.mode === 'portrait' ? '8px' : 0};
  padding-right: ${props => props.mode === 'portrait' ? '8px' : 0};
  display: flex;
  height: 70%;
  flex-wrap: ${props => props.mode === 'landscape' ? 'wrap' : 'no-wrap'};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  > div {
    margin-bottom: ${props => props.mode === 'landscape' ? `${Math.floor(props.buttonSize / 5)}px` : 0};
    margin-right: ${props => props.mode === 'portrait' ? `${Math.floor(props.buttonSize / 5)}px` : 0};
  }
`

export const ScrollableColours = styled.div`
  overflow: hidden;
`

export const ColourOpacityToggle = styled.div<{mode: Mode, buttonSize: number}>`
  background-color: #ebebeb;
  border: 6px solid #d9d9d9;
  box-shadow: 0px 4px 0px rgba(0,0,0, .5);
  border-radius: ${props => props.buttonSize}px;
  width: ${props => props.mode === 'landscape' ? `${props.buttonSize + props.buttonSize * 0.2}px` : 'auto'};
  padding-bottom: ${props => props.mode === 'landscape' ? '4px' : '0px'};
  padding-right: ${props => props.mode === 'landscape' ? '0px' : '4px'};
  display: flex;
  flex-shrink: none;
  flex-wrap: ${props => props.mode === 'landscape' ? 'wrap' : 'no-wrap'};
  justify-content: center;
  align-items: center;
  position: relative;
  > div {
    transform: scale(1.2);
    &:first-child {
      position: relative;
      top: ${props => props.mode === 'landscape' ? '4px' : '0px'};
      left: ${props => props.mode === 'portrait' ? '4px' : '0px'};
    }
  }
`

export const OpacityButton = styled.div<{mode: Mode, buttonSize: number}>`
  width: ${props => props.buttonSize}px;
  height: ${props => props.buttonSize}px;
  cursor: pointer;
`

export const LeftToolbarContainer = styled.div<{mode: Mode, buttonSize: number}>`
  position: relative;
  width: ${(props) => getToolbarWidth(props)};
  height: ${(props) => getToolbarHeight(props)};
  order: ${props => props.mode === 'landscape' ? 1 : 2 };
  display: flex;
  flex-direction: ${props => props.mode === 'landscape' ? 'column' : 'row'};
  justify-content: space-between;
  align-items: center;
`

export const RightToolbarContainer = styled.div<{mode: Mode, buttonSize: number}>`
  position: relative;
  width: ${(props) => getToolbarWidth(props)};
  max-height: ${(props) => getToolbarHeight(props)};
  order: 3;
  justify-content: space-between;
  display: flex;
  flex-direction: ${props => props.mode === 'landscape' ? 'column' : 'row'};
  margin-top: ${props => props.mode === 'portrait' ? '10px' : '0px'};
  align-items: center;
`

export const SketchContainer = styled.div<{mode: Mode}>`
  position: relative;
  flex: 1 1 auto;
  margin-left: ${props => props.mode === 'landscape' ? '10px' : '0px'};
  margin-right: ${props => props.mode === 'landscape' ? '20px' : '0px'};
  margin-bottom: ${props => props.mode === 'landscape' ? '0px' : '10px'};
  order: ${props => props.mode === 'landscape' ? 2 : 1 };
`

export const PaperBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #ebebeb;
  box-shadow: 0px 4px 0px #C7C7C6;

  &:before, &:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 7px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: rgba(0,0,0,.3);
    box-shadow: 0 15px 0px rgba(0,0,0,.3);
    transform: rotate(-3deg);
  }
  &:after {
    transform: rotate(3deg);
    right: 10px;
    left: auto;
  }
`

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`