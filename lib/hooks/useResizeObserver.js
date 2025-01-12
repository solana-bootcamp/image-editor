import { useCallback, useEffect, useMemo, useRef } from "react";
var useResizeObserver = function () {
  var a =
      0 < arguments.length && void 0 !== arguments[0]
        ? arguments[0]
        : function () {},
    b = useRef(a),
    c = useRef(),
    d = useCallback(function (a) {
      a.forEach(function (a) {
        if (a.contentRect) {
          var c = a.contentRect,
            d = c.width,
            e = c.height;
          b.current({ entry: a, width: d, height: e });
        }
      });
    }, []),
    e = useCallback(function (a) {
      b.current = a;
    }, []),
    f = useCallback(function () {
      c.current || (c.current = new ResizeObserver(d));
    }, []),
    g = useCallback(function (a, d) {
      a && (!c.current && f(), c.current.observe(a), d && (b.current = d));
    }, []),
    h = useCallback(function (a, d) {
      c.current && a && (c.current.unobserve(a), d && (b.current = d));
    }, []),
    i = useCallback(function () {
      c.current && c.current.disconnect();
    }, []);
  return (
    useEffect(function () {
      return f(), i;
    }, []),
    useMemo(function () {
      return [g, h, e];
    }, [])
  );
};
export default useResizeObserver;
