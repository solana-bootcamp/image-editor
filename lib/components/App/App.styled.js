import styled from "styled-components";
var StyledAppWrapper = styled.div
    .attrs(function (a) {
      var b,
        c,
        d = a.$size,
        e = void 0 === d ? {} : d;
      return {
        style: {
          width: null !== (b = e.width) && void 0 !== b ? b : "100%",
          height: null !== (c = e.height) && void 0 !== c ? c : "100%",
        },
      };
    })
    .withConfig({ componentId: "sc-ugtqr7-0" })(
    [
      "display:flex;flex-direction:column;align-items:center;height:100%;max-height:100%;width:100%;max-width:100%;overflow:auto;position:relative;min-height:250px;background:",
      ";",
    ],
    function (a) {
      var b = a.theme;
      return b.palette["bg-secondary"];
    }
  ),
  StyledMainContent = styled.div.withConfig({ componentId: "sc-ugtqr7-1" })([
    "display:flex;align-items:flex-start;width:100%;padding:12px;box-sizing:border-box;height:calc(100% - 95px);flex-grow:1;[data-phone='true'] &{padding:0;}",
  ]),
  StyledCanvasAndTools = styled.div.withConfig({ componentId: "sc-ugtqr7-2" })([
    "height:100%;width:calc(100% - 80px);flex-grow:1;overflow-y:auto;display:flex;flex-direction:column;",
  ]),
  StyledPhoneToolsAndTabs = styled.div.withConfig({
    componentId: "sc-ugtqr7-3",
  })([
    "width:100%;flex-grow:1;display:flex;flex-direction:column;justify-content:flex-end;",
  ]);
export {
  StyledAppWrapper,
  StyledMainContent,
  StyledCanvasAndTools,
  StyledPhoneToolsAndTabs,
};