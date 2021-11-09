/// <reference types="react" />
import { SketchActionMergeData } from './lib/SketchModel';
export declare const BrushSize: {
    small: number;
    medium: number;
    large: number;
};
export declare type BrushType = 'fill' | 'line' | 'eraser';
export declare const Colours: {
    rgb: number[];
    hex: string;
}[];
export interface Colour {
    rgb: number[];
    hex: string;
}
export declare const DrawingToolProvider: import("react").ComponentType<import("unstated-next").ContainerProviderProps<void>>;
export declare const useDrawingTool: () => {
    initSketch: (containerEl: any) => void;
    initSketchCut: (containerEl: any, imageToCut: HTMLImageElement, onImageCut: () => void) => void;
    exportSketch: (options?: {
        crop: boolean;
    }) => any;
    exportSketchCut: () => any;
    currentColour: {
        rgb: number[];
        hex: string;
    };
    setCurrentColour: import("react").Dispatch<import("react").SetStateAction<{
        rgb: number[];
        hex: string;
    }>>;
    brushOpacity: number;
    setBruchOpacity: import("react").Dispatch<import("react").SetStateAction<number>>;
    brushSize: number;
    setBrushSize: import("react").Dispatch<import("react").SetStateAction<number>>;
    brushType: string;
    setBrushType: import("react").Dispatch<import("react").SetStateAction<string>>;
    undo: () => void;
    redo: () => void;
    restart: () => void;
    onSketchChange: () => void;
    setCacheKey: import("react").Dispatch<import("react").SetStateAction<string>>;
    setAutoCache: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    clearCache: () => void;
    resetCut: () => void;
    mergeImage: (data: SketchActionMergeData) => void | null;
};
