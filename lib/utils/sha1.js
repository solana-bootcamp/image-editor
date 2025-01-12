var rotateLeft = function (a, b) {
    return (a << b) | (a >>> (32 - b));
  },
  cvtHex = function (a) {
    var b,
      c,
      d = "";
    for (b = 7; 0 <= b; b--) (c = 15 & (a >>> (4 * b))), (d += c.toString(16));
    return d;
  },
  Utf8Encode = function (a) {
    for (var b, d = a.replace(/\r\n/g, "\n"), e = "", f = 0; f < d.length; f++)
      (b = d.charCodeAt(f)),
        128 > b
          ? (e += String.fromCharCode(b))
          : 127 < b && 2048 > b
          ? ((e += String.fromCharCode(192 | (b >> 6))),
            (e += String.fromCharCode(128 | (63 & b))))
          : ((e += String.fromCharCode(224 | (b >> 12))),
            (e += String.fromCharCode(128 | (63 & (b >> 6)))),
            (e += String.fromCharCode(128 | (63 & b))));
    return e;
  },
  sha1 = function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      k,
      l,
      m = a,
      n = Array(80),
      o = 1732584193,
      p = 4023233417,
      q = 2562383102,
      r = 271733878,
      s = 3285377520;
    m = Utf8Encode(m);
    var t = m.length,
      u = [];
    for (c = 0; c < t - 3; c += 4)
      (d =
        (m.charCodeAt(c) << 24) |
        (m.charCodeAt(c + 1) << 16) |
        (m.charCodeAt(c + 2) << 8) |
        m.charCodeAt(c + 3)),
        u.push(d);
    switch (t % 4) {
      case 0:
        c = 2147483648;
        break;
      case 1:
        c = 8388608 | (m.charCodeAt(t - 1) << 24);
        break;
      case 2:
        c = 32768 | ((m.charCodeAt(t - 2) << 24) | (m.charCodeAt(t - 1) << 16));
        break;
      case 3:
        c =
          128 |
          ((m.charCodeAt(t - 3) << 24) |
            (m.charCodeAt(t - 2) << 16) |
            (m.charCodeAt(t - 1) << 8));
        break;
      default:
    }
    for (u.push(c); 14 != u.length % 16; ) u.push(0);
    for (
      u.push(t >>> 29), u.push(4294967295 & (t << 3)), b = 0;
      b < u.length;
      b += 16
    ) {
      for (c = 0; 16 > c; c++) n[c] = u[b + c];
      for (c = 16; 79 >= c; c++)
        n[c] = rotateLeft(n[c - 3] ^ n[c - 8] ^ n[c - 14] ^ n[c - 16], 1);
      for (e = o, f = p, g = q, h = r, k = s, c = 0; 19 >= c; c++)
        (l =
          4294967295 &
          (rotateLeft(e, 5) + ((f & g) | (~f & h)) + k + n[c] + 1518500249)),
          (k = h),
          (h = g),
          (g = rotateLeft(f, 30)),
          (f = e),
          (e = l);
      for (c = 20; 39 >= c; c++)
        (l =
          4294967295 &
          (rotateLeft(e, 5) + (f ^ g ^ h) + k + n[c] + 1859775393)),
          (k = h),
          (h = g),
          (g = rotateLeft(f, 30)),
          (f = e),
          (e = l);
      for (c = 40; 59 >= c; c++)
        (l =
          4294967295 &
          (rotateLeft(e, 5) +
            ((f & g) | (f & h) | (g & h)) +
            k +
            n[c] +
            2400959708)),
          (k = h),
          (h = g),
          (g = rotateLeft(f, 30)),
          (f = e),
          (e = l);
      for (c = 60; 79 >= c; c++)
        (l =
          4294967295 &
          (rotateLeft(e, 5) + (f ^ g ^ h) + k + n[c] + 3395469782)),
          (k = h),
          (h = g),
          (g = rotateLeft(f, 30)),
          (f = e),
          (e = l);
      (o = 4294967295 & (o + e)),
        (p = 4294967295 & (p + f)),
        (q = 4294967295 & (q + g)),
        (r = 4294967295 & (r + h)),
        (s = 4294967295 & (s + k));
    }
    return (
      (l = cvtHex(o) + cvtHex(p) + cvtHex(q) + cvtHex(r) + cvtHex(s)),
      l.toLowerCase()
    );
  };
export default sha1;
