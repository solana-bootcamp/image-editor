function BlackAndWhite(a) {
  for (var b = a.data, c = b.length, d = 0; d < c; d += 4) {
    var e = (b[d] + b[d + 1] + b[d + 2]) / 3 > 100,
      f = e ? 255 : 0;
    (b[d] = f), (b[d + 1] = f), (b[d + 2] = f);
  }
}
export default BlackAndWhite;