import toPrecisedFloat from "./toPrecisedFloat";
var compareRatios = function (a, b) {
  return toPrecisedFloat(a) === toPrecisedFloat(b);
};
export default compareRatios;
