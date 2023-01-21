import React from "react";
import Label from "@scaleflex/ui/core/label";
import { StyledSpacedOptionFields } from "../../common/AnnotationOptions/AnnotationOptions.styled";
import restrictNumber from "../../../utils/restrictNumber";
import Slider from "../../common/Slider";
var MIN_VALUE = 3,
  MAX_VALUE = 25,
  PolygonSidesField = function (a) {
    var b = a.annotation,
      c = a.updateAnnotation,
      d = a.t,
      e = b.sides;
    return React.createElement(
      StyledSpacedOptionFields,
      null,
      React.createElement(Label, null, d("sides")),
      React.createElement(Slider, {
        annotation: "",
        onChange: function updateSidesNumber(a) {
          c({ sides: restrictNumber(a, MIN_VALUE, MAX_VALUE) });
        },
        value: e,
        min: MIN_VALUE,
        max: MAX_VALUE,
      })
    );
  };
export default PolygonSidesField;