import defaultConfig from "../context/defaultConfig";
import getInitialAppState from "../context/getInitialAppState";
var extractCurrentDesignState = function (a, b) {
  var c = getInitialAppState(b ? a : defaultConfig);
  return {
    imgSrc: a.imgSrc || c.imgSrc,
    finetunes: a.finetunes || c.finetunes,
    finetunesProps: a.finetunesProps || c.finetunesProps,
    filter: a.filter || c.filter,
    adjustments: a.adjustments || c.adjustments,
    annotations: a.annotations || c.annotations,
    resize: a.resize || c.resize,
  };
};
export default extractCurrentDesignState;
