import React from "react";
import { Blur as BlurIcon } from "@scaleflex/icons/blur";
import ToolsBarItemButton from "../../ToolsBar/ToolsBarItemButton";
import { TOOLS_IDS } from "../../../utils/constants";
var Blur = function (a) {
  var b = a.selectTool,
    c = a.isSelected,
    d = a.t;
  return React.createElement(ToolsBarItemButton, {
    className: "FIE_blur-tool-button",
    id: TOOLS_IDS.BLUR,
    label: d("blurTool"),
    Icon: BlurIcon,
    onClick: b,
    isSelected: c,
  });
};
Blur.defaultProps = { isSelected: !1 };
export default Blur;
