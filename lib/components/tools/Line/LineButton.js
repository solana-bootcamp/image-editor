import React from "react";
import Line from "@scaleflex/icons/line";
import ToolsBarItemButton from "../../ToolsBar/ToolsBarItemButton";
import { TOOLS_IDS } from "../../../utils/constants";
var LineButton = function (a) {
  var b = a.selectTool,
    c = a.isSelected,
    d = a.t;
  return React.createElement(ToolsBarItemButton, {
    className: "FIE_line-tool-button",
    id: TOOLS_IDS.LINE,
    label: d("lineTool"),
    Icon: Line,
    onClick: b,
    isSelected: c,
  });
};
LineButton.defaultProps = { isSelected: !1 };
export default LineButton;