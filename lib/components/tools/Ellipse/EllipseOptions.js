import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from "react";
import { useAnnotation } from "../../../hooks";
import { TOOLS_IDS } from "../../../utils/constants";
import AnnotationOptions from "../../common/AnnotationOptions";
var EllipseOptions = function (a) {
  var b = a.t,
    c = useAnnotation({ name: TOOLS_IDS.ELLIPSE }),
    d = _slicedToArray(c, 2),
    e = d[0],
    f = d[1];
  return React.createElement(AnnotationOptions, {
    className: "FIE_ellipse-tool-options",
    annotation: e,
    updateAnnotation: f,
    t: b,
  });
};
export default EllipseOptions;
