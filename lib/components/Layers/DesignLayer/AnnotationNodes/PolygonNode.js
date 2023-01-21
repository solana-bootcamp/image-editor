import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = [
  "id",
  "name",
  "fill",
  "x",
  "y",
  "radius",
  "scaleX",
  "scaleY",
  "rotation",
  "sides",
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
import { RegularPolygon } from "react-konva";
import nodesCommonPropTypes from "../nodesCommonPropTypes";
var PolygonNode = function (a) {
  var b = a.id,
    c = a.name,
    d = a.fill,
    e = a.x,
    f = a.y,
    g = a.radius,
    h = a.scaleX,
    i = a.scaleY,
    j = a.rotation,
    k = a.sides,
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
    RegularPolygon,
    _extends(
      {
        id: b,
        name: c,
        rotation: j,
        scaleX: h,
        scaleY: i,
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
        radius: g,
        offsetX: -g,
        offsetY: -g,
        sides: k,
        opacity: t,
      },
      l,
      u
    )
  );
};
PolygonNode.defaultProps = _objectSpread(
  _objectSpread({}, nodesCommonPropTypes.defaults),
  {},
  { fill: "#000", sides: 3 }
);
export default PolygonNode;