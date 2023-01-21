import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from "react";
import Button from "@scaleflex/ui/core/button";
import LockOutline from "@scaleflex/icons/lock-outline";
import UnlockOutline from "@scaleflex/icons/unlock-outline";
import { SET_RESIZE, ZOOM_CANVAS } from "../../../actions";
import restrictNumber from "../../../utils/restrictNumber";
import { useStore } from "../../../hooks";
import getProperDimensions from "../../../utils/getProperDimensions";
import getSizeAfterRotation from "../../../utils/getSizeAfterRotation";
import getZoomFitFactor from "../../../utils/getZoomFitFactor";
import {
  StyledResizeWrapper,
  StyledResizeInput,
  StyledRatioLockIcon,
  StyledXLabel,
} from "./Resize.styled";
var Resize = function (a) {
  var b = a.onChange,
    c = a.currentSize,
    d = a.hideResetButton,
    e = a.alignLeft,
    f = useStore(),
    g = f.dispatch,
    h = f.originalImage,
    i = f.resize,
    j = f.shownImageDimensions,
    k = f.adjustments,
    l = k.crop,
    m = k.rotation,
    n = void 0 === m ? 0 : m,
    o = f.theme,
    p = f.t,
    q = function (a) {
      var d,
        e = a.target,
        f = e.name,
        k = e.value,
        m = getSizeAfterRotation(h.width, h.height, n),
        o = _defineProperty({}, f, restrictNumber(k, 1)),
        p = "height" === f,
        q = p ? "width" : "height",
        r =
          null !== (d = c.ratioUnlocked) && void 0 !== d ? d : i.ratioUnlocked;
      if (!r) {
        var s = m.width / m.height;
        o[q] = p ? Math.round(o[f] * s) : Math.round(o[f] / s);
      }
      if (o[f] !== i[f] || o[q] !== i[q]) {
        if ("function" == typeof b) return void b(o);
        if ((g({ type: SET_RESIZE, payload: o }), !i.width || !i.height)) {
          var t = (l.width && l.height && l) || j;
          g({ type: ZOOM_CANVAS, payload: { factor: getZoomFitFactor(t, o) } });
        }
      }
    },
    r =
      (!i.width && !i.height) || (h.width === i.width && h.height === i.height),
    s = getProperDimensions(((c.width || c.height) && c) || i, l, j, h, n),
    t = i.manualChangeDisabled;
  return React.createElement(
    StyledResizeWrapper,
    { className: "FIE_resize-tool-options", alignLeft: e },
    React.createElement(StyledResizeInput, {
      className: "FIE_resize-width-option",
      value: s.width,
      name: "width",
      onChange: t ? void 0 : q,
      inputMode: "numeric",
      title: p("resizeWidthTitle"),
      type: "number",
      size: "sm",
      placeholder: "Width",
      noLeftMargin: e,
      disabled: t,
    }),
    React.createElement(StyledXLabel, { className: "FIE_resize-x-label" }, "x"),
    React.createElement(StyledResizeInput, {
      className: "FIE_resize-height-option",
      value: s.height,
      name: "height",
      onChange: t ? void 0 : q,
      inputMode: "numeric",
      title: p("resizeHeightTitle"),
      type: "number",
      size: "sm",
      placeholder: "Height",
      disabled: t,
    }),
    React.createElement(
      StyledRatioLockIcon,
      {
        className: "FIE_resize-ratio-locker",
        title: p("toggleRatioLockTitle"),
        onClick: t
          ? void 0
          : function toggleRatioLock() {
              return "function" == typeof b
                ? void b({ ratioUnlocked: !c.ratioUnlocked })
                : void g({
                    type: SET_RESIZE,
                    payload: { ratioUnlocked: !i.ratioUnlocked },
                  });
            },
        color: "link",
        size: "sm",
        disabled: t,
      },
      c.ratioUnlocked || i.ratioUnlocked
        ? React.createElement(UnlockOutline, {
            color: o.palette["icons-secondary"],
          })
        : React.createElement(LockOutline, {
            color: o.palette["icons-secondary"],
          })
    ),
    !d &&
      React.createElement(
        Button,
        {
          className: "FIE_resize-reset-button",
          size: "sm",
          onClick:
            r || t
              ? void 0
              : function resetResize() {
                  g({
                    type: SET_RESIZE,
                    payload: { width: null, height: null, ratioUnlocked: !1 },
                  });
                  var a = (l.width && l.height && l) || j;
                  g({
                    type: ZOOM_CANVAS,
                    payload: { factor: getZoomFitFactor(a, a) },
                  });
                },
          disabled: r || t,
          title: p("resetSize"),
        },
        p("reset")
      )
  );
};
Resize.defaultProps = {
  onChange: void 0,
  currentSize: {},
  hideResetButton: !1,
  alignLeft: !1,
};
export default Resize;