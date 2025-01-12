var useDrag = function (a, b, c) {
  var d = function (b) {
      if ("function" == typeof a) {
        var c;
        a((null === (c = b.touches) || void 0 === c ? void 0 : c[0]) || b);
      }
    },
    f = function (a) {
      if (
        (document.removeEventListener("mousemove", d),
        document.removeEventListener("mouseup", f),
        document.removeEventListener("mouseleave", f),
        document.removeEventListener("touchmove", d),
        document.removeEventListener("touchend", f),
        document.removeEventListener("touchcancel", f),
        "function" == typeof c)
      ) {
        var b;
        c((null === (b = a.touches) || void 0 === b ? void 0 : b[0]) || a);
      }
    },
    g = function (a) {
      if (
        (document.addEventListener("mousemove", d),
        document.addEventListener("mouseup", f),
        document.addEventListener("mouseleave", f),
        document.addEventListener("touchmove", d),
        document.addEventListener("touchend", f),
        document.addEventListener("touchcancel", f),
        "function" == typeof b)
      ) {
        var c;
        b((null === (c = a.touches) || void 0 === c ? void 0 : c[0]) || a);
      }
    };
  return { onMouseDown: g, onTouchStart: g };
};
export default useDrag;
