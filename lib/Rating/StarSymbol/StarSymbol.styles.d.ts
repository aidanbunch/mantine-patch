import { MantineColor, MantineSize } from '@mantine/styles';
export interface StarSymbolStylesParams {
    size: MantineSize;
    type: 'empty' | 'full';
    color: MantineColor;
}
declare const _default: (params: StarSymbolStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        icon: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=StarSymbol.styles.d.ts.map