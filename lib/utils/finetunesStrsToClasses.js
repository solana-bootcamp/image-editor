import Konva from "konva";
import * as CustomFinetunes from "../custom/finetunes";
var finetunesStrsToClasses = function (a) {
  return Array.isArray(a) && 0 < a.length
    ? a.map(function (a) {
        return Konva.Filters[a] || CustomFinetunes[a];
      })
    : [];
};
export default finetunesStrsToClasses;
