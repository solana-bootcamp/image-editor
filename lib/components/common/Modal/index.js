import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b &&
      (d = d.filter(function (b) {
        return Object.getOwnPropertyDescriptor(a, b).enumerable;
      })),
      c.push.apply(c, d);
  }
  return c;
}
function _objectSpread(a) {
  for (var b, c = 1; c < arguments.length; c++)
    (b = null == arguments[c] ? {} : arguments[c]),
      c % 2
        ? ownKeys(Object(b), !0).forEach(function (c) {
            _defineProperty(a, c, b[c]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
        : ownKeys(Object(b)).forEach(function (c) {
            Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c));
          });
  return a;
}
import React from "react";
import {
  Modal as LibModal,
  ModalActions,
  Button,
  ModalContent,
} from "@scaleflex/ui/core";
import { StyledModalTitle } from "./Modal.styled";
var style = { width: 300 },
  Modal = function (a) {
    var b = a.title,
      c = a.hint,
      d = a.Icon,
      f = a.onDone,
      g = a.onCancel,
      h = a.doneLabel,
      i = a.cancelLabel,
      j = a.isOpened,
      k = a.doneButtonStyle,
      l = a.doneButtonColor,
      m = void 0 === l ? "link" : l,
      n = a.cancelButtonColor,
      o = void 0 === n ? "link" : n,
      p = a.children,
      q = a.areButtonsDisabled,
      r = a.zIndex,
      s = a.className;
    return React.createElement(
      LibModal,
      {
        className: s,
        open: j,
        onClose: g,
        style: _objectSpread(_objectSpread({}, style), {}, { zIndex: r }),
        onKeyUp: function onKeyUp(a) {
          "Enter" === a.key && f(a);
        },
      },
      React.createElement(StyledModalTitle, {
        icon: React.createElement(d, { size: 25 }),
        iconShadow: !0,
        onClose: g,
        primary: b,
        secondary: c,
        variant: "with-icon",
      }),
      p && React.createElement(ModalContent, null, p),
      React.createElement(
        ModalActions,
        { align: "center" },
        React.createElement(
          Button,
          { color: o, onClick: g, size: "md", disabled: q },
          i
        ),
        React.createElement(
          Button,
          { color: m, onClick: f, size: "md", style: k, disabled: q },
          h
        )
      )
    );
  };
Modal.defaultProps = {
  hint: "",
  isOpened: !1,
  doneLabel: "Yes",
  cancelLabel: "No",
  doneButtonStyle: void 0,
  doneButtonColor: "link",
  cancelButtonColor: "link",
  children: void 0,
  areButtonsDisabled: !1,
  zIndex: void 0,
  className: void 0,
};
export default Modal;