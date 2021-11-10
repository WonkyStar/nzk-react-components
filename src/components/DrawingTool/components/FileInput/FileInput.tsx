/* eslint-env browser */

import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import * as s from './FileInput.styles'
import Button from '../../../Button'
import Icon from '../../../Icon'

export interface Props {
  dismiss?: () => void
  onImageUploaded?: (image: HTMLImageElement) => void
  isMobile: boolean
}

export default (props: Props) => {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    accept: 'image/jpeg, image/png',
    maxFiles:2
  })

  const [supportDragAndDrop, setSupportDragAndDrop] = useState(true)

  useEffect(() => {
    if ('draggable' in document.createElement('span')) {
      setSupportDragAndDrop(true)
    } else {
      setSupportDragAndDrop(false)
    }
  }, [])

  useEffect(() => {
    if (acceptedFiles && acceptedFiles.length) {
      const img = new Image()
      img.onload = () => {
        if (props.onImageUploaded) {
          props.onImageUploaded(img)
        }
      }
      const reader = new FileReader()
      reader.readAsDataURL(acceptedFiles[0])
      reader.onloadend = (e) => {
        if (e.target) {
          img.src = e.target.result as string
        }
      }
    }
  }, [acceptedFiles])

  const ErrorMessage = fileRejections && fileRejections.length
    ? <s.ErrorMessage>Sorry, we only support .jpeg or .png images.</s.ErrorMessage>
    : null

  const onDismiss = (ev) => {
    ev.stopPropagation()
    if (props.dismiss) props.dismiss()
  }

  return <s.Container {...getRootProps()}>
    <s.QuitButton onClick={onDismiss}>
      <Button round theme='red' size={props.isMobile ? "small" : "regular"}>
        <Icon name='close' />
      </Button>
    </s.QuitButton>
    <input {...getInputProps()} />
    { isDragActive
      ? <p>Drop your image here...</p> 
      : (<s.Instructions>
          { ErrorMessage }
          <p>{!supportDragAndDrop ? "Upload a drawing" : "Drag and drop a drawing here"}</p>
          {supportDragAndDrop && <p>Or</p>}
          <Button theme="primary" size={props.isMobile ? "small" : "regular"}>Select Image</Button>
        </s.Instructions>
      )
    }
  </s.Container>
}
