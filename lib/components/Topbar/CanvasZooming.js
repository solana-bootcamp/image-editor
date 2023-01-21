import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from "react";
import Minus from "@scaleflex/icons/minus";
import Plus from "@scaleflex/icons/plus";
import Menu from "@scaleflex/ui/core/menu";
import MenuItem, { MenuItemLabel } from "@scaleflex/ui/core/menu-item";
import { ZOOM_CANVAS } from "../../actions";
import { DEFAULT_ZOOM_FACTOR, TOOLS_IDS } from "../../utils/constants";
import { useStore } from "../../hooks";
import getZoomFitFactor from "../../utils/getZoomFitFactor";
import toPrecisedFloat from "../../utils/toPrecisedFloat";
import { StyledSmallButton, StyledZoomPercentageLabel } from "./Topbar.styled";
import { ZOOM_FACTORS_PRESETS } from "./Topbar.constants";
var MULTIPLY_ZOOM_FACTOR = 1.1,
  CanvasZooming = function () {
    var a = useStore(),
      b = a.dispatch,
      c = a.zoom,
      d = void 0 === c ? {} : c,
      e = a.toolId,
      f = a.feedback,
      g = a.t,
      h = a.shownImageDimensions,
      i = a.resize,
      j = a.originalImage,
      k = a.adjustments.crop,
      l = a.config.useZoomPresetsMenu,
      m = 0 === f.duration,
      n = useState(null),
      o = _slicedToArray(n, 2),
      p = o[0],
      q = o[1],
      r = function (a) {
        b({ type: ZOOM_CANVAS, payload: { factor: a } });
      },
      s = function () {
        var a = (i.width && i.height && i) || (k.width && k.height && k) || h,
          b = getZoomFitFactor((k.width && k.height && k) || h, a);
        r(b || DEFAULT_ZOOM_FACTOR);
      },
      t = function (a) {
        q(p ? null : a.target);
      },
      u = function (a) {
        if ("fit" === a) return s(), void t();
        var b = Math.min((a * j.width) / h.width, (a * j.height) / h.height);
        r(b), t();
      },
      v = e === TOOLS_IDS.CROP || m,
      w =
        !j || i.width || i.height
          ? d.factor
          : Math.min(
              (h.width * d.factor) / j.width,
              (h.height * d.factor) / j.height
            );
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        StyledSmallButton,
        {
          onClick: function zoomOut() {
            r(d.factor / MULTIPLY_ZOOM_FACTOR);
          },
          color: "link",
          title: g("zoomOutTitle"),
          disabled: v,
          className: "FIE_topbar-zoom-out-btn",
        },
        React.createElement(Minus, null)
      ),
      React.createElement(
        StyledZoomPercentageLabel,
        {
          title: g("toggleZoomMenuTitle"),
          onClick: v ? void 0 : (l && t) || s,
          "aria-disabled": v,
          className: "FIE_topbar-zoom-label",
        },
        "".concat(toPrecisedFloat(100 * w, 0), "%")
      ),
      React.createElement(
        StyledSmallButton,
        {
          onClick: function zoomIn() {
            r(d.factor * MULTIPLY_ZOOM_FACTOR);
          },
          color: "link",
          title: g("zoomInTitle"),
          disabled: v,
          className: "FIE_topbar-zoom-in-btn",
        },
        React.createElement(Plus, null)
      ),
      React.createElement(
        Menu,
        {
          anchorEl: p,
          onClose: t,
          open: !!p,
          position: "bottom",
          className: "FIE_topbar-zoom-menu",
        },
        ZOOM_FACTORS_PRESETS.map(function (a) {
          var b = a.factor,
            c = a.labelKey,
            d = a.label;
          return React.createElement(
            MenuItem,
            {
              key: d || c,
              onClick: function onClick() {
                return u(b);
              },
            },
            React.createElement(
              MenuItemLabel,
              null,
              null !== d && void 0 !== d ? d : g(c)
            )
          );
        })
      )
    );
  };
export default CanvasZooming;