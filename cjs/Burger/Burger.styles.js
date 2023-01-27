'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@mantine/styles');

const sizes = {
  xs: 12,
  sm: 18,
  md: 24,
  lg: 34,
  xl: 42
};
var useStyles = styles.createStyles((theme, { size, color, transitionDuration }) => {
  const sizeValue = theme.fn.size({ size, sizes });
  const _color = color || (theme.colorScheme === "dark" ? theme.white : theme.black);
  return {
    root: {
      borderRadius: theme.radius.sm,
      width: `calc(${sizeValue}px + ${theme.spacing.xs}px)`,
      height: `calc(${sizeValue}px + ${theme.spacing.xs}px)`,
      padding: `calc(${theme.spacing.xs}px / 2)`,
      cursor: "pointer"
    },
    burger: {
      position: "relative",
      userSelect: "none",
      boxSizing: "border-box",
      "&, &::before, &::after": {
        display: "block",
        width: sizeValue,
        height: Math.ceil(sizeValue / 12),
        backgroundColor: _color,
        outline: "1px solid transparent",
        transitionProperty: "background-color, transform",
        transitionDuration: `${transitionDuration}ms`,
        "@media (prefers-reduced-motion)": {
          transitionDuration: theme.respectReducedMotion ? "0ms" : void 0
        }
      },
      "&::before, &::after": {
        position: "absolute",
        content: '""',
        left: 0
      },
      "&::before": {
        top: sizeValue / 3 * -1
      },
      "&::after": {
        top: sizeValue / 3
      },
      "&[data-opened]": {
        backgroundColor: "transparent",
        "&::before": {
          transform: `translateY(${sizeValue / 3}px) rotate(45deg)`
        },
        "&::after": {
          transform: `translateY(-${sizeValue / 3}px) rotate(-45deg)`
        }
      }
    }
  };
});

exports.default = useStyles;
//# sourceMappingURL=Burger.styles.js.map
