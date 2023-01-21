import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useCallback, useState } from "react";
import Revert from "@scaleflex/icons/revert";
import Warning from "@scaleflex/icons/warning";
import { useStore } from "../../hooks";
import Modal from "../common/Modal";
import { RESET } from "../../actions";
import { StyledHistoryButton } from "./Topbar.styled";
var ResetButton = function (a) {
  var b = a.margin,
    c = useStore(),
    d = c.dispatch,
    e = c.isResetted,
    f = !(void 0 !== e) || e,
    g = c.theme,
    h = c.feedback,
    i = c.t,
    j = c.config,
    k = 0 === h.duration,
    l = useState(!1),
    m = _slicedToArray(l, 2),
    n = m[0],
    o = m[1],
    p = function () {
      o(!1);
    },
    q = useCallback(
      function () {
        d({ type: RESET, payload: { config: j } }), p();
      },
      [j]
    );
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      StyledHistoryButton,
      {
        className: "FIE_topbar-reset-button",
        color: "link",
        onClick: f
          ? void 0
          : function openModal() {
              o(!0);
            },
        disabled: f || k,
        title: i("resetOperations"),
        margin: b,
      },
      React.createElement(Revert, { size: 12 })
    ),
    n &&
      React.createElement(Modal, {
        title: i("changesLoseConfirmation"),
        hint: i("changesLoseConfirmationHint"),
        isOpened: n,
        onCancel: p,
        onDone: q,
        Icon: function WarningIcon() {
          return React.createElement(Warning, {
            color: g.palette.warning,
            size: 25,
          });
        },
        doneLabel: i("continue"),
        cancelLabel: i("cancel"),
        doneButtonColor: "error",
        doneButtonStyle: { background: g.palette.warning },
      })
  );
};
ResetButton.defaultProps = { margin: void 0 };
export default ResetButton;