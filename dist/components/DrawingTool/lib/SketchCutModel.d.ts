import SketchModel from "./SketchModel";
import { SketchStrokeType } from "./SketchStrokeModel";
export default class SketchCutModel extends SketchModel {
    colour: number[];
    generateStyleType(): SketchStrokeType;
}
