import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import BaseFilters from "./BaseFilters";
var BRIGHTNESS_CONST = 0.08,
  ADJUST_RGB_CONST = [1, 1.03, 1.05],
  SATURATION_CONST = 0.12;
function Lark(a) {
  for (var b = a.data, c = b.length, d = 0; d < c; d += 4) {
    var e = BaseFilters.brightness(
        [b[d], b[d + 1], b[d + 2]],
        BRIGHTNESS_CONST
      ),
      f = _slicedToArray(e, 3);
    (b[d] = f[0]), (b[d + 1] = f[1]), (b[d + 2] = f[2]);
    var g = BaseFilters.adjustRGB([b[d], b[d + 1], b[d + 2]], ADJUST_RGB_CONST),
      h = _slicedToArray(g, 3);
    (b[d] = h[0]), (b[d + 1] = h[1]), (b[d + 2] = h[2]);
    var j = BaseFilters.saturation(
        [b[d], b[d + 1], b[d + 2]],
        SATURATION_CONST
      ),
      k = _slicedToArray(j, 3);
    (b[d] = k[0]), (b[d + 1] = k[1]), (b[d + 2] = k[2]);
  }
}
export default Lark;