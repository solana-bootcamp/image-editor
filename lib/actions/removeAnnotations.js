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
export var REMOVE_ANNOTATIONS = "REMOVE_ANNOTATIONS";
var removeAnnotations = function (a, b) {
  var c = a.annotations,
    d = a.selectionsIds;
  return (
    b.annotationsIds.forEach(function (b) {
      if (
        ((d = d.filter(function (a) {
          return a !== b;
        })),
        a.designLayer && c[b])
      ) {
        var e = a.designLayer.findOne("#".concat(b));
        e && e.destroy(), delete c[b];
      }
    }),
    _objectSpread(
      _objectSpread({}, a),
      {},
      {
        isDesignState: b.isDesignState || !0,
        annotations: c,
        selectionsIds: [],
      }
    )
  );
};
export default removeAnnotations;
