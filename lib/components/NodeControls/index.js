import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useMemo, useState } from "react";
import IconButton from "@scaleflex/ui/core/icon-button";
import DeleteOutline from "@scaleflex/icons/delete-outline";
import Duplicate from "@scaleflex/icons/duplicate";
import { useStore } from "../../hooks";
import { DUPLICATE_ANNOTATIONS, REMOVE_ANNOTATIONS } from "../../actions";
import {
  NODES_TRANSFORMER_ID,
  WATERMARK_ANNOTATION_ID,
} from "../../utils/constants";
import debounce from "../../utils/debounce";
import { StyledNodeControls } from "./NodeControls.styled";
var NodeControls = function () {
  var a = useStore(),
    b = a.selectionsIds,
    c = void 0 === b ? [] : b,
    d = a.designLayer,
    e = a.annotations,
    f = a.dispatch,
    g = useState({ left: 0, top: 0 }),
    h = _slicedToArray(g, 2),
    i = h[0],
    j = h[1],
    k = useMemo(
      function () {
        var a;
        return null === d ||
          void 0 === d ||
          null === (a = d.getStage()) ||
          void 0 === a
          ? void 0
          : a.findOne("#".concat(NODES_TRANSFORMER_ID));
      },
      [d]
    ),
    l = c.length,
    m = debounce(function () {
      k &&
        j({
          left: (k.x() + k.width() / 2) * k.scaleX(),
          top: (k.y() + k.height()) * k.scaleY(),
        });
    }, 0);
  if (
    (useEffect(
      function () {
        m();
      },
      [c, k, e]
    ),
    0 === l || !k)
  )
    return null;
  return React.createElement(
    StyledNodeControls,
    { className: "FIE_annotation-controls-overlay", left: i.left, top: i.top },
    c[0] !== WATERMARK_ANNOTATION_ID &&
      React.createElement(
        IconButton,
        {
          color: "link",
          size: "sm",
          onClick: function duplicateSelectedNodes() {
            f({ type: DUPLICATE_ANNOTATIONS, payload: { annotationsIds: c } });
          },
        },
        React.createElement(Duplicate, null)
      ),
    React.createElement(
      IconButton,
      {
        color: "link",
        size: "sm",
        onClick: function removeSelectedNodes() {
          f({ type: REMOVE_ANNOTATIONS, payload: { annotationsIds: c } });
        },
      },
      React.createElement(DeleteOutline, null)
    )
  );
};
export default NodeControls;