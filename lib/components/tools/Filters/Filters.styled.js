import Label from "@scaleflex/ui/core/label";
import { Stage } from "react-konva";
import styled from "styled-components";
var StyledFilterItem = styled.div.withConfig({ componentId: "sc-oxugzy-0" })([
    "display:inline-flex;flex-direction:column;align-items:center;justify-content:center;margin:0 4px;padding:2px;cursor:pointer;border-radius:2px;canvas{border-radius:2px;}",
  ]),
  FilterItemPreview = styled(Stage).withConfig({ componentId: "sc-oxugzy-1" })(
    [
      "[aria-selected='true'] &{padding:1px;border:2px solid ",
      ";border-radius:2px;}",
    ],
    function (a) {
      var b = a.theme;
      return b.palette["accent-primary-active"];
    }
  ),
  FilterItemLabel = styled(Label).withConfig({ componentId: "sc-oxugzy-2" })(
    [
      "margin-top:6px;font-size:11px;line-height:12px;[aria-selected='true'] &{color:",
      ";}",
    ],
    function (a) {
      var b = a.theme;
      return b.palette["accent-primary-active"];
    }
  );
export { StyledFilterItem, FilterItemPreview, FilterItemLabel };