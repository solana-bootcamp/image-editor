import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from "react";
import { useAnnotation } from "../../../hooks";
import { TOOLS_IDS } from "../../../utils/constants";
import AnnotationOptions from "../../common/AnnotationOptions";
import {
  polygonOptionsPopupComponents,
  POLYGON_POPPABLE_OPTIONS,
} from "./Polygon.constants";
var PolygonOptions = function (a) {
  var b = a.t,
    c = useAnnotation({ name: TOOLS_IDS.POLYGON }),
    d = _slicedToArray(c, 2),
    e = d[0],
    f = d[1];
  return React.createElement(AnnotationOptions, {
    className: "FIE_polygon-tool-options",
    morePoppableOptionsPrepended: POLYGON_POPPABLE_OPTIONS,
    moreOptionsPopupComponentsObj: polygonOptionsPopupComponents,
    annotation: e,
    updateAnnotation: f,
    t: b,
    hidePositionField: !0,
  });
};
export default PolygonOptions;
