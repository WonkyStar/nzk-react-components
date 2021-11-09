
import styled from 'styled-components'
import { Orientation } from './DrawingTool'

const getToolbarWidth = (props) => {
  if (props.orientation === 'PORTRAIT') return '100%'
  return `${props.buttonSize + 10}px`
}

const getToolbarHeight = (props) => {
  if (props.orientation === 'LANDSCAPE') return '100%'
  return `${props.buttonSize + 10}px`
}

export const Container = styled.div<{maxWidth: number, maxHeight: number}>`
  position: relative;
  width: calc(100% - 40px);
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.maxWidth}px;
  max-height: ${props => props.maxHeight}px;
  * {
    box-sizing: border-box;
  }
`

export const Header = styled.div`
  position: relative;
  height: 80px;
  color: white;
  display: flex;
  align-items: center;
  color: white;
  font-size: 36px;
  font-family: 'Rammetto One';
  line-height: 80px;
  text-align: center;
  justify-content: space-between;
  @media (max-height: 600px) {
    height: 60px;
    line-height: 60px;
    font-size: 24px;
  }
  @media (max-width: 1024px) {
    > :nth-child(2) {
      font-size: 24px;
    }
  }
  @media (max-width: 768px) {
    > :nth-child(2) {
      display: none;
    }
  }
`

export const Tool = styled.div<{orientation: Orientation}>`
  position: absolute;
  top: 90px;
  height: calc(100% - 110px);
  width: 100%;
  display: flex;
  flex-shrink: none;
  flex-direction: ${props => props.orientation === 'LANDSCAPE' ? 'row' : 'column'};
  @media (max-height: 600px) {
    top: 70px;
    height: calc(100% - 90px)
  }
`

export const ButtonGroup = styled.div<{orientation: Orientation, buttonSize: number}>`
  display: flex;
  flex-shrink: none;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  > div {
    margin-bottom: ${props => props.orientation === 'LANDSCAPE' ? `${Math.floor(props.buttonSize / 5)}px` : 0};
    margin-right: ${props => props.orientation === 'PORTRAIT' ? `${Math.floor(props.buttonSize / 5)}px` : 0};
  }
`

export const ColourButtonGroup = styled.div<{orientation: Orientation, buttonSize: number}>`
  background-color: rgba(255, 255, 255, .5);
  border-radius: ${props => props.buttonSize}px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: ${props => props.orientation === 'PORTRAIT' ? '8px' : 0};
  padding-right: ${props => props.orientation === 'PORTRAIT' ? '8px' : 0};
  display: flex;
  height: 70%;
  flex-wrap: ${props => props.orientation === 'LANDSCAPE' ? 'wrap' : 'no-wrap'};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  > div {
    margin-bottom: ${props => props.orientation === 'LANDSCAPE' ? `${Math.floor(props.buttonSize / 5)}px` : 0};
    margin-right: ${props => props.orientation === 'PORTRAIT' ? `${Math.floor(props.buttonSize / 5)}px` : 0};
  }
`

export const ScrollableColours = styled.div`
  overflow: hidden;
`

export const ColourOpacityToggle = styled.div<{orientation: Orientation, buttonSize: number}>`
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

export const LeftToolbarContainer = styled.div<{orientation: Orientation, buttonSize: number, disabled: boolean}>`
  position: relative;
  pointer-events: ${props => props.disabled ? 'none' : 'all'};
  opacity: ${(props) => props.disabled ? 0.5 : 1};
  filter: ${(props) => props.disabled ? 'grayscale(100%)' : 'none'};
  width: ${(props) => getToolbarWidth(props)};
  height: ${(props) => getToolbarHeight(props)};
  order: ${props => props.orientation === 'LANDSCAPE' ? 1 : 2 };
  display: flex;
  flex-direction: ${props => props.orientation === 'LANDSCAPE' ? 'column' : 'row'};
  justify-content: space-between;
  align-items: center;
`

export const RightToolbarContainer = styled.div<{orientation: Orientation, buttonSize: number, disabled: boolean}>`
  position: relative;
  width: ${(props) => getToolbarWidth(props)};
  max-height: ${(props) => getToolbarHeight(props)};
  opacity: ${(props) => props.disabled ? 0.5 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'all'};
  filter: ${(props) => props.disabled ? 'grayscale(100%)' : 'none'};
  order: 3;
  justify-content: space-between;
  display: flex;
  flex-direction: ${props => props.orientation === 'LANDSCAPE' ? 'column' : 'row'};
  margin-top: ${props => props.orientation === 'PORTRAIT' ? '10px' : '0px'};
  align-items: center;
`

export const SketchContainer = styled.div<{orientation: Orientation}>`
  position: relative;
  flex: 1 1 auto;
  margin-left: ${props => props.orientation === 'LANDSCAPE' ? '10px' : '0px'};
  margin-right: ${props => props.orientation === 'LANDSCAPE' ? '20px' : '0px'};
  margin-bottom: ${props => props.orientation === 'LANDSCAPE' ? '0px' : '10px'};
  order: ${props => props.orientation === 'LANDSCAPE' ? 2 : 1 };

  .moveable-rotation .moveable-control.moveable-rotation-control {
    border: none !important;
    width: 24px !important;
    height: 24px !important;
    margin-top: -12px !important;
    margin-left: -12px !important;
    cursor: alias;
    opacity: 0;
  }

  .moveable-control {
    width: 24px !important;
    height: 24px !important;
    margin-top: -12px !important;
    margin-left: -12px !important;
    border: none !important;
  }

  .moveable-line.moveable-rotation-line {
    width: 4px !important;
    height: 40px !important;
    margin-left: -1px;
  }

  .moveable-line {
    height: 4px !important;
  }

  .moveable-origin {
    display: none !important;
  }
}
`

export const PaperBackground = styled.div<{cutMode?: boolean}>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 0px #C7C7C6;
  background: ${props => props.cutMode 
    ? 'repeating-linear-gradient(-45deg, #ebebeb, #ebebeb 20px, #dfdfdf 20px, #dfdfdf 40px)' 
    : '#ebebeb'};

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

export const InSketchActions = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 102;
`

export const InSketchAction = styled.div`
  position: relative;
  margin-right: 20px;
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

export const ImageToPlaceContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 101;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}`

export const ImageToPlace = styled.img`
  position: absolute;
  width: 80%;
  max-width: 400px;
  @media (max-width: 768px) {
    max-width: 250px;
  }
}
`

export const CutImageTutorial = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  width: 90%;
  height: 90%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  max-height: 600px;
  background-color: white;
  z-index: 101;
  border-radius: 50px;
  padding: 40px;
  background-color: #341644;
  box-shadow: 0 -5px 0 #531D75, 0 10px 0 #1C042B, 0 14px 0 rgba(0,0,0,0.3);
  box-sizing: border-box;
  color: white;
  font-size: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  img {
    width: 100%;
    max-width: 350px;
    @media (max-width: 768px) {
      max-width: 170px;
    }
  }
  > :last-child {
    width: 100%;
    display: flex;
    justify-content: center;
  }

`
