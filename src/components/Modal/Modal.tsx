import React, { ReactElement, useMemo } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import * as s from './Modal.styles'

export interface ModalProps {
  children?: ReactElement | string,
  title?: string,
  message?: string,
  errorMessage?: string,
  actions?: ReactElement[],
  dismiss?: () => void
}

const Modal = (props: ModalProps) => {
  const title = useMemo(() => {
    if (props.errorMessage) return 'Error'
    return props.title
  }, [])

  const content = useMemo(() => {
    if (props.errorMessage) return props.errorMessage
    if (props.message) return props.message
    return props.children
  }, [])

  const actions = useMemo(() => {
    if (props.actions) return props.actions
    return null
  }, [])

  return <s.Wrapper>
    { props.dismiss && <s.QuitButton onClick={props.dismiss}>
      <Button round theme='red' size='regular'>
        <Icon name='close' />
      </Button>
    </s.QuitButton> }
    <s.Title>{title}</s.Title>
    { content && <s.Content hasError={Boolean(props.errorMessage && true)}>
      { content }
    </s.Content> }
    <s.Actions>
      {
        Array.isArray(actions) && actions.map(action => action)
      }
    </s.Actions>
  </s.Wrapper>
}

export default Modal
