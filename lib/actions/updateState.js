import deepMerge from "../utils/deepMerge";
export var UPDATE_STATE = "UPDATE_STATE";
var updateState = function (a, b) {
  var c = b && "function" == typeof b ? b(a) : b;
  return c ? deepMerge(a, c) : a;
};
export default updateState;
