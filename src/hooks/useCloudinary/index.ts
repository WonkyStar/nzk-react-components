
/* eslint-env browser */

export interface Props {
  cloudName?: string // use default most of the time
  unsignedUploadPreset?: string // use default, but another one can be setup in cloudinary admin
  uploadTag?: string // Adds a tag for the image in cloudinary
}

const DefaultProps = {
  cloudName: 'nzk',
  unsignedUploadPreset: 'juz5g1j1'
}

const useCloudinary = (props?: Props) => {
  const cloudName = (props && props.cloudName) || DefaultProps.cloudName
  const unsignedUploadPreset = (props && props.unsignedUploadPreset) || DefaultProps.unsignedUploadPreset
  const uploadTag = props && props.uploadTag

  const uploadImage = (file: Blob | string, onComplete?: (imageUrl: string) => void) => {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`
    const xhr = new XMLHttpRequest()
    const fd = new FormData()

    xhr.open('POST', url, true)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)
        if (onComplete) {
          onComplete(response.secure_url)
        }
      }
    }

    fd.append('upload_preset', unsignedUploadPreset)
    if (uploadTag) fd.append('tags', uploadTag)

    if (file instanceof Blob) {
      fd.append('file', file)
      xhr.send(fd)
    } else {
      // Convert b64 to blob first
      fetch(file).then(response => {
        response.blob().then(blobFile => {
          fd.append('file', blobFile)
          xhr.send(fd)
        })
      })
    }
  }

  return {
    uploadImage
  }
}

export default useCloudinary
