/// <reference types="react" />
export interface Props {
    showPaperBackground?: boolean;
    disableCameraUpload?: boolean;
    disableAutoCache?: boolean;
    cacheKey?: string;
}
export declare type Mode = 'landscape' | 'portrait';
declare const Drawing: {
    (props: Props): JSX.Element;
    defaultProps: {
        showPaperBackground: boolean;
        disableCameraUpload: boolean;
        disableAutoCache: boolean;
        cacheKey: string;
    };
};
export default Drawing;
