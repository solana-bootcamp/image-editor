import React, { useCallback, useMemo } from "react";
import { FlipY as FlipYIcon } from "@scaleflex/icons/flip-y";
import ToolsBarItemButton from "../../ToolsBar/ToolsBarItemButton";
import { FLIP_DIRECTIONS, TOOLS_IDS } from "../../../utils/constants";
import { TOGGLE_FLIP } from "../../../actions";
import { useStore } from "../../../hooks";
var xFlipReverseSideStyle = { transform: "scaleY(-1)" },
  FlipY = function (a) {
    var b = a.selectTool,
      c = a.isSelected,
      d = a.t,
      e = useStore(),
      f = e.dispatch,
      g = e.adjustments.isFlippedY,
      h = useMemo(
        function () {
          return {
            reverseLabelOfCurrXFlipDir: g ? d("unFlipY") : d("flipY"),
            reverseIconOfCurrXFlipDir: function () {
              return React.createElement(FlipYIcon, {
                style: g ? xFlipReverseSideStyle : void 0,
              });
            },
          };
        },
        [g]
      ),
      i = h.reverseLabelOfCurrXFlipDir,
      j = h.reverseIconOfCurrXFlipDir,
      k = useCallback(function () {
        f({ type: TOGGLE_FLIP, payload: { direction: FLIP_DIRECTIONS.Y } });
      }, []),
      l = useCallback(function (a) {
        b(a), k();
      }, []);
    return React.createElement(ToolsBarItemButton, {
      className: "FIE_flip-y-tool-button",
      id: TOOLS_IDS.FLIP_Y,
      label: i,
      Icon: j,
      onClick: l,
      isSelected: c,
    });
  };
FlipY.defaultProps = { isSelected: !1 };
export default FlipY;