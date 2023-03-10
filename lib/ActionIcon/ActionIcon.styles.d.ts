import { MantineNumberSize, MantineColor, MantineTheme, MantineGradient } from '@mantine/styles';
export declare const ACTION_ICON_VARIANTS: readonly ["subtle", "filled", "outline", "light", "default", "transparent", "gradient"];
export type ActionIconVariant = typeof ACTION_ICON_VARIANTS[number];
export interface ActionIconStylesParams {
    color: MantineColor;
    size: MantineNumberSize;
    radius: MantineNumberSize;
    variant: ActionIconVariant;
    gradient: MantineGradient;
}
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (params: ActionIconStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: MantineTheme;
};
export default _default;
//# sourceMappingURL=ActionIcon.styles.d.ts.map