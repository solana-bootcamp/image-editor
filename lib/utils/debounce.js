import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
var debounce = function (a) {
  var b,
    c = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 300;
  return function () {
    var d, e;
    clearTimeout(b);
    for (var f = arguments.length, g = Array(f), h = 0; h < f; h++)
      g[h] = arguments[h];
    var i = g[0],
      j = g.slice(1);
    b = setTimeout(
      a.bind.apply(
        a,
        [
          null,
          null !==
            (d =
              null === i ||
              void 0 === i ||
              null === (e = i.target) ||
              void 0 === e
                ? void 0
                : e.value) && void 0 !== d
            ? d
            : i,
        ].concat(_toConsumableArray(j))
      ),
      c
    );
  };
};
export default debounce;
