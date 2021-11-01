/* eslint-env browser */

import React, { useRef, useState } from 'react'
import * as s from './ColourToolbar.styles'
import Button from '../../../Button'
import Icon from '../../../Icon'
import { Mode } from '../../DrawingTool'
import { useDrawingTool, Colour, Colours } from '../../DrawingToolProvider'

export interface Props {
  size: number,
  mode: Mode,
  currentColour: Colour
}

const ColourToolbar = (props: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [disableScrollUp, setDisableScrollUp] = useState(true)
  const [disableScrollDown, setDisableScrollDown] = useState(false)
  const { setCurrentColour } = useDrawingTool()

  const onScroll = (e) => {
    if (props.mode === 'landscape') {
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
      if (props.mode === 'landscape') {
        scrollRef.current.scrollTop = Math.max(0, scrollRef.current.scrollTop - props.size * 3)
      } else {
        scrollRef.current.scrollLeft = Math.max(0, scrollRef.current.scrollLeft - props.size * 3)
      }
    }
  }

  const onClickDown = () => {
    if (!disableScrollDown && scrollRef && scrollRef.current) {
      if (props.mode === 'landscape') {
        scrollRef.current.scrollTop = Math.min(scrollRef.current.scrollHeight, scrollRef.current.scrollTop + props.size * 3)
      } else {
        scrollRef.current.scrollLeft = Math.min(scrollRef.current.scrollWidth, scrollRef.current.scrollLeft + props.size * 3)
      }
    }
  }

  return <s.Container mode={props.mode} size={props.size}>
    <Button disabled={disableScrollUp} round height={props.size} theme="white" onClick={onClickUp}>
      <Icon name={props.mode === 'landscape' ? 'drawing-tool-arrow-up' : 'drawing-tool-arrow-left'} fill={disableScrollUp ? '#c2bebe' : props.currentColour.hex} />
    </Button>
    <s.ScrollContainer ref={scrollRef} onScroll={onScroll} mode={props.mode} size={props.size} >
      { Colours.map((c: Colour) => (
        <Button
          key={c.hex}
          height={Math.floor(props.size * .9)}
          round
          dropShadowColor="transparent"
          backgroundColor={c.hex} strokeColor={c.hex} onClick={() => setCurrentColour(c)} />
      ))}
    </s.ScrollContainer >
    <Button disabled={disableScrollDown} round height={props.size} theme="white" onClick={onClickDown}>
      <Icon name={props.mode === 'landscape' ? 'drawing-tool-arrow-down' : 'drawing-tool-arrow-right'} fill={disableScrollDown ? '#c2bebe' : props.currentColour.hex} />
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