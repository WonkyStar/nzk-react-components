/* eslint-env browser */
import { Point } from "../types"
import LineBrushAction from "./LineBrushAction"

export default class ErasterBrushAction extends LineBrushAction {
  actionType = 'EraserBrush'

  startDraw (point: Point) {
    this.points.push(point)
    this.setDrawingStyle(this.sketch.drawingLayer.ctx)
    this.sketch.cacheLayer.ctx.globalCompositeOperation = "copy"
    this.sketch.cacheLayer.ctx.drawImage(this.sketch.drawingLayer.ctx.canvas, 0, 0, this.sketch.width, this.sketch.height)
    this.startDrawAnimation()
  }

  onDrawAnimationFrame() {
    this.draw()
  }

  draw() {
    this.sketch.drawingLayer.ctx.globalCompositeOperation = "copy"
    this.sketch.bufferLayer.clear()
    this.sketch.drawingLayer.ctx.drawImage(this.sketch.cacheLayer.ctx.canvas, 0, 0, this.sketch.width, this.sketch.height)
    this.sketch.drawingLayer.ctx.globalCompositeOperation = "destination-out"
    LineBrushAction.trace(this.sketch.drawingLayer.ctx, this.points)
    this.sketch.drawingLayer.ctx.stroke()
  }
}