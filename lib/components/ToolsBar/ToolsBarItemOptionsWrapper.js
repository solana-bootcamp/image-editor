import React from "react";
import { StyledToolsBarItemOptionsWrapper } from "./ToolsBar.styled";
var ToolsBarItemOptionsWrapper = function (a) {
  var b = a.children;
  return React.createElement(
    StyledToolsBarItemOptionsWrapper,
    { className: "FIE_tool-options-wrapper", hasChildren: !!b },
    b
  );
};
ToolsBarItemOptionsWrapper.defaultProps = { children: void 0 };
export default ToolsBarItemOptionsWrapper;