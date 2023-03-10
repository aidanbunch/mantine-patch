'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@mantine/styles');

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const sizes = {
  xs: 24,
  sm: 28,
  md: 32,
  lg: 36,
  xl: 40
};
const iconSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18
};
const padding = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32
};
const checkedPadding = {
  xs: 7.5,
  sm: 10,
  md: 11.5,
  lg: 13,
  xl: 15
};
var useStyles = styles.createStyles((theme, { radius, size, color }, getRef) => ({
  root: {},
  label: __spreadProps(__spreadValues({
    ref: getRef("label")
  }, theme.fn.fontStyles()), {
    boxSizing: "border-box",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    display: "inline-block",
    alignItems: "center",
    userSelect: "none",
    border: "1px solid transparent",
    borderRadius: theme.fn.radius(radius),
    height: theme.fn.size({ size, sizes }),
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    lineHeight: `${theme.fn.size({ size, sizes }) - 2}px`,
    paddingLeft: theme.fn.size({ size, sizes: padding }),
    paddingRight: theme.fn.size({ size, sizes: padding }),
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "background-color 100ms ease",
    WebkitTapHighlightColor: "transparent",
    '&[data-variant="filled"]': __spreadValues({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
    }, theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
    })),
    '&[data-variant="outline"]': __spreadValues({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4]
    }, theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
    })),
    "&[data-disabled]": __spreadProps(__spreadValues({
      backgroundColor: `${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]} !important`,
      borderColor: `${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]} !important`,
      color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5],
      cursor: "not-allowed"
    }, theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    })), {
      [`& .${getRef("iconWrapper")}`]: {
        color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
      }
    }),
    "&[data-checked]": {
      paddingLeft: theme.fn.size({ size, sizes: checkedPadding }),
      paddingRight: theme.fn.size({ size, sizes: checkedPadding }),
      '&[data-variant="outline"]': {
        border: `1px solid ${theme.fn.variant({ variant: "filled", color }).background}`
      },
      '&[data-variant="filled"]': {
        "&, &:hover": {
          backgroundColor: theme.fn.variant({ variant: "light", color }).background
        }
      }
    }
  }),
  iconWrapper: {
    ref: getRef("iconWrapper"),
    color: theme.fn.variant({ variant: "filled", color }).background,
    width: theme.fn.size({ size, sizes: iconSizes }) + theme.fn.size({ size, sizes: theme.spacing }) / 1.5,
    maxWidth: theme.fn.size({ size, sizes: iconSizes }) + theme.fn.size({ size, sizes: theme.spacing }) / 1.5,
    height: theme.fn.size({ size, sizes: iconSizes }),
    display: "inline-block",
    verticalAlign: "middle",
    overflow: "hidden"
  },
  checkIcon: {
    width: theme.fn.size({ size, sizes: iconSizes }),
    height: theme.fn.size({ size, sizes: iconSizes }) / 1.1,
    display: "block"
  },
  input: {
    width: 0,
    height: 0,
    padding: 0,
    opacity: 0,
    margin: 0,
    "&:focus": {
      outline: "none",
      [`& + .${getRef("label")}`]: __spreadValues({}, theme.focusRing === "always" || theme.focusRing === "auto" ? theme.focusRingStyles.styles(theme) : theme.focusRingStyles.resetStyles(theme)),
      "&:focus:not(:focus-visible)": {
        [`& + .${getRef("label")}`]: __spreadValues({}, theme.focusRing === "auto" || theme.focusRing === "never" ? theme.focusRingStyles.resetStyles(theme) : null)
      }
    }
  }
}));

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Chip.styles.js.map
