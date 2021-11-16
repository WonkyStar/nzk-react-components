/* eslint-env browser */
import Sketch from "../Sketch"
import { Point, Color } from "../types"
import BrushAction from "./BrushAction"

export interface Props {
  sketch: Sketch
  points?: Point[]
  color?: Color
  size?: number
  opacity?: number
}

export default class LineBrushAction extends BrushAction {
  points: Point[] = []

  color: Color = { r: 0, g: 0, b: 0 }

  size: number = 7

  opacity: number = 1

  scale: number = 1

  actionType = 'LineBrush'

  constructor (props: Props) {
    super({ sketch: props.sketch })

    if (props.points) this.points = props.points
    if (props.color) this.color = props.color
    if (props.size) this.size = props.size
    if (props.opacity) this.opacity = props.opacity
  }

  setDrawingStyle(ctx: CanvasRenderingContext2D) {
    const colorString = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`
    ctx.strokeStyle = colorString
    ctx.fillStyle = colorString
    ctx.lineWidth = this.size * this.scale
    ctx.lineJoin = "round"
    ctx.lineCap = "round"
  }

  startDraw(point: Point) {
    this.points.push(point)
    this.setDrawingStyle(this.sketch.bufferLayer.ctx)
  }

  continueDraw (point: Point) {
    this.points.push(point)
  }

  endDraw() {
    this.sketch.bufferLayer.clear()
    this.draw()
  }

  onAnimationFrame() {
    this.sketch.bufferLayer.clear()
    this.trace(this.sketch.bufferLayer.ctx)
    this.sketch.bufferLayer.ctx.stroke()
  }

  trace (ctx: CanvasRenderingContext2D) {
    if (this.points === undefined || this.points.length === 0) {
      return
    }

    ctx.beginPath()
    ctx.moveTo(this.points[0].x, this.points[0].y)

    if (this.points.length === 1) {
      ctx.lineTo(this.points[0].x, this.points[0].y)
    } else if (this.points.length === 2) {
      ctx.lineTo(this.points[1].x, this.points[1].y)
    } else {
      let i
      for (i = 1; i < this.points.length - 2; i += 1) {
        const xc = (this.points[i].x + this.points[i + 1].x) / 2
        const yc = (this.points[i].y + this.points[i + 1].y) / 2
        ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc)
      }
      ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, this.points[i+1].x, this.points[i+1].y)
    }
  }

  draw() {
    this.sketch.drawingLayer.ctx.globalCompositeOperation = "source-over"
    this.trace(this.sketch.drawingLayer.ctx)
    this.sketch.drawingLayer.ctx.stroke()
  }

  serialize () {
    return JSON.stringify({
      type: this.actionType,
      props: {
        points: this.points,
        color: this.color,
        size: this.size,
        opacity: this.opacity
      }
    })
  }

  deserialize (serialized: string) {
    const parsed = JSON.parse(serialized)
    if (parsed.props) {
      this.points = parsed.props.points || []
      this.color = parsed.props.color || { r: 0, g: 0, b: 0 }
      this.size = parsed.props.size || 7
      this.opacity = parsed.props.opacity || 1
    }
  }
}