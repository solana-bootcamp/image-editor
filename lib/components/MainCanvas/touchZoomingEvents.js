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
function getDistance(a, b) {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}
function getCenter(a, b) {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}
var lastCenter = null,
  lastDist = 0;
export var zoomOnTouchesMove = function (a, b) {
  a.evt.preventDefault();
  var c = a.evt.touches[0],
    d = a.evt.touches[1];
  if (c && d) {
    var e = a.currentTarget;
    e.isDragging() && e.stopDrag();
    var f = { x: c.clientX, y: c.clientY },
      g = { x: d.clientX, y: d.clientY };
    if (!lastCenter) return void (lastCenter = getCenter(f, g));
    var h = getCenter(f, g),
      i = getDistance(f, g);
    lastDist || (lastDist = i);
    var j = { x: (h.x - e.x()) / e.scaleX(), y: (h.y - e.y()) / e.scaleX() },
      k = e.scaleX() * (i / lastDist),
      l = h.x - lastCenter.x,
      m = h.y - lastCenter.y,
      n = { x: h.x - j.x * k + l, y: h.y - j.y * k + m };
    (lastDist = i),
      (lastCenter = h),
      b(
        _objectSpread(
          _objectSpread({}, n),
          {},
          { factor: k, preparedDimensions: !0 }
        )
      );
  }
};
export var endTouchesZooming = function (a) {
  (lastDist = 0), (lastCenter = null), "function" == typeof a && a();
};
