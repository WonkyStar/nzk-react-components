import SketchLayer from './SketchLayer';
import { Point } from './createInteractionSurface';
import SketchModel, { SketchActionMergeData, SketchModelData } from './SketchModel';
export interface SketchProps {
    containerEl: HTMLDivElement;
    template?: string;
    onChange?: Function;
    sketchData?: SketchModelData;
}
interface ExportProps {
    crop?: boolean;
    maxWidth?: number;
    maxHeight?: number;
}
export default class Sketch {
    readonly containerEl: HTMLDivElement;
    readonly width: number;
    readonly height: number;
    readonly naturalWidth: number;
    readonly naturalHeight: number;
    readonly pixelRatioScale: number;
    readonly model: SketchModel;
    readonly drawingLayer: SketchLayer;
    readonly bufferLayer: SketchLayer;
    readonly cacheLayer: SketchLayer;
    readonly templateLayer?: SketchLayer;
    template?: string;
    interactionSurface: HTMLDivElement;
    isDrawing: boolean;
    onChange?: Function;
    sketchData?: SketchModelData;
    drawUndo?: any;
    drawFinished?: any;
    drawAnimation?: any;
    reqStroke?: any;
    constructor(props: SketchProps);
    setBrush({ colour, size, opacity, fill, eraser }: {
        colour: any;
        size: any;
        opacity: any;
        fill: any;
        eraser: any;
    }): void;
    mergeImage(data: SketchActionMergeData, saveAction?: boolean): void;
    export(props: ExportProps): string;
    undo(): void;
    redo(): void;
    canUndo(): boolean;
    canRedo(): boolean;
    restart(): void;
    serialize(): {
        colour: number[];
        opacity: number;
        size: number;
        lastActionIndex: number;
        actions: import("./SketchModel").SketchAction[];
        currentStroke: import("./SketchStrokeModel").SketchStrokeModelData | null;
    };
    deserialize(serialized: any): void;
    getNumberOfActions(): number;
    initDrawAnimations(): void;
    startDraw(point: Point): void;
    continueDraw(point: Point): boolean;
    endDraw(): void;
    drawExistingSketch(): void;
    strokeAnimation(): void;
    drawAnimationStroke(stroke: any): void;
    endStrokeAnimation(): void;
    drawUndoStroke(stroke: any): void;
    drawFinishedStroke(stroke: any): void;
    drawExistingStroke(stroke: any): void;
    drawTransparentFillFinal(stroke: any): void;
    drawStrokeFinal(stroke: any): void;
    drawFillFinal(stroke: any): void;
    drawFillAndStroke(stroke: any): void;
    drawEraserUndoingFinal(stroke: any): void;
    drawEraserUndoingFillFinal(stroke: any): void;
    drawEraser(stroke: any, copy?: boolean): void;
    drawEraserFillFinal(stroke: any, copy?: boolean): void;
    findBoundingBox(ctx: any): {
        topLeftX: number;
        topLeftY: number;
        bottomRightX: number;
        bottomRightY: number;
        width: number;
        height: number;
    };
    getLayerToExport(): SketchLayer;
}
export {};
