import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import sha1 from "./sha1";
var encodeBase64 = function (a) {
    return btoa(a).replace(/=*$/g, "");
  },
  getSha1 = function (a, b) {
    return sha1(a).slice(0, b);
  },
  getSealingParams = function (a, b, c, d) {
    var e = encodeBase64(a),
      f = getSha1(b + e + c, d);
    return [f ? "ci_seal=".concat(f) : "", e ? "ci_eqs=".concat(e) : ""]
      .filter(function (a) {
        return a;
      })
      .join("&");
  },
  getImageSealingParams = function (a, b, c) {
    var d = b || {},
      e = d.salt,
      f = d.charCount,
      g = d.includeParams,
      h = void 0 === g ? [] : g,
      i = !h || 0 === (null === h || void 0 === h ? void 0 : h.length),
      j = "",
      k = "",
      l = [],
      m = [];
    return (
      a.split("&").forEach(function (a) {
        var b = a.split("="),
          c = _slicedToArray(b, 1),
          d = c[0];
        -1 < (null === h || void 0 === h ? void 0 : h.indexOf(d)) || i
          ? l.push(a)
          : m.push(a);
      }),
      0 < m.length && (k = m.join("&")),
      (j = getSealingParams(l.join("&"), c, e, f)),
      [j, k]
        .filter(function (a) {
          return a;
        })
        .join("&")
    );
  };
export default getImageSealingParams;
