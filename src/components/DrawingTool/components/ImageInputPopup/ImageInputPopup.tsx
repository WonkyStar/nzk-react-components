/* eslint-env browser */

import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import * as s from './ImageInputPopup.styles'
import Button from '../../../Button'
import Popup from '../Popup'
import { useDrawingTool } from '../../DrawingToolProvider'

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
  onDismiss?: () => void
  minImageSize?: number
  isMobile: boolean,
  onImageSelected: () => void
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

  const { setImageToCrop } = useDrawingTool()

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
        setImageToCrop(img)
        props.onImageSelected()
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

  return <Popup onDismiss={props.onDismiss}>
    <s.Container {...getRootProps()}>
      <input {...getInputProps()} />
      { isDragActive
        ? <p>Drop your image here...</p> 
        : (<s.Instructions>
            { ErrorMessage }
            <p>{!supportDragAndDrop ? "Upload a drawing" : "Drag and drop a drawing here"}</p>
            {supportDragAndDrop && <p>Or</p>}
            <Button theme="primary" size={props.isMobile ? "small" : "regular"}>Select Image</Button>
            <s.Copyright>Please do not upload copyrighted images.</s.Copyright>
          </s.Instructions>
        )
      }
    </s.Container>
  </Popup>
}
