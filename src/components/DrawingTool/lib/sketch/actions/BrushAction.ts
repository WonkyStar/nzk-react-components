/* eslint-env browser */
import { Point } from "../types"
import Action from "./Action"

export default abstract class BrushAction extends Action {
  abstract startDraw(point: Point): void

  abstract continueDraw(point: Point): void

  abstract endDraw(): void

  abstract onAnimationFrame(): void
}
