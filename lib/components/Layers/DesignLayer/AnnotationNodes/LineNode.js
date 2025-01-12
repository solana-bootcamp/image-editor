import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = [
  "id",
  "name",
  "scaleX",
  "scaleY",
  "rotation",
  "annotationEvents",
  "points",
  "lineCap",
  "stroke",
  "strokeWidth",
  "shadowOffsetX",
  "shadowOffsetY",
  "shadowBlur",
  "shadowColor",
  "shadowOpacity",
  "tension",
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
import { Line } from "react-konva";
import nodesCommonPropTypes from "../nodesCommonPropTypes";
var LineNode = function (a) {
  var b = a.id,
    c = a.name,
    d = a.scaleX,
    e = a.scaleY,
    f = a.rotation,
    g = a.annotationEvents,
    h = a.points,
    i = a.lineCap,
    j = a.stroke,
    k = a.strokeWidth,
    l = a.shadowOffsetX,
    m = a.shadowOffsetY,
    n = a.shadowBlur,
    o = a.shadowColor,
    p = a.shadowOpacity,
    q = a.tension,
    r = a.opacity,
    s = _objectWithoutProperties(a, _excluded);
  return React.createElement(
    Line,
    _extends(
      {
        id: b,
        name: c,
        rotation: f,
        scaleX: d,
        scaleY: e,
        stroke: j,
        strokeWidth: k,
        shadowOffsetX: l,
        shadowOffsetY: m,
        shadowBlur: n,
        shadowColor: o,
        shadowOpacity: p,
        points: h,
        lineCap: i,
        tension: q,
        hitStrokeWidth: 20,
        x: 0,
        y: 0,
        opacity: r,
      },
      g,
      s
    )
  );
};
LineNode.defaultProps = _objectSpread(
  _objectSpread({}, nodesCommonPropTypes.defaults),
  {},
  {
    stroke: "#000000",
    strokeWidth: 1,
    lineCap: "butt",
    annotationEvents: {},
    tension: void 0,
  }
);
export default LineNode;
