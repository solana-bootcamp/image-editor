import extractNameFromUrl from "./extractNameFromUrl";
var loadImage = function (a, b) {
  return new Promise(function (c, d) {
    var e = new Image();
    (e.src = a),
      (e.crossOrigin = "Anonymous"),
      (e.name = null !== b && void 0 !== b ? b : extractNameFromUrl(a)),
      (e.onload = function () {
        c(e);
      }),
      (e.onerror = function () {
        d(
          new Error(
            "Error in loading the image with the provided url: ".concat(a)
          )
        );
      });
  });
};
export default loadImage;