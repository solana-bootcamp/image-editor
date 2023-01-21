import styled from "styled-components";
import ColorPicker from "@scaleflex/ui/core/color-picker";
var StyledPickerTrigger = styled.div
    .attrs(function (a) {
      var b = a.$color;
      return {
        style: {
          background:
            "rgba(0,0,0,0)" === b
              ? "repeating-conic-gradient(#5d6d7e 0% 25%, transparent 0% 50%) 50% / 8px 8px"
              : b,
        },
      };
    })
    .withConfig({ componentId: "sc-zmv0gj-0" })(
    [
      "background:",
      ";border-radius:2px;width:24px;height:24px;border:2px solid ",
      ";cursor:pointer;box-sizing:border-box;",
    ],
    function (a) {
      var b = a.theme;
      return b.palette["icons-primary"];
    },
    function (a) {
      var b = a.theme;
      return b.palette["borders-strong"];
    }
  ),
  StyledColorPicker = styled(ColorPicker).withConfig({
    componentId: "sc-zmv0gj-1",
  })(["max-width:212px;"]);
export { StyledPickerTrigger, StyledColorPicker };