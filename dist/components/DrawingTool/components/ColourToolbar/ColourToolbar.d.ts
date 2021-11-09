/// <reference types="react" />
import { Orientation } from '../../DrawingTool';
import { Colour } from '../../DrawingToolProvider';
export interface Props {
    size: number;
    orientation: Orientation;
    currentColour: Colour;
}
declare const ColourToolbar: {
    (props: Props): JSX.Element;
    defaultProps: {
        mode: string;
        size: number;
        onSelectColour: () => void;
        currentColor: {
            rgb: number[];
            hex: string;
        };
    };
};
export default ColourToolbar;
