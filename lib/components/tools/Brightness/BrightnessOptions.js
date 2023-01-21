import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from "react";
import Konva from "konva";
import { useFinetune } from "../../../hooks";
import restrictNumber from "../../../utils/restrictNumber";
import Slider from "../../common/Slider";
var MIN_VALUE = -1,
  DEFAULT_VALUE = { brightness: 0 },
  MAX_VALUE = 1,
  sliderStyle = { width: 150, padding: 0 },
  BrightnessOptions = function () {
    var a,
      b = useFinetune(Konva.Filters.Brighten, DEFAULT_VALUE),
      c = _slicedToArray(b, 2),
      d = c[0],
      e = c[1];
    return React.createElement(Slider, {
      className: "FIE_brightness-option",
      min: MIN_VALUE,
      step: 0.05,
      max: MAX_VALUE,
      value:
        null !== (a = d.brightness) && void 0 !== a
          ? a
          : DEFAULT_VALUE.brightness,
      onChange: function changeValue(a) {
        e({ brightness: restrictNumber(a, MIN_VALUE, MAX_VALUE) });
      },
      style: sliderStyle,
    });
  };
export default BrightnessOptions;