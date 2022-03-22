
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

  const uploadImage = (file: Blob | string, onComplete?: (imageUrl: string ) => void) => {
    // onComplete(" http://files.nightzookeeper.com/image/upload/e_trim:10/v1637228803/tduahmdpbutd7zju38hf.png")
    // return
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

  const promiseUploadImage = (file: Blob | string) => {
    return new Promise((resolve, reject) => {
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`
      const xhr = new XMLHttpRequest()
      const fd = new FormData()

      xhr.addEventListener('error', () => {
        reject(new Error("Couldn't reach cloudinary to upload image"))
      })

      xhr.open('POST', url, true)
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status < 300) {
          const response = JSON.parse(xhr.responseText)
          if (response.secure_url) {
            resolve(response.secure_url)
          } else {
            reject(new Error("No secure_url returned by cloudinary"))
          }
        } else if (xhr.readyState === 4 && xhr.status >= 300) {
          reject(new Error(`Cloudinary returned error code: ${xhr.status}`))
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
    })
  }

  return {
    uploadImage,
    promiseUploadImage
  }
}

export default useCloudinary
