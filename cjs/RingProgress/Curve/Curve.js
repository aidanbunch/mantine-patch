'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styles = require('@mantine/styles');
var getCurveProps = require('./get-curve-props.js');
var Tooltip = require('../../Tooltip/Tooltip.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
function Curve(_a) {
  var _b = _a, {
    size,
    value,
    offset,
    sum,
    thickness,
    root,
    color,
    lineRoundCaps,
    tooltip
  } = _b, others = __objRest(_b, [
    "size",
    "value",
    "offset",
    "sum",
    "thickness",
    "root",
    "color",
    "lineRoundCaps",
    "tooltip"
  ]);
  const theme = styles.useMantineTheme();
  const stroke = theme.fn.themeColor(color || (theme.colorScheme === "dark" ? "dark" : "gray"), color ? theme.fn.primaryShade() : theme.colorScheme === "dark" ? 4 : 1, false);
  return /* @__PURE__ */ React__default.createElement(Tooltip.Tooltip.Floating, {
    disabled: !tooltip,
    label: tooltip
  }, /* @__PURE__ */ React__default.createElement("circle", __spreadValues(__spreadProps(__spreadValues({}, others), {
    fill: "none",
    strokeLinecap: lineRoundCaps ? "round" : "butt",
    stroke
  }), getCurveProps.getCurveProps({ sum, size, thickness, value, offset, root }))));
}
Curve.displayName = "@mantine/core/Curve";

exports.Curve = Curve;
//# sourceMappingURL=Curve.js.map
