import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["preparedDimensions"];
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
import calculateZoomData from "../utils/calculateZoomData";
import restrictNumber from "../utils/restrictNumber";
export var ZOOM_CANVAS = "ZOOM_CANVAS";
var MIN_ZOOM_FACTOR = 0.05,
  MAX_ZOOM_FACTOR = 55,
  zoomCanvas = function (a, b) {
    var c,
      d = restrictNumber(
        parseFloat(b.factor).toFixed(2),
        MIN_ZOOM_FACTOR,
        MAX_ZOOM_FACTOR
      );
    if (b.preparedDimensions) {
      var e = b.preparedDimensions,
        f = _objectWithoutProperties(b, _excluded);
      c = f;
    } else {
      var g,
        h,
        i = {
          x:
            b.x || 0 === b.x
              ? null !== (g = b.x) && void 0 !== g
                ? g
                : a.zoom.x
              : a.canvasWidth / 2,
          y:
            b.y || 0 === b.y
              ? null !== (h = b.y) && void 0 !== h
                ? h
                : a.zoom.y
              : a.canvasHeight / 2,
        };
      c = calculateZoomData(
        _objectSpread(_objectSpread({}, i), {}, { factor: d }),
        a.zoom,
        a.canvasWidth,
        a.canvasHeight
      );
    }
    return c.factor === a.zoom.factor && c.x === a.zoom.x && c.y === a.zoom.y
      ? a
      : _objectSpread(
          _objectSpread({}, a),
          {},
          { zoom: _objectSpread(_objectSpread({}, a.zoom), c) }
        );
  };
export default zoomCanvas;