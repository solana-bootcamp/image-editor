import React from "react";
import { Saturation as SaturationIcon } from "@scaleflex/icons/saturation";
import ToolsBarItemButton from "../../ToolsBar/ToolsBarItemButton";
import { TOOLS_IDS } from "../../../utils/constants";
var HSV = function (a) {
  var b = a.selectTool,
    c = a.isSelected,
    d = a.t;
  return React.createElement(ToolsBarItemButton, {
    className: "FIE_hsv-tool-button",
    id: TOOLS_IDS.HSV,
    label: d("hsvTool"),
    Icon: SaturationIcon,
    onClick: b,
    isSelected: c,
  });
};
HSV.defaultProps = { isSelected: !1 };
export default HSV;