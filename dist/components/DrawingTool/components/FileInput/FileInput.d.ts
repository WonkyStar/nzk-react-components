/// <reference types="react" />
export interface Props {
    dismiss?: () => void;
    onImageUploaded?: (image: HTMLImageElement) => void;
    isMobile: boolean;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
