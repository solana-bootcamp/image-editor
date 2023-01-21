import _defineProperty from "@babel/runtime/helpers/defineProperty";
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
import React from "react";
import Accordion from "@scaleflex/ui/core/accordion";
import toPrecisedFloat from "../../../utils/toPrecisedFloat";
import { useStore } from "../../../hooks";
import CropPresetItem from "./CropPresetItem";
var CropPresetGroup = function (a) {
  var b = a.groupTitleKey,
    c = a.items,
    d = a.onItemSelect,
    e = a.t,
    f = a.isExpanded,
    g = a.setExpandedGroup,
    h = useStore(),
    i = h.adjustments.crop,
    j = i.ratio,
    k = i.ratioGroupKey,
    l = i.ratioTitleKey,
    m = function (a, c, e) {
      d(a, c, _objectSpread(_objectSpread({}, e), {}, { ratioGroupKey: b }));
    };
  return React.createElement(
    Accordion,
    {
      label: e(b),
      onChange: function toggleExpand() {
        g(f ? null : b);
      },
      expanded: f,
    },
    c.map(function (a) {
      var c = a.titleKey,
        d = a.ratio,
        f = a.width,
        g = a.height,
        h = a.descriptionKey,
        i = a.icon,
        n = a.disableManualResize,
        o = null !== d && void 0 !== d ? d : toPrecisedFloat(f / g);
      return React.createElement(CropPresetItem, {
        key: c,
        titleKey: c,
        t: e,
        description: e(h),
        size: "sm",
        onClick: m,
        width: f,
        height: g,
        ratio: o,
        Icon: i,
        disableManualResize: n,
        isActive: j === o && l === c && k === b,
      });
    })
  );
};
export default CropPresetGroup;