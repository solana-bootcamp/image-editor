var getRotatedPoint = function (a, b) {
    var c = a.x,
      d = a.y,
      e = (b * Math.PI) / 180,
      f = Math.cos(e),
      g = Math.sin(e);
    return { x: c * f - d * g, y: d * f + c * g };
  },
  getCenterRotatedPoint = function (a, b, c) {
    if (!a || !b || (!c && 0 !== c)) return { x: 0, y: 0, rotation: c };
    var d = { x: -a / 2, y: -b / 2 },
      e = getRotatedPoint(d, 0),
      f = getRotatedPoint(d, c),
      g = f.x - e.x,
      h = f.y - e.y;
    return { x: g, y: h, rotation: c };
  };
export default getCenterRotatedPoint;
