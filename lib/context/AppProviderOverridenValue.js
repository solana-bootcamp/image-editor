import React from "react";
import AppContext from "./AppContext";
var AppProviderOverridenValue = function (a) {
  var b = a.children,
    c = a.overridingValue;
  return React.createElement(AppContext.Provider, { value: c }, b);
};
export default AppProviderOverridenValue;
