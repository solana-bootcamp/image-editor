import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
function ownKeys(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b &&
      (d = d.filter(function (b) {
        return Object.getOwnPropertyDescriptor(a, b).enumerable;
      })),
      c.push.apply(c, d);
  }
  return c;
}
function _objectSpread(a) {
  for (var b, c = 1; c < arguments.length; c++)
    (b = null == arguments[c] ? {} : arguments[c]),
      c % 2
        ? ownKeys(Object(b), !0).forEach(function (c) {
            _defineProperty(a, c, b[c]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
        : ownKeys(Object(b)).forEach(function (c) {
            Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c));
          });
  return a;
}
import React, { useState } from "react";
import MenuItem from "@scaleflex/ui/core/menu-item";
import { useStore } from "../../../hooks";
import CropPresetGroup from "./CropPresetGroup";
var CropPresetGroupsFolder = function (a) {
  var b = a.titleKey,
    c = a.Icon,
    d = a.groups,
    f = a.onItemSelect,
    g = a.prefixIconDimensions,
    h = a.t,
    e = useStore(),
    i = e.adjustments.crop,
    j = i.ratioFolderKey,
    k = i.ratioGroupKey,
    l = useState(""),
    m = _slicedToArray(l, 2),
    n = m[0],
    o = m[1],
    p = function (a, c, d) {
      f(a, c, _objectSpread(_objectSpread({}, d), {}, { ratioFolderKey: b }));
    };
  return React.createElement(MenuItem, {
    size: "sm",
    list: [
      {
        content: h(b),
        key: b,
        active: b === j,
        prefix:
          c &&
          ("string" == typeof c
            ? React.createElement("span", {
                dangerouslySetInnerHTML: { __html: c },
              })
            : React.createElement(c, g)),
        subList: d.map(function (a) {
          var b = a.titleKey,
            c = a.items;
          return {
            content: React.createElement(CropPresetGroup, {
              groupTitleKey: b,
              setExpandedGroup: o,
              isExpanded: "" === n ? k === b : n === b,
              t: h,
              items: c,
              onItemSelect: p,
            }),
            key: b,
            disableHover: !0,
          };
        }),
      },
    ],
  });
};
CropPresetGroupsFolder.defaultProps = { Icon: void 0 };
export default CropPresetGroupsFolder;