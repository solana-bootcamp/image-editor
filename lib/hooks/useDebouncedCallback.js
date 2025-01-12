import { useCallback } from "react";
import debounce from "../utils/debounce";
var useDebouncedCallback = function (a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : [];
  return useCallback(debounce(a, b), c);
};
export default useDebouncedCallback;
