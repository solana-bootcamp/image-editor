import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from "react";
import { useAnnotation } from "../../../hooks";
import { TOOLS_IDS } from "../../../utils/constants";
import AnnotationOptions from "../../common/AnnotationOptions";
var LineOptions = function (a) {
  var b = a.t,
    c = useAnnotation({ name: TOOLS_IDS.LINE }),
    d = _slicedToArray(c, 2),
    e = d[0],
    f = d[1];
  return React.createElement(AnnotationOptions, {
    className: "FIE_line-tool-options",
    annotation: e,
    updateAnnotation: f,
    t: b,
    hidePositionField: !0,
    hideFillOption: !0,
  });
};
export default LineOptions;
