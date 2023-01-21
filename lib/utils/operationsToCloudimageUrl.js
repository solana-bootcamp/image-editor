import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["width", "height", "x", "y", "opacity", "scaleX", "scaleY"];
function ownKeys(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b &&
      (d = d.filter(function (b) {
        return Object.getOwnPropertyDescriptor(a, b).enumerable;
      })),
      c.push.apply(c, d);
  }
  return c;
}
function _objectSpread(a) {
  for (var b, c = 1; c < arguments.length; c++)
    (b = null == arguments[c] ? {} : arguments[c]),
      c % 2
        ? ownKeys(Object(b), !0).forEach(function (c) {
            _defineProperty(a, c, b[c]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
        : ownKeys(Object(b)).forEach(function (c) {
            Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c));
          });
  return a;
}
import { ELLIPSE_CROP, TOOLS_IDS, WATERMARK_ANNOTATION_ID } from "./constants";
import getImageSealingParams from "./getImageSealingParams";
import mapCropBox from "./mapCropBox";
import mapNumber from "./mapNumber";
import toPrecisedFloat from "./toPrecisedFloat";
var generateCropQuery = function (a, b, c) {
    var d = mapCropBox(a, b, c),
      e = d.x,
      f = d.y,
      g = d.width,
      h = d.height;
    return "tl_px="
      .concat(e, ",")
      .concat(f, "&br_px=")
      .concat(e + g, ",")
      .concat(f + h)
      .concat(
        a.ratio === ELLIPSE_CROP
          ? "&radius=".concat(Math.max(g, h), "&force_format=png")
          : ""
      );
  },
  generateResizeQuery = function () {
    var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},
      b = a.width,
      c = a.height;
    return "w=".concat(b, "&h=").concat(c);
  },
  generateRotationQuery = function (a) {
    return "r=".concat(-a);
  },
  generateFlipQuery = function (a, b) {
    return "flip=".concat(a ? "x" : "").concat(b ? "y" : "");
  },
  generateWatermarkQuery = function () {
    var a,
      b = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},
      c = 1 < arguments.length ? arguments[1] : void 0,
      d = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {},
      e = b.width,
      f = b.height,
      g = b.x,
      h = b.y,
      i = b.opacity,
      j = b.scaleX,
      k = void 0 === j ? 1 : j,
      l = b.scaleY,
      m = void 0 === l ? 1 : l,
      n = _objectWithoutProperties(b, _excluded),
      o = c.width * c.scaledBy,
      p = c.height * c.scaledBy,
      q = "wat=1&wat_gravity=absolute&wat_opacity="
        .concat(i, "&wat_pos=")
        .concat(Math.floor(100 * ((g - (d.x || 0)) / o), 2), "p,")
        .concat(Math.floor(100 * ((h - (d.y || 0)) / p), 2), "p");
    if (b.name === TOOLS_IDS.TEXT)
      return ""
        .concat(q, "&wat_text=")
        .concat(n.text.replaceAll("\n", ""), "&wat_font=")
        .concat(n.fontFamily, "&wat_color=")
        .concat(n.fill.replace("#", ""), "&wat_fontsize=")
        .concat(n.fontSize, "max");
    var r =
        (null === (a = n.image) || void 0 === a ? void 0 : a.src) || n.image,
      s = !r.startsWith("blob:") && r;
    return ""
      .concat(q, "&wat_scale=")
      .concat(toPrecisedFloat(100 * ((e * k) / o), 2), "p,")
      .concat(toPrecisedFloat(100 * ((f * m) / p), 2), "p")
      .concat(s ? "&wat_url=".concat(encodeURIComponent(s)) : "");
  };
export var finetuneNameToParamInfo = {
  Brighten: {
    cloudimage: { name: "bright", min: -100, max: 100 },
    internal: { propName: "brightness", min: -1, max: 1 },
  },
  Contrast: {
    cloudimage: { name: "contrast", min: -100, max: 100 },
    internal: { propName: "contrast", min: -100, max: 100 },
  },
  Blur: {
    cloudimage: { name: "blur", min: 0, max: 100 },
    internal: { propName: "blurRadius", min: 0, max: 100 },
  },
};
var generateFinetuneQuery = function (a) {
    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      c = [];
    return (
      a.forEach(function (a) {
        var d = a.name && finetuneNameToParamInfo[a.name];
        if (d) {
          var e = toPrecisedFloat(
            mapNumber(
              b[d.internal.propName],
              d.internal.min,
              d.internal.max,
              d.cloudimage.min,
              d.cloudimage.max
            ),
            2
          );
          c.push("".concat(d.cloudimage.name, "=").concat(e));
        }
      }),
      c.join("&")
    );
  },
  operationsToCloudimageUrl = function (a, b, c, d) {
    var e = a.token,
      f = a.domain,
      g = a.dontPrefixUrl,
      h = a.version,
      i = a.imageSealing,
      j = a.secureProtocol,
      k = b.imgSrc,
      l = b.adjustments,
      m = l.crop,
      n = l.rotation,
      o = l.isFlippedX,
      p = l.isFlippedY,
      q = b.resize,
      r = void 0 === q ? {} : q,
      s = b.finetunes,
      t = void 0 === s ? {} : s,
      u = b.finetunesProps,
      v = b.annotations,
      w = void 0 === v ? {} : v,
      x = g
        ? ""
        : "http"
            .concat(j ? "s" : "", "://")
            .concat(e, ".")
            .concat(f.replace(/^(https?:\/\/)?(www\.)?|^\.|\/$/g, ""), "/")
            .concat(h ? "".concat(h, "/") : ""),
      y = [];
    m.width &&
      m.height &&
      (m.x || 0 === m.x) &&
      (m.y || 0 === m.y) &&
      y.push(generateCropQuery(m, c, d)),
      (r.width || r.height) &&
        y.push(generateResizeQuery(_objectSpread(_objectSpread({}, d), r))),
      n && y.push(generateRotationQuery(n)),
      (o || p) && y.push(generateFlipQuery(o, p)),
      0 < t.length && u && y.push(generateFinetuneQuery(t, u)),
      w[WATERMARK_ANNOTATION_ID] &&
        y.push(generateWatermarkQuery(w[WATERMARK_ANNOTATION_ID], c, m)),
      y.push("ci_url_encoded=1");
    var z = y.join("&");
    i.enable && (z = getImageSealingParams(z, i, k)),
      (z = z.replaceAll(" ", "+"));
    var A = (!g && "?") || -1 === k.indexOf("?") ? "?" : "&";
    return ""
      .concat(x)
      .concat(g ? k : encodeURIComponent(k))
      .concat(z ? "".concat(A).concat(z.replace(/&$/, "")) : "");
  };
export default operationsToCloudimageUrl;