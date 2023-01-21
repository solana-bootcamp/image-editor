import React, { useCallback } from "react";
import Undo from "@scaleflex/icons/undo";
import { UNDO } from "../../actions";
import { useStore } from "../../hooks";
import { StyledHistoryButton } from "./Topbar.styled";
var UndoButton = function (a) {
  var b = a.margin,
    c = useStore(),
    d = c.dispatch,
    e = c.hasUndo,
    f = void 0 !== e && e,
    g = c.t,
    h = c.feedback,
    i = 0 === h.duration,
    j = useCallback(function () {
      d({ type: UNDO });
    }, []);
  return React.createElement(
    StyledHistoryButton,
    {
      className: "FIE_topbar-undo-button",
      color: "link",
      onClick: f ? j : void 0,
      disabled: !f || i,
      title: g("undoTitle"),
      margin: b,
    },
    React.createElement(Undo, { size: 12 })
  );
};
UndoButton.defaultProps = { margin: void 0 };
export default UndoButton;