import React, { useEffect, useState } from 'react'
import * as s from './MagicCropPopup.styles'
import Button from '../../../Button'
import useCloudinary from '../../../../hooks/useCloudinary'
import { useDrawingTool } from '../../DrawingToolProvider'
import Loader from '../Loader'
import Popup from '../Popup'

export interface Props {
  onDismiss: () => void
  onManual: () => void
  cloudinaryUploadPreset: string
}

function changeExt (fileName, newExt) {
  const pos = fileName.includes(".") ? fileName.lastIndexOf(".") : fileName.length
  const fileRoot = fileName.substr(0, pos)
  return `${fileRoot}.${newExt}`
}

export default (props: Props) => {
  const { uploadImage } = useCloudinary({
    unsignedUploadPreset: props.cloudinaryUploadPreset
  })
  const { imageToCrop, setImageToCrop, setImageToPlace } = useDrawingTool()
  const [croppedImage, setCroppedImage] = useState<HTMLImageElement>()

  const checkImageIsReady = (imageUrl: string, size = 0, retries = 0) => {
    const img = new Image()
    img.onload = () => {
      fetch(img.src).then(resp => resp.blob()).then(blob => {
        if (retries === 0 || size === blob.size) {
          const delay = retries === 0 ? 10000 : 4000
          setTimeout(() => checkImageIsReady(imageUrl, blob.size, retries + 1), delay)
        } else {
          const croppedImg = new Image()
          croppedImg.crossOrigin = "Anonymous"
          croppedImg.onload = () => {
            setCroppedImage(croppedImg)
          }
          croppedImg.src = changeExt(imageUrl.replace('/image/upload', '/image/upload/e_trim:10'), 'png')
        }
      })
    }
    img.crossOrigin = "Anonymous"
    img.src = `${changeExt(imageUrl.replace('/image/upload', '/image/upload/w_150'), 'png')}?${Date.now()}`
  }

  useEffect(() => {
    if (imageToCrop) {
      uploadImage(imageToCrop.src, checkImageIsReady)
    }
  }, [])

  const onNext = () => {
    if (!croppedImage) return
    setImageToCrop(undefined)
    setImageToPlace(croppedImage)
    props.onDismiss()
  }

  return <Popup onDismiss={props.onDismiss}>
    <s.Title>Your Drawing</s.Title>
    <s.Container>
      <s.DrawingContainer>
        { croppedImage
          ? <s.Image src={croppedImage.src} />
          : <div><Loader color="#fff"/><br />Processing your image.<br />This can take a couple of minutes.</div>
        }
      </s.DrawingContainer>
      <s.Text>
        Select next to make final edits.<br />
        Not happy? Try manual cut-out instead.
      </s.Text>
    </s.Container>
    <s.Actions>
      <Button size='regular' theme='primary' onClick={props.onManual}>Manual cut-out</Button>
      <Button size='regular' theme='confirm' disabled={!croppedImage} onClick={onNext}>Next</Button>
    </s.Actions>
  </Popup>
}