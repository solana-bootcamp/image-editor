import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import BaseFilters from "./BaseFilters";
var SEPIA_CONST = 0.06,
  BRIGHTNESS_CONST = 0.1;
function Ginza(a) {
  for (var b = a.data, c = b.length, d = 0; d < c; d += 4) {
    var e = BaseFilters.sepia([b[d], b[d + 1], b[d + 2]], SEPIA_CONST),
      f = _slicedToArray(e, 3);
    (b[d] = f[0]), (b[d + 1] = f[1]), (b[d + 2] = f[2]);
    var g = BaseFilters.brightness(
        [b[d], b[d + 1], b[d + 2]],
        BRIGHTNESS_CONST
      ),
      h = _slicedToArray(g, 3);
    (b[d] = h[0]), (b[d + 1] = h[1]), (b[d + 2] = h[2]);
  }
}
export default Ginza;