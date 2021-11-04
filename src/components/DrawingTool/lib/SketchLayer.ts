/* eslint-env browser */

interface Props {
  width: number
  height: number
  x?: number
  y?: number
  pixelRatioScale?: number
}

export default class SketchLayer {
  width: number

  height: number

  x: number = 0

  y: number = 0

  naturalWidth: number

  naturalHeight: number

  readonly pixelRatioScale: number = 1

  readonly canvas: HTMLCanvasElement
  
  readonly ctx: null | CanvasRenderingContext2D

  constructor (props: Props) {
    this.pixelRatioScale = props.pixelRatioScale || window.devicePixelRatio >= 1.5 ? 2 : 1

    this.naturalWidth = props.width
    this.naturalHeight = props.height
    this.width = this.naturalWidth * this.pixelRatioScale
    this.height = this.naturalHeight * this.pixelRatioScale

    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')

    this.canvas.style.position = 'absolute'
    this.canvas.style.pointerEvents = 'none'

    this.setSize(this.naturalWidth, this.naturalHeight, this.width, this.height)

    if (props.x) this.x = props.x
    if (props.y) this.y = props.y
  
    this.setPosition(this.x, this.y)
  }

  setSize(naturalWidth, naturalHeight, width, height) {
    this.canvas.style.width = `${naturalWidth}px`
    this.canvas.style.height = `${naturalHeight}px`
    this.canvas.width = width
    this.canvas.height = height
  }

  setPosition(x, y) {
    this.canvas.style.left = `${x}px`
    this.canvas.style.top = `${y}px`
  }

  hide() {
    this.canvas.style.display = 'none'
  }

  show() {
    this.canvas.style.display = 'block'
  }

  clear () {
    this.ctx?.clearRect(0, 0, this.width, this.height)
  }

  drawImageToFit (image) {
    const scale = Math.min(this.width / image.width, this.height / image.height)
    const x = (this.width / 2) - (image.width / 2) * scale
    const y = (this.height / 2) - (image.height / 2) * scale
    this.ctx?.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * scale, image.height * scale)
  }

  drawImageToFill (image) {
    const scale = Math.max(this.width / image.width, this.height / image.height)
    const x = (this.width / 2) - (image.width / 2) * scale
    const y = (this.height / 2) - (image.height / 2) * scale
    this.ctx?.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * scale, image.height * scale)
  }
}