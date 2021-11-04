/* eslint-disable class-methods-use-this */
import SketchModel from "./SketchModel"
import { SketchStrokeType } from "./SketchStrokeModel"

export default class SketchCutModel extends SketchModel {
  generateStyleType () {
    return 'cut' as SketchStrokeType
  }
}