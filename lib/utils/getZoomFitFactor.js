import { DEFAULT_ZOOM_FACTOR } from "./constants";
var getZoomFitFactor = function (a, b) {
  return (
    Math.min(a.width / b.width, a.height / b.height) || DEFAULT_ZOOM_FACTOR
  );
};
export default getZoomFitFactor;
