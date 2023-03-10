import React from 'react';
import { DefaultProps, MantineSize, MantineColor, Selectors, MantineNumberSize } from '@mantine/styles';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { InlineInputStylesNames } from '../InlineInput';
import { CheckboxGroup } from './CheckboxGroup/CheckboxGroup';
import useStyles, { CheckboxStylesParams } from './Checkbox.styles';
export type CheckboxStylesNames = Selectors<typeof useStyles> | InlineInputStylesNames;
export interface CheckboxProps extends DefaultProps<CheckboxStylesNames, CheckboxStylesParams>, Omit<React.ComponentPropsWithRef<'input'>, 'type' | 'size'> {
    /** Key of theme.colors */
    color?: MantineColor;
    /** Key of theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Predefined label font-size and checkbox width and height in px */
    size?: MantineSize;
    /** Checkbox label */
    label?: React.ReactNode;
    /** Indeterminate state of checkbox, overwrites checked */
    indeterminate?: boolean;
    /** Props spread to wrapper element */
    wrapperProps?: Record<string, any>;
    /** id to connect label with input */
    id?: string;
    /** Transition duration in ms */
    transitionDuration?: number;
    /** Icon rendered when checkbox has checked or indeterminate state */
    icon?: React.FC<{
        indeterminate: boolean;
        className: string;
    }>;
    /** Position of label */
    labelPosition?: 'left' | 'right';
    /** description, displayed after label */
    description?: React.ReactNode;
    /** Displays error message after input */
    error?: React.ReactNode;
}
type CheckboxComponent = ForwardRefWithStaticComponents<CheckboxProps, {
    Group: typeof CheckboxGroup;
}>;
export declare const Checkbox: CheckboxComponent;
export {};
//# sourceMappingURL=Checkbox.d.ts.map