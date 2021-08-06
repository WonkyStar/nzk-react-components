/// <reference types="react" />
export interface AvatarColorsProps {
    border: string;
    shadow: string;
    dropshadow: string;
}
export interface AvatarProps {
    user?: {
        avatar?: {
            url: string;
        };
        countryCode?: string;
        type: 'student' | 'parent' | 'teacher' | 'tutor';
    };
    colors?: AvatarColorsProps;
    countryCode?: string;
    src?: string;
    size?: string;
    flagHidden?: boolean;
}
declare const Avatar: {
    (props: AvatarProps): JSX.Element;
    defaultProps: {
        size: string;
        flagHidden: boolean;
        colors: {
            border: string;
            shadow: string;
            dropshadow: string;
        };
    };
};
export default Avatar;
