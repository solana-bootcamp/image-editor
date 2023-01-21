import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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
import React, { useEffect, useMemo, useRef, useState } from "react";
import Text from "@scaleflex/icons/text";
import UploadOutline from "@scaleflex/icons/upload-outline";
import {
  SELECT_ANNOTATION,
  SET_ANNOTATION,
  SET_FEEDBACK,
  CLEAR_ANNOTATIONS_SELECTIONS,
} from "../../../actions";
import ButtonWithMenu from "../../common/ButtonWithMenu";
import TextControls from "../Text/TextOptions/TextControls";
import ImageControls from "../Image/ImageControls";
import { usePhoneScreen, useStore } from "../../../hooks";
import { FEEDBACK_STATUSES, TOOLS_IDS } from "../../../utils/constants";
import HiddenUploadInput from "../../common/HiddenUploadInput";
import {
  StyledControlsWrapper,
  StyledWatermarkWrapper,
} from "./Watermark.styled";
import WatermarksGallery from "./WatermarksGallery";
import WatermarkPadding from "./WatermarkPadding";
var WATERMARK_IMG_RATIO_FROM_ORIGINAL = 0.33,
  WATERMARK_ANNOTATION_ID = "watermark",
  Watermark = function () {
    var a = useStore(),
      b = a.annotations,
      c = a.shownImageDimensions,
      d = a.selectionsIds,
      e = a.config,
      f = a.dispatch,
      g = a.t,
      h = a.adjustments.crop,
      i = void 0 === h ? {} : h,
      j = usePhoneScreen(),
      k = useState(!1),
      l = _slicedToArray(k, 2),
      m = l[0],
      n = l[1],
      o = useRef(),
      p = e[TOOLS_IDS.WATERMARK],
      q = useMemo(
        function () {
          return b[WATERMARK_ANNOTATION_ID];
        },
        [b[WATERMARK_ANNOTATION_ID]]
      ),
      r = i.width || c.width,
      s = i.height || c.height,
      t = i.x || 0,
      u = i.y || 0,
      v = p.textScalingRatio || WATERMARK_IMG_RATIO_FROM_ORIGINAL,
      w = p.imageScalingRatio || WATERMARK_IMG_RATIO_FROM_ORIGINAL,
      x = function (a) {
        var b = a.width / a.height,
          c = {};
        if (s > r) {
          var g = (s * w) / a.height;
          (c.height = a.height * g), (c.width = c.height * b);
        } else {
          var h = (r * w) / a.width;
          (c.width = a.width * h), (c.height = c.width / b);
        }
        var d = _objectSpread(
          _objectSpread(
            _objectSpread(
              _objectSpread({}, e.annotationsCommon),
              e[TOOLS_IDS.IMAGE]
            ),
            c
          ),
          {},
          {
            padding: 1,
            image: a,
            x: t + r / 2 - c.width / 2,
            y: u + s / 2 - c.height / 2,
            id: WATERMARK_ANNOTATION_ID,
            name: TOOLS_IDS.IMAGE,
            replaceCurrent: !0,
          }
        );
        f({ type: SET_ANNOTATION, payload: d });
      },
      y = function (a) {
        f({
          type: SET_ANNOTATION,
          payload: _objectSpread(
            _objectSpread({}, "function" == typeof a ? a(q) : a),
            {},
            { id: WATERMARK_ANNOTATION_ID }
          ),
        });
      },
      z = [
        !e.useCloudimage && {
          key: "upload-watermark",
          label: g("uploadWatermark"),
          icon: UploadOutline,
          onClick: function onClick() {
            o.current && o.current.click();
          },
        },
        {
          key: "add-text-watermark",
          label: g("addWatermarkAsText"),
          icon: Text,
          onClick: function addTextWatermark() {
            var a = { height: s * v, width: r * v },
              b = _objectSpread(
                _objectSpread(
                  _objectSpread(
                    _objectSpread({}, e.annotationsCommon),
                    e[TOOLS_IDS.TEXT]
                  ),
                  a
                ),
                {},
                {
                  padding: 1,
                  x: t + r / 2 - a.width / 2,
                  y: u + s / 2 - a.height / 2,
                  fill: "#000000",
                  id: WATERMARK_ANNOTATION_ID,
                  name: TOOLS_IDS.TEXT,
                  replaceCurrent: !0,
                }
              );
            f({ type: SET_ANNOTATION, payload: b });
          },
        },
      ],
      A = function (a) {
        f({
          type: SET_FEEDBACK,
          payload: {
            feedback: { message: a, status: FEEDBACK_STATUSES.WARNING },
          },
        });
      };
    useEffect(
      function () {
        q &&
          (f({ type: CLEAR_ANNOTATIONS_SELECTIONS }),
          f({
            type: SELECT_ANNOTATION,
            payload: { annotationId: "watermark" },
          }));
      },
      [q]
    ),
      useEffect(
        function () {
          q &&
            (0 === d.length || d[0].id !== WATERMARK_ANNOTATION_ID) &&
            f({
              type: SELECT_ANNOTATION,
              payload: { annotationId: "watermark" },
            });
        },
        [d]
      );
    var B = function () {
      return React.createElement(WatermarkPadding, {
        watermark: q,
        saveWatermark: y,
        t: g,
      });
    };
    return React.createElement(
      "div",
      { className: "FIE_watermark-tool-wrapper" },
      (null === q || void 0 === q ? void 0 : q.name) === TOOLS_IDS.TEXT &&
        React.createElement(
          StyledControlsWrapper,
          { className: "FIE_watermark-options-wrapper" },
          React.createElement(TextControls, { text: q, saveText: y, t: g }, B())
        ),
      (null === q || void 0 === q ? void 0 : q.name) === TOOLS_IDS.IMAGE &&
        React.createElement(
          StyledControlsWrapper,
          { className: "FIE_watermark-options-wrapper" },
          React.createElement(
            ImageControls,
            { image: q, saveImage: y, t: g },
            B()
          )
        ),
      React.createElement(
        StyledWatermarkWrapper,
        {
          className: "FIE_watermark-add-wrapper",
          noWrap: !(!(null !== q && void 0 !== q) || !q.name),
        },
        React.createElement(ButtonWithMenu, {
          className: "FIE_watermark-add",
          color: "secondary",
          label: g("addWatermark"),
          title: g("addWatermarkTitle"),
          menuPosition: "top",
          menuItems: z,
          menuFromBtn: !0,
        }),
        React.createElement(WatermarksGallery, {
          selectWatermark: x,
          style:
            j && !(!(null !== q && void 0 !== q) || !q.name)
              ? { width: "55%" }
              : void 0,
        }),
        React.createElement(HiddenUploadInput, {
          onChange: m
            ? void 0
            : function importWatermarkImg(a) {
                if (a.target.files) {
                  n(!0);
                  var b = a.target.files[0];
                  if (b.type.startsWith("image/")) {
                    var c = new Image();
                    (c.onload = function () {
                      x(c), URL.revokeObjectURL(b), n(!1);
                    }),
                      (c.onerror = function () {
                        A(g("uploadImageError")), n(!1);
                      }),
                      (c.src = URL.createObjectURL(b));
                  }
                }
                a.target.value = "";
              },
          disabled: m,
          ref: o,
        })
      )
    );
  };
export default Watermark;