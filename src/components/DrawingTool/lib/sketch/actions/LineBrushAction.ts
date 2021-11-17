/* eslint-env browser */
import Sketch from "../Sketch"
import { Point, Color } from "../types"
import BrushAction from "./BrushAction"

export interface Props {
  sketch: Sketch
  points?: Point[]
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

    this.color = this.sketch.selectedColor
    this.size = this.sketch.selectedLineSize
    this.opacity = this.sketch.selectedOpacity
    this.scale = this.sketch.pixelRatioScale
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
    this.startDrawAnimation()
  }

  continueDraw (point: Point) {
    this.points.push(point)
  }

  endDraw() {
    this.stopDrawAnimation()
    this.sketch.bufferLayer.clear()
    this.draw()
  }

  onDrawAnimationFrame() {
    this.sketch.bufferLayer.clear()
    LineBrushAction.trace(this.sketch.bufferLayer.ctx, this.points)
    this.sketch.bufferLayer.ctx.stroke()
  }

  static trace (ctx: CanvasRenderingContext2D, points: Point[]) {
    if (points === undefined || points.length === 0) {
      return
    }

    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)

    if (points.length === 1) {
      ctx.lineTo(points[0].x, points[0].y)
    } else if (points.length === 2) {
      ctx.lineTo(points[1].x, points[1].y)
    } else {
      let i
      for (i = 1; i < points.length - 2; i += 1) {
        const xc = (points[i].x + points[i + 1].x) / 2
        const yc = (points[i].y + points[i + 1].y) / 2
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc)
      }
      ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x, points[i+1].y)
    }
  }

  draw() {
    this.setDrawingStyle(this.sketch.drawingLayer.ctx)
    this.sketch.drawingLayer.ctx.globalCompositeOperation = "source-over"
    LineBrushAction.trace(this.sketch.drawingLayer.ctx, this.points)
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