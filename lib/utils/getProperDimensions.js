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
import getSizeAfterRotation from "./getSizeAfterRotation";
import mapCropBox from "./mapCropBox";
var getProperDimensions = function (a, b, c, d) {
  var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0;
  if (a.width && a.height) return a;
  var f = mapCropBox(b, c, d),
    g = getSizeAfterRotation(f.width, f.height, e);
  return a.width || a.height
    ? { width: a.width || g.width, height: a.height || g.height }
    : (g.width && g.height && g) ||
        _objectSpread(
          _objectSpread({}, d),
          getSizeAfterRotation(d.width, d.height, e)
        );
};
export default getProperDimensions;
