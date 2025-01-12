import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from "react";
import { StyledHiddenUploadInput } from "./HiddenUploadInput.styled";
var HiddenUploadInput = function (a, b) {
  return React.createElement(
    StyledHiddenUploadInput,
    _extends({ type: "file", ref: b }, a)
  );
};
export default forwardRef(HiddenUploadInput);
