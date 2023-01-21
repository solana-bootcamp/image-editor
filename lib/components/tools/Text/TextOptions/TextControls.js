import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { useCallback, useEffect } from "react";
import MenuItem from "@scaleflex/ui/core/menu-item";
import FontBold from "@scaleflex/icons/font-bold";
import FontItalic from "@scaleflex/icons/font-italic";
import { TOOLS_IDS, TRANSFORMERS_LAYER_ID } from "../../../../utils/constants";
import AnnotationOptions from "../../../common/AnnotationOptions";
import { StyledIconWrapper } from "../../../common/AnnotationOptions/AnnotationOptions.styled";
import { ENABLE_TEXT_CONTENT_EDIT } from "../../../../actions";
import restrictNumber from "../../../../utils/restrictNumber";
import { useStore } from "../../../../hooks";
import {
  StyledFontFamilySelect,
  StyledFontSizeInput,
} from "./TextOptions.styled";
import {
  textOptionsPopupComponents,
  TEXT_POPPABLE_OPTIONS,
} from "./TextOptions.constants";
import {
  activateTextChange,
  deactivateTextChange,
} from "./handleTextChangeArea";
var TextControls = function (a) {
  var b = a.text,
    c = a.saveText,
    d = a.children,
    e = useStore(),
    f = e.dispatch,
    g = e.textIdOfEditableContent,
    h = e.designLayer,
    i = e.t,
    j = e.config,
    k = j.useCloudimage,
    l = j[TOOLS_IDS.TEXT],
    m = l.fonts,
    n = void 0 === m ? [] : m,
    o = l.onFontChange,
    p = useCallback(
      function (a) {
        var b = a.target,
          d = b.name,
          e = b.value,
          f = b.type;
        c(function (a) {
          return _defineProperty(
            { id: a.id },
            d,
            "number" === f ? restrictNumber(e, 1, 500) : e
          );
        });
      },
      [c]
    ),
    q = useCallback(
      function (a) {
        if (
          (p({ target: { name: "fontFamily", value: a } }),
          b.fontFamily !== a && "function" == typeof o)
        ) {
          var c = h.draw.bind(h);
          o(a, c);
        }
      },
      [p, b, h]
    ),
    r = useCallback(
      function (a) {
        var c,
          d =
            (null === (c = b.fontStyle) || void 0 === c
              ? void 0
              : c.replace("normal", "").split(" ")) || [];
        0 < Object.keys(d).length && d.includes(a)
          ? (d = d.filter(function (b) {
              return b !== a;
            }))
          : d.push(a),
          p({
            target: {
              name: "fontStyle",
              value: d.join(" ").trim() || "normal",
            },
          });
      },
      [b]
    ),
    s = useCallback(function () {
      f({
        type: ENABLE_TEXT_CONTENT_EDIT,
        payload: { textIdOfEditableContent: null },
      });
    }, []),
    t = useCallback(function (a) {
      p({ target: { name: "text", value: a } }), s();
    }, []);
  return (
    useEffect(
      function () {
        var a;
        if (g && b.id === g) {
          var c = h.getStage(),
            d = _slicedToArray(
              c.findOne("#".concat(TRANSFORMERS_LAYER_ID)).children,
              1
            );
          (a = d[0]), activateTextChange(g, c, a, t, s);
        }
        return function () {
          a && g && deactivateTextChange();
        };
      },
      [g]
    ),
    React.createElement(
      AnnotationOptions,
      {
        className: "FIE_text-tool-options",
        annotation: b,
        updateAnnotation: c,
        morePoppableOptionsPrepended: k ? [] : TEXT_POPPABLE_OPTIONS,
        moreOptionsPopupComponentsObj: k ? {} : textOptionsPopupComponents,
        t: i,
      },
      Array.isArray(n) &&
        1 < n.length &&
        React.createElement(
          StyledFontFamilySelect,
          {
            className: "FIE_text-font-family-option",
            onChange: q,
            value: b.fontFamily,
            placeholder: i("fontFamily"),
            size: "sm",
          },
          n.map(function () {
            var a,
              b,
              c,
              d =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
            return React.createElement(
              MenuItem,
              {
                className: "FIE_text-font-family-item",
                key: null !== (a = d.value) && void 0 !== a ? a : d,
                value: null !== (b = d.value) && void 0 !== b ? b : d,
              },
              null !== (c = d.label) && void 0 !== c ? c : d
            );
          })
        ),
      React.createElement(StyledFontSizeInput, {
        className: "FIE_text-size-option",
        value: b.fontSize || "",
        name: "fontSize",
        onChange: p,
        inputMode: "numeric",
        type: "number",
        size: "sm",
        placeholder: i("size"),
      }),
      !k &&
        React.createElement(
          React.Fragment,
          null,
          React.createElement(
            StyledIconWrapper,
            {
              className: "FIE_text-bold-option",
              "aria-selected": (b.fontStyle || "").includes("bold"),
              onClick: function onClick() {
                return r("bold");
              },
            },
            React.createElement(FontBold, null)
          ),
          React.createElement(
            StyledIconWrapper,
            {
              className: "FIE_text-italic-option",
              "aria-selected": (b.fontStyle || "").includes("italic"),
              onClick: function onClick() {
                return r("italic");
              },
            },
            React.createElement(FontItalic, null)
          )
        ),
      d
    )
  );
};
TextControls.defaultProps = { children: null };
export default TextControls;