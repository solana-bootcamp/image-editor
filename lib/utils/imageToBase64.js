var imageToBase64 = function (a) {
  if (a instanceof HTMLImageElement) {
    var b = document.createElement("canvas"),
      c = b.getContext("2d");
    return (
      (b.width = a.width),
      (b.height = a.height),
      c.drawImage(a, 0, 0),
      b.toDataURL()
    );
  }
  return "";
};
export default imageToBase64;
