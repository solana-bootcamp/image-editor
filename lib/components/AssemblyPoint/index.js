import React, { memo } from "react";
import ThemeProvider from "@scaleflex/ui/theme";
import App from "../App";
import { AppProvider } from "../../context";
import defaultConfig from "../../context/defaultConfig";
import deepMerge from "../../utils/deepMerge";
import { FontsFaces, OverrideDefaultStyles } from "./globalStyles";
var AssemblyPoint = function (a) {
  var b = a.img,
    c = a.source,
    d = a.useCloudimage,
    e = a.cloudimage;
  if (b)
    throw new Error(
      "`img` is renamed to `source` please consider renaming it from your configurations."
    );
  if (!c || ("string" != typeof c && !(c instanceof HTMLImageElement)))
    throw new Error(
      "`source` property is required either a string of image url or a HTMLImageElement for the image that will be edited."
    );
  if (d) {
    var f, g;
    if (
      null !== e &&
      void 0 !== e &&
      null !== (f = e.imageSealing) &&
      void 0 !== f &&
      f.enable &&
      !(
        null !== e &&
        void 0 !== e &&
        null !== (g = e.imageSealing) &&
        void 0 !== g &&
        g.salt
      )
    )
      throw new Error(
        "`salt` property of imageSealing object is required in cloudimage mode as long as `imageSealing` is enabled."
      );
  }
  var h = deepMerge(defaultConfig, a);
  return React.createElement(
    React.StrictMode,
    null,
    React.createElement(
      ThemeProvider,
      { theme: h.theme },
      React.createElement(FontsFaces, null),
      React.createElement(OverrideDefaultStyles, null),
      React.createElement(
        AppProvider,
        { config: h },
        React.createElement(App, null)
      )
    )
  );
};
AssemblyPoint.defaultProps = { useCloudimage: !1, cloudimage: {}, img: void 0 };
export default memo(AssemblyPoint);