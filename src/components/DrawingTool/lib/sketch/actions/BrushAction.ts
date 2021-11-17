/* eslint-env browser */
import { Point } from "../types"
import Action from "./Action"

export default abstract class BrushAction extends Action {
  private drawAnimationFrameId?: number

  abstract startDraw(point: Point): void

  abstract continueDraw(point: Point): void

  abstract endDraw(): void

  abstract onDrawAnimationFrame(): void

  startDrawAnimation() {
    this.drawAnimationFrameId = window.requestAnimationFrame(() => {
      this.onDrawAnimationFrame()
      this.startDrawAnimation()
    })
  }

  stopDrawAnimation() {
    if (this.drawAnimationFrameId) {
      window.cancelAnimationFrame(this.drawAnimationFrameId)
      this.drawAnimationFrameId = undefined
    }
  }

  destroy() {
    this.stopDrawAnimation()
  }
}
