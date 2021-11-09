/* eslint-env browser */

import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import * as s from './FileInput.styles'
import Button from '../../../Button'
import Icon from '../../../Icon'

export interface Props {
  dismiss?: () => void
  onImageUploaded?: (image: HTMLImageElement) => void
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
        // @ts-ignore
        img.src = e.target.result
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
      <Button round theme='red' size='large'>
        <Icon name='close' />
      </Button>
    </s.QuitButton>
    <input {...getInputProps()} />
    { isDragActive
      ? <p>Drop your image here...</p> 
      : (<s.Instructions>
          { ErrorMessage }
          <p>Drag and drop an image here</p>
          <p style={{ fontSize: '24px'}}>Or</p>
          <Button theme="primary" size="large">Select Image</Button>
        </s.Instructions>
      )
    }
  </s.Container>
}
