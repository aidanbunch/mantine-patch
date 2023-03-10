import { MantineNumberSize, MantineSize } from '@mantine/styles';
export interface ContainerStylesParams {
    fluid: boolean;
    size: MantineNumberSize;
    sizes: Record<MantineSize, number>;
}
declare const _default: (params: ContainerStylesParams, options?: import("@mantine/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/styles").MantineTheme;
};
export default _default;
//# sourceMappingURL=Container.styles.d.ts.map