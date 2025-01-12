var isSameImage = function (a, b) {
  return (
    a &&
    b &&
    ((a instanceof HTMLImageElement &&
      a.src === b.src &&
      a.width === b.width &&
      a.height === b.height) ||
      ((null === a || void 0 === a ? void 0 : a.src) || a) === b.src)
  );
};
export default isSameImage;
