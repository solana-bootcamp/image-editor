import React from "react";
import Compare from "@scaleflex/icons/compare";
import { TOGGLE_ORIGINAL_IMAGE_DISPLAY } from "../../actions";
import { useStore } from "../../hooks";
import getProperDimensions from "../../utils/getProperDimensions";
import { StyledSmallButton, StyledDimensionsLabel } from "./Topbar.styled";
var ImageDimensionsAndDisplayToggle = function () {
  var a = useStore(),
    b = a.dispatch,
    c = a.isResetted,
    d = !(void 0 !== c) || c,
    e = a.originalImage,
    f = a.resize,
    g = void 0 === f ? {} : f,
    h = a.adjustments,
    i = h.crop,
    j = h.rotation,
    k = void 0 === j ? 0 : j,
    l = a.shownImageDimensions,
    m = a.t,
    n = function () {
      b({ type: TOGGLE_ORIGINAL_IMAGE_DISPLAY, payload: { isShow: !1 } }),
        document.removeEventListener("mouseup", n),
        document.removeEventListener("mouseleave", n),
        document.removeEventListener("touchcancel", n),
        document.removeEventListener("touchend", n);
    },
    o = function () {
      b({ type: TOGGLE_ORIGINAL_IMAGE_DISPLAY, payload: { isShow: !0 } }),
        document.addEventListener("mouseup", n),
        document.addEventListener("mouseleave", n),
        document.addEventListener("touchcancel", n),
        document.addEventListener("touchend", n);
    };
  if (!e) return null;
  var p = getProperDimensions(g, i, l, e, k);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      StyledDimensionsLabel,
      { title: m("imageDimensionsHoverTitle") },
      "".concat(p.width, " x ").concat(p.height, " px")
    ),
    React.createElement(
      StyledSmallButton,
      {
        color: "link",
        horizontalMargin: "8px",
        onMouseDown: d ? void 0 : o,
        onTouchStart: d ? void 0 : o,
        disabled: d,
        title: m("showImageTitle"),
      },
      React.createElement(Compare, null)
    )
  );
};
export default ImageDimensionsAndDisplayToggle;