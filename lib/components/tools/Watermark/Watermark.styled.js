import styled from "styled-components";
var StyledWatermarkWrapper = styled.div.withConfig({
    componentId: "sc-fvaj5j-0",
  })(
    [
      "display:flex;align-items:center;justify-content:center;flex-wrap:wrap;overflow:hidden;",
      ";",
    ],
    function (a) {
      var b = a.noWrap;
      return b ? "margin-left: 4px; flex-wrap: nowrap;" : "";
    }
  ),
  StyledControlsWrapper = styled.div.withConfig({ componentId: "sc-fvaj5j-1" })(
    ["margin-bottom:8px;"]
  ),
  StyledWatermarkGalleryItem = styled.div.withConfig({
    componentId: "sc-fvaj5j-2",
  })(function (a) {
    var b = a.theme;
    return "\n    padding: 4px;\n    border: 1px solid "
      .concat(
        b.palette["borders-primary"],
        ";\n    width: fit-content;\n    height: 32px;\n    border-radius: 2px;\n    overflow: hidden;\n    cursor: pointer;\n\n    :hover {\n      background: "
      )
      .concat(
        b.palette["bg-primary-active"],
        ";\n    }\n\n    &[aria-selected='true'] {\n      background: "
      )
      .concat(b.palette["bg-primary-active"], ";\n      border-color: ")
      .concat(
        b.palette["accent-primary-active"],
        ";\n    }\n\n    img {\n      max-width: 100%;\n      max-height: 100%;\n    }\n  "
      );
  });
export {
  StyledWatermarkWrapper,
  StyledControlsWrapper,
  StyledWatermarkGalleryItem,
};