import React from "react";
import RotationSlider from "@scaleflex/ui/core/rotation-slider";
import RotationLeft from "@scaleflex/icons/rotation-left";
import RotationRight from "@scaleflex/icons/rotation-right";
import { useDebouncedCallback, useStore } from "../../../hooks";
import { CHANGE_ROTATION, SET_RESIZE } from "../../../actions";
import restrictNumber from "../../../utils/restrictNumber";
import getSizeAfterRotation from "../../../utils/getSizeAfterRotation";
import { TOOLS_IDS } from "../../../utils/constants";
import ToolsBarItemButton from "../../ToolsBar/ToolsBarItemButton";
var RotateOptions = function () {
  var a = useStore(),
    b = a.dispatch,
    c = a.adjustments.rotation,
    d = void 0 === c ? 0 : c,
    e = a.resize,
    f = void 0 === e ? {} : e,
    g = a.config,
    h = g[TOOLS_IDS.ROTATE],
    i = useDebouncedCallback(function (a, c) {
      var d = restrictNumber(c, -180, 180);
      if (
        (b({ type: CHANGE_ROTATION, payload: { rotation: d } }),
        f.width && f.height)
      ) {
        var e = getSizeAfterRotation(f.width, f.height, d);
        b({ type: SET_RESIZE, payload: { width: e.width, height: e.height } });
      }
    }, 20);
  return "buttons" === h.componentType
    ? React.createElement(
        React.Fragment,
        null,
        React.createElement(ToolsBarItemButton, {
          className: "FIE_rotate_button_left",
          id: TOOLS_IDS.IMAGE,
          label: "-".concat(h.angle, "\xB0"),
          Icon: RotationLeft,
          onClick: function changeRotationButtonNegative(a) {
            var b = d - h.angle;
            i(a, b);
          },
        }),
        React.createElement(ToolsBarItemButton, {
          className: "FIE_rotate_button_right",
          id: TOOLS_IDS.IMAGE,
          label: "+".concat(h.angle, "\xB0"),
          Icon: RotationRight,
          onClick: function changeRotationButtonPositive(a) {
            var b = d + h.angle;
            i(a, b);
          },
        })
      )
    : React.createElement(RotationSlider, {
        className: "FIE_rotate-slider",
        min: -180,
        max: 180,
        value: d,
        angle: h.angle || 90,
        onChange: i,
        style: { marginBottom: 20 },
      });
};
export default RotateOptions;