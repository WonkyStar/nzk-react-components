const rowBlank = (imageData, width, y) => {
  for (let x = 0; x < width; x+=1) {
    if (imageData.data[y * width * 4 + x * 4 + 3] !== 0) return false
  }
  return true
}

const columnBlank = (imageData, width, x, top, bottom) => {
  for (let y = top; y < bottom; y+=1) {
    if (imageData.data[y * width * 4 + x * 4 + 3] !== 0) return false
  }
  return true
}

export default (canvas) => {
  const ctx = canvas.getContext("2d")

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  let top = 0
  let bottom = imageData.height
  let left = 0
  let right = imageData.width

  while (top < bottom && rowBlank(imageData, canvas.width, top)) top+=1
  while (bottom - 1 > top && rowBlank(imageData, canvas.width, bottom - 1)) bottom-=1
  while (left < right && columnBlank(imageData, canvas.width, left, top, bottom)) left+=1
  while (right - 1 > left && columnBlank(imageData, canvas.width, right - 1, top, bottom)) right-=1

  const trimmed = ctx.getImageData(left, top, right - left, bottom - top)
  const copy = canvas.ownerDocument.createElement("canvas")
  const copyCtx = copy.getContext("2d")
  copy.width = trimmed.width
  copy.height = trimmed.height
  copyCtx.putImageData(trimmed, 0, 0)

  return copy
}
