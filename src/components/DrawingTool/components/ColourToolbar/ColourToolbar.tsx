/* eslint-env browser */

import React, { useRef, useState } from 'react'
import * as s from './ColourToolbar.styles'
import Button from '../../../Button'
import Icon from '../../../Icon'
import { Orientation } from '../../DrawingTool'
import { useDrawingTool, Colour, Colours } from '../../DrawingToolProvider'

export interface Props {
  size: number,
  orientation: Orientation,
  currentColour: Colour
}

const ColourToolbar = (props: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [disableScrollUp, setDisableScrollUp] = useState(true)
  const [disableScrollDown, setDisableScrollDown] = useState(false)
  const { setCurrentColour, brushType, setBrushType } = useDrawingTool()

  const onSetColour = (colour) => {
    if (brushType === 'eraser') {
      setBrushType('line')
    }
    setCurrentColour(colour)
  }

  const onScroll = (e) => {
    if (props.orientation === 'LANDSCAPE') {
      if (e.target.scrollTop === 0) {
        setDisableScrollUp(true)
      } else if (disableScrollUp) {
        setDisableScrollUp(false)
      }
      if ((e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight + 3) {
        setDisableScrollDown(true)
      } else {
        setDisableScrollDown(false)
      }
    } else {
      if (e.target.scrollLeft === 0) {
        setDisableScrollUp(true)
      } else if (disableScrollUp) {
        setDisableScrollUp(false)
      }
      if ((e.target.scrollWidth - e.target.scrollLeft) <= e.target.clientWidth + 3) {
        setDisableScrollDown(true)
      } else {
        setDisableScrollDown(false)
      }
    }
  }

  const onClickUp = () => {
    if (!disableScrollUp && scrollRef && scrollRef.current) {
      if (props.orientation === 'LANDSCAPE') {
        scrollRef.current.scrollTop = Math.max(0, scrollRef.current.scrollTop - props.size * 3)
      } else {
        scrollRef.current.scrollLeft = Math.max(0, scrollRef.current.scrollLeft - props.size * 3)
      }
    }
  }

  const onClickDown = () => {
    if (!disableScrollDown && scrollRef && scrollRef.current) {
      if (props.orientation === 'LANDSCAPE') {
        scrollRef.current.scrollTop = Math.min(scrollRef.current.scrollHeight, scrollRef.current.scrollTop + props.size * 3)
      } else {
        scrollRef.current.scrollLeft = Math.min(scrollRef.current.scrollWidth, scrollRef.current.scrollLeft + props.size * 3)
      }
    }
  }

  return <s.Container orientation={props.orientation} size={props.size}>
    <Button disabled={disableScrollUp} round height={props.size} theme="white" onClick={onClickUp}>
      <Icon name={props.orientation === 'LANDSCAPE' ? 'drawing-tool-arrow-up' : 'drawing-tool-arrow-left'} fill={disableScrollUp ? '#c2bebe' : props.currentColour.hex} />
    </Button>
    <s.ScrollContainer ref={scrollRef} onScroll={onScroll} orientation={props.orientation} size={props.size} >
      { Colours.map((c: Colour) => (
        <Button
          key={c.hex}
          height={Math.floor(props.size * .9)}
          round
          dropShadowColor="transparent"
          backgroundColor={c.hex} strokeColor={c.hex} onClick={() => onSetColour(c)} />
      ))}
    </s.ScrollContainer >
    <Button disabled={disableScrollDown} round height={props.size} theme="white" onClick={onClickDown}>
      <Icon name={props.orientation === 'LANDSCAPE' ? 'drawing-tool-arrow-down' : 'drawing-tool-arrow-right'} fill={disableScrollDown ? '#c2bebe' : props.currentColour.hex} />
      </Button>
  </s.Container>
}

ColourToolbar.defaultProps = {
  mode: 'landcape',
  size: 80,
  onSelectColour: () => {},
  currentColor: Colours[0]
}

export default ColourToolbar