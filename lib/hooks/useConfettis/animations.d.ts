import confetti from 'canvas-confetti';
export interface IAnimationsArgs {
    basicCanon: {
        confettiOptions: confetti.Options;
    };
    fireworks: {
        durationInMs: number;
        confettiOptions: confetti.Options;
    };
    sideCanons: {
        durationInMs?: number;
        colors?: string[];
        confettiOptions?: confetti.Options;
    };
}
export interface IAnimations {
    basicCanon: (params: IAnimationsArgs["basicCanon"]) => void;
    fireworks: (params: IAnimationsArgs["fireworks"]) => void;
    sideCanons: (params: IAnimationsArgs["sideCanons"]) => void;
}
export declare type AnimationTypes = keyof IAnimations;
export declare const ANIMATIONS: IAnimations;
