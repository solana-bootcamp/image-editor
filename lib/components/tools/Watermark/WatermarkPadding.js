import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from "react";
import Menu from "@scaleflex/ui/core/menu";
import Label from "@scaleflex/ui/core/label";
import Padding from "@scaleflex/icons/padding";
import restrictNumber from "../../../utils/restrictNumber";
import {
  StyledSpacedOptionFields,
  StyledIconWrapper,
  StyledOptionPopupContent,
} from "../../common/AnnotationOptions/AnnotationOptions.styled";
import Slider from "../../common/Slider";
var WatermarkPadding = function (a) {
  var b = a.watermark,
    c = a.saveWatermark,
    d = a.t,
    e = useState(null),
    f = _slicedToArray(e, 2),
    g = f[0],
    h = f[1],
    i = b.padding;
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      StyledIconWrapper,
      {
        className: "FIE_watermark-padding-triggerer",
        title: d("padding"),
        onClick: function openOptionPopup(a) {
          h(a.currentTarget);
        },
      },
      React.createElement(Padding, { size: 18 })
    ),
    React.createElement(
      Menu,
      {
        className: "FIE_watermark-padding-popup",
        anchorEl: g,
        open: !!g,
        onClose: function closeOptionPopup() {
          h(null);
        },
        position: "top",
      },
      React.createElement(
        StyledOptionPopupContent,
        null,
        React.createElement(
          StyledSpacedOptionFields,
          null,
          React.createElement(Label, null, d("padding")),
          React.createElement(Slider, {
            annotation: "px",
            onChange: function updatePadding(a) {
              c({ padding: restrictNumber(a, 0, 100) });
            },
            value: i,
          })
        )
      )
    )
  );
};
export default WatermarkPadding;