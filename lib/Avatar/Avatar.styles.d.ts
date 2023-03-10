import { MantineNumberSize, MantineColor, MantineTheme, MantineGradient } from '@mantine/styles';
export declare const AVATAR_VARIANTS: readonly ["filled", "light", "gradient", "outline"];
export type AvatarVariant = typeof AVATAR_VARIANTS[number];
export interface AvatarStylesParams {
    size: MantineNumberSize;
    radius: MantineNumberSize;
    color: MantineColor;
    withinGroup: boolean;
    spacing: MantineNumberSize;
    variant: AvatarVariant;
    gradient: MantineGradient;
}
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (params: AvatarStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        image: string;
        placeholder: string;
        placeholderIcon: string;
    };
    cx: (...args: any) => string;
    theme: MantineTheme;
};
export default _default;
//# sourceMappingURL=Avatar.styles.d.ts.map