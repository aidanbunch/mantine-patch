import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { TooltipGroup } from './TooltipGroup/TooltipGroup';
import { TooltipFloating } from './TooltipFloating/TooltipFloating';
import { FloatingPosition, ArrowPosition } from '../Floating';
import { MantineTransition } from '../Transition';
import { TooltipBaseProps } from './Tooltip.types';
export interface TooltipProps extends TooltipBaseProps {
    /** Called when tooltip position changes */
    onPositionChange?(position: FloatingPosition): void;
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms */
    closeDelay?: number;
    /** Controls opened state */
    opened?: boolean;
    /** Space between target element and tooltip in px */
    offset?: number;
    /** Determines whether component should have an arrow */
    withArrow?: boolean;
    /** Arrow size in px */
    arrowSize?: number;
    /** Arrow offset in px */
    arrowOffset?: number;
    /** Arrow radius in px */
    arrowRadius?: number;
    /** Arrow position **/
    arrowPosition?: ArrowPosition;
    /** One of premade transitions ot transition object */
    transition?: MantineTransition;
    /** Transition duration in ms */
    transitionDuration?: number;
    /** Determines which events will be used to show tooltip */
    events?: {
        hover: boolean;
        focus: boolean;
        touch: boolean;
    };
    /** useEffect dependencies to force update tooltip position */
    positionDependencies?: any[];
    /** Set if tooltip is attached to an inline element */
    inline?: boolean;
}
export declare const Tooltip: ForwardRefWithStaticComponents<TooltipProps, {
    Group: typeof TooltipGroup;
    Floating: typeof TooltipFloating;
}>;
//# sourceMappingURL=Tooltip.d.ts.map