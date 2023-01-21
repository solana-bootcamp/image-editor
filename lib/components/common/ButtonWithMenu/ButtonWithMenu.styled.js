import styled from "styled-components";
import Button from "@scaleflex/ui/core/button";
import IconButton from "@scaleflex/ui/core/icon-button";
var StyledButtonWrapper = styled.div.withConfig({ componentId: "sc-m9ezm7-0" })(
    ["height:22px;display:flex;align-items:center;margin-right:4px;"]
  ),
  StyledMainButton = styled(Button).withConfig({ componentId: "sc-m9ezm7-1" })(
    [
      "height:100%;padding:4px 8px;flex-grow:1;justify-content:center;align-items:center;",
      ";span{font-size:12px !important;line-height:14px !important;}",
    ],
    function (a) {
      var b = a.keepBorderRadius;
      return b
        ? ""
        : "border-top-right-radius: 0; border-bottom-right-radius: 0";
    }
  ),
  StyledMenuButton = styled(IconButton).withConfig({
    componentId: "sc-m9ezm7-2",
  })([
    "border-top-left-radius:0;border-bottom-left-radius:0;margin-left:1px;height:100%;padding:4px 8px;svg{transform:rotate(-90deg);width:10px;margin-top:-4px;}",
  ]);
export { StyledButtonWrapper, StyledMainButton, StyledMenuButton };