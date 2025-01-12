import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _toArray from "@babel/runtime/helpers/toArray";
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
import extractCurrentDesignState from "../utils/extractCurrentDesignState";
export var UNDO = "UNDO";
var undo = function (a) {
  if (a.pastDesignStates && 0 < a.pastDesignStates.length) {
    var b = extractCurrentDesignState(a),
      c = _toArray(a.pastDesignStates),
      d = c[0],
      e = c.slice(1),
      f = [b].concat(_toConsumableArray(a.futureDesignStates || []));
    return _objectSpread(
      _objectSpread(_objectSpread({}, a), d),
      {},
      {
        selectionsIds: [],
        pastDesignStates: e,
        futureDesignStates: f,
        hasUndo: 0 < e.length,
        hasRedo: !0,
        haveNotSavedChanges: 0 < e.length,
      }
    );
  }
  return a;
};
export default undo;
