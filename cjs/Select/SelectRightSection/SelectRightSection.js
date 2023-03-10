'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ChevronIcon = require('./ChevronIcon.js');
var CloseButton = require('../../CloseButton/CloseButton.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SelectRightSection({
  shouldClear,
  clearButtonLabel,
  onClear,
  size,
  error,
  clearButtonTabIndex
}) {
  return shouldClear ? /* @__PURE__ */ React__default.createElement(CloseButton.CloseButton, {
    variant: "transparent",
    "aria-label": clearButtonLabel,
    onClick: onClear,
    size,
    tabIndex: clearButtonTabIndex,
    onMouseDown: (event) => event.preventDefault()
  }) : /* @__PURE__ */ React__default.createElement(ChevronIcon.ChevronIcon, {
    error,
    size
  });
}
SelectRightSection.displayName = "@mantine/core/SelectRightSection";

exports.SelectRightSection = SelectRightSection;
//# sourceMappingURL=SelectRightSection.js.map
