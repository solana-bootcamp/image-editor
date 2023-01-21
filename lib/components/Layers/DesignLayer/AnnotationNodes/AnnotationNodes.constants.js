import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _ANNOTATION_NAMES_TO_;
import { TOOLS_IDS } from "../../../../utils/constants";
import RectNode from "./RectNode";
import EllipseNode from "./EllipseNode";
import PolygonNode from "./PolygonNode";
import TextNode from "./TextNode";
import ImageNode from "./ImageNode";
import LineNode from "./LineNode";
import ArrowNode from "./ArrowNode";
export var ANNOTATION_NAMES_TO_COMPONENT =
  ((_ANNOTATION_NAMES_TO_ = {}),
  _defineProperty(_ANNOTATION_NAMES_TO_, TOOLS_IDS.RECT, RectNode),
  _defineProperty(_ANNOTATION_NAMES_TO_, TOOLS_IDS.ELLIPSE, EllipseNode),
  _defineProperty(_ANNOTATION_NAMES_TO_, TOOLS_IDS.POLYGON, PolygonNode),
  _defineProperty(_ANNOTATION_NAMES_TO_, TOOLS_IDS.TEXT, TextNode),
  _defineProperty(_ANNOTATION_NAMES_TO_, TOOLS_IDS.IMAGE, ImageNode),
  _defineProperty(_ANNOTATION_NAMES_TO_, TOOLS_IDS.LINE, LineNode),
  _defineProperty(_ANNOTATION_NAMES_TO_, TOOLS_IDS.ARROW, ArrowNode),
  _defineProperty(_ANNOTATION_NAMES_TO_, TOOLS_IDS.PEN, LineNode),
  _ANNOTATION_NAMES_TO_);