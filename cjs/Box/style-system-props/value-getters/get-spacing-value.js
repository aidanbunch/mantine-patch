'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const NEGATIVE_VALUES = ["-xs", "-sm", "-md", "-lg", "-xl"];
function getSpacingValue(size, theme) {
  if (NEGATIVE_VALUES.includes(size)) {
    return theme.fn.size({ size: size.replace("-", ""), sizes: theme.spacing }) * -1;
  }
  return theme.fn.size({ size, sizes: theme.spacing });
}

exports.getSpacingValue = getSpacingValue;
//# sourceMappingURL=get-spacing-value.js.map
