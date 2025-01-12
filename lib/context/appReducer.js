import actions from "../actions";
var appReducer = function (a, b) {
  return actions[b.type] ? actions[b.type](a, b.payload) || a : a;
};
export default appReducer;
