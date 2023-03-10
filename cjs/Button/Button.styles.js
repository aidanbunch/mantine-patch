'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@mantine/styles');
var Input_styles = require('../Input/Input.styles.js');

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
  xs: { height: Input_styles.sizes.xs, paddingLeft: 14, paddingRight: 14 },
  sm: { height: Input_styles.sizes.sm, paddingLeft: 18, paddingRight: 18 },
  md: { height: Input_styles.sizes.md, paddingLeft: 22, paddingRight: 22 },
  lg: { height: Input_styles.sizes.lg, paddingLeft: 26, paddingRight: 26 },
  xl: { height: Input_styles.sizes.xl, paddingLeft: 32, paddingRight: 32 },
  "compact-xs": { height: 22, paddingLeft: 7, paddingRight: 7 },
  "compact-sm": { height: 26, paddingLeft: 8, paddingRight: 8 },
  "compact-md": { height: 30, paddingLeft: 10, paddingRight: 10 },
  "compact-lg": { height: 34, paddingLeft: 12, paddingRight: 12 },
  "compact-xl": { height: 40, paddingLeft: 14, paddingRight: 14 }
};
function getSizeStyles({ compact, size, withLeftIcon, withRightIcon }) {
  if (compact) {
    return sizes[`compact-${size}`];
  }
  const _sizes = sizes[size];
  return __spreadProps(__spreadValues({}, _sizes), {
    paddingLeft: withLeftIcon ? _sizes.paddingLeft / 1.5 : _sizes.paddingLeft,
    paddingRight: withRightIcon ? _sizes.paddingRight / 1.5 : _sizes.paddingRight
  });
}
const getWidthStyles = (fullWidth) => ({
  display: fullWidth ? "block" : "inline-block",
  width: fullWidth ? "100%" : "auto"
});
function getVariantStyles({ variant, theme, color, gradient }) {
  const colors = theme.fn.variant({ color, variant, gradient });
  if (variant === "gradient") {
    return {
      border: 0,
      backgroundImage: colors.background,
      color: colors.color,
      "&:hover": theme.fn.hover({
        backgroundSize: "200%"
      })
    };
  }
  return __spreadValues({
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.background,
    color: colors.color
  }, theme.fn.hover({
    backgroundColor: colors.hover
  }));
}
var useStyles = styles.createStyles((theme, {
  color,
  size,
  radius,
  fullWidth,
  compact,
  gradient,
  variant,
  withLeftIcon,
  withRightIcon
}) => ({
  root: __spreadProps(__spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, getSizeStyles({ compact, size, withLeftIcon, withRightIcon })), theme.fn.fontStyles()), theme.fn.focusStyles()), getWidthStyles(fullWidth)), {
    borderRadius: theme.fn.radius(radius),
    fontWeight: 600,
    position: "relative",
    lineHeight: 1,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    userSelect: "none",
    cursor: "pointer"
  }), getVariantStyles({ variant, theme, color, gradient })), {
    "&:active": theme.activeStyles,
    "&:disabled, &[data-disabled]": {
      borderColor: "transparent",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
      color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[5],
      cursor: "not-allowed",
      backgroundImage: "none",
      pointerEvents: "none",
      "&:active": {
        transform: "none"
      }
    },
    "&[data-loading]": {
      pointerEvents: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        top: -1,
        left: -1,
        right: -1,
        bottom: -1,
        backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.dark[7], 0.5) : "rgba(255, 255, 255, .5)",
        borderRadius: theme.fn.radius(radius),
        cursor: "not-allowed"
      }
    }
  }),
  icon: {
    display: "flex",
    alignItems: "center"
  },
  leftIcon: {
    marginRight: 10
  },
  rightIcon: {
    marginLeft: 10
  },
  centerLoader: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    opacity: 0.5
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    overflow: "visible"
  },
  label: {
    whiteSpace: "nowrap",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center"
  }
}));

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Button.styles.js.map
