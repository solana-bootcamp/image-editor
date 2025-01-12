import _defineProperty from "@babel/runtime/helpers/defineProperty";
import PolygonSides from "@scaleflex/icons/polygon-sides";
import PolygonSidesField from "./PolygonSidesField";
export var SIDES_NUMBER = "sides-number";
export var POLYGON_POPPABLE_OPTIONS = [
  { titleKey: "sides", name: "sides-number", Icon: PolygonSides },
];
export var polygonOptionsPopupComponents = _defineProperty(
  {},
  "sides-number",
  PolygonSidesField
);
