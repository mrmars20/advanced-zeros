module.exports = function getZerosCount(number, base) {
  let j = 0;
  let i = 2;
  let count = 0;
  let f = 0;
  let p = [];
  let q = [];
  let c = [];
  do {
    if (base % i === 0) {
      base = base / i;
      count++;
      f = 1;
    }
    else {
      if (f === 1) {
        p[j] = i;
        q[j] = count;
        j++;
      }
      i++;
      count = 0;
      f = 0;
    }
  }
  while (i <= base);
  p[j] = i;
  q[j] = count;
  for (i = 0; i < p.length; i++) {
    let n = 1;
    c[i] = 0;
    while (n <= number) {
      n = n * p[i];
      c[i] = c[i] + Math.floor(number / n);
    }
  }
  let ans = c[0] / q[0];
  for (i = 0; i < q.length; i++) {
    ans = Math.min(ans, Math.floor(c[i] / q[i]));
  }
  return ans;
}