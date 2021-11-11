interface Props {
    width: number;
    height: number;
    pixelRatioScale: number;
    x?: number;
    y?: number;
}
export default class SketchLayer {
    width: number;
    height: number;
    x: number;
    y: number;
    naturalWidth: number;
    naturalHeight: number;
    readonly pixelRatioScale: number;
    readonly canvas: HTMLCanvasElement;
    readonly ctx: CanvasRenderingContext2D;
    constructor(props: Props);
    setSize(naturalWidth: any, naturalHeight: any, width: any, height: any): void;
    setPosition(x: any, y: any): void;
    hide(): void;
    show(): void;
    clear(): void;
    drawImageToFit(image: any): void;
    drawImageToFill(image: any): void;
}
export {};
