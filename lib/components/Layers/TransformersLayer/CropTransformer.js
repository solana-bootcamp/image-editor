import _extends from "@babel/runtime/helpers/extends";
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
import React, { useEffect, useRef } from "react";
import { Ellipse, Image, Rect, Transformer } from "react-konva";
import Konva from "konva";
import { useStore } from "../../../hooks";
import { SET_CROP, SET_FEEDBACK } from "../../../actions";
import {
  CUSTOM_CROP,
  ELLIPSE_CROP,
  FEEDBACK_STATUSES,
  ORIGINAL_CROP,
  TOOLS_IDS,
} from "../../../utils/constants";
import { boundDragging, boundResizing } from "./cropAreaBounding";
var CropTransformer = function () {
  var a = useStore(),
    b = a.dispatch,
    c = a.theme,
    d = a.designLayer,
    e = a.originalImage,
    f = a.shownImageDimensions,
    g = a.adjustments;
  g = void 0 === g ? {} : g;
  var h = g.crop,
    i = void 0 === h ? {} : h,
    j = g.isFlippedX,
    k = g.isFlippedY,
    l = a.resize,
    m = void 0 === l ? {} : l,
    n = a.config,
    o = a.t,
    p = useRef(),
    q = useRef(),
    r = useRef(),
    s = useRef(),
    t = n[TOOLS_IDS.CROP],
    u = i.ratio || t.ratio,
    v = u === CUSTOM_CROP,
    w = u === ELLIPSE_CROP,
    z = function () {
      return u === ORIGINAL_CROP ? e.width / e.height : u;
    },
    A = function (a, c) {
      var d = a.width,
        e = a.height,
        g = a.x,
        h = a.y,
        l = {
          x: j ? f.width - g - d : g,
          y: k ? f.height - h - e : h,
          width: d,
          height: e,
        },
        n = i.width >= m.width && i.height >= m.height;
      m.width &&
        m.height &&
        (d < m.width || e < m.height) &&
        n &&
        b({
          type: SET_FEEDBACK,
          payload: {
            feedback: {
              message: o("cropSizeLowerThanResizedWarning"),
              status: FEEDBACK_STATUSES.WARNING,
            },
          },
        }),
        b({
          type: SET_CROP,
          payload: _objectSpread(
            _objectSpread(_objectSpread({}, i), l),
            {},
            { dismissHistory: c }
          ),
        });
    },
    B = function (a, b) {
      var c, d;
      q.current && p.current && q.current.nodes([p.current]);
      var e = s.current,
        f = {
          width: a,
          height: b,
          x: null !== (c = i.x) && void 0 !== c ? c : 0,
          y: null !== (d = i.y) && void 0 !== d ? d : 0,
        };
      A(
        boundResizing(
          f,
          f,
          _objectSpread(
            _objectSpread({}, e),
            {},
            { abstractX: 0, abstractY: 0 }
          ),
          !(v || w) && z(),
          t
        ),
        !0
      );
    };
  if (
    (useEffect(
      function () {
        return (
          d &&
            q.current &&
            p.current &&
            (r.current && r.current.cache(), q.current.nodes([p.current])),
          function () {
            r.current && r.current.clearCache();
          }
        );
      },
      [d, e, f]
    ),
    useEffect(
      function () {
        if (s.current) {
          var a,
            b,
            c = s.current;
          B(
            null !== (a = i.width) && void 0 !== a ? a : c.width,
            null !== (b = i.height) && void 0 !== b ? b : c.height
          );
        }
      },
      [u]
    ),
    useEffect(
      function () {
        q.current &&
          p.current &&
          s.current &&
          i.width &&
          i.height &&
          B(i.width, i.height);
      },
      [t, f.width, f.height]
    ),
    useEffect(
      function () {
        f && (s.current = f);
      },
      [f]
    ),
    !d)
  )
    return null;
  var C,
    D =
      v || w
        ? void 0
        : ["top-left", "bottom-left", "top-right", "bottom-right"],
    E = function (a) {
      var b =
        !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1];
      a.target &&
        A(
          {
            width: a.target.width() * a.target.scaleX(),
            height: a.target.height() * a.target.scaleY(),
            x: a.target.x(),
            y: a.target.y(),
          },
          b
        );
    };
  if (!i.width && !i.height) {
    var F = 1 > f.scaledBy ? f.scaledBy : 1,
      G = _objectSpread(
        _objectSpread({}, f),
        {},
        { width: f.width / F, height: f.height / F }
      );
    C = boundResizing(
      G,
      _objectSpread(_objectSpread({}, G), {}, { x: 0, y: 0 }),
      _objectSpread(_objectSpread({}, G), {}, { abstractX: 0, abstractY: 0 }),
      !(v || w) && z(),
      t
    );
  } else C = i;
  var H = C,
    I = H.x,
    J = void 0 === I ? 0 : I,
    x = H.y,
    K = void 0 === x ? 0 : x,
    y = H.width,
    L = H.height,
    M = {
      x: j ? f.width - J - y : J,
      y: k ? f.height - K - L : K,
      ref: p,
      fill: "#FFFFFF",
      scaleX: 1,
      scaleY: 1,
      globalCompositeOperation: "destination-out",
      onDragEnd: E,
      onDragMove: function limitDragging(a) {
        var b = a.target;
        b.setAttrs(boundDragging(b.attrs, s.current));
      },
      onTransformEnd: E,
      draggable: !0,
    };
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Image, {
      image: e,
      x: j ? f.width : 0,
      y: k ? f.height : 0,
      width: f.width,
      height: f.height,
      filters: [Konva.Filters.Blur, Konva.Filters.Brighten],
      blurRadius: 10,
      brightness: -0.3,
      scaleX: j ? -1 : 1,
      scaleY: k ? -1 : 1,
      ref: r,
    }),
    w
      ? React.createElement(
          Ellipse,
          _extends({}, M, {
            radiusX: y / 2,
            radiusY: L / 2,
            offset: { x: -y / 2, y: -L / 2 },
          })
        )
      : React.createElement(Rect, _extends({}, M, { width: y, height: L })),
    React.createElement(Transformer, {
      centeredScaling: !1,
      flipEnabled: !1,
      rotateEnabled: !1,
      nodes: p.current ? [p.current] : [],
      anchorSize: 14,
      anchorCornerRadius: 7,
      enabledAnchors: D,
      ignoreStroke: !1,
      anchorStroke: c.palette["accent-primary"],
      anchorFill: c.palette["access-primary"],
      anchorStrokeWidth: 2,
      borderStroke: c.palette["accent-primary"],
      borderStrokeWidth: 2,
      borderDash: [4],
      keepRatio: !v || !w,
      ref: q,
      boundBoxFunc: function boundBoxFunc(a, b) {
        return boundResizing(a, b, s.current, !(v || w) && z(), t);
      },
    })
  );
};
export default CropTransformer;