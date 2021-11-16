/* eslint-env browser */
import LineBrushAction from "./LineBrushAction"

export default class FillBrushAction extends LineBrushAction {
  actionType = 'FillBrush'

  onAnimationFrame() {
    this.sketch.bufferLayer.clear()
    this.trace(this.sketch.bufferLayer.ctx)
    this.sketch.bufferLayer.ctx.closePath()
    this.sketch.bufferLayer.ctx.fill()
    this.sketch.bufferLayer.ctx.stroke()
  }

  draw() {
    this.sketch.drawingLayer.ctx.globalCompositeOperation = "source-over"
    this.trace(this.sketch.drawingLayer.ctx)
    this.sketch.drawingLayer.ctx.closePath()
    this.sketch.drawingLayer.ctx.fill()
    this.sketch.drawingLayer.ctx.stroke()
  }
}