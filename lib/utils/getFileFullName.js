import {
  DEFAULT_IMAGE_TYPE,
  POSSIBLE_IMAGE_TYPES,
  SUPPORTED_IMAGE_TYPES,
} from "./constants";
var getFileFullName = function () {
  var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
    b = 1 < arguments.length ? arguments[1] : void 0,
    c = b,
    d = a;
  if (
    !c &&
    POSSIBLE_IMAGE_TYPES.some(function (b) {
      return a.lastIndexOf(".".concat(b)) === a.length - ".".concat(b).length;
    })
  ) {
    var e,
      f =
        null === (e = a.slice(a.lastIndexOf(".") + 1)) || void 0 === e
          ? void 0
          : e.toLowerCase();
    (c = f && SUPPORTED_IMAGE_TYPES.includes(f) ? f : DEFAULT_IMAGE_TYPE),
      (d = a.slice(0, a.lastIndexOf(".")));
  }
  return (
    (c = c || DEFAULT_IMAGE_TYPE),
    { fullName: "".concat(d, ".").concat(c), name: d, extension: c }
  );
};
export default getFileFullName;
