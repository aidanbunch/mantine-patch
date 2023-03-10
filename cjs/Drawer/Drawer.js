'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var styles = require('@mantine/styles');
var Drawer_styles = require('./Drawer.styles.js');
var OptionalPortal = require('../Portal/OptionalPortal.js');
var GroupedTransition = require('../Transition/GroupedTransition.js');
var Box = require('../Box/Box.js');
var Paper = require('../Paper/Paper.js');
var Text = require('../Text/Text.js');
var CloseButton = require('../CloseButton/CloseButton.js');
var Overlay = require('../Overlay/Overlay.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const transitions = {
  top: "slide-down",
  bottom: "slide-up",
  left: "slide-right",
  right: "slide-left"
};
const rtlTransitions = {
  top: "slide-down",
  bottom: "slide-up",
  right: "slide-right",
  left: "slide-left"
};
const defaultProps = {
  position: "left",
  size: "md",
  transitionDuration: 250,
  transitionTimingFunction: "ease",
  zIndex: styles.getDefaultZIndex("modal"),
  shadow: "md",
  padding: 0,
  lockScroll: true,
  closeOnClickOutside: true,
  closeOnEscape: true,
  trapFocus: true,
  withOverlay: true,
  withCloseButton: true,
  withinPortal: true,
  withFocusReturn: true,
  overlayBlur: 0
};
function Drawer(props) {
  const _a = styles.useComponentDefaultProps("Drawer", defaultProps, props), {
    className,
    opened,
    onClose,
    position,
    size,
    trapFocus,
    lockScroll,
    closeOnClickOutside,
    closeOnEscape,
    transition,
    transitionDuration,
    transitionTimingFunction,
    zIndex,
    overlayColor,
    overlayOpacity,
    children,
    withOverlay,
    shadow,
    id,
    padding,
    title,
    withCloseButton,
    closeButtonLabel,
    classNames,
    styles: styles$1,
    target,
    withinPortal,
    overlayBlur,
    unstyled,
    withFocusReturn
  } = _a, others = __objRest(_a, [
    "className",
    "opened",
    "onClose",
    "position",
    "size",
    "trapFocus",
    "lockScroll",
    "closeOnClickOutside",
    "closeOnEscape",
    "transition",
    "transitionDuration",
    "transitionTimingFunction",
    "zIndex",
    "overlayColor",
    "overlayOpacity",
    "children",
    "withOverlay",
    "shadow",
    "id",
    "padding",
    "title",
    "withCloseButton",
    "closeButtonLabel",
    "classNames",
    "styles",
    "target",
    "withinPortal",
    "overlayBlur",
    "unstyled",
    "withFocusReturn"
  ]);
  const baseId = hooks.useId(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const { classes, cx, theme } = Drawer_styles['default']({ size, position, zIndex, withOverlay }, { classNames, styles: styles$1, unstyled, name: "Drawer" });
  const focusTrapRef = hooks.useFocusTrap(trapFocus && opened);
  const [, _lockScroll] = hooks.useScrollLock();
  const drawerTransition = transition || (theme.dir === "rtl" ? rtlTransitions : transitions)[position];
  const _overlayOpacity = typeof overlayOpacity === "number" ? overlayOpacity : theme.colorScheme === "dark" ? 0.85 : 0.75;
  const _closeOnEscape = (event) => {
    if (event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  };
  React.useEffect(() => {
    if (!trapFocus) {
      window.addEventListener("keydown", _closeOnEscape);
      return () => window.removeEventListener("keydown", _closeOnEscape);
    }
    return void 0;
  }, [trapFocus]);
  hooks.useFocusReturn({ opened, shouldReturnFocus: trapFocus && withFocusReturn });
  return /* @__PURE__ */ React__default.createElement(OptionalPortal.OptionalPortal, {
    withinPortal,
    target
  }, /* @__PURE__ */ React__default.createElement(GroupedTransition.GroupedTransition, {
    onExited: () => _lockScroll(false),
    onEntered: () => _lockScroll(lockScroll && true),
    mounted: opened,
    duration: transitionDuration,
    timingFunction: transitionTimingFunction,
    transitions: {
      overlay: { duration: transitionDuration / 2, transition: "fade", timingFunction: "ease" },
      drawer: {
        duration: transitionDuration,
        transition: drawerTransition,
        timingFunction: transitionTimingFunction
      }
    }
  }, (transitionStyles) => /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({
    className: cx(classes.root, className),
    role: "dialog",
    "aria-modal": true,
    "aria-labelledby": titleId,
    "aria-describedby": bodyId
  }, others), /* @__PURE__ */ React__default.createElement(Paper.Paper, {
    className: cx(classes.drawer, className),
    ref: focusTrapRef,
    style: transitionStyles.drawer,
    radius: 0,
    tabIndex: -1,
    onKeyDownCapture: (event) => {
      var _a2;
      const shouldTrigger = ((_a2 = event.target) == null ? void 0 : _a2.getAttribute("data-mantine-stop-propagation")) !== "true";
      shouldTrigger && event.key === "Escape" && closeOnEscape && onClose();
    },
    shadow,
    p: padding,
    unstyled
  }, (title || withCloseButton) && /* @__PURE__ */ React__default.createElement("div", {
    className: classes.header
  }, /* @__PURE__ */ React__default.createElement(Text.Text, {
    id: titleId,
    className: classes.title,
    unstyled
  }, title), withCloseButton && /* @__PURE__ */ React__default.createElement(CloseButton.CloseButton, {
    iconSize: 16,
    onClick: onClose,
    "aria-label": closeButtonLabel,
    className: classes.closeButton,
    unstyled
  })), /* @__PURE__ */ React__default.createElement("div", {
    id: bodyId,
    className: classes.body
  }, children)), withOverlay && /* @__PURE__ */ React__default.createElement("div", {
    style: transitionStyles.overlay
  }, /* @__PURE__ */ React__default.createElement(Overlay.Overlay, {
    unstyled,
    blur: overlayBlur,
    onMouseDown: () => closeOnClickOutside && onClose(),
    className: classes.overlay,
    opacity: _overlayOpacity,
    zIndex: 0,
    color: overlayColor || (theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.black)
  })))));
}
Drawer.displayName = "@mantine/core/Drawer";

exports.Drawer = Drawer;
//# sourceMappingURL=Drawer.js.map
