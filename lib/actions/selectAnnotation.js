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
export var SELECT_ANNOTATION = "SELECT_ANNOTATION";
var selectAnnotation = function (a, b) {
  if (1 === a.selectionsIds.length && a.selectionsIds[0] === b.annotationId)
    return a;
  var c;
  if (b.multiple) {
    c = a.selectionsIds.filter(function (a) {
      return a !== b.annotationId;
    });
    var d = c.length !== a.selectionsIds.length;
    d || c.push(b.annotationId);
  } else c = [b.annotationId];
  return _objectSpread(_objectSpread({}, a), {}, { selectionsIds: c });
};
export default selectAnnotation;
