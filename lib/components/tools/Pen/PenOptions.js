import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
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
import React, { useCallback, useEffect, useRef } from "react";
import { useAnnotation, useStore } from "../../../hooks";
import { TOOLS_IDS } from "../../../utils/constants";
import AnnotationOptions from "../../common/AnnotationOptions";
import getPointerOffsetPositionBoundedToObject from "../../../utils/getPointerOffsetPositionBoundedToObject";
import randomId from "../../../utils/randomId";
import { SELECT_ANNOTATION, SET_ANNOTATION } from "../../../actions";
import getElemDocumentCoords from "../../../utils/getElemDocumentCoords";
var eventsOptions = { passive: !0 },
  PenOptions = function (a) {
    var b = a.t,
      c = useStore(),
      d = c.dispatch,
      e = c.designLayer,
      f = c.previewGroup,
      g = c.config,
      h = useAnnotation(
        _objectSpread(
          _objectSpread(
            _objectSpread({}, g.annotationsCommon),
            g[TOOLS_IDS.PEN]
          ),
          {},
          { name: TOOLS_IDS.PEN }
        ),
        !1
      ),
      i = _slicedToArray(h, 3),
      j = i[0],
      k = i[1],
      l = i[2],
      m = useRef(null),
      n = useRef({ points: [], moved: !1, id: "" }),
      o = useCallback(function () {
        var a = getElemDocumentCoords(m.current.content),
          b = getPointerOffsetPositionBoundedToObject(f, a);
        return [
          b.offsetX - (e.attrs.xPadding || 0),
          b.offsetY - (e.attrs.yPadding || 0),
        ];
      }, []),
      p = useCallback(function () {
        n.current.moved
          ? ((n.current.points = n.current.points.concat(o())),
            d({
              type: SET_ANNOTATION,
              payload: {
                id: n.current.id,
                points: n.current.points,
                dismissHistory: !0,
              },
            }))
          : ((n.current = {
              moved: !0,
              id: randomId(TOOLS_IDS.PEN),
              points: [].concat(
                _toConsumableArray(n.current.points),
                _toConsumableArray(o())
              ),
            }),
            l({
              id: n.current.id,
              name: TOOLS_IDS.PEN,
              points: n.current.points,
            }));
      }, []),
      q = useCallback(function () {
        n.current.id &&
          d({
            type: SELECT_ANNOTATION,
            payload: { annotationId: n.current.id },
          }),
          (n.current = null),
          m.current.off("mousemove touchmove", p),
          m.current.off("mouseleave touchcancel", q),
          document.removeEventListener("mouseup", q, eventsOptions),
          document.removeEventListener("touchend", q, eventsOptions),
          document.removeEventListener("mouseleave", q, eventsOptions),
          document.removeEventListener("touchcancel", q, eventsOptions);
      }, []),
      r = useCallback(function (a) {
        a.target.attrs.draggable ||
          (a.evt.preventDefault(),
          (n.current = { points: o() }),
          m.current.on("mousemove touchmove", p),
          m.current.on("mouseleave touchcancel", q),
          document.addEventListener("mouseup", q, eventsOptions),
          document.addEventListener("touchend", q, eventsOptions),
          document.addEventListener("mouseleave", q, eventsOptions),
          document.addEventListener("touchcancel", q, eventsOptions));
      }, []);
    return (
      useEffect(function () {
        return (
          (m.current = null === e || void 0 === e ? void 0 : e.getStage()),
          m.current && m.current.on("mousedown touchstart", r),
          function () {
            m.current && m.current.off("mousedown touchstart", r);
          }
        );
      }, []),
      React.createElement(AnnotationOptions, {
        className: "FIE_pen-tool-options",
        annotation: j,
        updateAnnotation: k,
        t: b,
        hidePositionField: !0,
        hideFillOption: !0,
      })
    );
  };
export default PenOptions;