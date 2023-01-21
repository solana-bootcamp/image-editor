import React from "react";
import AnnotationOptions from "../../common/AnnotationOptions";
var ImageControls = function (a) {
  var b = a.image,
    c = a.saveImage,
    d = a.children,
    e = a.t;
  return React.createElement(
    AnnotationOptions,
    {
      className: "FIE_image-tool-options",
      annotation: b,
      updateAnnotation: c,
      t: e,
      hideFillOption: !0,
    },
    d
  );
};
ImageControls.defaultProps = { children: null };
export default ImageControls;