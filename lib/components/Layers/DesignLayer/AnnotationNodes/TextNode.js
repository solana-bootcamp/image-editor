import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = [
  "id",
  "name",
  "text",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fill",
  "x",
  "y",
  "width",
  "height",
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
  "letterSpacing",
  "lineHeight",
  "align",
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
import { Text } from "react-konva";
import nodesCommonPropTypes from "../nodesCommonPropTypes";
var TextNode = function (a) {
  var b = a.id,
    c = a.name,
    d = a.text,
    e = a.fontFamily,
    f = a.fontSize,
    g = a.fontStyle,
    h = a.fill,
    i = a.x,
    j = a.y,
    k = a.width,
    l = a.height,
    m = a.scaleX,
    n = a.scaleY,
    o = a.rotation,
    p = a.annotationEvents,
    q = a.stroke,
    r = a.strokeWidth,
    s = a.shadowOffsetX,
    t = a.shadowOffsetY,
    u = a.shadowBlur,
    v = a.shadowColor,
    w = a.shadowOpacity,
    x = a.opacity,
    y = a.letterSpacing,
    z = a.lineHeight,
    A = a.align,
    B = _objectWithoutProperties(a, _excluded);
  return React.createElement(
    Text,
    _extends(
      {
        id: b,
        name: c,
        rotation: o,
        scaleX: m,
        scaleY: n,
        stroke: q,
        strokeWidth: r,
        shadowOffsetX: s,
        shadowOffsetY: t,
        shadowBlur: u,
        shadowColor: v,
        shadowOpacity: w,
        opacity: x,
        fill: h,
        text: d,
        fontFamily: e,
        fontStyle: g,
        fontSize: f,
        letterSpacing: y,
        lineHeight: z,
        align: A,
        x: i,
        y: j,
        width: k,
        height: l,
      },
      p,
      B
    )
  );
};
TextNode.defaultProps = _objectSpread(
  _objectSpread({}, nodesCommonPropTypes.defaults),
  {},
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet tortor quis odio facilisis, id aliquet nulla facilisis. Etiam tincidunt tempor odio nec placerat.",
    fontFamily: "Arial",
    fontSize: 14,
    fill: "#000",
    width: 0,
    height: 0,
    letterSpacing: void 0,
    lineHeight: void 0,
    align: "left",
  }
);
export default TextNode;