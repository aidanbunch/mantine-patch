import React from 'react';
import { DefaultProps, MantineNumberSize, MantineShadow, Selectors, MantineStyleSystemSize } from '@mantine/styles';
import { MantineTransition } from '../Transition';
import useStyles, { DrawerPosition } from './Drawer.styles';
export type DrawerStylesNames = Exclude<Selectors<typeof useStyles>, 'withOverlay'>;
export interface DrawerProps extends Omit<DefaultProps<DrawerStylesNames>, MantineStyleSystemSize>, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    /** If true drawer is mounted to the dom */
    opened: boolean;
    /** Called when drawer is closed (Escape key and click outside, depending on options) */
    onClose(): void;
    /** Drawer body position */
    position?: DrawerPosition;
    /** Drawer body width (right | left position) or height (top | bottom position), cannot exceed 100vh for height and 100% for width */
    size?: string | number;
    /** Drawer body shadow from theme or any css shadow value */
    shadow?: MantineShadow;
    /** Drawer body padding from theme or number for padding in px */
    padding?: MantineNumberSize;
    /** Drawer z-index property */
    zIndex?: React.CSSProperties['zIndex'];
    /** Disables focus trap */
    trapFocus?: boolean;
    /** Disables scroll lock */
    lockScroll?: boolean;
    /** Disable onMouseDown trigger for outside events */
    closeOnClickOutside?: boolean;
    /** Disable onKeyDownCapture trigger for escape key press */
    closeOnEscape?: boolean;
    /** Drawer appear and disappear transition, see Transition component for full documentation */
    transition?: MantineTransition;
    /** Transition duration in ms */
    transitionDuration?: number;
    /** Drawer transitionTimingFunction css property */
    transitionTimingFunction?: string;
    /** Removes overlay entirely */
    withOverlay?: boolean;
    /** Overlay opacity, number from 0 to 1 */
    overlayOpacity?: number;
    /** Overlay color, for example, #000 */
    overlayColor?: string;
    /** Overlay blur in px */
    overlayBlur?: number;
    /** Drawer title, displayed in header before close button */
    title?: React.ReactNode;
    /** Hides close button if set to false, drawer still can be closed with escape key and by clicking outside */
    withCloseButton?: boolean;
    /** Close button aria-label */
    closeButtonLabel?: string;
    /** id base, used to generate ids to connect drawer title and body with aria- attributes, defaults to random id */
    id?: string;
    /** Target element or selector where drawer portal should be rendered */
    target?: HTMLElement | string;
    /** Determines whether drawer should be rendered within Portal, defaults to true */
    withinPortal?: boolean;
    /** Determines whether focus should be returned to the last active element when drawer is closed */
    withFocusReturn?: boolean;
}
export declare function Drawer(props: DrawerProps): JSX.Element;
export declare namespace Drawer {
    var displayName: string;
}
//# sourceMappingURL=Drawer.d.ts.map