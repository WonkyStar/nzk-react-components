/* eslint-env browser */
import Sketch from "../Sketch"
import { Point, Color } from "../types"
import LineBrushAction from "./LineBrushAction"

export interface Props {
  sketch: Sketch
  points?: Point[]
}


export default class MultiLineBrushAction extends LineBrushAction {
  colors: Color[] = [
    { r: 70, g: 1, b: 155 },
    { r: 0, g: 126, b: 254 },
    { r: 0, g: 187, b: 0 },
    { r: 254, g: 246, b: 1 },
    { r: 221, g: 0, b: 0 }
  ]
  
  actionType = 'MultiLineBrush'

  constructor (props: Props) {
    super({ sketch: props.sketch, points: props.points})
  }

  setDrawingStyle(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = this.size * this.scale
    ctx.lineJoin = "round"
    ctx.lineCap = "round"
  }

  setColorStyle(color: Color, ctx: CanvasRenderingContext2D) {
    const colorString = `rgba(${color.r}, ${color.g}, ${color.b}, ${this.opacity})`
    ctx.strokeStyle = colorString
    ctx.fillStyle = colorString
  }

  onDrawAnimationFrame() {
    this.sketch.bufferLayer.clear()
    this.setColorStyle(this.colors[0], this.sketch.bufferLayer.ctx)
  
    this.drawStroke(this.sketch.bufferLayer.ctx, this.colors[0], - this.size)
    this.drawStroke(this.sketch.bufferLayer.ctx, this.colors[1], - this.size / 2)
    this.drawStroke(this.sketch.bufferLayer.ctx, this.colors[2], 0)
    this.drawStroke(this.sketch.bufferLayer.ctx, this.colors[3], this.size / 2)
    this.drawStroke(this.sketch.bufferLayer.ctx, this.colors[4], this.size)
  }

  offsetPoints (offset: number) {
    const offsetPoints: Point[] = []
    for (let i = 0; i < this.points.length; i+=1) {
      offsetPoints.push({
        x: this.points[i].x + offset,
        y: this.points[i].y + offset
      })
    }
    return offsetPoints
  }

  draw() {
    this.setDrawingStyle(this.sketch.drawingLayer.ctx)
    this.sketch.drawingLayer.ctx.globalCompositeOperation = "source-over"

    this.drawStroke(this.sketch.drawingLayer.ctx, this.colors[0], - this.size)
    this.drawStroke(this.sketch.drawingLayer.ctx, this.colors[1], - this.size / 2)
    this.drawStroke(this.sketch.drawingLayer.ctx, this.colors[2], 0)
    this.drawStroke(this.sketch.drawingLayer.ctx, this.colors[3], this.size / 2)
    this.drawStroke(this.sketch.drawingLayer.ctx, this.colors[4], this.size)
  }

  drawStroke(ctx: CanvasRenderingContext2D, color: Color, offset: number = 0) {
    this.setColorStyle(color, ctx)
    const points = offset === 0 ? this.points : this.offsetPoints(offset)
    LineBrushAction.trace(ctx, points)
    ctx.stroke()
  }

  serialize () {
    return JSON.stringify({
      type: this.actionType,
      props: {
        points: this.points,
        colors: this.colors,
        size: this.size,
        opacity: this.opacity
      }
    })
  }

  deserialize (serialized: string) {
    const parsed = JSON.parse(serialized)
    if (parsed.props) {
      this.points = parsed.props.points || []
      this.colors = parsed.props.colors || [{ r: 200, g: 0, b: 0 }, { r: 0, g: 200, b: 0 }, { r: 0, g: 0, b: 200 }]
      this.size = parsed.props.size || 7
      this.opacity = parsed.props.opacity || 1
    }
  }
}