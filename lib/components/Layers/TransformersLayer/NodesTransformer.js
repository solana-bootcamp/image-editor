import React, { useMemo } from "react";
import { Transformer } from "react-konva";
import {
  NODES_TRANSFORMER_ID,
  POINTER_ICONS,
  TOOLS_IDS,
} from "../../../utils/constants";
import { useStore } from "../../../hooks";
import {
  CHANGE_POINTER_ICON,
  ENABLE_TEXT_CONTENT_EDIT,
} from "../../../actions";
var NodesTransformer = function () {
  var a,
    b = useStore(),
    c = b.selectionsIds,
    d = void 0 === c ? [] : c,
    e = b.theme,
    f = b.designLayer,
    g = b.dispatch,
    h = b.config.useCloudimage,
    i = useMemo(
      function () {
        return null !== f && void 0 !== f && f.findOne
          ? d
              .map(function (a) {
                return f.findOne("#".concat(a));
              })
              .filter(Boolean)
          : [];
      },
      [d]
    ),
    j = function () {
      1 === i.length &&
        i[0].name() === TOOLS_IDS.TEXT &&
        g({
          type: ENABLE_TEXT_CONTENT_EDIT,
          payload: { textIdOfEditableContent: i[0].id() },
        });
    };
  return React.createElement(Transformer, {
    id: NODES_TRANSFORMER_ID,
    centeredScaling: !1,
    rotationSnaps: [0, 45, 90, 135, 180, 225, 270, 315],
    nodes: i,
    rotateAnchorOffset: 30,
    anchorSize: 14,
    anchorCornerRadius: 7,
    padding:
      1 === i.length
        ? null !== (a = i[0].attrs.padding) && void 0 !== a
          ? a
          : 1
        : 1,
    ignoreStroke: !1,
    anchorStroke: e.palette["accent-primary"],
    anchorFill: e.palette["access-primary"],
    anchorStrokeWidth: 2,
    borderStroke: e.palette["accent-primary"],
    borderStrokeWidth: 2,
    borderDash: [4],
    rotateEnabled: !h,
    onMouseOver: function changePointerIconToMove() {
      g({
        type: CHANGE_POINTER_ICON,
        payload: { pointerCssIcon: POINTER_ICONS.MOVE },
      });
    },
    onMouseLeave: function changePointerIconToDraw() {
      g({
        type: CHANGE_POINTER_ICON,
        payload: { pointerCssIcon: POINTER_ICONS.DRAW },
      });
    },
    onDblClick: j,
    onDblTap: j,
    flipEnabled: !0,
    shouldOverdrawWholeArea: !0,
  });
};
export default NodesTransformer;