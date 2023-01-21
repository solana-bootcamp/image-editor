import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _posCssRotateDegFromR;
import { POSITIONS } from "../../../utils/constants";
export var AVAILABLE_POSITIONS = Object.values(POSITIONS);
export var posCssRotateDegFromRightSide =
  ((_posCssRotateDegFromR = {}),
  _defineProperty(_posCssRotateDegFromR, POSITIONS.TOP_LEFT, -145),
  _defineProperty(_posCssRotateDegFromR, POSITIONS.TOP_CENTER, -90),
  _defineProperty(_posCssRotateDegFromR, POSITIONS.TOP_RIGHT, -45),
  _defineProperty(_posCssRotateDegFromR, POSITIONS.MIDDLE_LEFT, 180),
  _defineProperty(_posCssRotateDegFromR, POSITIONS.MIDDLE_CENTER, 0),
  _defineProperty(_posCssRotateDegFromR, POSITIONS.MIDDLE_RIGHT, 0),
  _defineProperty(_posCssRotateDegFromR, POSITIONS.BOTTOM_LEFT, 135),
  _defineProperty(_posCssRotateDegFromR, POSITIONS.BOTTOM_CENTER, 90),
  _defineProperty(_posCssRotateDegFromR, POSITIONS.BOTTOM_RIGHT, 45),
  _posCssRotateDegFromR);
export var POPPABLE_OPTIONS = {
  OPACITY: "opacity",
  STROKE: "stroke",
  SHADOW: "shadow",
  POSITION: "position",
};