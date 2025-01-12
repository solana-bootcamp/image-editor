import restrictNumber from "./restrictNumber";
var getPointerOffsetPositionBoundedToObject = function () {
  var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},
    b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
    c = a.parent,
    d = c.getStage(),
    e = d.attrs.zoomFactor,
    f = c.getRelativePointerPosition();
  return {
    offsetX:
      restrictNumber(f.x, 0, b.width / (d.scaleX() / e)) + c.attrs.xPadding,
    offsetY:
      restrictNumber(f.y, 0, b.height / (d.scaleY() / e)) + c.attrs.yPadding,
  };
};
export default getPointerOffsetPositionBoundedToObject;
