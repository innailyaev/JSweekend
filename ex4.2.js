//Ex4.2 - Tribonacci -

const tribonacci = n => {
  let triboArr = [];
  triboArr[0] = 0;
  triboArr[1] = 0;
  triboArr[2] = 1;

  for (i = 3; i < n; i++) {
    triboArr[i] = triboArr[i - 3] + triboArr[i - 2] + triboArr[i - 1];
  }

  return triboArr;
};

console.log (tribonacci (10));
