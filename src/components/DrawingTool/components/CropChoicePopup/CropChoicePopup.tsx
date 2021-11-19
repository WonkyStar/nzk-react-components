import React from 'react'
import * as s from './CropChoicePopup.styles'
import Button from '../../../Button'
import Popup from '../Popup'

interface Props {
  onDismiss: () => void,
  onManualCrop: () => void,
  onMagicCrop: () => void
}

export default (props: Props) => {
  return <Popup onDismiss={props.onDismiss}>
    <s.Title>Cut-Out Your Drawing</s.Title>
    <s.Container>
      <div>
        <s.Image src="https://cdn.nightzookeeper.com/nzk-assets/auto-crop-tutorial.png" />
        <Button size='regular' theme='primary' onClick={props.onMagicCrop}>Auto cut-out</Button>
        <div>Automatically removes the background.</div>
      </div>
      <div>
        <s.Image src="https://cdn.nightzookeeper.com/nzk-assets/crop-tutorial.png" />
        <Button size='regular' theme='primary' onClick={props.onManualCrop}>Manual cut-out</Button>
        <div>Drag round the drawing edge to cut it out.</div>
      </div>
    </s.Container>
  </Popup>
}