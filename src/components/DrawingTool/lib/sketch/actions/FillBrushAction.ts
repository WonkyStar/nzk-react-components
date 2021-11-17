/* eslint-env browser */
import LineBrushAction from "./LineBrushAction"

export default class FillBrushAction extends LineBrushAction {
  actionType = 'FillBrush'

  onDrawAnimationFrame() {
    this.sketch.bufferLayer.clear()
    LineBrushAction.trace(this.sketch.bufferLayer.ctx, this.points)
    this.sketch.bufferLayer.ctx.closePath()
    this.sketch.bufferLayer.ctx.fill()
    this.sketch.bufferLayer.ctx.stroke()
  }

  draw() {
    this.setDrawingStyle(this.sketch.drawingLayer.ctx)
    this.sketch.drawingLayer.ctx.globalCompositeOperation = "source-over"
    LineBrushAction.trace(this.sketch.drawingLayer.ctx, this.points)
    this.sketch.drawingLayer.ctx.closePath()
    this.sketch.drawingLayer.ctx.fill()
    this.sketch.drawingLayer.ctx.stroke()
  }
}