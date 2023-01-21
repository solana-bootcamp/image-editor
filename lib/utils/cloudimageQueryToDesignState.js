import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
var _excluded = ["cropX2", "cropY2", "crop", "watermark"];
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
import Konva from "konva";
import { ELLIPSE_CROP, TOOLS_IDS, WATERMARK_ANNOTATION_ID } from "./constants";
import deepMerge from "./deepMerge";
import mapNumber from "./mapNumber";
import { finetuneNameToParamInfo } from "./operationsToCloudimageUrl";
var propertyToOperation = function (a, b) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {},
      d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {};
    switch (a) {
      case "wat_text":
        return { watermark: { text: b.replaceAll("+", " ") } };
      case "wat_font":
        return { watermark: { fontFamily: b } };
      case "wat_color":
        return { watermark: { fill: "#".concat(b) } };
      case "wat_fontsize":
        return { watermark: { fontSize: parseFloat(b) } };
      case "wat_opacity":
        return { watermark: { opacity: parseFloat(b) } };
      case "wat_pos": {
        var e = b.split(","),
          f = _slicedToArray(e, 2),
          g = f[0],
          h = f[1];
        return {
          watermark: {
            x: (parseFloat(g) / 100) * c.width,
            y: (parseFloat(h) / 100) * c.height,
          },
        };
      }
      case "wat_url":
        return { watermark: { image: decodeURIComponent(b) } };
      case "wat_scale": {
        var i = b.split(","),
          j = _slicedToArray(i, 2),
          k = j[0],
          l = j[1];
        return {
          watermark: {
            width: (parseFloat(k) / 100) * (c.width || 0),
            height: (parseFloat(l) / 100) * (c.height || 0),
          },
        };
      }
      case "tl_px": {
        var m = b.split(","),
          n = _slicedToArray(m, 2),
          o = n[0],
          p = n[1];
        return {
          crop: {
            x: mapNumber(parseFloat(o), 0, d.width, 0, c.width),
            y: mapNumber(parseFloat(p), 0, d.height, 0, c.height),
          },
        };
      }
      case "br_px": {
        var q = b.split(","),
          r = _slicedToArray(q, 2),
          s = r[0],
          t = r[1];
        return {
          cropX2: mapNumber(parseFloat(s), 0, d.width, 0, c.width),
          cropY2: mapNumber(parseFloat(t), 0, d.height, 0, c.height),
        };
      }
      case "round":
        return { crop: { ratio: ELLIPSE_CROP } };
      case "w":
        return { resize: { width: parseFloat(b) } };
      case "h":
        return { resize: { height: parseFloat(b) } };
      case "r":
        return { adjustments: { rotation: -parseInt(b, 10) } };
      case "flip":
      case "mirror":
        return {
          adjustments: {
            isFlippedX: b.includes("x") || b.includes("h"),
            isFlippedY: b.includes("y") || b.includes("v"),
          },
        };
      default: {
        var x;
        if (
          (Object.keys(finetuneNameToParamInfo).forEach(function (b) {
            finetuneNameToParamInfo[b].cloudimage.name === a.toLowerCase() &&
              (x = b);
          }),
          !x)
        )
          return null;
        var u = finetuneNameToParamInfo[x],
          v = u.cloudimage,
          w = u.internal;
        return {
          finetunes: [Konva.Filters[x]],
          finetunesProps: _defineProperty(
            {},
            w.propName,
            mapNumber(parseFloat(b), v.min, v.max, w.min, w.max)
          ),
        };
      }
    }
  },
  cloudimageQueryToDesignState = function (a, b, c) {
    if (!a) return null;
    var d = a.split("&"),
      e = {};
    d.forEach(function (a) {
      var d = a.split("="),
        f = _slicedToArray(d, 2),
        g = f[0],
        h = f[1],
        i = propertyToOperation(g, h, b, c);
      i && (e = deepMerge(e, i, !0));
    });
    var f = e,
      g = f.cropX2,
      h = f.cropY2,
      i = f.crop,
      j = f.watermark,
      k = _objectWithoutProperties(f, _excluded),
      l = _objectSpread(
        _objectSpread(
          _objectSpread({}, k),
          g && h && i
            ? {
                adjustments: _objectSpread(
                  _objectSpread({}, k.adjustments),
                  {},
                  {
                    crop: _objectSpread(
                      _objectSpread({}, i),
                      {},
                      { width: (g || 0) - i.x, height: (h || 0) - i.y }
                    ),
                  }
                ),
              }
            : {}
        ),
        {},
        {
          annotations: _objectSpread(
            {},
            j
              ? _defineProperty(
                  {},
                  WATERMARK_ANNOTATION_ID,
                  _objectSpread(
                    _objectSpread({}, j),
                    {},
                    {
                      x:
                        ((null === i || void 0 === i ? void 0 : i.x) || 0) +
                        (j.x || 0),
                      y:
                        ((null === i || void 0 === i ? void 0 : i.y) || 0) +
                        (j.y || 0),
                      id: WATERMARK_ANNOTATION_ID,
                      name: j.text ? TOOLS_IDS.TEXT : TOOLS_IDS.IMAGE,
                    },
                    j.text
                      ? {
                          width: j.text.length * j.fontSize,
                          height: j.fontSize,
                        }
                      : {}
                  )
                )
              : {}
          ),
        }
      );
    return l;
  };
export default cloudimageQueryToDesignState;