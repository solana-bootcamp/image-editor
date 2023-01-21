import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from "react";
import Konva from "konva";
import { useFinetune } from "../../../hooks";
import restrictNumber from "../../../utils/restrictNumber";
import Slider from "../../common/Slider";
var MIN_VALUE = 0,
  DEFAULT_VALUE = { blurRadius: 0 },
  MAX_VALUE = 100,
  sliderStyle = { width: 150, padding: 0 },
  BlurOptions = function () {
    var a,
      b = useFinetune(Konva.Filters.Blur, DEFAULT_VALUE),
      c = _slicedToArray(b, 2),
      d = c[0],
      e = c[1];
    return React.createElement(Slider, {
      className: "FIE_blur-option",
      min: MIN_VALUE,
      max: MAX_VALUE,
      value:
        null !== (a = d.blurRadius) && void 0 !== a
          ? a
          : DEFAULT_VALUE.blurRadius,
      onChange: function changeValue(a) {
        e({ blurRadius: restrictNumber(a, MIN_VALUE, MAX_VALUE) });
      },
      style: sliderStyle,
    });
  };
export default BlurOptions;