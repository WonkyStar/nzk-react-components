import React, { ReactElement } from 'react';
declare const useModalState: () => {
    open: (modal: ReactElement, key?: string | undefined) => string;
    close: (key?: string | undefined) => void;
    modals: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
};
declare const ModalProvider: (props: any) => JSX.Element;
export { ModalProvider, useModalState };
