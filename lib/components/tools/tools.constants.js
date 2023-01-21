import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _TOOLS_ITEMS, _TABS_TOOLS;
import { TABS_IDS, TOOLS_IDS } from "../../utils/constants";
import { Brightness, BrightnessOptions } from "./Brightness";
import { Crop } from "./Crop";
import { FlipX, FlipY } from "./Flip";
import { RotateButton, RotateOptions } from "./Rotate";
import { Contrast, ContrastOptions } from "./Contrast";
import { HSV, HSVOptions } from "./HSV";
import { Blur, BlurOptions } from "./Blur";
import { Warmth, WarmthOptions } from "./Warmth";
import { Filters } from "./Filters";
import { TextButton, TextOptions } from "./Text";
import { ImageButton, ImageOptions } from "./Image";
import { RectButton, RectOptions } from "./Rect";
import { EllipseButton, EllipseOptions } from "./Ellipse";
import { PenButton, PenOptions } from "./Pen";
import { LineButton, LineOptions } from "./Line";
import { ArrowButton, ArrowOptions } from "./Arrow";
import { PolygonButton, PolygonOptions } from "./Polygon";
import { Resize } from "./Resize";
import { Watermark } from "./Watermark";
export var TOOLS_ITEMS =
  ((_TOOLS_ITEMS = {}),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.CROP, {
    id: TOOLS_IDS.CROP,
    Item: Crop,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.ROTATE, {
    id: TOOLS_IDS.ROTATE,
    Item: RotateButton,
    ItemOptions: RotateOptions,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.FLIP_X, {
    id: TOOLS_IDS.FLIP_X,
    Item: FlipX,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.FLIP_Y, {
    id: TOOLS_IDS.FLIP_Y,
    Item: FlipY,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.BRIGHTNESS, {
    id: TOOLS_IDS.BRIGHTNESS,
    Item: Brightness,
    ItemOptions: BrightnessOptions,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.CONTRAST, {
    id: TOOLS_IDS.CONTRAST,
    Item: Contrast,
    ItemOptions: ContrastOptions,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.HSV, {
    id: TOOLS_IDS.HSV,
    Item: HSV,
    ItemOptions: HSVOptions,
    hideFn: function hideFn(a) {
      var b = a.useCloudimage;
      return b;
    },
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.BLUR, {
    id: TOOLS_IDS.BLUR,
    Item: Blur,
    ItemOptions: BlurOptions,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.WARMTH, {
    id: TOOLS_IDS.WARMTH,
    Item: Warmth,
    ItemOptions: WarmthOptions,
    hideFn: function hideFn(a) {
      var b = a.useCloudimage;
      return b;
    },
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.FILTERS, {
    id: TOOLS_IDS.FILTERS,
    Item: Filters,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.WATERMARK, {
    id: TOOLS_IDS.WATERMARK,
    Item: Watermark,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.TEXT, {
    id: TOOLS_IDS.TEXT,
    Item: TextButton,
    ItemOptions: TextOptions,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.IMAGE, {
    id: TOOLS_IDS.IMAGE,
    Item: ImageButton,
    ItemOptions: ImageOptions,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.RECT, {
    id: TOOLS_IDS.RECT,
    Item: RectButton,
    ItemOptions: RectOptions,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.POLYGON, {
    id: TOOLS_IDS.POLYGON,
    Item: PolygonButton,
    ItemOptions: PolygonOptions,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.ELLIPSE, {
    id: TOOLS_IDS.ELLIPSE,
    Item: EllipseButton,
    ItemOptions: EllipseOptions,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.PEN, {
    id: TOOLS_IDS.PEN,
    Item: PenButton,
    ItemOptions: PenOptions,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.LINE, {
    id: TOOLS_IDS.LINE,
    Item: LineButton,
    ItemOptions: LineOptions,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.ARROW, {
    id: TOOLS_IDS.ARROW,
    Item: ArrowButton,
    ItemOptions: ArrowOptions,
  }),
  _defineProperty(_TOOLS_ITEMS, TOOLS_IDS.RESIZE, {
    id: TOOLS_IDS.RESIZE,
    Item: Resize,
  }),
  _TOOLS_ITEMS);
export var TABS_TOOLS =
  ((_TABS_TOOLS = {}),
  _defineProperty(_TABS_TOOLS, TABS_IDS.ADJUST, [
    TOOLS_IDS.CROP,
    TOOLS_IDS.ROTATE,
    TOOLS_IDS.FLIP_X,
    TOOLS_IDS.FLIP_Y,
  ]),
  _defineProperty(_TABS_TOOLS, TABS_IDS.FINETUNE, [
    TOOLS_IDS.BRIGHTNESS,
    TOOLS_IDS.CONTRAST,
    TOOLS_IDS.HSV,
    TOOLS_IDS.BLUR,
    TOOLS_IDS.WARMTH,
  ]),
  _defineProperty(_TABS_TOOLS, TABS_IDS.FILTERS, [TOOLS_IDS.FILTERS]),
  _defineProperty(_TABS_TOOLS, TABS_IDS.WATERMARK, [TOOLS_IDS.WATERMARK]),
  _defineProperty(_TABS_TOOLS, TABS_IDS.ANNOTATE, [
    TOOLS_IDS.IMAGE,
    TOOLS_IDS.TEXT,
    TOOLS_IDS.RECT,
    TOOLS_IDS.ELLIPSE,
    TOOLS_IDS.POLYGON,
    TOOLS_IDS.PEN,
    TOOLS_IDS.LINE,
    TOOLS_IDS.ARROW,
  ]),
  _defineProperty(_TABS_TOOLS, TABS_IDS.RESIZE, [TOOLS_IDS.RESIZE]),
  _TABS_TOOLS);