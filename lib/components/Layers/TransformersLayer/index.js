import React from "react";
import { Layer } from "react-konva";
import { useStore } from "../../../hooks";
import { TOOLS_IDS, TRANSFORMERS_LAYER_ID } from "../../../utils/constants";
import CropTransformer from "./CropTransformer";
import NodesTransformer from "./NodesTransformer";
var TransformersLayer = function () {
  var a = useStore(),
    b = a.toolId,
    c = a.shownImageDimensions;
  return React.createElement(
    Layer,
    { id: TRANSFORMERS_LAYER_ID, x: c.abstractX || 0, y: c.abstractY || 0 },
    React.createElement(NodesTransformer, null),
    b === TOOLS_IDS.CROP && React.createElement(CropTransformer, null)
  );
};
export default TransformersLayer;
