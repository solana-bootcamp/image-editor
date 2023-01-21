import React, { useMemo } from "react";
import { useStore } from "../../../hooks";
import { TOOLS_IDS, WATERMARK_ANNOTATION_ID } from "../../../utils/constants";
import Carousel from "../../common/Carousel";
import { StyledWatermarkGalleryItem } from "./Watermark.styled";
var WatermarksGallery = function (a) {
  var b = a.selectWatermark,
    c = a.style,
    d = useStore(),
    e = d.config,
    f = d.annotations,
    g = useMemo(
      function () {
        var a;
        return null === (a = (f[WATERMARK_ANNOTATION_ID] || {}).image) ||
          void 0 === a
          ? void 0
          : a.src;
      },
      [f[WATERMARK_ANNOTATION_ID]]
    ),
    h = function (a) {
      b(a.currentTarget.children[0]);
    },
    i = e[TOOLS_IDS.WATERMARK] || {},
    j = i.gallery,
    k = void 0 === j ? [] : j;
  return 0 === k.length
    ? null
    : React.createElement(
        Carousel,
        { className: "FIE_watermark-gallery", style: c },
        k.map(function (a) {
          return React.createElement(
            StyledWatermarkGalleryItem,
            {
              className: "FIE_watermark-selected-item",
              onClick: h,
              key: a,
              "aria-selected": a === g,
            },
            React.createElement("img", {
              src: a,
              alt: a,
              crossOrigin: "Anonymous",
              draggable: !1,
            })
          );
        })
      );
};
WatermarksGallery.defaultProps = { style: void 0 };
export default WatermarksGallery;