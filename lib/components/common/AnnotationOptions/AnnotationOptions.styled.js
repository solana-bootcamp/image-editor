import styled from "styled-components";
import Label from "@scaleflex/ui/core/label";
var StyledOptions = styled.div.withConfig({ componentId: "sc-qvjmv1-0" })([
    "display:flex;align-items:center;justify-content:center;margin-top:8px;flex-wrap:wrap;",
  ]),
  StyledOptionPopupContent = styled.div.withConfig({
    componentId: "sc-qvjmv1-1",
  })(
    [
      "background:",
      ";box-shadow:0px 1px 2px ",
      ";border-radius:2px;overflow:visible;*{font-family:'Roboto',sans-serif;}",
    ],
    function (a) {
      var b = a.theme;
      return b.palette["bg-secondary"];
    },
    function (a) {
      var b = a.theme;
      return b.palette["light-shadow"];
    }
  ),
  StyledSpacedOptionFields = styled.div.withConfig({
    componentId: "sc-qvjmv1-2",
  })(["padding:8px 12px;"]),
  StyledHeadline = styled(Label).withConfig({ componentId: "sc-qvjmv1-3" })([
    "font-weight:500;margin-bottom:12px;",
  ]),
  StyledTwoColumnsContainer = styled.div.withConfig({
    componentId: "sc-qvjmv1-4",
  })(["display:flex;align-items:center;justify-content:space-between;"]),
  StyledColumn = styled.div.withConfig({ componentId: "sc-qvjmv1-5" })([
    "&:not(:first-child){margin-left:12px;}",
  ]),
  StyledIconWrapper = styled.div.withConfig({ componentId: "sc-qvjmv1-6" })(
    function (a) {
      var b = a.theme,
        c = a.addThinBorder,
        d = a.noMargin,
        e = a.secondaryIconColor;
      return "\n    cursor: pointer;\n    padding: 3px 6px;\n    margin: "
        .concat(
          d ? 0 : "0 4px",
          ";\n    display: inline-block;\n\n    svg {\n      vertical-align: middle;\n      margin: 0 auto;\n    }\n\n    "
        )
        .concat(
          c
            ? "border: 0.5px solid ".concat(b.palette["borders-secondary"])
            : "",
          ";\n    color: "
        )
        .concat(
          e ? "#959DA8" : "",
          ";\n\n    &[aria-selected='true'] {\n      background: "
        )
        .concat(
          b.palette["bg-primary-active"],
          ";\n\n      * {\n        color: "
        )
        .concat(
          b.palette["accent-primary-active"],
          ";\n      }\n    }\n\n    :hover {\n      background: "
        )
        .concat(b.palette["bg-primary-active"], ";\n    }\n  ");
    }
  );
export {
  StyledHeadline,
  StyledTwoColumnsContainer,
  StyledColumn,
  StyledIconWrapper,
  StyledSpacedOptionFields,
  StyledOptions,
  StyledOptionPopupContent,
};