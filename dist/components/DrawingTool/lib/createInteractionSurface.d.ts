export interface Point {
    x: number;
    y: number;
}
interface Props {
    width: number;
    height: number;
    devicePixelRatio?: number;
    onTouchStart?: (point: Point) => void;
    onTouchMove?: (point: Point) => void;
    onTouchEnd?: (point: Point) => void;
    onTouchLeave?: (point: Point) => void;
    onTouchEnter?: (point: Point) => void;
}
declare const _default: (props: Props) => HTMLDivElement;
export default _default;
