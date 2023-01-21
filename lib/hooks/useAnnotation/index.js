import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["fonts", "onFontChange"],
  _excluded2 = [
    "x",
    "y",
    "width",
    "height",
    "radius",
    "radiusX",
    "radiusY",
    "points",
    "image",
    "text",
    "scaleX",
    "scaleY",
    "rotation",
  ],
  _excluded3 = ["shouldSave", "neverSave"];
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
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SELECT_ANNOTATION, SET_ANNOTATION } from "../../actions";
import randomId from "../../utils/randomId";
import debounce from "../../utils/debounce";
import { TOOLS_IDS } from "../../utils/constants";
import { useStore } from "./..";
import previewThenCallAnnotationAdding from "./previewThenCallAnnotationAdding";
import useDebouncedCallback from "../useDebouncedCallback";
var useAnnotation = function () {
  var a,
    b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
    c = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
    d = useStore(),
    e = d.dispatch,
    f = d.previewGroup,
    g = d.annotations,
    h = d.selectionsIds,
    i = void 0 === h ? [] : h,
    j = d.config,
    k = _objectSpread(
      _objectSpread({}, j.annotationsCommon),
      j[(null === (a = g[i[0]]) || void 0 === a ? void 0 : a.name) || b.name]
    ),
    l = useState(function () {
      return _objectSpread(_objectSpread(_objectSpread({}, k), b), g[i[0]]);
    }),
    m = _slicedToArray(l, 2),
    n = m[0],
    o = m[1],
    p = useRef(),
    q = null === f || void 0 === f ? void 0 : f.getStage(),
    r = useCallback(function (a) {
      var c = a.fonts,
        d = a.onFontChange,
        f = _objectWithoutProperties(a, _excluded);
      e({ type: SET_ANNOTATION, payload: f }),
        f.id &&
          b.name !== TOOLS_IDS.PEN &&
          debounce(function () {
            e({ type: SELECT_ANNOTATION, payload: { annotationId: f.id } });
          }, 30)();
    }, []),
    s = useDebouncedCallback(function (a) {
      o(function (b) {
        return _objectSpread(
          _objectSpread({}, b),
          {},
          { shouldSave: !1, neverSave: !1 },
          "function" == typeof a ? a(b) : a
        );
      });
    }, 15),
    t = useCallback(function (a, c) {
      if (a.name === c) {
        var d = a.x,
          e = a.y,
          f = a.width,
          g = a.height,
          h = a.radius,
          i = a.radiusX,
          j = a.radiusY,
          l = a.points,
          m = a.image,
          n = a.text,
          o = a.scaleX,
          p = a.scaleY,
          q = a.rotation,
          r = _objectWithoutProperties(a, _excluded2);
        return _objectSpread(_objectSpread(_objectSpread({}, k), b), r);
      }
      return _objectSpread(_objectSpread({}, k), b);
    }, []),
    u = useCallback(function (a) {
      o(function (c) {
        var d = t(c, a.name || b.name);
        return _objectSpread(
          _objectSpread(_objectSpread({}, d), a),
          {},
          {
            id: a.id || randomId(a.name || c.name),
            shouldSave: !0,
            neverSave: !1,
          }
        );
      });
    }, []);
  return (
    useEffect(
      function () {
        var a = n.shouldSave,
          b = n.neverSave,
          c = _objectWithoutProperties(n, _excluded3),
          d = 1 === i.length && g[i[0]];
        !b &&
          (a || d) &&
          r(_objectSpread(_objectSpread({}, c), {}, { id: a ? c.id : d.id }));
      },
      [n]
    ),
    useEffect(
      function () {
        setTimeout(function () {
          1 === i.length
            ? ((p.current = n),
              o(
                _objectSpread(_objectSpread({}, g[i[0]]), {}, { neverSave: !0 })
              ))
            : p.current &&
              (o(
                _objectSpread(
                  _objectSpread({}, p.current),
                  {},
                  { neverSave: !0 }
                )
              ),
              (p.current = null));
        });
      },
      [i, g]
    ),
    useEffect(
      function () {
        var a = null;
        if (q && c) {
          var d = t(n, b.name);
          a = previewThenCallAnnotationAdding(
            q,
            _objectSpread(_objectSpread({}, d), {}, { name: b.name }),
            f,
            u
          );
        }
        return function () {
          a && a();
        };
      },
      [q, n, f]
    ),
    useMemo(
      function () {
        return [n, s, u];
      },
      [n, s, u]
    )
  );
};
export default useAnnotation;