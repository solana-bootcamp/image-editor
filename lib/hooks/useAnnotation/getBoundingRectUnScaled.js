var getBoundingRectUnScaled = function () {
  var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
    b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
    c = 2 < arguments.length ? arguments[2] : void 0,
    d = {},
    e = c.parent.attrs;
  return (
    (d.x = Math.min(a.offsetX, b.startedX) - e.xPadding || 0),
    (d.y = Math.min(a.offsetY, b.startedY) - e.yPadding || 0),
    (d.width = a.offsetX - b.startedX),
    (d.height = a.offsetY - b.startedY),
    (d.startedX = b.startedX - e.xPadding || 0),
    (d.startedY = b.startedY - e.yPadding || 0),
    d
  );
};
export default getBoundingRectUnScaled;
