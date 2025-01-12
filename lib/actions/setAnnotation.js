import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["dismissHistory", "replaceCurrent"];
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
import randomId from "../utils/randomId";
export var SET_ANNOTATION = "SET_ANNOTATION";
var setAnnotation = function (a) {
  var b,
    c = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
    d = c.dismissHistory,
    e = c.replaceCurrent,
    f = _objectWithoutProperties(c, _excluded),
    g = null !== (b = f.id) && void 0 !== b ? b : randomId(f.name),
    h = a.annotations[g];
  return h &&
    !Object.keys(f).some(function (a) {
      return (f[a] || 0 === f[a]) && f[a] !== h[a];
    })
    ? a
    : _objectSpread(
        _objectSpread({}, a),
        {},
        {
          isDesignState: !(void 0 !== d && d),
          annotations: _objectSpread(
            _objectSpread({}, a.annotations),
            {},
            _defineProperty(
              {},
              g,
              _objectSpread(_objectSpread({}, void 0 !== e && e ? {} : h), f)
            )
          ),
        }
      );
};
export default setAnnotation;
