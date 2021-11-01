/// <reference types="react" />
export interface IconProps {
    name: string;
    size?: string;
    fill?: string;
}
declare const Icon: {
    (props: IconProps): JSX.Element;
    defaultProps: {
        size: null;
    };
};
export default Icon;
