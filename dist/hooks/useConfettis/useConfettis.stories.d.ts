/// <reference types="canvas-confetti" />
import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react").Args>;
export default _default;
export declare const basicCanon: Story<{
    confettiOptions: import("canvas-confetti").Options;
}>;
export declare const fireworks: Story<{
    durationInMs: number;
    confettiOptions: import("canvas-confetti").Options;
}>;
export declare const sideCanons: Story<{
    durationInMs?: number | undefined;
    colors?: string[] | undefined;
    confettiOptions?: import("canvas-confetti").Options | undefined;
}>;
