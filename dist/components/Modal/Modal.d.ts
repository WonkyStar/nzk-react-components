import { ReactElement } from 'react';
export interface ModalProps {
    children?: ReactElement | string;
    title?: string;
    message?: string;
    errorMessage?: string;
    actions?: ReactElement[];
    dismiss?: () => void;
}
declare const Modal: (props: ModalProps) => JSX.Element;
export default Modal;
