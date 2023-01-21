var BaseFilters = {
  brightness: function brightness(a, b) {
    var c = b;
    return (
      (c = 1 < c ? 1 : c),
      (c = -1 > c ? -1 : c),
      (c = ~~(255 * c)),
      [a[0] + c, a[1] + c, a[2] + c]
    );
  },
  contrast: function contrast(a, b) {
    var c = b;
    c *= 255;
    var d = (259 * (c + 255)) / (255 * (259 - c));
    return [
      d * (a[0] - 128) + 128,
      d * (a[1] - 128) + 128,
      d * (a[2] - 128) + 128,
    ];
  },
  saturation: function saturation(a, c) {
    var d = c;
    d = -1 > d ? -1 : d;
    var e = a[0],
      f = a[1],
      g = a[2],
      b = 0.2989 * e + 0.587 * f + 0.114 * g;
    return [-b * d + e * (1 + d), -b * d + f * (1 + d), -b * d + g * (1 + d)];
  },
  grayscale: function grayscale(a) {
    var c = a[0],
      d = a[1],
      e = a[2];
    return [, , ,].fill(0.2126 * c + 0.7152 * d + 0.0722 * e);
  },
  sepia: function sepia(a, c) {
    var d = a[0],
      e = a[1],
      f = a[2];
    return [
      d * (1 - 0.607 * c) + 0.769 * e * c + 0.189 * f * c,
      0.349 * d * c + e * (1 - 0.314 * c) + 0.168 * f * c,
      0.272 * d * c + 0.534 * e * c + f * (1 - 0.869 * c),
    ];
  },
  adjustRGB: function adjustRGB(a, b) {
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
  },
  colorFilter: function colorFilter(a, c) {
    var d = a[0],
      e = a[1],
      f = a[2],
      b = c[3];
    return [d - (d - c[0]) * b, e - (e - c[1]) * b, f - (f - c[2]) * b];
  },
};
export default BaseFilters;