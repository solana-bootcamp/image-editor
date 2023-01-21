import styled from "styled-components";
import Button from "@scaleflex/ui/core/button";
import Label from "@scaleflex/ui/core/label";
var StyledOpenMenuButton = styled(Button).withConfig({
    componentId: "sc-ldar2z-0",
  })(["margin:0 0 0 6px;padding:0;"]),
  StyledMenuItemIcon = styled.div.withConfig({ componentId: "sc-ldar2z-1" })([
    "margin-right:6px;svg,span{vertical-align:middle;}",
  ]),
  StyledRatioDescription = styled(Label).withConfig({
    componentId: "sc-ldar2z-2",
  })(["margin-left:4px;cursor:pointer;"]);
export { StyledOpenMenuButton, StyledMenuItemIcon, StyledRatioDescription };