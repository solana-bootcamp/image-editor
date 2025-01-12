import getScrollOffset from "./getScrollOffset";
var getElemDocumentCoords = function (a) {
  if (!a) return null;
  var b = a.getBoundingClientRect(),
    c = document,
    d = c.body,
    e = getScrollOffset(),
    f = e.topOffset,
    g = e.leftOffset,
    h = document.documentElement,
    i = h.clientTop || d.clientTop || 0,
    j = h.clientLeft || d.clientLeft || 0,
    k = b.top + f - i,
    l = b.left + g - j;
  return {
    top: Math.round(k),
    left: Math.round(l),
    width: b.width,
    height: b.height,
  };
};
export default getElemDocumentCoords;
