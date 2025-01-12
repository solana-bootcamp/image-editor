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
import getDimensionsMinimalRatio from "../utils/getDimensionsMinimalRatio";
export var SET_CANVAS_SIZE = "SET_CANVAS_SIZE";
var setCanvasSize = function (a, b) {
  if (a.canvasWidth === b.canvasWidth && a.canvasHeight === b.canvasHeight)
    return a;
  var c = a.initialCanvasWidth,
    d = void 0 === c ? b.canvasWidth : c,
    e = a.initialCanvasHeight,
    f = void 0 === e ? b.canvasHeight : e,
    g = getDimensionsMinimalRatio(
      a.initialCanvasWidth,
      a.initialCanvasHeight,
      a.originalImage.width,
      a.originalImage.height
    ),
    h = g * a.originalImage.width,
    i = g * a.originalImage.height,
    j = 1;
  if (d !== b.canvasWidth || f !== b.canvasHeight) {
    var k = b.canvasWidth / h,
      l = b.canvasHeight / i;
    j = Math.min(k, l);
  }
  return _objectSpread(
    _objectSpread({}, a),
    {},
    {
      initialCanvasWidth: d,
      initialCanvasHeight: f,
      canvasWidth: b.canvasWidth,
      canvasHeight: b.canvasHeight,
      canvasScale: j,
    }
  );
};
export default setCanvasSize;
