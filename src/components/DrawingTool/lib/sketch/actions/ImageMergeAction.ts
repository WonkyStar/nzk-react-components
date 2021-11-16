/* eslint-env browser */
import Sketch from "../Sketch"
import { Point } from "../types"
import Action from "./Action"

export interface Props {
  sketch: Sketch
  sourceImage: string
  targetX: number
  targetY: number
  targetWidth: number
  targetHeight: number
  origin: Point
  rotation: number
}

export default class ImageMergeAction extends Action {
  sourceImage: string

  targetX: number

  targetY: number

  targetWidth: number

  targetHeight: number

  origin: Point

  rotation: number

  readonly actionType = 'ImageMerge'

  constructor(props: Props) {
    super({ sketch: props.sketch })
  
    this.sourceImage = props.sourceImage
    this.targetX = props.targetX
    this.targetY = props.targetY
    this.targetWidth = props.targetWidth
    this.targetHeight = props.targetHeight
    this.origin = props.origin
    this.rotation = props.rotation
  }

  draw(callback: Function = () => {}) {
    const doMerge = (img: HTMLImageElement) => {
      const scale = (this.targetWidth / this.targetHeight) * this.sketch.pixelRatioScale
      this.sketch.drawingLayer.ctx.save()
      this.sketch.drawingLayer.ctx.translate(this.origin.x * this.sketch.pixelRatioScale, this.origin.y * this.sketch.pixelRatioScale)
      this.sketch.drawingLayer.ctx.rotate(this.rotation * Math.PI / 180)
      this.sketch.drawingLayer.ctx.translate(- this.targetX - img.width * scale / 2, - this.targetY - img.height * scale / 2)
      this.sketch.drawingLayer.ctx.drawImage(img, this.targetX, this.targetY, img.width * scale, img.height * scale)
      this.sketch.drawingLayer.ctx.restore()
      if (callback) {
        callback()
      }
    }

    const img = new Image
    img.onload = () => { doMerge(img) }
    img.src = this.sourceImage
  }

  serialize () {
    return JSON.stringify({
      type: this.actionType,
      props: {
        sourceImage: this.sourceImage,
        targetX: this.targetX,
        targetY: this.targetY,
        targetWidth: this.targetWidth,
        targetHeight: this.targetHeight,
        origin: this.origin,
        rotation: this.rotation
      }
    })
  }

  deserialize (serialized: string) {
    const parsed = JSON.parse(serialized)
    if (parsed.props) {
      this.sourceImage = parsed.props.sourceImage
      this.targetX = parsed.props.targetX
      this.targetY = parsed.props.targetY
      this.targetWidth = parsed.props.targetWidth
      this.targetHeight = parsed.props.targetHeight
      this.origin = parsed.props.origin
      this.rotation = parsed.props.rotation
    }
  }
}
