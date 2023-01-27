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
const sizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 30,
  xl: 36
};
var useStyles = createStyles((theme, { labelPosition, size }) => ({
  root: {},
  body: {
    display: "inline-flex"
  },
  labelWrapper: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    display: "inline-flex",
    flexDirection: "column",
    WebkitTapHighlightColor: "transparent",
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    lineHeight: `${theme.fn.size({ size, sizes })}px`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    cursor: theme.cursorType,
    order: labelPosition === "left" ? 1 : 2
  }),
  description: {
    marginTop: `calc(${theme.spacing.xs}px / 2)`,
    [labelPosition === "left" ? "paddingRight" : "paddingLeft"]: theme.spacing.sm
  },
  error: {
    marginTop: `calc(${theme.spacing.xs}px / 2)`,
    [labelPosition === "left" ? "paddingRight" : "paddingLeft"]: theme.spacing.sm
  },
  label: {
    cursor: theme.cursorType,
    [labelPosition === "left" ? "paddingRight" : "paddingLeft"]: theme.spacing.sm,
    "&[data-disabled]": {
      color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
    }
  }
}));

export default useStyles;
//# sourceMappingURL=InlineInput.styles.js.map
