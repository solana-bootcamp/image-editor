import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import BaseFilters from "./BaseFilters";
var CONTRAST_CONST = 0.2,
  COLOR_FILTER_CONST = [140, 10, 185, 0.1];
function Brannan(a) {
  for (var b = a.data, c = b.length, d = 0; d < c; d += 4) {
    var e = BaseFilters.contrast([b[d], b[d + 1], b[d + 2]], CONTRAST_CONST),
      f = _slicedToArray(e, 3);
    (b[d] = f[0]), (b[d + 1] = f[1]), (b[d + 2] = f[2]);
    var g = BaseFilters.colorFilter(
        [b[d], b[d + 1], b[d + 2]],
        COLOR_FILTER_CONST
      ),
      h = _slicedToArray(g, 3);
    (b[d] = h[0]), (b[d + 1] = h[1]), (b[d + 2] = h[2]);
  }
}
export default Brannan;