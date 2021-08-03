import React from 'react'
import styled from 'styled-components'
import Button, { ButtonProps } from '../Button/Button'
import { SIZES } from '../Button/constants'

const Wrapper = styled.div`
  display: flex;
  > :first-child {
    z-index: 2;
  }
  > :nth-child(2) {
    margin-left: -${(props: { overlap: number }) => props.overlap}px;
    z-index: 1;
  }
`

export interface IconButtonProps extends ButtonProps {
  icon: any;
}


export default (props: IconButtonProps) => {
  let W = (props.size ? SIZES[props.size] : props.height) || 0
  return (
    <Wrapper overlap={0.3 * W}>
      <Button {...props} round children={props.icon} />
      <Button {...props} />
    </Wrapper>
  )
}
