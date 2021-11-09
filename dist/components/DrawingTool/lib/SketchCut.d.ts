import Sketch, { SketchProps } from "./Sketch";
import SketchCutModel from "./SketchCutModel";
import SketchLayer from "./SketchLayer";
import SketchStrokeModel from "./SketchStrokeModel";
export interface SketchCutProps extends SketchProps {
    imageToCut: HTMLImageElement;
    onImageCut?: () => void;
}
export default class SketchCut extends Sketch {
    readonly model: SketchCutModel;
    readonly imageToCut: HTMLImageElement;
    cutLayer: SketchLayer;
    uiLayer: SketchLayer;
    onImageCut?: () => void;
    constructor(props: SketchCutProps);
    initDrawAnimations(): void;
    drawCutStroke(stroke: any): void;
    drawCutFinal(stroke: any): void;
    resetCut(): void;
    drawOutline(stroke: SketchStrokeModel): void;
    getLayerToExport(): SketchLayer;
}
