import { MantineNumberSize, MantineColor, MantineGradient } from '@mantine/styles';
export type ThemeIconVariant = 'filled' | 'light' | 'gradient' | 'outline' | 'default';
export interface ThemeIconStylesParams {
    color: MantineColor;
    size: MantineNumberSize;
    radius: MantineNumberSize;
    variant: ThemeIconVariant;
    gradient: MantineGradient;
}
declare const _default: (params: ThemeIconStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=ThemeIcon.styles.d.ts.map