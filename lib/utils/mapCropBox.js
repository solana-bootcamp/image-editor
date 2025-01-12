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
import mapNumber from "./mapNumber";
var mapCropBox = function (a, b, c) {
  var d, e;
  return _objectSpread(
    _objectSpread(
      _objectSpread(
        {},
        a.x || 0 === a.x
          ? { x: Math.round(mapNumber(a.x, 0, b.width, 0, c.width)) }
          : {}
      ),
      a.y || 0 === a.y
        ? { y: Math.round(mapNumber(a.y, 0, b.height, 0, c.height)) }
        : {}
    ),
    {},
    {
      width: Math.round(
        mapNumber(
          null !== (d = a.width) && void 0 !== d ? d : b.width,
          0,
          b.width,
          0,
          c.width
        )
      ),
      height: Math.round(
        mapNumber(
          null !== (e = a.height) && void 0 !== e ? e : b.height,
          0,
          b.height,
          0,
          c.height
        )
      ),
    }
  );
};
export default mapCropBox;
