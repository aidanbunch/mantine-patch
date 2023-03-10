import { MantineSize, MantineNumberSize, MantineColor, MantineTheme, MantineGradient } from '@mantine/styles';
export declare const BUTTON_VARIANTS: readonly ["filled", "outline", "light", "white", "default", "subtle", "gradient"];
export type ButtonVariant = typeof BUTTON_VARIANTS[number];
export interface ButtonStylesParams {
    color: MantineColor;
    size: MantineSize;
    radius: MantineNumberSize;
    fullWidth: boolean;
    compact: boolean;
    gradient: MantineGradient;
    variant: ButtonVariant;
    withRightIcon: boolean;
    withLeftIcon: boolean;
}
export declare const sizes: {
    xs: {
        height: number;
        paddingLeft: number;
        paddingRight: number;
    };
    sm: {
        height: number;
        paddingLeft: number;
        paddingRight: number;
    };
    md: {
        height: number;
        paddingLeft: number;
        paddingRight: number;
    };
    lg: {
        height: number;
        paddingLeft: number;
        paddingRight: number;
    };
    xl: {
        height: number;
        paddingLeft: number;
        paddingRight: number;
    };
    'compact-xs': {
        height: number;
        paddingLeft: number;
        paddingRight: number;
    };
    'compact-sm': {
        height: number;
        paddingLeft: number;
        paddingRight: number;
    };
    'compact-md': {
        height: number;
        paddingLeft: number;
        paddingRight: number;
    };
    'compact-lg': {
        height: number;
        paddingLeft: number;
        paddingRight: number;
    };
    'compact-xl': {
        height: number;
        paddingLeft: number;
        paddingRight: number;
    };
};
declare const _default: (params: ButtonStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        icon: string;
        leftIcon: string;
        rightIcon: string;
        centerLoader: string;
        inner: string;
        label: string;
    };
    cx: (...args: any) => string;
    theme: MantineTheme;
};
export default _default;
//# sourceMappingURL=Button.styles.d.ts.map