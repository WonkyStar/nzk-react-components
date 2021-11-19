import React from 'react'
import * as s from './ManualCropPopup.styles'
import Button from '../../../Button'
import Popup from '../Popup'

interface Props {
  onDismiss: () => void
  onNext: () => void
}

export default (props: Props) => {
  return <Popup onDismiss={props.onDismiss}>
    <s.Container>
      <div>Cut out your animal.<br/>Click, hold and make sure you draw around it.</div>
      <s.Image src="https://cdn.nightzookeeper.com/nzk-assets/crop-tutorial.png" />
      <div><Button size='regular' theme="primary" onClick={props.onNext}>Ok</Button></div>
    </s.Container>
  </Popup>
}