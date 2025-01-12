import { ELLIPSE_CROP } from "./constants";
var cropImage = function (a, b) {
  var c = !!(2 < arguments.length && arguments[2] !== void 0) && arguments[2];
  b.ratio !== ELLIPSE_CROP || c
    ? a.rect(b.x, b.y, b.width, b.height)
    : a.ellipse(
        b.x + b.width / 2,
        b.y + b.height / 2,
        b.width / 2,
        b.height / 2,
        0,
        0,
        2 * Math.PI
      );
};
export default cropImage;
