var toPrecisedFloat = function (a) {
  var b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 5;
  return a && +parseFloat(a).toFixed(b);
};
export default toPrecisedFloat;
