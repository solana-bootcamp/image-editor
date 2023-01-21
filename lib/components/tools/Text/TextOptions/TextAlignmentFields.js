import React from "react";
import AlignCenter from "@scaleflex/icons/align-center";
import AlignLeft from "@scaleflex/icons/align-left";
import {
  StyledSpacedOptionFields,
  StyledIconWrapper,
} from "../../../common/AnnotationOptions/AnnotationOptions.styled";
var rightAlignmentCssTransform = { transform: "scaleX(-1)" },
  TextAlignmentFields = function (a) {
    var b = a.annotation,
      c = a.updateAnnotation,
      d = b.align,
      e = function (a) {
        c({ align: a });
      };
    return React.createElement(
      StyledSpacedOptionFields,
      null,
      React.createElement(
        StyledIconWrapper,
        {
          onClick: function onClick() {
            return e("left");
          },
          "aria-selected": "left" === d,
        },
        React.createElement(AlignLeft, null)
      ),
      React.createElement(
        StyledIconWrapper,
        {
          onClick: function onClick() {
            return e("center");
          },
          "aria-selected": "center" === d,
        },
        React.createElement(AlignCenter, null)
      ),
      React.createElement(
        StyledIconWrapper,
        {
          onClick: function onClick() {
            return e("right");
          },
          "aria-selected": "right" === d,
        },
        React.createElement(AlignLeft, { style: rightAlignmentCssTransform })
      )
    );
  };
export default TextAlignmentFields;