var getDimensionsMinimalRatio = function (a, b, c, d) {
  return Math.min(a / c, b / d) || 1;
};
export default getDimensionsMinimalRatio;