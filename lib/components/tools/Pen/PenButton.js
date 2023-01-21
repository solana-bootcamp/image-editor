import React from "react";
import { Annotation as PenIcon } from "@scaleflex/icons/annotation";
import ToolsBarItemButton from "../../ToolsBar/ToolsBarItemButton";
import { TOOLS_IDS } from "../../../utils/constants";
var PenButton = function (a) {
  var b = a.selectTool,
    c = a.isSelected,
    d = a.t;
  return React.createElement(ToolsBarItemButton, {
    className: "FIE_pen-tool-button",
    id: TOOLS_IDS.PEN,
    label: d("penTool"),
    Icon: PenIcon,
    onClick: b,
    isSelected: c,
  });
};
PenButton.defaultProps = { isSelected: !1 };
export default PenButton;