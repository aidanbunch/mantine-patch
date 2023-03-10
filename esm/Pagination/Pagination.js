import React, { forwardRef } from 'react';
import { usePagination } from '@mantine/hooks';
import { useComponentDefaultProps } from '@mantine/styles';
import { Group } from '../Group/Group.js';
import { DefaultItem } from './DefaultItem/DefaultItem.js';
import useStyles from './Pagination.styles.js';

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
  itemComponent: DefaultItem,
  initialPage: 1,
  siblings: 1,
  boundaries: 1,
  size: "md",
  radius: "sm",
  withEdges: false,
  withControls: true
};
const Pagination = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("Pagination", defaultProps, props), {
    itemComponent: Item,
    classNames,
    styles,
    page,
    initialPage,
    color,
    total,
    siblings,
    boundaries,
    size,
    radius,
    onChange,
    getItemAriaLabel,
    spacing,
    withEdges,
    withControls,
    sx,
    unstyled,
    disabled
  } = _a, others = __objRest(_a, [
    "itemComponent",
    "classNames",
    "styles",
    "page",
    "initialPage",
    "color",
    "total",
    "siblings",
    "boundaries",
    "size",
    "radius",
    "onChange",
    "getItemAriaLabel",
    "spacing",
    "withEdges",
    "withControls",
    "sx",
    "unstyled",
    "disabled"
  ]);
  const { classes, theme } = useStyles({ color, size, radius }, { classNames, styles, unstyled, name: "Pagination" });
  const { range, setPage, next, previous, active, first, last } = usePagination({
    page,
    siblings,
    total,
    onChange,
    initialPage,
    boundaries
  });
  if (total <= 0) {
    return null;
  }
  const items = range.map((pageNumber, index) => /* @__PURE__ */ React.createElement(Item, {
    key: index,
    page: pageNumber,
    active: pageNumber === active,
    "aria-current": pageNumber === active ? "page" : void 0,
    "aria-label": typeof getItemAriaLabel === "function" ? getItemAriaLabel(pageNumber) : null,
    tabIndex: pageNumber === "dots" ? -1 : 0,
    "data-dots": pageNumber === "dots" || void 0,
    "data-active": pageNumber === active || void 0,
    className: classes.item,
    onClick: pageNumber !== "dots" ? () => setPage(pageNumber) : void 0,
    disabled
  }));
  return /* @__PURE__ */ React.createElement(Group, __spreadValues({
    role: "navigation",
    spacing: spacing != null ? spacing : theme.fn.size({ size, sizes: theme.spacing }) / 2,
    ref,
    sx,
    unstyled
  }, others), withEdges && /* @__PURE__ */ React.createElement(Item, {
    page: "first",
    onClick: first,
    "aria-label": getItemAriaLabel ? getItemAriaLabel("first") : void 0,
    "aria-disabled": active === 1 || disabled,
    className: classes.item,
    disabled: active === 1 || disabled
  }), withControls && /* @__PURE__ */ React.createElement(Item, {
    page: "prev",
    onClick: previous,
    "aria-label": getItemAriaLabel ? getItemAriaLabel("prev") : void 0,
    "aria-disabled": active === 1 || disabled,
    className: classes.item,
    disabled: active === 1 || disabled
  }), items, withControls && /* @__PURE__ */ React.createElement(Item, {
    page: "next",
    onClick: next,
    "aria-label": getItemAriaLabel ? getItemAriaLabel("next") : void 0,
    "aria-disabled": active === total || disabled,
    className: classes.item,
    disabled: active === total || disabled
  }), withEdges && /* @__PURE__ */ React.createElement(Item, {
    page: "last",
    onClick: last,
    "aria-label": getItemAriaLabel ? getItemAriaLabel("last") : void 0,
    "aria-disabled": active === total || disabled,
    className: classes.item,
    disabled: active === total || disabled
  }));
});
Pagination.displayName = "@mantine/core/Pagination";

export { Pagination };
//# sourceMappingURL=Pagination.js.map
