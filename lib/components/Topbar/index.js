import React from "react";
import Separator from "../common/Separator";
import { usePhoneScreen, useStore } from "../../hooks";
import CloseButton from "./CloseButton";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";
import UndoButton from "./UndoButton";
import RedoButton from "./RedoButton";
import ImageDimensionsAndDisplayToggle from "./ImageDimensionsAndDisplayToggle";
import CanvasZooming from "./CanvasZooming";
import {
  StyledTopbar,
  StyledFlexCenterAlignedContainer,
  StyledHistoryButtonsWrapper,
} from "./Topbar.styled";
import BackButton from "./BackButton";
var Topbar = function () {
  var a = useStore(),
    b = a.config,
    c = b.showBackButton,
    d = b.disableZooming;
  return React.createElement(
    StyledTopbar,
    { reverseDirection: c, className: "FIE_topbar" },
    React.createElement(
      StyledFlexCenterAlignedContainer,
      { reverseDirection: c, className: "FIE_topbar-buttons-wrapper" },
      React.createElement(SaveButton, null),
      React.createElement(
        StyledHistoryButtonsWrapper,
        { className: "FIE_topbar-history-buttons" },
        React.createElement(ResetButton, { margin: "0" }),
        React.createElement(UndoButton, { margin: "0" }),
        React.createElement(RedoButton, { margin: "0" })
      )
    ),
    React.createElement(
      StyledFlexCenterAlignedContainer,
      { className: "FIE_topbar-center-options" },
      React.createElement(ImageDimensionsAndDisplayToggle, null),
      !d &&
        React.createElement(
          React.Fragment,
          null,
          React.createElement(Separator, null),
          React.createElement(CanvasZooming, null)
        )
    ),
    c
      ? React.createElement(BackButton, null)
      : React.createElement(CloseButton, null)
  );
};
export default Topbar;