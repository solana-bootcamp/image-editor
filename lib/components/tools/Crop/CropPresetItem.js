import React from "react";
import MenuItem from "@scaleflex/ui/core/menu-item";
import { StyledMenuItemIcon, StyledRatioDescription } from "./Crop.styled";
var PREFIX_ICONS_DIMENS = { height: 16, width: 16 },
  CropPresetItem = function (a) {
    var b = a.titleKey,
      c = a.description,
      d = a.ratio,
      f = a.onClick,
      g = a.Icon,
      h = a.isActive,
      i = a.width,
      j = a.height,
      k = a.t,
      l = a.disableManualResize;
    return React.createElement(
      MenuItem,
      {
        active: h,
        onClick: function handleOnClick(a) {
          return f(a, d, {
            ratioTitleKey: b,
            width: i,
            height: j,
            disableManualResize: l,
          });
        },
        size: "sm",
      },
      g &&
        React.createElement(
          StyledMenuItemIcon,
          null,
          "string" == typeof g
            ? React.createElement("span", {
                dangerouslySetInnerHTML: { __html: g },
              })
            : React.createElement(g, PREFIX_ICONS_DIMENS)
        ),
      k(b),
      c && React.createElement(StyledRatioDescription, null, c)
    );
  };
CropPresetItem.defaultProps = {
  Icon: void 0,
  width: void 0,
  height: void 0,
  disableManualResize: !1,
};
export default CropPresetItem;