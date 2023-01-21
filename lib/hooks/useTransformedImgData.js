import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["filter"];
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
import { HIDE_LOADER, SET_SAVED } from "../actions";
import {
  ELLIPSE_CROP,
  IMAGE_NODE_ID,
  SUPPORTED_IMAGE_TYPES,
  TOOLS_IDS,
} from "../utils/constants";
import extractCurrentDesignState from "../utils/extractCurrentDesignState";
import mapCropBox from "../utils/mapCropBox";
import getSizeAfterRotation from "../utils/getSizeAfterRotation";
import imageToBase64 from "../utils/imageToBase64";
import getFileFullName from "../utils/getFileFullName";
import operationsToCloudimageUrl from "../utils/operationsToCloudimageUrl";
import useStore from "./useStore";
var useTransformedImgData = function () {
  var a = useStore(),
    b = a.dispatch,
    c = a.designLayer,
    d = a.shownImageDimensions,
    e = a.originalImage,
    f = a.adjustments,
    g = f.crop,
    h = f.rotation,
    i = void 0 === h ? 0 : h,
    j = f.isFlippedX,
    k = f.isFlippedY,
    l = a.config,
    m = l.savingPixelRatio,
    n = l.previewPixelRatio,
    o = l.forceToPngInEllipticalCrop,
    p = l.defaultSavedImageType,
    q = l.useCloudimage,
    r = l.cloudimage;
  return q
    ? function getTransformedCloudimageData() {
        var b,
          c,
          f =
            0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},
          h = extractCurrentDesignState(a),
          i = h.filter,
          j = _objectWithoutProperties(h, _excluded),
          k = operationsToCloudimageUrl(r, j, d, e),
          l = mapCropBox(
            { x: g.x, y: g.y, width: g.width, height: g.height },
            d,
            e
          ),
          m = {
            cloudimageUrl: k,
            width:
              (null === f ||
              void 0 === f ||
              null === (b = f.size) ||
              void 0 === b
                ? void 0
                : b.width) || l.width,
            height:
              (null === f ||
              void 0 === f ||
              null === (c = f.size) ||
              void 0 === c
                ? void 0
                : c.height) || l.height,
          };
        return { imageData: m, designState: j };
      }
    : function getTransformedImgData() {
        var f =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          h =
            !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
          l =
            !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2];
        Konva.pixelRatio = h || m;
        var q = c.attrs,
          r = q.clipWidth,
          s = q.clipHeight,
          t = q.clipX,
          u = q.clipY;
        c.setAttr("isSaving", !0);
        var v = c
            .getStage()
            .clone({
              width: e.width,
              height: e.height,
              scaleX: j ? -1 : 1,
              scaleY: k ? -1 : 1,
            }),
          w = _slicedToArray(v.children, 1),
          x = w[0];
        v.children[1].destroy();
        var y = v.findOne("#".concat(IMAGE_NODE_ID));
        y.cache();
        var z = { x: v.width() / d.width, y: v.height() / d.height };
        x.setAttrs({
          rotation: 0,
          offsetX: 0,
          offsetY: 0,
          x: 0,
          y: 0,
          scaleX: z.x,
          scaleY: z.y,
        });
        var A = _objectSpread(
            _objectSpread(
              {},
              (!f.name || !f.extension) &&
                getFileFullName(
                  e.name,
                  o && g.ratio === ELLIPSE_CROP
                    ? "png"
                    : SUPPORTED_IMAGE_TYPES.includes(
                        null === p || void 0 === p ? void 0 : p.toLowerCase()
                      ) && p
                )
            ),
            f
          ),
          B = A.name,
          C = A.extension,
          D = A.quality,
          E = void 0 === D ? 92 : D,
          F = A.size,
          G = void 0 === F ? {} : F,
          H = ["jpeg", "jpg", "webp"].includes(C),
          I = mapCropBox(
            {
              x: g.x || t,
              y: g.y || u,
              width: g.width || r,
              height: g.height || s,
            },
            d,
            v.attrs
          ),
          J = getSizeAfterRotation(I.width, I.height, i);
        if (
          (v.setAttrs({
            offsetX: I.width / 2 + I.x,
            offsetY: I.height / 2 + I.y,
            width: J.width,
            height: J.height,
            x: J.width / 2,
            y: J.height / 2,
            rotation: i,
          }),
          G.width)
        ) {
          var Q = (j ? -1 : 1) * (G.width / v.width());
          v.setAttrs({ scaleX: Q, width: G.width, x: v.x() * Math.abs(Q) });
        }
        if (G.height) {
          var R = (k ? -1 : 1) * (G.height / v.height());
          v.setAttrs({ scaleY: R, height: G.height, y: v.y() * Math.abs(R) });
        }
        var K = _objectSpread(
            { mimeType: "image/".concat("jpg" === C ? "jpeg" : C) },
            H ? { quality: E } : {}
          ),
          L = v.toCanvas(K),
          M = v.toDataURL(K),
          N = _objectSpread(
            _objectSpread({}, extractCurrentDesignState(a)),
            {},
            {
              shownImageDimensions: {
                width: a.shownImageDimensions.width,
                height: a.shownImageDimensions.height,
                scaledBy: a.shownImageDimensions.scaledBy,
              },
            }
          );
        N.filter && (N.filter = N.filter.name),
          (N.finetunes = N.finetunes.map(function (a) {
            return a.name;
          })),
          Object.keys(N.annotations).forEach(function (a) {
            var b,
              c = N.annotations[a],
              d =
                c.name === TOOLS_IDS.IMAGE &&
                (null === (b = c.image) || void 0 === b ? void 0 : b.src);
            d && d.startsWith("blob:")
              ? (N.annotations[a].image = imageToBase64(c.image))
              : c.image instanceof HTMLImageElement &&
                (N.annotations[a].image = d);
          });
        var O = _objectSpread(
          {
            fullName: "".concat(B, ".").concat(C),
            name: B,
            extension: C,
            mimeType: "image/".concat(C),
            imageCanvas: L,
            imageBase64: M,
            width: G.width || I.width,
            height: G.height || I.height,
          },
          H ? { quality: E } : {}
        );
        c.setAttr("isSaving", !1),
          b({ type: SET_SAVED }),
          y.clearCache(),
          (Konva.pixelRatio = n);
        var P = function () {
          b({ type: HIDE_LOADER });
        };
        return (
          l || P(), { imageData: O, designState: N, hideLoadingSpinner: P }
        );
      };
};
export default useTransformedImgData;