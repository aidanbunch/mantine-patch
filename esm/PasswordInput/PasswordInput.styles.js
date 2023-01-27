import { createStyles } from '@mantine/styles';
import { sizes } from '../Input/Input.styles.js';

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
var useStyles = createStyles((theme, { size, rightSectionWidth }) => ({
  visibilityToggle: {},
  input: {
    position: "relative",
    overflow: "hidden"
  },
  innerInput: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    backgroundColor: "transparent",
    border: "1px solid transparent",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    boxSizing: "border-box",
    position: "absolute",
    display: "block",
    width: `calc(100% - ${rightSectionWidth}px)`,
    paddingLeft: theme.fn.size({ size, sizes: sizes }) / 3,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    height: theme.fn.size({ size, sizes: sizes }) - 2,
    lineHeight: `${theme.fn.size({ size, sizes: sizes }) - 4}px`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    "&:focus": {
      outline: 0
    },
    "&:disabled": {
      cursor: "not-allowed"
    },
    "&::placeholder": __spreadProps(__spreadValues({}, theme.fn.placeholderStyles()), {
      opacity: 1
    })
  }),
  invalid: {
    color: theme.fn.variant({ variant: "filled", color: "red" }).background,
    "&::placeholder": {
      opacity: 1,
      color: theme.fn.variant({ variant: "filled", color: "red" }).background
    }
  },
  withIcon: {
    paddingLeft: `${theme.fn.size({ size, sizes: sizes })}px !important`
  }
}));

export default useStyles;
//# sourceMappingURL=PasswordInput.styles.js.map
