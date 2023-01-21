import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from "react";
import { useFinetune } from "../../../hooks";
import restrictNumber from "../../../utils/restrictNumber";
import { Warmth as CustomWarmth } from "../../../custom/finetunes";
import Slider from "../../common/Slider";
var MIN_VALUE = 0,
  DEFAULT_VALUE = { warmth: 0 },
  MAX_VALUE = 200,
  sliderStyle = { width: 150, padding: 0 },
  WarmthOptions = function () {
    var a,
      b = useFinetune(CustomWarmth, DEFAULT_VALUE),
      c = _slicedToArray(b, 2),
      d = c[0],
      e = c[1];
    return React.createElement(Slider, {
      className: "FIE_warmth-option",
      min: MIN_VALUE,
      max: MAX_VALUE,
      value: null !== (a = d.warmth) && void 0 !== a ? a : DEFAULT_VALUE.warmth,
      onChange: function changeValue(a) {
        e({ warmth: restrictNumber(a, MIN_VALUE, MAX_VALUE) });
      },
      style: sliderStyle,
    });
  };
export default WarmthOptions;