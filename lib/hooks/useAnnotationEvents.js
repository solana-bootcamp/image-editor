import { useMemo, useCallback } from "react";
import { SET_ANNOTATION, SELECT_ANNOTATION, SELECT_TOOL } from "../actions";
import {
  TOOLS_IDS,
  TABS_IDS,
  WATERMARK_ANNOTATION_ID,
} from "../utils/constants";
import useStore from "./useStore";
var useAnnotationEvents = function () {
  var a = useStore(),
    b = a.tabId,
    c = a.dispatch,
    d = useMemo(
      function () {
        return b !== TABS_IDS.ANNOTATE && b !== TABS_IDS.WATERMARK;
      },
      [b]
    ),
    f = useCallback(function (a) {
      c({ type: SET_ANNOTATION, payload: a });
    }, []),
    g = useCallback(function (a) {
      f({ id: a.target.id(), x: a.target.x(), y: a.target.y() });
    }, []),
    h = useCallback(function (a) {
      var b = {
        id: a.target.id(),
        rotation: a.target.rotation(),
        x: a.target.x(),
        y: a.target.y(),
      };
      return (
        a.target.name() === TOOLS_IDS.TEXT
          ? ((b.width = a.target.width() * a.target.scaleX()),
            (b.height = a.target.height() * a.target.scaleY()),
            (b.scaleX = 1),
            (b.scaleY = 1))
          : ((b.scaleX = a.target.scaleX()), (b.scaleY = a.target.scaleY())),
        b
      );
    }, []),
    i = useCallback(function (a) {
      f(h(a));
    }, []),
    j = useCallback(function (a) {
      a.target.name() === TOOLS_IDS.TEXT && a.target.setAttrs(h(a));
    }),
    k = useCallback(function (a) {
      if (a.target.id() !== WATERMARK_ANNOTATION_ID) {
        var b = a.evt.ctrlKey || a.evt.shiftKey || a.evt.metaKey;
        c({
          type: SELECT_ANNOTATION,
          payload: { annotationId: a.target.id(), multiple: b },
        }),
          c({
            type: SELECT_TOOL,
            payload: { toolId: a.target.name(), keepSelections: b },
          });
      }
    }, []);
  return useMemo(
    function () {
      return d
        ? {}
        : {
            onTransform: j,
            onTransformEnd: i,
            onDragEnd: g,
            onClick: k,
            onTap: k,
          };
    },
    [d]
  );
};
export default useAnnotationEvents;