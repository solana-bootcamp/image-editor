var SPACING_PERCENTAGE = 0.05,
  DEFAULT_SPACING = 12,
  getProperImageToCanvasSpacing = function () {
    return (
      2 *
      (window
        ? Math.min(window.innerHeight, window.innerWidth) * SPACING_PERCENTAGE
        : DEFAULT_SPACING)
    );
  };
export default getProperImageToCanvasSpacing;
