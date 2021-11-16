/* eslint-env browser */
import LineBrushAction from "./LineBrushAction"

export default class ErasterBrushAction extends LineBrushAction {
  actionType = 'EraserBrush'

  onAnimationFrame() {
    // TODO may have to use a hidden cache layer instead of the buffer
    this.sketch.drawingLayer.ctx.globalCompositeOperation = "copy"
    this.sketch.bufferLayer.clear()
    this.sketch.drawingLayer.ctx.drawImage(this.sketch.bufferLayer.ctx.canvas, 0, 0, this.sketch.width, this.sketch.height)
    this.sketch.drawingLayer.ctx.globalCompositeOperation = "destination-out"
    this.trace(this.sketch.drawingLayer.ctx)
    this.sketch.drawingLayer.ctx.stroke()
  }

}