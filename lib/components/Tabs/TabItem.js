import React, { useCallback, memo } from "react";
import { StyledTabItem, StyledTabItemLabel } from "./Tabs.styled";
var TabItem = function (a) {
  var b = a.id,
    c = a.label,
    d = a.Icon,
    e = a.isSelected,
    f = a.onClick,
    g = useCallback(
      function () {
        "function" == typeof f && f(b);
      },
      [b]
    );
  return React.createElement(
    StyledTabItem,
    { className: "FIE_tab", "aria-selected": e, onClick: g },
    React.createElement(d, null),
    c &&
      React.createElement(StyledTabItemLabel, { className: "FIE_tab-label" }, c)
  );
};
TabItem.defaultProps = { isSelected: !1, onClick: void 0, label: void 0 };
export default memo(TabItem);