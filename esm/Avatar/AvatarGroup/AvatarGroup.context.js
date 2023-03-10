import React, { createContext, useContext } from 'react';

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
const AvatarGroupContext = createContext(null);
function AvatarGroupProvider({ spacing, children }) {
  return /* @__PURE__ */ React.createElement(AvatarGroupContext.Provider, {
    value: { spacing }
  }, children);
}
function useAvatarGroupContext() {
  const ctx = useContext(AvatarGroupContext);
  if (ctx) {
    return __spreadProps(__spreadValues({}, ctx), { withinGroup: true });
  }
  return { spacing: null, withinGroup: false };
}

export { AvatarGroupProvider, useAvatarGroupContext };
//# sourceMappingURL=AvatarGroup.context.js.map
