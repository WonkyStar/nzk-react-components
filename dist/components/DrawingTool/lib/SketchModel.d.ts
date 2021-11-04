import SketchStrokeModel, { SketchPoint, SketchStrokeModelData, SketchStrokeType } from './SketchStrokeModel';
export declare type SketchActionType = 'STROKE' | 'IMAGE_MERGE';
export interface SketchActionMergeData {
    image: string;
    x: number;
    y: number;
}
export interface SketchAction {
    type: SketchActionType;
    data?: SketchStrokeModelData | SketchActionMergeData;
    model?: SketchStrokeModel;
}
export interface SketchModelData {
    colour: number[];
    opacity: number;
    size: number;
    lastActionIndex: number;
    actions: SketchAction[];
    currentStroke: null | SketchStrokeModelData;
}
interface Props {
    pixelRatioScale: number;
}
export default class SketchModel {
    colour: number[];
    eraser: boolean;
    fill: boolean;
    opacity: number;
    size: number;
    pixelRatioScale: number;
    actions: SketchAction[];
    lastActionIndex: number;
    currentStroke: null | SketchStrokeModel;
    constructor(props: Props);
    generateStyleType(): SketchStrokeType;
    getStyle(): {
        opacity: number;
        colour: number[];
        eraser: boolean;
        size: number;
        type: SketchStrokeType;
    };
    initStroke(newPoint: SketchPoint): void;
    continueStroke(newPoint: SketchPoint): void;
    saveStroke(): void;
    saveMergeImage(mergeParams: SketchActionMergeData): void;
    canUndo(): boolean;
    canRedo(): boolean;
    reset(): void;
    serialize(): {
        colour: number[];
        opacity: number;
        size: number;
        lastActionIndex: number;
        actions: SketchAction[];
        currentStroke: SketchStrokeModelData | null;
    };
    deserialize(serialized: SketchModelData): void;
}
export {};
