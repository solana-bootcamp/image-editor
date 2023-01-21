import React from "react";
import { RotationLeftOutline as RotateIcon } from "@scaleflex/icons/rotation-left-outline";
import ToolsBarItemButton from "../../ToolsBar/ToolsBarItemButton";
import { TOOLS_IDS } from "../../../utils/constants";
var RotateButton = function (a) {
  var b = a.selectTool,
    c = a.isSelected,
    d = a.t;
  return React.createElement(ToolsBarItemButton, {
    className: "FIE_rotate-tool-button",
    id: TOOLS_IDS.ROTATE,
    label: d("rotateTool"),
    Icon: RotateIcon,
    onClick: b,
    isSelected: c,
  });
};
RotateButton.defaultProps = { isSelected: !1 };
export default RotateButton;