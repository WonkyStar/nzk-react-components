import { RefObject } from 'react';
interface Size {
    width: number;
    height: number;
}
declare function useElementSize<T extends HTMLElement = HTMLDivElement>(elementRef: RefObject<T> | null): Size;
export default useElementSize;
