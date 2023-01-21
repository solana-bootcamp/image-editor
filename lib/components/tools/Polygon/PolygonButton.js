import React from "react";
import { Polygon as PolygonIcon } from "@scaleflex/icons/polygon";
import ToolsBarItemButton from "../../ToolsBar/ToolsBarItemButton";
import { TOOLS_IDS } from "../../../utils/constants";
var PolygonButton = function (a) {
  var b = a.selectTool,
    c = a.isSelected,
    d = a.t;
  return React.createElement(ToolsBarItemButton, {
    className: "FIE_polygon-tool-button",
    id: TOOLS_IDS.POLYGON,
    label: d("polygonTool"),
    Icon: PolygonIcon,
    onClick: b,
    isSelected: c,
  });
};
PolygonButton.defaultProps = { isSelected: !1 };
export default PolygonButton;