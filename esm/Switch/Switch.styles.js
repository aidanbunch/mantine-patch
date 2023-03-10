import { createStyles } from '@mantine/styles';

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
const switchHeight = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 30,
  xl: 36
};
const switchWidth = {
  xs: 32,
  sm: 38,
  md: 46,
  lg: 56,
  xl: 72
};
const handleSizes = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 22,
  xl: 28
};
const labelFontSizes = {
  xs: 5,
  sm: 6,
  md: 7,
  lg: 9,
  xl: 11
};
const trackLabelPaddings = {
  xs: 4,
  sm: 5,
  md: 6,
  lg: 8,
  xl: 10
};
var useStyles = createStyles((theme, { size, radius, color, labelPosition, error }) => {
  const handleSize = theme.fn.size({ size, sizes: handleSizes });
  const borderRadius = theme.fn.size({ size: radius, sizes: theme.radius });
  const colors = theme.fn.variant({ variant: "filled", color });
  const trackWidth = theme.fn.size({ size, sizes: switchWidth });
  const trackPadding = size === "xs" ? 1 : 2;
  const errorColor = theme.fn.variant({ variant: "filled", color: "red" }).background;
  return {
    input: {
      clip: "rect(1px, 1px, 1px, 1px)",
      height: 0,
      width: 0,
      overflow: "hidden",
      whiteSpace: "nowrap",
      padding: 0,
      WebkitClipPath: "inset(50%)",
      clipPath: "inset(50%)",
      position: "absolute"
    },
    track: __spreadProps(__spreadValues({}, theme.fn.focusStyles("input:focus + &")), {
      cursor: theme.cursorType,
      overflow: "hidden",
      WebkitTapHighlightColor: "transparent",
      position: "relative",
      borderRadius,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2],
      border: `1px solid ${error ? errorColor : theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
      height: theme.fn.size({ size, sizes: switchHeight }),
      minWidth: trackWidth,
      margin: 0,
      transitionProperty: "background-color, border-color",
      transitionTimingFunction: theme.transitionTimingFunction,
      transitionDuration: "150ms",
      boxSizing: "border-box",
      appearance: "none",
      display: "flex",
      alignItems: "center",
      fontSize: theme.fn.size({ size, sizes: labelFontSizes }),
      fontWeight: 600,
      order: labelPosition === "left" ? 2 : 1,
      userSelect: "none",
      MozUserSelect: "none",
      WebkitUserSelect: "none",
      MsUserSelect: "none",
      zIndex: 0,
      lineHeight: 0,
      color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
      transition: `color 150ms ${theme.transitionTimingFunction}`,
      "input:checked + &": {
        backgroundColor: colors.background,
        borderColor: colors.background,
        color: theme.white,
        transition: `color 150ms ${theme.transitionTimingFunction}`
      },
      "input:disabled + &": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
        borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
        cursor: "not-allowed"
      }
    }),
    thumb: {
      position: "absolute",
      zIndex: 1,
      borderRadius,
      boxSizing: "border-box",
      display: "flex",
      backgroundColor: theme.white,
      height: handleSize,
      width: handleSize,
      border: `1px solid ${theme.colorScheme === "dark" ? theme.white : theme.colors.gray[3]}`,
      left: `${trackPadding}px`,
      transition: `left 150ms ${theme.transitionTimingFunction}`,
      "& > *": {
        margin: "auto"
      },
      "@media (prefers-reduced-motion)": {
        transitionDuration: theme.respectReducedMotion ? "0ms" : ""
      },
      "input:checked + * > &": {
        left: `calc(100% - ${handleSize}px - ${trackPadding}px)`,
        borderColor: theme.white
      },
      "input:disabled + * > &": {
        borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[0]
      }
    },
    trackLabel: {
      height: "100%",
      display: "grid",
      placeContent: "center",
      minWidth: trackWidth - handleSize,
      paddingInline: theme.fn.size({ size, sizes: trackLabelPaddings }),
      margin: `0 0 0 ${handleSize + trackPadding}px`,
      transition: `margin 150ms ${theme.transitionTimingFunction}`,
      "input:checked + * > &": {
        margin: `0 ${handleSize + trackPadding}px 0 0`
      }
    }
  };
});

export default useStyles;
//# sourceMappingURL=Switch.styles.js.map
