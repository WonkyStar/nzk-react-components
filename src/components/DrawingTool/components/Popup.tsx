import React from 'react'
import styled from 'styled-components'
import Button from '../../Button'
import Icon from '../../Icon'

const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, .4);
`

const Container = styled.div`
  position: relative;
  width: 90%;
  max-width: 900px;
  border-radius: 50px;
  padding: 40px;
  background-color: #341644;
  box-shadow: 0 -5px 0 #531D75, 0 10px 0 #1C042B, 0 14px 0 rgba(0,0,0,0.3);
  color: white;
  * {
    box-sizing: border-box;
  }
  @media (max-width: 850px) and (max-height: 850px), (max-width: 700px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    box-shadow: none;
    padding: 20px;
  }
`

export const QuitButton = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  @media (max-width: 850px) and (max-height: 850px), (max-width: 700px) {
    top: 15px;
    right: 15px;
  }
`

interface Props {
  children: React.ReactNode
  onDismiss?: undefined | (() => void)
}

const Popup = (props: Props) => {
  return <Overlay>
    <Container>
      { props.onDismiss && <QuitButton onClick={props.onDismiss}>
        <Button size="regular" round theme='red'>
          <Icon name='close' />
        </Button>
      </QuitButton> }
      { props.children }
    </Container>
  </Overlay>
}

Popup.defaultProps = {
  onDismiss: undefined
}

export default Popup
