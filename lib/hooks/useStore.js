import { useContext } from "react";
import AppContext from "../context";
var useStore = function () {
  return useContext(AppContext);
};
export default useStore;
