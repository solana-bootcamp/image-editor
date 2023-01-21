import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import BaseFilters from "./BaseFilters";
var COLOR_FILTER_CONST = [255, 165, 40, 0.2];
function Earlybird(a) {
  for (var b = a.data, c = b.length, d = 0; d < c; d += 4) {
    var e = BaseFilters.colorFilter(
        [b[d], b[d + 1], b[d + 2]],
        COLOR_FILTER_CONST
      ),
      f = _slicedToArray(e, 3);
    (b[d] = f[0]), (b[d + 1] = f[1]), (b[d + 2] = f[2]);
  }
}
export default Earlybird;