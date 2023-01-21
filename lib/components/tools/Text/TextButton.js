import React from "react";
import { Text as TextIcon } from "@scaleflex/icons/text";
import ToolsBarItemButton from "../../ToolsBar/ToolsBarItemButton";
import { TOOLS_IDS } from "../../../utils/constants";
var TextButton = function (a) {
  var b = a.selectTool,
    c = a.isSelected,
    d = a.t;
  return React.createElement(ToolsBarItemButton, {
    className: "FIE_text-tool-button",
    id: TOOLS_IDS.TEXT,
    label: d("textTool"),
    Icon: TextIcon,
    onClick: b,
    isSelected: c,
  });
};
TextButton.defaultProps = { isSelected: !1 };
export default TextButton;