export interface SketchPoint {
    x: number;
    y: number;
}
export declare type SketchStrokeType = 'transparentEraserFill' | 'transparentEraserStroke' | 'transparentColourFill' | 'transparentColourStroke' | 'opaqueEraserFill' | 'opaqueEraserStroke' | 'opaqueColourFill' | 'opaqueColourStroke' | 'cut';
export interface SketchStrokeStyle {
    opacity: number;
    colour: number[];
    eraser: boolean;
    size: number;
    type: SketchStrokeType;
}
export interface SketchStrokeModelPoint {
    s: SketchPoint;
    h: SketchPoint | null;
}
export interface SketchStrokeModelData {
    style?: SketchStrokeStyle;
    points: SketchStrokeModelPoint[];
}
export default class SketchStrokeModel {
    style?: SketchStrokeStyle;
    points: SketchStrokeModelPoint[];
    constructor(style?: SketchStrokeStyle, firstPoint?: SketchPoint);
    length(): number;
    lastPoint(): SketchPoint;
    addPoint(newPoint: any): number;
    serialize(): {
        points: SketchStrokeModelPoint[];
        style: SketchStrokeStyle | undefined;
    };
    deserialize(serialized: any): void;
}
