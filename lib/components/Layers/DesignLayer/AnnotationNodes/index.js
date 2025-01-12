import React, { useMemo } from "react";
import { useAnnotationEvents, useStore } from "../../../../hooks";
import MemoizedAnnotation from "./MemoizedAnnotation";
var AnnotationNodes = function () {
  var a = useStore(),
    b = a.annotations,
    c = void 0 === b ? {} : b,
    d = a.selectionsIds,
    e = void 0 === d ? [] : d,
    f = useAnnotationEvents();
  return useMemo(
    function () {
      return Object.values(c).map(function (a) {
        return React.createElement(MemoizedAnnotation, {
          key: a.id,
          annotation: a,
          annotationEvents: f,
          selectionsIds: e,
        });
      });
    },
    [c, f, e]
  );
};
export default AnnotationNodes;
