import Sketch, { SketchProps } from "./Sketch";
import SketchCutModel from "./SketchCutModel";
import SketchLayer from "./SketchLayer";
import SketchStrokeModel from "./SketchStrokeModel";
export interface SketchCutProps extends SketchProps {
    model: SketchCutModel;
    imageToCut: string;
}
export default class SketchCut extends Sketch {
    readonly model: SketchCutModel;
    readonly imageToCut: string;
    cutLayer: SketchLayer;
    uiLayer: SketchLayer;
    constructor(props: SketchCutProps);
    initDrawAnimations(): void;
    setDrawingStyle(style: any, ctx: any): void;
    drawCutStroke(stroke: any): void;
    drawCutFinal(stroke: any): void;
    drawOutline(stroke: SketchStrokeModel): void;
    getLayerToExport(): SketchLayer;
}
