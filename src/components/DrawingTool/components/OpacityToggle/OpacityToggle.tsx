import React from 'react'
import ReactTooltip from 'react-tooltip'
import Icon from '../../../Icon'
import * as s from './OpacityToggle.styles'
import { Orientation } from '../../DrawingTool'
import { useDrawingTool } from '../../DrawingToolProvider'

export interface Props {
  orientation: Orientation
  buttonSize: number
}

export default (props: Props) => {
  const { brushOpacity, setBruchOpacity, currentColour } = useDrawingTool()

  const toggleOpacity = () => {
    setBruchOpacity(brushOpacity === 1 ? 0.5 : 1)
  }

  return <div>
    <ReactTooltip effect="solid" delayShow={750} multiline />
    <s.Container data-tip={brushOpacity === 0.5
    ? 'Switch OFF color mixer'
    : 'Switch ON color mixer'} orientation={props.orientation} buttonSize={Math.floor(props.buttonSize * .8)} onClick={toggleOpacity}>
    <s.OpacityButton orientation={props.orientation} buttonSize={Math.floor(props.buttonSize * .9)}>
    <Icon fill={brushOpacity === 1 ? '#7A7A79' : currentColour.hex} name='drawing-tool-opacity-half' />
  </s.OpacityButton>
  <s.OpacityButton orientation={props.orientation} buttonSize={Math.floor(props.buttonSize * .9)}>
    <Icon fill={brushOpacity < 1 ? '#7A7A79' : currentColour.hex} name='drawing-tool-opacity-full' />
  </s.OpacityButton>
</s.Container></div>
}