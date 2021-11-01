/* eslint-env browser */
import React, { useRef, useState, useEffect, useLayoutEffect  } from 'react'
import { darken, lighten, getLuminance } from 'polished'
import * as s from './DrawingTool.styles'
import useDebounce from '../../hooks/useDebounce'
import useElementSize from '../../hooks/useElementSize'
import Button from '../Button'
import Icon from '../Icon'
import { ButtonProps } from '../Button/Button'
import ColourToolbar from './components/ColourToolbar'
import Modal from '../Modal'
import { useDrawingTool, BrushSize } from './DrawingToolProvider'

export interface Props {
  showPaperBackground?: boolean
  disableCameraUpload?: boolean
  disableAutoCache?: boolean
  cacheKey?: string
}

export type Mode = 'landscape' | 'portrait'

const Drawing = (props: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sketchOuterRef = useRef<HTMLDivElement | null>(null)
  const sketchInnerRef = useRef<HTMLDivElement | null>(null)

  const { width: containerWidth, height: containerHeight } = useElementSize(containerRef)
  const debouncedContainerWidth = useDebounce(containerWidth, 1000)
  const debouncedContainerHeight = useDebounce(containerHeight, 1000)

  const [mode, setMode] = useState<Mode>('landscape')
  const [maxContainerWidth, setMaxContainerWidth] = useState(1280)
  const [maxContainerHeight, setMaxContainerHeight] = useState(960)
  const [buttonSize, setButtonSize] = useState<number>(50)
  const [resizing, setResizing] = useState(true)
  const [showRestartConfirmModal, setShowRestartConfirmModal] = useState(false)

  const {
    initSketch,
    currentColour,
    brushOpacity,
    setBruchOpacity,
    brushSize,
    setBrushSize,
    brushType,
    setBrushType,
    undo,
    redo,
    restart,
    setCacheKey,
    setAutoCache
  } = useDrawingTool()

  useEffect(() => {
    if (typeof props.disableAutoCache === 'boolean') {
      setAutoCache(!props.disableAutoCache)
    }
    if (props.cacheKey) setCacheKey(props.cacheKey)
  }, [])

  useLayoutEffect(() => {
    if (debouncedContainerHeight !== containerHeight || debouncedContainerWidth !== containerWidth)  {
      setResizing(true)
    } else if (containerWidth > 0 && containerHeight > 0) {
      setResizing(false)
    }
  }, [debouncedContainerWidth, debouncedContainerHeight, containerWidth, containerHeight])

  useLayoutEffect(() => {
    setMaxContainerHeight(containerWidth * 1.4)
    setMaxContainerWidth(containerHeight * 1.4)

    if (containerWidth < containerHeight && containerWidth < 1024) {
      setButtonSize(Math.floor(containerWidth / 11) * 0.85)
      setMode('portrait')
    } else {
      setButtonSize(Math.floor(containerHeight / 11) * 0.85)
      setMode('landscape')
    }
  }, [containerWidth, containerHeight])

  // Intialise sketch tool
  useEffect(() => {
    if (!resizing && sketchInnerRef.current) {
      initSketch(sketchInnerRef.current)
    }
  }, [resizing, sketchInnerRef])

  const onClickRestart = () => {
    setShowRestartConfirmModal(true)
  }

  const strokeBrushColour = getLuminance(currentColour.hex) > 0.05 ? darken(0.15, currentColour.hex) : lighten(0.1, currentColour.hex)

  const deselectedButtonColourProps = {
    theme: 'white'
  }

  const selectedButtonColourProps = {
    backgroundColor: currentColour.hex,
    strokeColor: strokeBrushColour,
    dropShadowColor: 'rgba(0,0,0,.3)',
    shadowColor: 'rgba(0,0,0,.5)'
  }

  const eraserBrushColourProps = (brushType === 'eraser' ? selectedButtonColourProps : deselectedButtonColourProps) as ButtonProps
  const fillBrushColourProps = (brushType === 'fill' ? selectedButtonColourProps : deselectedButtonColourProps) as ButtonProps
  const lineBrushColourProps = (brushType === 'line' ? selectedButtonColourProps : deselectedButtonColourProps) as ButtonProps
  const smallLineColourProps = (brushSize === BrushSize.small ? selectedButtonColourProps : deselectedButtonColourProps) as ButtonProps
  const mediumLineColourProps = (brushSize === BrushSize.medium ? selectedButtonColourProps : deselectedButtonColourProps) as ButtonProps
  const largeLineColourProps = (brushSize === BrushSize.large ? selectedButtonColourProps : deselectedButtonColourProps) as ButtonProps

  let sketchStyles
  if (!resizing && sketchOuterRef && sketchOuterRef.current) {
    sketchStyles = {
      // @ts-ignore
      width: `${sketchOuterRef.current.offsetWidth}px`,
      // @ts-ignore
      height:`${sketchOuterRef.current.offsetHeight}px`
    }
  }

  return <s.Container mode={mode} ref={containerRef} offsetTop={0} maxWidth={maxContainerWidth} maxHeight={maxContainerHeight}>
    <s.LeftToolbarContainer mode={mode} buttonSize={buttonSize}>
      <s.ButtonGroup mode={mode} buttonSize={buttonSize}>
        <Button height={buttonSize} round theme='red' onClick={onClickRestart}>
          <Icon name='trash-white' />
        </Button>
      </s.ButtonGroup>
      <s.ButtonGroup mode={mode} buttonSize={buttonSize}>
        <Button height={buttonSize} round theme="white" onClick={undo}>
          <Icon fill={currentColour.hex} name='drawing-tool-undo' />
        </Button>
        <Button height={buttonSize} round theme="white" onClick={redo}>
          <Icon fill={currentColour.hex} name='drawing-tool-redo' />
        </Button>
      </s.ButtonGroup>
      { !props.disableCameraUpload && <s.ButtonGroup mode={mode} buttonSize={buttonSize}>
        <Button height={buttonSize} round theme='purple' onClick={() => {}}>
          <Icon name='drawing-tool-camera' />
        </Button></s.ButtonGroup>}
      <s.ButtonGroup mode={mode} buttonSize={buttonSize}>
        <Button height={buttonSize} round {...eraserBrushColourProps} onClick={() => setBrushType('eraser')}>
          <Icon fill={brushType === 'eraser' ? 'white' : currentColour.hex} name='drawing-tool-eraser' />
        </Button>
        <Button height={buttonSize} round {...fillBrushColourProps} onClick={() => setBrushType('fill')}>
          <Icon fill={brushType === 'fill' ? 'white' : currentColour.hex} name='drawing-tool-fill-brush' />
        </Button>
        <Button height={buttonSize} round {...lineBrushColourProps} onClick={() => setBrushType('line')}>
          <Icon fill={brushType === 'line' ? 'white' : currentColour.hex} name='drawing-tool-line-brush' />
        </Button>
        <Button height={buttonSize} round {...smallLineColourProps} onClick={() => setBrushSize(BrushSize.small)}>
          <Icon fill={brushSize === BrushSize.small ? 'white' : currentColour.hex} name='drawing-tool-small-line' />
        </Button>
        <Button height={buttonSize} round {...mediumLineColourProps} onClick={() => setBrushSize(BrushSize.medium)}>
          <Icon fill={brushSize === BrushSize.medium ? 'white' : currentColour.hex} name='drawing-tool-medium-line' />
        </Button>
        <Button height={buttonSize} round {...largeLineColourProps} onClick={() => setBrushSize(BrushSize.large)}>
          <Icon fill={brushSize === BrushSize.large ? 'white' : currentColour.hex} name='drawing-tool-large-line' />
        </Button>
      </s.ButtonGroup>
    </s.LeftToolbarContainer>
    <s.SketchContainer mode={mode} ref={sketchOuterRef}>
      {props.showPaperBackground && <s.PaperBackground />}
      {sketchStyles && <div style={sketchStyles} ref={sketchInnerRef} />}
    </s.SketchContainer>
    <s.RightToolbarContainer mode={mode} buttonSize={buttonSize}>
      <ColourToolbar mode={mode} size={buttonSize} currentColour={currentColour} />
      <s.ColourOpacityToggle mode={mode} buttonSize={Math.floor(buttonSize * .8)}>
        <s.OpacityButton mode={mode} buttonSize={Math.floor(buttonSize * .9)} onClick={() => setBruchOpacity(0.5)}>
          <Icon fill={brushOpacity === 1 ? '#7A7A79' : currentColour.hex} name='drawing-tool-opacity-half' />
        </s.OpacityButton>
        <s.OpacityButton mode={mode} buttonSize={Math.floor(buttonSize * .9)} onClick={() => setBruchOpacity(1)}>
          <Icon fill={brushOpacity < 1 ? '#7A7A79' : currentColour.hex} name='drawing-tool-opacity-full' />
        </s.OpacityButton>
      </s.ColourOpacityToggle>
    </s.RightToolbarContainer>
    { showRestartConfirmModal && <s.ModalOverlay><Modal
      title="Are you sure?"
      actions={[
        <Button key='confirm' size="regular" theme="confirm" onClick={() => {
          restart()
          setShowRestartConfirmModal(false)
        }}>Yes</Button>,
        <Button key='cancel' size="regular" theme="red" onClick={() => {
          setShowRestartConfirmModal(false)
        }}>No</Button>
      ]}/></s.ModalOverlay>}
  </s.Container>
}

Drawing.defaultProps = {
  showPaperBackground: true,
  disableCameraUpload: false,
  disableAutoCache: false,
  cacheKey: 'nzk-sketch-cache'
}

export default Drawing
