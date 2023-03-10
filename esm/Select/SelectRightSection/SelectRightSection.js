import React from 'react';
import { ChevronIcon } from './ChevronIcon.js';
import { CloseButton } from '../../CloseButton/CloseButton.js';

function SelectRightSection({
  shouldClear,
  clearButtonLabel,
  onClear,
  size,
  error,
  clearButtonTabIndex
}) {
  return shouldClear ? /* @__PURE__ */ React.createElement(CloseButton, {
    variant: "transparent",
    "aria-label": clearButtonLabel,
    onClick: onClear,
    size,
    tabIndex: clearButtonTabIndex,
    onMouseDown: (event) => event.preventDefault()
  }) : /* @__PURE__ */ React.createElement(ChevronIcon, {
    error,
    size
  });
}
SelectRightSection.displayName = "@mantine/core/SelectRightSection";

export { SelectRightSection };
//# sourceMappingURL=SelectRightSection.js.map
