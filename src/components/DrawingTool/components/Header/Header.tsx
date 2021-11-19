import React from 'react'
import styled from 'styled-components'
import { useDrawingTool } from '../../DrawingToolProvider'
import Icon from '../../../Icon'
import IconButton from '../../../IconButton'

const Container = styled.div<{height: number}>`
  position: relative;
  width: 100%;
  height: ${props => props.height}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
  color: white;
  font-family: 'Rammetto One';
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 760px) {
    font-size: 20px;
  }
  @media (max-width: 560px) {
    > :nth-child(2) {
      display: none;
    } 
  }
`

interface Props {
  onBack: () => void,
  onSave: () => void,
  prompt: string,
  height: number
}

const getButtonSizeForHeight = (height) => {
  if (height <= 50) return 'x-small'
  if (height <= 70) return 'small'
  return 'regular'
}

export default (props: Props) => {
  const { imageToCrop, imageToPlace } = useDrawingTool()
 
  const disableButtons = (imageToCrop || imageToPlace) && true

  const onSave = () => {
    if (!disableButtons) props.onSave()
  }
  
  return <Container height={props.height}>
    <IconButton
      disabled={disableButtons}
      onClick={props.onBack}
      size={getButtonSizeForHeight(props.height)}
      icon={<Icon name='arrow-left' />}
      theme='primary'>Back</IconButton>
    { props.prompt && (<div>{props.prompt}</div>) }
    <IconButton
      disabled={disableButtons}
      onClick={onSave}
      size={getButtonSizeForHeight(props.height)}
      icon={<Icon name='tick' />}
      theme='confirm'>Save</IconButton>
  </Container>
}