import _extends from "@babel/runtime/helpers/extends";
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
import React, { useEffect, useRef, useState } from "react";
import MenuItem from "@scaleflex/ui/core/menu-item";
import SaveAs from "@scaleflex/icons/save-as";
import Label from "@scaleflex/ui/core/label";
import { useStore, useTransformedImgData } from "../../hooks";
import getFileFullName from "../../utils/getFileFullName";
import {
  CLOSING_REASONS,
  ELLIPSE_CROP,
  SUPPORTED_IMAGE_TYPES,
} from "../../utils/constants";
import { HIDE_LOADER, SET_FEEDBACK, SHOW_LOADER } from "../../actions";
import Modal from "../common/Modal";
import Slider from "../common/Slider";
import restrictNumber from "../../utils/restrictNumber";
import { Resize } from "../tools/Resize";
import ButtonWithMenu from "../common/ButtonWithMenu";
import {
  StyledFileExtensionSelect,
  StyledFileNameInput,
  StyledQualityWrapper,
  StyledResizeOnSave,
} from "./Topbar.styled";
var sliderStyle = { marginBottom: 16 },
  saveButtonWrapperStyle = { width: 67 },
  saveButtonMenuStyle = { marginLeft: 12 },
  isFieSaveMounted = !0,
  SaveButton = function () {
    var a = useStore(),
      b = useRef(),
      c = a.theme,
      d = a.dispatch,
      e = a.originalImage,
      f = a.resize,
      g = a.isLoadingGlobally,
      h = a.haveNotSavedChanges,
      i = a.feedback,
      j = a.t,
      k = a.adjustments;
    k = void 0 === k ? {} : k;
    var l = k.crop,
      m = a.config,
      n = m.onClose,
      o = m.closeAfterSave,
      p = m.onBeforeSave,
      q = m.onSave,
      r = m.forceToPngInEllipticalCrop,
      s = m.defaultSavedImageType,
      t = m.useCloudimage,
      u = m.moreSaveOptions,
      v = useState(!1),
      w = _slicedToArray(v, 2),
      x = w[0],
      y = w[1],
      z = useState({ quality: 0.92 }),
      A = _slicedToArray(z, 2),
      B = A[0],
      C = A[1],
      D = useTransformedImgData(),
      E = ["jpeg", "jpg", "webp"].includes(B.extension),
      F = 0 === i.duration,
      G = function handleSave() {
        var a = D(B, !1, !0),
          c = b.current || q,
          e = c(a.imageData, a.designState),
          f = function hideLoadingSpinner() {
            d({ type: HIDE_LOADER });
          };
        e instanceof Promise ? e["finally"](f) : f(),
          (b.current = null),
          o && n && n(CLOSING_REASONS.AFTER_SAVE, h);
      },
      H = function startSaving() {
        d({ type: SHOW_LOADER }), y(!1), setTimeout(G, 3);
      },
      I = function validateInfoThenSave() {
        var a = b.current || q;
        if ("function" != typeof a)
          throw new Error("Please provide onSave function handler.");
        return B.name && B.extension
          ? void H()
          : void d({
              type: SET_FEEDBACK,
              payload: { feedback: { message: j("nameIsRequired") } },
            });
      },
      J = function triggerSaveHandler() {
        if (t) {
          var a = D(B),
            c = b.current || q;
          return void c(a.imageData, a.designState);
        }
        return b.current || "function" != typeof p || !1 !== p(B)
          ? void y(!0)
          : void I();
      },
      K = function changeSaveFnAndTriggerAnother(a, c) {
        if ("function" == typeof a) (b.current = a), c();
        else
          throw new Error(
            "onSave function callback is required as an argument to the passed function."
          );
      };
    useEffect(
      function () {
        if (e && (!B.name || !B.extension)) {
          var a = getFileFullName(
              e.name,
              r && l.ratio === ELLIPSE_CROP
                ? "png"
                : SUPPORTED_IMAGE_TYPES.includes(
                    null === s || void 0 === s ? void 0 : s.toLowerCase()
                  ) && s
            ),
            b = a.name,
            c = a.extension;
          C(_objectSpread(_objectSpread({}, B), {}, { name: b, extension: c }));
        }
      },
      [e, x]
    ),
      useEffect(
        function () {
          C(
            _objectSpread(
              _objectSpread({}, B),
              {},
              { size: { width: f.width, height: f.height } }
            )
          );
        },
        [f]
      ),
      useEffect(function () {
        return (
          (isFieSaveMounted = !0),
          function () {
            isFieSaveMounted = !1;
          }
        );
      }, []);
    var L =
      Array.isArray(u) && 0 < u.length
        ? u.map(function (a, b) {
            return _objectSpread(
              _objectSpread({}, a),
              {},
              {
                key: "".concat(a.label || b, "-option-key"),
                onClick:
                  "function" == typeof a.onClick
                    ? function () {
                        return a.onClick(
                          function (a) {
                            return K(a, J);
                          },
                          function (a) {
                            return K(a, H);
                          }
                        );
                      }
                    : void 0,
              }
            );
          })
        : [];
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(ButtonWithMenu, {
        className: "FIE_topbar-save",
        color: "primary",
        label: j("save"),
        onClick: J,
        menuPosition: "bottom",
        menuItems: L,
        menuStyle: saveButtonMenuStyle,
        wrapperStyle: saveButtonWrapperStyle,
        disabled: g || F,
      }),
      x &&
        React.createElement(
          Modal,
          {
            className: "FIE_save-modal",
            title: j("saveAsModalLabel"),
            Icon: function Icon(a) {
              return React.createElement(
                SaveAs,
                _extends({ color: c.palette["accent-primary"] }, a)
              );
            },
            isOpened: x,
            onCancel: function cancelModal() {
              isFieSaveMounted && x && ((b.current = null), y(!1));
            },
            onDone: I,
            doneLabel: j("save"),
            cancelLabel: j("cancel"),
            doneButtonColor: "primary",
            areButtonsDisabled: g,
            zIndex: 11110,
          },
          React.createElement(StyledFileNameInput, {
            className: "FIE_save-file-name-input",
            value: B.name,
            onChange: function changeFileName(a) {
              var b = a.target.value;
              C(_objectSpread(_objectSpread({}, B), {}, { name: b }));
            },
            size: "sm",
            placeholder: j("name"),
            error: !!B.name,
            focusOnMount: !0,
          }),
          React.createElement(
            StyledFileExtensionSelect,
            {
              className: "FIE_save-extension-selector",
              onChange: function onChange(a) {
                return C(
                  _objectSpread(_objectSpread({}, B), {}, { extension: a })
                );
              },
              value: B.extension,
              placeholder: j("extension"),
              size: "sm",
            },
            SUPPORTED_IMAGE_TYPES.map(function (a) {
              return React.createElement(MenuItem, { key: a, value: a }, a);
            })
          ),
          E &&
            React.createElement(
              StyledQualityWrapper,
              { className: "FIE_save-quality-wrapper" },
              React.createElement(Label, null, j("quality")),
              React.createElement(Slider, {
                annotation: "%",
                min: 1,
                max: 100,
                onChange: function changeQuality(a) {
                  C(
                    _objectSpread(
                      _objectSpread({}, B),
                      {},
                      { quality: restrictNumber(a / 100, 0.01, 1) }
                    )
                  );
                },
                value: parseInt(100 * B.quality, 10),
                width: "100%",
                style: sliderStyle,
              })
            ),
          React.createElement(
            StyledResizeOnSave,
            { className: "FIE_save-resize-wrapper" },
            React.createElement(Label, null, j("resize")),
            React.createElement(Resize, {
              onChange: function resizeImageFile(a) {
                C(
                  _objectSpread(
                    _objectSpread({}, B),
                    {},
                    { size: _objectSpread(_objectSpread({}, B.size), a) }
                  )
                );
              },
              currentSize: (null === B || void 0 === B ? void 0 : B.size) || {},
              hideResetButton: !0,
              alignLeft: !0,
            })
          )
        )
    );
  };
export default SaveButton;