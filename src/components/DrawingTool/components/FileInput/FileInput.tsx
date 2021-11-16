/* eslint-env browser */

import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import * as s from './FileInput.styles'
import Button from '../../../Button'
import Icon from '../../../Icon'

const bytesForHuman = (bytes: number) => {
  let bytes$ = bytes
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
  let i = 0
  for (i; bytes$ > 1024; i+=1) {
    bytes$ /= 1024
  }
  return `${parseFloat(bytes$.toFixed(1))}${units[i]}`
}
export interface Props {
  dismiss?: () => void
  onImageUploaded?: (image: HTMLImageElement) => void
  minImageSize?: number
  isMobile: boolean
}

export default (props: Props) => {
  function fileSizeValidator(file) {
    const minSize = props.minImageSize || 1024 * 10
    if (file.size < minSize) {
      return {
        code: "image-to-small",
        message: `This image is too small. Please pick an image over ${bytesForHuman(minSize)}`
      };
    }
  
    return null
  }

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
    validator: fileSizeValidator
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
    ? <s.ErrorMessage>{fileRejections[0].errors[0].message}</s.ErrorMessage>
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
