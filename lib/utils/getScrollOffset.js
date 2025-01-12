var getScrollOffset = function () {
  var a,
    b,
    c = document,
    d = c.body,
    e = document.documentElement,
    f =
      (null === (a = window) || void 0 === a ? void 0 : a.pageYOffset) ||
      e.scrollTop ||
      d.scrollTop,
    g =
      (null === (b = window) || void 0 === b ? void 0 : b.pageXOffset) ||
      e.scrollLeft ||
      d.scrollLeft;
  return { topOffset: f, leftOffset: g };
};
export default getScrollOffset;
