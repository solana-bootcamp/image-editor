import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useState } from "react";
import Popper from "@scaleflex/ui/core/popper";
import { useStore } from "../../../hooks";
import { SET_LATEST_COLOR } from "../../../actions";
import { StyledColorPicker, StyledPickerTrigger } from "./ColorInput.styled";
var pinnedColorsKey = "FIE_pinnedColors",
  ColorInput = function (a) {
    var b,
      c = a.position,
      d = void 0 === c ? "top" : c,
      e = a.onChange,
      f = a.color,
      g = useStore(),
      h = g.selectionsIds,
      i = void 0 === h ? [] : h,
      j = g.config.annotationsCommon,
      k = void 0 === j ? {} : j,
      l = g.dispatch,
      m = g.latestColor,
      n = useState(),
      o = _slicedToArray(n, 2),
      p = o[0],
      q = o[1],
      r = useState(function () {
        return m || f || k.fill;
      }),
      s = _slicedToArray(r, 2),
      t = s[0],
      u = s[1],
      v = useState(
        null !== (b = window) && void 0 !== b && b.localStorage
          ? JSON.parse(localStorage.getItem(pinnedColorsKey) || "[]")
          : []
      ),
      w = _slicedToArray(v, 2),
      x = w[0],
      y = w[1],
      z = function (a) {
        var b;
        if (null !== (b = window) && void 0 !== b && b.localStorage) {
          var c = window.localStorage.getItem(pinnedColorsKey);
          if (JSON.stringify(a) !== c) {
            var d = a.slice(-9);
            window.localStorage.setItem(pinnedColorsKey, JSON.stringify(d)),
              y(d);
          }
        }
      },
      A = function (a) {
        q(p ? null : a.currentTarget);
      };
    return (
      useEffect(
        function () {
          var a = (0 === i.length && m) || f;
          u(a), e(a);
        },
        [f, i]
      ),
      React.createElement(
        React.Fragment,
        null,
        React.createElement(StyledPickerTrigger, {
          className: "FIE_color-picker-triggerer",
          onClick: A,
          $color: t,
          onChange: e,
        }),
        React.createElement(
          Popper,
          {
            className: "FIE_color-picker",
            anchorEl: p,
            open: !!p,
            position: d,
            onClick: A,
            overlay: !0,
            zIndex: 11111,
          },
          React.createElement(StyledColorPicker, {
            onChange: function changeColor(a, b, c) {
              u(b),
                e(b),
                z(c),
                m !== b &&
                  l({ type: SET_LATEST_COLOR, payload: { latestColor: b } });
            },
            defaultColor: t,
            pinnedColors: x,
            showTransparentColor: !0,
          })
        )
      )
    );
  };
ColorInput.defaultProps = { position: "top", color: void 0 };
export default ColorInput;