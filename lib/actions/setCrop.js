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
import toPrecisedFloat from "../utils/toPrecisedFloat";
export var SET_CROP = "SET_CROP";
var setCrop = function (a, b) {
  var c,
    d,
    e,
    f,
    g,
    h,
    i,
    j = null !== (c = a.adjustments.crop) && void 0 !== c ? c : {},
    k = {
      x: null !== (d = toPrecisedFloat(b.x)) && void 0 !== d ? d : j.x,
      y: null !== (e = toPrecisedFloat(b.y)) && void 0 !== e ? e : j.y,
      ratio:
        "string" == typeof b.ratio
          ? b.ratio
          : null !== (f = toPrecisedFloat(b.ratio)) && void 0 !== f
          ? f
          : j.ratio,
      width:
        null !== (g = toPrecisedFloat(b.width)) && void 0 !== g ? g : j.width,
      height:
        null !== (h = toPrecisedFloat(b.height)) && void 0 !== h ? h : j.height,
      ratioTitleKey:
        null !== (i = b.ratioTitleKey) && void 0 !== i ? i : j.ratioTitleKey,
      ratioGroupKey: b.ratioGroupKey,
      ratioFolderKey: b.ratioFolderKey,
    };
  return j.x === k.x &&
    j.y === k.y &&
    (j.width === k.width ||
      (k.width === toPrecisedFloat(a.shownImageDimensions.width) &&
        null !== !j.width)) &&
    (j.height === k.height ||
      (k.height === toPrecisedFloat(a.shownImageDimensions.height) &&
        null !== j.height)) &&
    j.ratio === k.ratio &&
    j.ratioTitleKey === k.ratioTitleKey &&
    j.ratioGroupKey === k.ratioGroupKey &&
    j.ratioFolderKey === k.ratioFolderKey
    ? a
    : _objectSpread(
        _objectSpread({}, a),
        {},
        {
          isDesignState: !b.dismissHistory,
          adjustments: _objectSpread(
            _objectSpread({}, a.adjustments),
            {},
            { crop: _objectSpread(_objectSpread({}, j), k) }
          ),
        }
      );
};
export default setCrop;