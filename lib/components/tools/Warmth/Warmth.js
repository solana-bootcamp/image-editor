import React from "react";
import { Temprature as WarmthIcon } from "@scaleflex/icons/tempreture";
import ToolsBarItemButton from "../../ToolsBar/ToolsBarItemButton";
import { TOOLS_IDS } from "../../../utils/constants";
var Warmth = function (a) {
  var b = a.selectTool,
    c = a.isSelected,
    d = a.t;
  return React.createElement(ToolsBarItemButton, {
    className: "FIE_warmth-tool-button",
    id: TOOLS_IDS.WARMTH,
    label: d("warmthTool"),
    Icon: WarmthIcon,
    onClick: b,
    isSelected: c,
  });
};
Warmth.defaultProps = { isSelected: !1 };
export default Warmth;