export var ROOT_CONTAINER_CLASS_NAME = "FIE_root";
export var DESIGN_LAYER_ID = "FIE_design-layer";
export var TRANSFORMERS_LAYER_ID = "FIE_transformers-layer";
export var IMAGE_NODE_ID = "FIE_original-image";
export var NODES_TRANSFORMER_ID = "FIE_nodes-transformer";
export var WATERMARK_ANNOTATION_ID = "watermark";
export var TRANSLATIONS_GRID_UUID = "353297d2-40b4-4684-a875-45a2178a8157";
export var TABS_IDS = {
  FINETUNE: "Finetune",
  FILTERS: "Filters",
  ADJUST: "Adjust",
  WATERMARK: "Watermark",
  ANNOTATE: "Annotate",
  RESIZE: "Resize",
};
export var TOOLS_IDS = {
  CROP: "Crop",
  ROTATE: "Rotate",
  FLIP_X: "Flip_X",
  FLIP_Y: "Flip_Y",
  BRIGHTNESS: "Brightness",
  CONTRAST: "Contrast",
  HSV: "HueSaturationValue",
  WARMTH: "Warmth",
  BLUR: "Blur",
  THRESHOLD: "Threshold",
  POSTERIZE: "Posterize",
  PIXELATE: "Pixelate",
  NOISE: "Noise",
  FILTERS: "Filters",
  RECT: "Rect",
  ELLIPSE: "Ellipse",
  POLYGON: "Polygon",
  TEXT: "Text",
  LINE: "Line",
  IMAGE: "Image",
  ARROW: "Arrow",
  WATERMARK: "Watermark",
  PEN: "Pen",
  RESIZE: "Resize",
};
export var FLIP_DIRECTIONS = { X: "X", Y: "Y" };
export var DEFAULT_ZOOM_FACTOR = 1;
export var SUPPORTED_IMAGE_TYPES = ["png", "jpeg", "jpg", "webp"];
export var POSSIBLE_IMAGE_TYPES = [].concat(SUPPORTED_IMAGE_TYPES, [
  "svg",
  "gif",
  "avif",
  "apng",
]);
export var DEFAULT_IMAGE_TYPE = SUPPORTED_IMAGE_TYPES[0];
export var POINTER_ICONS = {
  DEFAULT: "default",
  DRAW: "crosshair",
  SELECT: "pointer",
  MOVE: "move",
  DRAG: "GRAB",
};
export var DEFAULT_ENABLED_ANCHORS = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];
export var ORIGINAL_CROP = "original";
export var CUSTOM_CROP = "custom";
export var ELLIPSE_CROP = "ellipse";
export var POSITIONS = {
  TOP_LEFT: "top-left",
  TOP_CENTER: "top-center",
  TOP_RIGHT: "top-right",
  MIDDLE_LEFT: "middle-left",
  MIDDLE_CENTER: "middle-center",
  MIDDLE_RIGHT: "middle-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_CENTER: "bottom-center",
  BOTTOM_RIGHT: "bottom-right",
};
export var MIN_CROP = { WIDTH: 14, HEIGHT: 14 };
export var CLOSING_REASONS = {
  AFTER_SAVE: "after-saving",
  CLOSE_BUTTON: "close-button-clicked",
  BACK_BUTTON: "back-button-clicked",
};
export var FEEDBACK_STATUSES = { WARNING: "warning", ERROR: "error" };