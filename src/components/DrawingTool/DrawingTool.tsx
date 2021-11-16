/* eslint-env browser */
import React, { useRef, useState, useEffect, useLayoutEffect, ReactNode } from 'react'
import { darken, lighten, getLuminance } from 'polished'
import Moveable from "react-moveable"
import MoveableHelper from "moveable-helper"
import ReactTooltip from 'react-tooltip'
import * as s from './DrawingTool.styles'
import useDebounce from '../../hooks/useDebounce'
import useElementSize from '../../hooks/useElementSize'
import Button from '../Button'
import Icon from '../Icon'
import IconButton from '../IconButton'
import { ButtonProps } from '../Button/Button'
import ColourToolbar from './components/ColourToolbar'
import Modal from '../Modal'
import { useDrawingTool, BrushSize } from './DrawingToolProvider'
import FileInput from './components/FileInput'
import Placeable from './components/Placeable'
import OpacityToggle from './components/OpacityToggle'
import Header from './components/Header'

export interface Props {
  prompt: string
  showHeader: boolean
  onBack: () => void,
  onSave: () => void
  showPaperBackground?: boolean
  disableCameraUpload?: boolean
  minImageUploadSize?: number
  disableAutoCache?: boolean
  openUploadPopupOnStart?: boolean
  cacheKey?: string
}

export type Orientation = 'LANDSCAPE' | 'PORTRAIT'
interface InSketchAction {
  key: string,
  component: ReactNode
}

const Drawing = (props: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sketchOuterRef = useRef<HTMLDivElement | null>(null)
  const sketchInnerRef = useRef<HTMLDivElement | null>(null)
  const sketchCutInnerRef = useRef<HTMLDivElement | null>(null)
  const imageToPlaceContainerRef = useRef<HTMLImageElement | null>(null)
  const moveableRef = useRef<Moveable | null>(null)

  const [helper] = useState(() => {
    return new MoveableHelper()
  })

  const { width: containerWidth, height: containerHeight } = useElementSize(containerRef)
  const debouncedContainerWidth = useDebounce(containerWidth, 1000)
  const debouncedContainerHeight = useDebounce(containerHeight, 1000)

  const [orientation, setOrientation] = useState<Orientation>('LANDSCAPE')
  const [maxContainerWidth, setMaxContainerWidth] = useState(1280)
  const [maxContainerHeight, setMaxContainerHeight] = useState(960)
  const [buttonSize, setButtonSize] = useState<number>(50)
  const [isMobile, setIsMobile] = useState(false)
  const [resizing, setResizing] = useState(true)
  const [showRestartConfirmModal, setShowRestartConfirmModal] = useState(false)
  const [showFileInput, setShowFileInput] = useState(props.openUploadPopupOnStart)
  const [imageToCut, setImageToCut] = useState<HTMLImageElement>()
  const [showCutTutorial, setShowCutTutorial] = useState(true)
  const [showSaveCutAction, setShowSaveCutAction] = useState(false)
  const [imageToPlace, setImageToPlace] = useState<HTMLImageElement>()
  const {
    initSketch,
    initSketchCut,
    exportSketchCut,
    currentColour,
    brushSize,
    setBrushSize,
    brushType,
    setBrushType,
    undo,
    redo,
    restart,
    setCacheKey,
    setAutoCache,
    resetCut,
    mergeImage,
    setToolMode,
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
      if (containerWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  }, [debouncedContainerWidth, debouncedContainerHeight, containerWidth, containerHeight])

  useLayoutEffect(() => {
    setMaxContainerHeight(containerWidth * 1.4)
    setMaxContainerWidth(containerHeight * 1.4)

    if (containerWidth < containerHeight && containerWidth < 1024) {
      setButtonSize(Math.floor(containerWidth / 11) * 0.85)
      setOrientation('PORTRAIT')
    } else {
      if (containerHeight < 420) {
        setButtonSize(Math.floor(containerHeight / 13) * 0.85)
      } else if (containerHeight < 1024) {
        setButtonSize(Math.floor(containerHeight / 12) * 0.85)
      } else {
        setButtonSize(Math.floor(containerHeight / 11) * 0.85)
      }
      setOrientation('LANDSCAPE')
    }
  }, [containerWidth, containerHeight])

  // Intialise sketch tool
  useEffect(() => {
    if (!imageToCut && !resizing && sketchInnerRef.current) {
      initSketch(sketchInnerRef.current)
    }
  }, [resizing, sketchInnerRef, imageToCut])

  // Intialise sketch cut tool
  useEffect(() => {
    if (!resizing && sketchCutInnerRef.current && imageToCut) {
        initSketchCut(sketchCutInnerRef.current, imageToCut, () => {
          setShowSaveCutAction(true)
        })
      }
    }, [resizing, sketchCutInnerRef, imageToCut])

  const onClickRestart = () => {
    setShowRestartConfirmModal(true)
  }

  const onClickCamera = () => {
    setShowFileInput(true)
  }

  const onImageUploaded = (image: HTMLImageElement) => {
    setShowFileInput(false)
    setImageToCut(image)
    setToolMode("CUT")
  }

  const getImageToPlaceSize = (img) => {
    const ratio = 0.8

    if (img.width <= containerWidth * ratio && img.height <= containerHeight * ratio) {
      return { width: img.width, height: img.height }
    }

    const scale = Math.min(1, Math.min(containerWidth / img.width, containerHeight / img.height)) * ratio

    return {
      width: img.width * scale,
      height: img.height * scale
    }
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
      width: `${sketchOuterRef.current.offsetWidth}px`,
      height:`${sketchOuterRef.current.offsetHeight}px`,
      position: 'absolute',
      top: '0px',
      left: '0px'
    }
  }

  const disableToolbars = (showFileInput || showRestartConfirmModal || imageToCut|| imageToPlace ) as boolean

  const inSketchActions: InSketchAction[] = []

  if (showSaveCutAction) {
    inSketchActions.push({
      key: 'retry-cut',
      component: <IconButton icon={<Icon name="drawing-tool-undo" fill="white" />} theme='orange' size={isMobile ? "small" : "regular"} onClick={() => {
        setShowSaveCutAction(false)
        setShowCutTutorial(true)
        resetCut()
      }}>Retry</IconButton>
    }, {
      key: 'save-cut',
      component: <IconButton icon={<Icon name="tick" />} theme='confirm' size={isMobile ? "small" : "regular"} onClick={() => {
        setShowSaveCutAction(false)
        setImageToCut(undefined)
        const newImage = new Image
        newImage.onload = () => {
          setImageToPlace(newImage)
          setToolMode('PLACE')
        }
        newImage.src = exportSketchCut()
      }}>Save</IconButton>
    })
  } else if (imageToPlace) {
    inSketchActions.push({
      key: 'cancel-place',
      component: <IconButton icon={<Icon name="close" />} theme='red' size={isMobile ? "small" : "regular"} onClick={() => {
        setImageToPlace(undefined)
        setToolMode('DRAW')
      }}>Cancel</IconButton>
    }, {
      key: 'save-place',
      component: <IconButton icon={<Icon name="tick" />} theme='confirm' size={isMobile ? "small" : "regular"} onClick={() => {
        if (moveableRef.current) {
          const rect = moveableRef.current.getRect()
          mergeImage({
            image: imageToPlace,
            x: rect.left,
            y: rect.top,
            origin: rect.origin,
            width: Math.hypot(rect.pos2[0]-rect.pos1[0], rect.pos2[1]-rect.pos1[1]),
            height: Math.hypot(rect.pos3[0]-rect.pos2[0], rect.pos3[1]-rect.pos2[1]),
            rotation: rect.rotation
          })
          setToolMode('DRAW')
          setImageToPlace(undefined)
        }
      
      }}>Save</IconButton>
    })
  }

  let headerHeight = 90
  if (containerHeight < 800 || containerWidth < 728) headerHeight = 70
  if (containerHeight < 500 || containerWidth < 500) headerHeight = 50

  return <s.Container ref={containerRef} maxWidth={maxContainerWidth} maxHeight={maxContainerHeight}>
    { props.showHeader && <Header height={headerHeight} prompt={props.prompt} onBack={props.onBack} onSave={props.onSave} />}
    <s.Tool hasHeader={props.showHeader} headerHeight={headerHeight} orientation={orientation}>
      <ReactTooltip effect="solid" delayShow={750} multiline />
      <s.LeftToolbarContainer orientation={orientation} buttonSize={buttonSize} disabled={disableToolbars}>
        <s.ButtonGroup orientation={orientation} buttonSize={buttonSize}>
          <Button data-tip="Start again?" height={buttonSize} round theme='red' onClick={onClickRestart}>
            <Icon name='trash-white' />
          </Button>
        </s.ButtonGroup>
        <s.ButtonGroup orientation={orientation} buttonSize={buttonSize}>
          <Button height={buttonSize} round theme="white" onClick={undo}>
            <Icon fill={currentColour.hex} name='drawing-tool-undo' />
          </Button>
          <Button height={buttonSize} round theme="white" onClick={redo}>
            <Icon fill={currentColour.hex} name='drawing-tool-redo' />
          </Button>
        </s.ButtonGroup>
        { !props.disableCameraUpload && <s.ButtonGroup orientation={orientation} buttonSize={buttonSize}>
          <Button data-tip="Upload a drawing" height={buttonSize} round theme='purple' onClick={onClickCamera}>
            <Icon name='drawing-tool-camera' />
          </Button></s.ButtonGroup>}
        <s.ButtonGroup orientation={orientation} buttonSize={buttonSize}>
          <Button height={buttonSize} round {...eraserBrushColourProps} onClick={() => setBrushType('eraser')}>
            <Icon data-tip="Eraser" fill={brushType === 'eraser' ? 'white' : currentColour.hex} name='drawing-tool-eraser' />
          </Button>
          <Button data-tip="Fill brush" height={buttonSize} round {...fillBrushColourProps} onClick={() => setBrushType('fill')}>
            <Icon fill={brushType === 'fill' ? 'white' : currentColour.hex} name='drawing-tool-fill-brush' />
          </Button>
          <Button data-tip="Line brush" height={buttonSize} round {...lineBrushColourProps} onClick={() => setBrushType('line')}>
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

      <s.SketchContainer orientation={orientation} ref={sketchOuterRef}>
        {props.showPaperBackground && <s.PaperBackground cutMode={imageToCut && true} />}
        {!imageToCut && sketchStyles && <div style={sketchStyles} ref={sketchInnerRef} />}
        {imageToCut && sketchStyles && <div style={sketchStyles} ref={sketchCutInnerRef} />}
        {imageToPlace && sketchStyles && (
          <div style={{ ...sketchStyles, zIndex: '101'}}>
            <s.ImageToPlaceContainer><s.ImageToPlace size={getImageToPlaceSize(imageToPlace)} ref={imageToPlaceContainerRef} src={imageToPlace.src} /></s.ImageToPlaceContainer>
            <Moveable
              ref={moveableRef}
              target={imageToPlaceContainerRef}
              ables={[Placeable]}
              props={{
                placeable: true,
              }}
              snappable
              bounds={{ left: 0, top: 0, bottom: sketchOuterRef.current?.offsetHeight, right: sketchOuterRef.current?.offsetWidth }}
              draggable
              scalable
              keepRatio
              rotatable
              onDragStart={helper.onDragStart}
              onDrag={helper.onDrag}
              onScaleStart={helper.onScaleStart}
              onScale={helper.onScale}
              onRotateStart={helper.onRotateStart}
              onRotate={helper.onRotate}
            />
          </div>
        )}
        {inSketchActions.length && (
          <s.InSketchActions>
            { inSketchActions.map((action) => (
              <s.InSketchAction key={action.key}>{action.component}</s.InSketchAction>
            ))}
          </s.InSketchActions>
        )}
        { imageToCut && showCutTutorial && <s.CutImageTutorial onClick={() => setShowCutTutorial(false)}>
          <div>Now cut out your animal: Click, hold and make sure you draw around it.</div>
          <img alt="crop example" src="https://cdn.nightzookeeper.com/nzk-assets/crop-tutorial.png" />
          <div><Button size={isMobile ? "small" : "regular"} theme="primary">Ok</Button></div>
          </s.CutImageTutorial> }
      </s.SketchContainer>

      <s.RightToolbarContainer orientation={orientation} buttonSize={buttonSize} disabled={disableToolbars}>
        <ColourToolbar orientation={orientation} size={buttonSize} currentColour={currentColour} />
        <OpacityToggle
          orientation={orientation}
          buttonSize={buttonSize}
        />
      </s.RightToolbarContainer>
    </s.Tool>
    { showRestartConfirmModal && <s.ModalOverlay><Modal
      title="Are you sure?"
      actions={[
        <Button key='cancel' size={isMobile ? "small" : "regular"} theme="red" onClick={() => {
          setShowRestartConfirmModal(false)
        }}>No</Button>,
        <Button key='confirm' size={isMobile ? "small" : "regular"} theme="confirm" onClick={() => {
          restart()
          setShowRestartConfirmModal(false)
        }}>Yes</Button>,
      ]}/></s.ModalOverlay>}
      { showFileInput && <s.ModalOverlay>
        <FileInput
          isMobile={isMobile}
          dismiss={() => setShowFileInput(false)}
          onImageUploaded={onImageUploaded}
          minImageSize={props.minImageUploadSize}
        />
    </s.ModalOverlay>}
  </s.Container>
}

Drawing.defaultProps = {
  prompt: 'Draw your Animal',
  showHeader: true,
  onBack: () => {},
  onSave: () => {},
  showPaperBackground: true,
  disableCameraUpload: false,
  disableAutoCache: false,
  cacheKey: 'nzk-sketch-cache',
  openUploadPopupOnStart: false
}

export default Drawing
