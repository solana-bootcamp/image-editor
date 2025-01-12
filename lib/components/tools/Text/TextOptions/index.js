import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from "react";
import { useAnnotation } from "../../../../hooks";
import { TOOLS_IDS } from "../../../../utils/constants";
import TextControls from "./TextControls";
var TextOptions = function (a) {
  var b = a.t,
    c = useAnnotation({ name: TOOLS_IDS.TEXT }),
    d = _slicedToArray(c, 2),
    e = d[0],
    f = d[1];
  return React.createElement(TextControls, { text: e, saveText: f, t: b });
};
export default TextOptions;
