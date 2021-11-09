/* eslint-disable class-methods-use-this */
import SketchModel from "./SketchModel"
import { SketchStrokeType } from "./SketchStrokeModel"

export default class SketchCutModel extends SketchModel {
  colour: number[] = [252,234,63]

  generateStyleType () {
    return 'cut' as SketchStrokeType
  }
}