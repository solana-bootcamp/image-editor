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
import randomId from "../utils/randomId";
export var DUPLICATE_ANNOTATIONS = "DUPLICATE_ANNOTATIONS";
var duplicateAnnotations = function (a, b) {
  var c = a.annotations,
    d = {};
  return (
    b.annotationsIds.forEach(function (a) {
      var b = c[a];
      if (b) {
        var e = randomId(b.name);
        d[e] = _objectSpread(
          _objectSpread({}, b),
          {},
          { id: e, x: b.x + 20, y: b.y + 20 }
        );
      }
    }),
    _objectSpread(
      _objectSpread({}, a),
      {},
      {
        isDesignState: !b.dismissHistory,
        annotations: _objectSpread(_objectSpread({}, c), d),
      }
    )
  );
};
export default duplicateAnnotations;
