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
import { DEFAULT_ZOOM_FACTOR } from "./constants";
var calculateZoomData = function (a, b, c, d) {
  if (a.factor === DEFAULT_ZOOM_FACTOR)
    return { x: 0, y: 0, factor: DEFAULT_ZOOM_FACTOR };
  var e = a.factor > b.factor,
    f = { x: (a.x - b.x || 0) / b.factor, y: (a.y - b.y || 0) / b.factor },
    g = { x: a.x - f.x * a.factor, y: a.y - f.y * a.factor };
  if (
    ((e && 1 === b.factor) ||
      ((g.x = Math.min(0, Math.max(g.x, c * (1 - b.factor)))),
      (g.y = Math.min(0, Math.max(g.y, d * (1 - b.factor))))),
    1 > a.factor)
  ) {
    var h = c - c * a.factor,
      i = d - d * a.factor;
    (g.x += h / 2), (g.y += i / 2);
  }
  return _objectSpread(_objectSpread({}, g), {}, { factor: a.factor });
};
export default calculateZoomData;
