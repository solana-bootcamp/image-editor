var randomId = function () {
  var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "";
  return ""
    .concat(a)
    .concat(a ? "-" : "")
    .concat(parseInt(Date.now() * Math.random(), 10));
};
export default randomId;
