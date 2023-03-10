'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var styles = require('@mantine/styles');
var Modal_styles = require('./Modal.styles.js');
var OptionalPortal = require('../Portal/OptionalPortal.js');
var GroupedTransition = require('../Transition/GroupedTransition.js');
var Box = require('../Box/Box.js');
var Overlay = require('../Overlay/Overlay.js');
var Paper = require('../Paper/Paper.js');
var Text = require('../Text/Text.js');
var CloseButton = require('../CloseButton/CloseButton.js');

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
const defaultProps = {
  size: "md",
  transitionDuration: 250,
  overflow: "outside",
  padding: "lg",
  shadow: "lg",
  closeOnClickOutside: true,
  closeOnEscape: true,
  trapFocus: true,
  withCloseButton: true,
  withinPortal: true,
  lockScroll: true,
  withFocusReturn: true,
  overlayBlur: 0,
  zIndex: styles.getDefaultZIndex("modal"),
  exitTransitionDuration: 0
};
function Modal(props) {
  const _a = styles.useComponentDefaultProps("Modal", defaultProps, props), {
    className,
    opened,
    title,
    onClose,
    children,
    withCloseButton,
    overlayOpacity,
    size,
    transitionDuration,
    exitTransitionDuration,
    closeButtonLabel,
    overlayColor,
    overflow,
    transition,
    padding,
    shadow,
    radius,
    id,
    classNames,
    styles: styles$1,
    closeOnClickOutside,
    trapFocus,
    closeOnEscape,
    centered,
    target,
    withinPortal,
    zIndex,
    overlayBlur,
    transitionTimingFunction,
    fullScreen,
    unstyled,
    lockScroll: shouldLockScroll,
    withFocusReturn
  } = _a, others = __objRest(_a, [
    "className",
    "opened",
    "title",
    "onClose",
    "children",
    "withCloseButton",
    "overlayOpacity",
    "size",
    "transitionDuration",
    "exitTransitionDuration",
    "closeButtonLabel",
    "overlayColor",
    "overflow",
    "transition",
    "padding",
    "shadow",
    "radius",
    "id",
    "classNames",
    "styles",
    "closeOnClickOutside",
    "trapFocus",
    "closeOnEscape",
    "centered",
    "target",
    "withinPortal",
    "zIndex",
    "overlayBlur",
    "transitionTimingFunction",
    "fullScreen",
    "unstyled",
    "lockScroll",
    "withFocusReturn"
  ]);
  const baseId = hooks.useId(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const { classes, cx, theme } = Modal_styles['default']({ size, overflow, centered, zIndex, fullScreen }, { unstyled, classNames, styles: styles$1, name: "Modal" });
  const focusTrapRef = hooks.useFocusTrap(trapFocus && opened);
  const overlayRef = React.useRef(null);
  const mergedRef = hooks.useMergedRef(focusTrapRef, overlayRef);
  const _overlayOpacity = typeof overlayOpacity === "number" ? overlayOpacity : theme.colorScheme === "dark" ? 0.85 : 0.75;
  hooks.useScrollLock(shouldLockScroll && opened);
  const closeOnEscapePress = (event) => {
    if (!trapFocus && event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  };
  React.useEffect(() => {
    if (!trapFocus) {
      window.addEventListener("keydown", closeOnEscapePress);
      return () => window.removeEventListener("keydown", closeOnEscapePress);
    }
    return void 0;
  }, [trapFocus]);
  hooks.useFocusReturn({ opened, shouldReturnFocus: trapFocus && withFocusReturn });
  const clickTarget = React.useRef(null);
  hooks.useWindowEvent("mousedown", (e) => {
    clickTarget.current = e.target;
  });
  const handleOutsideClick = () => {
    if (clickTarget.current === overlayRef.current) {
      closeOnClickOutside && onClose();
    }
  };
  return /* @__PURE__ */ React__default.createElement(OptionalPortal.OptionalPortal, {
    withinPortal,
    target
  }, /* @__PURE__ */ React__default.createElement(GroupedTransition.GroupedTransition, {
    mounted: opened,
    duration: transitionDuration,
    exitDuration: exitTransitionDuration,
    timingFunction: transitionTimingFunction,
    transitions: {
      modal: {
        duration: transitionDuration,
        transition: transition || (fullScreen ? "fade" : "pop")
      },
      overlay: {
        duration: transitionDuration / 2,
        transition: "fade",
        timingFunction: "ease"
      }
    }
  }, (transitionStyles) => /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({
    id: baseId,
    className: cx(classes.root, className)
  }, others), /* @__PURE__ */ React__default.createElement("div", {
    style: transitionStyles.overlay
  }, /* @__PURE__ */ React__default.createElement(Overlay.Overlay, {
    className: classes.overlay,
    sx: { position: "fixed" },
    zIndex: 0,
    blur: overlayBlur,
    color: overlayColor || (theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.black),
    opacity: _overlayOpacity,
    unstyled
  })), /* @__PURE__ */ React__default.createElement("div", {
    role: "presentation",
    className: classes.inner,
    onClick: handleOutsideClick,
    onKeyDown: (event) => {
      var _a2;
      const shouldTrigger = ((_a2 = event.target) == null ? void 0 : _a2.getAttribute("data-mantine-stop-propagation")) !== "true";
      shouldTrigger && event.key === "Escape" && closeOnEscape && onClose();
    },
    ref: mergedRef
  }, /* @__PURE__ */ React__default.createElement(Paper.Paper, {
    className: classes.modal,
    shadow,
    p: padding,
    radius,
    role: "dialog",
    "aria-labelledby": titleId,
    "aria-describedby": bodyId,
    "aria-modal": true,
    tabIndex: -1,
    style: transitionStyles.modal,
    unstyled,
    onClick: (event) => event.stopPropagation()
  }, (title || withCloseButton) && /* @__PURE__ */ React__default.createElement("div", {
    className: classes.header
  }, /* @__PURE__ */ React__default.createElement(Text.Text, {
    id: titleId,
    className: classes.title
  }, title), withCloseButton && /* @__PURE__ */ React__default.createElement(CloseButton.CloseButton, {
    iconSize: 16,
    onClick: onClose,
    "aria-label": closeButtonLabel,
    className: classes.close
  })), /* @__PURE__ */ React__default.createElement("div", {
    id: bodyId,
    className: classes.body
  }, children)))))));
}
Modal.displayName = "@mantine/core/Modal";

exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map
