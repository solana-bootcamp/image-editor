import { useCallback, useMemo } from "react";
import { ADD_FILTER } from "../actions";
import useStore from "./useStore";
var useFilter = function () {
  var a = useStore(),
    b = a.dispatch,
    c = a.filter,
    d = useCallback(function (a) {
      b({ type: ADD_FILTER, payload: { filter: a } });
    }, []);
  return useMemo(
    function () {
      return [c, d];
    },
    [c]
  );
};
export default useFilter;
