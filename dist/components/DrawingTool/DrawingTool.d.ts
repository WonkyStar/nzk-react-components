import React from 'react';
export interface Props {
    prompt: string;
    backButton: React.ReactNode;
    saveButton: React.ReactNode;
    showPaperBackground?: boolean;
    disableCameraUpload?: boolean;
    disableAutoCache?: boolean;
    openUploadPopupOnStart?: boolean;
    cacheKey?: string;
}
export declare type Orientation = 'LANDSCAPE' | 'PORTRAIT';
declare const Drawing: {
    (props: Props): JSX.Element;
    defaultProps: {
        showPaperBackground: boolean;
        disableCameraUpload: boolean;
        disableAutoCache: boolean;
        cacheKey: string;
        openUploadPopupOnStart: boolean;
    };
};
export default Drawing;
