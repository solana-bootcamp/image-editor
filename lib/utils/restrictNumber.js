var restrictNumber = function (a) {
  var b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 0,
    c = 2 < arguments.length ? arguments[2] : void 0;
  return Math.min(Math.max(b, +a), c || 1e6);
};
export default restrictNumber;