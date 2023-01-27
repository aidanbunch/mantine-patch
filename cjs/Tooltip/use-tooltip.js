'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDomInteractions = require('@floating-ui/react-dom-interactions');
var hooks = require('@mantine/hooks');
var TooltipGroup_context = require('./TooltipGroup/TooltipGroup.context.js');
var useFloatingAutoUpdate = require('../Floating/use-floating-auto-update.js');

function useTooltip(settings) {
  const [uncontrolledOpened, setUncontrolledOpened] = React.useState(false);
  const controlled = typeof settings.opened === "boolean";
  const opened = controlled ? settings.opened : uncontrolledOpened;
  const withinGroup = TooltipGroup_context.useTooltipGroupContext();
  const uid = hooks.useId();
  const { delay: groupDelay, currentId, setCurrentId } = reactDomInteractions.useDelayGroupContext();
  const onChange = React.useCallback((_opened) => {
    setUncontrolledOpened(_opened);
    if (_opened) {
      setCurrentId(uid);
    }
  }, [setCurrentId, uid]);
  const {
    x,
    y,
    reference,
    floating,
    context,
    refs,
    update,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }
  } = reactDomInteractions.useFloating({
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: [
      reactDomInteractions.offset(settings.offset),
      reactDomInteractions.shift({ padding: 8 }),
      reactDomInteractions.flip(),
      reactDomInteractions.arrow({ element: settings.arrowRef, padding: settings.arrowOffset }),
      ...settings.inline ? [reactDomInteractions.inline()] : []
    ]
  });
  const { getReferenceProps, getFloatingProps } = reactDomInteractions.useInteractions([
    reactDomInteractions.useHover(context, {
      enabled: settings.events.hover,
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !settings.events.touch
    }),
    reactDomInteractions.useFocus(context, { enabled: settings.events.focus, keyboardOnly: true }),
    reactDomInteractions.useRole(context, { role: "tooltip" }),
    reactDomInteractions.useDismiss(context, { enabled: typeof settings.opened === void 0 }),
    reactDomInteractions.useDelayGroup(context, { id: uid })
  ]);
  useFloatingAutoUpdate.useFloatingAutoUpdate({
    opened,
    positionDependencies: settings.positionDependencies,
    floating: { refs, update }
  });
  hooks.useDidUpdate(() => {
    var _a;
    (_a = settings.onPositionChange) == null ? void 0 : _a.call(settings, placement);
  }, [placement]);
  const isGroupPhase = opened && currentId && currentId !== uid;
  return {
    x,
    y,
    arrowX,
    arrowY,
    reference,
    floating,
    getFloatingProps,
    getReferenceProps,
    isGroupPhase,
    opened,
    placement
  };
}

exports.useTooltip = useTooltip;
//# sourceMappingURL=use-tooltip.js.map