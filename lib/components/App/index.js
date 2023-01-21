import _typeof from "@babel/runtime/helpers/typeof";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
function ownKeys(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b &&
      (d = d.filter(function (b) {
        return Object.getOwnPropertyDescriptor(a, b).enumerable;
      })),
      c.push.apply(c, d);
  }
  return c;
}
function _objectSpread(a) {
  for (var b, c = 1; c < arguments.length; c++)
    (b = null == arguments[c] ? {} : arguments[c]),
      c % 2
        ? ownKeys(Object(b), !0).forEach(function (c) {
            _defineProperty(a, c, b[c]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
        : ownKeys(Object(b)).forEach(function (c) {
            Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c));
          });
  return a;
}
import React, { memo, useCallback, useEffect, useState, useRef } from "react";
import MainCanvas from "../MainCanvas";
import { ROOT_CONTAINER_CLASS_NAME } from "../../utils/constants";
import Topbar from "../Topbar";
import Tabs from "../Tabs";
import ToolsBar from "../ToolsBar";
import {
  HIDE_LOADER,
  SET_FEEDBACK,
  SET_ORIGINAL_IMAGE,
  SHOW_LOADER,
  UPDATE_STATE,
} from "../../actions";
import FeedbackPopup from "../FeedbackPopup";
import loadImage from "../../utils/loadImage";
import {
  usePhoneScreen,
  useResizeObserver,
  useStore,
  useTransformedImgData,
} from "../../hooks";
import Spinner from "../common/Spinner";
import { getBackendTranslations } from "../../utils/translator";
import cloudimageQueryToDesignState from "../../utils/cloudimageQueryToDesignState";
import finetunesStrsToClasses from "../../utils/finetunesStrsToClasses";
import filterStrToClass from "../../utils/filterStrToClass";
import isSameImage from "../../utils/isSameImage";
import {
  StyledAppWrapper,
  StyledMainContent,
  StyledCanvasAndTools,
  StyledPhoneToolsAndTabs,
} from "./App.styled";
var App = function () {
  var a = useStore(),
    b = a.config,
    c = a.isLoadingGlobally,
    d = a.haveNotSavedChanges,
    e = a.dispatch,
    f = a.originalImage,
    g = a.shownImageDimensions,
    h = a.t,
    i = a.feedback,
    j = void 0 === i ? {} : i,
    k = b.loadableDesignState,
    l = b.useCloudimage,
    m = b.cloudimage,
    n = b.source,
    o = b.avoidChangesNotSavedAlertOnLeave,
    p = b.useBackendTranslations,
    q = b.translations,
    r = b.language,
    s = b.defaultSavedImageName,
    t = b.observePluginContainerSize,
    u = b.showCanvasOnly,
    v = b.getCurrentImgDataFnRef,
    w = b.updateStateFnRef,
    x = useResizeObserver(),
    y = _slicedToArray(x, 2),
    z = y[0],
    A = y[1],
    B = useState({ width: void 0, height: void 0 }),
    C = _slicedToArray(B, 2),
    D = C[0],
    E = C[1],
    F = usePhoneScreen(),
    G = useRef(null),
    H = useRef(!0),
    I = useRef(!1),
    J = useRef(null),
    K = useRef(d),
    L = useTransformedImgData(),
    M = useCallback(function (a) {
      e({ type: SET_ORIGINAL_IMAGE, payload: { originalImage: a } });
    }, []),
    N = useCallback(function (a) {
      e({
        type: SET_FEEDBACK,
        payload: { feedback: { message: a.message || a, duration: 0 } },
      });
    }, []),
    O = function (a) {
      return new Promise(function (b) {
        var c = (null === a || void 0 === a ? void 0 : a.src) || a;
        if (J.current === c || (!c && f) || isSameImage(c, f))
          return void (J.current || b());
        var d = function () {
          (J.current = null), b();
        };
        (J.current = c),
          "string" == typeof a
            ? loadImage(a, s).then(M)["catch"](N)["finally"](d)
            : a instanceof HTMLImageElement
            ? (M(a), d())
            : (N(h("invalidImageError")), d());
      });
    },
    P = function (a) {
      K.current && (a.preventDefault(), (a.returnValue = ""));
    },
    Q = function () {
      var a =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : function () {
              return [];
            };
      return (
        e({ type: SHOW_LOADER }),
        Promise.all(a())["finally"](function () {
          e({ type: HIDE_LOADER });
        })
      );
    },
    R = function () {
      k &&
        0 < Object.keys(k).length &&
        e({
          type: UPDATE_STATE,
          payload: _objectSpread(
            _objectSpread({}, k),
            {},
            {
              finetunes: finetunesStrsToClasses(
                null === k || void 0 === k ? void 0 : k.finetunes
              ),
              filter: filterStrToClass(
                null === k || void 0 === k ? void 0 : k.filter
              ),
            }
          ),
        });
    };
  return (
    useEffect(
      function () {
        H.current ||
          !n ||
          isSameImage(n, f) ||
          ((I.current = !1),
          Q(function () {
            return [O(n)];
          }));
      },
      [n]
    ),
    useEffect(
      function () {
        if (!H.current) {
          var a = null === k || void 0 === k ? void 0 : k.imgSrc;
          a && !isSameImage(a, f)
            ? Q(function () {
                return [O(a).then(R)];
              })
            : R();
        }
      },
      [k]
    ),
    useEffect(
      function () {
        0 < Object.keys(g || {}).length &&
          !Object.keys(g).some(function (a) {
            return !g[a];
          }) &&
          f &&
          l &&
          null !== m &&
          void 0 !== m &&
          m.loadableQuery &&
          !I.current &&
          (e({
            type: UPDATE_STATE,
            payload: cloudimageQueryToDesignState(m.loadableQuery, g, f),
          }),
          (I.current = !0));
      },
      [g, f, l, m]
    ),
    useEffect(
      function () {
        var a = !1;
        return (
          t && G.current
            ? z(G.current.parentNode, function (a) {
                var b = a.width,
                  c = a.height;
                return E({ width: b, height: c });
              })
            : D.width && D.height && !a && E({ width: void 0, height: void 0 }),
          function () {
            t && G.current && A(G.current), (a = !0);
          }
        );
      },
      [t]
    ),
    useEffect(function () {
      return (
        Q(function initialRequestsPromisesFn() {
          return [
            O((null === k || void 0 === k ? void 0 : k.imgSrc) || n),
          ].concat(_toConsumableArray(p ? [getBackendTranslations(r, q)] : []));
        }),
        (H.current = !1),
        window && !o && window.addEventListener("beforeunload", P),
        function () {
          window && !o && window.removeEventListener("beforeunload", P);
        }
      );
    }, []),
    useEffect(
      function () {
        w &&
          "object" === _typeof(w) &&
          (w.current = function (a) {
            e({ type: UPDATE_STATE, payload: a });
          });
      },
      [w, e]
    ),
    useEffect(
      function () {
        v && "object" === _typeof(v) && (v.current = L);
      },
      [L]
    ),
    useEffect(
      function () {
        K.current = d;
      },
      [d]
    ),
    React.createElement(
      StyledAppWrapper,
      {
        className: ROOT_CONTAINER_CLASS_NAME,
        "data-phone": F,
        ref: G,
        $size: D,
      },
      c && React.createElement(Spinner, { label: h("loading") }),
      !u && React.createElement(Topbar, null),
      f &&
        0 !== j.duration &&
        React.createElement(
          StyledMainContent,
          { className: "FIE_main-container" },
          !F && !u && React.createElement(Tabs, null),
          React.createElement(
            StyledCanvasAndTools,
            { className: "FIE_editor-content" },
            React.createElement(MainCanvas, null),
            !u &&
              (F
                ? React.createElement(
                    StyledPhoneToolsAndTabs,
                    { className: "FIE_phone-tools-tabs-wrapper" },
                    React.createElement(ToolsBar, null),
                    React.createElement(Tabs, null)
                  )
                : React.createElement(ToolsBar, null))
          )
        ),
      React.createElement(FeedbackPopup, null)
    )
  );
};
export default memo(App);