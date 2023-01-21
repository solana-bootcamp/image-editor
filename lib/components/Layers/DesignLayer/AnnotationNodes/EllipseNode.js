import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = [
  "id",
  "name",
  "fill",
  "x",
  "y",
  "radiusX",
  "radiusY",
  "scaleX",
  "scaleY",
  "rotation",
  "annotationEvents",
  "stroke",
  "strokeWidth",
  "shadowOffsetX",
  "shadowOffsetY",
  "shadowBlur",
  "shadowColor",
  "shadowOpacity",
  "opacity",
];
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
import { Ellipse } from "react-konva";
import nodesCommonPropTypes from "../nodesCommonPropTypes";
var EllipseNode = function (a) {
  var b = a.id,
    c = a.name,
    d = a.fill,
    e = a.x,
    f = a.y,
    g = a.radiusX,
    h = a.radiusY,
    i = a.scaleX,
    j = a.scaleY,
    k = a.rotation,
    l = a.annotationEvents,
    m = a.stroke,
    n = a.strokeWidth,
    o = a.shadowOffsetX,
    p = a.shadowOffsetY,
    q = a.shadowBlur,
    r = a.shadowColor,
    s = a.shadowOpacity,
    t = a.opacity,
    u = _objectWithoutProperties(a, _excluded);
  return React.createElement(
    Ellipse,
    _extends(
      {
        id: b,
        name: c,
        rotation: k,
        scaleX: i,
        scaleY: j,
        stroke: m,
        strokeWidth: n,
        shadowOffsetX: o,
        shadowOffsetY: p,
        shadowBlur: q,
        shadowColor: r,
        shadowOpacity: s,
        fill: d,
        x: e,
        y: f,
        radiusX: g,
        radiusY: h,
        offsetX: -g,
        offsetY: -h,
        opacity: t,
      },
      l,
      u
    )
  );
};
EllipseNode.defaultProps = _objectSpread(
  _objectSpread({}, nodesCommonPropTypes.defaults),
  {},
  { fill: "#000", radiusX: 0, radiusY: 0 }
);
export default EllipseNode;